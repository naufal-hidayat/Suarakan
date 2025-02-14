/**
* @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
!function(a, b) {
    function c(a, b) {
        var c = a.createElement("p")
          , d = a.getElementsByTagName("head")[0] || a.documentElement;
        return c.innerHTML = "x<style>" + b + "</style>",
        d.insertBefore(c.lastChild, d.firstChild)
    }
    function d() {
        var a = t.elements;
        return "string" == typeof a ? a.split(" ") : a
    }
    function e(a, b) {
        var c = t.elements;
        "string" != typeof c && (c = c.join(" ")),
        "string" != typeof a && (a = a.join(" ")),
        t.elements = c + " " + a,
        j(b)
    }
    function f(a) {
        var b = s[a[q]];
        return b || (b = {},
        r++,
        a[q] = r,
        s[r] = b),
        b
    }
    function g(a, c, d) {
        if (c || (c = b),
        l)
            return c.createElement(a);
        d || (d = f(c));
        var e;
        return e = d.cache[a] ? d.cache[a].cloneNode() : p.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a),
        !e.canHaveChildren || o.test(a) || e.tagUrn ? e : d.frag.appendChild(e)
    }
    function h(a, c) {
        if (a || (a = b),
        l)
            return a.createDocumentFragment();
        c = c || f(a);
        for (var e = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++)
            e.createElement(h[g]);
        return e
    }
    function i(a, b) {
        b.cache || (b.cache = {},
        b.createElem = a.createElement,
        b.createFrag = a.createDocumentFragment,
        b.frag = b.createFrag()),
        a.createElement = function(c) {
            return t.shivMethods ? g(c, a, b) : b.createElem(c)
        }
        ,
        a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/[\w\-:]+/g, function(a) {
            return b.createElem(a),
            b.frag.createElement(a),
            'c("' + a + '")'
        }) + ");return n}")(t, b.frag)
    }
    function j(a) {
        a || (a = b);
        var d = f(a);
        return !t.shivCSS || k || d.hasCSS || (d.hasCSS = !!c(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
        l || i(a, d),
        a
    }
    var k, l, m = "3.7.3", n = a.html5 || {}, o = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, q = "_html5shiv", r = 0, s = {};
    !function() {
        try {
            var a = b.createElement("a");
            a.innerHTML = "<xyz></xyz>",
            k = "hidden"in a,
            l = 1 == a.childNodes.length || function() {
                b.createElement("a");
                var a = b.createDocumentFragment();
                return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement
            }()
        } catch (c) {
            k = !0,
            l = !0
        }
    }();
    var t = {
        elements: n.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
        version: m,
        shivCSS: n.shivCSS !== !1,
        supportsUnknownElements: l,
        shivMethods: n.shivMethods !== !1,
        type: "default",
        shivDocument: j,
        createElement: g,
        createDocumentFragment: h,
        addElements: e
    };
    a.html5 = t,
    j(b),
    "object" == typeof module && module.exports && (module.exports = t)
}("undefined" != typeof window ? window : this, document);

/*! Respond.js v1.4.2: min/max-width media query polyfill
 * Copyright 2014 Scott Jehl
 * Licensed under MIT
 * https://j.mp/respondjs */

!function(a) {
    "use strict";
    a.matchMedia = a.matchMedia || function(a) {
        var b, c = a.documentElement, d = c.firstElementChild || c.firstChild, e = a.createElement("body"), f = a.createElement("div");
        return f.id = "mq-test-1",
        f.style.cssText = "position:absolute;top:-100em",
        e.style.background = "none",
        e.appendChild(f),
        function(a) {
            return f.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>',
            c.insertBefore(e, d),
            b = 42 === f.offsetWidth,
            c.removeChild(e),
            {
                matches: b,
                media: a
            }
        }
    }(a.document)
}(this),
function(a) {
    "use strict";
    function b() {
        v(!0)
    }
    var c = {};
    a.respond = c,
    c.update = function() {}
    ;
    var d = []
      , e = function() {
        var b = !1;
        try {
            b = new a.XMLHttpRequest
        } catch (c) {
            b = new a.ActiveXObject("Microsoft.XMLHTTP")
        }
        return function() {
            return b
        }
    }()
      , f = function(a, b) {
        var c = e();
        c && (c.open("GET", a, !0),
        c.onreadystatechange = function() {
            4 !== c.readyState || 200 !== c.status && 304 !== c.status || b(c.responseText)
        }
        ,
        4 !== c.readyState && c.send(null))
    }
      , g = function(a) {
        return a.replace(c.regex.minmaxwh, "").match(c.regex.other)
    };
    if (c.ajax = f,
    c.queue = d,
    c.unsupportedmq = g,
    c.regex = {
        media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
        keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
        comments: /\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,
        urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
        findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
        only: /(only\s+)?([a-zA-Z]+)\s?/,
        minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
        maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
        minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
        other: /\([^\)]*\)/g
    },
    c.mediaQueriesSupported = a.matchMedia && null !== a.matchMedia("only all") && a.matchMedia("only all").matches,
    !c.mediaQueriesSupported) {
        var h, i, j, k = a.document, l = k.documentElement, m = [], n = [], o = [], p = {}, q = 30, r = k.getElementsByTagName("head")[0] || l, s = k.getElementsByTagName("base")[0], t = r.getElementsByTagName("link"), u = function() {
            var a, b = k.createElement("div"), c = k.body, d = l.style.fontSize, e = c && c.style.fontSize, f = !1;
            return b.style.cssText = "position:absolute;font-size:1em;width:1em",
            c || (c = f = k.createElement("body"),
            c.style.background = "none"),
            l.style.fontSize = "100%",
            c.style.fontSize = "100%",
            c.appendChild(b),
            f && l.insertBefore(c, l.firstChild),
            a = b.offsetWidth,
            f ? l.removeChild(c) : c.removeChild(b),
            l.style.fontSize = d,
            e && (c.style.fontSize = e),
            a = j = parseFloat(a)
        }, v = function(b) {
            var c = "clientWidth"
              , d = l[c]
              , e = "CSS1Compat" === k.compatMode && d || k.body[c] || d
              , f = {}
              , g = t[t.length - 1]
              , p = (new Date).getTime();
            if (b && h && q > p - h)
                return a.clearTimeout(i),
                i = a.setTimeout(v, q),
                void 0;
            h = p;
            for (var s in m)
                if (m.hasOwnProperty(s)) {
                    var w = m[s]
                      , x = w.minw
                      , y = w.maxw
                      , z = null === x
                      , A = null === y
                      , B = "em";
                    x && (x = parseFloat(x) * (x.indexOf(B) > -1 ? j || u() : 1)),
                    y && (y = parseFloat(y) * (y.indexOf(B) > -1 ? j || u() : 1)),
                    w.hasquery && (z && A || !(z || e >= x) || !(A || y >= e)) || (f[w.media] || (f[w.media] = []),
                    f[w.media].push(n[w.rules]))
                }
            for (var C in o)
                o.hasOwnProperty(C) && o[C] && o[C].parentNode === r && r.removeChild(o[C]);
            o.length = 0;
            for (var D in f)
                if (f.hasOwnProperty(D)) {
                    var E = k.createElement("style")
                      , F = f[D].join("\n");
                    E.type = "text/css",
                    E.media = D,
                    r.insertBefore(E, g.nextSibling),
                    E.styleSheet ? E.styleSheet.cssText = F : E.appendChild(k.createTextNode(F)),
                    o.push(E)
                }
        }, w = function(a, b, d) {
            var e = a.replace(c.regex.comments, "").replace(c.regex.keyframes, "").match(c.regex.media)
              , f = e && e.length || 0;
            b = b.substring(0, b.lastIndexOf("/"));
            var h = function(a) {
                return a.replace(c.regex.urls, "$1" + b + "$2$3")
            }
              , i = !f && d;
            b.length && (b += "/"),
            i && (f = 1);
            for (var j = 0; f > j; j++) {
                var k, l, o, p;
                i ? (k = d,
                n.push(h(a))) : (k = e[j].match(c.regex.findStyles) && RegExp.$1,
                n.push(RegExp.$2 && h(RegExp.$2))),
                o = k.split(","),
                p = o.length;
                for (var q = 0; p > q; q++)
                    l = o[q],
                    g(l) || m.push({
                        media: l.split("(")[0].match(c.regex.only) && RegExp.$2 || "all",
                        rules: n.length - 1,
                        hasquery: l.indexOf("(") > -1,
                        minw: l.match(c.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                        maxw: l.match(c.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                    })
            }
            v()
        }, x = function() {
            if (d.length) {
                var b = d.shift();
                f(b.href, function(c) {
                    w(c, b.href, b.media),
                    p[b.href] = !0,
                    a.setTimeout(function() {
                        x()
                    }, 0)
                })
            }
        }, y = function() {
            for (var b = 0; b < t.length; b++) {
                var c = t[b]
                  , e = c.href
                  , f = c.media
                  , g = c.rel && "stylesheet" === c.rel.toLowerCase();
                e && g && !p[e] && (c.styleSheet && c.styleSheet.rawCssText ? (w(c.styleSheet.rawCssText, e, f),
                p[e] = !0) : (!/^([a-zA-Z:]*\/\/)/.test(e) && !s || e.replace(RegExp.$1, "").split("/")[0] === a.location.host) && ("//" === e.substring(0, 2) && (e = a.location.protocol + e),
                d.push({
                    href: e,
                    media: f
                })))
            }
            x()
        };
        y(),
        c.update = y,
        c.getEmValue = u,
        a.addEventListener ? a.addEventListener("resize", b, !1) : a.attachEvent && a.attachEvent("onresize", b)
    }
}(this);

/*!
 * selectivizr v1.0.2 - (c) Keith Clark, freely distributable under the terms of the MIT license.
 * selectivizr.com
 */
(function(j) {
    function A(a) {
        return a.replace(B, h).replace(C, function(a, d, b) {
            for (var a = b.split(","), b = 0, e = a.length; b < e; b++) {
                var s = D(a[b].replace(E, h).replace(F, h)) + o
                  , l = [];
                a[b] = s.replace(G, function(a, b, c, d, e) {
                    if (b) {
                        if (l.length > 0) {
                            var a = l, f, e = s.substring(0, e).replace(H, i);
                            if (e == i || e.charAt(e.length - 1) == o)
                                e += "*";
                            try {
                                f = t(e)
                            } catch (k) {}
                            if (f) {
                                e = 0;
                                for (c = f.length; e < c; e++) {
                                    for (var d = f[e], h = d.className, j = 0, m = a.length; j < m; j++) {
                                        var g = a[j];
                                        if (!RegExp("(^|\\s)" + g.className + "(\\s|$)").test(d.className) && g.b && (g.b === !0 || g.b(d) === !0))
                                            h = u(h, g.className, !0)
                                    }
                                    d.className = h
                                }
                            }
                            l = []
                        }
                        return b
                    } else {
                        if (b = c ? I(c) : !v || v.test(d) ? {
                            className: w(d),
                            b: !0
                        } : null)
                            return l.push(b),
                            "." + b.className;
                        return a
                    }
                })
            }
            return d + a.join(",")
        })
    }
    function I(a) {
        var c = !0, d = w(a.slice(1)), b = a.substring(0, 5) == ":not(", e, f;
        b && (a = a.slice(5, -1));
        var l = a.indexOf("(");
        l > -1 && (a = a.substring(0, l));
        if (a.charAt(0) == ":")
            switch (a.slice(1)) {
            case "root":
                c = function(a) {
                    return b ? a != p : a == p
                }
                ;
                break;
            case "target":
                if (m == 8) {
                    c = function(a) {
                        function c() {
                            var d = location.hash
                              , e = d.slice(1);
                            return b ? d == i || a.id != e : d != i && a.id == e
                        }
                        k(j, "hashchange", function() {
                            g(a, d, c())
                        });
                        return c()
                    }
                    ;
                    break
                }
                return !1;
            case "checked":
                c = function(a) {
                    J.test(a.type) && k(a, "propertychange", function() {
                        event.propertyName == "checked" && g(a, d, a.checked !== b)
                    });
                    return a.checked !== b
                }
                ;
                break;
            case "disabled":
                b = !b;
            case "enabled":
                c = function(c) {
                    if (K.test(c.tagName))
                        return k(c, "propertychange", function() {
                            event.propertyName == "$disabled" && g(c, d, c.a === b)
                        }),
                        q.push(c),
                        c.a = c.disabled,
                        c.disabled === b;
                    return a == ":enabled" ? b : !b
                }
                ;
                break;
            case "focus":
                e = "focus",
                f = "blur";
            case "hover":
                e || (e = "mouseenter",
                f = "mouseleave");
                c = function(a) {
                    k(a, b ? f : e, function() {
                        g(a, d, !0)
                    });
                    k(a, b ? e : f, function() {
                        g(a, d, !1)
                    });
                    return b
                }
                ;
                break;
            default:
                if (!L.test(a))
                    return !1
            }
        return {
            className: d,
            b: c
        }
    }
    function w(a) {
        return M + "-" + (m == 6 && N ? O++ : a.replace(P, function(a) {
            return a.charCodeAt(0)
        }))
    }
    function D(a) {
        return a.replace(x, h).replace(Q, o)
    }
    function g(a, c, d) {
        var b = a.className
          , c = u(b, c, d);
        if (c != b)
            a.className = c,
            a.parentNode.className += i
    }
    function u(a, c, d) {
        var b = RegExp("(^|\\s)" + c + "(\\s|$)")
          , e = b.test(a);
        return d ? e ? a : a + o + c : e ? a.replace(b, h).replace(x, h) : a
    }
    function k(a, c, d) {
        a.attachEvent("on" + c, d)
    }
    function r(a, c) {
        if (/^https?:\/\//i.test(a))
            return c.substring(0, c.indexOf("/", 8)) == a.substring(0, a.indexOf("/", 8)) ? a : null;
        if (a.charAt(0) == "/")
            return c.substring(0, c.indexOf("/", 8)) + a;
        var d = c.split(/[?#]/)[0];
        a.charAt(0) != "?" && d.charAt(d.length - 1) != "/" && (d = d.substring(0, d.lastIndexOf("/") + 1));
        return d + a
    }
    function y(a) {
        if (a)
            return n.open("GET", a, !1),
            n.send(),
            (n.status == 200 ? n.responseText : i).replace(R, i).replace(S, function(c, d, b, e, f) {
                return y(r(b || f, a))
            }).replace(T, function(c, d, b) {
                d = d || i;
                return " url(" + d + r(b, a) + d + ") "
            });
        return i
    }
    function U() {
        var a, c;
        a = f.getElementsByTagName("BASE");
        for (var d = a.length > 0 ? a[0].href : f.location.href, b = 0; b < f.styleSheets.length; b++)
            if (c = f.styleSheets[b],
            c.href != i && (a = r(c.href, d)))
                c.cssText = A(y(a));
        q.length > 0 && setInterval(function() {
            for (var a = 0, c = q.length; a < c; a++) {
                var b = q[a];
                if (b.disabled !== b.a)
                    b.disabled ? (b.disabled = !1,
                    b.a = !0,
                    b.disabled = !0) : b.a = b.disabled
            }
        }, 250)
    }
    if (!/*@cc_on!@*/
    true) {
        var f = document
          , p = f.documentElement
          , n = function() {
            if (j.XMLHttpRequest)
                return new XMLHttpRequest;
            try {
                return new ActiveXObject("Microsoft.XMLHTTP")
            } catch (a) {
                return null
            }
        }()
          , m = /MSIE (\d+)/.exec(navigator.userAgent)[1];
        if (!(f.compatMode != "CSS1Compat" || m < 6 || m > 8 || !n)) {
            var z = {
                NW: "*.Dom.select",
                MooTools: "$$",
                DOMAssistant: "*.$",
                Prototype: "$$",
                YAHOO: "*.util.Selector.query",
                Sizzle: "*",
                jQuery: "*",
                dojo: "*.query"
            }, t, q = [], O = 0, N = !0, M = "slvzr", R = /(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)\s*/g, S = /@import\s*(?:(?:(?:url\(\s*(['"]?)(.*)\1)\s*\))|(?:(['"])(.*)\3))[^;]*;/g, T = /\burl\(\s*(["']?)(?!data:)([^"')]+)\1\s*\)/g, L = /^:(empty|(first|last|only|nth(-last)?)-(child|of-type))$/, B = /:(:first-(?:line|letter))/g, C = /(^|})\s*([^\{]*?[\[:][^{]+)/g, G = /([ +~>])|(:[a-z-]+(?:\(.*?\)+)?)|(\[.*?\])/g, H = /(:not\()?:(hover|enabled|disabled|focus|checked|target|active|visited|first-line|first-letter)\)?/g, P = /[^\w-]/g, K = /^(INPUT|SELECT|TEXTAREA|BUTTON)$/, J = /^(checkbox|radio)$/, v = m > 6 ? /[\$\^*]=(['"])\1/ : null, E = /([(\[+~])\s+/g, F = /\s+([)\]+~])/g, Q = /\s+/g, x = /^\s*((?:[\S\s]*\S)?)\s*$/, i = "", o = " ", h = "$1";
            (function(a, c) {
                function d() {
                    try {
                        p.doScroll("left")
                    } catch (a) {
                        setTimeout(d, 50);
                        return
                    }
                    b("poll")
                }
                function b(d) {
                    if (!(d.type == "readystatechange" && f.readyState != "complete") && ((d.type == "load" ? a : f).detachEvent("on" + d.type, b, !1),
                    !e && (e = !0)))
                        c.call(a, d.type || d)
                }
                var e = !1
                  , g = !0;
                if (f.readyState == "complete")
                    c.call(a, i);
                else {
                    if (f.createEventObject && p.doScroll) {
                        try {
                            g = !a.frameElement
                        } catch (h) {}
                        g && d()
                    }
                    k(f, "readystatechange", b);
                    k(a, "load", b)
                }
            }
            )(j, function() {
                for (var a in z) {
                    var c, d, b = j;
                    if (j[a]) {
                        for (c = z[a].replace("*", a).split("."); (d = c.shift()) && (b = b[d]); )
                            ;
                        if (typeof b == "function") {
                            t = b;
                            U();
                            break
                        }
                    }
                }
            })
        }
    }
}
)(this);