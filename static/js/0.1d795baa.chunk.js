(this["webpackJsonpkodtest-live-arena"]=this["webpackJsonpkodtest-live-arena"]||[]).push([[0],{118:function(t,e,n){"use strict";n.r(e),n.d(e,"createSwipeBackGesture",(function(){return i}));var r=n(5),a=n(37),i=(n(26),function(t,e,n,i,o){var c=t.ownerDocument.defaultView;return Object(a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:n,onMove:function(t){var e=t.deltaX/c.innerWidth;i(e)},onEnd:function(t){var e=t.deltaX,n=c.innerWidth,a=e/n,i=t.velocityX,s=n/2,u=i>=0&&(i>.2||t.deltaX>s),d=(u?1-a:a)*n,h=0;if(d>5){var l=d/Math.abs(i);h=Math.min(l,540)}o(u,a<=0?.01:Object(r.j)(0,a,.9999),h)}})})}}]);
//# sourceMappingURL=0.1d795baa.chunk.js.map