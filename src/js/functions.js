!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).basicLightbox=e()}}(function(){return function i(c,u,a){function s(n,e){if(!u[n]){if(!c[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(l)return l(n,!0);var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}var r=u[n]={exports:{}};c[n][0].call(r.exports,function(e){return s(c[n][1][e]||e)},r,r.exports,i,c,u,a)}return u[n].exports}for(var l="function"==typeof require&&require,e=0;e<a.length;e++)s(a[e]);return s}({1:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.create=t.visible=void 0;var u=function(e){var n=1<arguments.length&&void 0!==arguments[1]&&arguments[1],t=document.createElement("div");return t.innerHTML=e.trim(),!0===n?t.children:t.firstChild},a=function(e,n){var t=e.children;return 1===t.length&&t[0].tagName===n},c=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};t.visible=c;t.create=function(e,o){var r=function(e,n){var t=u('\n\t\t<div class="basicLightbox '.concat(n.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),o=t.querySelector(".basicLightbox__placeholder");e.forEach(function(e){return o.appendChild(e)});var r=a(o,"IMG"),i=a(o,"VIDEO"),c=a(o,"IFRAME");return!0===r&&t.classList.add("basicLightbox--img"),!0===i&&t.classList.add("basicLightbox--video"),!0===c&&t.classList.add("basicLightbox--iframe"),t}(e=function(e){var n="string"==typeof e,t=e instanceof HTMLElement==1;if(!1===n&&!1===t)throw new Error("Content must be a DOM element/node or string");return!0===n?Array.from(u(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),o=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(o)),n=function(e){return!1!==o.onClose(i)&&(t=function(){if("function"==typeof e)return e(i)},(n=r).classList.remove("basicLightbox--visible"),setTimeout(function(){return!1===c(n)||n.parentElement.removeChild(n),t()},410),!0);var n,t};!0===o.closable&&r.addEventListener("click",function(e){e.target===r&&n()});var i={element:function(){return r},visible:function(){return c(r)},show:function(e){return!1!==o.onShow(i)&&(n=r,t=function(){if("function"==typeof e)return e(i)},document.body.appendChild(n),setTimeout(function(){requestAnimationFrame(function(){return n.classList.add("basicLightbox--visible"),t()})},10),!0);var n,t},close:n};return i}},{}]},{},[1])(1)});

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).basicSlider=e()}}(function(){return function o(a,d,l){function c(n,e){if(!d[n]){if(!a[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(u)return u(n,!0);var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}var i=d[n]={exports:{}};a[n][0].call(i.exports,function(e){return c(a[n][1][e]||e)},i,i.exports,o,a,d,l)}return d[n].exports}for(var u="function"==typeof require&&require,e=0;e<l.length;e++)c(l[e]);return c}({1:[function(e,n,t){"use strict";n.exports=function(n,e,t){var r=e-n+1,i=t-n;return function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;return 0<=(i=(i+e)%r)&&(i=0+i),i<0&&(i=r+i),n+i}}},{}],2:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.create=void 0;var r,v=(r=e("count-between"))&&r.__esModule?r:{default:r};var h="left",g=function(e){"function"==typeof e.stopPropagation&&e.stopPropagation(),"function"==typeof e.preventDefault&&e.preventDefault()},E=function(e,n){var t=document.createElement("button");return e=e===h?"left":"right",t.classList.add("basicSlider__arrow"),t.classList.add("basicSlider__arrow--".concat(e)),t.onclick=function(e){n(),g(e)},t},b=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",n=document.createElement("div");return n.classList.add("basicSlider__slide"),n.innerHTML=e,n},_=function(e,n,t,r){n.style.transform="translateX(-".concat(100/r*t,"%)"),e.forEach(function(e){return e.classList.remove("active")}),e[t].classList.add("active")},c=function(e,n,i,t){var r,o,a,d,l,c,u,s,f,p=(0,v.default)(0,i.length()-1,t.index),m={};return m.slideElems=n.map(b),m.dotElems=n.map(function(e,n){return t=i.goto.bind(null,n),(r=document.createElement("button")).classList.add("basicSlider__dot"),r.onclick=function(e){t(),g(e)},r;var t,r}),m.dotsElem=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],n=document.createElement("div");return n.classList.add("basicSlider__dots"),e.forEach(function(e){return n.appendChild(e)}),n}(m.dotElems),m.slidesElem=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],n=document.createElement("div");return n.classList.add("basicSlider__slides"),n.style.width="".concat(100*e.length,"%"),e.forEach(function(e){return n.appendChild(e)}),n}(m.slideElems),m.containerElem=(r=m.slidesElem,(o=document.createElement("div")).classList.add("basicSlider__container"),o.appendChild(r),o),m.arrowLeftElem=E(h,i.prev),m.arrowRightElem=E("right",i.next),_(m.dotElems,m.slidesElem,p(),i.length()),a=e,l=t,c=(d=m).arrowLeftElem,u=d.arrowRightElem,s=d.dotsElem,f=d.containerElem,a.classList.add("basicSlider"),a.innerHTML="",a.appendChild(f),!0===l.arrows&&(a.appendChild(c),a.appendChild(u)),!0===l.dots&&a.appendChild(s),{c:p,refs:m}};t.create=function(e,n,t){t=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return e=Object.assign({},e),!1===Number.isFinite(e.index)&&(e.index=0),!1!==e.arrows&&(e.arrows=!0),!1!==e.dots&&(e.dots=!0),"function"!=typeof e.beforeChange&&(e.beforeChange=function(){}),"function"!=typeof e.afterChange&&(e.afterChange=function(){}),e}(t);var r=null,i=null,o=function(){return n.length},a=function(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:r();if(!1===t.beforeChange(d,e,n))return!1;r=(0,v.default)(0,o()-1,e),_(i.dotElems,i.slidesElem,r(),o()),t.afterChange(d,e,n)},d={element:function(){return e},length:o,current:function(){return r()},goto:a,prev:function(){var e=r(),n=r(-1);a(n,e)},next:function(){var e=r(),n=r(1);a(n,e)}},l=c(e,n,d,t);return r=l.c,i=l.refs,d}},{"count-between":1}]},{},[2])(2)});

const sunnyGraph__popover1 = basicLightbox.create(document.querySelector('#sunnyGraph__popover1'));
const sunnyGraph__popover2 = basicLightbox.create(document.querySelector('#sunnyGraph__popover2'));
const sunnyGraph__popover3 = basicLightbox.create(document.querySelector('#sunnyGraph__popover3'));
const sunnyGraph__popover4 = basicLightbox.create(document.querySelector('#sunnyGraph__popover4'));

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

document.querySelector('.sunnyGraph__nav--block__trigger[data-trigger="1"]').onclick = sunnyGraph__popover1.show;
document.querySelector('.sunnyGraph__nav--block__trigger[data-trigger="2"]').onclick = sunnyGraph__popover2.show;
document.querySelector('.sunnyGraph__nav--block__trigger[data-trigger="3"]').onclick = sunnyGraph__popover3.show;
document.querySelector('.sunnyGraph__nav--block__trigger[data-trigger="4"]').addEventListener('click', () => {
    initSlider();
});