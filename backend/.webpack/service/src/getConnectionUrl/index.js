!function(e,r){for(var t in r)e[t]=r[t]}(exports,function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=1)}([,function(e,r,t){"use strict";var n=u(t(13)),o=u(t(14));function u(e){return e&&e.__esModule?e:{default:e}}t(12);var i,s=t(2);r.handler=(i=(0,o.default)(n.default.mark((function e(r,t){var o,u,i;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={host:process.env.IOT_ENDPOINT_HOST.toLowerCase(),region:process.env.IOT_AWS_REGION},u=s.device.prepareWebSocketUrl(o,process.env.IOT_ACCESS_KEY,process.env.IOT_SECRET_KEY),i={statusCode:200,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0},body:JSON.stringify({url:u})},e.abrupt("return",i);case 4:case"end":return e.stop()}}),e,void 0)}))),function(e,r){return i.apply(this,arguments)})},function(e,r){e.exports=require("aws-iot-device-sdk")},,,,,,,,,,function(e,r){e.exports=require("source-map-support/register")},function(e,r){e.exports=require("babel-runtime/regenerator")},function(e,r){e.exports=require("babel-runtime/helpers/asyncToGenerator")}]));