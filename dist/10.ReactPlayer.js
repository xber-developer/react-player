(window.webpackJsonpReactPlayer=window.webpackJsonpReactPlayer||[]).push([[10],{16:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return i});var o=n(0),r=n.n(o),f=n(2);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=/(?:wistia\.com|wi\.st)\/(?:medias|embed)\/(.*)$/,i=function(){function i(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return d(c(t=function(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?c(e):t}(this,(e=l(i)).call.apply(e,[this].concat(o)))),"callPlayer",f.a),d(c(t),"mute",function(){t.callPlayer("mute")}),d(c(t),"unmute",function(){t.callPlayer("unmute")}),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(i,o["Component"]),function(e,t,n){t&&u(e.prototype,t),n&&u(e,n)}(i,[{key:"componentDidMount",value:function(){this.props.didMount&&this.props.didMount(this)}},{key:"getID",value:function(e){return e&&e.match(y)[1]}},{key:"load",value:function(e){var t=this,n=this.props,o=n.playing,r=n.muted,i=n.controls,a=n.onReady,u=n.onPlay,l=n.onPause,c=n.onSeek,s=n.onEnded,y=n.config,p=n.onError;Object(f.c)("https://fast.wistia.com/assets/external/E-v1.js","Wistia").then(function(){window._wq=window._wq||[],window._wq.push({id:t.getID(e),options:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(n,!0).forEach(function(e){d(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({autoPlay:o,silentAutoPlay:"allow",muted:r,controlsVisibleOnLoad:i},y.wistia.options),onReady:function(e){t.player=e,t.unbind(),t.player.bind("play",u),t.player.bind("pause",l),t.player.bind("seek",c),t.player.bind("end",s),a()}})},p)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"unbind",value:function(){var e=this.props,t=e.onPlay,n=e.onPause,o=e.onSeek,r=e.onEnded;this.player.unbind("play",t),this.player.unbind("pause",n),this.player.unbind("seek",o),this.player.unbind("end",r)}},{key:"stop",value:function(){this.unbind(),this.callPlayer("remove")}},{key:"seekTo",value:function(e){this.callPlayer("time",e)}},{key:"setVolume",value:function(e){this.callPlayer("volume",e)}},{key:"setPlaybackRate",value:function(e){this.callPlayer("playbackRate",e)}},{key:"getDuration",value:function(){return this.callPlayer("duration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("time")}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){var e=this.getID(this.props.url),t="wistia_embed wistia_async_".concat(e);return r.a.createElement("div",{key:e,className:t,style:{width:"100%",height:"100%"}})}}]),i}();d(i,"displayName","Wistia"),d(i,"canPlay",function(e){return y.test(e)}),d(i,"loopOnEnded",!0)}}]);
//# sourceMappingURL=10.ReactPlayer.js.map