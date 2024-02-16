import u from"react";import a from"react-dom";var c={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=u,d=Symbol.for("react.element"),x=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,v=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R={key:!0,ref:!0,__self:!0,__source:!0};function l(o,r,i){var e,t={},s=null,f=null;i!==void 0&&(s=""+i),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(f=r.ref);for(e in r)y.call(r,e)&&!R.hasOwnProperty(e)&&(t[e]=r[e]);if(o&&o.defaultProps)for(e in r=o.defaultProps,r)t[e]===void 0&&(t[e]=r[e]);return{$$typeof:d,type:o,key:s,ref:f,props:t,_owner:v.current}}n.Fragment=x;n.jsx=l;n.jsxs=l;c.exports=n;var p=c.exports,_=a;_.createRoot,_.hydrateRoot;const j=()=>p.jsx("section",{className:"app-a",children:p.jsx("h1",{children:"Account"})}),h=()=>p.jsx(j,{});export{h as default};
