function call(e){console.log(e);var t=$(e).serialize();$.ajax({type:"POST",url:"send/form.php",data:t,success:function(){$(".feedback__success").fadeIn("400"),setTimeout(function(){$(".feedback__success").fadeOut("400")},3e3),$("form").trigger("reset")},error:function(e,t){$(".feedback__error").fadeIn("400"),setTimeout(function(){$(".feedback__error").fadeOut("400")},3e3),alert("error")}})}(new WOW).init(),$(document).ready(function(){$(".bxslider").bxSlider({auto:!0,captions:!0,slideWidth:220,minSlides:1,maxSlides:4,slideMargin:10}),$(".bx-wrapper").css("max-width","100%"),$(".tabs__controls-item").on("click",function(e){e.preventDefault();var t=$(this).closest(".tabs__controls-item"),n=$(".tabs__item"),i=t.index();n.eq(i).add(t).addClass("active").siblings().removeClass("active")}),$('a[href^="#"]').click(function(){var e=$(this).attr("href"),t=$(e).offset().top;return $("html, body").animate({scrollTop:t},1e3),!1}),$("#phone").inputmask("mask",{mask:"(999) 999-9999"})});var initPhotoSwipeFromDOM=function(e){for(var t=function(e){for(var t,n,i,r,o=e.childNodes,a=o.length,s=[],d=0;a>d;d++)t=o[d],1===t.nodeType&&(n=t.children[0],i=n.getAttribute("data-size").split("x"),r={src:n.getAttribute("href"),w:parseInt(i[0],10),h:parseInt(i[1],10)},t.children.length>1&&(r.title=t.children[1].innerHTML),n.children.length>0&&(r.msrc=n.children[0].getAttribute("src")),r.el=t,s.push(r));return s},n=function u(e,t){return e&&(t(e)?e:u(e.parentNode,t))},i=function(e){e=e||window.event,e.preventDefault?e.preventDefault():e.returnValue=!1;var t=e.target||e.srcElement,i=n(t,function(e){return e.tagName&&"FIGURE"===e.tagName.toUpperCase()});if(i){for(var r,a=i.parentNode,s=i.parentNode.childNodes,d=s.length,l=0,c=0;d>c;c++)if(1===s[c].nodeType){if(s[c]===i){r=l;break}l++}return r>=0&&o(r,a),!1}},r=function(){var e=window.location.hash.substring(1),t={};if(e.length<5)return t;for(var n=e.split("&"),i=0;i<n.length;i++)if(n[i]){var r=n[i].split("=");r.length<2||(t[r[0]]=r[1])}return t.gid&&(t.gid=parseInt(t.gid,10)),t},o=function(e,n,i,r){var o,a,s,d=document.querySelectorAll(".pswp")[0];if(s=t(n),a={galleryUID:n.getAttribute("data-pswp-uid"),getThumbBoundsFn:function(e){var t=s[e].el.getElementsByTagName("img")[0],n=window.pageYOffset||document.documentElement.scrollTop,i=t.getBoundingClientRect();return{x:i.left,y:i.top+n,w:i.width}}},r)if(a.galleryPIDs){for(var l=0;l<s.length;l++)if(s[l].pid==e){a.index=l;break}}else a.index=parseInt(e,10)-1;else a.index=parseInt(e,10);isNaN(a.index)||(i&&(a.showAnimationDuration=0),o=new PhotoSwipe(d,PhotoSwipeUI_Default,s,a),o.init())},a=document.querySelectorAll(e),s=0,d=a.length;d>s;s++)a[s].setAttribute("data-pswp-uid",s+1),a[s].onclick=i;var l=r();l.pid&&l.gid&&o(l.pid,a[l.gid-1],!0,!0);var c=navigator.userAgent.indexOf("Firefox")>-1;$("#cd-team").find("ul a").on("click",function(e){e.preventDefault();var t=$(this).data("type");$(".cd-member-bio."+t).addClass("slide-in"),$(".cd-member-bio-close").addClass("is-visible"),c?$("main").addClass("slide-out").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){$("body").addClass("overflow-hidden")}):($("main").addClass("slide-out"),$("body").addClass("overflow-hidden"))}),$(document).on("click",".cd-overlay, .cd-member-bio-close",function(e){e.preventDefault(),$(".cd-member-bio").removeClass("slide-in"),$(".cd-member-bio-close").removeClass("is-visible"),c?$("main").removeClass("slide-out").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){$("body").removeClass("overflow-hidden")}):($("main").removeClass("slide-out"),$("body").removeClass("overflow-hidden"))})};initPhotoSwipeFromDOM(".my-gallery");