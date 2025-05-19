import{ak as In,p as x,al as xe,i as b,t as N,am as Pi,U as go,ab as Wt,an as Zs,ao as Cc,ap as bc,aq as wc,c as p,F as Dt,g as X,G as je,m as rt,e as ue,E as wt,D as _o,b as de,a3 as sn,h as jn,ae as mo,a4 as po,L as Gn,N as De,aa as Di,f as rn,a9 as vo,ar as Ic,X as yo,as as Ot,at as Ec,au as Co,j as Je,av as Sc,Y as ee,a7 as En,aw as Tc,ax as kc,ay as Nc,az as Rc,I as Me,r as Te,ai as bo,aA as Ac,a0 as xc,u as qn,Z as er,M as wo,T as Yn,aB as Pc,aC as tr,O as Ut,W as Dc,aD as Oc,aE as nr,a as Io,d as Eo,J as Kn,H as Mc,B as on,aF as Qn,A as is,aG as ss,C as Lc,ag as So,aH as Ze,aI as Fc,aJ as To,ah as Bc,$ as ir,aK as Vc,aL as $c,K as Wc,aM as Uc}from"./index-BhuPzLPA.js";const ko=["top","bottom"],Hc=["start","end","left","right"];function zc(t,e){let[n,i]=t.split(" ");return i||(i=In(ko,n)?"start":In(Hc,n)?"top":"center"),{side:sr(n,e),align:sr(i,e)}}function sr(t,e){return t==="start"?e?"right":"left":t==="end"?e?"left":"right":t}function Ep(t){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[t.side],align:t.align}}function Sp(t){return{side:t.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[t.align]}}function Tp(t){return{side:t.align,align:t.side}}function kp(t){return In(ko,t.side)?"y":"x"}class vn{constructor(e){let{x:n,y:i,width:s,height:r}=e;this.x=n,this.y=i,this.width=s,this.height=r}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Np(t,e){return{x:{before:Math.max(0,e.left-t.left),after:Math.max(0,t.right-e.right)},y:{before:Math.max(0,e.top-t.top),after:Math.max(0,t.bottom-e.bottom)}}}function Rp(t){return Array.isArray(t)?new vn({x:t[0],y:t[1],width:0,height:0}):t.getBoundingClientRect()}function jc(t){const e=t.getBoundingClientRect(),n=getComputedStyle(t),i=n.transform;if(i){let s,r,o,a,l;if(i.startsWith("matrix3d("))s=i.slice(9,-1).split(/, /),r=Number(s[0]),o=Number(s[5]),a=Number(s[12]),l=Number(s[13]);else if(i.startsWith("matrix("))s=i.slice(7,-1).split(/, /),r=Number(s[0]),o=Number(s[3]),a=Number(s[4]),l=Number(s[5]);else return new vn(e);const c=n.transformOrigin,d=e.x-a-(1-r)*parseFloat(c),u=e.y-l-(1-o)*parseFloat(c.slice(c.indexOf(" ")+1)),h=r?e.width/r:t.offsetWidth+1,f=o?e.height/o:t.offsetHeight+1;return new vn({x:d,y:u,width:h,height:f})}else return new vn(e)}function Gc(t,e,n){if(typeof t.animate>"u")return{finished:Promise.resolve()};let i;try{i=t.animate(e,n)}catch{return{finished:Promise.resolve()}}return typeof i.finished>"u"&&(i.finished=new Promise(s=>{i.onfinish=()=>{s(i)}})),i}const qc="cubic-bezier(0.4, 0, 0.2, 1)",Ap="cubic-bezier(0.0, 0, 0.2, 1)",xp="cubic-bezier(0.4, 0, 1, 1)",Yc=()=>{};var rr={};/**
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
 */const No={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const m=function(t,e){if(!t)throw It(e)},It=function(t){return new Error("Firebase Database ("+No.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Ro=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Kc=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},rs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,d=r>>2,u=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),i.push(n[d],n[u],n[h],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ro(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Kc(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||u==null)throw new Qc;const h=r<<2|a>>4;if(i.push(h),c!==64){const f=a<<4&240|c>>2;if(i.push(f),u!==64){const g=c<<6&192|u;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Qc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ao=function(t){const e=Ro(t);return rs.encodeByteArray(e,!0)},Sn=function(t){return Ao(t).replace(/\./g,"")},Oi=function(t){try{return rs.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Xc(t){return xo(void 0,t)}function xo(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Jc(n)||(t[n]=xo(t[n],e[n]));return t}function Jc(t){return t!=="__proto__"}/**
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
 */function Zc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const eu=()=>Zc().__FIREBASE_DEFAULTS__,tu=()=>{if(typeof process>"u"||typeof rr>"u")return;const t=rr.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},nu=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Oi(t[1]);return e&&JSON.parse(e)},Po=()=>{try{return Yc()||eu()||tu()||nu()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},iu=t=>{var e,n;return(n=(e=Po())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},su=t=>{const e=iu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Do=()=>{var t;return(t=Po())===null||t===void 0?void 0:t.config};/**
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
 */class Ce{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function ru(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Sn(JSON.stringify(n)),Sn(JSON.stringify(o)),""].join(".")}/**
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
 */function ou(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Oo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ou())}function au(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function lu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cu(){return No.NODE_ADMIN===!0}function Mo(){try{return typeof indexedDB=="object"}catch{return!1}}function Lo(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function uu(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const du="FirebaseError";class ot extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=du,Object.setPrototypeOf(this,ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xn.prototype.create)}}class Xn{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?hu(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ot(s,a,i)}}function hu(t,e){return t.replace(fu,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const fu=/\{\$([^}]+)}/g;/**
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
 */function Ht(t){return JSON.parse(t)}function j(t){return JSON.stringify(t)}/**
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
 */const Fo=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=Ht(Oi(r[0])||""),n=Ht(Oi(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},gu=function(t){const e=Fo(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},_u=function(t){const e=Fo(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function we(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function gt(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Mi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Tn(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function zt(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(or(r)&&or(o)){if(!zt(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function or(t){return t!==null&&typeof t=="object"}/**
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
 */function mu(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class pu{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)i[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const h=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),d=1518500249):(c=r^o^a,d=1859775393):u<60?(c=r&o|a&(r|o),d=2400959708):(c=r^o^a,d=3395469782);const h=(s<<5|s>>>27)+c+l+d+i[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function _t(t,e){return`${t} failed: ${e} argument `}/**
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
 */const vu=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,m(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Jn=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const yu=1e3,Cu=2,bu=4*60*60*1e3,wu=.5;function ar(t,e=yu,n=Cu){const i=e*Math.pow(n,t),s=Math.round(wu*i*(Math.random()-.5)*2);return Math.min(bu,i+s)}/**
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
 */function Ie(t){return t&&t._delegate?t._delegate:t}class Ne{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qe="[DEFAULT]";/**
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
 */class Iu{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Ce;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Su(e))try{this.getOrInitializeService({instanceIdentifier:qe})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=qe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qe){return this.instances.has(e)}getOptions(e=qe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Eu(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=qe){return this.component?this.component.multipleInstances?e:qe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Eu(t){return t===qe?void 0:t}function Su(t){return t.instantiationMode==="EAGER"}/**
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
 */class Tu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Iu(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var L;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(L||(L={}));const ku={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},Nu=L.INFO,Ru={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},Au=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Ru[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class os{constructor(e){this.name=e,this._logLevel=Nu,this._logHandler=Au,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in L))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ku[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...e),this._logHandler(this,L.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...e),this._logHandler(this,L.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,L.INFO,...e),this._logHandler(this,L.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,L.WARN,...e),this._logHandler(this,L.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...e),this._logHandler(this,L.ERROR,...e)}}const xu=(t,e)=>e.some(n=>t instanceof n);let lr,cr;function Pu(){return lr||(lr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Du(){return cr||(cr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bo=new WeakMap,Li=new WeakMap,Vo=new WeakMap,_i=new WeakMap,as=new WeakMap;function Ou(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Le(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Bo.set(n,t)}).catch(()=>{}),as.set(e,t),e}function Mu(t){if(Li.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Li.set(t,e)}let Fi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Li.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Vo.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Le(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Lu(t){Fi=t(Fi)}function Fu(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(mi(this),e,...n);return Vo.set(i,e.sort?e.sort():[e]),Le(i)}:Du().includes(t)?function(...e){return t.apply(mi(this),e),Le(Bo.get(this))}:function(...e){return Le(t.apply(mi(this),e))}}function Bu(t){return typeof t=="function"?Fu(t):(t instanceof IDBTransaction&&Mu(t),xu(t,Pu())?new Proxy(t,Fi):t)}function Le(t){if(t instanceof IDBRequest)return Ou(t);if(_i.has(t))return _i.get(t);const e=Bu(t);return e!==t&&(_i.set(t,e),as.set(e,t)),e}const mi=t=>as.get(t);function $o(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=Le(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Le(o.result),l.oldVersion,l.newVersion,Le(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Vu=["get","getKey","getAll","getAllKeys","count"],$u=["put","add","delete","clear"],pi=new Map;function ur(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pi.get(e))return pi.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=$u.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Vu.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return pi.set(e,r),r}Lu(t=>({...t,get:(e,n,i)=>ur(e,n)||t.get(e,n,i),has:(e,n)=>!!ur(e,n)||t.has(e,n)}));/**
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
 */class Wu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Uu(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Uu(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bi="@firebase/app",dr="0.11.5";/**
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
 */const Re=new os("@firebase/app"),Hu="@firebase/app-compat",zu="@firebase/analytics-compat",ju="@firebase/analytics",Gu="@firebase/app-check-compat",qu="@firebase/app-check",Yu="@firebase/auth",Ku="@firebase/auth-compat",Qu="@firebase/database",Xu="@firebase/data-connect",Ju="@firebase/database-compat",Zu="@firebase/functions",ed="@firebase/functions-compat",td="@firebase/installations",nd="@firebase/installations-compat",id="@firebase/messaging",sd="@firebase/messaging-compat",rd="@firebase/performance",od="@firebase/performance-compat",ad="@firebase/remote-config",ld="@firebase/remote-config-compat",cd="@firebase/storage",ud="@firebase/storage-compat",dd="@firebase/firestore",hd="@firebase/vertexai",fd="@firebase/firestore-compat",gd="firebase",_d="11.6.1";/**
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
 */const Vi="[DEFAULT]",md={[Bi]:"fire-core",[Hu]:"fire-core-compat",[ju]:"fire-analytics",[zu]:"fire-analytics-compat",[qu]:"fire-app-check",[Gu]:"fire-app-check-compat",[Yu]:"fire-auth",[Ku]:"fire-auth-compat",[Qu]:"fire-rtdb",[Xu]:"fire-data-connect",[Ju]:"fire-rtdb-compat",[Zu]:"fire-fn",[ed]:"fire-fn-compat",[td]:"fire-iid",[nd]:"fire-iid-compat",[id]:"fire-fcm",[sd]:"fire-fcm-compat",[rd]:"fire-perf",[od]:"fire-perf-compat",[ad]:"fire-rc",[ld]:"fire-rc-compat",[cd]:"fire-gcs",[ud]:"fire-gcs-compat",[dd]:"fire-fst",[fd]:"fire-fst-compat",[hd]:"fire-vertex","fire-js":"fire-js",[gd]:"fire-js-all"};/**
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
 */const kn=new Map,pd=new Map,$i=new Map;function hr(t,e){try{t.container.addComponent(e)}catch(n){Re.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $e(t){const e=t.name;if($i.has(e))return Re.debug(`There were multiple attempts to register component ${e}.`),!1;$i.set(e,t);for(const n of kn.values())hr(n,t);for(const n of pd.values())hr(n,t);return!0}function an(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function vd(t){return t==null?!1:t.settings!==void 0}/**
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
 */const yd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fe=new Xn("app","Firebase",yd);/**
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
 */class Cd{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ne("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fe.create("app-deleted",{appName:this._name})}}/**
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
 */const bd=_d;function Wo(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Vi,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Fe.create("bad-app-name",{appName:String(s)});if(n||(n=Do()),!n)throw Fe.create("no-options");const r=kn.get(s);if(r){if(zt(n,r.options)&&zt(i,r.config))return r;throw Fe.create("duplicate-app",{appName:s})}const o=new Tu(s);for(const l of $i.values())o.addComponent(l);const a=new Cd(n,i,o);return kn.set(s,a),a}function Uo(t=Vi){const e=kn.get(t);if(!e&&t===Vi&&Do())return Wo();if(!e)throw Fe.create("no-app",{appName:t});return e}function be(t,e,n){var i;let s=(i=md[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Re.warn(a.join(" "));return}$e(new Ne(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const wd="firebase-heartbeat-database",Id=1,jt="firebase-heartbeat-store";let vi=null;function Ho(){return vi||(vi=$o(wd,Id,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(jt)}catch(n){console.warn(n)}}}}).catch(t=>{throw Fe.create("idb-open",{originalErrorMessage:t.message})})),vi}async function Ed(t){try{const n=(await Ho()).transaction(jt),i=await n.objectStore(jt).get(zo(t));return await n.done,i}catch(e){if(e instanceof ot)Re.warn(e.message);else{const n=Fe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Re.warn(n.message)}}}async function fr(t,e){try{const i=(await Ho()).transaction(jt,"readwrite");await i.objectStore(jt).put(e,zo(t)),await i.done}catch(n){if(n instanceof ot)Re.warn(n.message);else{const i=Fe.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Re.warn(i.message)}}}function zo(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Sd=1024,Td=30;class kd{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Rd(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=gr();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>Td){const o=Ad(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Re.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=gr(),{heartbeatsToSend:i,unsentEntries:s}=Nd(this._heartbeatsCache.heartbeats),r=Sn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Re.warn(n),""}}}function gr(){return new Date().toISOString().substring(0,10)}function Nd(t,e=Sd){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),_r(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),_r(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Rd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mo()?Lo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ed(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return fr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return fr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function _r(t){return Sn(JSON.stringify({version:2,heartbeats:t})).length}function Ad(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
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
 */function xd(t){$e(new Ne("platform-logger",e=>new Wu(e),"PRIVATE")),$e(new Ne("heartbeat",e=>new kd(e),"PRIVATE")),be(Bi,dr,t),be(Bi,dr,"esm2017"),be("fire-js","")}xd("");var Pd="firebase",Dd="11.6.1";/**
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
 */be(Pd,Dd,"app");const jo="@firebase/installations",ls="0.6.13";/**
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
 */const Go=1e4,qo=`w:${ls}`,Yo="FIS_v2",Od="https://firebaseinstallations.googleapis.com/v1",Md=60*60*1e3,Ld="installations",Fd="Installations";/**
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
 */const Bd={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},et=new Xn(Ld,Fd,Bd);function Ko(t){return t instanceof ot&&t.code.includes("request-failed")}/**
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
 */function Qo({projectId:t}){return`${Od}/projects/${t}/installations`}function Xo(t){return{token:t.token,requestStatus:2,expiresIn:$d(t.expiresIn),creationTime:Date.now()}}async function Jo(t,e){const i=(await e.json()).error;return et.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Zo({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Vd(t,{refreshToken:e}){const n=Zo(t);return n.append("Authorization",Wd(e)),n}async function ea(t){const e=await t();return e.status>=500&&e.status<600?t():e}function $d(t){return Number(t.replace("s","000"))}function Wd(t){return`${Yo} ${t}`}/**
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
 */async function Ud({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=Qo(t),s=Zo(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:Yo,appId:t.appId,sdkVersion:qo},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await ea(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Xo(c.authToken)}}else throw await Jo("Create Installation",l)}/**
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
 */function ta(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Hd(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const zd=/^[cdef][\w-]{21}$/,Wi="";function jd(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Gd(t);return zd.test(n)?n:Wi}catch{return Wi}}function Gd(t){return Hd(t).substr(0,22)}/**
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
 */function Zn(t){return`${t.appName}!${t.appId}`}/**
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
 */const na=new Map;function ia(t,e){const n=Zn(t);sa(n,e),qd(n,e)}function sa(t,e){const n=na.get(t);if(n)for(const i of n)i(e)}function qd(t,e){const n=Yd();n&&n.postMessage({key:t,fid:e}),Kd()}let Ke=null;function Yd(){return!Ke&&"BroadcastChannel"in self&&(Ke=new BroadcastChannel("[Firebase] FID Change"),Ke.onmessage=t=>{sa(t.data.key,t.data.fid)}),Ke}function Kd(){na.size===0&&Ke&&(Ke.close(),Ke=null)}/**
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
 */const Qd="firebase-installations-database",Xd=1,tt="firebase-installations-store";let yi=null;function cs(){return yi||(yi=$o(Qd,Xd,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(tt)}}})),yi}async function Nn(t,e){const n=Zn(t),s=(await cs()).transaction(tt,"readwrite"),r=s.objectStore(tt),o=await r.get(n);return await r.put(e,n),await s.done,(!o||o.fid!==e.fid)&&ia(t,e.fid),e}async function ra(t){const e=Zn(t),i=(await cs()).transaction(tt,"readwrite");await i.objectStore(tt).delete(e),await i.done}async function ei(t,e){const n=Zn(t),s=(await cs()).transaction(tt,"readwrite"),r=s.objectStore(tt),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&ia(t,a.fid),a}/**
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
 */async function us(t){let e;const n=await ei(t.appConfig,i=>{const s=Jd(i),r=Zd(t,s);return e=r.registrationPromise,r.installationEntry});return n.fid===Wi?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Jd(t){const e=t||{fid:jd(),registrationStatus:0};return oa(e)}function Zd(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(et.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=eh(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:th(t)}:{installationEntry:e}}async function eh(t,e){try{const n=await Ud(t,e);return Nn(t.appConfig,n)}catch(n){throw Ko(n)&&n.customData.serverCode===409?await ra(t.appConfig):await Nn(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function th(t){let e=await mr(t.appConfig);for(;e.registrationStatus===1;)await ta(100),e=await mr(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await us(t);return i||n}return e}function mr(t){return ei(t,e=>{if(!e)throw et.create("installation-not-found");return oa(e)})}function oa(t){return nh(t)?{fid:t.fid,registrationStatus:0}:t}function nh(t){return t.registrationStatus===1&&t.registrationTime+Go<Date.now()}/**
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
 */async function ih({appConfig:t,heartbeatServiceProvider:e},n){const i=sh(t,n),s=Vd(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:qo,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await ea(()=>fetch(i,a));if(l.ok){const c=await l.json();return Xo(c)}else throw await Jo("Generate Auth Token",l)}function sh(t,{fid:e}){return`${Qo(t)}/${e}/authTokens:generate`}/**
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
 */async function ds(t,e=!1){let n;const i=await ei(t.appConfig,r=>{if(!aa(r))throw et.create("not-registered");const o=r.authToken;if(!e&&ah(o))return r;if(o.requestStatus===1)return n=rh(t,e),r;{if(!navigator.onLine)throw et.create("app-offline");const a=ch(r);return n=oh(t,a),a}});return n?await n:i.authToken}async function rh(t,e){let n=await pr(t.appConfig);for(;n.authToken.requestStatus===1;)await ta(100),n=await pr(t.appConfig);const i=n.authToken;return i.requestStatus===0?ds(t,e):i}function pr(t){return ei(t,e=>{if(!aa(e))throw et.create("not-registered");const n=e.authToken;return uh(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function oh(t,e){try{const n=await ih(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await Nn(t.appConfig,i),n}catch(n){if(Ko(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ra(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Nn(t.appConfig,i)}throw n}}function aa(t){return t!==void 0&&t.registrationStatus===2}function ah(t){return t.requestStatus===2&&!lh(t)}function lh(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Md}function ch(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function uh(t){return t.requestStatus===1&&t.requestTime+Go<Date.now()}/**
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
 */async function dh(t){const e=t,{installationEntry:n,registrationPromise:i}=await us(e);return i?i.catch(console.error):ds(e).catch(console.error),n.fid}/**
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
 */async function hh(t,e=!1){const n=t;return await fh(n),(await ds(n,e)).token}async function fh(t){const{registrationPromise:e}=await us(t);e&&await e}/**
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
 */function gh(t){if(!t||!t.options)throw Ci("App Configuration");if(!t.name)throw Ci("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ci(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ci(t){return et.create("missing-app-config-values",{valueName:t})}/**
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
 */const la="installations",_h="installations-internal",mh=t=>{const e=t.getProvider("app").getImmediate(),n=gh(e),i=an(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},ph=t=>{const e=t.getProvider("app").getImmediate(),n=an(e,la).getImmediate();return{getId:()=>dh(n),getToken:s=>hh(n,s)}};function vh(){$e(new Ne(la,mh,"PUBLIC")),$e(new Ne(_h,ph,"PRIVATE"))}vh();be(jo,ls);be(jo,ls,"esm2017");/**
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
 */const Rn="analytics",yh="firebase_id",Ch="origin",bh=60*1e3,wh="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",hs="https://www.googletagmanager.com/gtag/js";/**
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
 */const se=new os("@firebase/analytics");/**
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
 */const Ih={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ce=new Xn("analytics","Analytics",Ih);/**
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
 */function Eh(t){if(!t.startsWith(hs)){const e=ce.create("invalid-gtag-resource",{gtagURL:t});return se.warn(e.message),""}return t}function ca(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Sh(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Th(t,e){const n=Sh("firebase-js-sdk-policy",{createScriptURL:Eh}),i=document.createElement("script"),s=`${hs}?l=${t}&id=${e}`;i.src=n?n==null?void 0:n.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function kh(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Nh(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const l=(await ca(n)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){se.error(a)}t("config",s,r)}async function Rh(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await ca(n);for(const l of o){const c=a.find(u=>u.measurementId===l),d=c&&e[c.appId];if(d)r.push(d);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(r){se.error(r)}}function Ah(t,e,n,i){async function s(r,...o){try{if(r==="event"){const[a,l]=o;await Rh(t,e,n,a,l)}else if(r==="config"){const[a,l]=o;await Nh(t,e,n,i,a,l)}else if(r==="consent"){const[a,l]=o;t("consent",a,l)}else if(r==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(r==="set"){const[a]=o;t("set",a)}else t(r,...o)}catch(a){se.error(a)}}return s}function xh(t,e,n,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=Ah(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}function Ph(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(hs)&&n.src.includes(t))return n;return null}/**
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
 */const Dh=30,Oh=1e3;class Mh{constructor(e={},n=Oh){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ua=new Mh;function Lh(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Fh(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:Lh(i)},r=wh.replace("{app-id}",n),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw ce.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Bh(t,e=ua,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw ce.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw ce.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Wh;return setTimeout(async()=>{a.abort()},bh),da({appId:i,apiKey:s,measurementId:r},o,a,e)}async function da(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=ua){var r;const{appId:o,measurementId:a}=t;try{await Vh(i,e)}catch(l){if(a)return se.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await Fh(t);return s.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!$h(c)){if(s.deleteThrottleMetadata(o),a)return se.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const d=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?ar(n,s.intervalMillis,Dh):ar(n,s.intervalMillis),u={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(o,u),se.debug(`Calling attemptFetch again in ${d} millis`),da(t,u,i,s)}}function Vh(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(r),i(ce.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function $h(t){if(!(t instanceof ot)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Wh{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Uh(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});t("event",n,o)}}/**
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
 */async function Hh(){if(Mo())try{await Lo()}catch(t){return se.warn(ce.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return se.warn(ce.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function zh(t,e,n,i,s,r,o){var a;const l=Bh(t);l.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&se.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>se.error(f)),e.push(l);const c=Hh().then(f=>{if(f)return i.getId()}),[d,u]=await Promise.all([l,c]);Ph(r)||Th(r,d.measurementId),s("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[Ch]="firebase",h.update=!0,u!=null&&(h[yh]=u),s("config",d.measurementId,h),d.measurementId}/**
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
 */class jh{constructor(e){this.app=e}_delete(){return delete Mt[this.app.options.appId],Promise.resolve()}}let Mt={},vr=[];const yr={};let bi="dataLayer",Gh="gtag",Cr,ha,br=!1;function qh(){const t=[];if(au()&&t.push("This is a browser extension environment."),uu()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=ce.create("invalid-analytics-context",{errorInfo:e});se.warn(n.message)}}function Yh(t,e,n){qh();const i=t.options.appId;if(!i)throw ce.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)se.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ce.create("no-api-key");if(Mt[i]!=null)throw ce.create("already-exists",{id:i});if(!br){kh(bi);const{wrappedGtag:r,gtagCore:o}=xh(Mt,vr,yr,bi,Gh);ha=r,Cr=o,br=!0}return Mt[i]=zh(t,vr,yr,e,Cr,bi,n),new jh(t)}function Kh(t=Uo()){t=Ie(t);const e=an(t,Rn);return e.isInitialized()?e.getImmediate():Qh(t)}function Qh(t,e={}){const n=an(t,Rn);if(n.isInitialized()){const s=n.getImmediate();if(zt(e,n.getOptions()))return s;throw ce.create("already-initialized")}return n.initialize({options:e})}function Xh(t,e,n,i){t=Ie(t),Uh(ha,Mt[t.app.options.appId],e,n,i).catch(s=>se.error(s))}const wr="@firebase/analytics",Ir="0.10.12";function Jh(){$e(new Ne(Rn,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Yh(i,s,n)},"PUBLIC")),$e(new Ne("analytics-internal",t,"PRIVATE")),be(wr,Ir),be(wr,Ir,"esm2017");function t(e){try{const n=e.getProvider(Rn).getImmediate();return{logEvent:(i,s,r)=>Xh(n,i,s,r)}}catch(n){throw ce.create("interop-component-reg-failed",{reason:n})}}}Jh();var Er={};const Sr="@firebase/database",Tr="1.0.14";/**
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
 */let fa="";function Zh(t){fa=t}/**
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
 */class ef{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),j(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ht(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class tf{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return we(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ga=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ef(e)}}catch{}return new tf},Qe=ga("localStorage"),nf=ga("sessionStorage");/**
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
 */const ht=new os("@firebase/database"),sf=function(){let t=1;return function(){return t++}}(),_a=function(t){const e=vu(t),n=new pu;n.update(e);const i=n.digest();return rs.encodeByteArray(i)},ln=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=ln.apply(null,i):typeof i=="object"?e+=j(i):e+=i,e+=" "}return e};let Lt=null,kr=!0;const rf=function(t,e){m(!0,"Can't turn on custom loggers persistently."),ht.logLevel=L.VERBOSE,Lt=ht.log.bind(ht)},K=function(...t){if(kr===!0&&(kr=!1,Lt===null&&nf.get("logging_enabled")===!0&&rf()),Lt){const e=ln.apply(null,t);Lt(e)}},cn=function(t){return function(...e){K(t,...e)}},Ui=function(...t){const e="FIREBASE INTERNAL ERROR: "+ln(...t);ht.error(e)},Ae=function(...t){const e=`FIREBASE FATAL ERROR: ${ln(...t)}`;throw ht.error(e),new Error(e)},ne=function(...t){const e="FIREBASE WARNING: "+ln(...t);ht.warn(e)},of=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ne("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ti=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},af=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},mt="[MIN_NAME]",nt="[MAX_NAME]",at=function(t,e){if(t===e)return 0;if(t===mt||e===nt)return-1;if(e===mt||t===nt)return 1;{const n=Nr(t),i=Nr(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},lf=function(t,e){return t===e?0:t<e?-1:1},Rt=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+j(e))},fs=function(t){if(typeof t!="object"||t===null)return j(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=j(e[i]),n+=":",n+=fs(t[e[i]]);return n+="}",n},ma=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function Q(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const pa=function(t){m(!ti(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const d=c.join("");let u="";for(l=0;l<64;l+=8){let h=parseInt(d.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},cf=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},uf=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function df(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const hf=new RegExp("^-?(0*)\\d{1,10}$"),ff=-2147483648,gf=2147483647,Nr=function(t){if(hf.test(t)){const e=Number(t);if(e>=ff&&e<=gf)return e}return null},Et=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ne("Exception was thrown by user callback.",n),e},Math.floor(0))}},_f=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ft=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class mf{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,vd(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ne(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class pf{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(K("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ne(e)}}class yn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}yn.OWNER="owner";/**
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
 */const gs="5",va="v",ya="s",Ca="r",ba="f",wa=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ia="ls",Ea="p",Hi="ac",Sa="websocket",Ta="long_polling";/**
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
 */class ka{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qe.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Qe.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function vf(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Na(t,e,n){m(typeof e=="string","typeof type must == string"),m(typeof n=="object","typeof params must == object");let i;if(e===Sa)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ta)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);vf(t)&&(n.ns=t.namespace);const s=[];return Q(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class yf{constructor(){this.counters_={}}incrementCounter(e,n=1){we(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Xc(this.counters_)}}/**
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
 */const wi={},Ii={};function _s(t){const e=t.toString();return wi[e]||(wi[e]=new yf),wi[e]}function Cf(t,e){const n=t.toString();return Ii[n]||(Ii[n]=e()),Ii[n]}/**
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
 */class bf{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Et(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Rr="start",wf="close",If="pLPCommand",Ef="pRTLPCB",Ra="id",Aa="pw",xa="ser",Sf="cb",Tf="seg",kf="ts",Nf="d",Rf="dframe",Pa=1870,Da=30,Af=Pa-Da,xf=25e3,Pf=3e4;class dt{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=cn(e),this.stats_=_s(n),this.urlFn=l=>(this.appCheckToken&&(l[Hi]=this.appCheckToken),Na(n,Ta,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new bf(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Pf)),af(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ms((...r)=>{const[o,a,l,c,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Rr)this.id=a,this.password=l;else if(o===wf)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Rr]="t",i[xa]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Sf]=this.scriptTagHolder.uniqueCallbackIdentifier),i[va]=gs,this.transportSessionId&&(i[ya]=this.transportSessionId),this.lastSessionId&&(i[Ia]=this.lastSessionId),this.applicationId&&(i[Ea]=this.applicationId),this.appCheckToken&&(i[Hi]=this.appCheckToken),typeof location<"u"&&location.hostname&&wa.test(location.hostname)&&(i[Ca]=ba);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){dt.forceAllow_=!0}static forceDisallow(){dt.forceDisallow_=!0}static isAvailable(){return dt.forceAllow_?!0:!dt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!cf()&&!uf()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=j(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Ao(n),s=ma(i,Af);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[Rf]="t",i[Ra]=e,i[Aa]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=j(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ms{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=sf(),window[If+this.uniqueCallbackIdentifier]=e,window[Ef+this.uniqueCallbackIdentifier]=n,this.myIFrame=ms.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){K("frame writing exception"),a.stack&&K(a.stack),K(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||K("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ra]=this.myID,e[Aa]=this.myPW,e[xa]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Da+i.length<=Pa;){const o=this.pendingSegs.shift();i=i+"&"+Tf+s+"="+o.seg+"&"+kf+s+"="+o.ts+"&"+Nf+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(xf)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{K("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const Df=16384,Of=45e3;let An=null;typeof MozWebSocket<"u"?An=MozWebSocket:typeof WebSocket<"u"&&(An=WebSocket);class pe{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=cn(this.connId),this.stats_=_s(n),this.connURL=pe.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[va]=gs,typeof location<"u"&&location.hostname&&wa.test(location.hostname)&&(o[Ca]=ba),n&&(o[ya]=n),i&&(o[Ia]=i),s&&(o[Hi]=s),r&&(o[Ea]=r),Na(e,Sa,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qe.set("previous_websocket_failure",!0);try{let i;cu(),this.mySock=new An(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){pe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&An!==null&&!pe.forceDisallow_}static previouslyFailed(){return Qe.isInMemoryStorage||Qe.get("previous_websocket_failure")===!0}markConnectionHealthy(){Qe.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Ht(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=j(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=ma(n,Df);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Of))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}pe.responsesRequiredToBeHealthy=2;pe.healthyTimeout=3e4;/**
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
 */class Gt{static get ALL_TRANSPORTS(){return[dt,pe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=pe&&pe.isAvailable();let i=n&&!pe.previouslyFailed();if(e.webSocketOnly&&(n||ne("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[pe];else{const s=this.transports_=[];for(const r of Gt.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Gt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Gt.globalTransportInitialized_=!1;/**
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
 */const Mf=6e4,Lf=5e3,Ff=10*1024,Bf=100*1024,Ei="t",Ar="d",Vf="s",xr="r",$f="e",Pr="o",Dr="a",Or="n",Mr="p",Wf="h";class Uf{constructor(e,n,i,s,r,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=cn("c:"+this.id+":"),this.transportManager_=new Gt(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ft(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Bf?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ff?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ei in e){const n=e[Ei];n===Dr?this.upgradeIfSecondaryHealthy_():n===xr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Pr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Rt("t",e),i=Rt("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Mr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Dr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Or,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Rt("t",e),i=Rt("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Rt(Ei,e);if(Ar in e){const i=e[Ar];if(n===Wf){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Or){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Vf?this.onConnectionShutdown_(i):n===xr?this.onReset_(i):n===$f?Ui("Server Error: "+i):n===Pr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ui("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),gs!==i&&ne("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Ft(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Mf))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ft(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Lf))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Mr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qe.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Oa{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Ma{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class xn extends Ma{static getInstance(){return new xn}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Oo()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Lr=32,Fr=768;class D{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function A(){return new D("")}function I(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function We(t){return t.pieces_.length-t.pieceNum_}function O(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new D(t.pieces_,e)}function ps(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Hf(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function qt(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function La(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new D(e,0)}function V(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof D)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new D(n,0)}function E(t){return t.pieceNum_>=t.pieces_.length}function te(t,e){const n=I(t),i=I(e);if(n===null)return e;if(n===i)return te(O(t),O(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function zf(t,e){const n=qt(t,0),i=qt(e,0);for(let s=0;s<n.length&&s<i.length;s++){const r=at(n[s],i[s]);if(r!==0)return r}return n.length===i.length?0:n.length<i.length?-1:1}function vs(t,e){if(We(t)!==We(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function _e(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(We(t)>We(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class jf{constructor(e,n){this.errorPrefix_=n,this.parts_=qt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Jn(this.parts_[i]);Fa(this)}}function Gf(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Jn(e),Fa(t)}function qf(t){const e=t.parts_.pop();t.byteLength_-=Jn(e),t.parts_.length>0&&(t.byteLength_-=1)}function Fa(t){if(t.byteLength_>Fr)throw new Error(t.errorPrefix_+"has a key path longer than "+Fr+" bytes ("+t.byteLength_+").");if(t.parts_.length>Lr)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Lr+") or object contains a cycle "+Ye(t))}function Ye(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class ys extends Ma{static getInstance(){return new ys}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const At=1e3,Yf=60*5*1e3,Br=30*1e3,Kf=1.3,Qf=3e4,Xf="server_kill",Vr=3;class ke extends Oa{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ke.nextPersistentConnectionId_++,this.log_=cn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=At,this.maxReconnectDelay_=Yf,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ys.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&xn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(j(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new Ce,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;ke.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&we(e,"w")){const i=gt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ne(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||_u(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Br)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=gu(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+j(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ui("Unrecognized action received from server: "+j(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=At,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=At,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Qf&&(this.reconnectDelay_=At),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Kf)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ke.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(u){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?K("getToken() completed but was canceled"):(K("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,a=new Uf(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,f=>{ne(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Xf)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&ne(u),l())}}}interrupt(e){K("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){K("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Mi(this.interruptReasons_)&&(this.reconnectDelay_=At,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>fs(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new D(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){K("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Vr&&(this.reconnectDelay_=Br,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){K("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Vr&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+fa.replace(/\./g,"-")]=1,Oo()?e["framework.cordova"]=1:lu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=xn.getInstance().currentlyOnline();return Mi(this.interruptReasons_)&&e}}ke.nextPersistentConnectionId_=0;ke.nextConnectionId_=0;/**
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
 */class S{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new S(e,n)}}/**
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
 */class ni{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new S(mt,e),s=new S(mt,n);return this.compare(i,s)!==0}minPost(){return S.MIN}}/**
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
 */let _n;class Ba extends ni{static get __EMPTY_NODE(){return _n}static set __EMPTY_NODE(e){_n=e}compare(e,n){return at(e.name,n.name)}isDefinedOn(e){throw It("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return S.MIN}maxPost(){return new S(nt,_n)}makePost(e,n){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new S(e,_n)}toString(){return".key"}}const ft=new Ba;/**
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
 */class mn{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Y{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Y.RED,this.left=s??ie.EMPTY_NODE,this.right=r??ie.EMPTY_NODE}copy(e,n,i,s,r){return new Y(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ie.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return ie.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Y.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Y.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Y.RED=!0;Y.BLACK=!1;class Jf{copy(e,n,i,s,r){return this}insert(e,n,i){return new Y(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ie{constructor(e,n=ie.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ie(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Y.BLACK,null,null))}remove(e){return new ie(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Y.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new mn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new mn(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new mn(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new mn(this.root_,null,this.comparator_,!0,e)}}ie.EMPTY_NODE=new Jf;/**
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
 */function Zf(t,e){return at(t.name,e.name)}function Cs(t,e){return at(t,e)}/**
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
 */let zi;function eg(t){zi=t}const Va=function(t){return typeof t=="number"?"number:"+pa(t):"string:"+t},$a=function(t){if(t.isLeafNode()){const e=t.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&we(e,".sv"),"Priority must be a string or number.")}else m(t===zi||t.isEmpty(),"priority of unexpected type.");m(t===zi||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let $r;class q{static set __childrenNodeConstructor(e){$r=e}static get __childrenNodeConstructor(){return $r}constructor(e,n=q.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),$a(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new q(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:q.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return E(e)?this:I(e)===".priority"?this.priorityNode_:q.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:q.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=I(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(m(i!==".priority"||We(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,q.__childrenNodeConstructor.EMPTY_NODE.updateChild(O(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Va(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=pa(this.value_):e+=this.value_,this.lazyHash_=_a(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===q.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof q.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=q.VALUE_TYPE_ORDER.indexOf(n),r=q.VALUE_TYPE_ORDER.indexOf(i);return m(s>=0,"Unknown leaf type: "+n),m(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}q.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Wa,Ua;function tg(t){Wa=t}function ng(t){Ua=t}class ig extends ni{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?at(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return S.MIN}maxPost(){return new S(nt,new q("[PRIORITY-POST]",Ua))}makePost(e,n){const i=Wa(e);return new S(n,new q("[PRIORITY-POST]",i))}toString(){return".priority"}}const $=new ig;/**
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
 */const sg=Math.log(2);class rg{constructor(e){const n=r=>parseInt(Math.log(r)/sg,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Pn=function(t,e,n,i){t.sort(e);const s=function(l,c){const d=c-l;let u,h;if(d===0)return null;if(d===1)return u=t[l],h=n?n(u):u,new Y(h,u.node,Y.BLACK,null,null);{const f=parseInt(d/2,10)+l,g=s(l,f),_=s(f+1,c);return u=t[f],h=n?n(u):u,new Y(h,u.node,Y.BLACK,g,_)}},r=function(l){let c=null,d=null,u=t.length;const h=function(g,_){const v=u-g,w=u;u-=g;const T=s(v+1,w),y=t[v],k=n?n(y):y;f(new Y(k,y.node,_,null,T))},f=function(g){c?(c.left=g,c=g):(d=g,c=g)};for(let g=0;g<l.count;++g){const _=l.nextBitIsOne(),v=Math.pow(2,l.count-(g+1));_?h(v,Y.BLACK):(h(v,Y.BLACK),h(v,Y.RED))}return d},o=new rg(t.length),a=r(o);return new ie(i||e,a)};/**
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
 */let Si;const ut={};class Se{static get Default(){return m(ut&&$,"ChildrenNode.ts has not been loaded"),Si=Si||new Se({".priority":ut},{".priority":$}),Si}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=gt(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ie?n:null}hasIndex(e){return we(this.indexSet_,e.toString())}addIndex(e,n){m(e!==ft,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(S.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Pn(i,e.getCompare()):a=ut;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new Se(d,c)}addToIndexes(e,n){const i=Tn(this.indexes_,(s,r)=>{const o=gt(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),s===ut)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(S.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Pn(a,o.getCompare())}else return ut;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new S(e.name,a))),l.insert(e,e.node)}});return new Se(i,this.indexSet_)}removeFromIndexes(e,n){const i=Tn(this.indexes_,s=>{if(s===ut)return s;{const r=n.get(e.name);return r?s.remove(new S(e.name,r)):s}});return new Se(i,this.indexSet_)}}/**
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
 */let xt;class C{static get EMPTY_NODE(){return xt||(xt=new C(new ie(Cs),null,Se.Default))}constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&$a(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||xt}updatePriority(e){return this.children_.isEmpty()?this:new C(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?xt:n}}getChild(e){const n=I(e);return n===null?this:this.getImmediateChild(n).getChild(O(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(m(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new S(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?xt:this.priorityNode_;return new C(s,o,r)}}updateChild(e,n){const i=I(e);if(i===null)return n;{m(I(e)!==".priority"||We(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(O(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild($,(o,a)=>{n[o]=a.val(e),i++,r&&C.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Va(this.getPriority().val())+":"),this.forEachChild($,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":_a(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new S(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new S(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new S(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,S.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,S.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===un?-1:0}withIndex(e){if(e===ft||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new C(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ft||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator($),s=n.getIterator($);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ft?null:this.indexMap_.get(e.toString())}}C.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class og extends C{constructor(){super(new ie(Cs),C.EMPTY_NODE,Se.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return C.EMPTY_NODE}isEmpty(){return!1}}const un=new og;Object.defineProperties(S,{MIN:{value:new S(mt,C.EMPTY_NODE)},MAX:{value:new S(nt,un)}});Ba.__EMPTY_NODE=C.EMPTY_NODE;q.__childrenNodeConstructor=C;eg(un);ng(un);/**
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
 */const ag=!0;function U(t,e=null){if(t===null)return C.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new q(n,U(e))}if(!(t instanceof Array)&&ag){const n=[];let i=!1;if(Q(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=U(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new S(o,l)))}}),n.length===0)return C.EMPTY_NODE;const r=Pn(n,Zf,o=>o.name,Cs);if(i){const o=Pn(n,$.getCompare());return new C(r,U(e),new Se({".priority":o},{".priority":$}))}else return new C(r,U(e),Se.Default)}else{let n=C.EMPTY_NODE;return Q(t,(i,s)=>{if(we(t,i)&&i.substring(0,1)!=="."){const r=U(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(U(e))}}tg(U);/**
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
 */class lg extends ni{constructor(e){super(),this.indexPath_=e,m(!E(e)&&I(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?at(e.name,n.name):r}makePost(e,n){const i=U(e),s=C.EMPTY_NODE.updateChild(this.indexPath_,i);return new S(n,s)}maxPost(){const e=C.EMPTY_NODE.updateChild(this.indexPath_,un);return new S(nt,e)}toString(){return qt(this.indexPath_,0).join("/")}}/**
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
 */class cg extends ni{compare(e,n){const i=e.node.compareTo(n.node);return i===0?at(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return S.MIN}maxPost(){return S.MAX}makePost(e,n){const i=U(e);return new S(n,i)}toString(){return".value"}}const ug=new cg;/**
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
 */function Ha(t){return{type:"value",snapshotNode:t}}function pt(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Yt(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Kt(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function dg(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class bs{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(Yt(n,a)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(pt(n,i)):o.trackChildChange(Kt(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild($,(s,r)=>{n.hasChild(s)||i.trackChildChange(Yt(s,r))}),n.isLeafNode()||n.forEachChild($,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Kt(s,r,o))}else i.trackChildChange(pt(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?C.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Qt{constructor(e){this.indexedFilter_=new bs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Qt.getStartPost_(e),this.endPost_=Qt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,s,r,o){return this.matches(new S(n,i))||(i=C.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=C.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(C.EMPTY_NODE);const r=this;return n.forEachChild($,(o,a)=>{r.matches(new S(o,a))||(s=s.updateImmediateChild(o,C.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class hg{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Qt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new S(n,i))||(i=C.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=C.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=C.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(C.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,C.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(h,f)=>u(f,h)}else o=this.index_.getCompare();const a=e;m(a.numChildren()===this.limit_,"");const l=new S(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let h=s.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,l);if(d&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Kt(n,i,u)),a.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(Yt(n,u));const _=a.updateImmediateChild(n,C.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(pt(h.name,h.node)),_.updateImmediateChild(h.name,h.node)):_}}else return i.isEmpty()?e:d&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Yt(c.name,c.node)),r.trackChildChange(pt(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,C.EMPTY_NODE)):e}}/**
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
 */class ws{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=$}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:mt}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:nt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===$}copy(){const e=new ws;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function fg(t){return t.loadsAllData()?new bs(t.getIndex()):t.hasLimit()?new hg(t):new Qt(t)}function Wr(t){const e={};if(t.isDefault())return e;let n;if(t.index_===$?n="$priority":t.index_===ug?n="$value":t.index_===ft?n="$key":(m(t.index_ instanceof lg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=j(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=j(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+j(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=j(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+j(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ur(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==$&&(e.i=t.index_.toString()),e}/**
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
 */class Dn extends Oa{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=cn("p:rest:"),this.listens_={}}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Dn.getListenId_(e,i),a={};this.listens_[o]=a;const l=Wr(e._queryParams);this.restRequest_(r+".json",l,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,i),gt(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",s(h,null)}})}unlisten(e,n){const i=Dn.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Wr(e._queryParams),i=e._path.toString(),s=new Ce;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+mu(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ht(a.responseText)}catch{ne("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&ne("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class gg{constructor(){this.rootNode_=C.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function On(){return{value:null,children:new Map}}function St(t,e,n){if(E(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=I(e);t.children.has(i)||t.children.set(i,On());const s=t.children.get(i);e=O(e),St(s,e,n)}}function ji(t,e){if(E(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild($,(i,s)=>{St(t,new D(i),s)}),ji(t,e)}}else if(t.children.size>0){const n=I(e);return e=O(e),t.children.has(n)&&ji(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Gi(t,e,n){t.value!==null?n(e,t.value):_g(t,(i,s)=>{const r=new D(e.toString()+"/"+i);Gi(s,r,n)})}function _g(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class mg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Q(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
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
 */const Hr=10*1e3,pg=30*1e3,vg=5*60*1e3;class yg{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new mg(e);const i=Hr+(pg-Hr)*Math.random();Ft(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Q(e,(s,r)=>{r>0&&we(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Ft(this.reportStats_.bind(this),Math.floor(Math.random()*2*vg))}}/**
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
 */var ve;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ve||(ve={}));function Is(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Es(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ss(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Mn{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=ve.ACK_USER_WRITE,this.source=Is()}operationForChild(e){if(E(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new D(e));return new Mn(A(),n,this.revert)}}else return m(I(this.path)===e,"operationForChild called for unrelated child."),new Mn(O(this.path),this.affectedTree,this.revert)}}/**
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
 */class Xt{constructor(e,n){this.source=e,this.path=n,this.type=ve.LISTEN_COMPLETE}operationForChild(e){return E(this.path)?new Xt(this.source,A()):new Xt(this.source,O(this.path))}}/**
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
 */class it{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=ve.OVERWRITE}operationForChild(e){return E(this.path)?new it(this.source,A(),this.snap.getImmediateChild(e)):new it(this.source,O(this.path),this.snap)}}/**
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
 */class vt{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=ve.MERGE}operationForChild(e){if(E(this.path)){const n=this.children.subtree(new D(e));return n.isEmpty()?null:n.value?new it(this.source,A(),n.value):new vt(this.source,A(),n)}else return m(I(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new vt(this.source,O(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ue{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(E(e))return this.isFullyInitialized()&&!this.filtered_;const n=I(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Cg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function bg(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(dg(o.childName,o.snapshotNode))}),Pt(t,s,"child_removed",e,i,n),Pt(t,s,"child_added",e,i,n),Pt(t,s,"child_moved",r,i,n),Pt(t,s,"child_changed",e,i,n),Pt(t,s,"value",e,i,n),s}function Pt(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>Ig(t,a,l)),o.forEach(a=>{const l=wg(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function wg(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Ig(t,e,n){if(e.childName==null||n.childName==null)throw It("Should only compare child_ events.");const i=new S(e.childName,e.snapshotNode),s=new S(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
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
 */function ii(t,e){return{eventCache:t,serverCache:e}}function Bt(t,e,n,i){return ii(new Ue(e,n,i),t.serverCache)}function za(t,e,n,i){return ii(t.eventCache,new Ue(e,n,i))}function Ln(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function st(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ti;const Eg=()=>(Ti||(Ti=new ie(lf)),Ti);class M{static fromObject(e){let n=new M(null);return Q(e,(i,s)=>{n=n.set(new D(i),s)}),n}constructor(e,n=Eg()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:A(),value:this.value};if(E(e))return null;{const i=I(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(O(e),n);return r!=null?{path:V(new D(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(E(e))return this;{const n=I(e),i=this.children.get(n);return i!==null?i.subtree(O(e)):new M(null)}}set(e,n){if(E(e))return new M(n,this.children);{const i=I(e),r=(this.children.get(i)||new M(null)).set(O(e),n),o=this.children.insert(i,r);return new M(this.value,o)}}remove(e){if(E(e))return this.children.isEmpty()?new M(null):new M(null,this.children);{const n=I(e),i=this.children.get(n);if(i){const s=i.remove(O(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new M(null):new M(this.value,r)}else return this}}get(e){if(E(e))return this.value;{const n=I(e),i=this.children.get(n);return i?i.get(O(e)):null}}setTree(e,n){if(E(e))return n;{const i=I(e),r=(this.children.get(i)||new M(null)).setTree(O(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new M(this.value,o)}}fold(e){return this.fold_(A(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(V(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,A(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(E(e))return null;{const r=I(e),o=this.children.get(r);return o?o.findOnPath_(O(e),V(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,A(),n)}foreachOnPath_(e,n,i){if(E(e))return this;{this.value&&i(n,this.value);const s=I(e),r=this.children.get(s);return r?r.foreachOnPath_(O(e),V(n,s),i):new M(null)}}foreach(e){this.foreach_(A(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(V(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class ye{constructor(e){this.writeTree_=e}static empty(){return new ye(new M(null))}}function Vt(t,e,n){if(E(e))return new ye(new M(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=te(s,e);return r=r.updateChild(o,n),new ye(t.writeTree_.set(s,r))}else{const s=new M(n),r=t.writeTree_.setTree(e,s);return new ye(r)}}}function qi(t,e,n){let i=t;return Q(n,(s,r)=>{i=Vt(i,V(e,s),r)}),i}function zr(t,e){if(E(e))return ye.empty();{const n=t.writeTree_.setTree(e,new M(null));return new ye(n)}}function Yi(t,e){return lt(t,e)!=null}function lt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(te(n.path,e)):null}function jr(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild($,(i,s)=>{e.push(new S(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new S(i,s.value))}),e}function Be(t,e){if(E(e))return t;{const n=lt(t,e);return n!=null?new ye(new M(n)):new ye(t.writeTree_.subtree(e))}}function Ki(t){return t.writeTree_.isEmpty()}function yt(t,e){return ja(A(),t.writeTree_,e)}function ja(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=ja(V(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(V(t,".priority"),i)),n}}/**
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
 */function si(t,e){return Ka(e,t)}function Sg(t,e,n,i,s){m(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=Vt(t.visibleWrites,e,n)),t.lastWriteId=i}function Tg(t,e,n,i){m(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=qi(t.visibleWrites,e,n),t.lastWriteId=i}function kg(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function Ng(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);m(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Rg(a,i.path)?s=!1:_e(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Ag(t),!0;if(i.snap)t.visibleWrites=zr(t.visibleWrites,i.path);else{const a=i.children;Q(a,l=>{t.visibleWrites=zr(t.visibleWrites,V(i.path,l))})}return!0}else return!1}function Rg(t,e){if(t.snap)return _e(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&_e(V(t.path,n),e))return!0;return!1}function Ag(t){t.visibleWrites=Ga(t.allWrites,xg,A()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function xg(t){return t.visible}function Ga(t,e,n){let i=ye.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)_e(n,o)?(a=te(n,o),i=Vt(i,a,r.snap)):_e(o,n)&&(a=te(o,n),i=Vt(i,A(),r.snap.getChild(a)));else if(r.children){if(_e(n,o))a=te(n,o),i=qi(i,a,r.children);else if(_e(o,n))if(a=te(o,n),E(a))i=qi(i,A(),r.children);else{const l=gt(r.children,I(a));if(l){const c=l.getChild(O(a));i=Vt(i,A(),c)}}}else throw It("WriteRecord should have .snap or .children")}}return i}function qa(t,e,n,i,s){if(!i&&!s){const r=lt(t.visibleWrites,e);if(r!=null)return r;{const o=Be(t.visibleWrites,e);if(Ki(o))return n;if(n==null&&!Yi(o,A()))return null;{const a=n||C.EMPTY_NODE;return yt(o,a)}}}else{const r=Be(t.visibleWrites,e);if(!s&&Ki(r))return n;if(!s&&n==null&&!Yi(r,A()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(_e(c.path,e)||_e(e,c.path))},a=Ga(t.allWrites,o,e),l=n||C.EMPTY_NODE;return yt(a,l)}}}function Pg(t,e,n){let i=C.EMPTY_NODE;const s=lt(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild($,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Be(t.visibleWrites,e);return n.forEachChild($,(o,a)=>{const l=yt(Be(r,new D(o)),a);i=i.updateImmediateChild(o,l)}),jr(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Be(t.visibleWrites,e);return jr(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Dg(t,e,n,i,s){m(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=V(e,n);if(Yi(t.visibleWrites,r))return null;{const o=Be(t.visibleWrites,r);return Ki(o)?s.getChild(n):yt(o,s.getChild(n))}}function Og(t,e,n,i){const s=V(e,n),r=lt(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Be(t.visibleWrites,s);return yt(o,i.getNode().getImmediateChild(n))}else return null}function Mg(t,e){return lt(t.visibleWrites,e)}function Lg(t,e,n,i,s,r,o){let a;const l=Be(t.visibleWrites,e),c=lt(l,A());if(c!=null)a=c;else if(n!=null)a=yt(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),h=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=h.getNext();for(;f&&d.length<s;)u(f,i)!==0&&d.push(f),f=h.getNext();return d}else return[]}function Fg(){return{visibleWrites:ye.empty(),allWrites:[],lastWriteId:-1}}function Fn(t,e,n,i){return qa(t.writeTree,t.treePath,e,n,i)}function Ts(t,e){return Pg(t.writeTree,t.treePath,e)}function Gr(t,e,n,i){return Dg(t.writeTree,t.treePath,e,n,i)}function Bn(t,e){return Mg(t.writeTree,V(t.treePath,e))}function Bg(t,e,n,i,s,r){return Lg(t.writeTree,t.treePath,e,n,i,s,r)}function ks(t,e,n){return Og(t.writeTree,t.treePath,e,n)}function Ya(t,e){return Ka(V(t.treePath,e),t.writeTree)}function Ka(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Vg{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;m(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),m(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Kt(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,Yt(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,pt(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Kt(i,e.snapshotNode,s.oldSnap));else throw It("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class $g{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Qa=new $g;class Ns{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Ue(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ks(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:st(this.viewCache_),r=Bg(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function Wg(t){return{filter:t}}function Ug(t,e){m(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Hg(t,e,n,i,s){const r=new Vg;let o,a;if(n.type===ve.OVERWRITE){const c=n;c.source.fromUser?o=Qi(t,e,c.path,c.snap,i,s,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!E(c.path),o=Vn(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===ve.MERGE){const c=n;c.source.fromUser?o=jg(t,e,c.path,c.children,i,s,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Xi(t,e,c.path,c.children,i,s,a,r))}else if(n.type===ve.ACK_USER_WRITE){const c=n;c.revert?o=Yg(t,e,c.path,i,s,r):o=Gg(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===ve.LISTEN_COMPLETE)o=qg(t,e,n.path,i,r);else throw It("Unknown operation type: "+n.type);const l=r.getChanges();return zg(e,o,l),{viewCache:o,changes:l}}function zg(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Ln(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Ha(Ln(e)))}}function Xa(t,e,n,i,s,r){const o=e.eventCache;if(Bn(i,n)!=null)return e;{let a,l;if(E(n))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=st(e),d=c instanceof C?c:C.EMPTY_NODE,u=Ts(i,d);a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=Fn(i,st(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=I(n);if(c===".priority"){m(We(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const u=Gr(i,n,d,l);u!=null?a=t.filter.updatePriority(d,u):a=o.getNode()}else{const d=O(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Gr(i,n,o.getNode(),l);h!=null?u=o.getNode().getImmediateChild(c).updateChild(d,h):u=o.getNode().getImmediateChild(c)}else u=ks(i,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,d,s,r):a=o.getNode()}}return Bt(e,a,o.isFullyInitialized()||E(n),t.filter.filtersNodes())}}function Vn(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(E(n))c=d.updateFullNode(l.getNode(),i,null);else if(d.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,i);c=d.updateFullNode(l.getNode(),f,null)}else{const f=I(n);if(!l.isCompleteForPath(n)&&We(n)>1)return e;const g=O(n),v=l.getNode().getImmediateChild(f).updateChild(g,i);f===".priority"?c=d.updatePriority(l.getNode(),v):c=d.updateChild(l.getNode(),f,v,g,Qa,null)}const u=za(e,c,l.isFullyInitialized()||E(n),d.filtersNodes()),h=new Ns(s,u,r);return Xa(t,u,n,s,h,a)}function Qi(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const d=new Ns(s,e,r);if(E(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Bt(e,c,!0,t.filter.filtersNodes());else{const u=I(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=Bt(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=O(n),f=a.getNode().getImmediateChild(u);let g;if(E(h))g=i;else{const _=d.getCompleteChild(u);_!=null?ps(h)===".priority"&&_.getChild(La(h)).isEmpty()?g=_:g=_.updateChild(h,i):g=C.EMPTY_NODE}if(f.equals(g))l=e;else{const _=t.filter.updateChild(a.getNode(),u,g,h,d,o);l=Bt(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function qr(t,e){return t.eventCache.isCompleteForChild(e)}function jg(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const d=V(n,l);qr(e,I(d))&&(a=Qi(t,a,d,c,s,r,o))}),i.foreach((l,c)=>{const d=V(n,l);qr(e,I(d))||(a=Qi(t,a,d,c,s,r,o))}),a}function Yr(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Xi(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;E(n)?c=i:c=new M(null).setTree(n,i);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){const f=e.serverCache.getNode().getImmediateChild(u),g=Yr(t,f,h);l=Vn(t,l,new D(u),g,s,r,o,a)}}),c.children.inorderTraversal((u,h)=>{const f=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!f){const g=e.serverCache.getNode().getImmediateChild(u),_=Yr(t,g,h);l=Vn(t,l,new D(u),_,s,r,o,a)}}),l}function Gg(t,e,n,i,s,r,o){if(Bn(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(E(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Vn(t,e,n,l.getNode().getChild(n),s,r,a,o);if(E(n)){let c=new M(null);return l.getNode().forEachChild(ft,(d,u)=>{c=c.set(new D(d),u)}),Xi(t,e,n,c,s,r,a,o)}else return e}else{let c=new M(null);return i.foreach((d,u)=>{const h=V(n,d);l.isCompleteForPath(h)&&(c=c.set(d,l.getNode().getChild(h)))}),Xi(t,e,n,c,s,r,a,o)}}function qg(t,e,n,i,s){const r=e.serverCache,o=za(e,r.getNode(),r.isFullyInitialized()||E(n),r.isFiltered());return Xa(t,o,n,i,Qa,s)}function Yg(t,e,n,i,s,r){let o;if(Bn(i,n)!=null)return e;{const a=new Ns(i,e,s),l=e.eventCache.getNode();let c;if(E(n)||I(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Fn(i,st(e));else{const u=e.serverCache.getNode();m(u instanceof C,"serverChildren would be complete if leaf node"),d=Ts(i,u)}d=d,c=t.filter.updateFullNode(l,d,r)}else{const d=I(n);let u=ks(i,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=l.getImmediateChild(d)),u!=null?c=t.filter.updateChild(l,d,u,O(n),a,r):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,C.EMPTY_NODE,O(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Fn(i,st(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Bn(i,A())!=null,Bt(e,c,o,t.filter.filtersNodes())}}/**
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
 */class Kg{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new bs(i.getIndex()),r=fg(i);this.processor_=Wg(r);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(C.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(C.EMPTY_NODE,a.getNode(),null),d=new Ue(l,o.isFullyInitialized(),s.filtersNodes()),u=new Ue(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=ii(u,d),this.eventGenerator_=new Cg(this.query_)}get query(){return this.query_}}function Qg(t){return t.viewCache_.serverCache.getNode()}function Xg(t){return Ln(t.viewCache_)}function Jg(t,e){const n=st(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!E(e)&&!n.getImmediateChild(I(e)).isEmpty())?n.getChild(e):null}function Kr(t){return t.eventRegistrations_.length===0}function Zg(t,e){t.eventRegistrations_.push(e)}function Qr(t,e,n){const i=[];if(n){m(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function Xr(t,e,n,i){e.type===ve.MERGE&&e.source.queryId!==null&&(m(st(t.viewCache_),"We should always have a full cache before handling merges"),m(Ln(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=Hg(t.processor_,s,e,n,i);return Ug(t.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Ja(t,r.changes,r.viewCache.eventCache.getNode(),null)}function e_(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild($,(r,o)=>{i.push(pt(r,o))}),n.isFullyInitialized()&&i.push(Ha(n.getNode())),Ja(t,i,n.getNode(),e)}function Ja(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return bg(t.eventGenerator_,e,n,s)}/**
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
 */let $n;class Za{constructor(){this.views=new Map}}function t_(t){m(!$n,"__referenceConstructor has already been defined"),$n=t}function n_(){return m($n,"Reference.ts has not been loaded"),$n}function i_(t){return t.views.size===0}function Rs(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return m(r!=null,"SyncTree gave us an op for an invalid query."),Xr(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(Xr(o,e,n,i));return r}}function el(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Fn(n,s?i:null),l=!1;a?l=!0:i instanceof C?(a=Ts(n,i),l=!1):(a=C.EMPTY_NODE,l=!1);const c=ii(new Ue(a,l,!1),new Ue(i,s,!1));return new Kg(e,c)}return o}function s_(t,e,n,i,s,r){const o=el(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Zg(o,n),e_(o,n)}function r_(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const a=He(t);if(s==="default")for(const[l,c]of t.views.entries())o=o.concat(Qr(c,n,i)),Kr(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(s);l&&(o=o.concat(Qr(l,n,i)),Kr(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!He(t)&&r.push(new(n_())(e._repo,e._path)),{removed:r,events:o}}function tl(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ve(t,e){let n=null;for(const i of t.views.values())n=n||Jg(i,e);return n}function nl(t,e){if(e._queryParams.loadsAllData())return ri(t);{const i=e._queryIdentifier;return t.views.get(i)}}function il(t,e){return nl(t,e)!=null}function He(t){return ri(t)!=null}function ri(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Wn;function o_(t){m(!Wn,"__referenceConstructor has already been defined"),Wn=t}function a_(){return m(Wn,"Reference.ts has not been loaded"),Wn}let l_=1;class Jr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new M(null),this.pendingWriteTree_=Fg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function sl(t,e,n,i,s){return Sg(t.pendingWriteTree_,e,n,i,s),s?Tt(t,new it(Is(),e,n)):[]}function c_(t,e,n,i){Tg(t.pendingWriteTree_,e,n,i);const s=M.fromObject(n);return Tt(t,new vt(Is(),e,s))}function Oe(t,e,n=!1){const i=kg(t.pendingWriteTree_,e);if(Ng(t.pendingWriteTree_,e)){let r=new M(null);return i.snap!=null?r=r.set(A(),!0):Q(i.children,o=>{r=r.set(new D(o),!0)}),Tt(t,new Mn(i.path,r,n))}else return[]}function dn(t,e,n){return Tt(t,new it(Es(),e,n))}function u_(t,e,n){const i=M.fromObject(n);return Tt(t,new vt(Es(),e,i))}function d_(t,e){return Tt(t,new Xt(Es(),e))}function h_(t,e,n){const i=xs(t,n);if(i){const s=Ps(i),r=s.path,o=s.queryId,a=te(r,e),l=new Xt(Ss(o),a);return Ds(t,r,l)}else return[]}function Un(t,e,n,i,s=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||il(o,e))){const l=r_(o,e,n,i);i_(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const d=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(r,(h,f)=>He(f));if(d&&!u){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const f=__(h);for(let g=0;g<f.length;++g){const _=f[g],v=_.query,w=ll(t,_);t.listenProvider_.startListening($t(v),Jt(t,v),w.hashFn,w.onComplete)}}}!u&&c.length>0&&!i&&(d?t.listenProvider_.stopListening($t(e),null):c.forEach(h=>{const f=t.queryToTagMap.get(oi(h));t.listenProvider_.stopListening($t(h),f)}))}m_(t,c)}return a}function rl(t,e,n,i){const s=xs(t,i);if(s!=null){const r=Ps(s),o=r.path,a=r.queryId,l=te(o,e),c=new it(Ss(a),l,n);return Ds(t,o,c)}else return[]}function f_(t,e,n,i){const s=xs(t,i);if(s){const r=Ps(s),o=r.path,a=r.queryId,l=te(o,e),c=M.fromObject(n),d=new vt(Ss(a),l,c);return Ds(t,o,d)}else return[]}function Ji(t,e,n,i=!1){const s=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(s,(h,f)=>{const g=te(h,s);r=r||Ve(f,g),o=o||He(f)});let a=t.syncPointTree_.get(s);a?(o=o||He(a),r=r||Ve(a,A())):(a=new Za,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=C.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((f,g)=>{const _=Ve(g,A());_&&(r=r.updateImmediateChild(f,_))}));const c=il(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=oi(e);m(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=p_();t.queryToTagMap.set(h,f),t.tagToQueryMap.set(f,h)}const d=si(t.pendingWriteTree_,s);let u=s_(a,e,n,d,r,l);if(!c&&!o&&!i){const h=nl(a,e);u=u.concat(v_(t,e,h))}return u}function As(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=te(o,e),c=Ve(a,l);if(c)return c});return qa(s,e,r,n,!0)}function g_(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const u=te(c,n);i=i||Ve(d,u)});let s=t.syncPointTree_.get(n);s?i=i||Ve(s,A()):(s=new Za,t.syncPointTree_=t.syncPointTree_.set(n,s));const r=i!=null,o=r?new Ue(i,!0,!1):null,a=si(t.pendingWriteTree_,e._path),l=el(s,e,a,r?o.getNode():C.EMPTY_NODE,r);return Xg(l)}function Tt(t,e){return ol(e,t.syncPointTree_,null,si(t.pendingWriteTree_,A()))}function ol(t,e,n,i){if(E(t.path))return al(t,e,n,i);{const s=e.get(A());n==null&&s!=null&&(n=Ve(s,A()));let r=[];const o=I(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=Ya(i,o);r=r.concat(ol(a,l,c,d))}return s&&(r=r.concat(Rs(s,t,i,n))),r}}function al(t,e,n,i){const s=e.get(A());n==null&&s!=null&&(n=Ve(s,A()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Ya(i,o),d=t.operationForChild(o);d&&(r=r.concat(al(d,a,l,c)))}),s&&(r=r.concat(Rs(s,t,i,n))),r}function ll(t,e){const n=e.query,i=Jt(t,n);return{hashFn:()=>(Qg(e)||C.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?h_(t,n._path,i):d_(t,n._path);{const r=df(s,n);return Un(t,n,null,r)}}}}function Jt(t,e){const n=oi(e);return t.queryToTagMap.get(n)}function oi(t){return t._path.toString()+"$"+t._queryIdentifier}function xs(t,e){return t.tagToQueryMap.get(e)}function Ps(t){const e=t.indexOf("$");return m(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new D(t.substr(0,e))}}function Ds(t,e,n){const i=t.syncPointTree_.get(e);m(i,"Missing sync point for query tag that we're tracking");const s=si(t.pendingWriteTree_,e);return Rs(i,n,s,null)}function __(t){return t.fold((e,n,i)=>{if(n&&He(n))return[ri(n)];{let s=[];return n&&(s=tl(n)),Q(i,(r,o)=>{s=s.concat(o)}),s}})}function $t(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(a_())(t._repo,t._path):t}function m_(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=oi(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function p_(){return l_++}function v_(t,e,n){const i=e._path,s=Jt(t,e),r=ll(t,n),o=t.listenProvider_.startListening($t(e),s,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(i);if(s)m(!He(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,u)=>{if(!E(c)&&d&&He(d))return[ri(d).query];{let h=[];return d&&(h=h.concat(tl(d).map(f=>f.query))),Q(u,(f,g)=>{h=h.concat(g)}),h}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening($t(d),Jt(t,d))}}return o}/**
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
 */class Os{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Os(n)}node(){return this.node_}}class Ms{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=V(this.path_,e);return new Ms(this.syncTree_,n)}node(){return As(this.syncTree_,this.path_)}}const y_=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Zr=function(t,e,n){if(!t||typeof t!="object")return t;if(m(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return C_(t[".sv"],e,n);if(typeof t[".sv"]=="object")return b_(t[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},C_=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:m(!1,"Unexpected server value: "+t)}},b_=function(t,e,n){t.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&m(!1,"Unexpected increment value: "+i);const s=e.node();if(m(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},cl=function(t,e,n,i){return Ls(e,new Ms(n,t),i)},ul=function(t,e,n){return Ls(t,new Os(e),n)};function Ls(t,e,n){const i=t.getPriority().val(),s=Zr(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Zr(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new q(a,U(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new q(s))),o.forEachChild($,(a,l)=>{const c=Ls(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Fs{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Bs(t,e){let n=e instanceof D?e:new D(e),i=t,s=I(n);for(;s!==null;){const r=gt(i.node.children,s)||{children:{},childCount:0};i=new Fs(s,i,r),n=O(n),s=I(n)}return i}function kt(t){return t.node.value}function dl(t,e){t.node.value=e,Zi(t)}function hl(t){return t.node.childCount>0}function w_(t){return kt(t)===void 0&&!hl(t)}function ai(t,e){Q(t.node.children,(n,i)=>{e(new Fs(n,t,i))})}function fl(t,e,n,i){n&&e(t),ai(t,s=>{fl(s,e,!0)})}function I_(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function hn(t){return new D(t.parent===null?t.name:hn(t.parent)+"/"+t.name)}function Zi(t){t.parent!==null&&E_(t.parent,t.name,t)}function E_(t,e,n){const i=w_(n),s=we(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Zi(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Zi(t))}/**
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
 */const S_=/[\[\].#$\/\u0000-\u001F\u007F]/,T_=/[\[\].#$\u0000-\u001F\u007F]/,ki=10*1024*1024,Vs=function(t){return typeof t=="string"&&t.length!==0&&!S_.test(t)},gl=function(t){return typeof t=="string"&&t.length!==0&&!T_.test(t)},k_=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),gl(t)},_l=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!ti(t)||t&&typeof t=="object"&&we(t,".sv")},Hn=function(t,e,n,i){i&&e===void 0||li(_t(t,"value"),e,n)},li=function(t,e,n){const i=n instanceof D?new jf(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ye(i));if(typeof e=="function")throw new Error(t+"contains a function "+Ye(i)+" with contents = "+e.toString());if(ti(e))throw new Error(t+"contains "+e.toString()+" "+Ye(i));if(typeof e=="string"&&e.length>ki/3&&Jn(e)>ki)throw new Error(t+"contains a string greater than "+ki+" utf8 bytes "+Ye(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Q(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Vs(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ye(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Gf(i,o),li(t,a,i),qf(i)}),s&&r)throw new Error(t+' contains ".value" child '+Ye(i)+" in addition to actual children.")}},N_=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const r=qt(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Vs(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(zf);let s=null;for(n=0;n<e.length;n++){if(i=e[n],s!==null&&_e(s,i))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},ml=function(t,e,n,i){const s=_t(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];Q(e,(o,a)=>{const l=new D(o);if(li(s,a,V(n,l)),ps(l)===".priority"&&!_l(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),N_(s,r)},R_=function(t,e,n){if(ti(e))throw new Error(_t(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!_l(e))throw new Error(_t(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},pl=function(t,e,n,i){if(!gl(n))throw new Error(_t(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},A_=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),pl(t,e,n)},Xe=function(t,e){if(I(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},x_=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Vs(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!k_(n))throw new Error(_t(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class P_{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ci(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!vs(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function vl(t,e,n){ci(t,n),yl(t,i=>vs(i,e))}function me(t,e,n){ci(t,n),yl(t,i=>_e(i,e)||_e(e,i))}function yl(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(D_(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function D_(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Lt&&K("event: "+n.toString()),Et(i)}}}/**
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
 */const O_="repo_interrupt",M_=25;class L_{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new P_,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=On(),this.transactionQueueTree_=new Fs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function F_(t,e,n){if(t.stats_=_s(t.repoInfo_),t.forceRestClient_||_f())t.server_=new Dn(t.repoInfo_,(i,s,r,o)=>{eo(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>to(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{j(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new ke(t.repoInfo_,e,(i,s,r,o)=>{eo(t,i,s,r,o)},i=>{to(t,i)},i=>{B_(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=Cf(t.repoInfo_,()=>new yg(t.stats_,t.server_)),t.infoData_=new gg,t.infoSyncTree_=new Jr({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=dn(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),$s(t,"connected",!1),t.serverSyncTree_=new Jr({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);me(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function Cl(t){const n=t.infoData_.getNode(new D(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ui(t){return y_({timestamp:Cl(t)})}function eo(t,e,n,i,s){t.dataUpdateCount++;const r=new D(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=Tn(n,c=>U(c));o=f_(t.serverSyncTree_,r,l,s)}else{const l=U(n);o=rl(t.serverSyncTree_,r,l,s)}else if(i){const l=Tn(n,c=>U(c));o=u_(t.serverSyncTree_,r,l)}else{const l=U(n);o=dn(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ct(t,r)),me(t.eventQueue_,a,o)}function to(t,e){$s(t,"connected",e),e===!1&&U_(t)}function B_(t,e){Q(e,(n,i)=>{$s(t,n,i)})}function $s(t,e,n){const i=new D("/.info/"+e),s=U(n);t.infoData_.updateSnapshot(i,s);const r=dn(t.infoSyncTree_,i,s);me(t.eventQueue_,i,r)}function Ws(t){return t.nextWriteId_++}function V_(t,e,n){const i=g_(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(s=>{const r=U(s).withIndex(e._queryParams.getIndex());Ji(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=dn(t.serverSyncTree_,e._path,r);else{const a=Jt(t.serverSyncTree_,e);o=rl(t.serverSyncTree_,e._path,r,a)}return me(t.eventQueue_,e._path,o),Un(t.serverSyncTree_,e,n,null,!0),r},s=>(fn(t,"get for query "+j(e)+" failed: "+s),Promise.reject(new Error(s))))}function $_(t,e,n,i,s){fn(t,"set",{path:e.toString(),value:n,priority:i});const r=ui(t),o=U(n,i),a=As(t.serverSyncTree_,e),l=ul(o,a,r),c=Ws(t),d=sl(t.serverSyncTree_,e,l,c,!0);ci(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,f)=>{const g=h==="ok";g||ne("set at "+e+" failed: "+h);const _=Oe(t.serverSyncTree_,c,!g);me(t.eventQueue_,e,_),ze(t,s,h,f)});const u=Hs(t,e);Ct(t,u),me(t.eventQueue_,u,[])}function W_(t,e,n,i){fn(t,"update",{path:e.toString(),value:n});let s=!0;const r=ui(t),o={};if(Q(n,(a,l)=>{s=!1,o[a]=cl(V(e,a),U(l),t.serverSyncTree_,r)}),s)K("update() called with empty data.  Don't do anything."),ze(t,i,"ok",void 0);else{const a=Ws(t),l=c_(t.serverSyncTree_,e,o,a);ci(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,d)=>{const u=c==="ok";u||ne("update at "+e+" failed: "+c);const h=Oe(t.serverSyncTree_,a,!u),f=h.length>0?Ct(t,e):e;me(t.eventQueue_,f,h),ze(t,i,c,d)}),Q(n,c=>{const d=Hs(t,V(e,c));Ct(t,d)}),me(t.eventQueue_,e,[])}}function U_(t){fn(t,"onDisconnectEvents");const e=ui(t),n=On();Gi(t.onDisconnect_,A(),(s,r)=>{const o=cl(s,r,t.serverSyncTree_,e);St(n,s,o)});let i=[];Gi(n,A(),(s,r)=>{i=i.concat(dn(t.serverSyncTree_,s,r));const o=Hs(t,s);Ct(t,o)}),t.onDisconnect_=On(),me(t.eventQueue_,A(),i)}function H_(t,e,n){t.server_.onDisconnectCancel(e.toString(),(i,s)=>{i==="ok"&&ji(t.onDisconnect_,e),ze(t,n,i,s)})}function no(t,e,n,i){const s=U(n);t.server_.onDisconnectPut(e.toString(),s.val(!0),(r,o)=>{r==="ok"&&St(t.onDisconnect_,e,s),ze(t,i,r,o)})}function z_(t,e,n,i,s){const r=U(n,i);t.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&St(t.onDisconnect_,e,r),ze(t,s,o,a)})}function j_(t,e,n,i){if(Mi(n)){K("onDisconnect().update() called with empty data.  Don't do anything."),ze(t,i,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(s,r)=>{s==="ok"&&Q(n,(o,a)=>{const l=U(a);St(t.onDisconnect_,V(e,o),l)}),ze(t,i,s,r)})}function G_(t,e,n){let i;I(e._path)===".info"?i=Ji(t.infoSyncTree_,e,n):i=Ji(t.serverSyncTree_,e,n),vl(t.eventQueue_,e._path,i)}function q_(t,e,n){let i;I(e._path)===".info"?i=Un(t.infoSyncTree_,e,n):i=Un(t.serverSyncTree_,e,n),vl(t.eventQueue_,e._path,i)}function Y_(t){t.persistentConnection_&&t.persistentConnection_.interrupt(O_)}function fn(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),K(n,...e)}function ze(t,e,n,i){e&&Et(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function bl(t,e,n){return As(t.serverSyncTree_,e,n)||C.EMPTY_NODE}function Us(t,e=t.transactionQueueTree_){if(e||di(t,e),kt(e)){const n=Il(t,e);m(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&K_(t,hn(e),n)}else hl(e)&&ai(e,n=>{Us(t,n)})}function K_(t,e,n){const i=n.map(c=>c.currentWriteId),s=bl(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const d=n[c];m(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=te(e,d.path);r=r.updateChild(u,d.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{fn(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Oe(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&u.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();di(t,Bs(t.transactionQueueTree_,e)),Us(t,t.transactionQueueTree_),me(t.eventQueue_,e,d);for(let h=0;h<u.length;h++)Et(u[h])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{ne("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}Ct(t,e)}},o)}function Ct(t,e){const n=wl(t,e),i=hn(n),s=Il(t,n);return Q_(t,s,i),i}function Q_(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=te(n,l.path);let d=!1,u;if(m(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,u=l.abortReason,s=s.concat(Oe(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=M_)d=!0,u="maxretry",s=s.concat(Oe(t.serverSyncTree_,l.currentWriteId,!0));else{const h=bl(t,l.path,o);l.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){li("transaction failed: Data returned ",f,l.path);let g=U(f);typeof f=="object"&&f!=null&&we(f,".priority")||(g=g.updatePriority(h.getPriority()));const v=l.currentWriteId,w=ui(t),T=ul(g,h,w);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=T,l.currentWriteId=Ws(t),o.splice(o.indexOf(v),1),s=s.concat(sl(t.serverSyncTree_,l.path,T,l.currentWriteId,l.applyLocally)),s=s.concat(Oe(t.serverSyncTree_,v,!0))}else d=!0,u="nodata",s=s.concat(Oe(t.serverSyncTree_,l.currentWriteId,!0))}me(t.eventQueue_,n,s),s=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}di(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Et(i[a]);Us(t,t.transactionQueueTree_)}function wl(t,e){let n,i=t.transactionQueueTree_;for(n=I(e);n!==null&&kt(i)===void 0;)i=Bs(i,n),e=O(e),n=I(e);return i}function Il(t,e){const n=[];return El(t,e,n),n.sort((i,s)=>i.order-s.order),n}function El(t,e,n){const i=kt(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);ai(e,s=>{El(t,s,n)})}function di(t,e){const n=kt(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,dl(e,n.length>0?n:void 0)}ai(e,i=>{di(t,i)})}function Hs(t,e){const n=hn(wl(t,e)),i=Bs(t.transactionQueueTree_,e);return I_(i,s=>{Ni(t,s)}),Ni(t,i),fl(i,s=>{Ni(t,s)}),n}function Ni(t,e){const n=kt(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(m(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Oe(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?dl(e,void 0):n.length=r+1,me(t.eventQueue_,hn(e),s);for(let o=0;o<i.length;o++)Et(i[o])}}/**
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
 */function X_(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function J_(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ne(`Invalid query segment '${n}' in query '${t}'`)}return e}const io=function(t,e){const n=Z_(t),i=n.namespace;n.domain==="firebase.com"&&Ae(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Ae("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||of();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new ka(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new D(n.pathString)}},Z_=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(d,u)),d<u&&(s=X_(t.substring(d,u)));const h=J_(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=i}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */const so="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",em=function(){let t=0;const e=[];return function(n){const i=n===t;t=n;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=so.charAt(n%64),n=Math.floor(n/64);m(n===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=so.charAt(e[s]);return m(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class tm{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+j(this.snapshot.exportVal())}}class nm{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Sl{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class im{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new Ce;return H_(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Xe("OnDisconnect.remove",this._path);const e=new Ce;return no(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Xe("OnDisconnect.set",this._path),Hn("OnDisconnect.set",e,this._path,!1);const n=new Ce;return no(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Xe("OnDisconnect.setWithPriority",this._path),Hn("OnDisconnect.setWithPriority",e,this._path,!1),R_("OnDisconnect.setWithPriority",n);const i=new Ce;return z_(this._repo,this._path,e,n,i.wrapCallback(()=>{})),i.promise}update(e){Xe("OnDisconnect.update",this._path),ml("OnDisconnect.update",e,this._path);const n=new Ce;return j_(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class zs{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return E(this._path)?null:ps(this._path)}get ref(){return new Pe(this._repo,this._path)}get _queryIdentifier(){const e=Ur(this._queryParams),n=fs(e);return n==="{}"?"default":n}get _queryObject(){return Ur(this._queryParams)}isEqual(e){if(e=Ie(e),!(e instanceof zs))return!1;const n=this._repo===e._repo,i=vs(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Hf(this._path)}}class Pe extends zs{constructor(e,n){super(e,n,new ws,!1)}get parent(){const e=La(this._path);return e===null?null:new Pe(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Zt{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new D(e),i=en(this.ref,e);return new Zt(this._node.getChild(n),i,$)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Zt(s,en(this.ref,i),$)))}hasChild(e){const n=new D(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Pp(t,e){return t=Ie(t),t._checkNotDeleted("ref"),e!==void 0?en(t._root,e):t._root}function en(t,e){return t=Ie(t),I(t._path)===null?A_("child","path",e):pl("child","path",e),new Pe(t._repo,V(t._path,e))}function Dp(t){return t=Ie(t),new im(t._repo,t._path)}function Op(t,e){t=Ie(t),Xe("push",t._path),Hn("push",e,t._path,!0);const n=Cl(t._repo),i=em(n),s=en(t,i),r=en(t,i);let o;return e!=null?o=Tl(r,e).then(()=>r):o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function Mp(t){return Xe("remove",t._path),Tl(t,null)}function Tl(t,e){t=Ie(t),Xe("set",t._path),Hn("set",e,t._path,!1);const n=new Ce;return $_(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Lp(t,e){ml("update",e,t._path);const n=new Ce;return W_(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Fp(t){t=Ie(t);const e=new Sl(()=>{}),n=new hi(e);return V_(t._repo,t,n).then(i=>new Zt(i,new Pe(t._repo,t._path),t._queryParams.getIndex()))}class hi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new tm("value",this,new Zt(e.snapshotNode,new Pe(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new nm(this,e,n):null}matches(e){return e instanceof hi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function sm(t,e,n,i,s){const r=new Sl(n,void 0),o=new hi(r);return G_(t._repo,t,o),()=>q_(t._repo,t,o)}function Bp(t,e,n,i){return sm(t,"value",e)}t_(Pe);o_(Pe);/**
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
 */const rm="FIREBASE_DATABASE_EMULATOR_HOST",es={};let om=!1;function am(t,e,n,i){t.repoInfo_=new ka(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),i&&(t.authTokenProvider_=i)}function lm(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Ae("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),K("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=io(r,s),a=o.repoInfo,l;typeof process<"u"&&Er&&(l=Er[rm]),l?(r=`http://${l}?ns=${a.namespace}`,o=io(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new pf(t.name,t.options,e);x_("Invalid Firebase Database URL",o),E(o.path)||Ae("Database URL must point to the root of a Firebase Database (not including a child path).");const d=um(a,t,c,new mf(t,n));return new dm(d,t)}function cm(t,e){const n=es[e];(!n||n[t.key]!==t)&&Ae(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Y_(t),delete n[t.key]}function um(t,e,n,i){let s=es[e.name];s||(s={},es[e.name]=s);let r=s[t.toURLString()];return r&&Ae("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new L_(t,om,n,i),s[t.toURLString()]=r,r}class dm{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(F_(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Pe(this._repo,A())),this._rootInternal}_delete(){return this._rootInternal!==null&&(cm(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ae("Cannot call "+e+" on a deleted database.")}}function hm(t=Uo(),e){const n=an(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=su("database");i&&fm(n,...i)}return n}function fm(t,e,n,i={}){t=Ie(t),t._checkNotDeleted("useEmulator");const s=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(s===t._repoInternal.repoInfo_.host&&zt(i,r.repoInfo_.emulatorOptions))return;Ae("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&Ae('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new yn(yn.OWNER);else if(i.mockUserToken){const a=typeof i.mockUserToken=="string"?i.mockUserToken:ru(i.mockUserToken,t.app.options.projectId);o=new yn(a)}am(r,s,i,o)}/**
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
 */function gm(t){Zh(bd),$e(new Ne("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return lm(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),be(Sr,Tr,t),be(Sr,Tr,"esm2017")}ke.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ke.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};gm();const _m={apiKey:"AIzaSyACpt_LrV8iNkYWfnI8VY_cnMr495yq7rc",authDomain:"card-chess-game.firebaseapp.com",projectId:"card-chess-game",storageBucket:"card-chess-game.firebasestorage.app",messagingSenderId:"433806880393",appId:"1:433806880393:web:b3ee4225d8cd9eb3aa2058",measurementId:"G-RZP6YG4TVP",databaseURL:"https://card-chess-game-default-rtdb.europe-west1.firebasedatabase.app/"},kl=Wo(_m);Kh(kl);const Vp=hm(kl),Nl=x({border:[Boolean,Number,String]},"border");function Rl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xe();return{borderClasses:b(()=>{const i=t.border;return i===!0||i===""?`${e}--border`:typeof i=="string"||i===0?String(i).split(" ").map(s=>`border-${s}`):[]})}}const mm=[null,"default","comfortable","compact"],js=x({density:{type:String,default:"default",validator:t=>mm.includes(t)}},"density");function Gs(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xe();return{densityClasses:N(()=>`${e}--density-${t.density}`)}}const Al=x({elevation:{type:[Number,String],validator(t){const e=parseInt(t);return!isNaN(e)&&e>=0&&e<=24}}},"elevation");function xl(t){return{elevationClasses:N(()=>{const n=Pi(t)?t.value:t.elevation;return n==null?[]:[`elevation-${n}`]})}}const fi=x({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function gi(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xe();return{roundedClasses:b(()=>{const i=Pi(t)?t.value:t.rounded,s=Pi(t)?t.value:t.tile,r=[];if(i===!0||i==="")r.push(`${e}--rounded`);else if(typeof i=="string"||i===0)for(const o of String(i).split(" "))r.push(`rounded-${o}`);else(s||i===!1)&&r.push("rounded-0");return r})}}function qs(t){return go(()=>{const e=Wt(t),n=[],i={};if(e.background)if(Zs(e.background)){if(i.backgroundColor=e.background,!e.text&&Cc(e.background)){const s=bc(e.background);if(s.a==null||s.a===1){const r=wc(s);i.color=r,i.caretColor=r}}}else n.push(`bg-${e.background}`);return e.text&&(Zs(e.text)?(i.color=e.text,i.caretColor=e.text):n.push(`text-${e.text}`)),{colorClasses:n,colorStyles:i}})}function bt(t){const{colorClasses:e,colorStyles:n}=qs(()=>({text:Wt(t)}));return{textColorClasses:e,textColorStyles:n}}function Cn(t){const{colorClasses:e,colorStyles:n}=qs(()=>({background:Wt(t)}));return{backgroundColorClasses:e,backgroundColorStyles:n}}const pm=["elevated","flat","tonal","outlined","text","plain"];function vm(t,e){return p(Dt,null,[t&&p("span",{key:"overlay",class:`${e}__overlay`},null),p("span",{key:"underlay",class:`${e}__underlay`},null)])}const Pl=x({color:String,variant:{type:String,default:"elevated",validator:t=>pm.includes(t)}},"variant");function ym(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xe();const n=N(()=>{const{variant:r}=Wt(t);return`${e}--variant-${r}`}),{colorClasses:i,colorStyles:s}=qs(()=>{const{variant:r,color:o}=Wt(t);return{[["elevated","flat"].includes(r)?"background":"text"]:o}});return{colorClasses:i,colorStyles:s,variantClasses:n}}const Dl=x({baseColor:String,divided:Boolean,...Nl(),...ue(),...js(),...Al(),...fi(),...rt(),...je(),...Pl()},"VBtnGroup"),ro=X()({name:"VBtnGroup",props:Dl(),setup(t,e){let{slots:n}=e;const{themeClasses:i}=wt(t),{densityClasses:s}=Gs(t),{borderClasses:r}=Rl(t),{elevationClasses:o}=xl(t),{roundedClasses:a}=gi(t);_o({VBtn:{height:"auto",baseColor:N(()=>t.baseColor),color:N(()=>t.color),density:N(()=>t.density),flat:!0,variant:N(()=>t.variant)}}),de(()=>p(t.tag,{class:["v-btn-group",{"v-btn-group--divided":t.divided},i.value,r.value,s.value,o.value,a.value,t.class],style:t.style},n))}}),Cm=x({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),bm=x({value:null,disabled:Boolean,selectedClass:String},"group-item");function wm(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const i=sn("useGroupItem");if(!i)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const s=jn();mo(Symbol.for(`${e.description}:id`),s);const r=po(e,null);if(!r){if(!n)return r;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${e.description}`)}const o=N(()=>t.value),a=b(()=>!!(r.disabled.value||t.disabled));r.register({id:s,value:o,disabled:a},i),Gn(()=>{r.unregister(s)});const l=b(()=>r.isSelected(s)),c=b(()=>r.items.value[0].id===s),d=b(()=>r.items.value[r.items.value.length-1].id===s),u=b(()=>l.value&&[r.selectedClass.value,t.selectedClass]);return De(l,h=>{i.emit("group:selected",{value:h})},{flush:"sync"}),{id:s,isSelected:l,isFirst:c,isLast:d,toggle:()=>r.select(s,!l.value),select:h=>r.select(s,h),selectedClass:u,value:o,disabled:a,group:r}}function Im(t,e){let n=!1;const i=Di([]),s=rn(t,"modelValue",[],h=>h==null?[]:Ol(i,Ot(h)),h=>{const f=Sm(i,h);return t.multiple?f:f[0]}),r=sn("useGroup");function o(h,f){const g=h,_=Symbol.for(`${e.description}:id`),w=Ec(_,r==null?void 0:r.vnode).indexOf(f);Co(g.value)==null&&(g.value=w,g.useIndexAsValue=!0),w>-1?i.splice(w,0,g):i.push(g)}function a(h){if(n)return;l();const f=i.findIndex(g=>g.id===h);i.splice(f,1)}function l(){const h=i.find(f=>!f.disabled);h&&t.mandatory==="force"&&!s.value.length&&(s.value=[h.id])}vo(()=>{l()}),Gn(()=>{n=!0}),Ic(()=>{for(let h=0;h<i.length;h++)i[h].useIndexAsValue&&(i[h].value=h)});function c(h,f){const g=i.find(_=>_.id===h);if(!(f&&(g!=null&&g.disabled)))if(t.multiple){const _=s.value.slice(),v=_.findIndex(T=>T===h),w=~v;if(f=f??!w,w&&t.mandatory&&_.length<=1||!w&&t.max!=null&&_.length+1>t.max)return;v<0&&f?_.push(h):v>=0&&!f&&_.splice(v,1),s.value=_}else{const _=s.value.includes(h);if(t.mandatory&&_)return;s.value=f??!_?[h]:[]}}function d(h){if(t.multiple,s.value.length){const f=s.value[0],g=i.findIndex(w=>w.id===f);let _=(g+h)%i.length,v=i[_];for(;v.disabled&&_!==g;)_=(_+h)%i.length,v=i[_];if(v.disabled)return;s.value=[i[_].id]}else{const f=i.find(g=>!g.disabled);f&&(s.value=[f.id])}}const u={register:o,unregister:a,selected:s,select:c,disabled:N(()=>t.disabled),prev:()=>d(i.length-1),next:()=>d(1),isSelected:h=>s.value.includes(h),selectedClass:N(()=>t.selectedClass),items:N(()=>i),getItemIndex:h=>Em(i,h)};return mo(e,u),u}function Em(t,e){const n=Ol(t,[e]);return n.length?t.findIndex(i=>i.id===n[0]):-1}function Ol(t,e){const n=[];return e.forEach(i=>{const s=t.find(o=>yo(i,o.value)),r=t[i];(s==null?void 0:s.value)!=null?n.push(s.id):r!=null&&n.push(r.id)}),n}function Sm(t,e){const n=[];return e.forEach(i=>{const s=t.findIndex(r=>r.id===i);if(~s){const r=t[s];n.push(r.value!=null?r.value:s)}}),n}const Ml=Symbol.for("vuetify:v-btn-toggle"),Tm=x({...Dl(),...Cm()},"VBtnToggle");X()({name:"VBtnToggle",props:Tm(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const{isSelected:i,next:s,prev:r,select:o,selected:a}=Im(t,Ml);return de(()=>{const l=ro.filterProps(t);return p(ro,Je({class:["v-btn-toggle",t.class]},l,{style:t.style}),{default:()=>{var c;return[(c=n.default)==null?void 0:c.call(n,{isSelected:i,next:s,prev:r,select:o,selected:a})]}})}),{next:s,prev:r,select:o}}});const km=x({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),bn=X(!1)({name:"VDefaultsProvider",props:km(),setup(t,e){let{slots:n}=e;const{defaults:i,disabled:s,reset:r,root:o,scoped:a}=Sc(t);return _o(i,{reset:r,root:o,scoped:a,disabled:s}),()=>{var l;return(l=n.default)==null?void 0:l.call(n)}}}),Nm=["x-small","small","default","large","x-large"],Ys=x({size:{type:[String,Number],default:"default"}},"size");function Ks(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xe();return go(()=>{const n=t.size;let i,s;return In(Nm,n)?i=`${e}--size-${n}`:n&&(s={width:ee(n),height:ee(n)}),{sizeClasses:i,sizeStyles:s}})}const Rm=x({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:Me,opacity:[String,Number],...ue(),...Ys(),...rt({tag:"i"}),...je()},"VIcon"),wn=X()({name:"VIcon",props:Rm(),setup(t,e){let{attrs:n,slots:i}=e;const s=En(),{themeClasses:r}=Tc(),{iconData:o}=kc(()=>s.value||t.icon),{sizeClasses:a}=Ks(t),{textColorClasses:l,textColorStyles:c}=bt(()=>t.color);return de(()=>{var h,f;const d=(h=i.default)==null?void 0:h.call(i);d&&(s.value=(f=Nc(d).filter(g=>g.type===Rc&&g.children&&typeof g.children=="string")[0])==null?void 0:f.children);const u=!!(n.onClick||n.onClickOnce);return p(o.value.component,{tag:t.tag,icon:o.value.icon,class:["v-icon","notranslate",r.value,a.value,l.value,{"v-icon--clickable":u,"v-icon--disabled":t.disabled,"v-icon--start":t.start,"v-icon--end":t.end},t.class],style:[{"--v-icon-opacity":t.opacity},a.value?void 0:{fontSize:ee(t.size),height:ee(t.size),width:ee(t.size)},c.value,t.style],role:u?"button":void 0,"aria-hidden":!u,tabindex:u?t.disabled?-1:0:void 0},{default:()=>[d]})}),{}}});function Ll(t,e){const n=Te(),i=En(!1);if(bo){const s=new IntersectionObserver(r=>{i.value=!!r.find(o=>o.isIntersecting)},e);Gn(()=>{s.disconnect()}),De(n,(r,o)=>{o&&(s.unobserve(o),i.value=!1),r&&s.observe(r)},{flush:"post"})}return{intersectionRef:n,isIntersecting:i}}const Am=x({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...ue(),...Ys(),...rt({tag:"div"}),...je()},"VProgressCircular"),xm=X()({name:"VProgressCircular",props:Am(),setup(t,e){let{slots:n}=e;const i=20,s=2*Math.PI*i,r=Te(),{themeClasses:o}=wt(t),{sizeClasses:a,sizeStyles:l}=Ks(t),{textColorClasses:c,textColorStyles:d}=bt(()=>t.color),{textColorClasses:u,textColorStyles:h}=bt(()=>t.bgColor),{intersectionRef:f,isIntersecting:g}=Ll(),{resizeRef:_,contentRect:v}=Ac(),w=N(()=>Math.max(0,Math.min(100,parseFloat(t.modelValue)))),T=N(()=>Number(t.width)),y=N(()=>l.value?Number(t.size):v.value?v.value.width:Math.max(T.value,32)),k=N(()=>i/(1-T.value/y.value)*2),F=N(()=>T.value/y.value*k.value),R=N(()=>ee((100-w.value)/100*s));return xc(()=>{f.value=r.value,_.value=r.value}),de(()=>p(t.tag,{ref:r,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!t.indeterminate,"v-progress-circular--visible":g.value,"v-progress-circular--disable-shrink":t.indeterminate==="disable-shrink"},o.value,a.value,c.value,t.class],style:[l.value,d.value,t.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":t.indeterminate?void 0:w.value},{default:()=>[p("svg",{style:{transform:`rotate(calc(-90deg + ${Number(t.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${k.value} ${k.value}`},[p("circle",{class:["v-progress-circular__underlay",u.value],style:h.value,fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":F.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),p("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":F.value,"stroke-dasharray":s,"stroke-dashoffset":R.value},null)]),n.default&&p("div",{class:"v-progress-circular__content"},[n.default({value:w.value})])]})),{}}}),oo={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Fl=x({location:String},"location");function Bl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:i}=qn();return{locationStyles:b(()=>{if(!t.location)return{};const{side:r,align:o}=zc(t.location.split(" ").length>1?t.location:`${t.location} center`,i.value);function a(c){return n?n(c):0}const l={};return r!=="center"&&(e?l[oo[r]]=`calc(100% - ${a(r)}px)`:l[r]=0),o!=="center"?e?l[oo[o]]=`calc(100% - ${a(o)}px)`:l[o]=0:(r==="center"?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[r]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[r]),l})}}const Pm=x({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...ue(),...Fl({location:"top"}),...fi(),...rt(),...je()},"VProgressLinear"),Dm=X()({name:"VProgressLinear",props:Pm(),emits:{"update:modelValue":t=>!0},setup(t,e){var W;let{slots:n}=e;const i=rn(t,"modelValue"),{isRtl:s,rtlClasses:r}=qn(),{themeClasses:o}=wt(t),{locationStyles:a}=Bl(t),{textColorClasses:l,textColorStyles:c}=bt(()=>t.color),{backgroundColorClasses:d,backgroundColorStyles:u}=Cn(()=>t.bgColor||t.color),{backgroundColorClasses:h,backgroundColorStyles:f}=Cn(()=>t.bufferColor||t.bgColor||t.color),{backgroundColorClasses:g,backgroundColorStyles:_}=Cn(()=>t.color),{roundedClasses:v}=gi(t),{intersectionRef:w,isIntersecting:T}=Ll(),y=b(()=>parseFloat(t.max)),k=b(()=>parseFloat(t.height)),F=b(()=>er(parseFloat(t.bufferValue)/y.value*100,0,100)),R=b(()=>er(parseFloat(i.value)/y.value*100,0,100)),P=b(()=>s.value!==t.reverse),H=b(()=>t.indeterminate?"fade-transition":"slide-x-transition"),z=wo&&((W=window.matchMedia)==null?void 0:W.call(window,"(forced-colors: active)").matches);function Ee(B){if(!w.value)return;const{left:J,right:G,width:re}=w.value.getBoundingClientRect(),Z=P.value?re-B.clientX+(G-re):B.clientX-J;i.value=Math.round(Z/re*y.value)}return de(()=>p(t.tag,{ref:w,class:["v-progress-linear",{"v-progress-linear--absolute":t.absolute,"v-progress-linear--active":t.active&&T.value,"v-progress-linear--reverse":P.value,"v-progress-linear--rounded":t.rounded,"v-progress-linear--rounded-bar":t.roundedBar,"v-progress-linear--striped":t.striped},v.value,o.value,r.value,t.class],style:[{bottom:t.location==="bottom"?0:void 0,top:t.location==="top"?0:void 0,height:t.active?ee(k.value):0,"--v-progress-linear-height":ee(k.value),...t.absolute?a.value:{}},t.style],role:"progressbar","aria-hidden":t.active?"false":"true","aria-valuemin":"0","aria-valuemax":t.max,"aria-valuenow":t.indeterminate?void 0:Math.min(parseFloat(i.value),y.value),onClick:t.clickable&&Ee},{default:()=>[t.stream&&p("div",{key:"stream",class:["v-progress-linear__stream",l.value],style:{...c.value,[P.value?"left":"right"]:ee(-k.value),borderTop:`${ee(k.value/2)} dotted`,opacity:parseFloat(t.bufferOpacity),top:`calc(50% - ${ee(k.value/4)})`,width:ee(100-F.value,"%"),"--v-progress-linear-stream-to":ee(k.value*(P.value?1:-1))}},null),p("div",{class:["v-progress-linear__background",z?void 0:d.value],style:[u.value,{opacity:parseFloat(t.bgOpacity),width:t.stream?0:void 0}]},null),p("div",{class:["v-progress-linear__buffer",z?void 0:h.value],style:[f.value,{opacity:parseFloat(t.bufferOpacity),width:ee(F.value,"%")}]},null),p(Yn,{name:H.value},{default:()=>[t.indeterminate?p("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(B=>p("div",{key:B,class:["v-progress-linear__indeterminate",B,z?void 0:g.value],style:_.value},null))]):p("div",{class:["v-progress-linear__determinate",z?void 0:g.value],style:[_.value,{width:ee(R.value,"%")}]},null)]}),n.default&&p("div",{class:"v-progress-linear__content"},[n.default({value:R.value,buffer:F.value})])]})),{}}}),Vl=x({loading:[Boolean,String]},"loader");function $l(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xe();return{loaderClasses:N(()=>({[`${e}--loading`]:t.loading}))}}function Om(t,e){var i;let{slots:n}=e;return p("div",{class:`${t.name}__loader`},[((i=n.default)==null?void 0:i.call(n,{color:t.color,isActive:t.active}))||p(Dm,{absolute:t.absolute,active:t.active,color:t.color,height:"2",indeterminate:!0},null)])}const Mm=["static","relative","fixed","absolute","sticky"],Lm=x({position:{type:String,validator:t=>Mm.includes(t)}},"position");function Fm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xe();return{positionClasses:N(()=>t.position?`${e}--${t.position}`:void 0)}}function Bm(){const t=sn("useRoute");return b(()=>{var e;return(e=t==null?void 0:t.proxy)==null?void 0:e.$route})}function $p(){var t,e;return(e=(t=sn("useRouter"))==null?void 0:t.proxy)==null?void 0:e.$router}function Vm(t,e){var d,u;const n=Pc("RouterLink"),i=N(()=>!!(t.href||t.to)),s=b(()=>(i==null?void 0:i.value)||tr(e,"click")||tr(t,"click"));if(typeof n=="string"||!("useLink"in n)){const h=N(()=>t.href);return{isLink:i,isClickable:s,href:h,linkProps:Di({href:h})}}const r=n.useLink({to:N(()=>t.to||""),replace:N(()=>t.replace)}),o=b(()=>t.to?r:void 0),a=Bm(),l=b(()=>{var h,f,g;return o.value?t.exact?a.value?((g=o.value.isExactActive)==null?void 0:g.value)&&yo(o.value.route.value.query,a.value.query):((f=o.value.isExactActive)==null?void 0:f.value)??!1:((h=o.value.isActive)==null?void 0:h.value)??!1:!1}),c=b(()=>{var h;return t.to?(h=o.value)==null?void 0:h.route.value.href:t.href});return{isLink:i,isClickable:s,isActive:l,route:(d=o.value)==null?void 0:d.route,navigate:(u=o.value)==null?void 0:u.navigate,href:c,linkProps:Di({href:c,"aria-current":N(()=>l.value?"page":void 0)})}}const $m=x({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let Ri=!1;function Wp(t,e){let n=!1,i,s;wo&&(t!=null&&t.beforeEach)&&(Ut(()=>{window.addEventListener("popstate",r),i=t.beforeEach((o,a,l)=>{Ri?n?e(l):l():setTimeout(()=>n?e(l):l()),Ri=!0}),s=t==null?void 0:t.afterEach(()=>{Ri=!1})}),Dc(()=>{window.removeEventListener("popstate",r),i==null||i(),s==null||s()}));function r(o){var a;(a=o.state)!=null&&a.replaced||(n=!0,setTimeout(()=>n=!1))}}function Wm(t,e){De(()=>{var n;return(n=t.isActive)==null?void 0:n.value},n=>{t.isLink.value&&n&&e&&Ut(()=>{e(!0)})},{immediate:!0})}const ts=Symbol("rippleStop"),Um=80;function ao(t,e){t.style.transform=e,t.style.webkitTransform=e}function ns(t){return t.constructor.name==="TouchEvent"}function Wl(t){return t.constructor.name==="KeyboardEvent"}const Hm=function(t,e){var u;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=0,s=0;if(!Wl(t)){const h=e.getBoundingClientRect(),f=ns(t)?t.touches[t.touches.length-1]:t;i=f.clientX-h.left,s=f.clientY-h.top}let r=0,o=.3;(u=e._ripple)!=null&&u.circle?(o=.15,r=e.clientWidth/2,r=n.center?r:r+Math.sqrt((i-r)**2+(s-r)**2)/4):r=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const a=`${(e.clientWidth-r*2)/2}px`,l=`${(e.clientHeight-r*2)/2}px`,c=n.center?a:`${i-r}px`,d=n.center?l:`${s-r}px`;return{radius:r,scale:o,x:c,y:d,centerX:a,centerY:l}},zn={show(t,e){var f;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((f=e==null?void 0:e._ripple)!=null&&f.enabled))return;const i=document.createElement("span"),s=document.createElement("span");i.appendChild(s),i.className="v-ripple__container",n.class&&(i.className+=` ${n.class}`);const{radius:r,scale:o,x:a,y:l,centerX:c,centerY:d}=Hm(t,e,n),u=`${r*2}px`;s.className="v-ripple__animation",s.style.width=u,s.style.height=u,e.appendChild(i);const h=window.getComputedStyle(e);h&&h.position==="static"&&(e.style.position="relative",e.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),ao(s,`translate(${a}, ${l}) scale3d(${o},${o},${o})`),s.dataset.activated=String(performance.now()),requestAnimationFrame(()=>{requestAnimationFrame(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),ao(s,`translate(${c}, ${d}) scale3d(1,1,1)`)})})},hide(t){var r;if(!((r=t==null?void 0:t._ripple)!=null&&r.enabled))return;const e=t.getElementsByClassName("v-ripple__animation");if(e.length===0)return;const n=e[e.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const i=performance.now()-Number(n.dataset.activated),s=Math.max(250-i,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var a;t.getElementsByClassName("v-ripple__animation").length===1&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),((a=n.parentNode)==null?void 0:a.parentNode)===t&&t.removeChild(n.parentNode)},300)},s)}};function Ul(t){return typeof t>"u"||!!t}function tn(t){const e={},n=t.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||t[ts])){if(t[ts]=!0,ns(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||Wl(t),n._ripple.class&&(e.class=n._ripple.class),ns(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{zn.show(t,n,e)},n._ripple.showTimer=window.setTimeout(()=>{var i;(i=n==null?void 0:n._ripple)!=null&&i.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},Um)}else zn.show(t,n,e)}}function lo(t){t[ts]=!0}function le(t){const e=t.currentTarget;if(e!=null&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),t.type==="touchend"&&e._ripple.showTimerCommit){e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,e._ripple.showTimer=window.setTimeout(()=>{le(t)});return}window.setTimeout(()=>{e._ripple&&(e._ripple.touched=!1)}),zn.hide(e)}}function Hl(t){const e=t.currentTarget;e!=null&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let nn=!1;function zl(t){!nn&&(t.keyCode===nr.enter||t.keyCode===nr.space)&&(nn=!0,tn(t))}function jl(t){nn=!1,le(t)}function Gl(t){nn&&(nn=!1,le(t))}function ql(t,e,n){const{value:i,modifiers:s}=e,r=Ul(i);if(r||zn.hide(t),t._ripple=t._ripple??{},t._ripple.enabled=r,t._ripple.centered=s.center,t._ripple.circle=s.circle,Oc(i)&&i.class&&(t._ripple.class=i.class),r&&!n){if(s.stop){t.addEventListener("touchstart",lo,{passive:!0}),t.addEventListener("mousedown",lo);return}t.addEventListener("touchstart",tn,{passive:!0}),t.addEventListener("touchend",le,{passive:!0}),t.addEventListener("touchmove",Hl,{passive:!0}),t.addEventListener("touchcancel",le),t.addEventListener("mousedown",tn),t.addEventListener("mouseup",le),t.addEventListener("mouseleave",le),t.addEventListener("keydown",zl),t.addEventListener("keyup",jl),t.addEventListener("blur",Gl),t.addEventListener("dragstart",le,{passive:!0})}else!r&&n&&Yl(t)}function Yl(t){t.removeEventListener("mousedown",tn),t.removeEventListener("touchstart",tn),t.removeEventListener("touchend",le),t.removeEventListener("touchmove",Hl),t.removeEventListener("touchcancel",le),t.removeEventListener("mouseup",le),t.removeEventListener("mouseleave",le),t.removeEventListener("keydown",zl),t.removeEventListener("keyup",jl),t.removeEventListener("dragstart",le),t.removeEventListener("blur",Gl)}function zm(t,e){ql(t,e,!1)}function jm(t){delete t._ripple,Yl(t)}function Gm(t,e){if(e.value===e.oldValue)return;const n=Ul(e.oldValue);ql(t,e,n)}const qm={mounted:zm,unmounted:jm,updated:Gm},Ym=x({active:{type:Boolean,default:void 0},activeColor:String,baseColor:String,symbol:{type:null,default:Ml},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:Me,appendIcon:Me,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:{type:[String,Number,Boolean],default:void 0},...Nl(),...ue(),...js(),...Eo(),...Al(),...bm(),...Vl(),...Fl(),...Lm(),...fi(),...$m(),...Ys(),...rt({tag:"button"}),...je(),...Pl({variant:"elevated"})},"VBtn"),Up=X()({name:"VBtn",props:Ym(),emits:{"group:selected":t=>!0},setup(t,e){let{attrs:n,slots:i}=e;const{themeClasses:s}=wt(t),{borderClasses:r}=Rl(t),{densityClasses:o}=Gs(t),{dimensionStyles:a}=Io(t),{elevationClasses:l}=xl(t),{loaderClasses:c}=$l(t),{locationStyles:d}=Bl(t),{positionClasses:u}=Fm(t),{roundedClasses:h}=gi(t),{sizeClasses:f,sizeStyles:g}=Ks(t),_=wm(t,t.symbol,!1),v=Vm(t,n),w=b(()=>{var W;return t.active!==void 0?t.active:v.isLink.value?(W=v.isActive)==null?void 0:W.value:_==null?void 0:_.isSelected.value}),T=N(()=>w.value?t.activeColor??t.color:t.color),y=b(()=>{var B,J;return{color:(_==null?void 0:_.isSelected.value)&&(!v.isLink.value||((B=v.isActive)==null?void 0:B.value))||!_||((J=v.isActive)==null?void 0:J.value)?T.value??t.baseColor:t.baseColor,variant:t.variant}}),{colorClasses:k,colorStyles:F,variantClasses:R}=ym(y),P=b(()=>(_==null?void 0:_.disabled.value)||t.disabled),H=N(()=>t.variant==="elevated"&&!(t.disabled||t.flat||t.border)),z=b(()=>{if(!(t.value===void 0||typeof t.value=="symbol"))return Object(t.value)===t.value?JSON.stringify(t.value,null,0):t.value});function Ee(W){var B;P.value||v.isLink.value&&(W.metaKey||W.ctrlKey||W.shiftKey||W.button!==0||n.target==="_blank")||((B=v.navigate)==null||B.call(v,W),_==null||_.toggle())}return Wm(v,_==null?void 0:_.select),de(()=>{const W=v.isLink.value?"a":t.tag,B=!!(t.prependIcon||i.prepend),J=!!(t.appendIcon||i.append),G=!!(t.icon&&t.icon!==!0);return Kn(p(W,Je({type:W==="a"?void 0:"button",class:["v-btn",_==null?void 0:_.selectedClass.value,{"v-btn--active":w.value,"v-btn--block":t.block,"v-btn--disabled":P.value,"v-btn--elevated":H.value,"v-btn--flat":t.flat,"v-btn--icon":!!t.icon,"v-btn--loading":t.loading,"v-btn--readonly":t.readonly,"v-btn--slim":t.slim,"v-btn--stacked":t.stacked},s.value,r.value,k.value,o.value,l.value,c.value,u.value,h.value,f.value,R.value,t.class],style:[F.value,a.value,d.value,g.value,t.style],"aria-busy":t.loading?!0:void 0,disabled:P.value||void 0,tabindex:t.loading||t.readonly?-1:void 0,onClick:Ee,value:z.value},v.linkProps),{default:()=>{var re;return[vm(!0,"v-btn"),!t.icon&&B&&p("span",{key:"prepend",class:"v-btn__prepend"},[i.prepend?p(bn,{key:"prepend-defaults",disabled:!t.prependIcon,defaults:{VIcon:{icon:t.prependIcon}}},i.prepend):p(wn,{key:"prepend-icon",icon:t.prependIcon},null)]),p("span",{class:"v-btn__content","data-no-activator":""},[!i.default&&G?p(wn,{key:"content-icon",icon:t.icon},null):p(bn,{key:"content-defaults",disabled:!G,defaults:{VIcon:{icon:t.icon}}},{default:()=>{var Z;return[((Z=i.default)==null?void 0:Z.call(i))??Mc(t.text)]}})]),!t.icon&&J&&p("span",{key:"append",class:"v-btn__append"},[i.append?p(bn,{key:"append-defaults",disabled:!t.appendIcon,defaults:{VIcon:{icon:t.appendIcon}}},i.append):p(wn,{key:"append-icon",icon:t.appendIcon},null)]),!!t.loading&&p("span",{key:"loader",class:"v-btn__loader"},[((re=i.loader)==null?void 0:re.call(i))??p(xm,{color:typeof t.loading=="boolean"?void 0:t.loading,indeterminate:!0,width:"2"},null)])]}}),[[qm,!P.value&&t.ripple,"",{center:!!t.icon}]])}),{group:_}}}),Kl=Qn.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}),Ql=Qn.reduce((t,e)=>{const n="offset"+is(e);return t[n]={type:[String,Number],default:null},t},{}),Xl=Qn.reduce((t,e)=>{const n="order"+is(e);return t[n]={type:[String,Number],default:null},t},{}),co={col:Object.keys(Kl),offset:Object.keys(Ql),order:Object.keys(Xl)};function Km(t,e,n){let i=t;if(!(n==null||n===!1)){if(e){const s=e.replace(t,"");i+=`-${s}`}return t==="col"&&(i="v-"+i),t==="col"&&(n===""||n===!0)||(i+=`-${n}`),i.toLowerCase()}}const Qm=["auto","start","end","center","baseline","stretch"],Xm=x({cols:{type:[Boolean,String,Number],default:!1},...Kl,offset:{type:[String,Number],default:null},...Ql,order:{type:[String,Number],default:null},...Xl,alignSelf:{type:String,default:null,validator:t=>Qm.includes(t)},...ue(),...rt()},"VCol"),Hp=X()({name:"VCol",props:Xm(),setup(t,e){let{slots:n}=e;const i=b(()=>{const s=[];let r;for(r in co)co[r].forEach(a=>{const l=t[a],c=Km(r,a,l);c&&s.push(c)});const o=s.some(a=>a.startsWith("v-col-"));return s.push({"v-col":!o||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),s});return()=>{var s;return on(t.tag,{class:[i.value,t.class],style:t.style},(s=n.default)==null?void 0:s.call(n))}}}),Qs=["start","end","center"],Jl=["space-between","space-around","space-evenly"];function Xs(t,e){return Qn.reduce((n,i)=>{const s=t+is(i);return n[s]=e(),n},{})}const Jm=[...Qs,"baseline","stretch"],Zl=t=>Jm.includes(t),ec=Xs("align",()=>({type:String,default:null,validator:Zl})),Zm=[...Qs,...Jl],tc=t=>Zm.includes(t),nc=Xs("justify",()=>({type:String,default:null,validator:tc})),ep=[...Qs,...Jl,"stretch"],ic=t=>ep.includes(t),sc=Xs("alignContent",()=>({type:String,default:null,validator:ic})),uo={align:Object.keys(ec),justify:Object.keys(nc),alignContent:Object.keys(sc)},tp={align:"align",justify:"justify",alignContent:"align-content"};function np(t,e,n){let i=tp[t];if(n!=null){if(e){const s=e.replace(t,"");i+=`-${s}`}return i+=`-${n}`,i.toLowerCase()}}const ip=x({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Zl},...ec,justify:{type:String,default:null,validator:tc},...nc,alignContent:{type:String,default:null,validator:ic},...sc,...ue(),...rt()},"VRow"),zp=X()({name:"VRow",props:ip(),setup(t,e){let{slots:n}=e;const i=b(()=>{const s=[];let r;for(r in uo)uo[r].forEach(o=>{const a=t[o],l=np(r,o,a);l&&s.push(l)});return s.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),s});return()=>{var s;return on(t.tag,{class:["v-row",i.value,t.class],style:t.style},(s=n.default)==null?void 0:s.call(n))}}}),sp=x({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function he(t,e,n){return X()({name:t,props:sp({mode:n,origin:e}),setup(i,s){let{slots:r}=s;const o={onBeforeEnter(a){i.origin&&(a.style.transformOrigin=i.origin)},onLeave(a){if(i.leaveAbsolute){const{offsetTop:l,offsetLeft:c,offsetWidth:d,offsetHeight:u}=a;a._transitionInitialStyles={position:a.style.position,top:a.style.top,left:a.style.left,width:a.style.width,height:a.style.height},a.style.position="absolute",a.style.top=`${l}px`,a.style.left=`${c}px`,a.style.width=`${d}px`,a.style.height=`${u}px`}i.hideOnLeave&&a.style.setProperty("display","none","important")},onAfterLeave(a){if(i.leaveAbsolute&&(a!=null&&a._transitionInitialStyles)){const{position:l,top:c,left:d,width:u,height:h}=a._transitionInitialStyles;delete a._transitionInitialStyles,a.style.position=l||"",a.style.top=c||"",a.style.left=d||"",a.style.width=u||"",a.style.height=h||""}}};return()=>{const a=i.group?ss:Yn;return on(a,{name:i.disabled?"":t,css:!i.disabled,...i.group?void 0:{mode:i.mode},...i.disabled?{}:o},r.default)}}})}function rc(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return X()({name:t,props:{mode:{type:String,default:n},disabled:Boolean,group:Boolean},setup(i,s){let{slots:r}=s;const o=i.group?ss:Yn;return()=>on(o,{name:i.disabled?"":t,css:!i.disabled,...i.disabled?{}:e},r.default)}})}function oc(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",i=Lc(`offset-${n}`);return{onBeforeEnter(o){o._parent=o.parentNode,o._initialStyle={transition:o.style.transition,overflow:o.style.overflow,[n]:o.style[n]}},onEnter(o){const a=o._initialStyle;if(!a)return;o.style.setProperty("transition","none","important"),o.style.overflow="hidden";const l=`${o[i]}px`;o.style[n]="0",o.offsetHeight,o.style.transition=a.transition,t&&o._parent&&o._parent.classList.add(t),requestAnimationFrame(()=>{o.style[n]=l})},onAfterEnter:r,onEnterCancelled:r,onLeave(o){o._initialStyle={transition:"",overflow:o.style.overflow,[n]:o.style[n]},o.style.overflow="hidden",o.style[n]=`${o[i]}px`,o.offsetHeight,requestAnimationFrame(()=>o.style[n]="0")},onAfterLeave:s,onLeaveCancelled:s};function s(o){t&&o._parent&&o._parent.classList.remove(t),r(o)}function r(o){if(!o._initialStyle)return;const a=o._initialStyle[n];o.style.overflow=o._initialStyle.overflow,a!=null&&(o.style[n]=a),delete o._initialStyle}}he("fab-transition","center center","out-in");he("dialog-bottom-transition");he("dialog-top-transition");he("fade-transition");he("scale-transition");he("scroll-x-transition");he("scroll-x-reverse-transition");he("scroll-y-transition");he("scroll-y-reverse-transition");he("slide-x-transition");he("slide-x-reverse-transition");const ac=he("slide-y-transition");he("slide-y-reverse-transition");rc("expand-transition",oc());const rp=rc("expand-x-transition",oc("",!0)),lc=x({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:t=>t!==!0}},"transition"),cc=(t,e)=>{let{slots:n}=e;const{transition:i,disabled:s,group:r,...o}=t,{component:a=r?ss:Yn,...l}=typeof i=="object"?i:{};return on(a,Je(typeof i=="string"?{name:s?"":i}:l,typeof i=="string"?{}:Object.fromEntries(Object.entries({disabled:s,group:r}).filter(c=>{let[d,u]=c;return u!==void 0})),o),n)},op=x({active:Boolean,disabled:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...ue(),...lc({transition:{component:ac}})},"VCounter"),ap=X()({name:"VCounter",functional:!0,props:op(),setup(t,e){let{slots:n}=e;const i=N(()=>t.max?`${t.value} / ${t.max}`:String(t.value));return de(()=>p(cc,{transition:t.transition},{default:()=>[Kn(p("div",{class:["v-counter",{"text-error":t.max&&!t.disabled&&parseFloat(t.value)>parseFloat(t.max)},t.class],style:t.style},[n.default?n.default({counter:i.value,max:t.max,value:t.value}):i.value]),[[So,t.active]])]})),{}}}),lp=x({text:String,onClick:Ze(),...ue(),...je()},"VLabel"),cp=X()({name:"VLabel",props:lp(),setup(t,e){let{slots:n}=e;return de(()=>{var i;return p("label",{class:["v-label",{"v-label--clickable":!!t.onClick},t.class],style:t.style,onClick:t.onClick},[t.text,(i=n.default)==null?void 0:i.call(n)])}),{}}}),up=x({floating:Boolean,...ue()},"VFieldLabel"),pn=X()({name:"VFieldLabel",props:up(),setup(t,e){let{slots:n}=e;return de(()=>p(cp,{class:["v-field-label",{"v-field-label--floating":t.floating},t.class],style:t.style,"aria-hidden":t.floating||void 0},n)),{}}});function uc(t){const{t:e}=Fc();function n(i){let{name:s,color:r}=i;const o={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[s],a=t[`onClick:${s}`];function l(d){d.key!=="Enter"&&d.key!==" "||(d.preventDefault(),d.stopPropagation(),To(a,new PointerEvent("click",d)))}const c=a&&o?e(`$vuetify.input.${o}`,t.label??""):void 0;return p(wn,{icon:t[`${s}Icon`],"aria-label":c,onClick:a,onKeydown:l,color:r},null)}return{InputIcon:n}}const dc=x({focused:Boolean,"onUpdate:focused":Ze()},"focus");function hc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xe();const n=rn(t,"focused"),i=N(()=>({[`${e}--focused`]:n.value}));function s(){n.value=!0}function r(){n.value=!1}return{focusClasses:i,isFocused:n,focus:s,blur:r}}const dp=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],fc=x({appendInnerIcon:Me,bgColor:String,clearable:Boolean,clearIcon:{type:Me,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},glow:Boolean,error:Boolean,flat:Boolean,iconColor:[Boolean,String],label:String,persistentClear:Boolean,prependInnerIcon:Me,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:t=>dp.includes(t)},"onClick:clear":Ze(),"onClick:appendInner":Ze(),"onClick:prependInner":Ze(),...ue(),...Vl(),...fi(),...je()},"VField"),ho=X()({name:"VField",inheritAttrs:!1,props:{id:String,...dc(),...fc()},emits:{"update:focused":t=>!0,"update:modelValue":t=>!0},setup(t,e){let{attrs:n,emit:i,slots:s}=e;const{themeClasses:r}=wt(t),{loaderClasses:o}=$l(t),{focusClasses:a,isFocused:l,focus:c,blur:d}=hc(t),{InputIcon:u}=uc(t),{roundedClasses:h}=gi(t),{rtlClasses:f}=qn(),g=N(()=>t.dirty||t.active),_=N(()=>!!(t.label||s.label)),v=N(()=>!t.singleLine&&_.value),w=jn(),T=b(()=>t.id||`input-${w}`),y=N(()=>`${T.value}-messages`),k=Te(),F=Te(),R=Te(),P=b(()=>["plain","underlined"].includes(t.variant)),H=b(()=>t.error||t.disabled?void 0:g.value&&l.value?t.color:t.baseColor),z=b(()=>{if(!(!t.iconColor||t.glow&&!l.value))return t.iconColor===!0?H.value:t.iconColor}),{backgroundColorClasses:Ee,backgroundColorStyles:W}=Cn(()=>t.bgColor),{textColorClasses:B,textColorStyles:J}=bt(H);De(g,Z=>{if(v.value){const oe=k.value.$el,fe=F.value.$el;requestAnimationFrame(()=>{const ge=jc(oe),ae=fe.getBoundingClientRect(),ct=ae.x-ge.x,Ge=ae.y-ge.y-(ge.height/2-ae.height/2),Nt=ae.width/.75,gn=Math.abs(Nt-ge.width)>1?{maxWidth:ee(Nt)}:void 0,mc=getComputedStyle(oe),Js=getComputedStyle(fe),pc=parseFloat(mc.transitionDuration)*1e3||150,vc=parseFloat(Js.getPropertyValue("--v-field-label-scale")),yc=Js.getPropertyValue("color");oe.style.visibility="visible",fe.style.visibility="hidden",Gc(oe,{transform:`translate(${ct}px, ${Ge}px) scale(${vc})`,color:yc,...gn},{duration:pc,easing:qc,direction:Z?"normal":"reverse"}).finished.then(()=>{oe.style.removeProperty("visibility"),fe.style.removeProperty("visibility")})})}},{flush:"post"});const G=b(()=>({isActive:g,isFocused:l,controlRef:R,blur:d,focus:c}));function re(Z){Z.target!==document.activeElement&&Z.preventDefault()}return de(()=>{var ct,Ge,Nt;const Z=t.variant==="outlined",oe=!!(s["prepend-inner"]||t.prependInnerIcon),fe=!!(t.clearable||s.clear)&&!t.disabled,ge=!!(s["append-inner"]||t.appendInnerIcon||fe),ae=()=>s.label?s.label({...G.value,label:t.label,props:{for:T.value}}):t.label;return p("div",Je({class:["v-field",{"v-field--active":g.value,"v-field--appended":ge,"v-field--center-affix":t.centerAffix??!P.value,"v-field--disabled":t.disabled,"v-field--dirty":t.dirty,"v-field--error":t.error,"v-field--glow":t.glow,"v-field--flat":t.flat,"v-field--has-background":!!t.bgColor,"v-field--persistent-clear":t.persistentClear,"v-field--prepended":oe,"v-field--reverse":t.reverse,"v-field--single-line":t.singleLine,"v-field--no-label":!ae(),[`v-field--variant-${t.variant}`]:!0},r.value,Ee.value,a.value,o.value,h.value,f.value,t.class],style:[W.value,t.style],onClick:re},n),[p("div",{class:"v-field__overlay"},null),p(Om,{name:"v-field",active:!!t.loading,color:t.error?"error":typeof t.loading=="string"?t.loading:t.color},{default:s.loader}),oe&&p("div",{key:"prepend",class:"v-field__prepend-inner"},[t.prependInnerIcon&&p(u,{key:"prepend-icon",name:"prependInner",color:z.value},null),(ct=s["prepend-inner"])==null?void 0:ct.call(s,G.value)]),p("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(t.variant)&&v.value&&p(pn,{key:"floating-label",ref:F,class:[B.value],floating:!0,for:T.value,style:J.value},{default:()=>[ae()]}),_.value&&p(pn,{key:"label",ref:k,for:T.value},{default:()=>[ae()]}),((Ge=s.default)==null?void 0:Ge.call(s,{...G.value,props:{id:T.value,class:"v-field__input","aria-describedby":y.value},focus:c,blur:d}))??p("div",{id:T.value,class:"v-field__input","aria-describedby":y.value},null)]),fe&&p(rp,{key:"clear"},{default:()=>[Kn(p("div",{class:"v-field__clearable",onMousedown:gn=>{gn.preventDefault(),gn.stopPropagation()}},[p(bn,{defaults:{VIcon:{icon:t.clearIcon}}},{default:()=>[s.clear?s.clear({...G.value,props:{onFocus:c,onBlur:d,onClick:t["onClick:clear"]}}):p(u,{name:"clear",onFocus:c,onBlur:d},null)]})]),[[So,t.dirty]])]}),ge&&p("div",{key:"append",class:"v-field__append-inner"},[(Nt=s["append-inner"])==null?void 0:Nt.call(s,G.value),t.appendInnerIcon&&p(u,{key:"append-icon",name:"appendInner",color:z.value},null)]),p("div",{class:["v-field__outline",B.value],style:J.value},[Z&&p(Dt,null,[p("div",{class:"v-field__outline__start"},null),v.value&&p("div",{class:"v-field__outline__notch"},[p(pn,{ref:F,floating:!0,for:T.value},{default:()=>[ae()]})]),p("div",{class:"v-field__outline__end"},null)]),P.value&&v.value&&p(pn,{ref:F,floating:!0,for:T.value},{default:()=>[ae()]})])])}),{controlRef:R,fieldIconColor:z}}}),hp=x({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...ue(),...lc({transition:{component:ac,leaveAbsolute:!0,group:!0}})},"VMessages"),fp=X()({name:"VMessages",props:hp(),setup(t,e){let{slots:n}=e;const i=b(()=>Ot(t.messages)),{textColorClasses:s,textColorStyles:r}=bt(()=>t.color);return de(()=>p(cc,{transition:t.transition,tag:"div",class:["v-messages",s.value,t.class],style:[r.value,t.style]},{default:()=>[t.active&&i.value.map((o,a)=>p("div",{class:"v-messages__message",key:`${a}-${i.value}`},[n.message?n.message({message:o}):o]))]})),{}}}),gp=Symbol.for("vuetify:form");function _p(t){const e=po(gp,null);return{...e,isReadonly:b(()=>!!((t==null?void 0:t.readonly)??(e==null?void 0:e.isReadonly.value))),isDisabled:b(()=>!!((t==null?void 0:t.disabled)??(e==null?void 0:e.isDisabled.value)))}}const mp=x({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...dc()},"validation");function pp(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xe(),n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:jn();const i=rn(t,"modelValue"),s=b(()=>t.validationValue===void 0?i.value:t.validationValue),r=_p(t),o=Te([]),a=En(!0),l=b(()=>!!(Ot(i.value===""?null:i.value).length||Ot(s.value===""?null:s.value).length)),c=b(()=>{var y;return(y=t.errorMessages)!=null&&y.length?Ot(t.errorMessages).concat(o.value).slice(0,Math.max(0,Number(t.maxErrors))):o.value}),d=b(()=>{var F;let y=(t.validateOn??((F=r.validateOn)==null?void 0:F.value))||"input";y==="lazy"&&(y="input lazy"),y==="eager"&&(y="input eager");const k=new Set((y==null?void 0:y.split(" "))??[]);return{input:k.has("input"),blur:k.has("blur")||k.has("input")||k.has("invalid-input"),invalidInput:k.has("invalid-input"),lazy:k.has("lazy"),eager:k.has("eager")}}),u=b(()=>{var y;return t.error||(y=t.errorMessages)!=null&&y.length?!1:t.rules.length?a.value?o.value.length||d.value.lazy?null:!0:!o.value.length:!0}),h=En(!1),f=b(()=>({[`${e}--error`]:u.value===!1,[`${e}--dirty`]:l.value,[`${e}--disabled`]:r.isDisabled.value,[`${e}--readonly`]:r.isReadonly.value})),g=sn("validation"),_=b(()=>t.name??Co(n));Bc(()=>{var y;(y=r.register)==null||y.call(r,{id:_.value,vm:g,validate:T,reset:v,resetValidation:w})}),Gn(()=>{var y;(y=r.unregister)==null||y.call(r,_.value)}),vo(async()=>{var y;d.value.lazy||await T(!d.value.eager),(y=r.update)==null||y.call(r,_.value,u.value,c.value)}),ir(()=>d.value.input||d.value.invalidInput&&u.value===!1,()=>{De(s,()=>{if(s.value!=null)T();else if(t.focused){const y=De(()=>t.focused,k=>{k||T(),y()})}})}),ir(()=>d.value.blur,()=>{De(()=>t.focused,y=>{y||T()})}),De([u,c],()=>{var y;(y=r.update)==null||y.call(r,_.value,u.value,c.value)});async function v(){i.value=null,await Ut(),await w()}async function w(){a.value=!0,d.value.lazy?o.value=[]:await T(!d.value.eager)}async function T(){let y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const k=[];h.value=!0;for(const F of t.rules){if(k.length>=Number(t.maxErrors??1))break;const P=await(typeof F=="function"?F:()=>F)(s.value);if(P!==!0){if(P!==!1&&typeof P!="string"){console.warn(`${P} is not a valid value. Rule functions must return boolean true or a string.`);continue}k.push(P||"")}}return o.value=k,h.value=!1,a.value=y,o.value}return{errorMessages:c,isDirty:l,isDisabled:r.isDisabled,isReadonly:r.isReadonly,isPristine:a,isValid:u,isValidating:h,reset:v,resetValidation:w,validate:T,validationClasses:f}}const gc=x({id:String,appendIcon:Me,baseColor:String,centerAffix:{type:Boolean,default:!0},color:String,glow:Boolean,iconColor:[Boolean,String],prependIcon:Me,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:t=>["horizontal","vertical"].includes(t)},"onClick:prepend":Ze(),"onClick:append":Ze(),...ue(),...js(),...Vc(Eo(),["maxWidth","minWidth","width"]),...je(),...mp()},"VInput"),fo=X()({name:"VInput",props:{...gc()},emits:{"update:modelValue":t=>!0},setup(t,e){let{attrs:n,slots:i,emit:s}=e;const{densityClasses:r}=Gs(t),{dimensionStyles:o}=Io(t),{themeClasses:a}=wt(t),{rtlClasses:l}=qn(),{InputIcon:c}=uc(t),d=jn(),u=b(()=>t.id||`input-${d}`),h=b(()=>`${u.value}-messages`),{errorMessages:f,isDirty:g,isDisabled:_,isReadonly:v,isPristine:w,isValid:T,isValidating:y,reset:k,resetValidation:F,validate:R,validationClasses:P}=pp(t,"v-input",u),H=b(()=>({id:u,messagesId:h,isDirty:g,isDisabled:_,isReadonly:v,isPristine:w,isValid:T,isValidating:y,reset:k,resetValidation:F,validate:R})),z=N(()=>t.error||t.disabled?void 0:t.focused?t.color:t.baseColor),Ee=N(()=>{if(t.iconColor)return t.iconColor===!0?z.value:t.iconColor}),W=b(()=>{var B;return(B=t.errorMessages)!=null&&B.length||!w.value&&f.value.length?f.value:t.hint&&(t.persistentHint||t.focused)?t.hint:t.messages});return de(()=>{var Z,oe,fe,ge;const B=!!(i.prepend||t.prependIcon),J=!!(i.append||t.appendIcon),G=W.value.length>0,re=!t.hideDetails||t.hideDetails==="auto"&&(G||!!i.details);return p("div",{class:["v-input",`v-input--${t.direction}`,{"v-input--center-affix":t.centerAffix,"v-input--focused":t.focused,"v-input--glow":t.glow,"v-input--hide-spin-buttons":t.hideSpinButtons},r.value,a.value,l.value,P.value,t.class],style:[o.value,t.style]},[B&&p("div",{key:"prepend",class:"v-input__prepend"},[(Z=i.prepend)==null?void 0:Z.call(i,H.value),t.prependIcon&&p(c,{key:"prepend-icon",name:"prepend",color:Ee.value},null)]),i.default&&p("div",{class:"v-input__control"},[(oe=i.default)==null?void 0:oe.call(i,H.value)]),J&&p("div",{key:"append",class:"v-input__append"},[t.appendIcon&&p(c,{key:"append-icon",name:"append",color:Ee.value},null),(fe=i.append)==null?void 0:fe.call(i,H.value)]),re&&p("div",{id:h.value,class:"v-input__details",role:"alert","aria-live":"polite"},[p(fp,{active:G,messages:W.value},{message:i.message}),(ge=i.details)==null?void 0:ge.call(i,H.value)])])}),{reset:k,resetValidation:F,validate:R,isValid:T,errorMessages:f}}}),Ai=Symbol("Forwarded refs");function xi(t,e){let n=t;for(;n;){const i=Reflect.getOwnPropertyDescriptor(n,e);if(i)return i;n=Object.getPrototypeOf(n)}}function vp(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return t[Ai]=n,new Proxy(t,{get(s,r){if(Reflect.has(s,r))return Reflect.get(s,r);if(!(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))){for(const o of n)if(o.value&&Reflect.has(o.value,r)){const a=Reflect.get(o.value,r);return typeof a=="function"?a.bind(o.value):a}}},has(s,r){if(Reflect.has(s,r))return!0;if(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))return!1;for(const o of n)if(o.value&&Reflect.has(o.value,r))return!0;return!1},set(s,r,o){if(Reflect.has(s,r))return Reflect.set(s,r,o);if(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))return!1;for(const a of n)if(a.value&&Reflect.has(a.value,r))return Reflect.set(a.value,r,o);return!1},getOwnPropertyDescriptor(s,r){var a;const o=Reflect.getOwnPropertyDescriptor(s,r);if(o)return o;if(!(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))){for(const l of n){if(!l.value)continue;const c=xi(l.value,r)??("_"in l.value?xi((a=l.value._)==null?void 0:a.setupState,r):void 0);if(c)return c}for(const l of n){const c=l.value&&l.value[Ai];if(!c)continue;const d=c.slice();for(;d.length;){const u=d.shift(),h=xi(u.value,r);if(h)return h;const f=u.value&&u.value[Ai];f&&d.push(...f)}}}}})}function yp(t,e){if(!bo)return;const n=e.modifiers||{},i=e.value,{handler:s,options:r}=typeof i=="object"?i:{handler:i,options:{}},o=new IntersectionObserver(function(){var u;let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0;const c=(u=t._observe)==null?void 0:u[e.instance.$.uid];if(!c)return;const d=a.some(h=>h.isIntersecting);s&&(!n.quiet||c.init)&&(!n.once||d||c.init)&&s(d,a,l),d&&n.once?_c(t,e):c.init=!0},r);t._observe=Object(t._observe),t._observe[e.instance.$.uid]={init:!1,observer:o},o.observe(t)}function _c(t,e){var i;const n=(i=t._observe)==null?void 0:i[e.instance.$.uid];n&&(n.observer.unobserve(t),delete t._observe[e.instance.$.uid])}const Cp={mounted:yp,unmounted:_c},bp=["color","file","time","date","datetime-local","week","month"],wp=x({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...gc(),...fc()},"VTextField"),jp=X()({name:"VTextField",directives:{Intersect:Cp},inheritAttrs:!1,props:wp(),emits:{"click:control":t=>!0,"mousedown:control":t=>!0,"update:focused":t=>!0,"update:modelValue":t=>!0},setup(t,e){let{attrs:n,emit:i,slots:s}=e;const r=rn(t,"modelValue"),{isFocused:o,focus:a,blur:l}=hc(t),c=b(()=>typeof t.counterValue=="function"?t.counterValue(r.value):typeof t.counterValue=="number"?t.counterValue:(r.value??"").toString().length),d=b(()=>{if(n.maxlength)return n.maxlength;if(!(!t.counter||typeof t.counter!="number"&&typeof t.counter!="string"))return t.counter}),u=b(()=>["plain","underlined"].includes(t.variant));function h(R,P){var H,z;!t.autofocus||!R||(z=(H=P[0].target)==null?void 0:H.focus)==null||z.call(H)}const f=Te(),g=Te(),_=Te(),v=b(()=>bp.includes(t.type)||t.persistentPlaceholder||o.value||t.active);function w(){var R;_.value!==document.activeElement&&((R=_.value)==null||R.focus()),o.value||a()}function T(R){i("mousedown:control",R),R.target!==_.value&&(w(),R.preventDefault())}function y(R){w(),i("click:control",R)}function k(R){R.stopPropagation(),w(),Ut(()=>{r.value=null,To(t["onClick:clear"],R)})}function F(R){var H;const P=R.target;if(r.value=P.value,(H=t.modelModifiers)!=null&&H.trim&&["text","search","password","tel","url"].includes(t.type)){const z=[P.selectionStart,P.selectionEnd];Ut(()=>{P.selectionStart=z[0],P.selectionEnd=z[1]})}}return de(()=>{const R=!!(s.counter||t.counter!==!1&&t.counter!=null),P=!!(R||s.details),[H,z]=$c(n),{modelValue:Ee,...W}=fo.filterProps(t),B=ho.filterProps(t);return p(fo,Je({ref:f,modelValue:r.value,"onUpdate:modelValue":J=>r.value=J,class:["v-text-field",{"v-text-field--prefixed":t.prefix,"v-text-field--suffixed":t.suffix,"v-input--plain-underlined":u.value},t.class],style:t.style},H,W,{centerAffix:!u.value,focused:o.value}),{...s,default:J=>{let{id:G,isDisabled:re,isDirty:Z,isReadonly:oe,isValid:fe}=J;return p(ho,Je({ref:g,onMousedown:T,onClick:y,"onClick:clear":k,"onClick:prependInner":t["onClick:prependInner"],"onClick:appendInner":t["onClick:appendInner"],role:t.role},B,{id:G.value,active:v.value||Z.value,dirty:Z.value||t.dirty,disabled:re.value,focused:o.value,error:fe.value===!1}),{...s,default:ge=>{let{props:{class:ae,...ct}}=ge;const Ge=Kn(p("input",Je({ref:_,value:r.value,onInput:F,autofocus:t.autofocus,readonly:oe.value,disabled:re.value,name:t.name,placeholder:t.placeholder,size:1,type:t.type,onFocus:w,onBlur:l},ct,z),null),[[Wc("intersect"),{handler:h},null,{once:!0}]]);return p(Dt,null,[t.prefix&&p("span",{class:"v-text-field__prefix"},[p("span",{class:"v-text-field__prefix__text"},[t.prefix])]),s.default?p("div",{class:ae,"data-no-activator":""},[s.default(),Ge]):Uc(Ge,{class:ae}),t.suffix&&p("span",{class:"v-text-field__suffix"},[p("span",{class:"v-text-field__suffix__text"},[t.suffix])])])}})},details:P?J=>{var G;return p(Dt,null,[(G=s.details)==null?void 0:G.call(s,J),R&&p(Dt,null,[p("span",null,null),p(ap,{active:t.persistentCounter||o.value,value:c.value,max:d.value,disabled:t.disabled},s.counter)])])}:void 0})}),vp({},f,g,_)}});export{lc as $,wn as A,bn as B,Pl as C,Ys as D,fi as E,js as F,Nl as G,xl as H,$l as I,Bl as J,Fm as K,Vm as L,$m as M,Lm as N,Fl as O,Vl as P,Al as Q,qm as R,Om as S,vn as T,kp as U,zp as V,Sp as W,Ep as X,Np as Y,zc as Z,Tp as _,Hp as a,Cn as a0,$p as a1,Wp as a2,cc as a3,Cp as a4,Up as b,jp as c,Vp as d,Mp as e,vp as f,Fp as g,Dp as h,en as i,Gc as j,Rp as k,xp as l,Ap as m,jc as n,Bp as o,Op as p,qc as q,Pp as r,Tl as s,Rl as t,Lp as u,ym as v,Gs as w,gi as x,Ks as y,vm as z};
