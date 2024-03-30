/*! For license information please see app.js.LICENSE.txt */ 
! function(e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var r = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(i, r, function(t) {
                return e[t]
            }.bind(null, r));
        return i
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n.p = "undefined" != typeof document && document.documentElement.dataset.webpackPublicPath || n.p, n(n.s = 0)
}({
    0: function(e, t, n) {
        e.exports = n("ce4d")
    },
    1157: function(e, t, n) {
        var i;
        ! function(t, n) {
            "use strict";
            "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return n(e)
            } : n(t)
        }("undefined" != typeof window ? window : this, (function(n, r) {
            "use strict";
            var s = [],
                a = Object.getPrototypeOf,
                o = s.slice,
                l = s.flat ? function(e) {
                    return s.flat.call(e)
                } : function(e) {
                    return s.concat.apply([], e)
                },
                d = s.push,
                c = s.indexOf,
                u = {},
                p = u.toString,
                f = u.hasOwnProperty,
                h = f.toString,
                m = h.call(Object),
                g = {},
                v = function(e) {
                    return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
                },
                y = function(e) {
                    return null != e && e === e.window
                },
                b = n.document,
                w = {
                    type: !0,
                    src: !0,
                    nonce: !0,
                    noModule: !0
                };

            function x(e, t, n) {
                var i, r, s = (n = n || b).createElement("script");
                if (s.text = e, t)
                    for (i in w)(r = t[i] || t.getAttribute && t.getAttribute(i)) && s.setAttribute(i, r);
                n.head.appendChild(s).parentNode.removeChild(s)
            }

            function E(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[p.call(e)] || "object" : typeof e
            }
            var T = function(e, t) {
                return new T.fn.init(e, t)
            };

            function C(e) {
                var t = !!e && "length" in e && e.length,
                    n = E(e);
                return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }
            T.fn = T.prototype = {
                jquery: "3.6.0",
                constructor: T,
                length: 0,
                toArray: function() {
                    return o.call(this)
                },
                get: function(e) {
                    return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function(e) {
                    var t = T.merge(this.constructor(), e);
                    return t.prevObject = this, t
                },
                each: function(e) {
                    return T.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(T.map(this, (function(t, n) {
                        return e.call(t, n, t)
                    })))
                },
                slice: function() {
                    return this.pushStack(o.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                even: function() {
                    return this.pushStack(T.grep(this, (function(e, t) {
                        return (t + 1) % 2
                    })))
                },
                odd: function() {
                    return this.pushStack(T.grep(this, (function(e, t) {
                        return t % 2
                    })))
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: d,
                sort: s.sort,
                splice: s.splice
            }, T.extend = T.fn.extend = function() {
                var e, t, n, i, r, s, a = arguments[0] || {},
                    o = 1,
                    l = arguments.length,
                    d = !1;
                for ("boolean" == typeof a && (d = a, a = arguments[o] || {}, o++), "object" == typeof a || v(a) || (a = {}), o === l && (a = this, o--); o < l; o++)
                    if (null != (e = arguments[o]))
                        for (t in e) i = e[t], "__proto__" !== t && a !== i && (d && i && (T.isPlainObject(i) || (r = Array.isArray(i))) ? (n = a[t], s = r && !Array.isArray(n) ? [] : r || T.isPlainObject(n) ? n : {}, r = !1, a[t] = T.extend(d, s, i)) : void 0 !== i && (a[t] = i));
                return a
            }, T.extend({
                expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isPlainObject: function(e) {
                    var t, n;
                    return !(!e || "[object Object]" !== p.call(e)) && (!(t = a(e)) || "function" == typeof(n = f.call(t, "constructor") && t.constructor) && h.call(n) === m)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                globalEval: function(e, t, n) {
                    x(e, {
                        nonce: t && t.nonce
                    }, n)
                },
                each: function(e, t) {
                    var n, i = 0;
                    if (C(e))
                        for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                    else
                        for (i in e)
                            if (!1 === t.call(e[i], i, e[i])) break;
                    return e
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (C(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)), n
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : c.call(t, e, n)
                },
                merge: function(e, t) {
                    for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
                    return e.length = r, e
                },
                grep: function(e, t, n) {
                    for (var i = [], r = 0, s = e.length, a = !n; r < s; r++) !t(e[r], r) !== a && i.push(e[r]);
                    return i
                },
                map: function(e, t, n) {
                    var i, r, s = 0,
                        a = [];
                    if (C(e))
                        for (i = e.length; s < i; s++) null != (r = t(e[s], s, n)) && a.push(r);
                    else
                        for (s in e) null != (r = t(e[s], s, n)) && a.push(r);
                    return l(a)
                },
                guid: 1,
                support: g
            }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = s[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                u["[object " + t + "]"] = t.toLowerCase()
            }));
            var _ = function(e) {
                var t, n, i, r, s, a, o, l, d, c, u, p, f, h, m, g, v, y, b, w = "sizzle" + 1 * new Date,
                    x = e.document,
                    E = 0,
                    T = 0,
                    C = le(),
                    _ = le(),
                    S = le(),
                    k = le(),
                    M = function(e, t) {
                        return e === t && (u = !0), 0
                    },
                    $ = {}.hasOwnProperty,
                    A = [],
                    D = A.pop,
                    P = A.push,
                    N = A.push,
                    O = A.slice,
                    I = function(e, t) {
                        for (var n = 0, i = e.length; n < i; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    j = "[\\x20\\t\\r\\n\\f]",
                    z = "(?:\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                    H = "\\[" + j + "*(" + z + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + j + "*\\]",
                    q = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
                    B = new RegExp(j + "+", "g"),
                    R = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
                    F = new RegExp("^" + j + "*," + j + "*"),
                    W = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
                    X = new RegExp(j + "|>"),
                    Y = new RegExp(q),
                    G = new RegExp("^" + z + "$"),
                    V = {
                        ID: new RegExp("^#(" + z + ")"),
                        CLASS: new RegExp("^\\.(" + z + ")"),
                        TAG: new RegExp("^(" + z + "|[*])"),
                        ATTR: new RegExp("^" + H),
                        PSEUDO: new RegExp("^" + q),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + L + ")$", "i"),
                        needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
                    },
                    U = /HTML$/i,
                    Q = /^(?:input|select|textarea|button)$/i,
                    K = /^h\d$/i,
                    J = /^[^{]+\{\s*\[native \w/,
                    Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ee = /[+~]/,
                    te = new RegExp("\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\([^\\r\\n\\f])", "g"),
                    ne = function(e, t) {
                        var n = "0x" + e.slice(1) - 65536;
                        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                    },
                    ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    re = function(e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    se = function() {
                        p()
                    },
                    ae = we((function(e) {
                        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                    }), {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    N.apply(A = O.call(x.childNodes), x.childNodes), A[x.childNodes.length].nodeType
                } catch (e) {
                    N = {
                        apply: A.length ? function(e, t) {
                            P.apply(e, O.call(t))
                        } : function(e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];);
                            e.length = n - 1
                        }
                    }
                }

                function oe(e, t, i, r) {
                    var s, o, d, c, u, h, v, y = t && t.ownerDocument,
                        x = t ? t.nodeType : 9;
                    if (i = i || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return i;
                    if (!r && (p(t), t = t || f, m)) {
                        if (11 !== x && (u = Z.exec(e)))
                            if (s = u[1]) {
                                if (9 === x) {
                                    if (!(d = t.getElementById(s))) return i;
                                    if (d.id === s) return i.push(d), i
                                } else if (y && (d = y.getElementById(s)) && b(t, d) && d.id === s) return i.push(d), i
                            } else {
                                if (u[2]) return N.apply(i, t.getElementsByTagName(e)), i;
                                if ((s = u[3]) && n.getElementsByClassName && t.getElementsByClassName) return N.apply(i, t.getElementsByClassName(s)), i
                            } if (n.qsa && !k[e + " "] && (!g || !g.test(e)) && (1 !== x || "object" !== t.nodeName.toLowerCase())) {
                            if (v = e, y = t, 1 === x && (X.test(e) || W.test(e))) {
                                for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(ie, re) : t.setAttribute("id", c = w)), o = (h = a(e)).length; o--;) h[o] = (c ? "#" + c : ":scope") + " " + be(h[o]);
                                v = h.join(",")
                            }
                            try {
                                return N.apply(i, y.querySelectorAll(v)), i
                            } catch (t) {
                                k(e, !0)
                            } finally {
                                c === w && t.removeAttribute("id")
                            }
                        }
                    }
                    return l(e.replace(R, "$1"), t, i, r)
                }

                function le() {
                    var e = [];
                    return function t(n, r) {
                        return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
                    }
                }

                function de(e) {
                    return e[w] = !0, e
                }

                function ce(e) {
                    var t = f.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function ue(e, t) {
                    for (var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
                }

                function pe(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function fe(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }

                function he(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function me(e) {
                    return function(t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function ge(e) {
                    return de((function(t) {
                        return t = +t, de((function(n, i) {
                            for (var r, s = e([], n.length, t), a = s.length; a--;) n[r = s[a]] && (n[r] = !(i[r] = n[r]))
                        }))
                    }))
                }

                function ve(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (t in n = oe.support = {}, s = oe.isXML = function(e) {
                        var t = e && e.namespaceURI,
                            n = e && (e.ownerDocument || e).documentElement;
                        return !U.test(t || n && n.nodeName || "HTML")
                    }, p = oe.setDocument = function(e) {
                        var t, r, a = e ? e.ownerDocument || e : x;
                        return a != f && 9 === a.nodeType && a.documentElement ? (h = (f = a).documentElement, m = !s(f), x != f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", se, !1) : r.attachEvent && r.attachEvent("onunload", se)), n.scope = ce((function(e) {
                            return h.appendChild(e).appendChild(f.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                        })), n.attributes = ce((function(e) {
                            return e.className = "i", !e.getAttribute("className")
                        })), n.getElementsByTagName = ce((function(e) {
                            return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
                        })), n.getElementsByClassName = J.test(f.getElementsByClassName), n.getById = ce((function(e) {
                            return h.appendChild(e).id = w, !f.getElementsByName || !f.getElementsByName(w).length
                        })), n.getById ? (i.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }, i.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && m) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }) : (i.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }, i.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && m) {
                                var n, i, r, s = t.getElementById(e);
                                if (s) {
                                    if ((n = s.getAttributeNode("id")) && n.value === e) return [s];
                                    for (r = t.getElementsByName(e), i = 0; s = r[i++];)
                                        if ((n = s.getAttributeNode("id")) && n.value === e) return [s]
                                }
                                return []
                            }
                        }), i.find.TAG = n.getElementsByTagName ? function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                        } : function(e, t) {
                            var n, i = [],
                                r = 0,
                                s = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = s[r++];) 1 === n.nodeType && i.push(n);
                                return i
                            }
                            return s
                        }, i.find.CLASS = n.getElementsByClassName && function(e, t) {
                            if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
                        }, v = [], g = [], (n.qsa = J.test(f.querySelectorAll)) && (ce((function(e) {
                            var t;
                            h.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + j + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + j + "*(?:value|" + L + ")"), e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), (t = f.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[" + j + "*name" + j + "*=" + j + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]"), e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
                        })), ce((function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = f.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + j + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                        }))), (n.matchesSelector = J.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce((function(e) {
                            n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", q)
                        })), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(h.compareDocumentPosition), b = t || J.test(h.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                i = t && t.parentNode;
                            return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, M = t ? function(e, t) {
                            if (e === t) return u = !0, 0;
                            var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == f || e.ownerDocument == x && b(x, e) ? -1 : t == f || t.ownerDocument == x && b(x, t) ? 1 : c ? I(c, e) - I(c, t) : 0 : 4 & i ? -1 : 1)
                        } : function(e, t) {
                            if (e === t) return u = !0, 0;
                            var n, i = 0,
                                r = e.parentNode,
                                s = t.parentNode,
                                a = [e],
                                o = [t];
                            if (!r || !s) return e == f ? -1 : t == f ? 1 : r ? -1 : s ? 1 : c ? I(c, e) - I(c, t) : 0;
                            if (r === s) return pe(e, t);
                            for (n = e; n = n.parentNode;) a.unshift(n);
                            for (n = t; n = n.parentNode;) o.unshift(n);
                            for (; a[i] === o[i];) i++;
                            return i ? pe(a[i], o[i]) : a[i] == x ? -1 : o[i] == x ? 1 : 0
                        }, f) : f
                    }, oe.matches = function(e, t) {
                        return oe(e, null, null, t)
                    }, oe.matchesSelector = function(e, t) {
                        if (p(e), n.matchesSelector && m && !k[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
                            var i = y.call(e, t);
                            if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                        } catch (e) {
                            k(t, !0)
                        }
                        return oe(t, f, null, [e]).length > 0
                    }, oe.contains = function(e, t) {
                        return (e.ownerDocument || e) != f && p(e), b(e, t)
                    }, oe.attr = function(e, t) {
                        (e.ownerDocument || e) != f && p(e);
                        var r = i.attrHandle[t.toLowerCase()],
                            s = r && $.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;
                        return void 0 !== s ? s : n.attributes || !m ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
                    }, oe.escape = function(e) {
                        return (e + "").replace(ie, re)
                    }, oe.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, oe.uniqueSort = function(e) {
                        var t, i = [],
                            r = 0,
                            s = 0;
                        if (u = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(M), u) {
                            for (; t = e[s++];) t === e[s] && (r = i.push(s));
                            for (; r--;) e.splice(i[r], 1)
                        }
                        return c = null, e
                    }, r = oe.getText = function(e) {
                        var t, n = "",
                            i = 0,
                            s = e.nodeType;
                        if (s) {
                            if (1 === s || 9 === s || 11 === s) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                            } else if (3 === s || 4 === s) return e.nodeValue
                        } else
                            for (; t = e[i++];) n += r(t);
                        return n
                    }, (i = oe.selectors = {
                        cacheLength: 50,
                        createPseudo: de,
                        match: V,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Y.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(te, ne).toLowerCase();
                                return "*" === e ? function() {
                                    return !0
                                } : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = C[e + " "];
                                return t || (t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) && C(e, (function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                }))
                            },
                            ATTR: function(e, t, n) {
                                return function(i) {
                                    var r = oe.attr(i, e);
                                    return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function(e, t, n, i, r) {
                                var s = "nth" !== e.slice(0, 3),
                                    a = "last" !== e.slice(-4),
                                    o = "of-type" === t;
                                return 1 === i && 0 === r ? function(e) {
                                    return !!e.parentNode
                                } : function(t, n, l) {
                                    var d, c, u, p, f, h, m = s !== a ? "nextSibling" : "previousSibling",
                                        g = t.parentNode,
                                        v = o && t.nodeName.toLowerCase(),
                                        y = !l && !o,
                                        b = !1;
                                    if (g) {
                                        if (s) {
                                            for (; m;) {
                                                for (p = t; p = p[m];)
                                                    if (o ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                                h = m = "only" === e && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                            for (b = (f = (d = (c = (u = (p = g)[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === E && d[1]) && d[2], p = f && g.childNodes[f]; p = ++f && p && p[m] || (b = f = 0) || h.pop();)
                                                if (1 === p.nodeType && ++b && p === t) {
                                                    c[e] = [E, f, b];
                                                    break
                                                }
                                        } else if (y && (b = f = (d = (c = (u = (p = t)[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === E && d[1]), !1 === b)
                                            for (;
                                                (p = ++f && p && p[m] || (b = f = 0) || h.pop()) && ((o ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && ((c = (u = p[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] = [E, b]), p !== t)););
                                        return (b -= r) === i || b % i == 0 && b / i >= 0
                                    }
                                }
                            },
                            PSEUDO: function(e, t) {
                                var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                                return r[w] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? de((function(e, n) {
                                    for (var i, s = r(e, t), a = s.length; a--;) e[i = I(e, s[a])] = !(n[i] = s[a])
                                })) : function(e) {
                                    return r(e, 0, n)
                                }) : r
                            }
                        },
                        pseudos: {
                            not: de((function(e) {
                                var t = [],
                                    n = [],
                                    i = o(e.replace(R, "$1"));
                                return i[w] ? de((function(e, t, n, r) {
                                    for (var s, a = i(e, null, r, []), o = e.length; o--;)(s = a[o]) && (e[o] = !(t[o] = s))
                                })) : function(e, r, s) {
                                    return t[0] = e, i(t, null, s, n), t[0] = null, !n.pop()
                                }
                            })),
                            has: de((function(e) {
                                return function(t) {
                                    return oe(e, t).length > 0
                                }
                            })),
                            contains: de((function(e) {
                                return e = e.replace(te, ne),
                                    function(t) {
                                        return (t.textContent || r(t)).indexOf(e) > -1
                                    }
                            })),
                            lang: de((function(e) {
                                return G.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                    function(t) {
                                        var n;
                                        do {
                                            if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                        } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            })),
                            target: function(t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === h
                            },
                            focus: function(e) {
                                return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: me(!1),
                            disabled: me(!0),
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !i.pseudos.empty(e)
                            },
                            header: function(e) {
                                return K.test(e.nodeName)
                            },
                            input: function(e) {
                                return Q.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: ge((function() {
                                return [0]
                            })),
                            last: ge((function(e, t) {
                                return [t - 1]
                            })),
                            eq: ge((function(e, t, n) {
                                return [n < 0 ? n + t : n]
                            })),
                            even: ge((function(e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            })),
                            odd: ge((function(e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            })),
                            lt: ge((function(e, t, n) {
                                for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0;) e.push(i);
                                return e
                            })),
                            gt: ge((function(e, t, n) {
                                for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                                return e
                            }))
                        }
                    }).pseudos.nth = i.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) i.pseudos[t] = fe(t);
                for (t in {
                        submit: !0,
                        reset: !0
                    }) i.pseudos[t] = he(t);

                function ye() {}

                function be(e) {
                    for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                    return i
                }

                function we(e, t, n) {
                    var i = t.dir,
                        r = t.next,
                        s = r || i,
                        a = n && "parentNode" === s,
                        o = T++;
                    return t.first ? function(t, n, r) {
                        for (; t = t[i];)
                            if (1 === t.nodeType || a) return e(t, n, r);
                        return !1
                    } : function(t, n, l) {
                        var d, c, u, p = [E, o];
                        if (l) {
                            for (; t = t[i];)
                                if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                        } else
                            for (; t = t[i];)
                                if (1 === t.nodeType || a)
                                    if (c = (u = t[w] || (t[w] = {}))[t.uniqueID] || (u[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                                    else {
                                        if ((d = c[s]) && d[0] === E && d[1] === o) return p[2] = d[2];
                                        if (c[s] = p, p[2] = e(t, n, l)) return !0
                                    } return !1
                    }
                }

                function xe(e) {
                    return e.length > 1 ? function(t, n, i) {
                        for (var r = e.length; r--;)
                            if (!e[r](t, n, i)) return !1;
                        return !0
                    } : e[0]
                }

                function Ee(e, t, n, i, r) {
                    for (var s, a = [], o = 0, l = e.length, d = null != t; o < l; o++)(s = e[o]) && (n && !n(s, i, r) || (a.push(s), d && t.push(o)));
                    return a
                }

                function Te(e, t, n, i, r, s) {
                    return i && !i[w] && (i = Te(i)), r && !r[w] && (r = Te(r, s)), de((function(s, a, o, l) {
                        var d, c, u, p = [],
                            f = [],
                            h = a.length,
                            m = s || function(e, t, n) {
                                for (var i = 0, r = t.length; i < r; i++) oe(e, t[i], n);
                                return n
                            }(t || "*", o.nodeType ? [o] : o, []),
                            g = !e || !s && t ? m : Ee(m, p, e, o, l),
                            v = n ? r || (s ? e : h || i) ? [] : a : g;
                        if (n && n(g, v, o, l), i)
                            for (d = Ee(v, f), i(d, [], o, l), c = d.length; c--;)(u = d[c]) && (v[f[c]] = !(g[f[c]] = u));
                        if (s) {
                            if (r || e) {
                                if (r) {
                                    for (d = [], c = v.length; c--;)(u = v[c]) && d.push(g[c] = u);
                                    r(null, v = [], d, l)
                                }
                                for (c = v.length; c--;)(u = v[c]) && (d = r ? I(s, u) : p[c]) > -1 && (s[d] = !(a[d] = u))
                            }
                        } else v = Ee(v === a ? v.splice(h, v.length) : v), r ? r(null, a, v, l) : N.apply(a, v)
                    }))
                }

                function Ce(e) {
                    for (var t, n, r, s = e.length, a = i.relative[e[0].type], o = a || i.relative[" "], l = a ? 1 : 0, c = we((function(e) {
                            return e === t
                        }), o, !0), u = we((function(e) {
                            return I(t, e) > -1
                        }), o, !0), p = [function(e, n, i) {
                            var r = !a && (i || n !== d) || ((t = n).nodeType ? c(e, n, i) : u(e, n, i));
                            return t = null, r
                        }]; l < s; l++)
                        if (n = i.relative[e[l].type]) p = [we(xe(p), n)];
                        else {
                            if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                                for (r = ++l; r < s && !i.relative[e[r].type]; r++);
                                return Te(l > 1 && xe(p), l > 1 && be(e.slice(0, l - 1).concat({
                                    value: " " === e[l - 2].type ? "*" : ""
                                })).replace(R, "$1"), n, l < r && Ce(e.slice(l, r)), r < s && Ce(e = e.slice(r)), r < s && be(e))
                            }
                            p.push(n)
                        } return xe(p)
                }
                return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, a = oe.tokenize = function(e, t) {
                    var n, r, s, a, o, l, d, c = _[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    for (o = e, l = [], d = i.preFilter; o;) {
                        for (a in n && !(r = F.exec(o)) || (r && (o = o.slice(r[0].length) || o), l.push(s = [])), n = !1, (r = W.exec(o)) && (n = r.shift(), s.push({
                                value: n,
                                type: r[0].replace(R, " ")
                            }), o = o.slice(n.length)), i.filter) !(r = V[a].exec(o)) || d[a] && !(r = d[a](r)) || (n = r.shift(), s.push({
                            value: n,
                            type: a,
                            matches: r
                        }), o = o.slice(n.length));
                        if (!n) break
                    }
                    return t ? o.length : o ? oe.error(e) : _(e, l).slice(0)
                }, o = oe.compile = function(e, t) {
                    var n, r = [],
                        s = [],
                        o = S[e + " "];
                    if (!o) {
                        for (t || (t = a(e)), n = t.length; n--;)(o = Ce(t[n]))[w] ? r.push(o) : s.push(o);
                        (o = S(e, function(e, t) {
                            var n = t.length > 0,
                                r = e.length > 0,
                                s = function(s, a, o, l, c) {
                                    var u, h, g, v = 0,
                                        y = "0",
                                        b = s && [],
                                        w = [],
                                        x = d,
                                        T = s || r && i.find.TAG("*", c),
                                        C = E += null == x ? 1 : Math.random() || .1,
                                        _ = T.length;
                                    for (c && (d = a == f || a || c); y !== _ && null != (u = T[y]); y++) {
                                        if (r && u) {
                                            for (h = 0, a || u.ownerDocument == f || (p(u), o = !m); g = e[h++];)
                                                if (g(u, a || f, o)) {
                                                    l.push(u);
                                                    break
                                                } c && (E = C)
                                        }
                                        n && ((u = !g && u) && v--, s && b.push(u))
                                    }
                                    if (v += y, n && y !== v) {
                                        for (h = 0; g = t[h++];) g(b, w, a, o);
                                        if (s) {
                                            if (v > 0)
                                                for (; y--;) b[y] || w[y] || (w[y] = D.call(l));
                                            w = Ee(w)
                                        }
                                        N.apply(l, w), c && !s && w.length > 0 && v + t.length > 1 && oe.uniqueSort(l)
                                    }
                                    return c && (E = C, d = x), b
                                };
                            return n ? de(s) : s
                        }(s, r))).selector = e
                    }
                    return o
                }, l = oe.select = function(e, t, n, r) {
                    var s, l, d, c, u, p = "function" == typeof e && e,
                        f = !r && a(e = p.selector || e);
                    if (n = n || [], 1 === f.length) {
                        if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (d = l[0]).type && 9 === t.nodeType && m && i.relative[l[1].type]) {
                            if (!(t = (i.find.ID(d.matches[0].replace(te, ne), t) || [])[0])) return n;
                            p && (t = t.parentNode), e = e.slice(l.shift().value.length)
                        }
                        for (s = V.needsContext.test(e) ? 0 : l.length; s-- && (d = l[s], !i.relative[c = d.type]);)
                            if ((u = i.find[c]) && (r = u(d.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                                if (l.splice(s, 1), !(e = r.length && be(l))) return N.apply(n, r), n;
                                break
                            }
                    }
                    return (p || o(e, f))(r, t, !m, n, !t || ee.test(e) && ve(t.parentNode) || t), n
                }, n.sortStable = w.split("").sort(M).join("") === w, n.detectDuplicates = !!u, p(), n.sortDetached = ce((function(e) {
                    return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
                })), ce((function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                })) || ue("type|href|height|width", (function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                })), n.attributes && ce((function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                })) || ue("value", (function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                })), ce((function(e) {
                    return null == e.getAttribute("disabled")
                })) || ue(L, (function(e, t, n) {
                    var i;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                })), oe
            }(n);
            T.find = _, T.expr = _.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = _.uniqueSort, T.text = _.getText, T.isXMLDoc = _.isXML, T.contains = _.contains, T.escapeSelector = _.escape;
            var S = function(e, t, n) {
                    for (var i = [], r = void 0 !== n;
                        (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (r && T(e).is(n)) break;
                            i.push(e)
                        } return i
                },
                k = function(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                },
                M = T.expr.match.needsContext;

            function $(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }
            var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function D(e, t, n) {
                return v(t) ? T.grep(e, (function(e, i) {
                    return !!t.call(e, i, e) !== n
                })) : t.nodeType ? T.grep(e, (function(e) {
                    return e === t !== n
                })) : "string" != typeof t ? T.grep(e, (function(e) {
                    return c.call(t, e) > -1 !== n
                })) : T.filter(t, e, n)
            }
            T.filter = function(e, t, n) {
                var i = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? T.find.matchesSelector(i, e) ? [i] : [] : T.find.matches(e, T.grep(t, (function(e) {
                    return 1 === e.nodeType
                })))
            }, T.fn.extend({
                find: function(e) {
                    var t, n, i = this.length,
                        r = this;
                    if ("string" != typeof e) return this.pushStack(T(e).filter((function() {
                        for (t = 0; t < i; t++)
                            if (T.contains(r[t], this)) return !0
                    })));
                    for (n = this.pushStack([]), t = 0; t < i; t++) T.find(e, r[t], n);
                    return i > 1 ? T.uniqueSort(n) : n
                },
                filter: function(e) {
                    return this.pushStack(D(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(D(this, e || [], !0))
                },
                is: function(e) {
                    return !!D(this, "string" == typeof e && M.test(e) ? T(e) : e || [], !1).length
                }
            });
            var P, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (T.fn.init = function(e, t, n) {
                var i, r;
                if (!e) return this;
                if (n = n || P, "string" == typeof e) {
                    if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : N.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (i[1]) {
                        if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), A.test(i[1]) && T.isPlainObject(t))
                            for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this
                    }
                    return (r = b.getElementById(i[2])) && (this[0] = r, this.length = 1), this
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this)
            }).prototype = T.fn, P = T(b);
            var O = /^(?:parents|prev(?:Until|All))/,
                I = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };

            function L(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e
            }
            T.fn.extend({
                has: function(e) {
                    var t = T(e, this),
                        n = t.length;
                    return this.filter((function() {
                        for (var e = 0; e < n; e++)
                            if (T.contains(this, t[e])) return !0
                    }))
                },
                closest: function(e, t) {
                    var n, i = 0,
                        r = this.length,
                        s = [],
                        a = "string" != typeof e && T(e);
                    if (!M.test(e))
                        for (; i < r; i++)
                            for (n = this[i]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                                    s.push(n);
                                    break
                                } return this.pushStack(s.length > 1 ? T.uniqueSort(s) : s)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? c.call(T(e), this[0]) : c.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), T.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return S(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return S(e, "parentNode", n)
                },
                next: function(e) {
                    return L(e, "nextSibling")
                },
                prev: function(e) {
                    return L(e, "previousSibling")
                },
                nextAll: function(e) {
                    return S(e, "nextSibling")
                },
                prevAll: function(e) {
                    return S(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return S(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return S(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return k((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return k(e.firstChild)
                },
                contents: function(e) {
                    return null != e.contentDocument && a(e.contentDocument) ? e.contentDocument : ($(e, "template") && (e = e.content || e), T.merge([], e.childNodes))
                }
            }, (function(e, t) {
                T.fn[e] = function(n, i) {
                    var r = T.map(this, t, n);
                    return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = T.filter(i, r)), this.length > 1 && (I[e] || T.uniqueSort(r), O.test(e) && r.reverse()), this.pushStack(r)
                }
            }));
            var j = /[^\x20\t\r\n\f]+/g;

            function z(e) {
                return e
            }

            function H(e) {
                throw e
            }

            function q(e, t, n, i) {
                var r;
                try {
                    e && v(r = e.promise) ? r.call(e).done(t).fail(n) : e && v(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
                } catch (e) {
                    n.apply(void 0, [e])
                }
            }
            T.Callbacks = function(e) {
                e = "string" == typeof e ? function(e) {
                    var t = {};
                    return T.each(e.match(j) || [], (function(e, n) {
                        t[n] = !0
                    })), t
                }(e) : T.extend({}, e);
                var t, n, i, r, s = [],
                    a = [],
                    o = -1,
                    l = function() {
                        for (r = r || e.once, i = t = !0; a.length; o = -1)
                            for (n = a.shift(); ++o < s.length;) !1 === s[o].apply(n[0], n[1]) && e.stopOnFalse && (o = s.length, n = !1);
                        e.memory || (n = !1), t = !1, r && (s = n ? [] : "")
                    },
                    d = {
                        add: function() {
                            return s && (n && !t && (o = s.length - 1, a.push(n)), function t(n) {
                                T.each(n, (function(n, i) {
                                    v(i) ? e.unique && d.has(i) || s.push(i) : i && i.length && "string" !== E(i) && t(i)
                                }))
                            }(arguments), n && !t && l()), this
                        },
                        remove: function() {
                            return T.each(arguments, (function(e, t) {
                                for (var n;
                                    (n = T.inArray(t, s, n)) > -1;) s.splice(n, 1), n <= o && o--
                            })), this
                        },
                        has: function(e) {
                            return e ? T.inArray(e, s) > -1 : s.length > 0
                        },
                        empty: function() {
                            return s && (s = []), this
                        },
                        disable: function() {
                            return r = a = [], s = n = "", this
                        },
                        disabled: function() {
                            return !s
                        },
                        lock: function() {
                            return r = a = [], n || t || (s = n = ""), this
                        },
                        locked: function() {
                            return !!r
                        },
                        fireWith: function(e, n) {
                            return r || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || l()), this
                        },
                        fire: function() {
                            return d.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!i
                        }
                    };
                return d
            }, T.extend({
                Deferred: function(e) {
                    var t = [
                            ["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2],
                            ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]
                        ],
                        i = "pending",
                        r = {
                            state: function() {
                                return i
                            },
                            always: function() {
                                return s.done(arguments).fail(arguments), this
                            },
                            catch: function(e) {
                                return r.then(null, e)
                            },
                            pipe: function() {
                                var e = arguments;
                                return T.Deferred((function(n) {
                                    T.each(t, (function(t, i) {
                                        var r = v(e[i[4]]) && e[i[4]];
                                        s[i[1]]((function() {
                                            var e = r && r.apply(this, arguments);
                                            e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [e] : arguments)
                                        }))
                                    })), e = null
                                })).promise()
                            },
                            then: function(e, i, r) {
                                var s = 0;

                                function a(e, t, i, r) {
                                    return function() {
                                        var o = this,
                                            l = arguments,
                                            d = function() {
                                                var n, d;
                                                if (!(e < s)) {
                                                    if ((n = i.apply(o, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                    d = n && ("object" == typeof n || "function" == typeof n) && n.then, v(d) ? r ? d.call(n, a(s, t, z, r), a(s, t, H, r)) : (s++, d.call(n, a(s, t, z, r), a(s, t, H, r), a(s, t, z, t.notifyWith))) : (i !== z && (o = void 0, l = [n]), (r || t.resolveWith)(o, l))
                                                }
                                            },
                                            c = r ? d : function() {
                                                try {
                                                    d()
                                                } catch (n) {
                                                    T.Deferred.exceptionHook && T.Deferred.exceptionHook(n, c.stackTrace), e + 1 >= s && (i !== H && (o = void 0, l = [n]), t.rejectWith(o, l))
                                                }
                                            };
                                        e ? c() : (T.Deferred.getStackHook && (c.stackTrace = T.Deferred.getStackHook()), n.setTimeout(c))
                                    }
                                }
                                return T.Deferred((function(n) {
                                    t[0][3].add(a(0, n, v(r) ? r : z, n.notifyWith)), t[1][3].add(a(0, n, v(e) ? e : z)), t[2][3].add(a(0, n, v(i) ? i : H))
                                })).promise()
                            },
                            promise: function(e) {
                                return null != e ? T.extend(e, r) : r
                            }
                        },
                        s = {};
                    return T.each(t, (function(e, n) {
                        var a = n[2],
                            o = n[5];
                        r[n[1]] = a.add, o && a.add((function() {
                            i = o
                        }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), s[n[0]] = function() {
                            return s[n[0] + "With"](this === s ? void 0 : this, arguments), this
                        }, s[n[0] + "With"] = a.fireWith
                    })), r.promise(s), e && e.call(s, s), s
                },
                when: function(e) {
                    var t = arguments.length,
                        n = t,
                        i = Array(n),
                        r = o.call(arguments),
                        s = T.Deferred(),
                        a = function(e) {
                            return function(n) {
                                i[e] = this, r[e] = arguments.length > 1 ? o.call(arguments) : n, --t || s.resolveWith(i, r)
                            }
                        };
                    if (t <= 1 && (q(e, s.done(a(n)).resolve, s.reject, !t), "pending" === s.state() || v(r[n] && r[n].then))) return s.then();
                    for (; n--;) q(r[n], a(n), s.reject);
                    return s.promise()
                }
            });
            var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            T.Deferred.exceptionHook = function(e, t) {
                n.console && n.console.warn && e && B.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
            }, T.readyException = function(e) {
                n.setTimeout((function() {
                    throw e
                }))
            };
            var R = T.Deferred();

            function F() {
                b.removeEventListener("DOMContentLoaded", F), n.removeEventListener("load", F), T.ready()
            }
            T.fn.ready = function(e) {
                return R.then(e).catch((function(e) {
                    T.readyException(e)
                })), this
            }, T.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                    (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0, !0 !== e && --T.readyWait > 0 || R.resolveWith(b, [T]))
                }
            }), T.ready.then = R.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? n.setTimeout(T.ready) : (b.addEventListener("DOMContentLoaded", F), n.addEventListener("load", F));
            var W = function(e, t, n, i, r, s, a) {
                    var o = 0,
                        l = e.length,
                        d = null == n;
                    if ("object" === E(n))
                        for (o in r = !0, n) W(e, t, o, n[o], !0, s, a);
                    else if (void 0 !== i && (r = !0, v(i) || (a = !0), d && (a ? (t.call(e, i), t = null) : (d = t, t = function(e, t, n) {
                            return d.call(T(e), n)
                        })), t))
                        for (; o < l; o++) t(e[o], n, a ? i : i.call(e[o], o, t(e[o], n)));
                    return r ? e : d ? t.call(e) : l ? t(e[0], n) : s
                },
                X = /^-ms-/,
                Y = /-([a-z])/g;

            function G(e, t) {
                return t.toUpperCase()
            }

            function V(e) {
                return e.replace(X, "ms-").replace(Y, G)
            }
            var U = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };

            function Q() {
                this.expando = T.expando + Q.uid++
            }
            Q.uid = 1, Q.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return t || (t = {}, U(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                },
                set: function(e, t, n) {
                    var i, r = this.cache(e);
                    if ("string" == typeof t) r[V(t)] = n;
                    else
                        for (i in t) r[V(i)] = t[i];
                    return r
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
                },
                access: function(e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                },
                remove: function(e, t) {
                    var n, i = e[this.expando];
                    if (void 0 !== i) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in i ? [t] : t.match(j) || []).length;
                            for (; n--;) delete i[t[n]]
                        }(void 0 === t || T.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !T.isEmptyObject(t)
                }
            };
            var K = new Q,
                J = new Q,
                Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                ee = /[A-Z]/g;

            function te(e, t, n) {
                var i;
                if (void 0 === n && 1 === e.nodeType)
                    if (i = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                        try {
                            n = function(e) {
                                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
                            }(n)
                        } catch (e) {}
                        J.set(e, t, n)
                    } else n = void 0;
                return n
            }
            T.extend({
                hasData: function(e) {
                    return J.hasData(e) || K.hasData(e)
                },
                data: function(e, t, n) {
                    return J.access(e, t, n)
                },
                removeData: function(e, t) {
                    J.remove(e, t)
                },
                _data: function(e, t, n) {
                    return K.access(e, t, n)
                },
                _removeData: function(e, t) {
                    K.remove(e, t)
                }
            }), T.fn.extend({
                data: function(e, t) {
                    var n, i, r, s = this[0],
                        a = s && s.attributes;
                    if (void 0 === e) {
                        if (this.length && (r = J.get(s), 1 === s.nodeType && !K.get(s, "hasDataAttrs"))) {
                            for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = V(i.slice(5)), te(s, i, r[i]));
                            K.set(s, "hasDataAttrs", !0)
                        }
                        return r
                    }
                    return "object" == typeof e ? this.each((function() {
                        J.set(this, e)
                    })) : W(this, (function(t) {
                        var n;
                        if (s && void 0 === t) return void 0 !== (n = J.get(s, e)) || void 0 !== (n = te(s, e)) ? n : void 0;
                        this.each((function() {
                            J.set(this, e, t)
                        }))
                    }), null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each((function() {
                        J.remove(this, e)
                    }))
                }
            }), T.extend({
                queue: function(e, t, n) {
                    var i;
                    if (e) return t = (t || "fx") + "queue", i = K.get(e, t), n && (!i || Array.isArray(n) ? i = K.access(e, t, T.makeArray(n)) : i.push(n)), i || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = T.queue(e, t),
                        i = n.length,
                        r = n.shift(),
                        s = T._queueHooks(e, t);
                    "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete s.stop, r.call(e, (function() {
                        T.dequeue(e, t)
                    }), s)), !i && s && s.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return K.get(e, n) || K.access(e, n, {
                        empty: T.Callbacks("once memory").add((function() {
                            K.remove(e, [t + "queue", n])
                        }))
                    })
                }
            }), T.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? T.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                        var n = T.queue(this, e, t);
                        T._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e)
                    }))
                },
                dequeue: function(e) {
                    return this.each((function() {
                        T.dequeue(this, e)
                    }))
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, i = 1,
                        r = T.Deferred(),
                        s = this,
                        a = this.length,
                        o = function() {
                            --i || r.resolveWith(s, [s])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = K.get(s[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(o));
                    return o(), r.promise(t)
                }
            });
            var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                ie = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
                re = ["Top", "Right", "Bottom", "Left"],
                se = b.documentElement,
                ae = function(e) {
                    return T.contains(e.ownerDocument, e)
                },
                oe = {
                    composed: !0
                };
            se.getRootNode && (ae = function(e) {
                return T.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
            });
            var le = function(e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && ae(e) && "none" === T.css(e, "display")
            };

            function de(e, t, n, i) {
                var r, s, a = 20,
                    o = i ? function() {
                        return i.cur()
                    } : function() {
                        return T.css(e, t, "")
                    },
                    l = o(),
                    d = n && n[3] || (T.cssNumber[t] ? "" : "px"),
                    c = e.nodeType && (T.cssNumber[t] || "px" !== d && +l) && ie.exec(T.css(e, t));
                if (c && c[3] !== d) {
                    for (l /= 2, d = d || c[3], c = +l || 1; a--;) T.style(e, t, c + d), (1 - s) * (1 - (s = o() / l || .5)) <= 0 && (a = 0), c /= s;
                    c *= 2, T.style(e, t, c + d), n = n || []
                }
                return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = d, i.start = c, i.end = r)), r
            }
            var ce = {};

            function ue(e) {
                var t, n = e.ownerDocument,
                    i = e.nodeName,
                    r = ce[i];
                return r || (t = n.body.appendChild(n.createElement(i)), r = T.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), ce[i] = r, r)
            }

            function pe(e, t) {
                for (var n, i, r = [], s = 0, a = e.length; s < a; s++)(i = e[s]).style && (n = i.style.display, t ? ("none" === n && (r[s] = K.get(i, "display") || null, r[s] || (i.style.display = "")), "" === i.style.display && le(i) && (r[s] = ue(i))) : "none" !== n && (r[s] = "none", K.set(i, "display", n)));
                for (s = 0; s < a; s++) null != r[s] && (e[s].style.display = r[s]);
                return e
            }
            T.fn.extend({
                show: function() {
                    return pe(this, !0)
                },
                hide: function() {
                    return pe(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                        le(this) ? T(this).show() : T(this).hide()
                    }))
                }
            });
            var fe, he, me = /^(?:checkbox|radio)$/i,
                ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                ve = /^$|^module$|\/(?:java|ecma)script/i;
            fe = b.createDocumentFragment().appendChild(b.createElement("div")), (he = b.createElement("input")).setAttribute("type", "radio"), he.setAttribute("checked", "checked"), he.setAttribute("name", "t"), fe.appendChild(he), g.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue, fe.innerHTML = "<option></option>", g.option = !!fe.lastChild;
            var ye = {
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

            function be(e, t) {
                var n;
                return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && $(e, t) ? T.merge([e], n) : n
            }

            function we(e, t) {
                for (var n = 0, i = e.length; n < i; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
            }
            ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td, g.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]);
            var xe = /<|&#?\w+;/;

            function Ee(e, t, n, i, r) {
                for (var s, a, o, l, d, c, u = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
                    if ((s = e[f]) || 0 === s)
                        if ("object" === E(s)) T.merge(p, s.nodeType ? [s] : s);
                        else if (xe.test(s)) {
                    for (a = a || u.appendChild(t.createElement("div")), o = (ge.exec(s) || ["", ""])[1].toLowerCase(), l = ye[o] || ye._default, a.innerHTML = l[1] + T.htmlPrefilter(s) + l[2], c = l[0]; c--;) a = a.lastChild;
                    T.merge(p, a.childNodes), (a = u.firstChild).textContent = ""
                } else p.push(t.createTextNode(s));
                for (u.textContent = "", f = 0; s = p[f++];)
                    if (i && T.inArray(s, i) > -1) r && r.push(s);
                    else if (d = ae(s), a = be(u.appendChild(s), "script"), d && we(a), n)
                    for (c = 0; s = a[c++];) ve.test(s.type || "") && n.push(s);
                return u
            }
            var Te = /^([^.]*)(?:\.(.+)|)/;

            function Ce() {
                return !0
            }

            function _e() {
                return !1
            }

            function Se(e, t) {
                return e === function() {
                    try {
                        return b.activeElement
                    } catch (e) {}
                }() == ("focus" === t)
            }

            function ke(e, t, n, i, r, s) {
                var a, o;
                if ("object" == typeof t) {
                    for (o in "string" != typeof n && (i = i || n, n = void 0), t) ke(e, o, n, i, t[o], s);
                    return e
                }
                if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = _e;
                else if (!r) return e;
                return 1 === s && (a = r, (r = function(e) {
                    return T().off(e), a.apply(this, arguments)
                }).guid = a.guid || (a.guid = T.guid++)), e.each((function() {
                    T.event.add(this, t, r, i, n)
                }))
            }

            function Me(e, t, n) {
                n ? (K.set(e, t, !1), T.event.add(e, t, {
                    namespace: !1,
                    handler: function(e) {
                        var i, r, s = K.get(this, t);
                        if (1 & e.isTrigger && this[t]) {
                            if (s.length)(T.event.special[t] || {}).delegateType && e.stopPropagation();
                            else if (s = o.call(arguments), K.set(this, t, s), i = n(this, t), this[t](), s !== (r = K.get(this, t)) || i ? K.set(this, t, !1) : r = {}, s !== r) return e.stopImmediatePropagation(), e.preventDefault(), r && r.value
                        } else s.length && (K.set(this, t, {
                            value: T.event.trigger(T.extend(s[0], T.Event.prototype), s.slice(1), this)
                        }), e.stopImmediatePropagation())
                    }
                })) : void 0 === K.get(e, t) && T.event.add(e, t, Ce)
            }
            T.event = {
                global: {},
                add: function(e, t, n, i, r) {
                    var s, a, o, l, d, c, u, p, f, h, m, g = K.get(e);
                    if (U(e))
                        for (n.handler && (n = (s = n).handler, r = s.selector), r && T.find.matchesSelector(se, r), n.guid || (n.guid = T.guid++), (l = g.events) || (l = g.events = Object.create(null)), (a = g.handle) || (a = g.handle = function(t) {
                                return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0
                            }), d = (t = (t || "").match(j) || [""]).length; d--;) f = m = (o = Te.exec(t[d]) || [])[1], h = (o[2] || "").split(".").sort(), f && (u = T.event.special[f] || {}, f = (r ? u.delegateType : u.bindType) || f, u = T.event.special[f] || {}, c = T.extend({
                            type: f,
                            origType: m,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: r,
                            needsContext: r && T.expr.match.needsContext.test(r),
                            namespace: h.join(".")
                        }, s), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, h, a) || e.addEventListener && e.addEventListener(f, a)), u.add && (u.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, c) : p.push(c), T.event.global[f] = !0)
                },
                remove: function(e, t, n, i, r) {
                    var s, a, o, l, d, c, u, p, f, h, m, g = K.hasData(e) && K.get(e);
                    if (g && (l = g.events)) {
                        for (d = (t = (t || "").match(j) || [""]).length; d--;)
                            if (f = m = (o = Te.exec(t[d]) || [])[1], h = (o[2] || "").split(".").sort(), f) {
                                for (u = T.event.special[f] || {}, p = l[f = (i ? u.delegateType : u.bindType) || f] || [], o = o[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = p.length; s--;) c = p[s], !r && m !== c.origType || n && n.guid !== c.guid || o && !o.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (p.splice(s, 1), c.selector && p.delegateCount--, u.remove && u.remove.call(e, c));
                                a && !p.length && (u.teardown && !1 !== u.teardown.call(e, h, g.handle) || T.removeEvent(e, f, g.handle), delete l[f])
                            } else
                                for (f in l) T.event.remove(e, f + t[d], n, i, !0);
                        T.isEmptyObject(l) && K.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t, n, i, r, s, a, o = new Array(arguments.length),
                        l = T.event.fix(e),
                        d = (K.get(this, "events") || Object.create(null))[l.type] || [],
                        c = T.event.special[l.type] || {};
                    for (o[0] = l, t = 1; t < arguments.length; t++) o[t] = arguments[t];
                    if (l.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
                        for (a = T.event.handlers.call(this, l, d), t = 0;
                            (r = a[t++]) && !l.isPropagationStopped();)
                            for (l.currentTarget = r.elem, n = 0;
                                (s = r.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== s.namespace && !l.rnamespace.test(s.namespace) || (l.handleObj = s, l.data = s.data, void 0 !== (i = ((T.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, o)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, l), l.result
                    }
                },
                handlers: function(e, t) {
                    var n, i, r, s, a, o = [],
                        l = t.delegateCount,
                        d = e.target;
                    if (l && d.nodeType && !("click" === e.type && e.button >= 1))
                        for (; d !== this; d = d.parentNode || this)
                            if (1 === d.nodeType && ("click" !== e.type || !0 !== d.disabled)) {
                                for (s = [], a = {}, n = 0; n < l; n++) void 0 === a[r = (i = t[n]).selector + " "] && (a[r] = i.needsContext ? T(r, this).index(d) > -1 : T.find(r, this, null, [d]).length), a[r] && s.push(i);
                                s.length && o.push({
                                    elem: d,
                                    handlers: s
                                })
                            } return d = this, l < t.length && o.push({
                        elem: d,
                        handlers: t.slice(l)
                    }), o
                },
                addProp: function(e, t) {
                    Object.defineProperty(T.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: v(t) ? function() {
                            if (this.originalEvent) return t(this.originalEvent)
                        } : function() {
                            if (this.originalEvent) return this.originalEvent[e]
                        },
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function(e) {
                    return e[T.expando] ? e : new T.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        setup: function(e) {
                            var t = this || e;
                            return me.test(t.type) && t.click && $(t, "input") && Me(t, "click", Ce), !1
                        },
                        trigger: function(e) {
                            var t = this || e;
                            return me.test(t.type) && t.click && $(t, "input") && Me(t, "click"), !0
                        },
                        _default: function(e) {
                            var t = e.target;
                            return me.test(t.type) && t.click && $(t, "input") && K.get(t, "click") || $(t, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, T.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }, T.Event = function(e, t) {
                if (!(this instanceof T.Event)) return new T.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : _e, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && T.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[T.expando] = !0
            }, T.Event.prototype = {
                constructor: T.Event,
                isDefaultPrevented: _e,
                isPropagationStopped: _e,
                isImmediatePropagationStopped: _e,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, T.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0
            }, T.event.addProp), T.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(e, t) {
                T.event.special[e] = {
                    setup: function() {
                        return Me(this, e, Se), !1
                    },
                    trigger: function() {
                        return Me(this, e), !0
                    },
                    _default: function() {
                        return !0
                    },
                    delegateType: t
                }
            })), T.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, (function(e, t) {
                T.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, i = this,
                            r = e.relatedTarget,
                            s = e.handleObj;
                        return r && (r === i || T.contains(i, r)) || (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n
                    }
                }
            })), T.fn.extend({
                on: function(e, t, n, i) {
                    return ke(this, e, t, n, i)
                },
                one: function(e, t, n, i) {
                    return ke(this, e, t, n, i, 1)
                },
                off: function(e, t, n) {
                    var i, r;
                    if (e && e.preventDefault && e.handleObj) return i = e.handleObj, T(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if ("object" == typeof e) {
                        for (r in e) this.off(r, t, e[r]);
                        return this
                    }
                    return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = _e), this.each((function() {
                        T.event.remove(this, e, n, t)
                    }))
                }
            });
            var $e = /<script|<style|<link/i,
                Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
                De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function Pe(e, t) {
                return $(e, "table") && $(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e
            }

            function Ne(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function Oe(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
            }

            function Ie(e, t) {
                var n, i, r, s, a, o;
                if (1 === t.nodeType) {
                    if (K.hasData(e) && (o = K.get(e).events))
                        for (r in K.remove(t, "handle events"), o)
                            for (n = 0, i = o[r].length; n < i; n++) T.event.add(t, r, o[r][n]);
                    J.hasData(e) && (s = J.access(e), a = T.extend({}, s), J.set(t, a))
                }
            }

            function Le(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && me.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }

            function je(e, t, n, i) {
                t = l(t);
                var r, s, a, o, d, c, u = 0,
                    p = e.length,
                    f = p - 1,
                    h = t[0],
                    m = v(h);
                if (m || p > 1 && "string" == typeof h && !g.checkClone && Ae.test(h)) return e.each((function(r) {
                    var s = e.eq(r);
                    m && (t[0] = h.call(this, r, s.html())), je(s, t, n, i)
                }));
                if (p && (s = (r = Ee(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = s), s || i)) {
                    for (o = (a = T.map(be(r, "script"), Ne)).length; u < p; u++) d = r, u !== f && (d = T.clone(d, !0, !0), o && T.merge(a, be(d, "script"))), n.call(e[u], d, u);
                    if (o)
                        for (c = a[a.length - 1].ownerDocument, T.map(a, Oe), u = 0; u < o; u++) d = a[u], ve.test(d.type || "") && !K.access(d, "globalEval") && T.contains(c, d) && (d.src && "module" !== (d.type || "").toLowerCase() ? T._evalUrl && !d.noModule && T._evalUrl(d.src, {
                            nonce: d.nonce || d.getAttribute("nonce")
                        }, c) : x(d.textContent.replace(De, ""), d, c))
                }
                return e
            }

            function ze(e, t, n) {
                for (var i, r = t ? T.filter(t, e) : e, s = 0; null != (i = r[s]); s++) n || 1 !== i.nodeType || T.cleanData(be(i)), i.parentNode && (n && ae(i) && we(be(i, "script")), i.parentNode.removeChild(i));
                return e
            }
            T.extend({
                htmlPrefilter: function(e) {
                    return e
                },
                clone: function(e, t, n) {
                    var i, r, s, a, o = e.cloneNode(!0),
                        l = ae(e);
                    if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e)))
                        for (a = be(o), i = 0, r = (s = be(e)).length; i < r; i++) Le(s[i], a[i]);
                    if (t)
                        if (n)
                            for (s = s || be(e), a = a || be(o), i = 0, r = s.length; i < r; i++) Ie(s[i], a[i]);
                        else Ie(e, o);
                    return (a = be(o, "script")).length > 0 && we(a, !l && be(e, "script")), o
                },
                cleanData: function(e) {
                    for (var t, n, i, r = T.event.special, s = 0; void 0 !== (n = e[s]); s++)
                        if (U(n)) {
                            if (t = n[K.expando]) {
                                if (t.events)
                                    for (i in t.events) r[i] ? T.event.remove(n, i) : T.removeEvent(n, i, t.handle);
                                n[K.expando] = void 0
                            }
                            n[J.expando] && (n[J.expando] = void 0)
                        }
                }
            }), T.fn.extend({
                detach: function(e) {
                    return ze(this, e, !0)
                },
                remove: function(e) {
                    return ze(this, e)
                },
                text: function(e) {
                    return W(this, (function(e) {
                        return void 0 === e ? T.text(this) : this.empty().each((function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        }))
                    }), null, e, arguments.length)
                },
                append: function() {
                    return je(this, arguments, (function(e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Pe(this, e).appendChild(e)
                    }))
                },
                prepend: function() {
                    return je(this, arguments, (function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = Pe(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    }))
                },
                before: function() {
                    return je(this, arguments, (function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    }))
                },
                after: function() {
                    return je(this, arguments, (function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    }))
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (T.cleanData(be(e, !1)), e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map((function() {
                        return T.clone(this, e, t)
                    }))
                },
                html: function(e) {
                    return W(this, (function(e) {
                        var t = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !$e.test(e) && !ye[(ge.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = T.htmlPrefilter(e);
                            try {
                                for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (T.cleanData(be(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }), null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return je(this, arguments, (function(t) {
                        var n = this.parentNode;
                        T.inArray(this, e) < 0 && (T.cleanData(be(this)), n && n.replaceChild(t, this))
                    }), e)
                }
            }), T.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, (function(e, t) {
                T.fn[e] = function(e) {
                    for (var n, i = [], r = T(e), s = r.length - 1, a = 0; a <= s; a++) n = a === s ? this : this.clone(!0), T(r[a])[t](n), d.apply(i, n.get());
                    return this.pushStack(i)
                }
            }));
            var He = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
                qe = function(e) {
                    var t = e.ownerDocument.defaultView;
                    return t && t.opener || (t = n), t.getComputedStyle(e)
                },
                Be = function(e, t, n) {
                    var i, r, s = {};
                    for (r in t) s[r] = e.style[r], e.style[r] = t[r];
                    for (r in i = n.call(e), t) e.style[r] = s[r];
                    return i
                },
                Re = new RegExp(re.join("|"), "i");

            function Fe(e, t, n) {
                var i, r, s, a, o = e.style;
                return (n = n || qe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ae(e) || (a = T.style(e, t)), !g.pixelBoxStyles() && He.test(a) && Re.test(t) && (i = o.width, r = o.minWidth, s = o.maxWidth, o.minWidth = o.maxWidth = o.width = a, a = n.width, o.width = i, o.minWidth = r, o.maxWidth = s)), void 0 !== a ? a + "" : a
            }

            function We(e, t) {
                return {
                    get: function() {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }! function() {
                function e() {
                    if (c) {
                        d.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", se.appendChild(d).appendChild(c);
                        var e = n.getComputedStyle(c);
                        i = "1%" !== e.top, l = 12 === t(e.marginLeft), c.style.right = "60%", a = 36 === t(e.right), r = 36 === t(e.width), c.style.position = "absolute", s = 12 === t(c.offsetWidth / 3), se.removeChild(d), c = null
                    }
                }

                function t(e) {
                    return Math.round(parseFloat(e))
                }
                var i, r, s, a, o, l, d = b.createElement("div"),
                    c = b.createElement("div");
                c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === c.style.backgroundClip, T.extend(g, {
                    boxSizingReliable: function() {
                        return e(), r
                    },
                    pixelBoxStyles: function() {
                        return e(), a
                    },
                    pixelPosition: function() {
                        return e(), i
                    },
                    reliableMarginLeft: function() {
                        return e(), l
                    },
                    scrollboxSize: function() {
                        return e(), s
                    },
                    reliableTrDimensions: function() {
                        var e, t, i, r;
                        return null == o && (e = b.createElement("table"), t = b.createElement("tr"), i = b.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", i.style.height = "9px", i.style.display = "block", se.appendChild(e).appendChild(t).appendChild(i), r = n.getComputedStyle(t), o = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, se.removeChild(e)), o
                    }
                }))
            }();
            var Xe = ["Webkit", "Moz", "ms"],
                Ye = b.createElement("div").style,
                Ge = {};

            function Ve(e) {
                var t = T.cssProps[e] || Ge[e];
                return t || (e in Ye ? e : Ge[e] = function(e) {
                    for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--;)
                        if ((e = Xe[n] + t) in Ye) return e
                }(e) || e)
            }
            var Ue = /^(none|table(?!-c[ea]).+)/,
                Qe = /^--/,
                Ke = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Je = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };

            function Ze(e, t, n) {
                var i = ie.exec(t);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
            }

            function et(e, t, n, i, r, s) {
                var a = "width" === t ? 1 : 0,
                    o = 0,
                    l = 0;
                if (n === (i ? "border" : "content")) return 0;
                for (; a < 4; a += 2) "margin" === n && (l += T.css(e, n + re[a], !0, r)), i ? ("content" === n && (l -= T.css(e, "padding" + re[a], !0, r)), "margin" !== n && (l -= T.css(e, "border" + re[a] + "Width", !0, r))) : (l += T.css(e, "padding" + re[a], !0, r), "padding" !== n ? l += T.css(e, "border" + re[a] + "Width", !0, r) : o += T.css(e, "border" + re[a] + "Width", !0, r));
                return !i && s >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - l - o - .5)) || 0), l
            }

            function tt(e, t, n) {
                var i = qe(e),
                    r = (!g.boxSizingReliable() || n) && "border-box" === T.css(e, "boxSizing", !1, i),
                    s = r,
                    a = Fe(e, t, i),
                    o = "offset" + t[0].toUpperCase() + t.slice(1);
                if (He.test(a)) {
                    if (!n) return a;
                    a = "auto"
                }
                return (!g.boxSizingReliable() && r || !g.reliableTrDimensions() && $(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === T.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === T.css(e, "boxSizing", !1, i), (s = o in e) && (a = e[o])), (a = parseFloat(a) || 0) + et(e, t, n || (r ? "border" : "content"), s, i, a) + "px"
            }

            function nt(e, t, n, i, r) {
                return new nt.prototype.init(e, t, n, i, r)
            }
            T.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = Fe(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function(e, t, n, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var r, s, a, o = V(t),
                            l = Qe.test(t),
                            d = e.style;
                        if (l || (t = Ve(o)), a = T.cssHooks[t] || T.cssHooks[o], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : d[t];
                        "string" === (s = typeof n) && (r = ie.exec(n)) && r[1] && (n = de(e, t, r), s = "number"), null != n && n == n && ("number" !== s || l || (n += r && r[3] || (T.cssNumber[o] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (d[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l ? d.setProperty(t, n) : d[t] = n))
                    }
                },
                css: function(e, t, n, i) {
                    var r, s, a, o = V(t);
                    return Qe.test(t) || (t = Ve(o)), (a = T.cssHooks[t] || T.cssHooks[o]) && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = Fe(e, t, i)), "normal" === r && t in Je && (r = Je[t]), "" === n || n ? (s = parseFloat(r), !0 === n || isFinite(s) ? s || 0 : r) : r
                }
            }), T.each(["height", "width"], (function(e, t) {
                T.cssHooks[t] = {
                    get: function(e, n, i) {
                        if (n) return !Ue.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, t, i) : Be(e, Ke, (function() {
                            return tt(e, t, i)
                        }))
                    },
                    set: function(e, n, i) {
                        var r, s = qe(e),
                            a = !g.scrollboxSize() && "absolute" === s.position,
                            o = (a || i) && "border-box" === T.css(e, "boxSizing", !1, s),
                            l = i ? et(e, t, i, o, s) : 0;
                        return o && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(s[t]) - et(e, t, "border", !1, s) - .5)), l && (r = ie.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = T.css(e, t)), Ze(0, n, l)
                    }
                }
            })), T.cssHooks.marginLeft = We(g.reliableMarginLeft, (function(e, t) {
                if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {
                    marginLeft: 0
                }, (function() {
                    return e.getBoundingClientRect().left
                }))) + "px"
            })), T.each({
                margin: "",
                padding: "",
                border: "Width"
            }, (function(e, t) {
                T.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + re[i] + t] = s[i] || s[i - 2] || s[0];
                        return r
                    }
                }, "margin" !== e && (T.cssHooks[e + t].set = Ze)
            })), T.fn.extend({
                css: function(e, t) {
                    return W(this, (function(e, t, n) {
                        var i, r, s = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (i = qe(e), r = t.length; a < r; a++) s[t[a]] = T.css(e, t[a], !1, i);
                            return s
                        }
                        return void 0 !== n ? T.style(e, t, n) : T.css(e, t)
                    }), e, t, arguments.length > 1)
                }
            }), T.Tween = nt, nt.prototype = {
                constructor: nt,
                init: function(e, t, n, i, r, s) {
                    this.elem = e, this.prop = n, this.easing = r || T.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = s || (T.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = nt.propHooks[this.prop];
                    return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = nt.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this
                }
            }, nt.prototype.init.prototype = nt.prototype, nt.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    },
                    set: function(e) {
                        T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !T.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }, nt.propHooks.scrollTop = nt.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, T.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            }, T.fx = nt.prototype.init, T.fx.step = {};
            var it, rt, st = /^(?:toggle|show|hide)$/,
                at = /queueHooks$/;

            function ot() {
                rt && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ot) : n.setTimeout(ot, T.fx.interval), T.fx.tick())
            }

            function lt() {
                return n.setTimeout((function() {
                    it = void 0
                })), it = Date.now()
            }

            function dt(e, t) {
                var n, i = 0,
                    r = {
                        height: e
                    };
                for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = re[i])] = r["padding" + n] = e;
                return t && (r.opacity = r.width = e), r
            }

            function ct(e, t, n) {
                for (var i, r = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), s = 0, a = r.length; s < a; s++)
                    if (i = r[s].call(n, t, e)) return i
            }

            function ut(e, t, n) {
                var i, r, s = 0,
                    a = ut.prefilters.length,
                    o = T.Deferred().always((function() {
                        delete l.elem
                    })),
                    l = function() {
                        if (r) return !1;
                        for (var t = it || lt(), n = Math.max(0, d.startTime + d.duration - t), i = 1 - (n / d.duration || 0), s = 0, a = d.tweens.length; s < a; s++) d.tweens[s].run(i);
                        return o.notifyWith(e, [d, i, n]), i < 1 && a ? n : (a || o.notifyWith(e, [d, 1, 0]), o.resolveWith(e, [d]), !1)
                    },
                    d = o.promise({
                        elem: e,
                        props: T.extend({}, t),
                        opts: T.extend(!0, {
                            specialEasing: {},
                            easing: T.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: it || lt(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var i = T.Tween(e, d.opts, t, n, d.opts.specialEasing[t] || d.opts.easing);
                            return d.tweens.push(i), i
                        },
                        stop: function(t) {
                            var n = 0,
                                i = t ? d.tweens.length : 0;
                            if (r) return this;
                            for (r = !0; n < i; n++) d.tweens[n].run(1);
                            return t ? (o.notifyWith(e, [d, 1, 0]), o.resolveWith(e, [d, t])) : o.rejectWith(e, [d, t]), this
                        }
                    }),
                    c = d.props;
                for (! function(e, t) {
                        var n, i, r, s, a;
                        for (n in e)
                            if (r = t[i = V(n)], s = e[n], Array.isArray(s) && (r = s[1], s = e[n] = s[0]), n !== i && (e[i] = s, delete e[n]), (a = T.cssHooks[i]) && "expand" in a)
                                for (n in s = a.expand(s), delete e[i], s) n in e || (e[n] = s[n], t[n] = r);
                            else t[i] = r
                    }(c, d.opts.specialEasing); s < a; s++)
                    if (i = ut.prefilters[s].call(d, e, c, d.opts)) return v(i.stop) && (T._queueHooks(d.elem, d.opts.queue).stop = i.stop.bind(i)), i;
                return T.map(c, ct, d), v(d.opts.start) && d.opts.start.call(e, d), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always), T.fx.timer(T.extend(l, {
                    elem: e,
                    anim: d,
                    queue: d.opts.queue
                })), d
            }
            T.Animation = T.extend(ut, {
                    tweeners: {
                        "*": [function(e, t) {
                            var n = this.createTween(e, t);
                            return de(n.elem, e, ie.exec(t), n), n
                        }]
                    },
                    tweener: function(e, t) {
                        v(e) ? (t = e, e = ["*"]) : e = e.match(j);
                        for (var n, i = 0, r = e.length; i < r; i++) n = e[i], ut.tweeners[n] = ut.tweeners[n] || [], ut.tweeners[n].unshift(t)
                    },
                    prefilters: [function(e, t, n) {
                        var i, r, s, a, o, l, d, c, u = "width" in t || "height" in t,
                            p = this,
                            f = {},
                            h = e.style,
                            m = e.nodeType && le(e),
                            g = K.get(e, "fxshow");
                        for (i in n.queue || (null == (a = T._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, o = a.empty.fire, a.empty.fire = function() {
                                a.unqueued || o()
                            }), a.unqueued++, p.always((function() {
                                p.always((function() {
                                    a.unqueued--, T.queue(e, "fx").length || a.empty.fire()
                                }))
                            }))), t)
                            if (r = t[i], st.test(r)) {
                                if (delete t[i], s = s || "toggle" === r, r === (m ? "hide" : "show")) {
                                    if ("show" !== r || !g || void 0 === g[i]) continue;
                                    m = !0
                                }
                                f[i] = g && g[i] || T.style(e, i)
                            } if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(f))
                            for (i in u && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (d = g && g.display) && (d = K.get(e, "display")), "none" === (c = T.css(e, "display")) && (d ? c = d : (pe([e], !0), d = e.style.display || d, c = T.css(e, "display"), pe([e]))), ("inline" === c || "inline-block" === c && null != d) && "none" === T.css(e, "float") && (l || (p.done((function() {
                                    h.display = d
                                })), null == d && (c = h.display, d = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always((function() {
                                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                                }))), l = !1, f) l || (g ? "hidden" in g && (m = g.hidden) : g = K.access(e, "fxshow", {
                                display: d
                            }), s && (g.hidden = !m), m && pe([e], !0), p.done((function() {
                                for (i in m || pe([e]), K.remove(e, "fxshow"), f) T.style(e, i, f[i])
                            }))), l = ct(m ? g[i] : 0, i, p), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
                    }],
                    prefilter: function(e, t) {
                        t ? ut.prefilters.unshift(e) : ut.prefilters.push(e)
                    }
                }), T.speed = function(e, t, n) {
                    var i = e && "object" == typeof e ? T.extend({}, e) : {
                        complete: n || !n && t || v(e) && e,
                        duration: e,
                        easing: n && t || t && !v(t) && t
                    };
                    return T.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in T.fx.speeds ? i.duration = T.fx.speeds[i.duration] : i.duration = T.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                        v(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue)
                    }, i
                }, T.fn.extend({
                    fadeTo: function(e, t, n, i) {
                        return this.filter(le).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, i)
                    },
                    animate: function(e, t, n, i) {
                        var r = T.isEmptyObject(e),
                            s = T.speed(t, n, i),
                            a = function() {
                                var t = ut(this, T.extend({}, e), s);
                                (r || K.get(this, "finish")) && t.stop(!0)
                            };
                        return a.finish = a, r || !1 === s.queue ? this.each(a) : this.queue(s.queue, a)
                    },
                    stop: function(e, t, n) {
                        var i = function(e) {
                            var t = e.stop;
                            delete e.stop, t(n)
                        };
                        return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
                            var t = !0,
                                r = null != e && e + "queueHooks",
                                s = T.timers,
                                a = K.get(this);
                            if (r) a[r] && a[r].stop && i(a[r]);
                            else
                                for (r in a) a[r] && a[r].stop && at.test(r) && i(a[r]);
                            for (r = s.length; r--;) s[r].elem !== this || null != e && s[r].queue !== e || (s[r].anim.stop(n), t = !1, s.splice(r, 1));
                            !t && n || T.dequeue(this, e)
                        }))
                    },
                    finish: function(e) {
                        return !1 !== e && (e = e || "fx"), this.each((function() {
                            var t, n = K.get(this),
                                i = n[e + "queue"],
                                r = n[e + "queueHooks"],
                                s = T.timers,
                                a = i ? i.length : 0;
                            for (n.finish = !0, T.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                            for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                            delete n.finish
                        }))
                    }
                }), T.each(["toggle", "show", "hide"], (function(e, t) {
                    var n = T.fn[t];
                    T.fn[t] = function(e, i, r) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(dt(t, !0), e, i, r)
                    }
                })), T.each({
                    slideDown: dt("show"),
                    slideUp: dt("hide"),
                    slideToggle: dt("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, (function(e, t) {
                    T.fn[e] = function(e, n, i) {
                        return this.animate(t, e, n, i)
                    }
                })), T.timers = [], T.fx.tick = function() {
                    var e, t = 0,
                        n = T.timers;
                    for (it = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || T.fx.stop(), it = void 0
                }, T.fx.timer = function(e) {
                    T.timers.push(e), T.fx.start()
                }, T.fx.interval = 13, T.fx.start = function() {
                    rt || (rt = !0, ot())
                }, T.fx.stop = function() {
                    rt = null
                }, T.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, T.fn.delay = function(e, t) {
                    return e = T.fx && T.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, i) {
                        var r = n.setTimeout(t, e);
                        i.stop = function() {
                            n.clearTimeout(r)
                        }
                    }))
                },
                function() {
                    var e = b.createElement("input"),
                        t = b.createElement("select").appendChild(b.createElement("option"));
                    e.type = "checkbox", g.checkOn = "" !== e.value, g.optSelected = t.selected, (e = b.createElement("input")).value = "t", e.type = "radio", g.radioValue = "t" === e.value
                }();
            var pt, ft = T.expr.attrHandle;
            T.fn.extend({
                attr: function(e, t) {
                    return W(this, T.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each((function() {
                        T.removeAttr(this, e)
                    }))
                }
            }), T.extend({
                attr: function(e, t, n) {
                    var i, r, s = e.nodeType;
                    if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === s && T.isXMLDoc(e) || (r = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void T.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = T.find.attr(e, t)) ? void 0 : i)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!g.radioValue && "radio" === t && $(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, i = 0,
                        r = t && t.match(j);
                    if (r && 1 === e.nodeType)
                        for (; n = r[i++];) e.removeAttribute(n)
                }
            }), pt = {
                set: function(e, t, n) {
                    return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, T.each(T.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                var n = ft[t] || T.find.attr;
                ft[t] = function(e, t, i) {
                    var r, s, a = t.toLowerCase();
                    return i || (s = ft[a], ft[a] = r, r = null != n(e, t, i) ? a : null, ft[a] = s), r
                }
            }));
            var ht = /^(?:input|select|textarea|button)$/i,
                mt = /^(?:a|area)$/i;

            function gt(e) {
                return (e.match(j) || []).join(" ")
            }

            function vt(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }

            function yt(e) {
                return Array.isArray(e) ? e : "string" == typeof e && e.match(j) || []
            }
            T.fn.extend({
                prop: function(e, t) {
                    return W(this, T.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each((function() {
                        delete this[T.propFix[e] || e]
                    }))
                }
            }), T.extend({
                prop: function(e, t, n) {
                    var i, r, s = e.nodeType;
                    if (3 !== s && 8 !== s && 2 !== s) return 1 === s && T.isXMLDoc(e) || (t = T.propFix[t] || t, r = T.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = T.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : ht.test(e.nodeName) || mt.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), g.optSelected || (T.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                T.propFix[this.toLowerCase()] = this
            })), T.fn.extend({
                addClass: function(e) {
                    var t, n, i, r, s, a, o, l = 0;
                    if (v(e)) return this.each((function(t) {
                        T(this).addClass(e.call(this, t, vt(this)))
                    }));
                    if ((t = yt(e)).length)
                        for (; n = this[l++];)
                            if (r = vt(n), i = 1 === n.nodeType && " " + gt(r) + " ") {
                                for (a = 0; s = t[a++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                                r !== (o = gt(i)) && n.setAttribute("class", o)
                            } return this
                },
                removeClass: function(e) {
                    var t, n, i, r, s, a, o, l = 0;
                    if (v(e)) return this.each((function(t) {
                        T(this).removeClass(e.call(this, t, vt(this)))
                    }));
                    if (!arguments.length) return this.attr("class", "");
                    if ((t = yt(e)).length)
                        for (; n = this[l++];)
                            if (r = vt(n), i = 1 === n.nodeType && " " + gt(r) + " ") {
                                for (a = 0; s = t[a++];)
                                    for (; i.indexOf(" " + s + " ") > -1;) i = i.replace(" " + s + " ", " ");
                                r !== (o = gt(i)) && n.setAttribute("class", o)
                            } return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e,
                        i = "string" === n || Array.isArray(e);
                    return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each((function(n) {
                        T(this).toggleClass(e.call(this, n, vt(this), t), t)
                    })) : this.each((function() {
                        var t, r, s, a;
                        if (i)
                            for (r = 0, s = T(this), a = yt(e); t = a[r++];) s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
                        else void 0 !== e && "boolean" !== n || ((t = vt(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""))
                    }))
                },
                hasClass: function(e) {
                    var t, n, i = 0;
                    for (t = " " + e + " "; n = this[i++];)
                        if (1 === n.nodeType && (" " + gt(vt(n)) + " ").indexOf(t) > -1) return !0;
                    return !1
                }
            });
            var bt = /\r/g;
            T.fn.extend({
                val: function(e) {
                    var t, n, i, r = this[0];
                    return arguments.length ? (i = v(e), this.each((function(n) {
                        var r;
                        1 === this.nodeType && (null == (r = i ? e.call(this, n, T(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = T.map(r, (function(e) {
                            return null == e ? "" : e + ""
                        }))), (t = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                    }))) : r ? (t = T.valHooks[r.type] || T.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(bt, "") : null == n ? "" : n : void 0
                }
            }), T.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = T.find.attr(e, "value");
                            return null != t ? t : gt(T.text(e))
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, i, r = e.options,
                                s = e.selectedIndex,
                                a = "select-one" === e.type,
                                o = a ? null : [],
                                l = a ? s + 1 : r.length;
                            for (i = s < 0 ? l : a ? s : 0; i < l; i++)
                                if (((n = r[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !$(n.parentNode, "optgroup"))) {
                                    if (t = T(n).val(), a) return t;
                                    o.push(t)
                                } return o
                        },
                        set: function(e, t) {
                            for (var n, i, r = e.options, s = T.makeArray(t), a = r.length; a--;)((i = r[a]).selected = T.inArray(T.valHooks.option.get(i), s) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1), s
                        }
                    }
                }
            }), T.each(["radio", "checkbox"], (function() {
                T.valHooks[this] = {
                    set: function(e, t) {
                        if (Array.isArray(t)) return e.checked = T.inArray(T(e).val(), t) > -1
                    }
                }, g.checkOn || (T.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            })), g.focusin = "onfocusin" in n;
            var wt = /^(?:focusinfocus|focusoutblur)$/,
                xt = function(e) {
                    e.stopPropagation()
                };
            T.extend(T.event, {
                trigger: function(e, t, i, r) {
                    var s, a, o, l, d, c, u, p, h = [i || b],
                        m = f.call(e, "type") ? e.type : e,
                        g = f.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (a = p = o = i = i || b, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + T.event.triggered) && (m.indexOf(".") > -1 && (g = m.split("."), m = g.shift(), g.sort()), d = m.indexOf(":") < 0 && "on" + m, (e = e[T.expando] ? e : new T.Event(m, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : T.makeArray(t, [e]), u = T.event.special[m] || {}, r || !u.trigger || !1 !== u.trigger.apply(i, t))) {
                        if (!r && !u.noBubble && !y(i)) {
                            for (l = u.delegateType || m, wt.test(l + m) || (a = a.parentNode); a; a = a.parentNode) h.push(a), o = a;
                            o === (i.ownerDocument || b) && h.push(o.defaultView || o.parentWindow || n)
                        }
                        for (s = 0;
                            (a = h[s++]) && !e.isPropagationStopped();) p = a, e.type = s > 1 ? l : u.bindType || m, (c = (K.get(a, "events") || Object.create(null))[e.type] && K.get(a, "handle")) && c.apply(a, t), (c = d && a[d]) && c.apply && U(a) && (e.result = c.apply(a, t), !1 === e.result && e.preventDefault());
                        return e.type = m, r || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(h.pop(), t) || !U(i) || d && v(i[m]) && !y(i) && ((o = i[d]) && (i[d] = null), T.event.triggered = m, e.isPropagationStopped() && p.addEventListener(m, xt), i[m](), e.isPropagationStopped() && p.removeEventListener(m, xt), T.event.triggered = void 0, o && (i[d] = o)), e.result
                    }
                },
                simulate: function(e, t, n) {
                    var i = T.extend(new T.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    T.event.trigger(i, null, t)
                }
            }), T.fn.extend({
                trigger: function(e, t) {
                    return this.each((function() {
                        T.event.trigger(e, t, this)
                    }))
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n) return T.event.trigger(e, t, n, !0)
                }
            }), g.focusin || T.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(e, t) {
                var n = function(e) {
                    T.event.simulate(t, e.target, T.event.fix(e))
                };
                T.event.special[t] = {
                    setup: function() {
                        var i = this.ownerDocument || this.document || this,
                            r = K.access(i, t);
                        r || i.addEventListener(e, n, !0), K.access(i, t, (r || 0) + 1)
                    },
                    teardown: function() {
                        var i = this.ownerDocument || this.document || this,
                            r = K.access(i, t) - 1;
                        r ? K.access(i, t, r) : (i.removeEventListener(e, n, !0), K.remove(i, t))
                    }
                }
            }));
            var Et = n.location,
                Tt = {
                    guid: Date.now()
                },
                Ct = /\?/;
            T.parseXML = function(e) {
                var t, i;
                if (!e || "string" != typeof e) return null;
                try {
                    t = (new n.DOMParser).parseFromString(e, "text/xml")
                } catch (e) {}
                return i = t && t.getElementsByTagName("parsererror")[0], t && !i || T.error("Invalid XML: " + (i ? T.map(i.childNodes, (function(e) {
                    return e.textContent
                })).join("\n") : e)), t
            };
            var _t = /\[\]$/,
                St = /\r?\n/g,
                kt = /^(?:submit|button|image|reset|file)$/i,
                Mt = /^(?:input|select|textarea|keygen)/i;

            function $t(e, t, n, i) {
                var r;
                if (Array.isArray(t)) T.each(t, (function(t, r) {
                    n || _t.test(e) ? i(e, r) : $t(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
                }));
                else if (n || "object" !== E(t)) i(e, t);
                else
                    for (r in t) $t(e + "[" + r + "]", t[r], n, i)
            }
            T.param = function(e, t) {
                var n, i = [],
                    r = function(e, t) {
                        var n = v(t) ? t() : t;
                        i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                    };
                if (null == e) return "";
                if (Array.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, (function() {
                    r(this.name, this.value)
                }));
                else
                    for (n in e) $t(n, e[n], t, r);
                return i.join("&")
            }, T.fn.extend({
                serialize: function() {
                    return T.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map((function() {
                        var e = T.prop(this, "elements");
                        return e ? T.makeArray(e) : this
                    })).filter((function() {
                        var e = this.type;
                        return this.name && !T(this).is(":disabled") && Mt.test(this.nodeName) && !kt.test(e) && (this.checked || !me.test(e))
                    })).map((function(e, t) {
                        var n = T(this).val();
                        return null == n ? null : Array.isArray(n) ? T.map(n, (function(e) {
                            return {
                                name: t.name,
                                value: e.replace(St, "\r\n")
                            }
                        })) : {
                            name: t.name,
                            value: n.replace(St, "\r\n")
                        }
                    })).get()
                }
            });
            var At = /%20/g,
                Dt = /#.*$/,
                Pt = /([?&])_=[^&]*/,
                Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Ot = /^(?:GET|HEAD)$/,
                It = /^\/\//,
                Lt = {},
                jt = {},
                zt = "*/".concat("*"),
                Ht = b.createElement("a");

            function qt(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var i, r = 0,
                        s = t.toLowerCase().match(j) || [];
                    if (v(n))
                        for (; i = s[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
                }
            }

            function Bt(e, t, n, i) {
                var r = {},
                    s = e === jt;

                function a(o) {
                    var l;
                    return r[o] = !0, T.each(e[o] || [], (function(e, o) {
                        var d = o(t, n, i);
                        return "string" != typeof d || s || r[d] ? s ? !(l = d) : void 0 : (t.dataTypes.unshift(d), a(d), !1)
                    })), l
                }
                return a(t.dataTypes[0]) || !r["*"] && a("*")
            }

            function Rt(e, t) {
                var n, i, r = T.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
                return i && T.extend(!0, e, i), e
            }
            Ht.href = Et.href, T.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Et.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": zt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": T.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? Rt(Rt(e, T.ajaxSettings), t) : Rt(T.ajaxSettings, e)
                },
                ajaxPrefilter: qt(Lt),
                ajaxTransport: qt(jt),
                ajax: function(e, t) {
                    "object" == typeof e && (t = e, e = void 0), t = t || {};
                    var i, r, s, a, o, l, d, c, u, p, f = T.ajaxSetup({}, t),
                        h = f.context || f,
                        m = f.context && (h.nodeType || h.jquery) ? T(h) : T.event,
                        g = T.Deferred(),
                        v = T.Callbacks("once memory"),
                        y = f.statusCode || {},
                        w = {},
                        x = {},
                        E = "canceled",
                        C = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (d) {
                                    if (!a)
                                        for (a = {}; t = Nt.exec(s);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                    t = a[e.toLowerCase() + " "]
                                }
                                return null == t ? null : t.join(", ")
                            },
                            getAllResponseHeaders: function() {
                                return d ? s : null
                            },
                            setRequestHeader: function(e, t) {
                                return null == d && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t), this
                            },
                            overrideMimeType: function(e) {
                                return null == d && (f.mimeType = e), this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (d) C.always(e[C.status]);
                                    else
                                        for (t in e) y[t] = [y[t], e[t]];
                                return this
                            },
                            abort: function(e) {
                                var t = e || E;
                                return i && i.abort(t), _(0, t), this
                            }
                        };
                    if (g.promise(C), f.url = ((e || f.url || Et.href) + "").replace(It, Et.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(j) || [""], null == f.crossDomain) {
                        l = b.createElement("a");
                        try {
                            l.href = f.url, l.href = l.href, f.crossDomain = Ht.protocol + "//" + Ht.host != l.protocol + "//" + l.host
                        } catch (e) {
                            f.crossDomain = !0
                        }
                    }
                    if (f.data && f.processData && "string" != typeof f.data && (f.data = T.param(f.data, f.traditional)), Bt(Lt, f, t, C), d) return C;
                    for (u in (c = T.event && f.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Ot.test(f.type), r = f.url.replace(Dt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(At, "+")) : (p = f.url.slice(r.length), f.data && (f.processData || "string" == typeof f.data) && (r += (Ct.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (r = r.replace(Pt, "$1"), p = (Ct.test(r) ? "&" : "?") + "_=" + Tt.guid++ + p), f.url = r + p), f.ifModified && (T.lastModified[r] && C.setRequestHeader("If-Modified-Since", T.lastModified[r]), T.etag[r] && C.setRequestHeader("If-None-Match", T.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : f.accepts["*"]), f.headers) C.setRequestHeader(u, f.headers[u]);
                    if (f.beforeSend && (!1 === f.beforeSend.call(h, C, f) || d)) return C.abort();
                    if (E = "abort", v.add(f.complete), C.done(f.success), C.fail(f.error), i = Bt(jt, f, t, C)) {
                        if (C.readyState = 1, c && m.trigger("ajaxSend", [C, f]), d) return C;
                        f.async && f.timeout > 0 && (o = n.setTimeout((function() {
                            C.abort("timeout")
                        }), f.timeout));
                        try {
                            d = !1, i.send(w, _)
                        } catch (e) {
                            if (d) throw e;
                            _(-1, e)
                        }
                    } else _(-1, "No Transport");

                    function _(e, t, a, l) {
                        var u, p, b, w, x, E = t;
                        d || (d = !0, o && n.clearTimeout(o), i = void 0, s = l || "", C.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, a && (w = function(e, t, n) {
                            for (var i, r, s, a, o = e.contents, l = e.dataTypes;
                                "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (i)
                                for (r in o)
                                    if (o[r] && o[r].test(i)) {
                                        l.unshift(r);
                                        break
                                    } if (l[0] in n) s = l[0];
                            else {
                                for (r in n) {
                                    if (!l[0] || e.converters[r + " " + l[0]]) {
                                        s = r;
                                        break
                                    }
                                    a || (a = r)
                                }
                                s = s || a
                            }
                            if (s) return s !== l[0] && l.unshift(s), n[s]
                        }(f, C, a)), !u && T.inArray("script", f.dataTypes) > -1 && T.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function() {}), w = function(e, t, n, i) {
                            var r, s, a, o, l, d = {},
                                c = e.dataTypes.slice();
                            if (c[1])
                                for (a in e.converters) d[a.toLowerCase()] = e.converters[a];
                            for (s = c.shift(); s;)
                                if (e.responseFields[s] && (n[e.responseFields[s]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = c.shift())
                                    if ("*" === s) s = l;
                                    else if ("*" !== l && l !== s) {
                                if (!(a = d[l + " " + s] || d["* " + s]))
                                    for (r in d)
                                        if ((o = r.split(" "))[1] === s && (a = d[l + " " + o[0]] || d["* " + o[0]])) {
                                            !0 === a ? a = d[r] : !0 !== d[r] && (s = o[0], c.unshift(o[1]));
                                            break
                                        } if (!0 !== a)
                                    if (a && e.throws) t = a(t);
                                    else try {
                                        t = a(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: a ? e : "No conversion from " + l + " to " + s
                                        }
                                    }
                            }
                            return {
                                state: "success",
                                data: t
                            }
                        }(f, w, C, u), u ? (f.ifModified && ((x = C.getResponseHeader("Last-Modified")) && (T.lastModified[r] = x), (x = C.getResponseHeader("etag")) && (T.etag[r] = x)), 204 === e || "HEAD" === f.type ? E = "nocontent" : 304 === e ? E = "notmodified" : (E = w.state, p = w.data, u = !(b = w.error))) : (b = E, !e && E || (E = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || E) + "", u ? g.resolveWith(h, [p, E, C]) : g.rejectWith(h, [C, E, b]), C.statusCode(y), y = void 0, c && m.trigger(u ? "ajaxSuccess" : "ajaxError", [C, f, u ? p : b]), v.fireWith(h, [C, E]), c && (m.trigger("ajaxComplete", [C, f]), --T.active || T.event.trigger("ajaxStop")))
                    }
                    return C
                },
                getJSON: function(e, t, n) {
                    return T.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return T.get(e, void 0, t, "script")
                }
            }), T.each(["get", "post"], (function(e, t) {
                T[t] = function(e, n, i, r) {
                    return v(n) && (r = r || i, i = n, n = void 0), T.ajax(T.extend({
                        url: e,
                        type: t,
                        dataType: r,
                        data: n,
                        success: i
                    }, T.isPlainObject(e) && e))
                }
            })), T.ajaxPrefilter((function(e) {
                var t;
                for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
            })), T._evalUrl = function(e, t, n) {
                return T.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function() {}
                    },
                    dataFilter: function(e) {
                        T.globalEval(e, t, n)
                    }
                })
            }, T.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return this[0] && (v(e) && (e = e.call(this[0])), t = T(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    })).append(this)), this
                },
                wrapInner: function(e) {
                    return v(e) ? this.each((function(t) {
                        T(this).wrapInner(e.call(this, t))
                    })) : this.each((function() {
                        var t = T(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    }))
                },
                wrap: function(e) {
                    var t = v(e);
                    return this.each((function(n) {
                        T(this).wrapAll(t ? e.call(this, n) : e)
                    }))
                },
                unwrap: function(e) {
                    return this.parent(e).not("body").each((function() {
                        T(this).replaceWith(this.childNodes)
                    })), this
                }
            }), T.expr.pseudos.hidden = function(e) {
                return !T.expr.pseudos.visible(e)
            }, T.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }, T.ajaxSettings.xhr = function() {
                try {
                    return new n.XMLHttpRequest
                } catch (e) {}
            };
            var Ft = {
                    0: 200,
                    1223: 204
                },
                Wt = T.ajaxSettings.xhr();
            g.cors = !!Wt && "withCredentials" in Wt, g.ajax = Wt = !!Wt, T.ajaxTransport((function(e) {
                var t, i;
                if (g.cors || Wt && !e.crossDomain) return {
                    send: function(r, s) {
                        var a, o = e.xhr();
                        if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (a in e.xhrFields) o[a] = e.xhrFields[a];
                        for (a in e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) o.setRequestHeader(a, r[a]);
                        t = function(e) {
                            return function() {
                                t && (t = i = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? s(0, "error") : s(o.status, o.statusText) : s(Ft[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {
                                    binary: o.response
                                } : {
                                    text: o.responseText
                                }, o.getAllResponseHeaders()))
                            }
                        }, o.onload = t(), i = o.onerror = o.ontimeout = t("error"), void 0 !== o.onabort ? o.onabort = i : o.onreadystatechange = function() {
                            4 === o.readyState && n.setTimeout((function() {
                                t && i()
                            }))
                        }, t = t("abort");
                        try {
                            o.send(e.hasContent && e.data || null)
                        } catch (e) {
                            if (t) throw e
                        }
                    },
                    abort: function() {
                        t && t()
                    }
                }
            })), T.ajaxPrefilter((function(e) {
                e.crossDomain && (e.contents.script = !1)
            })), T.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return T.globalEval(e), e
                    }
                }
            }), T.ajaxPrefilter("script", (function(e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            })), T.ajaxTransport("script", (function(e) {
                var t, n;
                if (e.crossDomain || e.scriptAttrs) return {
                    send: function(i, r) {
                        t = T("<script>").attr(e.scriptAttrs || {}).prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                        }), b.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }));
            var Xt, Yt = [],
                Gt = /(=)\?(?=&|$)|\?\?/;
            T.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Yt.pop() || T.expando + "_" + Tt.guid++;
                    return this[e] = !0, e
                }
            }), T.ajaxPrefilter("json jsonp", (function(e, t, i) {
                var r, s, a, o = !1 !== e.jsonp && (Gt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(e.data) && "data");
                if (o || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(Gt, "$1" + r) : !1 !== e.jsonp && (e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                    return a || T.error(r + " was not called"), a[0]
                }, e.dataTypes[0] = "json", s = n[r], n[r] = function() {
                    a = arguments
                }, i.always((function() {
                    void 0 === s ? T(n).removeProp(r) : n[r] = s, e[r] && (e.jsonpCallback = t.jsonpCallback, Yt.push(r)), a && v(s) && s(a[0]), a = s = void 0
                })), "script"
            })), g.createHTMLDocument = ((Xt = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Xt.childNodes.length), T.parseHTML = function(e, t, n) {
                return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((i = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, t.head.appendChild(i)) : t = b), s = !n && [], (r = A.exec(e)) ? [t.createElement(r[1])] : (r = Ee([e], t, s), s && s.length && T(s).remove(), T.merge([], r.childNodes)));
                var i, r, s
            }, T.fn.load = function(e, t, n) {
                var i, r, s, a = this,
                    o = e.indexOf(" ");
                return o > -1 && (i = gt(e.slice(o)), e = e.slice(0, o)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && T.ajax({
                    url: e,
                    type: r || "GET",
                    dataType: "html",
                    data: t
                }).done((function(e) {
                    s = arguments, a.html(i ? T("<div>").append(T.parseHTML(e)).find(i) : e)
                })).always(n && function(e, t) {
                    a.each((function() {
                        n.apply(this, s || [e.responseText, t, e])
                    }))
                }), this
            }, T.expr.pseudos.animated = function(e) {
                return T.grep(T.timers, (function(t) {
                    return e === t.elem
                })).length
            }, T.offset = {
                setOffset: function(e, t, n) {
                    var i, r, s, a, o, l, d = T.css(e, "position"),
                        c = T(e),
                        u = {};
                    "static" === d && (e.style.position = "relative"), o = c.offset(), s = T.css(e, "top"), l = T.css(e, "left"), ("absolute" === d || "fixed" === d) && (s + l).indexOf("auto") > -1 ? (a = (i = c.position()).top, r = i.left) : (a = parseFloat(s) || 0, r = parseFloat(l) || 0), v(t) && (t = t.call(e, n, T.extend({}, o))), null != t.top && (u.top = t.top - o.top + a), null != t.left && (u.left = t.left - o.left + r), "using" in t ? t.using.call(e, u) : c.css(u)
                }
            }, T.fn.extend({
                offset: function(e) {
                    if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                        T.offset.setOffset(this, e, t)
                    }));
                    var t, n, i = this[0];
                    return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n, i = this[0],
                            r = {
                                top: 0,
                                left: 0
                            };
                        if ("fixed" === T.css(i, "position")) t = i.getBoundingClientRect();
                        else {
                            for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position");) e = e.parentNode;
                            e && e !== i && 1 === e.nodeType && ((r = T(e).offset()).top += T.css(e, "borderTopWidth", !0), r.left += T.css(e, "borderLeftWidth", !0))
                        }
                        return {
                            top: t.top - r.top - T.css(i, "marginTop", !0),
                            left: t.left - r.left - T.css(i, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map((function() {
                        for (var e = this.offsetParent; e && "static" === T.css(e, "position");) e = e.offsetParent;
                        return e || se
                    }))
                }
            }), T.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, (function(e, t) {
                var n = "pageYOffset" === t;
                T.fn[e] = function(i) {
                    return W(this, (function(e, i, r) {
                        var s;
                        if (y(e) ? s = e : 9 === e.nodeType && (s = e.defaultView), void 0 === r) return s ? s[t] : e[i];
                        s ? s.scrollTo(n ? s.pageXOffset : r, n ? r : s.pageYOffset) : e[i] = r
                    }), e, i, arguments.length)
                }
            })), T.each(["top", "left"], (function(e, t) {
                T.cssHooks[t] = We(g.pixelPosition, (function(e, n) {
                    if (n) return n = Fe(e, t), He.test(n) ? T(e).position()[t] + "px" : n
                }))
            })), T.each({
                Height: "height",
                Width: "width"
            }, (function(e, t) {
                T.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, (function(n, i) {
                    T.fn[i] = function(r, s) {
                        var a = arguments.length && (n || "boolean" != typeof r),
                            o = n || (!0 === r || !0 === s ? "margin" : "border");
                        return W(this, (function(t, n, r) {
                            var s;
                            return y(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === r ? T.css(t, n, o) : T.style(t, n, r, o)
                        }), t, a ? r : void 0, a)
                    }
                }))
            })), T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
                T.fn[t] = function(e) {
                    return this.on(t, e)
                }
            })), T.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, i) {
                    return this.on(t, e, n, i)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                },
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
                T.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }));
            var Vt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            T.proxy = function(e, t) {
                var n, i, r;
                if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return i = o.call(arguments, 2), (r = function() {
                    return e.apply(t || this, i.concat(o.call(arguments)))
                }).guid = e.guid = e.guid || T.guid++, r
            }, T.holdReady = function(e) {
                e ? T.readyWait++ : T.ready(!0)
            }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = $, T.isFunction = v, T.isWindow = y, T.camelCase = V, T.type = E, T.now = Date.now, T.isNumeric = function(e) {
                var t = T.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            }, T.trim = function(e) {
                return null == e ? "" : (e + "").replace(Vt, "")
            }, void 0 === (i = function() {
                return T
            }.apply(t, [])) || (e.exports = i);
            var Ut = n.jQuery,
                Qt = n.$;
            return T.noConflict = function(e) {
                return n.$ === T && (n.$ = Qt), e && n.jQuery === T && (n.jQuery = Ut), T
            }, void 0 === r && (n.jQuery = n.$ = T), T
        }))
    },
    4989: function(e, t, n) {
        ! function(e, t, n) {
            "use strict";

            function i(e) {
                return e && "object" == typeof e && "default" in e ? e : {
                    default: e
                }
            }
            var r = i(t),
                s = i(n);

            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function o(e, t, n) {
                return t && a(e.prototype, t), n && a(e, n), e
            }

            function l() {
                return (l = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                }).apply(this, arguments)
            }

            function d(e, t) {
                return (d = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function c(e) {
                var t = this,
                    n = !1;
                return r.default(this).one(u.TRANSITION_END, (function() {
                    n = !0
                })), setTimeout((function() {
                    n || u.triggerTransitionEnd(t)
                }), e), this
            }
            var u = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function(e) {
                    do {
                        e += ~~(1e6 * Math.random())
                    } while (document.getElementById(e));
                    return e
                },
                getSelectorFromElement: function(e) {
                    var t = e.getAttribute("data-target");
                    if (!t || "#" === t) {
                        var n = e.getAttribute("href");
                        t = n && "#" !== n ? n.trim() : ""
                    }
                    try {
                        return document.querySelector(t) ? t : null
                    } catch (e) {
                        return null
                    }
                },
                getTransitionDurationFromElement: function(e) {
                    if (!e) return 0;
                    var t = r.default(e).css("transition-duration"),
                        n = r.default(e).css("transition-delay"),
                        i = parseFloat(t),
                        s = parseFloat(n);
                    return i || s ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(t) + parseFloat(n))) : 0
                },
                reflow: function(e) {
                    return e.offsetHeight
                },
                triggerTransitionEnd: function(e) {
                    r.default(e).trigger("transitionend")
                },
                supportsTransitionEnd: function() {
                    return Boolean("transitionend")
                },
                isElement: function(e) {
                    return (e[0] || e).nodeType
                },
                typeCheckConfig: function(e, t, n) {
                    for (var i in n)
                        if (Object.prototype.hasOwnProperty.call(n, i)) {
                            var r = n[i],
                                s = t[i],
                                a = s && u.isElement(s) ? "element" : null == (o = s) ? "" + o : {}.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase();
                            if (!new RegExp(r).test(a)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + r + '".')
                        } var o
                },
                findShadowRoot: function(e) {
                    if (!document.documentElement.attachShadow) return null;
                    if ("function" == typeof e.getRootNode) {
                        var t = e.getRootNode();
                        return t instanceof ShadowRoot ? t : null
                    }
                    return e instanceof ShadowRoot ? e : e.parentNode ? u.findShadowRoot(e.parentNode) : null
                },
                jQueryDetection: function() {
                    if (void 0 === r.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                    var e = r.default.fn.jquery.split(" ")[0].split(".");
                    if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
                }
            };
            u.jQueryDetection(), r.default.fn.emulateTransitionEnd = c, r.default.event.special[u.TRANSITION_END] = {
                bindType: "transitionend",
                delegateType: "transitionend",
                handle: function(e) {
                    if (r.default(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                }
            };
            var p = r.default.fn.alert,
                f = function() {
                    function e(e) {
                        this._element = e
                    }
                    var t = e.prototype;
                    return t.close = function(e) {
                        var t = this._element;
                        e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
                    }, t.dispose = function() {
                        r.default.removeData(this._element, "bs.alert"), this._element = null
                    }, t._getRootElement = function(e) {
                        var t = u.getSelectorFromElement(e),
                            n = !1;
                        return t && (n = document.querySelector(t)), n || (n = r.default(e).closest(".alert")[0]), n
                    }, t._triggerCloseEvent = function(e) {
                        var t = r.default.Event("close.bs.alert");
                        return r.default(e).trigger(t), t
                    }, t._removeElement = function(e) {
                        var t = this;
                        if (r.default(e).removeClass("show"), r.default(e).hasClass("fade")) {
                            var n = u.getTransitionDurationFromElement(e);
                            r.default(e).one(u.TRANSITION_END, (function(n) {
                                return t._destroyElement(e, n)
                            })).emulateTransitionEnd(n)
                        } else this._destroyElement(e)
                    }, t._destroyElement = function(e) {
                        r.default(e).detach().trigger("closed.bs.alert").remove()
                    }, e._jQueryInterface = function(t) {
                        return this.each((function() {
                            var n = r.default(this),
                                i = n.data("bs.alert");
                            i || (i = new e(this), n.data("bs.alert", i)), "close" === t && i[t](this)
                        }))
                    }, e._handleDismiss = function(e) {
                        return function(t) {
                            t && t.preventDefault(), e.close(this)
                        }
                    }, o(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.6.1"
                        }
                    }]), e
                }();
            r.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', f._handleDismiss(new f)), r.default.fn.alert = f._jQueryInterface, r.default.fn.alert.Constructor = f, r.default.fn.alert.noConflict = function() {
                return r.default.fn.alert = p, f._jQueryInterface
            };
            var h = r.default.fn.button,
                m = function() {
                    function e(e) {
                        this._element = e, this.shouldAvoidTriggerChange = !1
                    }
                    var t = e.prototype;
                    return t.toggle = function() {
                        var e = !0,
                            t = !0,
                            n = r.default(this._element).closest('[data-toggle="buttons"]')[0];
                        if (n) {
                            var i = this._element.querySelector('input:not([type="hidden"])');
                            if (i) {
                                if ("radio" === i.type)
                                    if (i.checked && this._element.classList.contains("active")) e = !1;
                                    else {
                                        var s = n.querySelector(".active");
                                        s && r.default(s).removeClass("active")
                                    } e && ("checkbox" !== i.type && "radio" !== i.type || (i.checked = !this._element.classList.contains("active")), this.shouldAvoidTriggerChange || r.default(i).trigger("change")), i.focus(), t = !1
                            }
                        }
                        this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (t && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), e && r.default(this._element).toggleClass("active"))
                    }, t.dispose = function() {
                        r.default.removeData(this._element, "bs.button"), this._element = null
                    }, e._jQueryInterface = function(t, n) {
                        return this.each((function() {
                            var i = r.default(this),
                                s = i.data("bs.button");
                            s || (s = new e(this), i.data("bs.button", s)), s.shouldAvoidTriggerChange = n, "toggle" === t && s[t]()
                        }))
                    }, o(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.6.1"
                        }
                    }]), e
                }();
            r.default(document).on("click.bs.button.data-api", '[data-toggle^="button"]', (function(e) {
                var t = e.target,
                    n = t;
                if (r.default(t).hasClass("btn") || (t = r.default(t).closest(".btn")[0]), !t || t.hasAttribute("disabled") || t.classList.contains("disabled")) e.preventDefault();
                else {
                    var i = t.querySelector('input:not([type="hidden"])');
                    if (i && (i.hasAttribute("disabled") || i.classList.contains("disabled"))) return void e.preventDefault();
                    "INPUT" !== n.tagName && "LABEL" === t.tagName || m._jQueryInterface.call(r.default(t), "toggle", "INPUT" === n.tagName)
                }
            })).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', (function(e) {
                var t = r.default(e.target).closest(".btn")[0];
                r.default(t).toggleClass("focus", /^focus(in)?$/.test(e.type))
            })), r.default(window).on("load.bs.button.data-api", (function() {
                for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) {
                    var i = e[t],
                        r = i.querySelector('input:not([type="hidden"])');
                    r.checked || r.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active")
                }
                for (var s = 0, a = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; s < a; s++) {
                    var o = e[s];
                    "true" === o.getAttribute("aria-pressed") ? o.classList.add("active") : o.classList.remove("active")
                }
            })), r.default.fn.button = m._jQueryInterface, r.default.fn.button.Constructor = m, r.default.fn.button.noConflict = function() {
                return r.default.fn.button = h, m._jQueryInterface
            };
            var g = "carousel",
                v = ".bs.carousel",
                y = r.default.fn[g],
                b = {
                    interval: 5e3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0,
                    touch: !0
                },
                w = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean",
                    touch: "boolean"
                },
                x = {
                    TOUCH: "touch",
                    PEN: "pen"
                },
                E = function() {
                    function e(e, t) {
                        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
                    }
                    var t = e.prototype;
                    return t.next = function() {
                        this._isSliding || this._slide("next")
                    }, t.nextWhenVisible = function() {
                        var e = r.default(this._element);
                        !document.hidden && e.is(":visible") && "hidden" !== e.css("visibility") && this.next()
                    }, t.prev = function() {
                        this._isSliding || this._slide("prev")
                    }, t.pause = function(e) {
                        e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (u.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                    }, t.cycle = function(e) {
                        e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                    }, t.to = function(e) {
                        var t = this;
                        this._activeElement = this._element.querySelector(".active.carousel-item");
                        var n = this._getItemIndex(this._activeElement);
                        if (!(e > this._items.length - 1 || e < 0))
                            if (this._isSliding) r.default(this._element).one("slid.bs.carousel", (function() {
                                return t.to(e)
                            }));
                            else {
                                if (n === e) return this.pause(), void this.cycle();
                                var i = e > n ? "next" : "prev";
                                this._slide(i, this._items[e])
                            }
                    }, t.dispose = function() {
                        r.default(this._element).off(v), r.default.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                    }, t._getConfig = function(e) {
                        return e = l({}, b, e), u.typeCheckConfig(g, e, w), e
                    }, t._handleSwipe = function() {
                        var e = Math.abs(this.touchDeltaX);
                        if (!(e <= 40)) {
                            var t = e / this.touchDeltaX;
                            this.touchDeltaX = 0, t > 0 && this.prev(), t < 0 && this.next()
                        }
                    }, t._addEventListeners = function() {
                        var e = this;
                        this._config.keyboard && r.default(this._element).on("keydown.bs.carousel", (function(t) {
                            return e._keydown(t)
                        })), "hover" === this._config.pause && r.default(this._element).on("mouseenter.bs.carousel", (function(t) {
                            return e.pause(t)
                        })).on("mouseleave.bs.carousel", (function(t) {
                            return e.cycle(t)
                        })), this._config.touch && this._addTouchEventListeners()
                    }, t._addTouchEventListeners = function() {
                        var e = this;
                        if (this._touchSupported) {
                            var t = function(t) {
                                    e._pointerEvent && x[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                                },
                                n = function(t) {
                                    e._pointerEvent && x[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout((function(t) {
                                        return e.cycle(t)
                                    }), 500 + e._config.interval))
                                };
                            r.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", (function(e) {
                                return e.preventDefault()
                            })), this._pointerEvent ? (r.default(this._element).on("pointerdown.bs.carousel", (function(e) {
                                return t(e)
                            })), r.default(this._element).on("pointerup.bs.carousel", (function(e) {
                                return n(e)
                            })), this._element.classList.add("pointer-event")) : (r.default(this._element).on("touchstart.bs.carousel", (function(e) {
                                return t(e)
                            })), r.default(this._element).on("touchmove.bs.carousel", (function(t) {
                                return function(t) {
                                    e.touchDeltaX = t.originalEvent.touches && t.originalEvent.touches.length > 1 ? 0 : t.originalEvent.touches[0].clientX - e.touchStartX
                                }(t)
                            })), r.default(this._element).on("touchend.bs.carousel", (function(e) {
                                return n(e)
                            })))
                        }
                    }, t._keydown = function(e) {
                        if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                            case 37:
                                e.preventDefault(), this.prev();
                                break;
                            case 39:
                                e.preventDefault(), this.next()
                        }
                    }, t._getItemIndex = function(e) {
                        return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e)
                    }, t._getItemByDirection = function(e, t) {
                        var n = "next" === e,
                            i = "prev" === e,
                            r = this._getItemIndex(t),
                            s = this._items.length - 1;
                        if ((i && 0 === r || n && r === s) && !this._config.wrap) return t;
                        var a = (r + ("prev" === e ? -1 : 1)) % this._items.length;
                        return -1 === a ? this._items[this._items.length - 1] : this._items[a]
                    }, t._triggerSlideEvent = function(e, t) {
                        var n = this._getItemIndex(e),
                            i = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
                            s = r.default.Event("slide.bs.carousel", {
                                relatedTarget: e,
                                direction: t,
                                from: i,
                                to: n
                            });
                        return r.default(this._element).trigger(s), s
                    }, t._setActiveIndicatorElement = function(e) {
                        if (this._indicatorsElement) {
                            var t = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                            r.default(t).removeClass("active");
                            var n = this._indicatorsElement.children[this._getItemIndex(e)];
                            n && r.default(n).addClass("active")
                        }
                    }, t._updateInterval = function() {
                        var e = this._activeElement || this._element.querySelector(".active.carousel-item");
                        if (e) {
                            var t = parseInt(e.getAttribute("data-interval"), 10);
                            t ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval
                        }
                    }, t._slide = function(e, t) {
                        var n, i, s, a = this,
                            o = this._element.querySelector(".active.carousel-item"),
                            l = this._getItemIndex(o),
                            d = t || o && this._getItemByDirection(e, o),
                            c = this._getItemIndex(d),
                            p = Boolean(this._interval);
                        if ("next" === e ? (n = "carousel-item-left", i = "carousel-item-next", s = "left") : (n = "carousel-item-right", i = "carousel-item-prev", s = "right"), d && r.default(d).hasClass("active")) this._isSliding = !1;
                        else if (!this._triggerSlideEvent(d, s).isDefaultPrevented() && o && d) {
                            this._isSliding = !0, p && this.pause(), this._setActiveIndicatorElement(d), this._activeElement = d;
                            var f = r.default.Event("slid.bs.carousel", {
                                relatedTarget: d,
                                direction: s,
                                from: l,
                                to: c
                            });
                            if (r.default(this._element).hasClass("slide")) {
                                r.default(d).addClass(i), u.reflow(d), r.default(o).addClass(n), r.default(d).addClass(n);
                                var h = u.getTransitionDurationFromElement(o);
                                r.default(o).one(u.TRANSITION_END, (function() {
                                    r.default(d).removeClass(n + " " + i).addClass("active"), r.default(o).removeClass("active " + i + " " + n), a._isSliding = !1, setTimeout((function() {
                                        return r.default(a._element).trigger(f)
                                    }), 0)
                                })).emulateTransitionEnd(h)
                            } else r.default(o).removeClass("active"), r.default(d).addClass("active"), this._isSliding = !1, r.default(this._element).trigger(f);
                            p && this.cycle()
                        }
                    }, e._jQueryInterface = function(t) {
                        return this.each((function() {
                            var n = r.default(this).data("bs.carousel"),
                                i = l({}, b, r.default(this).data());
                            "object" == typeof t && (i = l({}, i, t));
                            var s = "string" == typeof t ? t : i.slide;
                            if (n || (n = new e(this, i), r.default(this).data("bs.carousel", n)), "number" == typeof t) n.to(t);
                            else if ("string" == typeof s) {
                                if (void 0 === n[s]) throw new TypeError('No method named "' + s + '"');
                                n[s]()
                            } else i.interval && i.ride && (n.pause(), n.cycle())
                        }))
                    }, e._dataApiClickHandler = function(t) {
                        var n = u.getSelectorFromElement(this);
                        if (n) {
                            var i = r.default(n)[0];
                            if (i && r.default(i).hasClass("carousel")) {
                                var s = l({}, r.default(i).data(), r.default(this).data()),
                                    a = this.getAttribute("data-slide-to");
                                a && (s.interval = !1), e._jQueryInterface.call(r.default(i), s), a && r.default(i).data("bs.carousel").to(a), t.preventDefault()
                            }
                        }
                    }, o(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.6.1"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return b
                        }
                    }]), e
                }();
            r.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", E._dataApiClickHandler), r.default(window).on("load.bs.carousel.data-api", (function() {
                for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), t = 0, n = e.length; t < n; t++) {
                    var i = r.default(e[t]);
                    E._jQueryInterface.call(i, i.data())
                }
            })), r.default.fn[g] = E._jQueryInterface, r.default.fn[g].Constructor = E, r.default.fn[g].noConflict = function() {
                return r.default.fn[g] = y, E._jQueryInterface
            };
            var T = "collapse",
                C = r.default.fn[T],
                _ = {
                    toggle: !0,
                    parent: ""
                },
                S = {
                    toggle: "boolean",
                    parent: "(string|element)"
                },
                k = function() {
                    function e(e, t) {
                        this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                        for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), i = 0, r = n.length; i < r; i++) {
                            var s = n[i],
                                a = u.getSelectorFromElement(s),
                                o = [].slice.call(document.querySelectorAll(a)).filter((function(t) {
                                    return t === e
                                }));
                            null !== a && o.length > 0 && (this._selector = a, this._triggerArray.push(s))
                        }
                        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                    }
                    var t = e.prototype;
                    return t.toggle = function() {
                        r.default(this._element).hasClass("show") ? this.hide() : this.show()
                    }, t.show = function() {
                        var t, n, i = this;
                        if (!(this._isTransitioning || r.default(this._element).hasClass("show") || (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(e) {
                                return "string" == typeof i._config.parent ? e.getAttribute("data-parent") === i._config.parent : e.classList.contains("collapse")
                            }))).length && (t = null), t && (n = r.default(t).not(this._selector).data("bs.collapse")) && n._isTransitioning))) {
                            var s = r.default.Event("show.bs.collapse");
                            if (r.default(this._element).trigger(s), !s.isDefaultPrevented()) {
                                t && (e._jQueryInterface.call(r.default(t).not(this._selector), "hide"), n || r.default(t).data("bs.collapse", null));
                                var a = this._getDimension();
                                r.default(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[a] = 0, this._triggerArray.length && r.default(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0);
                                var o = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                                    l = u.getTransitionDurationFromElement(this._element);
                                r.default(this._element).one(u.TRANSITION_END, (function() {
                                    r.default(i._element).removeClass("collapsing").addClass("collapse show"), i._element.style[a] = "", i.setTransitioning(!1), r.default(i._element).trigger("shown.bs.collapse")
                                })).emulateTransitionEnd(l), this._element.style[a] = this._element[o] + "px"
                            }
                        }
                    }, t.hide = function() {
                        var e = this;
                        if (!this._isTransitioning && r.default(this._element).hasClass("show")) {
                            var t = r.default.Event("hide.bs.collapse");
                            if (r.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                                var n = this._getDimension();
                                this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", u.reflow(this._element), r.default(this._element).addClass("collapsing").removeClass("collapse show");
                                var i = this._triggerArray.length;
                                if (i > 0)
                                    for (var s = 0; s < i; s++) {
                                        var a = this._triggerArray[s],
                                            o = u.getSelectorFromElement(a);
                                        null !== o && (r.default([].slice.call(document.querySelectorAll(o))).hasClass("show") || r.default(a).addClass("collapsed").attr("aria-expanded", !1))
                                    }
                                this.setTransitioning(!0), this._element.style[n] = "";
                                var l = u.getTransitionDurationFromElement(this._element);
                                r.default(this._element).one(u.TRANSITION_END, (function() {
                                    e.setTransitioning(!1), r.default(e._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                                })).emulateTransitionEnd(l)
                            }
                        }
                    }, t.setTransitioning = function(e) {
                        this._isTransitioning = e
                    }, t.dispose = function() {
                        r.default.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                    }, t._getConfig = function(e) {
                        return (e = l({}, _, e)).toggle = Boolean(e.toggle), u.typeCheckConfig(T, e, S), e
                    }, t._getDimension = function() {
                        return r.default(this._element).hasClass("width") ? "width" : "height"
                    }, t._getParent = function() {
                        var t, n = this;
                        u.isElement(this._config.parent) ? (t = this._config.parent, void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
                        var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                            s = [].slice.call(t.querySelectorAll(i));
                        return r.default(s).each((function(t, i) {
                            n._addAriaAndCollapsedClass(e._getTargetFromElement(i), [i])
                        })), t
                    }, t._addAriaAndCollapsedClass = function(e, t) {
                        var n = r.default(e).hasClass("show");
                        t.length && r.default(t).toggleClass("collapsed", !n).attr("aria-expanded", n)
                    }, e._getTargetFromElement = function(e) {
                        var t = u.getSelectorFromElement(e);
                        return t ? document.querySelector(t) : null
                    }, e._jQueryInterface = function(t) {
                        return this.each((function() {
                            var n = r.default(this),
                                i = n.data("bs.collapse"),
                                s = l({}, _, n.data(), "object" == typeof t && t ? t : {});
                            if (!i && s.toggle && "string" == typeof t && /show|hide/.test(t) && (s.toggle = !1), i || (i = new e(this, s), n.data("bs.collapse", i)), "string" == typeof t) {
                                if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                                i[t]()
                            }
                        }))
                    }, o(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.6.1"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return _
                        }
                    }]), e
                }();
            r.default(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function(e) {
                "A" === e.currentTarget.tagName && e.preventDefault();
                var t = r.default(this),
                    n = u.getSelectorFromElement(this),
                    i = [].slice.call(document.querySelectorAll(n));
                r.default(i).each((function() {
                    var e = r.default(this),
                        n = e.data("bs.collapse") ? "toggle" : t.data();
                    k._jQueryInterface.call(e, n)
                }))
            })), r.default.fn[T] = k._jQueryInterface, r.default.fn[T].Constructor = k, r.default.fn[T].noConflict = function() {
                return r.default.fn[T] = C, k._jQueryInterface
            };
            var M = "dropdown",
                $ = r.default.fn[M],
                A = new RegExp("38|40|27"),
                D = {
                    offset: 0,
                    flip: !0,
                    boundary: "scrollParent",
                    reference: "toggle",
                    display: "dynamic",
                    popperConfig: null
                },
                P = {
                    offset: "(number|string|function)",
                    flip: "boolean",
                    boundary: "(string|element)",
                    reference: "(string|element)",
                    display: "string",
                    popperConfig: "(null|object)"
                },
                N = function() {
                    function e(e, t) {
                        this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                    }
                    var t = e.prototype;
                    return t.toggle = function() {
                        if (!this._element.disabled && !r.default(this._element).hasClass("disabled")) {
                            var t = r.default(this._menu).hasClass("show");
                            e._clearMenus(), t || this.show(!0)
                        }
                    }, t.show = function(t) {
                        if (void 0 === t && (t = !1), !(this._element.disabled || r.default(this._element).hasClass("disabled") || r.default(this._menu).hasClass("show"))) {
                            var n = {
                                    relatedTarget: this._element
                                },
                                i = r.default.Event("show.bs.dropdown", n),
                                a = e._getParentFromElement(this._element);
                            if (r.default(a).trigger(i), !i.isDefaultPrevented()) {
                                if (!this._inNavbar && t) {
                                    if (void 0 === s.default) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                                    var o = this._element;
                                    "parent" === this._config.reference ? o = a : u.isElement(this._config.reference) && (o = this._config.reference, void 0 !== this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && r.default(a).addClass("position-static"), this._popper = new s.default(o, this._menu, this._getPopperConfig())
                                }
                                "ontouchstart" in document.documentElement && 0 === r.default(a).closest(".navbar-nav").length && r.default(document.body).children().on("mouseover", null, r.default.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), r.default(this._menu).toggleClass("show"), r.default(a).toggleClass("show").trigger(r.default.Event("shown.bs.dropdown", n))
                            }
                        }
                    }, t.hide = function() {
                        if (!this._element.disabled && !r.default(this._element).hasClass("disabled") && r.default(this._menu).hasClass("show")) {
                            var t = {
                                    relatedTarget: this._element
                                },
                                n = r.default.Event("hide.bs.dropdown", t),
                                i = e._getParentFromElement(this._element);
                            r.default(i).trigger(n), n.isDefaultPrevented() || (this._popper && this._popper.destroy(), r.default(this._menu).toggleClass("show"), r.default(i).toggleClass("show").trigger(r.default.Event("hidden.bs.dropdown", t)))
                        }
                    }, t.dispose = function() {
                        r.default.removeData(this._element, "bs.dropdown"), r.default(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                    }, t.update = function() {
                        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                    }, t._addEventListeners = function() {
                        var e = this;
                        r.default(this._element).on("click.bs.dropdown", (function(t) {
                            t.preventDefault(), t.stopPropagation(), e.toggle()
                        }))
                    }, t._getConfig = function(e) {
                        return e = l({}, this.constructor.Default, r.default(this._element).data(), e), u.typeCheckConfig(M, e, this.constructor.DefaultType), e
                    }, t._getMenuElement = function() {
                        if (!this._menu) {
                            var t = e._getParentFromElement(this._element);
                            t && (this._menu = t.querySelector(".dropdown-menu"))
                        }
                        return this._menu
                    }, t._getPlacement = function() {
                        var e = r.default(this._element.parentNode),
                            t = "bottom-start";
                        return e.hasClass("dropup") ? t = r.default(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : r.default(this._menu).hasClass("dropdown-menu-right") && (t = "bottom-end"), t
                    }, t._detectNavbar = function() {
                        return r.default(this._element).closest(".navbar").length > 0
                    }, t._getOffset = function() {
                        var e = this,
                            t = {};
                        return "function" == typeof this._config.offset ? t.fn = function(t) {
                            return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element)), t
                        } : t.offset = this._config.offset, t
                    }, t._getPopperConfig = function() {
                        var e = {
                            placement: this._getPlacement(),
                            modifiers: {
                                offset: this._getOffset(),
                                flip: {
                                    enabled: this._config.flip
                                },
                                preventOverflow: {
                                    boundariesElement: this._config.boundary
                                }
                            }
                        };
                        return "static" === this._config.display && (e.modifiers.applyStyle = {
                            enabled: !1
                        }), l({}, e, this._config.popperConfig)
                    }, e._jQueryInterface = function(t) {
                        return this.each((function() {
                            var n = r.default(this).data("bs.dropdown");
                            if (n || (n = new e(this, "object" == typeof t ? t : null), r.default(this).data("bs.dropdown", n)), "string" == typeof t) {
                                if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                n[t]()
                            }
                        }))
                    }, e._clearMenus = function(t) {
                        if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                            for (var n = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), i = 0, s = n.length; i < s; i++) {
                                var a = e._getParentFromElement(n[i]),
                                    o = r.default(n[i]).data("bs.dropdown"),
                                    l = {
                                        relatedTarget: n[i]
                                    };
                                if (t && "click" === t.type && (l.clickEvent = t), o) {
                                    var d = o._menu;
                                    if (r.default(a).hasClass("show") && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && r.default.contains(a, t.target))) {
                                        var c = r.default.Event("hide.bs.dropdown", l);
                                        r.default(a).trigger(c), c.isDefaultPrevented() || ("ontouchstart" in document.documentElement && r.default(document.body).children().off("mouseover", null, r.default.noop), n[i].setAttribute("aria-expanded", "false"), o._popper && o._popper.destroy(), r.default(d).removeClass("show"), r.default(a).removeClass("show").trigger(r.default.Event("hidden.bs.dropdown", l)))
                                    }
                                }
                            }
                    }, e._getParentFromElement = function(e) {
                        var t, n = u.getSelectorFromElement(e);
                        return n && (t = document.querySelector(n)), t || e.parentNode
                    }, e._dataApiKeydownHandler = function(t) {
                        if (!(/input|textarea/i.test(t.target.tagName) ? 32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || r.default(t.target).closest(".dropdown-menu").length) : !A.test(t.which)) && !this.disabled && !r.default(this).hasClass("disabled")) {
                            var n = e._getParentFromElement(this),
                                i = r.default(n).hasClass("show");
                            if (i || 27 !== t.which) {
                                if (t.preventDefault(), t.stopPropagation(), !i || 27 === t.which || 32 === t.which) return 27 === t.which && r.default(n.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void r.default(this).trigger("click");
                                var s = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(e) {
                                    return r.default(e).is(":visible")
                                }));
                                if (0 !== s.length) {
                                    var a = s.indexOf(t.target);
                                    38 === t.which && a > 0 && a--, 40 === t.which && a < s.length - 1 && a++, a < 0 && (a = 0), s[a].focus()
                                }
                            }
                        }
                    }, o(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.6.1"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return D
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return P
                        }
                    }]), e
                }();
            r.default(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', N._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", N._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", N._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', (function(e) {
                e.preventDefault(), e.stopPropagation(), N._jQueryInterface.call(r.default(this), "toggle")
            })).on("click.bs.dropdown.data-api", ".dropdown form", (function(e) {
                e.stopPropagation()
            })), r.default.fn[M] = N._jQueryInterface, r.default.fn[M].Constructor = N, r.default.fn[M].noConflict = function() {
                return r.default.fn[M] = $, N._jQueryInterface
            };
            var O = r.default.fn.modal,
                I = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0,
                    show: !0
                },
                L = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean"
                },
                j = function() {
                    function e(e, t) {
                        this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
                    }
                    var t = e.prototype;
                    return t.toggle = function(e) {
                        return this._isShown ? this.hide() : this.show(e)
                    }, t.show = function(e) {
                        var t = this;
                        if (!this._isShown && !this._isTransitioning) {
                            var n = r.default.Event("show.bs.modal", {
                                relatedTarget: e
                            });
                            r.default(this._element).trigger(n), n.isDefaultPrevented() || (this._isShown = !0, r.default(this._element).hasClass("fade") && (this._isTransitioning = !0), this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), r.default(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', (function(e) {
                                return t.hide(e)
                            })), r.default(this._dialog).on("mousedown.dismiss.bs.modal", (function() {
                                r.default(t._element).one("mouseup.dismiss.bs.modal", (function(e) {
                                    r.default(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                                }))
                            })), this._showBackdrop((function() {
                                return t._showElement(e)
                            })))
                        }
                    }, t.hide = function(e) {
                        var t = this;
                        if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                            var n = r.default.Event("hide.bs.modal");
                            if (r.default(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                                this._isShown = !1;
                                var i = r.default(this._element).hasClass("fade");
                                if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), r.default(document).off("focusin.bs.modal"), r.default(this._element).removeClass("show"), r.default(this._element).off("click.dismiss.bs.modal"), r.default(this._dialog).off("mousedown.dismiss.bs.modal"), i) {
                                    var s = u.getTransitionDurationFromElement(this._element);
                                    r.default(this._element).one(u.TRANSITION_END, (function(e) {
                                        return t._hideModal(e)
                                    })).emulateTransitionEnd(s)
                                } else this._hideModal()
                            }
                        }
                    }, t.dispose = function() {
                        [window, this._element, this._dialog].forEach((function(e) {
                            return r.default(e).off(".bs.modal")
                        })), r.default(document).off("focusin.bs.modal"), r.default.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
                    }, t.handleUpdate = function() {
                        this._adjustDialog()
                    }, t._getConfig = function(e) {
                        return e = l({}, I, e), u.typeCheckConfig("modal", e, L), e
                    }, t._triggerBackdropTransition = function() {
                        var e = this,
                            t = r.default.Event("hidePrevented.bs.modal");
                        if (r.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                            var n = this._element.scrollHeight > document.documentElement.clientHeight;
                            n || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
                            var i = u.getTransitionDurationFromElement(this._dialog);
                            r.default(this._element).off(u.TRANSITION_END), r.default(this._element).one(u.TRANSITION_END, (function() {
                                e._element.classList.remove("modal-static"), n || r.default(e._element).one(u.TRANSITION_END, (function() {
                                    e._element.style.overflowY = ""
                                })).emulateTransitionEnd(e._element, i)
                            })).emulateTransitionEnd(i), this._element.focus()
                        }
                    }, t._showElement = function(e) {
                        var t = this,
                            n = r.default(this._element).hasClass("fade"),
                            i = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), r.default(this._dialog).hasClass("modal-dialog-scrollable") && i ? i.scrollTop = 0 : this._element.scrollTop = 0, n && u.reflow(this._element), r.default(this._element).addClass("show"), this._config.focus && this._enforceFocus();
                        var s = r.default.Event("shown.bs.modal", {
                                relatedTarget: e
                            }),
                            a = function() {
                                t._config.focus && t._element.focus(), t._isTransitioning = !1, r.default(t._element).trigger(s)
                            };
                        if (n) {
                            var o = u.getTransitionDurationFromElement(this._dialog);
                            r.default(this._dialog).one(u.TRANSITION_END, a).emulateTransitionEnd(o)
                        } else a()
                    }, t._enforceFocus = function() {
                        var e = this;
                        r.default(document).off("focusin.bs.modal").on("focusin.bs.modal", (function(t) {
                            document !== t.target && e._element !== t.target && 0 === r.default(e._element).has(t.target).length && e._element.focus()
                        }))
                    }, t._setEscapeEvent = function() {
                        var e = this;
                        this._isShown ? r.default(this._element).on("keydown.dismiss.bs.modal", (function(t) {
                            e._config.keyboard && 27 === t.which ? (t.preventDefault(), e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition()
                        })) : this._isShown || r.default(this._element).off("keydown.dismiss.bs.modal")
                    }, t._setResizeEvent = function() {
                        var e = this;
                        this._isShown ? r.default(window).on("resize.bs.modal", (function(t) {
                            return e.handleUpdate(t)
                        })) : r.default(window).off("resize.bs.modal")
                    }, t._hideModal = function() {
                        var e = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop((function() {
                            r.default(document.body).removeClass("modal-open"), e._resetAdjustments(), e._resetScrollbar(), r.default(e._element).trigger("hidden.bs.modal")
                        }))
                    }, t._removeBackdrop = function() {
                        this._backdrop && (r.default(this._backdrop).remove(), this._backdrop = null)
                    }, t._showBackdrop = function(e) {
                        var t = this,
                            n = r.default(this._element).hasClass("fade") ? "fade" : "";
                        if (this._isShown && this._config.backdrop) {
                            if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), r.default(this._backdrop).appendTo(document.body), r.default(this._element).on("click.dismiss.bs.modal", (function(e) {
                                    t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._triggerBackdropTransition() : t.hide())
                                })), n && u.reflow(this._backdrop), r.default(this._backdrop).addClass("show"), !e) return;
                            if (!n) return void e();
                            var i = u.getTransitionDurationFromElement(this._backdrop);
                            r.default(this._backdrop).one(u.TRANSITION_END, e).emulateTransitionEnd(i)
                        } else if (!this._isShown && this._backdrop) {
                            r.default(this._backdrop).removeClass("show");
                            var s = function() {
                                t._removeBackdrop(), e && e()
                            };
                            if (r.default(this._element).hasClass("fade")) {
                                var a = u.getTransitionDurationFromElement(this._backdrop);
                                r.default(this._backdrop).one(u.TRANSITION_END, s).emulateTransitionEnd(a)
                            } else s()
                        } else e && e()
                    }, t._adjustDialog = function() {
                        var e = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                    }, t._resetAdjustments = function() {
                        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                    }, t._checkScrollbar = function() {
                        var e = document.body.getBoundingClientRect();
                        this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                    }, t._setScrollbar = function() {
                        var e = this;
                        if (this._isBodyOverflowing) {
                            var t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
                                n = [].slice.call(document.querySelectorAll(".sticky-top"));
                            r.default(t).each((function(t, n) {
                                var i = n.style.paddingRight,
                                    s = r.default(n).css("padding-right");
                                r.default(n).data("padding-right", i).css("padding-right", parseFloat(s) + e._scrollbarWidth + "px")
                            })), r.default(n).each((function(t, n) {
                                var i = n.style.marginRight,
                                    s = r.default(n).css("margin-right");
                                r.default(n).data("margin-right", i).css("margin-right", parseFloat(s) - e._scrollbarWidth + "px")
                            }));
                            var i = document.body.style.paddingRight,
                                s = r.default(document.body).css("padding-right");
                            r.default(document.body).data("padding-right", i).css("padding-right", parseFloat(s) + this._scrollbarWidth + "px")
                        }
                        r.default(document.body).addClass("modal-open")
                    }, t._resetScrollbar = function() {
                        var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
                        r.default(e).each((function(e, t) {
                            var n = r.default(t).data("padding-right");
                            r.default(t).removeData("padding-right"), t.style.paddingRight = n || ""
                        }));
                        var t = [].slice.call(document.querySelectorAll(".sticky-top"));
                        r.default(t).each((function(e, t) {
                            var n = r.default(t).data("margin-right");
                            void 0 !== n && r.default(t).css("margin-right", n).removeData("margin-right")
                        }));
                        var n = r.default(document.body).data("padding-right");
                        r.default(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
                    }, t._getScrollbarWidth = function() {
                        var e = document.createElement("div");
                        e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                        var t = e.getBoundingClientRect().width - e.clientWidth;
                        return document.body.removeChild(e), t
                    }, e._jQueryInterface = function(t, n) {
                        return this.each((function() {
                            var i = r.default(this).data("bs.modal"),
                                s = l({}, I, r.default(this).data(), "object" == typeof t && t ? t : {});
                            if (i || (i = new e(this, s), r.default(this).data("bs.modal", i)), "string" == typeof t) {
                                if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                                i[t](n)
                            } else s.show && i.show(n)
                        }))
                    }, o(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.6.1"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return I
                        }
                    }]), e
                }();
            r.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function(e) {
                var t, n = this,
                    i = u.getSelectorFromElement(this);
                i && (t = document.querySelector(i));
                var s = r.default(t).data("bs.modal") ? "toggle" : l({}, r.default(t).data(), r.default(this).data());
                "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
                var a = r.default(t).one("show.bs.modal", (function(e) {
                    e.isDefaultPrevented() || a.one("hidden.bs.modal", (function() {
                        r.default(n).is(":visible") && n.focus()
                    }))
                }));
                j._jQueryInterface.call(r.default(t), s, this)
            })), r.default.fn.modal = j._jQueryInterface, r.default.fn.modal.Constructor = j, r.default.fn.modal.noConflict = function() {
                return r.default.fn.modal = O, j._jQueryInterface
            };
            var z = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
                H = {
                    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                    a: ["target", "href", "title", "rel"],
                    area: [],
                    b: [],
                    br: [],
                    col: [],
                    code: [],
                    div: [],
                    em: [],
                    hr: [],
                    h1: [],
                    h2: [],
                    h3: [],
                    h4: [],
                    h5: [],
                    h6: [],
                    i: [],
                    img: ["src", "srcset", "alt", "title", "width", "height"],
                    li: [],
                    ol: [],
                    p: [],
                    pre: [],
                    s: [],
                    small: [],
                    span: [],
                    sub: [],
                    sup: [],
                    strong: [],
                    u: [],
                    ul: []
                },
                q = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
                B = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

            function R(e, t, n) {
                if (0 === e.length) return e;
                if (n && "function" == typeof n) return n(e);
                for (var i = (new window.DOMParser).parseFromString(e, "text/html"), r = Object.keys(t), s = [].slice.call(i.body.querySelectorAll("*")), a = function(e, n) {
                        var i = s[e],
                            a = i.nodeName.toLowerCase();
                        if (-1 === r.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                        var o = [].slice.call(i.attributes),
                            l = [].concat(t["*"] || [], t[a] || []);
                        o.forEach((function(e) {
                            (function(e, t) {
                                var n = e.nodeName.toLowerCase();
                                if (-1 !== t.indexOf(n)) return -1 === z.indexOf(n) || Boolean(q.test(e.nodeValue) || B.test(e.nodeValue));
                                for (var i = t.filter((function(e) {
                                        return e instanceof RegExp
                                    })), r = 0, s = i.length; r < s; r++)
                                    if (i[r].test(n)) return !0;
                                return !1
                            })(e, l) || i.removeAttribute(e.nodeName)
                        }))
                    }, o = 0, l = s.length; o < l; o++) a(o);
                return i.body.innerHTML
            }
            var F = "tooltip",
                W = r.default.fn[F],
                X = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
                Y = ["sanitize", "whiteList", "sanitizeFn"],
                G = {
                    AUTO: "auto",
                    TOP: "top",
                    RIGHT: "right",
                    BOTTOM: "bottom",
                    LEFT: "left"
                },
                V = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: 0,
                    container: !1,
                    fallbackPlacement: "flip",
                    boundary: "scrollParent",
                    customClass: "",
                    sanitize: !0,
                    sanitizeFn: null,
                    whiteList: H,
                    popperConfig: null
                },
                U = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(number|string|function)",
                    container: "(string|element|boolean)",
                    fallbackPlacement: "(string|array)",
                    boundary: "(string|element)",
                    customClass: "(string|function)",
                    sanitize: "boolean",
                    sanitizeFn: "(null|function)",
                    whiteList: "object",
                    popperConfig: "(null|object)"
                },
                Q = {
                    HIDE: "hide.bs.tooltip",
                    HIDDEN: "hidden.bs.tooltip",
                    SHOW: "show.bs.tooltip",
                    SHOWN: "shown.bs.tooltip",
                    INSERTED: "inserted.bs.tooltip",
                    CLICK: "click.bs.tooltip",
                    FOCUSIN: "focusin.bs.tooltip",
                    FOCUSOUT: "focusout.bs.tooltip",
                    MOUSEENTER: "mouseenter.bs.tooltip",
                    MOUSELEAVE: "mouseleave.bs.tooltip"
                },
                K = function() {
                    function e(e, t) {
                        if (void 0 === s.default) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                    }
                    var t = e.prototype;
                    return t.enable = function() {
                        this._isEnabled = !0
                    }, t.disable = function() {
                        this._isEnabled = !1
                    }, t.toggleEnabled = function() {
                        this._isEnabled = !this._isEnabled
                    }, t.toggle = function(e) {
                        if (this._isEnabled)
                            if (e) {
                                var t = this.constructor.DATA_KEY,
                                    n = r.default(e.currentTarget).data(t);
                                n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), r.default(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                            } else {
                                if (r.default(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
                                this._enter(null, this)
                            }
                    }, t.dispose = function() {
                        clearTimeout(this._timeout), r.default.removeData(this.element, this.constructor.DATA_KEY), r.default(this.element).off(this.constructor.EVENT_KEY), r.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && r.default(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                    }, t.show = function() {
                        var e = this;
                        if ("none" === r.default(this.element).css("display")) throw new Error("Please use show on visible elements");
                        var t = r.default.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            r.default(this.element).trigger(t);
                            var n = u.findShadowRoot(this.element),
                                i = r.default.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                            if (t.isDefaultPrevented() || !i) return;
                            var a = this.getTipElement(),
                                o = u.getUID(this.constructor.NAME);
                            a.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && r.default(a).addClass("fade");
                            var l = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement,
                                d = this._getAttachment(l);
                            this.addAttachmentClass(d);
                            var c = this._getContainer();
                            r.default(a).data(this.constructor.DATA_KEY, this), r.default.contains(this.element.ownerDocument.documentElement, this.tip) || r.default(a).appendTo(c), r.default(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new s.default(this.element, a, this._getPopperConfig(d)), r.default(a).addClass("show"), r.default(a).addClass(this.config.customClass), "ontouchstart" in document.documentElement && r.default(document.body).children().on("mouseover", null, r.default.noop);
                            var p = function() {
                                e.config.animation && e._fixTransition();
                                var t = e._hoverState;
                                e._hoverState = null, r.default(e.element).trigger(e.constructor.Event.SHOWN), "out" === t && e._leave(null, e)
                            };
                            if (r.default(this.tip).hasClass("fade")) {
                                var f = u.getTransitionDurationFromElement(this.tip);
                                r.default(this.tip).one(u.TRANSITION_END, p).emulateTransitionEnd(f)
                            } else p()
                        }
                    }, t.hide = function(e) {
                        var t = this,
                            n = this.getTipElement(),
                            i = r.default.Event(this.constructor.Event.HIDE),
                            s = function() {
                                "show" !== t._hoverState && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), r.default(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e()
                            };
                        if (r.default(this.element).trigger(i), !i.isDefaultPrevented()) {
                            if (r.default(n).removeClass("show"), "ontouchstart" in document.documentElement && r.default(document.body).children().off("mouseover", null, r.default.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, r.default(this.tip).hasClass("fade")) {
                                var a = u.getTransitionDurationFromElement(n);
                                r.default(n).one(u.TRANSITION_END, s).emulateTransitionEnd(a)
                            } else s();
                            this._hoverState = ""
                        }
                    }, t.update = function() {
                        null !== this._popper && this._popper.scheduleUpdate()
                    }, t.isWithContent = function() {
                        return Boolean(this.getTitle())
                    }, t.addAttachmentClass = function(e) {
                        r.default(this.getTipElement()).addClass("bs-tooltip-" + e)
                    }, t.getTipElement = function() {
                        return this.tip = this.tip || r.default(this.config.template)[0], this.tip
                    }, t.setContent = function() {
                        var e = this.getTipElement();
                        this.setElementContent(r.default(e.querySelectorAll(".tooltip-inner")), this.getTitle()), r.default(e).removeClass("fade show")
                    }, t.setElementContent = function(e, t) {
                        "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = R(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t)) : e.text(t) : this.config.html ? r.default(t).parent().is(e) || e.empty().append(t) : e.text(r.default(t).text())
                    }, t.getTitle = function() {
                        var e = this.element.getAttribute("data-original-title");
                        return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                    }, t._getPopperConfig = function(e) {
                        var t = this;
                        return l({}, {
                            placement: e,
                            modifiers: {
                                offset: this._getOffset(),
                                flip: {
                                    behavior: this.config.fallbackPlacement
                                },
                                arrow: {
                                    element: ".arrow"
                                },
                                preventOverflow: {
                                    boundariesElement: this.config.boundary
                                }
                            },
                            onCreate: function(e) {
                                e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                            },
                            onUpdate: function(e) {
                                return t._handlePopperPlacementChange(e)
                            }
                        }, this.config.popperConfig)
                    }, t._getOffset = function() {
                        var e = this,
                            t = {};
                        return "function" == typeof this.config.offset ? t.fn = function(t) {
                            return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element)), t
                        } : t.offset = this.config.offset, t
                    }, t._getContainer = function() {
                        return !1 === this.config.container ? document.body : u.isElement(this.config.container) ? r.default(this.config.container) : r.default(document).find(this.config.container)
                    }, t._getAttachment = function(e) {
                        return G[e.toUpperCase()]
                    }, t._setListeners = function() {
                        var e = this;
                        this.config.trigger.split(" ").forEach((function(t) {
                            if ("click" === t) r.default(e.element).on(e.constructor.Event.CLICK, e.config.selector, (function(t) {
                                return e.toggle(t)
                            }));
                            else if ("manual" !== t) {
                                var n = "hover" === t ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                    i = "hover" === t ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                                r.default(e.element).on(n, e.config.selector, (function(t) {
                                    return e._enter(t)
                                })).on(i, e.config.selector, (function(t) {
                                    return e._leave(t)
                                }))
                            }
                        })), this._hideModalHandler = function() {
                            e.element && e.hide()
                        }, r.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = l({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                    }, t._fixTitle = function() {
                        var e = typeof this.element.getAttribute("data-original-title");
                        (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                    }, t._enter = function(e, t) {
                        var n = this.constructor.DATA_KEY;
                        (t = t || r.default(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), r.default(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0), r.default(t.getTipElement()).hasClass("show") || "show" === t._hoverState ? t._hoverState = "show" : (clearTimeout(t._timeout), t._hoverState = "show", t.config.delay && t.config.delay.show ? t._timeout = setTimeout((function() {
                            "show" === t._hoverState && t.show()
                        }), t.config.delay.show) : t.show())
                    }, t._leave = function(e, t) {
                        var n = this.constructor.DATA_KEY;
                        (t = t || r.default(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), r.default(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? "focus" : "hover"] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t.config.delay && t.config.delay.hide ? t._timeout = setTimeout((function() {
                            "out" === t._hoverState && t.hide()
                        }), t.config.delay.hide) : t.hide())
                    }, t._isWithActiveTrigger = function() {
                        for (var e in this._activeTrigger)
                            if (this._activeTrigger[e]) return !0;
                        return !1
                    }, t._getConfig = function(e) {
                        var t = r.default(this.element).data();
                        return Object.keys(t).forEach((function(e) {
                            -1 !== Y.indexOf(e) && delete t[e]
                        })), "number" == typeof(e = l({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                            show: e.delay,
                            hide: e.delay
                        }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), u.typeCheckConfig(F, e, this.constructor.DefaultType), e.sanitize && (e.template = R(e.template, e.whiteList, e.sanitizeFn)), e
                    }, t._getDelegateConfig = function() {
                        var e = {};
                        if (this.config)
                            for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                        return e
                    }, t._cleanTipClass = function() {
                        var e = r.default(this.getTipElement()),
                            t = e.attr("class").match(X);
                        null !== t && t.length && e.removeClass(t.join(""))
                    }, t._handlePopperPlacementChange = function(e) {
                        this.tip = e.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                    }, t._fixTransition = function() {
                        var e = this.getTipElement(),
                            t = this.config.animation;
                        null === e.getAttribute("x-placement") && (r.default(e).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
                    }, e._jQueryInterface = function(t) {
                        return this.each((function() {
                            var n = r.default(this),
                                i = n.data("bs.tooltip"),
                                s = "object" == typeof t && t;
                            if ((i || !/dispose|hide/.test(t)) && (i || (i = new e(this, s), n.data("bs.tooltip", i)), "string" == typeof t)) {
                                if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                                i[t]()
                            }
                        }))
                    }, o(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.6.1"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return V
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return F
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return "bs.tooltip"
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return Q
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return ".bs.tooltip"
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return U
                        }
                    }]), e
                }();
            r.default.fn[F] = K._jQueryInterface, r.default.fn[F].Constructor = K, r.default.fn[F].noConflict = function() {
                return r.default.fn[F] = W, K._jQueryInterface
            };
            var J = "popover",
                Z = r.default.fn[J],
                ee = new RegExp("(^|\\s)bs-popover\\S+", "g"),
                te = l({}, K.Default, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                }),
                ne = l({}, K.DefaultType, {
                    content: "(string|element|function)"
                }),
                ie = {
                    HIDE: "hide.bs.popover",
                    HIDDEN: "hidden.bs.popover",
                    SHOW: "show.bs.popover",
                    SHOWN: "shown.bs.popover",
                    INSERTED: "inserted.bs.popover",
                    CLICK: "click.bs.popover",
                    FOCUSIN: "focusin.bs.popover",
                    FOCUSOUT: "focusout.bs.popover",
                    MOUSEENTER: "mouseenter.bs.popover",
                    MOUSELEAVE: "mouseleave.bs.popover"
                },
                re = function(e) {
                    var t, n;

                    function i() {
                        return e.apply(this, arguments) || this
                    }
                    n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, d(t, n);
                    var s = i.prototype;
                    return s.isWithContent = function() {
                        return this.getTitle() || this._getContent()
                    }, s.addAttachmentClass = function(e) {
                        r.default(this.getTipElement()).addClass("bs-popover-" + e)
                    }, s.getTipElement = function() {
                        return this.tip = this.tip || r.default(this.config.template)[0], this.tip
                    }, s.setContent = function() {
                        var e = r.default(this.getTipElement());
                        this.setElementContent(e.find(".popover-header"), this.getTitle());
                        var t = this._getContent();
                        "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(".popover-body"), t), e.removeClass("fade show")
                    }, s._getContent = function() {
                        return this.element.getAttribute("data-content") || this.config.content
                    }, s._cleanTipClass = function() {
                        var e = r.default(this.getTipElement()),
                            t = e.attr("class").match(ee);
                        null !== t && t.length > 0 && e.removeClass(t.join(""))
                    }, i._jQueryInterface = function(e) {
                        return this.each((function() {
                            var t = r.default(this).data("bs.popover"),
                                n = "object" == typeof e ? e : null;
                            if ((t || !/dispose|hide/.test(e)) && (t || (t = new i(this, n), r.default(this).data("bs.popover", t)), "string" == typeof e)) {
                                if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
                                t[e]()
                            }
                        }))
                    }, o(i, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.6.1"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return te
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return J
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return "bs.popover"
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return ie
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return ".bs.popover"
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return ne
                        }
                    }]), i
                }(K);
            r.default.fn[J] = re._jQueryInterface, r.default.fn[J].Constructor = re, r.default.fn[J].noConflict = function() {
                return r.default.fn[J] = Z, re._jQueryInterface
            };
            var se = "scrollspy",
                ae = r.default.fn[se],
                oe = {
                    offset: 10,
                    method: "auto",
                    target: ""
                },
                le = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                },
                de = function() {
                    function e(e, t) {
                        var n = this;
                        this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, r.default(this._scrollElement).on("scroll.bs.scrollspy", (function(e) {
                            return n._process(e)
                        })), this.refresh(), this._process()
                    }
                    var t = e.prototype;
                    return t.refresh = function() {
                        var e = this,
                            t = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                            n = "auto" === this._config.method ? t : this._config.method,
                            i = "position" === n ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function(e) {
                            var t, s = u.getSelectorFromElement(e);
                            if (s && (t = document.querySelector(s)), t) {
                                var a = t.getBoundingClientRect();
                                if (a.width || a.height) return [r.default(t)[n]().top + i, s]
                            }
                            return null
                        })).filter((function(e) {
                            return e
                        })).sort((function(e, t) {
                            return e[0] - t[0]
                        })).forEach((function(t) {
                            e._offsets.push(t[0]), e._targets.push(t[1])
                        }))
                    }, t.dispose = function() {
                        r.default.removeData(this._element, "bs.scrollspy"), r.default(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                    }, t._getConfig = function(e) {
                        if ("string" != typeof(e = l({}, oe, "object" == typeof e && e ? e : {})).target && u.isElement(e.target)) {
                            var t = r.default(e.target).attr("id");
                            t || (t = u.getUID(se), r.default(e.target).attr("id", t)), e.target = "#" + t
                        }
                        return u.typeCheckConfig(se, e, le), e
                    }, t._getScrollTop = function() {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                    }, t._getScrollHeight = function() {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }, t._getOffsetHeight = function() {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                    }, t._process = function() {
                        var e = this._getScrollTop() + this._config.offset,
                            t = this._getScrollHeight(),
                            n = this._config.offset + t - this._getOffsetHeight();
                        if (this._scrollHeight !== t && this.refresh(), e >= n) {
                            var i = this._targets[this._targets.length - 1];
                            this._activeTarget !== i && this._activate(i)
                        } else {
                            if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                            for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                        }
                    }, t._activate = function(e) {
                        this._activeTarget = e, this._clear();
                        var t = this._selector.split(",").map((function(t) {
                                return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                            })),
                            n = r.default([].slice.call(document.querySelectorAll(t.join(","))));
                        n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass("active"), n.addClass("active")) : (n.addClass("active"), n.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), n.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")), r.default(this._scrollElement).trigger("activate.bs.scrollspy", {
                            relatedTarget: e
                        })
                    }, t._clear = function() {
                        [].slice.call(document.querySelectorAll(this._selector)).filter((function(e) {
                            return e.classList.contains("active")
                        })).forEach((function(e) {
                            return e.classList.remove("active")
                        }))
                    }, e._jQueryInterface = function(t) {
                        return this.each((function() {
                            var n = r.default(this).data("bs.scrollspy");
                            if (n || (n = new e(this, "object" == typeof t && t), r.default(this).data("bs.scrollspy", n)), "string" == typeof t) {
                                if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                n[t]()
                            }
                        }))
                    }, o(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.6.1"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return oe
                        }
                    }]), e
                }();
            r.default(window).on("load.bs.scrollspy.data-api", (function() {
                for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), t = e.length; t--;) {
                    var n = r.default(e[t]);
                    de._jQueryInterface.call(n, n.data())
                }
            })), r.default.fn[se] = de._jQueryInterface, r.default.fn[se].Constructor = de, r.default.fn[se].noConflict = function() {
                return r.default.fn[se] = ae, de._jQueryInterface
            };
            var ce = r.default.fn.tab,
                ue = function() {
                    function e(e) {
                        this._element = e
                    }
                    var t = e.prototype;
                    return t.show = function() {
                        var e = this;
                        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && r.default(this._element).hasClass("active") || r.default(this._element).hasClass("disabled"))) {
                            var t, n, i = r.default(this._element).closest(".nav, .list-group")[0],
                                s = u.getSelectorFromElement(this._element);
                            if (i) {
                                var a = "UL" === i.nodeName || "OL" === i.nodeName ? "> li > .active" : ".active";
                                n = (n = r.default.makeArray(r.default(i).find(a)))[n.length - 1]
                            }
                            var o = r.default.Event("hide.bs.tab", {
                                    relatedTarget: this._element
                                }),
                                l = r.default.Event("show.bs.tab", {
                                    relatedTarget: n
                                });
                            if (n && r.default(n).trigger(o), r.default(this._element).trigger(l), !l.isDefaultPrevented() && !o.isDefaultPrevented()) {
                                s && (t = document.querySelector(s)), this._activate(this._element, i);
                                var d = function() {
                                    var t = r.default.Event("hidden.bs.tab", {
                                            relatedTarget: e._element
                                        }),
                                        i = r.default.Event("shown.bs.tab", {
                                            relatedTarget: n
                                        });
                                    r.default(n).trigger(t), r.default(e._element).trigger(i)
                                };
                                t ? this._activate(t, t.parentNode, d) : d()
                            }
                        }
                    }, t.dispose = function() {
                        r.default.removeData(this._element, "bs.tab"), this._element = null
                    }, t._activate = function(e, t, n) {
                        var i = this,
                            s = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? r.default(t).children(".active") : r.default(t).find("> li > .active"))[0],
                            a = n && s && r.default(s).hasClass("fade"),
                            o = function() {
                                return i._transitionComplete(e, s, n)
                            };
                        if (s && a) {
                            var l = u.getTransitionDurationFromElement(s);
                            r.default(s).removeClass("show").one(u.TRANSITION_END, o).emulateTransitionEnd(l)
                        } else o()
                    }, t._transitionComplete = function(e, t, n) {
                        if (t) {
                            r.default(t).removeClass("active");
                            var i = r.default(t.parentNode).find("> .dropdown-menu .active")[0];
                            i && r.default(i).removeClass("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                        }
                        r.default(e).addClass("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), u.reflow(e), e.classList.contains("fade") && e.classList.add("show");
                        var s = e.parentNode;
                        if (s && "LI" === s.nodeName && (s = s.parentNode), s && r.default(s).hasClass("dropdown-menu")) {
                            var a = r.default(e).closest(".dropdown")[0];
                            if (a) {
                                var o = [].slice.call(a.querySelectorAll(".dropdown-toggle"));
                                r.default(o).addClass("active")
                            }
                            e.setAttribute("aria-expanded", !0)
                        }
                        n && n()
                    }, e._jQueryInterface = function(t) {
                        return this.each((function() {
                            var n = r.default(this),
                                i = n.data("bs.tab");
                            if (i || (i = new e(this), n.data("bs.tab", i)), "string" == typeof t) {
                                if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                                i[t]()
                            }
                        }))
                    }, o(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.6.1"
                        }
                    }]), e
                }();
            r.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function(e) {
                e.preventDefault(), ue._jQueryInterface.call(r.default(this), "show")
            })), r.default.fn.tab = ue._jQueryInterface, r.default.fn.tab.Constructor = ue, r.default.fn.tab.noConflict = function() {
                return r.default.fn.tab = ce, ue._jQueryInterface
            };
            var pe = "toast",
                fe = r.default.fn[pe],
                he = {
                    animation: !0,
                    autohide: !0,
                    delay: 500
                },
                me = {
                    animation: "boolean",
                    autohide: "boolean",
                    delay: "number"
                },
                ge = function() {
                    function e(e, t) {
                        this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
                    }
                    var t = e.prototype;
                    return t.show = function() {
                        var e = this,
                            t = r.default.Event("show.bs.toast");
                        if (r.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                            this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
                            var n = function() {
                                e._element.classList.remove("showing"), e._element.classList.add("show"), r.default(e._element).trigger("shown.bs.toast"), e._config.autohide && (e._timeout = setTimeout((function() {
                                    e.hide()
                                }), e._config.delay))
                            };
                            if (this._element.classList.remove("hide"), u.reflow(this._element), this._element.classList.add("showing"), this._config.animation) {
                                var i = u.getTransitionDurationFromElement(this._element);
                                r.default(this._element).one(u.TRANSITION_END, n).emulateTransitionEnd(i)
                            } else n()
                        }
                    }, t.hide = function() {
                        if (this._element.classList.contains("show")) {
                            var e = r.default.Event("hide.bs.toast");
                            r.default(this._element).trigger(e), e.isDefaultPrevented() || this._close()
                        }
                    }, t.dispose = function() {
                        this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), r.default(this._element).off("click.dismiss.bs.toast"), r.default.removeData(this._element, "bs.toast"), this._element = null, this._config = null
                    }, t._getConfig = function(e) {
                        return e = l({}, he, r.default(this._element).data(), "object" == typeof e && e ? e : {}), u.typeCheckConfig(pe, e, this.constructor.DefaultType), e
                    }, t._setListeners = function() {
                        var e = this;
                        r.default(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', (function() {
                            return e.hide()
                        }))
                    }, t._close = function() {
                        var e = this,
                            t = function() {
                                e._element.classList.add("hide"), r.default(e._element).trigger("hidden.bs.toast")
                            };
                        if (this._element.classList.remove("show"), this._config.animation) {
                            var n = u.getTransitionDurationFromElement(this._element);
                            r.default(this._element).one(u.TRANSITION_END, t).emulateTransitionEnd(n)
                        } else t()
                    }, t._clearTimeout = function() {
                        clearTimeout(this._timeout), this._timeout = null
                    }, e._jQueryInterface = function(t) {
                        return this.each((function() {
                            var n = r.default(this),
                                i = n.data("bs.toast");
                            if (i || (i = new e(this, "object" == typeof t && t), n.data("bs.toast", i)), "string" == typeof t) {
                                if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                                i[t](this)
                            }
                        }))
                    }, o(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.6.1"
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return me
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return he
                        }
                    }]), e
                }();
            r.default.fn[pe] = ge._jQueryInterface, r.default.fn[pe].Constructor = ge, r.default.fn[pe].noConflict = function() {
                return r.default.fn[pe] = fe, ge._jQueryInterface
            }, e.Alert = f, e.Button = m, e.Carousel = E, e.Collapse = k, e.Dropdown = N, e.Modal = j, e.Popover = re, e.Scrollspy = de, e.Tab = ue, e.Toast = ge, e.Tooltip = K, e.Util = u, Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }(t, n("1157"), n("f0bd"))
    },
    ce4d: function(e, t, n) {
        "use strict";
        n.r(t);
        var i, r, s = n("1157"),
            a = n.n(s),
            o = n("d415"),
            l = n.n(o),
            d = (n("4989"), a.a);
        i = d(".banner"), r = [], i.each((function(e, t) {
            r.push(d(t).offset().top)
        })), d(window).scroll((function() {
            var e = d(this).scrollTop();
            i.each((function(t, n) {
                var i = r[t];
                d(n).css("background-position", "50% ".concat(-.5 * (e - i), "px"))
            }))
        }));
        new l.a(".chapter-images", {
            mode: "horizontal",
            centeredSlides: !0,
            parallax: !0,
            allowTouchMove: !0,
            simulateTouch: !0,
            disableOnInteraction: !0,
            speed: 3e3,
            autoplay: !0,
            autoplayDisableOnInteraction: !1,
            loop: !0,
            freeMode: {
                enabled: !0,
                sticky: !0
            }
        });
        d(".img-parallax").each((function() {
            var e = d(this),
                t = d(this).parent();

            function n() {
                var n = e.data("speed"),
                    i = t.offset().top,
                    r = d(this).scrollTop(),
                    s = d(this).height(),
                    a = t.innerHeight(),
                    o = 0,
                    l = r + s;
                l > i && r < i + a && (o = (l - i) * n / (s + a) * 50 + (15 - 15 * n));
                e.css({
                    top: "".concat(o, "%"),
                    transform: "translateY(-".concat(o, "%)")
                })
            }
            d(document).on({
                scroll: function() {
                    n()
                },
                ready: function() {
                    n()
                }
            })
        })), d(window).on("scroll", (function() {
            var e = d(window).scrollTop();
            d("#hero").toggleClass("fixed", e >= d("#hero").offset().top)
        })), d(window).scroll();
        new l.a(".our-team-slider-area", {
            slidesPerView: 3,
            spaceBetween: 10,
            loop: !0,
            autoplay: !1,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 5
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 5
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 15
                },
                1400: {
                    slidesPerView: 4,
                    spaceBetween: 25
                }
            }
        });
        d('a[href^="#"]').click((function() {
            return d("html, body").animate({
                scrollTop: d(d(this).attr("href")).offset().top - 95
            }, 300), !1
        })), d(window).on("scroll", (function() {
            d(window).scrollTop() > 200 ? d("header").addClass("fixed-top") : d("header").removeClass("fixed-top")
        })), d(".nav-link").click((function() {
            d(".navbar-collapse").hasClass("show") ? (d(".navbar-collapse").removeClass("show"), d(".navbar-toggler").attr("aria-expanded", "false")) : (d(".navbar-collapse").addClass("show"), d(".navbar-toggler").attr("aria-expanded", "true"))
        }));
        var c = d("#backtotop");
        d(window).scroll((function() {
            d(window).scrollTop() > 300 ? c.addClass("show") : c.removeClass("show")
        })), c.on("click", (function(e) {
            e.preventDefault(), d("html, body").animate({
                scrollTop: 0
            }, "300")
        }))
    },
    d415: function(e, t, n) {
        e.exports = function() {
            "use strict";

            function e(e) {
                return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
            }

            function t(n, i) {
                void 0 === n && (n = {}), void 0 === i && (i = {}), Object.keys(i).forEach(r => {
                    void 0 === n[r] ? n[r] = i[r] : e(i[r]) && e(n[r]) && Object.keys(i[r]).length > 0 && t(n[r], i[r])
                })
            }
            const n = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() {}
                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function i() {
                const e = "undefined" != typeof document ? document : {};
                return t(e, n), e
            }
            const r = {
                document: n,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
                cancelAnimationFrame(e) {
                    "undefined" != typeof setTimeout && clearTimeout(e)
                }
            };

            function s() {
                const e = "undefined" != typeof window ? window : {};
                return t(e, r), e
            }
            class a extends Array {
                constructor(e) {
                    "number" == typeof e ? super(e) : (super(...e || []), function(e) {
                        const t = e.__proto__;
                        Object.defineProperty(e, "__proto__", {
                            get: () => t,
                            set(e) {
                                t.__proto__ = e
                            }
                        })
                    }(this))
                }
            }

            function o(e) {
                void 0 === e && (e = []);
                const t = [];
                return e.forEach(e => {
                    Array.isArray(e) ? t.push(...o(e)) : t.push(e)
                }), t
            }

            function l(e, t) {
                return Array.prototype.filter.call(e, t)
            }

            function d(e, t) {
                const n = s(),
                    r = i();
                let o = [];
                if (!t && e instanceof a) return e;
                if (!e) return new a(o);
                if ("string" == typeof e) {
                    const n = e.trim();
                    if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
                        let e = "div";
                        0 === n.indexOf("<li") && (e = "ul"), 0 === n.indexOf("<tr") && (e = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (e = "tr"), 0 === n.indexOf("<tbody") && (e = "table"), 0 === n.indexOf("<option") && (e = "select");
                        const t = r.createElement(e);
                        t.innerHTML = n;
                        for (let e = 0; e < t.childNodes.length; e += 1) o.push(t.childNodes[e])
                    } else o = function(e, t) {
                        if ("string" != typeof e) return [e];
                        const n = [],
                            i = t.querySelectorAll(e);
                        for (let e = 0; e < i.length; e += 1) n.push(i[e]);
                        return n
                    }(e.trim(), t || r)
                } else if (e.nodeType || e === n || e === r) o.push(e);
                else if (Array.isArray(e)) {
                    if (e instanceof a) return e;
                    o = e
                }
                return new a(function(e) {
                    const t = [];
                    for (let n = 0; n < e.length; n += 1) - 1 === t.indexOf(e[n]) && t.push(e[n]);
                    return t
                }(o))
            }
            d.fn = a.prototype;
            const c = {
                addClass: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    const i = o(t.map(e => e.split(" ")));
                    return this.forEach(e => {
                        e.classList.add(...i)
                    }), this
                },
                removeClass: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    const i = o(t.map(e => e.split(" ")));
                    return this.forEach(e => {
                        e.classList.remove(...i)
                    }), this
                },
                hasClass: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    const i = o(t.map(e => e.split(" ")));
                    return l(this, e => i.filter(t => e.classList.contains(t)).length > 0).length > 0
                },
                toggleClass: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    const i = o(t.map(e => e.split(" ")));
                    this.forEach(e => {
                        i.forEach(t => {
                            e.classList.toggle(t)
                        })
                    })
                },
                attr: function(e, t) {
                    if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (let n = 0; n < this.length; n += 1)
                        if (2 === arguments.length) this[n].setAttribute(e, t);
                        else
                            for (const t in e) this[n][t] = e[t], this[n].setAttribute(t, e[t]);
                    return this
                },
                removeAttr: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                    return this
                },
                transform: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
                    return this
                },
                transition: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? e + "ms" : e;
                    return this
                },
                on: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    let [i, r, s, a] = t;

                    function o(e) {
                        const t = e.target;
                        if (!t) return;
                        const n = e.target.dom7EventData || [];
                        if (n.indexOf(e) < 0 && n.unshift(e), d(t).is(r)) s.apply(t, n);
                        else {
                            const e = d(t).parents();
                            for (let t = 0; t < e.length; t += 1) d(e[t]).is(r) && s.apply(e[t], n)
                        }
                    }

                    function l(e) {
                        const t = e && e.target && e.target.dom7EventData || [];
                        t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t)
                    }
                    "function" == typeof t[1] && ([i, s, a] = t, r = void 0), a || (a = !1);
                    const c = i.split(" ");
                    let u;
                    for (let e = 0; e < this.length; e += 1) {
                        const t = this[e];
                        if (r)
                            for (u = 0; u < c.length; u += 1) {
                                const e = c[u];
                                t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                                    listener: s,
                                    proxyListener: o
                                }), t.addEventListener(e, o, a)
                            } else
                                for (u = 0; u < c.length; u += 1) {
                                    const e = c[u];
                                    t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                                        listener: s,
                                        proxyListener: l
                                    }), t.addEventListener(e, l, a)
                                }
                    }
                    return this
                },
                off: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    let [i, r, s, a] = t;
                    "function" == typeof t[1] && ([i, s, a] = t, r = void 0), a || (a = !1);
                    const o = i.split(" ");
                    for (let e = 0; e < o.length; e += 1) {
                        const t = o[e];
                        for (let e = 0; e < this.length; e += 1) {
                            const n = this[e];
                            let i;
                            if (!r && n.dom7Listeners ? i = n.dom7Listeners[t] : r && n.dom7LiveListeners && (i = n.dom7LiveListeners[t]), i && i.length)
                                for (let e = i.length - 1; e >= 0; e -= 1) {
                                    const r = i[e];
                                    s && r.listener === s || s && r.listener && r.listener.dom7proxy && r.listener.dom7proxy === s ? (n.removeEventListener(t, r.proxyListener, a), i.splice(e, 1)) : s || (n.removeEventListener(t, r.proxyListener, a), i.splice(e, 1))
                                }
                        }
                    }
                    return this
                },
                trigger: function() {
                    const e = s();
                    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    const r = n[0].split(" "),
                        a = n[1];
                    for (let t = 0; t < r.length; t += 1) {
                        const i = r[t];
                        for (let t = 0; t < this.length; t += 1) {
                            const r = this[t];
                            if (e.CustomEvent) {
                                const t = new e.CustomEvent(i, {
                                    detail: a,
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                r.dom7EventData = n.filter((e, t) => t > 0), r.dispatchEvent(t), r.dom7EventData = [], delete r.dom7EventData
                            }
                        }
                    }
                    return this
                },
                transitionEnd: function(e) {
                    const t = this;
                    return e && t.on("transitionend", (function n(i) {
                        i.target === this && (e.call(this, i), t.off("transitionend", n))
                    })), this
                },
                outerWidth: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            const e = this.styles();
                            return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                        }
                        return this[0].offsetWidth
                    }
                    return null
                },
                outerHeight: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            const e = this.styles();
                            return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                        }
                        return this[0].offsetHeight
                    }
                    return null
                },
                styles: function() {
                    const e = s();
                    return this[0] ? e.getComputedStyle(this[0], null) : {}
                },
                offset: function() {
                    if (this.length > 0) {
                        const e = s(),
                            t = i(),
                            n = this[0],
                            r = n.getBoundingClientRect(),
                            a = t.body,
                            o = n.clientTop || a.clientTop || 0,
                            l = n.clientLeft || a.clientLeft || 0,
                            d = n === e ? e.scrollY : n.scrollTop,
                            c = n === e ? e.scrollX : n.scrollLeft;
                        return {
                            top: r.top + d - o,
                            left: r.left + c - l
                        }
                    }
                    return null
                },
                css: function(e, t) {
                    const n = s();
                    let i;
                    if (1 === arguments.length) {
                        if ("string" != typeof e) {
                            for (i = 0; i < this.length; i += 1)
                                for (const t in e) this[i].style[t] = e[t];
                            return this
                        }
                        if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e)
                    }
                    if (2 === arguments.length && "string" == typeof e) {
                        for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                        return this
                    }
                    return this
                },
                each: function(e) {
                    return e ? (this.forEach((t, n) => {
                        e.apply(t, [t, n])
                    }), this) : this
                },
                html: function(e) {
                    if (void 0 === e) return this[0] ? this[0].innerHTML : null;
                    for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                    return this
                },
                text: function(e) {
                    if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                    for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
                    return this
                },
                is: function(e) {
                    const t = s(),
                        n = i(),
                        r = this[0];
                    let o, l;
                    if (!r || void 0 === e) return !1;
                    if ("string" == typeof e) {
                        if (r.matches) return r.matches(e);
                        if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
                        if (r.msMatchesSelector) return r.msMatchesSelector(e);
                        for (o = d(e), l = 0; l < o.length; l += 1)
                            if (o[l] === r) return !0;
                        return !1
                    }
                    if (e === n) return r === n;
                    if (e === t) return r === t;
                    if (e.nodeType || e instanceof a) {
                        for (o = e.nodeType ? [e] : e, l = 0; l < o.length; l += 1)
                            if (o[l] === r) return !0;
                        return !1
                    }
                    return !1
                },
                index: function() {
                    let e, t = this[0];
                    if (t) {
                        for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                        return e
                    }
                },
                eq: function(e) {
                    if (void 0 === e) return this;
                    const t = this.length;
                    if (e > t - 1) return d([]);
                    if (e < 0) {
                        const n = t + e;
                        return d(n < 0 ? [] : [this[n]])
                    }
                    return d([this[e]])
                },
                append: function() {
                    let e;
                    const t = i();
                    for (let n = 0; n < arguments.length; n += 1) {
                        e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
                        for (let n = 0; n < this.length; n += 1)
                            if ("string" == typeof e) {
                                const i = t.createElement("div");
                                for (i.innerHTML = e; i.firstChild;) this[n].appendChild(i.firstChild)
                            } else if (e instanceof a)
                            for (let t = 0; t < e.length; t += 1) this[n].appendChild(e[t]);
                        else this[n].appendChild(e)
                    }
                    return this
                },
                prepend: function(e) {
                    const t = i();
                    let n, r;
                    for (n = 0; n < this.length; n += 1)
                        if ("string" == typeof e) {
                            const i = t.createElement("div");
                            for (i.innerHTML = e, r = i.childNodes.length - 1; r >= 0; r -= 1) this[n].insertBefore(i.childNodes[r], this[n].childNodes[0])
                        } else if (e instanceof a)
                        for (r = 0; r < e.length; r += 1) this[n].insertBefore(e[r], this[n].childNodes[0]);
                    else this[n].insertBefore(e, this[n].childNodes[0]);
                    return this
                },
                next: function(e) {
                    return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([])
                },
                nextAll: function(e) {
                    const t = [];
                    let n = this[0];
                    if (!n) return d([]);
                    for (; n.nextElementSibling;) {
                        const i = n.nextElementSibling;
                        e ? d(i).is(e) && t.push(i) : t.push(i), n = i
                    }
                    return d(t)
                },
                prev: function(e) {
                    if (this.length > 0) {
                        const t = this[0];
                        return e ? t.previousElementSibling && d(t.previousElementSibling).is(e) ? d([t.previousElementSibling]) : d([]) : t.previousElementSibling ? d([t.previousElementSibling]) : d([])
                    }
                    return d([])
                },
                prevAll: function(e) {
                    const t = [];
                    let n = this[0];
                    if (!n) return d([]);
                    for (; n.previousElementSibling;) {
                        const i = n.previousElementSibling;
                        e ? d(i).is(e) && t.push(i) : t.push(i), n = i
                    }
                    return d(t)
                },
                parent: function(e) {
                    const t = [];
                    for (let n = 0; n < this.length; n += 1) null !== this[n].parentNode && (e ? d(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode));
                    return d(t)
                },
                parents: function(e) {
                    const t = [];
                    for (let n = 0; n < this.length; n += 1) {
                        let i = this[n].parentNode;
                        for (; i;) e ? d(i).is(e) && t.push(i) : t.push(i), i = i.parentNode
                    }
                    return d(t)
                },
                closest: function(e) {
                    let t = this;
                    return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
                },
                find: function(e) {
                    const t = [];
                    for (let n = 0; n < this.length; n += 1) {
                        const i = this[n].querySelectorAll(e);
                        for (let e = 0; e < i.length; e += 1) t.push(i[e])
                    }
                    return d(t)
                },
                children: function(e) {
                    const t = [];
                    for (let n = 0; n < this.length; n += 1) {
                        const i = this[n].children;
                        for (let n = 0; n < i.length; n += 1) e && !d(i[n]).is(e) || t.push(i[n])
                    }
                    return d(t)
                },
                filter: function(e) {
                    return d(l(this, e))
                },
                remove: function() {
                    for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                }
            };

            function u(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            }

            function p() {
                return Date.now()
            }

            function f(e, t) {
                void 0 === t && (t = "x");
                const n = s();
                let i, r, a;
                const o = function(e) {
                    const t = s();
                    let n;
                    return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n
                }(e);
                return n.WebKitCSSMatrix ? (r = o.transform || o.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map(e => e.replace(",", ".")).join(", ")), a = new n.WebKitCSSMatrix("none" === r ? "" : r)) : (a = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = a.toString().split(",")), "x" === t && (r = n.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (r = n.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), r || 0
            }

            function h(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function m(e) {
                return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
            }

            function g() {
                const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                    t = ["__proto__", "constructor", "prototype"];
                for (let n = 1; n < arguments.length; n += 1) {
                    const i = n < 0 || arguments.length <= n ? void 0 : arguments[n];
                    if (null != i && !m(i)) {
                        const n = Object.keys(Object(i)).filter(e => t.indexOf(e) < 0);
                        for (let t = 0, r = n.length; t < r; t += 1) {
                            const r = n[t],
                                s = Object.getOwnPropertyDescriptor(i, r);
                            void 0 !== s && s.enumerable && (h(e[r]) && h(i[r]) ? i[r].__swiper__ ? e[r] = i[r] : g(e[r], i[r]) : !h(e[r]) && h(i[r]) ? (e[r] = {}, i[r].__swiper__ ? e[r] = i[r] : g(e[r], i[r])) : e[r] = i[r])
                        }
                    }
                }
                return e
            }

            function v(e, t, n) {
                e.style.setProperty(t, n)
            }

            function y(e) {
                let {
                    swiper: t,
                    targetPosition: n,
                    side: i
                } = e;
                const r = s(),
                    a = -t.translate;
                let o, l = null;
                const d = t.params.speed;
                t.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(t.cssModeFrameID);
                const c = n > a ? "next" : "prev",
                    u = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
                    p = () => {
                        o = (new Date).getTime(), null === l && (l = o);
                        const e = Math.max(Math.min((o - l) / d, 1), 0),
                            s = .5 - Math.cos(e * Math.PI) / 2;
                        let c = a + s * (n - a);
                        if (u(c, n) && (c = n), t.wrapperEl.scrollTo({
                                [i]: c
                            }), u(c, n)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                            t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                                [i]: c
                            })
                        }), void r.cancelAnimationFrame(t.cssModeFrameID);
                        t.cssModeFrameID = r.requestAnimationFrame(p)
                    };
                p()
            }
            let b, w, x;

            function E() {
                return b || (b = function() {
                    const e = s(),
                        t = i();
                    return {
                        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                        passiveListener: function() {
                            let t = !1;
                            try {
                                const n = Object.defineProperty({}, "passive", {
                                    get() {
                                        t = !0
                                    }
                                });
                                e.addEventListener("testPassiveListener", null, n)
                            } catch (e) {}
                            return t
                        }(),
                        gestures: "ongesturestart" in e
                    }
                }()), b
            }

            function T(e) {
                return void 0 === e && (e = {}), w || (w = function(e) {
                    let {
                        userAgent: t
                    } = void 0 === e ? {} : e;
                    const n = E(),
                        i = s(),
                        r = i.navigator.platform,
                        a = t || i.navigator.userAgent,
                        o = {
                            ios: !1,
                            android: !1
                        },
                        l = i.screen.width,
                        d = i.screen.height,
                        c = a.match(/(Android);?[\s\/]+([\d.]+)?/);
                    let u = a.match(/(iPad).*OS\s([\d_]+)/);
                    const p = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                        f = !u && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                        h = "Win32" === r;
                    let m = "MacIntel" === r;
                    return !u && m && n.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${d}`) >= 0 && (u = a.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), m = !1), c && !h && (o.os = "android", o.android = !0), (u || f || p) && (o.os = "ios", o.ios = !0), o
                }(e)), w
            }

            function C() {
                return x || (x = function() {
                    const e = s();
                    return {
                        isSafari: function() {
                            const t = e.navigator.userAgent.toLowerCase();
                            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                        }(),
                        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                    }
                }()), x
            }

            function _(e) {
                let {
                    swiper: t,
                    runCallbacks: n,
                    direction: i,
                    step: r
                } = e;
                const {
                    activeIndex: s,
                    previousIndex: a
                } = t;
                let o = i;
                if (o || (o = s > a ? "next" : s < a ? "prev" : "reset"), t.emit("transition" + r), n && s !== a) {
                    if ("reset" === o) return void t.emit("slideResetTransition" + r);
                    t.emit("slideChangeTransition" + r), "next" === o ? t.emit("slideNextTransition" + r) : t.emit("slidePrevTransition" + r)
                }
            }

            function S(e) {
                const t = this,
                    n = i(),
                    r = s(),
                    a = t.touchEventsData,
                    {
                        params: o,
                        touches: l,
                        enabled: c
                    } = t;
                if (!c) return;
                if (t.animating && o.preventInteractionOnTransition) return;
                !t.animating && o.cssMode && o.loop && t.loopFix();
                let u = e;
                u.originalEvent && (u = u.originalEvent);
                let f = d(u.target);
                if ("wrapper" === o.touchEventsTarget && !f.closest(t.wrapperEl).length) return;
                if (a.isTouchEvent = "touchstart" === u.type, !a.isTouchEvent && "which" in u && 3 === u.which) return;
                if (!a.isTouchEvent && "button" in u && u.button > 0) return;
                if (a.isTouched && a.isMoved) return;
                o.noSwipingClass && "" !== o.noSwipingClass && u.target && u.target.shadowRoot && e.path && e.path[0] && (f = d(e.path[0]));
                const h = o.noSwipingSelector ? o.noSwipingSelector : "." + o.noSwipingClass,
                    m = !(!u.target || !u.target.shadowRoot);
                if (o.noSwiping && (m ? function(e, t) {
                        return void 0 === t && (t = this),
                            function t(n) {
                                return n && n !== i() && n !== s() ? (n.assignedSlot && (n = n.assignedSlot), n.closest(e) || t(n.getRootNode().host)) : null
                            }(t)
                    }(h, u.target) : f.closest(h)[0])) return void(t.allowClick = !0);
                if (o.swipeHandler && !f.closest(o.swipeHandler)[0]) return;
                l.currentX = "touchstart" === u.type ? u.targetTouches[0].pageX : u.pageX, l.currentY = "touchstart" === u.type ? u.targetTouches[0].pageY : u.pageY;
                const g = l.currentX,
                    v = l.currentY,
                    y = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
                    b = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
                if (y && (g <= b || g >= r.innerWidth - b)) {
                    if ("prevent" !== y) return;
                    e.preventDefault()
                }
                if (Object.assign(a, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0
                    }), l.startX = g, l.startY = v, a.touchStartTime = p(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, o.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== u.type) {
                    let e = !0;
                    f.is(a.focusableElements) && (e = !1, "SELECT" === f[0].nodeName && (a.isTouched = !1)), n.activeElement && d(n.activeElement).is(a.focusableElements) && n.activeElement !== f[0] && n.activeElement.blur();
                    const i = e && t.allowTouchMove && o.touchStartPreventDefault;
                    !o.touchStartForcePreventDefault && !i || f[0].isContentEditable || u.preventDefault()
                }
                t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !o.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", u)
            }

            function k(e) {
                const t = i(),
                    n = this,
                    r = n.touchEventsData,
                    {
                        params: s,
                        touches: a,
                        rtlTranslate: o,
                        enabled: l
                    } = n;
                if (!l) return;
                let c = e;
                if (c.originalEvent && (c = c.originalEvent), !r.isTouched) return void(r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", c));
                if (r.isTouchEvent && "touchmove" !== c.type) return;
                const u = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
                    f = "touchmove" === c.type ? u.pageX : c.pageX,
                    h = "touchmove" === c.type ? u.pageY : c.pageY;
                if (c.preventedByNestedSwiper) return a.startX = f, void(a.startY = h);
                if (!n.allowTouchMove) return d(c.target).is(r.focusableElements) || (n.allowClick = !1), void(r.isTouched && (Object.assign(a, {
                    startX: f,
                    startY: h,
                    currentX: f,
                    currentY: h
                }), r.touchStartTime = p()));
                if (r.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
                    if (n.isVertical()) {
                        if (h < a.startY && n.translate <= n.maxTranslate() || h > a.startY && n.translate >= n.minTranslate()) return r.isTouched = !1, void(r.isMoved = !1)
                    } else if (f < a.startX && n.translate <= n.maxTranslate() || f > a.startX && n.translate >= n.minTranslate()) return;
                if (r.isTouchEvent && t.activeElement && c.target === t.activeElement && d(c.target).is(r.focusableElements)) return r.isMoved = !0, void(n.allowClick = !1);
                if (r.allowTouchCallbacks && n.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
                a.currentX = f, a.currentY = h;
                const m = a.currentX - a.startX,
                    g = a.currentY - a.startY;
                if (n.params.threshold && Math.sqrt(m ** 2 + g ** 2) < n.params.threshold) return;
                if (void 0 === r.isScrolling) {
                    let e;
                    n.isHorizontal() && a.currentY === a.startY || n.isVertical() && a.currentX === a.startX ? r.isScrolling = !1 : m * m + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(m)) / Math.PI, r.isScrolling = n.isHorizontal() ? e > s.touchAngle : 90 - e > s.touchAngle)
                }
                if (r.isScrolling && n.emit("touchMoveOpposite", c), void 0 === r.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (r.startMoving = !0)), r.isScrolling) return void(r.isTouched = !1);
                if (!r.startMoving) return;
                n.allowClick = !1, !s.cssMode && c.cancelable && c.preventDefault(), s.touchMoveStopPropagation && !s.nested && c.stopPropagation(), r.isMoved || (s.loop && !s.cssMode && n.loopFix(), r.startTranslate = n.getTranslate(), n.setTransition(0), n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"), r.allowMomentumBounce = !1, !s.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0), n.emit("sliderFirstMove", c)), n.emit("sliderMove", c), r.isMoved = !0;
                let v = n.isHorizontal() ? m : g;
                a.diff = v, v *= s.touchRatio, o && (v = -v), n.swipeDirection = v > 0 ? "prev" : "next", r.currentTranslate = v + r.startTranslate;
                let y = !0,
                    b = s.resistanceRatio;
                if (s.touchReleaseOnEdges && (b = 0), v > 0 && r.currentTranslate > n.minTranslate() ? (y = !1, s.resistance && (r.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + r.startTranslate + v) ** b)) : v < 0 && r.currentTranslate < n.maxTranslate() && (y = !1, s.resistance && (r.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - r.startTranslate - v) ** b)), y && (c.preventedByNestedSwiper = !0), !n.allowSlideNext && "next" === n.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !n.allowSlidePrev && "prev" === n.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), n.allowSlidePrev || n.allowSlideNext || (r.currentTranslate = r.startTranslate), s.threshold > 0) {
                    if (!(Math.abs(v) > s.threshold || r.allowThresholdMove)) return void(r.currentTranslate = r.startTranslate);
                    if (!r.allowThresholdMove) return r.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, r.currentTranslate = r.startTranslate, void(a.diff = n.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
                }
                s.followFinger && !s.cssMode && ((s.freeMode && s.freeMode.enabled && n.freeMode || s.watchSlidesProgress) && (n.updateActiveIndex(), n.updateSlidesClasses()), n.params.freeMode && s.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(), n.updateProgress(r.currentTranslate), n.setTranslate(r.currentTranslate))
            }

            function M(e) {
                const t = this,
                    n = t.touchEventsData,
                    {
                        params: i,
                        touches: r,
                        rtlTranslate: s,
                        slidesGrid: a,
                        enabled: o
                    } = t;
                if (!o) return;
                let l = e;
                if (l.originalEvent && (l = l.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", l), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && i.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void(n.startMoving = !1);
                i.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                const d = p(),
                    c = d - n.touchStartTime;
                if (t.allowClick) {
                    const e = l.path || l.composedPath && l.composedPath();
                    t.updateClickedSlide(e && e[0] || l.target), t.emit("tap click", l), c < 300 && d - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", l)
                }
                if (n.lastClickTime = p(), u(() => {
                        t.destroyed || (t.allowClick = !0)
                    }), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === r.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, n.isMoved = !1, void(n.startMoving = !1);
                let f;
                if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, f = i.followFinger ? s ? t.translate : -t.translate : -n.currentTranslate, i.cssMode) return;
                if (t.params.freeMode && i.freeMode.enabled) return void t.freeMode.onTouchEnd({
                    currentPos: f
                });
                let h = 0,
                    m = t.slidesSizesGrid[0];
                for (let e = 0; e < a.length; e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
                    const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                    void 0 !== a[e + t] ? f >= a[e] && f < a[e + t] && (h = e, m = a[e + t] - a[e]) : f >= a[e] && (h = e, m = a[a.length - 1] - a[a.length - 2])
                }
                let g = null,
                    v = null;
                i.rewind && (t.isBeginning ? v = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
                const y = (f - a[h]) / m,
                    b = h < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                if (c > i.longSwipesMs) {
                    if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (y >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? g : h + b) : t.slideTo(h)), "prev" === t.swipeDirection && (y > 1 - i.longSwipesRatio ? t.slideTo(h + b) : null !== v && y < 0 && Math.abs(y) > i.longSwipesRatio ? t.slideTo(v) : t.slideTo(h))
                } else {
                    if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                    !t.navigation || l.target !== t.navigation.nextEl && l.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== g ? g : h + b), "prev" === t.swipeDirection && t.slideTo(null !== v ? v : h)) : l.target === t.navigation.nextEl ? t.slideTo(h + b) : t.slideTo(h)
                }
            }

            function $() {
                const e = this,
                    {
                        params: t,
                        el: n
                    } = e;
                if (n && 0 === n.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                const {
                    allowSlideNext: i,
                    allowSlidePrev: r,
                    snapGrid: s
                } = e;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = r, e.allowSlideNext = i, e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow()
            }

            function A(e) {
                const t = this;
                t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
            }

            function D() {
                const e = this,
                    {
                        wrapperEl: t,
                        rtlTranslate: n,
                        enabled: i
                    } = e;
                if (!i) return;
                let r;
                e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                const s = e.maxTranslate() - e.minTranslate();
                r = 0 === s ? 0 : (e.translate - e.minTranslate()) / s, r !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
            }
            Object.keys(c).forEach(e => {
                Object.defineProperty(d.fn, e, {
                    value: c[e],
                    writable: !0
                })
            });
            let P = !1;

            function N() {}
            const O = (e, t) => {
                    const n = i(),
                        {
                            params: r,
                            touchEvents: s,
                            el: a,
                            wrapperEl: o,
                            device: l,
                            support: d
                        } = e,
                        c = !!r.nested,
                        u = "on" === t ? "addEventListener" : "removeEventListener",
                        p = t;
                    if (d.touch) {
                        const t = !("touchstart" !== s.start || !d.passiveListener || !r.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        a[u](s.start, e.onTouchStart, t), a[u](s.move, e.onTouchMove, d.passiveListener ? {
                            passive: !1,
                            capture: c
                        } : c), a[u](s.end, e.onTouchEnd, t), s.cancel && a[u](s.cancel, e.onTouchEnd, t)
                    } else a[u](s.start, e.onTouchStart, !1), n[u](s.move, e.onTouchMove, c), n[u](s.end, e.onTouchEnd, !1);
                    (r.preventClicks || r.preventClicksPropagation) && a[u]("click", e.onClick, !0), r.cssMode && o[u]("scroll", e.onScroll), r.updateOnWindowResize ? e[p](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", $, !0) : e[p]("observerUpdate", $, !0)
                },
                I = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            var L = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopFillGroupWithBlank: !1,
                loopPreventsSlide: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };

            function j(e, t) {
                return function(n) {
                    void 0 === n && (n = {});
                    const i = Object.keys(n)[0],
                        r = n[i];
                    "object" == typeof r && null !== r ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === e[i] && (e[i] = {
                        auto: !0
                    }), i in e && "enabled" in r ? (!0 === e[i] && (e[i] = {
                        enabled: !0
                    }), "object" != typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {
                        enabled: !1
                    }), g(t, n)) : g(t, n)) : g(t, n)
                }
            }
            const z = {
                    eventsEmitter: {
                        on(e, t, n) {
                            const i = this;
                            if ("function" != typeof t) return i;
                            const r = n ? "unshift" : "push";
                            return e.split(" ").forEach(e => {
                                i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t)
                            }), i
                        },
                        once(e, t, n) {
                            const i = this;
                            if ("function" != typeof t) return i;

                            function r() {
                                i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
                                for (var n = arguments.length, s = new Array(n), a = 0; a < n; a++) s[a] = arguments[a];
                                t.apply(i, s)
                            }
                            return r.__emitterProxy = t, i.on(e, r, n)
                        },
                        onAny(e, t) {
                            const n = this;
                            if ("function" != typeof e) return n;
                            const i = t ? "unshift" : "push";
                            return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n
                        },
                        offAny(e) {
                            const t = this;
                            if (!t.eventsAnyListeners) return t;
                            const n = t.eventsAnyListeners.indexOf(e);
                            return n >= 0 && t.eventsAnyListeners.splice(n, 1), t
                        },
                        off(e, t) {
                            const n = this;
                            return n.eventsListeners ? (e.split(" ").forEach(e => {
                                void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].forEach((i, r) => {
                                    (i === t || i.__emitterProxy && i.__emitterProxy === t) && n.eventsListeners[e].splice(r, 1)
                                })
                            }), n) : n
                        },
                        emit() {
                            const e = this;
                            if (!e.eventsListeners) return e;
                            let t, n, i;
                            for (var r = arguments.length, s = new Array(r), a = 0; a < r; a++) s[a] = arguments[a];
                            return "string" == typeof s[0] || Array.isArray(s[0]) ? (t = s[0], n = s.slice(1, s.length), i = e) : (t = s[0].events, n = s[0].data, i = s[0].context || e), n.unshift(i), (Array.isArray(t) ? t : t.split(" ")).forEach(t => {
                                e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(e => {
                                    e.apply(i, [t, ...n])
                                }), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach(e => {
                                    e.apply(i, n)
                                })
                            }), e
                        }
                    },
                    update: {
                        updateSize: function() {
                            const e = this;
                            let t, n;
                            const i = e.$el;
                            t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i[0].clientWidth, n = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i[0].clientHeight, 0 === t && e.isHorizontal() || 0 === n && e.isVertical() || (t = t - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), n = n - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(n) && (n = 0), Object.assign(e, {
                                width: t,
                                height: n,
                                size: e.isHorizontal() ? t : n
                            }))
                        },
                        updateSlides: function() {
                            const e = this;

                            function t(t) {
                                return e.isHorizontal() ? t : {
                                    width: "height",
                                    "margin-top": "margin-left",
                                    "margin-bottom ": "margin-right",
                                    "margin-left": "margin-top",
                                    "margin-right": "margin-bottom",
                                    "padding-left": "padding-top",
                                    "padding-right": "padding-bottom",
                                    marginRight: "marginBottom"
                                } [t]
                            }

                            function n(e, n) {
                                return parseFloat(e.getPropertyValue(t(n)) || 0)
                            }
                            const i = e.params,
                                {
                                    $wrapperEl: r,
                                    size: s,
                                    rtlTranslate: a,
                                    wrongRTL: o
                                } = e,
                                l = e.virtual && i.virtual.enabled,
                                d = l ? e.virtual.slides.length : e.slides.length,
                                c = r.children("." + e.params.slideClass),
                                u = l ? e.virtual.slides.length : c.length;
                            let p = [];
                            const f = [],
                                h = [];
                            let m = i.slidesOffsetBefore;
                            "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
                            let g = i.slidesOffsetAfter;
                            "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
                            const y = e.snapGrid.length,
                                b = e.slidesGrid.length;
                            let w = i.spaceBetween,
                                x = -m,
                                E = 0,
                                T = 0;
                            if (void 0 === s) return;
                            "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * s), e.virtualSize = -w, a ? c.css({
                                marginLeft: "",
                                marginBottom: "",
                                marginTop: ""
                            }) : c.css({
                                marginRight: "",
                                marginBottom: "",
                                marginTop: ""
                            }), i.centeredSlides && i.cssMode && (v(e.wrapperEl, "--swiper-centered-offset-before", ""), v(e.wrapperEl, "--swiper-centered-offset-after", ""));
                            const C = i.grid && i.grid.rows > 1 && e.grid;
                            let _;
                            C && e.grid.initSlides(u);
                            const S = "auto" === i.slidesPerView && i.breakpoints && Object.keys(i.breakpoints).filter(e => void 0 !== i.breakpoints[e].slidesPerView).length > 0;
                            for (let r = 0; r < u; r += 1) {
                                _ = 0;
                                const a = c.eq(r);
                                if (C && e.grid.updateSlide(r, a, u, t), "none" !== a.css("display")) {
                                    if ("auto" === i.slidesPerView) {
                                        S && (c[r].style[t("width")] = "");
                                        const s = getComputedStyle(a[0]),
                                            o = a[0].style.transform,
                                            l = a[0].style.webkitTransform;
                                        if (o && (a[0].style.transform = "none"), l && (a[0].style.webkitTransform = "none"), i.roundLengths) _ = e.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
                                        else {
                                            const e = n(s, "width"),
                                                t = n(s, "padding-left"),
                                                i = n(s, "padding-right"),
                                                r = n(s, "margin-left"),
                                                o = n(s, "margin-right"),
                                                l = s.getPropertyValue("box-sizing");
                                            if (l && "border-box" === l) _ = e + r + o;
                                            else {
                                                const {
                                                    clientWidth: n,
                                                    offsetWidth: s
                                                } = a[0];
                                                _ = e + t + i + r + o + (s - n)
                                            }
                                        }
                                        o && (a[0].style.transform = o), l && (a[0].style.webkitTransform = l), i.roundLengths && (_ = Math.floor(_))
                                    } else _ = (s - (i.slidesPerView - 1) * w) / i.slidesPerView, i.roundLengths && (_ = Math.floor(_)), c[r] && (c[r].style[t("width")] = _ + "px");
                                    c[r] && (c[r].swiperSlideSize = _), h.push(_), i.centeredSlides ? (x = x + _ / 2 + E / 2 + w, 0 === E && 0 !== r && (x = x - s / 2 - w), 0 === r && (x = x - s / 2 - w), Math.abs(x) < .001 && (x = 0), i.roundLengths && (x = Math.floor(x)), T % i.slidesPerGroup == 0 && p.push(x), f.push(x)) : (i.roundLengths && (x = Math.floor(x)), (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup == 0 && p.push(x), f.push(x), x = x + _ + w), e.virtualSize += _ + w, E = _, T += 1
                                }
                            }
                            if (e.virtualSize = Math.max(e.virtualSize, s) + g, a && o && ("slide" === i.effect || "coverflow" === i.effect) && r.css({
                                    width: e.virtualSize + i.spaceBetween + "px"
                                }), i.setWrapperSize && r.css({
                                    [t("width")]: e.virtualSize + i.spaceBetween + "px"
                                }), C && e.grid.updateWrapperSize(_, p, t), !i.centeredSlides) {
                                const t = [];
                                for (let n = 0; n < p.length; n += 1) {
                                    let r = p[n];
                                    i.roundLengths && (r = Math.floor(r)), p[n] <= e.virtualSize - s && t.push(r)
                                }
                                p = t, Math.floor(e.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - s)
                            }
                            if (0 === p.length && (p = [0]), 0 !== i.spaceBetween) {
                                const n = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
                                c.filter((e, t) => !i.cssMode || t !== c.length - 1).css({
                                    [n]: w + "px"
                                })
                            }
                            if (i.centeredSlides && i.centeredSlidesBounds) {
                                let e = 0;
                                h.forEach(t => {
                                    e += t + (i.spaceBetween ? i.spaceBetween : 0)
                                }), e -= i.spaceBetween;
                                const t = e - s;
                                p = p.map(e => e < 0 ? -m : e > t ? t + g : e)
                            }
                            if (i.centerInsufficientSlides) {
                                let e = 0;
                                if (h.forEach(t => {
                                        e += t + (i.spaceBetween ? i.spaceBetween : 0)
                                    }), e -= i.spaceBetween, e < s) {
                                    const t = (s - e) / 2;
                                    p.forEach((e, n) => {
                                        p[n] = e - t
                                    }), f.forEach((e, n) => {
                                        f[n] = e + t
                                    })
                                }
                            }
                            if (Object.assign(e, {
                                    slides: c,
                                    snapGrid: p,
                                    slidesGrid: f,
                                    slidesSizesGrid: h
                                }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
                                v(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"), v(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - h[h.length - 1] / 2 + "px");
                                const t = -e.snapGrid[0],
                                    n = -e.slidesGrid[0];
                                e.snapGrid = e.snapGrid.map(e => e + t), e.slidesGrid = e.slidesGrid.map(e => e + n)
                            }
                            if (u !== d && e.emit("slidesLengthChange"), p.length !== y && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== b && e.emit("slidesGridLengthChange"), i.watchSlidesProgress && e.updateSlidesOffset(), !(l || i.cssMode || "slide" !== i.effect && "fade" !== i.effect)) {
                                const t = i.containerModifierClass + "backface-hidden",
                                    n = e.$el.hasClass(t);
                                u <= i.maxBackfaceHiddenSlides ? n || e.$el.addClass(t) : n && e.$el.removeClass(t)
                            }
                        },
                        updateAutoHeight: function(e) {
                            const t = this,
                                n = [],
                                i = t.virtual && t.params.virtual.enabled;
                            let r, s = 0;
                            "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                            const a = e => i ? t.slides.filter(t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e)[0] : t.slides.eq(e)[0];
                            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                                if (t.params.centeredSlides) t.visibleSlides.each(e => {
                                    n.push(e)
                                });
                                else
                                    for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
                                        const e = t.activeIndex + r;
                                        if (e > t.slides.length && !i) break;
                                        n.push(a(e))
                                    } else n.push(a(t.activeIndex));
                            for (r = 0; r < n.length; r += 1)
                                if (void 0 !== n[r]) {
                                    const e = n[r].offsetHeight;
                                    s = e > s ? e : s
                                }(s || 0 === s) && t.$wrapperEl.css("height", s + "px")
                        },
                        updateSlidesOffset: function() {
                            const e = this,
                                t = e.slides;
                            for (let n = 0; n < t.length; n += 1) t[n].swiperSlideOffset = e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop
                        },
                        updateSlidesProgress: function(e) {
                            void 0 === e && (e = this && this.translate || 0);
                            const t = this,
                                n = t.params,
                                {
                                    slides: i,
                                    rtlTranslate: r,
                                    snapGrid: s
                                } = t;
                            if (0 === i.length) return;
                            void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                            let a = -e;
                            r && (a = e), i.removeClass(n.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                            for (let e = 0; e < i.length; e += 1) {
                                const o = i[e];
                                let l = o.swiperSlideOffset;
                                n.cssMode && n.centeredSlides && (l -= i[0].swiperSlideOffset);
                                const d = (a + (n.centeredSlides ? t.minTranslate() : 0) - l) / (o.swiperSlideSize + n.spaceBetween),
                                    c = (a - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) / (o.swiperSlideSize + n.spaceBetween),
                                    u = -(a - l),
                                    p = u + t.slidesSizesGrid[e];
                                (u >= 0 && u < t.size - 1 || p > 1 && p <= t.size || u <= 0 && p >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(e), i.eq(e).addClass(n.slideVisibleClass)), o.progress = r ? -d : d, o.originalProgress = r ? -c : c
                            }
                            t.visibleSlides = d(t.visibleSlides)
                        },
                        updateProgress: function(e) {
                            const t = this;
                            if (void 0 === e) {
                                const n = t.rtlTranslate ? -1 : 1;
                                e = t && t.translate && t.translate * n || 0
                            }
                            const n = t.params,
                                i = t.maxTranslate() - t.minTranslate();
                            let {
                                progress: r,
                                isBeginning: s,
                                isEnd: a
                            } = t;
                            const o = s,
                                l = a;
                            0 === i ? (r = 0, s = !0, a = !0) : (r = (e - t.minTranslate()) / i, s = r <= 0, a = r >= 1), Object.assign(t, {
                                progress: r,
                                isBeginning: s,
                                isEnd: a
                            }), (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e), s && !o && t.emit("reachBeginning toEdge"), a && !l && t.emit("reachEnd toEdge"), (o && !s || l && !a) && t.emit("fromEdge"), t.emit("progress", r)
                        },
                        updateSlidesClasses: function() {
                            const e = this,
                                {
                                    slides: t,
                                    params: n,
                                    $wrapperEl: i,
                                    activeIndex: r,
                                    realIndex: s
                                } = e,
                                a = e.virtual && n.virtual.enabled;
                            let o;
                            t.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`), o = a ? e.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${r}"]`) : t.eq(r), o.addClass(n.slideActiveClass), n.loop && (o.hasClass(n.slideDuplicateClass) ? i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${s}"]`).addClass(n.slideDuplicateActiveClass) : i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${s}"]`).addClass(n.slideDuplicateActiveClass));
                            let l = o.nextAll("." + n.slideClass).eq(0).addClass(n.slideNextClass);
                            n.loop && 0 === l.length && (l = t.eq(0), l.addClass(n.slideNextClass));
                            let d = o.prevAll("." + n.slideClass).eq(0).addClass(n.slidePrevClass);
                            n.loop && 0 === d.length && (d = t.eq(-1), d.addClass(n.slidePrevClass)), n.loop && (l.hasClass(n.slideDuplicateClass) ? i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass) : i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass), d.hasClass(n.slideDuplicateClass) ? i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass) : i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass)), e.emitSlidesClasses()
                        },
                        updateActiveIndex: function(e) {
                            const t = this,
                                n = t.rtlTranslate ? t.translate : -t.translate,
                                {
                                    slidesGrid: i,
                                    snapGrid: r,
                                    params: s,
                                    activeIndex: a,
                                    realIndex: o,
                                    snapIndex: l
                                } = t;
                            let d, c = e;
                            if (void 0 === c) {
                                for (let e = 0; e < i.length; e += 1) void 0 !== i[e + 1] ? n >= i[e] && n < i[e + 1] - (i[e + 1] - i[e]) / 2 ? c = e : n >= i[e] && n < i[e + 1] && (c = e + 1) : n >= i[e] && (c = e);
                                s.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
                            }
                            if (r.indexOf(n) >= 0) d = r.indexOf(n);
                            else {
                                const e = Math.min(s.slidesPerGroupSkip, c);
                                d = e + Math.floor((c - e) / s.slidesPerGroup)
                            }
                            if (d >= r.length && (d = r.length - 1), c === a) return void(d !== l && (t.snapIndex = d, t.emit("snapIndexChange")));
                            const u = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                            Object.assign(t, {
                                snapIndex: d,
                                realIndex: u,
                                previousIndex: a,
                                activeIndex: c
                            }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), o !== u && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
                        },
                        updateClickedSlide: function(e) {
                            const t = this,
                                n = t.params,
                                i = d(e).closest("." + n.slideClass)[0];
                            let r, s = !1;
                            if (i)
                                for (let e = 0; e < t.slides.length; e += 1)
                                    if (t.slides[e] === i) {
                                        s = !0, r = e;
                                        break
                                    } if (!i || !s) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                            t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = r, n.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                        }
                    },
                    translate: {
                        getTranslate: function(e) {
                            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                            const {
                                params: t,
                                rtlTranslate: n,
                                translate: i,
                                $wrapperEl: r
                            } = this;
                            if (t.virtualTranslate) return n ? -i : i;
                            if (t.cssMode) return i;
                            let s = f(r[0], e);
                            return n && (s = -s), s || 0
                        },
                        setTranslate: function(e, t) {
                            const n = this,
                                {
                                    rtlTranslate: i,
                                    params: r,
                                    $wrapperEl: s,
                                    wrapperEl: a,
                                    progress: o
                                } = n;
                            let l, d = 0,
                                c = 0;
                            n.isHorizontal() ? d = i ? -e : e : c = e, r.roundLengths && (d = Math.floor(d), c = Math.floor(c)), r.cssMode ? a[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -d : -c : r.virtualTranslate || s.transform(`translate3d(${d}px, ${c}px, 0px)`), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? d : c;
                            const u = n.maxTranslate() - n.minTranslate();
                            l = 0 === u ? 0 : (e - n.minTranslate()) / u, l !== o && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
                        },
                        minTranslate: function() {
                            return -this.snapGrid[0]
                        },
                        maxTranslate: function() {
                            return -this.snapGrid[this.snapGrid.length - 1]
                        },
                        translateTo: function(e, t, n, i, r) {
                            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0), void 0 === i && (i = !0);
                            const s = this,
                                {
                                    params: a,
                                    wrapperEl: o
                                } = s;
                            if (s.animating && a.preventInteractionOnTransition) return !1;
                            const l = s.minTranslate(),
                                d = s.maxTranslate();
                            let c;
                            if (c = i && e > l ? l : i && e < d ? d : e, s.updateProgress(c), a.cssMode) {
                                const e = s.isHorizontal();
                                if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
                                else {
                                    if (!s.support.smoothScroll) return y({
                                        swiper: s,
                                        targetPosition: -c,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    o.scrollTo({
                                        [e ? "left" : "top"]: -c,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return 0 === t ? (s.setTransition(0), s.setTranslate(c), n && (s.emit("beforeTransitionStart", t, r), s.emit("transitionEnd"))) : (s.setTransition(t), s.setTranslate(c), n && (s.emit("beforeTransitionStart", t, r), s.emit("transitionStart")), s.animating || (s.animating = !0, s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function(e) {
                                s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd), s.onTranslateToWrapperTransitionEnd = null, delete s.onTranslateToWrapperTransitionEnd, n && s.emit("transitionEnd"))
                            }), s.$wrapperEl[0].addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd))), !0
                        }
                    },
                    transition: {
                        setTransition: function(e, t) {
                            const n = this;
                            n.params.cssMode || n.$wrapperEl.transition(e), n.emit("setTransition", e, t)
                        },
                        transitionStart: function(e, t) {
                            void 0 === e && (e = !0);
                            const n = this,
                                {
                                    params: i
                                } = n;
                            i.cssMode || (i.autoHeight && n.updateAutoHeight(), _({
                                swiper: n,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function(e, t) {
                            void 0 === e && (e = !0);
                            const n = this,
                                {
                                    params: i
                                } = n;
                            n.animating = !1, i.cssMode || (n.setTransition(0), _({
                                swiper: n,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                        }
                    },
                    slide: {
                        slideTo: function(e, t, n, i, r) {
                            if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0), "number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                            if ("string" == typeof e) {
                                const t = parseInt(e, 10);
                                if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                                e = t
                            }
                            const s = this;
                            let a = e;
                            a < 0 && (a = 0);
                            const {
                                params: o,
                                snapGrid: l,
                                slidesGrid: d,
                                previousIndex: c,
                                activeIndex: u,
                                rtlTranslate: p,
                                wrapperEl: f,
                                enabled: h
                            } = s;
                            if (s.animating && o.preventInteractionOnTransition || !h && !i && !r) return !1;
                            const m = Math.min(s.params.slidesPerGroupSkip, a);
                            let g = m + Math.floor((a - m) / s.params.slidesPerGroup);
                            g >= l.length && (g = l.length - 1), (u || o.initialSlide || 0) === (c || 0) && n && s.emit("beforeSlideChangeStart");
                            const v = -l[g];
                            if (s.updateProgress(v), o.normalizeSlideIndex)
                                for (let e = 0; e < d.length; e += 1) {
                                    const t = -Math.floor(100 * v),
                                        n = Math.floor(100 * d[e]),
                                        i = Math.floor(100 * d[e + 1]);
                                    void 0 !== d[e + 1] ? t >= n && t < i - (i - n) / 2 ? a = e : t >= n && t < i && (a = e + 1) : t >= n && (a = e)
                                }
                            if (s.initialized && a !== u) {
                                if (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) return !1;
                                if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (u || 0) !== a) return !1
                            }
                            let b;
                            if (b = a > u ? "next" : a < u ? "prev" : "reset", p && -v === s.translate || !p && v === s.translate) return s.updateActiveIndex(a), o.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== o.effect && s.setTranslate(v), "reset" !== b && (s.transitionStart(n, b), s.transitionEnd(n, b)), !1;
                            if (o.cssMode) {
                                const e = s.isHorizontal(),
                                    n = p ? v : -v;
                                if (0 === t) {
                                    const t = s.virtual && s.params.virtual.enabled;
                                    t && (s.wrapperEl.style.scrollSnapType = "none", s._immediateVirtual = !0), f[e ? "scrollLeft" : "scrollTop"] = n, t && requestAnimationFrame(() => {
                                        s.wrapperEl.style.scrollSnapType = "", s._swiperImmediateVirtual = !1
                                    })
                                } else {
                                    if (!s.support.smoothScroll) return y({
                                        swiper: s,
                                        targetPosition: n,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    f.scrollTo({
                                        [e ? "left" : "top"]: n,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(a), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(n, b), 0 === t ? s.transitionEnd(n, b) : s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(e) {
                                s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(n, b))
                            }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd)), !0
                        },
                        slideToLoop: function(e, t, n, i) {
                            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0);
                            const r = this;
                            let s = e;
                            return r.params.loop && (s += r.loopedSlides), r.slideTo(s, t, n, i)
                        },
                        slideNext: function(e, t, n) {
                            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                            const i = this,
                                {
                                    animating: r,
                                    enabled: s,
                                    params: a
                                } = i;
                            if (!s) return i;
                            let o = a.slidesPerGroup;
                            "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
                            const l = i.activeIndex < a.slidesPerGroupSkip ? 1 : o;
                            if (a.loop) {
                                if (r && a.loopPreventsSlide) return !1;
                                i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
                            }
                            return a.rewind && i.isEnd ? i.slideTo(0, e, t, n) : i.slideTo(i.activeIndex + l, e, t, n)
                        },
                        slidePrev: function(e, t, n) {
                            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                            const i = this,
                                {
                                    params: r,
                                    animating: s,
                                    snapGrid: a,
                                    slidesGrid: o,
                                    rtlTranslate: l,
                                    enabled: d
                                } = i;
                            if (!d) return i;
                            if (r.loop) {
                                if (s && r.loopPreventsSlide) return !1;
                                i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
                            }

                            function c(e) {
                                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                            }
                            const u = c(l ? i.translate : -i.translate),
                                p = a.map(e => c(e));
                            let f = a[p.indexOf(u) - 1];
                            if (void 0 === f && r.cssMode) {
                                let e;
                                a.forEach((t, n) => {
                                    u >= t && (e = n)
                                }), void 0 !== e && (f = a[e > 0 ? e - 1 : e])
                            }
                            let h = 0;
                            if (void 0 !== f && (h = o.indexOf(f), h < 0 && (h = i.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (h = h - i.slidesPerViewDynamic("previous", !0) + 1, h = Math.max(h, 0))), r.rewind && i.isBeginning) {
                                const r = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
                                return i.slideTo(r, e, t, n)
                            }
                            return i.slideTo(h, e, t, n)
                        },
                        slideReset: function(e, t, n) {
                            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, n)
                        },
                        slideToClosest: function(e, t, n, i) {
                            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === i && (i = .5);
                            const r = this;
                            let s = r.activeIndex;
                            const a = Math.min(r.params.slidesPerGroupSkip, s),
                                o = a + Math.floor((s - a) / r.params.slidesPerGroup),
                                l = r.rtlTranslate ? r.translate : -r.translate;
                            if (l >= r.snapGrid[o]) {
                                const e = r.snapGrid[o];
                                l - e > (r.snapGrid[o + 1] - e) * i && (s += r.params.slidesPerGroup)
                            } else {
                                const e = r.snapGrid[o - 1];
                                l - e <= (r.snapGrid[o] - e) * i && (s -= r.params.slidesPerGroup)
                            }
                            return s = Math.max(s, 0), s = Math.min(s, r.slidesGrid.length - 1), r.slideTo(s, e, t, n)
                        },
                        slideToClickedSlide: function() {
                            const e = this,
                                {
                                    params: t,
                                    $wrapperEl: n
                                } = e,
                                i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                            let r, s = e.clickedIndex;
                            if (t.loop) {
                                if (e.animating) return;
                                r = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? s < e.loopedSlides - i / 2 || s > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), s = n.children(`.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), u(() => {
                                    e.slideTo(s)
                                })) : e.slideTo(s) : s > e.slides.length - i ? (e.loopFix(), s = n.children(`.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), u(() => {
                                    e.slideTo(s)
                                })) : e.slideTo(s)
                            } else e.slideTo(s)
                        }
                    },
                    loop: {
                        loopCreate: function() {
                            const e = this,
                                t = i(),
                                {
                                    params: n,
                                    $wrapperEl: r
                                } = e,
                                s = r.children().length > 0 ? d(r.children()[0].parentNode) : r;
                            s.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
                            let a = s.children("." + n.slideClass);
                            if (n.loopFillGroupWithBlank) {
                                const e = n.slidesPerGroup - a.length % n.slidesPerGroup;
                                if (e !== n.slidesPerGroup) {
                                    for (let i = 0; i < e; i += 1) {
                                        const e = d(t.createElement("div")).addClass(`${n.slideClass} ${n.slideBlankClass}`);
                                        s.append(e)
                                    }
                                    a = s.children("." + n.slideClass)
                                }
                            }
                            "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = a.length), e.loopedSlides = Math.ceil(parseFloat(n.loopedSlides || n.slidesPerView, 10)), e.loopedSlides += n.loopAdditionalSlides, e.loopedSlides > a.length && (e.loopedSlides = a.length);
                            const o = [],
                                l = [];
                            a.each((t, n) => {
                                const i = d(t);
                                n < e.loopedSlides && l.push(t), n < a.length && n >= a.length - e.loopedSlides && o.push(t), i.attr("data-swiper-slide-index", n)
                            });
                            for (let e = 0; e < l.length; e += 1) s.append(d(l[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
                            for (let e = o.length - 1; e >= 0; e -= 1) s.prepend(d(o[e].cloneNode(!0)).addClass(n.slideDuplicateClass))
                        },
                        loopFix: function() {
                            const e = this;
                            e.emit("beforeLoopFix");
                            const {
                                activeIndex: t,
                                slides: n,
                                loopedSlides: i,
                                allowSlidePrev: r,
                                allowSlideNext: s,
                                snapGrid: a,
                                rtlTranslate: o
                            } = e;
                            let l;
                            e.allowSlidePrev = !0, e.allowSlideNext = !0;
                            const d = -a[t] - e.getTranslate();
                            t < i ? (l = n.length - 3 * i + t, l += i, e.slideTo(l, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d)) : t >= n.length - i && (l = -n.length + t + i, l += i, e.slideTo(l, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d)), e.allowSlidePrev = r, e.allowSlideNext = s, e.emit("loopFix")
                        },
                        loopDestroy: function() {
                            const {
                                $wrapperEl: e,
                                params: t,
                                slides: n
                            } = this;
                            e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), n.removeAttr("data-swiper-slide-index")
                        }
                    },
                    grabCursor: {
                        setGrabCursor: function(e) {
                            const t = this;
                            if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                            const n = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                            n.style.cursor = "move", n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", n.style.cursor = e ? "-moz-grabbin" : "-moz-grab", n.style.cursor = e ? "grabbing" : "grab"
                        },
                        unsetGrabCursor: function() {
                            const e = this;
                            e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                        }
                    },
                    events: {
                        attachEvents: function() {
                            const e = this,
                                t = i(),
                                {
                                    params: n,
                                    support: r
                                } = e;
                            e.onTouchStart = S.bind(e), e.onTouchMove = k.bind(e), e.onTouchEnd = M.bind(e), n.cssMode && (e.onScroll = D.bind(e)), e.onClick = A.bind(e), r.touch && !P && (t.addEventListener("touchstart", N), P = !0), O(e, "on")
                        },
                        detachEvents: function() {
                            O(this, "off")
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            const e = this,
                                {
                                    activeIndex: t,
                                    initialized: n,
                                    loopedSlides: i = 0,
                                    params: r,
                                    $el: s
                                } = e,
                                a = r.breakpoints;
                            if (!a || a && 0 === Object.keys(a).length) return;
                            const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
                            if (!o || e.currentBreakpoint === o) return;
                            const l = (o in a ? a[o] : void 0) || e.originalParams,
                                d = I(e, r),
                                c = I(e, l),
                                u = r.enabled;
                            d && !c ? (s.removeClass(`${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (s.addClass(r.containerModifierClass + "grid"), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === r.grid.fill) && s.addClass(r.containerModifierClass + "grid-column"), e.emitContainerClasses());
                            const p = l.direction && l.direction !== r.direction,
                                f = r.loop && (l.slidesPerView !== r.slidesPerView || p);
                            p && n && e.changeDirection(), g(e.params, l);
                            const h = e.params.enabled;
                            Object.assign(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), u && !h ? e.disable() : !u && h && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", l), f && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                        },
                        getBreakpoint: function(e, t, n) {
                            if (void 0 === t && (t = "window"), !e || "container" === t && !n) return;
                            let i = !1;
                            const r = s(),
                                a = "window" === t ? r.innerHeight : n.clientHeight,
                                o = Object.keys(e).map(e => {
                                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                                        const t = parseFloat(e.substr(1));
                                        return {
                                            value: a * t,
                                            point: e
                                        }
                                    }
                                    return {
                                        value: e,
                                        point: e
                                    }
                                });
                            o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                            for (let e = 0; e < o.length; e += 1) {
                                const {
                                    point: s,
                                    value: a
                                } = o[e];
                                "window" === t ? r.matchMedia(`(min-width: ${a}px)`).matches && (i = s) : a <= n.clientWidth && (i = s)
                            }
                            return i || "max"
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            const e = this,
                                {
                                    isLocked: t,
                                    params: n
                                } = e,
                                {
                                    slidesOffsetBefore: i
                                } = n;
                            if (i) {
                                const t = e.slides.length - 1,
                                    n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                                e.isLocked = e.size > n
                            } else e.isLocked = 1 === e.snapGrid.length;
                            !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: {
                        addClasses: function() {
                            const e = this,
                                {
                                    classNames: t,
                                    params: n,
                                    rtl: i,
                                    $el: r,
                                    device: s,
                                    support: a
                                } = e,
                                o = function(e, t) {
                                    const n = [];
                                    return e.forEach(e => {
                                        "object" == typeof e ? Object.keys(e).forEach(i => {
                                            e[i] && n.push(t + i)
                                        }) : "string" == typeof e && n.push(t + e)
                                    }), n
                                }(["initialized", n.direction, {
                                    "pointer-events": !a.touch
                                }, {
                                    "free-mode": e.params.freeMode && n.freeMode.enabled
                                }, {
                                    autoheight: n.autoHeight
                                }, {
                                    rtl: i
                                }, {
                                    grid: n.grid && n.grid.rows > 1
                                }, {
                                    "grid-column": n.grid && n.grid.rows > 1 && "column" === n.grid.fill
                                }, {
                                    android: s.android
                                }, {
                                    ios: s.ios
                                }, {
                                    "css-mode": n.cssMode
                                }, {
                                    centered: n.cssMode && n.centeredSlides
                                }], n.containerModifierClass);
                            t.push(...o), r.addClass([...t].join(" ")), e.emitContainerClasses()
                        },
                        removeClasses: function() {
                            const {
                                $el: e,
                                classNames: t
                            } = this;
                            e.removeClass(t.join(" ")), this.emitContainerClasses()
                        }
                    },
                    images: {
                        loadImage: function(e, t, n, i, r, a) {
                            const o = s();
                            let l;

                            function c() {
                                a && a()
                            }
                            d(e).parent("picture")[0] || e.complete && r ? c() : t ? (l = new o.Image, l.onload = c, l.onerror = c, i && (l.sizes = i), n && (l.srcset = n), t && (l.src = t)) : c()
                        },
                        preloadImages: function() {
                            const e = this;

                            function t() {
                                null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                            }
                            e.imagesToLoad = e.$el.find("img");
                            for (let n = 0; n < e.imagesToLoad.length; n += 1) {
                                const i = e.imagesToLoad[n];
                                e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                            }
                        }
                    }
                },
                H = {};
            class q {
                constructor() {
                    let e, t;
                    for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    if (1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = g({}, t), e && !t.el && (t.el = e), t.el && d(t.el).length > 1) {
                        const e = [];
                        return d(t.el).each(n => {
                            const i = g({}, t, {
                                el: n
                            });
                            e.push(new q(i))
                        }), e
                    }
                    const s = this;
                    s.__swiper__ = !0, s.support = E(), s.device = T({
                        userAgent: t.userAgent
                    }), s.browser = C(), s.eventsListeners = {}, s.eventsAnyListeners = [], s.modules = [...s.__modules__], t.modules && Array.isArray(t.modules) && s.modules.push(...t.modules);
                    const a = {};
                    s.modules.forEach(e => {
                        e({
                            swiper: s,
                            extendParams: j(t, a),
                            on: s.on.bind(s),
                            once: s.once.bind(s),
                            off: s.off.bind(s),
                            emit: s.emit.bind(s)
                        })
                    });
                    const o = g({}, L, a);
                    return s.params = g({}, o, H, t), s.originalParams = g({}, s.params), s.passedParams = g({}, t), s.params && s.params.on && Object.keys(s.params.on).forEach(e => {
                        s.on(e, s.params.on[e])
                    }), s.params && s.params.onAny && s.onAny(s.params.onAny), s.$ = d, Object.assign(s, {
                        enabled: s.params.enabled,
                        el: e,
                        classNames: [],
                        slides: d(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === s.params.direction,
                        isVertical: () => "vertical" === s.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: s.params.allowSlideNext,
                        allowSlidePrev: s.params.allowSlidePrev,
                        touchEvents: function() {
                            const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                                t = ["pointerdown", "pointermove", "pointerup"];
                            return s.touchEventsTouch = {
                                start: e[0],
                                move: e[1],
                                end: e[2],
                                cancel: e[3]
                            }, s.touchEventsDesktop = {
                                start: t[0],
                                move: t[1],
                                end: t[2]
                            }, s.support.touch || !s.params.simulateTouch ? s.touchEventsTouch : s.touchEventsDesktop
                        }(),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: s.params.focusableElements,
                            lastClickTime: p(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: s.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), s.emit("_swiper"), s.params.init && s.init(), s
                }
                enable() {
                    const e = this;
                    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
                }
                disable() {
                    const e = this;
                    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
                }
                setProgress(e, t) {
                    const n = this;
                    e = Math.min(Math.max(e, 0), 1);
                    const i = n.minTranslate(),
                        r = (n.maxTranslate() - i) * e + i;
                    n.translateTo(r, void 0 === t ? 0 : t), n.updateActiveIndex(), n.updateSlidesClasses()
                }
                emitContainerClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    const t = this;
                    return e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
                }
                emitSlidesClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = [];
                    e.slides.each(n => {
                        const i = e.getSlideClasses(n);
                        t.push({
                            slideEl: n,
                            classNames: i
                        }), e.emit("_slideClass", n, i)
                    }), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic(e, t) {
                    void 0 === e && (e = "current"), void 0 === t && (t = !1);
                    const {
                        params: n,
                        slides: i,
                        slidesGrid: r,
                        slidesSizesGrid: s,
                        size: a,
                        activeIndex: o
                    } = this;
                    let l = 1;
                    if (n.centeredSlides) {
                        let e, t = i[o].swiperSlideSize;
                        for (let n = o + 1; n < i.length; n += 1) i[n] && !e && (t += i[n].swiperSlideSize, l += 1, t > a && (e = !0));
                        for (let n = o - 1; n >= 0; n -= 1) i[n] && !e && (t += i[n].swiperSlideSize, l += 1, t > a && (e = !0))
                    } else if ("current" === e)
                        for (let e = o + 1; e < i.length; e += 1)(t ? r[e] + s[e] - r[o] < a : r[e] - r[o] < a) && (l += 1);
                    else
                        for (let e = o - 1; e >= 0; e -= 1) r[o] - r[e] < a && (l += 1);
                    return l
                }
                update() {
                    const e = this;
                    if (!e || e.destroyed) return;
                    const {
                        snapGrid: t,
                        params: n
                    } = e;

                    function i() {
                        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    let r;
                    n.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (i(), e.params.autoHeight && e.updateAutoHeight()) : (r = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), r || i()), n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }
                changeDirection(e, t) {
                    void 0 === t && (t = !0);
                    const n = this,
                        i = n.params.direction;
                    return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (n.$el.removeClass(`${n.params.containerModifierClass}${i}`).addClass(`${n.params.containerModifierClass}${e}`), n.emitContainerClasses(), n.params.direction = e, n.slides.each(t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    }), n.emit("changeDirection"), t && n.update()), n
                }
                mount(e) {
                    const t = this;
                    if (t.mounted) return !0;
                    const n = d(e || t.params.el);
                    if (!(e = n[0])) return !1;
                    e.swiper = t;
                    const r = () => "." + (t.params.wrapperClass || "").trim().split(" ").join(".");
                    let s = (() => {
                        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                            const t = d(e.shadowRoot.querySelector(r()));
                            return t.children = e => n.children(e), t
                        }
                        return n.children(r())
                    })();
                    if (0 === s.length && t.params.createElements) {
                        const e = i().createElement("div");
                        s = d(e), e.className = t.params.wrapperClass, n.append(e), n.children("." + t.params.slideClass).each(e => {
                            s.append(e)
                        })
                    }
                    return Object.assign(t, {
                        $el: n,
                        el: e,
                        $wrapperEl: s,
                        wrapperEl: s[0],
                        mounted: !0,
                        rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
                        wrongRTL: "-webkit-box" === s.css("display")
                    }), !0
                }
                init(e) {
                    const t = this;
                    return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
                }
                destroy(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    const n = this,
                        {
                            params: i,
                            $el: r,
                            $wrapperEl: s,
                            slides: a
                        } = n;
                    return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), i.loop && n.loopDestroy(), t && (n.removeClasses(), r.removeAttr("style"), s.removeAttr("style"), a && a.length && a.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach(e => {
                        n.off(e)
                    }), !1 !== e && (n.$el[0].swiper = null, function(e) {
                        const t = e;
                        Object.keys(t).forEach(e => {
                            try {
                                t[e] = null
                            } catch (e) {}
                            try {
                                delete t[e]
                            } catch (e) {}
                        })
                    }(n)), n.destroyed = !0), null
                }
                static extendDefaults(e) {
                    g(H, e)
                }
                static get extendedDefaults() {
                    return H
                }
                static get defaults() {
                    return L
                }
                static installModule(e) {
                    q.prototype.__modules__ || (q.prototype.__modules__ = []);
                    const t = q.prototype.__modules__;
                    "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? (e.forEach(e => q.installModule(e)), q) : (q.installModule(e), q)
                }
            }

            function B(e, t, n, r) {
                const s = i();
                return e.params.createElements && Object.keys(r).forEach(i => {
                    if (!n[i] && !0 === n.auto) {
                        let a = e.$el.children("." + r[i])[0];
                        a || (a = s.createElement("div"), a.className = r[i], e.$el.append(a)), n[i] = a, t[i] = a
                    }
                }), n
            }

            function R(e) {
                return void 0 === e && (e = ""), "." + e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")
            }

            function F(e) {
                const t = this,
                    {
                        $wrapperEl: n,
                        params: i
                    } = t;
                if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
                    for (let t = 0; t < e.length; t += 1) e[t] && n.append(e[t]);
                else n.append(e);
                i.loop && t.loopCreate(), i.observer || t.update()
            }

            function W(e) {
                const t = this,
                    {
                        params: n,
                        $wrapperEl: i,
                        activeIndex: r
                    } = t;
                n.loop && t.loopDestroy();
                let s = r + 1;
                if ("object" == typeof e && "length" in e) {
                    for (let t = 0; t < e.length; t += 1) e[t] && i.prepend(e[t]);
                    s = r + e.length
                } else i.prepend(e);
                n.loop && t.loopCreate(), n.observer || t.update(), t.slideTo(s, 0, !1)
            }

            function X(e, t) {
                const n = this,
                    {
                        $wrapperEl: i,
                        params: r,
                        activeIndex: s
                    } = n;
                let a = s;
                r.loop && (a -= n.loopedSlides, n.loopDestroy(), n.slides = i.children("." + r.slideClass));
                const o = n.slides.length;
                if (e <= 0) return void n.prependSlide(t);
                if (e >= o) return void n.appendSlide(t);
                let l = a > e ? a + 1 : a;
                const d = [];
                for (let t = o - 1; t >= e; t -= 1) {
                    const e = n.slides.eq(t);
                    e.remove(), d.unshift(e)
                }
                if ("object" == typeof t && "length" in t) {
                    for (let e = 0; e < t.length; e += 1) t[e] && i.append(t[e]);
                    l = a > e ? a + t.length : a
                } else i.append(t);
                for (let e = 0; e < d.length; e += 1) i.append(d[e]);
                r.loop && n.loopCreate(), r.observer || n.update(), r.loop ? n.slideTo(l + n.loopedSlides, 0, !1) : n.slideTo(l, 0, !1)
            }

            function Y(e) {
                const t = this,
                    {
                        params: n,
                        $wrapperEl: i,
                        activeIndex: r
                    } = t;
                let s = r;
                n.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + n.slideClass));
                let a, o = s;
                if ("object" == typeof e && "length" in e) {
                    for (let n = 0; n < e.length; n += 1) a = e[n], t.slides[a] && t.slides.eq(a).remove(), a < o && (o -= 1);
                    o = Math.max(o, 0)
                } else a = e, t.slides[a] && t.slides.eq(a).remove(), a < o && (o -= 1), o = Math.max(o, 0);
                n.loop && t.loopCreate(), n.observer || t.update(), n.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1)
            }

            function G() {
                const e = this,
                    t = [];
                for (let n = 0; n < e.slides.length; n += 1) t.push(n);
                e.removeSlide(t)
            }

            function V(e) {
                const {
                    effect: t,
                    swiper: n,
                    on: i,
                    setTranslate: r,
                    setTransition: s,
                    overwriteParams: a,
                    perspective: o
                } = e;
                i("beforeInit", () => {
                    if (n.params.effect !== t) return;
                    n.classNames.push(`${n.params.containerModifierClass}${t}`), o && o() && n.classNames.push(n.params.containerModifierClass + "3d");
                    const e = a ? a() : {};
                    Object.assign(n.params, e), Object.assign(n.originalParams, e)
                }), i("setTranslate", () => {
                    n.params.effect === t && r()
                }), i("setTransition", (e, i) => {
                    n.params.effect === t && s(i)
                })
            }

            function U(e, t) {
                return e.transformEl ? t.find(e.transformEl).css({
                    "backface-visibility": "hidden",
                    "-webkit-backface-visibility": "hidden"
                }) : t
            }

            function Q(e) {
                let {
                    swiper: t,
                    duration: n,
                    transformEl: i,
                    allSlides: r
                } = e;
                const {
                    slides: s,
                    activeIndex: a,
                    $wrapperEl: o
                } = t;
                if (t.params.virtualTranslate && 0 !== n) {
                    let e, n = !1;
                    e = r ? i ? s.find(i) : s : i ? s.eq(a).find(i) : s.eq(a), e.transitionEnd(() => {
                        if (n) return;
                        if (!t || t.destroyed) return;
                        n = !0, t.animating = !1;
                        const e = ["webkitTransitionEnd", "transitionend"];
                        for (let t = 0; t < e.length; t += 1) o.trigger(e[t])
                    })
                }
            }

            function K(e, t, n) {
                const i = "swiper-slide-shadow" + (n ? "-" + n : ""),
                    r = e.transformEl ? t.find(e.transformEl) : t;
                let s = r.children("." + i);
                return s.length || (s = d(`<div class="swiper-slide-shadow${n?"-"+n:""}"></div>`), r.append(s)), s
            }
            Object.keys(z).forEach(e => {
                Object.keys(z[e]).forEach(t => {
                    q.prototype[t] = z[e][t]
                })
            }), q.use([function(e) {
                let {
                    swiper: t,
                    on: n,
                    emit: i
                } = e;
                const r = s();
                let a = null,
                    o = null;
                const l = () => {
                        t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"))
                    },
                    d = () => {
                        t && !t.destroyed && t.initialized && i("orientationchange")
                    };
                n("init", () => {
                    t.params.resizeObserver && void 0 !== r.ResizeObserver ? t && !t.destroyed && t.initialized && (a = new ResizeObserver(e => {
                        o = r.requestAnimationFrame(() => {
                            const {
                                width: n,
                                height: i
                            } = t;
                            let r = n,
                                s = i;
                            e.forEach(e => {
                                let {
                                    contentBoxSize: n,
                                    contentRect: i,
                                    target: a
                                } = e;
                                a && a !== t.el || (r = i ? i.width : (n[0] || n).inlineSize, s = i ? i.height : (n[0] || n).blockSize)
                            }), r === n && s === i || l()
                        })
                    }), a.observe(t.el)) : (r.addEventListener("resize", l), r.addEventListener("orientationchange", d))
                }), n("destroy", () => {
                    o && r.cancelAnimationFrame(o), a && a.unobserve && t.el && (a.unobserve(t.el), a = null), r.removeEventListener("resize", l), r.removeEventListener("orientationchange", d)
                })
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: n,
                    on: i,
                    emit: r
                } = e;
                const a = [],
                    o = s(),
                    l = function(e, t) {
                        void 0 === t && (t = {});
                        const n = new(o.MutationObserver || o.WebkitMutationObserver)(e => {
                            if (1 === e.length) return void r("observerUpdate", e[0]);
                            const t = function() {
                                r("observerUpdate", e[0])
                            };
                            o.requestAnimationFrame ? o.requestAnimationFrame(t) : o.setTimeout(t, 0)
                        });
                        n.observe(e, {
                            attributes: void 0 === t.attributes || t.attributes,
                            childList: void 0 === t.childList || t.childList,
                            characterData: void 0 === t.characterData || t.characterData
                        }), a.push(n)
                    };
                n({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), i("init", () => {
                    if (t.params.observer) {
                        if (t.params.observeParents) {
                            const e = t.$el.parents();
                            for (let t = 0; t < e.length; t += 1) l(e[t])
                        }
                        l(t.$el[0], {
                            childList: t.params.observeSlideChildren
                        }), l(t.$wrapperEl[0], {
                            attributes: !1
                        })
                    }
                }), i("destroy", () => {
                    a.forEach(e => {
                        e.disconnect()
                    }), a.splice(0, a.length)
                })
            }]);
            const J = [function(e) {
                let t, {
                    swiper: n,
                    extendParams: i,
                    on: r
                } = e;

                function s(e, t) {
                    const i = n.params.virtual;
                    if (i.cache && n.virtual.cache[t]) return n.virtual.cache[t];
                    const r = i.renderSlide ? d(i.renderSlide.call(n, e, t)) : d(`<div class="${n.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
                    return r.attr("data-swiper-slide-index") || r.attr("data-swiper-slide-index", t), i.cache && (n.virtual.cache[t] = r), r
                }

                function a(e) {
                    const {
                        slidesPerView: t,
                        slidesPerGroup: i,
                        centeredSlides: r
                    } = n.params, {
                        addSlidesBefore: a,
                        addSlidesAfter: o
                    } = n.params.virtual, {
                        from: l,
                        to: d,
                        slides: c,
                        slidesGrid: u,
                        offset: p
                    } = n.virtual;
                    n.params.cssMode || n.updateActiveIndex();
                    const f = n.activeIndex || 0;
                    let h, m, g;
                    h = n.rtlTranslate ? "right" : n.isHorizontal() ? "left" : "top", r ? (m = Math.floor(t / 2) + i + o, g = Math.floor(t / 2) + i + a) : (m = t + (i - 1) + o, g = i + a);
                    const v = Math.max((f || 0) - g, 0),
                        y = Math.min((f || 0) + m, c.length - 1),
                        b = (n.slidesGrid[v] || 0) - (n.slidesGrid[0] || 0);

                    function w() {
                        n.updateSlides(), n.updateProgress(), n.updateSlidesClasses(), n.lazy && n.params.lazy.enabled && n.lazy.load()
                    }
                    if (Object.assign(n.virtual, {
                            from: v,
                            to: y,
                            offset: b,
                            slidesGrid: n.slidesGrid
                        }), l === v && d === y && !e) return n.slidesGrid !== u && b !== p && n.slides.css(h, b + "px"), void n.updateProgress();
                    if (n.params.virtual.renderExternal) return n.params.virtual.renderExternal.call(n, {
                        offset: b,
                        from: v,
                        to: y,
                        slides: function() {
                            const e = [];
                            for (let t = v; t <= y; t += 1) e.push(c[t]);
                            return e
                        }()
                    }), void(n.params.virtual.renderExternalUpdate && w());
                    const x = [],
                        E = [];
                    if (e) n.$wrapperEl.find("." + n.params.slideClass).remove();
                    else
                        for (let e = l; e <= d; e += 1)(e < v || e > y) && n.$wrapperEl.find(`.${n.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
                    for (let t = 0; t < c.length; t += 1) t >= v && t <= y && (void 0 === d || e ? E.push(t) : (t > d && E.push(t), t < l && x.push(t)));
                    E.forEach(e => {
                        n.$wrapperEl.append(s(c[e], e))
                    }), x.sort((e, t) => t - e).forEach(e => {
                        n.$wrapperEl.prepend(s(c[e], e))
                    }), n.$wrapperEl.children(".swiper-slide").css(h, b + "px"), w()
                }
                i({
                    virtual: {
                        enabled: !1,
                        slides: [],
                        cache: !0,
                        renderSlide: null,
                        renderExternal: null,
                        renderExternalUpdate: !0,
                        addSlidesBefore: 0,
                        addSlidesAfter: 0
                    }
                }), n.virtual = {
                    cache: {},
                    from: void 0,
                    to: void 0,
                    slides: [],
                    offset: 0,
                    slidesGrid: []
                }, r("beforeInit", () => {
                    n.params.virtual.enabled && (n.virtual.slides = n.params.virtual.slides, n.classNames.push(n.params.containerModifierClass + "virtual"), n.params.watchSlidesProgress = !0, n.originalParams.watchSlidesProgress = !0, n.params.initialSlide || a())
                }), r("setTranslate", () => {
                    n.params.virtual.enabled && (n.params.cssMode && !n._immediateVirtual ? (clearTimeout(t), t = setTimeout(() => {
                        a()
                    }, 100)) : a())
                }), r("init update resize", () => {
                    n.params.virtual.enabled && n.params.cssMode && v(n.wrapperEl, "--swiper-virtual-size", n.virtualSize + "px")
                }), Object.assign(n.virtual, {
                    appendSlide: function(e) {
                        if ("object" == typeof e && "length" in e)
                            for (let t = 0; t < e.length; t += 1) e[t] && n.virtual.slides.push(e[t]);
                        else n.virtual.slides.push(e);
                        a(!0)
                    },
                    prependSlide: function(e) {
                        const t = n.activeIndex;
                        let i = t + 1,
                            r = 1;
                        if (Array.isArray(e)) {
                            for (let t = 0; t < e.length; t += 1) e[t] && n.virtual.slides.unshift(e[t]);
                            i = t + e.length, r = e.length
                        } else n.virtual.slides.unshift(e);
                        if (n.params.virtual.cache) {
                            const e = n.virtual.cache,
                                t = {};
                            Object.keys(e).forEach(n => {
                                const i = e[n],
                                    s = i.attr("data-swiper-slide-index");
                                s && i.attr("data-swiper-slide-index", parseInt(s, 10) + r), t[parseInt(n, 10) + r] = i
                            }), n.virtual.cache = t
                        }
                        a(!0), n.slideTo(i, 0)
                    },
                    removeSlide: function(e) {
                        if (null == e) return;
                        let t = n.activeIndex;
                        if (Array.isArray(e))
                            for (let i = e.length - 1; i >= 0; i -= 1) n.virtual.slides.splice(e[i], 1), n.params.virtual.cache && delete n.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0);
                        else n.virtual.slides.splice(e, 1), n.params.virtual.cache && delete n.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
                        a(!0), n.slideTo(t, 0)
                    },
                    removeAllSlides: function() {
                        n.virtual.slides = [], n.params.virtual.cache && (n.virtual.cache = {}), a(!0), n.slideTo(0, 0)
                    },
                    update: a
                })
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: n,
                    on: r,
                    emit: a
                } = e;
                const o = i(),
                    l = s();

                function c(e) {
                    if (!t.enabled) return;
                    const {
                        rtlTranslate: n
                    } = t;
                    let i = e;
                    i.originalEvent && (i = i.originalEvent);
                    const r = i.keyCode || i.charCode,
                        s = t.params.keyboard.pageUpDown,
                        d = s && 33 === r,
                        c = s && 34 === r,
                        u = 37 === r,
                        p = 39 === r,
                        f = 38 === r,
                        h = 40 === r;
                    if (!t.allowSlideNext && (t.isHorizontal() && p || t.isVertical() && h || c)) return !1;
                    if (!t.allowSlidePrev && (t.isHorizontal() && u || t.isVertical() && f || d)) return !1;
                    if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || o.activeElement && o.activeElement.nodeName && ("input" === o.activeElement.nodeName.toLowerCase() || "textarea" === o.activeElement.nodeName.toLowerCase()))) {
                        if (t.params.keyboard.onlyInViewport && (d || c || u || p || f || h)) {
                            let e = !1;
                            if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                            const i = t.$el,
                                r = i[0].clientWidth,
                                s = i[0].clientHeight,
                                a = l.innerWidth,
                                o = l.innerHeight,
                                d = t.$el.offset();
                            n && (d.left -= t.$el[0].scrollLeft);
                            const c = [
                                [d.left, d.top],
                                [d.left + r, d.top],
                                [d.left, d.top + s],
                                [d.left + r, d.top + s]
                            ];
                            for (let t = 0; t < c.length; t += 1) {
                                const n = c[t];
                                if (n[0] >= 0 && n[0] <= a && n[1] >= 0 && n[1] <= o) {
                                    if (0 === n[0] && 0 === n[1]) continue;
                                    e = !0
                                }
                            }
                            if (!e) return
                        }
                        t.isHorizontal() ? ((d || c || u || p) && (i.preventDefault ? i.preventDefault() : i.returnValue = !1), ((c || p) && !n || (d || u) && n) && t.slideNext(), ((d || u) && !n || (c || p) && n) && t.slidePrev()) : ((d || c || f || h) && (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (c || h) && t.slideNext(), (d || f) && t.slidePrev()), a("keyPress", r)
                    }
                }

                function u() {
                    t.keyboard.enabled || (d(o).on("keydown", c), t.keyboard.enabled = !0)
                }

                function p() {
                    t.keyboard.enabled && (d(o).off("keydown", c), t.keyboard.enabled = !1)
                }
                t.keyboard = {
                    enabled: !1
                }, n({
                    keyboard: {
                        enabled: !1,
                        onlyInViewport: !0,
                        pageUpDown: !0
                    }
                }), r("init", () => {
                    t.params.keyboard.enabled && u()
                }), r("destroy", () => {
                    t.keyboard.enabled && p()
                }), Object.assign(t.keyboard, {
                    enable: u,
                    disable: p
                })
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: n,
                    on: i,
                    emit: r
                } = e;
                const a = s();
                let o;
                n({
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarget: "container",
                        thresholdDelta: null,
                        thresholdTime: null
                    }
                }), t.mousewheel = {
                    enabled: !1
                };
                let l, c = p();
                const f = [];

                function h() {
                    t.enabled && (t.mouseEntered = !0)
                }

                function m() {
                    t.enabled && (t.mouseEntered = !1)
                }

                function g(e) {
                    return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta || t.params.mousewheel.thresholdTime && p() - c < t.params.mousewheel.thresholdTime || !(e.delta >= 6 && p() - c < 60) && (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), r("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), r("scroll", e.raw)), c = (new a.Date).getTime(), 1))
                }

                function v(e) {
                    let n = e,
                        i = !0;
                    if (!t.enabled) return;
                    const s = t.params.mousewheel;
                    t.params.cssMode && n.preventDefault();
                    let a = t.$el;
                    if ("container" !== t.params.mousewheel.eventsTarget && (a = d(t.params.mousewheel.eventsTarget)), !t.mouseEntered && !a[0].contains(n.target) && !s.releaseOnEdges) return !0;
                    n.originalEvent && (n = n.originalEvent);
                    let c = 0;
                    const h = t.rtlTranslate ? -1 : 1,
                        m = function(e) {
                            let t = 0,
                                n = 0,
                                i = 0,
                                r = 0;
                            return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), i = 10 * t, r = 10 * n, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (i = e.deltaX), e.shiftKey && !i && (i = r, r = 0), (i || r) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, r *= 40) : (i *= 800, r *= 800)), i && !t && (t = i < 1 ? -1 : 1), r && !n && (n = r < 1 ? -1 : 1), {
                                spinX: t,
                                spinY: n,
                                pixelX: i,
                                pixelY: r
                            }
                        }(n);
                    if (s.forceToAxis)
                        if (t.isHorizontal()) {
                            if (!(Math.abs(m.pixelX) > Math.abs(m.pixelY))) return !0;
                            c = -m.pixelX * h
                        } else {
                            if (!(Math.abs(m.pixelY) > Math.abs(m.pixelX))) return !0;
                            c = -m.pixelY
                        }
                    else c = Math.abs(m.pixelX) > Math.abs(m.pixelY) ? -m.pixelX * h : -m.pixelY;
                    if (0 === c) return !0;
                    s.invert && (c = -c);
                    let v = t.getTranslate() + c * s.sensitivity;
                    if (v >= t.minTranslate() && (v = t.minTranslate()), v <= t.maxTranslate() && (v = t.maxTranslate()), i = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()), i && t.params.nested && n.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
                        const e = {
                                time: p(),
                                delta: Math.abs(c),
                                direction: Math.sign(c)
                            },
                            i = l && e.time < l.time + 500 && e.delta <= l.delta && e.direction === l.direction;
                        if (!i) {
                            l = void 0, t.params.loop && t.loopFix();
                            let a = t.getTranslate() + c * s.sensitivity;
                            const d = t.isBeginning,
                                p = t.isEnd;
                            if (a >= t.minTranslate() && (a = t.minTranslate()), a <= t.maxTranslate() && (a = t.maxTranslate()), t.setTransition(0), t.setTranslate(a), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!d && t.isBeginning || !p && t.isEnd) && t.updateSlidesClasses(), t.params.freeMode.sticky) {
                                clearTimeout(o), o = void 0, f.length >= 15 && f.shift();
                                const n = f.length ? f[f.length - 1] : void 0,
                                    i = f[0];
                                if (f.push(e), n && (e.delta > n.delta || e.direction !== n.direction)) f.splice(0);
                                else if (f.length >= 15 && e.time - i.time < 500 && i.delta - e.delta >= 1 && e.delta <= 6) {
                                    const n = c > 0 ? .8 : .2;
                                    l = e, f.splice(0), o = u(() => {
                                        t.slideToClosest(t.params.speed, !0, void 0, n)
                                    }, 0)
                                }
                                o || (o = u(() => {
                                    l = e, f.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5)
                                }, 500))
                            }
                            if (i || r("scroll", n), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), a === t.minTranslate() || a === t.maxTranslate()) return !0
                        }
                    } else {
                        const n = {
                            time: p(),
                            delta: Math.abs(c),
                            direction: Math.sign(c),
                            raw: e
                        };
                        f.length >= 2 && f.shift();
                        const i = f.length ? f[f.length - 1] : void 0;
                        if (f.push(n), i ? (n.direction !== i.direction || n.delta > i.delta || n.time > i.time + 150) && g(n) : g(n), function(e) {
                                const n = t.params.mousewheel;
                                if (e.direction < 0) {
                                    if (t.isEnd && !t.params.loop && n.releaseOnEdges) return !0
                                } else if (t.isBeginning && !t.params.loop && n.releaseOnEdges) return !0;
                                return !1
                            }(n)) return !0
                    }
                    return n.preventDefault ? n.preventDefault() : n.returnValue = !1, !1
                }

                function y(e) {
                    let n = t.$el;
                    "container" !== t.params.mousewheel.eventsTarget && (n = d(t.params.mousewheel.eventsTarget)), n[e]("mouseenter", h), n[e]("mouseleave", m), n[e]("wheel", v)
                }

                function b() {
                    return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", v), !0) : !t.mousewheel.enabled && (y("on"), t.mousewheel.enabled = !0, !0)
                }

                function w() {
                    return t.params.cssMode ? (t.wrapperEl.addEventListener(event, v), !0) : !!t.mousewheel.enabled && (y("off"), t.mousewheel.enabled = !1, !0)
                }
                i("init", () => {
                    !t.params.mousewheel.enabled && t.params.cssMode && w(), t.params.mousewheel.enabled && b()
                }), i("destroy", () => {
                    t.params.cssMode && b(), t.mousewheel.enabled && w()
                }), Object.assign(t.mousewheel, {
                    enable: b,
                    disable: w
                })
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: n,
                    on: i,
                    emit: r
                } = e;

                function s(e) {
                    let n;
                    return e && (n = d(e), t.params.uniqueNavElements && "string" == typeof e && n.length > 1 && 1 === t.$el.find(e).length && (n = t.$el.find(e))), n
                }

                function a(e, n) {
                    const i = t.params.navigation;
                    e && e.length > 0 && (e[n ? "addClass" : "removeClass"](i.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = n), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](i.lockClass))
                }

                function o() {
                    if (t.params.loop) return;
                    const {
                        $nextEl: e,
                        $prevEl: n
                    } = t.navigation;
                    a(n, t.isBeginning && !t.params.rewind), a(e, t.isEnd && !t.params.rewind)
                }

                function l(e) {
                    e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && t.slidePrev()
                }

                function c(e) {
                    e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext()
                }

                function u() {
                    const e = t.params.navigation;
                    if (t.params.navigation = B(t, t.originalParams.navigation, t.params.navigation, {
                            nextEl: "swiper-button-next",
                            prevEl: "swiper-button-prev"
                        }), !e.nextEl && !e.prevEl) return;
                    const n = s(e.nextEl),
                        i = s(e.prevEl);
                    n && n.length > 0 && n.on("click", c), i && i.length > 0 && i.on("click", l), Object.assign(t.navigation, {
                        $nextEl: n,
                        nextEl: n && n[0],
                        $prevEl: i,
                        prevEl: i && i[0]
                    }), t.enabled || (n && n.addClass(e.lockClass), i && i.addClass(e.lockClass))
                }

                function p() {
                    const {
                        $nextEl: e,
                        $prevEl: n
                    } = t.navigation;
                    e && e.length && (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)), n && n.length && (n.off("click", l), n.removeClass(t.params.navigation.disabledClass))
                }
                n({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock"
                    }
                }), t.navigation = {
                    nextEl: null,
                    $nextEl: null,
                    prevEl: null,
                    $prevEl: null
                }, i("init", () => {
                    u(), o()
                }), i("toEdge fromEdge lock unlock", () => {
                    o()
                }), i("destroy", () => {
                    p()
                }), i("enable disable", () => {
                    const {
                        $nextEl: e,
                        $prevEl: n
                    } = t.navigation;
                    e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), n && n[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass)
                }), i("click", (e, n) => {
                    const {
                        $nextEl: i,
                        $prevEl: s
                    } = t.navigation, a = n.target;
                    if (t.params.navigation.hideOnClick && !d(a).is(s) && !d(a).is(i)) {
                        if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === a || t.pagination.el.contains(a))) return;
                        let e;
                        i ? e = i.hasClass(t.params.navigation.hiddenClass) : s && (e = s.hasClass(t.params.navigation.hiddenClass)), r(!0 === e ? "navigationShow" : "navigationHide"), i && i.toggleClass(t.params.navigation.hiddenClass), s && s.toggleClass(t.params.navigation.hiddenClass)
                    }
                }), Object.assign(t.navigation, {
                    update: o,
                    init: u,
                    destroy: p
                })
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: n,
                    on: i,
                    emit: r
                } = e;
                const s = "swiper-pagination";
                let a;
                n({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: e => e,
                        formatFractionTotal: e => e,
                        bulletClass: s + "-bullet",
                        bulletActiveClass: s + "-bullet-active",
                        modifierClass: s + "-",
                        currentClass: s + "-current",
                        totalClass: s + "-total",
                        hiddenClass: s + "-hidden",
                        progressbarFillClass: s + "-progressbar-fill",
                        progressbarOppositeClass: s + "-progressbar-opposite",
                        clickableClass: s + "-clickable",
                        lockClass: s + "-lock",
                        horizontalClass: s + "-horizontal",
                        verticalClass: s + "-vertical"
                    }
                }), t.pagination = {
                    el: null,
                    $el: null,
                    bullets: []
                };
                let o = 0;

                function l() {
                    return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length
                }

                function c(e, n) {
                    const {
                        bulletActiveClass: i
                    } = t.params.pagination;
                    e[n]().addClass(`${i}-${n}`)[n]().addClass(`${i}-${n}-${n}`)
                }

                function u() {
                    const e = t.rtl,
                        n = t.params.pagination;
                    if (l()) return;
                    const i = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                        s = t.pagination.$el;
                    let u;
                    const p = t.params.loop ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                    if (t.params.loop ? (u = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), u > i - 1 - 2 * t.loopedSlides && (u -= i - 2 * t.loopedSlides), u > p - 1 && (u -= p), u < 0 && "bullets" !== t.params.paginationType && (u = p + u)) : u = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === n.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                        const i = t.pagination.bullets;
                        let r, l, p;
                        if (n.dynamicBullets && (a = i.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), s.css(t.isHorizontal() ? "width" : "height", a * (n.dynamicMainBullets + 4) + "px"), n.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (o += u - (t.previousIndex - t.loopedSlides || 0), o > n.dynamicMainBullets - 1 ? o = n.dynamicMainBullets - 1 : o < 0 && (o = 0)), r = Math.max(u - o, 0), l = r + (Math.min(i.length, n.dynamicMainBullets) - 1), p = (l + r) / 2), i.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${n.bulletActiveClass}${e}`).join(" ")), s.length > 1) i.each(e => {
                            const t = d(e),
                                i = t.index();
                            i === u && t.addClass(n.bulletActiveClass), n.dynamicBullets && (i >= r && i <= l && t.addClass(n.bulletActiveClass + "-main"), i === r && c(t, "prev"), i === l && c(t, "next"))
                        });
                        else {
                            const e = i.eq(u),
                                s = e.index();
                            if (e.addClass(n.bulletActiveClass), n.dynamicBullets) {
                                const e = i.eq(r),
                                    a = i.eq(l);
                                for (let e = r; e <= l; e += 1) i.eq(e).addClass(n.bulletActiveClass + "-main");
                                if (t.params.loop)
                                    if (s >= i.length) {
                                        for (let e = n.dynamicMainBullets; e >= 0; e -= 1) i.eq(i.length - e).addClass(n.bulletActiveClass + "-main");
                                        i.eq(i.length - n.dynamicMainBullets - 1).addClass(n.bulletActiveClass + "-prev")
                                    } else c(e, "prev"), c(a, "next");
                                else c(e, "prev"), c(a, "next")
                            }
                        }
                        if (n.dynamicBullets) {
                            const r = Math.min(i.length, n.dynamicMainBullets + 4),
                                s = (a * r - a) / 2 - p * a,
                                o = e ? "right" : "left";
                            i.css(t.isHorizontal() ? o : "top", s + "px")
                        }
                    }
                    if ("fraction" === n.type && (s.find(R(n.currentClass)).text(n.formatFractionCurrent(u + 1)), s.find(R(n.totalClass)).text(n.formatFractionTotal(p))), "progressbar" === n.type) {
                        let e;
                        e = n.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                        const i = (u + 1) / p;
                        let r = 1,
                            a = 1;
                        "horizontal" === e ? r = i : a = i, s.find(R(n.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${r}) scaleY(${a})`).transition(t.params.speed)
                    }
                    "custom" === n.type && n.renderCustom ? (s.html(n.renderCustom(t, u + 1, p)), r("paginationRender", s[0])) : r("paginationUpdate", s[0]), t.params.watchOverflow && t.enabled && s[t.isLocked ? "addClass" : "removeClass"](n.lockClass)
                }

                function p() {
                    const e = t.params.pagination;
                    if (l()) return;
                    const n = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                        i = t.pagination.$el;
                    let s = "";
                    if ("bullets" === e.type) {
                        let r = t.params.loop ? Math.ceil((n - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                        t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && r > n && (r = n);
                        for (let n = 0; n < r; n += 1) e.renderBullet ? s += e.renderBullet.call(t, n, e.bulletClass) : s += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;
                        i.html(s), t.pagination.bullets = i.find(R(e.bulletClass))
                    }
                    "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`, i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`, i.html(s)), "custom" !== e.type && r("paginationRender", t.pagination.$el[0])
                }

                function f() {
                    t.params.pagination = B(t, t.originalParams.pagination, t.params.pagination, {
                        el: "swiper-pagination"
                    });
                    const e = t.params.pagination;
                    if (!e.el) return;
                    let n = d(e.el);
                    0 !== n.length && (t.params.uniqueNavElements && "string" == typeof e.el && n.length > 1 && (n = t.$el.find(e.el), n.length > 1 && (n = n.filter(e => d(e).parents(".swiper")[0] === t.el))), "bullets" === e.type && e.clickable && n.addClass(e.clickableClass), n.addClass(e.modifierClass + e.type), n.addClass(e.modifierClass + t.params.direction), "bullets" === e.type && e.dynamicBullets && (n.addClass(`${e.modifierClass}${e.type}-dynamic`), o = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && n.addClass(e.progressbarOppositeClass), e.clickable && n.on("click", R(e.bulletClass), (function(e) {
                        e.preventDefault();
                        let n = d(this).index() * t.params.slidesPerGroup;
                        t.params.loop && (n += t.loopedSlides), t.slideTo(n)
                    })), Object.assign(t.pagination, {
                        $el: n,
                        el: n[0]
                    }), t.enabled || n.addClass(e.lockClass))
                }

                function h() {
                    const e = t.params.pagination;
                    if (l()) return;
                    const n = t.pagination.$el;
                    n.removeClass(e.hiddenClass), n.removeClass(e.modifierClass + e.type), n.removeClass(e.modifierClass + t.params.direction), t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && n.off("click", R(e.bulletClass))
                }
                i("init", () => {
                    f(), p(), u()
                }), i("activeIndexChange", () => {
                    (t.params.loop || void 0 === t.snapIndex) && u()
                }), i("snapIndexChange", () => {
                    t.params.loop || u()
                }), i("slidesLengthChange", () => {
                    t.params.loop && (p(), u())
                }), i("snapGridLengthChange", () => {
                    t.params.loop || (p(), u())
                }), i("destroy", () => {
                    h()
                }), i("enable disable", () => {
                    const {
                        $el: e
                    } = t.pagination;
                    e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass)
                }), i("lock unlock", () => {
                    u()
                }), i("click", (e, n) => {
                    const i = n.target,
                        {
                            $el: s
                        } = t.pagination;
                    if (t.params.pagination.el && t.params.pagination.hideOnClick && s.length > 0 && !d(i).hasClass(t.params.pagination.bulletClass)) {
                        if (t.navigation && (t.navigation.nextEl && i === t.navigation.nextEl || t.navigation.prevEl && i === t.navigation.prevEl)) return;
                        const e = s.hasClass(t.params.pagination.hiddenClass);
                        r(!0 === e ? "paginationShow" : "paginationHide"), s.toggleClass(t.params.pagination.hiddenClass)
                    }
                }), Object.assign(t.pagination, {
                    render: p,
                    update: u,
                    init: f,
                    destroy: h
                })
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: n,
                    on: r,
                    emit: s
                } = e;
                const a = i();
                let o, l, c, p, f = !1,
                    h = null,
                    m = null;

                function g() {
                    if (!t.params.scrollbar.el || !t.scrollbar.el) return;
                    const {
                        scrollbar: e,
                        rtlTranslate: n,
                        progress: i
                    } = t, {
                        $dragEl: r,
                        $el: s
                    } = e, a = t.params.scrollbar;
                    let o = l,
                        d = (c - l) * i;
                    n ? (d = -d, d > 0 ? (o = l - d, d = 0) : -d + l > c && (o = c + d)) : d < 0 ? (o = l + d, d = 0) : d + l > c && (o = c - d), t.isHorizontal() ? (r.transform(`translate3d(${d}px, 0, 0)`), r[0].style.width = o + "px") : (r.transform(`translate3d(0px, ${d}px, 0)`), r[0].style.height = o + "px"), a.hide && (clearTimeout(h), s[0].style.opacity = 1, h = setTimeout(() => {
                        s[0].style.opacity = 0, s.transition(400)
                    }, 1e3))
                }

                function v() {
                    if (!t.params.scrollbar.el || !t.scrollbar.el) return;
                    const {
                        scrollbar: e
                    } = t, {
                        $dragEl: n,
                        $el: i
                    } = e;
                    n[0].style.width = "", n[0].style.height = "", c = t.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, p = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), l = "auto" === t.params.scrollbar.dragSize ? c * p : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? n[0].style.width = l + "px" : n[0].style.height = l + "px", i[0].style.display = p >= 1 ? "none" : "", t.params.scrollbar.hide && (i[0].style.opacity = 0), t.params.watchOverflow && t.enabled && e.$el[t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass)
                }

                function y(e) {
                    return t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
                }

                function b(e) {
                    const {
                        scrollbar: n,
                        rtlTranslate: i
                    } = t, {
                        $el: r
                    } = n;
                    let s;
                    s = (y(e) - r.offset()[t.isHorizontal() ? "left" : "top"] - (null !== o ? o : l / 2)) / (c - l), s = Math.max(Math.min(s, 1), 0), i && (s = 1 - s);
                    const a = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * s;
                    t.updateProgress(a), t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses()
                }

                function w(e) {
                    const n = t.params.scrollbar,
                        {
                            scrollbar: i,
                            $wrapperEl: r
                        } = t,
                        {
                            $el: a,
                            $dragEl: l
                        } = i;
                    f = !0, o = e.target === l[0] || e.target === l ? y(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), r.transition(100), l.transition(100), b(e), clearTimeout(m), a.transition(0), n.hide && a.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), s("scrollbarDragStart", e)
                }

                function x(e) {
                    const {
                        scrollbar: n,
                        $wrapperEl: i
                    } = t, {
                        $el: r,
                        $dragEl: a
                    } = n;
                    f && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, b(e), i.transition(0), r.transition(0), a.transition(0), s("scrollbarDragMove", e))
                }

                function E(e) {
                    const n = t.params.scrollbar,
                        {
                            scrollbar: i,
                            $wrapperEl: r
                        } = t,
                        {
                            $el: a
                        } = i;
                    f && (f = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), r.transition("")), n.hide && (clearTimeout(m), m = u(() => {
                        a.css("opacity", 0), a.transition(400)
                    }, 1e3)), s("scrollbarDragEnd", e), n.snapOnRelease && t.slideToClosest())
                }

                function T(e) {
                    const {
                        scrollbar: n,
                        touchEventsTouch: i,
                        touchEventsDesktop: r,
                        params: s,
                        support: o
                    } = t, l = n.$el[0], d = !(!o.passiveListener || !s.passiveListeners) && {
                        passive: !1,
                        capture: !1
                    }, c = !(!o.passiveListener || !s.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    if (!l) return;
                    const u = "on" === e ? "addEventListener" : "removeEventListener";
                    o.touch ? (l[u](i.start, w, d), l[u](i.move, x, d), l[u](i.end, E, c)) : (l[u](r.start, w, d), a[u](r.move, x, d), a[u](r.end, E, c))
                }

                function C() {
                    const {
                        scrollbar: e,
                        $el: n
                    } = t;
                    t.params.scrollbar = B(t, t.originalParams.scrollbar, t.params.scrollbar, {
                        el: "swiper-scrollbar"
                    });
                    const i = t.params.scrollbar;
                    if (!i.el) return;
                    let r = d(i.el);
                    t.params.uniqueNavElements && "string" == typeof i.el && r.length > 1 && 1 === n.find(i.el).length && (r = n.find(i.el));
                    let s = r.find("." + t.params.scrollbar.dragClass);
                    0 === s.length && (s = d(`<div class="${t.params.scrollbar.dragClass}"></div>`), r.append(s)), Object.assign(e, {
                        $el: r,
                        el: r[0],
                        $dragEl: s,
                        dragEl: s[0]
                    }), i.draggable && t.params.scrollbar.el && T("on"), r && r[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
                }

                function _() {
                    t.params.scrollbar.el && T("off")
                }
                n({
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0,
                        lockClass: "swiper-scrollbar-lock",
                        dragClass: "swiper-scrollbar-drag"
                    }
                }), t.scrollbar = {
                    el: null,
                    dragEl: null,
                    $el: null,
                    $dragEl: null
                }, r("init", () => {
                    C(), v(), g()
                }), r("update resize observerUpdate lock unlock", () => {
                    v()
                }), r("setTranslate", () => {
                    g()
                }), r("setTransition", (e, n) => {
                    ! function(e) {
                        t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
                    }(n)
                }), r("enable disable", () => {
                    const {
                        $el: e
                    } = t.scrollbar;
                    e && e[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
                }), r("destroy", () => {
                    _()
                }), Object.assign(t.scrollbar, {
                    updateSize: v,
                    setTranslate: g,
                    init: C,
                    destroy: _
                })
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: n,
                    on: i
                } = e;
                n({
                    parallax: {
                        enabled: !1
                    }
                });
                const r = (e, n) => {
                        const {
                            rtl: i
                        } = t, r = d(e), s = i ? -1 : 1, a = r.attr("data-swiper-parallax") || "0";
                        let o = r.attr("data-swiper-parallax-x"),
                            l = r.attr("data-swiper-parallax-y");
                        const c = r.attr("data-swiper-parallax-scale"),
                            u = r.attr("data-swiper-parallax-opacity");
                        if (o || l ? (o = o || "0", l = l || "0") : t.isHorizontal() ? (o = a, l = "0") : (l = a, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * n * s + "%" : o * n * s + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * n + "%" : l * n + "px", null != u) {
                            const e = u - (u - 1) * (1 - Math.abs(n));
                            r[0].style.opacity = e
                        }
                        if (null == c) r.transform(`translate3d(${o}, ${l}, 0px)`);
                        else {
                            const e = c - (c - 1) * (1 - Math.abs(n));
                            r.transform(`translate3d(${o}, ${l}, 0px) scale(${e})`)
                        }
                    },
                    s = () => {
                        const {
                            $el: e,
                            slides: n,
                            progress: i,
                            snapGrid: s
                        } = t;
                        e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(e => {
                            r(e, i)
                        }), n.each((e, n) => {
                            let a = e.progress;
                            t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (a += Math.ceil(n / 2) - i * (s.length - 1)), a = Math.min(Math.max(a, -1), 1), d(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(e => {
                                r(e, a)
                            })
                        })
                    };
                i("beforeInit", () => {
                    t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0)
                }), i("init", () => {
                    t.params.parallax.enabled && s()
                }), i("setTranslate", () => {
                    t.params.parallax.enabled && s()
                }), i("setTransition", (e, n) => {
                    t.params.parallax.enabled && function(e) {
                        void 0 === e && (e = t.params.speed);
                        const {
                            $el: n
                        } = t;
                        n.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(t => {
                            const n = d(t);
                            let i = parseInt(n.attr("data-swiper-parallax-duration"), 10) || e;
                            0 === e && (i = 0), n.transition(i)
                        })
                    }(n)
                })
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: n,
                    on: i,
                    emit: r
                } = e;
                const a = s();
                n({
                    zoom: {
                        enabled: !1,
                        maxRatio: 3,
                        minRatio: 1,
                        toggle: !0,
                        containerClass: "swiper-zoom-container",
                        zoomedSlideClass: "swiper-slide-zoomed"
                    }
                }), t.zoom = {
                    enabled: !1
                };
                let o, l, c, u = 1,
                    p = !1;
                const h = {
                        $slideEl: void 0,
                        slideWidth: void 0,
                        slideHeight: void 0,
                        $imageEl: void 0,
                        $imageWrapEl: void 0,
                        maxRatio: 3
                    },
                    m = {
                        isTouched: void 0,
                        isMoved: void 0,
                        currentX: void 0,
                        currentY: void 0,
                        minX: void 0,
                        minY: void 0,
                        maxX: void 0,
                        maxY: void 0,
                        width: void 0,
                        height: void 0,
                        startX: void 0,
                        startY: void 0,
                        touchesStart: {},
                        touchesCurrent: {}
                    },
                    g = {
                        x: void 0,
                        y: void 0,
                        prevPositionX: void 0,
                        prevPositionY: void 0,
                        prevTime: void 0
                    };
                let v = 1;

                function y(e) {
                    if (e.targetTouches.length < 2) return 1;
                    const t = e.targetTouches[0].pageX,
                        n = e.targetTouches[0].pageY,
                        i = e.targetTouches[1].pageX,
                        r = e.targetTouches[1].pageY;
                    return Math.sqrt((i - t) ** 2 + (r - n) ** 2)
                }

                function b(e) {
                    const n = t.support,
                        i = t.params.zoom;
                    if (l = !1, c = !1, !n.gestures) {
                        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                        l = !0, h.scaleStart = y(e)
                    }
                    h.$slideEl && h.$slideEl.length || (h.$slideEl = d(e.target).closest("." + t.params.slideClass), 0 === h.$slideEl.length && (h.$slideEl = t.slides.eq(t.activeIndex)), h.$imageEl = h.$slideEl.find("." + i.containerClass).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), h.$imageWrapEl = h.$imageEl.parent("." + i.containerClass), h.maxRatio = h.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== h.$imageWrapEl.length) ? (h.$imageEl && h.$imageEl.transition(0), p = !0) : h.$imageEl = void 0
                }

                function w(e) {
                    const n = t.support,
                        i = t.params.zoom,
                        r = t.zoom;
                    if (!n.gestures) {
                        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                        c = !0, h.scaleMove = y(e)
                    }
                    h.$imageEl && 0 !== h.$imageEl.length ? (n.gestures ? r.scale = e.scale * u : r.scale = h.scaleMove / h.scaleStart * u, r.scale > h.maxRatio && (r.scale = h.maxRatio - 1 + (r.scale - h.maxRatio + 1) ** .5), r.scale < i.minRatio && (r.scale = i.minRatio + 1 - (i.minRatio - r.scale + 1) ** .5), h.$imageEl.transform(`translate3d(0,0,0) scale(${r.scale})`)) : "gesturechange" === e.type && b(e)
                }

                function x(e) {
                    const n = t.device,
                        i = t.support,
                        r = t.params.zoom,
                        s = t.zoom;
                    if (!i.gestures) {
                        if (!l || !c) return;
                        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !n.android) return;
                        l = !1, c = !1
                    }
                    h.$imageEl && 0 !== h.$imageEl.length && (s.scale = Math.max(Math.min(s.scale, h.maxRatio), r.minRatio), h.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${s.scale})`), u = s.scale, p = !1, 1 === s.scale && (h.$slideEl = void 0))
                }

                function E(e) {
                    const n = t.zoom;
                    if (!h.$imageEl || 0 === h.$imageEl.length) return;
                    if (t.allowClick = !1, !m.isTouched || !h.$slideEl) return;
                    m.isMoved || (m.width = h.$imageEl[0].offsetWidth, m.height = h.$imageEl[0].offsetHeight, m.startX = f(h.$imageWrapEl[0], "x") || 0, m.startY = f(h.$imageWrapEl[0], "y") || 0, h.slideWidth = h.$slideEl[0].offsetWidth, h.slideHeight = h.$slideEl[0].offsetHeight, h.$imageWrapEl.transition(0));
                    const i = m.width * n.scale,
                        r = m.height * n.scale;
                    if (!(i < h.slideWidth && r < h.slideHeight)) {
                        if (m.minX = Math.min(h.slideWidth / 2 - i / 2, 0), m.maxX = -m.minX, m.minY = Math.min(h.slideHeight / 2 - r / 2, 0), m.maxY = -m.minY, m.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, m.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !m.isMoved && !p) {
                            if (t.isHorizontal() && (Math.floor(m.minX) === Math.floor(m.startX) && m.touchesCurrent.x < m.touchesStart.x || Math.floor(m.maxX) === Math.floor(m.startX) && m.touchesCurrent.x > m.touchesStart.x)) return void(m.isTouched = !1);
                            if (!t.isHorizontal() && (Math.floor(m.minY) === Math.floor(m.startY) && m.touchesCurrent.y < m.touchesStart.y || Math.floor(m.maxY) === Math.floor(m.startY) && m.touchesCurrent.y > m.touchesStart.y)) return void(m.isTouched = !1)
                        }
                        e.cancelable && e.preventDefault(), e.stopPropagation(), m.isMoved = !0, m.currentX = m.touchesCurrent.x - m.touchesStart.x + m.startX, m.currentY = m.touchesCurrent.y - m.touchesStart.y + m.startY, m.currentX < m.minX && (m.currentX = m.minX + 1 - (m.minX - m.currentX + 1) ** .8), m.currentX > m.maxX && (m.currentX = m.maxX - 1 + (m.currentX - m.maxX + 1) ** .8), m.currentY < m.minY && (m.currentY = m.minY + 1 - (m.minY - m.currentY + 1) ** .8), m.currentY > m.maxY && (m.currentY = m.maxY - 1 + (m.currentY - m.maxY + 1) ** .8), g.prevPositionX || (g.prevPositionX = m.touchesCurrent.x), g.prevPositionY || (g.prevPositionY = m.touchesCurrent.y), g.prevTime || (g.prevTime = Date.now()), g.x = (m.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2, g.y = (m.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2, Math.abs(m.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0), Math.abs(m.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0), g.prevPositionX = m.touchesCurrent.x, g.prevPositionY = m.touchesCurrent.y, g.prevTime = Date.now(), h.$imageWrapEl.transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`)
                    }
                }

                function T() {
                    const e = t.zoom;
                    h.$slideEl && t.previousIndex !== t.activeIndex && (h.$imageEl && h.$imageEl.transform("translate3d(0,0,0) scale(1)"), h.$imageWrapEl && h.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, u = 1, h.$slideEl = void 0, h.$imageEl = void 0, h.$imageWrapEl = void 0)
                }

                function C(e) {
                    const n = t.zoom,
                        i = t.params.zoom;
                    if (h.$slideEl || (e && e.target && (h.$slideEl = d(e.target).closest("." + t.params.slideClass)), h.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? h.$slideEl = t.$wrapperEl.children("." + t.params.slideActiveClass) : h.$slideEl = t.slides.eq(t.activeIndex)), h.$imageEl = h.$slideEl.find("." + i.containerClass).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), h.$imageWrapEl = h.$imageEl.parent("." + i.containerClass)), !h.$imageEl || 0 === h.$imageEl.length || !h.$imageWrapEl || 0 === h.$imageWrapEl.length) return;
                    let r, s, o, l, c, p, f, g, v, y, b, w, x, E, T, C, _, S;
                    t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), h.$slideEl.addClass("" + i.zoomedSlideClass), void 0 === m.touchesStart.x && e ? (r = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, s = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (r = m.touchesStart.x, s = m.touchesStart.y), n.scale = h.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, u = h.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, e ? (_ = h.$slideEl[0].offsetWidth, S = h.$slideEl[0].offsetHeight, o = h.$slideEl.offset().left + a.scrollX, l = h.$slideEl.offset().top + a.scrollY, c = o + _ / 2 - r, p = l + S / 2 - s, v = h.$imageEl[0].offsetWidth, y = h.$imageEl[0].offsetHeight, b = v * n.scale, w = y * n.scale, x = Math.min(_ / 2 - b / 2, 0), E = Math.min(S / 2 - w / 2, 0), T = -x, C = -E, f = c * n.scale, g = p * n.scale, f < x && (f = x), f > T && (f = T), g < E && (g = E), g > C && (g = C)) : (f = 0, g = 0), h.$imageWrapEl.transition(300).transform(`translate3d(${f}px, ${g}px,0)`), h.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${n.scale})`)
                }

                function _() {
                    const e = t.zoom,
                        n = t.params.zoom;
                    h.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? h.$slideEl = t.$wrapperEl.children("." + t.params.slideActiveClass) : h.$slideEl = t.slides.eq(t.activeIndex), h.$imageEl = h.$slideEl.find("." + n.containerClass).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), h.$imageWrapEl = h.$imageEl.parent("." + n.containerClass)), h.$imageEl && 0 !== h.$imageEl.length && h.$imageWrapEl && 0 !== h.$imageWrapEl.length && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, u = 1, h.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), h.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), h.$slideEl.removeClass("" + n.zoomedSlideClass), h.$slideEl = void 0)
                }

                function S(e) {
                    const n = t.zoom;
                    n.scale && 1 !== n.scale ? _() : C(e)
                }

                function k() {
                    const e = t.support;
                    return {
                        passiveListener: !("touchstart" !== t.touchEvents.start || !e.passiveListener || !t.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        },
                        activeListenerWithCapture: !e.passiveListener || {
                            passive: !1,
                            capture: !0
                        }
                    }
                }

                function M() {
                    return "." + t.params.slideClass
                }

                function $(e) {
                    const {
                        passiveListener: n
                    } = k(), i = M();
                    t.$wrapperEl[e]("gesturestart", i, b, n), t.$wrapperEl[e]("gesturechange", i, w, n), t.$wrapperEl[e]("gestureend", i, x, n)
                }

                function A() {
                    o || (o = !0, $("on"))
                }

                function D() {
                    o && (o = !1, $("off"))
                }

                function P() {
                    const e = t.zoom;
                    if (e.enabled) return;
                    e.enabled = !0;
                    const n = t.support,
                        {
                            passiveListener: i,
                            activeListenerWithCapture: r
                        } = k(),
                        s = M();
                    n.gestures ? (t.$wrapperEl.on(t.touchEvents.start, A, i), t.$wrapperEl.on(t.touchEvents.end, D, i)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.on(t.touchEvents.start, s, b, i), t.$wrapperEl.on(t.touchEvents.move, s, w, r), t.$wrapperEl.on(t.touchEvents.end, s, x, i), t.touchEvents.cancel && t.$wrapperEl.on(t.touchEvents.cancel, s, x, i)), t.$wrapperEl.on(t.touchEvents.move, "." + t.params.zoom.containerClass, E, r)
                }

                function N() {
                    const e = t.zoom;
                    if (!e.enabled) return;
                    const n = t.support;
                    e.enabled = !1;
                    const {
                        passiveListener: i,
                        activeListenerWithCapture: r
                    } = k(), s = M();
                    n.gestures ? (t.$wrapperEl.off(t.touchEvents.start, A, i), t.$wrapperEl.off(t.touchEvents.end, D, i)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, s, b, i), t.$wrapperEl.off(t.touchEvents.move, s, w, r), t.$wrapperEl.off(t.touchEvents.end, s, x, i), t.touchEvents.cancel && t.$wrapperEl.off(t.touchEvents.cancel, s, x, i)), t.$wrapperEl.off(t.touchEvents.move, "." + t.params.zoom.containerClass, E, r)
                }
                Object.defineProperty(t.zoom, "scale", {
                    get: () => v,
                    set(e) {
                        if (v !== e) {
                            const t = h.$imageEl ? h.$imageEl[0] : void 0,
                                n = h.$slideEl ? h.$slideEl[0] : void 0;
                            r("zoomChange", e, t, n)
                        }
                        v = e
                    }
                }), i("init", () => {
                    t.params.zoom.enabled && P()
                }), i("destroy", () => {
                    N()
                }), i("touchStart", (e, n) => {
                    t.zoom.enabled && function(e) {
                        const n = t.device;
                        h.$imageEl && 0 !== h.$imageEl.length && (m.isTouched || (n.android && e.cancelable && e.preventDefault(), m.isTouched = !0, m.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, m.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
                    }(n)
                }), i("touchEnd", (e, n) => {
                    t.zoom.enabled && function() {
                        const e = t.zoom;
                        if (!h.$imageEl || 0 === h.$imageEl.length) return;
                        if (!m.isTouched || !m.isMoved) return m.isTouched = !1, void(m.isMoved = !1);
                        m.isTouched = !1, m.isMoved = !1;
                        let n = 300,
                            i = 300;
                        const r = g.x * n,
                            s = m.currentX + r,
                            a = g.y * i,
                            o = m.currentY + a;
                        0 !== g.x && (n = Math.abs((s - m.currentX) / g.x)), 0 !== g.y && (i = Math.abs((o - m.currentY) / g.y));
                        const l = Math.max(n, i);
                        m.currentX = s, m.currentY = o;
                        const d = m.width * e.scale,
                            c = m.height * e.scale;
                        m.minX = Math.min(h.slideWidth / 2 - d / 2, 0), m.maxX = -m.minX, m.minY = Math.min(h.slideHeight / 2 - c / 2, 0), m.maxY = -m.minY, m.currentX = Math.max(Math.min(m.currentX, m.maxX), m.minX), m.currentY = Math.max(Math.min(m.currentY, m.maxY), m.minY), h.$imageWrapEl.transition(l).transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`)
                    }()
                }), i("doubleTap", (e, n) => {
                    !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && S(n)
                }), i("transitionEnd", () => {
                    t.zoom.enabled && t.params.zoom.enabled && T()
                }), i("slideChange", () => {
                    t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && T()
                }), Object.assign(t.zoom, {
                    enable: P,
                    disable: N,
                    in: C,
                    out: _,
                    toggle: S
                })
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: n,
                    on: i,
                    emit: r
                } = e;
                n({
                    lazy: {
                        checkInView: !1,
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        scrollingElement: "",
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader"
                    }
                }), t.lazy = {};
                let a = !1,
                    o = !1;

                function l(e, n) {
                    void 0 === n && (n = !0);
                    const i = t.params.lazy;
                    if (void 0 === e) return;
                    if (0 === t.slides.length) return;
                    const s = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`) : t.slides.eq(e),
                        a = s.find(`.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`);
                    !s.hasClass(i.elementClass) || s.hasClass(i.loadedClass) || s.hasClass(i.loadingClass) || a.push(s[0]), 0 !== a.length && a.each(e => {
                        const a = d(e);
                        a.addClass(i.loadingClass);
                        const o = a.attr("data-background"),
                            c = a.attr("data-src"),
                            u = a.attr("data-srcset"),
                            p = a.attr("data-sizes"),
                            f = a.parent("picture");
                        t.loadImage(a[0], c || o, u, p, !1, () => {
                            if (null != t && t && (!t || t.params) && !t.destroyed) {
                                if (o ? (a.css("background-image", `url("${o}")`), a.removeAttr("data-background")) : (u && (a.attr("srcset", u), a.removeAttr("data-srcset")), p && (a.attr("sizes", p), a.removeAttr("data-sizes")), f.length && f.children("source").each(e => {
                                        const t = d(e);
                                        t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"))
                                    }), c && (a.attr("src", c), a.removeAttr("data-src"))), a.addClass(i.loadedClass).removeClass(i.loadingClass), s.find("." + i.preloaderClass).remove(), t.params.loop && n) {
                                    const e = s.attr("data-swiper-slide-index");
                                    s.hasClass(t.params.slideDuplicateClass) ? l(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(), !1) : l(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(), !1)
                                }
                                r("lazyImageReady", s[0], a[0]), t.params.autoHeight && t.updateAutoHeight()
                            }
                        }), r("lazyImageLoad", s[0], a[0])
                    })
                }

                function c() {
                    const {
                        $wrapperEl: e,
                        params: n,
                        slides: i,
                        activeIndex: r
                    } = t, s = t.virtual && n.virtual.enabled, a = n.lazy;
                    let c = n.slidesPerView;

                    function u(t) {
                        if (s) {
                            if (e.children(`.${n.slideClass}[data-swiper-slide-index="${t}"]`).length) return !0
                        } else if (i[t]) return !0;
                        return !1
                    }

                    function p(e) {
                        return s ? d(e).attr("data-swiper-slide-index") : d(e).index()
                    }
                    if ("auto" === c && (c = 0), o || (o = !0), t.params.watchSlidesProgress) e.children("." + n.slideVisibleClass).each(e => {
                        l(s ? d(e).attr("data-swiper-slide-index") : d(e).index())
                    });
                    else if (c > 1)
                        for (let e = r; e < r + c; e += 1) u(e) && l(e);
                    else l(r);
                    if (a.loadPrevNext)
                        if (c > 1 || a.loadPrevNextAmount && a.loadPrevNextAmount > 1) {
                            const e = a.loadPrevNextAmount,
                                t = c,
                                n = Math.min(r + t + Math.max(e, t), i.length),
                                s = Math.max(r - Math.max(t, e), 0);
                            for (let e = r + c; e < n; e += 1) u(e) && l(e);
                            for (let e = s; e < r; e += 1) u(e) && l(e)
                        } else {
                            const t = e.children("." + n.slideNextClass);
                            t.length > 0 && l(p(t));
                            const i = e.children("." + n.slidePrevClass);
                            i.length > 0 && l(p(i))
                        }
                }

                function u() {
                    const e = s();
                    if (!t || t.destroyed) return;
                    const n = t.params.lazy.scrollingElement ? d(t.params.lazy.scrollingElement) : d(e),
                        i = n[0] === e,
                        r = i ? e.innerWidth : n[0].offsetWidth,
                        o = i ? e.innerHeight : n[0].offsetHeight,
                        l = t.$el.offset(),
                        {
                            rtlTranslate: p
                        } = t;
                    let f = !1;
                    p && (l.left -= t.$el[0].scrollLeft);
                    const h = [
                        [l.left, l.top],
                        [l.left + t.width, l.top],
                        [l.left, l.top + t.height],
                        [l.left + t.width, l.top + t.height]
                    ];
                    for (let e = 0; e < h.length; e += 1) {
                        const t = h[e];
                        if (t[0] >= 0 && t[0] <= r && t[1] >= 0 && t[1] <= o) {
                            if (0 === t[0] && 0 === t[1]) continue;
                            f = !0
                        }
                    }
                    const m = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    f ? (c(), n.off("scroll", u, m)) : a || (a = !0, n.on("scroll", u, m))
                }
                i("beforeInit", () => {
                    t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1)
                }), i("init", () => {
                    t.params.lazy.enabled && (t.params.lazy.checkInView ? u() : c())
                }), i("scroll", () => {
                    t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && c()
                }), i("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
                    t.params.lazy.enabled && (t.params.lazy.checkInView ? u() : c())
                }), i("transitionStart", () => {
                    t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || !t.params.lazy.loadOnTransitionStart && !o) && (t.params.lazy.checkInView ? u() : c())
                }), i("transitionEnd", () => {
                    t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? u() : c())
                }), i("slideChange", () => {
                    const {
                        lazy: e,
                        cssMode: n,
                        watchSlidesProgress: i,
                        touchReleaseOnEdges: r,
                        resistanceRatio: s
                    } = t.params;
                    e.enabled && (n || i && (r || 0 === s)) && c()
                }), Object.assign(t.lazy, {
                    load: c,
                    loadInSlide: l
                })
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: n,
                    on: i
                } = e;

                function r(e, t) {
                    const n = function() {
                        let e, t, n;
                        return (i, r) => {
                            for (t = -1, e = i.length; e - t > 1;) n = e + t >> 1, i[n] <= r ? t = n : e = n;
                            return e
                        }
                    }();
                    let i, r;
                    return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                        return e ? (r = n(this.x, e), i = r - 1, (e - this.x[i]) * (this.y[r] - this.y[i]) / (this.x[r] - this.x[i]) + this.y[i]) : 0
                    }, this
                }

                function s() {
                    t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
                }
                n({
                    controller: {
                        control: void 0,
                        inverse: !1,
                        by: "slide"
                    }
                }), t.controller = {
                    control: void 0
                }, i("beforeInit", () => {
                    t.controller.control = t.params.controller.control
                }), i("update", () => {
                    s()
                }), i("resize", () => {
                    s()
                }), i("observerUpdate", () => {
                    s()
                }), i("setTranslate", (e, n, i) => {
                    t.controller.control && t.controller.setTranslate(n, i)
                }), i("setTransition", (e, n, i) => {
                    t.controller.control && t.controller.setTransition(n, i)
                }), Object.assign(t.controller, {
                    setTranslate: function(e, n) {
                        const i = t.controller.control;
                        let s, a;
                        const o = t.constructor;

                        function l(e) {
                            const n = t.rtlTranslate ? -t.translate : t.translate;
                            "slide" === t.params.controller.by && (function(e) {
                                t.controller.spline || (t.controller.spline = t.params.loop ? new r(t.slidesGrid, e.slidesGrid) : new r(t.snapGrid, e.snapGrid))
                            }(e), a = -t.controller.spline.interpolate(-n)), a && "container" !== t.params.controller.by || (s = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), a = (n - t.minTranslate()) * s + e.minTranslate()), t.params.controller.inverse && (a = e.maxTranslate() - a), e.updateProgress(a), e.setTranslate(a, t), e.updateActiveIndex(), e.updateSlidesClasses()
                        }
                        if (Array.isArray(i))
                            for (let e = 0; e < i.length; e += 1) i[e] !== n && i[e] instanceof o && l(i[e]);
                        else i instanceof o && n !== i && l(i)
                    },
                    setTransition: function(e, n) {
                        const i = t.constructor,
                            r = t.controller.control;
                        let s;

                        function a(n) {
                            n.setTransition(e, t), 0 !== e && (n.transitionStart(), n.params.autoHeight && u(() => {
                                n.updateAutoHeight()
                            }), n.$wrapperEl.transitionEnd(() => {
                                r && (n.params.loop && "slide" === t.params.controller.by && n.loopFix(), n.transitionEnd())
                            }))
                        }
                        if (Array.isArray(r))
                            for (s = 0; s < r.length; s += 1) r[s] !== n && r[s] instanceof i && a(r[s]);
                        else r instanceof i && n !== r && a(r)
                    }
                })
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: n,
                    on: i
                } = e;
                n({
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}",
                        slideLabelMessage: "{{index}} / {{slidesLength}}",
                        containerMessage: null,
                        containerRoleDescriptionMessage: null,
                        itemRoleDescriptionMessage: null,
                        slideRole: "group"
                    }
                });
                let r = null;

                function s(e) {
                    const t = r;
                    0 !== t.length && (t.html(""), t.html(e))
                }

                function a(e) {
                    e.attr("tabIndex", "0")
                }

                function o(e) {
                    e.attr("tabIndex", "-1")
                }

                function l(e, t) {
                    e.attr("role", t)
                }

                function c(e, t) {
                    e.attr("aria-roledescription", t)
                }

                function u(e, t) {
                    e.attr("aria-label", t)
                }

                function p(e) {
                    e.attr("aria-disabled", !0)
                }

                function f(e) {
                    e.attr("aria-disabled", !1)
                }

                function h(e) {
                    if (13 !== e.keyCode && 32 !== e.keyCode) return;
                    const n = t.params.a11y,
                        i = d(e.target);
                    t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? s(n.lastSlideMessage) : s(n.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? s(n.firstSlideMessage) : s(n.prevSlideMessage)), t.pagination && i.is(R(t.params.pagination.bulletClass)) && i[0].click()
                }

                function m() {
                    return t.pagination && t.pagination.bullets && t.pagination.bullets.length
                }

                function g() {
                    return m() && t.params.pagination.clickable
                }
                const v = (e, t, n) => {
                        a(e), "BUTTON" !== e[0].tagName && (l(e, "button"), e.on("keydown", h)), u(e, n),
                            function(e, t) {
                                e.attr("aria-controls", t)
                            }(e, t)
                    },
                    y = e => {
                        const n = e.target.closest("." + t.params.slideClass);
                        if (!n || !t.slides.includes(n)) return;
                        const i = t.slides.indexOf(n) === t.activeIndex,
                            r = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(n);
                        i || r || t.slideTo(t.slides.indexOf(n), 0)
                    };
                i("beforeInit", () => {
                    r = d(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
                }), i("afterInit", () => {
                    t.params.a11y.enabled && function() {
                        const e = t.params.a11y;
                        t.$el.append(r);
                        const n = t.$el;
                        e.containerRoleDescriptionMessage && c(n, e.containerRoleDescriptionMessage), e.containerMessage && u(n, e.containerMessage);
                        const i = t.$wrapperEl,
                            s = i.attr("id") || "swiper-wrapper-" + (void 0 === (a = 16) && (a = 16), "x".repeat(a).replace(/x/g, () => Math.round(16 * Math.random()).toString(16)));
                        var a;
                        const o = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
                        var p;
                        p = s, i.attr("id", p),
                            function(e, t) {
                                e.attr("aria-live", t)
                            }(i, o), e.itemRoleDescriptionMessage && c(d(t.slides), e.itemRoleDescriptionMessage), l(d(t.slides), e.slideRole);
                        const f = t.params.loop ? t.slides.filter(e => !e.classList.contains(t.params.slideDuplicateClass)).length : t.slides.length;
                        let m, b;
                        t.slides.each((n, i) => {
                            const r = d(n),
                                s = t.params.loop ? parseInt(r.attr("data-swiper-slide-index"), 10) : i;
                            u(r, e.slideLabelMessage.replace(/\{\{index\}\}/, s + 1).replace(/\{\{slidesLength\}\}/, f))
                        }), t.navigation && t.navigation.$nextEl && (m = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (b = t.navigation.$prevEl), m && m.length && v(m, s, e.nextSlideMessage), b && b.length && v(b, s, e.prevSlideMessage), g() && t.pagination.$el.on("keydown", R(t.params.pagination.bulletClass), h), t.$el.on("focus", y, !0)
                    }()
                }), i("fromEdge toEdge afterInit lock unlock", () => {
                    t.params.a11y.enabled && function() {
                        if (t.params.loop || t.params.rewind || !t.navigation) return;
                        const {
                            $nextEl: e,
                            $prevEl: n
                        } = t.navigation;
                        n && n.length > 0 && (t.isBeginning ? (p(n), o(n)) : (f(n), a(n))), e && e.length > 0 && (t.isEnd ? (p(e), o(e)) : (f(e), a(e)))
                    }()
                }), i("paginationUpdate", () => {
                    t.params.a11y.enabled && function() {
                        const e = t.params.a11y;
                        m() && t.pagination.bullets.each(n => {
                            const i = d(n);
                            t.params.pagination.clickable && (a(i), t.params.pagination.renderBullet || (l(i, "button"), u(i, e.paginationBulletMessage.replace(/\{\{index\}\}/, i.index() + 1)))), i.is("." + t.params.pagination.bulletActiveClass) ? i.attr("aria-current", "true") : i.removeAttr("aria-current")
                        })
                    }()
                }), i("destroy", () => {
                    t.params.a11y.enabled && function() {
                        let e, n;
                        r && r.length > 0 && r.remove(), t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (n = t.navigation.$prevEl), e && e.off("keydown", h), n && n.off("keydown", h), g() && t.pagination.$el.off("keydown", R(t.params.pagination.bulletClass), h), t.$el.off("focus", y, !0)
                    }()
                })
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: n,
                    on: i
                } = e;
                n({
                    history: {
                        enabled: !1,
                        root: "",
                        replaceState: !1,
                        key: "slides"
                    }
                });
                let r = !1,
                    a = {};
                const o = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
                    l = e => {
                        const t = s();
                        let n;
                        n = e ? new URL(e) : t.location;
                        const i = n.pathname.slice(1).split("/").filter(e => "" !== e),
                            r = i.length;
                        return {
                            key: i[r - 2],
                            value: i[r - 1]
                        }
                    },
                    d = (e, n) => {
                        const i = s();
                        if (!r || !t.params.history.enabled) return;
                        let a;
                        a = t.params.url ? new URL(t.params.url) : i.location;
                        const l = t.slides.eq(n);
                        let d = o(l.attr("data-history"));
                        if (t.params.history.root.length > 0) {
                            let n = t.params.history.root;
                            "/" === n[n.length - 1] && (n = n.slice(0, n.length - 1)), d = `${n}/${e}/${d}`
                        } else a.pathname.includes(e) || (d = `${e}/${d}`);
                        const c = i.history.state;
                        c && c.value === d || (t.params.history.replaceState ? i.history.replaceState({
                            value: d
                        }, null, d) : i.history.pushState({
                            value: d
                        }, null, d))
                    },
                    c = (e, n, i) => {
                        if (n)
                            for (let r = 0, s = t.slides.length; r < s; r += 1) {
                                const s = t.slides.eq(r);
                                if (o(s.attr("data-history")) === n && !s.hasClass(t.params.slideDuplicateClass)) {
                                    const n = s.index();
                                    t.slideTo(n, e, i)
                                }
                            } else t.slideTo(0, e, i)
                    },
                    u = () => {
                        a = l(t.params.url), c(t.params.speed, t.paths.value, !1)
                    };
                i("init", () => {
                    t.params.history.enabled && (() => {
                        const e = s();
                        if (t.params.history) {
                            if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void(t.params.hashNavigation.enabled = !0);
                            r = !0, a = l(t.params.url), (a.key || a.value) && (c(0, a.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", u))
                        }
                    })()
                }), i("destroy", () => {
                    t.params.history.enabled && (() => {
                        const e = s();
                        t.params.history.replaceState || e.removeEventListener("popstate", u)
                    })()
                }), i("transitionEnd _freeModeNoMomentumRelease", () => {
                    r && d(t.params.history.key, t.activeIndex)
                }), i("slideChange", () => {
                    r && t.params.cssMode && d(t.params.history.key, t.activeIndex)
                })
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: n,
                    emit: r,
                    on: a
                } = e, o = !1;
                const l = i(),
                    c = s();
                n({
                    hashNavigation: {
                        enabled: !1,
                        replaceState: !1,
                        watchState: !1
                    }
                });
                const u = () => {
                        r("hashChange");
                        const e = l.location.hash.replace("#", "");
                        if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
                            const n = t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();
                            if (void 0 === n) return;
                            t.slideTo(n)
                        }
                    },
                    p = () => {
                        if (o && t.params.hashNavigation.enabled)
                            if (t.params.hashNavigation.replaceState && c.history && c.history.replaceState) c.history.replaceState(null, null, "#" + t.slides.eq(t.activeIndex).attr("data-hash") || ""), r("hashSet");
                            else {
                                const e = t.slides.eq(t.activeIndex),
                                    n = e.attr("data-hash") || e.attr("data-history");
                                l.location.hash = n || "", r("hashSet")
                            }
                    };
                a("init", () => {
                    t.params.hashNavigation.enabled && (() => {
                        if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
                        o = !0;
                        const e = l.location.hash.replace("#", "");
                        if (e) {
                            const n = 0;
                            for (let i = 0, r = t.slides.length; i < r; i += 1) {
                                const r = t.slides.eq(i);
                                if ((r.attr("data-hash") || r.attr("data-history")) === e && !r.hasClass(t.params.slideDuplicateClass)) {
                                    const e = r.index();
                                    t.slideTo(e, n, t.params.runCallbacksOnInit, !0)
                                }
                            }
                        }
                        t.params.hashNavigation.watchState && d(c).on("hashchange", u)
                    })()
                }), a("destroy", () => {
                    t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d(c).off("hashchange", u)
                }), a("transitionEnd _freeModeNoMomentumRelease", () => {
                    o && p()
                }), a("slideChange", () => {
                    o && t.params.cssMode && p()
                })
            }, function(e) {
                let t, {
                    swiper: n,
                    extendParams: r,
                    on: s,
                    emit: a
                } = e;

                function o() {
                    const e = n.slides.eq(n.activeIndex);
                    let i = n.params.autoplay.delay;
                    e.attr("data-swiper-autoplay") && (i = e.attr("data-swiper-autoplay") || n.params.autoplay.delay), clearTimeout(t), t = u(() => {
                        let e;
                        n.params.autoplay.reverseDirection ? n.params.loop ? (n.loopFix(), e = n.slidePrev(n.params.speed, !0, !0), a("autoplay")) : n.isBeginning ? n.params.autoplay.stopOnLastSlide ? d() : (e = n.slideTo(n.slides.length - 1, n.params.speed, !0, !0), a("autoplay")) : (e = n.slidePrev(n.params.speed, !0, !0), a("autoplay")) : n.params.loop ? (n.loopFix(), e = n.slideNext(n.params.speed, !0, !0), a("autoplay")) : n.isEnd ? n.params.autoplay.stopOnLastSlide ? d() : (e = n.slideTo(0, n.params.speed, !0, !0), a("autoplay")) : (e = n.slideNext(n.params.speed, !0, !0), a("autoplay")), (n.params.cssMode && n.autoplay.running || !1 === e) && o()
                    }, i)
                }

                function l() {
                    return void 0 === t && !n.autoplay.running && (n.autoplay.running = !0, a("autoplayStart"), o(), !0)
                }

                function d() {
                    return !!n.autoplay.running && void 0 !== t && (t && (clearTimeout(t), t = void 0), n.autoplay.running = !1, a("autoplayStop"), !0)
                }

                function c(e) {
                    n.autoplay.running && (n.autoplay.paused || (t && clearTimeout(t), n.autoplay.paused = !0, 0 !== e && n.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(e => {
                        n.$wrapperEl[0].addEventListener(e, f)
                    }) : (n.autoplay.paused = !1, o())))
                }

                function p() {
                    const e = i();
                    "hidden" === e.visibilityState && n.autoplay.running && c(), "visible" === e.visibilityState && n.autoplay.paused && (o(), n.autoplay.paused = !1)
                }

                function f(e) {
                    n && !n.destroyed && n.$wrapperEl && e.target === n.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(e => {
                        n.$wrapperEl[0].removeEventListener(e, f)
                    }), n.autoplay.paused = !1, n.autoplay.running ? o() : d())
                }

                function h() {
                    n.params.autoplay.disableOnInteraction ? d() : (a("autoplayPause"), c()), ["transitionend", "webkitTransitionEnd"].forEach(e => {
                        n.$wrapperEl[0].removeEventListener(e, f)
                    })
                }

                function m() {
                    n.params.autoplay.disableOnInteraction || (n.autoplay.paused = !1, a("autoplayResume"), o())
                }
                n.autoplay = {
                    running: !1,
                    paused: !1
                }, r({
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                        pauseOnMouseEnter: !1
                    }
                }), s("init", () => {
                    n.params.autoplay.enabled && (l(), i().addEventListener("visibilitychange", p), n.params.autoplay.pauseOnMouseEnter && (n.$el.on("mouseenter", h), n.$el.on("mouseleave", m)))
                }), s("beforeTransitionStart", (e, t, i) => {
                    n.autoplay.running && (i || !n.params.autoplay.disableOnInteraction ? n.autoplay.pause(t) : d())
                }), s("sliderFirstMove", () => {
                    n.autoplay.running && (n.params.autoplay.disableOnInteraction ? d() : c())
                }), s("touchEnd", () => {
                    n.params.cssMode && n.autoplay.paused && !n.params.autoplay.disableOnInteraction && o()
                }), s("destroy", () => {
                    n.$el.off("mouseenter", h), n.$el.off("mouseleave", m), n.autoplay.running && d(), i().removeEventListener("visibilitychange", p)
                }), Object.assign(n.autoplay, {
                    pause: c,
                    run: o,
                    start: l,
                    stop: d
                })
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: n,
                    on: i
                } = e;
                n({
                    thumbs: {
                        swiper: null,
                        multipleActiveThumbs: !0,
                        autoScrollOffset: 0,
                        slideThumbActiveClass: "swiper-slide-thumb-active",
                        thumbsContainerClass: "swiper-thumbs"
                    }
                });
                let r = !1,
                    s = !1;

                function a() {
                    const e = t.thumbs.swiper;
                    if (!e) return;
                    const n = e.clickedIndex,
                        i = e.clickedSlide;
                    if (i && d(i).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
                    if (null == n) return;
                    let r;
                    if (r = e.params.loop ? parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10) : n, t.params.loop) {
                        let e = t.activeIndex;
                        t.slides.eq(e).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, e = t.activeIndex);
                        const n = t.slides.eq(e).prevAll(`[data-swiper-slide-index="${r}"]`).eq(0).index(),
                            i = t.slides.eq(e).nextAll(`[data-swiper-slide-index="${r}"]`).eq(0).index();
                        r = void 0 === n ? i : void 0 === i ? n : i - e < e - n ? i : n
                    }
                    t.slideTo(r)
                }

                function o() {
                    const {
                        thumbs: e
                    } = t.params;
                    if (r) return !1;
                    r = !0;
                    const n = t.constructor;
                    if (e.swiper instanceof n) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }), Object.assign(t.thumbs.swiper.params, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    });
                    else if (h(e.swiper)) {
                        const i = Object.assign({}, e.swiper);
                        Object.assign(i, {
                            watchSlidesProgress: !0,
                            slideToClickedSlide: !1
                        }), t.thumbs.swiper = new n(i), s = !0
                    }
                    return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", a), !0
                }

                function l(e) {
                    const n = t.thumbs.swiper;
                    if (!n) return;
                    const i = "auto" === n.params.slidesPerView ? n.slidesPerViewDynamic() : n.params.slidesPerView,
                        r = t.params.thumbs.autoScrollOffset,
                        s = r && !n.params.loop;
                    if (t.realIndex !== n.realIndex || s) {
                        let a, o, l = n.activeIndex;
                        if (n.params.loop) {
                            n.slides.eq(l).hasClass(n.params.slideDuplicateClass) && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, l = n.activeIndex);
                            const e = n.slides.eq(l).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),
                                i = n.slides.eq(l).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                            a = void 0 === e ? i : void 0 === i ? e : i - l == l - e ? n.params.slidesPerGroup > 1 ? i : l : i - l < l - e ? i : e, o = t.activeIndex > t.previousIndex ? "next" : "prev"
                        } else a = t.realIndex, o = a > t.previousIndex ? "next" : "prev";
                        s && (a += "next" === o ? r : -1 * r), n.visibleSlidesIndexes && n.visibleSlidesIndexes.indexOf(a) < 0 && (n.params.centeredSlides ? a = a > l ? a - Math.floor(i / 2) + 1 : a + Math.floor(i / 2) - 1 : a > l && n.params.slidesPerGroup, n.slideTo(a, e ? 0 : void 0))
                    }
                    let a = 1;
                    const o = t.params.thumbs.slideThumbActiveClass;
                    if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (a = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (a = 1), a = Math.floor(a), n.slides.removeClass(o), n.params.loop || n.params.virtual && n.params.virtual.enabled)
                        for (let e = 0; e < a; e += 1) n.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex+e}"]`).addClass(o);
                    else
                        for (let e = 0; e < a; e += 1) n.slides.eq(t.realIndex + e).addClass(o)
                }
                t.thumbs = {
                    swiper: null
                }, i("beforeInit", () => {
                    const {
                        thumbs: e
                    } = t.params;
                    e && e.swiper && (o(), l(!0))
                }), i("slideChange update resize observerUpdate", () => {
                    t.thumbs.swiper && l()
                }), i("setTransition", (e, n) => {
                    const i = t.thumbs.swiper;
                    i && i.setTransition(n)
                }), i("beforeDestroy", () => {
                    const e = t.thumbs.swiper;
                    e && s && e && e.destroy()
                }), Object.assign(t.thumbs, {
                    init: o,
                    update: l
                })
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: n,
                    emit: i,
                    once: r
                } = e;
                n({
                    freeMode: {
                        enabled: !1,
                        momentum: !0,
                        momentumRatio: 1,
                        momentumBounce: !0,
                        momentumBounceRatio: 1,
                        momentumVelocityRatio: 1,
                        sticky: !1,
                        minimumVelocity: .02
                    }
                }), Object.assign(t, {
                    freeMode: {
                        onTouchStart: function() {
                            const e = t.getTranslate();
                            t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
                                currentPos: t.rtl ? t.translate : -t.translate
                            })
                        },
                        onTouchMove: function() {
                            const {
                                touchEventsData: e,
                                touches: n
                            } = t;
                            0 === e.velocities.length && e.velocities.push({
                                position: n[t.isHorizontal() ? "startX" : "startY"],
                                time: e.touchStartTime
                            }), e.velocities.push({
                                position: n[t.isHorizontal() ? "currentX" : "currentY"],
                                time: p()
                            })
                        },
                        onTouchEnd: function(e) {
                            let {
                                currentPos: n
                            } = e;
                            const {
                                params: s,
                                $wrapperEl: a,
                                rtlTranslate: o,
                                snapGrid: l,
                                touchEventsData: d
                            } = t, c = p() - d.touchStartTime;
                            if (n < -t.minTranslate()) t.slideTo(t.activeIndex);
                            else if (n > -t.maxTranslate()) t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1);
                            else {
                                if (s.freeMode.momentum) {
                                    if (d.velocities.length > 1) {
                                        const e = d.velocities.pop(),
                                            n = d.velocities.pop(),
                                            i = e.position - n.position,
                                            r = e.time - n.time;
                                        t.velocity = i / r, t.velocity /= 2, Math.abs(t.velocity) < s.freeMode.minimumVelocity && (t.velocity = 0), (r > 150 || p() - e.time > 300) && (t.velocity = 0)
                                    } else t.velocity = 0;
                                    t.velocity *= s.freeMode.momentumVelocityRatio, d.velocities.length = 0;
                                    let e = 1e3 * s.freeMode.momentumRatio;
                                    const n = t.velocity * e;
                                    let c = t.translate + n;
                                    o && (c = -c);
                                    let u, f = !1;
                                    const h = 20 * Math.abs(t.velocity) * s.freeMode.momentumBounceRatio;
                                    let m;
                                    if (c < t.maxTranslate()) s.freeMode.momentumBounce ? (c + t.maxTranslate() < -h && (c = t.maxTranslate() - h), u = t.maxTranslate(), f = !0, d.allowMomentumBounce = !0) : c = t.maxTranslate(), s.loop && s.centeredSlides && (m = !0);
                                    else if (c > t.minTranslate()) s.freeMode.momentumBounce ? (c - t.minTranslate() > h && (c = t.minTranslate() + h), u = t.minTranslate(), f = !0, d.allowMomentumBounce = !0) : c = t.minTranslate(), s.loop && s.centeredSlides && (m = !0);
                                    else if (s.freeMode.sticky) {
                                        let e;
                                        for (let t = 0; t < l.length; t += 1)
                                            if (l[t] > -c) {
                                                e = t;
                                                break
                                            } c = Math.abs(l[e] - c) < Math.abs(l[e - 1] - c) || "next" === t.swipeDirection ? l[e] : l[e - 1], c = -c
                                    }
                                    if (m && r("transitionEnd", () => {
                                            t.loopFix()
                                        }), 0 !== t.velocity) {
                                        if (e = o ? Math.abs((-c - t.translate) / t.velocity) : Math.abs((c - t.translate) / t.velocity), s.freeMode.sticky) {
                                            const n = Math.abs((o ? -c : c) - t.translate),
                                                i = t.slidesSizesGrid[t.activeIndex];
                                            e = n < i ? s.speed : n < 2 * i ? 1.5 * s.speed : 2.5 * s.speed
                                        }
                                    } else if (s.freeMode.sticky) return void t.slideToClosest();
                                    s.freeMode.momentumBounce && f ? (t.updateProgress(u), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating = !0, a.transitionEnd(() => {
                                        t && !t.destroyed && d.allowMomentumBounce && (i("momentumBounce"), t.setTransition(s.speed), setTimeout(() => {
                                            t.setTranslate(u), a.transitionEnd(() => {
                                                t && !t.destroyed && t.transitionEnd()
                                            })
                                        }, 0))
                                    })) : t.velocity ? (i("_freeModeNoMomentumRelease"), t.updateProgress(c), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, a.transitionEnd(() => {
                                        t && !t.destroyed && t.transitionEnd()
                                    }))) : t.updateProgress(c), t.updateActiveIndex(), t.updateSlidesClasses()
                                } else {
                                    if (s.freeMode.sticky) return void t.slideToClosest();
                                    s.freeMode && i("_freeModeNoMomentumRelease")
                                }(!s.freeMode.momentum || c >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                            }
                        }
                    }
                })
            }, function(e) {
                let t, n, i, {
                    swiper: r,
                    extendParams: s
                } = e;
                s({
                    grid: {
                        rows: 1,
                        fill: "column"
                    }
                }), r.grid = {
                    initSlides: e => {
                        const {
                            slidesPerView: s
                        } = r.params, {
                            rows: a,
                            fill: o
                        } = r.params.grid;
                        n = t / a, i = Math.floor(e / a), t = Math.floor(e / a) === e / a ? e : Math.ceil(e / a) * a, "auto" !== s && "row" === o && (t = Math.max(t, s * a))
                    },
                    updateSlide: (e, s, a, o) => {
                        const {
                            slidesPerGroup: l,
                            spaceBetween: d
                        } = r.params, {
                            rows: c,
                            fill: u
                        } = r.params.grid;
                        let p, f, h;
                        if ("row" === u && l > 1) {
                            const n = Math.floor(e / (l * c)),
                                i = e - c * l * n,
                                r = 0 === n ? l : Math.min(Math.ceil((a - n * c * l) / c), l);
                            h = Math.floor(i / r), f = i - h * r + n * l, p = f + h * t / c, s.css({
                                "-webkit-order": p,
                                order: p
                            })
                        } else "column" === u ? (f = Math.floor(e / c), h = e - f * c, (f > i || f === i && h === c - 1) && (h += 1, h >= c && (h = 0, f += 1))) : (h = Math.floor(e / n), f = e - h * n);
                        s.css(o("margin-top"), 0 !== h ? d && d + "px" : "")
                    },
                    updateWrapperSize: (e, n, i) => {
                        const {
                            spaceBetween: s,
                            centeredSlides: a,
                            roundLengths: o
                        } = r.params, {
                            rows: l
                        } = r.params.grid;
                        if (r.virtualSize = (e + s) * t, r.virtualSize = Math.ceil(r.virtualSize / l) - s, r.$wrapperEl.css({
                                [i("width")]: r.virtualSize + s + "px"
                            }), a) {
                            n.splice(0, n.length);
                            const e = [];
                            for (let t = 0; t < n.length; t += 1) {
                                let i = n[t];
                                o && (i = Math.floor(i)), n[t] < r.virtualSize + n[0] && e.push(i)
                            }
                            n.push(...e)
                        }
                    }
                }
            }, function(e) {
                let {
                    swiper: t
                } = e;
                Object.assign(t, {
                    appendSlide: F.bind(t),
                    prependSlide: W.bind(t),
                    addSlide: X.bind(t),
                    removeSlide: Y.bind(t),
                    removeAllSlides: G.bind(t)
                })
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: n,
                    on: i
                } = e;
                n({
                    fadeEffect: {
                        crossFade: !1,
                        transformEl: null
                    }
                }), V({
                    effect: "fade",
                    swiper: t,
                    on: i,
                    setTranslate: () => {
                        const {
                            slides: e
                        } = t, n = t.params.fadeEffect;
                        for (let i = 0; i < e.length; i += 1) {
                            const e = t.slides.eq(i);
                            let r = -e[0].swiperSlideOffset;
                            t.params.virtualTranslate || (r -= t.translate);
                            let s = 0;
                            t.isHorizontal() || (s = r, r = 0);
                            const a = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                            U(n, e).css({
                                opacity: a
                            }).transform(`translate3d(${r}px, ${s}px, 0px)`)
                        }
                    },
                    setTransition: e => {
                        const {
                            transformEl: n
                        } = t.params.fadeEffect;
                        (n ? t.slides.find(n) : t.slides).transition(e), Q({
                            swiper: t,
                            duration: e,
                            transformEl: n,
                            allSlides: !0
                        })
                    },
                    overwriteParams: () => ({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !t.params.cssMode
                    })
                })
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: n,
                    on: i
                } = e;
                n({
                    cubeEffect: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: .94
                    }
                }), V({
                    effect: "cube",
                    swiper: t,
                    on: i,
                    setTranslate: () => {
                        const {
                            $el: e,
                            $wrapperEl: n,
                            slides: i,
                            width: r,
                            height: s,
                            rtlTranslate: a,
                            size: o,
                            browser: l
                        } = t, c = t.params.cubeEffect, u = t.isHorizontal(), p = t.virtual && t.params.virtual.enabled;
                        let f, h = 0;
                        c.shadow && (u ? (f = n.find(".swiper-cube-shadow"), 0 === f.length && (f = d('<div class="swiper-cube-shadow"></div>'), n.append(f)), f.css({
                            height: r + "px"
                        })) : (f = e.find(".swiper-cube-shadow"), 0 === f.length && (f = d('<div class="swiper-cube-shadow"></div>'), e.append(f))));
                        for (let e = 0; e < i.length; e += 1) {
                            const t = i.eq(e);
                            let n = e;
                            p && (n = parseInt(t.attr("data-swiper-slide-index"), 10));
                            let r = 90 * n,
                                s = Math.floor(r / 360);
                            a && (r = -r, s = Math.floor(-r / 360));
                            const l = Math.max(Math.min(t[0].progress, 1), -1);
                            let f = 0,
                                m = 0,
                                g = 0;
                            n % 4 == 0 ? (f = 4 * -s * o, g = 0) : (n - 1) % 4 == 0 ? (f = 0, g = 4 * -s * o) : (n - 2) % 4 == 0 ? (f = o + 4 * s * o, g = o) : (n - 3) % 4 == 0 && (f = -o, g = 3 * o + 4 * o * s), a && (f = -f), u || (m = f, f = 0);
                            const v = `rotateX(${u?0:-r}deg) rotateY(${u?r:0}deg) translate3d(${f}px, ${m}px, ${g}px)`;
                            if (l <= 1 && l > -1 && (h = 90 * n + 90 * l, a && (h = 90 * -n - 90 * l)), t.transform(v), c.slideShadows) {
                                let e = u ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                                    n = u ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                                0 === e.length && (e = d(`<div class="swiper-slide-shadow-${u?"left":"top"}"></div>`), t.append(e)), 0 === n.length && (n = d(`<div class="swiper-slide-shadow-${u?"right":"bottom"}"></div>`), t.append(n)), e.length && (e[0].style.opacity = Math.max(-l, 0)), n.length && (n[0].style.opacity = Math.max(l, 0))
                            }
                        }
                        if (n.css({
                                "-webkit-transform-origin": `50% 50% -${o/2}px`,
                                "transform-origin": `50% 50% -${o/2}px`
                            }), c.shadow)
                            if (u) f.transform(`translate3d(0px, ${r/2+c.shadowOffset}px, ${-r/2}px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale})`);
                            else {
                                const e = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                                    t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                                    n = c.shadowScale,
                                    i = c.shadowScale / t,
                                    r = c.shadowOffset;
                                f.transform(`scale3d(${n}, 1, ${i}) translate3d(0px, ${s/2+r}px, ${-s/2/i}px) rotateX(-90deg)`)
                            } const m = l.isSafari || l.isWebView ? -o / 2 : 0;
                        n.transform(`translate3d(0px,0,${m}px) rotateX(${t.isHorizontal()?0:h}deg) rotateY(${t.isHorizontal()?-h:0}deg)`)
                    },
                    setTransition: e => {
                        const {
                            $el: n,
                            slides: i
                        } = t;
                        i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && n.find(".swiper-cube-shadow").transition(e)
                    },
                    perspective: () => !0,
                    overwriteParams: () => ({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    })
                })
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: n,
                    on: i
                } = e;
                n({
                    flipEffect: {
                        slideShadows: !0,
                        limitRotation: !0,
                        transformEl: null
                    }
                }), V({
                    effect: "flip",
                    swiper: t,
                    on: i,
                    setTranslate: () => {
                        const {
                            slides: e,
                            rtlTranslate: n
                        } = t, i = t.params.flipEffect;
                        for (let r = 0; r < e.length; r += 1) {
                            const s = e.eq(r);
                            let a = s[0].progress;
                            t.params.flipEffect.limitRotation && (a = Math.max(Math.min(s[0].progress, 1), -1));
                            const o = s[0].swiperSlideOffset;
                            let l = -180 * a,
                                d = 0,
                                c = t.params.cssMode ? -o - t.translate : -o,
                                u = 0;
                            if (t.isHorizontal() ? n && (l = -l) : (u = c, c = 0, d = -l, l = 0), s[0].style.zIndex = -Math.abs(Math.round(a)) + e.length, i.slideShadows) {
                                let e = t.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                                    n = t.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                                0 === e.length && (e = K(i, s, t.isHorizontal() ? "left" : "top")), 0 === n.length && (n = K(i, s, t.isHorizontal() ? "right" : "bottom")), e.length && (e[0].style.opacity = Math.max(-a, 0)), n.length && (n[0].style.opacity = Math.max(a, 0))
                            }
                            const p = `translate3d(${c}px, ${u}px, 0px) rotateX(${d}deg) rotateY(${l}deg)`;
                            U(i, s).transform(p)
                        }
                    },
                    setTransition: e => {
                        const {
                            transformEl: n
                        } = t.params.flipEffect;
                        (n ? t.slides.find(n) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), Q({
                            swiper: t,
                            duration: e,
                            transformEl: n
                        })
                    },
                    perspective: () => !0,
                    overwriteParams: () => ({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !t.params.cssMode
                    })
                })
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: n,
                    on: i
                } = e;
                n({
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        scale: 1,
                        modifier: 1,
                        slideShadows: !0,
                        transformEl: null
                    }
                }), V({
                    effect: "coverflow",
                    swiper: t,
                    on: i,
                    setTranslate: () => {
                        const {
                            width: e,
                            height: n,
                            slides: i,
                            slidesSizesGrid: r
                        } = t, s = t.params.coverflowEffect, a = t.isHorizontal(), o = t.translate, l = a ? e / 2 - o : n / 2 - o, d = a ? s.rotate : -s.rotate, c = s.depth;
                        for (let e = 0, t = i.length; e < t; e += 1) {
                            const t = i.eq(e),
                                n = r[e],
                                o = (l - t[0].swiperSlideOffset - n / 2) / n * s.modifier;
                            let u = a ? d * o : 0,
                                p = a ? 0 : d * o,
                                f = -c * Math.abs(o),
                                h = s.stretch;
                            "string" == typeof h && -1 !== h.indexOf("%") && (h = parseFloat(s.stretch) / 100 * n);
                            let m = a ? 0 : h * o,
                                g = a ? h * o : 0,
                                v = 1 - (1 - s.scale) * Math.abs(o);
                            Math.abs(g) < .001 && (g = 0), Math.abs(m) < .001 && (m = 0), Math.abs(f) < .001 && (f = 0), Math.abs(u) < .001 && (u = 0), Math.abs(p) < .001 && (p = 0), Math.abs(v) < .001 && (v = 0);
                            const y = `translate3d(${g}px,${m}px,${f}px)  rotateX(${p}deg) rotateY(${u}deg) scale(${v})`;
                            if (U(s, t).transform(y), t[0].style.zIndex = 1 - Math.abs(Math.round(o)), s.slideShadows) {
                                let e = a ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                                    n = a ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                                0 === e.length && (e = K(s, t, a ? "left" : "top")), 0 === n.length && (n = K(s, t, a ? "right" : "bottom")), e.length && (e[0].style.opacity = o > 0 ? o : 0), n.length && (n[0].style.opacity = -o > 0 ? -o : 0)
                            }
                        }
                    },
                    setTransition: e => {
                        const {
                            transformEl: n
                        } = t.params.coverflowEffect;
                        (n ? t.slides.find(n) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                    },
                    perspective: () => !0,
                    overwriteParams: () => ({
                        watchSlidesProgress: !0
                    })
                })
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: n,
                    on: i
                } = e;
                n({
                    creativeEffect: {
                        transformEl: null,
                        limitProgress: 1,
                        shadowPerProgress: !1,
                        progressMultiplier: 1,
                        perspective: !0,
                        prev: {
                            translate: [0, 0, 0],
                            rotate: [0, 0, 0],
                            opacity: 1,
                            scale: 1
                        },
                        next: {
                            translate: [0, 0, 0],
                            rotate: [0, 0, 0],
                            opacity: 1,
                            scale: 1
                        }
                    }
                });
                const r = e => "string" == typeof e ? e : e + "px";
                V({
                    effect: "creative",
                    swiper: t,
                    on: i,
                    setTranslate: () => {
                        const {
                            slides: e,
                            $wrapperEl: n,
                            slidesSizesGrid: i
                        } = t, s = t.params.creativeEffect, {
                            progressMultiplier: a
                        } = s, o = t.params.centeredSlides;
                        if (o) {
                            const e = i[0] / 2 - t.params.slidesOffsetBefore || 0;
                            n.transform(`translateX(calc(50% - ${e}px))`)
                        }
                        for (let n = 0; n < e.length; n += 1) {
                            const i = e.eq(n),
                                l = i[0].progress,
                                d = Math.min(Math.max(i[0].progress, -s.limitProgress), s.limitProgress);
                            let c = d;
                            o || (c = Math.min(Math.max(i[0].originalProgress, -s.limitProgress), s.limitProgress));
                            const u = i[0].swiperSlideOffset,
                                p = [t.params.cssMode ? -u - t.translate : -u, 0, 0],
                                f = [0, 0, 0];
                            let h = !1;
                            t.isHorizontal() || (p[1] = p[0], p[0] = 0);
                            let m = {
                                translate: [0, 0, 0],
                                rotate: [0, 0, 0],
                                scale: 1,
                                opacity: 1
                            };
                            d < 0 ? (m = s.next, h = !0) : d > 0 && (m = s.prev, h = !0), p.forEach((e, t) => {
                                p[t] = `calc(${e}px + (${r(m.translate[t])} * ${Math.abs(d*a)}))`
                            }), f.forEach((e, t) => {
                                f[t] = m.rotate[t] * Math.abs(d * a)
                            }), i[0].style.zIndex = -Math.abs(Math.round(l)) + e.length;
                            const g = p.join(", "),
                                v = `rotateX(${f[0]}deg) rotateY(${f[1]}deg) rotateZ(${f[2]}deg)`,
                                y = c < 0 ? `scale(${1+(1-m.scale)*c*a})` : `scale(${1-(1-m.scale)*c*a})`,
                                b = c < 0 ? 1 + (1 - m.opacity) * c * a : 1 - (1 - m.opacity) * c * a,
                                w = `translate3d(${g}) ${v} ${y}`;
                            if (h && m.shadow || !h) {
                                let e = i.children(".swiper-slide-shadow");
                                if (0 === e.length && m.shadow && (e = K(s, i)), e.length) {
                                    const t = s.shadowPerProgress ? d * (1 / s.limitProgress) : d;
                                    e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                                }
                            }
                            const x = U(s, i);
                            x.transform(w).css({
                                opacity: b
                            }), m.origin && x.css("transform-origin", m.origin)
                        }
                    },
                    setTransition: e => {
                        const {
                            transformEl: n
                        } = t.params.creativeEffect;
                        (n ? t.slides.find(n) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), Q({
                            swiper: t,
                            duration: e,
                            transformEl: n,
                            allSlides: !0
                        })
                    },
                    perspective: () => t.params.creativeEffect.perspective,
                    overwriteParams: () => ({
                        watchSlidesProgress: !0,
                        virtualTranslate: !t.params.cssMode
                    })
                })
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: n,
                    on: i
                } = e;
                n({
                    cardsEffect: {
                        slideShadows: !0,
                        transformEl: null
                    }
                }), V({
                    effect: "cards",
                    swiper: t,
                    on: i,
                    setTranslate: () => {
                        const {
                            slides: e,
                            activeIndex: n
                        } = t, i = t.params.cardsEffect, {
                            startTranslate: r,
                            isTouched: s
                        } = t.touchEventsData, a = t.translate;
                        for (let o = 0; o < e.length; o += 1) {
                            const l = e.eq(o),
                                d = l[0].progress,
                                c = Math.min(Math.max(d, -4), 4);
                            let u = l[0].swiperSlideOffset;
                            t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (u -= e[0].swiperSlideOffset);
                            let p = t.params.cssMode ? -u - t.translate : -u,
                                f = 0;
                            const h = -100 * Math.abs(c);
                            let m = 1,
                                g = -2 * c,
                                v = 8 - .75 * Math.abs(c);
                            const y = (o === n || o === n - 1) && c > 0 && c < 1 && (s || t.params.cssMode) && a < r,
                                b = (o === n || o === n + 1) && c < 0 && c > -1 && (s || t.params.cssMode) && a > r;
                            if (y || b) {
                                const e = (1 - Math.abs((Math.abs(c) - .5) / .5)) ** .5;
                                g += -28 * c * e, m += -.5 * e, v += 96 * e, f = -25 * e * Math.abs(c) + "%"
                            }
                            if (p = c < 0 ? `calc(${p}px + (${v*Math.abs(c)}%))` : c > 0 ? `calc(${p}px + (-${v*Math.abs(c)}%))` : p + "px", !t.isHorizontal()) {
                                const e = f;
                                f = p, p = e
                            }
                            const w = `\n        translate3d(${p}, ${f}, ${h}px)\n        rotateZ(${g}deg)\n        scale(${c<0?""+(1+(1-m)*c):""+(1-(1-m)*c)})\n      `;
                            if (i.slideShadows) {
                                let e = l.find(".swiper-slide-shadow");
                                0 === e.length && (e = K(i, l)), e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(c) - .5) / .5, 0), 1))
                            }
                            l[0].style.zIndex = -Math.abs(Math.round(d)) + e.length, U(i, l).transform(w)
                        }
                    },
                    setTransition: e => {
                        const {
                            transformEl: n
                        } = t.params.cardsEffect;
                        (n ? t.slides.find(n) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), Q({
                            swiper: t,
                            duration: e,
                            transformEl: n
                        })
                    },
                    perspective: () => !0,
                    overwriteParams: () => ({
                        watchSlidesProgress: !0,
                        virtualTranslate: !t.params.cssMode
                    })
                })
            }];
            return q.use(J), q
        }()
    },
    f0bd: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
            r = function() {
                for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
                    if (i && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
                return 0
            }();
        var s = i && window.Promise ? function(e) {
            var t = !1;
            return function() {
                t || (t = !0, window.Promise.resolve().then((function() {
                    t = !1, e()
                })))
            }
        } : function(e) {
            var t = !1;
            return function() {
                t || (t = !0, setTimeout((function() {
                    t = !1, e()
                }), r))
            }
        };

        function a(e) {
            return e && "[object Function]" === {}.toString.call(e)
        }

        function o(e, t) {
            if (1 !== e.nodeType) return [];
            var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
            return t ? n[t] : n
        }

        function l(e) {
            return "HTML" === e.nodeName ? e : e.parentNode || e.host
        }

        function d(e) {
            if (!e) return document.body;
            switch (e.nodeName) {
                case "HTML":
                case "BODY":
                    return e.ownerDocument.body;
                case "#document":
                    return e.body
            }
            var t = o(e),
                n = t.overflow,
                i = t.overflowX,
                r = t.overflowY;
            return /(auto|scroll|overlay)/.test(n + r + i) ? e : d(l(e))
        }

        function c(e) {
            return e && e.referenceNode ? e.referenceNode : e
        }
        var u = i && !(!window.MSInputMethodContext || !document.documentMode),
            p = i && /MSIE 10/.test(navigator.userAgent);

        function f(e) {
            return 11 === e ? u : 10 === e ? p : u || p
        }

        function h(e) {
            if (!e) return document.documentElement;
            for (var t = f(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
            var i = n && n.nodeName;
            return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === o(n, "position") ? h(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
        }

        function m(e) {
            return null !== e.parentNode ? m(e.parentNode) : e
        }

        function g(e, t) {
            if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
            var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                i = n ? e : t,
                r = n ? t : e,
                s = document.createRange();
            s.setStart(i, 0), s.setEnd(r, 0);
            var a, o, l = s.commonAncestorContainer;
            if (e !== l && t !== l || i.contains(r)) return "BODY" === (o = (a = l).nodeName) || "HTML" !== o && h(a.firstElementChild) !== a ? h(l) : l;
            var d = m(e);
            return d.host ? g(d.host, t) : g(e, m(t).host)
        }

        function v(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                n = "top" === t ? "scrollTop" : "scrollLeft",
                i = e.nodeName;
            if ("BODY" === i || "HTML" === i) {
                var r = e.ownerDocument.documentElement,
                    s = e.ownerDocument.scrollingElement || r;
                return s[n]
            }
            return e[n]
        }

        function y(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = v(t, "top"),
                r = v(t, "left"),
                s = n ? -1 : 1;
            return e.top += i * s, e.bottom += i * s, e.left += r * s, e.right += r * s, e
        }

        function b(e, t) {
            var n = "x" === t ? "Left" : "Top",
                i = "Left" === n ? "Right" : "Bottom";
            return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + i + "Width"])
        }

        function w(e, t, n, i) {
            return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], f(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
        }

        function x(e) {
            var t = e.body,
                n = e.documentElement,
                i = f(10) && getComputedStyle(n);
            return {
                height: w("Height", t, n, i),
                width: w("Width", t, n, i)
            }
        }
        var E = function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            },
            T = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            C = function(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            },
            _ = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            };

        function S(e) {
            return _({}, e, {
                right: e.left + e.width,
                bottom: e.top + e.height
            })
        }

        function k(e) {
            var t = {};
            try {
                if (f(10)) {
                    t = e.getBoundingClientRect();
                    var n = v(e, "top"),
                        i = v(e, "left");
                    t.top += n, t.left += i, t.bottom += n, t.right += i
                } else t = e.getBoundingClientRect()
            } catch (e) {}
            var r = {
                    left: t.left,
                    top: t.top,
                    width: t.right - t.left,
                    height: t.bottom - t.top
                },
                s = "HTML" === e.nodeName ? x(e.ownerDocument) : {},
                a = s.width || e.clientWidth || r.width,
                l = s.height || e.clientHeight || r.height,
                d = e.offsetWidth - a,
                c = e.offsetHeight - l;
            if (d || c) {
                var u = o(e);
                d -= b(u, "x"), c -= b(u, "y"), r.width -= d, r.height -= c
            }
            return S(r)
        }

        function M(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = f(10),
                r = "HTML" === t.nodeName,
                s = k(e),
                a = k(t),
                l = d(e),
                c = o(t),
                u = parseFloat(c.borderTopWidth),
                p = parseFloat(c.borderLeftWidth);
            n && r && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
            var h = S({
                top: s.top - a.top - u,
                left: s.left - a.left - p,
                width: s.width,
                height: s.height
            });
            if (h.marginTop = 0, h.marginLeft = 0, !i && r) {
                var m = parseFloat(c.marginTop),
                    g = parseFloat(c.marginLeft);
                h.top -= u - m, h.bottom -= u - m, h.left -= p - g, h.right -= p - g, h.marginTop = m, h.marginLeft = g
            }
            return (i && !n ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (h = y(h, t)), h
        }

        function $(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = e.ownerDocument.documentElement,
                i = M(e, n),
                r = Math.max(n.clientWidth, window.innerWidth || 0),
                s = Math.max(n.clientHeight, window.innerHeight || 0),
                a = t ? 0 : v(n),
                o = t ? 0 : v(n, "left"),
                l = {
                    top: a - i.top + i.marginTop,
                    left: o - i.left + i.marginLeft,
                    width: r,
                    height: s
                };
            return S(l)
        }

        function A(e) {
            var t = e.nodeName;
            if ("BODY" === t || "HTML" === t) return !1;
            if ("fixed" === o(e, "position")) return !0;
            var n = l(e);
            return !!n && A(n)
        }

        function D(e) {
            if (!e || !e.parentElement || f()) return document.documentElement;
            for (var t = e.parentElement; t && "none" === o(t, "transform");) t = t.parentElement;
            return t || document.documentElement
        }

        function P(e, t, n, i) {
            var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                s = {
                    top: 0,
                    left: 0
                },
                a = r ? D(e) : g(e, c(t));
            if ("viewport" === i) s = $(a, r);
            else {
                var o = void 0;
                "scrollParent" === i ? "BODY" === (o = d(l(t))).nodeName && (o = e.ownerDocument.documentElement) : o = "window" === i ? e.ownerDocument.documentElement : i;
                var u = M(o, a, r);
                if ("HTML" !== o.nodeName || A(a)) s = u;
                else {
                    var p = x(e.ownerDocument),
                        f = p.height,
                        h = p.width;
                    s.top += u.top - u.marginTop, s.bottom = f + u.top, s.left += u.left - u.marginLeft, s.right = h + u.left
                }
            }
            var m = "number" == typeof(n = n || 0);
            return s.left += m ? n : n.left || 0, s.top += m ? n : n.top || 0, s.right -= m ? n : n.right || 0, s.bottom -= m ? n : n.bottom || 0, s
        }

        function N(e) {
            return e.width * e.height
        }

        function O(e, t, n, i, r) {
            var s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            if (-1 === e.indexOf("auto")) return e;
            var a = P(n, i, s, r),
                o = {
                    top: {
                        width: a.width,
                        height: t.top - a.top
                    },
                    right: {
                        width: a.right - t.right,
                        height: a.height
                    },
                    bottom: {
                        width: a.width,
                        height: a.bottom - t.bottom
                    },
                    left: {
                        width: t.left - a.left,
                        height: a.height
                    }
                },
                l = Object.keys(o).map((function(e) {
                    return _({
                        key: e
                    }, o[e], {
                        area: N(o[e])
                    })
                })).sort((function(e, t) {
                    return t.area - e.area
                })),
                d = l.filter((function(e) {
                    var t = e.width,
                        i = e.height;
                    return t >= n.clientWidth && i >= n.clientHeight
                })),
                c = d.length > 0 ? d[0].key : l[0].key,
                u = e.split("-")[1];
            return c + (u ? "-" + u : "")
        }

        function I(e, t, n) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                r = i ? D(t) : g(t, c(n));
            return M(n, r, i)
        }

        function L(e) {
            var t = e.ownerDocument.defaultView.getComputedStyle(e),
                n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
                i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
            return {
                width: e.offsetWidth + i,
                height: e.offsetHeight + n
            }
        }

        function j(e) {
            var t = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };
            return e.replace(/left|right|bottom|top/g, (function(e) {
                return t[e]
            }))
        }

        function z(e, t, n) {
            n = n.split("-")[0];
            var i = L(e),
                r = {
                    width: i.width,
                    height: i.height
                },
                s = -1 !== ["right", "left"].indexOf(n),
                a = s ? "top" : "left",
                o = s ? "left" : "top",
                l = s ? "height" : "width",
                d = s ? "width" : "height";
            return r[a] = t[a] + t[l] / 2 - i[l] / 2, r[o] = n === o ? t[o] - i[d] : t[j(o)], r
        }

        function H(e, t) {
            return Array.prototype.find ? e.find(t) : e.filter(t)[0]
        }

        function q(e, t, n) {
            return (void 0 === n ? e : e.slice(0, function(e, t, n) {
                if (Array.prototype.findIndex) return e.findIndex((function(e) {
                    return e[t] === n
                }));
                var i = H(e, (function(e) {
                    return e[t] === n
                }));
                return e.indexOf(i)
            }(e, "name", n))).forEach((function(e) {
                e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var n = e.function || e.fn;
                e.enabled && a(n) && (t.offsets.popper = S(t.offsets.popper), t.offsets.reference = S(t.offsets.reference), t = n(t, e))
            })), t
        }

        function B() {
            if (!this.state.isDestroyed) {
                var e = {
                    instance: this,
                    styles: {},
                    arrowStyles: {},
                    attributes: {},
                    flipped: !1,
                    offsets: {}
                };
                e.offsets.reference = I(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = z(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = q(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
            }
        }

        function R(e, t) {
            return e.some((function(e) {
                var n = e.name;
                return e.enabled && n === t
            }))
        }

        function F(e) {
            for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
                var r = t[i],
                    s = r ? "" + r + n : e;
                if (void 0 !== document.body.style[s]) return s
            }
            return null
        }

        function W() {
            return this.state.isDestroyed = !0, R(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[F("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
        }

        function X(e) {
            var t = e.ownerDocument;
            return t ? t.defaultView : window
        }

        function Y(e, t, n, i) {
            n.updateBound = i, X(e).addEventListener("resize", n.updateBound, {
                passive: !0
            });
            var r = d(e);
            return function e(t, n, i, r) {
                var s = "BODY" === t.nodeName,
                    a = s ? t.ownerDocument.defaultView : t;
                a.addEventListener(n, i, {
                    passive: !0
                }), s || e(d(a.parentNode), n, i, r), r.push(a)
            }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
        }

        function G() {
            this.state.eventsEnabled || (this.state = Y(this.reference, this.options, this.state, this.scheduleUpdate))
        }

        function V() {
            var e, t;
            this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, X(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach((function(e) {
                e.removeEventListener("scroll", t.updateBound)
            })), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
        }

        function U(e) {
            return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
        }

        function Q(e, t) {
            Object.keys(t).forEach((function(n) {
                var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && U(t[n]) && (i = "px"), e.style[n] = t[n] + i
            }))
        }
        var K = i && /Firefox/i.test(navigator.userAgent);

        function J(e, t, n) {
            var i = H(e, (function(e) {
                    return e.name === t
                })),
                r = !!i && e.some((function(e) {
                    return e.name === n && e.enabled && e.order < i.order
                }));
            if (!r) {
                var s = "`" + t + "`",
                    a = "`" + n + "`";
                console.warn(a + " modifier is required by " + s + " modifier in order to work, be sure to include it before " + s + "!")
            }
            return r
        }
        var Z = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
            ee = Z.slice(3);

        function te(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = ee.indexOf(e),
                i = ee.slice(n + 1).concat(ee.slice(0, n));
            return t ? i.reverse() : i
        }
        var ne = "flip",
            ie = "clockwise",
            re = "counterclockwise";

        function se(e, t, n, i) {
            var r = [0, 0],
                s = -1 !== ["right", "left"].indexOf(i),
                a = e.split(/(\+|\-)/).map((function(e) {
                    return e.trim()
                })),
                o = a.indexOf(H(a, (function(e) {
                    return -1 !== e.search(/,|\s/)
                })));
            a[o] && -1 === a[o].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
            var l = /\s*,\s*|\s+/,
                d = -1 !== o ? [a.slice(0, o).concat([a[o].split(l)[0]]), [a[o].split(l)[1]].concat(a.slice(o + 1))] : [a];
            return (d = d.map((function(e, i) {
                var r = (1 === i ? !s : s) ? "height" : "width",
                    a = !1;
                return e.reduce((function(e, t) {
                    return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, a = !0, e) : a ? (e[e.length - 1] += t, a = !1, e) : e.concat(t)
                }), []).map((function(e) {
                    return function(e, t, n, i) {
                        var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                            s = +r[1],
                            a = r[2];
                        if (!s) return e;
                        if (0 === a.indexOf("%")) {
                            var o = void 0;
                            switch (a) {
                                case "%p":
                                    o = n;
                                    break;
                                case "%":
                                case "%r":
                                default:
                                    o = i
                            }
                            return S(o)[t] / 100 * s
                        }
                        if ("vh" === a || "vw" === a) {
                            return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * s
                        }
                        return s
                    }(e, r, t, n)
                }))
            }))).forEach((function(e, t) {
                e.forEach((function(n, i) {
                    U(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1))
                }))
            })), r
        }
        var ae = {
                placement: "bottom",
                positionFixed: !1,
                eventsEnabled: !0,
                removeOnDestroy: !1,
                onCreate: function() {},
                onUpdate: function() {},
                modifiers: {
                    shift: {
                        order: 100,
                        enabled: !0,
                        fn: function(e) {
                            var t = e.placement,
                                n = t.split("-")[0],
                                i = t.split("-")[1];
                            if (i) {
                                var r = e.offsets,
                                    s = r.reference,
                                    a = r.popper,
                                    o = -1 !== ["bottom", "top"].indexOf(n),
                                    l = o ? "left" : "top",
                                    d = o ? "width" : "height",
                                    c = {
                                        start: C({}, l, s[l]),
                                        end: C({}, l, s[l] + s[d] - a[d])
                                    };
                                e.offsets.popper = _({}, a, c[i])
                            }
                            return e
                        }
                    },
                    offset: {
                        order: 200,
                        enabled: !0,
                        fn: function(e, t) {
                            var n = t.offset,
                                i = e.placement,
                                r = e.offsets,
                                s = r.popper,
                                a = r.reference,
                                o = i.split("-")[0],
                                l = void 0;
                            return l = U(+n) ? [+n, 0] : se(n, s, a, o), "left" === o ? (s.top += l[0], s.left -= l[1]) : "right" === o ? (s.top += l[0], s.left += l[1]) : "top" === o ? (s.left += l[0], s.top -= l[1]) : "bottom" === o && (s.left += l[0], s.top += l[1]), e.popper = s, e
                        },
                        offset: 0
                    },
                    preventOverflow: {
                        order: 300,
                        enabled: !0,
                        fn: function(e, t) {
                            var n = t.boundariesElement || h(e.instance.popper);
                            e.instance.reference === n && (n = h(n));
                            var i = F("transform"),
                                r = e.instance.popper.style,
                                s = r.top,
                                a = r.left,
                                o = r[i];
                            r.top = "", r.left = "", r[i] = "";
                            var l = P(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                            r.top = s, r.left = a, r[i] = o, t.boundaries = l;
                            var d = t.priority,
                                c = e.offsets.popper,
                                u = {
                                    primary: function(e) {
                                        var n = c[e];
                                        return c[e] < l[e] && !t.escapeWithReference && (n = Math.max(c[e], l[e])), C({}, e, n)
                                    },
                                    secondary: function(e) {
                                        var n = "right" === e ? "left" : "top",
                                            i = c[n];
                                        return c[e] > l[e] && !t.escapeWithReference && (i = Math.min(c[n], l[e] - ("right" === e ? c.width : c.height))), C({}, n, i)
                                    }
                                };
                            return d.forEach((function(e) {
                                var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                                c = _({}, c, u[t](e))
                            })), e.offsets.popper = c, e
                        },
                        priority: ["left", "right", "top", "bottom"],
                        padding: 5,
                        boundariesElement: "scrollParent"
                    },
                    keepTogether: {
                        order: 400,
                        enabled: !0,
                        fn: function(e) {
                            var t = e.offsets,
                                n = t.popper,
                                i = t.reference,
                                r = e.placement.split("-")[0],
                                s = Math.floor,
                                a = -1 !== ["top", "bottom"].indexOf(r),
                                o = a ? "right" : "bottom",
                                l = a ? "left" : "top",
                                d = a ? "width" : "height";
                            return n[o] < s(i[l]) && (e.offsets.popper[l] = s(i[l]) - n[d]), n[l] > s(i[o]) && (e.offsets.popper[l] = s(i[o])), e
                        }
                    },
                    arrow: {
                        order: 500,
                        enabled: !0,
                        fn: function(e, t) {
                            var n;
                            if (!J(e.instance.modifiers, "arrow", "keepTogether")) return e;
                            var i = t.element;
                            if ("string" == typeof i) {
                                if (!(i = e.instance.popper.querySelector(i))) return e
                            } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                            var r = e.placement.split("-")[0],
                                s = e.offsets,
                                a = s.popper,
                                l = s.reference,
                                d = -1 !== ["left", "right"].indexOf(r),
                                c = d ? "height" : "width",
                                u = d ? "Top" : "Left",
                                p = u.toLowerCase(),
                                f = d ? "left" : "top",
                                h = d ? "bottom" : "right",
                                m = L(i)[c];
                            l[h] - m < a[p] && (e.offsets.popper[p] -= a[p] - (l[h] - m)), l[p] + m > a[h] && (e.offsets.popper[p] += l[p] + m - a[h]), e.offsets.popper = S(e.offsets.popper);
                            var g = l[p] + l[c] / 2 - m / 2,
                                v = o(e.instance.popper),
                                y = parseFloat(v["margin" + u]),
                                b = parseFloat(v["border" + u + "Width"]),
                                w = g - e.offsets.popper[p] - y - b;
                            return w = Math.max(Math.min(a[c] - m, w), 0), e.arrowElement = i, e.offsets.arrow = (C(n = {}, p, Math.round(w)), C(n, f, ""), n), e
                        },
                        element: "[x-arrow]"
                    },
                    flip: {
                        order: 600,
                        enabled: !0,
                        fn: function(e, t) {
                            if (R(e.instance.modifiers, "inner")) return e;
                            if (e.flipped && e.placement === e.originalPlacement) return e;
                            var n = P(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                                i = e.placement.split("-")[0],
                                r = j(i),
                                s = e.placement.split("-")[1] || "",
                                a = [];
                            switch (t.behavior) {
                                case ne:
                                    a = [i, r];
                                    break;
                                case ie:
                                    a = te(i);
                                    break;
                                case re:
                                    a = te(i, !0);
                                    break;
                                default:
                                    a = t.behavior
                            }
                            return a.forEach((function(o, l) {
                                if (i !== o || a.length === l + 1) return e;
                                i = e.placement.split("-")[0], r = j(i);
                                var d = e.offsets.popper,
                                    c = e.offsets.reference,
                                    u = Math.floor,
                                    p = "left" === i && u(d.right) > u(c.left) || "right" === i && u(d.left) < u(c.right) || "top" === i && u(d.bottom) > u(c.top) || "bottom" === i && u(d.top) < u(c.bottom),
                                    f = u(d.left) < u(n.left),
                                    h = u(d.right) > u(n.right),
                                    m = u(d.top) < u(n.top),
                                    g = u(d.bottom) > u(n.bottom),
                                    v = "left" === i && f || "right" === i && h || "top" === i && m || "bottom" === i && g,
                                    y = -1 !== ["top", "bottom"].indexOf(i),
                                    b = !!t.flipVariations && (y && "start" === s && f || y && "end" === s && h || !y && "start" === s && m || !y && "end" === s && g),
                                    w = !!t.flipVariationsByContent && (y && "start" === s && h || y && "end" === s && f || !y && "start" === s && g || !y && "end" === s && m),
                                    x = b || w;
                                (p || v || x) && (e.flipped = !0, (p || v) && (i = a[l + 1]), x && (s = function(e) {
                                    return "end" === e ? "start" : "start" === e ? "end" : e
                                }(s)), e.placement = i + (s ? "-" + s : ""), e.offsets.popper = _({}, e.offsets.popper, z(e.instance.popper, e.offsets.reference, e.placement)), e = q(e.instance.modifiers, e, "flip"))
                            })), e
                        },
                        behavior: "flip",
                        padding: 5,
                        boundariesElement: "viewport",
                        flipVariations: !1,
                        flipVariationsByContent: !1
                    },
                    inner: {
                        order: 700,
                        enabled: !1,
                        fn: function(e) {
                            var t = e.placement,
                                n = t.split("-")[0],
                                i = e.offsets,
                                r = i.popper,
                                s = i.reference,
                                a = -1 !== ["left", "right"].indexOf(n),
                                o = -1 === ["top", "left"].indexOf(n);
                            return r[a ? "left" : "top"] = s[n] - (o ? r[a ? "width" : "height"] : 0), e.placement = j(t), e.offsets.popper = S(r), e
                        }
                    },
                    hide: {
                        order: 800,
                        enabled: !0,
                        fn: function(e) {
                            if (!J(e.instance.modifiers, "hide", "preventOverflow")) return e;
                            var t = e.offsets.reference,
                                n = H(e.instance.modifiers, (function(e) {
                                    return "preventOverflow" === e.name
                                })).boundaries;
                            if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                                if (!0 === e.hide) return e;
                                e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                            } else {
                                if (!1 === e.hide) return e;
                                e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                            }
                            return e
                        }
                    },
                    computeStyle: {
                        order: 850,
                        enabled: !0,
                        fn: function(e, t) {
                            var n = t.x,
                                i = t.y,
                                r = e.offsets.popper,
                                s = H(e.instance.modifiers, (function(e) {
                                    return "applyStyle" === e.name
                                })).gpuAcceleration;
                            void 0 !== s && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                            var a = void 0 !== s ? s : t.gpuAcceleration,
                                o = h(e.instance.popper),
                                l = k(o),
                                d = {
                                    position: r.position
                                },
                                c = function(e, t) {
                                    var n = e.offsets,
                                        i = n.popper,
                                        r = n.reference,
                                        s = Math.round,
                                        a = Math.floor,
                                        o = function(e) {
                                            return e
                                        },
                                        l = s(r.width),
                                        d = s(i.width),
                                        c = -1 !== ["left", "right"].indexOf(e.placement),
                                        u = -1 !== e.placement.indexOf("-"),
                                        p = t ? c || u || l % 2 == d % 2 ? s : a : o,
                                        f = t ? s : o;
                                    return {
                                        left: p(l % 2 == 1 && d % 2 == 1 && !u && t ? i.left - 1 : i.left),
                                        top: f(i.top),
                                        bottom: f(i.bottom),
                                        right: p(i.right)
                                    }
                                }(e, window.devicePixelRatio < 2 || !K),
                                u = "bottom" === n ? "top" : "bottom",
                                p = "right" === i ? "left" : "right",
                                f = F("transform"),
                                m = void 0,
                                g = void 0;
                            if (g = "bottom" === u ? "HTML" === o.nodeName ? -o.clientHeight + c.bottom : -l.height + c.bottom : c.top, m = "right" === p ? "HTML" === o.nodeName ? -o.clientWidth + c.right : -l.width + c.right : c.left, a && f) d[f] = "translate3d(" + m + "px, " + g + "px, 0)", d[u] = 0, d[p] = 0, d.willChange = "transform";
                            else {
                                var v = "bottom" === u ? -1 : 1,
                                    y = "right" === p ? -1 : 1;
                                d[u] = g * v, d[p] = m * y, d.willChange = u + ", " + p
                            }
                            var b = {
                                "x-placement": e.placement
                            };
                            return e.attributes = _({}, b, e.attributes), e.styles = _({}, d, e.styles), e.arrowStyles = _({}, e.offsets.arrow, e.arrowStyles), e
                        },
                        gpuAcceleration: !0,
                        x: "bottom",
                        y: "right"
                    },
                    applyStyle: {
                        order: 900,
                        enabled: !0,
                        fn: function(e) {
                            var t, n;
                            return Q(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach((function(e) {
                                !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                            })), e.arrowElement && Object.keys(e.arrowStyles).length && Q(e.arrowElement, e.arrowStyles), e
                        },
                        onLoad: function(e, t, n, i, r) {
                            var s = I(r, t, e, n.positionFixed),
                                a = O(n.placement, s, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                            return t.setAttribute("x-placement", a), Q(t, {
                                position: n.positionFixed ? "fixed" : "absolute"
                            }), n
                        },
                        gpuAcceleration: void 0
                    }
                }
            },
            oe = function() {
                function e(t, n) {
                    var i = this,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    E(this, e), this.scheduleUpdate = function() {
                        return requestAnimationFrame(i.update)
                    }, this.update = s(this.update.bind(this)), this.options = _({}, e.Defaults, r), this.state = {
                        isDestroyed: !1,
                        isCreated: !1,
                        scrollParents: []
                    }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(_({}, e.Defaults.modifiers, r.modifiers)).forEach((function(t) {
                        i.options.modifiers[t] = _({}, e.Defaults.modifiers[t] || {}, r.modifiers ? r.modifiers[t] : {})
                    })), this.modifiers = Object.keys(this.options.modifiers).map((function(e) {
                        return _({
                            name: e
                        }, i.options.modifiers[e])
                    })).sort((function(e, t) {
                        return e.order - t.order
                    })), this.modifiers.forEach((function(e) {
                        e.enabled && a(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state)
                    })), this.update();
                    var o = this.options.eventsEnabled;
                    o && this.enableEventListeners(), this.state.eventsEnabled = o
                }
                return T(e, [{
                    key: "update",
                    value: function() {
                        return B.call(this)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        return W.call(this)
                    }
                }, {
                    key: "enableEventListeners",
                    value: function() {
                        return G.call(this)
                    }
                }, {
                    key: "disableEventListeners",
                    value: function() {
                        return V.call(this)
                    }
                }]), e
            }();
        oe.Utils = ("undefined" != typeof window ? window : global).PopperUtils, oe.placements = Z, oe.Defaults = ae, t.default = oe
    }
});
//# sourceMappingURL=app.js.map