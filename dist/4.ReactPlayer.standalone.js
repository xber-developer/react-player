(window.webpackJsonprenderReactPlayer=window.webpackJsonprenderReactPlayer||[]).push([[4],{20:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d});var r=n(0),o=n.n(r),u=n(2);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y="https://connect.facebook.net/en_US/sdk.js",b="fbAsyncInit",a=/facebook\.com\/([^/?].+\/)?video(s|\.php)[/?].*$/,d=function(){function a(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return f(s(t=function(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?s(e):t}(this,(e=c(a)).call.apply(e,[this].concat(r)))),"callPlayer",u.a),f(s(t),"playerID","facebook-player-"+Object(u.j)()),f(s(t),"mute",function(){t.callPlayer("mute")}),f(s(t),"unmute",function(){t.callPlayer("unmute")}),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(a,r["Component"]),function(e,t,n){t&&l(e.prototype,t),n&&l(e,n)}(a,[{key:"componentDidMount",value:function(){this.props.didMount&&this.props.didMount(this)}},{key:"load",value:function(e,t){var n=this;t?Object(u.c)(y,"FB",b).then(function(e){return e.XFBML.parse()}):Object(u.c)(y,"FB",b).then(function(e){e.init({appId:n.props.config.facebook.appId,xfbml:!0,version:"v2.5"}),e.Event.subscribe("xfbml.render",function(e){n.props.onLoaded()}),e.Event.subscribe("xfbml.ready",function(e){"video"===e.type&&e.id===n.playerID&&(n.player=e.instance,n.player.subscribe("startedPlaying",n.props.onPlay),n.player.subscribe("paused",n.props.onPause),n.player.subscribe("finishedPlaying",n.props.onEnded),n.player.subscribe("startedBuffering",n.props.onBuffer),n.player.subscribe("finishedBuffering",n.props.onBufferEnd),n.player.subscribe("error",n.props.onError),n.props.muted||n.callPlayer("unmute"),n.props.onReady(),document.getElementById(n.playerID).querySelector("iframe").style.visibility="visible")})})}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){this.callPlayer("seek",e)}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"getDuration",value:function(){return this.callPlayer("getDuration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("getCurrentPosition")}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){return o.a.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID,className:"fb-video","data-href":this.props.url,"data-autoplay":this.props.playing?"true":"false","data-allowfullscreen":"true","data-controls":this.props.controls?"true":"false"})}}]),a}();f(d,"displayName","Facebook"),f(d,"canPlay",function(e){return a.test(e)}),f(d,"loopOnEnded",!0)}}]);
//# sourceMappingURL=4.ReactPlayer.standalone.js.map