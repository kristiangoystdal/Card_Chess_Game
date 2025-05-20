import{g as Ce,p as le,j as P,P as Ir,m as br,e as xe,Q as bn,R as Ii,t as Ie,b as qe,c as g,S as bi,T as Er,U as Sr,W as Tr,X as Nr,Y as Ei,Z as We,$ as Za,O as el,a0 as Ar,a1 as Rr,f as Si,a2 as kr,a3 as tl,a4 as nl,u as Pr,i as Ti,r as $e,a5 as il,a6 as Dr,a7 as It,a8 as sl,a9 as rl,aa as ol,ab as al,ac as ll,ad as cl,ae as ul,F as Zt,k as en,af as hl,ag as dl,ah as bt,ai as tn,aj as fl,ak as gs,al as _l,am as pl,an as gl,ao as ml,ap as vl,aq as ms,ar as ei,as as yl,a as Cl,at as wl,au as Il,d as bl,av as El,aw as Sl,l as Tl,ax as Nl,ay as Al}from"./index-Dy1NA2zH.js";const Rl=()=>{};var vs={};/**
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
 */const xr={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const f=function(t,e){if(!t)throw ht(e)},ht=function(t){return new Error("Firebase Database ("+xr.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Or=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},kl=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ni={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(d=64)),i.push(n[h],n[u],n[d],n[_])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Or(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kl(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||u==null)throw new Pl;const d=r<<2|a>>4;if(i.push(d),c!==64){const _=a<<4&240|c>>2;if(i.push(_),u!==64){const p=c<<6&192|u;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Pl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Mr=function(t){const e=Or(t);return Ni.encodeByteArray(e,!0)},sn=function(t){return Mr(t).replace(/\./g,"")},ti=function(t){try{return Ni.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Dl(t){return Lr(void 0,t)}function Lr(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!xl(n)||(t[n]=Lr(t[n],e[n]));return t}function xl(t){return t!=="__proto__"}/**
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
 */function Ol(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ml=()=>Ol().__FIREBASE_DEFAULTS__,Ll=()=>{if(typeof process>"u"||typeof vs>"u")return;const t=vs.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Fl=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ti(t[1]);return e&&JSON.parse(e)},Fr=()=>{try{return Rl()||Ml()||Ll()||Fl()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Bl=t=>{var e,n;return(n=(e=Fr())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Vl=t=>{const e=Bl(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Br=()=>{var t;return(t=Fr())===null||t===void 0?void 0:t.config};/**
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
 */class ue{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Wl(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[sn(JSON.stringify(n)),sn(JSON.stringify(o)),""].join(".")}/**
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
 */function $l(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($l())}function Ul(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Hl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jl(){return xr.NODE_ADMIN===!0}function Wr(){try{return typeof indexedDB=="object"}catch{return!1}}function $r(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function Gl(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const zl="FirebaseError";class Ke extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=zl,Object.setPrototypeOf(this,Ke.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,En.prototype.create)}}class En{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?ql(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ke(s,a,i)}}function ql(t,e){return t.replace(Kl,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Kl=/\{\$([^}]+)}/g;/**
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
 */function kt(t){return JSON.parse(t)}function B(t){return JSON.stringify(t)}/**
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
 */const Ur=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=kt(ti(r[0])||""),n=kt(ti(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},Yl=function(t){const e=Ur(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ql=function(t){const e=Ur(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function de(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function st(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ni(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function rn(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function Pt(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(ys(r)&&ys(o)){if(!Pt(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function ys(t){return t!==null&&typeof t=="object"}/**
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
 */function Xl(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class Jl{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)i[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const d=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):u<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);const d=(s<<5|s>>>27)+c+l+h+i[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function rt(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Zl=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,f(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Sn=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const ec=1e3,tc=2,nc=4*60*60*1e3,ic=.5;function Cs(t,e=ec,n=tc){const i=e*Math.pow(n,t),s=Math.round(ic*i*(Math.random()-.5)*2);return Math.min(nc,i+s)}/**
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
 */function fe(t){return t&&t._delegate?t._delegate:t}class me{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Me="[DEFAULT]";/**
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
 */class sc{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new ue;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oc(e))try{this.getOrInitializeService({instanceIdentifier:Me})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Me){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Me){return this.instances.has(e)}getOptions(e=Me){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:rc(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Me){return this.component?this.component.multipleInstances?e:Me:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rc(t){return t===Me?void 0:t}function oc(t){return t.instantiationMode==="EAGER"}/**
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
 */class ac{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sc(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var R;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(R||(R={}));const lc={debug:R.DEBUG,verbose:R.VERBOSE,info:R.INFO,warn:R.WARN,error:R.ERROR,silent:R.SILENT},cc=R.INFO,uc={[R.DEBUG]:"log",[R.VERBOSE]:"log",[R.INFO]:"info",[R.WARN]:"warn",[R.ERROR]:"error"},hc=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=uc[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ai{constructor(e){this.name=e,this._logLevel=cc,this._logHandler=hc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in R))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,R.DEBUG,...e),this._logHandler(this,R.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,R.VERBOSE,...e),this._logHandler(this,R.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,R.INFO,...e),this._logHandler(this,R.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,R.WARN,...e),this._logHandler(this,R.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,R.ERROR,...e),this._logHandler(this,R.ERROR,...e)}}const dc=(t,e)=>e.some(n=>t instanceof n);let ws,Is;function fc(){return ws||(ws=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _c(){return Is||(Is=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hr=new WeakMap,ii=new WeakMap,jr=new WeakMap,Wn=new WeakMap,Ri=new WeakMap;function pc(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Ee(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Hr.set(n,t)}).catch(()=>{}),Ri.set(e,t),e}function gc(t){if(ii.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ii.set(t,e)}let si={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ii.get(t);if(e==="objectStoreNames")return t.objectStoreNames||jr.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ee(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mc(t){si=t(si)}function vc(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call($n(this),e,...n);return jr.set(i,e.sort?e.sort():[e]),Ee(i)}:_c().includes(t)?function(...e){return t.apply($n(this),e),Ee(Hr.get(this))}:function(...e){return Ee(t.apply($n(this),e))}}function yc(t){return typeof t=="function"?vc(t):(t instanceof IDBTransaction&&gc(t),dc(t,fc())?new Proxy(t,si):t)}function Ee(t){if(t instanceof IDBRequest)return pc(t);if(Wn.has(t))return Wn.get(t);const e=yc(t);return e!==t&&(Wn.set(t,e),Ri.set(e,t)),e}const $n=t=>Ri.get(t);function Gr(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=Ee(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Ee(o.result),l.oldVersion,l.newVersion,Ee(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Cc=["get","getKey","getAll","getAllKeys","count"],wc=["put","add","delete","clear"],Un=new Map;function bs(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Un.get(e))return Un.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=wc.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Cc.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Un.set(e,r),r}mc(t=>({...t,get:(e,n,i)=>bs(e,n)||t.get(e,n,i),has:(e,n)=>!!bs(e,n)||t.has(e,n)}));/**
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
 */class Ic{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bc(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function bc(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ri="@firebase/app",Es="0.11.5";/**
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
 */const ve=new Ai("@firebase/app"),Ec="@firebase/app-compat",Sc="@firebase/analytics-compat",Tc="@firebase/analytics",Nc="@firebase/app-check-compat",Ac="@firebase/app-check",Rc="@firebase/auth",kc="@firebase/auth-compat",Pc="@firebase/database",Dc="@firebase/data-connect",xc="@firebase/database-compat",Oc="@firebase/functions",Mc="@firebase/functions-compat",Lc="@firebase/installations",Fc="@firebase/installations-compat",Bc="@firebase/messaging",Vc="@firebase/messaging-compat",Wc="@firebase/performance",$c="@firebase/performance-compat",Uc="@firebase/remote-config",Hc="@firebase/remote-config-compat",jc="@firebase/storage",Gc="@firebase/storage-compat",zc="@firebase/firestore",qc="@firebase/vertexai",Kc="@firebase/firestore-compat",Yc="firebase",Qc="11.6.1";/**
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
 */const oi="[DEFAULT]",Xc={[ri]:"fire-core",[Ec]:"fire-core-compat",[Tc]:"fire-analytics",[Sc]:"fire-analytics-compat",[Ac]:"fire-app-check",[Nc]:"fire-app-check-compat",[Rc]:"fire-auth",[kc]:"fire-auth-compat",[Pc]:"fire-rtdb",[Dc]:"fire-data-connect",[xc]:"fire-rtdb-compat",[Oc]:"fire-fn",[Mc]:"fire-fn-compat",[Lc]:"fire-iid",[Fc]:"fire-iid-compat",[Bc]:"fire-fcm",[Vc]:"fire-fcm-compat",[Wc]:"fire-perf",[$c]:"fire-perf-compat",[Uc]:"fire-rc",[Hc]:"fire-rc-compat",[jc]:"fire-gcs",[Gc]:"fire-gcs-compat",[zc]:"fire-fst",[Kc]:"fire-fst-compat",[qc]:"fire-vertex","fire-js":"fire-js",[Yc]:"fire-js-all"};/**
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
 */const on=new Map,Jc=new Map,ai=new Map;function Ss(t,e){try{t.container.addComponent(e)}catch(n){ve.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ae(t){const e=t.name;if(ai.has(e))return ve.debug(`There were multiple attempts to register component ${e}.`),!1;ai.set(e,t);for(const n of on.values())Ss(n,t);for(const n of Jc.values())Ss(n,t);return!0}function Ut(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Zc(t){return t==null?!1:t.settings!==void 0}/**
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
 */const eu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Se=new En("app","Firebase",eu);/**
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
 */class tu{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new me("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Se.create("app-deleted",{appName:this._name})}}/**
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
 */const nu=Qc;function zr(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:oi,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Se.create("bad-app-name",{appName:String(s)});if(n||(n=Br()),!n)throw Se.create("no-options");const r=on.get(s);if(r){if(Pt(n,r.options)&&Pt(i,r.config))return r;throw Se.create("duplicate-app",{appName:s})}const o=new ac(s);for(const l of ai.values())o.addComponent(l);const a=new tu(n,i,o);return on.set(s,a),a}function qr(t=oi){const e=on.get(t);if(!e&&t===oi&&Br())return zr();if(!e)throw Se.create("no-app",{appName:t});return e}function he(t,e,n){var i;let s=(i=Xc[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ve.warn(a.join(" "));return}Ae(new me(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const iu="firebase-heartbeat-database",su=1,Dt="firebase-heartbeat-store";let Hn=null;function Kr(){return Hn||(Hn=Gr(iu,su,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Dt)}catch(n){console.warn(n)}}}}).catch(t=>{throw Se.create("idb-open",{originalErrorMessage:t.message})})),Hn}async function ru(t){try{const n=(await Kr()).transaction(Dt),i=await n.objectStore(Dt).get(Yr(t));return await n.done,i}catch(e){if(e instanceof Ke)ve.warn(e.message);else{const n=Se.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ve.warn(n.message)}}}async function Ts(t,e){try{const i=(await Kr()).transaction(Dt,"readwrite");await i.objectStore(Dt).put(e,Yr(t)),await i.done}catch(n){if(n instanceof Ke)ve.warn(n.message);else{const i=Se.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ve.warn(i.message)}}}function Yr(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ou=1024,au=30;class lu{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uu(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ns();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>au){const o=hu(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){ve.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ns(),{heartbeatsToSend:i,unsentEntries:s}=cu(this._heartbeatsCache.heartbeats),r=sn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return ve.warn(n),""}}}function Ns(){return new Date().toISOString().substring(0,10)}function cu(t,e=ou){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),As(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),As(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class uu{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wr()?$r().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ru(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ts(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ts(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function As(t){return sn(JSON.stringify({version:2,heartbeats:t})).length}function hu(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
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
 */function du(t){Ae(new me("platform-logger",e=>new Ic(e),"PRIVATE")),Ae(new me("heartbeat",e=>new lu(e),"PRIVATE")),he(ri,Es,t),he(ri,Es,"esm2017"),he("fire-js","")}du("");var fu="firebase",_u="11.6.1";/**
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
 */he(fu,_u,"app");const Qr="@firebase/installations",ki="0.6.13";/**
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
 */const Xr=1e4,Jr=`w:${ki}`,Zr="FIS_v2",pu="https://firebaseinstallations.googleapis.com/v1",gu=60*60*1e3,mu="installations",vu="Installations";/**
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
 */const yu={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ue=new En(mu,vu,yu);function eo(t){return t instanceof Ke&&t.code.includes("request-failed")}/**
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
 */function to({projectId:t}){return`${pu}/projects/${t}/installations`}function no(t){return{token:t.token,requestStatus:2,expiresIn:wu(t.expiresIn),creationTime:Date.now()}}async function io(t,e){const i=(await e.json()).error;return Ue.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function so({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Cu(t,{refreshToken:e}){const n=so(t);return n.append("Authorization",Iu(e)),n}async function ro(t){const e=await t();return e.status>=500&&e.status<600?t():e}function wu(t){return Number(t.replace("s","000"))}function Iu(t){return`${Zr} ${t}`}/**
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
 */async function bu({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=to(t),s=so(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:Zr,appId:t.appId,sdkVersion:Jr},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await ro(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:no(c.authToken)}}else throw await io("Create Installation",l)}/**
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
 */function oo(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Eu(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Su=/^[cdef][\w-]{21}$/,li="";function Tu(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Nu(t);return Su.test(n)?n:li}catch{return li}}function Nu(t){return Eu(t).substr(0,22)}/**
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
 */function Tn(t){return`${t.appName}!${t.appId}`}/**
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
 */const ao=new Map;function lo(t,e){const n=Tn(t);co(n,e),Au(n,e)}function co(t,e){const n=ao.get(t);if(n)for(const i of n)i(e)}function Au(t,e){const n=Ru();n&&n.postMessage({key:t,fid:e}),ku()}let Fe=null;function Ru(){return!Fe&&"BroadcastChannel"in self&&(Fe=new BroadcastChannel("[Firebase] FID Change"),Fe.onmessage=t=>{co(t.data.key,t.data.fid)}),Fe}function ku(){ao.size===0&&Fe&&(Fe.close(),Fe=null)}/**
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
 */const Pu="firebase-installations-database",Du=1,He="firebase-installations-store";let jn=null;function Pi(){return jn||(jn=Gr(Pu,Du,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(He)}}})),jn}async function an(t,e){const n=Tn(t),s=(await Pi()).transaction(He,"readwrite"),r=s.objectStore(He),o=await r.get(n);return await r.put(e,n),await s.done,(!o||o.fid!==e.fid)&&lo(t,e.fid),e}async function uo(t){const e=Tn(t),i=(await Pi()).transaction(He,"readwrite");await i.objectStore(He).delete(e),await i.done}async function Nn(t,e){const n=Tn(t),s=(await Pi()).transaction(He,"readwrite"),r=s.objectStore(He),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&lo(t,a.fid),a}/**
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
 */async function Di(t){let e;const n=await Nn(t.appConfig,i=>{const s=xu(i),r=Ou(t,s);return e=r.registrationPromise,r.installationEntry});return n.fid===li?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function xu(t){const e=t||{fid:Tu(),registrationStatus:0};return ho(e)}function Ou(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ue.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Mu(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Lu(t)}:{installationEntry:e}}async function Mu(t,e){try{const n=await bu(t,e);return an(t.appConfig,n)}catch(n){throw eo(n)&&n.customData.serverCode===409?await uo(t.appConfig):await an(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Lu(t){let e=await Rs(t.appConfig);for(;e.registrationStatus===1;)await oo(100),e=await Rs(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Di(t);return i||n}return e}function Rs(t){return Nn(t,e=>{if(!e)throw Ue.create("installation-not-found");return ho(e)})}function ho(t){return Fu(t)?{fid:t.fid,registrationStatus:0}:t}function Fu(t){return t.registrationStatus===1&&t.registrationTime+Xr<Date.now()}/**
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
 */async function Bu({appConfig:t,heartbeatServiceProvider:e},n){const i=Vu(t,n),s=Cu(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:Jr,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await ro(()=>fetch(i,a));if(l.ok){const c=await l.json();return no(c)}else throw await io("Generate Auth Token",l)}function Vu(t,{fid:e}){return`${to(t)}/${e}/authTokens:generate`}/**
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
 */async function xi(t,e=!1){let n;const i=await Nn(t.appConfig,r=>{if(!fo(r))throw Ue.create("not-registered");const o=r.authToken;if(!e&&Uu(o))return r;if(o.requestStatus===1)return n=Wu(t,e),r;{if(!navigator.onLine)throw Ue.create("app-offline");const a=ju(r);return n=$u(t,a),a}});return n?await n:i.authToken}async function Wu(t,e){let n=await ks(t.appConfig);for(;n.authToken.requestStatus===1;)await oo(100),n=await ks(t.appConfig);const i=n.authToken;return i.requestStatus===0?xi(t,e):i}function ks(t){return Nn(t,e=>{if(!fo(e))throw Ue.create("not-registered");const n=e.authToken;return Gu(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function $u(t,e){try{const n=await Bu(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await an(t.appConfig,i),n}catch(n){if(eo(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await uo(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await an(t.appConfig,i)}throw n}}function fo(t){return t!==void 0&&t.registrationStatus===2}function Uu(t){return t.requestStatus===2&&!Hu(t)}function Hu(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+gu}function ju(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Gu(t){return t.requestStatus===1&&t.requestTime+Xr<Date.now()}/**
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
 */async function zu(t){const e=t,{installationEntry:n,registrationPromise:i}=await Di(e);return i?i.catch(console.error):xi(e).catch(console.error),n.fid}/**
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
 */async function qu(t,e=!1){const n=t;return await Ku(n),(await xi(n,e)).token}async function Ku(t){const{registrationPromise:e}=await Di(t);e&&await e}/**
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
 */function Yu(t){if(!t||!t.options)throw Gn("App Configuration");if(!t.name)throw Gn("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Gn(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Gn(t){return Ue.create("missing-app-config-values",{valueName:t})}/**
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
 */const _o="installations",Qu="installations-internal",Xu=t=>{const e=t.getProvider("app").getImmediate(),n=Yu(e),i=Ut(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Ju=t=>{const e=t.getProvider("app").getImmediate(),n=Ut(e,_o).getImmediate();return{getId:()=>zu(n),getToken:s=>qu(n,s)}};function Zu(){Ae(new me(_o,Xu,"PUBLIC")),Ae(new me(Qu,Ju,"PRIVATE"))}Zu();he(Qr,ki);he(Qr,ki,"esm2017");/**
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
 */const ln="analytics",eh="firebase_id",th="origin",nh=60*1e3,ih="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Oi="https://www.googletagmanager.com/gtag/js";/**
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
 */const K=new Ai("@firebase/analytics");/**
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
 */const sh={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Z=new En("analytics","Analytics",sh);/**
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
 */function rh(t){if(!t.startsWith(Oi)){const e=Z.create("invalid-gtag-resource",{gtagURL:t});return K.warn(e.message),""}return t}function po(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function oh(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function ah(t,e){const n=oh("firebase-js-sdk-policy",{createScriptURL:rh}),i=document.createElement("script"),s=`${Oi}?l=${t}&id=${e}`;i.src=n?n==null?void 0:n.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function lh(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function ch(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const l=(await po(n)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){K.error(a)}t("config",s,r)}async function uh(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await po(n);for(const l of o){const c=a.find(u=>u.measurementId===l),h=c&&e[c.appId];if(h)r.push(h);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(r){K.error(r)}}function hh(t,e,n,i){async function s(r,...o){try{if(r==="event"){const[a,l]=o;await uh(t,e,n,a,l)}else if(r==="config"){const[a,l]=o;await ch(t,e,n,i,a,l)}else if(r==="consent"){const[a,l]=o;t("consent",a,l)}else if(r==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(r==="set"){const[a]=o;t("set",a)}else t(r,...o)}catch(a){K.error(a)}}return s}function dh(t,e,n,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=hh(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}function fh(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Oi)&&n.src.includes(t))return n;return null}/**
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
 */const _h=30,ph=1e3;class gh{constructor(e={},n=ph){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const go=new gh;function mh(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function vh(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:mh(i)},r=ih.replace("{app-id}",n),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Z.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function yh(t,e=go,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw Z.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw Z.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Ih;return setTimeout(async()=>{a.abort()},nh),mo({appId:i,apiKey:s,measurementId:r},o,a,e)}async function mo(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=go){var r;const{appId:o,measurementId:a}=t;try{await Ch(i,e)}catch(l){if(a)return K.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await vh(t);return s.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!wh(c)){if(s.deleteThrottleMetadata(o),a)return K.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const h=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?Cs(n,s.intervalMillis,_h):Cs(n,s.intervalMillis),u={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return s.setThrottleMetadata(o,u),K.debug(`Calling attemptFetch again in ${h} millis`),mo(t,u,i,s)}}function Ch(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(r),i(Z.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function wh(t){if(!(t instanceof Ke)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Ih{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function bh(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});t("event",n,o)}}/**
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
 */async function Eh(){if(Wr())try{await $r()}catch(t){return K.warn(Z.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return K.warn(Z.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Sh(t,e,n,i,s,r,o){var a;const l=yh(t);l.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&K.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>K.error(_)),e.push(l);const c=Eh().then(_=>{if(_)return i.getId()}),[h,u]=await Promise.all([l,c]);fh(r)||ah(r,h.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[th]="firebase",d.update=!0,u!=null&&(d[eh]=u),s("config",h.measurementId,d),h.measurementId}/**
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
 */class Th{constructor(e){this.app=e}_delete(){return delete Et[this.app.options.appId],Promise.resolve()}}let Et={},Ps=[];const Ds={};let zn="dataLayer",Nh="gtag",xs,vo,Os=!1;function Ah(){const t=[];if(Ul()&&t.push("This is a browser extension environment."),Gl()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=Z.create("invalid-analytics-context",{errorInfo:e});K.warn(n.message)}}function Rh(t,e,n){Ah();const i=t.options.appId;if(!i)throw Z.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)K.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Z.create("no-api-key");if(Et[i]!=null)throw Z.create("already-exists",{id:i});if(!Os){lh(zn);const{wrappedGtag:r,gtagCore:o}=dh(Et,Ps,Ds,zn,Nh);vo=r,xs=o,Os=!0}return Et[i]=Sh(t,Ps,Ds,e,xs,zn,n),new Th(t)}function kh(t=qr()){t=fe(t);const e=Ut(t,ln);return e.isInitialized()?e.getImmediate():Ph(t)}function Ph(t,e={}){const n=Ut(t,ln);if(n.isInitialized()){const s=n.getImmediate();if(Pt(e,n.getOptions()))return s;throw Z.create("already-initialized")}return n.initialize({options:e})}function Dh(t,e,n,i){t=fe(t),bh(vo,Et[t.app.options.appId],e,n,i).catch(s=>K.error(s))}const Ms="@firebase/analytics",Ls="0.10.12";function xh(){Ae(new me(ln,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Rh(i,s,n)},"PUBLIC")),Ae(new me("analytics-internal",t,"PRIVATE")),he(Ms,Ls),he(Ms,Ls,"esm2017");function t(e){try{const n=e.getProvider(ln).getImmediate();return{logEvent:(i,s,r)=>Dh(n,i,s,r)}}catch(n){throw Z.create("interop-component-reg-failed",{reason:n})}}}xh();var Fs={};const Bs="@firebase/database",Vs="1.0.14";/**
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
 */let yo="";function Oh(t){yo=t}/**
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
 */class Mh{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),B(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:kt(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Lh{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return de(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Co=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Mh(e)}}catch{}return new Lh},Be=Co("localStorage"),Fh=Co("sessionStorage");/**
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
 */const nt=new Ai("@firebase/database"),Bh=function(){let t=1;return function(){return t++}}(),wo=function(t){const e=Zl(t),n=new Jl;n.update(e);const i=n.digest();return Ni.encodeByteArray(i)},Ht=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Ht.apply(null,i):typeof i=="object"?e+=B(i):e+=i,e+=" "}return e};let St=null,Ws=!0;const Vh=function(t,e){f(!0,"Can't turn on custom loggers persistently."),nt.logLevel=R.VERBOSE,St=nt.log.bind(nt)},$=function(...t){if(Ws===!0&&(Ws=!1,St===null&&Fh.get("logging_enabled")===!0&&Vh()),St){const e=Ht.apply(null,t);St(e)}},jt=function(t){return function(...e){$(t,...e)}},ci=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ht(...t);nt.error(e)},ye=function(...t){const e=`FIREBASE FATAL ERROR: ${Ht(...t)}`;throw nt.error(e),new Error(e)},z=function(...t){const e="FIREBASE WARNING: "+Ht(...t);nt.warn(e)},Wh=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&z("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},An=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},$h=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ot="[MIN_NAME]",je="[MAX_NAME]",Ye=function(t,e){if(t===e)return 0;if(t===ot||e===je)return-1;if(e===ot||t===je)return 1;{const n=$s(t),i=$s(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},Uh=function(t,e){return t===e?0:t<e?-1:1},vt=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+B(e))},Mi=function(t){if(typeof t!="object"||t===null)return B(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=B(e[i]),n+=":",n+=Mi(t[e[i]]);return n+="}",n},Io=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function U(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const bo=function(t){f(!An(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const h=c.join("");let u="";for(l=0;l<64;l+=8){let d=parseInt(h.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},Hh=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},jh=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Gh(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const zh=new RegExp("^-?(0*)\\d{1,10}$"),qh=-2147483648,Kh=2147483647,$s=function(t){if(zh.test(t)){const e=Number(t);if(e>=qh&&e<=Kh)return e}return null},dt=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw z("Exception was thrown by user callback.",n),e},Math.floor(0))}},Yh=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Tt=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Qh{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Zc(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){z(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Xh{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?($("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',z(e)}}class nn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}nn.OWNER="owner";/**
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
 */const Li="5",Eo="v",So="s",To="r",No="f",Ao=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ro="ls",ko="p",ui="ac",Po="websocket",Do="long_polling";/**
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
 */class xo{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Be.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Be.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Jh(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Oo(t,e,n){f(typeof e=="string","typeof type must == string"),f(typeof n=="object","typeof params must == object");let i;if(e===Po)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Do)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Jh(t)&&(n.ns=t.namespace);const s=[];return U(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class Zh{constructor(){this.counters_={}}incrementCounter(e,n=1){de(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Dl(this.counters_)}}/**
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
 */const qn={},Kn={};function Fi(t){const e=t.toString();return qn[e]||(qn[e]=new Zh),qn[e]}function ed(t,e){const n=t.toString();return Kn[n]||(Kn[n]=e()),Kn[n]}/**
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
 */class td{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&dt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Us="start",nd="close",id="pLPCommand",sd="pRTLPCB",Mo="id",Lo="pw",Fo="ser",rd="cb",od="seg",ad="ts",ld="d",cd="dframe",Bo=1870,Vo=30,ud=Bo-Vo,hd=25e3,dd=3e4;class tt{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=jt(e),this.stats_=Fi(n),this.urlFn=l=>(this.appCheckToken&&(l[ui]=this.appCheckToken),Oo(n,Do,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new td(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(dd)),$h(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Bi((...r)=>{const[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Us)this.id=a,this.password=l;else if(o===nd)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Us]="t",i[Fo]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[rd]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Eo]=Li,this.transportSessionId&&(i[So]=this.transportSessionId),this.lastSessionId&&(i[Ro]=this.lastSessionId),this.applicationId&&(i[ko]=this.applicationId),this.appCheckToken&&(i[ui]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ao.test(location.hostname)&&(i[To]=No);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){tt.forceAllow_=!0}static forceDisallow(){tt.forceDisallow_=!0}static isAvailable(){return tt.forceAllow_?!0:!tt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Hh()&&!jh()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=B(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Mr(n),s=Io(i,ud);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[cd]="t",i[Mo]=e,i[Lo]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=B(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Bi{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Bh(),window[id+this.uniqueCallbackIdentifier]=e,window[sd+this.uniqueCallbackIdentifier]=n,this.myIFrame=Bi.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){$("frame writing exception"),a.stack&&$(a.stack),$(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||$("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Mo]=this.myID,e[Lo]=this.myPW,e[Fo]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Vo+i.length<=Bo;){const o=this.pendingSegs.shift();i=i+"&"+od+s+"="+o.seg+"&"+ad+s+"="+o.ts+"&"+ld+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(hd)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{$("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const fd=16384,_d=45e3;let cn=null;typeof MozWebSocket<"u"?cn=MozWebSocket:typeof WebSocket<"u"&&(cn=WebSocket);class re{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=jt(this.connId),this.stats_=Fi(n),this.connURL=re.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[Eo]=Li,typeof location<"u"&&location.hostname&&Ao.test(location.hostname)&&(o[To]=No),n&&(o[So]=n),i&&(o[Ro]=i),s&&(o[ui]=s),r&&(o[ko]=r),Oo(e,Po,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Be.set("previous_websocket_failure",!0);try{let i;jl(),this.mySock=new cn(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){re.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&cn!==null&&!re.forceDisallow_}static previouslyFailed(){return Be.isInMemoryStorage||Be.get("previous_websocket_failure")===!0}markConnectionHealthy(){Be.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=kt(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(f(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=B(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Io(n,fd);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(_d))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}re.responsesRequiredToBeHealthy=2;re.healthyTimeout=3e4;/**
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
 */class xt{static get ALL_TRANSPORTS(){return[tt,re]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=re&&re.isAvailable();let i=n&&!re.previouslyFailed();if(e.webSocketOnly&&(n||z("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[re];else{const s=this.transports_=[];for(const r of xt.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);xt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}xt.globalTransportInitialized_=!1;/**
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
 */const pd=6e4,gd=5e3,md=10*1024,vd=100*1024,Yn="t",Hs="d",yd="s",js="r",Cd="e",Gs="o",zs="a",qs="n",Ks="p",wd="h";class Id{constructor(e,n,i,s,r,o,a,l,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=jt("c:"+this.id+":"),this.transportManager_=new xt(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Tt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>vd?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>md?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Yn in e){const n=e[Yn];n===zs?this.upgradeIfSecondaryHealthy_():n===js?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Gs&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=vt("t",e),i=vt("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ks,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:zs,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:qs,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=vt("t",e),i=vt("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=vt(Yn,e);if(Hs in e){const i=e[Hs];if(n===wd){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===qs){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===yd?this.onConnectionShutdown_(i):n===js?this.onReset_(i):n===Cd?ci("Server Error: "+i):n===Gs?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ci("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Li!==i&&z("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Tt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(pd))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Tt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(gd))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ks,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Be.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Wo{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class $o{constructor(e){this.allowedEvents_=e,this.listeners_={},f(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){f(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class un extends $o{static getInstance(){return new un}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Vr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return f(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Ys=32,Qs=768;class E{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function b(){return new E("")}function C(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Re(t){return t.pieces_.length-t.pieceNum_}function T(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new E(t.pieces_,e)}function Vi(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function bd(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ot(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Uo(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new E(e,0)}function x(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof E)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new E(n,0)}function w(t){return t.pieceNum_>=t.pieces_.length}function G(t,e){const n=C(t),i=C(e);if(n===null)return e;if(n===i)return G(T(t),T(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ed(t,e){const n=Ot(t,0),i=Ot(e,0);for(let s=0;s<n.length&&s<i.length;s++){const r=Ye(n[s],i[s]);if(r!==0)return r}return n.length===i.length?0:n.length<i.length?-1:1}function Wi(t,e){if(Re(t)!==Re(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function ie(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Re(t)>Re(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class Sd{constructor(e,n){this.errorPrefix_=n,this.parts_=Ot(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Sn(this.parts_[i]);Ho(this)}}function Td(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Sn(e),Ho(t)}function Nd(t){const e=t.parts_.pop();t.byteLength_-=Sn(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ho(t){if(t.byteLength_>Qs)throw new Error(t.errorPrefix_+"has a key path longer than "+Qs+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ys)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ys+") or object contains a cycle "+Le(t))}function Le(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class $i extends $o{static getInstance(){return new $i}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return f(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const yt=1e3,Ad=60*5*1e3,Xs=30*1e3,Rd=1.3,kd=3e4,Pd="server_kill",Js=3;class ge extends Wo{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ge.nextPersistentConnectionId_++,this.log_=jt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=yt,this.maxReconnectDelay_=Ad,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");$i.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&un.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(B(r)),f(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new ue,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),f(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;ge.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&de(e,"w")){const i=st(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();z(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ql(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Xs)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Yl(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+B(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ci("Unrecognized action received from server: "+B(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){f(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=yt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=yt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>kd&&(this.reconnectDelay_=yt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Rd)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ge.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(u){f(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?$("getToken() completed but was canceled"):($("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new Id(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,_=>{z(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Pd)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&z(u),l())}}}interrupt(e){$("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){$("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ni(this.interruptReasons_)&&(this.reconnectDelay_=yt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>Mi(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new E(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){$("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Js&&(this.reconnectDelay_=Xs,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){$("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Js&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+yo.replace(/\./g,"-")]=1,Vr()?e["framework.cordova"]=1:Hl()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=un.getInstance().currentlyOnline();return ni(this.interruptReasons_)&&e}}ge.nextPersistentConnectionId_=0;ge.nextConnectionId_=0;/**
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
 */class I{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new I(e,n)}}/**
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
 */class Rn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new I(ot,e),s=new I(ot,n);return this.compare(i,s)!==0}minPost(){return I.MIN}}/**
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
 */let Qt;class jo extends Rn{static get __EMPTY_NODE(){return Qt}static set __EMPTY_NODE(e){Qt=e}compare(e,n){return Ye(e.name,n.name)}isDefinedOn(e){throw ht("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return I.MIN}maxPost(){return new I(je,Qt)}makePost(e,n){return f(typeof e=="string","KeyIndex indexValue must always be a string."),new I(e,Qt)}toString(){return".key"}}const it=new jo;/**
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
 */class Xt{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class W{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??W.RED,this.left=s??q.EMPTY_NODE,this.right=r??q.EMPTY_NODE}copy(e,n,i,s,r){return new W(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return q.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return q.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,W.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,W.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}W.RED=!0;W.BLACK=!1;class Dd{copy(e,n,i,s,r){return this}insert(e,n,i){return new W(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class q{constructor(e,n=q.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new q(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,W.BLACK,null,null))}remove(e){return new q(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,W.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Xt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Xt(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Xt(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Xt(this.root_,null,this.comparator_,!0,e)}}q.EMPTY_NODE=new Dd;/**
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
 */function xd(t,e){return Ye(t.name,e.name)}function Ui(t,e){return Ye(t,e)}/**
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
 */let hi;function Od(t){hi=t}const Go=function(t){return typeof t=="number"?"number:"+bo(t):"string:"+t},zo=function(t){if(t.isLeafNode()){const e=t.val();f(typeof e=="string"||typeof e=="number"||typeof e=="object"&&de(e,".sv"),"Priority must be a string or number.")}else f(t===hi||t.isEmpty(),"priority of unexpected type.");f(t===hi||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Zs;class V{static set __childrenNodeConstructor(e){Zs=e}static get __childrenNodeConstructor(){return Zs}constructor(e,n=V.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,f(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),zo(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new V(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:V.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return w(e)?this:C(e)===".priority"?this.priorityNode_:V.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:V.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=C(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(f(i!==".priority"||Re(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,V.__childrenNodeConstructor.EMPTY_NODE.updateChild(T(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Go(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=bo(this.value_):e+=this.value_,this.lazyHash_=wo(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===V.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof V.__childrenNodeConstructor?-1:(f(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=V.VALUE_TYPE_ORDER.indexOf(n),r=V.VALUE_TYPE_ORDER.indexOf(i);return f(s>=0,"Unknown leaf type: "+n),f(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}V.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let qo,Ko;function Md(t){qo=t}function Ld(t){Ko=t}class Fd extends Rn{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?Ye(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return I.MIN}maxPost(){return new I(je,new V("[PRIORITY-POST]",Ko))}makePost(e,n){const i=qo(e);return new I(n,new V("[PRIORITY-POST]",i))}toString(){return".priority"}}const O=new Fd;/**
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
 */const Bd=Math.log(2);class Vd{constructor(e){const n=r=>parseInt(Math.log(r)/Bd,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const hn=function(t,e,n,i){t.sort(e);const s=function(l,c){const h=c-l;let u,d;if(h===0)return null;if(h===1)return u=t[l],d=n?n(u):u,new W(d,u.node,W.BLACK,null,null);{const _=parseInt(h/2,10)+l,p=s(l,_),v=s(_+1,c);return u=t[_],d=n?n(u):u,new W(d,u.node,W.BLACK,p,v)}},r=function(l){let c=null,h=null,u=t.length;const d=function(p,v){const S=u-p,L=u;u-=p;const N=s(S+1,L),y=t[S],D=n?n(y):y;_(new W(D,y.node,v,null,N))},_=function(p){c?(c.left=p,c=p):(h=p,c=p)};for(let p=0;p<l.count;++p){const v=l.nextBitIsOne(),S=Math.pow(2,l.count-(p+1));v?d(S,W.BLACK):(d(S,W.BLACK),d(S,W.RED))}return h},o=new Vd(t.length),a=r(o);return new q(i||e,a)};/**
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
 */let Qn;const et={};class pe{static get Default(){return f(et&&O,"ChildrenNode.ts has not been loaded"),Qn=Qn||new pe({".priority":et},{".priority":O}),Qn}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=st(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof q?n:null}hasIndex(e){return de(this.indexSet_,e.toString())}addIndex(e,n){f(e!==it,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(I.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=hn(i,e.getCompare()):a=et;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new pe(h,c)}addToIndexes(e,n){const i=rn(this.indexes_,(s,r)=>{const o=st(this.indexSet_,r);if(f(o,"Missing index implementation for "+r),s===et)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(I.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),hn(a,o.getCompare())}else return et;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new I(e.name,a))),l.insert(e,e.node)}});return new pe(i,this.indexSet_)}removeFromIndexes(e,n){const i=rn(this.indexes_,s=>{if(s===et)return s;{const r=n.get(e.name);return r?s.remove(new I(e.name,r)):s}});return new pe(i,this.indexSet_)}}/**
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
 */let Ct;class m{static get EMPTY_NODE(){return Ct||(Ct=new m(new q(Ui),null,pe.Default))}constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&zo(this.priorityNode_),this.children_.isEmpty()&&f(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ct}updatePriority(e){return this.children_.isEmpty()?this:new m(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ct:n}}getChild(e){const n=C(e);return n===null?this:this.getImmediateChild(n).getChild(T(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(f(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new I(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Ct:this.priorityNode_;return new m(s,o,r)}}updateChild(e,n){const i=C(e);if(i===null)return n;{f(C(e)!==".priority"||Re(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(T(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(O,(o,a)=>{n[o]=a.val(e),i++,r&&m.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Go(this.getPriority().val())+":"),this.forEachChild(O,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":wo(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new I(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new I(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new I(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,I.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,I.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Gt?-1:0}withIndex(e){if(e===it||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new m(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===it||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(O),s=n.getIterator(O);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===it?null:this.indexMap_.get(e.toString())}}m.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Wd extends m{constructor(){super(new q(Ui),m.EMPTY_NODE,pe.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return m.EMPTY_NODE}isEmpty(){return!1}}const Gt=new Wd;Object.defineProperties(I,{MIN:{value:new I(ot,m.EMPTY_NODE)},MAX:{value:new I(je,Gt)}});jo.__EMPTY_NODE=m.EMPTY_NODE;V.__childrenNodeConstructor=m;Od(Gt);Ld(Gt);/**
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
 */const $d=!0;function M(t,e=null){if(t===null)return m.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),f(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new V(n,M(e))}if(!(t instanceof Array)&&$d){const n=[];let i=!1;if(U(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=M(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new I(o,l)))}}),n.length===0)return m.EMPTY_NODE;const r=hn(n,xd,o=>o.name,Ui);if(i){const o=hn(n,O.getCompare());return new m(r,M(e),new pe({".priority":o},{".priority":O}))}else return new m(r,M(e),pe.Default)}else{let n=m.EMPTY_NODE;return U(t,(i,s)=>{if(de(t,i)&&i.substring(0,1)!=="."){const r=M(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(M(e))}}Md(M);/**
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
 */class Ud extends Rn{constructor(e){super(),this.indexPath_=e,f(!w(e)&&C(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?Ye(e.name,n.name):r}makePost(e,n){const i=M(e),s=m.EMPTY_NODE.updateChild(this.indexPath_,i);return new I(n,s)}maxPost(){const e=m.EMPTY_NODE.updateChild(this.indexPath_,Gt);return new I(je,e)}toString(){return Ot(this.indexPath_,0).join("/")}}/**
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
 */class Hd extends Rn{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Ye(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return I.MIN}maxPost(){return I.MAX}makePost(e,n){const i=M(e);return new I(n,i)}toString(){return".value"}}const jd=new Hd;/**
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
 */function Yo(t){return{type:"value",snapshotNode:t}}function at(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Mt(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Lt(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Gd(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Hi{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){f(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(Mt(n,a)):f(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(at(n,i)):o.trackChildChange(Lt(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(O,(s,r)=>{n.hasChild(s)||i.trackChildChange(Mt(s,r))}),n.isLeafNode()||n.forEachChild(O,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Lt(s,r,o))}else i.trackChildChange(at(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?m.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ft{constructor(e){this.indexedFilter_=new Hi(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ft.getStartPost_(e),this.endPost_=Ft.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,s,r,o){return this.matches(new I(n,i))||(i=m.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=m.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(m.EMPTY_NODE);const r=this;return n.forEachChild(O,(o,a)=>{r.matches(new I(o,a))||(s=s.updateImmediateChild(o,m.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class zd{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Ft(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new I(n,i))||(i=m.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=m.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=m.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(m.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,m.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,_)=>u(_,d)}else o=this.index_.getCompare();const a=e;f(a.numChildren()===this.limit_,"");const l=new I(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let d=s.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,l);if(h&&!i.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(Lt(n,i,u)),a.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(Mt(n,u));const v=a.updateImmediateChild(n,m.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(at(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return i.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Mt(c.name,c.node)),r.trackChildChange(at(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,m.EMPTY_NODE)):e}}/**
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
 */class ji{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=O}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return f(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return f(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ot}hasEnd(){return this.endSet_}getIndexEndValue(){return f(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return f(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:je}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return f(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===O}copy(){const e=new ji;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function qd(t){return t.loadsAllData()?new Hi(t.getIndex()):t.hasLimit()?new zd(t):new Ft(t)}function er(t){const e={};if(t.isDefault())return e;let n;if(t.index_===O?n="$priority":t.index_===jd?n="$value":t.index_===it?n="$key":(f(t.index_ instanceof Ud,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=B(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=B(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+B(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=B(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+B(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function tr(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==O&&(e.i=t.index_.toString()),e}/**
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
 */class dn extends Wo{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(f(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=jt("p:rest:"),this.listens_={}}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=dn.getListenId_(e,i),a={};this.listens_[o]=a;const l=er(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,i),st(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,n){const i=dn.getListenId_(e,n);delete this.listens_[i]}get(e){const n=er(e._queryParams),i=e._path.toString(),s=new ue;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Xl(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=kt(a.responseText)}catch{z("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&z("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Kd{constructor(){this.rootNode_=m.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function fn(){return{value:null,children:new Map}}function ft(t,e,n){if(w(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=C(e);t.children.has(i)||t.children.set(i,fn());const s=t.children.get(i);e=T(e),ft(s,e,n)}}function di(t,e){if(w(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(O,(i,s)=>{ft(t,new E(i),s)}),di(t,e)}}else if(t.children.size>0){const n=C(e);return e=T(e),t.children.has(n)&&di(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function fi(t,e,n){t.value!==null?n(e,t.value):Yd(t,(i,s)=>{const r=new E(e.toString()+"/"+i);fi(s,r,n)})}function Yd(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class Qd{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&U(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
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
 */const nr=10*1e3,Xd=30*1e3,Jd=5*60*1e3;class Zd{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Qd(e);const i=nr+(Xd-nr)*Math.random();Tt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;U(e,(s,r)=>{r>0&&de(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Tt(this.reportStats_.bind(this),Math.floor(Math.random()*2*Jd))}}/**
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
 */var oe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(oe||(oe={}));function Gi(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zi(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function qi(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class _n{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=oe.ACK_USER_WRITE,this.source=Gi()}operationForChild(e){if(w(this.path)){if(this.affectedTree.value!=null)return f(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new E(e));return new _n(b(),n,this.revert)}}else return f(C(this.path)===e,"operationForChild called for unrelated child."),new _n(T(this.path),this.affectedTree,this.revert)}}/**
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
 */class Bt{constructor(e,n){this.source=e,this.path=n,this.type=oe.LISTEN_COMPLETE}operationForChild(e){return w(this.path)?new Bt(this.source,b()):new Bt(this.source,T(this.path))}}/**
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
 */class Ge{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=oe.OVERWRITE}operationForChild(e){return w(this.path)?new Ge(this.source,b(),this.snap.getImmediateChild(e)):new Ge(this.source,T(this.path),this.snap)}}/**
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
 */class lt{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=oe.MERGE}operationForChild(e){if(w(this.path)){const n=this.children.subtree(new E(e));return n.isEmpty()?null:n.value?new Ge(this.source,b(),n.value):new lt(this.source,b(),n)}else return f(C(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new lt(this.source,T(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ke{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(w(e))return this.isFullyInitialized()&&!this.filtered_;const n=C(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class ef{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function tf(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Gd(o.childName,o.snapshotNode))}),wt(t,s,"child_removed",e,i,n),wt(t,s,"child_added",e,i,n),wt(t,s,"child_moved",r,i,n),wt(t,s,"child_changed",e,i,n),wt(t,s,"value",e,i,n),s}function wt(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>sf(t,a,l)),o.forEach(a=>{const l=nf(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function nf(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function sf(t,e,n){if(e.childName==null||n.childName==null)throw ht("Should only compare child_ events.");const i=new I(e.childName,e.snapshotNode),s=new I(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
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
 */function kn(t,e){return{eventCache:t,serverCache:e}}function Nt(t,e,n,i){return kn(new ke(e,n,i),t.serverCache)}function Qo(t,e,n,i){return kn(t.eventCache,new ke(e,n,i))}function pn(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ze(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Xn;const rf=()=>(Xn||(Xn=new q(Uh)),Xn);class A{static fromObject(e){let n=new A(null);return U(e,(i,s)=>{n=n.set(new E(i),s)}),n}constructor(e,n=rf()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:b(),value:this.value};if(w(e))return null;{const i=C(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(T(e),n);return r!=null?{path:x(new E(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(w(e))return this;{const n=C(e),i=this.children.get(n);return i!==null?i.subtree(T(e)):new A(null)}}set(e,n){if(w(e))return new A(n,this.children);{const i=C(e),r=(this.children.get(i)||new A(null)).set(T(e),n),o=this.children.insert(i,r);return new A(this.value,o)}}remove(e){if(w(e))return this.children.isEmpty()?new A(null):new A(null,this.children);{const n=C(e),i=this.children.get(n);if(i){const s=i.remove(T(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new A(null):new A(this.value,r)}else return this}}get(e){if(w(e))return this.value;{const n=C(e),i=this.children.get(n);return i?i.get(T(e)):null}}setTree(e,n){if(w(e))return n;{const i=C(e),r=(this.children.get(i)||new A(null)).setTree(T(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new A(this.value,o)}}fold(e){return this.fold_(b(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(x(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,b(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(w(e))return null;{const r=C(e),o=this.children.get(r);return o?o.findOnPath_(T(e),x(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,b(),n)}foreachOnPath_(e,n,i){if(w(e))return this;{this.value&&i(n,this.value);const s=C(e),r=this.children.get(s);return r?r.foreachOnPath_(T(e),x(n,s),i):new A(null)}}foreach(e){this.foreach_(b(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(x(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class ae{constructor(e){this.writeTree_=e}static empty(){return new ae(new A(null))}}function At(t,e,n){if(w(e))return new ae(new A(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=G(s,e);return r=r.updateChild(o,n),new ae(t.writeTree_.set(s,r))}else{const s=new A(n),r=t.writeTree_.setTree(e,s);return new ae(r)}}}function _i(t,e,n){let i=t;return U(n,(s,r)=>{i=At(i,x(e,s),r)}),i}function ir(t,e){if(w(e))return ae.empty();{const n=t.writeTree_.setTree(e,new A(null));return new ae(n)}}function pi(t,e){return Qe(t,e)!=null}function Qe(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(G(n.path,e)):null}function sr(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(O,(i,s)=>{e.push(new I(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new I(i,s.value))}),e}function Te(t,e){if(w(e))return t;{const n=Qe(t,e);return n!=null?new ae(new A(n)):new ae(t.writeTree_.subtree(e))}}function gi(t){return t.writeTree_.isEmpty()}function ct(t,e){return Xo(b(),t.writeTree_,e)}function Xo(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(f(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=Xo(x(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(x(t,".priority"),i)),n}}/**
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
 */function Pn(t,e){return ta(e,t)}function of(t,e,n,i,s){f(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=At(t.visibleWrites,e,n)),t.lastWriteId=i}function af(t,e,n,i){f(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=_i(t.visibleWrites,e,n),t.lastWriteId=i}function lf(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function cf(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);f(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&uf(a,i.path)?s=!1:ie(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return hf(t),!0;if(i.snap)t.visibleWrites=ir(t.visibleWrites,i.path);else{const a=i.children;U(a,l=>{t.visibleWrites=ir(t.visibleWrites,x(i.path,l))})}return!0}else return!1}function uf(t,e){if(t.snap)return ie(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ie(x(t.path,n),e))return!0;return!1}function hf(t){t.visibleWrites=Jo(t.allWrites,df,b()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function df(t){return t.visible}function Jo(t,e,n){let i=ae.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)ie(n,o)?(a=G(n,o),i=At(i,a,r.snap)):ie(o,n)&&(a=G(o,n),i=At(i,b(),r.snap.getChild(a)));else if(r.children){if(ie(n,o))a=G(n,o),i=_i(i,a,r.children);else if(ie(o,n))if(a=G(o,n),w(a))i=_i(i,b(),r.children);else{const l=st(r.children,C(a));if(l){const c=l.getChild(T(a));i=At(i,b(),c)}}}else throw ht("WriteRecord should have .snap or .children")}}return i}function Zo(t,e,n,i,s){if(!i&&!s){const r=Qe(t.visibleWrites,e);if(r!=null)return r;{const o=Te(t.visibleWrites,e);if(gi(o))return n;if(n==null&&!pi(o,b()))return null;{const a=n||m.EMPTY_NODE;return ct(o,a)}}}else{const r=Te(t.visibleWrites,e);if(!s&&gi(r))return n;if(!s&&n==null&&!pi(r,b()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(ie(c.path,e)||ie(e,c.path))},a=Jo(t.allWrites,o,e),l=n||m.EMPTY_NODE;return ct(a,l)}}}function ff(t,e,n){let i=m.EMPTY_NODE;const s=Qe(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(O,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Te(t.visibleWrites,e);return n.forEachChild(O,(o,a)=>{const l=ct(Te(r,new E(o)),a);i=i.updateImmediateChild(o,l)}),sr(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Te(t.visibleWrites,e);return sr(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function _f(t,e,n,i,s){f(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=x(e,n);if(pi(t.visibleWrites,r))return null;{const o=Te(t.visibleWrites,r);return gi(o)?s.getChild(n):ct(o,s.getChild(n))}}function pf(t,e,n,i){const s=x(e,n),r=Qe(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Te(t.visibleWrites,s);return ct(o,i.getNode().getImmediateChild(n))}else return null}function gf(t,e){return Qe(t.visibleWrites,e)}function mf(t,e,n,i,s,r,o){let a;const l=Te(t.visibleWrites,e),c=Qe(l,b());if(c!=null)a=c;else if(n!=null)a=ct(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let _=d.getNext();for(;_&&h.length<s;)u(_,i)!==0&&h.push(_),_=d.getNext();return h}else return[]}function vf(){return{visibleWrites:ae.empty(),allWrites:[],lastWriteId:-1}}function gn(t,e,n,i){return Zo(t.writeTree,t.treePath,e,n,i)}function Ki(t,e){return ff(t.writeTree,t.treePath,e)}function rr(t,e,n,i){return _f(t.writeTree,t.treePath,e,n,i)}function mn(t,e){return gf(t.writeTree,x(t.treePath,e))}function yf(t,e,n,i,s,r){return mf(t.writeTree,t.treePath,e,n,i,s,r)}function Yi(t,e,n){return pf(t.writeTree,t.treePath,e,n)}function ea(t,e){return ta(x(t.treePath,e),t.writeTree)}function ta(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Cf{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;f(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),f(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Lt(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,Mt(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,at(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Lt(i,e.snapshotNode,s.oldSnap));else throw ht("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class wf{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const na=new wf;class Qi{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new ke(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Yi(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ze(this.viewCache_),r=yf(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function If(t){return{filter:t}}function bf(t,e){f(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),f(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Ef(t,e,n,i,s){const r=new Cf;let o,a;if(n.type===oe.OVERWRITE){const c=n;c.source.fromUser?o=mi(t,e,c.path,c.snap,i,s,r):(f(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!w(c.path),o=vn(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===oe.MERGE){const c=n;c.source.fromUser?o=Tf(t,e,c.path,c.children,i,s,r):(f(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=vi(t,e,c.path,c.children,i,s,a,r))}else if(n.type===oe.ACK_USER_WRITE){const c=n;c.revert?o=Rf(t,e,c.path,i,s,r):o=Nf(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===oe.LISTEN_COMPLETE)o=Af(t,e,n.path,i,r);else throw ht("Unknown operation type: "+n.type);const l=r.getChanges();return Sf(e,o,l),{viewCache:o,changes:l}}function Sf(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=pn(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Yo(pn(e)))}}function ia(t,e,n,i,s,r){const o=e.eventCache;if(mn(i,n)!=null)return e;{let a,l;if(w(n))if(f(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ze(e),h=c instanceof m?c:m.EMPTY_NODE,u=Ki(i,h);a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=gn(i,ze(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=C(n);if(c===".priority"){f(Re(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const u=rr(i,n,h,l);u!=null?a=t.filter.updatePriority(h,u):a=o.getNode()}else{const h=T(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=rr(i,n,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=Yi(i,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,h,s,r):a=o.getNode()}}return Nt(e,a,o.isFullyInitialized()||w(n),t.filter.filtersNodes())}}function vn(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(w(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),_,null)}else{const _=C(n);if(!l.isCompleteForPath(n)&&Re(n)>1)return e;const p=T(n),S=l.getNode().getImmediateChild(_).updateChild(p,i);_===".priority"?c=h.updatePriority(l.getNode(),S):c=h.updateChild(l.getNode(),_,S,p,na,null)}const u=Qo(e,c,l.isFullyInitialized()||w(n),h.filtersNodes()),d=new Qi(s,u,r);return ia(t,u,n,s,d,a)}function mi(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const h=new Qi(s,e,r);if(w(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Nt(e,c,!0,t.filter.filtersNodes());else{const u=C(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=Nt(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=T(n),_=a.getNode().getImmediateChild(u);let p;if(w(d))p=i;else{const v=h.getCompleteChild(u);v!=null?Vi(d)===".priority"&&v.getChild(Uo(d)).isEmpty()?p=v:p=v.updateChild(d,i):p=m.EMPTY_NODE}if(_.equals(p))l=e;else{const v=t.filter.updateChild(a.getNode(),u,p,d,h,o);l=Nt(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function or(t,e){return t.eventCache.isCompleteForChild(e)}function Tf(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const h=x(n,l);or(e,C(h))&&(a=mi(t,a,h,c,s,r,o))}),i.foreach((l,c)=>{const h=x(n,l);or(e,C(h))||(a=mi(t,a,h,c,s,r,o))}),a}function ar(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function vi(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;w(n)?c=i:c=new A(null).setTree(n,i);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const _=e.serverCache.getNode().getImmediateChild(u),p=ar(t,_,d);l=vn(t,l,new E(u),p,s,r,o,a)}}),c.children.inorderTraversal((u,d)=>{const _=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!_){const p=e.serverCache.getNode().getImmediateChild(u),v=ar(t,p,d);l=vn(t,l,new E(u),v,s,r,o,a)}}),l}function Nf(t,e,n,i,s,r,o){if(mn(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(w(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return vn(t,e,n,l.getNode().getChild(n),s,r,a,o);if(w(n)){let c=new A(null);return l.getNode().forEachChild(it,(h,u)=>{c=c.set(new E(h),u)}),vi(t,e,n,c,s,r,a,o)}else return e}else{let c=new A(null);return i.foreach((h,u)=>{const d=x(n,h);l.isCompleteForPath(d)&&(c=c.set(h,l.getNode().getChild(d)))}),vi(t,e,n,c,s,r,a,o)}}function Af(t,e,n,i,s){const r=e.serverCache,o=Qo(e,r.getNode(),r.isFullyInitialized()||w(n),r.isFiltered());return ia(t,o,n,i,na,s)}function Rf(t,e,n,i,s,r){let o;if(mn(i,n)!=null)return e;{const a=new Qi(i,e,s),l=e.eventCache.getNode();let c;if(w(n)||C(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=gn(i,ze(e));else{const u=e.serverCache.getNode();f(u instanceof m,"serverChildren would be complete if leaf node"),h=Ki(i,u)}h=h,c=t.filter.updateFullNode(l,h,r)}else{const h=C(n);let u=Yi(i,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?c=t.filter.updateChild(l,h,u,T(n),a,r):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(l,h,m.EMPTY_NODE,T(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=gn(i,ze(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||mn(i,b())!=null,Nt(e,c,o,t.filter.filtersNodes())}}/**
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
 */class kf{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Hi(i.getIndex()),r=qd(i);this.processor_=If(r);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(m.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(m.EMPTY_NODE,a.getNode(),null),h=new ke(l,o.isFullyInitialized(),s.filtersNodes()),u=new ke(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=kn(u,h),this.eventGenerator_=new ef(this.query_)}get query(){return this.query_}}function Pf(t){return t.viewCache_.serverCache.getNode()}function Df(t){return pn(t.viewCache_)}function xf(t,e){const n=ze(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!w(e)&&!n.getImmediateChild(C(e)).isEmpty())?n.getChild(e):null}function lr(t){return t.eventRegistrations_.length===0}function Of(t,e){t.eventRegistrations_.push(e)}function cr(t,e,n){const i=[];if(n){f(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function ur(t,e,n,i){e.type===oe.MERGE&&e.source.queryId!==null&&(f(ze(t.viewCache_),"We should always have a full cache before handling merges"),f(pn(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=Ef(t.processor_,s,e,n,i);return bf(t.processor_,r.viewCache),f(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,sa(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Mf(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(O,(r,o)=>{i.push(at(r,o))}),n.isFullyInitialized()&&i.push(Yo(n.getNode())),sa(t,i,n.getNode(),e)}function sa(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return tf(t.eventGenerator_,e,n,s)}/**
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
 */let yn;class ra{constructor(){this.views=new Map}}function Lf(t){f(!yn,"__referenceConstructor has already been defined"),yn=t}function Ff(){return f(yn,"Reference.ts has not been loaded"),yn}function Bf(t){return t.views.size===0}function Xi(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return f(r!=null,"SyncTree gave us an op for an invalid query."),ur(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(ur(o,e,n,i));return r}}function oa(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=gn(n,s?i:null),l=!1;a?l=!0:i instanceof m?(a=Ki(n,i),l=!1):(a=m.EMPTY_NODE,l=!1);const c=kn(new ke(a,l,!1),new ke(i,s,!1));return new kf(e,c)}return o}function Vf(t,e,n,i,s,r){const o=oa(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Of(o,n),Mf(o,n)}function Wf(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const a=Pe(t);if(s==="default")for(const[l,c]of t.views.entries())o=o.concat(cr(c,n,i)),lr(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(s);l&&(o=o.concat(cr(l,n,i)),lr(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Pe(t)&&r.push(new(Ff())(e._repo,e._path)),{removed:r,events:o}}function aa(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ne(t,e){let n=null;for(const i of t.views.values())n=n||xf(i,e);return n}function la(t,e){if(e._queryParams.loadsAllData())return Dn(t);{const i=e._queryIdentifier;return t.views.get(i)}}function ca(t,e){return la(t,e)!=null}function Pe(t){return Dn(t)!=null}function Dn(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Cn;function $f(t){f(!Cn,"__referenceConstructor has already been defined"),Cn=t}function Uf(){return f(Cn,"Reference.ts has not been loaded"),Cn}let Hf=1;class hr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new A(null),this.pendingWriteTree_=vf(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ua(t,e,n,i,s){return of(t.pendingWriteTree_,e,n,i,s),s?_t(t,new Ge(Gi(),e,n)):[]}function jf(t,e,n,i){af(t.pendingWriteTree_,e,n,i);const s=A.fromObject(n);return _t(t,new lt(Gi(),e,s))}function be(t,e,n=!1){const i=lf(t.pendingWriteTree_,e);if(cf(t.pendingWriteTree_,e)){let r=new A(null);return i.snap!=null?r=r.set(b(),!0):U(i.children,o=>{r=r.set(new E(o),!0)}),_t(t,new _n(i.path,r,n))}else return[]}function zt(t,e,n){return _t(t,new Ge(zi(),e,n))}function Gf(t,e,n){const i=A.fromObject(n);return _t(t,new lt(zi(),e,i))}function zf(t,e){return _t(t,new Bt(zi(),e))}function qf(t,e,n){const i=Zi(t,n);if(i){const s=es(i),r=s.path,o=s.queryId,a=G(r,e),l=new Bt(qi(o),a);return ts(t,r,l)}else return[]}function wn(t,e,n,i,s=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||ca(o,e))){const l=Wf(o,e,n,i);Bf(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const h=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(r,(d,_)=>Pe(_));if(h&&!u){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=Qf(d);for(let p=0;p<_.length;++p){const v=_[p],S=v.query,L=_a(t,v);t.listenProvider_.startListening(Rt(S),Vt(t,S),L.hashFn,L.onComplete)}}}!u&&c.length>0&&!i&&(h?t.listenProvider_.stopListening(Rt(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(xn(d));t.listenProvider_.stopListening(Rt(d),_)}))}Xf(t,c)}return a}function ha(t,e,n,i){const s=Zi(t,i);if(s!=null){const r=es(s),o=r.path,a=r.queryId,l=G(o,e),c=new Ge(qi(a),l,n);return ts(t,o,c)}else return[]}function Kf(t,e,n,i){const s=Zi(t,i);if(s){const r=es(s),o=r.path,a=r.queryId,l=G(o,e),c=A.fromObject(n),h=new lt(qi(a),l,c);return ts(t,o,h)}else return[]}function yi(t,e,n,i=!1){const s=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(s,(d,_)=>{const p=G(d,s);r=r||Ne(_,p),o=o||Pe(_)});let a=t.syncPointTree_.get(s);a?(o=o||Pe(a),r=r||Ne(a,b())):(a=new ra,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=m.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((_,p)=>{const v=Ne(p,b());v&&(r=r.updateImmediateChild(_,v))}));const c=ca(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=xn(e);f(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=Jf();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const h=Pn(t.pendingWriteTree_,s);let u=Vf(a,e,n,h,r,l);if(!c&&!o&&!i){const d=la(a,e);u=u.concat(Zf(t,e,d))}return u}function Ji(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=G(o,e),c=Ne(a,l);if(c)return c});return Zo(s,e,r,n,!0)}function Yf(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,h)=>{const u=G(c,n);i=i||Ne(h,u)});let s=t.syncPointTree_.get(n);s?i=i||Ne(s,b()):(s=new ra,t.syncPointTree_=t.syncPointTree_.set(n,s));const r=i!=null,o=r?new ke(i,!0,!1):null,a=Pn(t.pendingWriteTree_,e._path),l=oa(s,e,a,r?o.getNode():m.EMPTY_NODE,r);return Df(l)}function _t(t,e){return da(e,t.syncPointTree_,null,Pn(t.pendingWriteTree_,b()))}function da(t,e,n,i){if(w(t.path))return fa(t,e,n,i);{const s=e.get(b());n==null&&s!=null&&(n=Ne(s,b()));let r=[];const o=C(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,h=ea(i,o);r=r.concat(da(a,l,c,h))}return s&&(r=r.concat(Xi(s,t,i,n))),r}}function fa(t,e,n,i){const s=e.get(b());n==null&&s!=null&&(n=Ne(s,b()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=ea(i,o),h=t.operationForChild(o);h&&(r=r.concat(fa(h,a,l,c)))}),s&&(r=r.concat(Xi(s,t,i,n))),r}function _a(t,e){const n=e.query,i=Vt(t,n);return{hashFn:()=>(Pf(e)||m.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?qf(t,n._path,i):zf(t,n._path);{const r=Gh(s,n);return wn(t,n,null,r)}}}}function Vt(t,e){const n=xn(e);return t.queryToTagMap.get(n)}function xn(t){return t._path.toString()+"$"+t._queryIdentifier}function Zi(t,e){return t.tagToQueryMap.get(e)}function es(t){const e=t.indexOf("$");return f(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new E(t.substr(0,e))}}function ts(t,e,n){const i=t.syncPointTree_.get(e);f(i,"Missing sync point for query tag that we're tracking");const s=Pn(t.pendingWriteTree_,e);return Xi(i,n,s,null)}function Qf(t){return t.fold((e,n,i)=>{if(n&&Pe(n))return[Dn(n)];{let s=[];return n&&(s=aa(n)),U(i,(r,o)=>{s=s.concat(o)}),s}})}function Rt(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Uf())(t._repo,t._path):t}function Xf(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=xn(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function Jf(){return Hf++}function Zf(t,e,n){const i=e._path,s=Vt(t,e),r=_a(t,n),o=t.listenProvider_.startListening(Rt(e),s,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(i);if(s)f(!Pe(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,u)=>{if(!w(c)&&h&&Pe(h))return[Dn(h).query];{let d=[];return h&&(d=d.concat(aa(h).map(_=>_.query))),U(u,(_,p)=>{d=d.concat(p)}),d}});for(let c=0;c<l.length;++c){const h=l[c];t.listenProvider_.stopListening(Rt(h),Vt(t,h))}}return o}/**
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
 */class ns{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ns(n)}node(){return this.node_}}class is{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=x(this.path_,e);return new is(this.syncTree_,n)}node(){return Ji(this.syncTree_,this.path_)}}const e_=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},dr=function(t,e,n){if(!t||typeof t!="object")return t;if(f(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return t_(t[".sv"],e,n);if(typeof t[".sv"]=="object")return n_(t[".sv"],e);f(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},t_=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:f(!1,"Unexpected server value: "+t)}},n_=function(t,e,n){t.hasOwnProperty("increment")||f(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&f(!1,"Unexpected increment value: "+i);const s=e.node();if(f(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},pa=function(t,e,n,i){return ss(e,new is(n,t),i)},ga=function(t,e,n){return ss(t,new ns(e),n)};function ss(t,e,n){const i=t.getPriority().val(),s=dr(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=dr(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new V(a,M(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new V(s))),o.forEachChild(O,(a,l)=>{const c=ss(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class rs{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function os(t,e){let n=e instanceof E?e:new E(e),i=t,s=C(n);for(;s!==null;){const r=st(i.node.children,s)||{children:{},childCount:0};i=new rs(s,i,r),n=T(n),s=C(n)}return i}function pt(t){return t.node.value}function ma(t,e){t.node.value=e,Ci(t)}function va(t){return t.node.childCount>0}function i_(t){return pt(t)===void 0&&!va(t)}function On(t,e){U(t.node.children,(n,i)=>{e(new rs(n,t,i))})}function ya(t,e,n,i){n&&e(t),On(t,s=>{ya(s,e,!0)})}function s_(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function qt(t){return new E(t.parent===null?t.name:qt(t.parent)+"/"+t.name)}function Ci(t){t.parent!==null&&r_(t.parent,t.name,t)}function r_(t,e,n){const i=i_(n),s=de(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Ci(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Ci(t))}/**
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
 */const o_=/[\[\].#$\/\u0000-\u001F\u007F]/,a_=/[\[\].#$\u0000-\u001F\u007F]/,Jn=10*1024*1024,as=function(t){return typeof t=="string"&&t.length!==0&&!o_.test(t)},Ca=function(t){return typeof t=="string"&&t.length!==0&&!a_.test(t)},l_=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ca(t)},wa=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!An(t)||t&&typeof t=="object"&&de(t,".sv")},In=function(t,e,n,i){i&&e===void 0||Mn(rt(t,"value"),e,n)},Mn=function(t,e,n){const i=n instanceof E?new Sd(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Le(i));if(typeof e=="function")throw new Error(t+"contains a function "+Le(i)+" with contents = "+e.toString());if(An(e))throw new Error(t+"contains "+e.toString()+" "+Le(i));if(typeof e=="string"&&e.length>Jn/3&&Sn(e)>Jn)throw new Error(t+"contains a string greater than "+Jn+" utf8 bytes "+Le(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(U(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!as(o)))throw new Error(t+" contains an invalid key ("+o+") "+Le(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Td(i,o),Mn(t,a,i),Nd(i)}),s&&r)throw new Error(t+' contains ".value" child '+Le(i)+" in addition to actual children.")}},c_=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const r=Ot(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!as(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Ed);let s=null;for(n=0;n<e.length;n++){if(i=e[n],s!==null&&ie(s,i))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},Ia=function(t,e,n,i){const s=rt(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];U(e,(o,a)=>{const l=new E(o);if(Mn(s,a,x(n,l)),Vi(l)===".priority"&&!wa(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),c_(s,r)},u_=function(t,e,n){if(An(e))throw new Error(rt(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!wa(e))throw new Error(rt(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},ba=function(t,e,n,i){if(!Ca(n))throw new Error(rt(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},h_=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ba(t,e,n)},Ve=function(t,e){if(C(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},d_=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!as(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!l_(n))throw new Error(rt(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class f_{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ln(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!Wi(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Ea(t,e,n){Ln(t,n),Sa(t,i=>Wi(i,e))}function se(t,e,n){Ln(t,n),Sa(t,i=>ie(i,e)||ie(e,i))}function Sa(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(__(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function __(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();St&&$("event: "+n.toString()),dt(i)}}}/**
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
 */const p_="repo_interrupt",g_=25;class m_{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new f_,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=fn(),this.transactionQueueTree_=new rs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function v_(t,e,n){if(t.stats_=Fi(t.repoInfo_),t.forceRestClient_||Yh())t.server_=new dn(t.repoInfo_,(i,s,r,o)=>{fr(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>_r(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{B(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new ge(t.repoInfo_,e,(i,s,r,o)=>{fr(t,i,s,r,o)},i=>{_r(t,i)},i=>{y_(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=ed(t.repoInfo_,()=>new Zd(t.stats_,t.server_)),t.infoData_=new Kd,t.infoSyncTree_=new hr({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=zt(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ls(t,"connected",!1),t.serverSyncTree_=new hr({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);se(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function Ta(t){const n=t.infoData_.getNode(new E(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Fn(t){return e_({timestamp:Ta(t)})}function fr(t,e,n,i,s){t.dataUpdateCount++;const r=new E(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=rn(n,c=>M(c));o=Kf(t.serverSyncTree_,r,l,s)}else{const l=M(n);o=ha(t.serverSyncTree_,r,l,s)}else if(i){const l=rn(n,c=>M(c));o=Gf(t.serverSyncTree_,r,l)}else{const l=M(n);o=zt(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=ut(t,r)),se(t.eventQueue_,a,o)}function _r(t,e){ls(t,"connected",e),e===!1&&b_(t)}function y_(t,e){U(e,(n,i)=>{ls(t,n,i)})}function ls(t,e,n){const i=new E("/.info/"+e),s=M(n);t.infoData_.updateSnapshot(i,s);const r=zt(t.infoSyncTree_,i,s);se(t.eventQueue_,i,r)}function cs(t){return t.nextWriteId_++}function C_(t,e,n){const i=Yf(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(s=>{const r=M(s).withIndex(e._queryParams.getIndex());yi(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=zt(t.serverSyncTree_,e._path,r);else{const a=Vt(t.serverSyncTree_,e);o=ha(t.serverSyncTree_,e._path,r,a)}return se(t.eventQueue_,e._path,o),wn(t.serverSyncTree_,e,n,null,!0),r},s=>(Kt(t,"get for query "+B(e)+" failed: "+s),Promise.reject(new Error(s))))}function w_(t,e,n,i,s){Kt(t,"set",{path:e.toString(),value:n,priority:i});const r=Fn(t),o=M(n,i),a=Ji(t.serverSyncTree_,e),l=ga(o,a,r),c=cs(t),h=ua(t.serverSyncTree_,e,l,c,!0);Ln(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const p=d==="ok";p||z("set at "+e+" failed: "+d);const v=be(t.serverSyncTree_,c,!p);se(t.eventQueue_,e,v),De(t,s,d,_)});const u=hs(t,e);ut(t,u),se(t.eventQueue_,u,[])}function I_(t,e,n,i){Kt(t,"update",{path:e.toString(),value:n});let s=!0;const r=Fn(t),o={};if(U(n,(a,l)=>{s=!1,o[a]=pa(x(e,a),M(l),t.serverSyncTree_,r)}),s)$("update() called with empty data.  Don't do anything."),De(t,i,"ok",void 0);else{const a=cs(t),l=jf(t.serverSyncTree_,e,o,a);Ln(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,h)=>{const u=c==="ok";u||z("update at "+e+" failed: "+c);const d=be(t.serverSyncTree_,a,!u),_=d.length>0?ut(t,e):e;se(t.eventQueue_,_,d),De(t,i,c,h)}),U(n,c=>{const h=hs(t,x(e,c));ut(t,h)}),se(t.eventQueue_,e,[])}}function b_(t){Kt(t,"onDisconnectEvents");const e=Fn(t),n=fn();fi(t.onDisconnect_,b(),(s,r)=>{const o=pa(s,r,t.serverSyncTree_,e);ft(n,s,o)});let i=[];fi(n,b(),(s,r)=>{i=i.concat(zt(t.serverSyncTree_,s,r));const o=hs(t,s);ut(t,o)}),t.onDisconnect_=fn(),se(t.eventQueue_,b(),i)}function E_(t,e,n){t.server_.onDisconnectCancel(e.toString(),(i,s)=>{i==="ok"&&di(t.onDisconnect_,e),De(t,n,i,s)})}function pr(t,e,n,i){const s=M(n);t.server_.onDisconnectPut(e.toString(),s.val(!0),(r,o)=>{r==="ok"&&ft(t.onDisconnect_,e,s),De(t,i,r,o)})}function S_(t,e,n,i,s){const r=M(n,i);t.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&ft(t.onDisconnect_,e,r),De(t,s,o,a)})}function T_(t,e,n,i){if(ni(n)){$("onDisconnect().update() called with empty data.  Don't do anything."),De(t,i,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(s,r)=>{s==="ok"&&U(n,(o,a)=>{const l=M(a);ft(t.onDisconnect_,x(e,o),l)}),De(t,i,s,r)})}function N_(t,e,n){let i;C(e._path)===".info"?i=yi(t.infoSyncTree_,e,n):i=yi(t.serverSyncTree_,e,n),Ea(t.eventQueue_,e._path,i)}function A_(t,e,n){let i;C(e._path)===".info"?i=wn(t.infoSyncTree_,e,n):i=wn(t.serverSyncTree_,e,n),Ea(t.eventQueue_,e._path,i)}function R_(t){t.persistentConnection_&&t.persistentConnection_.interrupt(p_)}function Kt(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),$(n,...e)}function De(t,e,n,i){e&&dt(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function Na(t,e,n){return Ji(t.serverSyncTree_,e,n)||m.EMPTY_NODE}function us(t,e=t.transactionQueueTree_){if(e||Bn(t,e),pt(e)){const n=Ra(t,e);f(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&k_(t,qt(e),n)}else va(e)&&On(e,n=>{us(t,n)})}function k_(t,e,n){const i=n.map(c=>c.currentWriteId),s=Na(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const h=n[c];f(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=G(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Kt(t,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let d=0;d<n.length;d++)n[d].status=2,h=h.concat(be(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&u.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Bn(t,os(t.transactionQueueTree_,e)),us(t,t.transactionQueueTree_),se(t.eventQueue_,e,h);for(let d=0;d<u.length;d++)dt(u[d])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{z("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}ut(t,e)}},o)}function ut(t,e){const n=Aa(t,e),i=qt(n),s=Ra(t,n);return P_(t,s,i),i}function P_(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=G(n,l.path);let h=!1,u;if(f(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,s=s.concat(be(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=g_)h=!0,u="maxretry",s=s.concat(be(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Na(t,l.path,o);l.currentInputSnapshot=d;const _=e[a].update(d.val());if(_!==void 0){Mn("transaction failed: Data returned ",_,l.path);let p=M(_);typeof _=="object"&&_!=null&&de(_,".priority")||(p=p.updatePriority(d.getPriority()));const S=l.currentWriteId,L=Fn(t),N=ga(p,d,L);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=N,l.currentWriteId=cs(t),o.splice(o.indexOf(S),1),s=s.concat(ua(t.serverSyncTree_,l.path,N,l.currentWriteId,l.applyLocally)),s=s.concat(be(t.serverSyncTree_,S,!0))}else h=!0,u="nodata",s=s.concat(be(t.serverSyncTree_,l.currentWriteId,!0))}se(t.eventQueue_,n,s),s=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}Bn(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)dt(i[a]);us(t,t.transactionQueueTree_)}function Aa(t,e){let n,i=t.transactionQueueTree_;for(n=C(e);n!==null&&pt(i)===void 0;)i=os(i,n),e=T(e),n=C(e);return i}function Ra(t,e){const n=[];return ka(t,e,n),n.sort((i,s)=>i.order-s.order),n}function ka(t,e,n){const i=pt(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);On(e,s=>{ka(t,s,n)})}function Bn(t,e){const n=pt(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,ma(e,n.length>0?n:void 0)}On(e,i=>{Bn(t,i)})}function hs(t,e){const n=qt(Aa(t,e)),i=os(t.transactionQueueTree_,e);return s_(i,s=>{Zn(t,s)}),Zn(t,i),ya(i,s=>{Zn(t,s)}),n}function Zn(t,e){const n=pt(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(f(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(f(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(be(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ma(e,void 0):n.length=r+1,se(t.eventQueue_,qt(e),s);for(let o=0;o<i.length;o++)dt(i[o])}}/**
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
 */function D_(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function x_(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):z(`Invalid query segment '${n}' in query '${t}'`)}return e}const gr=function(t,e){const n=O_(t),i=n.namespace;n.domain==="firebase.com"&&ye(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&ye("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Wh();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new xo(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new E(n.pathString)}},O_=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(h,u)),h<u&&(s=D_(t.substring(h,u)));const d=x_(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),n=e.substring(p+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */const mr="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",M_=function(){let t=0;const e=[];return function(n){const i=n===t;t=n;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=mr.charAt(n%64),n=Math.floor(n/64);f(n===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=mr.charAt(e[s]);return f(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class L_{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+B(this.snapshot.exportVal())}}class F_{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Pa{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return f(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class B_{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new ue;return E_(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Ve("OnDisconnect.remove",this._path);const e=new ue;return pr(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Ve("OnDisconnect.set",this._path),In("OnDisconnect.set",e,this._path,!1);const n=new ue;return pr(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Ve("OnDisconnect.setWithPriority",this._path),In("OnDisconnect.setWithPriority",e,this._path,!1),u_("OnDisconnect.setWithPriority",n);const i=new ue;return S_(this._repo,this._path,e,n,i.wrapCallback(()=>{})),i.promise}update(e){Ve("OnDisconnect.update",this._path),Ia("OnDisconnect.update",e,this._path);const n=new ue;return T_(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class ds{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return w(this._path)?null:Vi(this._path)}get ref(){return new we(this._repo,this._path)}get _queryIdentifier(){const e=tr(this._queryParams),n=Mi(e);return n==="{}"?"default":n}get _queryObject(){return tr(this._queryParams)}isEqual(e){if(e=fe(e),!(e instanceof ds))return!1;const n=this._repo===e._repo,i=Wi(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+bd(this._path)}}class we extends ds{constructor(e,n){super(e,n,new ji,!1)}get parent(){const e=Uo(this._path);return e===null?null:new we(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Wt{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new E(e),i=$t(this.ref,e);return new Wt(this._node.getChild(n),i,O)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Wt(s,$t(this.ref,i),O)))}hasChild(e){const n=new E(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function wp(t,e){return t=fe(t),t._checkNotDeleted("ref"),e!==void 0?$t(t._root,e):t._root}function $t(t,e){return t=fe(t),C(t._path)===null?h_("child","path",e):ba("child","path",e),new we(t._repo,x(t._path,e))}function Ip(t){return t=fe(t),new B_(t._repo,t._path)}function bp(t,e){t=fe(t),Ve("push",t._path),In("push",e,t._path,!0);const n=Ta(t._repo),i=M_(n),s=$t(t,i),r=$t(t,i);let o;return e!=null?o=Da(r,e).then(()=>r):o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function Ep(t){return Ve("remove",t._path),Da(t,null)}function Da(t,e){t=fe(t),Ve("set",t._path),In("set",e,t._path,!1);const n=new ue;return w_(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Sp(t,e){Ia("update",e,t._path);const n=new ue;return I_(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Tp(t){t=fe(t);const e=new Pa(()=>{}),n=new Vn(e);return C_(t._repo,t,n).then(i=>new Wt(i,new we(t._repo,t._path),t._queryParams.getIndex()))}class Vn{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new L_("value",this,new Wt(e.snapshotNode,new we(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new F_(this,e,n):null}matches(e){return e instanceof Vn?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function V_(t,e,n,i,s){const r=new Pa(n,void 0),o=new Vn(r);return N_(t._repo,t,o),()=>A_(t._repo,t,o)}function Np(t,e,n,i){return V_(t,"value",e)}Lf(we);$f(we);/**
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
 */const W_="FIREBASE_DATABASE_EMULATOR_HOST",wi={};let $_=!1;function U_(t,e,n,i){t.repoInfo_=new xo(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),i&&(t.authTokenProvider_=i)}function H_(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||ye("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),$("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=gr(r,s),a=o.repoInfo,l;typeof process<"u"&&Fs&&(l=Fs[W_]),l?(r=`http://${l}?ns=${a.namespace}`,o=gr(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new Xh(t.name,t.options,e);d_("Invalid Firebase Database URL",o),w(o.path)||ye("Database URL must point to the root of a Firebase Database (not including a child path).");const h=G_(a,t,c,new Qh(t,n));return new z_(h,t)}function j_(t,e){const n=wi[e];(!n||n[t.key]!==t)&&ye(`Database ${e}(${t.repoInfo_}) has already been deleted.`),R_(t),delete n[t.key]}function G_(t,e,n,i){let s=wi[e.name];s||(s={},wi[e.name]=s);let r=s[t.toURLString()];return r&&ye("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new m_(t,$_,n,i),s[t.toURLString()]=r,r}class z_{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(v_(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new we(this._repo,b())),this._rootInternal}_delete(){return this._rootInternal!==null&&(j_(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ye("Cannot call "+e+" on a deleted database.")}}function q_(t=qr(),e){const n=Ut(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=Vl("database");i&&K_(n,...i)}return n}function K_(t,e,n,i={}){t=fe(t),t._checkNotDeleted("useEmulator");const s=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(s===t._repoInternal.repoInfo_.host&&Pt(i,r.repoInfo_.emulatorOptions))return;ye("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&ye('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new nn(nn.OWNER);else if(i.mockUserToken){const a=typeof i.mockUserToken=="string"?i.mockUserToken:Wl(i.mockUserToken,t.app.options.projectId);o=new nn(a)}U_(r,s,i,o)}/**
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
 */function Y_(t){Oh(nu),Ae(new me("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return H_(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),he(Bs,Vs,t),he(Bs,Vs,"esm2017")}ge.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ge.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Y_();const Q_={apiKey:"AIzaSyACpt_LrV8iNkYWfnI8VY_cnMr495yq7rc",authDomain:"card-chess-game.firebaseapp.com",projectId:"card-chess-game",storageBucket:"card-chess-game.firebasestorage.app",messagingSenderId:"433806880393",appId:"1:433806880393:web:b3ee4225d8cd9eb3aa2058",measurementId:"G-RZP6YG4TVP",databaseURL:"https://card-chess-game-default-rtdb.europe-west1.firebasedatabase.app/"},xa=zr(Q_);kh(xa);const Ap=q_(xa),Oa=bn.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}),Ma=bn.reduce((t,e)=>{const n="offset"+Ii(e);return t[n]={type:[String,Number],default:null},t},{}),La=bn.reduce((t,e)=>{const n="order"+Ii(e);return t[n]={type:[String,Number],default:null},t},{}),vr={col:Object.keys(Oa),offset:Object.keys(Ma),order:Object.keys(La)};function X_(t,e,n){let i=t;if(!(n==null||n===!1)){if(e){const s=e.replace(t,"");i+=`-${s}`}return t==="col"&&(i="v-"+i),t==="col"&&(n===""||n===!0)||(i+=`-${n}`),i.toLowerCase()}}const J_=["auto","start","end","center","baseline","stretch"],Z_=le({cols:{type:[Boolean,String,Number],default:!1},...Oa,offset:{type:[String,Number],default:null},...Ma,order:{type:[String,Number],default:null},...La,alignSelf:{type:String,default:null,validator:t=>J_.includes(t)},...xe(),...br()},"VCol"),Rp=Ce()({name:"VCol",props:Z_(),setup(t,e){let{slots:n}=e;const i=P(()=>{const s=[];let r;for(r in vr)vr[r].forEach(a=>{const l=t[a],c=X_(r,a,l);c&&s.push(c)});const o=s.some(a=>a.startsWith("v-col-"));return s.push({"v-col":!o||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),s});return()=>{var s;return Ir(t.tag,{class:[i.value,t.class],style:t.style},(s=n.default)==null?void 0:s.call(n))}}}),fs=["start","end","center"],Fa=["space-between","space-around","space-evenly"];function _s(t,e){return bn.reduce((n,i)=>{const s=t+Ii(i);return n[s]=e(),n},{})}const ep=[...fs,"baseline","stretch"],Ba=t=>ep.includes(t),Va=_s("align",()=>({type:String,default:null,validator:Ba})),tp=[...fs,...Fa],Wa=t=>tp.includes(t),$a=_s("justify",()=>({type:String,default:null,validator:Wa})),np=[...fs,...Fa,"stretch"],Ua=t=>np.includes(t),Ha=_s("alignContent",()=>({type:String,default:null,validator:Ua})),yr={align:Object.keys(Va),justify:Object.keys($a),alignContent:Object.keys(Ha)},ip={align:"align",justify:"justify",alignContent:"align-content"};function sp(t,e,n){let i=ip[t];if(n!=null){if(e){const s=e.replace(t,"");i+=`-${s}`}return i+=`-${n}`,i.toLowerCase()}}const rp=le({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Ba},...Va,justify:{type:String,default:null,validator:Wa},...$a,alignContent:{type:String,default:null,validator:Ua},...Ha,...xe(),...br()},"VRow"),kp=Ce()({name:"VRow",props:rp(),setup(t,e){let{slots:n}=e;const i=P(()=>{const s=[];let r;for(r in yr)yr[r].forEach(o=>{const a=t[o],l=sp(r,o,a);l&&s.push(l)});return s.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),s});return()=>{var s;return Ir(t.tag,{class:["v-row",i.value,t.class],style:t.style},(s=n.default)==null?void 0:s.call(n))}}}),op=le({active:Boolean,disabled:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...xe(),...Tr({transition:{component:Nr}})},"VCounter"),ap=Ce()({name:"VCounter",functional:!0,props:op(),setup(t,e){let{slots:n}=e;const i=Ie(()=>t.max?`${t.value} / ${t.max}`:String(t.value));return qe(()=>g(Sr,{transition:t.transition},{default:()=>[bi(g("div",{class:["v-counter",{"text-error":t.max&&!t.disabled&&parseFloat(t.value)>parseFloat(t.max)},t.class],style:t.style},[n.default?n.default({counter:i.value,max:t.max,value:t.value}):i.value]),[[Er,t.active]])]})),{}}}),lp=le({text:String,onClick:We(),...xe(),...Ei()},"VLabel"),cp=Ce()({name:"VLabel",props:lp(),setup(t,e){let{slots:n}=e;return qe(()=>{var i;return g("label",{class:["v-label",{"v-label--clickable":!!t.onClick},t.class],style:t.style,onClick:t.onClick},[t.text,(i=n.default)==null?void 0:i.call(n)])}),{}}}),up=le({floating:Boolean,...xe()},"VFieldLabel"),Jt=Ce()({name:"VFieldLabel",props:up(),setup(t,e){let{slots:n}=e;return qe(()=>g(cp,{class:["v-field-label",{"v-field-label--floating":t.floating},t.class],style:t.style,"aria-hidden":t.floating||void 0},n)),{}}});function ja(t){const{t:e}=Za();function n(i){let{name:s,color:r}=i;const o={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[s],a=t[`onClick:${s}`];function l(h){h.key!=="Enter"&&h.key!==" "||(h.preventDefault(),h.stopPropagation(),Ar(a,new PointerEvent("click",h)))}const c=a&&o?e(`$vuetify.input.${o}`,t.label??""):void 0;return g(el,{icon:t[`${s}Icon`],"aria-label":c,onClick:a,onKeydown:l,color:r},null)}return{InputIcon:n}}const Ga=le({focused:Boolean,"onUpdate:focused":We()},"focus");function za(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Rr();const n=Si(t,"focused"),i=Ie(()=>({[`${e}--focused`]:n.value}));function s(){n.value=!0}function r(){n.value=!1}return{focusClasses:i,isFocused:n,focus:s,blur:r}}const hp=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],qa=le({appendInnerIcon:bt,bgColor:String,clearable:Boolean,clearIcon:{type:bt,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},glow:Boolean,error:Boolean,flat:Boolean,iconColor:[Boolean,String],label:String,persistentClear:Boolean,prependInnerIcon:bt,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:t=>hp.includes(t)},"onClick:clear":We(),"onClick:appendInner":We(),"onClick:prependInner":We(),...xe(),...dl(),...hl(),...Ei()},"VField"),Cr=Ce()({name:"VField",inheritAttrs:!1,props:{id:String,...Ga(),...qa()},emits:{"update:focused":t=>!0,"update:modelValue":t=>!0},setup(t,e){let{attrs:n,emit:i,slots:s}=e;const{themeClasses:r}=kr(t),{loaderClasses:o}=tl(t),{focusClasses:a,isFocused:l,focus:c,blur:h}=za(t),{InputIcon:u}=ja(t),{roundedClasses:d}=nl(t),{rtlClasses:_}=Pr(),p=Ie(()=>t.dirty||t.active),v=Ie(()=>!!(t.label||s.label)),S=Ie(()=>!t.singleLine&&v.value),L=Ti(),N=P(()=>t.id||`input-${L}`),y=Ie(()=>`${N.value}-messages`),D=$e(),j=$e(),k=$e(),F=P(()=>["plain","underlined"].includes(t.variant)),H=P(()=>t.error||t.disabled?void 0:p.value&&l.value?t.color:t.baseColor),Y=P(()=>{if(!(!t.iconColor||t.glow&&!l.value))return t.iconColor===!0?H.value:t.iconColor}),{backgroundColorClasses:gt,backgroundColorStyles:Xe}=il(()=>t.bgColor),{textColorClasses:_e,textColorStyles:ce}=Dr(H);It(p,ee=>{if(S.value){const X=D.value.$el,te=j.value.$el;requestAnimationFrame(()=>{const ne=sl(X),J=te.getBoundingClientRect(),Ze=J.x-ne.x,Oe=J.y-ne.y-(ne.height/2-J.height/2),mt=J.width/.75,Yt=Math.abs(mt-ne.width)>1?{maxWidth:al(mt)}:void 0,Ya=getComputedStyle(X),ps=getComputedStyle(te),Qa=parseFloat(Ya.transitionDuration)*1e3||150,Xa=parseFloat(ps.getPropertyValue("--v-field-label-scale")),Ja=ps.getPropertyValue("color");X.style.visibility="visible",te.style.visibility="hidden",rl(X,{transform:`translate(${Ze}px, ${Oe}px) scale(${Xa})`,color:Ja,...Yt},{duration:Qa,easing:ol,direction:ee?"normal":"reverse"}).finished.then(()=>{X.style.removeProperty("visibility"),te.style.removeProperty("visibility")})})}},{flush:"post"});const Q=P(()=>({isActive:p,isFocused:l,controlRef:k,blur:h,focus:c}));function Je(ee){ee.target!==document.activeElement&&ee.preventDefault()}return qe(()=>{var Ze,Oe,mt;const ee=t.variant==="outlined",X=!!(s["prepend-inner"]||t.prependInnerIcon),te=!!(t.clearable||s.clear)&&!t.disabled,ne=!!(s["append-inner"]||t.appendInnerIcon||te),J=()=>s.label?s.label({...Q.value,label:t.label,props:{for:N.value}}):t.label;return g("div",en({class:["v-field",{"v-field--active":p.value,"v-field--appended":ne,"v-field--center-affix":t.centerAffix??!F.value,"v-field--disabled":t.disabled,"v-field--dirty":t.dirty,"v-field--error":t.error,"v-field--glow":t.glow,"v-field--flat":t.flat,"v-field--has-background":!!t.bgColor,"v-field--persistent-clear":t.persistentClear,"v-field--prepended":X,"v-field--reverse":t.reverse,"v-field--single-line":t.singleLine,"v-field--no-label":!J(),[`v-field--variant-${t.variant}`]:!0},r.value,gt.value,a.value,o.value,d.value,_.value,t.class],style:[Xe.value,t.style],onClick:Je},n),[g("div",{class:"v-field__overlay"},null),g(ll,{name:"v-field",active:!!t.loading,color:t.error?"error":typeof t.loading=="string"?t.loading:t.color},{default:s.loader}),X&&g("div",{key:"prepend",class:"v-field__prepend-inner"},[t.prependInnerIcon&&g(u,{key:"prepend-icon",name:"prependInner",color:Y.value},null),(Ze=s["prepend-inner"])==null?void 0:Ze.call(s,Q.value)]),g("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(t.variant)&&S.value&&g(Jt,{key:"floating-label",ref:j,class:[_e.value],floating:!0,for:N.value,style:ce.value},{default:()=>[J()]}),v.value&&g(Jt,{key:"label",ref:D,for:N.value},{default:()=>[J()]}),((Oe=s.default)==null?void 0:Oe.call(s,{...Q.value,props:{id:N.value,class:"v-field__input","aria-describedby":y.value},focus:c,blur:h}))??g("div",{id:N.value,class:"v-field__input","aria-describedby":y.value},null)]),te&&g(cl,{key:"clear"},{default:()=>[bi(g("div",{class:"v-field__clearable",onMousedown:Yt=>{Yt.preventDefault(),Yt.stopPropagation()}},[g(ul,{defaults:{VIcon:{icon:t.clearIcon}}},{default:()=>[s.clear?s.clear({...Q.value,props:{onFocus:c,onBlur:h,onClick:t["onClick:clear"]}}):g(u,{name:"clear",onFocus:c,onBlur:h},null)]})]),[[Er,t.dirty]])]}),ne&&g("div",{key:"append",class:"v-field__append-inner"},[(mt=s["append-inner"])==null?void 0:mt.call(s,Q.value),t.appendInnerIcon&&g(u,{key:"append-icon",name:"appendInner",color:Y.value},null)]),g("div",{class:["v-field__outline",_e.value],style:ce.value},[ee&&g(Zt,null,[g("div",{class:"v-field__outline__start"},null),S.value&&g("div",{class:"v-field__outline__notch"},[g(Jt,{ref:j,floating:!0,for:N.value},{default:()=>[J()]})]),g("div",{class:"v-field__outline__end"},null)]),F.value&&S.value&&g(Jt,{ref:j,floating:!0,for:N.value},{default:()=>[J()]})])])}),{controlRef:k,fieldIconColor:Y}}}),dp=le({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...xe(),...Tr({transition:{component:Nr,leaveAbsolute:!0,group:!0}})},"VMessages"),fp=Ce()({name:"VMessages",props:dp(),setup(t,e){let{slots:n}=e;const i=P(()=>tn(t.messages)),{textColorClasses:s,textColorStyles:r}=Dr(()=>t.color);return qe(()=>g(Sr,{transition:t.transition,tag:"div",class:["v-messages",s.value,t.class],style:[r.value,t.style]},{default:()=>[t.active&&i.value.map((o,a)=>g("div",{class:"v-messages__message",key:`${a}-${i.value}`},[n.message?n.message({message:o}):o]))]})),{}}}),_p=Symbol.for("vuetify:form");function pp(t){const e=fl(_p,null);return{...e,isReadonly:P(()=>!!((t==null?void 0:t.readonly)??(e==null?void 0:e.isReadonly.value))),isDisabled:P(()=>!!((t==null?void 0:t.disabled)??(e==null?void 0:e.isDisabled.value)))}}const gp=le({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...Ga()},"validation");function mp(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Rr(),n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ti();const i=Si(t,"modelValue"),s=P(()=>t.validationValue===void 0?i.value:t.validationValue),r=pp(t),o=$e([]),a=gs(!0),l=P(()=>!!(tn(i.value===""?null:i.value).length||tn(s.value===""?null:s.value).length)),c=P(()=>{var y;return(y=t.errorMessages)!=null&&y.length?tn(t.errorMessages).concat(o.value).slice(0,Math.max(0,Number(t.maxErrors))):o.value}),h=P(()=>{var j;let y=(t.validateOn??((j=r.validateOn)==null?void 0:j.value))||"input";y==="lazy"&&(y="input lazy"),y==="eager"&&(y="input eager");const D=new Set((y==null?void 0:y.split(" "))??[]);return{input:D.has("input"),blur:D.has("blur")||D.has("input")||D.has("invalid-input"),invalidInput:D.has("invalid-input"),lazy:D.has("lazy"),eager:D.has("eager")}}),u=P(()=>{var y;return t.error||(y=t.errorMessages)!=null&&y.length?!1:t.rules.length?a.value?o.value.length||h.value.lazy?null:!0:!o.value.length:!0}),d=gs(!1),_=P(()=>({[`${e}--error`]:u.value===!1,[`${e}--dirty`]:l.value,[`${e}--disabled`]:r.isDisabled.value,[`${e}--readonly`]:r.isReadonly.value})),p=_l("validation"),v=P(()=>t.name??pl(n));gl(()=>{var y;(y=r.register)==null||y.call(r,{id:v.value,vm:p,validate:N,reset:S,resetValidation:L})}),ml(()=>{var y;(y=r.unregister)==null||y.call(r,v.value)}),vl(async()=>{var y;h.value.lazy||await N(!h.value.eager),(y=r.update)==null||y.call(r,v.value,u.value,c.value)}),ms(()=>h.value.input||h.value.invalidInput&&u.value===!1,()=>{It(s,()=>{if(s.value!=null)N();else if(t.focused){const y=It(()=>t.focused,D=>{D||N(),y()})}})}),ms(()=>h.value.blur,()=>{It(()=>t.focused,y=>{y||N()})}),It([u,c],()=>{var y;(y=r.update)==null||y.call(r,v.value,u.value,c.value)});async function S(){i.value=null,await ei(),await L()}async function L(){a.value=!0,h.value.lazy?o.value=[]:await N(!h.value.eager)}async function N(){let y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const D=[];d.value=!0;for(const j of t.rules){if(D.length>=Number(t.maxErrors??1))break;const F=await(typeof j=="function"?j:()=>j)(s.value);if(F!==!0){if(F!==!1&&typeof F!="string"){console.warn(`${F} is not a valid value. Rule functions must return boolean true or a string.`);continue}D.push(F||"")}}return o.value=D,d.value=!1,a.value=y,o.value}return{errorMessages:c,isDirty:l,isDisabled:r.isDisabled,isReadonly:r.isReadonly,isPristine:a,isValid:u,isValidating:d,reset:S,resetValidation:L,validate:N,validationClasses:_}}const Ka=le({id:String,appendIcon:bt,baseColor:String,centerAffix:{type:Boolean,default:!0},color:String,glow:Boolean,iconColor:[Boolean,String],prependIcon:bt,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:t=>["horizontal","vertical"].includes(t)},"onClick:prepend":We(),"onClick:append":We(),...xe(),...Il(),...wl(bl(),["maxWidth","minWidth","width"]),...Ei(),...gp()},"VInput"),wr=Ce()({name:"VInput",props:{...Ka()},emits:{"update:modelValue":t=>!0},setup(t,e){let{attrs:n,slots:i,emit:s}=e;const{densityClasses:r}=yl(t),{dimensionStyles:o}=Cl(t),{themeClasses:a}=kr(t),{rtlClasses:l}=Pr(),{InputIcon:c}=ja(t),h=Ti(),u=P(()=>t.id||`input-${h}`),d=P(()=>`${u.value}-messages`),{errorMessages:_,isDirty:p,isDisabled:v,isReadonly:S,isPristine:L,isValid:N,isValidating:y,reset:D,resetValidation:j,validate:k,validationClasses:F}=mp(t,"v-input",u),H=P(()=>({id:u,messagesId:d,isDirty:p,isDisabled:v,isReadonly:S,isPristine:L,isValid:N,isValidating:y,reset:D,resetValidation:j,validate:k})),Y=Ie(()=>t.error||t.disabled?void 0:t.focused?t.color:t.baseColor),gt=Ie(()=>{if(t.iconColor)return t.iconColor===!0?Y.value:t.iconColor}),Xe=P(()=>{var _e;return(_e=t.errorMessages)!=null&&_e.length||!L.value&&_.value.length?_.value:t.hint&&(t.persistentHint||t.focused)?t.hint:t.messages});return qe(()=>{var ee,X,te,ne;const _e=!!(i.prepend||t.prependIcon),ce=!!(i.append||t.appendIcon),Q=Xe.value.length>0,Je=!t.hideDetails||t.hideDetails==="auto"&&(Q||!!i.details);return g("div",{class:["v-input",`v-input--${t.direction}`,{"v-input--center-affix":t.centerAffix,"v-input--focused":t.focused,"v-input--glow":t.glow,"v-input--hide-spin-buttons":t.hideSpinButtons},r.value,a.value,l.value,F.value,t.class],style:[o.value,t.style]},[_e&&g("div",{key:"prepend",class:"v-input__prepend"},[(ee=i.prepend)==null?void 0:ee.call(i,H.value),t.prependIcon&&g(c,{key:"prepend-icon",name:"prepend",color:gt.value},null)]),i.default&&g("div",{class:"v-input__control"},[(X=i.default)==null?void 0:X.call(i,H.value)]),ce&&g("div",{key:"append",class:"v-input__append"},[t.appendIcon&&g(c,{key:"append-icon",name:"append",color:gt.value},null),(te=i.append)==null?void 0:te.call(i,H.value)]),Je&&g("div",{id:d.value,class:"v-input__details",role:"alert","aria-live":"polite"},[g(fp,{active:Q,messages:Xe.value},{message:i.message}),(ne=i.details)==null?void 0:ne.call(i,H.value)])])}),{reset:D,resetValidation:j,validate:k,isValid:N,errorMessages:_}}}),vp=["color","file","time","date","datetime-local","week","month"],yp=le({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...Ka(),...qa()},"VTextField"),Pp=Ce()({name:"VTextField",directives:{Intersect:El},inheritAttrs:!1,props:yp(),emits:{"click:control":t=>!0,"mousedown:control":t=>!0,"update:focused":t=>!0,"update:modelValue":t=>!0},setup(t,e){let{attrs:n,emit:i,slots:s}=e;const r=Si(t,"modelValue"),{isFocused:o,focus:a,blur:l}=za(t),c=P(()=>typeof t.counterValue=="function"?t.counterValue(r.value):typeof t.counterValue=="number"?t.counterValue:(r.value??"").toString().length),h=P(()=>{if(n.maxlength)return n.maxlength;if(!(!t.counter||typeof t.counter!="number"&&typeof t.counter!="string"))return t.counter}),u=P(()=>["plain","underlined"].includes(t.variant));function d(k,F){var H,Y;!t.autofocus||!k||(Y=(H=F[0].target)==null?void 0:H.focus)==null||Y.call(H)}const _=$e(),p=$e(),v=$e(),S=P(()=>vp.includes(t.type)||t.persistentPlaceholder||o.value||t.active);function L(){var k;v.value!==document.activeElement&&((k=v.value)==null||k.focus()),o.value||a()}function N(k){i("mousedown:control",k),k.target!==v.value&&(L(),k.preventDefault())}function y(k){L(),i("click:control",k)}function D(k){k.stopPropagation(),L(),ei(()=>{r.value=null,Ar(t["onClick:clear"],k)})}function j(k){var H;const F=k.target;if(r.value=F.value,(H=t.modelModifiers)!=null&&H.trim&&["text","search","password","tel","url"].includes(t.type)){const Y=[F.selectionStart,F.selectionEnd];ei(()=>{F.selectionStart=Y[0],F.selectionEnd=Y[1]})}}return qe(()=>{const k=!!(s.counter||t.counter!==!1&&t.counter!=null),F=!!(k||s.details),[H,Y]=Sl(n),{modelValue:gt,...Xe}=wr.filterProps(t),_e=Cr.filterProps(t);return g(wr,en({ref:_,modelValue:r.value,"onUpdate:modelValue":ce=>r.value=ce,class:["v-text-field",{"v-text-field--prefixed":t.prefix,"v-text-field--suffixed":t.suffix,"v-input--plain-underlined":u.value},t.class],style:t.style},H,Xe,{centerAffix:!u.value,focused:o.value}),{...s,default:ce=>{let{id:Q,isDisabled:Je,isDirty:ee,isReadonly:X,isValid:te}=ce;return g(Cr,en({ref:p,onMousedown:N,onClick:y,"onClick:clear":D,"onClick:prependInner":t["onClick:prependInner"],"onClick:appendInner":t["onClick:appendInner"],role:t.role},_e,{id:Q.value,active:S.value||ee.value,dirty:ee.value||t.dirty,disabled:Je.value,focused:o.value,error:te.value===!1}),{...s,default:ne=>{let{props:{class:J,...Ze}}=ne;const Oe=bi(g("input",en({ref:v,value:r.value,onInput:j,autofocus:t.autofocus,readonly:X.value,disabled:Je.value,name:t.name,placeholder:t.placeholder,size:1,type:t.type,onFocus:L,onBlur:l},Ze,Y),null),[[Nl("intersect"),{handler:d},null,{once:!0}]]);return g(Zt,null,[t.prefix&&g("span",{class:"v-text-field__prefix"},[g("span",{class:"v-text-field__prefix__text"},[t.prefix])]),s.default?g("div",{class:J,"data-no-activator":""},[s.default(),Oe]):Al(Oe,{class:J}),t.suffix&&g("span",{class:"v-text-field__suffix"},[g("span",{class:"v-text-field__suffix__text"},[t.suffix])])])}})},details:F?ce=>{var Q;return g(Zt,null,[(Q=s.details)==null?void 0:Q.call(s,ce),k&&g(Zt,null,[g("span",null,null),g(ap,{active:t.persistentCounter||o.value,value:c.value,max:h.value,disabled:t.disabled},s.counter)])])}:void 0})}),Tl({},_,p,v)}});export{kp as V,Rp as a,Pp as b,Ep as c,Ap as d,Ip as e,$t as f,Tp as g,Np as o,bp as p,wp as r,Da as s,Sp as u};
