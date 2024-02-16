import l from"react";import u from"react-dom";var c=u;c.createRoot,c.hydrateRoot;var _={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=l,d=Symbol.for("react.element"),y=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,v=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R={key:!0,ref:!0,__self:!0,__source:!0};function a(o,r,i){var e,t={},s=null,f=null;i!==void 0&&(s=""+i),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(f=r.ref);for(e in r)x.call(r,e)&&!R.hasOwnProperty(e)&&(t[e]=r[e]);if(o&&o.defaultProps)for(e in r=o.defaultProps,r)t[e]===void 0&&(t[e]=r[e]);return{$$typeof:d,type:o,key:s,ref:f,props:t,_owner:v.current}}n.Fragment=y;n.jsx=a;n.jsxs=a;(function(o){o.exports=n})(_);const p=_.exports.jsx,$=()=>p("section",{className:"app-b",children:p("h1",{children:"Contact data"})}),j=()=>p($,{});export{j as default};
