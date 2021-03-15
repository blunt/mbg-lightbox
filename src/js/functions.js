!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).basicLightbox=e()}}(function(){return function i(c,u,a){function s(n,e){if(!u[n]){if(!c[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(l)return l(n,!0);var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}var r=u[n]={exports:{}};c[n][0].call(r.exports,function(e){return s(c[n][1][e]||e)},r,r.exports,i,c,u,a)}return u[n].exports}for(var l="function"==typeof require&&require,e=0;e<a.length;e++)s(a[e]);return s}({1:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.create=t.visible=void 0;var u=function(e){var n=1<arguments.length&&void 0!==arguments[1]&&arguments[1],t=document.createElement("div");return t.innerHTML=e.trim(),!0===n?t.children:t.firstChild},a=function(e,n){var t=e.children;return 1===t.length&&t[0].tagName===n},c=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};t.visible=c;t.create=function(e,o){var r=function(e,n){var t=u('\n\t\t<div class="basicLightbox '.concat(n.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),o=t.querySelector(".basicLightbox__placeholder");e.forEach(function(e){return o.appendChild(e)});var r=a(o,"IMG"),i=a(o,"VIDEO"),c=a(o,"IFRAME");return!0===r&&t.classList.add("basicLightbox--img"),!0===i&&t.classList.add("basicLightbox--video"),!0===c&&t.classList.add("basicLightbox--iframe"),t}(e=function(e){var n="string"==typeof e,t=e instanceof HTMLElement==1;if(!1===n&&!1===t)throw new Error("Content must be a DOM element/node or string");return!0===n?Array.from(u(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),o=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(o)),n=function(e){return!1!==o.onClose(i)&&(t=function(){if("function"==typeof e)return e(i)},(n=r).classList.remove("basicLightbox--visible"),setTimeout(function(){return!1===c(n)||n.parentElement.removeChild(n),t()},410),!0);var n,t};!0===o.closable&&r.addEventListener("click",function(e){e.target===r&&n()});var i={element:function(){return r},visible:function(){return c(r)},show:function(e){return!1!==o.onShow(i)&&(n=r,t=function(){if("function"==typeof e)return e(i)},document.body.appendChild(n),setTimeout(function(){requestAnimationFrame(function(){return n.classList.add("basicLightbox--visible"),t()})},10),!0);var n,t},close:n};return i}},{}]},{},[1])(1)});

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).basicSlider=e()}}(function(){return function o(a,d,l){function c(n,e){if(!d[n]){if(!a[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(u)return u(n,!0);var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}var i=d[n]={exports:{}};a[n][0].call(i.exports,function(e){return c(a[n][1][e]||e)},i,i.exports,o,a,d,l)}return d[n].exports}for(var u="function"==typeof require&&require,e=0;e<l.length;e++)c(l[e]);return c}({1:[function(e,n,t){"use strict";n.exports=function(n,e,t){var r=e-n+1,i=t-n;return function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;return 0<=(i=(i+e)%r)&&(i=0+i),i<0&&(i=r+i),n+i}}},{}],2:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.create=void 0;var r,v=(r=e("count-between"))&&r.__esModule?r:{default:r};var h="left",g=function(e){"function"==typeof e.stopPropagation&&e.stopPropagation(),"function"==typeof e.preventDefault&&e.preventDefault()},E=function(e,n){var t=document.createElement("button");return e=e===h?"left":"right",t.classList.add("basicSlider__arrow"),t.classList.add("basicSlider__arrow--".concat(e)),t.onclick=function(e){n(),g(e)},t},b=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",n=document.createElement("div");return n.classList.add("basicSlider__slide"),n.innerHTML=e,n},_=function(e,n,t,r){n.style.transform="translateX(-".concat(100/r*t,"%)"),e.forEach(function(e){return e.classList.remove("active")}),e[t].classList.add("active")},c=function(e,n,i,t){var r,o,a,d,l,c,u,s,f,p=(0,v.default)(0,i.length()-1,t.index),m={};return m.slideElems=n.map(b),m.dotElems=n.map(function(e,n){return t=i.goto.bind(null,n),(r=document.createElement("button")).classList.add("basicSlider__dot"),r.onclick=function(e){t(),g(e)},r;var t,r}),m.dotsElem=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],n=document.createElement("div");return n.classList.add("basicSlider__dots"),e.forEach(function(e){return n.appendChild(e)}),n}(m.dotElems),m.slidesElem=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],n=document.createElement("div");return n.classList.add("basicSlider__slides"),n.style.width="".concat(100*e.length,"%"),e.forEach(function(e){return n.appendChild(e)}),n}(m.slideElems),m.containerElem=(r=m.slidesElem,(o=document.createElement("div")).classList.add("basicSlider__container"),o.appendChild(r),o),m.arrowLeftElem=E(h,i.prev),m.arrowRightElem=E("right",i.next),_(m.dotElems,m.slidesElem,p(),i.length()),a=e,l=t,c=(d=m).arrowLeftElem,u=d.arrowRightElem,s=d.dotsElem,f=d.containerElem,a.classList.add("basicSlider"),a.innerHTML="",a.appendChild(f),!0===l.arrows&&(a.appendChild(c),a.appendChild(u)),!0===l.dots&&a.appendChild(s),{c:p,refs:m}};t.create=function(e,n,t){t=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return e=Object.assign({},e),!1===Number.isFinite(e.index)&&(e.index=0),!1!==e.arrows&&(e.arrows=!0),!1!==e.dots&&(e.dots=!0),"function"!=typeof e.beforeChange&&(e.beforeChange=function(){}),"function"!=typeof e.afterChange&&(e.afterChange=function(){}),e}(t);var r=null,i=null,o=function(){return n.length},a=function(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:r();if(!1===t.beforeChange(d,e,n))return!1;r=(0,v.default)(0,o()-1,e),_(i.dotElems,i.slidesElem,r(),o()),t.afterChange(d,e,n)},d={element:function(){return e},length:o,current:function(){return r()},goto:a,prev:function(){var e=r(),n=r(-1);a(n,e)},next:function(){var e=r(),n=r(1);a(n,e)}},l=c(e,n,d,t);return r=l.c,i=l.refs,d}},{"count-between":1}]},{},[2])(2)});

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("scrollMonitor",[],e):"object"==typeof exports?exports.scrollMonitor=e():t.scrollMonitor=e()}(this,function(){return s={},i.m=o=[function(t,e,i){"use strict";var o=i(1).isInBrowser,i=new(i(2))(o?document.body:null);i.setStateFromDOM(null),i.listenToDOM(),o&&(window.scrollMonitor=i),t.exports=i},function(t,e){"use strict";e.VISIBILITYCHANGE="visibilityChange",e.ENTERVIEWPORT="enterViewport",e.FULLYENTERVIEWPORT="fullyEnterViewport",e.EXITVIEWPORT="exitViewport",e.PARTIALLYEXITVIEWPORT="partiallyExitViewport",e.LOCATIONCHANGE="locationChange",e.STATECHANGE="stateChange",e.eventTypes=[e.VISIBILITYCHANGE,e.ENTERVIEWPORT,e.FULLYENTERVIEWPORT,e.EXITVIEWPORT,e.PARTIALLYEXITVIEWPORT,e.LOCATIONCHANGE,e.STATECHANGE],e.isOnServer="undefined"==typeof window,e.isInBrowser=!e.isOnServer,e.defaultOffsets={top:0,bottom:0}},function(t,e,i){"use strict";function r(t){return s?0:t===document.body?window.innerHeight||document.documentElement.clientHeight:t.clientHeight}function h(t){return s?0:t===document.body?Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.documentElement.clientHeight):t.scrollHeight}function c(t){return s?0:t===document.body?window.pageYOffset||document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop}var o=i(1),s=o.isOnServer,n=o.isInBrowser,a=o.eventTypes,l=i(3),p=!1;if(n)try{var w=Object.defineProperty({},"passive",{get:function(){p=!0}});window.addEventListener("test",null,w)}catch(t){}var u=!!p&&{capture:!1,passive:!0},i=(d.prototype.listenToDOM=function(){n&&(window.addEventListener?((this.item===document.body?window:this.item).addEventListener("scroll",this.DOMListener,u),window.addEventListener("resize",this.DOMListener)):((this.item===document.body?window:this.item).attachEvent("onscroll",this.DOMListener),window.attachEvent("onresize",this.DOMListener)),this.destroy=function(){window.addEventListener?(this.item===document.body?(window.removeEventListener("scroll",this.DOMListener,u),this.containerWatcher.destroy()):this.item.removeEventListener("scroll",this.DOMListener,u),window.removeEventListener("resize",this.DOMListener)):(this.item===document.body?(window.detachEvent("onscroll",this.DOMListener),this.containerWatcher.destroy()):this.item.detachEvent("onscroll",this.DOMListener),window.detachEvent("onresize",this.DOMListener))})},d.prototype.destroy=function(){},d.prototype.DOMListener=function(t){this.setStateFromDOM(t)},d.prototype.setStateFromDOM=function(t){var e=c(this.item),i=r(this.item),o=h(this.item);this.setState(e,i,o,t)},d.prototype.setState=function(t,e,i,o){var s=e!==this.viewportHeight||i!==this.contentHeight;if(this.latestEvent=o,this.viewportTop=t,this.viewportHeight=e,this.viewportBottom=t+e,this.contentHeight=i,s)for(var n=this.watchers.length;n--;)this.watchers[n].recalculateLocation();this.updateAndTriggerWatchers(o)},d.prototype.updateAndTriggerWatchers=function(t){for(var e=this.watchers.length;e--;)this.watchers[e].update();for(e=this.watchers.length;e--;)this.watchers[e].triggerCallbacks(t)},d.prototype.createCustomContainer=function(){return new d},d.prototype.createContainer=function(t){"string"==typeof t?t=document.querySelector(t):t&&0<t.length&&(t=t[0]);t=new d(t,this);return t.setStateFromDOM(),t.listenToDOM(),t},d.prototype.create=function(t,e){"string"==typeof t?t=document.querySelector(t):t&&0<t.length&&(t=t[0]);e=new l(this,t,e);return this.watchers.push(e),e},d.prototype.beget=function(t,e){return this.create(t,e)},d);function d(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,d);var i,o,s,n=this;this.item=t,this.watchers=[],this.viewportTop=null,this.viewportBottom=null,this.documentHeight=h(t),this.viewportHeight=r(t),this.DOMListener=function(){d.prototype.DOMListener.apply(n,arguments)},this.eventTypes=a,e&&(this.containerWatcher=e.create(t)),this.update=function(){(function(){if(n.viewportTop=c(t),n.viewportBottom=n.viewportTop+n.viewportHeight,n.documentHeight=h(t),n.documentHeight!==i){for(o=n.watchers.length;o--;)n.watchers[o].recalculateLocation();i=n.documentHeight}})(),function(){for(s=n.watchers.length;s--;)n.watchers[s].update();for(s=n.watchers.length;s--;)n.watchers[s].triggerCallbacks()}()},this.recalculateLocations=function(){this.documentHeight=0,this.update()}}t.exports=i},function(t,e,i){"use strict";function o(t,e,i){function r(t,e){if(0!==t.length)for(a=t.length;a--;)(l=t[a]).callback.call(o,e,o),l.isOne&&t.splice(a,1)}var o=this;this.watchItem=e,this.container=t,this.offsets=i?i===+i?{top:i,bottom:i}:{top:i.top||y.top,bottom:i.bottom||y.bottom}:y,this.callbacks={};for(var s,n,h,c,a,l,p=0,w=E.length;p<w;p++)o.callbacks[E[p]]=[];this.locked=!1,this.triggerCallbacks=function(t){switch(this.isInViewport&&!s&&r(this.callbacks[d],t),this.isFullyInViewport&&!n&&r(this.callbacks[f],t),this.isAboveViewport!==h&&this.isBelowViewport!==c&&(r(this.callbacks[u],t),n||this.isFullyInViewport||(r(this.callbacks[f],t),r(this.callbacks[v],t)),s||this.isInViewport||(r(this.callbacks[d],t),r(this.callbacks[m],t))),!this.isFullyInViewport&&n&&r(this.callbacks[v],t),!this.isInViewport&&s&&r(this.callbacks[m],t),this.isInViewport!==s&&r(this.callbacks[u],t),!0){case s!==this.isInViewport:case n!==this.isFullyInViewport:case h!==this.isAboveViewport:case c!==this.isBelowViewport:r(this.callbacks[I],t)}s=this.isInViewport,n=this.isFullyInViewport,h=this.isAboveViewport,c=this.isBelowViewport},this.recalculateLocation=function(){if(!this.locked){var t=this.top,e=this.bottom;if(this.watchItem.nodeName){var i=this.watchItem.style.display;"none"===i&&(this.watchItem.style.display="");for(var o=0,s=this.container;s.containerWatcher;)o+=s.containerWatcher.top-s.containerWatcher.container.viewportTop,s=s.containerWatcher.container;var n=this.watchItem.getBoundingClientRect();this.top=n.top+this.container.viewportTop-o,this.bottom=n.bottom+this.container.viewportTop-o,"none"===i&&(this.watchItem.style.display=i)}else this.watchItem===+this.watchItem?0<this.watchItem?this.top=this.bottom=this.watchItem:this.top=this.bottom=this.container.documentHeight-this.watchItem:(this.top=this.watchItem.top,this.bottom=this.watchItem.bottom);this.top-=this.offsets.top,this.bottom+=this.offsets.bottom,this.height=this.bottom-this.top,void 0===t&&void 0===e||this.top===t&&this.bottom===e||r(this.callbacks[b],null)}},this.recalculateLocation(),this.update(),s=this.isInViewport,n=this.isFullyInViewport,h=this.isAboveViewport,c=this.isBelowViewport}var i=i(1),u=i.VISIBILITYCHANGE,d=i.ENTERVIEWPORT,f=i.FULLYENTERVIEWPORT,m=i.EXITVIEWPORT,v=i.PARTIALLYEXITVIEWPORT,b=i.LOCATIONCHANGE,I=i.STATECHANGE,E=i.eventTypes,y=i.defaultOffsets;o.prototype={on:function(t,e,i){switch(!0){case t===u&&!this.isInViewport&&this.isAboveViewport:case t===d&&this.isInViewport:case t===f&&this.isFullyInViewport:case t===m&&this.isAboveViewport&&!this.isInViewport:case t===v&&this.isInViewport&&this.isAboveViewport:if(e.call(this,this.container.latestEvent,this),i)return}if(!this.callbacks[t])throw new Error("Tried to add a scroll monitor listener of type "+t+". Your options are: "+E.join(", "));this.callbacks[t].push({callback:e,isOne:i||!1})},off:function(t,e){if(!this.callbacks[t])throw new Error("Tried to remove a scroll monitor listener of type "+t+". Your options are: "+E.join(", "));for(var i,o=0;i=this.callbacks[t][o];o++)if(i.callback===e){this.callbacks[t].splice(o,1);break}},one:function(t,e){this.on(t,e,!0)},recalculateSize:function(){this.height=this.watchItem.offsetHeight+this.offsets.top+this.offsets.bottom,this.bottom=this.top+this.height},update:function(){this.isAboveViewport=this.top<this.container.viewportTop,this.isBelowViewport=this.bottom>this.container.viewportBottom,this.isInViewport=this.top<this.container.viewportBottom&&this.bottom>this.container.viewportTop,this.isFullyInViewport=this.top>=this.container.viewportTop&&this.bottom<=this.container.viewportBottom||this.isAboveViewport&&this.isBelowViewport},destroy:function(){var t=this.container.watchers.indexOf(this);this.container.watchers.splice(t,1);for(var e=0,i=E.length;e<i;e++)this.callbacks[E[e]].length=0},lock:function(){this.locked=!0},unlock:function(){this.locked=!1}};for(var s=0,n=E.length;s<n;s++){var r=E[s];o.prototype[r]=function(i){return function(t,e){this.on.call(this,i,t,e)}}(r)}t.exports=o}],i.c=s,i.p="",i(0);function i(t){if(s[t])return s[t].exports;var e=s[t]={exports:{},id:t,loaded:!1};return o[t].call(e.exports,e,e.exports,i),e.loaded=!0,e.exports}var o,s});

const fancyText = (target) => {
    const strText = target.textContent;
    const splitText = strText.split("");
    target.textContent = "";
    for(let i = 0; i < splitText.length; i++) {
        target.innerHTML += "<span class='sunnyGraph__fadeIn--letter'>" + splitText[i] + "</span>";
    }
    let char = 0;
    let timer = setInterval(onTick, 50);
    function onTick(){
        const span = target.querySelectorAll('span')[char];
        span.classList.add('sunnyGraph__fadeIn--letter--in');
        char++ 
        if(char === splitText.length){
            complete();
            return;
        }
    }
    function complete(){
        clearInterval(timer);
        timer = null;
    }
};

const sunnyGraph__popover1 = basicLightbox.create(document.querySelector('#sunnyGraph__popover1'));
const sunnyGraph__popover2 = basicLightbox.create(document.querySelector('#sunnyGraph__popover2'));
const sunnyGraph__popover3 = basicLightbox.create(document.querySelector('#sunnyGraph__popover3'));
const sunnyGraph__popover4 = basicLightbox.create(document.querySelector('#sunnyGraph__popover4'));

document.addEventListener('DOMContentLoaded', () => {

    function initSlider() {
        sunnyGraph__popover4.show();
        
        const slider = document.querySelector('.sunnyGraph__popover--slider');
        const slides = Array.prototype.map.call(slider.children, (slide, i) => slide.innerHTML);

        const clusterArray = function(arr, itemsPerCluster) {
            return arr.reduce((clusters, item, i) => {
                const cluster = Math.floor(i / itemsPerCluster);
                const existing = clusters[cluster]==null ? '' : clusters[cluster];
                clusters[cluster] = existing + item;
                return clusters;
            }, [])
        }

        const initSlider = function() {
            let currentSlidesPerSlide = null;
            return () => {
                let slidesPerSlide = 5;
                const width = window.innerWidth || window.outerWidth;
                if (width < 1024) slidesPerSlide = 3;
                if (width < 768) slidesPerSlide = 1;
                if (currentSlidesPerSlide===slidesPerSlide) return;
                currentSlidesPerSlide = slidesPerSlide;
                basicSlider.create(
                    slider,
                    clusterArray(slides, slidesPerSlide),
                    {
                        dots: false
                    }
                );
            }
        }

        const onResize = function(fn, timeout) {
            let timer = null;
            window.addEventListener('resize', () => {
                clearTimeout(timer);
                timer = setTimeout(fn, timeout);
            })
        }

        const updateSlider = initSlider();
        onResize(updateSlider, 0);
        updateSlider();
    }

    

    const triggers = document.querySelectorAll('.sunnyGraph__nav--block__trigger');
    
    triggers.forEach((trigger) => {
        trigger.addEventListener('click', (e) => {
            switch(e.currentTarget.dataset.trigger) {
                case '1': 
                    sunnyGraph__popover1.show();
                    break;
                case '2': 
                    sunnyGraph__popover2.show();
                    break;
                case '3': 
                    sunnyGraph__popover3.show();
                    break;
                case '4': 
                    initSlider();
                    break;
            }
            fancyText(document.querySelector('.basicLightbox .sunnyGraph__popover--title')); 
        });
    });

});

window.addEventListener('load', () => {
        
    const slideIn = document.querySelectorAll('.sunnyGraph__animIn');

    slideIn.forEach(element => makeWatcher(element));

    function addClass() {
        this.enterViewport(function() {
            this.watchItem.classList.add('sunnyGraph__slideIn--visible');
            if (this.watchItem.classList.contains('sunnyGraph__fadeIn')) {
                fancyText(this.watchItem);
                this.watchItem.classList.remove('sunnyGraph__fadeIn');
            }
        });
	}

	function makeWatcher(element) {
		var watcher = scrollMonitor.create( element, -100 );
		watcher.stateChange( addClass );
		addClass.call( watcher );
	}

});