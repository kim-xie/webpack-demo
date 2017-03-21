/*! This file is created by kim */
webpackJsonp([0,3],{/***/
0:/***/
function(e,t,n){var r,i;/*!
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */
!function(t,n){"object"==typeof e&&"object"==typeof e.exports?
// For CommonJS and CommonJS-like environments where a proper `window`
// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info.
e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)}("undefined"!=typeof window?window:this,function(n,o){function a(e){
// Support: iOS 8.2 (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var t=!!e&&"length"in e&&e.length,n=ye.type(e);return"function"!==n&&!ye.isWindow(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}
// Implement the identical functionality for filter and not
function s(e,t,n){if(ye.isFunction(t))return ye.grep(e,function(e,r){/* jshint -W018 */
return!!t.call(e,r,e)!==n});if(t.nodeType)return ye.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(Se.test(t))return ye.filter(t,e,n);t=ye.filter(t,e)}return ye.grep(e,function(e){return ye.inArray(e,t)>-1!==n})}function u(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}
// Convert String-formatted options into Object-formatted ones
function l(e){var t={};return ye.each(e.match(qe)||[],function(e,n){t[n]=!0}),t}/**
 * Clean-up method for dom ready events
 */
function c(){se.addEventListener?(se.removeEventListener("DOMContentLoaded",f),n.removeEventListener("load",f)):(se.detachEvent("onreadystatechange",f),n.detachEvent("onload",f))}/**
 * The ready event handler and self cleanup method
 */
function f(){
// readyState === "complete" is good enough for us to call the dom ready in oldIE
(se.addEventListener||"load"===n.event.type||"complete"===se.readyState)&&(c(),ye.ready())}function d(e,t,n){
// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===n&&1===e.nodeType){var r="data-"+t.replace(Re,"-$1").toLowerCase();if(n=e.getAttribute(r),"string"==typeof n){try{n="true"===n||"false"!==n&&("null"===n?null:
// Only convert to a number if it doesn't change the string
+n+""===n?+n:Oe.test(n)?ye.parseJSON(n):n)}catch(e){}
// Make sure we set the data so it isn't changed later
ye.data(e,t,n)}else n=void 0}return n}
// checks a cache object for emptiness
function p(e){var t;for(t in e)
// if the public data object is empty, the private is still empty
if(("data"!==t||!ye.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function h(e,t,n,r){if(Me(e)){var i,o,a=ye.expando,
// We have to handle DOM nodes and JS objects differently because IE6-7
// can't GC object references properly across the DOM-JS boundary
s=e.nodeType,
// Only DOM nodes need the global jQuery cache; JS object data is
// attached directly to the object so GC can occur automatically
u=s?ye.cache:e,
// Only defining an ID for JS objects if its cache already exists allows
// the code to shortcut on the same path as a DOM node with no cache
l=s?e[a]:e[a]&&a;
// Avoid doing any more work than we need to when trying to get data on an
// object that has no data at all
if(l&&u[l]&&(r||u[l].data)||void 0!==n||"string"!=typeof t)
// Only DOM nodes need a new unique ID for each element since their data
// ends up in the global cache
// Avoid exposing jQuery metadata on plain JS objects when the object
// is serialized using JSON.stringify
// An object can be passed to jQuery.data instead of a key/value pair; this gets
// shallow copied over onto the existing cache
// jQuery data() is stored in a separate object inside the object's internal data
// cache in order to avoid key collisions between internal data and user-defined
// data.
// Check for both converted-to-camel and non-converted data property names
// If a data property was specified
// First Try to find as-is property data
// Test for null|undefined property data
// Try to find the camelCased property
return l||(l=s?e[a]=ae.pop()||ye.guid++:a),u[l]||(u[l]=s?{}:{toJSON:ye.noop}),"object"!=typeof t&&"function"!=typeof t||(r?u[l]=ye.extend(u[l],t):u[l].data=ye.extend(u[l].data,t)),o=u[l],r||(o.data||(o.data={}),o=o.data),void 0!==n&&(o[ye.camelCase(t)]=n),"string"==typeof t?(i=o[t],null==i&&(i=o[ye.camelCase(t)])):i=o,i}}function g(e,t,n){if(Me(e)){var r,i,o=e.nodeType,
// See jQuery.data for more information
a=o?ye.cache:e,s=o?e[ye.expando]:ye.expando;
// If there is already no cache entry for this object, there is no
// purpose in continuing
if(a[s]){if(t&&(r=n?a[s]:a[s].data)){
// Support array or space separated string names for data keys
ye.isArray(t)?
// If "name" is an array of keys...
// When data is initially created, via ("key", "val") signature,
// keys will be converted to camelCase.
// Since there is no way to tell _how_ a key was added, remove
// both plain key and camelCase key. #12786
// This will only penalize the array argument path.
t=t.concat(ye.map(t,ye.camelCase)):
// try the string as a key before any manipulation
t in r?t=[t]:(
// split the camel cased version by spaces unless a key with the spaces exists
t=ye.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;for(;i--;)delete r[t[i]];
// If there is no data left in the cache, we want to continue
// and let the cache object itself get destroyed
if(n?!p(r):!ye.isEmptyObject(r))return}
// See jQuery.data for more information
(n||(delete a[s].data,p(a[s])))&&(
// Destroy the cache
o?ye.cleanData([e],!0):ge.deleteExpando||a!=a.window?/* jshint eqeqeq: true */
delete a[s]:a[s]=void 0)}}}function m(e,t,n,r){var i,o=1,a=20,s=r?function(){return r.cur()}:function(){return ye.css(e,t,"")},u=s(),l=n&&n[3]||(ye.cssNumber[t]?"":"px"),
// Starting value computation is required for potential unit mismatches
c=(ye.cssNumber[t]||"px"!==l&&+u)&&Be.exec(ye.css(e,t));if(c&&c[3]!==l){
// Trust units reported by jQuery.css
l=l||c[3],
// Make sure we update the tween properties later on
n=n||[],
// Iteratively approximate from a nonzero starting point
c=+u||1;do
// If previous iteration zeroed out, double until we get *something*.
// Use string for doubling so we don't accidentally see scale as unchanged below
o=o||".5",
// Adjust and apply
c/=o,ye.style(e,t,c+l);while(o!==(o=s()/u)&&1!==o&&--a)}
// Apply relative offset (+=/-=) if specified
return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}function y(e){var t=Je.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}function v(e,t){var n,r,i=0,o="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):void 0;if(!o)for(o=[],n=e.childNodes||e;null!=(r=n[i]);i++)!t||ye.nodeName(r,t)?o.push(r):ye.merge(o,v(r,t));return void 0===t||t&&ye.nodeName(e,t)?ye.merge([e],o):o}
// Mark scripts as having already been evaluated
function x(e,t){for(var n,r=0;null!=(n=e[r]);r++)ye._data(n,"globalEval",!t||ye._data(t[r],"globalEval"))}function b(e){ze.test(e.type)&&(e.defaultChecked=e.checked)}function w(e,t,n,r,i){for(var o,a,s,u,l,c,f,d=e.length,
// Ensure a safe fragment
p=y(t),h=[],g=0;g<d;g++)if(a=e[g],a||0===a)
// Add nodes directly
if("object"===ye.type(a))ye.merge(h,a.nodeType?[a]:a);else if(Ge.test(a)){for(u=u||p.appendChild(t.createElement("div")),
// Deserialize a standard representation
l=(Xe.exec(a)||["",""])[1].toLowerCase(),f=Ye[l]||Ye._default,u.innerHTML=f[1]+ye.htmlPrefilter(a)+f[2],
// Descend through wrappers to the right content
o=f[0];o--;)u=u.lastChild;
// Remove IE's autoinserted <tbody> from table fragments
if(
// Manually add leading whitespace removed by IE
!ge.leadingWhitespace&&Ve.test(a)&&h.push(t.createTextNode(Ve.exec(a)[0])),!ge.tbody)for(
// String was a <table>, *may* have spurious <tbody>
a="table"!==l||Qe.test(a)?
// String was a bare <thead> or <tfoot>
"<table>"!==f[1]||Qe.test(a)?0:u:u.firstChild,o=a&&a.childNodes.length;o--;)ye.nodeName(c=a.childNodes[o],"tbody")&&!c.childNodes.length&&a.removeChild(c);
// Fix #12392 for oldIE
for(ye.merge(h,u.childNodes),
// Fix #12392 for WebKit and IE > 9
u.textContent="";u.firstChild;)u.removeChild(u.firstChild);
// Remember the top-level container for proper cleanup
u=p.lastChild}else h.push(t.createTextNode(a));for(
// Fix #11356: Clear elements from fragment
u&&p.removeChild(u),
// Reset defaultChecked for any radios and checkboxes
// about to be appended to the DOM in IE 6/7 (#8060)
ge.appendChecked||ye.grep(v(h,"input"),b),g=0;a=h[g++];)
// Skip elements already in the context collection (trac-4087)
if(r&&ye.inArray(a,r)>-1)i&&i.push(a);else
// Capture executables
if(s=ye.contains(a.ownerDocument,a),
// Append to fragment
u=v(p.appendChild(a),"script"),
// Preserve script evaluation history
s&&x(u),n)for(o=0;a=u[o++];)Ue.test(a.type||"")&&n.push(a);return u=null,p}function T(){return!0}function C(){return!1}
// Support: IE9
// See #13393 for more info
function E(){try{return se.activeElement}catch(e){}}function N(e,t,n,r,i,o){var a,s;
// Types can be a map of types/handlers
if("object"==typeof t){
// ( types-Object, selector, data )
"string"!=typeof n&&(
// ( types-Object, data )
r=r||n,n=void 0);for(s in t)N(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(
// ( types, fn )
i=n,r=n=void 0):null==i&&("string"==typeof n?(
// ( types, selector, fn )
i=r,r=void 0):(
// ( types, data, fn )
i=r,r=n,n=void 0)),i===!1)i=C;else if(!i)return e;
// Use same guid so caller can remove using origFn
return 1===o&&(a=i,i=function(e){
// Can use an empty set, since event contains the info
return ye().off(e),a.apply(this,arguments)},i.guid=a.guid||(a.guid=ye.guid++)),e.each(function(){ye.event.add(this,t,i,r,n)})}
// Support: IE<8
// Manipulating tables requires a tbody
function k(e,t){return ye.nodeName(e,"table")&&ye.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}
// Replace/restore the type attribute of script elements for safe DOM manipulation
function S(e){return e.type=(null!==ye.find.attr(e,"type"))+"/"+e.type,e}function A(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function D(e,t){if(1===t.nodeType&&ye.hasData(e)){var n,r,i,o=ye._data(e),a=ye._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;r<i;r++)ye.event.add(t,n,s[n][r])}
// make the cloned public data object a copy from the original
a.data&&(a.data=ye.extend({},a.data))}}function j(e,t){var n,r,i;
// We do not need to do anything for non-Elements
if(1===t.nodeType){
// IE6-8 copies events bound via attachEvent when using cloneNode.
if(n=t.nodeName.toLowerCase(),!ge.noCloneEvent&&t[ye.expando]){i=ye._data(t);for(r in i.events)ye.removeEvent(t,r,i.handle);
// Event data gets referenced instead of copied if the expando gets copied too
t.removeAttribute(ye.expando)}
// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
"script"===n&&t.text!==e.text?(S(t).text=e.text,A(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),
// This path appears unavoidable for IE9. When cloning an object
// element in IE9, the outerHTML strategy above is not sufficient.
// If the src has innerHTML and the destination does not,
// copy the src.innerHTML into the dest.innerHTML. #10324
ge.html5Clone&&e.innerHTML&&!ye.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&ze.test(e.type)?(
// IE6-8 fails to persist the checked state of a cloned checkbox
// or radio button. Worse, IE6-7 fail to give the cloned element
// a checked appearance if the defaultChecked value isn't also set
t.defaultChecked=t.checked=e.checked,
// IE6-7 get confused and end up setting the value of a cloned
// checkbox/radio button to an empty string instead of "on"
t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}}function L(e,t,n,r){
// Flatten any nested arrays
t=le.apply([],t);var i,o,a,s,u,l,c=0,f=e.length,d=f-1,p=t[0],h=ye.isFunction(p);
// We can't cloneNode fragments that contain checked, in WebKit
if(h||f>1&&"string"==typeof p&&!ge.checkClone&&st.test(p))return e.each(function(i){var o=e.eq(i);h&&(t[0]=p.call(this,i,o.html())),L(o,t,n,r)});if(f&&(l=w(t,e[0].ownerDocument,!1,e,r),i=l.firstChild,1===l.childNodes.length&&(l=i),i||r)){
// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(s=ye.map(v(l,"script"),S),a=s.length;c<f;c++)o=l,c!==d&&(o=ye.clone(o,!0,!0),
// Keep references to cloned scripts for later restoration
a&&
// Support: Android<4.1, PhantomJS<2
// push.apply(_, arraylike) throws on ancient WebKit
ye.merge(s,v(o,"script"))),n.call(e[c],o,c);if(a)
// Evaluate executable scripts on first document insertion
for(u=s[s.length-1].ownerDocument,
// Reenable scripts
ye.map(s,A),c=0;c<a;c++)o=s[c],Ue.test(o.type||"")&&!ye._data(o,"globalEval")&&ye.contains(u,o)&&(o.src?
// Optional AJAX dependency, but won't run scripts if not present
ye._evalUrl&&ye._evalUrl(o.src):ye.globalEval((o.text||o.textContent||o.innerHTML||"").replace(lt,"")));
// Fix #11809: Avoid leaking memory
l=i=null}return e}function H(e,t,n){for(var r,i=t?ye.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||ye.cleanData(v(r)),r.parentNode&&(n&&ye.contains(r.ownerDocument,r)&&x(v(r,"script")),r.parentNode.removeChild(r));return e}/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function q(e,t){var n=ye(t.createElement(e)).appendTo(t.body),r=ye.css(n[0],"display");
// We don't have any data stored on the element,
// so use "detach" method as fast way to get rid of the element
return n.detach(),r}/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function _(e){var t=se,n=pt[e];
// If the simple way fails, read from inside an iframe
// Use the already-created iframe if possible
// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
// Support: IE
// Store the correct default display
return n||(n=q(e,t),"none"!==n&&n||(dt=(dt||ye("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=(dt[0].contentWindow||dt[0].contentDocument).document,t.write(),t.close(),n=q(e,t),dt.detach()),pt[e]=n),n}function F(e,t){
// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){
// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}
// return a css property mapped to a potentially vendor prefixed property
function M(e){
// shortcut for names that are not vendor prefixed
if(e in At)return e;for(
// check for vendor prefixed names
var t=e.charAt(0).toUpperCase()+e.slice(1),n=St.length;n--;)if(e=St[n]+t,e in At)return e}function O(e,t){for(var n,r,i,o=[],a=0,s=e.length;a<s;a++)r=e[a],r.style&&(o[a]=ye._data(r,"olddisplay"),n=r.style.display,t?(
// Reset the inline display of this element to learn if it is
// being hidden by cascaded rules or not
o[a]||"none"!==n||(r.style.display=""),
// Set elements which have been overridden with display: none
// in a stylesheet to whatever the default browser style is
// for such an element
""===r.style.display&&Ie(r)&&(o[a]=ye._data(r,"olddisplay",_(r.nodeName)))):(i=Ie(r),(n&&"none"!==n||!i)&&ye._data(r,"olddisplay",i?n:ye.css(r,"display"))));
// Set the display of most of the elements in a second loop
// to avoid the constant reflow
for(a=0;a<s;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}function R(e,t,n){var r=Et.exec(t);
// Guard against undefined "subtract", e.g., when used as in cssHooks
return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function P(e,t,n,r,i){for(var o=n===(r?"border":"content")?
// If we already have the right measurement, avoid augmentation
4:
// Otherwise initialize for horizontal or vertical properties
"width"===t?1:0,a=0;o<4;o+=2)
// both box models exclude margin, so add it if we want it
"margin"===n&&(a+=ye.css(e,n+We[o],!0,i)),r?(
// border-box includes padding, so remove it if we want content
"content"===n&&(a-=ye.css(e,"padding"+We[o],!0,i)),
// at this point, extra isn't border nor margin, so remove border
"margin"!==n&&(a-=ye.css(e,"border"+We[o]+"Width",!0,i))):(
// at this point, extra isn't content, so add padding
a+=ye.css(e,"padding"+We[o],!0,i),
// at this point, extra isn't content nor padding, so add border
"padding"!==n&&(a+=ye.css(e,"border"+We[o]+"Width",!0,i)));return a}function B(e,t,n){
// Start with offset property, which is equivalent to the border-box value
var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=vt(e),a=ge.boxSizing&&"border-box"===ye.css(e,"boxSizing",!1,o);
// some non-html elements return undefined for offsetWidth, so check for null/undefined
// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
if(i<=0||null==i){
// Computed unit is not pixels. Stop here and return.
if(
// Fall back to computed then uncomputed css if necessary
i=xt(e,t,o),(i<0||null==i)&&(i=e.style[t]),gt.test(i))return i;
// we need the check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
r=a&&(ge.boxSizingReliable()||i===e.style[t]),
// Normalize "", auto, and prepare for extra
i=parseFloat(i)||0}
// use the active box-sizing model to add/subtract irrelevant styles
return i+P(e,t,n||(a?"border":"content"),r,o)+"px"}function W(e,t,n,r,i){return new W.prototype.init(e,t,n,r,i)}
// Animations created synchronously will run synchronously
function I(){return n.setTimeout(function(){Dt=void 0}),Dt=ye.now()}
// Generate parameters to create a standard animation
function $(e,t){var n,r={height:e},i=0;for(
// if we include width, step value is 1 to do all cssExpand values,
// if we don't include width, step value is 2 to skip over Left and Right
t=t?1:0;i<4;i+=2-t)n=We[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function z(e,t,n){for(var r,i=(V.tweeners[t]||[]).concat(V.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))
// we're done with this property
return r}function X(e,t,n){/* jshint validthis: true */
var r,i,o,a,s,u,l,c,f=this,d={},p=e.style,h=e.nodeType&&Ie(e),g=ye._data(e,"fxshow");
// handle queue: false promises
n.queue||(s=ye._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,u=s.empty.fire,s.empty.fire=function(){s.unqueued||u()}),s.unqueued++,f.always(function(){
// doing this makes sure that the complete handler will be called
// before this completes
f.always(function(){s.unqueued--,ye.queue(e,"fx").length||s.empty.fire()})})),
// height/width overflow pass
1===e.nodeType&&("height"in t||"width"in t)&&(
// Make sure that nothing sneaks out
// Record all 3 overflow attributes because IE does not
// change the overflow attribute when overflowX and
// overflowY are set to the same value
n.overflow=[p.overflow,p.overflowX,p.overflowY],
// Set display property to inline-block for height/width
// animations on inline elements that are having width/height animated
l=ye.css(e,"display"),
// Test default display if display is currently "none"
c="none"===l?ye._data(e,"olddisplay")||_(e.nodeName):l,"inline"===c&&"none"===ye.css(e,"float")&&(
// inline-level elements accept inline-block;
// block-level elements need to be inline with layout
ge.inlineBlockNeedsLayout&&"inline"!==_(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",ge.shrinkWrapBlocks()||f.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));
// show/hide pass
for(r in t)if(i=t[r],Lt.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(h?"hide":"show")){
// If there is dataShow left over from a stopped hide or show
// and we are going to proceed with show, we should pretend to be hidden
if("show"!==i||!g||void 0===g[r])continue;h=!0}d[r]=g&&g[r]||ye.style(e,r)}else l=void 0;if(ye.isEmptyObject(d))"inline"===("none"===l?_(e.nodeName):l)&&(p.display=l);else{g?"hidden"in g&&(h=g.hidden):g=ye._data(e,"fxshow",{}),
// store state if its toggle - enables .stop().toggle() to "reverse"
o&&(g.hidden=!h),h?ye(e).show():f.done(function(){ye(e).hide()}),f.done(function(){var t;ye._removeData(e,"fxshow");for(t in d)ye.style(e,t,d[t])});for(r in d)a=z(h?g[r]:0,r,f),r in g||(g[r]=a.start,h&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function U(e,t){var n,r,i,o,a;
// camelCase, specialEasing and expand cssHook pass
for(n in e)if(r=ye.camelCase(n),i=t[r],o=e[n],ye.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=ye.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];
// not quite $.extend, this wont overwrite keys already present.
// also - reusing 'index' from above because we have the correct "name"
for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function V(e,t,n){var r,i,o=0,a=V.prefilters.length,s=ye.Deferred().always(function(){
// don't match elem in the :animated selector
delete u.elem}),u=function(){if(i)return!1;for(var t=Dt||I(),n=Math.max(0,l.startTime+l.duration-t),
// Support: Android 2.3
// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;a<u;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),o<1&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:ye.extend({},t),opts:ye.extend(!0,{specialEasing:{},easing:ye.easing._default},n),originalProperties:t,originalOptions:n,startTime:Dt||I(),duration:n.duration,tweens:[],createTween:function(t,n){var r=ye.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,
// if we are going to the end, we want to run all the tweens
// otherwise we skip this part
r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);
// resolve when we played the last frame
// otherwise, reject
return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(U(c,l.opts.specialEasing);o<a;o++)if(r=V.prefilters[o].call(l,e,c,l.opts))return ye.isFunction(r.stop)&&(ye._queueHooks(l.elem,l.opts.queue).stop=ye.proxy(r.stop,r)),r;
// attach callbacks from options
return ye.map(c,z,l),ye.isFunction(l.opts.start)&&l.opts.start.call(e,l),ye.fx.timer(ye.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function J(e){return ye.attr(e,"class")||""}
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function Y(e){
// dataTypeExpression is optional and defaults to "*"
return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(qe)||[];if(ye.isFunction(n))
// For each dataType in the dataTypeExpression
for(;r=o[i++];)
// Prepend if requested
"+"===r.charAt(0)?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}
// Base inspection function for prefilters and transports
function G(e,t,n,r){function i(s){var u;return o[s]=!0,ye.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||a||o[l]?a?!(u=l):void 0:(t.dataTypes.unshift(l),i(l),!1)}),u}var o={},a=e===nn;return i(t.dataTypes[0])||!o["*"]&&i("*")}
// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function Q(e,t){var n,r,i=ye.ajaxSettings.flatOptions||{};for(r in t)void 0!==t[r]&&((i[r]?e:n||(n={}))[r]=t[r]);return n&&ye.extend(!0,e,n),e}/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function K(e,t,n){
// Remove auto dataType and get content-type in the process
for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));
// Check if we're dealing with a known content-type
if(i)for(a in s)if(s[a]&&s[a].test(i)){u.unshift(a);break}
// Check to see if we have a response for the expected dataType
if(u[0]in n)o=u[0];else{
// Try convertible dataTypes
for(a in n){if(!u[0]||e.converters[a+" "+u[0]]){o=a;break}r||(r=a)}
// Or just use first one
o=o||r}
// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(o)return o!==u[0]&&u.unshift(o),n[o]}/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function Z(e,t,n,r){var i,o,a,s,u,l={},
// Work with a copy of dataTypes in case we need to modify it for conversion
c=e.dataTypes.slice();
// Create converters map with lowercased keys
if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];
// Convert to each sequential dataType
for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),
// Apply the dataFilter if provided
!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())
// There's only work to do if current dataType is non-auto
if("*"===o)o=u;else if("*"!==u&&u!==o){
// If none found, seek a pair
if(
// Seek a direct converter
a=l[u+" "+o]||l["* "+o],!a)for(i in l)if(
// If conv2 outputs current
s=i.split(" "),s[1]===o&&(
// If prev can be converted to accepted input
a=l[u+" "+s[0]]||l["* "+s[0]])){
// Condense equivalence converters
a===!0?a=l[i]:l[i]!==!0&&(o=s[0],c.unshift(s[1]));break}
// Apply converter (if not an equivalence)
if(a!==!0)
// Unless errors are allowed to bubble, catch and return them
if(a&&e.throws)// jscs:ignore requireDotNotation
t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}function ee(e){return e.style&&e.style.display||ye.css(e,"display")}function te(e){
// Disconnected elements are considered hidden
if(!ye.contains(e.ownerDocument||se,e))return!0;for(;e&&1===e.nodeType;){if("none"===ee(e)||"hidden"===e.type)return!0;e=e.parentNode}return!1}function ne(e,t,n,r){var i;if(ye.isArray(t))
// Serialize array item.
ye.each(t,function(t,i){n||un.test(e)?
// Treat each array item as a scalar.
r(e,i):
// Item is non-scalar (array or object), encode its numeric index.
ne(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==ye.type(t))
// Serialize scalar item.
r(e,t);else
// Serialize object item.
for(i in t)ne(e+"["+i+"]",t[i],n,r)}
// Functions to create xhrs
function re(){try{return new n.XMLHttpRequest}catch(e){}}function ie(){try{return new n.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}/**
 * Gets a window from an element
 */
function oe(e){return ye.isWindow(e)?e:9===e.nodeType&&(e.defaultView||e.parentWindow)}
// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//"use strict";
var ae=[],se=n.document,ue=ae.slice,le=ae.concat,ce=ae.push,fe=ae.indexOf,de={},pe=de.toString,he=de.hasOwnProperty,ge={},me="1.12.4",
// Define a local copy of jQuery
ye=function(e,t){
// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new ye.fn.init(e,t)},
// Support: Android<4.1, IE<9
// Make sure we trim BOM and NBSP
ve=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
// Matches dashed string for camelizing
xe=/^-ms-/,be=/-([\da-z])/gi,
// Used by jQuery.camelCase as callback to replace()
we=function(e,t){return t.toUpperCase()};ye.fn=ye.prototype={
// The current version of jQuery being used
jquery:me,constructor:ye,
// Start with an empty selector
selector:"",
// The default length of a jQuery object is 0
length:0,toArray:function(){return ue.call(this)},
// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(e){
// Return just the one element from the set
// Return all the elements in a clean array
return null!=e?e<0?this[e+this.length]:this[e]:ue.call(this)},
// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(e){
// Build a new jQuery matched element set
var t=ye.merge(this.constructor(),e);
// Return the newly-formed element set
// Add the old object onto the stack (as a reference)
return t.prevObject=this,t.context=this.context,t},
// Execute a callback for every element in the matched set.
each:function(e){return ye.each(this,e)},map:function(e){return this.pushStack(ye.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(ue.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},
// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:ce,sort:ae.sort,splice:ae.splice},ye.extend=ye.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for(
// Handle a deep copy situation
"boolean"==typeof a&&(l=a,
// skip the boolean and the target
a=arguments[s]||{},s++),
// Handle case when target is a string or something (possible in deep copy)
"object"==typeof a||ye.isFunction(a)||(a={}),
// extend jQuery itself if only one argument is passed
s===u&&(a=this,s--);s<u;s++)
// Only deal with non-null/undefined values
if(null!=(i=arguments[s]))
// Extend the base object
for(r in i)e=a[r],n=i[r],
// Prevent never-ending loop
a!==n&&(
// Recurse if we're merging plain objects or arrays
l&&n&&(ye.isPlainObject(n)||(t=ye.isArray(n)))?(t?(t=!1,o=e&&ye.isArray(e)?e:[]):o=e&&ye.isPlainObject(e)?e:{},
// Never move original objects, clone them
a[r]=ye.extend(l,o,n)):void 0!==n&&(a[r]=n));
// Return the modified object
return a},ye.extend({
// Unique for each copy of jQuery on the page
expando:"jQuery"+(me+Math.random()).replace(/\D/g,""),
// Assume jQuery is ready without the ready module
isReady:!0,error:function(e){throw new Error(e)},noop:function(){},
// See test/unit/core.js for details concerning isFunction.
// Since version 1.3, DOM methods and functions like alert
// aren't supported. They return false on IE (#2968).
isFunction:function(e){return"function"===ye.type(e)},isArray:Array.isArray||function(e){return"array"===ye.type(e)},isWindow:function(e){/* jshint eqeqeq: false */
return null!=e&&e==e.window},isNumeric:function(e){
// parseFloat NaNs numeric-cast false positives (null|true|false|"")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
// adding 1 corrects loss of precision from parseFloat (#15100)
var t=e&&e.toString();return!ye.isArray(e)&&t-parseFloat(t)+1>=0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},isPlainObject:function(e){var t;
// Must be an Object.
// Because of IE, we also have to check the presence of the constructor property.
// Make sure that DOM nodes and window objects don't pass through, as well
if(!e||"object"!==ye.type(e)||e.nodeType||ye.isWindow(e))return!1;try{
// Not own constructor property must be Object
if(e.constructor&&!he.call(e,"constructor")&&!he.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){
// IE8,9 Will throw exceptions on certain host objects #9897
return!1}
// Support: IE<9
// Handle iteration over inherited properties before own properties.
if(!ge.ownFirst)for(t in e)return he.call(e,t);
// Own properties are enumerated firstly, so to speed up,
// if last one is own, then all properties are own.
for(t in e);return void 0===t||he.call(e,t)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?de[pe.call(e)]||"object":typeof e},
// Workarounds based on findings by Jim Driscoll
// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
globalEval:function(e){e&&ye.trim(e)&&
// We use execScript on Internet Explorer
// We use an anonymous function so that context is window
// rather than jQuery in Firefox
(n.execScript||function(e){n.eval.call(n,e)})(e)},
// Convert dashed to camelCase; used by the css and data modules
// Microsoft forgot to hump their vendor prefix (#9572)
camelCase:function(e){return e.replace(xe,"ms-").replace(be,we)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t){var n,r=0;if(a(e))for(n=e.length;r<n&&t.call(e[r],r,e[r])!==!1;r++);else for(r in e)if(t.call(e[r],r,e[r])===!1)break;return e},
// Support: Android<4.1, IE<9
trim:function(e){return null==e?"":(e+"").replace(ve,"")},
// results is for internal usage only
makeArray:function(e,t){var n=t||[];return null!=e&&(a(Object(e))?ye.merge(n,"string"==typeof e?[e]:e):ce.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(fe)return fe.call(t,e,n);for(r=t.length,n=n?n<0?Math.max(0,r+n):n:0;n<r;n++)
// Skip accessing in sparse arrays
if(n in t&&t[n]===e)return n}return-1},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;)e[i++]=t[r++];
// Support: IE<9
// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
if(n!==n)for(;void 0!==t[r];)e[i++]=t[r++];return e.length=i,e},grep:function(e,t,n){
// Go through the array, only saving the items
// that pass the validator function
for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)r=!t(e[o],o),r!==s&&i.push(e[o]);return i},
// arg is for internal usage only
map:function(e,t,n){var r,i,o=0,s=[];
// Go through the array, translating each of the items to their new values
if(a(e))for(r=e.length;o<r;o++)i=t(e[o],o,n),null!=i&&s.push(i);else for(o in e)i=t(e[o],o,n),null!=i&&s.push(i);
// Flatten any nested arrays
return le.apply([],s)},
// A global GUID counter for objects
guid:1,
// Bind a function to a context, optionally partially applying any
// arguments.
proxy:function(e,t){var n,r,i;
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof t&&(i=e[t],t=e,e=i),ye.isFunction(e))
// Simulated bind
// Set the guid of unique handler to the same of original handler, so it can be removed
return n=ue.call(arguments,2),r=function(){return e.apply(t||this,n.concat(ue.call(arguments)))},r.guid=e.guid=e.guid||ye.guid++,r},now:function(){return+new Date},
// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:ge}),
// JSHint would error on this code due to the Symbol not being defined in ES5.
// Defining this global in .jshintrc would create a danger of using the global
// unguarded in another place, it seems safer to just disable JSHint for these
// three lines.
/* jshint ignore: start */
"function"==typeof Symbol&&(ye.fn[Symbol.iterator]=ae[Symbol.iterator]),/* jshint ignore: end */
// Populate the class2type map
ye.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){de["[object "+t+"]"]=t.toLowerCase()});var Te=/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
function(e){function t(e,t,n,r){var i,o,a,s,u,l,f,p,h=t&&t.ownerDocument,
// nodeType defaults to 9, since context defaults to document
g=t?t.nodeType:9;
// Return early from calls with invalid selector or context
if(n=n||[],"string"!=typeof e||!e||1!==g&&9!==g&&11!==g)return n;
// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!r&&((t?t.ownerDocument||t:B)!==H&&L(t),t=t||H,_)){
// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==g&&(l=ye.exec(e)))
// ID selector
if(i=l[1]){
// Document context
if(9===g){if(!(a=t.getElementById(i)))return n;
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(a.id===i)return n.push(a),n}else
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(h&&(a=h.getElementById(i))&&R(t,a)&&a.id===i)return n.push(a),n}else{if(l[2])return K.apply(n,t.getElementsByTagName(e)),n;if((i=l[3])&&w.getElementsByClassName&&t.getElementsByClassName)return K.apply(n,t.getElementsByClassName(i)),n}
// Take advantage of querySelectorAll
if(w.qsa&&!X[e+" "]&&(!F||!F.test(e))){if(1!==g)h=t,p=e;else if("object"!==t.nodeName.toLowerCase()){for(
// Capture the context ID, setting it first if necessary
(s=t.getAttribute("id"))?s=s.replace(xe,"\\$&"):t.setAttribute("id",s=P),
// Prefix every selector in the list
f=N(e),o=f.length,u=de.test(s)?"#"+s:"[id='"+s+"']";o--;)f[o]=u+" "+d(f[o]);p=f.join(","),
// Expand context for sibling selectors
h=ve.test(e)&&c(t.parentNode)||t}if(p)try{return K.apply(n,h.querySelectorAll(p)),n}catch(e){}finally{s===P&&t.removeAttribute("id")}}}
// All others
return S(e.replace(se,"$1"),t,n,r)}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function n(){function e(n,r){
// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
// Only keep the most recent entries
return t.push(n+" ")>T.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function r(e){return e[P]=!0,e}/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function i(e){var t=H.createElement("div");try{return!!e(t)}catch(e){return!1}finally{
// Remove from its parent by default
t.parentNode&&t.parentNode.removeChild(t),
// release memory in IE
t=null}}/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function o(e,t){for(var n=e.split("|"),r=n.length;r--;)T.attrHandle[n[r]]=t}/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||V)-(~e.sourceIndex||V);
// Use IE sourceIndex if available on both nodes
if(r)return r;
// Check if b follows a
if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function s(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function u(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function l(e){return r(function(t){return t=+t,r(function(n,r){
// Match elements found at the specified indexes
for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function c(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}
// Easy API for creating new setFilters
function f(){}function d(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function p(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=I++;
// Check against closest ancestor/preceding element
// Check against all ancestor/preceding elements
return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,u,l,c=[W,o];
// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if(l=t[P]||(t[P]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
u=l[t.uniqueID]||(l[t.uniqueID]={}),(s=u[r])&&s[0]===W&&s[1]===o)
// Assign to newCache so results back-propagate to previous elements
return c[2]=s[2];
// A match means we're done; a fail means we have to keep checking
if(
// Reuse newcache so results back-propagate to previous elements
u[r]=c,c[2]=e(t,n,a))return!0}}}function h(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function g(e,n,r){for(var i=0,o=n.length;i<o;i++)t(e,n[i],r);return r}function m(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function y(e,t,n,i,o,a){return i&&!i[P]&&(i=y(i)),o&&!o[P]&&(o=y(o,a)),r(function(r,a,s,u){var l,c,f,d=[],p=[],h=a.length,
// Get initial elements from seed or context
y=r||g(t||"*",s.nodeType?[s]:s,[]),
// Prefilter to get matcher input, preserving a map for seed-results synchronization
v=!e||!r&&t?y:m(y,d,e,s,u),x=n?
// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
o||(r?e:h||i)?
// ...intermediate processing is necessary
[]:
// ...otherwise use results directly
a:v;
// Apply postFilter
if(
// Find primary matches
n&&n(v,x,s,u),i)for(l=m(x,p),i(l,[],s,u),
// Un-match failing elements by moving them back to matcherIn
c=l.length;c--;)(f=l[c])&&(x[p[c]]=!(v[p[c]]=f));if(r){if(o||e){if(o){for(
// Get the final matcherOut by condensing this intermediate into postFinder contexts
l=[],c=x.length;c--;)(f=x[c])&&
// Restore matcherIn since elem is not yet a final match
l.push(v[c]=f);o(null,x=[],l,u)}for(
// Move matched elements from seed to results to keep them synchronized
c=x.length;c--;)(f=x[c])&&(l=o?ee(r,f):d[c])>-1&&(r[l]=!(a[l]=f))}}else x=m(x===a?x.splice(h,x.length):x),o?o(null,a,x,u):K.apply(a,x)})}function v(e){for(var t,n,r,i=e.length,o=T.relative[e[0].type],a=o||T.relative[" "],s=o?1:0,
// The foundational matcher ensures that elements are reachable from top-level context(s)
u=p(function(e){return e===t},a,!0),l=p(function(e){return ee(t,e)>-1},a,!0),c=[function(e,n,r){var i=!o&&(r||n!==A)||((t=n).nodeType?u(e,n,r):l(e,n,r));
// Avoid hanging onto element (issue #299)
return t=null,i}];s<i;s++)if(n=T.relative[e[s].type])c=[p(h(c),n)];else{
// Return special upon seeing a positional matcher
if(n=T.filter[e[s].type].apply(null,e[s].matches),n[P]){for(
// Find the next relative operator (if any) for proper handling
r=++s;r<i&&!T.relative[e[r].type];r++);
// If the preceding token was a descendant combinator, insert an implicit any-element `*`
return y(s>1&&h(c),s>1&&d(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(se,"$1"),n,s<r&&v(e.slice(s,r)),r<i&&v(e=e.slice(r)),r<i&&d(e))}c.push(n)}return h(c)}function x(e,n){var i=n.length>0,o=e.length>0,a=function(r,a,s,u,l){var c,f,d,p=0,h="0",g=r&&[],y=[],v=A,
// We must always have either seed elements or outermost context
x=r||o&&T.find.TAG("*",l),
// Use integer dirruns iff this is the outermost matcher
b=W+=null==v?1:Math.random()||.1,w=x.length;
// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(l&&(A=a===H||a||l);h!==w&&null!=(c=x[h]);h++){if(o&&c){for(f=0,a||c.ownerDocument===H||(L(c),s=!_);d=e[f++];)if(d(c,a||H,s)){u.push(c);break}l&&(W=b)}
// Track unmatched elements for set filters
i&&(
// They will have gone through all possible matchers
(c=!d&&c)&&p--,
// Lengthen the array for every element, matched or not
r&&g.push(c))}
// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(
// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
p+=h,i&&h!==p){for(f=0;d=n[f++];)d(g,y,a,s);if(r){
// Reintegrate element matches to eliminate the need for sorting
if(p>0)for(;h--;)g[h]||y[h]||(y[h]=G.call(u));
// Discard index placeholder values to get only actual matches
y=m(y)}
// Add matches to results
K.apply(u,y),
// Seedless set matches succeeding multiple successful matchers stipulate sorting
l&&!r&&y.length>0&&p+n.length>1&&t.uniqueSort(u)}
// Override manipulation of globals by nested matchers
return l&&(W=b,A=v),g};return i?r(a):a}var b,w,T,C,E,N,k,S,A,D,j,
// Local document vars
L,H,q,_,F,M,O,R,
// Instance-specific data
P="sizzle"+1*new Date,B=e.document,W=0,I=0,$=n(),z=n(),X=n(),U=function(e,t){return e===t&&(j=!0),0},
// General-purpose constants
V=1<<31,
// Instance methods
J={}.hasOwnProperty,Y=[],G=Y.pop,Q=Y.push,K=Y.push,Z=Y.slice,
// Use a stripped-down indexOf as it's faster than native
// http://jsperf.com/thor-indexof-vs-for/5
ee=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
// Regular expressions
// http://www.w3.org/TR/css3-selectors/#whitespace
ne="[\\x20\\t\\r\\n\\f]",
// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
re="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
ie="\\["+ne+"*("+re+")(?:"+ne+
// Operator (capture 2)
"*([*^$|!~]?=)"+ne+
// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+re+"))|)"+ne+"*\\]",oe=":("+re+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ie+")*)|.*)\\)|)",
// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
ae=new RegExp(ne+"+","g"),se=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),ue=new RegExp("^"+ne+"*,"+ne+"*"),le=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),ce=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),fe=new RegExp(oe),de=new RegExp("^"+re+"$"),pe={ID:new RegExp("^#("+re+")"),CLASS:new RegExp("^\\.("+re+")"),TAG:new RegExp("^("+re+"|[*])"),ATTR:new RegExp("^"+ie),PSEUDO:new RegExp("^"+oe),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),
// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},he=/^(?:input|select|textarea|button)$/i,ge=/^h\d$/i,me=/^[^{]+\{\s*\[native \w/,
// Easily-parseable/retrievable ID or TAG or CLASS selectors
ye=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ve=/[+~]/,xe=/'|\\/g,
// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
be=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),we=function(e,t,n){var r="0x"+t-65536;
// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
// BMP codepoint
// Supplemental Plane codepoint (surrogate pair)
return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},
// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
Te=function(){L()};
// Optimize for push.apply( _, NodeList )
try{K.apply(Y=Z.call(B.childNodes),B.childNodes),
// Support: Android<4.0
// Detect silently failing push.apply
Y[B.childNodes.length].nodeType}catch(e){K={apply:Y.length?
// Leverage slice if possible
function(e,t){Q.apply(e,Z.call(t))}:
// Support: IE<9
// Otherwise append directly
function(e,t){
// Can't trust NodeList.length
for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}
// Expose support vars for convenience
w=t.support={},/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
E=t.isXML=function(e){
// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
L=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:B;
// Return early if doc is invalid or already selected
// Return early if doc is invalid or already selected
// Update global variables
// Support: IE 9-11, Edge
// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
// Support: IE 11
/* Attributes
	---------------------------------------------------------------------- */
// Support: IE<8
// Verify that getAttribute really returns attributes and not properties
// (excepting IE8 booleans)
/* getElement(s)By*
	---------------------------------------------------------------------- */
// Check if getElementsByTagName("*") returns only elements
// Support: IE<9
// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programatically-set names,
// so use a roundabout getElementsByName test
// ID find and filter
// Support: IE6/7
// getElementById is not reliable as a find shortcut
// Tag
// Class
/* QSA/matchesSelector
	---------------------------------------------------------------------- */
// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See http://bugs.jquery.com/ticket/13378
// Build QSA regex
// Regex strategy adopted from Diego Perini
/* Contains
	---------------------------------------------------------------------- */
// Element contains another
// Purposefully self-exclusive
// As in, an element does not contain itself
/* Sorting
	---------------------------------------------------------------------- */
// Document order sorting
return r!==H&&9===r.nodeType&&r.documentElement?(H=r,q=H.documentElement,_=!E(H),(n=H.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",Te,!1):n.attachEvent&&n.attachEvent("onunload",Te)),w.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),w.getElementsByTagName=i(function(e){return e.appendChild(H.createComment("")),!e.getElementsByTagName("*").length}),w.getElementsByClassName=me.test(H.getElementsByClassName),w.getById=i(function(e){return q.appendChild(e).id=P,!H.getElementsByName||!H.getElementsByName(P).length}),w.getById?(T.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&_){var n=t.getElementById(e);return n?[n]:[]}},T.filter.ID=function(e){var t=e.replace(be,we);return function(e){return e.getAttribute("id")===t}}):(delete T.find.ID,T.filter.ID=function(e){var t=e.replace(be,we);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),T.find.TAG=w.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):w.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,
// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
o=t.getElementsByTagName(e);
// Filter out possible comments
if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},T.find.CLASS=w.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&_)return t.getElementsByClassName(e)},M=[],F=[],(w.qsa=me.test(H.querySelectorAll))&&(i(function(e){
// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// http://bugs.jquery.com/ticket/12359
q.appendChild(e).innerHTML="<a id='"+P+"'></a><select id='"+P+"-\r\\' msallowcapture=''><option selected=''></option></select>",
// Support: IE8, Opera 11-12.16
// Nothing should be selected when empty strings follow ^= or $= or *=
// The test attribute must be unknown in Opera but "safe" for WinRT
// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
e.querySelectorAll("[msallowcapture^='']").length&&F.push("[*^$]="+ne+"*(?:''|\"\")"),
// Support: IE8
// Boolean attributes and "value" are not treated correctly
e.querySelectorAll("[selected]").length||F.push("\\["+ne+"*(?:value|"+te+")"),
// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
e.querySelectorAll("[id~="+P+"-]").length||F.push("~="),
// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
e.querySelectorAll(":checked").length||F.push(":checked"),
// Support: Safari 8+, iOS 8+
// https://bugs.webkit.org/show_bug.cgi?id=136851
// In-page `selector#id sibing-combinator selector` fails
e.querySelectorAll("a#"+P+"+*").length||F.push(".#.+[+~]")}),i(function(e){
// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var t=H.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),
// Support: IE8
// Enforce case-sensitivity of name attribute
e.querySelectorAll("[name=d]").length&&F.push("name"+ne+"*[*^$|!~]?="),
// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
e.querySelectorAll(":enabled").length||F.push(":enabled",":disabled"),
// Opera 10-11 does not throw on post-comma invalid pseudos
e.querySelectorAll("*,:x"),F.push(",.*:")})),(w.matchesSelector=me.test(O=q.matches||q.webkitMatchesSelector||q.mozMatchesSelector||q.oMatchesSelector||q.msMatchesSelector))&&i(function(e){
// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
w.disconnectedMatch=O.call(e,"div"),
// This should fail with an exception
// Gecko does not error, returns false instead
O.call(e,"[s!='']:x"),M.push("!=",oe)}),F=F.length&&new RegExp(F.join("|")),M=M.length&&new RegExp(M.join("|")),t=me.test(q.compareDocumentPosition),R=t||me.test(q.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},U=t?function(e,t){
// Flag for duplicate removal
if(e===t)return j=!0,0;
// Sort on method existence if only one input has compareDocumentPosition
var n=!e.compareDocumentPosition-!t.compareDocumentPosition;
// Calculate position if both inputs belong to the same document
// Otherwise we know they are disconnected
// Disconnected nodes
// Choose the first element that is related to our preferred document
return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!w.sortDetached&&t.compareDocumentPosition(e)===n?e===H||e.ownerDocument===B&&R(B,e)?-1:t===H||t.ownerDocument===B&&R(B,t)?1:D?ee(D,e)-ee(D,t):0:4&n?-1:1)}:function(e,t){
// Exit early if the nodes are identical
if(e===t)return j=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,s=[e],u=[t];
// Parentless nodes are either documents or disconnected
if(!i||!o)return e===H?-1:t===H?1:i?-1:o?1:D?ee(D,e)-ee(D,t):0;if(i===o)return a(e,t);for(
// Otherwise we need full lists of their ancestors for comparison
n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)u.unshift(n);
// Walk down the tree looking for a discrepancy
for(;s[r]===u[r];)r++;
// Do a sibling check if the nodes have a common ancestor
// Otherwise nodes in our document sort first
return r?a(s[r],u[r]):s[r]===B?-1:u[r]===B?1:0},H):H},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if(
// Set document vars if needed
(e.ownerDocument||e)!==H&&L(e),
// Make sure that attribute selectors are quoted
n=n.replace(ce,"='$1']"),w.matchesSelector&&_&&!X[n+" "]&&(!M||!M.test(n))&&(!F||!F.test(n)))try{var r=O.call(e,n);
// IE 9's matchesSelector returns false on disconnected nodes
if(r||w.disconnectedMatch||
// As well, disconnected nodes are said to be in a document
// fragment in IE 9
e.document&&11!==e.document.nodeType)return r}catch(e){}return t(n,H,null,[e]).length>0},t.contains=function(e,t){
// Set document vars if needed
return(e.ownerDocument||e)!==H&&L(e),R(e,t)},t.attr=function(e,t){
// Set document vars if needed
(e.ownerDocument||e)!==H&&L(e);var n=T.attrHandle[t.toLowerCase()],
// Don't get fooled by Object.prototype properties (jQuery #13807)
r=n&&J.call(T.attrHandle,t.toLowerCase())?n(e,t,!_):void 0;return void 0!==r?r:w.attributes||!_?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(
// Unless we *know* we can detect duplicates, assume their presence
j=!w.detectDuplicates,D=!w.sortStable&&e.slice(0),e.sort(U),j){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}
// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
return D=null,e},/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
C=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){
// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if("string"==typeof e.textContent)return e.textContent;
// Traverse its children
for(e=e.firstChild;e;e=e.nextSibling)n+=C(e)}else if(3===i||4===i)return e.nodeValue}else
// If no nodeType, this is expected to be an array
for(;t=e[r++];)
// Do not traverse comment nodes
n+=C(t);
// Do not include comment or processing instruction nodes
return n},T=t.selectors={
// Can be adjusted by the user
cacheLength:50,createPseudo:r,match:pe,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){
// Move the given value to match[3] whether quoted or unquoted
return e[1]=e[1].replace(be,we),e[3]=(e[3]||e[4]||e[5]||"").replace(be,we),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
// nth-* requires argument
// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];
// Accept quoted arguments as-is
// Get excess from tokenize (recursively)
// advance to the next closing parenthesis
// excess is a negative index
return pe.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&fe.test(n)&&(t=N(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(be,we).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=$[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&$(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:!n||(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(ae," ")+" ").indexOf(r)>-1:"|="===n&&(o===r||o.slice(0,r.length+1)===r+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;
// Shortcut for :nth-*(n)
return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,d,p,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s,x=!1;if(m){
// :(first|last|only)-(child|of-type)
if(o){for(;g;){for(d=t;d=d[g];)if(s?d.nodeName.toLowerCase()===y:1===d.nodeType)return!1;
// Reverse direction for :only-* (if we haven't yet done so)
h=g="only"===e&&!h&&"nextSibling"}return!0}
// non-xml :nth-child(...) stores cache data on `parent`
if(h=[a?m.firstChild:m.lastChild],a&&v){for(
// Seek `elem` from a previously-cached index
// ...in a gzip-friendly way
d=m,f=d[P]||(d[P]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
c=f[d.uniqueID]||(f[d.uniqueID]={}),l=c[e]||[],p=l[0]===W&&l[1],x=p&&l[2],d=p&&m.childNodes[p];d=++p&&d&&d[g]||(
// Fallback to seeking `elem` from the start
x=p=0)||h.pop();)
// When found, cache indexes on `parent` and break
if(1===d.nodeType&&++x&&d===t){c[e]=[W,p,x];break}}else
// xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(
// Use previously-cached element index if available
v&&(
// ...in a gzip-friendly way
d=t,f=d[P]||(d[P]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
c=f[d.uniqueID]||(f[d.uniqueID]={}),l=c[e]||[],p=l[0]===W&&l[1],x=p),x===!1)
// Use the same loop as above to seek `elem` from the start
for(;(d=++p&&d&&d[g]||(x=p=0)||h.pop())&&((s?d.nodeName.toLowerCase()!==y:1!==d.nodeType)||!++x||(
// Cache the index of each encountered element
v&&(f=d[P]||(d[P]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
c=f[d.uniqueID]||(f[d.uniqueID]={}),c[e]=[W,x]),d!==t)););
// Incorporate the offset, then check against cycle size
return x-=i,x===r||x%r===0&&x/r>=0}}},PSEUDO:function(e,n){
// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var i,o=T.pseudos[e]||T.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// But maintain support for old signatures
return o[P]?o(n):o.length>1?(i=[e,e,"",n],T.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),a=i.length;a--;)r=ee(e,i[a]),e[r]=!(t[r]=i[a])}):function(e){return o(e,0,i)}):o}},pseudos:{
// Potentially complex pseudos
not:r(function(e){
// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var t=[],n=[],i=k(e.replace(se,"$1"));return i[P]?r(function(e,t,n,r){
// Match elements unmatched by `matcher`
for(var o,a=i(e,null,r,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,r,o){
// Don't keep the element (issue #299)
return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(be,we),function(t){return(t.textContent||t.innerText||C(t)).indexOf(e)>-1}}),
// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
lang:r(function(e){
// lang value must be a valid identifier
return de.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(be,we).toLowerCase(),function(t){var n;do if(n=_?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),
// Miscellaneous
target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===q},focus:function(e){return e===H.activeElement&&(!H.hasFocus||H.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},
// Boolean properties
enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){
// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){
// Accessing this property makes selected-by-default
// options in Safari work properly
return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},
// Contents
empty:function(e){
// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!T.pseudos.empty(e)},
// Element/input types
header:function(e){return ge.test(e.nodeName)},input:function(e){return he.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;
// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},
// Position-in-collection
first:l(function(){return[0]}),last:l(function(e,t){return[t-1]}),eq:l(function(e,t,n){return[n<0?n+t:n]}),even:l(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:l(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:l(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:l(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},T.pseudos.nth=T.pseudos.eq;
// Add button/input type pseudos
for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.pseudos[b]=s(b);for(b in{submit:!0,reset:!0})T.pseudos[b]=u(b);/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
// One-time assignments
// Sort stability
// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
// Initialize against the default document
// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
// Support: IE<9
// Use defaultValue in place of getAttribute("value")
// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
return f.prototype=T.filters=T.pseudos,T.setFilters=new f,N=t.tokenize=function(e,n){var r,i,o,a,s,u,l,c=z[e+" "];if(c)return n?0:c.slice(0);for(s=e,u=[],l=T.preFilter;s;){
// Comma and first run
r&&!(i=ue.exec(s))||(i&&(
// Don't consume trailing commas as valid
s=s.slice(i[0].length)||s),u.push(o=[])),r=!1,
// Combinators
(i=le.exec(s))&&(r=i.shift(),o.push({value:r,
// Cast descendant combinators to space
type:i[0].replace(se," ")}),s=s.slice(r.length));
// Filters
for(a in T.filter)!(i=pe[a].exec(s))||l[a]&&!(i=l[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length));if(!r)break}
// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
// Cache the tokens
return n?s.length:s?t.error(e):z(e,u).slice(0)},k=t.compile=function(e,t){var n,r=[],i=[],o=X[e+" "];if(!o){for(
// Generate a function of recursive functions that can be used to check each element
t||(t=N(e)),n=t.length;n--;)o=v(t[n]),o[P]?r.push(o):i.push(o);
// Cache the compiled function
o=X(e,x(i,r)),
// Save selector and tokenization
o.selector=e}return o},S=t.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,f=!r&&N(e=l.selector||e);
// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(n=n||[],1===f.length){if(
// Reduce context if the leading compound selector is an ID
o=f[0]=f[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&w.getById&&9===t.nodeType&&_&&T.relative[o[1].type]){if(t=(T.find.ID(a.matches[0].replace(be,we),t)||[])[0],!t)return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(
// Fetch a seed set for right-to-left matching
i=pe.needsContext.test(e)?0:o.length;i--&&(a=o[i],!T.relative[s=a.type]);)if((u=T.find[s])&&(r=u(a.matches[0].replace(be,we),ve.test(o[0].type)&&c(t.parentNode)||t))){if(
// If seed is empty or no tokens remain, we can return early
o.splice(i,1),e=r.length&&d(o),!e)return K.apply(n,r),n;break}}
// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
return(l||k(e,f))(r,t,!_,n,!t||ve.test(e)&&c(t.parentNode)||t),n},w.sortStable=P.split("").sort(U).join("")===P,w.detectDuplicates=!!j,L(),w.sortDetached=i(function(e){
// Should return 1, but returns 4 (following)
return 1&e.compareDocumentPosition(H.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),w.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(te,function(e,t,n){var r;if(!n)return e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(n);ye.find=Te,ye.expr=Te.selectors,ye.expr[":"]=ye.expr.pseudos,ye.uniqueSort=ye.unique=Te.uniqueSort,ye.text=Te.getText,ye.isXMLDoc=Te.isXML,ye.contains=Te.contains;var Ce=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&ye(e).is(n))break;r.push(e)}return r},Ee=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},Ne=ye.expr.match.needsContext,ke=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Se=/^.[^:#\[\.,]*$/;ye.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?ye.find.matchesSelector(r,e)?[r]:[]:ye.find.matches(e,ye.grep(t,function(e){return 1===e.nodeType}))},ye.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(ye(e).filter(function(){for(t=0;t<i;t++)if(ye.contains(r[t],this))return!0}));for(t=0;t<i;t++)ye.find(e,r[t],n);
// Needed because $( selector, context ) becomes $( context ).find( selector )
return n=this.pushStack(i>1?ye.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},filter:function(e){return this.pushStack(s(this,e||[],!1))},not:function(e){return this.pushStack(s(this,e||[],!0))},is:function(e){
// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
return!!s(this,"string"==typeof e&&Ne.test(e)?ye(e):e||[],!1).length}});
// Initialize a jQuery object
// A central reference to the root jQuery(document)
var Ae,
// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
De=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,je=ye.fn.init=function(e,t,n){var r,i;
// HANDLE: $(""), $(null), $(undefined), $(false)
if(!e)return this;
// Handle HTML strings
if(
// init accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
n=n||Ae,"string"==typeof e){
// Match html or make sure no context is specified for #id
if(
// Assume that strings that start and end with <> are HTML and skip the regex check
r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:De.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);
// HANDLE: $(html) -> $(array)
if(r[1]){
// HANDLE: $(html, props)
if(t=t instanceof ye?t[0]:t,
// scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
ye.merge(this,ye.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:se,!0)),ke.test(r[1])&&ye.isPlainObject(t))for(r in t)
// Properties of context are called as methods if possible
ye.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}
// Check parentNode to catch when Blackberry 4.6 returns
// nodes that are no longer in the document #6963
if(i=se.getElementById(r[2]),i&&i.parentNode){
// Handle the case where IE and Opera return items
// by name instead of ID
if(i.id!==r[2])return Ae.find(e);
// Otherwise, we inject the element directly into the jQuery object
this.length=1,this[0]=i}return this.context=se,this.selector=e,this}
// Execute immediately if ready is not present
return e.nodeType?(this.context=this[0]=e,this.length=1,this):ye.isFunction(e)?"undefined"!=typeof n.ready?n.ready(e):e(ye):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),ye.makeArray(e,this))};
// Give the init function the jQuery prototype for later instantiation
je.prototype=ye.fn,
// Initialize central reference
Ae=ye(se);var Le=/^(?:parents|prev(?:Until|All))/,
// methods guaranteed to produce a unique set when starting from a unique set
He={children:!0,contents:!0,next:!0,prev:!0};ye.fn.extend({has:function(e){var t,n=ye(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(ye.contains(this,n[t]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=Ne.test(e)||"string"!=typeof e?ye(e,t||this.context):0;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)
// Always skip document fragments
if(n.nodeType<11&&(a?a.index(n)>-1:
// Don't pass non-elements to Sizzle
1===n.nodeType&&ye.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?ye.uniqueSort(o):o)},
// Determine the position of an element within
// the matched set of elements
index:function(e){
// No argument, return index in parent
// No argument, return index in parent
// index in selector
// If it receives a jQuery object, the first element is used
return e?"string"==typeof e?ye.inArray(this[0],ye(e)):ye.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ye.uniqueSort(ye.merge(this.get(),ye(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ye.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return Ce(e,"parentNode")},parentsUntil:function(e,t,n){return Ce(e,"parentNode",n)},next:function(e){return u(e,"nextSibling")},prev:function(e){return u(e,"previousSibling")},nextAll:function(e){return Ce(e,"nextSibling")},prevAll:function(e){return Ce(e,"previousSibling")},nextUntil:function(e,t,n){return Ce(e,"nextSibling",n)},prevUntil:function(e,t,n){return Ce(e,"previousSibling",n)},siblings:function(e){return Ee((e.parentNode||{}).firstChild,e)},children:function(e){return Ee(e.firstChild)},contents:function(e){return ye.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:ye.merge([],e.childNodes)}},function(e,t){ye.fn[e]=function(n,r){var i=ye.map(this,t,n);
// Remove duplicates
// Reverse order for parents* and prev-derivatives
return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=ye.filter(r,i)),this.length>1&&(He[e]||(i=ye.uniqueSort(i)),Le.test(e)&&(i=i.reverse())),this.pushStack(i)}});var qe=/\S+/g;/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
ye.Callbacks=function(e){
// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
e="string"==typeof e?l(e):ye.extend({},e);var// Flag to know if list is currently firing
t,
// Last fire value for non-forgettable lists
n,
// Flag to know if list was already fired
r,
// Flag to prevent firing
i,
// Actual callback list
o=[],
// Queue of execution data for repeatable lists
a=[],
// Index of currently firing callback (modified by add/remove as needed)
s=-1,
// Fire callbacks
u=function(){for(
// Enforce single-firing
i=e.once,
// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
r=t=!0;a.length;s=-1)for(n=a.shift();++s<o.length;)
// Run callback and check for early termination
o[s].apply(n[0],n[1])===!1&&e.stopOnFalse&&(
// Jump to end and forget the data so .add doesn't re-fire
s=o.length,n=!1);
// Forget the data if we're done with it
e.memory||(n=!1),t=!1,
// Clean up if we're done firing for good
i&&(
// Keep an empty list if we have data for future add calls
o=n?[]:"")},
// Actual Callbacks object
c={
// Add a callback or a collection of callbacks to the list
add:function(){
// If we have memory from a past run, we should fire after adding
return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){ye.each(n,function(n,r){ye.isFunction(r)?e.unique&&c.has(r)||o.push(r):r&&r.length&&"string"!==ye.type(r)&&
// Inspect recursively
t(r)})}(arguments),n&&!t&&u()),this},
// Remove a callback from the list
remove:function(){return ye.each(arguments,function(e,t){for(var n;(n=ye.inArray(t,o,n))>-1;)o.splice(n,1),
// Handle firing indexes
n<=s&&s--}),this},
// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(e){return e?ye.inArray(e,o)>-1:o.length>0},
// Remove all callbacks from the list
empty:function(){return o&&(o=[]),this},
// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},
// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return i=!0,n||c.disable(),this},locked:function(){return!!i},
// Call all callbacks with the given context and arguments
fireWith:function(e,n){return i||(n=n||[],n=[e,n.slice?n.slice():n],a.push(n),t||u()),this},
// Call all the callbacks with the given arguments
fire:function(){return c.fireWith(this,arguments),this},
// To know if the callbacks have already been called at least once
fired:function(){return!!r}};return c},ye.extend({Deferred:function(e){var t=[
// action, add listener, listener list, final state
["resolve","done",ye.Callbacks("once memory"),"resolved"],["reject","fail",ye.Callbacks("once memory"),"rejected"],["notify","progress",ye.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return ye.Deferred(function(n){ye.each(t,function(t,o){var a=ye.isFunction(e[t])&&e[t];
// deferred[ done | fail | progress ] for forwarding actions to newDefer
i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&ye.isFunction(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[o[0]+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},
// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(e){return null!=e?ye.extend(e,r):r}},i={};
// All done!
// Keep pipe for back-compat
// Add list-specific methods
// Make the deferred a promise
// Call given func if any
return r.pipe=r.then,ye.each(t,function(e,o){var a=o[2],s=o[3];
// promise[ done | fail | progress ] = list.add
r[o[1]]=a.add,
// Handle state
s&&a.add(function(){
// state = [ resolved | rejected ]
n=s},t[1^e][2].disable,t[2][2].lock),
// deferred[ resolve | reject | notify ]
i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},
// Deferred helper
when:function(e){var t,n,r,i=0,o=ue.call(arguments),a=o.length,
// the count of uncompleted subordinates
s=1!==a||e&&ye.isFunction(e.promise)?a:0,
// the master Deferred.
// If resolveValues consist of only a single Deferred, just use that.
u=1===s?e:ye.Deferred(),
// Update function for both resolve and progress values
l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?ue.call(arguments):i,r===t?u.notifyWith(n,r):--s||u.resolveWith(n,r)}};
// add listeners to Deferred subordinates; treat others as resolved
if(a>1)for(t=new Array(a),n=new Array(a),r=new Array(a);i<a;i++)o[i]&&ye.isFunction(o[i].promise)?o[i].promise().progress(l(i,n,t)).done(l(i,r,o)).fail(u.reject):--s;
// if we're not waiting on anything, resolve the master
return s||u.resolveWith(r,o),u.promise()}});
// The deferred used on DOM ready
var _e;ye.fn.ready=function(e){
// Add the callback
return ye.ready.promise().done(e),this},ye.extend({
// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,
// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,
// Hold (or release) the ready event
holdReady:function(e){e?ye.readyWait++:ye.ready(!0)},
// Handle when the DOM is ready
ready:function(e){
// Abort if there are pending holds or we're already ready
(e===!0?--ye.readyWait:ye.isReady)||(
// Remember that the DOM is ready
ye.isReady=!0,
// If a normal DOM Ready event fired, decrement, and wait if need be
e!==!0&&--ye.readyWait>0||(
// If there are functions bound, to execute
_e.resolveWith(se,[ye]),
// Trigger any bound ready events
ye.fn.triggerHandler&&(ye(se).triggerHandler("ready"),ye(se).off("ready"))))}}),ye.ready.promise=function(e){if(!_e)
// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE6-10
// Older IE sometimes signals "interactive" too soon
if(_e=ye.Deferred(),"complete"===se.readyState||"loading"!==se.readyState&&!se.documentElement.doScroll)
// Handle it asynchronously to allow scripts the opportunity to delay ready
n.setTimeout(ye.ready);else if(se.addEventListener)
// Use the handy event callback
se.addEventListener("DOMContentLoaded",f),
// A fallback to window.onload, that will always work
n.addEventListener("load",f);else{
// Ensure firing before onload, maybe late but safe also for iframes
se.attachEvent("onreadystatechange",f),
// A fallback to window.onload, that will always work
n.attachEvent("onload",f);
// If IE and not a frame
// continually check to see if the document is ready
var t=!1;try{t=null==n.frameElement&&se.documentElement}catch(e){}t&&t.doScroll&&!function e(){if(!ye.isReady){try{
// Use the trick by Diego Perini
// http://javascript.nwbox.com/IEContentLoaded/
t.doScroll("left")}catch(t){return n.setTimeout(e,50)}
// detach all dom ready events
c(),
// and execute any waiting functions
ye.ready()}}()}return _e.promise(e)},
// Kick off the DOM ready check even if the user does not
ye.ready.promise();
// Support: IE<9
// Iteration over object's inherited properties before its own
var Fe;for(Fe in ye(ge))break;ge.ownFirst="0"===Fe,
// Note: most support tests are defined in their respective modules.
// false until the test is run
ge.inlineBlockNeedsLayout=!1,
// Execute ASAP in case we need to set body.style.zoom
ye(function(){
// Minified: var a,b,c,d
var e,t,n,r;n=se.getElementsByTagName("body")[0],n&&n.style&&(
// Setup
t=se.createElement("div"),r=se.createElement("div"),r.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(r).appendChild(t),"undefined"!=typeof t.style.zoom&&(
// Support: IE<8
// Check if natively block-level elements act like inline-block
// elements when setting their display to 'inline' and giving
// them layout
t.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",ge.inlineBlockNeedsLayout=e=3===t.offsetWidth,e&&(
// Prevent IE 6 from affecting layout for positioned elements #11048
// Prevent IE from shrinking the body in IE 7 mode #12869
// Support: IE<8
n.style.zoom=1)),n.removeChild(r))}),function(){var e=se.createElement("div");
// Support: IE<9
ge.deleteExpando=!0;try{delete e.test}catch(e){ge.deleteExpando=!1}
// Null elements to avoid leaks in IE.
e=null}();var Me=function(e){var t=ye.noData[(e.nodeName+" ").toLowerCase()],n=+e.nodeType||1;
// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
// Nodes accept data unless otherwise specified; rejection can be conditional
return(1===n||9===n)&&(!t||t!==!0&&e.getAttribute("classid")===t)},Oe=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Re=/([A-Z])/g;ye.extend({cache:{},
// The following elements (space-suffixed to avoid Object.prototype collisions)
// throw uncatchable exceptions if you attempt to set expando properties
noData:{"applet ":!0,"embed ":!0,
// ...but Flash objects (which have this classid) *can* handle expandos
"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?ye.cache[e[ye.expando]]:e[ye.expando],!!e&&!p(e)},data:function(e,t,n){return h(e,t,n)},removeData:function(e,t){return g(e,t)},
// For internal use only.
_data:function(e,t,n){return h(e,t,n,!0)},_removeData:function(e,t){return g(e,t,!0)}}),ye.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;
// Special expections of .data basically thwart jQuery.access,
// so implement the relevant behavior ourselves
// Gets all values
if(void 0===e){if(this.length&&(i=ye.data(o),1===o.nodeType&&!ye._data(o,"parsedAttrs"))){for(n=a.length;n--;)
// Support: IE11+
// The attrs elements can be null (#14894)
a[n]&&(r=a[n].name,0===r.indexOf("data-")&&(r=ye.camelCase(r.slice(5)),d(o,r,i[r])));ye._data(o,"parsedAttrs",!0)}return i}
// Sets multiple values
// Sets multiple values
// Sets one value
// Gets one value
// Try to fetch any internally stored data first
return"object"==typeof e?this.each(function(){ye.data(this,e)}):arguments.length>1?this.each(function(){ye.data(this,e,t)}):o?d(o,e,ye.data(o,e)):void 0},removeData:function(e){return this.each(function(){ye.removeData(this,e)})}}),ye.extend({queue:function(e,t,n){var r;if(e)
// Speed up dequeue by getting out quickly if this is just a lookup
return t=(t||"fx")+"queue",r=ye._data(e,t),n&&(!r||ye.isArray(n)?r=ye._data(e,t,ye.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=ye.queue(e,t),r=n.length,i=n.shift(),o=ye._queueHooks(e,t),a=function(){ye.dequeue(e,t)};
// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===i&&(i=n.shift(),r--),i&&(
// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
"fx"===t&&n.unshift("inprogress"),
// clear up the last queue stop function
delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},
// not intended for public consumption - generates a queueHooks object,
// or returns the current one
_queueHooks:function(e,t){var n=t+"queueHooks";return ye._data(e,n)||ye._data(e,n,{empty:ye.Callbacks("once memory").add(function(){ye._removeData(e,t+"queue"),ye._removeData(e,n)})})}}),ye.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?ye.queue(this[0],e):void 0===t?this:this.each(function(){var n=ye.queue(this,e,t);
// ensure a hooks for this queue
ye._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&ye.dequeue(this,e)})},dequeue:function(e){return this.each(function(){ye.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},
// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(e,t){var n,r=1,i=ye.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)n=ye._data(o[a],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}}),function(){var e;ge.shrinkWrapBlocks=function(){if(null!=e)return e;
// Will be changed later if needed.
e=!1;
// Minified: var b,c,d
var t,n,r;
// Setup
// Support: IE6
// Check if elements with layout shrink-wrap their children
// Reset CSS: box-sizing; display; margin; border
// Support: Firefox<29, Android 2.3
// Vendor-prefix box-sizing
return n=se.getElementsByTagName("body")[0],n&&n.style?(t=se.createElement("div"),r=se.createElement("div"),r.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(r).appendChild(t),"undefined"!=typeof t.style.zoom&&(t.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",t.appendChild(se.createElement("div")).style.width="5px",e=3!==t.offsetWidth),n.removeChild(r),e):void 0}}();var Pe=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Be=new RegExp("^(?:([+-])=|)("+Pe+")([a-z%]*)$","i"),We=["Top","Right","Bottom","Left"],Ie=function(e,t){
// isHidden might be called from jQuery#filter function;
// in that case, element will be second argument
return e=t||e,"none"===ye.css(e,"display")||!ye.contains(e.ownerDocument,e)},$e=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;
// Sets many values
if("object"===ye.type(n)){i=!0;for(s in n)$e(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,ye.isFunction(r)||(a=!0),l&&(
// Bulk operations run against the entire set
a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(ye(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));
// Gets
return i?e:l?t.call(e):u?t(e[0],n):o},ze=/^(?:checkbox|radio)$/i,Xe=/<([\w:-]+)/,Ue=/^$|\/(?:java|ecma)script/i,Ve=/^\s+/,Je="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";!function(){var e=se.createElement("div"),t=se.createDocumentFragment(),n=se.createElement("input");
// Setup
e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
// IE strips leading whitespace when .innerHTML is used
ge.leadingWhitespace=3===e.firstChild.nodeType,
// Make sure that tbody elements aren't automatically inserted
// IE will insert them into empty tables
ge.tbody=!e.getElementsByTagName("tbody").length,
// Make sure that link elements get serialized correctly by innerHTML
// This requires a wrapper element in IE
ge.htmlSerialize=!!e.getElementsByTagName("link").length,
// Makes sure cloning an html5 element does not cause problems
// Where outerHTML is undefined, this still works
ge.html5Clone="<:nav></:nav>"!==se.createElement("nav").cloneNode(!0).outerHTML,
// Check if a disconnected checkbox will retain its checked
// value of true after appended to the DOM (IE6/7)
n.type="checkbox",n.checked=!0,t.appendChild(n),ge.appendChecked=n.checked,
// Make sure textarea (and checkbox) defaultValue is properly cloned
// Support: IE6-IE11+
e.innerHTML="<textarea>x</textarea>",ge.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue,
// #11217 - WebKit loses check when the name is after the checked attribute
t.appendChild(e),
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
n=se.createElement("input"),n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),e.appendChild(n),
// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
// old WebKit doesn't clone checked state correctly in fragments
ge.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,
// Support: IE<9
// Cloned elements keep attachEvent handlers, we use addEventListener on IE9+
ge.noCloneEvent=!!e.addEventListener,
// Support: IE<9
// Since attributes and properties are the same in IE,
// cleanData must set properties to undefined rather than use removeAttribute
e[ye.expando]=1,ge.attributes=!e.getAttribute(ye.expando)}();
// We have to close these tags to support XHTML (#13200)
var Ye={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],
// Support: IE8
param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],
// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
// unless wrapped in a div with non-breaking characters in front of it.
_default:ge.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};
// Support: IE8-IE9
Ye.optgroup=Ye.option,Ye.tbody=Ye.tfoot=Ye.colgroup=Ye.caption=Ye.thead,Ye.th=Ye.td;var Ge=/<|&#?\w+;/,Qe=/<tbody/i;!function(){var e,t,r=se.createElement("div");
// Support: IE<9 (lack submit/change bubble), Firefox (lack focus(in | out) events)
for(e in{submit:!0,change:!0,focusin:!0})t="on"+e,(ge[e]=t in n)||(
// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
r.setAttribute(t,"t"),ge[e]=r.attributes[t].expando===!1);
// Null elements to avoid leaks in IE.
r=null}();var Ke=/^(?:input|select|textarea)$/i,Ze=/^key/,et=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,tt=/^(?:focusinfocus|focusoutblur)$/,nt=/^([^.]*)(?:\.(.+)|)/;/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
ye.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,d,p,h,g,m=ye._data(e);
// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(m){for(
// Caller can pass in an object of custom data in lieu of the handler
n.handler&&(u=n,n=u.handler,i=u.selector),
// Make sure that the handler has a unique ID, used to find/remove it later
n.guid||(n.guid=ye.guid++),
// Init the element's event structure and main handler, if this is the first
(a=m.events)||(a=m.events={}),(c=m.handle)||(c=m.handle=function(e){
// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return"undefined"==typeof ye||e&&ye.event.triggered===e.type?void 0:ye.event.dispatch.apply(c.elem,arguments)},
// Add elem as a property of the handle fn to prevent a memory leak
// with IE non-native events
c.elem=e),
// Handle multiple events separated by a space
t=(t||"").match(qe)||[""],s=t.length;s--;)o=nt.exec(t[s])||[],p=g=o[1],h=(o[2]||"").split(".").sort(),
// There *must* be a type, no attaching namespace-only handlers
p&&(
// If event changes its type, use the special event handlers for the changed type
l=ye.event.special[p]||{},
// If selector defined, determine special event api type, otherwise given type
p=(i?l.delegateType:l.bindType)||p,
// Update special based on newly reset type
l=ye.event.special[p]||{},
// handleObj is passed to all event handlers
f=ye.extend({type:p,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&ye.expr.match.needsContext.test(i),namespace:h.join(".")},u),
// Init the event handler queue if we're the first
(d=a[p])||(d=a[p]=[],d.delegateCount=0,
// Only use addEventListener/attachEvent if the special events handler returns false
l.setup&&l.setup.call(e,r,h,c)!==!1||(
// Bind the global event handler to the element
e.addEventListener?e.addEventListener(p,c,!1):e.attachEvent&&e.attachEvent("on"+p,c))),l.add&&(l.add.call(e,f),f.handler.guid||(f.handler.guid=n.guid)),
// Add to the element's handler list, delegates in front
i?d.splice(d.delegateCount++,0,f):d.push(f),
// Keep track of which events have ever been used, for event optimization
ye.event.global[p]=!0);
// Nullify elem to prevent memory leaks in IE
e=null}},
// Detach an event or set of events from an element
remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,d,p,h,g,m=ye.hasData(e)&&ye._data(e);if(m&&(c=m.events)){for(
// Once for each type.namespace in types; type may be omitted
t=(t||"").match(qe)||[""],l=t.length;l--;)
// Unbind all events (on this namespace, if provided) for the element
if(s=nt.exec(t[l])||[],p=g=s[1],h=(s[2]||"").split(".").sort(),p){for(f=ye.event.special[p]||{},p=(r?f.delegateType:f.bindType)||p,d=c[p]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),
// Remove matching events
u=o=d.length;o--;)a=d[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(d.splice(o,1),a.selector&&d.delegateCount--,f.remove&&f.remove.call(e,a));
// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
u&&!d.length&&(f.teardown&&f.teardown.call(e,h,m.handle)!==!1||ye.removeEvent(e,p,m.handle),delete c[p])}else for(p in c)ye.event.remove(e,p+t[l],n,r,!0);
// Remove the expando if it's no longer used
ye.isEmptyObject(c)&&(delete m.handle,
// removeData also checks for emptiness and clears the expando if empty
// so use it instead of delete
ye._removeData(e,"events"))}},trigger:function(e,t,r,i){var o,a,s,u,l,c,f,d=[r||se],p=he.call(e,"type")?e.type:e,h=he.call(e,"namespace")?e.namespace.split("."):[];
// Don't do events on text and comment nodes
if(s=c=r=r||se,3!==r.nodeType&&8!==r.nodeType&&!tt.test(p+ye.event.triggered)&&(p.indexOf(".")>-1&&(
// Namespaced trigger; create a regexp to match event type in handle()
h=p.split("."),p=h.shift(),h.sort()),a=p.indexOf(":")<0&&"on"+p,
// Caller can pass in a jQuery.Event object, Object, or just an event type string
e=e[ye.expando]?e:new ye.Event(p,"object"==typeof e&&e),
// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
e.isTrigger=i?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,
// Clean up the event in case it is being reused
e.result=void 0,e.target||(e.target=r),
// Clone any incoming data and prepend the event, creating the handler arg list
t=null==t?[e]:ye.makeArray(t,[e]),
// Allow special events to draw outside the lines
l=ye.event.special[p]||{},i||!l.trigger||l.trigger.apply(r,t)!==!1)){
// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!i&&!l.noBubble&&!ye.isWindow(r)){for(u=l.delegateType||p,tt.test(u+p)||(s=s.parentNode);s;s=s.parentNode)d.push(s),c=s;
// Only add window if we got to document (e.g., not plain obj or detached DOM)
c===(r.ownerDocument||se)&&d.push(c.defaultView||c.parentWindow||n)}for(
// Fire handlers on the event path
f=0;(s=d[f++])&&!e.isPropagationStopped();)e.type=f>1?u:l.bindType||p,
// jQuery handler
o=(ye._data(s,"events")||{})[e.type]&&ye._data(s,"handle"),o&&o.apply(s,t),
// Native handler
o=a&&s[a],o&&o.apply&&Me(s)&&(e.result=o.apply(s,t),e.result===!1&&e.preventDefault());
// If nobody prevented the default action, do it now
if(e.type=p,!i&&!e.isDefaultPrevented()&&(!l._default||l._default.apply(d.pop(),t)===!1)&&Me(r)&&a&&r[p]&&!ye.isWindow(r)){
// Don't re-trigger an onFOO event when we call its FOO() method
c=r[a],c&&(r[a]=null),
// Prevent re-triggering of the same event, since we already bubbled it above
ye.event.triggered=p;try{r[p]()}catch(e){}ye.event.triggered=void 0,c&&(r[a]=c)}return e.result}},dispatch:function(e){
// Make a writable jQuery.Event from the native event object
e=ye.event.fix(e);var t,n,r,i,o,a=[],s=ue.call(arguments),u=(ye._data(this,"events")||{})[e.type]||[],l=ye.event.special[e.type]||{};
// Call the preDispatch hook for the mapped type, and let it bail if desired
if(
// Use the fix-ed jQuery.Event rather than the (read-only) native event
s[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){for(
// Determine handlers
a=ye.event.handlers.call(this,e,u),
// Run delegates first; they may want to stop propagation beneath us
t=0;(i=a[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!e.isImmediatePropagationStopped();)
// Triggered event must either 1) have no namespace, or 2) have namespace(s)
// a subset or equal to those in the bound event (both can have no namespace).
e.rnamespace&&!e.rnamespace.test(o.namespace)||(e.handleObj=o,e.data=o.data,r=((ye.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s),void 0!==r&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()));
// Call the postDispatch hook for the mapped type
return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,a=[],s=t.delegateCount,u=e.target;
// Support (at least): Chrome, IE9
// Find delegate handlers
// Black-hole SVG <use> instance trees (#13180)
//
// Support: Firefox<=42+
// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
if(s&&u.nodeType&&("click"!==e.type||isNaN(e.button)||e.button<1))/* jshint eqeqeq: false */
for(;u!=this;u=u.parentNode||this)/* jshint eqeqeq: true */
// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(r=[],n=0;n<s;n++)o=t[n],
// Don't conflict with Object.prototype properties (#13203)
i=o.selector+" ",void 0===r[i]&&(r[i]=o.needsContext?ye(i,this).index(u)>-1:ye.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&a.push({elem:u,handlers:r})}
// Add the remaining (directly-bound) handlers
return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a},fix:function(e){if(e[ye.expando])return e;
// Create a writable copy of the event object and normalize some properties
var t,n,r,i=e.type,o=e,a=this.fixHooks[i];for(a||(this.fixHooks[i]=a=et.test(i)?this.mouseHooks:Ze.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new ye.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];
// Support: IE<9
// Fix target property (#1925)
// Support: Safari 6-8+
// Target should not be a text node (#504, #13143)
// Support: IE<9
// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
return e.target||(e.target=o.srcElement||se),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,a.filter?a.filter(e,o):e},
// Includes some event props shared by KeyEvent and MouseEvent
props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){
// Add which for key events
return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button,a=t.fromElement;
// Calculate pageX/Y if missing and clientX/Y available
// Add relatedTarget, if necessary
// Add which for click: 1 === left; 2 === middle; 3 === right
// Note: button is not normalized, so don't use it
return null==e.pageX&&null!=t.clientX&&(r=e.target.ownerDocument||se,i=r.documentElement,n=r.body,e.pageX=t.clientX+(i&&i.scrollLeft||n&&n.scrollLeft||0)-(i&&i.clientLeft||n&&n.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||n&&n.scrollTop||0)-(i&&i.clientTop||n&&n.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?t.toElement:a),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},special:{load:{
// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},focus:{
// Fire native event if possible so blur/focus sequence is correct
trigger:function(){if(this!==E()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){if(this===E()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{
// For checkbox, fire native event so checked state will be right
trigger:function(){if(ye.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),!1},
// For cross-browser consistency, don't fire native .click() on links
_default:function(e){return ye.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){
// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},
// Piggyback on a donor event to simulate a different one
simulate:function(e,t,n){var r=ye.extend(new ye.Event,n,{type:e,isSimulated:!0});ye.event.trigger(r,null,t),r.isDefaultPrevented()&&n.preventDefault()}},ye.removeEvent=se.removeEventListener?function(e,t,n){
// This "if" is needed for plain objects
e.removeEventListener&&e.removeEventListener(t,n)}:function(e,t,n){var r="on"+t;e.detachEvent&&(
// #8545, #7054, preventing memory leaks for custom events in IE6-8
// detachEvent needed property on element, by name of that event,
// to properly expose it to GC
"undefined"==typeof e[r]&&(e[r]=null),e.detachEvent(r,n))},ye.Event=function(e,t){
// Allow instantiation without the 'new' keyword
// Allow instantiation without the 'new' keyword
// Event object
// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
// Support: IE < 9, Android < 4.0
// Put explicitly provided properties onto the event object
// Create a timestamp if incoming event doesn't have one
// Mark it as fixed
return this instanceof ye.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?T:C):this.type=e,t&&ye.extend(this,t),this.timeStamp=e&&e.timeStamp||ye.now(),void(this[ye.expando]=!0)):new ye.Event(e,t)},
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
ye.Event.prototype={constructor:ye.Event,isDefaultPrevented:C,isPropagationStopped:C,isImmediatePropagationStopped:C,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=T,e&&(
// If preventDefault exists, run it on the original event
e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=T,e&&!this.isSimulated&&(
// If stopPropagation exists, run it on the original event
e.stopPropagation&&e.stopPropagation(),
// Support: IE
// Set the cancelBubble property of the original event to true
e.cancelBubble=!0)},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=T,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},
// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://code.google.com/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
ye.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){ye.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return i&&(i===r||ye.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),
// IE submit delegation
ge.submit||(ye.event.special.submit={setup:function(){
// Only need this for delegated form submit events
// Only need this for delegated form submit events
// Lazy-add a submit handler when a descendant form may potentially be submitted
return!ye.nodeName(this,"form")&&void ye.event.add(this,"click._submit keypress._submit",function(e){
// Node name check avoids a VML-related crash in IE (#9807)
var t=e.target,n=ye.nodeName(t,"input")||ye.nodeName(t,"button")?
// Support: IE <=8
// We use jQuery.prop instead of elem.form
// to allow fixing the IE8 delegated submit issue (gh-2332)
// by 3rd party polyfills/workarounds.
ye.prop(t,"form"):void 0;n&&!ye._data(n,"submit")&&(ye.event.add(n,"submit._submit",function(e){e._submitBubble=!0}),ye._data(n,"submit",!0))})},postDispatch:function(e){
// If form was submitted by the user, bubble the event up the tree
e._submitBubble&&(delete e._submitBubble,this.parentNode&&!e.isTrigger&&ye.event.simulate("submit",this.parentNode,e))},teardown:function(){
// Only need this for delegated form submit events
// Only need this for delegated form submit events
// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
return!ye.nodeName(this,"form")&&void ye.event.remove(this,"._submit")}}),
// IE change delegation and checkbox/radio fix
ge.change||(ye.event.special.change={setup:function(){
// IE doesn't fire change on a check/radio until blur; trigger it on click
// after a propertychange. Eat the blur-change in special.change.handle.
// This still fires onchange a second time for check/radio after blur.
// Delegated event; lazy-add a change handler on descendant inputs
return Ke.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(ye.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._justChanged=!0)}),ye.event.add(this,"click._change",function(e){this._justChanged&&!e.isTrigger&&(this._justChanged=!1),
// Allow triggered, simulated change events (#11500)
ye.event.simulate("change",this,e)})),!1):void ye.event.add(this,"beforeactivate._change",function(e){var t=e.target;Ke.test(t.nodeName)&&!ye._data(t,"change")&&(ye.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||ye.event.simulate("change",this.parentNode,e)}),ye._data(t,"change",!0))})},handle:function(e){var t=e.target;
// Swallow native change events from checkbox/radio, we already triggered them above
if(this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type)return e.handleObj.handler.apply(this,arguments)},teardown:function(){return ye.event.remove(this,"._change"),!Ke.test(this.nodeName)}}),
// Support: Firefox
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome, Safari
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
ge.focusin||ye.each({focus:"focusin",blur:"focusout"},function(e,t){
// Attach a single capturing handler on the document while someone wants focusin/focusout
var n=function(e){ye.event.simulate(t,e.target,ye.event.fix(e))};ye.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=ye._data(r,t);i||r.addEventListener(e,n,!0),ye._data(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=ye._data(r,t)-1;i?ye._data(r,t,i):(r.removeEventListener(e,n,!0),ye._removeData(r,t))}}}),ye.fn.extend({on:function(e,t,n,r){return N(this,e,t,n,r)},one:function(e,t,n,r){return N(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)
// ( event )  dispatched jQuery.Event
return r=e.handleObj,ye(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){
// ( types-object [, selector] )
for(i in e)this.off(i,t,e[i]);return this}
// ( types [, fn] )
return t!==!1&&"function"!=typeof t||(n=t,t=void 0),n===!1&&(n=C),this.each(function(){ye.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){ye.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ye.event.trigger(e,t,n,!0)}});var rt=/ jQuery\d+="(?:null|\d+)"/g,it=new RegExp("<(?:"+Je+")[\\s/>]","i"),ot=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
// Support: IE 10-11, Edge 10240+
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
at=/<script|<style|<link/i,
// checked="checked" or checked
st=/checked\s*(?:[^=]|=\s*.checked.)/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct=y(se),ft=ct.appendChild(se.createElement("div"));ye.extend({htmlPrefilter:function(e){return e.replace(ot,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u=ye.contains(e.ownerDocument,e);if(ge.html5Clone||ye.isXMLDoc(e)||!it.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(ft.innerHTML=e.outerHTML,ft.removeChild(o=ft.firstChild)),!(ge.noCloneEvent&&ge.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ye.isXMLDoc(e)))
// Fix all IE cloning issues
for(
// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
r=v(o),s=v(e),a=0;null!=(i=s[a]);++a)
// Ensure that the destination node is not null; Fixes #9587
r[a]&&j(i,r[a]);
// Copy the events from the original to the clone
if(t)if(n)for(s=s||v(e),r=r||v(o),a=0;null!=(i=s[a]);a++)D(i,r[a]);else D(e,o);
// Return the cloned set
// Preserve script evaluation history
return r=v(o,"script"),r.length>0&&x(r,!u&&v(e,"script")),r=s=i=null,o},cleanData:function(e,/* internal */t){for(var n,r,i,o,a=0,s=ye.expando,u=ye.cache,l=ge.attributes,c=ye.event.special;null!=(n=e[a]);a++)if((t||Me(n))&&(i=n[s],o=i&&u[i])){if(o.events)for(r in o.events)c[r]?ye.event.remove(n,r):ye.removeEvent(n,r,o.handle);
// Remove cache only if it was not already removed by jQuery.event.remove
u[i]&&(delete u[i],
// Support: IE<9
// IE does not allow us to delete expando properties from nodes
// IE creates expando attributes along with the property
// IE does not have a removeAttribute function on Document nodes
l||"undefined"==typeof n.removeAttribute?n[s]=void 0:n.removeAttribute(s),ae.push(i))}}}),ye.fn.extend({
// Keep domManip exposed until 3.0 (gh-2225)
domManip:L,detach:function(e){return H(this,e,!0)},remove:function(e){return H(this,e)},text:function(e){return $e(this,function(e){return void 0===e?ye.text(this):this.empty().append((this[0]&&this[0].ownerDocument||se).createTextNode(e))},null,e,arguments.length)},append:function(){return L(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=k(this,e);t.appendChild(e)}})},prepend:function(){return L(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=k(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return L(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return L(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){
// Remove any remaining nodes
for(
// Remove element nodes and prevent memory leaks
1===e.nodeType&&ye.cleanData(v(e,!1));e.firstChild;)e.removeChild(e.firstChild);
// If this is a select, ensure that it displays empty (#12336)
// Support: IE<9
e.options&&ye.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ye.clone(this,e,t)})},html:function(e){return $e(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e)return 1===t.nodeType?t.innerHTML.replace(rt,""):void 0;
// See if we can take a shortcut and just use innerHTML
if("string"==typeof e&&!at.test(e)&&(ge.htmlSerialize||!it.test(e))&&(ge.leadingWhitespace||!Ve.test(e))&&!Ye[(Xe.exec(e)||["",""])[1].toLowerCase()]){e=ye.htmlPrefilter(e);try{for(;n<r;n++)
// Remove element nodes and prevent memory leaks
t=this[n]||{},1===t.nodeType&&(ye.cleanData(v(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];
// Make the changes, replacing each non-ignored context element with the new content
return L(this,arguments,function(t){var n=this.parentNode;ye.inArray(this,e)<0&&(ye.cleanData(v(this)),n&&n.replaceChild(t,this))},e)}}),ye.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){ye.fn[e]=function(e){for(var n,r=0,i=[],o=ye(e),a=o.length-1;r<=a;r++)n=r===a?this:this.clone(!0),ye(o[r])[t](n),
// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
ce.apply(i,n.get());return this.pushStack(i)}});var dt,pt={
// Support: Firefox
// We have to pre-define these values for FF (#10227)
HTML:"block",BODY:"block"},ht=/^margin/,gt=new RegExp("^("+Pe+")(?!px)[a-z%]+$","i"),mt=function(e,t,n,r){var i,o,a={};
// Remember the old values, and insert the new ones
for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);
// Revert the old values
for(o in t)e.style[o]=a[o];return i},yt=se.documentElement;!function(){function e(){var e,c,f=se.documentElement;
// Setup
f.appendChild(u),l.style.cssText=
// Support: Android 2.3
// Vendor-prefix box-sizing
"-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
// Support: IE<9
// Assume reasonable values in the absence of getComputedStyle
t=i=s=!1,r=a=!0,
// Check for getComputedStyle so that this code is not run in IE<9.
n.getComputedStyle&&(c=n.getComputedStyle(l),t="1%"!==(c||{}).top,s="2px"===(c||{}).marginLeft,i="4px"===(c||{width:"4px"}).width,
// Support: Android 4.0 - 4.3 only
// Some styles come back with percentage values, even though they shouldn't
l.style.marginRight="50%",r="4px"===(c||{marginRight:"4px"}).marginRight,
// Support: Android 2.3 only
// Div with explicit width and no margin-right incorrectly
// gets computed margin-right based on width of container (#3333)
// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
e=l.appendChild(se.createElement("div")),
// Reset CSS: box-sizing; display; margin; border; padding
e.style.cssText=l.style.cssText=
// Support: Android 2.3
// Vendor-prefix box-sizing
"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",e.style.marginRight=e.style.width="0",l.style.width="1px",a=!parseFloat((n.getComputedStyle(e)||{}).marginRight),l.removeChild(e)),
// Support: IE6-8
// First check that getClientRects works as expected
// Check if table cells still have offsetWidth/Height when they are set
// to display:none and there are still other visible table cells in a
// table row; if so, offsetWidth/Height are not reliable for use when
// determining if an element has been hidden directly using
// display:none (it is still safe to use offsets if a parent element is
// hidden; don safety goggles and see bug #4512 for more information).
l.style.display="none",o=0===l.getClientRects().length,o&&(l.style.display="",l.innerHTML="<table><tr><td></td><td>t</td></tr></table>",l.childNodes[0].style.borderCollapse="separate",e=l.getElementsByTagName("td"),e[0].style.cssText="margin:0;border:0;padding:0;display:none",o=0===e[0].offsetHeight,o&&(e[0].style.display="",e[1].style.display="none",o=0===e[0].offsetHeight)),
// Teardown
f.removeChild(u)}var t,r,i,o,a,s,u=se.createElement("div"),l=se.createElement("div");
// Finish early in limited (non-browser) environments
l.style&&(l.style.cssText="float:left;opacity:.5",
// Support: IE<9
// Make sure that element opacity exists (as opposed to filter)
ge.opacity="0.5"===l.style.opacity,
// Verify style float existence
// (IE uses styleFloat instead of cssFloat)
ge.cssFloat=!!l.style.cssFloat,l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",ge.clearCloneStyle="content-box"===l.style.backgroundClip,u=se.createElement("div"),u.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",l.innerHTML="",u.appendChild(l),
// Support: Firefox<29, Android 2.3
// Vendor-prefix box-sizing
ge.boxSizing=""===l.style.boxSizing||""===l.style.MozBoxSizing||""===l.style.WebkitBoxSizing,ye.extend(ge,{reliableHiddenOffsets:function(){return null==t&&e(),o},boxSizingReliable:function(){
// We're checking for pixelPositionVal here instead of boxSizingReliableVal
// since that compresses better and they're computed together anyway.
return null==t&&e(),i},pixelMarginRight:function(){
// Support: Android 4.0-4.3
return null==t&&e(),r},pixelPosition:function(){return null==t&&e(),t},reliableMarginRight:function(){
// Support: Android 2.3
return null==t&&e(),a},reliableMarginLeft:function(){
// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
return null==t&&e(),s}}))}();var vt,xt,bt=/^(top|right|bottom|left)$/;n.getComputedStyle?(vt=function(e){
// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var t=e.ownerDocument.defaultView;return t&&t.opener||(t=n),t.getComputedStyle(e)},xt=function(e,t,n){var r,i,o,a,s=e.style;
// Support: IE
// IE returns zIndex value as an integer.
// getPropertyValue is only needed for .css('filter') in IE9, see #12537
// Support: Opera 12.1x only
// Fall back to style even without computed
// computed is undefined for elems on document fragments
// Remember the original values
// Put in the new values to get a computed value out
// Revert the changed values
return n=n||vt(e),a=n?n.getPropertyValue(t)||n[t]:void 0,""!==a&&void 0!==a||ye.contains(e.ownerDocument,e)||(a=ye.style(e,t)),n&&!ge.pixelMarginRight()&&gt.test(a)&&ht.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o),void 0===a?a:a+""}):yt.currentStyle&&(vt=function(e){return e.currentStyle},xt=function(e,t,n){var r,i,o,a,s=e.style;
// Support: IE
// IE returns zIndex value as an integer.
// Avoid setting ret to empty string here
// so we don't default to auto
// From the awesome hack by Dean Edwards
// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
// If we're not dealing with a regular pixel number
// but a number that has a weird ending, we need to convert it to pixels
// but not position css attributes, as those are
// proportional to the parent element instead
// and we can't measure the parent instead because it
// might trigger a "stacking dolls" problem
// Remember the original values
// Put in the new values to get a computed value out
// Revert the changed values
return n=n||vt(e),a=n?n[t]:void 0,null==a&&s&&s[t]&&(a=s[t]),gt.test(a)&&!bt.test(t)&&(r=s.left,i=e.runtimeStyle,o=i&&i.left,o&&(i.left=e.currentStyle.left),s.left="fontSize"===t?"1em":a,a=s.pixelLeft+"px",s.left=r,o&&(i.left=o)),void 0===a?a:a+""||"auto"});var wt=/alpha\([^)]*\)/i,Tt=/opacity\s*=\s*([^)]*)/i,
// swappable if display is none or starts with table except
// "table", "table-cell", or "table-caption"
// see here for display values:
// https://developer.mozilla.org/en-US/docs/CSS/display
Ct=/^(none|table(?!-c[ea]).+)/,Et=new RegExp("^("+Pe+")(.*)$","i"),Nt={position:"absolute",visibility:"hidden",display:"block"},kt={letterSpacing:"0",fontWeight:"400"},St=["Webkit","O","Moz","ms"],At=se.createElement("div").style;ye.extend({
// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(e,t){if(t){
// We should always get a number back from opacity
var n=xt(e,"opacity");return""===n?"1":n}}}},
// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},
// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{
// normalize float css property
float:ge.cssFloat?"cssFloat":"styleFloat"},
// Get and set the style property on a DOM Node
style:function(e,t,n,r){
// Don't set styles on text and comment nodes
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){
// Make sure that we're working with the right name
var i,o,a,s=ye.camelCase(t),u=e.style;
// Check if we're setting a value
if(t=ye.cssProps[s]||(ye.cssProps[s]=M(s)||s),
// gets hook for the prefixed version
// followed by the unprefixed version
a=ye.cssHooks[t]||ye.cssHooks[s],void 0===n)
// If a hook was provided get the non-computed value from there
// If a hook was provided get the non-computed value from there
return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:u[t];
// Make sure that null and NaN values aren't set. See: #7116
if(o=typeof n,
// Convert "+=" or "-=" to relative numbers (#7345)
"string"===o&&(i=Be.exec(n))&&i[1]&&(n=m(e,t,i),
// Fixes bug #9237
o="number"),null!=n&&n===n&&(
// If a number was passed in, add the unit (except for certain CSS properties)
"number"===o&&(n+=i&&i[3]||(ye.cssNumber[s]?"":"px")),
// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
// but it would mean to define eight
// (for every problematic property) identical functions
ge.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),!(a&&"set"in a&&void 0===(n=a.set(e,n,r)))))
// Support: IE
// Swallow errors from 'invalid' CSS values (#5509)
try{u[t]=n}catch(e){}}},css:function(e,t,n,r){var i,o,a,s=ye.camelCase(t);
// Return, converting to number if forced or a qualifier was provided and val looks numeric
// Make sure that we're working with the right name
// gets hook for the prefixed version
// followed by the unprefixed version
// If a hook was provided get the computed value from there
// Otherwise, if a way to get the computed value exists, use that
//convert "normal" to computed value
// Return, converting to number if forced or a qualifier was provided and val looks numeric
return t=ye.cssProps[s]||(ye.cssProps[s]=M(s)||s),a=ye.cssHooks[t]||ye.cssHooks[s],a&&"get"in a&&(o=a.get(e,!0,n)),void 0===o&&(o=xt(e,t,r)),"normal"===o&&t in kt&&(o=kt[t]),""===n||n?(i=parseFloat(o),n===!0||isFinite(i)?i||0:o):o}}),ye.each(["height","width"],function(e,t){ye.cssHooks[t]={get:function(e,n,r){if(n)
// certain elements can have dimension info if we invisibly show them
// however, it must have a current display style that would benefit from this
return Ct.test(ye.css(e,"display"))&&0===e.offsetWidth?mt(e,Nt,function(){return B(e,t,r)}):B(e,t,r)},set:function(e,n,r){var i=r&&vt(e);return R(e,n,r?P(e,t,r,ge.boxSizing&&"border-box"===ye.css(e,"boxSizing",!1,i),i):0)}}}),ge.opacity||(ye.cssHooks.opacity={get:function(e,t){
// IE uses filters for opacity
return Tt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=ye.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";
// IE has trouble with opacity if it does not have layout
// Force it by setting the zoom level
n.zoom=1,
// if setting opacity to 1, and no other filters exist -
// attempt to remove filter attribute #6652
// if value === "", then remove inline opacity #12685
(t>=1||""===t)&&""===ye.trim(o.replace(wt,""))&&n.removeAttribute&&(
// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
// if "filter:" is present at all, clearType is disabled, we want to avoid this
// style.removeAttribute is IE Only, but so apparently is this code path...
n.removeAttribute("filter"),""===t||r&&!r.filter)||(
// otherwise, set new filter values
n.filter=wt.test(o)?o.replace(wt,i):o+" "+i)}}),ye.cssHooks.marginRight=F(ge.reliableMarginRight,function(e,t){if(t)return mt(e,{display:"inline-block"},xt,[e,"marginRight"])}),ye.cssHooks.marginLeft=F(ge.reliableMarginLeft,function(e,t){if(t)
// Support: IE<=11+
// Running getBoundingClientRect on a disconnected node in IE throws an error
// Support: IE8 only
// getClientRects() errors on disconnected elems
return(parseFloat(xt(e,"marginLeft"))||(ye.contains(e.ownerDocument,e)?e.getBoundingClientRect().left-mt(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}):0))+"px"}),
// These hooks are used by animate to expand properties
ye.each({margin:"",padding:"",border:"Width"},function(e,t){ye.cssHooks[e+t]={expand:function(n){for(var r=0,i={},
// assumes a single number if not a string
o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+We[r]+t]=o[r]||o[r-2]||o[0];return i}},ht.test(e)||(ye.cssHooks[e+t].set=R)}),ye.fn.extend({css:function(e,t){return $e(this,function(e,t,n){var r,i,o={},a=0;if(ye.isArray(t)){for(r=vt(e),i=t.length;a<i;a++)o[t[a]]=ye.css(e,t[a],!1,r);return o}return void 0!==n?ye.style(e,t,n):ye.css(e,t)},e,t,arguments.length>1)},show:function(){return O(this,!0)},hide:function(){return O(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Ie(this)?ye(this).show():ye(this).hide()})}}),ye.Tween=W,W.prototype={constructor:W,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||ye.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ye.cssNumber[n]?"":"px")},cur:function(){var e=W.propHooks[this.prop];return e&&e.get?e.get(this):W.propHooks._default.get(this)},run:function(e){var t,n=W.propHooks[this.prop];return this.options.duration?this.pos=t=ye.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):W.propHooks._default.set(this),this}},W.prototype.init.prototype=W.prototype,W.propHooks={_default:{get:function(e){var t;
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
// passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails
// so, simple values such as "10px" are parsed to Float.
// complex values such as "rotate(1rad)" are returned as is.
return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=ye.css(e.elem,e.prop,""),t&&"auto"!==t?t:0)},set:function(e){
// use step hook for back compat - use cssHook if its there - use .style if its
// available and use plain properties where available
ye.fx.step[e.prop]?ye.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[ye.cssProps[e.prop]]&&!ye.cssHooks[e.prop]?e.elem[e.prop]=e.now:ye.style(e.elem,e.prop,e.now+e.unit)}}},
// Support: IE <=9
// Panic based approach to setting things on disconnected nodes
W.propHooks.scrollTop=W.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ye.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},ye.fx=W.prototype.init,
// Back Compat <1.8 extension point
ye.fx.step={};var Dt,jt,Lt=/^(?:toggle|show|hide)$/,Ht=/queueHooks$/;ye.Animation=ye.extend(V,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return m(n.elem,e,Be.exec(t),n),n}]},tweener:function(e,t){ye.isFunction(e)?(t=e,e=["*"]):e=e.match(qe);for(var n,r=0,i=e.length;r<i;r++)n=e[r],V.tweeners[n]=V.tweeners[n]||[],V.tweeners[n].unshift(t)},prefilters:[X],prefilter:function(e,t){t?V.prefilters.unshift(e):V.prefilters.push(e)}}),ye.speed=function(e,t,n){var r=e&&"object"==typeof e?ye.extend({},e):{complete:n||!n&&t||ye.isFunction(e)&&e,duration:e,easing:n&&t||t&&!ye.isFunction(t)&&t};
// normalize opt.queue - true/undefined/null -> "fx"
// Queueing
return r.duration=ye.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in ye.fx.speeds?ye.fx.speeds[r.duration]:ye.fx.speeds._default,null!=r.queue&&r.queue!==!0||(r.queue="fx"),r.old=r.complete,r.complete=function(){ye.isFunction(r.old)&&r.old.call(this),r.queue&&ye.dequeue(this,r.queue)},r},ye.fn.extend({fadeTo:function(e,t,n,r){
// show any hidden elements after setting opacity to 0
return this.filter(Ie).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=ye.isEmptyObject(e),o=ye.speed(t,n,r),a=function(){
// Operate on a copy of prop so per-property easing won't be lost
var t=V(this,ye.extend({},e),o);
// Empty animations, or finishing resolves immediately
(i||ye._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=ye.timers,a=ye._data(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&Ht.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));
// start the next in the queue if the last step wasn't forced
// timers currently will call their complete callbacks, which will dequeue
// but only if they were gotoEnd
!t&&n||ye.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=ye._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=ye.timers,a=r?r.length:0;
// look for any active animations, and finish them
for(
// enable finishing flag on private data
n.finish=!0,
// empty the queue first
ye.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));
// look for any animations in the old queue and finish them
for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);
// turn off finishing flag
delete n.finish})}}),ye.each(["toggle","show","hide"],function(e,t){var n=ye.fn[t];ye.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate($(t,!0),e,r,i)}}),
// Generate shortcuts for custom animations
ye.each({slideDown:$("show"),slideUp:$("hide"),slideToggle:$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){ye.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),ye.timers=[],ye.fx.tick=function(){var e,t=ye.timers,n=0;for(Dt=ye.now();n<t.length;n++)e=t[n],
// Checks the timer has not already been removed
e()||t[n]!==e||t.splice(n--,1);t.length||ye.fx.stop(),Dt=void 0},ye.fx.timer=function(e){ye.timers.push(e),e()?ye.fx.start():ye.timers.pop()},ye.fx.interval=13,ye.fx.start=function(){jt||(jt=n.setInterval(ye.fx.tick,ye.fx.interval))},ye.fx.stop=function(){n.clearInterval(jt),jt=null},ye.fx.speeds={slow:600,fast:200,
// Default speed
_default:400},
// Based off of the plugin by Clint Helfers, with permission.
// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
ye.fn.delay=function(e,t){return e=ye.fx?ye.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,r){var i=n.setTimeout(t,e);r.stop=function(){n.clearTimeout(i)}})},function(){var e,t=se.createElement("input"),n=se.createElement("div"),r=se.createElement("select"),i=r.appendChild(se.createElement("option"));
// Setup
n=se.createElement("div"),n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",e=n.getElementsByTagName("a")[0],
// Support: Windows Web Apps (WWA)
// `type` must use .setAttribute for WWA (#14901)
t.setAttribute("type","checkbox"),n.appendChild(t),e=n.getElementsByTagName("a")[0],
// First batch of tests.
e.style.cssText="top:1px",
// Test setAttribute on camelCase class.
// If it works, we need attrFixes when doing get/setAttribute (ie6/7)
ge.getSetAttribute="t"!==n.className,
// Get the style information from getAttribute
// (IE uses .cssText instead)
ge.style=/top/.test(e.getAttribute("style")),
// Make sure that URLs aren't manipulated
// (IE normalizes it by default)
ge.hrefNormalized="/a"===e.getAttribute("href"),
// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
ge.checkOn=!!t.value,
// Make sure that a selected-by-default option has a working selected property.
// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
ge.optSelected=i.selected,
// Tests for enctype support on a form (#6743)
ge.enctype=!!se.createElement("form").enctype,
// Make sure that the options inside disabled selects aren't marked as disabled
// (WebKit marks them as disabled)
r.disabled=!0,ge.optDisabled=!i.disabled,
// Support: IE8 only
// Check if we can trust getAttribute("value")
t=se.createElement("input"),t.setAttribute("value",""),ge.input=""===t.getAttribute("value"),
// Check if an input maintains its value after becoming a radio
t.value="t",t.setAttribute("type","radio"),ge.radioValue="t"===t.value}();var qt=/\r/g,_t=/[\x20\t\r\n\f]+/g;ye.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=ye.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,ye(this).val()):e,
// Treat null/undefined as ""; convert numbers to string
null==i?i="":"number"==typeof i?i+="":ye.isArray(i)&&(i=ye.map(i,function(e){return null==e?"":e+""})),t=ye.valHooks[this.type]||ye.valHooks[this.nodeName.toLowerCase()],
// If set returns undefined, fall back to normal setting
t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)
// handle most common string cases
// handle cases where value is null/undef or number
return t=ye.valHooks[i.type]||ye.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(qt,""):null==n?"":n)}}}),ye.extend({valHooks:{option:{get:function(e){var t=ye.find.attr(e,"value");
// Support: IE10-11+
// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
return null!=t?t:ye.trim(ye.text(e)).replace(_t," ")}},select:{get:function(e){
// Loop through all the selected options
for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||i<0,a=o?null:[],s=o?i+1:r.length,u=i<0?s:o?i:0;u<s;u++)
// oldIE doesn't update selected after form reset (#2551)
if(n=r[u],(n.selected||u===i)&&(
// Don't return options that are disabled or in a disabled optgroup
ge.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!ye.nodeName(n.parentNode,"optgroup"))){
// We don't need an array for one selects
if(
// Get the specific value for the option
t=ye(n).val(),o)return t;
// Multi-Selects return an array
a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=ye.makeArray(t),a=i.length;a--;)if(r=i[a],ye.inArray(ye.valHooks.option.get(r),o)>-1)
// Support: IE6
// When new option element is added to select box we need to
// force reflow of newly added node in order to workaround delay
// of initialization properties
try{r.selected=n=!0}catch(e){
// Will be executed only in IE6
r.scrollHeight}else r.selected=!1;
// Force browsers to behave consistently when non-matching value is set
return n||(e.selectedIndex=-1),i}}}}),
// Radios and checkboxes getter/setter
ye.each(["radio","checkbox"],function(){ye.valHooks[this]={set:function(e,t){if(ye.isArray(t))return e.checked=ye.inArray(ye(e).val(),t)>-1}},ge.checkOn||(ye.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Ft,Mt,Ot=ye.expr.attrHandle,Rt=/^(?:checked|selected)$/i,Pt=ge.getSetAttribute,Bt=ge.input;ye.fn.extend({attr:function(e,t){return $e(this,ye.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){ye.removeAttr(this,e)})}}),ye.extend({attr:function(e,t,n){var r,i,o=e.nodeType;
// Don't get/set attributes on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o)
// Fallback to prop when attributes are not supported
// Fallback to prop when attributes are not supported
// All attributes are lowercase
// Grab necessary hook if one is defined
return"undefined"==typeof e.getAttribute?ye.prop(e,t,n):(1===o&&ye.isXMLDoc(e)||(t=t.toLowerCase(),i=ye.attrHooks[t]||(ye.expr.match.bool.test(t)?Mt:Ft)),void 0!==n?null===n?void ye.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:(r=ye.find.attr(e,t),null==r?void 0:r))},attrHooks:{type:{set:function(e,t){if(!ge.radioValue&&"radio"===t&&ye.nodeName(e,"input")){
// Setting the type on a radio button after the value resets the value in IE8-9
// Reset value to default in case type is set after value during creation
var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(qe);if(o&&1===e.nodeType)for(;n=o[i++];)r=ye.propFix[n]||n,
// Boolean attributes get special treatment (#10870)
ye.expr.match.bool.test(n)?
// Set corresponding property to false
Bt&&Pt||!Rt.test(n)?e[r]=!1:e[ye.camelCase("default-"+n)]=e[r]=!1:ye.attr(e,n,""),e.removeAttribute(Pt?n:r)}}),
// Hooks for boolean attributes
Mt={set:function(e,t,n){
// Remove boolean attributes when set to false
// IE<8 needs the *property* name
// Support: IE<9
// Use defaultChecked and defaultSelected for oldIE
return t===!1?ye.removeAttr(e,n):Bt&&Pt||!Rt.test(n)?e.setAttribute(!Pt&&ye.propFix[n]||n,n):e[ye.camelCase("default-"+n)]=e[n]=!0,n}},ye.each(ye.expr.match.bool.source.match(/\w+/g),function(e,t){var n=Ot[t]||ye.find.attr;Bt&&Pt||!Rt.test(t)?Ot[t]=function(e,t,r){var i,o;
// Avoid an infinite loop by temporarily removing this function from the getter
return r||(o=Ot[t],Ot[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,Ot[t]=o),i}:Ot[t]=function(e,t,n){if(!n)return e[ye.camelCase("default-"+t)]?t.toLowerCase():null}}),
// fix oldIE attroperties
Bt&&Pt||(ye.attrHooks.value={set:function(e,t,n){
// Does not return so that setAttribute is also used
return ye.nodeName(e,"input")?void(e.defaultValue=t):Ft&&Ft.set(e,t,n)}}),
// IE6/7 do not support getting/setting some attributes with get/setAttribute
Pt||(
// Use this for any attribute in IE6/7
// This fixes almost every IE6/7 issue
Ft={set:function(e,t,n){
// Set the existing or create a new attribute node
var r=e.getAttributeNode(n);
// Break association with cloned elements by also using setAttribute (#9646)
if(r||e.setAttributeNode(r=e.ownerDocument.createAttribute(n)),r.value=t+="","value"===n||t===e.getAttribute(n))return t}},
// Some attributes are constructed with empty-string values when not defined
Ot.id=Ot.name=Ot.coords=function(e,t,n){var r;if(!n)return(r=e.getAttributeNode(t))&&""!==r.value?r.value:null},
// Fixing value retrieval on a button requires this module
ye.valHooks.button={get:function(e,t){var n=e.getAttributeNode(t);if(n&&n.specified)return n.value},set:Ft.set},
// Set contenteditable to false on removals(#10429)
// Setting to empty string throws an error as an invalid value
ye.attrHooks.contenteditable={set:function(e,t,n){Ft.set(e,""!==t&&t,n)}},
// Set width and height to auto instead of 0 on empty string( Bug #8150 )
// This is for removals
ye.each(["width","height"],function(e,t){ye.attrHooks[t]={set:function(e,n){if(""===n)return e.setAttribute(t,"auto"),n}}})),ge.style||(ye.attrHooks.style={get:function(e){
// Return undefined in the case of empty string
// Note: IE uppercases css property names, but if we were to .toLowerCase()
// .cssText, that would destroy case sensitivity in URL's, like in "background"
return e.style.cssText||void 0},set:function(e,t){return e.style.cssText=t+""}});var Wt=/^(?:input|select|textarea|button|object)$/i,It=/^(?:a|area)$/i;ye.fn.extend({prop:function(e,t){return $e(this,ye.prop,e,t,arguments.length>1)},removeProp:function(e){return e=ye.propFix[e]||e,this.each(function(){
// try/catch handles cases where IE balks (such as removing a property on window)
try{this[e]=void 0,delete this[e]}catch(e){}})}}),ye.extend({prop:function(e,t,n){var r,i,o=e.nodeType;
// Don't get/set properties on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o)
// Fix name and attach hooks
return 1===o&&ye.isXMLDoc(e)||(t=ye.propFix[t]||t,i=ye.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var t=ye.find.attr(e,"tabindex");return t?parseInt(t,10):Wt.test(e.nodeName)||It.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),
// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
ge.hrefNormalized||
// href/src property should get the full normalized URL (#10299/#12915)
ye.each(["href","src"],function(e,t){ye.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),
// Support: Safari, IE9+
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
ge.optSelected||(ye.propHooks.selected={get:function(e){var t=e.parentNode;
// Make sure that it also works with optgroups, see #5701
return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),ye.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ye.propFix[this.toLowerCase()]=this}),
// IE6/7 call enctype encoding
ge.enctype||(ye.propFix.enctype="encoding");var $t=/[\t\r\n\f]/g;ye.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(ye.isFunction(e))return this.each(function(t){ye(this).addClass(e.call(this,t,J(this)))});if("string"==typeof e&&e)for(t=e.match(qe)||[];n=this[u++];)if(i=J(n),r=1===n.nodeType&&(" "+i+" ").replace($t," ")){for(a=0;o=t[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");
// only assign if different to avoid unneeded rendering.
s=ye.trim(r),i!==s&&ye.attr(n,"class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(ye.isFunction(e))return this.each(function(t){ye(this).removeClass(e.call(this,t,J(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(t=e.match(qe)||[];n=this[u++];)if(i=J(n),
// This expression is here for better compressibility (see addClass)
r=1===n.nodeType&&(" "+i+" ").replace($t," ")){for(a=0;o=t[a++];)
// Remove *all* instances
for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ");
// Only assign if different to avoid unneeded rendering.
s=ye.trim(r),i!==s&&ye.attr(n,"class",s)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):ye.isFunction(e)?this.each(function(n){ye(this).toggleClass(e.call(this,n,J(this),t),t)}):this.each(function(){var t,r,i,o;if("string"===n)for(
// Toggle individual class names
r=0,i=ye(this),o=e.match(qe)||[];t=o[r++];)
// Check each className given, space separated list
i.hasClass(t)?i.removeClass(t):i.addClass(t);else void 0!==e&&"boolean"!==n||(t=J(this),t&&
// store className if set
ye._data(this,"__className__",t),
// If the element has a class name or if we're passed "false",
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
ye.attr(this,"class",t||e===!1?"":ye._data(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+J(n)+" ").replace($t," ").indexOf(t)>-1)return!0;return!1}}),
// Return jQuery for attributes-only inclusion
ye.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){
// Handle event binding
ye.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),ye.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}});var zt=n.location,Xt=ye.now(),Ut=/\?/,Vt=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;ye.parseJSON=function(e){
// Attempt to parse using the native JSON parser first
if(n.JSON&&n.JSON.parse)
// Support: Android 2.3
// Workaround failure to string-cast null input
return n.JSON.parse(e+"");var t,r=null,i=ye.trim(e+"");
// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
// after removing valid tokens
return i&&!ye.trim(i.replace(Vt,function(e,n,i,o){
// Perform no more replacements after returning to outermost depth
// Force termination if we see a misplaced comma
// Perform no more replacements after returning to outermost depth
// Commas must not follow "[", "{", or ","
// Determine new depth
// array/object open ("[" or "{"): depth += true - false (increment)
// array/object close ("]" or "}"): depth += false - true (decrement)
// other cases ("," or primitive): depth += true - true (numeric cast)
return t&&n&&(r=0),0===r?e:(t=i||n,r+=!o-!i,"")}))?Function("return "+i)():ye.error("Invalid JSON: "+e)},
// Cross-browser xml parsing
ye.parseXML=function(e){var t,r;if(!e||"string"!=typeof e)return null;try{n.DOMParser?(// Standard
r=new n.DOMParser,t=r.parseFromString(e,"text/xml")):(// IE
t=new n.ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e))}catch(e){t=void 0}return t&&t.documentElement&&!t.getElementsByTagName("parsererror").length||ye.error("Invalid XML: "+e),t};var Jt=/#.*$/,Yt=/([?&])_=[^&]*/,
// IE leaves an \r character at EOL
Gt=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
// #7653, #8125, #8152: local protocol detection
Qt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Kt=/^(?:GET|HEAD)$/,Zt=/^\/\//,en=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
tn={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
nn={},
// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
rn="*/".concat("*"),
// Document location
on=zt.href,
// Segment location into parts
an=en.exec(on.toLowerCase())||[];ye.extend({
// Counter for holding the number of active queries
active:0,
// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:on,type:"GET",isLocal:Qt.test(an[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/
accepts:{"*":rn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},
// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{
// Convert anything to text
"* text":String,
// Text to html (true = no transformation)
"text html":!0,
// Evaluate text as a json expression
"text json":ye.parseJSON,
// Parse text as xml
"text xml":ye.parseXML},
// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},
// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(e,t){
// Building a settings object
// Extending ajaxSettings
return t?Q(Q(e,ye.ajaxSettings),t):Q(ye.ajaxSettings,e)},ajaxPrefilter:Y(tn),ajaxTransport:Y(nn),
// Main method
ajax:function(e,t){
// Callback for when everything is done
function r(e,t,r,i){var o,f,v,x,w,C=t;
// Called once
2!==b&&(
// State is "done" now
b=2,
// Clear timeout if it exists
u&&n.clearTimeout(u),
// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
c=void 0,
// Cache response headers
s=i||"",
// Set readyState
T.readyState=e>0?4:0,
// Determine if successful
o=e>=200&&e<300||304===e,
// Get response data
r&&(x=K(d,T,r)),
// Convert no matter what (that way responseXXX fields are always set)
x=Z(d,x,T,o),
// If successful, handle type chaining
o?(
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
d.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(ye.lastModified[a]=w),w=T.getResponseHeader("etag"),w&&(ye.etag[a]=w)),
// if no content
204===e||"HEAD"===d.type?C="nocontent":304===e?C="notmodified":(C=x.state,f=x.data,v=x.error,o=!v)):(
// We extract error from statusText
// then normalize statusText and status for non-aborts
v=C,!e&&C||(C="error",e<0&&(e=0))),
// Set data for the fake xhr object
T.status=e,T.statusText=(t||C)+"",
// Success/Error
o?g.resolveWith(p,[f,C,T]):g.rejectWith(p,[T,C,v]),
// Status-dependent callbacks
T.statusCode(y),y=void 0,l&&h.trigger(o?"ajaxSuccess":"ajaxError",[T,d,o?f:v]),
// Complete
m.fireWith(p,[T,C]),l&&(h.trigger("ajaxComplete",[T,d]),
// Handle the global AJAX counter
--ye.active||ye.event.trigger("ajaxStop")))}
// If url is an object, simulate pre-1.5 signature
"object"==typeof e&&(t=e,e=void 0),
// Force options to be an object
t=t||{};var
// Cross-domain detection vars
i,
// Loop variable
o,
// URL without anti-cache param
a,
// Response headers as string
s,
// timeout handle
u,
// To know if global events are to be dispatched
l,c,
// Response headers
f,
// Create the final options object
d=ye.ajaxSetup({},t),
// Callbacks context
p=d.context||d,
// Context for global events is callbackContext if it is a DOM node or jQuery collection
h=d.context&&(p.nodeType||p.jquery)?ye(p):ye.event,
// Deferreds
g=ye.Deferred(),m=ye.Callbacks("once memory"),
// Status-dependent callbacks
y=d.statusCode||{},
// Headers (they are sent all at once)
v={},x={},
// The jqXHR state
b=0,
// Default abort message
w="canceled",
// Fake xhr
T={readyState:0,
// Builds headers hashtable if needed
getResponseHeader:function(e){var t;if(2===b){if(!f)for(f={};t=Gt.exec(s);)f[t[1].toLowerCase()]=t[2];t=f[e.toLowerCase()]}return null==t?null:t},
// Raw string
getAllResponseHeaders:function(){return 2===b?s:null},
// Caches the header
setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=x[n]=x[n]||e,v[e]=t),this},
// Overrides response content-type header
overrideMimeType:function(e){return b||(d.mimeType=e),this},
// Status-dependent callbacks
statusCode:function(e){var t;if(e)if(b<2)for(t in e)
// Lazy-add the new callback in a way that preserves old ones
y[t]=[y[t],e[t]];else
// Execute the appropriate callbacks
T.always(e[T.status]);return this},
// Cancel the request
abort:function(e){var t=e||w;return c&&c.abort(t),r(0,t),this}};
// If request was aborted inside a prefilter, stop there
if(
// Attach deferreds
g.promise(T).complete=m.add,T.success=T.done,T.error=T.fail,
// Remove hash character (#7531: and string promotion)
// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
d.url=((e||d.url||on)+"").replace(Jt,"").replace(Zt,an[1]+"//"),
// Alias method option to type as per ticket #12004
d.type=t.method||t.type||d.method||d.type,
// Extract dataTypes list
d.dataTypes=ye.trim(d.dataType||"*").toLowerCase().match(qe)||[""],
// A cross-domain request is in order when we have a protocol:host:port mismatch
null==d.crossDomain&&(i=en.exec(d.url.toLowerCase()),d.crossDomain=!(!i||i[1]===an[1]&&i[2]===an[2]&&(i[3]||("http:"===i[1]?"80":"443"))===(an[3]||("http:"===an[1]?"80":"443")))),
// Convert data if not already a string
d.data&&d.processData&&"string"!=typeof d.data&&(d.data=ye.param(d.data,d.traditional)),
// Apply prefilters
G(tn,d,t,T),2===b)return T;
// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
l=ye.event&&d.global,
// Watch for a new set of requests
l&&0===ye.active++&&ye.event.trigger("ajaxStart"),
// Uppercase the type
d.type=d.type.toUpperCase(),
// Determine if request has content
d.hasContent=!Kt.test(d.type),
// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
a=d.url,
// More options handling for requests with no content
d.hasContent||(
// If data is available, append data to url
d.data&&(a=d.url+=(Ut.test(a)?"&":"?")+d.data,
// #9682: remove data so that it's not used in an eventual retry
delete d.data),
// Add anti-cache in url if needed
d.cache===!1&&(d.url=Yt.test(a)?
// If there is already a '_' parameter, set its value
a.replace(Yt,"$1_="+Xt++):
// Otherwise add one to the end
a+(Ut.test(a)?"&":"?")+"_="+Xt++)),
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
d.ifModified&&(ye.lastModified[a]&&T.setRequestHeader("If-Modified-Since",ye.lastModified[a]),ye.etag[a]&&T.setRequestHeader("If-None-Match",ye.etag[a])),
// Set the correct header, if data is being sent
(d.data&&d.hasContent&&d.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",d.contentType),
// Set the Accepts header for the server, depending on the dataType
T.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+rn+"; q=0.01":""):d.accepts["*"]);
// Check for headers option
for(o in d.headers)T.setRequestHeader(o,d.headers[o]);
// Allow custom headers/mimetypes and early abort
if(d.beforeSend&&(d.beforeSend.call(p,T,d)===!1||2===b))
// Abort if not done already and return
return T.abort();
// aborting is no longer a cancellation
w="abort";
// Install callbacks on deferreds
for(o in{success:1,error:1,complete:1})T[o](d[o]);
// If no transport, we auto-abort
if(
// Get transport
c=G(nn,d,t,T)){
// If request was aborted inside ajaxSend, stop there
if(T.readyState=1,
// Send global event
l&&h.trigger("ajaxSend",[T,d]),2===b)return T;
// Timeout
d.async&&d.timeout>0&&(u=n.setTimeout(function(){T.abort("timeout")},d.timeout));try{b=1,c.send(v,r)}catch(e){
// Propagate exception as error if not done
if(!(b<2))throw e;r(-1,e)}}else r(-1,"No Transport");return T},getJSON:function(e,t,n){return ye.get(e,t,n,"json")},getScript:function(e,t){return ye.get(e,void 0,t,"script")}}),ye.each(["get","post"],function(e,t){ye[t]=function(e,n,r,i){
// The url can be an options object (which then must have .url)
// shift arguments if data argument was omitted
return ye.isFunction(n)&&(i=i||r,r=n,n=void 0),ye.ajax(ye.extend({url:e,type:t,dataType:i,data:n,success:r},ye.isPlainObject(e)&&e))}}),ye._evalUrl=function(e){return ye.ajax({url:e,
// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},ye.fn.extend({wrapAll:function(e){if(ye.isFunction(e))return this.each(function(t){ye(this).wrapAll(e.call(this,t))});if(this[0]){
// The elements to wrap the target around
var t=ye(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return ye.isFunction(e)?this.each(function(t){ye(this).wrapInner(e.call(this,t))}):this.each(function(){var t=ye(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=ye.isFunction(e);return this.each(function(n){ye(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){ye.nodeName(this,"body")||ye(this).replaceWith(this.childNodes)}).end()}}),ye.expr.filters.hidden=function(e){
// Support: Opera <= 12.12
// Opera reports offsetWidths and offsetHeights less than zero on some elements
return ge.reliableHiddenOffsets()?e.offsetWidth<=0&&e.offsetHeight<=0&&!e.getClientRects().length:te(e)},ye.expr.filters.visible=function(e){return!ye.expr.filters.hidden(e)};var sn=/%20/g,un=/\[\]$/,ln=/\r?\n/g,cn=/^(?:submit|button|image|reset|file)$/i,fn=/^(?:input|select|textarea|keygen)/i;
// Serialize an array of form elements or a set of
// key/values into a query string
ye.param=function(e,t){var n,r=[],i=function(e,t){
// If value is a function, invoke it and return its value
t=ye.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};
// If an array was passed in, assume that it is an array of form elements.
if(
// Set traditional to true for jQuery <= 1.3.2 behavior.
void 0===t&&(t=ye.ajaxSettings&&ye.ajaxSettings.traditional),ye.isArray(e)||e.jquery&&!ye.isPlainObject(e))
// Serialize the form elements
ye.each(e,function(){i(this.name,this.value)});else
// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(n in e)ne(n,e[n],t,i);
// Return the resulting serialization
return r.join("&").replace(sn,"+")},ye.fn.extend({serialize:function(){return ye.param(this.serializeArray())},serializeArray:function(){return this.map(function(){
// Can add propHook for "elements" to filter or add form elements
var e=ye.prop(this,"elements");return e?ye.makeArray(e):this}).filter(function(){var e=this.type;
// Use .is(":disabled") so that fieldset[disabled] works
return this.name&&!ye(this).is(":disabled")&&fn.test(this.nodeName)&&!cn.test(e)&&(this.checked||!ze.test(e))}).map(function(e,t){var n=ye(this).val();return null==n?null:ye.isArray(n)?ye.map(n,function(e){return{name:t.name,value:e.replace(ln,"\r\n")}}):{name:t.name,value:n.replace(ln,"\r\n")}}).get()}}),
// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
ye.ajaxSettings.xhr=void 0!==n.ActiveXObject?
// Support: IE6-IE8
function(){
// XHR cannot access local files, always use ActiveX for that case
// XHR cannot access local files, always use ActiveX for that case
// Support: IE 9-11
// IE seems to error on cross-domain PATCH requests when ActiveX XHR
// is used. In IE 9+ always use the native XHR.
// Note: this condition won't catch Edge as it doesn't define
// document.documentMode but it also doesn't support ActiveX so it won't
// reach this code.
return this.isLocal?ie():se.documentMode>8?re():/^(get|post|head|put|delete|options)$/i.test(this.type)&&re()||ie()}:
// For all other browsers, use the standard XMLHttpRequest object
re;var dn=0,pn={},hn=ye.ajaxSettings.xhr();
// Support: IE<10
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
n.attachEvent&&n.attachEvent("onunload",function(){for(var e in pn)pn[e](void 0,!0)}),
// Determine support properties
ge.cors=!!hn&&"withCredentials"in hn,hn=ge.ajax=!!hn,
// Create transport if the browser can provide an xhr
hn&&ye.ajaxTransport(function(e){
// Cross domain only allowed if supported through XMLHttpRequest
if(!e.crossDomain||ge.cors){var t;return{send:function(r,i){var o,a=e.xhr(),s=++dn;
// Apply custom fields if provided
if(
// Open the socket
a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(o in e.xhrFields)a[o]=e.xhrFields[o];
// Override mime type if needed
e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),
// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
e.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest");
// Set headers
for(o in r)
// Support: IE<9
// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
// request header to a null-value.
//
// To keep consistent with other XHR implementations, cast the value
// to string and ignore `undefined`.
void 0!==r[o]&&a.setRequestHeader(o,r[o]+"");
// Do send the request
// This may raise an exception which is actually
// handled in jQuery.ajax (so no try/catch here)
a.send(e.hasContent&&e.data||null),
// Listener
t=function(n,r){var o,u,l;
// Was never called and is aborted or complete
if(t&&(r||4===a.readyState))
// Abort manually if needed
if(
// Clean up
delete pn[s],t=void 0,a.onreadystatechange=ye.noop,r)4!==a.readyState&&a.abort();else{l={},o=a.status,
// Support: IE<10
// Accessing binary-data responseText throws an exception
// (#11426)
"string"==typeof a.responseText&&(l.text=a.responseText);
// Firefox throws an exception when accessing
// statusText for faulty cross-domain requests
try{u=a.statusText}catch(e){
// We normalize with Webkit giving an empty statusText
u=""}
// Filter status for non standard behaviors
// If the request is local and we have data: assume a success
// (success with no data won't get notified, that's the best we
// can do given current implementations)
o||!e.isLocal||e.crossDomain?1223===o&&(o=204):o=l.text?200:404}
// Call complete if needed
l&&i(o,u,l,a.getAllResponseHeaders())},
// Do send the request
// `xhr.send` may raise an exception, but it will be
// handled in jQuery.ajax (so no try/catch here)
e.async?4===a.readyState?
// (IE6 & IE7) if it's in cache and has been
// retrieved directly we need to fire the callback
n.setTimeout(t):
// Register the callback, but delay it in case `xhr.send` throws
// Add to the list of active xhr callbacks
a.onreadystatechange=pn[s]=t:
// If we're in sync mode we fire the callback
t()},abort:function(){t&&t(void 0,!0)}}}}),
// Install script dataType
ye.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return ye.globalEval(e),e}}}),
// Handle cache's special case and global
ye.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),
// Bind script tag hack transport
ye.ajaxTransport("script",function(e){
// This transport only deals with cross domain requests
if(e.crossDomain){var t,n=se.head||ye("head")[0]||se.documentElement;return{send:function(r,i){t=se.createElement("script"),t.async=!0,e.scriptCharset&&(t.charset=e.scriptCharset),t.src=e.url,
// Attach handlers for all browsers
t.onload=t.onreadystatechange=function(e,n){(n||!t.readyState||/loaded|complete/.test(t.readyState))&&(
// Handle memory leak in IE
t.onload=t.onreadystatechange=null,
// Remove the script
t.parentNode&&t.parentNode.removeChild(t),
// Dereference the script
t=null,
// Callback if not abort
n||i(200,"success"))},
// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
// Use native DOM manipulation to avoid our domManip AJAX trickery
n.insertBefore(t,n.firstChild)},abort:function(){t&&t.onload(void 0,!0)}}}});var gn=[],mn=/(=)\?(?=&|$)|\?\?/;
// Default jsonp settings
ye.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=gn.pop()||ye.expando+"_"+Xt++;return this[e]=!0,e}}),
// Detect, normalize options and install callbacks for jsonp requests
ye.ajaxPrefilter("json jsonp",function(e,t,r){var i,o,a,s=e.jsonp!==!1&&(mn.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&mn.test(e.data)&&"data");
// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(s||"jsonp"===e.dataTypes[0])
// Delegate to script
// Get callback name, remembering preexisting value associated with it
// Insert callback into url or form data
// Use data converter to retrieve json after script execution
// force json dataType
// Install callback
// Clean-up function (fires after converters)
return i=e.jsonpCallback=ye.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(mn,"$1"+i):e.jsonp!==!1&&(e.url+=(Ut.test(e.url)?"&":"?")+e.jsonp+"="+i),e.converters["script json"]=function(){return a||ye.error(i+" was not called"),a[0]},e.dataTypes[0]="json",o=n[i],n[i]=function(){a=arguments},r.always(function(){
// If previous value didn't exist - remove it
void 0===o?ye(n).removeProp(i):n[i]=o,
// Save back as free
e[i]&&(
// make sure that re-using the options doesn't screw things around
e.jsonpCallback=t.jsonpCallback,
// save the callback name for future use
gn.push(i)),
// Call if it was a function and we have a response
a&&ye.isFunction(o)&&o(a[0]),a=o=void 0}),"script"}),
// data: string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
ye.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||se;var r=ke.exec(e),i=!n&&[];
// Single tag
// Single tag
return r?[t.createElement(r[1])]:(r=w([e],t,i),i&&i.length&&ye(i).remove(),ye.merge([],r.childNodes))};
// Keep a copy of the old load method
var yn=ye.fn.load;/**
 * Load a url into a page
 */
ye.fn.load=function(e,t,n){if("string"!=typeof e&&yn)return yn.apply(this,arguments);var r,i,o,a=this,s=e.indexOf(" ");
// If it's a function
// We assume that it's the callback
// If we have elements to modify, make the request
return s>-1&&(r=ye.trim(e.slice(s,e.length)),e=e.slice(0,s)),ye.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&ye.ajax({url:e,
// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:i||"GET",dataType:"html",data:t}).done(function(e){
// Save response for use in complete callback
o=arguments,a.html(r?
// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
ye("<div>").append(ye.parseHTML(e)).find(r):
// Otherwise use the full result
e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},
// Attach a bunch of functions for handling common AJAX events
ye.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ye.fn[t]=function(e){return this.on(t,e)}}),ye.expr.filters.animated=function(e){return ye.grep(ye.timers,function(t){return e===t.elem}).length},ye.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=ye.css(e,"position"),f=ye(e),d={};
// set position first, in-case top/left are set even on static elem
"static"===c&&(e.style.position="relative"),s=f.offset(),o=ye.css(e,"top"),u=ye.css(e,"left"),l=("absolute"===c||"fixed"===c)&&ye.inArray("auto",[o,u])>-1,
// need to be able to calculate position if either top or left
// is auto and position is either absolute or fixed
l?(r=f.position(),a=r.top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),ye.isFunction(t)&&(
// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
t=t.call(e,n,ye.extend({},s))),null!=t.top&&(d.top=t.top-s.top+a),null!=t.left&&(d.left=t.left-s.left+i),"using"in t?t.using.call(e,d):f.css(d)}},ye.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){ye.offset.setOffset(this,e,t)});var t,n,r={top:0,left:0},i=this[0],o=i&&i.ownerDocument;if(o)
// Make sure it's not a disconnected DOM node
// Make sure it's not a disconnected DOM node
// If we don't have gBCR, just use 0,0 rather than error
// BlackBerry 5, iOS 3 (original iPhone)
return t=o.documentElement,ye.contains(t,i)?("undefined"!=typeof i.getBoundingClientRect&&(r=i.getBoundingClientRect()),n=oe(o),{top:r.top+(n.pageYOffset||t.scrollTop)-(t.clientTop||0),left:r.left+(n.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}):r},position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];
// Subtract parent offsets and element margins
// note: when an element has margin: auto the offsetLeft and marginLeft
// are the same in Safari causing offset.left to incorrectly be 0
// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
// because it is its only offset parent
// we assume that getBoundingClientRect is available when computed position is fixed
// Get *real* offsetParent
// Get correct offsets
// Add offsetParent borders
return"fixed"===ye.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),ye.nodeName(e[0],"html")||(n=e.offset()),n.top+=ye.css(e[0],"borderTopWidth",!0),n.left+=ye.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-ye.css(r,"marginTop",!0),left:t.left-n.left-ye.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&!ye.nodeName(e,"html")&&"static"===ye.css(e,"position");)e=e.offsetParent;return e||yt})}}),
// Create scrollLeft and scrollTop methods
ye.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n=/Y/.test(t);ye.fn[e]=function(r){return $e(this,function(e,r,i){var o=oe(e);return void 0===i?o?t in o?o[t]:o.document.documentElement[r]:e[r]:void(o?o.scrollTo(n?ye(o).scrollLeft():i,n?i:ye(o).scrollTop()):e[r]=i)},e,r,arguments.length,null)}}),
// Support: Safari<7-8+, Chrome<37-44+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
ye.each(["top","left"],function(e,t){ye.cssHooks[t]=F(ge.pixelPosition,function(e,n){if(n)
// if curCSS returns percentage, fallback to offset
return n=xt(e,t),gt.test(n)?ye(e).position()[t]+"px":n})}),
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
ye.each({Height:"height",Width:"width"},function(e,t){ye.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){
// margin is only for outerHeight, outerWidth
ye.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),a=n||(r===!0||i===!0?"margin":"border");return $e(this,function(t,n,r){var i;
// Get document width or height
// Get width or height on the element, requesting but not forcing parseFloat
// Set width or height on the element
return ye.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?ye.css(t,n,a):ye.style(t,n,r,a)},t,o?r:void 0,o,null)}})}),ye.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){
// ( namespace ) or ( selector, types [, fn] )
return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),
// The number of elements contained in the matched element set
ye.fn.size=function(){return this.length},ye.fn.andSelf=ye.fn.addBack,r=[],i=function(){return ye}.apply(t,r),!(void 0!==i&&(e.exports=i));var
// Map over jQuery in case of overwrite
vn=n.jQuery,
// Map over the $ in case of overwrite
xn=n.$;
// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
return ye.noConflict=function(e){return n.$===ye&&(n.$=xn),e&&n.jQuery===ye&&(n.jQuery=vn),ye},o||(n.jQuery=n.$=ye),ye})},/***/
10:/***/
function(e,t,n){e.exports=n.p+"images/no-works-c8762.jpg"},/***/
17:/***/
function(e,t,n){"use strict";/* WEBPACK VAR INJECTION */
(function(e){
//入口文件js
document.write("Im webpack quickstart </br>"),
//引入js文件 按顺序加载
document.write(n(4));
//引入图片
var t=new Image,r=document.createElement("img"),i=n(10),o=n(9);t.src=i,r.src=o,
//document.body.appendChild(img1);
document.body.appendChild(r),e("body").append(t)}).call(t,n(0))},/***/
4:/***/
function(e,t,n){"use strict";e.exports="just a webpack demo."},/***/
9:/***/
function(e,t,n){e.exports=n.p+"images/no-msg-bg-6eaeb.png"}},[17]);