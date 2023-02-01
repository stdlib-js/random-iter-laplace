// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.0.13-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import{isPrimitive as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.0.8-esm/index.mjs";import{factory as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-laplace@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function c(g,b,v){var x,y,P,w,N;if(!d(g)||o(g))throw new TypeError(f("invalid argument. First argument must be a number and not NaN. Value: `%s`.",g));if(!a(b))throw new TypeError(f("0Ps7T",b));if(arguments.length>2){if(!m(v))throw new TypeError(f("0Ps2h",v));if(x=i(v,1),h(x,"iter")){if(!l(x.iter))throw new TypeError(f("0Ps35","iter",x.iter))}else x.iter=p;P=j(g,b,x),void 0===x.prng&&!1!==x.copy&&(x.state=P.state)}else P=j(g,b),x={iter:p,state:P.state};return N=0,e(y={},"next",L),e(y,"return",G),x&&x.prng?(e(y,"seed",null),e(y,"seedLength",null),s(y,"state",n(null),r),e(y,"stateLength",null),e(y,"byteLength",null)):(t(y,"seed",T),t(y,"seedLength",E),s(y,"state",k,q),t(y,"stateLength",F),t(y,"byteLength",V)),e(y,"PRNG",P.PRNG),u&&e(y,u,R),y;function L(){return N+=1,w||N>x.iter?{done:!0}:{value:P(),done:!1}}function G(e){return w=!0,arguments.length?{value:e,done:!0}:{done:!0}}function R(){return c(g,b,x)}function T(){return P.PRNG.seed}function E(){return P.PRNG.seedLength}function F(){return P.PRNG.stateLength}function V(){return P.PRNG.byteLength}function k(){return P.PRNG.state}function q(e){P.PRNG.state=e}}export{c as default};
//# sourceMappingURL=index.mjs.map
