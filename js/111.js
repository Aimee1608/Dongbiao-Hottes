this.answerjs = this.answerjs || {},
    function () {
        "use strict";

        function e() {}
        e.baseURL = "https://xy.qichedaquan.com/Baowo/", e.wxJssdkURL = "http://h5.qlh520.top/weixin/jssdk/wx_token.php", e.wxShareTitle = "Dr.5的秘密基地", e.WxShareDesc = "这么拽的车，炫耀一下！", e.WxShareImg = e.baseURL + "res/share/share.jpg", e.WxShareLink = e.baseURL + "index.php", e.regURl = "http://fld.xingyuanauto.com/public/index.php/port/Userlotter/UserLotter", e.DESIGN_PORTRAIT_WIDTH = 640, e.DESIGN_PORTRAIT_HEIGHT = 1039, e.isInputState = !1, e.initAPI = function () {}, answerjs.GameData = e
    }();
this.createjs = this.createjs || {}, createjs.extend = function (t, e) {
        "use strict";

        function i() {
            this.constructor = t
        }
        return i.prototype = e.prototype, t.prototype = new i
    }, this.createjs = this.createjs || {}, createjs.promote = function (t, e) {
        "use strict";
        var i = t.prototype,
            s = Object.getPrototypeOf && Object.getPrototypeOf(i) || i.__proto__;
        if (s) {
            i[(e += "_") + "constructor"] = s.constructor;
            for (var r in s) i.hasOwnProperty(r) && "function" == typeof s[r] && (i[e + r] = s[r])
        }
        return t
    }, this.createjs = this.createjs || {}, createjs.indexOf = function (t, e) {
        "use strict";
        for (var i = 0, s = t.length; s > i; i++)
            if (e === t[i]) return i;
        return -1
    }, this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t, e, i) {
            this.type = t, this.target = null, this.currentTarget = null, this.eventPhase = 0, this.bubbles = !!e, this.cancelable = !!i, this.timeStamp = (new Date).getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.removed = !1
        }
        var e = t.prototype;
        e.preventDefault = function () {
            this.defaultPrevented = this.cancelable && !0
        }, e.stopPropagation = function () {
            this.propagationStopped = !0
        }, e.stopImmediatePropagation = function () {
            this.immediatePropagationStopped = this.propagationStopped = !0
        }, e.remove = function () {
            this.removed = !0
        }, e.clone = function () {
            return new t(this.type, this.bubbles, this.cancelable)
        }, e.set = function (t) {
            for (var e in t) this[e] = t[e];
            return this
        }, e.toString = function () {
            return "[Event (type=" + this.type + ")]"
        }, createjs.Event = t
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t() {
            this._listeners = null, this._captureListeners = null
        }
        var e = t.prototype;
        t.initialize = function (t) {
            t.addEventListener = e.addEventListener, t.on = e.on, t.removeEventListener = t.off = e.removeEventListener, t.removeAllEventListeners = e.removeAllEventListeners, t.hasEventListener = e.hasEventListener, t.dispatchEvent = e.dispatchEvent, t._dispatchEvent = e._dispatchEvent, t.willTrigger = e.willTrigger
        }, e.addEventListener = function (t, e, i) {
            var s;
            s = i ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};
            var r = s[t];
            return r && this.removeEventListener(t, e, i), r = s[t], r ? r.push(e) : s[t] = [e], e
        }, e.on = function (t, e, i, s, r, n) {
            return e.handleEvent && (i = i || e, e = e.handleEvent), i = i || this, this.addEventListener(t, function (t) {
                e.call(i, t, r), s && t.remove()
            }, n)
        }, e.removeEventListener = function (t, e, i) {
            var s = i ? this._captureListeners : this._listeners;
            if (s) {
                var r = s[t];
                if (r)
                    for (var n = 0, a = r.length; a > n; n++)
                        if (r[n] == e) {
                            1 == a ? delete s[t] : r.splice(n, 1);
                            break
                        }
            }
        }, e.off = e.removeEventListener, e.removeAllEventListeners = function (t) {
            t ? (this._listeners && delete this._listeners[t], this._captureListeners && delete this._captureListeners[t]) : this._listeners = this._captureListeners = null
        }, e.dispatchEvent = function (t, e, i) {
            if ("string" == typeof t) {
                var s = this._listeners;
                if (!(e || s && s[t])) return !0;
                t = new createjs.Event(t, e, i)
            } else t.target && t.clone && (t = t.clone());
            try {
                t.target = this
            } catch (t) {}
            if (t.bubbles && this.parent) {
                for (var r = this, n = [r]; r.parent;) n.push(r = r.parent);
                var a, o = n.length;
                for (a = o - 1; a >= 0 && !t.propagationStopped; a--) n[a]._dispatchEvent(t, 1 + (0 == a));
                for (a = 1; o > a && !t.propagationStopped; a++) n[a]._dispatchEvent(t, 3)
            } else this._dispatchEvent(t, 2);
            return !t.defaultPrevented
        }, e.hasEventListener = function (t) {
            var e = this._listeners,
                i = this._captureListeners;
            return !!(e && e[t] || i && i[t])
        }, e.willTrigger = function (t) {
            for (var e = this; e;) {
                if (e.hasEventListener(t)) return !0;
                e = e.parent
            }
            return !1
        }, e.toString = function () {
            return "[EventDispatcher]"
        }, e._dispatchEvent = function (t, e) {
            var i, s = 1 == e ? this._captureListeners : this._listeners;
            if (t && s) {
                var r = s[t.type];
                if (!r || !(i = r.length)) return;
                try {
                    t.currentTarget = this
                } catch (t) {}
                try {
                    t.eventPhase = e
                } catch (t) {}
                t.removed = !1, r = r.slice();
                for (var n = 0; i > n && !t.immediatePropagationStopped; n++) {
                    var a = r[n];
                    a.handleEvent ? a.handleEvent(t) : a(t), t.removed && (this.off(t.type, a, 1 == e), t.removed = !1)
                }
            }
        }, createjs.EventDispatcher = t
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t() {
            throw "Ticker cannot be instantiated."
        }
        t.RAF_SYNCHED = "synched", t.RAF = "raf", t.TIMEOUT = "timeout", t.useRAF = !1, t.timingMode = null, t.maxDelta = 0, t.paused = !1, t.removeEventListener = null, t.removeAllEventListeners = null, t.dispatchEvent = null, t.hasEventListener = null, t._listeners = null, createjs.EventDispatcher.initialize(t), t._addEventListener = t.addEventListener, t.addEventListener = function () {
            return !t._inited && t.init(), t._addEventListener.apply(t, arguments)
        }, t._inited = !1, t._startTime = 0, t._pausedTime = 0, t._ticks = 0, t._pausedTicks = 0, t._interval = 50, t._lastTime = 0, t._times = null, t._tickTimes = null, t._timerId = null, t._raf = !0, t.setInterval = function (e) {
            t._interval = e, t._inited && t._setupTick()
        }, t.getInterval = function () {
            return t._interval
        }, t.setFPS = function (e) {
            t.setInterval(1e3 / e)
        }, t.getFPS = function () {
            return 1e3 / t._interval
        };
        try {
            Object.defineProperties(t, {
                interval: {
                    get: t.getInterval,
                    set: t.setInterval
                },
                framerate: {
                    get: t.getFPS,
                    set: t.setFPS
                }
            })
        } catch (t) {
            console.log(t)
        }
        t.init = function () {
            t._inited || (t._inited = !0, t._times = [], t._tickTimes = [], t._startTime = t._getTime(), t._times.push(t._lastTime = 0), t.interval = t._interval)
        }, t.reset = function () {
            if (t._raf) {
                var e = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
                e && e(t._timerId)
            } else clearTimeout(t._timerId);
            t.removeAllEventListeners("tick"), t._timerId = t._times = t._tickTimes = null, t._startTime = t._lastTime = t._ticks = 0, t._inited = !1
        }, t.getMeasuredTickTime = function (e) {
            var i = 0,
                s = t._tickTimes;
            if (!s || s.length < 1) return -1;
            e = Math.min(s.length, e || 0 | t.getFPS());
            for (var r = 0; e > r; r++) i += s[r];
            return i / e
        }, t.getMeasuredFPS = function (e) {
            var i = t._times;
            return !i || i.length < 2 ? -1 : (e = Math.min(i.length - 1, e || 0 | t.getFPS()), 1e3 / ((i[0] - i[e]) / e))
        }, t.setPaused = function (e) {
            t.paused = e
        }, t.getPaused = function () {
            return t.paused
        }, t.getTime = function (e) {
            return t._startTime ? t._getTime() - (e ? t._pausedTime : 0) : -1
        }, t.getEventTime = function (e) {
            return t._startTime ? (t._lastTime || t._startTime) - (e ? t._pausedTime : 0) : -1
        }, t.getTicks = function (e) {
            return t._ticks - (e ? t._pausedTicks : 0)
        }, t._handleSynch = function () {
            t._timerId = null, t._setupTick(), t._getTime() - t._lastTime >= .97 * (t._interval - 1) && t._tick()
        }, t._handleRAF = function () {
            t._timerId = null, t._setupTick(), t._tick()
        }, t._handleTimeout = function () {
            t._timerId = null, t._setupTick(), t._tick()
        }, t._setupTick = function () {
            if (null == t._timerId) {
                var e = t.timingMode || t.useRAF && t.RAF_SYNCHED;
                if (e == t.RAF_SYNCHED || e == t.RAF) {
                    var i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
                    if (i) return t._timerId = i(e == t.RAF ? t._handleRAF : t._handleSynch), void(t._raf = !0)
                }
                t._raf = !1, t._timerId = setTimeout(t._handleTimeout, t._interval)
            }
        }, t._tick = function () {
            var e = t.paused,
                i = t._getTime(),
                s = i - t._lastTime;
            if (t._lastTime = i, t._ticks++, e && (t._pausedTicks++, t._pausedTime += s), t.hasEventListener("tick")) {
                var r = new createjs.Event("tick"),
                    n = t.maxDelta;
                r.delta = n && s > n ? n : s, r.paused = e, r.time = i, r.runTime = i - t._pausedTime, t.dispatchEvent(r)
            }
            for (t._tickTimes.unshift(t._getTime() - i); t._tickTimes.length > 100;) t._tickTimes.pop();
            for (t._times.unshift(i); t._times.length > 100;) t._times.pop()
        };
        var e = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);
        t._getTime = function () {
            return (e && e.call(performance) || (new Date).getTime()) - t._startTime
        }, createjs.Ticker = t
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t() {
            throw "UID cannot be instantiated"
        }
        t._nextID = 0, t.get = function () {
            return t._nextID++
        }, createjs.UID = t
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t, e, i, s, r, n, a, o, h, c, u) {
            this.Event_constructor(t, e, i), this.stageX = s, this.stageY = r, this.rawX = null == h ? s : h, this.rawY = null == c ? r : c, this.nativeEvent = n, this.pointerID = a, this.primary = !!o, this.relatedTarget = u
        }
        var e = createjs.extend(t, createjs.Event);
        e._get_localX = function () {
            return this.currentTarget.globalToLocal(this.rawX, this.rawY).x
        }, e._get_localY = function () {
            return this.currentTarget.globalToLocal(this.rawX, this.rawY).y
        }, e._get_isTouch = function () {
            return -1 !== this.pointerID
        };
        try {
            Object.defineProperties(e, {
                localX: {
                    get: e._get_localX
                },
                localY: {
                    get: e._get_localY
                },
                isTouch: {
                    get: e._get_isTouch
                }
            })
        } catch (t) {}
        e.clone = function () {
            return new t(this.type, this.bubbles, this.cancelable, this.stageX, this.stageY, this.nativeEvent, this.pointerID, this.primary, this.rawX, this.rawY)
        }, e.toString = function () {
            return "[MouseEvent (type=" + this.type + " stageX=" + this.stageX + " stageY=" + this.stageY + ")]"
        }, createjs.MouseEvent = createjs.promote(t, "Event")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t, e, i, s, r, n) {
            this.setValues(t, e, i, s, r, n)
        }
        var e = t.prototype;
        t.DEG_TO_RAD = Math.PI / 180, t.identity = null, e.setValues = function (t, e, i, s, r, n) {
            return this.a = null == t ? 1 : t, this.b = e || 0, this.c = i || 0, this.d = null == s ? 1 : s, this.tx = r || 0, this.ty = n || 0, this
        }, e.append = function (t, e, i, s, r, n) {
            var a = this.a,
                o = this.b,
                h = this.c,
                c = this.d;
            return (1 != t || 0 != e || 0 != i || 1 != s) && (this.a = a * t + h * e, this.b = o * t + c * e, this.c = a * i + h * s, this.d = o * i + c * s), this.tx = a * r + h * n + this.tx, this.ty = o * r + c * n + this.ty, this
        }, e.prepend = function (t, e, i, s, r, n) {
            var a = this.a,
                o = this.c,
                h = this.tx;
            return this.a = t * a + i * this.b, this.b = e * a + s * this.b, this.c = t * o + i * this.d, this.d = e * o + s * this.d, this.tx = t * h + i * this.ty + r, this.ty = e * h + s * this.ty + n, this
        }, e.appendMatrix = function (t) {
            return this.append(t.a, t.b, t.c, t.d, t.tx, t.ty)
        }, e.prependMatrix = function (t) {
            return this.prepend(t.a, t.b, t.c, t.d, t.tx, t.ty)
        }, e.appendTransform = function (e, i, s, r, n, a, o, h, c) {
            if (n % 360) var u = n * t.DEG_TO_RAD,
                l = Math.cos(u),
                d = Math.sin(u);
            else l = 1, d = 0;
            return a || o ? (a *= t.DEG_TO_RAD, o *= t.DEG_TO_RAD, this.append(Math.cos(o), Math.sin(o), -Math.sin(a), Math.cos(a), e, i), this.append(l * s, d * s, -d * r, l * r, 0, 0)) : this.append(l * s, d * s, -d * r, l * r, e, i), (h || c) && (this.tx -= h * this.a + c * this.c, this.ty -= h * this.b + c * this.d), this
        }, e.prependTransform = function (e, i, s, r, n, a, o, h, c) {
            if (n % 360) var u = n * t.DEG_TO_RAD,
                l = Math.cos(u),
                d = Math.sin(u);
            else l = 1, d = 0;
            return (h || c) && (this.tx -= h, this.ty -= c), a || o ? (a *= t.DEG_TO_RAD, o *= t.DEG_TO_RAD, this.prepend(l * s, d * s, -d * r, l * r, 0, 0), this.prepend(Math.cos(o), Math.sin(o), -Math.sin(a), Math.cos(a), e, i)) : this.prepend(l * s, d * s, -d * r, l * r, e, i), this
        }, e.rotate = function (e) {
            e *= t.DEG_TO_RAD;
            var i = Math.cos(e),
                s = Math.sin(e),
                r = this.a,
                n = this.b;
            return this.a = r * i + this.c * s, this.b = n * i + this.d * s, this.c = -r * s + this.c * i, this.d = -n * s + this.d * i, this
        }, e.skew = function (e, i) {
            return e *= t.DEG_TO_RAD, i *= t.DEG_TO_RAD, this.append(Math.cos(i), Math.sin(i), -Math.sin(e), Math.cos(e), 0, 0), this
        }, e.scale = function (t, e) {
            return this.a *= t, this.b *= t, this.c *= e, this.d *= e, this
        }, e.translate = function (t, e) {
            return this.tx += this.a * t + this.c * e, this.ty += this.b * t + this.d * e, this
        }, e.identity = function () {
            return this.a = this.d = 1, this.b = this.c = this.tx = this.ty = 0, this
        }, e.invert = function () {
            var t = this.a,
                e = this.b,
                i = this.c,
                s = this.d,
                r = this.tx,
                n = t * s - e * i;
            return this.a = s / n, this.b = -e / n, this.c = -i / n, this.d = t / n, this.tx = (i * this.ty - s * r) / n, this.ty = -(t * this.ty - e * r) / n, this
        }, e.isIdentity = function () {
            return 0 === this.tx && 0 === this.ty && 1 === this.a && 0 === this.b && 0 === this.c && 1 === this.d
        }, e.equals = function (t) {
            return this.tx === t.tx && this.ty === t.ty && this.a === t.a && this.b === t.b && this.c === t.c && this.d === t.d
        }, e.transformPoint = function (t, e, i) {
            return i = i || {}, i.x = t * this.a + e * this.c + this.tx, i.y = t * this.b + e * this.d + this.ty, i
        }, e.decompose = function (e) {
            null == e && (e = {}), e.x = this.tx, e.y = this.ty, e.scaleX = Math.sqrt(this.a * this.a + this.b * this.b), e.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);
            var i = Math.atan2(-this.c, this.d),
                s = Math.atan2(this.b, this.a),
                r = Math.abs(1 - i / s);
            return 1e-5 > r ? (e.rotation = s / t.DEG_TO_RAD, this.a < 0 && this.d >= 0 && (e.rotation += e.rotation <= 0 ? 180 : -180), e.skewX = e.skewY = 0) : (e.skewX = i / t.DEG_TO_RAD, e.skewY = s / t.DEG_TO_RAD), e
        }, e.copy = function (t) {
            return this.setValues(t.a, t.b, t.c, t.d, t.tx, t.ty)
        }, e.clone = function () {
            return new t(this.a, this.b, this.c, this.d, this.tx, this.ty)
        }, e.toString = function () {
            return "[Matrix2D (a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + ")]"
        }, t.identity = new t, createjs.Matrix2D = t
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t, e, i, s, r) {
            this.setValues(t, e, i, s, r)
        }
        var e = t.prototype;
        e.setValues = function (t, e, i, s, r) {
            return this.visible = null == t || !!t, this.alpha = null == e ? 1 : e, this.shadow = i, this.compositeOperation = s, this.matrix = r || this.matrix && this.matrix.identity() || new createjs.Matrix2D, this
        }, e.append = function (t, e, i, s, r) {
            return this.alpha *= e, this.shadow = i || this.shadow, this.compositeOperation = s || this.compositeOperation, this.visible = this.visible && t, r && this.matrix.appendMatrix(r), this
        }, e.prepend = function (t, e, i, s, r) {
            return this.alpha *= e, this.shadow = this.shadow || i, this.compositeOperation = this.compositeOperation || s, this.visible = this.visible && t, r && this.matrix.prependMatrix(r), this
        }, e.identity = function () {
            return this.visible = !0, this.alpha = 1, this.shadow = this.compositeOperation = null, this.matrix.identity(), this
        }, e.clone = function () {
            return new t(this.alpha, this.shadow, this.compositeOperation, this.visible, this.matrix.clone())
        }, createjs.DisplayProps = t
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t, e) {
            this.setValues(t, e)
        }
        var e = t.prototype;
        e.setValues = function (t, e) {
            return this.x = t || 0, this.y = e || 0, this
        }, e.copy = function (t) {
            return this.x = t.x, this.y = t.y, this
        }, e.clone = function () {
            return new t(this.x, this.y)
        }, e.toString = function () {
            return "[Point (x=" + this.x + " y=" + this.y + ")]"
        }, createjs.Point = t
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t, e, i, s) {
            this.setValues(t, e, i, s)
        }
        var e = t.prototype;
        e.setValues = function (t, e, i, s) {
            return this.x = t || 0, this.y = e || 0, this.width = i || 0, this.height = s || 0, this
        }, e.extend = function (t, e, i, s) {
            return i = i || 0, s = s || 0, t + i > this.x + this.width && (this.width = t + i - this.x), e + s > this.y + this.height && (this.height = e + s - this.y), t < this.x && (this.width += this.x - t, this.x = t), e < this.y && (this.height += this.y - e, this.y = e), this
        }, e.pad = function (t, e, i, s) {
            return this.x -= e, this.y -= t, this.width += e + s, this.height += t + i, this
        }, e.copy = function (t) {
            return this.setValues(t.x, t.y, t.width, t.height)
        }, e.contains = function (t, e, i, s) {
            return i = i || 0, s = s || 0, t >= this.x && t + i <= this.x + this.width && e >= this.y && e + s <= this.y + this.height
        }, e.union = function (t) {
            return this.clone().extend(t.x, t.y, t.width, t.height)
        }, e.intersection = function (e) {
            var i = e.x,
                s = e.y,
                r = i + e.width,
                n = s + e.height;
            return this.x > i && (i = this.x), this.y > s && (s = this.y), this.x + this.width < r && (r = this.x + this.width), this.y + this.height < n && (n = this.y + this.height), i >= r || s >= n ? null : new t(i, s, r - i, n - s)
        }, e.intersects = function (t) {
            return t.x <= this.x + this.width && this.x <= t.x + t.width && t.y <= this.y + this.height && this.y <= t.y + t.height
        }, e.isEmpty = function () {
            return this.width <= 0 || this.height <= 0
        }, e.clone = function () {
            return new t(this.x, this.y, this.width, this.height)
        }, e.toString = function () {
            return "[Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")]"
        }, createjs.Rectangle = t
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t, e, i, s, r, n, a) {
            t.addEventListener && (this.target = t, this.overLabel = null == i ? "over" : i, this.outLabel = null == e ? "out" : e, this.downLabel = null == s ? "down" : s, this.play = r, this._isPressed = !1, this._isOver = !1, this._enabled = !1, t.mouseChildren = !1, this.enabled = !0, this.handleEvent({}), n && (a && (n.actionsEnabled = !1, n.gotoAndStop && n.gotoAndStop(a)), t.hitArea = n))
        }
        var e = t.prototype;
        e.setEnabled = function (t) {
            if (t != this._enabled) {
                var e = this.target;
                this._enabled = t, t ? (e.cursor = "pointer", e.addEventListener("rollover", this), e.addEventListener("rollout", this), e.addEventListener("mousedown", this), e.addEventListener("pressup", this), e._reset && (e.__reset = e._reset, e._reset = this._reset)) : (e.cursor = null, e.removeEventListener("rollover", this), e.removeEventListener("rollout", this), e.removeEventListener("mousedown", this), e.removeEventListener("pressup", this), e.__reset && (e._reset = e.__reset, delete e.__reset))
            }
        }, e.getEnabled = function () {
            return this._enabled
        };
        try {
            Object.defineProperties(e, {
                enabled: {
                    get: e.getEnabled,
                    set: e.setEnabled
                }
            })
        } catch (t) {}
        e.toString = function () {
            return "[ButtonHelper]"
        }, e.handleEvent = function (t) {
            var e, i = this.target,
                s = t.type;
            "mousedown" == s ? (this._isPressed = !0, e = this.downLabel) : "pressup" == s ? (this._isPressed = !1, e = this._isOver ? this.overLabel : this.outLabel) : "rollover" == s ? (this._isOver = !0, e = this._isPressed ? this.downLabel : this.overLabel) : (this._isOver = !1, e = this._isPressed ? this.overLabel : this.outLabel), this.play ? i.gotoAndPlay && i.gotoAndPlay(e) : i.gotoAndStop && i.gotoAndStop(e)
        }, e._reset = function () {
            var t = this.paused;
            this.__reset(), this.paused = t
        }, createjs.ButtonHelper = t
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t, e, i, s) {
            this.color = t || "black", this.offsetX = e || 0, this.offsetY = i || 0, this.blur = s || 0
        }
        var e = t.prototype;
        t.identity = new t("transparent", 0, 0, 0), e.toString = function () {
            return "[Shadow]"
        }, e.clone = function () {
            return new t(this.color, this.offsetX, this.offsetY, this.blur)
        }, createjs.Shadow = t
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t) {
            this.EventDispatcher_constructor(), this.complete = !0, this.framerate = 0, this._animations = null, this._frames = null, this._images = null, this._data = null, this._loadCount = 0, this._frameHeight = 0, this._frameWidth = 0, this._numFrames = 0, this._regX = 0, this._regY = 0, this._spacing = 0, this._margin = 0, this._parseData(t)
        }
        var e = createjs.extend(t, createjs.EventDispatcher);
        e.getAnimations = function () {
            return this._animations.slice()
        };
        try {
            Object.defineProperties(e, {
                animations: {
                    get: e.getAnimations
                }
            })
        } catch (t) {}
        e.getNumFrames = function (t) {
            if (null == t) return this._frames ? this._frames.length : this._numFrames || 0;
            var e = this._data[t];
            return null == e ? 0 : e.frames.length
        }, e.getAnimation = function (t) {
            return this._data[t]
        }, e.getFrame = function (t) {
            var e;
            return this._frames && (e = this._frames[t]) ? e : null
        }, e.getFrameBounds = function (t, e) {
            var i = this.getFrame(t);
            return i ? (e || new createjs.Rectangle).setValues(-i.regX, -i.regY, i.rect.width, i.rect.height) : null
        }, e.toString = function () {
            return "[SpriteSheet]"
        }, e.clone = function () {
            throw "SpriteSheet cannot be cloned."
        }, e._parseData = function (t) {
            var e, i, s, r;
            if (null != t) {
                if (this.framerate = t.framerate || 0, t.images && (i = t.images.length) > 0)
                    for (r = this._images = [], e = 0; i > e; e++) {
                        var n = t.images[e];
                        if ("string" == typeof n) {
                            var a = n;
                            n = document.createElement("img"), n.src = a
                        }
                        r.push(n), n.getContext || n.naturalWidth || (this._loadCount++, this.complete = !1, function (t, e) {
                            n.onload = function () {
                                t._handleImageLoad(e)
                            }
                        }(this, a), function (t, e) {
                            n.onerror = function () {
                                t._handleImageError(e)
                            }
                        }(this, a))
                    }
                if (null == t.frames);
                else if (Array.isArray(t.frames))
                    for (this._frames = [], r = t.frames, e = 0, i = r.length; i > e; e++) {
                        var o = r[e];
                        this._frames.push({
                            image: this._images[o[4] ? o[4] : 0],
                            rect: new createjs.Rectangle(o[0], o[1], o[2], o[3]),
                            regX: o[5] || 0,
                            regY: o[6] || 0
                        })
                    } else s = t.frames, this._frameWidth = s.width, this._frameHeight = s.height, this._regX = s.regX || 0, this._regY = s.regY || 0, this._spacing = s.spacing || 0, this._margin = s.margin || 0, this._numFrames = s.count, 0 == this._loadCount && this._calculateFrames();
                if (this._animations = [], null != (s = t.animations)) {
                    this._data = {};
                    var h;
                    for (h in s) {
                        var c = {
                                name: h
                            },
                            u = s[h];
                        if ("number" == typeof u) r = c.frames = [u];
                        else if (Array.isArray(u))
                            if (1 == u.length) c.frames = [u[0]];
                            else
                                for (c.speed = u[3], c.next = u[2], r = c.frames = [], e = u[0]; e <= u[1]; e++) r.push(e);
                        else {
                            c.speed = u.speed, c.next = u.next;
                            var l = u.frames;
                            r = c.frames = "number" == typeof l ? [l] : l.slice(0)
                        }(c.next === !0 || void 0 === c.next) && (c.next = h), (c.next === !1 || r.length < 2 && c.next == h) && (c.next = null), c.speed || (c.speed = 1), this._animations.push(h), this._data[h] = c
                    }
                }
            }
        }, e._handleImageLoad = function (t) {
            0 == --this._loadCount && (this._calculateFrames(), this.complete = !0, this.dispatchEvent("complete"))
        }, e._handleImageError = function (t) {
            var e = new createjs.Event("error");
            e.src = t, this.dispatchEvent(e), 0 == --this._loadCount && this.dispatchEvent("complete")
        }, e._calculateFrames = function () {
            if (!this._frames && 0 != this._frameWidth) {
                this._frames = [];
                var t = this._numFrames || 1e5,
                    e = 0,
                    i = this._frameWidth,
                    s = this._frameHeight,
                    r = this._spacing,
                    n = this._margin;
                t: for (var a = 0, o = this._images; a < o.length; a++)
                    for (var h = o[a], c = h.width, u = h.height, l = n; u - n - s >= l;) {
                        for (var d = n; c - n - i >= d;) {
                            if (e >= t) break t;
                            e++, this._frames.push({
                                image: h,
                                rect: new createjs.Rectangle(d, l, i, s),
                                regX: this._regX,
                                regY: this._regY
                            }), d += i + r
                        }
                        l += s + r
                    }
                this._numFrames = e
            }
        }, createjs.SpriteSheet = createjs.promote(t, "EventDispatcher")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t() {
            this.command = null, this._stroke = null, this._strokeStyle = null, this._oldStrokeStyle = null, this._strokeDash = null, this._oldStrokeDash = null, this._strokeIgnoreScale = !1, this._fill = null, this._instructions = [], this._commitIndex = 0, this._activeInstructions = [], this._dirty = !1, this._storeIndex = 0, this.clear()
        }
        var e = t.prototype,
            i = t;
        t.getRGB = function (t, e, i, s) {
            return null != t && null == i && (s = e, i = 255 & t, e = t >> 8 & 255, t = t >> 16 & 255), null == s ? "rgb(" + t + "," + e + "," + i + ")" : "rgba(" + t + "," + e + "," + i + "," + s + ")"
        }, t.getHSL = function (t, e, i, s) {
            return null == s ? "hsl(" + t % 360 + "," + e + "%," + i + "%)" : "hsla(" + t % 360 + "," + e + "%," + i + "%," + s + ")"
        }, t.BASE_64 = {
            A: 0,
            B: 1,
            C: 2,
            D: 3,
            E: 4,
            F: 5,
            G: 6,
            H: 7,
            I: 8,
            J: 9,
            K: 10,
            L: 11,
            M: 12,
            N: 13,
            O: 14,
            P: 15,
            Q: 16,
            R: 17,
            S: 18,
            T: 19,
            U: 20,
            V: 21,
            W: 22,
            X: 23,
            Y: 24,
            Z: 25,
            a: 26,
            b: 27,
            c: 28,
            d: 29,
            e: 30,
            f: 31,
            g: 32,
            h: 33,
            i: 34,
            j: 35,
            k: 36,
            l: 37,
            m: 38,
            n: 39,
            o: 40,
            p: 41,
            q: 42,
            r: 43,
            s: 44,
            t: 45,
            u: 46,
            v: 47,
            w: 48,
            x: 49,
            y: 50,
            z: 51,
            0: 52,
            1: 53,
            2: 54,
            3: 55,
            4: 56,
            5: 57,
            6: 58,
            7: 59,
            8: 60,
            9: 61,
            "+": 62,
            "/": 63
        }, t.STROKE_CAPS_MAP = ["butt", "round", "square"], t.STROKE_JOINTS_MAP = ["miter", "round", "bevel"];
        var s = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
        s.getContext && (t._ctx = s.getContext("2d"), s.width = s.height = 1), e.getInstructions = function () {
            return this._updateInstructions(), this._instructions
        };
        try {
            Object.defineProperties(e, {
                instructions: {
                    get: e.getInstructions
                }
            })
        } catch (t) {}
        e.isEmpty = function () {
            return !(this._instructions.length || this._activeInstructions.length)
        }, e.draw = function (t, e) {
            this._updateInstructions();
            for (var i = this._instructions, s = this._storeIndex, r = i.length; r > s; s++) i[s].exec(t, e)
        }, e.drawAsPath = function (t) {
            this._updateInstructions();
            for (var e, i = this._instructions, s = this._storeIndex, r = i.length; r > s; s++)(e = i[s]).path !== !1 && e.exec(t)
        }, e.moveTo = function (t, e) {
            return this.append(new i.MoveTo(t, e), !0)
        }, e.lineTo = function (t, e) {
            return this.append(new i.LineTo(t, e))
        }, e.arcTo = function (t, e, s, r, n) {
            return this.append(new i.ArcTo(t, e, s, r, n))
        }, e.arc = function (t, e, s, r, n, a) {
            return this.append(new i.Arc(t, e, s, r, n, a))
        }, e.quadraticCurveTo = function (t, e, s, r) {
            return this.append(new i.QuadraticCurveTo(t, e, s, r))
        }, e.bezierCurveTo = function (t, e, s, r, n, a) {
            return this.append(new i.BezierCurveTo(t, e, s, r, n, a))
        }, e.rect = function (t, e, s, r) {
            return this.append(new i.Rect(t, e, s, r))
        }, e.closePath = function () {
            return this._activeInstructions.length ? this.append(new i.ClosePath) : this
        }, e.clear = function () {
            return this._instructions.length = this._activeInstructions.length = this._commitIndex = 0, this._strokeStyle = this._oldStrokeStyle = this._stroke = this._fill = this._strokeDash = this._oldStrokeDash = null, this._dirty = this._strokeIgnoreScale = !1, this
        }, e.beginFill = function (t) {
            return this._setFill(t ? new i.Fill(t) : null)
        }, e.beginLinearGradientFill = function (t, e, s, r, n, a) {
            return this._setFill((new i.Fill).linearGradient(t, e, s, r, n, a))
        }, e.beginRadialGradientFill = function (t, e, s, r, n, a, o, h) {
            return this._setFill((new i.Fill).radialGradient(t, e, s, r, n, a, o, h))
        }, e.beginBitmapFill = function (t, e, s) {
            return this._setFill(new i.Fill(null, s).bitmap(t, e))
        }, e.endFill = function () {
            return this.beginFill()
        }, e.setStrokeStyle = function (t, e, s, r, n) {
            return this._updateInstructions(!0), this._strokeStyle = this.command = new i.StrokeStyle(t, e, s, r, n), this._stroke && (this._stroke.ignoreScale = n), this._strokeIgnoreScale = n, this
        }, e.setStrokeDash = function (t, e) {
            return this._updateInstructions(!0), this._strokeDash = this.command = new i.StrokeDash(t, e), this
        }, e.beginStroke = function (t) {
            return this._setStroke(t ? new i.Stroke(t) : null)
        }, e.beginLinearGradientStroke = function (t, e, s, r, n, a) {
            return this._setStroke((new i.Stroke).linearGradient(t, e, s, r, n, a))
        }, e.beginRadialGradientStroke = function (t, e, s, r, n, a, o, h) {
            return this._setStroke((new i.Stroke).radialGradient(t, e, s, r, n, a, o, h))
        }, e.beginBitmapStroke = function (t, e) {
            return this._setStroke((new i.Stroke).bitmap(t, e))
        }, e.endStroke = function () {
            return this.beginStroke()
        }, e.curveTo = e.quadraticCurveTo, e.drawRect = e.rect, e.drawRoundRect = function (t, e, i, s, r) {
            return this.drawRoundRectComplex(t, e, i, s, r, r, r, r)
        }, e.drawRoundRectComplex = function (t, e, s, r, n, a, o, h) {
            return this.append(new i.RoundRect(t, e, s, r, n, a, o, h))
        }, e.drawCircle = function (t, e, s) {
            return this.append(new i.Circle(t, e, s))
        }, e.drawEllipse = function (t, e, s, r) {
            return this.append(new i.Ellipse(t, e, s, r))
        }, e.drawPolyStar = function (t, e, s, r, n, a) {
            return this.append(new i.PolyStar(t, e, s, r, n, a))
        }, e.append = function (t, e) {
            return this._activeInstructions.push(t), this.command = t, e || (this._dirty = !0), this
        }, e.decodePath = function (e) {
            for (var i = [this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo, this.closePath], s = [2, 2, 4, 6, 0], r = 0, n = e.length, a = [], o = 0, h = 0, c = t.BASE_64; n > r;) {
                var u = e.charAt(r),
                    l = c[u],
                    d = l >> 3,
                    _ = i[d];
                if (!_ || 3 & l) throw "bad path data (@" + r + "): " + u;
                var p = s[d];
                d || (o = h = 0), a.length = 0, r++;
                for (var f = (l >> 2 & 1) + 2, g = 0; p > g; g++) {
                    var m = c[e.charAt(r)],
                        v = m >> 5 ? -1 : 1;
                    m = (31 & m) << 6 | c[e.charAt(r + 1)], 3 == f && (m = m << 6 | c[e.charAt(r + 2)]), m = v * m / 10, g % 2 ? o = m += o : h = m += h, a[g] = m, r += f
                }
                _.apply(this, a)
            }
            return this
        }, e.store = function () {
            return this._updateInstructions(!0), this._storeIndex = this._instructions.length, this
        }, e.unstore = function () {
            return this._storeIndex = 0, this
        }, e.clone = function () {
            var e = new t;
            return e.command = this.command, e._stroke = this._stroke, e._strokeStyle = this._strokeStyle, e._strokeDash = this._strokeDash, e._strokeIgnoreScale = this._strokeIgnoreScale, e._fill = this._fill, e._instructions = this._instructions.slice(), e._commitIndex = this._commitIndex, e._activeInstructions = this._activeInstructions.slice(), e._dirty = this._dirty, e._storeIndex = this._storeIndex, e
        }, e.toString = function () {
            return "[Graphics]"
        }, e.mt = e.moveTo, e.lt = e.lineTo, e.at = e.arcTo, e.bt = e.bezierCurveTo, e.qt = e.quadraticCurveTo, e.a = e.arc, e.r = e.rect, e.cp = e.closePath, e.c = e.clear, e.f = e.beginFill, e.lf = e.beginLinearGradientFill, e.rf = e.beginRadialGradientFill, e.bf = e.beginBitmapFill, e.ef = e.endFill, e.ss = e.setStrokeStyle, e.sd = e.setStrokeDash, e.s = e.beginStroke, e.ls = e.beginLinearGradientStroke, e.rs = e.beginRadialGradientStroke, e.bs = e.beginBitmapStroke, e.es = e.endStroke, e.dr = e.drawRect, e.rr = e.drawRoundRect, e.rc = e.drawRoundRectComplex, e.dc = e.drawCircle, e.de = e.drawEllipse, e.dp = e.drawPolyStar, e.p = e.decodePath, e._updateInstructions = function (e) {
            var i = this._instructions,
                s = this._activeInstructions,
                r = this._commitIndex;
            if (this._dirty && s.length) {
                i.length = r, i.push(t.beginCmd);
                var n = s.length,
                    a = i.length;
                i.length = a + n;
                for (var o = 0; n > o; o++) i[o + a] = s[o];
                this._fill && i.push(this._fill), this._stroke && (this._strokeDash !== this._oldStrokeDash && (this._oldStrokeDash = this._strokeDash, i.push(this._strokeDash)), this._strokeStyle !== this._oldStrokeStyle && (this._oldStrokeStyle = this._strokeStyle, i.push(this._strokeStyle)), i.push(this._stroke)), this._dirty = !1
            }
            e && (s.length = 0, this._commitIndex = i.length)
        }, e._setFill = function (t) {
            return this._updateInstructions(!0), this.command = this._fill = t, this
        }, e._setStroke = function (t) {
            return this._updateInstructions(!0), (this.command = this._stroke = t) && (t.ignoreScale = this._strokeIgnoreScale), this
        }, (i.LineTo = function (t, e) {
            this.x = t, this.y = e
        }).prototype.exec = function (t) {
            t.lineTo(this.x, this.y)
        }, (i.MoveTo = function (t, e) {
            this.x = t, this.y = e
        }).prototype.exec = function (t) {
            t.moveTo(this.x, this.y)
        }, (i.ArcTo = function (t, e, i, s, r) {
            this.x1 = t, this.y1 = e, this.x2 = i, this.y2 = s, this.radius = r
        }).prototype.exec = function (t) {
            t.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius)
        }, (i.Arc = function (t, e, i, s, r, n) {
            this.x = t, this.y = e, this.radius = i, this.startAngle = s, this.endAngle = r, this.anticlockwise = !!n
        }).prototype.exec = function (t) {
            t.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise)
        }, (i.QuadraticCurveTo = function (t, e, i, s) {
            this.cpx = t, this.cpy = e, this.x = i, this.y = s
        }).prototype.exec = function (t) {
            t.quadraticCurveTo(this.cpx, this.cpy, this.x, this.y)
        }, (i.BezierCurveTo = function (t, e, i, s, r, n) {
            this.cp1x = t, this.cp1y = e, this.cp2x = i, this.cp2y = s, this.x = r, this.y = n
        }).prototype.exec = function (t) {
            t.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.x, this.y)
        }, (i.Rect = function (t, e, i, s) {
            this.x = t, this.y = e, this.w = i, this.h = s
        }).prototype.exec = function (t) {
            t.rect(this.x, this.y, this.w, this.h)
        }, (i.ClosePath = function () {}).prototype.exec = function (t) {
            t.closePath()
        }, (i.BeginPath = function () {}).prototype.exec = function (t) {
            t.beginPath()
        }, e = (i.Fill = function (t, e) {
            this.style = t, this.matrix = e
        }).prototype, e.exec = function (t) {
            if (this.style) {
                t.fillStyle = this.style;
                var e = this.matrix;
                e && (t.save(), t.transform(e.a, e.b, e.c, e.d, e.tx, e.ty)), t.fill(), e && t.restore()
            }
        }, e.linearGradient = function (e, i, s, r, n, a) {
            for (var o = this.style = t._ctx.createLinearGradient(s, r, n, a), h = 0, c = e.length; c > h; h++) o.addColorStop(i[h], e[h]);
            return o.props = {
                colors: e,
                ratios: i,
                x0: s,
                y0: r,
                x1: n,
                y1: a,
                type: "linear"
            }, this
        }, e.radialGradient = function (e, i, s, r, n, a, o, h) {
            for (var c = this.style = t._ctx.createRadialGradient(s, r, n, a, o, h), u = 0, l = e.length; l > u; u++) c.addColorStop(i[u], e[u]);
            return c.props = {
                colors: e,
                ratios: i,
                x0: s,
                y0: r,
                r0: n,
                x1: a,
                y1: o,
                r1: h,
                type: "radial"
            }, this
        }, e.bitmap = function (e, i) {
            if (e.naturalWidth || e.getContext || e.readyState >= 2) {
                var s = this.style = t._ctx.createPattern(e, i || "");
                s.props = {
                    image: e,
                    repetition: i,
                    type: "bitmap"
                }
            }
            return this
        }, e.path = !1, e = (i.Stroke = function (t, e) {
            this.style = t, this.ignoreScale = e
        }).prototype, e.exec = function (t) {
            this.style && (t.strokeStyle = this.style, this.ignoreScale && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0)), t.stroke(), this.ignoreScale && t.restore())
        }, e.linearGradient = i.Fill.prototype.linearGradient, e.radialGradient = i.Fill.prototype.radialGradient, e.bitmap = i.Fill.prototype.bitmap, e.path = !1, e = (i.StrokeStyle = function (t, e, i, s, r) {
            this.width = t, this.caps = e, this.joints = i, this.miterLimit = s, this.ignoreScale = r
        }).prototype, e.exec = function (e) {
            e.lineWidth = null == this.width ? "1" : this.width, e.lineCap = null == this.caps ? "butt" : isNaN(this.caps) ? this.caps : t.STROKE_CAPS_MAP[this.caps], e.lineJoin = null == this.joints ? "miter" : isNaN(this.joints) ? this.joints : t.STROKE_JOINTS_MAP[this.joints], e.miterLimit = null == this.miterLimit ? "10" : this.miterLimit, e.ignoreScale = null != this.ignoreScale && this.ignoreScale
        }, e.path = !1, (i.StrokeDash = function (t, e) {
            this.segments = t, this.offset = e || 0
        }).prototype.exec = function (t) {
            t.setLineDash && (t.setLineDash(this.segments || i.StrokeDash.EMPTY_SEGMENTS), t.lineDashOffset = this.offset || 0)
        }, i.StrokeDash.EMPTY_SEGMENTS = [], (i.RoundRect = function (t, e, i, s, r, n, a, o) {
            this.x = t, this.y = e, this.w = i, this.h = s, this.radiusTL = r, this.radiusTR = n, this.radiusBR = a, this.radiusBL = o
        }).prototype.exec = function (t) {
            var e = (c > h ? h : c) / 2,
                i = 0,
                s = 0,
                r = 0,
                n = 0,
                a = this.x,
                o = this.y,
                h = this.w,
                c = this.h,
                u = this.radiusTL,
                l = this.radiusTR,
                d = this.radiusBR,
                _ = this.radiusBL;
            0 > u && (u *= i = -1), u > e && (u = e), 0 > l && (l *= s = -1), l > e && (l = e), 0 > d && (d *= r = -1), d > e && (d = e), 0 > _ && (_ *= n = -1), _ > e && (_ = e), t.moveTo(a + h - l, o), t.arcTo(a + h + l * s, o - l * s, a + h, o + l, l), t.lineTo(a + h, o + c - d), t.arcTo(a + h + d * r, o + c + d * r, a + h - d, o + c, d), t.lineTo(a + _, o + c), t.arcTo(a - _ * n, o + c + _ * n, a, o + c - _, _), t.lineTo(a, o + u), t.arcTo(a - u * i, o - u * i, a + u, o, u), t.closePath()
        }, (i.Circle = function (t, e, i) {
            this.x = t, this.y = e, this.radius = i
        }).prototype.exec = function (t) {
            t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        }, (i.Ellipse = function (t, e, i, s) {
            this.x = t, this.y = e, this.w = i, this.h = s
        }).prototype.exec = function (t) {
            var e = this.x,
                i = this.y,
                s = this.w,
                r = this.h,
                n = .5522848,
                a = s / 2 * n,
                o = r / 2 * n,
                h = e + s,
                c = i + r,
                u = e + s / 2,
                l = i + r / 2;
            t.moveTo(e, l), t.bezierCurveTo(e, l - o, u - a, i, u, i), t.bezierCurveTo(u + a, i, h, l - o, h, l), t.bezierCurveTo(h, l + o, u + a, c, u, c), t.bezierCurveTo(u - a, c, e, l + o, e, l)
        }, (i.PolyStar = function (t, e, i, s, r, n) {
            this.x = t, this.y = e, this.radius = i, this.sides = s, this.pointSize = r, this.angle = n
        }).prototype.exec = function (t) {
            var e = this.x,
                i = this.y,
                s = this.radius,
                r = (this.angle || 0) / 180 * Math.PI,
                n = this.sides,
                a = 1 - (this.pointSize || 0),
                o = Math.PI / n;
            t.moveTo(e + Math.cos(r) * s, i + Math.sin(r) * s);
            for (var h = 0; n > h; h++) r += o, 1 != a && t.lineTo(e + Math.cos(r) * s * a, i + Math.sin(r) * s * a), r += o, t.lineTo(e + Math.cos(r) * s, i + Math.sin(r) * s);
            t.closePath()
        }, t.beginCmd = new i.BeginPath, createjs.Graphics = t
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t() {
            this.EventDispatcher_constructor(), this.alpha = 1, this.cacheCanvas = null, this.cacheID = 0, this.id = createjs.UID.get(), this.mouseEnabled = !0, this.tickEnabled = !0, this.name = null, this.parent = null, this.regX = 0, this.regY = 0, this.rotation = 0, this.scaleX = 1, this.scaleY = 1, this.skewX = 0, this.skewY = 0, this.shadow = null, this.visible = !0, this.x = 0, this.y = 0, this.transformMatrix = null, this.compositeOperation = null, this.snapToPixel = !0, this.filters = null,
                this.mask = null, this.hitArea = null, this.cursor = null, this._cacheOffsetX = 0, this._cacheOffsetY = 0, this._filterOffsetX = 0, this._filterOffsetY = 0, this._cacheScale = 1, this._cacheDataURLID = 0, this._cacheDataURL = null, this._props = new createjs.DisplayProps, this._rectangle = new createjs.Rectangle, this._bounds = null
        }
        var e = createjs.extend(t, createjs.EventDispatcher);
        t._MOUSE_EVENTS = ["click", "dblclick", "mousedown", "mouseout", "mouseover", "pressmove", "pressup", "rollout", "rollover"], t.suppressCrossDomainErrors = !1, t._snapToPixelEnabled = !1;
        var i = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
        i.getContext && (t._hitTestCanvas = i, t._hitTestContext = i.getContext("2d"), i.width = i.height = 1), t._nextCacheID = 1, e.getStage = function () {
            for (var t = this, e = createjs.Stage; t.parent;) t = t.parent;
            return t instanceof e ? t : null
        };
        try {
            Object.defineProperties(e, {
                stage: {
                    get: e.getStage
                }
            })
        } catch (t) {}
        e.isVisible = function () {
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY)
        }, e.draw = function (t, e) {
            var i = this.cacheCanvas;
            if (e || !i) return !1;
            var s = this._cacheScale;
            return t.drawImage(i, this._cacheOffsetX + this._filterOffsetX, this._cacheOffsetY + this._filterOffsetY, i.width / s, i.height / s), !0
        }, e.updateContext = function (e) {
            var i = this,
                s = i.mask,
                r = i._props.matrix;
            s && s.graphics && !s.graphics.isEmpty() && (s.getMatrix(r), e.transform(r.a, r.b, r.c, r.d, r.tx, r.ty), s.graphics.drawAsPath(e), e.clip(), r.invert(), e.transform(r.a, r.b, r.c, r.d, r.tx, r.ty)), this.getMatrix(r);
            var n = r.tx,
                a = r.ty;
            t._snapToPixelEnabled && i.snapToPixel && (n = n + (0 > n ? -.5 : .5) | 0, a = a + (0 > a ? -.5 : .5) | 0), e.transform(r.a, r.b, r.c, r.d, n, a), e.globalAlpha *= i.alpha, i.compositeOperation && (e.globalCompositeOperation = i.compositeOperation), i.shadow && this._applyShadow(e, i.shadow)
        }, e.cache = function (t, e, i, s, r) {
            r = r || 1, this.cacheCanvas || (this.cacheCanvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")), this._cacheWidth = i, this._cacheHeight = s, this._cacheOffsetX = t, this._cacheOffsetY = e, this._cacheScale = r, this.updateCache()
        }, e.updateCache = function (e) {
            var i = this.cacheCanvas;
            if (!i) throw "cache() must be called before updateCache()";
            var s = this._cacheScale,
                r = this._cacheOffsetX * s,
                n = this._cacheOffsetY * s,
                a = this._cacheWidth,
                o = this._cacheHeight,
                h = i.getContext("2d"),
                c = this._getFilterBounds();
            r += this._filterOffsetX = c.x, n += this._filterOffsetY = c.y, a = Math.ceil(a * s) + c.width, o = Math.ceil(o * s) + c.height, a != i.width || o != i.height ? (i.width = a, i.height = o) : e || h.clearRect(0, 0, a + 1, o + 1), h.save(), h.globalCompositeOperation = e, h.setTransform(s, 0, 0, s, -r, -n), this.draw(h, !0), this._applyFilters(), h.restore(), this.cacheID = t._nextCacheID++
        }, e.uncache = function () {
            this._cacheDataURL = this.cacheCanvas = null, this.cacheID = this._cacheOffsetX = this._cacheOffsetY = this._filterOffsetX = this._filterOffsetY = 0, this._cacheScale = 1
        }, e.getCacheDataURL = function () {
            return this.cacheCanvas ? (this.cacheID != this._cacheDataURLID && (this._cacheDataURL = this.cacheCanvas.toDataURL()), this._cacheDataURL) : null
        }, e.localToGlobal = function (t, e, i) {
            return this.getConcatenatedMatrix(this._props.matrix).transformPoint(t, e, i || new createjs.Point)
        }, e.globalToLocal = function (t, e, i) {
            return this.getConcatenatedMatrix(this._props.matrix).invert().transformPoint(t, e, i || new createjs.Point)
        }, e.localToLocal = function (t, e, i, s) {
            return s = this.localToGlobal(t, e, s), i.globalToLocal(s.x, s.y, s)
        }, e.setTransform = function (t, e, i, s, r, n, a, o, h) {
            return this.x = t || 0, this.y = e || 0, this.scaleX = null == i ? 1 : i, this.scaleY = null == s ? 1 : s, this.rotation = r || 0, this.skewX = n || 0, this.skewY = a || 0, this.regX = o || 0, this.regY = h || 0, this
        }, e.getMatrix = function (t) {
            var e = this,
                i = t && t.identity() || new createjs.Matrix2D;
            return e.transformMatrix ? i.copy(e.transformMatrix) : i.appendTransform(e.x, e.y, e.scaleX, e.scaleY, e.rotation, e.skewX, e.skewY, e.regX, e.regY)
        }, e.getConcatenatedMatrix = function (t) {
            for (var e = this, i = this.getMatrix(t); e = e.parent;) i.prependMatrix(e.getMatrix(e._props.matrix));
            return i
        }, e.getConcatenatedDisplayProps = function (t) {
            t = t ? t.identity() : new createjs.DisplayProps;
            var e = this,
                i = e.getMatrix(t.matrix);
            do t.prepend(e.visible, e.alpha, e.shadow, e.compositeOperation), e != this && i.prependMatrix(e.getMatrix(e._props.matrix)); while (e = e.parent);
            return t
        }, e.hitTest = function (e, i) {
            var s = t._hitTestContext;
            s.setTransform(1, 0, 0, 1, -e, -i), this.draw(s);
            var r = this._testHit(s);
            return s.setTransform(1, 0, 0, 1, 0, 0), s.clearRect(0, 0, 2, 2), r
        }, e.set = function (t) {
            for (var e in t) this[e] = t[e];
            return this
        }, e.getBounds = function () {
            if (this._bounds) return this._rectangle.copy(this._bounds);
            var t = this.cacheCanvas;
            if (t) {
                var e = this._cacheScale;
                return this._rectangle.setValues(this._cacheOffsetX, this._cacheOffsetY, t.width / e, t.height / e)
            }
            return null
        }, e.getTransformedBounds = function () {
            return this._getBounds()
        }, e.setBounds = function (t, e, i, s) {
            null == t && (this._bounds = t), this._bounds = (this._bounds || new createjs.Rectangle).setValues(t, e, i, s)
        }, e.clone = function () {
            return this._cloneProps(new t)
        }, e.toString = function () {
            return "[DisplayObject (name=" + this.name + ")]"
        }, e._cloneProps = function (t) {
            return t.alpha = this.alpha, t.mouseEnabled = this.mouseEnabled, t.tickEnabled = this.tickEnabled, t.name = this.name, t.regX = this.regX, t.regY = this.regY, t.rotation = this.rotation, t.scaleX = this.scaleX, t.scaleY = this.scaleY, t.shadow = this.shadow, t.skewX = this.skewX, t.skewY = this.skewY, t.visible = this.visible, t.x = this.x, t.y = this.y, t.compositeOperation = this.compositeOperation, t.snapToPixel = this.snapToPixel, t.filters = null == this.filters ? null : this.filters.slice(0), t.mask = this.mask, t.hitArea = this.hitArea, t.cursor = this.cursor, t._bounds = this._bounds, t
        }, e._applyShadow = function (t, e) {
            e = e || Shadow.identity, t.shadowColor = e.color, t.shadowOffsetX = e.offsetX, t.shadowOffsetY = e.offsetY, t.shadowBlur = e.blur
        }, e._tick = function (t) {
            var e = this._listeners;
            e && e.tick && (t.target = null, t.propagationStopped = t.immediatePropagationStopped = !1, this.dispatchEvent(t))
        }, e._testHit = function (e) {
            try {
                var i = e.getImageData(0, 0, 1, 1).data[3] > 1
            } catch (e) {
                if (!t.suppressCrossDomainErrors) throw "An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images."
            }
            return i
        }, e._applyFilters = function () {
            if (this.filters && 0 != this.filters.length && this.cacheCanvas)
                for (var t = this.filters.length, e = this.cacheCanvas.getContext("2d"), i = this.cacheCanvas.width, s = this.cacheCanvas.height, r = 0; t > r; r++) this.filters[r].applyFilter(e, 0, 0, i, s)
        }, e._getFilterBounds = function (t) {
            var e, i = this.filters,
                s = this._rectangle.setValues(0, 0, 0, 0);
            if (!i || !(e = i.length)) return s;
            for (var r = 0; e > r; r++) {
                var n = this.filters[r];
                n.getBounds && n.getBounds(s)
            }
            return s
        }, e._getBounds = function (t, e) {
            return this._transformBounds(this.getBounds(), t, e)
        }, e._transformBounds = function (t, e, i) {
            if (!t) return t;
            var s = t.x,
                r = t.y,
                n = t.width,
                a = t.height,
                o = this._props.matrix;
            o = i ? o.identity() : this.getMatrix(o), (s || r) && o.appendTransform(0, 0, 1, 1, 0, 0, 0, -s, -r), e && o.prependMatrix(e);
            var h = n * o.a,
                c = n * o.b,
                u = a * o.c,
                l = a * o.d,
                d = o.tx,
                _ = o.ty,
                p = d,
                f = d,
                g = _,
                m = _;
            return (s = h + d) < p ? p = s : s > f && (f = s), (s = h + u + d) < p ? p = s : s > f && (f = s), (s = u + d) < p ? p = s : s > f && (f = s), (r = c + _) < g ? g = r : r > m && (m = r), (r = c + l + _) < g ? g = r : r > m && (m = r), (r = l + _) < g ? g = r : r > m && (m = r), t.setValues(p, g, f - p, m - g)
        }, e._hasMouseEventListener = function () {
            for (var e = t._MOUSE_EVENTS, i = 0, s = e.length; s > i; i++)
                if (this.hasEventListener(e[i])) return !0;
            return !!this.cursor
        }, createjs.DisplayObject = createjs.promote(t, "EventDispatcher")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t() {
            this.DisplayObject_constructor(), this.children = [], this.mouseChildren = !0, this.tickChildren = !0
        }
        var e = createjs.extend(t, createjs.DisplayObject);
        e.getNumChildren = function () {
            return this.children.length
        };
        try {
            Object.defineProperties(e, {
                numChildren: {
                    get: e.getNumChildren
                }
            })
        } catch (t) {}
        e.initialize = t, e.isVisible = function () {
            var t = this.cacheCanvas || this.children.length;
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && t)
        }, e.draw = function (t, e) {
            if (this.DisplayObject_draw(t, e)) return !0;
            for (var i = this.children.slice(), s = 0, r = i.length; r > s; s++) {
                var n = i[s];
                n.isVisible() && (t.save(), n.updateContext(t), n.draw(t), t.restore())
            }
            return !0
        }, e.addChild = function (t) {
            if (null == t) return t;
            var e = arguments.length;
            if (e > 1) {
                for (var i = 0; e > i; i++) this.addChild(arguments[i]);
                return arguments[e - 1]
            }
            return t.parent && t.parent.removeChild(t), t.parent = this, this.children.push(t), t.dispatchEvent("added"), t
        }, e.addChildAt = function (t, e) {
            var i = arguments.length,
                s = arguments[i - 1];
            if (0 > s || s > this.children.length) return arguments[i - 2];
            if (i > 2) {
                for (var r = 0; i - 1 > r; r++) this.addChildAt(arguments[r], s + r);
                return arguments[i - 2]
            }
            return t.parent && t.parent.removeChild(t), t.parent = this, this.children.splice(e, 0, t), t.dispatchEvent("added"), t
        }, e.removeChild = function (t) {
            var e = arguments.length;
            if (e > 1) {
                for (var i = !0, s = 0; e > s; s++) i = i && this.removeChild(arguments[s]);
                return i
            }
            return this.removeChildAt(createjs.indexOf(this.children, t))
        }, e.removeChildAt = function (t) {
            var e = arguments.length;
            if (e > 1) {
                for (var i = [], s = 0; e > s; s++) i[s] = arguments[s];
                i.sort(function (t, e) {
                    return e - t
                });
                for (var r = !0, s = 0; e > s; s++) r = r && this.removeChildAt(i[s]);
                return r
            }
            if (0 > t || t > this.children.length - 1) return !1;
            var n = this.children[t];
            return n && (n.parent = null), this.children.splice(t, 1), n.dispatchEvent("removed"), !0
        }, e.removeAllChildren = function () {
            for (var t = this.children; t.length;) this.removeChildAt(0)
        }, e.getChildAt = function (t) {
            return this.children[t]
        }, e.getChildByName = function (t) {
            for (var e = this.children, i = 0, s = e.length; s > i; i++)
                if (e[i].name == t) return e[i];
            return null
        }, e.sortChildren = function (t) {
            this.children.sort(t)
        }, e.getChildIndex = function (t) {
            return createjs.indexOf(this.children, t)
        }, e.swapChildrenAt = function (t, e) {
            var i = this.children,
                s = i[t],
                r = i[e];
            s && r && (i[t] = r, i[e] = s)
        }, e.swapChildren = function (t, e) {
            for (var i, s, r = this.children, n = 0, a = r.length; a > n && (r[n] == t && (i = n), r[n] == e && (s = n), null == i || null == s); n++);
            n != a && (r[i] = e, r[s] = t)
        }, e.setChildIndex = function (t, e) {
            var i = this.children,
                s = i.length;
            if (!(t.parent != this || 0 > e || e >= s)) {
                for (var r = 0; s > r && i[r] != t; r++);
                r != s && r != e && (i.splice(r, 1), i.splice(e, 0, t))
            }
        }, e.contains = function (t) {
            for (; t;) {
                if (t == this) return !0;
                t = t.parent
            }
            return !1
        }, e.hitTest = function (t, e) {
            return null != this.getObjectUnderPoint(t, e)
        }, e.getObjectsUnderPoint = function (t, e, i) {
            var s = [],
                r = this.localToGlobal(t, e);
            return this._getObjectsUnderPoint(r.x, r.y, s, i > 0, 1 == i), s
        }, e.getObjectUnderPoint = function (t, e, i) {
            var s = this.localToGlobal(t, e);
            return this._getObjectsUnderPoint(s.x, s.y, null, i > 0, 1 == i)
        }, e.getBounds = function () {
            return this._getBounds(null, !0)
        }, e.getTransformedBounds = function () {
            return this._getBounds()
        }, e.clone = function (e) {
            var i = this._cloneProps(new t);
            return e && this._cloneChildren(i), i
        }, e.toString = function () {
            return "[Container (name=" + this.name + ")]"
        }, e._tick = function (t) {
            if (this.tickChildren)
                for (var e = this.children.length - 1; e >= 0; e--) {
                    var i = this.children[e];
                    i.tickEnabled && i._tick && i._tick(t)
                }
            this.DisplayObject__tick(t)
        }, e._cloneChildren = function (t) {
            t.children.length && t.removeAllChildren();
            for (var e = t.children, i = 0, s = this.children.length; s > i; i++) {
                var r = this.children[i].clone(!0);
                r.parent = t, e.push(r)
            }
        }, e._getObjectsUnderPoint = function (e, i, s, r, n, a) {
            if (a = a || 0, !a && !this._testMask(this, e, i)) return null;
            var o, h = createjs.DisplayObject._hitTestContext;
            n = n || r && this._hasMouseEventListener();
            for (var c = this.children, u = c.length, l = u - 1; l >= 0; l--) {
                var d = c[l],
                    _ = d.hitArea;
                if (d.visible && (_ || d.isVisible()) && (!r || d.mouseEnabled) && (_ || this._testMask(d, e, i)))
                    if (!_ && d instanceof t) {
                        var p = d._getObjectsUnderPoint(e, i, s, r, n, a + 1);
                        if (!s && p) return r && !this.mouseChildren ? this : p
                    } else {
                        if (r && !n && !d._hasMouseEventListener()) continue;
                        var f = d.getConcatenatedDisplayProps(d._props);
                        if (o = f.matrix, _ && (o.appendMatrix(_.getMatrix(_._props.matrix)), f.alpha = _.alpha), h.globalAlpha = f.alpha, h.setTransform(o.a, o.b, o.c, o.d, o.tx - e, o.ty - i), (_ || d).draw(h), !this._testHit(h)) continue;
                        if (h.setTransform(1, 0, 0, 1, 0, 0), h.clearRect(0, 0, 2, 2), !s) return r && !this.mouseChildren ? this : d;
                        s.push(d)
                    }
            }
            return null
        }, e._testMask = function (t, e, i) {
            var s = t.mask;
            if (!s || !s.graphics || s.graphics.isEmpty()) return !0;
            var r = this._props.matrix,
                n = t.parent;
            r = n ? n.getConcatenatedMatrix(r) : r.identity(), r = s.getMatrix(s._props.matrix).prependMatrix(r);
            var a = createjs.DisplayObject._hitTestContext;
            return a.setTransform(r.a, r.b, r.c, r.d, r.tx - e, r.ty - i), s.graphics.drawAsPath(a), a.fillStyle = "#000", a.fill(), !!this._testHit(a) && (a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, 2, 2), !0)
        }, e._getBounds = function (t, e) {
            var i = this.DisplayObject_getBounds();
            if (i) return this._transformBounds(i, t, e);
            var s = this._props.matrix;
            s = e ? s.identity() : this.getMatrix(s), t && s.prependMatrix(t);
            for (var r = this.children.length, n = null, a = 0; r > a; a++) {
                var o = this.children[a];
                o.visible && (i = o._getBounds(s)) && (n ? n.extend(i.x, i.y, i.width, i.height) : n = i.clone())
            }
            return n
        }, createjs.Container = createjs.promote(t, "DisplayObject")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t) {
            this.Container_constructor(), this.autoClear = !0, this.canvas = "string" == typeof t ? document.getElementById(t) : t, this.mouseX = 0, this.mouseY = 0, this.drawRect = null, this.snapToPixelEnabled = !1, this.mouseInBounds = !1, this.tickOnUpdate = !0, this.mouseMoveOutside = !1, this.preventSelection = !0, this._pointerData = {}, this._pointerCount = 0, this._primaryPointerID = null, this._mouseOverIntervalID = null, this._nextStage = null, this._prevStage = null, this.enableDOMEvents(!0)
        }
        var e = createjs.extend(t, createjs.Container);
        e._get_nextStage = function () {
            return this._nextStage
        }, e._set_nextStage = function (t) {
            this._nextStage && (this._nextStage._prevStage = null), t && (t._prevStage = this), this._nextStage = t
        };
        try {
            Object.defineProperties(e, {
                nextStage: {
                    get: e._get_nextStage,
                    set: e._set_nextStage
                }
            })
        } catch (t) {}
        e.update = function (t) {
            if (this.canvas && (this.tickOnUpdate && this.tick(t), this.dispatchEvent("drawstart", !1, !0) !== !1)) {
                createjs.DisplayObject._snapToPixelEnabled = this.snapToPixelEnabled;
                var e = this.drawRect,
                    i = this.canvas.getContext("2d");
                i.setTransform(1, 0, 0, 1, 0, 0), this.autoClear && (e ? i.clearRect(e.x, e.y, e.width, e.height) : i.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1)), i.save(), this.drawRect && (i.beginPath(), i.rect(e.x, e.y, e.width, e.height), i.clip()), this.updateContext(i), this.draw(i, !1), i.restore(), this.dispatchEvent("drawend")
            }
        }, e.tick = function (t) {
            if (this.tickEnabled && this.dispatchEvent("tickstart", !1, !0) !== !1) {
                var e = new createjs.Event("tick");
                if (t)
                    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                this._tick(e), this.dispatchEvent("tickend")
            }
        }, e.handleEvent = function (t) {
            "tick" == t.type && this.update(t)
        }, e.clear = function () {
            if (this.canvas) {
                var t = this.canvas.getContext("2d");
                t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1)
            }
        }, e.toDataURL = function (t, e) {
            var i, s = this.canvas.getContext("2d"),
                r = this.canvas.width,
                n = this.canvas.height;
            if (t) {
                i = s.getImageData(0, 0, r, n);
                var a = s.globalCompositeOperation;
                s.globalCompositeOperation = "destination-over", s.fillStyle = t, s.fillRect(0, 0, r, n)
            }
            var o = this.canvas.toDataURL(e || "image/png");
            return t && (s.putImageData(i, 0, 0), s.globalCompositeOperation = a), o
        }, e.enableMouseOver = function (t) {
            if (this._mouseOverIntervalID && (clearInterval(this._mouseOverIntervalID), this._mouseOverIntervalID = null, 0 == t && this._testMouseOver(!0)), null == t) t = 20;
            else if (0 >= t) return;
            var e = this;
            this._mouseOverIntervalID = setInterval(function () {
                e._testMouseOver()
            }, 1e3 / Math.min(50, t))
        }, e.enableDOMEvents = function (t) {
            null == t && (t = !0);
            var e, i, s = this._eventListeners;
            if (!t && s) {
                for (e in s) i = s[e], i.t.removeEventListener(e, i.f, !1);
                this._eventListeners = null
            } else if (t && !s && this.canvas) {
                var r = window.addEventListener ? window : document,
                    n = this;
                s = this._eventListeners = {}, s.mouseup = {
                    t: r,
                    f: function (t) {
                        n._handleMouseUp(t)
                    }
                }, s.mousemove = {
                    t: r,
                    f: function (t) {
                        n._handleMouseMove(t)
                    }
                }, s.dblclick = {
                    t: this.canvas,
                    f: function (t) {
                        n._handleDoubleClick(t)
                    }
                }, s.mousedown = {
                    t: this.canvas,
                    f: function (t) {
                        n._handleMouseDown(t)
                    }
                };
                for (e in s) i = s[e], i.t.addEventListener(e, i.f, !1)
            }
        }, e.clone = function () {
            throw "Stage cannot be cloned."
        }, e.toString = function () {
            return "[Stage (name=" + this.name + ")]"
        }, e._getElementRect = function (t) {
            var e;
            try {
                e = t.getBoundingClientRect()
            } catch (i) {
                e = {
                    top: t.offsetTop,
                    left: t.offsetLeft,
                    width: t.offsetWidth,
                    height: t.offsetHeight
                }
            }
            var i = (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || document.body.clientLeft || 0),
                s = (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || document.body.clientTop || 0),
                r = window.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle,
                n = parseInt(r.paddingLeft) + parseInt(r.borderLeftWidth),
                a = parseInt(r.paddingTop) + parseInt(r.borderTopWidth),
                o = parseInt(r.paddingRight) + parseInt(r.borderRightWidth),
                h = parseInt(r.paddingBottom) + parseInt(r.borderBottomWidth);
            return {
                left: e.left + i + n,
                right: e.right + i - o,
                top: e.top + s + a,
                bottom: e.bottom + s - h
            }
        }, e._getPointerData = function (t) {
            var e = this._pointerData[t];
            return e || (e = this._pointerData[t] = {
                x: 0,
                y: 0
            }), e
        }, e._handleMouseMove = function (t) {
            t || (t = window.event), this._handlePointerMove(-1, t, t.pageX, t.pageY)
        }, e._handlePointerMove = function (t, e, i, s, r) {
            if ((!this._prevStage || void 0 !== r) && this.canvas) {
                var n = this._nextStage,
                    a = this._getPointerData(t),
                    o = a.inBounds;
                this._updatePointerPosition(t, e, i, s), (o || a.inBounds || this.mouseMoveOutside) && (-1 === t && a.inBounds == !o && this._dispatchMouseEvent(this, o ? "mouseleave" : "mouseenter", !1, t, a, e), this._dispatchMouseEvent(this, "stagemousemove", !1, t, a, e), this._dispatchMouseEvent(a.target, "pressmove", !0, t, a, e)), n && n._handlePointerMove(t, e, i, s, null)
            }
        }, e._updatePointerPosition = function (t, e, i, s) {
            var r = this._getElementRect(this.canvas);
            i -= r.left, s -= r.top;
            var n = this.canvas.width,
                a = this.canvas.height;
            i /= (r.right - r.left) / n, s /= (r.bottom - r.top) / a;
            var o = this._getPointerData(t);
            (o.inBounds = i >= 0 && s >= 0 && n - 1 >= i && a - 1 >= s) ? (o.x = i, o.y = s) : this.mouseMoveOutside && (o.x = 0 > i ? 0 : i > n - 1 ? n - 1 : i, o.y = 0 > s ? 0 : s > a - 1 ? a - 1 : s), o.posEvtObj = e, o.rawX = i, o.rawY = s, (t === this._primaryPointerID || -1 === t) && (this.mouseX = o.x, this.mouseY = o.y, this.mouseInBounds = o.inBounds)
        }, e._handleMouseUp = function (t) {
            this._handlePointerUp(-1, t, !1)
        }, e._handlePointerUp = function (t, e, i, s) {
            var r = this._nextStage,
                n = this._getPointerData(t);
            if (!this._prevStage || void 0 !== s) {
                var a = null,
                    o = n.target;
                s || !o && !r || (a = this._getObjectsUnderPoint(n.x, n.y, null, !0)), n.down && (this._dispatchMouseEvent(this, "stagemouseup", !1, t, n, e, a), n.down = !1), a == o && this._dispatchMouseEvent(o, "click", !0, t, n, e), this._dispatchMouseEvent(o, "pressup", !0, t, n, e), i ? (t == this._primaryPointerID && (this._primaryPointerID = null), delete this._pointerData[t]) : n.target = null, r && r._handlePointerUp(t, e, i, s || a && this)
            }
        }, e._handleMouseDown = function (t) {
            this._handlePointerDown(-1, t, t.pageX, t.pageY)
        }, e._handlePointerDown = function (t, e, i, s, r) {
            this.preventSelection && e.preventDefault(), (null == this._primaryPointerID || -1 === t) && (this._primaryPointerID = t), null != s && this._updatePointerPosition(t, e, i, s);
            var n = null,
                a = this._nextStage,
                o = this._getPointerData(t);
            r || (n = o.target = this._getObjectsUnderPoint(o.x, o.y, null, !0)), o.inBounds && (this._dispatchMouseEvent(this, "stagemousedown", !1, t, o, e, n), o.down = !0), this._dispatchMouseEvent(n, "mousedown", !0, t, o, e), a && a._handlePointerDown(t, e, i, s, r || n && this)
        }, e._testMouseOver = function (t, e, i) {
            if (!this._prevStage || void 0 !== e) {
                var s = this._nextStage;
                if (!this._mouseOverIntervalID) return void(s && s._testMouseOver(t, e, i));
                var r = this._getPointerData(-1);
                if (r && (t || this.mouseX != this._mouseOverX || this.mouseY != this._mouseOverY || !this.mouseInBounds)) {
                    var n, a, o, h = r.posEvtObj,
                        c = i || h && h.target == this.canvas,
                        u = null,
                        l = -1,
                        d = "";
                    !e && (t || this.mouseInBounds && c) && (u = this._getObjectsUnderPoint(this.mouseX, this.mouseY, null, !0), this._mouseOverX = this.mouseX, this._mouseOverY = this.mouseY);
                    var _ = this._mouseOverTarget || [],
                        p = _[_.length - 1],
                        f = this._mouseOverTarget = [];
                    for (n = u; n;) f.unshift(n), d || (d = n.cursor), n = n.parent;
                    for (this.canvas.style.cursor = d, !e && i && (i.canvas.style.cursor = d), a = 0, o = f.length; o > a && f[a] == _[a]; a++) l = a;
                    for (p != u && this._dispatchMouseEvent(p, "mouseout", !0, -1, r, h, u), a = _.length - 1; a > l; a--) this._dispatchMouseEvent(_[a], "rollout", !1, -1, r, h, u);
                    for (a = f.length - 1; a > l; a--) this._dispatchMouseEvent(f[a], "rollover", !1, -1, r, h, p);
                    p != u && this._dispatchMouseEvent(u, "mouseover", !0, -1, r, h, p), s && s._testMouseOver(t, e || u && this, i || c && this)
                }
            }
        }, e._handleDoubleClick = function (t, e) {
            var i = null,
                s = this._nextStage,
                r = this._getPointerData(-1);
            e || (i = this._getObjectsUnderPoint(r.x, r.y, null, !0), this._dispatchMouseEvent(i, "dblclick", !0, -1, r, t)), s && s._handleDoubleClick(t, e || i && this)
        }, e._dispatchMouseEvent = function (t, e, i, s, r, n, a) {
            if (t && (i || t.hasEventListener(e))) {
                var o = new createjs.MouseEvent(e, i, (!1), r.x, r.y, n, s, s === this._primaryPointerID || -1 === s, r.rawX, r.rawY, a);
                t.dispatchEvent(o)
            }
        }, createjs.Stage = createjs.promote(t, "Container")
    }(), this.createjs = this.createjs || {},
    function () {
        function t(t) {
            this.DisplayObject_constructor(), "string" == typeof t ? (this.image = document.createElement("img"), this.image.src = t) : this.image = t, this.sourceRect = null
        }
        var e = createjs.extend(t, createjs.DisplayObject);
        e.initialize = t, e.isVisible = function () {
            var t = this.image,
                e = this.cacheCanvas || t && (t.naturalWidth || t.getContext || t.readyState >= 2);
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && e)
        }, e.draw = function (t, e) {
            if (this.DisplayObject_draw(t, e) || !this.image) return !0;
            var i = this.image,
                s = this.sourceRect;
            if (s) {
                var r = s.x,
                    n = s.y,
                    a = r + s.width,
                    o = n + s.height,
                    h = 0,
                    c = 0,
                    u = i.width,
                    l = i.height;
                0 > r && (h -= r, r = 0), a > u && (a = u), 0 > n && (c -= n, n = 0), o > l && (o = l), t.drawImage(i, r, n, a - r, o - n, h, c, a - r, o - n)
            } else t.drawImage(i, 0, 0);
            return !0
        }, e.getBounds = function () {
            var t = this.DisplayObject_getBounds();
            if (t) return t;
            var e = this.image,
                i = this.sourceRect || e,
                s = e && (e.naturalWidth || e.getContext || e.readyState >= 2);
            return s ? this._rectangle.setValues(0, 0, i.width, i.height) : null
        }, e.clone = function () {
            var e = new t(this.image);
            return this.sourceRect && (e.sourceRect = this.sourceRect.clone()), this._cloneProps(e), e
        }, e.toString = function () {
            return "[Bitmap (name=" + this.name + ")]"
        }, createjs.Bitmap = createjs.promote(t, "DisplayObject")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t, e) {
            this.DisplayObject_constructor(), this.currentFrame = 0, this.currentAnimation = null, this.paused = !0, this.spriteSheet = t, this.currentAnimationFrame = 0, this.framerate = 0, this._animation = null, this._currentFrame = null, this._skipAdvance = !1, null != e && this.gotoAndPlay(e)
        }
        var e = createjs.extend(t, createjs.DisplayObject);
        e.initialize = t, e.isVisible = function () {
            var t = this.cacheCanvas || this.spriteSheet.complete;
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && t)
        }, e.draw = function (t, e) {
            if (this.DisplayObject_draw(t, e)) return !0;
            this._normalizeFrame();
            var i = this.spriteSheet.getFrame(0 | this._currentFrame);
            if (!i) return !1;
            var s = i.rect;
            return s.width && s.height && t.drawImage(i.image, s.x, s.y, s.width, s.height, -i.regX, -i.regY, s.width, s.height), !0
        }, e.play = function () {
            this.paused = !1
        }, e.stop = function () {
            this.paused = !0
        }, e.gotoAndPlay = function (t) {
            this.paused = !1, this._skipAdvance = !0, this._goto(t)
        }, e.gotoAndStop = function (t) {
            this.paused = !0, this._goto(t)
        }, e.advance = function (t) {
            var e = this.framerate || this.spriteSheet.framerate,
                i = e && null != t ? t / (1e3 / e) : 1;
            this._normalizeFrame(i)
        }, e.getBounds = function () {
            return this.DisplayObject_getBounds() || this.spriteSheet.getFrameBounds(this.currentFrame, this._rectangle)
        }, e.clone = function () {
            return this._cloneProps(new t(this.spriteSheet))
        }, e.toString = function () {
            return "[Sprite (name=" + this.name + ")]"
        }, e._cloneProps = function (t) {
            return this.DisplayObject__cloneProps(t), t.currentFrame = this.currentFrame, t.currentAnimation = this.currentAnimation, t.paused = this.paused, t.currentAnimationFrame = this.currentAnimationFrame, t.framerate = this.framerate, t._animation = this._animation, t._currentFrame = this._currentFrame, t._skipAdvance = this._skipAdvance, t
        }, e._tick = function (t) {
            this.paused || (this._skipAdvance || this.advance(t && t.delta), this._skipAdvance = !1), this.DisplayObject__tick(t)
        }, e._normalizeFrame = function (t) {
            t = t || 0;
            var e, i = this._animation,
                s = this.paused,
                r = this._currentFrame;
            if (i) {
                var n = i.speed || 1,
                    a = this.currentAnimationFrame;
                if (e = i.frames.length, a + t * n >= e) {
                    var o = i.next;
                    if (this._dispatchAnimationEnd(i, r, s, o, e - 1)) return;
                    if (o) return this._goto(o, t - (e - a) / n);
                    this.paused = !0, a = i.frames.length - 1
                } else a += t * n;
                this.currentAnimationFrame = a, this._currentFrame = i.frames[0 | a]
            } else if (r = this._currentFrame += t, e = this.spriteSheet.getNumFrames(), r >= e && e > 0 && !this._dispatchAnimationEnd(i, r, s, e - 1) && (this._currentFrame -= e) >= e) return this._normalizeFrame();
            r = 0 | this._currentFrame, this.currentFrame != r && (this.currentFrame = r, this.dispatchEvent("change"))
        }, e._dispatchAnimationEnd = function (t, e, i, s, r) {
            var n = t ? t.name : null;
            if (this.hasEventListener("animationend")) {
                var a = new createjs.Event("animationend");
                a.name = n, a.next = s, this.dispatchEvent(a)
            }
            var o = this._animation != t || this._currentFrame != e;
            return o || i || !this.paused || (this.currentAnimationFrame = r, o = !0), o
        }, e._goto = function (t, e) {
            if (this.currentAnimationFrame = 0, isNaN(t)) {
                var i = this.spriteSheet.getAnimation(t);
                i && (this._animation = i, this.currentAnimation = t, this._normalizeFrame(e))
            } else this.currentAnimation = this._animation = null, this._currentFrame = t, this._normalizeFrame()
        }, createjs.Sprite = createjs.promote(t, "DisplayObject")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t) {
            this.DisplayObject_constructor(), this.graphics = t ? t : new createjs.Graphics
        }
        var e = createjs.extend(t, createjs.DisplayObject);
        e.isVisible = function () {
            var t = this.cacheCanvas || this.graphics && !this.graphics.isEmpty();
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && t)
        }, e.draw = function (t, e) {
            return !!this.DisplayObject_draw(t, e) || (this.graphics.draw(t, this), !0)
        }, e.clone = function (e) {
            var i = e && this.graphics ? this.graphics.clone() : this.graphics;
            return this._cloneProps(new t(i))
        }, e.toString = function () {
            return "[Shape (name=" + this.name + ")]"
        }, createjs.Shape = createjs.promote(t, "DisplayObject")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t, e, i) {
            this.DisplayObject_constructor(), this.text = t, this.font = e, this.color = i, this.textAlign = "left", this.textBaseline = "top", this.maxWidth = null, this.outline = 0, this.lineHeight = 0, this.lineWidth = null
        }
        var e = createjs.extend(t, createjs.DisplayObject),
            i = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
        i.getContext && (t._workingContext = i.getContext("2d"), i.width = i.height = 1), t.H_OFFSETS = {
            start: 0,
            left: 0,
            center: -.5,
            end: -1,
            right: -1
        }, t.V_OFFSETS = {
            top: 0,
            hanging: -.01,
            middle: -.4,
            alphabetic: -.8,
            ideographic: -.85,
            bottom: -1
        }, e.isVisible = function () {
            var t = this.cacheCanvas || null != this.text && "" !== this.text;
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && t)
        }, e.draw = function (t, e) {
            if (this.DisplayObject_draw(t, e)) return !0;
            var i = this.color || "#000";
            return this.outline ? (t.strokeStyle = i, t.lineWidth = 1 * this.outline) : t.fillStyle = i, this._drawText(this._prepContext(t)), !0
        }, e.getMeasuredWidth = function () {
            return this._getMeasuredWidth(this.text)
        }, e.getMeasuredLineHeight = function () {
            return 1.2 * this._getMeasuredWidth("M")
        }, e.getMeasuredHeight = function () {
            return this._drawText(null, {}).height
        }, e.getBounds = function () {
            var e = this.DisplayObject_getBounds();
            if (e) return e;
            if (null == this.text || "" === this.text) return null;
            var i = this._drawText(null, {}),
                s = this.maxWidth && this.maxWidth < i.width ? this.maxWidth : i.width,
                r = s * t.H_OFFSETS[this.textAlign || "left"],
                n = this.lineHeight || this.getMeasuredLineHeight(),
                a = n * t.V_OFFSETS[this.textBaseline || "top"];
            return this._rectangle.setValues(r, a, s, i.height)
        }, e.getMetrics = function () {
            var e = {
                lines: []
            };
            return e.lineHeight = this.lineHeight || this.getMeasuredLineHeight(), e.vOffset = e.lineHeight * t.V_OFFSETS[this.textBaseline || "top"], this._drawText(null, e, e.lines)
        }, e.clone = function () {
            return this._cloneProps(new t(this.text, this.font, this.color))
        }, e.toString = function () {
            return "[Text (text=" + (this.text.length > 20 ? this.text.substr(0, 17) + "..." : this.text) + ")]"
        }, e._cloneProps = function (t) {
            return this.DisplayObject__cloneProps(t), t.textAlign = this.textAlign, t.textBaseline = this.textBaseline, t.maxWidth = this.maxWidth, t.outline = this.outline, t.lineHeight = this.lineHeight, t.lineWidth = this.lineWidth, t
        }, e._prepContext = function (t) {
            return t.font = this.font || "10px sans-serif", t.textAlign = this.textAlign || "left", t.textBaseline = this.textBaseline || "top", t
        }, e._drawText = function (e, i, s) {
            var r = !!e;
            r || (e = t._workingContext, e.save(), this._prepContext(e));
            for (var n = this.lineHeight || this.getMeasuredLineHeight(), a = 0, o = 0, h = String(this.text).split(/(?:\r\n|\r|\n)/), c = 0, u = h.length; u > c; c++) {
                var l = h[c],
                    d = null;
                if (null != this.lineWidth && (d = e.measureText(l).width) > this.lineWidth) {
                    var _ = l.split(/(\s)/);
                    l = _[0], d = e.measureText(l).width;
                    for (var p = 1, f = _.length; f > p; p += 2) {
                        var g = e.measureText(_[p] + _[p + 1]).width;
                        d + g > this.lineWidth ? (r && this._drawTextLine(e, l, o * n), s && s.push(l), d > a && (a = d), l = _[p + 1], d = e.measureText(l).width, o++) : (l += _[p] + _[p + 1], d += g)
                    }
                }
                r && this._drawTextLine(e, l, o * n), s && s.push(l), i && null == d && (d = e.measureText(l).width), d > a && (a = d), o++
            }
            return i && (i.width = a, i.height = o * n), r || e.restore(), i
        }, e._drawTextLine = function (t, e, i) {
            this.outline ? t.strokeText(e, 0, i, this.maxWidth || 65535) : t.fillText(e, 0, i, this.maxWidth || 65535)
        }, e._getMeasuredWidth = function (e) {
            var i = t._workingContext;
            i.save();
            var s = this._prepContext(i).measureText(e).width;
            return i.restore(), s
        }, createjs.Text = createjs.promote(t, "DisplayObject")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t, e) {
            this.Container_constructor(), this.text = t || "", this.spriteSheet = e, this.lineHeight = 0, this.letterSpacing = 0, this.spaceWidth = 0, this._oldProps = {
                text: 0,
                spriteSheet: 0,
                lineHeight: 0,
                letterSpacing: 0,
                spaceWidth: 0
            }
        }
        var e = createjs.extend(t, createjs.Container);
        t.maxPoolSize = 100, t._spritePool = [], e.draw = function (t, e) {
            this.DisplayObject_draw(t, e) || (this._updateText(), this.Container_draw(t, e))
        }, e.getBounds = function () {
            return this._updateText(), this.Container_getBounds()
        }, e.isVisible = function () {
            var t = this.cacheCanvas || this.spriteSheet && this.spriteSheet.complete && this.text;
            return !!(this.visible && this.alpha > 0 && 0 !== this.scaleX && 0 !== this.scaleY && t)
        }, e.clone = function () {
            return this._cloneProps(new t(this.text, this.spriteSheet))
        }, e.addChild = e.addChildAt = e.removeChild = e.removeChildAt = e.removeAllChildren = function () {}, e._cloneProps = function (t) {
            return this.Container__cloneProps(t), t.lineHeight = this.lineHeight, t.letterSpacing = this.letterSpacing, t.spaceWidth = this.spaceWidth, t
        }, e._getFrameIndex = function (t, e) {
            var i, s = e.getAnimation(t);
            return s || (t != (i = t.toUpperCase()) || t != (i = t.toLowerCase()) || (i = null), i && (s = e.getAnimation(i))), s && s.frames[0]
        }, e._getFrame = function (t, e) {
            var i = this._getFrameIndex(t, e);
            return null == i ? i : e.getFrame(i)
        }, e._getLineHeight = function (t) {
            var e = this._getFrame("1", t) || this._getFrame("T", t) || this._getFrame("L", t) || t.getFrame(0);
            return e ? e.rect.height : 1
        }, e._getSpaceWidth = function (t) {
            var e = this._getFrame("1", t) || this._getFrame("l", t) || this._getFrame("e", t) || this._getFrame("a", t) || t.getFrame(0);
            return e ? e.rect.width : 1
        }, e._updateText = function () {
            var e, i = 0,
                s = 0,
                r = this._oldProps,
                n = !1,
                a = this.spaceWidth,
                o = this.lineHeight,
                h = this.spriteSheet,
                c = t._spritePool,
                u = this.children,
                l = 0,
                d = u.length;
            for (var _ in r) r[_] != this[_] && (r[_] = this[_], n = !0);
            if (n) {
                var p = !!this._getFrame(" ", h);
                p || a || (a = this._getSpaceWidth(h)), o || (o = this._getLineHeight(h));
                for (var f = 0, g = this.text.length; g > f; f++) {
                    var m = this.text.charAt(f);
                    if (" " != m || p)
                        if ("\n" != m && "\r" != m) {
                            var v = this._getFrameIndex(m, h);
                            null != v && (d > l ? e = u[l] : (u.push(e = c.length ? c.pop() : new createjs.Sprite), e.parent = this, d++), e.spriteSheet = h, e.gotoAndStop(v), e.x = i, e.y = s, l++, i += e.getBounds().width + this.letterSpacing)
                        } else "\r" == m && "\n" == this.text.charAt(f + 1) && f++, i = 0, s += o;
                    else i += a
                }
                for (; d > l;) c.push(e = u.pop()), e.parent = null, d--;
                c.length > t.maxPoolSize && (c.length = t.maxPoolSize)
            }
        }, createjs.BitmapText = createjs.promote(t, "Container")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(e, i, s, r) {
            this.Container_constructor(), !t.inited && t.init(), this.mode = e || t.INDEPENDENT, this.startPosition = i || 0, this.loop = s, this.currentFrame = 0, this.timeline = new createjs.Timeline(null, r, {
                paused: !0,
                position: i,
                useTicks: !0
            }), this.paused = !1, this.actionsEnabled = !0, this.autoReset = !0, this.frameBounds = this.frameBounds || null, this.framerate = null, this._synchOffset = 0, this._prevPos = -1, this._prevPosition = 0, this._t = 0, this._managed = {}
        }

        function e() {
            throw "MovieClipPlugin cannot be instantiated."
        }
        var i = createjs.extend(t, createjs.Container);
        t.INDEPENDENT = "independent", t.SINGLE_FRAME = "single", t.SYNCHED = "synched", t.inited = !1, t.init = function () {
            t.inited || (e.install(), t.inited = !0)
        }, i.getLabels = function () {
            return this.timeline.getLabels()
        }, i.getCurrentLabel = function () {
            return this._updateTimeline(), this.timeline.getCurrentLabel()
        }, i.getDuration = function () {
            return this.timeline.duration;
        };
        try {
            Object.defineProperties(i, {
                labels: {
                    get: i.getLabels
                },
                currentLabel: {
                    get: i.getCurrentLabel
                },
                totalFrames: {
                    get: i.getDuration
                },
                duration: {
                    get: i.getDuration
                }
            })
        } catch (t) {}
        i.initialize = t, i.isVisible = function () {
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY)
        }, i.draw = function (t, e) {
            return !!this.DisplayObject_draw(t, e) || (this._updateTimeline(), this.Container_draw(t, e), !0)
        }, i.play = function () {
            this.paused = !1
        }, i.stop = function () {
            this.paused = !0
        }, i.gotoAndPlay = function (t) {
            this.paused = !1, this._goto(t)
        }, i.gotoAndStop = function (t) {
            this.paused = !0, this._goto(t)
        }, i.advance = function (e) {
            var i = t.INDEPENDENT;
            if (this.mode == i) {
                for (var s = this, r = s.framerate;
                    (s = s.parent) && null == r;) s.mode == i && (r = s._framerate);
                this._framerate = r;
                var n = null != r && -1 != r && null != e ? e / (1e3 / r) + this._t : 1,
                    a = 0 | n;
                for (this._t = n - a; !this.paused && a--;) this._prevPosition = this._prevPos < 0 ? 0 : this._prevPosition + 1, this._updateTimeline()
            }
        }, i.clone = function () {
            throw "MovieClip cannot be cloned."
        }, i.toString = function () {
            return "[MovieClip (name=" + this.name + ")]"
        }, i._tick = function (t) {
            this.advance(t && t.delta), this.Container__tick(t)
        }, i._goto = function (t) {
            var e = this.timeline.resolve(t);
            null != e && (-1 == this._prevPos && (this._prevPos = NaN), this._prevPosition = e, this._t = 0, this._updateTimeline())
        }, i._reset = function () {
            this._prevPos = -1, this._t = this.currentFrame = 0, this.paused = !1
        }, i._updateTimeline = function () {
            var e = this.timeline,
                i = this.mode != t.INDEPENDENT;
            e.loop = null == this.loop || this.loop;
            var s = i ? this.startPosition + (this.mode == t.SINGLE_FRAME ? 0 : this._synchOffset) : this._prevPos < 0 ? 0 : this._prevPosition,
                r = i || !this.actionsEnabled ? createjs.Tween.NONE : null;
            if (this.currentFrame = e._calcPosition(s), e.setPosition(s, r), this._prevPosition = e._prevPosition, this._prevPos != e._prevPos) {
                this.currentFrame = this._prevPos = e._prevPos;
                for (var n in this._managed) this._managed[n] = 1;
                for (var a = e._tweens, o = 0, h = a.length; h > o; o++) {
                    var c = a[o],
                        u = c._target;
                    if (u != this && !c.passive) {
                        var l = c._stepPosition;
                        u instanceof createjs.DisplayObject ? this._addManagedChild(u, l) : this._setState(u.state, l)
                    }
                }
                var d = this.children;
                for (o = d.length - 1; o >= 0; o--) {
                    var _ = d[o].id;
                    1 == this._managed[_] && (this.removeChildAt(o), delete this._managed[_])
                }
            }
        }, i._setState = function (t, e) {
            if (t)
                for (var i = t.length - 1; i >= 0; i--) {
                    var s = t[i],
                        r = s.t,
                        n = s.p;
                    for (var a in n) r[a] = n[a];
                    this._addManagedChild(r, e)
                }
        }, i._addManagedChild = function (e, i) {
            e._off || (this.addChildAt(e, 0), e instanceof t && (e._synchOffset = i, e.mode == t.INDEPENDENT && e.autoReset && !this._managed[e.id] && e._reset()), this._managed[e.id] = 2)
        }, i._getBounds = function (t, e) {
            var i = this.DisplayObject_getBounds();
            return i || (this._updateTimeline(), this.frameBounds && (i = this._rectangle.copy(this.frameBounds[this.currentFrame]))), i ? this._transformBounds(i, t, e) : this.Container__getBounds(t, e)
        }, createjs.MovieClip = createjs.promote(t, "Container"), e.priority = 100, e.install = function () {
            createjs.Tween.installPlugin(e, ["startPosition"])
        }, e.init = function (t, e, i) {
            return i
        }, e.step = function () {}, e.tween = function (e, i, s, r, n, a, o, h) {
            return e.target instanceof t ? 1 == a ? n[i] : r[i] : s
        }
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t() {
            throw "SpriteSheetUtils cannot be instantiated"
        }
        var e = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
        e.getContext && (t._workingCanvas = e, t._workingContext = e.getContext("2d"), e.width = e.height = 1), t.addFlippedFrames = function (e, i, s, r) {
            if (i || s || r) {
                var n = 0;
                i && t._flip(e, ++n, !0, !1), s && t._flip(e, ++n, !1, !0), r && t._flip(e, ++n, !0, !0)
            }
        }, t.extractFrame = function (e, i) {
            isNaN(i) && (i = e.getAnimation(i).frames[0]);
            var s = e.getFrame(i);
            if (!s) return null;
            var r = s.rect,
                n = t._workingCanvas;
            n.width = r.width, n.height = r.height, t._workingContext.drawImage(s.image, r.x, r.y, r.width, r.height, 0, 0, r.width, r.height);
            var a = document.createElement("img");
            return a.src = n.toDataURL("image/png"), a
        }, t.mergeAlpha = function (t, e, i) {
            i || (i = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")), i.width = Math.max(e.width, t.width), i.height = Math.max(e.height, t.height);
            var s = i.getContext("2d");
            return s.save(), s.drawImage(t, 0, 0), s.globalCompositeOperation = "destination-in", s.drawImage(e, 0, 0), s.restore(), i
        }, t._flip = function (e, i, s, r) {
            for (var n = e._images, a = t._workingCanvas, o = t._workingContext, h = n.length / i, c = 0; h > c; c++) {
                var u = n[c];
                u.__tmp = c, o.setTransform(1, 0, 0, 1, 0, 0), o.clearRect(0, 0, a.width + 1, a.height + 1), a.width = u.width, a.height = u.height, o.setTransform(s ? -1 : 1, 0, 0, r ? -1 : 1, s ? u.width : 0, r ? u.height : 0), o.drawImage(u, 0, 0);
                var l = document.createElement("img");
                l.src = a.toDataURL("image/png"), l.width = u.width, l.height = u.height, n.push(l)
            }
            var d = e._frames,
                _ = d.length / i;
            for (c = 0; _ > c; c++) {
                u = d[c];
                var p = u.rect.clone();
                l = n[u.image.__tmp + h * i];
                var f = {
                    image: l,
                    rect: p,
                    regX: u.regX,
                    regY: u.regY
                };
                s && (p.x = l.width - p.x - p.width, f.regX = p.width - u.regX), r && (p.y = l.height - p.y - p.height, f.regY = p.height - u.regY), d.push(f)
            }
            var g = "_" + (s ? "h" : "") + (r ? "v" : ""),
                m = e._animations,
                v = e._data,
                y = m.length / i;
            for (c = 0; y > c; c++) {
                var b = m[c];
                u = v[b];
                var E = {
                    name: b + g,
                    speed: u.speed,
                    next: u.next,
                    frames: []
                };
                u.next && (E.next += g), d = u.frames;
                for (var j = 0, S = d.length; S > j; j++) E.frames.push(d[j] + _ * i);
                v[E.name] = E, m.push(E.name)
            }
        }, createjs.SpriteSheetUtils = t
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t) {
            this.EventDispatcher_constructor(), this.maxWidth = 2048, this.maxHeight = 2048, this.spriteSheet = null, this.scale = 1, this.padding = 1, this.timeSlice = .3, this.progress = -1, this.framerate = t || 0, this._frames = [], this._animations = {}, this._data = null, this._nextFrameIndex = 0, this._index = 0, this._timerID = null, this._scale = 1
        }
        var e = createjs.extend(t, createjs.EventDispatcher);
        t.ERR_DIMENSIONS = "frame dimensions exceed max spritesheet dimensions", t.ERR_RUNNING = "a build is already running", e.addFrame = function (e, i, s, r, n) {
            if (this._data) throw t.ERR_RUNNING;
            var a = i || e.bounds || e.nominalBounds;
            return !a && e.getBounds && (a = e.getBounds()), a ? (s = s || 1, this._frames.push({
                source: e,
                sourceRect: a,
                scale: s,
                funct: r,
                data: n,
                index: this._frames.length,
                height: a.height * s
            }) - 1) : null
        }, e.addAnimation = function (e, i, s, r) {
            if (this._data) throw t.ERR_RUNNING;
            this._animations[e] = {
                frames: i,
                next: s,
                speed: r
            }
        }, e.addMovieClip = function (e, i, s, r, n, a) {
            if (this._data) throw t.ERR_RUNNING;
            var o = e.frameBounds,
                h = i || e.bounds || e.nominalBounds;
            if (!h && e.getBounds && (h = e.getBounds()), h || o) {
                var c, u, l = this._frames.length,
                    d = e.timeline.duration;
                for (c = 0; d > c; c++) {
                    var _ = o && o[c] ? o[c] : h;
                    this.addFrame(e, _, s, this._setupMovieClipFrame, {
                        i: c,
                        f: r,
                        d: n
                    })
                }
                var p = e.timeline._labels,
                    f = [];
                for (var g in p) f.push({
                    index: p[g],
                    label: g
                });
                if (f.length)
                    for (f.sort(function (t, e) {
                        return t.index - e.index
                    }), c = 0, u = f.length; u > c; c++) {
                        for (var m = f[c].label, v = l + f[c].index, y = l + (c == u - 1 ? d : f[c + 1].index), b = [], E = v; y > E; E++) b.push(E);
                        (!a || (m = a(m, e, v, y))) && this.addAnimation(m, b, !0)
                    }
            }
        }, e.build = function () {
            if (this._data) throw t.ERR_RUNNING;
            for (this._startBuild(); this._drawNext(););
            return this._endBuild(), this.spriteSheet
        }, e.buildAsync = function (e) {
            if (this._data) throw t.ERR_RUNNING;
            this.timeSlice = e, this._startBuild();
            var i = this;
            this._timerID = setTimeout(function () {
                i._run()
            }, 50 - 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)))
        }, e.stopAsync = function () {
            clearTimeout(this._timerID), this._data = null
        }, e.clone = function () {
            throw "SpriteSheetBuilder cannot be cloned."
        }, e.toString = function () {
            return "[SpriteSheetBuilder]"
        }, e._startBuild = function () {
            var e = this.padding || 0;
            this.progress = 0, this.spriteSheet = null, this._index = 0, this._scale = this.scale;
            var i = [];
            this._data = {
                images: [],
                frames: i,
                framerate: this.framerate,
                animations: this._animations
            };
            var s = this._frames.slice();
            if (s.sort(function (t, e) {
                return t.height <= e.height ? -1 : 1
            }), s[s.length - 1].height + 2 * e > this.maxHeight) throw t.ERR_DIMENSIONS;
            for (var r = 0, n = 0, a = 0; s.length;) {
                var o = this._fillRow(s, r, a, i, e);
                if (o.w > n && (n = o.w), r += o.h, !o.h || !s.length) {
                    var h = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
                    h.width = this._getSize(n, this.maxWidth), h.height = this._getSize(r, this.maxHeight), this._data.images[a] = h, o.h || (n = r = 0, a++)
                }
            }
        }, e._setupMovieClipFrame = function (t, e) {
            var i = t.actionsEnabled;
            t.actionsEnabled = !1, t.gotoAndStop(e.i), t.actionsEnabled = i, e.f && e.f(t, e.d, e.i)
        }, e._getSize = function (t, e) {
            for (var i = 4; Math.pow(2, ++i) < t;);
            return Math.min(e, Math.pow(2, i))
        }, e._fillRow = function (e, i, s, r, n) {
            var a = this.maxWidth,
                o = this.maxHeight;
            i += n;
            for (var h = o - i, c = n, u = 0, l = e.length - 1; l >= 0; l--) {
                var d = e[l],
                    _ = this._scale * d.scale,
                    p = d.sourceRect,
                    f = d.source,
                    g = Math.floor(_ * p.x - n),
                    m = Math.floor(_ * p.y - n),
                    v = Math.ceil(_ * p.height + 2 * n),
                    y = Math.ceil(_ * p.width + 2 * n);
                if (y > a) throw t.ERR_DIMENSIONS;
                v > h || c + y > a || (d.img = s, d.rect = new createjs.Rectangle(c, i, y, v), u = u || v, e.splice(l, 1), r[d.index] = [c, i, y, v, s, Math.round(-g + _ * f.regX - n), Math.round(-m + _ * f.regY - n)], c += y)
            }
            return {
                w: c,
                h: u
            }
        }, e._endBuild = function () {
            this.spriteSheet = new createjs.SpriteSheet(this._data), this._data = null, this.progress = 1, this.dispatchEvent("complete")
        }, e._run = function () {
            for (var t = 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)), e = (new Date).getTime() + t, i = !1; e > (new Date).getTime();)
                if (!this._drawNext()) {
                    i = !0;
                    break
                }
            if (i) this._endBuild();
            else {
                var s = this;
                this._timerID = setTimeout(function () {
                    s._run()
                }, 50 - t)
            }
            var r = this.progress = this._index / this._frames.length;
            if (this.hasEventListener("progress")) {
                var n = new createjs.Event("progress");
                n.progress = r, this.dispatchEvent(n)
            }
        }, e._drawNext = function () {
            var t = this._frames[this._index],
                e = t.scale * this._scale,
                i = t.rect,
                s = t.sourceRect,
                r = this._data.images[t.img],
                n = r.getContext("2d");
            return t.funct && t.funct(t.source, t.data), n.save(), n.beginPath(), n.rect(i.x, i.y, i.width, i.height), n.clip(), n.translate(Math.ceil(i.x - s.x * e), Math.ceil(i.y - s.y * e)), n.scale(e, e), t.source.draw(n), n.restore(), ++this._index < this._frames.length
        }, createjs.SpriteSheetBuilder = createjs.promote(t, "EventDispatcher")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t) {
            this.DisplayObject_constructor(), "string" == typeof t && (t = document.getElementById(t)), this.mouseEnabled = !1;
            var e = t.style;
            e.position = "absolute", e.transformOrigin = e.WebkitTransformOrigin = e.msTransformOrigin = e.MozTransformOrigin = e.OTransformOrigin = "0% 0%", this.htmlElement = t, this._oldProps = null
        }
        var e = createjs.extend(t, createjs.DisplayObject);
        e.isVisible = function () {
            return null != this.htmlElement
        }, e.draw = function (t, e) {
            return !0
        }, e.cache = function () {}, e.uncache = function () {}, e.updateCache = function () {}, e.hitTest = function () {}, e.localToGlobal = function () {}, e.globalToLocal = function () {}, e.localToLocal = function () {}, e.clone = function () {
            throw "DOMElement cannot be cloned."
        }, e.toString = function () {
            return "[DOMElement (name=" + this.name + ")]"
        }, e._tick = function (t) {
            var e = this.getStage();
            e && e.on("drawend", this._handleDrawEnd, this, !0), this.DisplayObject__tick(t)
        }, e._handleDrawEnd = function (t) {
            var e = this.htmlElement;
            if (e) {
                var i = e.style,
                    s = this.getConcatenatedDisplayProps(this._props),
                    r = s.matrix,
                    n = s.visible ? "visible" : "hidden";
                if (n != i.visibility && (i.visibility = n), s.visible) {
                    var a = this._oldProps,
                        o = a && a.matrix,
                        h = 1e4;
                    if (!o || !o.equals(r)) {
                        var c = "matrix(" + (r.a * h | 0) / h + "," + (r.b * h | 0) / h + "," + (r.c * h | 0) / h + "," + (r.d * h | 0) / h + "," + (r.tx + .5 | 0);
                        i.transform = i.WebkitTransform = i.OTransform = i.msTransform = c + "," + (r.ty + .5 | 0) + ")", i.MozTransform = c + "px," + (r.ty + .5 | 0) + "px)", a || (a = this._oldProps = new createjs.DisplayProps((!0), NaN)), a.matrix.copy(r)
                    }
                    a.alpha != s.alpha && (i.opacity = "" + (s.alpha * h | 0) / h, a.alpha = s.alpha)
                }
            }
        }, createjs.DOMElement = createjs.promote(t, "DisplayObject")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t() {}
        var e = t.prototype;
        e.getBounds = function (t) {
            return t
        }, e.applyFilter = function (t, e, i, s, r, n, a, o) {
            n = n || t, null == a && (a = e), null == o && (o = i);
            try {
                var h = t.getImageData(e, i, s, r)
            } catch (t) {
                return !1
            }
            return !!this._applyFilter(h) && (n.putImageData(h, a, o), !0)
        }, e.toString = function () {
            return "[Filter]"
        }, e.clone = function () {
            return new t
        }, e._applyFilter = function (t) {
            return !0
        }, createjs.Filter = t
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t, e, i) {
            (isNaN(t) || 0 > t) && (t = 0), (isNaN(e) || 0 > e) && (e = 0), (isNaN(i) || 1 > i) && (i = 1), this.blurX = 0 | t, this.blurY = 0 | e, this.quality = 0 | i
        }
        var e = createjs.extend(t, createjs.Filter);
        t.MUL_TABLE = [1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283, 265, 497, 469, 443, 421, 25, 191, 365, 349, 335, 161, 155, 149, 9, 278, 269, 261, 505, 245, 475, 231, 449, 437, 213, 415, 405, 395, 193, 377, 369, 361, 353, 345, 169, 331, 325, 319, 313, 307, 301, 37, 145, 285, 281, 69, 271, 267, 263, 259, 509, 501, 493, 243, 479, 118, 465, 459, 113, 446, 55, 435, 429, 423, 209, 413, 51, 403, 199, 393, 97, 3, 379, 375, 371, 367, 363, 359, 355, 351, 347, 43, 85, 337, 333, 165, 327, 323, 5, 317, 157, 311, 77, 305, 303, 75, 297, 294, 73, 289, 287, 71, 141, 279, 277, 275, 68, 135, 67, 133, 33, 262, 260, 129, 511, 507, 503, 499, 495, 491, 61, 121, 481, 477, 237, 235, 467, 232, 115, 457, 227, 451, 7, 445, 221, 439, 218, 433, 215, 427, 425, 211, 419, 417, 207, 411, 409, 203, 202, 401, 399, 396, 197, 49, 389, 387, 385, 383, 95, 189, 47, 187, 93, 185, 23, 183, 91, 181, 45, 179, 89, 177, 11, 175, 87, 173, 345, 343, 341, 339, 337, 21, 167, 83, 331, 329, 327, 163, 81, 323, 321, 319, 159, 79, 315, 313, 39, 155, 309, 307, 153, 305, 303, 151, 75, 299, 149, 37, 295, 147, 73, 291, 145, 289, 287, 143, 285, 71, 141, 281, 35, 279, 139, 69, 275, 137, 273, 17, 271, 135, 269, 267, 133, 265, 33, 263, 131, 261, 130, 259, 129, 257, 1], t.SHG_TABLE = [0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13, 14, 14, 14, 14, 10, 13, 14, 14, 14, 13, 13, 13, 9, 14, 14, 14, 15, 14, 15, 14, 15, 15, 14, 15, 15, 15, 14, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 15, 12, 14, 15, 15, 13, 15, 15, 15, 15, 16, 16, 16, 15, 16, 14, 16, 16, 14, 16, 13, 16, 16, 16, 15, 16, 13, 16, 15, 16, 14, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 14, 16, 16, 15, 16, 16, 10, 16, 15, 16, 14, 16, 16, 14, 16, 16, 14, 16, 16, 14, 15, 16, 16, 16, 14, 15, 14, 15, 13, 16, 16, 15, 17, 17, 17, 17, 17, 17, 14, 15, 17, 17, 16, 16, 17, 16, 15, 17, 16, 17, 11, 17, 16, 17, 16, 17, 16, 17, 17, 16, 17, 17, 16, 17, 17, 16, 16, 17, 17, 17, 16, 14, 17, 17, 17, 17, 15, 16, 14, 16, 15, 16, 13, 16, 15, 16, 14, 16, 15, 16, 12, 16, 15, 16, 17, 17, 17, 17, 17, 13, 16, 15, 17, 17, 17, 16, 15, 17, 17, 17, 16, 15, 17, 17, 14, 16, 17, 17, 16, 17, 17, 16, 15, 17, 16, 14, 17, 16, 15, 17, 16, 17, 17, 16, 17, 15, 16, 17, 14, 17, 16, 15, 17, 16, 17, 13, 17, 16, 17, 17, 16, 17, 14, 17, 16, 17, 16, 17, 16, 17, 9], e.getBounds = function (t) {
            var e = 0 | this.blurX,
                i = 0 | this.blurY;
            if (0 >= e && 0 >= i) return t;
            var s = Math.pow(this.quality, .2);
            return (t || new createjs.Rectangle).pad(e * s + 1, i * s + 1, e * s + 1, i * s + 1)
        }, e.clone = function () {
            return new t(this.blurX, this.blurY, this.quality)
        }, e.toString = function () {
            return "[BlurFilter]"
        }, e._applyFilter = function (e) {
            var i = this.blurX >> 1;
            if (isNaN(i) || 0 > i) return !1;
            var s = this.blurY >> 1;
            if (isNaN(s) || 0 > s) return !1;
            if (0 == i && 0 == s) return !1;
            var r = this.quality;
            (isNaN(r) || 1 > r) && (r = 1), r |= 0, r > 3 && (r = 3), 1 > r && (r = 1);
            var n = e.data,
                a = 0,
                o = 0,
                h = 0,
                c = 0,
                u = 0,
                l = 0,
                d = 0,
                _ = 0,
                p = 0,
                f = 0,
                g = 0,
                m = 0,
                v = 0,
                y = 0,
                b = 0,
                E = i + i + 1 | 0,
                j = s + s + 1 | 0,
                S = 0 | e.width,
                T = 0 | e.height,
                P = S - 1 | 0,
                w = T - 1 | 0,
                x = i + 1 | 0,
                L = s + 1 | 0,
                A = {
                    r: 0,
                    b: 0,
                    g: 0,
                    a: 0
                },
                I = A;
            for (h = 1; E > h; h++) I = I.n = {
                r: 0,
                b: 0,
                g: 0,
                a: 0
            };
            I.n = A;
            var R = {
                    r: 0,
                    b: 0,
                    g: 0,
                    a: 0
                },
                M = R;
            for (h = 1; j > h; h++) M = M.n = {
                r: 0,
                b: 0,
                g: 0,
                a: 0
            };
            M.n = R;
            for (var O = null, C = 0 | t.MUL_TABLE[i], D = 0 | t.SHG_TABLE[i], N = 0 | t.MUL_TABLE[s], k = 0 | t.SHG_TABLE[s]; r-- > 0;) {
                d = l = 0;
                var F = C,
                    H = D;
                for (o = T; --o > -1;) {
                    for (_ = x * (m = n[0 | l]), p = x * (v = n[l + 1 | 0]), f = x * (y = n[l + 2 | 0]), g = x * (b = n[l + 3 | 0]), I = A, h = x; --h > -1;) I.r = m, I.g = v, I.b = y, I.a = b, I = I.n;
                    for (h = 1; x > h; h++) c = l + ((h > P ? P : h) << 2) | 0, _ += I.r = n[c], p += I.g = n[c + 1], f += I.b = n[c + 2], g += I.a = n[c + 3], I = I.n;
                    for (O = A, a = 0; S > a; a++) n[l++] = _ * F >>> H, n[l++] = p * F >>> H, n[l++] = f * F >>> H, n[l++] = g * F >>> H, c = d + ((c = a + i + 1) < P ? c : P) << 2, _ -= O.r - (O.r = n[c]), p -= O.g - (O.g = n[c + 1]), f -= O.b - (O.b = n[c + 2]), g -= O.a - (O.a = n[c + 3]), O = O.n;
                    d += S
                }
                for (F = N, H = k, a = 0; S > a; a++) {
                    for (l = a << 2 | 0, _ = L * (m = n[l]) | 0, p = L * (v = n[l + 1 | 0]) | 0, f = L * (y = n[l + 2 | 0]) | 0, g = L * (b = n[l + 3 | 0]) | 0, M = R, h = 0; L > h; h++) M.r = m, M.g = v, M.b = y, M.a = b, M = M.n;
                    for (u = S, h = 1; s >= h; h++) l = u + a << 2, _ += M.r = n[l], p += M.g = n[l + 1], f += M.b = n[l + 2], g += M.a = n[l + 3], M = M.n, w > h && (u += S);
                    if (l = a, O = R, r > 0)
                        for (o = 0; T > o; o++) c = l << 2, n[c + 3] = b = g * F >>> H, b > 0 ? (n[c] = _ * F >>> H, n[c + 1] = p * F >>> H, n[c + 2] = f * F >>> H) : n[c] = n[c + 1] = n[c + 2] = 0, c = a + ((c = o + L) < w ? c : w) * S << 2, _ -= O.r - (O.r = n[c]), p -= O.g - (O.g = n[c + 1]), f -= O.b - (O.b = n[c + 2]), g -= O.a - (O.a = n[c + 3]), O = O.n, l += S;
                    else
                        for (o = 0; T > o; o++) c = l << 2, n[c + 3] = b = g * F >>> H, b > 0 ? (b = 255 / b, n[c] = (_ * F >>> H) * b, n[c + 1] = (p * F >>> H) * b, n[c + 2] = (f * F >>> H) * b) : n[c] = n[c + 1] = n[c + 2] = 0, c = a + ((c = o + L) < w ? c : w) * S << 2, _ -= O.r - (O.r = n[c]), p -= O.g - (O.g = n[c + 1]), f -= O.b - (O.b = n[c + 2]), g -= O.a - (O.a = n[c + 3]), O = O.n, l += S
                }
            }
            return !0
        }, createjs.BlurFilter = createjs.promote(t, "Filter")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t) {
            this.alphaMap = t, this._alphaMap = null, this._mapData = null
        }
        var e = createjs.extend(t, createjs.Filter);
        e.clone = function () {
            var e = new t(this.alphaMap);
            return e._alphaMap = this._alphaMap, e._mapData = this._mapData, e
        }, e.toString = function () {
            return "[AlphaMapFilter]"
        }, e._applyFilter = function (t) {
            if (!this.alphaMap) return !0;
            if (!this._prepAlphaMap()) return !1;
            for (var e = t.data, i = this._mapData, s = 0, r = e.length; r > s; s += 4) e[s + 3] = i[s] || 0;
            return !0
        }, e._prepAlphaMap = function () {
            if (!this.alphaMap) return !1;
            if (this.alphaMap == this._alphaMap && this._mapData) return !0;
            this._mapData = null;
            var t, e = this._alphaMap = this.alphaMap,
                i = e;
            e instanceof HTMLCanvasElement ? t = i.getContext("2d") : (i = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas"), i.width = e.width, i.height = e.height, t = i.getContext("2d"), t.drawImage(e, 0, 0));
            try {
                var s = t.getImageData(0, 0, e.width, e.height)
            } catch (t) {
                return !1
            }
            return this._mapData = s.data, !0
        }, createjs.AlphaMapFilter = createjs.promote(t, "Filter")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t) {
            this.mask = t
        }
        var e = createjs.extend(t, createjs.Filter);
        e.applyFilter = function (t, e, i, s, r, n, a, o) {
            return !this.mask || (n = n || t, null == a && (a = e), null == o && (o = i), n.save(), t == n && (n.globalCompositeOperation = "destination-in", n.drawImage(this.mask, a, o), n.restore(), !0))
        }, e.clone = function () {
            return new t(this.mask)
        }, e.toString = function () {
            return "[AlphaMaskFilter]"
        }, createjs.AlphaMaskFilter = createjs.promote(t, "Filter")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t, e, i, s, r, n, a, o) {
            this.redMultiplier = null != t ? t : 1, this.greenMultiplier = null != e ? e : 1, this.blueMultiplier = null != i ? i : 1, this.alphaMultiplier = null != s ? s : 1, this.redOffset = r || 0, this.greenOffset = n || 0, this.blueOffset = a || 0, this.alphaOffset = o || 0
        }
        var e = createjs.extend(t, createjs.Filter);
        e.toString = function () {
            return "[ColorFilter]"
        }, e.clone = function () {
            return new t(this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier, this.redOffset, this.greenOffset, this.blueOffset, this.alphaOffset)
        }, e._applyFilter = function (t) {
            for (var e = t.data, i = e.length, s = 0; i > s; s += 4) e[s] = e[s] * this.redMultiplier + this.redOffset, e[s + 1] = e[s + 1] * this.greenMultiplier + this.greenOffset, e[s + 2] = e[s + 2] * this.blueMultiplier + this.blueOffset, e[s + 3] = e[s + 3] * this.alphaMultiplier + this.alphaOffset;
            return !0
        }, createjs.ColorFilter = createjs.promote(t, "Filter")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t, e, i, s) {
            this.setColor(t, e, i, s)
        }
        var e = t.prototype;
        t.DELTA_INDEX = [0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2, .21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56, .59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10], t.IDENTITY_MATRIX = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], t.LENGTH = t.IDENTITY_MATRIX.length, e.setColor = function (t, e, i, s) {
            return this.reset().adjustColor(t, e, i, s)
        }, e.reset = function () {
            return this.copy(t.IDENTITY_MATRIX)
        }, e.adjustColor = function (t, e, i, s) {
            return this.adjustHue(s), this.adjustContrast(e), this.adjustBrightness(t), this.adjustSaturation(i)
        }, e.adjustBrightness = function (t) {
            return 0 == t || isNaN(t) ? this : (t = this._cleanValue(t, 255), this._multiplyMatrix([1, 0, 0, 0, t, 0, 1, 0, 0, t, 0, 0, 1, 0, t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this)
        }, e.adjustContrast = function (e) {
            if (0 == e || isNaN(e)) return this;
            e = this._cleanValue(e, 100);
            var i;
            return 0 > e ? i = 127 + e / 100 * 127 : (i = e % 1, i = 0 == i ? t.DELTA_INDEX[e] : t.DELTA_INDEX[e << 0] * (1 - i) + t.DELTA_INDEX[(e << 0) + 1] * i, i = 127 * i + 127), this._multiplyMatrix([i / 127, 0, 0, 0, .5 * (127 - i), 0, i / 127, 0, 0, .5 * (127 - i), 0, 0, i / 127, 0, .5 * (127 - i), 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
        }, e.adjustSaturation = function (t) {
            if (0 == t || isNaN(t)) return this;
            t = this._cleanValue(t, 100);
            var e = 1 + (t > 0 ? 3 * t / 100 : t / 100),
                i = .3086,
                s = .6094,
                r = .082;
            return this._multiplyMatrix([i * (1 - e) + e, s * (1 - e), r * (1 - e), 0, 0, i * (1 - e), s * (1 - e) + e, r * (1 - e), 0, 0, i * (1 - e), s * (1 - e), r * (1 - e) + e, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
        }, e.adjustHue = function (t) {
            if (0 == t || isNaN(t)) return this;
            t = this._cleanValue(t, 180) / 180 * Math.PI;
            var e = Math.cos(t),
                i = Math.sin(t),
                s = .213,
                r = .715,
                n = .072;
            return this._multiplyMatrix([s + e * (1 - s) + i * -s, r + e * -r + i * -r, n + e * -n + i * (1 - n), 0, 0, s + e * -s + .143 * i, r + e * (1 - r) + .14 * i, n + e * -n + i * -.283, 0, 0, s + e * -s + i * -(1 - s), r + e * -r + i * r, n + e * (1 - n) + i * n, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
        }, e.concat = function (e) {
            return e = this._fixMatrix(e), e.length != t.LENGTH ? this : (this._multiplyMatrix(e), this)
        }, e.clone = function () {
            return (new t).copy(this)
        }, e.toArray = function () {
            for (var e = [], i = 0, s = t.LENGTH; s > i; i++) e[i] = this[i];
            return e
        }, e.copy = function (e) {
            for (var i = t.LENGTH, s = 0; i > s; s++) this[s] = e[s];
            return this
        }, e.toString = function () {
            return "[ColorMatrix]"
        }, e._multiplyMatrix = function (t) {
            var e, i, s, r = [];
            for (e = 0; 5 > e; e++) {
                for (i = 0; 5 > i; i++) r[i] = this[i + 5 * e];
                for (i = 0; 5 > i; i++) {
                    var n = 0;
                    for (s = 0; 5 > s; s++) n += t[i + 5 * s] * r[s];
                    this[i + 5 * e] = n
                }
            }
        }, e._cleanValue = function (t, e) {
            return Math.min(e, Math.max(-e, t))
        }, e._fixMatrix = function (e) {
            return e instanceof t && (e = e.toArray()), e.length < t.LENGTH ? e = e.slice(0, e.length).concat(t.IDENTITY_MATRIX.slice(e.length, t.LENGTH)) : e.length > t.LENGTH && (e = e.slice(0, t.LENGTH)), e
        }, createjs.ColorMatrix = t
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t) {
            this.matrix = t
        }
        var e = createjs.extend(t, createjs.Filter);
        e.toString = function () {
            return "[ColorMatrixFilter]"
        }, e.clone = function () {
            return new t(this.matrix)
        }, e._applyFilter = function (t) {
            for (var e, i, s, r, n = t.data, a = n.length, o = this.matrix, h = o[0], c = o[1], u = o[2], l = o[3], d = o[4], _ = o[5], p = o[6], f = o[7], g = o[8], m = o[9], v = o[10], y = o[11], b = o[12], E = o[13], j = o[14], S = o[15], T = o[16], P = o[17], w = o[18], x = o[19], L = 0; a > L; L += 4) e = n[L], i = n[L + 1], s = n[L + 2], r = n[L + 3], n[L] = e * h + i * c + s * u + r * l + d, n[L + 1] = e * _ + i * p + s * f + r * g + m, n[L + 2] = e * v + i * y + s * b + r * E + j, n[L + 3] = e * S + i * T + s * P + r * w + x;
            return !0
        }, createjs.ColorMatrixFilter = createjs.promote(t, "Filter")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t() {
            throw "Touch cannot be instantiated"
        }
        t.isSupported = function () {
            return !!("ontouchstart" in window || window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 0 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 0)
        }, t.enable = function (e, i, s) {
            return !!(e && e.canvas && t.isSupported()) && (!!e.__touch || (e.__touch = {
                pointers: {},
                multitouch: !i,
                preventDefault: !s,
                count: 0
            }, "ontouchstart" in window ? t._IOS_enable(e) : (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && t._IE_enable(e), !0))
        }, t.disable = function (e) {
            e && ("ontouchstart" in window ? t._IOS_disable(e) : (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && t._IE_disable(e), delete e.__touch)
        }, t._IOS_enable = function (e) {
            var i = e.canvas,
                s = e.__touch.f = function (i) {
                    t._IOS_handleEvent(e, i)
                };
            i.addEventListener("touchstart", s, !1), i.addEventListener("touchmove", s, !1), i.addEventListener("touchend", s, !1), i.addEventListener("touchcancel", s, !1)
        }, t._IOS_disable = function (t) {
            var e = t.canvas;
            if (e) {
                var i = t.__touch.f;
                e.removeEventListener("touchstart", i, !1), e.removeEventListener("touchmove", i, !1), e.removeEventListener("touchend", i, !1), e.removeEventListener("touchcancel", i, !1)
            }
        }, t._IOS_handleEvent = function (t, e) {
            if (t) {
                t.__touch.preventDefault && e.preventDefault && e.preventDefault();
                for (var i = e.changedTouches, s = e.type, r = 0, n = i.length; n > r; r++) {
                    var a = i[r],
                        o = a.identifier;
                    a.target == t.canvas && ("touchstart" == s ? this._handleStart(t, o, e, a.pageX, a.pageY) : "touchmove" == s ? this._handleMove(t, o, e, a.pageX, a.pageY) : ("touchend" == s || "touchcancel" == s) && this._handleEnd(t, o, e))
                }
            }
        }, t._IE_enable = function (e) {
            var i = e.canvas,
                s = e.__touch.f = function (i) {
                    t._IE_handleEvent(e, i)
                };
            void 0 === window.navigator.pointerEnabled ? (i.addEventListener("MSPointerDown", s, !1), window.addEventListener("MSPointerMove", s, !1), window.addEventListener("MSPointerUp", s, !1), window.addEventListener("MSPointerCancel", s, !1), e.__touch.preventDefault && (i.style.msTouchAction = "none")) : (i.addEventListener("pointerdown", s, !1), window.addEventListener("pointermove", s, !1), window.addEventListener("pointerup", s, !1), window.addEventListener("pointercancel", s, !1), e.__touch.preventDefault && (i.style.touchAction = "none")), e.__touch.activeIDs = {}
        }, t._IE_disable = function (t) {
            var e = t.__touch.f;
            void 0 === window.navigator.pointerEnabled ? (window.removeEventListener("MSPointerMove", e, !1), window.removeEventListener("MSPointerUp", e, !1), window.removeEventListener("MSPointerCancel", e, !1), t.canvas && t.canvas.removeEventListener("MSPointerDown", e, !1)) : (window.removeEventListener("pointermove", e, !1), window.removeEventListener("pointerup", e, !1), window.removeEventListener("pointercancel", e, !1), t.canvas && t.canvas.removeEventListener("pointerdown", e, !1))
        }, t._IE_handleEvent = function (t, e) {
            if (t) {
                t.__touch.preventDefault && e.preventDefault && e.preventDefault();
                var i = e.type,
                    s = e.pointerId,
                    r = t.__touch.activeIDs;
                if ("MSPointerDown" == i || "pointerdown" == i) {
                    if (e.srcElement != t.canvas) return;
                    r[s] = !0, this._handleStart(t, s, e, e.pageX, e.pageY)
                } else r[s] && ("MSPointerMove" == i || "pointermove" == i ? this._handleMove(t, s, e, e.pageX, e.pageY) : ("MSPointerUp" == i || "MSPointerCancel" == i || "pointerup" == i || "pointercancel" == i) && (delete r[s], this._handleEnd(t, s, e)))
            }
        }, t._handleStart = function (t, e, i, s, r) {
            var n = t.__touch;
            if (n.multitouch || !n.count) {
                var a = n.pointers;
                a[e] || (a[e] = !0, n.count++, t._handlePointerDown(e, i, s, r))
            }
        }, t._handleMove = function (t, e, i, s, r) {
            t.__touch.pointers[e] && t._handlePointerMove(e, i, s, r)
        }, t._handleEnd = function (t, e, i) {
            var s = t.__touch,
                r = s.pointers;
            r[e] && (s.count--, t._handlePointerUp(e, i, !0), delete r[e])
        }, createjs.Touch = t
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";
        var t = createjs.EaselJS = createjs.EaselJS || {};
        t.version = "0.8.2", t.buildDate = "Thu, 26 Nov 2015 20:44:34 GMT"
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";
        var t = createjs.PreloadJS = createjs.PreloadJS || {};
        t.version = "0.6.2", t.buildDate = "Thu, 26 Nov 2015 20:44:31 GMT"
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";
        createjs.proxy = function (t, e) {
            var i = Array.prototype.slice.call(arguments, 2);
            return function () {
                return t.apply(e, Array.prototype.slice.call(arguments, 0).concat(i))
            }
        }
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t, e, i) {
            this.Event_constructor("error"), this.title = t, this.message = e, this.data = i
        }
        var e = createjs.extend(t, createjs.Event);
        e.clone = function () {
            return new createjs.ErrorEvent(this.title, this.message, this.data)
        }, createjs.ErrorEvent = createjs.promote(t, "Event")
    }(), this.createjs = this.createjs || {},
    function (t) {
        "use strict";

        function e(t, e) {
            this.Event_constructor("progress"), this.loaded = t, this.total = null == e ? 1 : e, this.progress = 0 == e ? 0 : this.loaded / this.total
        }
        var i = createjs.extend(e, createjs.Event);
        i.clone = function () {
            return new createjs.ProgressEvent(this.loaded, this.total)
        }, createjs.ProgressEvent = createjs.promote(e, "Event")
    }(window),
    function () {
        function t(e, s) {
            function n(t) {
                if (n[t] !== g) return n[t];
                var e;
                if ("bug-string-char-index" == t) e = "a" != "a" [0];
                else if ("json" == t) e = n("json-stringify") && n("json-parse");
                else {
                    var i, r = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                    if ("json-stringify" == t) {
                        var h = s.stringify,
                            u = "function" == typeof h && y;
                        if (u) {
                            (i = function () {
                                return 1
                            }).toJSON = i;
                            try {
                                u = "0" === h(0) && "0" === h(new a) && '""' == h(new o) && h(v) === g && h(g) === g && h() === g && "1" === h(i) && "[1]" == h([i]) && "[null]" == h([g]) && "null" == h(null) && "[null,null,null]" == h([g, v, null]) && h({
                                    a: [i, !0, !1, null, "\0\b\n\f\r\t"]
                                }) == r && "1" === h(null, i) && "[\n 1,\n 2\n]" == h([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == h(new c((-864e13))) && '"+275760-09-13T00:00:00.000Z"' == h(new c(864e13)) && '"-000001-01-01T00:00:00.000Z"' == h(new c((-621987552e5))) && '"1969-12-31T23:59:59.999Z"' == h(new c((-1)))
                            } catch (t) {
                                u = !1
                            }
                        }
                        e = u
                    }
                    if ("json-parse" == t) {
                        var l = s.parse;
                        if ("function" == typeof l) try {
                            if (0 === l("0") && !l(!1)) {
                                i = l(r);
                                var d = 5 == i.a.length && 1 === i.a[0];
                                if (d) {
                                    try {
                                        d = !l('"\t"')
                                    } catch (t) {}
                                    if (d) try {
                                        d = 1 !== l("01")
                                    } catch (t) {}
                                    if (d) try {
                                        d = 1 !== l("1.")
                                    } catch (t) {}
                                }
                            }
                        } catch (t) {
                            d = !1
                        }
                        e = d
                    }
                }
                return n[t] = !!e
            }
            e || (e = r.Object()), s || (s = r.Object());
            var a = e.Number || r.Number,
                o = e.String || r.String,
                h = e.Object || r.Object,
                c = e.Date || r.Date,
                u = e.SyntaxError || r.SyntaxError,
                l = e.TypeError || r.TypeError,
                d = e.Math || r.Math,
                _ = e.JSON || r.JSON;
            "object" == typeof _ && _ && (s.stringify = _.stringify, s.parse = _.parse);
            var p, f, g, m = h.prototype,
                v = m.toString,
                y = new c((-0xc782b5b800cec));
            try {
                y = -109252 == y.getUTCFullYear() && 0 === y.getUTCMonth() && 1 === y.getUTCDate() && 10 == y.getUTCHours() && 37 == y.getUTCMinutes() && 6 == y.getUTCSeconds() && 708 == y.getUTCMilliseconds()
            } catch (t) {}
            if (!n("json")) {
                var b = "[object Function]",
                    E = "[object Date]",
                    j = "[object Number]",
                    S = "[object String]",
                    T = "[object Array]",
                    P = "[object Boolean]",
                    w = n("bug-string-char-index");
                if (!y) var x = d.floor,
                    L = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                    A = function (t, e) {
                        return L[e] + 365 * (t - 1970) + x((t - 1969 + (e = +(e > 1))) / 4) - x((t - 1901 + e) / 100) + x((t - 1601 + e) / 400)
                    };
                if ((p = m.hasOwnProperty) || (p = function (t) {
                    var e, i = {};
                    return (i.__proto__ = null, i.__proto__ = {
                        toString: 1
                    }, i).toString != v ? p = function (t) {
                        var e = this.__proto__,
                            i = t in (this.__proto__ = null, this);
                        return this.__proto__ = e, i
                    } : (e = i.constructor, p = function (t) {
                        var i = (this.constructor || e).prototype;
                        return t in this && !(t in i && this[t] === i[t])
                    }), i = null, p.call(this, t)
                }), f = function (t, e) {
                    var s, r, n, a = 0;
                    (s = function () {
                        this.valueOf = 0
                    }).prototype.valueOf = 0, r = new s;
                    for (n in r) p.call(r, n) && a++;
                    return s = r = null, a ? f = 2 == a ? function (t, e) {
                        var i, s = {},
                            r = v.call(t) == b;
                        for (i in t) r && "prototype" == i || p.call(s, i) || !(s[i] = 1) || !p.call(t, i) || e(i)
                    } : function (t, e) {
                        var i, s, r = v.call(t) == b;
                        for (i in t) r && "prototype" == i || !p.call(t, i) || (s = "constructor" === i) || e(i);
                        (s || p.call(t, i = "constructor")) && e(i)
                    } : (r = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], f = function (t, e) {
                        var s, n, a = v.call(t) == b,
                            o = !a && "function" != typeof t.constructor && i[typeof t.hasOwnProperty] && t.hasOwnProperty || p;
                        for (s in t) a && "prototype" == s || !o.call(t, s) || e(s);
                        for (n = r.length; s = r[--n]; o.call(t, s) && e(s));
                    }), f(t, e)
                }, !n("json-stringify")) {
                    var I = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t"
                        },
                        R = "000000",
                        M = function (t, e) {
                            return (R + (e || 0)).slice(-t)
                        },
                        O = "\\u00",
                        C = function (t) {
                            for (var e = '"', i = 0, s = t.length, r = !w || s > 10, n = r && (w ? t.split("") : t); s > i; i++) {
                                var a = t.charCodeAt(i);
                                switch (a) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    e += I[a];
                                    break;
                                default:
                                    if (32 > a) {
                                        e += O + M(2, a.toString(16));
                                        break
                                    }
                                    e += r ? n[i] : t.charAt(i)
                                }
                            }
                            return e + '"'
                        },
                        D = function (t, e, i, s, r, n, a) {
                            var o, h, c, u, d, _, m, y, b, w, L, I, R, O, N, k;
                            try {
                                o = e[t]
                            } catch (t) {}
                            if ("object" == typeof o && o)
                                if (h = v.call(o), h != E || p.call(o, "toJSON")) "function" == typeof o.toJSON && (h != j && h != S && h != T || p.call(o, "toJSON")) && (o = o.toJSON(t));
                                else if (o > -1 / 0 && 1 / 0 > o) {
                                if (A) {
                                    for (d = x(o / 864e5), c = x(d / 365.2425) + 1970 - 1; A(c + 1, 0) <= d; c++);
                                    for (u = x((d - A(c, 0)) / 30.42); A(c, u + 1) <= d; u++);
                                    d = 1 + d - A(c, u), _ = (o % 864e5 + 864e5) % 864e5, m = x(_ / 36e5) % 24, y = x(_ / 6e4) % 60, b = x(_ / 1e3) % 60, w = _ % 1e3
                                } else c = o.getUTCFullYear(), u = o.getUTCMonth(), d = o.getUTCDate(), m = o.getUTCHours(), y = o.getUTCMinutes(), b = o.getUTCSeconds(), w = o.getUTCMilliseconds();
                                o = (0 >= c || c >= 1e4 ? (0 > c ? "-" : "+") + M(6, 0 > c ? -c : c) : M(4, c)) + "-" + M(2, u + 1) + "-" + M(2, d) + "T" + M(2, m) + ":" + M(2, y) + ":" + M(2, b) + "." + M(3, w) + "Z"
                            } else o = null; if (i && (o = i.call(e, t, o)), null === o) return "null";
                            if (h = v.call(o), h == P) return "" + o;
                            if (h == j) return o > -1 / 0 && 1 / 0 > o ? "" + o : "null";
                            if (h == S) return C("" + o);
                            if ("object" == typeof o) {
                                for (O = a.length; O--;)
                                    if (a[O] === o) throw l();
                                if (a.push(o), L = [], N = n, n += r, h == T) {
                                    for (R = 0, O = o.length; O > R; R++) I = D(R, o, i, s, r, n, a), L.push(I === g ? "null" : I);
                                    k = L.length ? r ? "[\n" + n + L.join(",\n" + n) + "\n" + N + "]" : "[" + L.join(",") + "]" : "[]"
                                } else f(s || o, function (t) {
                                    var e = D(t, o, i, s, r, n, a);
                                    e !== g && L.push(C(t) + ":" + (r ? " " : "") + e)
                                }), k = L.length ? r ? "{\n" + n + L.join(",\n" + n) + "\n" + N + "}" : "{" + L.join(",") + "}" : "{}";
                                return a.pop(), k
                            }
                        };
                    s.stringify = function (t, e, s) {
                        var r, n, a, o;
                        if (i[typeof e] && e)
                            if ((o = v.call(e)) == b) n = e;
                            else if (o == T) {
                            a = {};
                            for (var h, c = 0, u = e.length; u > c; h = e[c++], o = v.call(h), (o == S || o == j) && (a[h] = 1));
                        }
                        if (s)
                            if ((o = v.call(s)) == j) {
                                if ((s -= s % 1) > 0)
                                    for (r = "", s > 10 && (s = 10); r.length < s; r += " ");
                            } else o == S && (r = s.length <= 10 ? s : s.slice(0, 10));
                        return D("", (h = {}, h[""] = t, h), n, a, r, "", [])
                    }
                }
                if (!n("json-parse")) {
                    var N, k, F = o.fromCharCode,
                        H = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: "\t",
                            110: "\n",
                            102: "\f",
                            114: "\r"
                        },
                        U = function () {
                            throw N = k = null, u()
                        },
                        B = function () {
                            for (var t, e, i, s, r, n = k, a = n.length; a > N;) switch (r = n.charCodeAt(N)) {
                            case 9:
                            case 10:
                            case 13:
                            case 32:
                                N++;
                                break;
                            case 123:
                            case 125:
                            case 91:
                            case 93:
                            case 58:
                            case 44:
                                return t = w ? n.charAt(N) : n[N], N++, t;
                            case 34:
                                for (t = "@", N++; a > N;)
                                    if (r = n.charCodeAt(N), 32 > r) U();
                                    else if (92 == r) switch (r = n.charCodeAt(++N)) {
                                case 92:
                                case 34:
                                case 47:
                                case 98:
                                case 116:
                                case 110:
                                case 102:
                                case 114:
                                    t += H[r], N++;
                                    break;
                                case 117:
                                    for (e = ++N, i = N + 4; i > N; N++) r = n.charCodeAt(N), r >= 48 && 57 >= r || r >= 97 && 102 >= r || r >= 65 && 70 >= r || U();
                                    t += F("0x" + n.slice(e, N));
                                    break;
                                default:
                                    U()
                                } else {
                                    if (34 == r) break;
                                    for (r = n.charCodeAt(N), e = N; r >= 32 && 92 != r && 34 != r;) r = n.charCodeAt(++N);
                                    t += n.slice(e, N)
                                } if (34 == n.charCodeAt(N)) return N++, t;
                                U();
                            default:
                                if (e = N, 45 == r && (s = !0, r = n.charCodeAt(++N)), r >= 48 && 57 >= r) {
                                    for (48 == r && (r = n.charCodeAt(N + 1), r >= 48 && 57 >= r) && U(), s = !1; a > N && (r = n.charCodeAt(N), r >= 48 && 57 >= r); N++);
                                    if (46 == n.charCodeAt(N)) {
                                        for (i = ++N; a > i && (r = n.charCodeAt(i), r >= 48 && 57 >= r); i++);
                                        i == N && U(), N = i
                                    }
                                    if (r = n.charCodeAt(N), 101 == r || 69 == r) {
                                        for (r = n.charCodeAt(++N), (43 == r || 45 == r) && N++, i = N; a > i && (r = n.charCodeAt(i), r >= 48 && 57 >= r); i++);
                                        i == N && U(), N = i
                                    }
                                    return +n.slice(e, N)
                                }
                                if (s && U(), "true" == n.slice(N, N + 4)) return N += 4, !0;
                                if ("false" == n.slice(N, N + 5)) return N += 5, !1;
                                if ("null" == n.slice(N, N + 4)) return N += 4, null;
                                U()
                            }
                            return "$"
                        },
                        X = function (t) {
                            var e, i;
                            if ("$" == t && U(), "string" == typeof t) {
                                if ("@" == (w ? t.charAt(0) : t[0])) return t.slice(1);
                                if ("[" == t) {
                                    for (e = []; t = B(), "]" != t; i || (i = !0)) i && ("," == t ? (t = B(), "]" == t && U()) : U()), "," == t && U(), e.push(X(t));
                                    return e
                                }
                                if ("{" == t) {
                                    for (e = {}; t = B(), "}" != t; i || (i = !0)) i && ("," == t ? (t = B(), "}" == t && U()) : U()), ("," == t || "string" != typeof t || "@" != (w ? t.charAt(0) : t[0]) || ":" != B()) && U(), e[t.slice(1)] = X(B());
                                    return e
                                }
                                U()
                            }
                            return t
                        },
                        q = function (t, e, i) {
                            var s = Y(t, e, i);
                            s === g ? delete t[e] : t[e] = s
                        },
                        Y = function (t, e, i) {
                            var s, r = t[e];
                            if ("object" == typeof r && r)
                                if (v.call(r) == T)
                                    for (s = r.length; s--;) q(r, s, i);
                                else f(r, function (t) {
                                    q(r, t, i)
                                });
                            return i.call(t, e, r)
                        };
                    s.parse = function (t, e) {
                        var i, s;
                        return N = 0, k = "" + t, i = X(B()), "$" != B() && U(), N = k = null, e && v.call(e) == b ? Y((s = {}, s[""] = i, s), "", e) : i
                    }
                }
            }
            return s.runInContext = t, s
        }
        var e = "function" == typeof define && define.amd,
            i = {
                function: !0,
                object: !0
            },
            s = i[typeof exports] && exports && !exports.nodeType && exports,
            r = i[typeof window] && window || this,
            n = s && i[typeof module] && module && !module.nodeType && "object" == typeof global && global;
        if (!n || n.global !== n && n.window !== n && n.self !== n || (r = n), s && !e) t(r, s);
        else {
            var a = r.JSON,
                o = r.JSON3,
                h = !1,
                c = t(r, r.JSON3 = {
                    noConflict: function () {
                        return h || (h = !0, r.JSON = a, r.JSON3 = o, a = o = null), c
                    }
                });
            r.JSON = {
                parse: c.parse,
                stringify: c.stringify
            }
        }
        e && define(function () {
            return c
        })
    }.call(this),
    function () {
        var t = {};
        t.appendToHead = function (e) {
            t.getHead().appendChild(e)
        }, t.getHead = function () {
            return document.head || document.getElementsByTagName("head")[0]
        }, t.getBody = function () {
            return document.body || document.getElementsByTagName("body")[0]
        }, createjs.DomUtils = t
    }(),
    function () {
        var t = {};
        t.parseXML = function (t, e) {
            var i = null;
            try {
                if (window.DOMParser) {
                    var s = new DOMParser;
                    i = s.parseFromString(t, e)
                }
            } catch (t) {}
            if (!i) try {
                i = new ActiveXObject("Microsoft.XMLDOM"), i.async = !1, i.loadXML(t)
            } catch (t) {
                i = null
            }
            return i
        }, t.parseJSON = function (t) {
            if (null == t) return null;
            try {
                return JSON.parse(t)
            } catch (t) {
                throw t
            }
        }, createjs.DataUtils = t
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t() {
            this.src = null, this.type = null, this.id = null, this.maintainOrder = !1, this.callback = null, this.data = null, this.method = createjs.LoadItem.GET, this.values = null, this.headers = null, this.withCredentials = !1, this.mimeType = null, this.crossOrigin = null, this.loadTimeout = i.LOAD_TIMEOUT_DEFAULT
        }
        var e = t.prototype = {},
            i = t;
        i.LOAD_TIMEOUT_DEFAULT = 8e3, i.create = function (e) {
            if ("string" == typeof e) {
                var s = new t;
                return s.src = e, s
            }
            if (e instanceof i) return e;
            if (e instanceof Object && e.src) return null == e.loadTimeout && (e.loadTimeout = i.LOAD_TIMEOUT_DEFAULT), e;
            throw new Error("Type not recognized.")
        }, e.set = function (t) {
            for (var e in t) this[e] = t[e];
            return this
        }, createjs.LoadItem = i
    }(),
    function () {
        var t = {};
        t.ABSOLUTE_PATT = /^(?:\w+:)?\/{2}/i, t.RELATIVE_PATT = /^[.\/]*?\//i, t.EXTENSION_PATT = /\/?[^\/]+\.(\w{1,5})$/i, t.parseURI = function (e) {
            var i = {
                absolute: !1,
                relative: !1
            };
            if (null == e) return i;
            var s = e.indexOf("?");
            s > -1 && (e = e.substr(0, s));
            var r;
            return t.ABSOLUTE_PATT.test(e) ? i.absolute = !0 : t.RELATIVE_PATT.test(e) && (i.relative = !0), (r = e.match(t.EXTENSION_PATT)) && (i.extension = r[1].toLowerCase()), i
        }, t.formatQueryString = function (t, e) {
            if (null == t) throw new Error("You must specify data.");
            var i = [];
            for (var s in t) i.push(s + "=" + escape(t[s]));
            return e && (i = i.concat(e)), i.join("&")
        }, t.buildPath = function (t, e) {
            if (null == e) return t;
            var i = [],
                s = t.indexOf("?");
            if (-1 != s) {
                var r = t.slice(s + 1);
                i = i.concat(r.split("&"))
            }
            return -1 != s ? t.slice(0, s) + "?" + this.formatQueryString(e, i) : t + "?" + this.formatQueryString(e, i)
        }, t.isCrossDomain = function (t) {
            var e = document.createElement("a");
            e.href = t.src;
            var i = document.createElement("a");
            i.href = location.href;
            var s = "" != e.hostname && (e.port != i.port || e.protocol != i.protocol || e.hostname != i.hostname);
            return s
        }, t.isLocal = function (t) {
            var e = document.createElement("a");
            return e.href = t.src, "" == e.hostname && "file:" == e.protocol
        }, t.isBinary = function (t) {
            switch (t) {
            case createjs.AbstractLoader.IMAGE:
            case createjs.AbstractLoader.BINARY:
                return !0;
            default:
                return !1
            }
        }, t.isImageTag = function (t) {
            return t instanceof HTMLImageElement
        }, t.isAudioTag = function (t) {
            return !!window.HTMLAudioElement && t instanceof HTMLAudioElement
        }, t.isVideoTag = function (t) {
            return !!window.HTMLVideoElement && t instanceof HTMLVideoElement
        }, t.isText = function (t) {
            switch (t) {
            case createjs.AbstractLoader.TEXT:
            case createjs.AbstractLoader.JSON:
            case createjs.AbstractLoader.MANIFEST:
            case createjs.AbstractLoader.XML:
            case createjs.AbstractLoader.CSS:
            case createjs.AbstractLoader.SVG:
            case createjs.AbstractLoader.JAVASCRIPT:
            case createjs.AbstractLoader.SPRITESHEET:
                return !0;
            default:
                return !1
            }
        }, t.getTypeByExtension = function (t) {
            if (null == t) return createjs.AbstractLoader.TEXT;
            switch (t.toLowerCase()) {
            case "jpeg":
            case "jpg":
            case "gif":
            case "png":
            case "webp":
            case "bmp":
                return createjs.AbstractLoader.IMAGE;
            case "ogg":
            case "mp3":
            case "webm":
                return createjs.AbstractLoader.SOUND;
            case "mp4":
            case "webm":
            case "ts":
                return createjs.AbstractLoader.VIDEO;
            case "json":
                return createjs.AbstractLoader.JSON;
            case "xml":
                return createjs.AbstractLoader.XML;
            case "css":
                return createjs.AbstractLoader.CSS;
            case "js":
                return createjs.AbstractLoader.JAVASCRIPT;
            case "svg":
                return createjs.AbstractLoader.SVG;
            default:
                return createjs.AbstractLoader.TEXT
            }
        }, createjs.RequestUtils = t
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t, e, i) {
            this.EventDispatcher_constructor(), this.loaded = !1, this.canceled = !1, this.progress = 0, this.type = i, this.resultFormatter = null, t ? this._item = createjs.LoadItem.create(t) : this._item = null, this._preferXHR = e, this._result = null, this._rawResult = null, this._loadedItems = null, this._tagSrcAttribute = null, this._tag = null
        }
        var e = createjs.extend(t, createjs.EventDispatcher),
            i = t;
        i.POST = "POST", i.GET = "GET", i.BINARY = "binary", i.CSS = "css", i.IMAGE = "image", i.JAVASCRIPT = "javascript", i.JSON = "json", i.JSONP = "jsonp", i.MANIFEST = "manifest", i.SOUND = "sound", i.VIDEO = "video", i.SPRITESHEET = "spritesheet", i.SVG = "svg", i.TEXT = "text", i.XML = "xml", e.getItem = function () {
            return this._item
        }, e.getResult = function (t) {
            return t ? this._rawResult : this._result
        }, e.getTag = function () {
            return this._tag
        }, e.setTag = function (t) {
            this._tag = t
        }, e.load = function () {
            this._createRequest(), this._request.on("complete", this, this), this._request.on("progress", this, this), this._request.on("loadStart", this, this), this._request.on("abort", this, this), this._request.on("timeout", this, this), this._request.on("error", this, this);
            var t = new createjs.Event("initialize");
            t.loader = this._request, this.dispatchEvent(t), this._request.load()
        }, e.cancel = function () {
            this.canceled = !0, this.destroy()
        }, e.destroy = function () {
            this._request && (this._request.removeAllEventListeners(), this._request.destroy()), this._request = null, this._item = null, this._rawResult = null, this._result = null, this._loadItems = null, this.removeAllEventListeners()
        }, e.getLoadedItems = function () {
            return this._loadedItems
        }, e._createRequest = function () {
            this._preferXHR ? this._request = new createjs.XHRRequest(this._item) : this._request = new createjs.TagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
        }, e._createTag = function (t) {
            return null
        }, e._sendLoadStart = function () {
            this._isCanceled() || this.dispatchEvent("loadstart")
        }, e._sendProgress = function (t) {
            if (!this._isCanceled()) {
                var e = null;
                "number" == typeof t ? (this.progress = t, e = new createjs.ProgressEvent(this.progress)) : (e = t, this.progress = t.loaded / t.total, e.progress = this.progress, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0)), this.hasEventListener("progress") && this.dispatchEvent(e)
            }
        }, e._sendComplete = function () {
            if (!this._isCanceled()) {
                this.loaded = !0;
                var t = new createjs.Event("complete");
                t.rawResult = this._rawResult, null != this._result && (t.result = this._result), this.dispatchEvent(t)
            }
        }, e._sendError = function (t) {
            !this._isCanceled() && this.hasEventListener("error") && (null == t && (t = new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")), this.dispatchEvent(t))
        }, e._isCanceled = function () {
            return !(null != window.createjs && !this.canceled)
        }, e.resultFormatter = null, e.handleEvent = function (t) {
            switch (t.type) {
            case "complete":
                this._rawResult = t.target._response;
                var e = this.resultFormatter && this.resultFormatter(this);
                e instanceof Function ? e.call(this, createjs.proxy(this._resultFormatSuccess, this), createjs.proxy(this._resultFormatFailed, this)) : (this._result = e || this._rawResult, this._sendComplete());
                break;
            case "progress":
                this._sendProgress(t);
                break;
            case "error":
                this._sendError(t);
                break;
            case "loadstart":
                this._sendLoadStart();
                break;
            case "abort":
            case "timeout":
                this._isCanceled() || this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_" + t.type.toUpperCase() + "_ERROR"))
            }
        }, e._resultFormatSuccess = function (t) {
            this._result = t, this._sendComplete()
        }, e._resultFormatFailed = function (t) {
            this._sendError(t)
        }, e.buildPath = function (t, e) {
            return createjs.RequestUtils.buildPath(t, e)
        }, e.toString = function () {
            return "[PreloadJS AbstractLoader]"
        }, createjs.AbstractLoader = createjs.promote(t, "EventDispatcher")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t, e, i) {
            this.AbstractLoader_constructor(t, e, i), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", this.on("initialize", this._updateXHR, this)
        }
        var e = createjs.extend(t, createjs.AbstractLoader);
        e.load = function () {
            this._tag || (this._tag = this._createTag(this._item.src)), this._tag.preload = "auto", this._tag.load(), this.AbstractLoader_load()
        }, e._createTag = function () {}, e._createRequest = function () {
            this._preferXHR ? this._request = new createjs.XHRRequest(this._item) : this._request = new createjs.MediaTagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
        }, e._updateXHR = function (t) {
            t.loader.setResponseType && t.loader.setResponseType("blob")
        }, e._formatResult = function (t) {
            if (this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.onstalled = null, this._preferXHR) {
                var e = window.URL || window.webkitURL,
                    i = t.getResult(!0);
                t.getTag().src = e.createObjectURL(i)
            }
            return t.getTag()
        }, createjs.AbstractMediaLoader = createjs.promote(t, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";
        var t = function (t) {
                this._item = t
            },
            e = createjs.extend(t, createjs.EventDispatcher);
        e.load = function () {}, e.destroy = function () {}, e.cancel = function () {}, createjs.AbstractRequest = createjs.promote(t, "EventDispatcher")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t, e, i) {
            this.AbstractRequest_constructor(t), this._tag = e, this._tagSrcAttribute = i, this._loadedHandler = createjs.proxy(this._handleTagComplete, this), this._addedToDOM = !1, this._startTagVisibility = null
        }
        var e = createjs.extend(t, createjs.AbstractRequest);
        e.load = function () {
            this._tag.onload = createjs.proxy(this._handleTagComplete, this), this._tag.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this), this._tag.onerror = createjs.proxy(this._handleError, this);
            var t = new createjs.Event("initialize");
            t.loader = this._tag, this.dispatchEvent(t), this._hideTag(), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout), this._tag[this._tagSrcAttribute] = this._item.src, null == this._tag.parentNode && (window.document.body.appendChild(this._tag), this._addedToDOM = !0)
        }, e.destroy = function () {
            this._clean(), this._tag = null, this.AbstractRequest_destroy()
        }, e._handleReadyStateChange = function () {
            clearTimeout(this._loadTimeout);
            var t = this._tag;
            ("loaded" == t.readyState || "complete" == t.readyState) && this._handleTagComplete()
        }, e._handleError = function () {
            this._clean(), this.dispatchEvent("error")
        }, e._handleTagComplete = function () {
            this._rawResult = this._tag, this._result = this.resultFormatter && this.resultFormatter(this) || this._rawResult, this._clean(), this._showTag(), this.dispatchEvent("complete")
        }, e._handleTimeout = function () {
            this._clean(), this.dispatchEvent(new createjs.Event("timeout"))
        }, e._clean = function () {
            this._tag.onload = null, this._tag.onreadystatechange = null, this._tag.onerror = null, this._addedToDOM && null != this._tag.parentNode && this._tag.parentNode.removeChild(this._tag), clearTimeout(this._loadTimeout)
        }, e._hideTag = function () {
            this._startTagVisibility = this._tag.style.visibility, this._tag.style.visibility = "hidden"
        }, e._showTag = function () {
            this._tag.style.visibility = this._startTagVisibility
        }, e._handleStalled = function () {}, createjs.TagRequest = createjs.promote(t, "AbstractRequest")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t, e, i) {
            this.AbstractRequest_constructor(t), this._tag = e, this._tagSrcAttribute = i, this._loadedHandler = createjs.proxy(this._handleTagComplete, this)
        }
        var e = createjs.extend(t, createjs.TagRequest);
        e.load = function () {
            var t = createjs.proxy(this._handleStalled, this);
            this._stalledCallback = t;
            var e = createjs.proxy(this._handleProgress, this);
            this._handleProgress = e, this._tag.addEventListener("stalled", t), this._tag.addEventListener("progress", e), this._tag.addEventListener && this._tag.addEventListener("canplaythrough", this._loadedHandler, !1), this.TagRequest_load()
        }, e._handleReadyStateChange = function () {
            clearTimeout(this._loadTimeout);
            var t = this._tag;
            ("loaded" == t.readyState || "complete" == t.readyState) && this._handleTagComplete()
        }, e._handleStalled = function () {}, e._handleProgress = function (t) {
            if (t && !(t.loaded > 0 && 0 == t.total)) {
                var e = new createjs.ProgressEvent(t.loaded, t.total);
                this.dispatchEvent(e)
            }
        }, e._clean = function () {
            this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.removeEventListener("stalled", this._stalledCallback), this._tag.removeEventListener("progress", this._progressCallback), this.TagRequest__clean()
        }, createjs.MediaTagRequest = createjs.promote(t, "TagRequest")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t) {
            this.AbstractRequest_constructor(t), this._request = null, this._loadTimeout = null, this._xhrLevel = 1, this._response = null, this._rawResponse = null, this._canceled = !1, this._handleLoadStartProxy = createjs.proxy(this._handleLoadStart, this), this._handleProgressProxy = createjs.proxy(this._handleProgress, this), this._handleAbortProxy = createjs.proxy(this._handleAbort, this), this._handleErrorProxy = createjs.proxy(this._handleError, this), this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, this), this._handleLoadProxy = createjs.proxy(this._handleLoad, this), this._handleReadyStateChangeProxy = createjs.proxy(this._handleReadyStateChange, this), !this._createXHR(t)
        }
        var e = createjs.extend(t, createjs.AbstractRequest);
        t.ACTIVEX_VERSIONS = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], e.getResult = function (t) {
            return t && this._rawResponse ? this._rawResponse : this._response
        }, e.cancel = function () {
            this.canceled = !0, this._clean(), this._request.abort()
        }, e.load = function () {
            if (null == this._request) return void this._handleError();
            null != this._request.addEventListener ? (this._request.addEventListener("loadstart", this._handleLoadStartProxy, !1), this._request.addEventListener("progress", this._handleProgressProxy, !1), this._request.addEventListener("abort", this._handleAbortProxy, !1), this._request.addEventListener("error", this._handleErrorProxy, !1), this._request.addEventListener("timeout", this._handleTimeoutProxy, !1), this._request.addEventListener("load", this._handleLoadProxy, !1), this._request.addEventListener("readystatechange", this._handleReadyStateChangeProxy, !1)) : (this._request.onloadstart = this._handleLoadStartProxy, this._request.onprogress = this._handleProgressProxy, this._request.onabort = this._handleAbortProxy, this._request.onerror = this._handleErrorProxy, this._request.ontimeout = this._handleTimeoutProxy, this._request.onload = this._handleLoadProxy, this._request.onreadystatechange = this._handleReadyStateChangeProxy), 1 == this._xhrLevel && (this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout));
            try {
                this._item.values && this._item.method != createjs.AbstractLoader.GET ? this._item.method == createjs.AbstractLoader.POST && this._request.send(createjs.RequestUtils.formatQueryString(this._item.values)) : this._request.send()
            } catch (t) {
                this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND", null, t))
            }
        }, e.setResponseType = function (t) {
            "blob" === t && (t = window.URL ? "blob" : "arraybuffer", this._responseType = t), this._request.responseType = t
        }, e.getAllResponseHeaders = function () {
            return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null
        }, e.getResponseHeader = function (t) {
            return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(t) : null
        }, e._handleProgress = function (t) {
            if (t && !(t.loaded > 0 && 0 == t.total)) {
                var e = new createjs.ProgressEvent(t.loaded, t.total);
                this.dispatchEvent(e)
            }
        }, e._handleLoadStart = function (t) {
            clearTimeout(this._loadTimeout), this.dispatchEvent("loadstart")
        }, e._handleAbort = function (t) {
            this._clean(), this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED", null, t))
        }, e._handleError = function (t) {
            this._clean(), this.dispatchEvent(new createjs.ErrorEvent(t.message))
        }, e._handleReadyStateChange = function (t) {
            4 == this._request.readyState && this._handleLoad()
        }, e._handleLoad = function (t) {
            if (!this.loaded) {
                this.loaded = !0;
                var e = this._checkError();
                if (e) return void this._handleError(e);
                if (this._response = this._getResponse(), "arraybuffer" === this._responseType) try {
                    this._response = new Blob([this._response])
                } catch (t) {
                    if (window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, "TypeError" === t.name && window.BlobBuilder) {
                        var i = new BlobBuilder;
                        i.append(this._response), this._response = i.getBlob()
                    }
                }
                this._clean(), this.dispatchEvent(new createjs.Event("complete"))
            }
        }, e._handleTimeout = function (t) {
            this._clean(), this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT", null, t))
        }, e._checkError = function () {
            var t = parseInt(this._request.status);
            switch (t) {
            case 404:
            case 0:
                return new Error(t)
            }
            return null
        }, e._getResponse = function () {
            if (null != this._response) return this._response;
            if (null != this._request.response) return this._request.response;
            try {
                if (null != this._request.responseText) return this._request.responseText
            } catch (t) {}
            try {
                if (null != this._request.responseXML) return this._request.responseXML
            } catch (t) {}
            return null
        }, e._createXHR = function (t) {
            var e = createjs.RequestUtils.isCrossDomain(t),
                i = {},
                r = null;
            if (window.XMLHttpRequest) r = new XMLHttpRequest, e && void 0 === r.withCredentials && window.XDomainRequest && (r = new XDomainRequest);
            else {
                for (var n = 0, a = s.ACTIVEX_VERSIONS.length; a > n; n++) {
                    var o = s.ACTIVEX_VERSIONS[n];
                    try {
                        r = new ActiveXObject(o);
                        break
                    } catch (t) {}
                }
                if (null == r) return !1
            }
            null == t.mimeType && createjs.RequestUtils.isText(t.type) && (t.mimeType = "text/plain; charset=utf-8"), t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), this._xhrLevel = "string" == typeof r.responseType ? 2 : 1;
            var h = null;
            if (h = t.method == createjs.AbstractLoader.GET ? createjs.RequestUtils.buildPath(t.src, t.values) : t.src, r.open(t.method || createjs.AbstractLoader.GET, h, !0), e && r instanceof XMLHttpRequest && 1 == this._xhrLevel && (i.Origin = location.origin), t.values && t.method == createjs.AbstractLoader.POST && (i["Content-Type"] = "application/x-www-form-urlencoded"), e || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), t.headers)
                for (var c in t.headers) i[c] = t.headers[c];
            for (c in i) r.setRequestHeader(c, i[c]);
            return r instanceof XMLHttpRequest && void 0 !== t.withCredentials && (r.withCredentials = t.withCredentials), this._request = r, !0
        }, e._clean = function () {
            clearTimeout(this._loadTimeout), null != this._request.removeEventListener ? (this._request.removeEventListener("loadstart", this._handleLoadStartProxy), this._request.removeEventListener("progress", this._handleProgressProxy), this._request.removeEventListener("abort", this._handleAbortProxy), this._request.removeEventListener("error", this._handleErrorProxy), this._request.removeEventListener("timeout", this._handleTimeoutProxy), this._request.removeEventListener("load", this._handleLoadProxy), this._request.removeEventListener("readystatechange", this._handleReadyStateChangeProxy)) : (this._request.onloadstart = null, this._request.onprogress = null, this._request.onabort = null, this._request.onerror = null, this._request.ontimeout = null, this._request.onload = null, this._request.onreadystatechange = null)
        }, e.toString = function () {
            return "[PreloadJS XHRRequest]"
        }, createjs.XHRRequest = createjs.promote(t, "AbstractRequest")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t, e, i) {
            this.AbstractLoader_constructor(), this._plugins = [], this._typeCallbacks = {}, this._extensionCallbacks = {}, this.next = null, this.maintainScriptOrder = !0, this.stopOnError = !1, this._maxConnections = 1, this._availableLoaders = [createjs.ImageLoader, createjs.JavaScriptLoader, createjs.CSSLoader, createjs.JSONLoader, createjs.JSONPLoader, createjs.SoundLoader, createjs.ManifestLoader, createjs.SpriteSheetLoader, createjs.XMLLoader, createjs.SVGLoader, createjs.BinaryLoader, createjs.VideoLoader, createjs.TextLoader], this._defaultLoaderLength = this._availableLoaders.length, this.init(t, e, i)
        }
        var e = createjs.extend(t, createjs.AbstractLoader),
            i = t;
        e.init = function (t, e, i) {
            this.useXHR = !0, this.preferXHR = !0, this._preferXHR = !0, this.setPreferXHR(t), this._paused = !1, this._basePath = e, this._crossOrigin = i, this._loadStartWasDispatched = !1, this._currentlyLoadingScript = null, this._currentLoads = [], this._loadQueue = [], this._loadQueueBackup = [], this._loadItemsById = {}, this._loadItemsBySrc = {}, this._loadedResults = {}, this._loadedRawResults = {}, this._numItems = 0, this._numItemsLoaded = 0, this._scriptOrder = [], this._loadedScripts = [], this._lastProgress = NaN
        }, i.loadTimeout = 8e3, i.LOAD_TIMEOUT = 0, i.BINARY = createjs.AbstractLoader.BINARY, i.CSS = createjs.AbstractLoader.CSS, i.IMAGE = createjs.AbstractLoader.IMAGE, i.JAVASCRIPT = createjs.AbstractLoader.JAVASCRIPT, i.JSON = createjs.AbstractLoader.JSON, i.JSONP = createjs.AbstractLoader.JSONP, i.MANIFEST = createjs.AbstractLoader.MANIFEST, i.SOUND = createjs.AbstractLoader.SOUND, i.VIDEO = createjs.AbstractLoader.VIDEO, i.SVG = createjs.AbstractLoader.SVG, i.TEXT = createjs.AbstractLoader.TEXT, i.XML = createjs.AbstractLoader.XML, i.POST = createjs.AbstractLoader.POST, i.GET = createjs.AbstractLoader.GET, e.registerLoader = function (t) {
            if (!t || !t.canLoadItem) throw new Error("loader is of an incorrect type.");
            if (-1 != this._availableLoaders.indexOf(t)) throw new Error("loader already exists.");
            this._availableLoaders.unshift(t)
        }, e.unregisterLoader = function (t) {
            var e = this._availableLoaders.indexOf(t); - 1 != e && e < this._defaultLoaderLength - 1 && this._availableLoaders.splice(e, 1)
        }, e.setUseXHR = function (t) {
            return this.setPreferXHR(t)
        }, e.setPreferXHR = function (t) {
            return this.preferXHR = 0 != t && null != window.XMLHttpRequest, this.preferXHR
        }, e.removeAll = function () {
            this.remove()
        }, e.remove = function (t) {
            var e = null;
            if (t && !Array.isArray(t)) e = [t];
            else if (t) e = t;
            else if (arguments.length > 0) return;
            var i = !1;
            if (e) {
                for (; e.length;) {
                    var s = e.pop(),
                        r = this.getResult(s);
                    for (n = this._loadQueue.length - 1; n >= 0; n--)
                        if (a = this._loadQueue[n].getItem(), a.id == s || a.src == s) {
                            this._loadQueue.splice(n, 1)[0].cancel();
                            break
                        }
                    for (n = this._loadQueueBackup.length - 1; n >= 0; n--)
                        if (a = this._loadQueueBackup[n].getItem(), a.id == s || a.src == s) {
                            this._loadQueueBackup.splice(n, 1)[0].cancel();
                            break
                        }
                    if (r) this._disposeItem(this.getItem(s));
                    else
                        for (var n = this._currentLoads.length - 1; n >= 0; n--) {
                            var a = this._currentLoads[n].getItem();
                            if (a.id == s || a.src == s) {
                                this._currentLoads.splice(n, 1)[0].cancel(), i = !0;
                                break
                            }
                        }
                }
                i && this._loadNext()
            } else {
                this.close();
                for (var o in this._loadItemsById) this._disposeItem(this._loadItemsById[o]);
                this.init(this.preferXHR, this._basePath)
            }
        }, e.reset = function () {
            this.close();
            for (var t in this._loadItemsById) this._disposeItem(this._loadItemsById[t]);
            for (var e = [], i = 0, s = this._loadQueueBackup.length; s > i; i++) e.push(this._loadQueueBackup[i].getItem());
            this.loadManifest(e, !1)
        }, e.installPlugin = function (t) {
            if (null != t && null != t.getPreloadHandlers) {
                this._plugins.push(t);
                var e = t.getPreloadHandlers();
                if (e.scope = t, null != e.types)
                    for (var i = 0, s = e.types.length; s > i; i++) this._typeCallbacks[e.types[i]] = e;
                if (null != e.extensions)
                    for (i = 0, s = e.extensions.length; s > i; i++) this._extensionCallbacks[e.extensions[i]] = e
            }
        }, e.setMaxConnections = function (t) {
            this._maxConnections = t, !this._paused && this._loadQueue.length > 0 && this._loadNext()
        }, e.loadFile = function (t, e, i) {
            if (null == t) {
                var s = new createjs.ErrorEvent("PRELOAD_NO_FILE");
                return void this._sendError(s)
            }
            this._addItem(t, null, i), e !== !1 ? this.setPaused(!1) : this.setPaused(!0)
        }, e.loadManifest = function (t, e, s) {
            var r = null,
                n = null;
            if (Array.isArray(t)) {
                if (0 == t.length) {
                    var a = new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY");
                    return void this._sendError(a)
                }
                r = t
            } else if ("string" == typeof t) r = [{
                src: t,
                type: i.MANIFEST
            }];
            else {
                if ("object" != typeof t) {
                    var a = new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL");
                    return void this._sendError(a)
                }
                if (void 0 !== t.src) {
                    if (null == t.type) t.type = i.MANIFEST;
                    else if (t.type != i.MANIFEST) {
                        var a = new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE");
                        this._sendError(a)
                    }
                    r = [t]
                } else void 0 !== t.manifest && (r = t.manifest, n = t.path)
            }
            for (var o = 0, h = r.length; h > o; o++) this._addItem(r[o], n, s);
            e !== !1 ? this.setPaused(!1) : this.setPaused(!0)
        }, e.load = function () {
            this.setPaused(!1)
        }, e.getItem = function (t) {
            return this._loadItemsById[t] || this._loadItemsBySrc[t]
        }, e.getResult = function (t, e) {
            var i = this._loadItemsById[t] || this._loadItemsBySrc[t];
            if (null == i) return null;
            var s = i.id;
            return e && this._loadedRawResults[s] ? this._loadedRawResults[s] : this._loadedResults[s]
        }, e.getItems = function (t) {
            var e = [];
            for (var i in this._loadItemsById) {
                var s = this._loadItemsById[i],
                    r = this.getResult(i);
                (t !== !0 || null != r) && e.push({
                    item: s,
                    result: r,
                    rawResult: this.getResult(i, !0)
                })
            }
            return e
        }, e.setPaused = function (t) {
            this._paused = t, this._paused || this._loadNext()
        }, e.close = function () {
            for (; this._currentLoads.length;) this._currentLoads.pop().cancel();
            this._scriptOrder.length = 0, this._loadedScripts.length = 0, this.loadStartWasDispatched = !1, this._itemCount = 0, this._lastProgress = NaN
        }, e._addItem = function (t, e, i) {
            var s = this._createLoadItem(t, e, i);
            if (null != s) {
                var r = this._createLoader(s);
                null != r && ("plugins" in r && (r.plugins = this._plugins), s._loader = r, this._loadQueue.push(r), this._loadQueueBackup.push(r), this._numItems++, this._updateProgress(), (this.maintainScriptOrder && s.type == createjs.LoadQueue.JAVASCRIPT || s.maintainOrder === !0) && (this._scriptOrder.push(s), this._loadedScripts.push(null)))
            }
        }, e._createLoadItem = function (t, e, i) {
            var s = createjs.LoadItem.create(t);
            if (null == s) return null;
            var r = "",
                n = i || this._basePath;
            if (s.src instanceof Object) {
                if (!s.type) return null;
                if (e) {
                    r = e;
                    var a = createjs.RequestUtils.parseURI(e);
                    null == n || a.absolute || a.relative || (r = n + r)
                } else null != n && (r = n)
            } else {
                var o = createjs.RequestUtils.parseURI(s.src);
                o.extension && (s.ext = o.extension), null == s.type && (s.type = createjs.RequestUtils.getTypeByExtension(s.ext));
                var h = s.src;
                if (!o.absolute && !o.relative)
                    if (e) {
                        r = e;
                        var a = createjs.RequestUtils.parseURI(e);
                        h = e + h, null == n || a.absolute || a.relative || (r = n + r)
                    } else null != n && (r = n);
                s.src = r + s.src
            }
            s.path = r, (void 0 === s.id || null === s.id || "" === s.id) && (s.id = h);
            var c = this._typeCallbacks[s.type] || this._extensionCallbacks[s.ext];
            if (c) {
                var u = c.callback.call(c.scope, s, this);
                if (u === !1) return null;
                u === !0 || null != u && (s._loader = u), o = createjs.RequestUtils.parseURI(s.src), null != o.extension && (s.ext = o.extension)
            }
            return this._loadItemsById[s.id] = s, this._loadItemsBySrc[s.src] = s, null == s.crossOrigin && (s.crossOrigin = this._crossOrigin), s
        }, e._createLoader = function (t) {
            if (null != t._loader) return t._loader;
            for (var e = this.preferXHR, i = 0; i < this._availableLoaders.length; i++) {
                var s = this._availableLoaders[i];
                if (s && s.canLoadItem(t)) return new s(t, e)
            }
            return null
        }, e._loadNext = function () {
            if (!this._paused) {
                this._loadStartWasDispatched || (this._sendLoadStart(), this._loadStartWasDispatched = !0), this._numItems == this._numItemsLoaded ? (this.loaded = !0, this._sendComplete(), this.next && this.next.load && this.next.load()) : this.loaded = !1;
                for (var t = 0; t < this._loadQueue.length && !(this._currentLoads.length >= this._maxConnections); t++) {
                    var e = this._loadQueue[t];
                    this._canStartLoad(e) && (this._loadQueue.splice(t, 1), t--, this._loadItem(e))
                }
            }
        }, e._loadItem = function (t) {
            t.on("fileload", this._handleFileLoad, this), t.on("progress", this._handleProgress, this), t.on("complete", this._handleFileComplete, this), t.on("error", this._handleError, this), t.on("fileerror", this._handleFileError, this), this._currentLoads.push(t), this._sendFileStart(t.getItem()), t.load()
        }, e._handleFileLoad = function (t) {
            t.target = null, this.dispatchEvent(t)
        }, e._handleFileError = function (t) {
            var e = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, t.item);
            this._sendError(e)
        }, e._handleError = function (t) {
            var e = t.target;
            this._numItemsLoaded++, this._finishOrderedItem(e, !0), this._updateProgress();
            var i = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, e.getItem());
            this._sendError(i), this.stopOnError ? this.setPaused(!0) : (this._removeLoadItem(e), this._cleanLoadItem(e), this._loadNext())
        }, e._handleFileComplete = function (t) {
            var e = t.target,
                i = e.getItem(),
                s = e.getResult();
            this._loadedResults[i.id] = s;
            var r = e.getResult(!0);
            null != r && r !== s && (this._loadedRawResults[i.id] = r), this._saveLoadedItems(e), this._removeLoadItem(e), this._finishOrderedItem(e) || this._processFinishedLoad(i, e), this._cleanLoadItem(e)
        }, e._saveLoadedItems = function (t) {
            var e = t.getLoadedItems();
            if (null !== e)
                for (var i = 0; i < e.length; i++) {
                    var s = e[i].item;
                    this._loadItemsBySrc[s.src] = s, this._loadItemsById[s.id] = s, this._loadedResults[s.id] = e[i].result, this._loadedRawResults[s.id] = e[i].rawResult
                }
        }, e._finishOrderedItem = function (t, e) {
            var i = t.getItem();
            if (this.maintainScriptOrder && i.type == createjs.LoadQueue.JAVASCRIPT || i.maintainOrder) {
                t instanceof createjs.JavaScriptLoader && (this._currentlyLoadingScript = !1);
                var s = createjs.indexOf(this._scriptOrder, i);
                return -1 != s && (this._loadedScripts[s] = e === !0 || i, this._checkScriptLoadOrder(), !0)
            }
            return !1
        }, e._checkScriptLoadOrder = function () {
            for (var t = this._loadedScripts.length, e = 0; t > e; e++) {
                var i = this._loadedScripts[e];
                if (null === i) break;
                if (i !== !0) {
                    var s = this._loadedResults[i.id];
                    i.type == createjs.LoadQueue.JAVASCRIPT && createjs.DomUtils.appendToHead(s);
                    var r = i._loader;
                    this._processFinishedLoad(i, r), this._loadedScripts[e] = !0
                }
            }
        }, e._processFinishedLoad = function (t, e) {
            if (this._numItemsLoaded++, !this.maintainScriptOrder && t.type == createjs.LoadQueue.JAVASCRIPT) {
                var i = e.getTag();
                createjs.DomUtils.appendToHead(i)
            }
            this._updateProgress(), this._sendFileComplete(t, e), this._loadNext()
        }, e._canStartLoad = function (t) {
            if (!this.maintainScriptOrder || t.preferXHR) return !0;
            var e = t.getItem();
            if (e.type != createjs.LoadQueue.JAVASCRIPT) return !0;
            if (this._currentlyLoadingScript) return !1;
            for (var i = this._scriptOrder.indexOf(e), s = 0; i > s;) {
                var r = this._loadedScripts[s];
                if (null == r) return !1;
                s++
            }
            return this._currentlyLoadingScript = !0, !0
        }, e._removeLoadItem = function (t) {
            for (var e = this._currentLoads.length, i = 0; e > i; i++)
                if (this._currentLoads[i] == t) {
                    this._currentLoads.splice(i, 1);
                    break
                }
        }, e._cleanLoadItem = function (t) {
            var e = t.getItem();
            e && delete e._loader
        }, e._handleProgress = function (t) {
            var e = t.target;
            this._sendFileProgress(e.getItem(), e.progress), this._updateProgress()
        }, e._updateProgress = function () {
            var t = this._numItemsLoaded / this._numItems,
                e = this._numItems - this._numItemsLoaded;
            if (e > 0) {
                for (var i = 0, s = 0, r = this._currentLoads.length; r > s; s++) i += this._currentLoads[s].progress;
                t += i / e * (e / this._numItems)
            }
            this._lastProgress != t && (this._sendProgress(t), this._lastProgress = t)
        }, e._disposeItem = function (t) {
            delete this._loadedResults[t.id], delete this._loadedRawResults[t.id], delete this._loadItemsById[t.id], delete this._loadItemsBySrc[t.src]
        }, e._sendFileProgress = function (t, e) {
            if (!this._isCanceled() && !this._paused && this.hasEventListener("fileprogress")) {
                var i = new createjs.Event("fileprogress");
                i.progress = e, i.loaded = e, i.total = 1, i.item = t, this.dispatchEvent(i)
            }
        }, e._sendFileComplete = function (t, e) {
            if (!this._isCanceled() && !this._paused) {
                var i = new createjs.Event("fileload");
                i.loader = e, i.item = t, i.result = this._loadedResults[t.id], i.rawResult = this._loadedRawResults[t.id], t.completeHandler && t.completeHandler(i), this.hasEventListener("fileload") && this.dispatchEvent(i)
            }
        }, e._sendFileStart = function (t) {
            var e = new createjs.Event("filestart");
            e.item = t, this.hasEventListener("filestart") && this.dispatchEvent(e)
        }, e.toString = function () {
            return "[PreloadJS LoadQueue]"
        }, createjs.LoadQueue = createjs.promote(t, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t) {
            this.AbstractLoader_constructor(t, !0, createjs.AbstractLoader.TEXT)
        }
        var e = (createjs.extend(t, createjs.AbstractLoader), t);
        e.canLoadItem = function (t) {
            return t.type == createjs.AbstractLoader.TEXT
        }, createjs.TextLoader = createjs.promote(t, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t) {
            this.AbstractLoader_constructor(t, !0, createjs.AbstractLoader.BINARY), this.on("initialize", this._updateXHR, this)
        }
        var e = createjs.extend(t, createjs.AbstractLoader),
            i = t;
        i.canLoadItem = function (t) {
            return t.type == createjs.AbstractLoader.BINARY
        }, e._updateXHR = function (t) {
            t.loader.setResponseType("arraybuffer")
        }, createjs.BinaryLoader = createjs.promote(t, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t, e) {
            this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.CSS), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "href", e ? this._tag = document.createElement("style") : this._tag = document.createElement("link"), this._tag.rel = "stylesheet", this._tag.type = "text/css"
        }
        var e = createjs.extend(t, createjs.AbstractLoader),
            i = t;
        i.canLoadItem = function (t) {
            return t.type == createjs.AbstractLoader.CSS
        }, e._formatResult = function (t) {
            if (this._preferXHR) {
                var e = t.getTag();
                if (e.styleSheet) e.styleSheet.cssText = t.getResult(!0);
                else {
                    var i = document.createTextNode(t.getResult(!0));
                    e.appendChild(i)
                }
            } else e = this._tag;
            return createjs.DomUtils.appendToHead(e), e
        }, createjs.CSSLoader = createjs.promote(t, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t, e) {
            this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.IMAGE), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", createjs.RequestUtils.isImageTag(t) ? this._tag = t : createjs.RequestUtils.isImageTag(t.src) ? this._tag = t.src : createjs.RequestUtils.isImageTag(t.tag) && (this._tag = t.tag), null != this._tag ? this._preferXHR = !1 : this._tag = document.createElement("img"), this.on("initialize", this._updateXHR, this)
        }
        var e = createjs.extend(t, createjs.AbstractLoader),
            i = t;
        i.canLoadItem = function (t) {
            return t.type == createjs.AbstractLoader.IMAGE
        }, e.load = function () {
            if ("" != this._tag.src && this._tag.complete) return void this._sendComplete();
            var t = this._item.crossOrigin;
            1 == t && (t = "Anonymous"), null == t || createjs.RequestUtils.isLocal(this._item.src) || (this._tag.crossOrigin = t), this.AbstractLoader_load()
        }, e._updateXHR = function (t) {
            t.loader.mimeType = "text/plain; charset=x-user-defined-binary", t.loader.setResponseType && t.loader.setResponseType("blob")
        }, e._formatResult = function (t) {
            return this._formatImage
        }, e._formatImage = function (t, e) {
            var i = this._tag,
                s = window.URL || window.webkitURL;
            if (this._preferXHR)
                if (s) {
                    var r = s.createObjectURL(this.getResult(!0));
                    i.src = r, i.addEventListener("load", this._cleanUpURL, !1), i.addEventListener("error", this._cleanUpURL, !1)
                } else i.src = this._item.src;
            i.complete ? t(i) : (i.onload = createjs.proxy(function () {
                t(this._tag)
            }, this), i.onerror = createjs.proxy(function () {
                e(_this._tag)
            }, this))
        }, e._cleanUpURL = function (t) {
            var e = window.URL || window.webkitURL;
            e.revokeObjectURL(t.target.src)
        }, createjs.ImageLoader = createjs.promote(t, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t, e) {
            this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.JAVASCRIPT), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", this.setTag(document.createElement("script"))
        }
        var e = createjs.extend(t, createjs.AbstractLoader),
            i = t;
        i.canLoadItem = function (t) {
            return t.type == createjs.AbstractLoader.JAVASCRIPT
        }, e._formatResult = function (t) {
            var e = t.getTag();
            return this._preferXHR && (e.text = t.getResult(!0)), e
        }, createjs.JavaScriptLoader = createjs.promote(t, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t) {
            this.AbstractLoader_constructor(t, !0, createjs.AbstractLoader.JSON), this.resultFormatter = this._formatResult
        }
        var e = createjs.extend(t, createjs.AbstractLoader),
            i = t;
        i.canLoadItem = function (t) {
            return t.type == createjs.AbstractLoader.JSON
        }, e._formatResult = function (t) {
            var e = null;
            try {
                e = createjs.DataUtils.parseJSON(t.getResult(!0))
            } catch (t) {
                var i = new createjs.ErrorEvent("JSON_FORMAT", null, t);
                return this._sendError(i), t
            }
            return e
        }, createjs.JSONLoader = createjs.promote(t, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t) {
            this.AbstractLoader_constructor(t, !1, createjs.AbstractLoader.JSONP), this.setTag(document.createElement("script")), this.getTag().type = "text/javascript"
        }
        var e = createjs.extend(t, createjs.AbstractLoader),
            i = t;
        i.canLoadItem = function (t) {
            return t.type == createjs.AbstractLoader.JSONP
        }, e.cancel = function () {
            this.AbstractLoader_cancel(), this._dispose()
        }, e.load = function () {
            if (null == this._item.callback) throw new Error("callback is required for loading JSONP requests.");
            if (null != window[this._item.callback]) throw new Error("JSONP callback '" + this._item.callback + "' already exists on window. You need to specify a different callback or re-name the current one.");
            window[this._item.callback] = createjs.proxy(this._handleLoad, this), window.document.body.appendChild(this._tag), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout), this._tag.src = this._item.src
        }, e._handleLoad = function (t) {
            this._result = this._rawResult = t, this._sendComplete(), this._dispose()
        }, e._handleTimeout = function () {
            this._dispose(), this.dispatchEvent(new createjs.ErrorEvent("timeout"))
        }, e._dispose = function () {
            window.document.body.removeChild(this._tag), delete window[this._item.callback], clearTimeout(this._loadTimeout)
        }, createjs.JSONPLoader = createjs.promote(t, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t) {
            this.AbstractLoader_constructor(t, null, createjs.AbstractLoader.MANIFEST), this.plugins = null, this._manifestQueue = null
        }
        var e = createjs.extend(t, createjs.AbstractLoader),
            i = t;
        i.MANIFEST_PROGRESS = .25, i.canLoadItem = function (t) {
            return t.type == createjs.AbstractLoader.MANIFEST
        }, e.load = function () {
            this.AbstractLoader_load()
        }, e._createRequest = function () {
            var t = this._item.callback;
            null != t ? this._request = new createjs.JSONPLoader(this._item) : this._request = new createjs.JSONLoader(this._item)
        }, e.handleEvent = function (t) {
            switch (t.type) {
            case "complete":
                return this._rawResult = t.target.getResult(!0), this._result = t.target.getResult(), this._sendProgress(i.MANIFEST_PROGRESS), void this._loadManifest(this._result);
            case "progress":
                return t.loaded *= i.MANIFEST_PROGRESS, this.progress = t.loaded / t.total, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0), void this._sendProgress(t)
            }
            this.AbstractLoader_handleEvent(t)
        }, e.destroy = function () {
            this.AbstractLoader_destroy(), this._manifestQueue.close()
        }, e._loadManifest = function (t) {
            if (t && t.manifest) {
                var e = this._manifestQueue = new createjs.LoadQueue;
                e.on("fileload", this._handleManifestFileLoad, this), e.on("progress", this._handleManifestProgress, this), e.on("complete", this._handleManifestComplete, this, !0), e.on("error", this._handleManifestError, this, !0);
                for (var i = 0, s = this.plugins.length; s > i; i++) e.installPlugin(this.plugins[i]);
                e.loadManifest(t)
            } else this._sendComplete()
        }, e._handleManifestFileLoad = function (t) {
            t.target = null, this.dispatchEvent(t)
        }, e._handleManifestComplete = function (t) {
            this._loadedItems = this._manifestQueue.getItems(!0), this._sendComplete()
        }, e._handleManifestProgress = function (t) {
            this.progress = t.progress * (1 - i.MANIFEST_PROGRESS) + i.MANIFEST_PROGRESS, this._sendProgress(this.progress)
        }, e._handleManifestError = function (t) {
            var e = new createjs.Event("fileerror");
            e.item = t.data, this.dispatchEvent(e)
        }, createjs.ManifestLoader = createjs.promote(t, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t, e) {
            this.AbstractMediaLoader_constructor(t, e, createjs.AbstractLoader.SOUND), createjs.RequestUtils.isAudioTag(t) ? this._tag = t : createjs.RequestUtils.isAudioTag(t.src) ? this._tag = t : createjs.RequestUtils.isAudioTag(t.tag) && (this._tag = createjs.RequestUtils.isAudioTag(t) ? t : t.src), null != this._tag && (this._preferXHR = !1)
        }
        var e = createjs.extend(t, createjs.AbstractMediaLoader),
            i = t;
        i.canLoadItem = function (t) {
            return t.type == createjs.AbstractLoader.SOUND
        }, e._createTag = function (t) {
            var e = document.createElement("audio");
            return e.autoplay = !1, e.preload = "none", e.src = t, e
        }, createjs.SoundLoader = createjs.promote(t, "AbstractMediaLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t, e) {
            this.AbstractMediaLoader_constructor(t, e, createjs.AbstractLoader.VIDEO), createjs.RequestUtils.isVideoTag(t) || createjs.RequestUtils.isVideoTag(t.src) ? (this.setTag(createjs.RequestUtils.isVideoTag(t) ? t : t.src), this._preferXHR = !1) : this.setTag(this._createTag())
        }
        var e = createjs.extend(t, createjs.AbstractMediaLoader),
            i = t;
        e._createTag = function () {
            return document.createElement("video")
        }, i.canLoadItem = function (t) {
            return t.type == createjs.AbstractLoader.VIDEO
        }, createjs.VideoLoader = createjs.promote(t, "AbstractMediaLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t, e) {
            this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.SPRITESHEET), this._manifestQueue = null
        }
        var e = createjs.extend(t, createjs.AbstractLoader),
            i = t;
        i.SPRITESHEET_PROGRESS = .25, i.canLoadItem = function (t) {
            return t.type == createjs.AbstractLoader.SPRITESHEET
        }, e.destroy = function () {
            this.AbstractLoader_destroy, this._manifestQueue.close()
        }, e._createRequest = function () {
            var t = this._item.callback;
            null != t ? this._request = new createjs.JSONPLoader(this._item) : this._request = new createjs.JSONLoader(this._item)
        }, e.handleEvent = function (t) {
            switch (t.type) {
            case "complete":
                return this._rawResult = t.target.getResult(!0), this._result = t.target.getResult(), this._sendProgress(i.SPRITESHEET_PROGRESS), void this._loadManifest(this._result);
            case "progress":
                return t.loaded *= i.SPRITESHEET_PROGRESS, this.progress = t.loaded / t.total, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0), void this._sendProgress(t)
            }
            this.AbstractLoader_handleEvent(t)
        }, e._loadManifest = function (t) {
            if (t && t.images) {
                var e = this._manifestQueue = new createjs.LoadQueue(this._preferXHR, this._item.path, this._item.crossOrigin);
                e.on("complete", this._handleManifestComplete, this, !0), e.on("fileload", this._handleManifestFileLoad, this), e.on("progress", this._handleManifestProgress, this), e.on("error", this._handleManifestError, this, !0), e.loadManifest(t.images)
            }
        }, e._handleManifestFileLoad = function (t) {
            var e = t.result;
            if (null != e) {
                var i = this.getResult().images,
                    s = i.indexOf(t.item.src);
                i[s] = e
            }
        }, e._handleManifestComplete = function (t) {
            this._result = new createjs.SpriteSheet(this._result), this._loadedItems = this._manifestQueue.getItems(!0), this._sendComplete()
        }, e._handleManifestProgress = function (t) {
            this.progress = t.progress * (1 - i.SPRITESHEET_PROGRESS) + i.SPRITESHEET_PROGRESS, this._sendProgress(this.progress)
        }, e._handleManifestError = function (t) {
            var e = new createjs.Event("fileerror");
            e.item = t.data, this.dispatchEvent(e)
        }, createjs.SpriteSheetLoader = createjs.promote(t, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t, e) {
            this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.SVG), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "data", e ? this.setTag(document.createElement("svg")) : (this.setTag(document.createElement("object")), this.getTag().type = "image/svg+xml")
        }
        var e = createjs.extend(t, createjs.AbstractLoader),
            i = t;
        i.canLoadItem = function (t) {
            return t.type == createjs.AbstractLoader.SVG
        }, e._formatResult = function (t) {
            var e = createjs.DataUtils.parseXML(t.getResult(!0), "text/xml"),
                i = t.getTag();
            return !this._preferXHR && document.body.contains(i) && document.body.removeChild(i), null != e.documentElement ? (i.appendChild(e.documentElement), i.style.visibility = "visible", i) : e
        }, createjs.SVGLoader = createjs.promote(t, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t) {
            this.AbstractLoader_constructor(t, !0, createjs.AbstractLoader.XML), this.resultFormatter = this._formatResult
        }
        var e = createjs.extend(t, createjs.AbstractLoader),
            i = t;
        i.canLoadItem = function (t) {
            return t.type == createjs.AbstractLoader.XML
        }, e._formatResult = function (t) {
            return createjs.DataUtils.parseXML(t.getResult(!0), "text/xml")
        }, createjs.XMLLoader = createjs.promote(t, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        var t = createjs.SoundJS = createjs.SoundJS || {};
        t.version = "0.6.2", t.buildDate = "Thu, 26 Nov 2015 20:44:31 GMT"
    }(), this.createjs = this.createjs || {}, createjs.indexOf = function (t, e) {
        "use strict";
        for (var i = 0, s = t.length; s > i; i++)
            if (e === t[i]) return i;
        return -1
    }, this.createjs = this.createjs || {},
    function () {
        "use strict";
        createjs.proxy = function (t, e) {
            var i = Array.prototype.slice.call(arguments, 2);
            return function () {
                return t.apply(e, Array.prototype.slice.call(arguments, 0).concat(i))
            }
        }
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t() {
            throw "BrowserDetect cannot be instantiated"
        }
        var e = t.agent = window.navigator.userAgent;
        t.isWindowPhone = e.indexOf("IEMobile") > -1 || e.indexOf("Windows Phone") > -1, t.isFirefox = e.indexOf("Firefox") > -1, t.isOpera = null != window.opera, t.isChrome = e.indexOf("Chrome") > -1, t.isIOS = (e.indexOf("iPod") > -1 || e.indexOf("iPhone") > -1 || e.indexOf("iPad") > -1) && !t.isWindowPhone, t.isAndroid = e.indexOf("Android") > -1 && !t.isWindowPhone, t.isBlackberry = e.indexOf("Blackberry") > -1, createjs.BrowserDetect = t
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";
        var t = function () {
                this.interrupt = null, this.delay = null, this.offset = null, this.loop = null, this.volume = null, this.pan = null, this.startTime = null, this.duration = null
            },
            e = t.prototype = {},
            i = t;
        i.create = function (t) {
            if (t instanceof i || t instanceof Object) {
                var e = new createjs.PlayPropsConfig;
                return e.set(t), e
            }
            throw new Error("Type not recognized.")
        }, e.set = function (t) {
            for (var e in t) this[e] = t[e];
            return this
        }, e.toString = function () {
            return "[PlayPropsConfig]"
        }, createjs.PlayPropsConfig = i
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t() {
            throw "Sound cannot be instantiated"
        }

        function e(t, e) {
            this.init(t, e)
        }
        var i = t;
        i.INTERRUPT_ANY = "any", i.INTERRUPT_EARLY = "early", i.INTERRUPT_LATE = "late", i.INTERRUPT_NONE = "none", i.PLAY_INITED = "playInited", i.PLAY_SUCCEEDED = "playSucceeded", i.PLAY_INTERRUPTED = "playInterrupted", i.PLAY_FINISHED = "playFinished", i.PLAY_FAILED = "playFailed", i.SUPPORTED_EXTENSIONS = ["mp3", "ogg", "opus", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"], i.EXTENSION_MAP = {
            m4a: "mp4"
        }, i.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([\/.]*?(?:[^?]+)?\/)?((?:[^\/?]+)\.(\w+))(?:\?(\S+)?)?$/, i.defaultInterruptBehavior = i.INTERRUPT_NONE, i.alternateExtensions = [], i.activePlugin = null, i._masterVolume = 1, Object.defineProperty(i, "volume", {
            get: function () {
                return this._masterVolume
            }, set: function (t) {
                if (null == Number(t)) return !1;
                if (t = Math.max(0, Math.min(1, t)), i._masterVolume = t, !this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(t))
                    for (var e = this._instances, s = 0, r = e.length; r > s; s++) e[s].setMasterVolume(t)
            }
        }), i._masterMute = !1, Object.defineProperty(i, "muted", {
            get: function () {
                return this._masterMute
            }, set: function (t) {
                if (null == t) return !1;
                if (this._masterMute = t, !this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(t))
                    for (var e = this._instances, i = 0, s = e.length; s > i; i++) e[i].setMasterMute(t);
                return !0
            }
        }), Object.defineProperty(i, "capabilities", {
            get: function () {
                return null == i.activePlugin ? null : i.activePlugin._capabilities
            }, set: function (t) {
                return !1
            }
        }), i._pluginsRegistered = !1, i._lastID = 0, i._instances = [], i._idHash = {}, i._preloadHash = {}, i._defaultPlayPropsHash = {}, i.addEventListener = null, i.removeEventListener = null, i.removeAllEventListeners = null, i.dispatchEvent = null, i.hasEventListener = null, i._listeners = null, createjs.EventDispatcher.initialize(i), i.getPreloadHandlers = function () {
            return {
                callback: createjs.proxy(i.initLoad, i),
                types: ["sound"],
                extensions: i.SUPPORTED_EXTENSIONS
            }
        }, i._handleLoadComplete = function (t) {
            var e = t.target.getItem().src;
            if (i._preloadHash[e])
                for (var s = 0, r = i._preloadHash[e].length; r > s; s++) {
                    var n = i._preloadHash[e][s];
                    if (i._preloadHash[e][s] = !0, i.hasEventListener("fileload")) {
                        var t = new createjs.Event("fileload");
                        t.src = n.src, t.id = n.id, t.data = n.data, t.sprite = n.sprite, i.dispatchEvent(t)
                    }
                }
        }, i._handleLoadError = function (t) {
            var e = t.target.getItem().src;
            if (i._preloadHash[e])
                for (var s = 0, r = i._preloadHash[e].length; r > s; s++) {
                    var n = i._preloadHash[e][s];
                    if (i._preloadHash[e][s] = !1, i.hasEventListener("fileerror")) {
                        var t = new createjs.Event("fileerror");
                        t.src = n.src, t.id = n.id, t.data = n.data, t.sprite = n.sprite, i.dispatchEvent(t)
                    }
                }
        }, i._registerPlugin = function (t) {
            return !!t.isSupported() && (i.activePlugin = new t, !0)
        }, i.registerPlugins = function (t) {
            i._pluginsRegistered = !0;
            for (var e = 0, s = t.length; s > e; e++)
                if (i._registerPlugin(t[e])) return !0;
            return !1
        }, i.initializeDefaultPlugins = function () {
            return null != i.activePlugin || !i._pluginsRegistered && !!i.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin])
        }, i.isReady = function () {
            return null != i.activePlugin
        }, i.getCapabilities = function () {
            return null == i.activePlugin ? null : i.activePlugin._capabilities
        }, i.getCapability = function (t) {
            return null == i.activePlugin ? null : i.activePlugin._capabilities[t]
        }, i.initLoad = function (t) {
            return i._registerSound(t)
        }, i._registerSound = function (t) {
            if (!i.initializeDefaultPlugins()) return !1;
            var s;
            if (t.src instanceof Object ? (s = i._parseSrc(t.src), s.src = t.path + s.src) : s = i._parsePath(t.src), null == s) return !1;
            t.src = s.src, t.type = "sound";
            var r = t.data,
                n = null;
            if (null != r && (isNaN(r.channels) ? isNaN(r) || (n = parseInt(r)) : n = parseInt(r.channels), r.audioSprite))
                for (var a, o = r.audioSprite.length; o--;) a = r.audioSprite[o], i._idHash[a.id] = {
                    src: t.src,
                    startTime: parseInt(a.startTime),
                    duration: parseInt(a.duration)
                }, a.defaultPlayProps && (i._defaultPlayPropsHash[a.id] = createjs.PlayPropsConfig.create(a.defaultPlayProps));
            null != t.id && (i._idHash[t.id] = {
                src: t.src
            });
            var h = i.activePlugin.register(t);
            return e.create(t.src, n), null != r && isNaN(r) ? t.data.channels = n || e.maxPerChannel() : t.data = n || e.maxPerChannel(), h.type && (t.type = h.type), t.defaultPlayProps && (i._defaultPlayPropsHash[t.src] = createjs.PlayPropsConfig.create(t.defaultPlayProps)), h
        }, i.registerSound = function (t, e, s, r, n) {
            var a = {
                src: t,
                id: e,
                data: s,
                defaultPlayProps: n
            };
            t instanceof Object && t.src && (r = e, a = t), a = createjs.LoadItem.create(a), a.path = r, null == r || a.src instanceof Object || (a.src = r + t);
            var o = i._registerSound(a);
            if (!o) return !1;
            if (i._preloadHash[a.src] || (i._preloadHash[a.src] = []), i._preloadHash[a.src].push(a), 1 == i._preloadHash[a.src].length) o.on("complete", createjs.proxy(this._handleLoadComplete, this)), o.on("error", createjs.proxy(this._handleLoadError, this)), i.activePlugin.preload(o);
            else if (1 == i._preloadHash[a.src][0]) return !0;
            return a
        }, i.registerSounds = function (t, e) {
            var i = [];
            t.path && (e ? e += t.path : e = t.path, t = t.manifest);
            for (var s = 0, r = t.length; r > s; s++) i[s] = createjs.Sound.registerSound(t[s].src, t[s].id, t[s].data, e, t[s].defaultPlayProps);
            return i
        }, i.removeSound = function (t, s) {
            if (null == i.activePlugin) return !1;
            t instanceof Object && t.src && (t = t.src);
            var r;
            if (t instanceof Object ? r = i._parseSrc(t) : (t = i._getSrcById(t).src, r = i._parsePath(t)), null == r) return !1;
            t = r.src, null != s && (t = s + t);
            for (var n in i._idHash) i._idHash[n].src == t && delete i._idHash[n];
            return e.removeSrc(t), delete i._preloadHash[t], i.activePlugin.removeSound(t), !0
        }, i.removeSounds = function (t, e) {
            var i = [];
            t.path && (e ? e += t.path : e = t.path, t = t.manifest);
            for (var s = 0, r = t.length; r > s; s++) i[s] = createjs.Sound.removeSound(t[s].src, e);
            return i
        }, i.removeAllSounds = function () {
            i._idHash = {}, i._preloadHash = {}, e.removeAll(), i.activePlugin && i.activePlugin.removeAllSounds()
        }, i.loadComplete = function (t) {
            if (!i.isReady()) return !1;
            var e = i._parsePath(t);
            return t = e ? i._getSrcById(e.src).src : i._getSrcById(t).src, void 0 != i._preloadHash[t] && 1 == i._preloadHash[t][0]
        }, i._parsePath = function (t) {
            "string" != typeof t && (t = t.toString());
            var e = t.match(i.FILE_PATTERN);
            if (null == e) return !1;
            for (var s = e[4], r = e[5], n = i.capabilities, a = 0; !n[r];)
                if (r = i.alternateExtensions[a++], a > i.alternateExtensions.length) return null;
            t = t.replace("." + e[5], "." + r);
            var o = {
                name: s,
                src: t,
                extension: r
            };
            return o
        }, i._parseSrc = function (t) {
            var e = {
                    name: void 0,
                    src: void 0,
                    extension: void 0
                },
                s = i.capabilities;
            for (var r in t)
                if (t.hasOwnProperty(r) && s[r]) {
                    e.src = t[r], e.extension = r;
                    break
                }
            if (!e.src) return !1;
            var n = e.src.lastIndexOf("/");
            return -1 != n ? e.name = e.src.slice(n + 1) : e.name = e.src, e
        }, i.play = function (t, e, s, r, n, a, o, h, c) {
            var u;
            u = e instanceof Object || e instanceof createjs.PlayPropsConfig ? createjs.PlayPropsConfig.create(e) : createjs.PlayPropsConfig.create({
                interrupt: e,
                delay: s,
                offset: r,
                loop: n,
                volume: a,
                pan: o,
                startTime: h,
                duration: c
            });
            var l = i.createInstance(t, u.startTime, u.duration),
                d = i._playInstance(l, u);
            return d || l._playFailed(), l
        }, i.createInstance = function (t, s, r) {
            if (!i.initializeDefaultPlugins()) return new createjs.DefaultSoundInstance(t, s, r);
            var n = i._defaultPlayPropsHash[t];
            t = i._getSrcById(t);
            var a = i._parsePath(t.src),
                o = null;
            return null != a && null != a.src ? (e.create(a.src), null == s && (s = t.startTime), o = i.activePlugin.create(a.src, s, r || t.duration), n = n || i._defaultPlayPropsHash[a.src], n && o.applyPlayProps(n)) : o = new createjs.DefaultSoundInstance(t, s, r), o.uniqueId = i._lastID++, o
        }, i.stop = function () {
            for (var t = this._instances, e = t.length; e--;) t[e].stop()
        }, i.setVolume = function (t) {
            if (null == Number(t)) return !1;
            if (t = Math.max(0, Math.min(1, t)), i._masterVolume = t, !this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(t))
                for (var e = this._instances, s = 0, r = e.length; r > s; s++) e[s].setMasterVolume(t)
        }, i.getVolume = function () {
            return this._masterVolume
        }, i.setMute = function (t) {
            if (null == t) return !1;
            if (this._masterMute = t, !this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(t))
                for (var e = this._instances, i = 0, s = e.length; s > i; i++) e[i].setMasterMute(t);
            return !0
        }, i.getMute = function () {
            return this._masterMute
        }, i.setDefaultPlayProps = function (t, e) {
            t = i._getSrcById(t), i._defaultPlayPropsHash[i._parsePath(t.src).src] = createjs.PlayPropsConfig.create(e)
        }, i.getDefaultPlayProps = function (t) {
            return t = i._getSrcById(t), i._defaultPlayPropsHash[i._parsePath(t.src).src]
        }, i._playInstance = function (t, e) {
            var s = i._defaultPlayPropsHash[t.src] || {};
            if (null == e.interrupt && (e.interrupt = s.interrupt || i.defaultInterruptBehavior), null == e.delay && (e.delay = s.delay || 0), null == e.offset && (e.offset = t.getPosition()), null == e.loop && (e.loop = t.loop), null == e.volume && (e.volume = t.volume), null == e.pan && (e.pan = t.pan), 0 == e.delay) {
                var r = i._beginPlaying(t, e);
                if (!r) return !1
            } else {
                var n = setTimeout(function () {
                    i._beginPlaying(t, e)
                }, e.delay);
                t.delayTimeoutId = n
            }
            return this._instances.push(t), !0
        }, i._beginPlaying = function (t, i) {
            if (!e.add(t, i.interrupt)) return !1;
            var s = t._beginPlaying(i);
            if (!s) {
                var r = createjs.indexOf(this._instances, t);
                return r > -1 && this._instances.splice(r, 1), !1
            }
            return !0
        }, i._getSrcById = function (t) {
            return i._idHash[t] || {
                src: t
            }
        }, i._playFinished = function (t) {
            e.remove(t);
            var i = createjs.indexOf(this._instances, t);
            i > -1 && this._instances.splice(i, 1)
        }, createjs.Sound = t, e.channels = {}, e.create = function (t, i) {
            var s = e.get(t);
            return null == s && (e.channels[t] = new e(t, i), !0)
        }, e.removeSrc = function (t) {
            var i = e.get(t);
            return null != i && (i._removeAll(), delete e.channels[t], !0)
        }, e.removeAll = function () {
            for (var t in e.channels) e.channels[t]._removeAll();
            e.channels = {}
        }, e.add = function (t, i) {
            var s = e.get(t.src);
            return null != s && s._add(t, i)
        }, e.remove = function (t) {
            var i = e.get(t.src);
            return null != i && (i._remove(t), !0)
        }, e.maxPerChannel = function () {
            return s.maxDefault
        }, e.get = function (t) {
            return e.channels[t]
        };
        var s = e.prototype;
        s.constructor = e, s.src = null, s.max = null, s.maxDefault = 100, s.length = 0, s.init = function (t, e) {
            this.src = t, this.max = e || this.maxDefault, -1 == this.max && (this.max = this.maxDefault), this._instances = []
        }, s._get = function (t) {
            return this._instances[t]
        }, s._add = function (t, e) {
            return !!this._getSlot(e, t) && (this._instances.push(t), this.length++, !0)
        }, s._remove = function (t) {
            var e = createjs.indexOf(this._instances, t);
            return -1 != e && (this._instances.splice(e, 1), this.length--, !0)
        }, s._removeAll = function () {
            for (var t = this.length - 1; t >= 0; t--) this._instances[t].stop()
        }, s._getSlot = function (e, i) {
            var s, r;
            if (e != t.INTERRUPT_NONE && (r = this._get(0), null == r)) return !0;
            for (var n = 0, a = this.max; a > n; n++) {
                if (s = this._get(n), null == s) return !0;
                if (s.playState == t.PLAY_FINISHED || s.playState == t.PLAY_INTERRUPTED || s.playState == t.PLAY_FAILED) {
                    r = s;
                    break
                }
                e != t.INTERRUPT_NONE && (e == t.INTERRUPT_EARLY && s.getPosition() < r.getPosition() || e == t.INTERRUPT_LATE && s.getPosition() > r.getPosition()) && (r = s)
            }
            return null != r && (r._interrupt(), this._remove(r), !0)
        }, s.toString = function () {
            return "[Sound SoundChannel]"
        }
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";
        var t = function (t, e, i, s) {
                this.EventDispatcher_constructor(), this.src = t, this.uniqueId = -1, this.playState = null, this.delayTimeoutId = null, this._volume = 1, Object.defineProperty(this, "volume", {
                    get: this.getVolume,
                    set: this.setVolume
                }), this._pan = 0, Object.defineProperty(this, "pan", {
                    get: this.getPan,
                    set: this.setPan
                }), this._startTime = Math.max(0, e || 0), Object.defineProperty(this, "startTime", {
                    get: this.getStartTime,
                    set: this.setStartTime
                }), this._duration = Math.max(0, i || 0), Object.defineProperty(this, "duration", {
                    get: this.getDuration,
                    set: this.setDuration
                }), this._playbackResource = null, Object.defineProperty(this, "playbackResource", {
                    get: this.getPlaybackResource,
                    set: this.setPlaybackResource
                }), s !== !1 && s !== !0 && this.setPlaybackResource(s), this._position = 0, Object.defineProperty(this, "position", {
                    get: this.getPosition,
                    set: this.setPosition
                }), this._loop = 0, Object.defineProperty(this, "loop", {
                    get: this.getLoop,
                    set: this.setLoop
                }), this._muted = !1, Object.defineProperty(this, "muted", {
                    get: this.getMuted,
                    set: this.setMuted
                }), this._paused = !1, Object.defineProperty(this, "paused", {
                    get: this.getPaused,
                    set: this.setPaused
                })
            },
            e = createjs.extend(t, createjs.EventDispatcher);
        e.play = function (t, e, i, s, r, n) {
            var a;
            return a = t instanceof Object || t instanceof createjs.PlayPropsConfig ? createjs.PlayPropsConfig.create(t) : createjs.PlayPropsConfig.create({
                interrupt: t,
                delay: e,
                offset: i,
                loop: s,
                volume: r,
                pan: n
            }), this.playState == createjs.Sound.PLAY_SUCCEEDED ? (this.applyPlayProps(a), void(this._paused && this.setPaused(!1))) : (this._cleanUp(), createjs.Sound._playInstance(this, a), this)
        }, e.stop = function () {
            return this._position = 0, this._paused = !1, this._handleStop(), this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, this
        }, e.destroy = function () {
            this._cleanUp(), this.src = null, this.playbackResource = null, this.removeAllEventListeners()
        }, e.applyPlayProps = function (t) {
            return null != t.offset && this.setPosition(t.offset), null != t.loop && this.setLoop(t.loop), null != t.volume && this.setVolume(t.volume), null != t.pan && this.setPan(t.pan), null != t.startTime && (this.setStartTime(t.startTime), this.setDuration(t.duration)), this
        }, e.toString = function () {
            return "[AbstractSoundInstance]"
        }, e.getPaused = function () {
            return this._paused
        }, e.setPaused = function (t) {
            return t !== !0 && t !== !1 || this._paused == t || 1 == t && this.playState != createjs.Sound.PLAY_SUCCEEDED ? void 0 : (this._paused = t, t ? this._pause() : this._resume(), clearTimeout(this.delayTimeoutId), this)
        }, e.setVolume = function (t) {
            return t == this._volume ? this : (this._volume = Math.max(0, Math.min(1, t)), this._muted || this._updateVolume(), this)
        }, e.getVolume = function () {
            return this._volume
        }, e.setMuted = function (t) {
            return t === !0 || t === !1 ? (this._muted = t, this._updateVolume(), this) : void 0
        }, e.getMuted = function () {
            return this._muted
        }, e.setPan = function (t) {
            return t == this._pan ? this : (this._pan = Math.max(-1, Math.min(1, t)), this._updatePan(), this)
        }, e.getPan = function () {
            return this._pan
        }, e.getPosition = function () {
            return this._paused || this.playState != createjs.Sound.PLAY_SUCCEEDED || (this._position = this._calculateCurrentPosition()), this._position
        }, e.setPosition = function (t) {
            return this._position = Math.max(0, t), this.playState == createjs.Sound.PLAY_SUCCEEDED && this._updatePosition(), this
        }, e.getStartTime = function () {
            return this._startTime
        }, e.setStartTime = function (t) {
            return t == this._startTime ? this : (this._startTime = Math.max(0, t || 0), this._updateStartTime(), this)
        }, e.getDuration = function () {
            return this._duration
        }, e.setDuration = function (t) {
            return t == this._duration ? this : (this._duration = Math.max(0, t || 0), this._updateDuration(), this)
        }, e.setPlaybackResource = function (t) {
            return this._playbackResource = t, 0 == this._duration && this._setDurationFromSource(), this
        }, e.getPlaybackResource = function () {
            return this._playbackResource
        }, e.getLoop = function () {
            return this._loop
        }, e.setLoop = function (t) {
            null != this._playbackResource && (0 != this._loop && 0 == t ? this._removeLooping(t) : 0 == this._loop && 0 != t && this._addLooping(t)), this._loop = t
        }, e._sendEvent = function (t) {
            var e = new createjs.Event(t);
            this.dispatchEvent(e)
        }, e._cleanUp = function () {
            clearTimeout(this.delayTimeoutId), this._handleCleanUp(), this._paused = !1, createjs.Sound._playFinished(this)
        }, e._interrupt = function () {
            this._cleanUp(), this.playState = createjs.Sound.PLAY_INTERRUPTED, this._sendEvent("interrupted")
        }, e._beginPlaying = function (t) {
            return this.setPosition(t.offset), this.setLoop(t.loop), this.setVolume(t.volume), this.setPan(t.pan), null != t.startTime && (this.setStartTime(t.startTime), this.setDuration(t.duration)), null != this._playbackResource && this._position < this._duration ? (this._paused = !1, this._handleSoundReady(), this.playState = createjs.Sound.PLAY_SUCCEEDED, this._sendEvent("succeeded"), !0) : (this._playFailed(), !1)
        }, e._playFailed = function () {
            this._cleanUp(), this.playState = createjs.Sound.PLAY_FAILED, this._sendEvent("failed")
        }, e._handleSoundComplete = function (t) {
            return this._position = 0, 0 != this._loop ? (this._loop--, this._handleLoop(), void this._sendEvent("loop")) : (this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, void this._sendEvent("complete"))
        }, e._handleSoundReady = function () {}, e._updateVolume = function () {}, e._updatePan = function () {}, e._updateStartTime = function () {}, e._updateDuration = function () {}, e._setDurationFromSource = function () {}, e._calculateCurrentPosition = function () {}, e._updatePosition = function () {}, e._removeLooping = function (t) {}, e._addLooping = function (t) {}, e._pause = function () {}, e._resume = function () {}, e._handleStop = function () {}, e._handleCleanUp = function () {}, e._handleLoop = function () {}, createjs.AbstractSoundInstance = createjs.promote(t, "EventDispatcher"), createjs.DefaultSoundInstance = createjs.AbstractSoundInstance
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";
        var t = function () {
                this._capabilities = null, this._loaders = {}, this._audioSources = {}, this._soundInstances = {}, this._volume = 1, this._loaderClass, this._soundInstanceClass
            },
            e = t.prototype;
        t._capabilities = null, t.isSupported = function () {
            return !0
        }, e.register = function (t) {
            var e = this._loaders[t.src];
            return e && !e.canceled ? this._loaders[t.src] : (this._audioSources[t.src] = !0, this._soundInstances[t.src] = [], e = new this._loaderClass(t), e.on("complete", this._handlePreloadComplete, this), this._loaders[t.src] = e, e)
        }, e.preload = function (t) {
            t.on("error", this._handlePreloadError, this), t.load()
        }, e.isPreloadStarted = function (t) {
            return null != this._audioSources[t]
        }, e.isPreloadComplete = function (t) {
            return !(null == this._audioSources[t] || 1 == this._audioSources[t])
        }, e.removeSound = function (t) {
            if (this._soundInstances[t]) {
                for (var e = this._soundInstances[t].length; e--;) {
                    var i = this._soundInstances[t][e];
                    i.destroy()
                }
                delete this._soundInstances[t], delete this._audioSources[t], this._loaders[t] && this._loaders[t].destroy(), delete this._loaders[t]
            }
        }, e.removeAllSounds = function () {
            for (var t in this._audioSources) this.removeSound(t)
        }, e.create = function (t, e, i) {
            this.isPreloadStarted(t) || this.preload(this.register(t));
            var s = new this._soundInstanceClass(t, e, i, this._audioSources[t]);
            return this._soundInstances[t].push(s), s
        }, e.setVolume = function (t) {
            return this._volume = t, this._updateVolume(), !0
        }, e.getVolume = function () {
            return this._volume
        }, e.setMute = function (t) {
            return this._updateVolume(), !0
        }, e.toString = function () {
            return "[AbstractPlugin]"
        }, e._handlePreloadComplete = function (t) {
            var e = t.target.getItem().src;
            this._audioSources[e] = t.result;
            for (var i = 0, s = this._soundInstances[e].length; s > i; i++) {
                var r = this._soundInstances[e][i];
                r.setPlaybackResource(this._audioSources[e]);
            }
        }, e._handlePreloadError = function (t) {}, e._updateVolume = function () {}, createjs.AbstractPlugin = t
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t) {
            this.AbstractLoader_constructor(t, !0, createjs.AbstractLoader.SOUND)
        }
        var e = createjs.extend(t, createjs.AbstractLoader);
        t.context = null, e.toString = function () {
            return "[WebAudioLoader]"
        }, e._createRequest = function () {
            this._request = new createjs.XHRRequest(this._item, (!1)), this._request.setResponseType("arraybuffer")
        }, e._sendComplete = function (e) {
            t.context.decodeAudioData(this._rawResult, createjs.proxy(this._handleAudioDecoded, this), createjs.proxy(this._sendError, this))
        }, e._handleAudioDecoded = function (t) {
            this._result = t, this.AbstractLoader__sendComplete()
        }, createjs.WebAudioLoader = createjs.promote(t, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t, e, s, r) {
            this.AbstractSoundInstance_constructor(t, e, s, r), this.gainNode = i.context.createGain(), this.panNode = i.context.createPanner(), this.panNode.panningModel = i._panningModel, this.panNode.connect(this.gainNode), this._updatePan(), this.sourceNode = null, this._soundCompleteTimeout = null, this._sourceNodeNext = null, this._playbackStartTime = 0, this._endedHandler = createjs.proxy(this._handleSoundComplete, this)
        }
        var e = createjs.extend(t, createjs.AbstractSoundInstance),
            i = t;
        i.context = null, i._scratchBuffer = null, i.destinationNode = null, i._panningModel = "equalpower", e.destroy = function () {
            this.AbstractSoundInstance_destroy(), this.panNode.disconnect(0), this.panNode = null, this.gainNode.disconnect(0), this.gainNode = null
        }, e.toString = function () {
            return "[WebAudioSoundInstance]"
        }, e._updatePan = function () {
            this.panNode.setPosition(this._pan, 0, -.5)
        }, e._removeLooping = function (t) {
            this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)
        }, e._addLooping = function (t) {
            this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0))
        }, e._setDurationFromSource = function () {
            this._duration = 1e3 * this.playbackResource.duration
        }, e._handleCleanUp = function () {
            this.sourceNode && this.playState == createjs.Sound.PLAY_SUCCEEDED && (this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)), 0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(0), clearTimeout(this._soundCompleteTimeout), this._playbackStartTime = 0
        }, e._cleanUpAudioNode = function (t) {
            if (t) {
                t.stop(0), t.disconnect(0);
                try {
                    t.buffer = i._scratchBuffer
                } catch (t) {}
                t = null
            }
            return t
        }, e._handleSoundReady = function (t) {
            this.gainNode.connect(i.destinationNode);
            var e = .001 * this._duration,
                s = .001 * this._position;
            s > e && (s = e), this.sourceNode = this._createAndPlayAudioNode(i.context.currentTime - e, s), this._playbackStartTime = this.sourceNode.startTime - s, this._soundCompleteTimeout = setTimeout(this._endedHandler, 1e3 * (e - s)), 0 != this._loop && (this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0))
        }, e._createAndPlayAudioNode = function (t, e) {
            var s = i.context.createBufferSource();
            s.buffer = this.playbackResource, s.connect(this.panNode);
            var r = .001 * this._duration;
            return s.startTime = t + r, s.start(s.startTime, e + .001 * this._startTime, r - e), s
        }, e._pause = function () {
            this._position = 1e3 * (i.context.currentTime - this._playbackStartTime), this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext), 0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(0), clearTimeout(this._soundCompleteTimeout)
        }, e._resume = function () {
            this._handleSoundReady()
        }, e._updateVolume = function () {
            var t = this._muted ? 0 : this._volume;
            t != this.gainNode.gain.value && (this.gainNode.gain.value = t)
        }, e._calculateCurrentPosition = function () {
            return 1e3 * (i.context.currentTime - this._playbackStartTime)
        }, e._updatePosition = function () {
            this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext), clearTimeout(this._soundCompleteTimeout), this._paused || this._handleSoundReady()
        }, e._handleLoop = function () {
            this._cleanUpAudioNode(this.sourceNode), this.sourceNode = this._sourceNodeNext, this._playbackStartTime = this.sourceNode.startTime, this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0), this._soundCompleteTimeout = setTimeout(this._endedHandler, this._duration)
        }, e._updateDuration = function () {
            this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._pause(), this._resume())
        }, createjs.WebAudioSoundInstance = createjs.promote(t, "AbstractSoundInstance")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t() {
            this.AbstractPlugin_constructor(), this._panningModel = i._panningModel, this.context = i.context, this.dynamicsCompressorNode = this.context.createDynamicsCompressor(), this.dynamicsCompressorNode.connect(this.context.destination), this.gainNode = this.context.createGain(), this.gainNode.connect(this.dynamicsCompressorNode), createjs.WebAudioSoundInstance.destinationNode = this.gainNode, this._capabilities = i._capabilities, this._loaderClass = createjs.WebAudioLoader, this._soundInstanceClass = createjs.WebAudioSoundInstance, this._addPropsToClasses()
        }
        var e = createjs.extend(t, createjs.AbstractPlugin),
            i = t;
        i._capabilities = null, i._panningModel = "equalpower", i.context = null, i._scratchBuffer = null, i._unlocked = !1, i.isSupported = function () {
            var t = createjs.BrowserDetect.isIOS || createjs.BrowserDetect.isAndroid || createjs.BrowserDetect.isBlackberry;
            return !("file:" == location.protocol && !t && !this._isFileXHRSupported()) && (i._generateCapabilities(), null != i.context)
        }, i.playEmptySound = function () {
            if (null != i.context) {
                var t = i.context.createBufferSource();
                t.buffer = i._scratchBuffer, t.connect(i.context.destination), t.start(0, 0, 0)
            }
        }, i._isFileXHRSupported = function () {
            var t = !0,
                e = new XMLHttpRequest;
            try {
                e.open("GET", "WebAudioPluginTest.fail", !1)
            } catch (e) {
                return t = !1
            }
            e.onerror = function () {
                t = !1
            }, e.onload = function () {
                t = 404 == this.status || 200 == this.status || 0 == this.status && "" != this.response
            };
            try {
                e.send()
            } catch (e) {
                t = !1
            }
            return t
        }, i._generateCapabilities = function () {
            if (null == i._capabilities) {
                var t = document.createElement("audio");
                if (null == t.canPlayType) return null;
                if (null == i.context)
                    if (window.AudioContext) i.context = new AudioContext;
                    else {
                        if (!window.webkitAudioContext) return null;
                        i.context = new webkitAudioContext
                    }
                null == i._scratchBuffer && (i._scratchBuffer = i.context.createBuffer(1, 1, 22050)), i._compatibilitySetUp(), "ontouchstart" in window && "running" != i.context.state && (i._unlock(), document.addEventListener("mousedown", i._unlock, !0), document.addEventListener("touchend", i._unlock, !0)), i._capabilities = {
                    panning: !0,
                    volume: !0,
                    tracks: -1
                };
                for (var e = createjs.Sound.SUPPORTED_EXTENSIONS, s = createjs.Sound.EXTENSION_MAP, r = 0, n = e.length; n > r; r++) {
                    var a = e[r],
                        o = s[a] || a;
                    i._capabilities[a] = "no" != t.canPlayType("audio/" + a) && "" != t.canPlayType("audio/" + a) || "no" != t.canPlayType("audio/" + o) && "" != t.canPlayType("audio/" + o)
                }
                i.context.destination.numberOfChannels < 2 && (i._capabilities.panning = !1)
            }
        }, i._compatibilitySetUp = function () {
            if (i._panningModel = "equalpower", !i.context.createGain) {
                i.context.createGain = i.context.createGainNode;
                var t = i.context.createBufferSource();
                t.__proto__.start = t.__proto__.noteGrainOn, t.__proto__.stop = t.__proto__.noteOff, i._panningModel = 0
            }
        }, i._unlock = function () {
            i._unlocked || (i.playEmptySound(), "running" == i.context.state && (document.removeEventListener("mousedown", i._unlock, !0), document.removeEventListener("touchend", i._unlock, !0), i._unlocked = !0))
        }, e.toString = function () {
            return "[WebAudioPlugin]"
        }, e._addPropsToClasses = function () {
            var t = this._soundInstanceClass;
            t.context = this.context, t._scratchBuffer = i._scratchBuffer, t.destinationNode = this.gainNode, t._panningModel = this._panningModel, this._loaderClass.context = this.context
        }, e._updateVolume = function () {
            var t = createjs.Sound._masterMute ? 0 : this._volume;
            t != this.gainNode.gain.value && (this.gainNode.gain.value = t)
        }, createjs.WebAudioPlugin = createjs.promote(t, "AbstractPlugin")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t() {
            throw "HTMLAudioTagPool cannot be instantiated"
        }

        function e(t) {
            this._tags = []
        }
        var i = t;
        i._tags = {}, i._tagPool = new e, i._tagUsed = {}, i.get = function (t) {
            var e = i._tags[t];
            return null == e ? (e = i._tags[t] = i._tagPool.get(), e.src = t) : i._tagUsed[t] ? (e = i._tagPool.get(), e.src = t) : i._tagUsed[t] = !0, e
        }, i.set = function (t, e) {
            e == i._tags[t] ? i._tagUsed[t] = !1 : i._tagPool.set(e)
        }, i.remove = function (t) {
            var e = i._tags[t];
            return null != e && (i._tagPool.set(e), delete i._tags[t], delete i._tagUsed[t], !0)
        }, i.getDuration = function (t) {
            var e = i._tags[t];
            return null != e && e.duration ? 1e3 * e.duration : 0
        }, createjs.HTMLAudioTagPool = t;
        var s = e.prototype;
        s.constructor = e, s.get = function () {
            var t;
            return t = 0 == this._tags.length ? this._createTag() : this._tags.pop(), null == t.parentNode && document.body.appendChild(t), t
        }, s.set = function (t) {
            var e = createjs.indexOf(this._tags, t); - 1 == e && (this._tags.src = null, this._tags.push(t))
        }, s.toString = function () {
            return "[TagPool]"
        }, s._createTag = function () {
            var t = document.createElement("audio");
            return t.autoplay = !1, t.preload = "none", t
        }
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t, e, i, s) {
            this.AbstractSoundInstance_constructor(t, e, i, s), this._audioSpriteStopTime = null, this._delayTimeoutId = null, this._endedHandler = createjs.proxy(this._handleSoundComplete, this), this._readyHandler = createjs.proxy(this._handleTagReady, this), this._stalledHandler = createjs.proxy(this._playFailed, this), this._audioSpriteEndHandler = createjs.proxy(this._handleAudioSpriteLoop, this), this._loopHandler = createjs.proxy(this._handleSoundComplete, this), i ? this._audioSpriteStopTime = .001 * (e + i) : this._duration = createjs.HTMLAudioTagPool.getDuration(this.src)
        }
        var e = createjs.extend(t, createjs.AbstractSoundInstance);
        e.setMasterVolume = function (t) {
            this._updateVolume()
        }, e.setMasterMute = function (t) {
            this._updateVolume()
        }, e.toString = function () {
            return "[HTMLAudioSoundInstance]"
        }, e._removeLooping = function () {
            null != this._playbackResource && (this._playbackResource.loop = !1, this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
        }, e._addLooping = function () {
            null == this._playbackResource || this._audioSpriteStopTime || (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.loop = !0)
        }, e._handleCleanUp = function () {
            var t = this._playbackResource;
            if (null != t) {
                t.pause(), t.loop = !1, t.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), t.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), t.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), t.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), t.removeEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1);
                try {
                    t.currentTime = this._startTime
                } catch (t) {}
                createjs.HTMLAudioTagPool.set(this.src, t), this._playbackResource = null
            }
        }, e._beginPlaying = function (t) {
            return this._playbackResource = createjs.HTMLAudioTagPool.get(this.src), this.AbstractSoundInstance__beginPlaying(t)
        }, e._handleSoundReady = function (t) {
            if (4 !== this._playbackResource.readyState) {
                var e = this._playbackResource;
                return e.addEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), e.addEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), e.preload = "auto", void e.load()
            }
            this._updateVolume(), this._playbackResource.currentTime = .001 * (this._startTime + this._position), this._audioSpriteStopTime ? this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1) : (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), 0 != this._loop && (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.loop = !0)), this._playbackResource.play()
        }, e._handleTagReady = function (t) {
            this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), this._handleSoundReady()
        }, e._pause = function () {
            this._playbackResource.pause()
        }, e._resume = function () {
            this._playbackResource.play()
        }, e._updateVolume = function () {
            if (null != this._playbackResource) {
                var t = this._muted || createjs.Sound._masterMute ? 0 : this._volume * createjs.Sound._masterVolume;
                t != this._playbackResource.volume && (this._playbackResource.volume = t)
            }
        }, e._calculateCurrentPosition = function () {
            return 1e3 * this._playbackResource.currentTime - this._startTime
        }, e._updatePosition = function () {
            this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, !1);
            try {
                this._playbackResource.currentTime = .001 * (this._position + this._startTime)
            } catch (t) {
                this._handleSetPositionSeek(null)
            }
        }, e._handleSetPositionSeek = function (t) {
            null != this._playbackResource && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
        }, e._handleAudioSpriteLoop = function (t) {
            this._playbackResource.currentTime <= this._audioSpriteStopTime || (this._playbackResource.pause(), 0 == this._loop ? this._handleSoundComplete(null) : (this._position = 0, this._loop--, this._playbackResource.currentTime = .001 * this._startTime, this._paused || this._playbackResource.play(), this._sendEvent("loop")))
        }, e._handleLoop = function (t) {
            0 == this._loop && (this._playbackResource.loop = !1, this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
        }, e._updateStartTime = function () {
            this._audioSpriteStopTime = .001 * (this._startTime + this._duration), this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1))
        }, e._updateDuration = function () {
            this._audioSpriteStopTime = .001 * (this._startTime + this._duration), this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1))
        }, e._setDurationFromSource = function () {
            this._duration = createjs.HTMLAudioTagPool.getDuration(this.src), this._playbackResource = null
        }, createjs.HTMLAudioSoundInstance = createjs.promote(t, "AbstractSoundInstance")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t() {
            this.AbstractPlugin_constructor(), this.defaultNumChannels = 2, this._capabilities = i._capabilities, this._loaderClass = createjs.SoundLoader, this._soundInstanceClass = createjs.HTMLAudioSoundInstance
        }
        var e = createjs.extend(t, createjs.AbstractPlugin),
            i = t;
        i.MAX_INSTANCES = 30, i._AUDIO_READY = "canplaythrough", i._AUDIO_ENDED = "ended", i._AUDIO_SEEKED = "seeked", i._AUDIO_STALLED = "stalled", i._TIME_UPDATE = "timeupdate", i._capabilities = null, i.isSupported = function () {
            return i._generateCapabilities(), null != i._capabilities
        }, i._generateCapabilities = function () {
            if (null == i._capabilities) {
                var t = document.createElement("audio");
                if (null == t.canPlayType) return null;
                i._capabilities = {
                    panning: !1,
                    volume: !0,
                    tracks: -1
                };
                for (var e = createjs.Sound.SUPPORTED_EXTENSIONS, s = createjs.Sound.EXTENSION_MAP, r = 0, n = e.length; n > r; r++) {
                    var a = e[r],
                        o = s[a] || a;
                    i._capabilities[a] = "no" != t.canPlayType("audio/" + a) && "" != t.canPlayType("audio/" + a) || "no" != t.canPlayType("audio/" + o) && "" != t.canPlayType("audio/" + o)
                }
            }
        }, e.register = function (t) {
            var e = createjs.HTMLAudioTagPool.get(t.src),
                i = this.AbstractPlugin_register(t);
            return i.setTag(e), i
        }, e.removeSound = function (t) {
            this.AbstractPlugin_removeSound(t), createjs.HTMLAudioTagPool.remove(t)
        }, e.create = function (t, e, i) {
            var s = this.AbstractPlugin_create(t, e, i);
            return s.setPlaybackResource(null), s
        }, e.toString = function () {
            return "[HTMLAudioPlugin]"
        }, e.setVolume = e.getVolume = e.setMute = null, createjs.HTMLAudioPlugin = createjs.promote(t, "AbstractPlugin")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(e, i, s) {
            this.ignoreGlobalPause = !1, this.loop = !1, this.duration = 0, this.pluginData = s || {}, this.target = e, this.position = null, this.passive = !1, this._paused = !1, this._curQueueProps = {}, this._initQueueProps = {}, this._steps = [], this._actions = [], this._prevPosition = 0, this._stepPosition = 0, this._prevPos = -1, this._target = e, this._useTicks = !1, this._inited = !1, this._registered = !1, i && (this._useTicks = i.useTicks, this.ignoreGlobalPause = i.ignoreGlobalPause, this.loop = i.loop, i.onChange && this.addEventListener("change", i.onChange), i.override && t.removeTweens(e)), i && i.paused ? this._paused = !0 : createjs.Tween._register(this, !0), i && null != i.position && this.setPosition(i.position, t.NONE)
        }
        var e = createjs.extend(t, createjs.EventDispatcher);
        t.NONE = 0, t.LOOP = 1, t.REVERSE = 2, t.IGNORE = {}, t._tweens = [], t._plugins = {}, t.get = function (e, i, s, r) {
            return r && t.removeTweens(e), new t(e, i, s)
        }, t.tick = function (e, i) {
            for (var s = t._tweens.slice(), r = s.length - 1; r >= 0; r--) {
                var n = s[r];
                i && !n.ignoreGlobalPause || n._paused || n.tick(n._useTicks ? 1 : e)
            }
        }, t.handleEvent = function (t) {
            "tick" == t.type && this.tick(t.delta, t.paused)
        }, t.removeTweens = function (e) {
            if (e.tweenjs_count) {
                for (var i = t._tweens, s = i.length - 1; s >= 0; s--) {
                    var r = i[s];
                    r._target == e && (r._paused = !0, i.splice(s, 1))
                }
                e.tweenjs_count = 0
            }
        }, t.removeAllTweens = function () {
            for (var e = t._tweens, i = 0, s = e.length; s > i; i++) {
                var r = e[i];
                r._paused = !0, r.target && (r.target.tweenjs_count = 0)
            }
            e.length = 0
        }, t.hasActiveTweens = function (e) {
            return e ? null != e.tweenjs_count && !!e.tweenjs_count : t._tweens && !!t._tweens.length
        }, t.installPlugin = function (e, i) {
            var s = e.priority;
            null == s && (e.priority = s = 0);
            for (var r = 0, n = i.length, a = t._plugins; n > r; r++) {
                var o = i[r];
                if (a[o]) {
                    for (var h = a[o], c = 0, u = h.length; u > c && !(s < h[c].priority); c++);
                    a[o].splice(c, 0, e)
                } else a[o] = [e]
            }
        }, t._register = function (e, i) {
            var s = e._target,
                r = t._tweens;
            if (i && !e._registered) s && (s.tweenjs_count = s.tweenjs_count ? s.tweenjs_count + 1 : 1), r.push(e), !t._inited && createjs.Ticker && (createjs.Ticker.addEventListener("tick", t), t._inited = !0);
            else if (!i && e._registered) {
                s && s.tweenjs_count--;
                for (var n = r.length; n--;)
                    if (r[n] == e) {
                        r.splice(n, 1);
                        break
                    }
            }
            e._registered = i
        }, e.wait = function (t, e) {
            if (null == t || 0 >= t) return this;
            var i = this._cloneProps(this._curQueueProps);
            return this._addStep({
                d: t,
                p0: i,
                e: this._linearEase,
                p1: i,
                v: e
            })
        }, e.to = function (t, e, i) {
            return (isNaN(e) || 0 > e) && (e = 0), this._addStep({
                d: e || 0,
                p0: this._cloneProps(this._curQueueProps),
                e: i,
                p1: this._cloneProps(this._appendQueueProps(t))
            })
        }, e.call = function (t, e, i) {
            return this._addAction({
                f: t,
                p: e ? e : [this],
                o: i ? i : this._target
            })
        }, e.set = function (t, e) {
            return this._addAction({
                f: this._set,
                o: this,
                p: [t, e ? e : this._target]
            })
        }, e.play = function (t) {
            return t || (t = this), this.call(t.setPaused, [!1], t)
        }, e.pause = function (t) {
            return t || (t = this), this.call(t.setPaused, [!0], t)
        }, e.setPosition = function (t, e) {
            0 > t && (t = 0), null == e && (e = 1);
            var i = t,
                s = !1;
            if (i >= this.duration && (this.loop ? i %= this.duration : (i = this.duration, s = !0)), i == this._prevPos) return s;
            var r = this._prevPos;
            if (this.position = this._prevPos = i, this._prevPosition = t, this._target)
                if (s) this._updateTargetProps(null, 1);
                else if (this._steps.length > 0) {
                for (var n = 0, a = this._steps.length; a > n && !(this._steps[n].t > i); n++);
                var o = this._steps[n - 1];
                this._updateTargetProps(o, (this._stepPosition = i - o.t) / o.d)
            }
            return 0 != e && this._actions.length > 0 && (this._useTicks ? this._runActions(i, i) : 1 == e && r > i ? (r != this.duration && this._runActions(r, this.duration), this._runActions(0, i, !0)) : this._runActions(r, i)), s && this.setPaused(!0), this.dispatchEvent("change"), s
        }, e.tick = function (t) {
            this._paused || this.setPosition(this._prevPosition + t)
        }, e.setPaused = function (e) {
            return this._paused === !!e ? this : (this._paused = !!e, t._register(this, !e), this)
        }, e.w = e.wait, e.t = e.to, e.c = e.call, e.s = e.set, e.toString = function () {
            return "[Tween]"
        }, e.clone = function () {
            throw "Tween can not be cloned."
        }, e._updateTargetProps = function (e, i) {
            var s, r, n, a, o, h;
            if (e || 1 != i) {
                if (this.passive = !!e.v, this.passive) return;
                e.e && (i = e.e(i, 0, 1, 1)), s = e.p0, r = e.p1
            } else this.passive = !1, s = r = this._curQueueProps;
            for (var c in this._initQueueProps) {
                null == (a = s[c]) && (s[c] = a = this._initQueueProps[c]), null == (o = r[c]) && (r[c] = o = a), n = a == o || 0 == i || 1 == i || "number" != typeof a ? 1 == i ? o : a : a + (o - a) * i;
                var u = !1;
                if (h = t._plugins[c])
                    for (var l = 0, d = h.length; d > l; l++) {
                        var _ = h[l].tween(this, c, n, s, r, i, !!e && s == r, !e);
                        _ == t.IGNORE ? u = !0 : n = _
                    }
                u || (this._target[c] = n)
            }
        }, e._runActions = function (t, e, i) {
            var s = t,
                r = e,
                n = -1,
                a = this._actions.length,
                o = 1;
            for (t > e && (s = e, r = t, n = a, a = o = -1);
                (n += o) != a;) {
                var h = this._actions[n],
                    c = h.t;
                (c == r || c > s && r > c || i && c == t) && h.f.apply(h.o, h.p)
            }
        }, e._appendQueueProps = function (e) {
            var i, s, r, n, a;
            for (var o in e)
                if (void 0 === this._initQueueProps[o]) {
                    if (s = this._target[o], i = t._plugins[o])
                        for (r = 0, n = i.length; n > r; r++) s = i[r].init(this, o, s);
                    this._initQueueProps[o] = this._curQueueProps[o] = void 0 === s ? null : s
                } else s = this._curQueueProps[o];
            for (var o in e) {
                if (s = this._curQueueProps[o], i = t._plugins[o])
                    for (a = a || {}, r = 0, n = i.length; n > r; r++) i[r].step && i[r].step(this, o, s, e[o], a);
                this._curQueueProps[o] = e[o]
            }
            return a && this._appendQueueProps(a), this._curQueueProps
        }, e._cloneProps = function (t) {
            var e = {};
            for (var i in t) e[i] = t[i];
            return e
        }, e._addStep = function (t) {
            return t.d > 0 && (this._steps.push(t), t.t = this.duration, this.duration += t.d), this
        }, e._addAction = function (t) {
            return t.t = this.duration, this._actions.push(t), this
        }, e._set = function (t, e) {
            for (var i in t) e[i] = t[i]
        }, createjs.Tween = createjs.promote(t, "EventDispatcher")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t(t, e, i) {
            this.EventDispatcher_constructor(), this.ignoreGlobalPause = !1, this.duration = 0, this.loop = !1, this.position = null, this._paused = !1, this._tweens = [], this._labels = null, this._labelList = null, this._prevPosition = 0, this._prevPos = -1, this._useTicks = !1, this._registered = !1, i && (this._useTicks = i.useTicks, this.loop = i.loop, this.ignoreGlobalPause = i.ignoreGlobalPause, i.onChange && this.addEventListener("change", i.onChange)), t && this.addTween.apply(this, t), this.setLabels(e), i && i.paused ? this._paused = !0 : createjs.Tween._register(this, !0), i && null != i.position && this.setPosition(i.position, createjs.Tween.NONE)
        }
        var e = createjs.extend(t, createjs.EventDispatcher);
        e.addTween = function (t) {
            var e = arguments.length;
            if (e > 1) {
                for (var i = 0; e > i; i++) this.addTween(arguments[i]);
                return arguments[0]
            }
            return 0 == e ? null : (this.removeTween(t), this._tweens.push(t), t.setPaused(!0), t._paused = !1, t._useTicks = this._useTicks, t.duration > this.duration && (this.duration = t.duration), this._prevPos >= 0 && t.setPosition(this._prevPos, createjs.Tween.NONE), t)
        }, e.removeTween = function (t) {
            var e = arguments.length;
            if (e > 1) {
                for (var i = !0, s = 0; e > s; s++) i = i && this.removeTween(arguments[s]);
                return i
            }
            if (0 == e) return !1;
            for (var r = this._tweens, s = r.length; s--;)
                if (r[s] == t) return r.splice(s, 1), t.duration >= this.duration && this.updateDuration(), !0;
            return !1
        }, e.addLabel = function (t, e) {
            this._labels[t] = e;
            var i = this._labelList;
            if (i) {
                for (var s = 0, r = i.length; r > s && !(e < i[s].position); s++);
                i.splice(s, 0, {
                    label: t,
                    position: e
                })
            }
        }, e.setLabels = function (t) {
            this._labels = t ? t : {}
        }, e.getLabels = function () {
            var t = this._labelList;
            if (!t) {
                t = this._labelList = [];
                var e = this._labels;
                for (var i in e) t.push({
                    label: i,
                    position: e[i]
                });
                t.sort(function (t, e) {
                    return t.position - e.position
                })
            }
            return t
        }, e.getCurrentLabel = function () {
            var t = this.getLabels(),
                e = this.position,
                i = t.length;
            if (i) {
                for (var s = 0; i > s && !(e < t[s].position); s++);
                return 0 == s ? null : t[s - 1].label
            }
            return null
        }, e.gotoAndPlay = function (t) {
            this.setPaused(!1), this._goto(t)
        }, e.gotoAndStop = function (t) {
            this.setPaused(!0), this._goto(t)
        }, e.setPosition = function (t, e) {
            var i = this._calcPosition(t),
                s = !this.loop && t >= this.duration;
            if (i == this._prevPos) return s;
            this._prevPosition = t, this.position = this._prevPos = i;
            for (var r = 0, n = this._tweens.length; n > r; r++)
                if (this._tweens[r].setPosition(i, e), i != this._prevPos) return !1;
            return s && this.setPaused(!0), this.dispatchEvent("change"), s
        }, e.setPaused = function (t) {
            this._paused = !!t, createjs.Tween._register(this, !t)
        }, e.updateDuration = function () {
            this.duration = 0;
            for (var t = 0, e = this._tweens.length; e > t; t++) {
                var i = this._tweens[t];
                i.duration > this.duration && (this.duration = i.duration)
            }
        }, e.tick = function (t) {
            this.setPosition(this._prevPosition + t)
        }, e.resolve = function (t) {
            var e = Number(t);
            return isNaN(e) && (e = this._labels[t]), e
        }, e.toString = function () {
            return "[Timeline]"
        }, e.clone = function () {
            throw "Timeline can not be cloned."
        }, e._goto = function (t) {
            var e = this.resolve(t);
            null != e && this.setPosition(e)
        }, e._calcPosition = function (t) {
            return 0 > t ? 0 : t < this.duration ? t : this.loop ? t % this.duration : this.duration
        }, createjs.Timeline = createjs.promote(t, "EventDispatcher")
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t() {
            throw "Ease cannot be instantiated."
        }
        t.linear = function (t) {
            return t
        }, t.none = t.linear, t.get = function (t) {
            return -1 > t && (t = -1), t > 1 && (t = 1),
                function (e) {
                    return 0 == t ? e : 0 > t ? e * (e * -t + 1 + t) : e * ((2 - e) * t + (1 - t))
                }
        }, t.getPowIn = function (t) {
            return function (e) {
                return Math.pow(e, t)
            }
        }, t.getPowOut = function (t) {
            return function (e) {
                return 1 - Math.pow(1 - e, t)
            }
        }, t.getPowInOut = function (t) {
            return function (e) {
                return (e *= 2) < 1 ? .5 * Math.pow(e, t) : 1 - .5 * Math.abs(Math.pow(2 - e, t))
            }
        }, t.quadIn = t.getPowIn(2), t.quadOut = t.getPowOut(2), t.quadInOut = t.getPowInOut(2), t.cubicIn = t.getPowIn(3), t.cubicOut = t.getPowOut(3), t.cubicInOut = t.getPowInOut(3), t.quartIn = t.getPowIn(4), t.quartOut = t.getPowOut(4), t.quartInOut = t.getPowInOut(4), t.quintIn = t.getPowIn(5), t.quintOut = t.getPowOut(5), t.quintInOut = t.getPowInOut(5), t.sineIn = function (t) {
            return 1 - Math.cos(t * Math.PI / 2)
        }, t.sineOut = function (t) {
            return Math.sin(t * Math.PI / 2)
        }, t.sineInOut = function (t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        }, t.getBackIn = function (t) {
            return function (e) {
                return e * e * ((t + 1) * e - t)
            }
        }, t.backIn = t.getBackIn(1.7), t.getBackOut = function (t) {
            return function (e) {
                return --e * e * ((t + 1) * e + t) + 1
            }
        }, t.backOut = t.getBackOut(1.7), t.getBackInOut = function (t) {
            return t *= 1.525,
                function (e) {
                    return (e *= 2) < 1 ? .5 * (e * e * ((t + 1) * e - t)) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
                }
        }, t.backInOut = t.getBackInOut(1.7), t.circIn = function (t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }, t.circOut = function (t) {
            return Math.sqrt(1 - --t * t)
        }, t.circInOut = function (t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        }, t.bounceIn = function (e) {
            return 1 - t.bounceOut(1 - e)
        }, t.bounceOut = function (t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }, t.bounceInOut = function (e) {
            return .5 > e ? .5 * t.bounceIn(2 * e) : .5 * t.bounceOut(2 * e - 1) + .5
        }, t.getElasticIn = function (t, e) {
            var i = 2 * Math.PI;
            return function (s) {
                if (0 == s || 1 == s) return s;
                var r = e / i * Math.asin(1 / t);
                return -(t * Math.pow(2, 10 * (s -= 1)) * Math.sin((s - r) * i / e))
            }
        }, t.elasticIn = t.getElasticIn(1, .3), t.getElasticOut = function (t, e) {
            var i = 2 * Math.PI;
            return function (s) {
                if (0 == s || 1 == s) return s;
                var r = e / i * Math.asin(1 / t);
                return t * Math.pow(2, -10 * s) * Math.sin((s - r) * i / e) + 1
            }
        }, t.elasticOut = t.getElasticOut(1, .3), t.getElasticInOut = function (t, e) {
            var i = 2 * Math.PI;
            return function (s) {
                var r = e / i * Math.asin(1 / t);
                return (s *= 2) < 1 ? -.5 * (t * Math.pow(2, 10 * (s -= 1)) * Math.sin((s - r) * i / e)) : t * Math.pow(2, -10 * (s -= 1)) * Math.sin((s - r) * i / e) * .5 + 1
            }
        }, t.elasticInOut = t.getElasticInOut(1, .3 * 1.5), createjs.Ease = t
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";

        function t() {
            throw "MotionGuidePlugin cannot be instantiated."
        }
        t.priority = 0, t._rotOffS, t._rotOffE, t._rotNormS, t._rotNormE, t.install = function () {
            return createjs.Tween.installPlugin(t, ["guide", "x", "y", "rotation"]), createjs.Tween.IGNORE
        }, t.init = function (t, e, i) {
            var s = t.target;
            return s.hasOwnProperty("x") || (s.x = 0), s.hasOwnProperty("y") || (s.y = 0), s.hasOwnProperty("rotation") || (s.rotation = 0), "rotation" == e && (t.__needsRot = !0), "guide" == e ? null : i
        }, t.step = function (e, i, s, r, n) {
            if ("rotation" == i && (e.__rotGlobalS = s, e.__rotGlobalE = r, t.testRotData(e, n)), "guide" != i) return r;
            var a, o = r;
            o.hasOwnProperty("path") || (o.path = []);
            var h = o.path;
            if (o.hasOwnProperty("end") || (o.end = 1), o.hasOwnProperty("start") || (o.start = s && s.hasOwnProperty("end") && s.path === h ? s.end : 0), o.hasOwnProperty("_segments") && o._length) return r;
            var c = h.length,
                u = 10;
            if (!(c >= 6 && (c - 2) % 4 == 0)) throw "invalid 'path' data, please see documentation for valid paths";
            o._segments = [], o._length = 0;
            for (var l = 2; c > l; l += 4) {
                for (var d, _, p = h[l - 2], f = h[l - 1], g = h[l + 0], m = h[l + 1], v = h[l + 2], y = h[l + 3], b = p, E = f, j = 0, S = [], T = 1; u >= T; T++) {
                    var P = T / u,
                        w = 1 - P;
                    d = w * w * p + 2 * w * P * g + P * P * v, _ = w * w * f + 2 * w * P * m + P * P * y, j += S[S.push(Math.sqrt((a = d - b) * a + (a = _ - E) * a)) - 1], b = d, E = _
                }
                o._segments.push(j), o._segments.push(S), o._length += j
            }
            a = o.orient, o.orient = !0;
            var x = {};
            return t.calc(o, o.start, x), e.__rotPathS = Number(x.rotation.toFixed(5)), t.calc(o, o.end, x), e.__rotPathE = Number(x.rotation.toFixed(5)), o.orient = !1, t.calc(o, o.end, n), o.orient = a, o.orient ? (e.__guideData = o, t.testRotData(e, n), r) : r
        }, t.testRotData = function (t, e) {
            if (void 0 === t.__rotGlobalS || void 0 === t.__rotGlobalE) {
                if (t.__needsRot) return;
                void 0 !== t._curQueueProps.rotation ? t.__rotGlobalS = t.__rotGlobalE = t._curQueueProps.rotation : t.__rotGlobalS = t.__rotGlobalE = e.rotation = t.target.rotation || 0
            }
            if (void 0 !== t.__guideData) {
                var i = t.__guideData,
                    s = t.__rotGlobalE - t.__rotGlobalS,
                    r = t.__rotPathE - t.__rotPathS,
                    n = s - r;
                if ("auto" == i.orient) n > 180 ? n -= 360 : -180 > n && (n += 360);
                else if ("cw" == i.orient) {
                    for (; 0 > n;) n += 360;
                    0 == n && s > 0 && 180 != s && (n += 360)
                } else if ("ccw" == i.orient) {
                    for (n = s - (r > 180 ? 360 - r : r); n > 0;) n -= 360;
                    0 == n && 0 > s && -180 != s && (n -= 360)
                }
                i.rotDelta = n, i.rotOffS = t.__rotGlobalS - t.__rotPathS, t.__rotGlobalS = t.__rotGlobalE = t.__guideData = t.__needsRot = void 0
            }
        }, t.tween = function (e, i, s, r, n, a, o, h) {
            var c = n.guide;
            if (void 0 == c || c === r.guide) return s;
            if (c.lastRatio != a) {
                var u = (c.end - c.start) * (o ? c.end : a) + c.start;
                switch (t.calc(c, u, e.target), c.orient) {
                case "cw":
                case "ccw":
                case "auto":
                    e.target.rotation += c.rotOffS + c.rotDelta * a;
                    break;
                case "fixed":
                default:
                    e.target.rotation += c.rotOffS
                }
                c.lastRatio = a
            }
            return "rotation" != i || c.orient && "false" != c.orient ? e.target[i] : s
        }, t.calc = function (t, e, i) {
            if (void 0 == t._segments) throw "Missing critical pre-calculated information, please file a bug";
            void 0 == i && (i = {
                x: 0,
                y: 0,
                rotation: 0
            });
            for (var s = t._segments, r = t.path, n = t._length * e, a = s.length - 2, o = 0; n > s[o] && a > o;) n -= s[o], o += 2;
            var h = s[o + 1],
                c = 0;
            for (a = h.length - 1; n > h[c] && a > c;) n -= h[c], c++;
            var u = c / ++a + n / (a * h[c]);
            o = 2 * o + 2;
            var l = 1 - u;
            return i.x = l * l * r[o - 2] + 2 * l * u * r[o + 0] + u * u * r[o + 2], i.y = l * l * r[o - 1] + 2 * l * u * r[o + 1] + u * u * r[o + 3], t.orient && (i.rotation = 57.2957795 * Math.atan2((r[o + 1] - r[o - 1]) * l + (r[o + 3] - r[o + 1]) * u, (r[o + 0] - r[o - 2]) * l + (r[o + 2] - r[o + 0]) * u)), i
        }, createjs.MotionGuidePlugin = t
    }(), this.createjs = this.createjs || {},
    function () {
        "use strict";
        var t = createjs.TweenJS = createjs.TweenJS || {};
        t.version = "0.6.2", t.buildDate = "Thu, 26 Nov 2015 20:44:31 GMT"
    }();
var Zepto = function () {
    function t(t) {
        return null == t ? String(t) : U[J.call(t)] || "object"
    }

    function e(e) {
        return "function" == t(e)
    }

    function n(t) {
        return null != t && t == t.window
    }

    function r(t) {
        return null != t && t.nodeType == t.DOCUMENT_NODE
    }

    function i(e) {
        return "object" == t(e)
    }

    function o(t) {
        return i(t) && !n(t) && Object.getPrototypeOf(t) == Object.prototype
    }

    function a(t) {
        return "number" == typeof t.length
    }

    function s(t) {
        return P.call(t, function (t) {
            return null != t
        })
    }

    function u(t) {
        return t.length > 0 ? j.fn.concat.apply([], t) : t
    }

    function c(t) {
        return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }

    function l(t) {
        return t in Z ? Z[t] : Z[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
    }

    function f(t, e) {
        return "number" != typeof e || _[c(t)] ? e : e + "px"
    }

    function h(t) {
        var e, n;
        return L[t] || (e = A.createElement(t), A.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), L[t] = n), L[t]
    }

    function p(t) {
        return "children" in t ? O.call(t.children) : j.map(t.childNodes, function (t) {
            return 1 == t.nodeType ? t : void 0
        })
    }

    function d(t, e, n) {
        for (E in e) n && (o(e[E]) || G(e[E])) ? (o(e[E]) && !o(t[E]) && (t[E] = {}), G(e[E]) && !G(t[E]) && (t[E] = []), d(t[E], e[E], n)) : e[E] !== w && (t[E] = e[E])
    }

    function m(t, e) {
        return null == e ? j(t) : j(t).filter(e)
    }

    function v(t, n, r, i) {
        return e(n) ? n.call(t, r, i) : n
    }

    function g(t, e, n) {
        null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
    }

    function y(t, e) {
        var n = t.className || "",
            r = n && n.baseVal !== w;
        return e === w ? r ? n.baseVal : n : void(r ? n.baseVal = e : t.className = e)
    }

    function x(t) {
        try {
            return t ? "true" == t || "false" != t && ("null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? j.parseJSON(t) : t) : t
        } catch (e) {
            return t
        }
    }

    function b(t, e) {
        e(t);
        for (var n = 0, r = t.childNodes.length; r > n; n++) b(t.childNodes[n], e)
    }
    var w, E, j, S, T, C, N = [],
        O = N.slice,
        P = N.filter,
        A = window.document,
        L = {},
        Z = {},
        _ = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1
        },
        $ = /^\s*<(\w+|!)[^>]*>/,
        D = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        M = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        R = /^(?:body|html)$/i,
        k = /([A-Z])/g,
        z = ["val", "css", "html", "text", "data", "width", "height", "offset"],
        F = ["after", "prepend", "before", "append"],
        q = A.createElement("table"),
        H = A.createElement("tr"),
        I = {
            tr: A.createElement("tbody"),
            tbody: q,
            thead: q,
            tfoot: q,
            td: H,
            th: H,
            "*": A.createElement("div")
        },
        V = /complete|loaded|interactive/,
        B = /^[\w-]*$/,
        U = {},
        J = U.toString,
        X = {},
        W = A.createElement("div"),
        Y = {
            tabindex: "tabIndex",
            readonly: "readOnly",
            for: "htmlFor",
            class: "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        G = Array.isArray || function (t) {
            return t instanceof Array
        };
    return X.matches = function (t, e) {
        if (!e || !t || 1 !== t.nodeType) return !1;
        var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
        if (n) return n.call(t, e);
        var r, i = t.parentNode,
            o = !i;
        return o && (i = W).appendChild(t), r = ~X.qsa(i, e).indexOf(t), o && W.removeChild(t), r
    }, T = function (t) {
        return t.replace(/-+(.)?/g, function (t, e) {
            return e ? e.toUpperCase() : ""
        })
    }, C = function (t) {
        return P.call(t, function (e, n) {
            return t.indexOf(e) == n
        })
    }, X.fragment = function (t, e, n) {
        var r, i, a;
        return D.test(t) && (r = j(A.createElement(RegExp.$1))), r || (t.replace && (t = t.replace(M, "<$1></$2>")), e === w && (e = $.test(t) && RegExp.$1), e in I || (e = "*"), a = I[e], a.innerHTML = "" + t, r = j.each(O.call(a.childNodes), function () {
            a.removeChild(this)
        })), o(n) && (i = j(r), j.each(n, function (t, e) {
            z.indexOf(t) > -1 ? i[t](e) : i.attr(t, e)
        })), r
    }, X.Z = function (t, e) {
        return t = t || [], t.__proto__ = j.fn, t.selector = e || "", t
    }, X.isZ = function (t) {
        return t instanceof X.Z
    }, X.init = function (t, n) {
        var r;
        if (!t) return X.Z();
        if ("string" == typeof t)
            if (t = t.trim(), "<" == t[0] && $.test(t)) r = X.fragment(t, RegExp.$1, n), t = null;
            else {
                if (n !== w) return j(n).find(t);
                r = X.qsa(A, t)
            } else {
            if (e(t)) return j(A).ready(t);
            if (X.isZ(t)) return t;
            if (G(t)) r = s(t);
            else if (i(t)) r = [t], t = null;
            else if ($.test(t)) r = X.fragment(t.trim(), RegExp.$1, n), t = null;
            else {
                if (n !== w) return j(n).find(t);
                r = X.qsa(A, t)
            }
        }
        return X.Z(r, t)
    }, j = function (t, e) {
        return X.init(t, e)
    }, j.extend = function (t) {
        var e, n = O.call(arguments, 1);
        return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function (n) {
            d(t, n, e)
        }), t
    }, X.qsa = function (t, e) {
        var n, i = "#" == e[0],
            o = !i && "." == e[0],
            a = i || o ? e.slice(1) : e,
            s = B.test(a);
        return r(t) && s && i ? (n = t.getElementById(a)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : O.call(s && !i ? o ? t.getElementsByClassName(a) : t.getElementsByTagName(e) : t.querySelectorAll(e))
    }, j.contains = A.documentElement.contains ? function (t, e) {
        return t !== e && t.contains(e)
    } : function (t, e) {
        for (; e && (e = e.parentNode);)
            if (e === t) return !0;
        return !1
    }, j.type = t, j.isFunction = e, j.isWindow = n, j.isArray = G, j.isPlainObject = o, j.isEmptyObject = function (t) {
        var e;
        for (e in t) return !1;
        return !0
    }, j.inArray = function (t, e, n) {
        return N.indexOf.call(e, t, n)
    }, j.camelCase = T, j.trim = function (t) {
        return null == t ? "" : String.prototype.trim.call(t)
    }, j.uuid = 0, j.support = {}, j.expr = {}, j.map = function (t, e) {
        var n, r, i, o = [];
        if (a(t))
            for (r = 0; r < t.length; r++) n = e(t[r], r), null != n && o.push(n);
        else
            for (i in t) n = e(t[i], i), null != n && o.push(n);
        return u(o)
    }, j.each = function (t, e) {
        var n, r;
        if (a(t)) {
            for (n = 0; n < t.length; n++)
                if (e.call(t[n], n, t[n]) === !1) return t
        } else
            for (r in t)
                if (e.call(t[r], r, t[r]) === !1) return t; return t
    }, j.grep = function (t, e) {
        return P.call(t, e)
    }, window.JSON && (j.parseJSON = JSON.parse), j.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
        U["[object " + e + "]"] = e.toLowerCase()
    }), j.fn = {
        forEach: N.forEach,
        reduce: N.reduce,
        push: N.push,
        sort: N.sort,
        indexOf: N.indexOf,
        concat: N.concat,
        map: function (t) {
            return j(j.map(this, function (e, n) {
                return t.call(e, n, e)
            }))
        }, slice: function () {
            return j(O.apply(this, arguments))
        }, ready: function (t) {
            return V.test(A.readyState) && A.body ? t(j) : A.addEventListener("DOMContentLoaded", function () {
                t(j)
            }, !1), this
        }, get: function (t) {
            return t === w ? O.call(this) : this[t >= 0 ? t : t + this.length]
        }, toArray: function () {
            return this.get()
        }, size: function () {
            return this.length
        }, remove: function () {
            return this.each(function () {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        }, each: function (t) {
            return N.every.call(this, function (e, n) {
                return t.call(e, n, e) !== !1
            }), this
        }, filter: function (t) {
            return e(t) ? this.not(this.not(t)) : j(P.call(this, function (e) {
                return X.matches(e, t)
            }))
        }, add: function (t, e) {
            return j(C(this.concat(j(t, e))))
        }, is: function (t) {
            return this.length > 0 && X.matches(this[0], t)
        }, not: function (t) {
            var n = [];
            if (e(t) && t.call !== w) this.each(function (e) {
                t.call(this, e) || n.push(this)
            });
            else {
                var r = "string" == typeof t ? this.filter(t) : a(t) && e(t.item) ? O.call(t) : j(t);
                this.forEach(function (t) {
                    r.indexOf(t) < 0 && n.push(t)
                })
            }
            return j(n)
        }, has: function (t) {
            return this.filter(function () {
                return i(t) ? j.contains(this, t) : j(this).find(t).size()
            })
        }, eq: function (t) {
            return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
        }, first: function () {
            var t = this[0];
            return t && !i(t) ? t : j(t)
        }, last: function () {
            var t = this[this.length - 1];
            return t && !i(t) ? t : j(t)
        }, find: function (t) {
            var e, n = this;
            return e = t ? "object" == typeof t ? j(t).filter(function () {
                var t = this;
                return N.some.call(n, function (e) {
                    return j.contains(e, t)
                })
            }) : 1 == this.length ? j(X.qsa(this[0], t)) : this.map(function () {
                return X.qsa(this, t)
            }) : j()
        }, closest: function (t, e) {
            var n = this[0],
                i = !1;
            for ("object" == typeof t && (i = j(t)); n && !(i ? i.indexOf(n) >= 0 : X.matches(n, t));) n = n !== e && !r(n) && n.parentNode;
            return j(n)
        }, parents: function (t) {
            for (var e = [], n = this; n.length > 0;) n = j.map(n, function (t) {
                return (t = t.parentNode) && !r(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
            });
            return m(e, t)
        }, parent: function (t) {
            return m(C(this.pluck("parentNode")), t)
        }, children: function (t) {
            return m(this.map(function () {
                return p(this)
            }), t)
        }, contents: function () {
            return this.map(function () {
                return O.call(this.childNodes)
            })
        }, siblings: function (t) {
            return m(this.map(function (t, e) {
                return P.call(p(e.parentNode), function (t) {
                    return t !== e
                })
            }), t)
        }, empty: function () {
            return this.each(function () {
                this.innerHTML = ""
            })
        }, pluck: function (t) {
            return j.map(this, function (e) {
                return e[t]
            })
        }, show: function () {
            return this.each(function () {
                "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = h(this.nodeName))
            })
        }, replaceWith: function (t) {
            return this.before(t).remove()
        }, wrap: function (t) {
            var n = e(t);
            if (this[0] && !n) var r = j(t).get(0),
                i = r.parentNode || this.length > 1;
            return this.each(function (e) {
                j(this).wrapAll(n ? t.call(this, e) : i ? r.cloneNode(!0) : r)
            })
        }, wrapAll: function (t) {
            if (this[0]) {
                j(this[0]).before(t = j(t));
                for (var e;
                    (e = t.children()).length;) t = e.first();
                j(t).append(this)
            }
            return this
        }, wrapInner: function (t) {
            var n = e(t);
            return this.each(function (e) {
                var r = j(this),
                    i = r.contents(),
                    o = n ? t.call(this, e) : t;
                i.length ? i.wrapAll(o) : r.append(o)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                j(this).replaceWith(j(this).children())
            }), this
        }, clone: function () {
            return this.map(function () {
                return this.cloneNode(!0)
            })
        }, hide: function () {
            return this.css("display", "none")
        }, toggle: function (t) {
            return this.each(function () {
                var e = j(this);
                (t === w ? "none" == e.css("display") : t) ? e.show(): e.hide()
            })
        }, prev: function (t) {
            return j(this.pluck("previousElementSibling")).filter(t || "*")
        }, next: function (t) {
            return j(this.pluck("nextElementSibling")).filter(t || "*")
        }, html: function (t) {
            return 0 in arguments ? this.each(function (e) {
                var n = this.innerHTML;
                j(this).empty().append(v(this, t, e, n))
            }) : 0 in this ? this[0].innerHTML : null
        }, text: function (t) {
            return 0 in arguments ? this.each(function (e) {
                var n = v(this, t, e, this.textContent);
                this.textContent = null == n ? "" : "" + n
            }) : 0 in this ? this[0].textContent : null
        }, attr: function (t, e) {
            var n;
            return "string" != typeof t || 1 in arguments ? this.each(function (n) {
                if (1 === this.nodeType)
                    if (i(t))
                        for (E in t) g(this, E, t[E]);
                    else g(this, t, v(this, e, n, this.getAttribute(t)))
            }) : this.length && 1 === this[0].nodeType ? !(n = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : n : w
        }, removeAttr: function (t) {
            return this.each(function () {
                1 === this.nodeType && t.split(" ").forEach(function (t) {
                    g(this, t)
                }, this)
            })
        }, prop: function (t, e) {
            return t = Y[t] || t, 1 in arguments ? this.each(function (n) {
                this[t] = v(this, e, n, this[t])
            }) : this[0] && this[0][t]
        }, data: function (t, e) {
            var n = "data-" + t.replace(k, "-$1").toLowerCase(),
                r = 1 in arguments ? this.attr(n, e) : this.attr(n);
            return null !== r ? x(r) : w
        }, val: function (t) {
            return 0 in arguments ? this.each(function (e) {
                this.value = v(this, t, e, this.value)
            }) : this[0] && (this[0].multiple ? j(this[0]).find("option").filter(function () {
                return this.selected
            }).pluck("value") : this[0].value)
        }, offset: function (t) {
            if (t) return this.each(function (e) {
                var n = j(this),
                    r = v(this, t, e, n.offset()),
                    i = n.offsetParent().offset(),
                    o = {
                        top: r.top - i.top,
                        left: r.left - i.left
                    };
                "static" == n.css("position") && (o.position = "relative"), n.css(o)
            });
            if (!this.length) return null;
            var e = this[0].getBoundingClientRect();
            return {
                left: e.left + window.pageXOffset,
                top: e.top + window.pageYOffset,
                width: Math.round(e.width),
                height: Math.round(e.height)
            }
        }, css: function (e, n) {
            if (arguments.length < 2) {
                var r, i = this[0];
                if (!i) return;
                if (r = getComputedStyle(i, ""), "string" == typeof e) return i.style[T(e)] || r.getPropertyValue(e);
                if (G(e)) {
                    var o = {};
                    return j.each(e, function (t, e) {
                        o[e] = i.style[T(e)] || r.getPropertyValue(e)
                    }), o
                }
            }
            var a = "";
            if ("string" == t(e)) n || 0 === n ? a = c(e) + ":" + f(e, n) : this.each(function () {
                this.style.removeProperty(c(e))
            });
            else
                for (E in e) e[E] || 0 === e[E] ? a += c(E) + ":" + f(E, e[E]) + ";" : this.each(function () {
                    this.style.removeProperty(c(E))
                });
            return this.each(function () {
                this.style.cssText += ";" + a
            })
        }, index: function (t) {
            return t ? this.indexOf(j(t)[0]) : this.parent().children().indexOf(this[0])
        }, hasClass: function (t) {
            return !!t && N.some.call(this, function (t) {
                return this.test(y(t))
            }, l(t))
        }, addClass: function (t) {
            return t ? this.each(function (e) {
                if ("className" in this) {
                    S = [];
                    var n = y(this),
                        r = v(this, t, e, n);
                    r.split(/\s+/g).forEach(function (t) {
                        j(this).hasClass(t) || S.push(t)
                    }, this), S.length && y(this, n + (n ? " " : "") + S.join(" "))
                }
            }) : this
        }, removeClass: function (t) {
            return this.each(function (e) {
                if ("className" in this) {
                    if (t === w) return y(this, "");
                    S = y(this), v(this, t, e, S).split(/\s+/g).forEach(function (t) {
                        S = S.replace(l(t), " ")
                    }), y(this, S.trim())
                }
            })
        }, toggleClass: function (t, e) {
            return t ? this.each(function (n) {
                var r = j(this),
                    i = v(this, t, n, y(this));
                i.split(/\s+/g).forEach(function (t) {
                    (e === w ? !r.hasClass(t) : e) ? r.addClass(t): r.removeClass(t)
                })
            }) : this
        }, scrollTop: function (t) {
            if (this.length) {
                var e = "scrollTop" in this[0];
                return t === w ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function () {
                    this.scrollTop = t
                } : function () {
                    this.scrollTo(this.scrollX, t)
                })
            }
        }, scrollLeft: function (t) {
            if (this.length) {
                var e = "scrollLeft" in this[0];
                return t === w ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function () {
                    this.scrollLeft = t
                } : function () {
                    this.scrollTo(t, this.scrollY)
                })
            }
        }, position: function () {
            if (this.length) {
                var t = this[0],
                    e = this.offsetParent(),
                    n = this.offset(),
                    r = R.test(e[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : e.offset();
                return n.top -= parseFloat(j(t).css("margin-top")) || 0, n.left -= parseFloat(j(t).css("margin-left")) || 0, r.top += parseFloat(j(e[0]).css("border-top-width")) || 0, r.left += parseFloat(j(e[0]).css("border-left-width")) || 0, {
                    top: n.top - r.top,
                    left: n.left - r.left
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent || A.body; t && !R.test(t.nodeName) && "static" == j(t).css("position");) t = t.offsetParent;
                return t
            })
        }
    }, j.fn.detach = j.fn.remove, ["width", "height"].forEach(function (t) {
        var e = t.replace(/./, function (t) {
            return t[0].toUpperCase()
        });
        j.fn[t] = function (i) {
            var o, a = this[0];
            return i === w ? n(a) ? a["inner" + e] : r(a) ? a.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function (e) {
                a = j(this), a.css(t, v(this, i, e, a[t]()))
            })
        }
    }), F.forEach(function (e, n) {
        var r = n % 2;
        j.fn[e] = function () {
            var e, i, o = j.map(arguments, function (n) {
                    return e = t(n), "object" == e || "array" == e || null == n ? n : X.fragment(n)
                }),
                a = this.length > 1;
            return o.length < 1 ? this : this.each(function (t, e) {
                i = r ? e : e.parentNode, e = 0 == n ? e.nextSibling : 1 == n ? e.firstChild : 2 == n ? e : null;
                var s = j.contains(A.documentElement, i);
                o.forEach(function (t) {
                    if (a) t = t.cloneNode(!0);
                    else if (!i) return j(t).remove();
                    i.insertBefore(t, e), s && b(t, function (t) {
                        null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                    })
                })
            })
        }, j.fn[r ? e + "To" : "insert" + (n ? "Before" : "After")] = function (t) {
            return j(t)[e](this), this
        }
    }), X.Z.prototype = j.fn, X.uniq = C, X.deserializeValue = x, j.zepto = X, j
}();
window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto),
    function (t) {
        function e(t) {
            return t._zid || (t._zid = h++)
        }

        function n(t, n, o, a) {
            if (n = r(n), n.ns) var s = i(n.ns);
            return (v[e(t)] || []).filter(function (t) {
                return !(!t || n.e && t.e != n.e || n.ns && !s.test(t.ns) || o && e(t.fn) !== e(o) || a && t.sel != a)
            })
        }

        function r(t) {
            var e = ("" + t).split(".");
            return {
                e: e[0],
                ns: e.slice(1).sort().join(" ")
            }
        }

        function i(t) {
            return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
        }

        function o(t, e) {
            return t.del && !y && t.e in x || !!e
        }

        function a(t) {
            return b[t] || y && x[t] || t
        }

        function s(n, i, s, u, l, h, p) {
            var d = e(n),
                m = v[d] || (v[d] = []);
            i.split(/\s/).forEach(function (e) {
                if ("ready" == e) return t(document).ready(s);
                var i = r(e);
                i.fn = s, i.sel = l, i.e in b && (s = function (e) {
                    var n = e.relatedTarget;
                    return !n || n !== this && !t.contains(this, n) ? i.fn.apply(this, arguments) : void 0
                }), i.del = h;
                var d = h || s;
                i.proxy = function (t) {
                    if (t = c(t), !t.isImmediatePropagationStopped()) {
                        t.data = u;
                        var e = d.apply(n, t._args == f ? [t] : [t].concat(t._args));
                        return e === !1 && (t.preventDefault(), t.stopPropagation()), e
                    }
                }, i.i = m.length, m.push(i), "addEventListener" in n && n.addEventListener(a(i.e), i.proxy, o(i, p))
            })
        }

        function u(t, r, i, s, u) {
            var c = e(t);
            (r || "").split(/\s/).forEach(function (e) {
                n(t, e, i, s).forEach(function (e) {
                    delete v[c][e.i], "removeEventListener" in t && t.removeEventListener(a(e.e), e.proxy, o(e, u))
                })
            })
        }

        function c(e, n) {
            return (n || !e.isDefaultPrevented) && (n || (n = e), t.each(S, function (t, r) {
                var i = n[t];
                e[t] = function () {
                    return this[r] = w, i && i.apply(n, arguments)
                }, e[r] = E
            }), (n.defaultPrevented !== f ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (e.isDefaultPrevented = w)), e
        }

        function l(t) {
            var e, n = {
                originalEvent: t
            };
            for (e in t) j.test(e) || t[e] === f || (n[e] = t[e]);
            return c(n, t)
        }
        var f, h = 1,
            p = Array.prototype.slice,
            d = t.isFunction,
            m = function (t) {
                return "string" == typeof t
            },
            v = {},
            g = {},
            y = "onfocusin" in window,
            x = {
                focus: "focusin",
                blur: "focusout"
            },
            b = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            };
        g.click = g.mousedown = g.mouseup = g.mousemove = "MouseEvents", t.event = {
            add: s,
            remove: u
        }, t.proxy = function (n, r) {
            var i = 2 in arguments && p.call(arguments, 2);
            if (d(n)) {
                var o = function () {
                    return n.apply(r, i ? i.concat(p.call(arguments)) : arguments)
                };
                return o._zid = e(n), o
            }
            if (m(r)) return i ? (i.unshift(n[r], n), t.proxy.apply(null, i)) : t.proxy(n[r], n);
            throw new TypeError("expected function")
        }, t.fn.bind = function (t, e, n) {
            return this.on(t, e, n)
        }, t.fn.unbind = function (t, e) {
            return this.off(t, e)
        }, t.fn.one = function (t, e, n, r) {
            return this.on(t, e, n, r, 1)
        };
        var w = function () {
                return !0
            },
            E = function () {
                return !1
            },
            j = /^([A-Z]|returnValue$|layer[XY]$)/,
            S = {
                preventDefault: "isDefaultPrevented",
                stopImmediatePropagation: "isImmediatePropagationStopped",
                stopPropagation: "isPropagationStopped"
            };
        t.fn.delegate = function (t, e, n) {
            return this.on(e, t, n)
        }, t.fn.undelegate = function (t, e, n) {
            return this.off(e, t, n)
        }, t.fn.live = function (e, n) {
            return t(document.body).delegate(this.selector, e, n), this
        }, t.fn.die = function (e, n) {
            return t(document.body).undelegate(this.selector, e, n), this
        }, t.fn.on = function (e, n, r, i, o) {
            var a, c, h = this;
            return e && !m(e) ? (t.each(e, function (t, e) {
                h.on(t, n, r, e, o)
            }), h) : (m(n) || d(i) || i === !1 || (i = r, r = n, n = f), (d(r) || r === !1) && (i = r, r = f), i === !1 && (i = E), h.each(function (f, h) {
                o && (a = function (t) {
                    return u(h, t.type, i), i.apply(this, arguments)
                }), n && (c = function (e) {
                    var r, o = t(e.target).closest(n, h).get(0);
                    return o && o !== h ? (r = t.extend(l(e), {
                        currentTarget: o,
                        liveFired: h
                    }), (a || i).apply(o, [r].concat(p.call(arguments, 1)))) : void 0
                }), s(h, e, i, r, n, c || a)
            }))
        }, t.fn.off = function (e, n, r) {
            var i = this;
            return e && !m(e) ? (t.each(e, function (t, e) {
                i.off(t, n, e)
            }), i) : (m(n) || d(r) || r === !1 || (r = n, n = f), r === !1 && (r = E), i.each(function () {
                u(this, e, r, n)
            }))
        }, t.fn.trigger = function (e, n) {
            return e = m(e) || t.isPlainObject(e) ? t.Event(e) : c(e), e._args = n, this.each(function () {
                e.type in x && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
            })
        }, t.fn.triggerHandler = function (e, r) {
            var i, o;
            return this.each(function (a, s) {
                i = l(m(e) ? t.Event(e) : e), i._args = r, i.target = s, t.each(n(s, e.type || e), function (t, e) {
                    return o = e.proxy(i), !i.isImmediatePropagationStopped() && void 0
                })
            }), o
        }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (e) {
            t.fn[e] = function (t) {
                return 0 in arguments ? this.bind(e, t) : this.trigger(e)
            }
        }), t.Event = function (t, e) {
            m(t) || (e = t, t = e.type);
            var n = document.createEvent(g[t] || "Events"),
                r = !0;
            if (e)
                for (var i in e) "bubbles" == i ? r = !!e[i] : n[i] = e[i];
            return n.initEvent(t, r, !0), c(n)
        }
    }(Zepto),
    function (t) {
        function e(e, n, r) {
            var i = t.Event(n);
            return t(e).trigger(i, r), !i.isDefaultPrevented()
        }

        function n(t, n, r, i) {
            return t.global ? e(n || y, r, i) : void 0
        }

        function r(e) {
            e.global && 0 === t.active++ && n(e, null, "ajaxStart")
        }

        function i(e) {
            e.global && !--t.active && n(e, null, "ajaxStop")
        }

        function o(t, e) {
            var r = e.context;
            return e.beforeSend.call(r, t, e) !== !1 && n(e, r, "ajaxBeforeSend", [t, e]) !== !1 && void n(e, r, "ajaxSend", [t, e])
        }

        function a(t, e, r, i) {
            var o = r.context,
                a = "success";
            r.success.call(o, t, a, e), i && i.resolveWith(o, [t, a, e]), n(r, o, "ajaxSuccess", [e, r, t]), u(a, e, r)
        }

        function s(t, e, r, i, o) {
            var a = i.context;
            i.error.call(a, r, e, t), o && o.rejectWith(a, [r, e, t]), n(i, a, "ajaxError", [r, i, t || e]), u(e, r, i)
        }

        function u(t, e, r) {
            var o = r.context;
            r.complete.call(o, e, t), n(r, o, "ajaxComplete", [e, r]), i(r)
        }

        function c() {}

        function l(t) {
            return t && (t = t.split(";", 2)[0]), t && (t == j ? "html" : t == E ? "json" : b.test(t) ? "script" : w.test(t) && "xml") || "text"
        }

        function f(t, e) {
            return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
        }

        function h(e) {
            e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = f(e.url, e.data), e.data = void 0)
        }

        function p(e, n, r, i) {
            return t.isFunction(n) && (i = r, r = n, n = void 0), t.isFunction(r) || (i = r, r = void 0), {
                url: e,
                data: n,
                success: r,
                dataType: i
            }
        }

        function d(e, n, r, i) {
            var o, a = t.isArray(n),
                s = t.isPlainObject(n);
            t.each(n, function (n, u) {
                o = t.type(u), i && (n = r ? i : i + "[" + (s || "object" == o || "array" == o ? n : "") + "]"), !i && a ? e.add(u.name, u.value) : "array" == o || !r && "object" == o ? d(e, u, r, n) : e.add(n, u)
            })
        }
        var m, v, g = 0,
            y = window.document,
            x = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            b = /^(?:text|application)\/javascript/i,
            w = /^(?:text|application)\/xml/i,
            E = "application/json",
            j = "text/html",
            S = /^\s*$/,
            T = y.createElement("a");
        T.href = window.location.href, t.active = 0, t.ajaxJSONP = function (e, n) {
            if (!("type" in e)) return t.ajax(e);
            var r, i, u = e.jsonpCallback,
                c = (t.isFunction(u) ? u() : u) || "jsonp" + ++g,
                l = y.createElement("script"),
                f = window[c],
                h = function (e) {
                    t(l).triggerHandler("error", e || "abort")
                },
                p = {
                    abort: h
                };
            return n && n.promise(p), t(l).on("load error", function (o, u) {
                clearTimeout(i), t(l).off().remove(), "error" != o.type && r ? a(r[0], p, e, n) : s(null, u || "error", p, e, n), window[c] = f, r && t.isFunction(f) && f(r[0]), f = r = void 0
            }), o(p, e) === !1 ? (h("abort"), p) : (window[c] = function () {
                r = arguments
            }, l.src = e.url.replace(/\?(.+)=\?/, "?$1=" + c), y.head.appendChild(l), e.timeout > 0 && (i = setTimeout(function () {
                h("timeout")
            }, e.timeout)), p)
        }, t.ajaxSettings = {
            type: "GET",
            beforeSend: c,
            success: c,
            error: c,
            complete: c,
            context: null,
            global: !0,
            xhr: function () {
                return new window.XMLHttpRequest
            }, accepts: {
                script: "text/javascript, application/javascript, application/x-javascript",
                json: E,
                xml: "application/xml, text/xml",
                html: j,
                text: "text/plain"
            }, crossDomain: !1,
            timeout: 0,
            processData: !0,
            cache: !0
        }, t.ajax = function (e) {
            var n, i = t.extend({}, e || {}),
                u = t.Deferred && t.Deferred();
            for (m in t.ajaxSettings) void 0 === i[m] && (i[m] = t.ajaxSettings[m]);
            r(i), i.crossDomain || (n = y.createElement("a"), n.href = i.url, n.href = n.href, i.crossDomain = T.protocol + "//" + T.host != n.protocol + "//" + n.host), i.url || (i.url = window.location.toString()), h(i);
            var p = i.dataType,
                d = /\?.+=\?/.test(i.url);
            if (d && (p = "jsonp"), i.cache !== !1 && (e && e.cache === !0 || "script" != p && "jsonp" != p) || (i.url = f(i.url, "_=" + Date.now())), "jsonp" == p) return d || (i.url = f(i.url, i.jsonp ? i.jsonp + "=?" : i.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(i, u);
            var g, x = i.accepts[p],
                b = {},
                w = function (t, e) {
                    b[t.toLowerCase()] = [t, e]
                },
                E = /^([\w-]+:)\/\//.test(i.url) ? RegExp.$1 : window.location.protocol,
                j = i.xhr(),
                C = j.setRequestHeader;
            if (u && u.promise(j), i.crossDomain || w("X-Requested-With", "XMLHttpRequest"), w("Accept", x || "*/*"), (x = i.mimeType || x) && (x.indexOf(",") > -1 && (x = x.split(",", 2)[0]), j.overrideMimeType && j.overrideMimeType(x)), (i.contentType || i.contentType !== !1 && i.data && "GET" != i.type.toUpperCase()) && w("Content-Type", i.contentType || "application/x-www-form-urlencoded"), i.headers)
                for (v in i.headers) w(v, i.headers[v]);
            if (j.setRequestHeader = w, j.onreadystatechange = function () {
                if (4 == j.readyState) {
                    j.onreadystatechange = c, clearTimeout(g);
                    var e, n = !1;
                    if (j.status >= 200 && j.status < 300 || 304 == j.status || 0 == j.status && "file:" == E) {
                        p = p || l(i.mimeType || j.getResponseHeader("content-type")), e = j.responseText;
                        try {
                            "script" == p ? (0, eval)(e) : "xml" == p ? e = j.responseXML : "json" == p && (e = S.test(e) ? null : t.parseJSON(e))
                        } catch (t) {
                            n = t
                        }
                        n ? s(n, "parsererror", j, i, u) : a(e, j, i, u)
                    } else s(j.statusText || null, j.status ? "error" : "abort", j, i, u)
                }
            }, o(j, i) === !1) return j.abort(), s(null, "abort", j, i, u), j;
            if (i.xhrFields)
                for (v in i.xhrFields) j[v] = i.xhrFields[v];
            var N = !("async" in i) || i.async;
            j.open(i.type, i.url, N, i.username, i.password);
            for (v in b) C.apply(j, b[v]);
            return i.timeout > 0 && (g = setTimeout(function () {
                j.onreadystatechange = c, j.abort(), s(null, "timeout", j, i, u)
            }, i.timeout)), j.send(i.data ? i.data : null), j
        }, t.get = function () {
            return t.ajax(p.apply(null, arguments))
        }, t.post = function () {
            var e = p.apply(null, arguments);
            return e.type = "POST", t.ajax(e)
        }, t.getJSON = function () {
            var e = p.apply(null, arguments);
            return e.dataType = "json", t.ajax(e)
        }, t.fn.load = function (e, n, r) {
            if (!this.length) return this;
            var i, o = this,
                a = e.split(/\s/),
                s = p(e, n, r),
                u = s.success;
            return a.length > 1 && (s.url = a[0], i = a[1]), s.success = function (e) {
                o.html(i ? t("<div>").html(e.replace(x, "")).find(i) : e), u && u.apply(o, arguments)
            }, t.ajax(s), this
        };
        var C = encodeURIComponent;
        t.param = function (e, n) {
            var r = [];
            return r.add = function (e, n) {
                t.isFunction(n) && (n = n()), null == n && (n = ""), this.push(C(e) + "=" + C(n))
            }, d(r, e, n), r.join("&").replace(/%20/g, "+")
        }
    }(Zepto),
    function (t) {
        t.fn.serializeArray = function () {
            var e, n, r = [],
                i = function (t) {
                    return t.forEach ? t.forEach(i) : void r.push({
                        name: e,
                        value: t
                    })
                };
            return this[0] && t.each(this[0].elements, function (r, o) {
                n = o.type, e = o.name, e && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && i(t(o).val())
            }), r
        }, t.fn.serialize = function () {
            var t = [];
            return this.serializeArray().forEach(function (e) {
                t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
            }), t.join("&")
        }, t.fn.submit = function (e) {
            if (0 in arguments) this.bind("submit", e);
            else if (this.length) {
                var n = t.Event("submit");
                this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
            }
            return this
        }
    }(Zepto),
    function (t) {
        "__proto__" in {} || t.extend(t.zepto, {
            Z: function (e, n) {
                return e = e || [], t.extend(e, t.fn), e.selector = n || "", e.__Z = !0, e
            }, isZ: function (e) {
                return "array" === t.type(e) && "__Z" in e
            }
        });
        try {
            getComputedStyle(void 0)
        } catch (t) {
            var e = getComputedStyle;
            window.getComputedStyle = function (t) {
                try {
                    return e(t)
                } catch (t) {
                    return null
                }
            }
        }
    }(Zepto);
this.answerjs = this.answerjs || {},
    function () {
        "use strict";

        function e() {
            this.Container_constructor(), this.bg = null, this.contentGroup = null, this.listenerAdded = this.on("added", this.onAdded), this.isAdded = !1
        }
        var t = createjs.extend(e, createjs.Container);
        t.onAdded = function () {
            this.isAdded = !0, this.off("added", this.listenerAdded), this.listenerResize = this.stage.on(answerjs.GameEvent.RESIZE, this.onStageResize, this), this.onStageResize()
        }, t.createContentGroup = function () {
            this.contentGroup = new createjs.Container, this.contentGroup.setBounds(0, 0, answerjs.GameData.DESIGN_PORTRAIT_WIDTH, answerjs.GameData.DESIGN_PORTRAIT_HEIGHT), this.addChild(this.contentGroup)
        }, t.initTurnPage = function (e) {
            this.touchMoveTurnPage = new answerjs.TouchMoveTurnPage(e), this.touchMoveTurnPage.on(answerjs.GameEvent.PAGE_PREV, this.onPagePrev, this), this.touchMoveTurnPage.on(answerjs.GameEvent.PAGE_NEXT, this.onPageNext, this)
        }, t.startTurnPage = function () {
            this.touchMoveTurnPage && this.touchMoveTurnPage.stopListener(), this.touchMoveTurnPage.startListener()
        }, t.stopTurnPage = function () {
            this.touchMoveTurnPage && this.touchMoveTurnPage.stopListener()
        }, t.onPagePrev = function () {
            this.onTurnPrevPage() && (this.clearAllListener(), this.dispatchEvent(answerjs.GameEvent.PREV_STEP))
        }, t.onPageNext = function () {
            this.onTurnNextPage() && (this.clearAllListener(), this.dispatchEvent(answerjs.GameEvent.NEXT_STEP))
        }, t.onTurnNextPage = function () {
            return !0
        }, t.onTurnPrevPage = function () {
            return !0
        }, t.pageInComplete = function () {}, t.onShowNavArrow = function () {
            return !0
        }, t.showPageNavArrow = function () {
            this.stage.dispatchEvent(new createjs.Event(answerjs.GameEvent.PAGE_NAV_ARROW_SHOW))
        }, t.hidePageNavArrow = function () {
            this.stage.dispatchEvent(new createjs.Event(answerjs.GameEvent.PAGE_NAV_ARROW_HIDE))
        }, t.clearAllListener = function () {
            this.listenerResize && (this.stage.off(answerjs.GameEvent.RESIZE, this.listenerResize), this.listenerResize = null, this.stopTurnPage())
        }, t.onStageResize = function () {
            var e = this.stage.stageWidth,
                t = this.stage.stageHeight,
                n = answerjs.GameData.DESIGN_PORTRAIT_WIDTH,
                s = answerjs.GameData.DESIGN_PORTRAIT_HEIGHT,
                i = Math.max(e / n, t / s),
                a = (e - n * i) / 2,
                o = (t - s * i) / 2;
            if (this.bg && (this.bg.x = a, this.bg.y = o, this.bg.scaleX = this.bg.scaleY = i), this.contentGroup) {
                var r = 1;
                r = t < s ? t / s : Math.max(e / n, t / s), this.contentGroup.scaleX = this.contentGroup.scaleY = r, this.contentGroup.x = (e - n * r) / 2, this.contentGroup.y = (t - s * r) / 2
            }
        }, answerjs.PageBase = createjs.promote(e, "Container")
    }();
this.answerjs = this.answerjs || {},
    function () {
        "use strict";

        function _() {}
        _.RESIZE = "resize", _.NEXT_STEP = "next_step", _.PREV_STEP = "prev_step", _.SOUND_BG_PLAY = "sound_bg_play", _.SOUND_BG_STOP = "sound_bg_stop", _.SOUND_SHOW = "sound_show", _.SOUND_HIDE = "sound_hide", _.PAGE_NAV_ARROW_SHOW = "page_nav_arrow_show", _.PAGE_NAV_ARROW_HIDE = "page_nav_arrow_hide", _.PAGE_PREV = "page_prev", _.PAGE_NEXT = "page_next", _.PAGE_RIGHT = "page_right", _.PAGE_LEFT = "page_left", _.CHANGE = "change", _.COMPLETE = "complete", _.IO_ERROR = "io_error", _.WX_SUCCESS = "wx_success", _.WX_CANCEL = "wx_cancel", _.WX_SHARE_TIMELINE = "share_timeline", _.WX_SHARE_APP_MESSAGE = "share_app_message", _.WX_SHARE_QQ = "share_qq", _.WX_SHARE_QZONE = "share_qzone", answerjs.GameEvent = _
    }();
var home_ani = function (t, e, i, s, n) {
    function a() {
        var t = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        return t.gotoAndStop(this.currentFrame), t.paused = this.paused, t.framerate = this.framerate, t
    }

    function o(t, e, s) {
        var n = i.extend(t, i.MovieClip);
        return n.clone = a, n.nominalBounds = e, n.frameBounds = s, n
    }
    var h;
    t.ssMetadata = [{
        name: "home_ani_atlas_",
        frames: [
            [0, 26, 95, 67],
            [205, 76, 8, 8],
            [97, 26, 72, 81],
            [205, 89, 32, 15],
            [171, 76, 32, 15],
            [225, 47, 65, 19],
            [0, 109, 127, 41],
            [129, 109, 127, 41],
            [0, 0, 356, 24],
            [225, 26, 68, 19],
            [225, 68, 46, 19],
            [171, 26, 52, 48]
        ]
    }], (t.jqr_01 = function () {
        this.spriteSheet = s.home_ani_atlas_, this.gotoAndStop(0)
    }).prototype = h = new i.Sprite, (t.jqr_02 = function () {
        this.spriteSheet = s.home_ani_atlas_, this.gotoAndStop(1)
    }).prototype = h = new i.Sprite, (t.jqr_03 = function () {
        this.spriteSheet = s.home_ani_atlas_, this.gotoAndStop(2)
    }).prototype = h = new i.Sprite, (t.jqr_04 = function () {
        this.spriteSheet = s.home_ani_atlas_, this.gotoAndStop(3)
    }).prototype = h = new i.Sprite, (t.jqr_05 = function () {
        this.spriteSheet = s.home_ani_atlas_, this.gotoAndStop(4)
    }).prototype = h = new i.Sprite, (t.jqr_06 = function () {
        this.spriteSheet = s.home_ani_atlas_, this.gotoAndStop(5)
    }).prototype = h = new i.Sprite, (t.kuang = function () {
        this.spriteSheet = s.home_ani_atlas_, this.gotoAndStop(6)
    }).prototype = h = new i.Sprite, (t.kuang00 = function () {
        this.spriteSheet = s.home_ani_atlas_, this.gotoAndStop(7)
    }).prototype = h = new i.Sprite, (t.xiugai_01 = function () {
        this.spriteSheet = s.home_ani_atlas_, this.gotoAndStop(8)
    }).prototype = h = new i.Sprite, (t.xiugai_02 = function () {
        this.spriteSheet = s.home_ani_atlas_, this.gotoAndStop(9)
    }).prototype = h = new i.Sprite, (t.xiugai_03 = function () {
        this.spriteSheet = s.home_ani_atlas_, this.gotoAndStop(10)
    }).prototype = h = new i.Sprite, (t.xmg_1 = function () {
        this.spriteSheet = s.home_ani_atlas_, this.gotoAndStop(11)
    }).prototype = h = new i.Sprite, (t.zi1 = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.xiugai_01, this.instance.parent = this, this.timeline.addTween(i.Tween.get(this.instance).wait(1))
    }).prototype = o(t.zi1, new i.Rectangle(0, 0, 356, 24), null), (t.ys00 = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.xiugai_03, this.instance.parent = this, this.instance.setTransform(11, 1), this.timeline.addTween(i.Tween.get(this.instance).wait(1))
    }).prototype = o(t.ys00, new i.Rectangle(11, 1, 46, 19), null), (t.ys = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.xiugai_02, this.instance.parent = this, this.timeline.addTween(i.Tween.get(this.instance).wait(1))
    }).prototype = o(t.ys, new i.Rectangle(0, 0, 68, 19), null), (t.xmg = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.xmg_1, this.instance.parent = this, this.timeline.addTween(i.Tween.get(this.instance).wait(1))
    }).prototype = o(t.xmg, new i.Rectangle(0, 0, 52, 48), null), (t.kk00 = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.kuang00, this.instance.parent = this, this.timeline.addTween(i.Tween.get(this.instance).wait(1))
    }).prototype = o(t.kk00, new i.Rectangle(0, 0, 127, 41), null), (t.kk = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.kuang, this.instance.parent = this, this.timeline.addTween(i.Tween.get(this.instance).wait(1))
    }).prototype = o(t.kk, new i.Rectangle(0, 0, 127, 41), null), (t.img_kkk2 = function (t, e, s) {
        this.initialize(t, e, s, {}), this.shape = new i.Shape, this.shape.graphics.f().s("#FF0000").ss(1.5, 2, 1).p("ALYBtIAABoIiSAAAJGjUICSAAIAABcArXh4IAAhcICRAAApGDVIiRAAIAAho"), this.shape.setTransform(72.8, 21.3), this.timeline.addTween(i.Tween.get(this.shape).wait(1))
    }).prototype = o(t.img_kkk2, new i.Rectangle((-1), (-1), 147.6, 44.5), null), (t.img_kkk = function (t, e, s) {
        this.initialize(t, e, s, {}), this.shape = new i.Shape, this.shape.graphics.f().s("#E40000").ss(.1, 1, 1).p("ArXjUIWvAAIAAGpI2vAAg"), this.shape.setTransform(72.8, 21.3), this.timeline.addTween(i.Tween.get(this.shape).wait(1))
    }).prototype = o(t.img_kkk, new i.Rectangle((-1), (-1), 147.6, 44.5), null), (t.img_jqr_6 = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.jqr_06, this.instance.parent = this, this.timeline.addTween(i.Tween.get(this.instance).wait(1))
    }).prototype = o(t.img_jqr_6, new i.Rectangle(0, 0, 65, 19), null), (t.img_jqr_5 = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.jqr_05, this.instance.parent = this, this.timeline.addTween(i.Tween.get(this.instance).wait(1))
    }).prototype = o(t.img_jqr_5, new i.Rectangle(0, 0, 32, 15), null), (t.img_jqr_4 = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.jqr_04, this.instance.parent = this, this.timeline.addTween(i.Tween.get(this.instance).wait(1))
    }).prototype = o(t.img_jqr_4, new i.Rectangle(0, 0, 32, 15), null), (t.img_jqr_3 = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.jqr_03, this.instance.parent = this, this.timeline.addTween(i.Tween.get(this.instance).wait(1))
    }).prototype = o(t.img_jqr_3, new i.Rectangle(0, 0, 72, 81), null), (t.img_jqr_2 = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.jqr_02, this.instance.parent = this, this.timeline.addTween(i.Tween.get(this.instance).wait(1))
    }).prototype = o(t.img_jqr_2, new i.Rectangle(0, 0, 8, 8), null), (t.img_jqr_1 = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.jqr_01, this.instance.parent = this, this.timeline.addTween(i.Tween.get(this.instance).wait(1))
    }).prototype = o(t.img_jqr_1, new i.Rectangle(0, 0, 95, 67), null), (t.Symbol = function (t, e, s) {
        this.initialize(t, e, s, {}), this.shape = new i.Shape, this.shape.graphics.f("#000000").s().p("Ag7AIIAAgPIB3AAIAAAPg"), this.shape.setTransform(6, .8), this.timeline.addTween(i.Tween.get(this.shape).wait(1))
    }).prototype = o(t.Symbol, new i.Rectangle(0, 0, 12, 1.5), null), (t.yss00 = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.ys00, this.instance.parent = this, this.instance.setTransform(34, 9.5, 1, 1, 0, 0, 0, 34, 9.5), this.timeline.addTween(i.Tween.get(this.instance).wait(39).to({
            alpha: .129
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .129
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .129
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(6))
    }).prototype = h = new i.MovieClip, h.nominalBounds = new i.Rectangle(11, 1, 46, 19), (t.yss = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.ys, this.instance.parent = this, this.instance.setTransform(34, 9.5, 1, 1, 0, 0, 0, 34, 9.5), this.timeline.addTween(i.Tween.get(this.instance).wait(39).to({
            alpha: .129
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .129
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .129
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(6))
    }).prototype = h = new i.MovieClip, h.nominalBounds = new i.Rectangle(0, 0, 68, 19), (t.yan2 = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.img_jqr_2, this.instance.parent = this, this.instance.setTransform(51, 4, 1, 1, 0, 0, 0, 4, 4), this.instance_1 = new t.img_jqr_2, this.instance_1.parent = this, this.instance_1.setTransform(4, 4, 1, 1, 0, 0, 0, 4, 4), this.timeline.addTween(i.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1))
    }).prototype = o(t.yan2, new i.Rectangle(0, 0, 55, 8), null), (t.yan = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.yan2, this.instance.parent = this, this.instance.setTransform(27.5, 4, 1, 1, 0, 0, 0, 27.5, 4), this.instance_1 = new t.Symbol, this.instance_1.parent = this, this.instance_1.setTransform(51, 3.8, 1, 1, 0, 0, 0, 6, .8), this.instance_2 = new t.Symbol, this.instance_2.parent = this, this.instance_2.setTransform(4, 3.8, 1, 1, 0, 0, 0, 6, .8), this.timeline.addTween(i.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance
            }]
        }, 13).to({
            state: [{
                t: this.instance_2
            }, {
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 2).to({
            state: [{
                t: this.instance_2
            }, {
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 2).wait(51))
    }).prototype = h = new i.MovieClip, h.nominalBounds = new i.Rectangle(0, 0, 55, 8), (t.mc_kkk3 = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.img_kkk2, this.instance.parent = this, this.instance.setTransform(72.8, 21.3, 1, 1, 0, 0, 0, 72.8, 21.3), this.timeline.addTween(i.Tween.get(this.instance).wait(1)), this.instance_1 = new t.img_kkk, this.instance_1.parent = this, this.instance_1.setTransform(72.8, 21.3, 1, 1, 0, 0, 0, 72.8, 21.3), this.instance_1.alpha = .359, this.timeline.addTween(i.Tween.get(this.instance_1).wait(1))
    }).prototype = o(t.mc_kkk3, new i.Rectangle((-1), (-1), 147.6, 44.5), null), (t.mc_jqr_2 = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.img_jqr_1, this.instance.parent = this, this.instance.setTransform(62.5, 60.8, 1, 1, 0, 0, 0, 48, 60.8), this.timeline.addTween(i.Tween.get(this.instance).to({
            rotation: -5
        }, 4).to({
            rotation: 0
        }, 4).to({
            regY: 60.7,
            rotation: 7.7
        }, 4).to({
            regY: 60.8,
            rotation: 0
        }, 4).wait(1)), this.instance_1 = new t.img_jqr_3, this.instance_1.parent = this, this.instance_1.setTransform(62, 64.8, 1, 1, 0, 0, 0, 36, 40.5), this.timeline.addTween(i.Tween.get(this.instance_1).to({
            regX: 36.1,
            rotation: 4.5,
            x: 62.1
        }, 4).to({
            regX: 36,
            rotation: 0,
            x: 62
        }, 4).to({
            rotation: -3.5
        }, 4).to({
            rotation: 0
        }, 4).wait(1)), this.instance_2 = new t.img_jqr_5, this.instance_2.parent = this, this.instance_2.setTransform(97.6, 61.6, 1, 1, 0, 0, 0, 4.8, 3.3), this.timeline.addTween(i.Tween.get(this.instance_2).to({
            regX: 4.7,
            rotation: 35.8,
            x: 97.4
        }, 4).to({
            regX: 4.8,
            rotation: 0,
            x: 97.6
        }, 4).to({
            rotation: 18,
            x: 97.5
        }, 4).to({
            rotation: 0,
            x: 97.6
        }, 4).wait(1)), this.instance_3 = new t.img_jqr_4, this.instance_3.parent = this, this.instance_3.setTransform(26.8, 61.6, 1, 1, 0, 0, 0, 26.8, 3.3), this.timeline.addTween(i.Tween.get(this.instance_3).to({
            rotation: -27,
            x: 26.9
        }, 4).to({
            rotation: 0,
            x: 26.8
        }, 4).to({
            regY: 3.2,
            rotation: -28.3,
            y: 61.5
        }, 4).to({
            regY: 3.3,
            rotation: 0,
            y: 61.6
        }, 4).wait(1)), this.instance_4 = new t.img_jqr_6, this.instance_4.parent = this, this.instance_4.setTransform(62, 104.9, 1, 1, 0, 0, 0, 32.5, 9.5), this.timeline.addTween(i.Tween.get(this.instance_4).to({
            x: 57.5
        }, 4).to({
            x: 62
        }, 4).to({
            x: 66
        }, 4).to({
            x: 62
        }, 4).wait(1))
    }).prototype = h = new i.MovieClip, h.nominalBounds = new i.Rectangle(0, 0, 124.8, 114.4), (t.mc_jqr_1 = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.img_jqr_4, this.instance.parent = this, this.instance.setTransform(26.7, 61.5, 1, 1, -40, 0, 0, 26.7, 3.2), this.instance._off = !0, this.timeline.addTween(i.Tween.get(this.instance).wait(4).to({
            _off: !1
        }, 0).to({
            regY: 3.3,
            rotation: 108.7,
            x: 61.7,
            y: 41.6
        }, 4, i.Ease.get(1)).to({
            regX: 26.8,
            scaleX: 1,
            scaleY: 1,
            rotation: 189.5,
            x: 88.4,
            y: 59.1
        }, 3).to({
            _off: !0
        }, 1).wait(46));
        var a = new i.Shape;
        a._off = !0;
        var o = (new i.Graphics).p("AmSDXQgBmpHchPQGfAgA7G9QkGCYj4AAQjgAAjXh9g"),
            h = (new i.Graphics).p("AmSC+QgBmpHchPQGfAgA7G9QkGCYj4AAQjgAAjXh9g"),
            r = (new i.Graphics).p("AmSC+QgBmpHchPQGfAgA7G9QkGCYj4AAQjgAAjXh9g"),
            c = (new i.Graphics).p("AmSC+QgBmpHchPQGfAgA7G9QkGCYj4AAQjgAAjXh9g"),
            _ = (new i.Graphics).p("AmSC+QgBmpHchPQGfAgA7G9QkGCYj4AAQjgAAjXh9g"),
            w = (new i.Graphics).p("AmSC+QgBmpHchPQGfAgA7G9QkGCYj4AAQjgAAjXh9g"),
            g = (new i.Graphics).p("AmSC+QgBmpHchPQGfAgA7G9QkGCYj4AAQjgAAjXh9g"),
            f = (new i.Graphics).p("AmSC+QgBmpHchPQGfAgA7G9QkGCYj4AAQjgAAjXh9g"),
            d = (new i.Graphics).p("AmSC+QgBmpHchPQGfAgA7G9QkGCYj4AAQjgAAjXh9g");
        this.timeline.addTween(i.Tween.get(a).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(4).to({
            graphics: o,
            x: 54.7,
            y: 34
        }).wait(1).to({
            graphics: h,
            x: 54.7,
            y: 23.4
        }).wait(1).to({
            graphics: r,
            x: 54.7,
            y: 14
        }).wait(1).to({
            graphics: c,
            x: 54.7,
            y: 8.4
        }).wait(1).to({
            graphics: _,
            x: 54.7,
            y: 6.5
        }).wait(1).to({
            graphics: w,
            x: 54.7,
            y: 8
        }).wait(1).to({
            graphics: g,
            x: 54.7,
            y: 12.7
        }).wait(1).to({
            graphics: f,
            x: 54.7,
            y: 20.4
        }).wait(1).to({
            graphics: d,
            x: 54.7,
            y: 31.2
        }).wait(46)), this.instance_1 = new t.yan2, this.instance_1.parent = this, this.instance_1.setTransform(-14, 42, 1, 1, 0, 0, 0, 27.5, 4), this.instance_1._off = !0;
        for (var l = [this.instance_1], T = 0; T < l.length; T++) l[T].mask = a;
        this.timeline.addTween(i.Tween.get(this.instance_1).wait(4).to({
            _off: !1
        }, 0).to({
            x: 17.8,
            y: 5.5
        }, 4, i.Ease.get(1)).to({
            x: 62,
            y: 36
        }, 4, i.Ease.get(-1)).to({
            y: 39
        }, 2).to({
            y: 36
        }, 2).to({
            y: 39
        }, 2).to({
            y: 36
        }, 2).wait(38)), this.instance_2 = new t.img_jqr_1, this.instance_2.parent = this, this.instance_2.setTransform(62, 33.5, 1, 1, 0, 0, 0, 47.5, 33.5), this.timeline.addTween(i.Tween.get(this.instance_2).to({
            y: 38.5
        }, 4, i.Ease.get(1)).to({
            y: 8.5
        }, 4, i.Ease.get(1)).to({
            y: 33.5
        }, 4, i.Ease.get(-1)).to({
            y: 36.5
        }, 2).to({
            y: 33.5
        }, 2).to({
            y: 36.5
        }, 2).to({
            y: 33.5
        }, 2).wait(38)), this.instance_3 = new t.img_jqr_3, this.instance_3.parent = this, this.instance_3.setTransform(62, 64.8, 1, 1, 0, 0, 0, 36, 40.5), this.timeline.addTween(i.Tween.get(this.instance_3).wait(4).to({
            y: 39.8
        }, 4, i.Ease.get(1)).to({
            y: 64.8
        }, 4, i.Ease.get(-1)).wait(46)), this.instance_4 = new t.img_jqr_5, this.instance_4.parent = this, this.instance_4.setTransform(97.6, 61.6, 1, 1, 0, 0, 0, 4.8, 3.3), this.timeline.addTween(i.Tween.get(this.instance_4).to({
            rotation: 43.2,
            x: 97.5
        }, 4, i.Ease.get(1)).to({
            rotation: -96.7,
            x: 57.6,
            y: 41.5
        }, 4, i.Ease.get(1)).wait(4).to({
            rotation: 0,
            x: 97.6,
            y: 61.6
        }, 0).to({
            rotation: 15,
            y: 61.7
        }, 2).to({
            rotation: 0,
            y: 61.6
        }, 2).to({
            rotation: 8.7
        }, 2).to({
            rotation: 0
        }, 2).wait(38)), this.instance_5 = new t.img_jqr_4, this.instance_5.parent = this, this.instance_5.setTransform(26.8, 61.6, 1, 1, 0, 0, 0, 26.8, 3.3), this.timeline.addTween(i.Tween.get(this.instance_5).to({
            regX: 26.7,
            regY: 3.2,
            rotation: -40,
            x: 26.7,
            y: 61.5
        }, 4, i.Ease.get(1)).to({
            regY: 3.3,
            rotation: 96.2,
            x: 26.6,
            y: 36.6
        }, 4, i.Ease.get(1)).to({
            rotation: 0,
            x: 26.8,
            y: 61.5
        }, 4, i.Ease.get(-1)).to({
            regY: 3.4,
            rotation: -19.9,
            y: 61.6
        }, 2).to({
            regY: 3.3,
            rotation: 0,
            y: 61.5
        }, 2).to({
            rotation: -7.2
        }, 2).to({
            rotation: 0
        }, 2).wait(38)), this.instance_6 = new t.img_jqr_6, this.instance_6.parent = this, this.instance_6.setTransform(62, 104.9, 1, 1, 0, 0, 0, 32.5, 9.5), this.timeline.addTween(i.Tween.get(this.instance_6).wait(4).to({
            scaleX: .83,
            scaleY: .83,
            x: 62.1,
            y: 105
        }, 4, i.Ease.get(1)).to({
            scaleX: 1,
            scaleY: 1,
            x: 62,
            y: 104.9
        }, 4, i.Ease.get(-1)).wait(46))
    }).prototype = h = new i.MovieClip, h.nominalBounds = new i.Rectangle(0, 0, 124.8, 114.4), (t.mc_btn_go = function (e, s, n) {
        this.initialize(e, s, n, {
            "@s_end": 11
        }), this.instance = new t.ys00, this.instance.parent = this, this.instance.setTransform(64, 19.5, 1, 1, 0, 0, 0, 34, 9.5), this.instance.alpha = .391, this.instance._off = !0, this.instance_1 = new t.yss00, this.instance_1.parent = this, this.instance_1.setTransform(64, 19.5, 1, 1, 0, 0, 0, 34, 9.5), this.timeline.addTween(i.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance
            }]
        }, 6).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).wait(2)), this.timeline.addTween(i.Tween.get(this.instance).wait(6).to({
            _off: !1
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .391
        }, 0).wait(1).to({
            alpha: 1
        }, 0).to({
            _off: !0
        }, 1).wait(2)), this.instance_2 = new t.kk00, this.instance_2.parent = this, this.instance_2.setTransform(63.5, 20.5, 1, 1, 0, 0, 0, 63.5, 20.5), this.instance_2.alpha = 0, this.timeline.addTween(i.Tween.get(this.instance_2).to({
            alpha: 1
        }, 3).wait(1).to({
            alpha: .441
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .441
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .441
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(3))
    }).prototype = h = new i.MovieClip, h.nominalBounds = new i.Rectangle(0, 0, 127, 41), (t.kks = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.kk, this.instance.parent = this, this.instance.setTransform(63.5, 20.5, 1, 1, 0, 0, 0, 63.5, 20.5), this.timeline.addTween(i.Tween.get(this.instance).wait(33).to({
            alpha: 0
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: 0
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: 0
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(12))
    }).prototype = h = new i.MovieClip, h.nominalBounds = new i.Rectangle(0, 0, 127, 41), (t.jqrrr复制5 = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.yan, this.instance.parent = this, this.instance.setTransform(62, 36, 1, 1, 0, 0, 0, 27.5, 4), this.timeline.addTween(i.Tween.get(this.instance).to({
            x: 35
        }, 7, i.Ease.get(1)).to({
            x: 348
        }, 3, i.Ease.get(-1)).to({
            x: 304
        }, 3, i.Ease.get(-1)).to({
            x: 343
        }, 2, i.Ease.get(-1)).to({
            x: 304
        }, 2, i.Ease.get(-1)).to({
            x: 343
        }, 2, i.Ease.get(-1)).to({
            x: 304
        }, 2, i.Ease.get(-1)).to({
            x: 322
        }, 2, i.Ease.get(-1)).wait(1)), this.instance_1 = new t.img_jqr_1, this.instance_1.parent = this, this.instance_1.setTransform(62, 33.5, 1, 1, 0, 0, 0, 47.5, 33.5), this.timeline.addTween(i.Tween.get(this.instance_1).to({
            x: 42
        }, 7, i.Ease.get(1)).to({
            x: 337
        }, 3, i.Ease.get(-1)).to({
            x: 310
        }, 3, i.Ease.get(-1)).to({
            x: 333
        }, 2, i.Ease.get(-1)).to({
            x: 310
        }, 2, i.Ease.get(-1)).to({
            x: 333
        }, 2, i.Ease.get(-1)).to({
            x: 310
        }, 2, i.Ease.get(-1)).to({
            x: 322
        }, 2, i.Ease.get(-1)).wait(1)), this.instance_2 = new t.img_jqr_3, this.instance_2.parent = this, this.instance_2.setTransform(62, 105, 1, 1, 0, 0, 0, 36, 80.7), this.timeline.addTween(i.Tween.get(this.instance_2).to({
            regX: 36.1,
            rotation: -15,
            x: 62.1
        }, 7, i.Ease.get(1)).to({
            rotation: 15,
            x: 322.1
        }, 3, i.Ease.get(-1)).to({
            rotation: -7.8
        }, 3, i.Ease.get(-1)).to({
            regY: 80.8,
            rotation: 5.6,
            y: 105.1
        }, 2, i.Ease.get(-1)).to({
            regY: 80.7,
            rotation: -7.8,
            y: 105
        }, 2, i.Ease.get(-1)).to({
            regY: 80.8,
            rotation: 5.6,
            y: 105.1
        }, 2, i.Ease.get(-1)).to({
            regY: 80.7,
            rotation: -7.8,
            y: 105
        }, 2, i.Ease.get(-1)).to({
            regX: 36,
            rotation: 0,
            x: 322
        }, 2, i.Ease.get(-1)).wait(1)), this.instance_3 = new t.img_jqr_5, this.instance_3.parent = this, this.instance_3.setTransform(97.6, 61.6, 1, 1, 0, 0, 0, 4.8, 3.3), this.timeline.addTween(i.Tween.get(this.instance_3).to({
            rotation: -15,
            x: 88.6
        }, 7, i.Ease.get(1)).to({
            x: 368.6
        }, 3, i.Ease.get(-1)).to({
            x: 351.6
        }, 3, i.Ease.get(-1)).to({
            x: 361.6
        }, 2, i.Ease.get(-1)).to({
            x: 351.6
        }, 2, i.Ease.get(-1)).to({
            x: 361.6
        }, 2, i.Ease.get(-1)).to({
            x: 351.6
        }, 2, i.Ease.get(-1)).to({
            rotation: 0,
            x: 357.6
        }, 2, i.Ease.get(-1)).wait(1)), this.instance_4 = new t.img_jqr_4, this.instance_4.parent = this, this.instance_4.setTransform(26.7, 61.5, 1, 1, 0, 0, 0, 26.7, 3.3), this.timeline.addTween(i.Tween.get(this.instance_4).to({
            rotation: 15,
            x: 14.7,
            y: 64.5
        }, 7, i.Ease.get(1)).to({
            x: 297.8
        }, 3, i.Ease.get(-1)).to({
            x: 282.8
        }, 3, i.Ease.get(-1)).to({
            x: 291.8
        }, 2, i.Ease.get(-1)).to({
            x: 282.8
        }, 2, i.Ease.get(-1)).to({
            x: 291.8
        }, 2, i.Ease.get(-1)).to({
            x: 282.8
        }, 2, i.Ease.get(-1)).to({
            rotation: 0,
            x: 286.8,
            y: 61.5
        }, 2, i.Ease.get(-1)).wait(1)), this.instance_5 = new t.img_jqr_6, this.instance_5.parent = this, this.instance_5.setTransform(62, 104.9, 1, 1, 0, 0, 0, 32.5, 9.5), this.timeline.addTween(i.Tween.get(this.instance_5).to({
            regX: 32.6,
            scaleX: 1.45,
            x: 47.7
        }, 7, i.Ease.get(1)).to({
            x: 330.7
        }, 3, i.Ease.get(-1)).to({
            scaleX: 1.35,
            x: 310.8
        }, 3, i.Ease.get(-1)).to({
            scaleX: 1.45,
            x: 330.7
        }, 2, i.Ease.get(-1)).to({
            regX: 32.5,
            scaleX: 1,
            x: 322
        }, 2, i.Ease.get(-1)).to({
            scaleX: 1.17,
            x: 327.6
        }, 2).to({
            scaleX: 1.22,
            x: 315
        }, 2).to({
            scaleX: 1,
            x: 322
        }, 2).wait(1))
    }).prototype = h = new i.MovieClip, h.nominalBounds = new i.Rectangle(0, 0, 124.8, 114.4), (t.jqrrr复制4 = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.yan, this.instance.parent = this, this.instance.setTransform(62, 36, 1, 1, 0, 0, 0, 27.5, 4), this.timeline.addTween(i.Tween.get(this.instance).to({
            x: 35
        }, 7, i.Ease.get(1)).to({
            x: 88
        }, 3, i.Ease.get(-1)).to({
            x: -216.7
        }, 3, i.Ease.get(-1)).to({
            x: -177.7
        }, 2, i.Ease.get(-1)).to({
            x: -216.7
        }, 2, i.Ease.get(-1)).to({
            x: -177.7
        }, 2, i.Ease.get(-1)).to({
            x: -216.7
        }, 2, i.Ease.get(-1)).to({
            x: -198.7
        }, 2, i.Ease.get(-1)).wait(1)), this.instance_1 = new t.img_jqr_1, this.instance_1.parent = this, this.instance_1.setTransform(62, 33.5, 1, 1, 0, 0, 0, 47.5, 33.5), this.timeline.addTween(i.Tween.get(this.instance_1).to({
            x: 42
        }, 7, i.Ease.get(1)).to({
            x: 77
        }, 3, i.Ease.get(-1)).to({
            x: -210.7
        }, 3, i.Ease.get(-1)).to({
            x: -187.7
        }, 2, i.Ease.get(-1)).to({
            x: -210.7
        }, 2, i.Ease.get(-1)).to({
            x: -187.7
        }, 2, i.Ease.get(-1)).to({
            x: -210.7
        }, 2, i.Ease.get(-1)).to({
            x: -198.7
        }, 2, i.Ease.get(-1)).wait(1)), this.instance_2 = new t.img_jqr_3, this.instance_2.parent = this, this.instance_2.setTransform(62, 105, 1, 1, 0, 0, 0, 36, 80.7), this.timeline.addTween(i.Tween.get(this.instance_2).to({
            regX: 36.1,
            rotation: -15,
            x: 62.1
        }, 7, i.Ease.get(1)).to({
            rotation: 15,
            x: 62
        }, 3, i.Ease.get(-1)).to({
            rotation: -7.8,
            x: -198.6
        }, 3, i.Ease.get(-1)).to({
            regY: 80.8,
            rotation: 5.6,
            x: -198.7,
            y: 105.1
        }, 2, i.Ease.get(-1)).to({
            regY: 80.7,
            rotation: -7.8,
            x: -198.6,
            y: 105
        }, 2, i.Ease.get(-1)).to({
            regY: 80.8,
            rotation: 5.6,
            x: -198.7,
            y: 105.1
        }, 2, i.Ease.get(-1)).to({
            regY: 80.7,
            rotation: -7.8,
            x: -198.6,
            y: 105
        }, 2, i.Ease.get(-1)).to({
            regX: 36,
            rotation: 0,
            x: -198.7
        }, 2, i.Ease.get(-1)).wait(1)), this.instance_3 = new t.img_jqr_5, this.instance_3.parent = this, this.instance_3.setTransform(97.6, 61.6, 1, 1, 0, 0, 0, 4.8, 3.3), this.timeline.addTween(i.Tween.get(this.instance_3).to({
            rotation: -15,
            x: 88.6
        }, 7, i.Ease.get(1)).to({
            x: 108.6
        }, 3, i.Ease.get(-1)).to({
            x: -169.1
        }, 3, i.Ease.get(-1)).to({
            x: -159.1
        }, 2, i.Ease.get(-1)).to({
            x: -169.1
        }, 2, i.Ease.get(-1)).to({
            x: -159.1
        }, 2, i.Ease.get(-1)).to({
            x: -169.1
        }, 2, i.Ease.get(-1)).to({
            rotation: 0,
            x: -163.1
        }, 2, i.Ease.get(-1)).wait(1)), this.instance_4 = new t.img_jqr_4, this.instance_4.parent = this, this.instance_4.setTransform(26.7, 61.5, 1, 1, 0, 0, 0, 26.7, 3.3), this.timeline.addTween(i.Tween.get(this.instance_4).to({
            rotation: 15,
            x: 14.7,
            y: 64.5
        }, 7, i.Ease.get(1)).to({
            x: 37.7
        }, 3, i.Ease.get(-1)).to({
            x: -238
        }, 3, i.Ease.get(-1)).to({
            x: -229
        }, 2, i.Ease.get(-1)).to({
            x: -238
        }, 2, i.Ease.get(-1)).to({
            x: -229
        }, 2, i.Ease.get(-1)).to({
            x: -238
        }, 2, i.Ease.get(-1)).to({
            rotation: 0,
            x: -234,
            y: 61.5
        }, 2, i.Ease.get(-1)).wait(1)), this.instance_5 = new t.img_jqr_6, this.instance_5.parent = this, this.instance_5.setTransform(62, 104.9, 1, 1, 0, 0, 0, 32.5, 9.5), this.timeline.addTween(i.Tween.get(this.instance_5).to({
            regX: 32.6,
            scaleX: 1.45,
            x: 47.7
        }, 7, i.Ease.get(1)).to({
            x: 70.7
        }, 3, i.Ease.get(-1)).to({
            scaleX: 1.35,
            x: -210
        }, 3, i.Ease.get(-1)).to({
            scaleX: 1.45,
            x: -190
        }, 2, i.Ease.get(-1)).to({
            regX: 32.5,
            scaleX: 1,
            x: -198.7
        }, 2, i.Ease.get(-1)).to({
            scaleX: 1.17,
            x: -193.2
        }, 2).to({
            scaleX: 1.22,
            x: -205.7
        }, 2).to({
            scaleX: 1,
            x: -198.7
        }, 2).wait(1))
    }).prototype = h = new i.MovieClip, h.nominalBounds = new i.Rectangle(0, 0, 124.8, 114.4), (t.jqrrr复制3 = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.yan, this.instance.parent = this, this.instance.setTransform(62, 36, 1, 1, 0, 0, 0, 27.5, 4), this.timeline.addTween(i.Tween.get(this.instance).to({
            x: 35
        }, 7, i.Ease.get(1)).to({
            x: 88
        }, 3, i.Ease.get(-1)).to({
            x: -86.2
        }, 3, i.Ease.get(-1)).to({
            x: -47.2
        }, 2, i.Ease.get(-1)).to({
            x: -86.2
        }, 2, i.Ease.get(-1)).to({
            x: -47.2
        }, 2, i.Ease.get(-1)).to({
            x: -86.2
        }, 2, i.Ease.get(-1)).to({
            x: -68.2
        }, 2, i.Ease.get(-1)).wait(1)), this.instance_1 = new t.img_jqr_1, this.instance_1.parent = this, this.instance_1.setTransform(62, 33.5, 1, 1, 0, 0, 0, 47.5, 33.5), this.timeline.addTween(i.Tween.get(this.instance_1).to({
            x: 42
        }, 7, i.Ease.get(1)).to({
            x: 77
        }, 3, i.Ease.get(-1)).to({
            x: -80.2
        }, 3, i.Ease.get(-1)).to({
            x: -57.2
        }, 2, i.Ease.get(-1)).to({
            x: -80.2
        }, 2, i.Ease.get(-1)).to({
            x: -57.2
        }, 2, i.Ease.get(-1)).to({
            x: -80.2
        }, 2, i.Ease.get(-1)).to({
            x: -68.2
        }, 2, i.Ease.get(-1)).wait(1)), this.instance_2 = new t.img_jqr_3, this.instance_2.parent = this, this.instance_2.setTransform(62, 105, 1, 1, 0, 0, 0, 36, 80.7), this.timeline.addTween(i.Tween.get(this.instance_2).to({
            regX: 36.1,
            rotation: -15,
            x: 62.1
        }, 7, i.Ease.get(1)).to({
            rotation: 15,
            x: 62
        }, 3, i.Ease.get(-1)).to({
            rotation: -7.8,
            x: -68.1
        }, 3, i.Ease.get(-1)).to({
            regY: 80.8,
            rotation: 5.6,
            y: 105.1
        }, 2, i.Ease.get(-1)).to({
            regY: 80.7,
            rotation: -7.8,
            y: 105
        }, 2, i.Ease.get(-1)).to({
            regY: 80.8,
            rotation: 5.6,
            y: 105.1
        }, 2, i.Ease.get(-1)).to({
            regY: 80.7,
            rotation: -7.8,
            y: 105
        }, 2, i.Ease.get(-1)).to({
            regX: 36,
            rotation: 0,
            x: -68.2
        }, 2, i.Ease.get(-1)).wait(1)), this.instance_3 = new t.img_jqr_5, this.instance_3.parent = this, this.instance_3.setTransform(97.6, 61.6, 1, 1, 0, 0, 0, 4.8, 3.3), this.timeline.addTween(i.Tween.get(this.instance_3).to({
            rotation: -15,
            x: 88.6
        }, 7, i.Ease.get(1)).to({
            x: 108.6
        }, 3, i.Ease.get(-1)).to({
            x: -38.6
        }, 3, i.Ease.get(-1)).to({
            x: -28.6
        }, 2, i.Ease.get(-1)).to({
            x: -38.6
        }, 2, i.Ease.get(-1)).to({
            x: -28.6
        }, 2, i.Ease.get(-1)).to({
            x: -38.6
        }, 2, i.Ease.get(-1)).to({
            rotation: 0,
            x: -32.6
        }, 2, i.Ease.get(-1)).wait(1)), this.instance_4 = new t.img_jqr_4, this.instance_4.parent = this, this.instance_4.setTransform(26.7, 61.5, 1, 1, 0, 0, 0, 26.7, 3.3), this.timeline.addTween(i.Tween.get(this.instance_4).to({
            rotation: 15,
            x: 14.7,
            y: 64.5
        }, 7, i.Ease.get(1)).to({
            x: 37.7
        }, 3, i.Ease.get(-1)).to({
            x: -107.4
        }, 3, i.Ease.get(-1)).to({
            x: -98.4
        }, 2, i.Ease.get(-1)).to({
            x: -107.4
        }, 2, i.Ease.get(-1)).to({
            x: -98.4
        }, 2, i.Ease.get(-1)).to({
            x: -107.4
        }, 2, i.Ease.get(-1)).to({
            rotation: 0,
            x: -103.4,
            y: 61.5
        }, 2, i.Ease.get(-1)).wait(1)), this.instance_5 = new t.img_jqr_6, this.instance_5.parent = this, this.instance_5.setTransform(62, 104.9, 1, 1, 0, 0, 0, 32.5, 9.5), this.timeline.addTween(i.Tween.get(this.instance_5).to({
            regX: 32.6,
            scaleX: 1.45,
            x: 47.7
        }, 7, i.Ease.get(1)).to({
            x: 70.7
        }, 3, i.Ease.get(-1)).to({
            scaleX: 1.35,
            x: -79.4
        }, 3, i.Ease.get(-1)).to({
            scaleX: 1.45,
            x: -59.5
        }, 2, i.Ease.get(-1)).to({
            regX: 32.5,
            scaleX: 1,
            x: -68.2
        }, 2, i.Ease.get(-1)).to({
            scaleX: 1.17,
            x: -62.6
        }, 2).to({
            scaleX: 1.22,
            x: -75.2
        }, 2).to({
            scaleX: 1,
            x: -68.2
        }, 2).wait(1))
    }).prototype = h = new i.MovieClip, h.nominalBounds = new i.Rectangle(0, 0, 124.8, 114.4), (t.jqrrr复制 = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.yan, this.instance.parent = this, this.instance.setTransform(62, 36, 1, 1, 0, 0, 0, 27.5, 4), this.timeline.addTween(i.Tween.get(this.instance).to({
            x: 35
        }, 7, i.Ease.get(1)).to({
            x: 218
        }, 3, i.Ease.get(-1)).to({
            x: 174
        }, 3, i.Ease.get(-1)).to({
            x: 213
        }, 2, i.Ease.get(-1)).to({
            x: 174
        }, 2, i.Ease.get(-1)).to({
            x: 213
        }, 2, i.Ease.get(-1)).to({
            x: 174
        }, 2, i.Ease.get(-1)).to({
            x: 192
        }, 2, i.Ease.get(-1)).wait(1)), this.instance_1 = new t.img_jqr_1, this.instance_1.parent = this, this.instance_1.setTransform(62, 33.5, 1, 1, 0, 0, 0, 47.5, 33.5), this.timeline.addTween(i.Tween.get(this.instance_1).to({
            x: 42
        }, 7, i.Ease.get(1)).to({
            x: 207
        }, 3, i.Ease.get(-1)).to({
            x: 180
        }, 3, i.Ease.get(-1)).to({
            x: 203
        }, 2, i.Ease.get(-1)).to({
            x: 180
        }, 2, i.Ease.get(-1)).to({
            x: 203
        }, 2, i.Ease.get(-1)).to({
            x: 180
        }, 2, i.Ease.get(-1)).to({
            x: 192
        }, 2, i.Ease.get(-1)).wait(1)), this.instance_2 = new t.img_jqr_3, this.instance_2.parent = this, this.instance_2.setTransform(62, 105, 1, 1, 0, 0, 0, 36, 80.7), this.timeline.addTween(i.Tween.get(this.instance_2).to({
            regX: 36.1,
            rotation: -15,
            x: 62.1
        }, 7, i.Ease.get(1)).to({
            rotation: 15,
            x: 192
        }, 3, i.Ease.get(-1)).to({
            rotation: -7.8,
            x: 192.1
        }, 3, i.Ease.get(-1)).to({
            regY: 80.8,
            rotation: 5.6,
            x: 192,
            y: 105.1
        }, 2, i.Ease.get(-1)).to({
            regY: 80.7,
            rotation: -7.8,
            x: 192.1,
            y: 105
        }, 2, i.Ease.get(-1)).to({
            regY: 80.8,
            rotation: 5.6,
            x: 192,
            y: 105.1
        }, 2, i.Ease.get(-1)).to({
            regY: 80.7,
            rotation: -7.8,
            x: 192.1,
            y: 105
        }, 2, i.Ease.get(-1)).to({
            regX: 36,
            rotation: 0,
            x: 192
        }, 2, i.Ease.get(-1)).wait(1)), this.instance_3 = new t.img_jqr_5, this.instance_3.parent = this, this.instance_3.setTransform(97.6, 61.6, 1, 1, 0, 0, 0, 4.8, 3.3), this.timeline.addTween(i.Tween.get(this.instance_3).to({
            rotation: -15,
            x: 88.6
        }, 7, i.Ease.get(1)).to({
            x: 238.6
        }, 3, i.Ease.get(-1)).to({
            x: 221.6
        }, 3, i.Ease.get(-1)).to({
            x: 231.6
        }, 2, i.Ease.get(-1)).to({
            x: 221.6
        }, 2, i.Ease.get(-1)).to({
            x: 231.6
        }, 2, i.Ease.get(-1)).to({
            x: 221.6
        }, 2, i.Ease.get(-1)).to({
            rotation: 0,
            x: 227.6
        }, 2, i.Ease.get(-1)).wait(1)), this.instance_4 = new t.img_jqr_4, this.instance_4.parent = this, this.instance_4.setTransform(26.7, 61.5, 1, 1, 0, 0, 0, 26.7, 3.3), this.timeline.addTween(i.Tween.get(this.instance_4).to({
            rotation: 15,
            x: 14.7,
            y: 64.5
        }, 7, i.Ease.get(1)).to({
            x: 167.7
        }, 3, i.Ease.get(-1)).to({
            x: 152.7
        }, 3, i.Ease.get(-1)).to({
            x: 161.7
        }, 2, i.Ease.get(-1)).to({
            x: 152.7
        }, 2, i.Ease.get(-1)).to({
            x: 161.7
        }, 2, i.Ease.get(-1)).to({
            x: 152.7
        }, 2, i.Ease.get(-1)).to({
            rotation: 0,
            x: 156.7,
            y: 61.5
        }, 2, i.Ease.get(-1)).wait(1)), this.instance_5 = new t.img_jqr_6, this.instance_5.parent = this, this.instance_5.setTransform(62, 104.9, 1, 1, 0, 0, 0, 32.5, 9.5), this.timeline.addTween(i.Tween.get(this.instance_5).to({
            regX: 32.6,
            scaleX: 1.45,
            x: 47.7
        }, 7, i.Ease.get(1)).to({
            x: 200.7
        }, 3, i.Ease.get(-1)).to({
            scaleX: 1.35,
            x: 180.7
        }, 3, i.Ease.get(-1)).to({
            scaleX: 1.45,
            x: 200.7
        }, 2, i.Ease.get(-1)).to({
            regX: 32.5,
            scaleX: 1,
            x: 192
        }, 2, i.Ease.get(-1)).to({
            scaleX: 1.17,
            x: 197.5
        }, 2).to({
            scaleX: 1.22,
            x: 185
        }, 2).to({
            scaleX: 1,
            x: 192
        }, 2).wait(1))
    }).prototype = h = new i.MovieClip, h.nominalBounds = new i.Rectangle(0, 0, 124.8, 114.4), (t.jqrrr_2 = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.yan, this.instance.parent = this, this.instance.setTransform(62, 36, 1, 1, 0, 0, 0, 27.5, 4), this.timeline.addTween(i.Tween.get(this.instance).to({
            x: 35
        }, 7, i.Ease.get(1)).to({
            x: 88
        }, 3, i.Ease.get(-1)).to({
            x: -86
        }, 3, i.Ease.get(-1)).to({
            x: -47
        }, 2, i.Ease.get(-1)).to({
            x: -86
        }, 2, i.Ease.get(-1)).to({
            x: -47
        }, 2, i.Ease.get(-1)).to({
            x: -86
        }, 2, i.Ease.get(-1)).to({
            x: -68
        }, 2, i.Ease.get(-1)).wait(1)), this.instance_1 = new t.img_jqr_1, this.instance_1.parent = this, this.instance_1.setTransform(62, 33.5, 1, 1, 0, 0, 0, 47.5, 33.5), this.timeline.addTween(i.Tween.get(this.instance_1).to({
            x: 42
        }, 7, i.Ease.get(1)).to({
            x: 77
        }, 3, i.Ease.get(-1)).to({
            x: -80
        }, 3, i.Ease.get(-1)).to({
            x: -57
        }, 2, i.Ease.get(-1)).to({
            x: -80
        }, 2, i.Ease.get(-1)).to({
            x: -57
        }, 2, i.Ease.get(-1)).to({
            x: -80
        }, 2, i.Ease.get(-1)).to({
            x: -68
        }, 2, i.Ease.get(-1)).wait(1)), this.instance_2 = new t.img_jqr_3, this.instance_2.parent = this, this.instance_2.setTransform(62, 105, 1, 1, 0, 0, 0, 36, 80.7), this.timeline.addTween(i.Tween.get(this.instance_2).to({
            regX: 36.1,
            rotation: -15,
            x: 62.1
        }, 7, i.Ease.get(1)).to({
            rotation: 15,
            x: 62
        }, 3, i.Ease.get(-1)).to({
            rotation: -7.8,
            x: -67.9
        }, 3, i.Ease.get(-1)).to({
            regY: 80.8,
            rotation: 5.6,
            x: -68,
            y: 105.1
        }, 2, i.Ease.get(-1)).to({
            regY: 80.7,
            rotation: -7.8,
            x: -67.9,
            y: 105
        }, 2, i.Ease.get(-1)).to({
            regY: 80.8,
            rotation: 5.6,
            x: -68,
            y: 105.1
        }, 2, i.Ease.get(-1)).to({
            regY: 80.7,
            rotation: -7.8,
            x: -67.9,
            y: 105
        }, 2, i.Ease.get(-1)).to({
            regX: 36,
            rotation: 0,
            x: -68
        }, 2, i.Ease.get(-1)).wait(1)), this.instance_3 = new t.img_jqr_5, this.instance_3.parent = this, this.instance_3.setTransform(97.6, 61.6, 1, 1, 0, 0, 0, 4.8, 3.3), this.timeline.addTween(i.Tween.get(this.instance_3).to({
            rotation: -15,
            x: 88.6
        }, 7, i.Ease.get(1)).to({
            x: 108.6
        }, 3, i.Ease.get(-1)).to({
            x: -38.4
        }, 3, i.Ease.get(-1)).to({
            x: -28.4
        }, 2, i.Ease.get(-1)).to({
            x: -38.4
        }, 2, i.Ease.get(-1)).to({
            x: -28.4
        }, 2, i.Ease.get(-1)).to({
            x: -38.4
        }, 2, i.Ease.get(-1)).to({
            rotation: 0,
            x: -32.4
        }, 2, i.Ease.get(-1)).wait(1)), this.instance_4 = new t.img_jqr_4, this.instance_4.parent = this, this.instance_4.setTransform(26.7, 61.5, 1, 1, 0, 0, 0, 26.7, 3.3), this.timeline.addTween(i.Tween.get(this.instance_4).to({
            rotation: 15,
            x: 14.7,
            y: 64.5
        }, 7, i.Ease.get(1)).to({
            x: 37.7
        }, 3, i.Ease.get(-1)).to({
            x: -107.3
        }, 3, i.Ease.get(-1)).to({
            x: -98.3
        }, 2, i.Ease.get(-1)).to({
            x: -107.3
        }, 2, i.Ease.get(-1)).to({
            x: -98.3
        }, 2, i.Ease.get(-1)).to({
            x: -107.3
        }, 2, i.Ease.get(-1)).to({
            rotation: 0,
            x: -103.3,
            y: 61.5
        }, 2, i.Ease.get(-1)).wait(1)), this.instance_5 = new t.img_jqr_6, this.instance_5.parent = this, this.instance_5.setTransform(62, 104.9, 1, 1, 0, 0, 0, 32.5, 9.5), this.timeline.addTween(i.Tween.get(this.instance_5).to({
            regX: 32.6,
            scaleX: 1.45,
            x: 47.7
        }, 7, i.Ease.get(1)).to({
            x: 70.7
        }, 3, i.Ease.get(-1)).to({
            scaleX: 1.35,
            x: -79.3
        }, 3, i.Ease.get(-1)).to({
            scaleX: 1.45,
            x: -59.3
        }, 2, i.Ease.get(-1)).to({
            regX: 32.5,
            scaleX: 1,
            x: -68
        }, 2, i.Ease.get(-1)).to({
            scaleX: 1.17,
            x: -62.5
        }, 2).to({
            scaleX: 1.22,
            x: -75
        }, 2).to({
            scaleX: 1,
            x: -68
        }, 2).wait(1))
    }).prototype = h = new i.MovieClip, h.nominalBounds = new i.Rectangle(0, 0, 124.8, 114.4), (t.jqrrr = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.yan, this.instance.parent = this, this.instance.setTransform(62, 36, 1, 1, 0, 0, 0, 27.5, 4), this.timeline.addTween(i.Tween.get(this.instance).to({
            x: 35
        }, 7, i.Ease.get(1)).to({
            x: 88
        }, 3, i.Ease.get(-1)).to({
            x: 44
        }, 3, i.Ease.get(-1)).to({
            x: 83
        }, 2, i.Ease.get(-1)).to({
            x: 44
        }, 2, i.Ease.get(-1)).to({
            x: 83
        }, 2, i.Ease.get(-1)).to({
            x: 44
        }, 2, i.Ease.get(-1)).to({
            x: 62
        }, 2, i.Ease.get(-1)).wait(1)), this.instance_1 = new t.img_jqr_1, this.instance_1.parent = this, this.instance_1.setTransform(62, 33.5, 1, 1, 0, 0, 0, 47.5, 33.5), this.timeline.addTween(i.Tween.get(this.instance_1).to({
            x: 42
        }, 7, i.Ease.get(1)).to({
            x: 77
        }, 3, i.Ease.get(-1)).to({
            x: 50
        }, 3, i.Ease.get(-1)).to({
            x: 73
        }, 2, i.Ease.get(-1)).to({
            x: 50
        }, 2, i.Ease.get(-1)).to({
            x: 73
        }, 2, i.Ease.get(-1)).to({
            x: 50
        }, 2, i.Ease.get(-1)).to({
            x: 62
        }, 2, i.Ease.get(-1)).wait(1)), this.instance_2 = new t.img_jqr_3, this.instance_2.parent = this, this.instance_2.setTransform(62, 105, 1, 1, 0, 0, 0, 36, 80.7), this.timeline.addTween(i.Tween.get(this.instance_2).to({
            regX: 36.1,
            rotation: -15,
            x: 62.1
        }, 7, i.Ease.get(1)).to({
            rotation: 15,
            x: 62
        }, 3, i.Ease.get(-1)).to({
            rotation: -7.8,
            x: 62.1
        }, 3, i.Ease.get(-1)).to({
            regY: 80.8,
            rotation: 5.6,
            x: 62,
            y: 105.1
        }, 2, i.Ease.get(-1)).to({
            regY: 80.7,
            rotation: -7.8,
            x: 62.1,
            y: 105
        }, 2, i.Ease.get(-1)).to({
            regY: 80.8,
            rotation: 5.6,
            x: 62,
            y: 105.1
        }, 2, i.Ease.get(-1)).to({
            regY: 80.7,
            rotation: -7.8,
            x: 62.1,
            y: 105
        }, 2, i.Ease.get(-1)).to({
            regX: 36,
            rotation: 0,
            x: 62
        }, 2, i.Ease.get(-1)).wait(1)), this.instance_3 = new t.img_jqr_5, this.instance_3.parent = this, this.instance_3.setTransform(97.6, 61.6, 1, 1, 0, 0, 0, 4.8, 3.3), this.timeline.addTween(i.Tween.get(this.instance_3).to({
            rotation: -15,
            x: 88.6
        }, 7, i.Ease.get(1)).to({
            x: 108.6
        }, 3, i.Ease.get(-1)).to({
            x: 91.6
        }, 3, i.Ease.get(-1)).to({
            x: 101.6
        }, 2, i.Ease.get(-1)).to({
            x: 91.6
        }, 2, i.Ease.get(-1)).to({
            x: 101.6
        }, 2, i.Ease.get(-1)).to({
            x: 91.6
        }, 2, i.Ease.get(-1)).to({
            rotation: 0,
            x: 97.6
        }, 2, i.Ease.get(-1)).wait(1)), this.instance_4 = new t.img_jqr_4, this.instance_4.parent = this, this.instance_4.setTransform(26.7, 61.5, 1, 1, 0, 0, 0, 26.7, 3.3), this.timeline.addTween(i.Tween.get(this.instance_4).to({
            rotation: 15,
            x: 14.7,
            y: 64.5
        }, 7, i.Ease.get(1)).to({
            x: 37.7
        }, 3, i.Ease.get(-1)).to({
            x: 22.7
        }, 3, i.Ease.get(-1)).to({
            x: 31.7
        }, 2, i.Ease.get(-1)).to({
            x: 22.7
        }, 2, i.Ease.get(-1)).to({
            x: 31.7
        }, 2, i.Ease.get(-1)).to({
            x: 22.7
        }, 2, i.Ease.get(-1)).to({
            rotation: 0,
            x: 26.7,
            y: 61.5
        }, 2, i.Ease.get(-1)).wait(1)), this.instance_5 = new t.img_jqr_6, this.instance_5.parent = this, this.instance_5.setTransform(62, 104.9, 1, 1, 0, 0, 0, 32.5, 9.5), this.timeline.addTween(i.Tween.get(this.instance_5).to({
            regX: 32.6,
            scaleX: 1.45,
            x: 47.7
        }, 7, i.Ease.get(1)).to({
            x: 70.7
        }, 3, i.Ease.get(-1)).to({
            scaleX: 1.35,
            x: 50.7
        }, 3, i.Ease.get(-1)).to({
            scaleX: 1.45,
            x: 70.7
        }, 2, i.Ease.get(-1)).to({
            regX: 32.5,
            scaleX: 1,
            x: 62
        }, 2, i.Ease.get(-1)).to({
            scaleX: 1.17,
            x: 67.5
        }, 2).to({
            scaleX: 1.22,
            x: 55
        }, 2).to({
            scaleX: 1,
            x: 62
        }, 2).wait(1))
    }).prototype = h = new i.MovieClip, h.nominalBounds = new i.Rectangle(0, 0, 124.8, 114.4), (t.jqr2 = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.yan, this.instance.parent = this, this.instance.setTransform(62, 36, 1, 1, 0, 0, 0, 27.5, 4), this.timeline.addTween(i.Tween.get(this.instance).wait(65)), this.instance_1 = new t.img_jqr_1, this.instance_1.parent = this, this.instance_1.setTransform(62, 33.5, 1, 1, 0, 0, 0, 47.5, 33.5), this.timeline.addTween(i.Tween.get(this.instance_1).wait(65)), this.instance_2 = new t.img_jqr_3, this.instance_2.parent = this, this.instance_2.setTransform(62, 64.8, 1, 1, 0, 0, 0, 36, 40.5), this.timeline.addTween(i.Tween.get(this.instance_2).wait(65)), this.instance_3 = new t.img_jqr_5, this.instance_3.parent = this, this.instance_3.setTransform(97.6, 61.6, 1, 1, 0, 0, 0, 4.8, 3.3), this.timeline.addTween(i.Tween.get(this.instance_3).wait(48).to({
            rotation: 30,
            y: 61.7
        }, 3, i.Ease.get(1)).to({
            rotation: 0,
            y: 61.6
        }, 3, i.Ease.get(1)).to({
            rotation: 30,
            y: 61.7
        }, 3, i.Ease.get(1)).to({
            rotation: 0,
            y: 61.6
        }, 3, i.Ease.get(1)).wait(5)), this.instance_4 = new t.img_jqr_4, this.instance_4.parent = this, this.instance_4.setTransform(26.7, 61.5, 1, 1, 0, 0, 0, 26.7, 3.3), this.timeline.addTween(i.Tween.get(this.instance_4).wait(48).to({
            regX: 26.8,
            rotation: -30,
            x: 26.8
        }, 3, i.Ease.get(1)).to({
            regX: 26.7,
            rotation: 0,
            x: 26.7
        }, 3, i.Ease.get(1)).to({
            regX: 26.8,
            rotation: -30,
            x: 26.8
        }, 3, i.Ease.get(1)).to({
            regX: 26.7,
            rotation: 0,
            x: 26.7
        }, 3, i.Ease.get(1)).wait(5)), this.instance_5 = new t.img_jqr_6, this.instance_5.parent = this, this.instance_5.setTransform(62, 104.9, 1, 1, 0, 0, 0, 32.5, 9.5), this.timeline.addTween(i.Tween.get(this.instance_5).wait(65))
    }).prototype = h = new i.MovieClip, h.nominalBounds = new i.Rectangle(0, 0, 124.8, 114.4), (t.dddd复制9 = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.yan, this.instance.parent = this, this.instance.setTransform(62, 36, 1, 1, 0, 0, 0, 27.5, 4), this.timeline.addTween(i.Tween.get(this.instance).to({
            y: 42
        }, 8, i.Ease.get(1)).to({
            y: -25
        }, 4, i.Ease.get(1)).to({
            y: 310
        }, 4, i.Ease.get(-1)).to({
            y: 312
        }, 2).to({
            y: 310
        }, 2).to({
            y: 312
        }, 2).to({
            y: 310
        }, 2).wait(7)), this.instance_1 = new t.img_jqr_1, this.instance_1.parent = this, this.instance_1.setTransform(62, 33.5, 1, 1, 0, 0, 0, 47.5, 33.5), this.timeline.addTween(i.Tween.get(this.instance_1).to({
            y: 39.5
        }, 8, i.Ease.get(1)).to({
            y: -27.5
        }, 4, i.Ease.get(1)).to({
            y: 307.5
        }, 4, i.Ease.get(-1)).to({
            y: 309.5
        }, 2).to({
            y: 307.5
        }, 2).to({
            y: 309.5
        }, 2).to({
            y: 307.5
        }, 2).wait(7)), this.instance_2 = new t.img_jqr_3, this.instance_2.parent = this, this.instance_2.setTransform(62, 64.8, 1, 1, 0, 0, 0, 36, 40.5), this.timeline.addTween(i.Tween.get(this.instance_2).wait(8).to({
            y: 13.8
        }, 4, i.Ease.get(1)).to({
            y: 338.8
        }, 4, i.Ease.get(-1)).wait(15)), this.instance_3 = new t.img_jqr_5, this.instance_3.parent = this, this.instance_3.setTransform(97.6, 61.6, 1, 1, 0, 0, 0, 4.8, 3.3), this.timeline.addTween(i.Tween.get(this.instance_3).to({
            scaleX: 1,
            scaleY: 1,
            rotation: -39.4,
            x: 97.7,
            y: 61.5
        }, 6).to({
            scaleX: 1,
            scaleY: 1,
            rotation: 45,
            x: 97.6,
            y: 61.6
        }, 2).to({
            rotation: -45,
            x: 97.8,
            y: .5
        }, 4, i.Ease.get(1)).to({
            regX: 4.9,
            rotation: 0,
            y: 335.6
        }, 4, i.Ease.get(-1)).to({
            rotation: -30,
            y: 335.5
        }, 2).to({
            rotation: 0,
            y: 335.6
        }, 2).to({
            rotation: -30,
            y: 335.5
        }, 2).to({
            rotation: 0,
            y: 335.6
        }, 2).wait(7)), this.instance_4 = new t.img_jqr_4, this.instance_4.parent = this, this.instance_4.setTransform(26.7, 61.5, 1, 1, 0, 0, 0, 26.7, 3.3), this.timeline.addTween(i.Tween.get(this.instance_4).to({
            regY: 3.4,
            scaleX: 1,
            scaleY: 1,
            rotation: 39.4,
            x: 26.6,
            y: 61.7
        }, 6).to({
            regX: 26.8,
            regY: 3.3,
            scaleX: 1,
            scaleY: 1,
            rotation: -45,
            x: 26.8,
            y: 61.6
        }, 2).to({
            regX: 26.9,
            regY: 3.4,
            rotation: 45,
            y: .8
        }, 4, i.Ease.get(1)).to({
            regX: 26.8,
            rotation: 0,
            y: 335.7
        }, 4, i.Ease.get(-1)).to({
            regY: 3.3,
            rotation: 30,
            y: 335.6
        }, 2).to({
            regY: 3.4,
            rotation: 0,
            y: 335.7
        }, 2).to({
            regY: 3.3,
            rotation: 30,
            y: 335.6
        }, 2).to({
            regY: 3.4,
            rotation: 0,
            y: 335.7
        }, 2).wait(7)), this.instance_5 = new t.img_jqr_6, this.instance_5.parent = this, this.instance_5.setTransform(62, 104.9, 1, 1, 0, 0, 0, 32.5, 9.5), this.timeline.addTween(i.Tween.get(this.instance_5).wait(8).to({
            scaleX: .8,
            scaleY: .8
        }, 4, i.Ease.get(1)).to({
            scaleX: 1,
            scaleY: 1,
            y: 378.9
        }, 4, i.Ease.get(-1)).wait(15))
    }).prototype = h = new i.MovieClip, h.nominalBounds = new i.Rectangle(0, 0, 124.8, 114.4), (t.dddd复制8 = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.yan, this.instance.parent = this, this.instance.setTransform(62, 36, 1, 1, 0, 0, 0, 27.5, 4), this.timeline.addTween(i.Tween.get(this.instance).to({
            y: 42
        }, 8, i.Ease.get(1)).to({
            y: -25
        }, 4, i.Ease.get(1)).to({
            y: 173
        }, 4, i.Ease.get(-1)).to({
            y: 175
        }, 2).to({
            y: 173
        }, 2).to({
            y: 175
        }, 2).to({
            y: 173
        }, 2).wait(7)), this.instance_1 = new t.img_jqr_1, this.instance_1.parent = this, this.instance_1.setTransform(62, 33.5, 1, 1, 0, 0, 0, 47.5, 33.5), this.timeline.addTween(i.Tween.get(this.instance_1).to({
            y: 39.5
        }, 8, i.Ease.get(1)).to({
            y: -27.5
        }, 4, i.Ease.get(1)).to({
            y: 170.5
        }, 4, i.Ease.get(-1)).to({
            y: 172.5
        }, 2).to({
            y: 170.5
        }, 2).to({
            y: 172.5
        }, 2).to({
            y: 170.5
        }, 2).wait(7)), this.instance_2 = new t.img_jqr_3, this.instance_2.parent = this, this.instance_2.setTransform(62, 64.8, 1, 1, 0, 0, 0, 36, 40.5), this.timeline.addTween(i.Tween.get(this.instance_2).wait(8).to({
            y: 13.8
        }, 4, i.Ease.get(1)).to({
            y: 201.8
        }, 4, i.Ease.get(-1)).wait(15)), this.instance_3 = new t.img_jqr_5, this.instance_3.parent = this, this.instance_3.setTransform(97.6, 61.6, 1, 1, 0, 0, 0, 4.8, 3.3), this.timeline.addTween(i.Tween.get(this.instance_3).to({
            scaleX: 1,
            scaleY: 1,
            rotation: -39.4,
            x: 97.7,
            y: 61.5
        }, 6).to({
            scaleX: 1,
            scaleY: 1,
            rotation: 45,
            x: 97.6,
            y: 61.6
        }, 2).to({
            rotation: -45,
            x: 97.8,
            y: .5
        }, 4, i.Ease.get(1)).to({
            regX: 4.9,
            rotation: 0,
            y: 198.6
        }, 4, i.Ease.get(-1)).to({
            rotation: -30,
            y: 198.5
        }, 2).to({
            rotation: 0,
            y: 198.6
        }, 2).to({
            rotation: -30,
            y: 198.5
        }, 2).to({
            rotation: 0,
            y: 198.6
        }, 2).wait(7)), this.instance_4 = new t.img_jqr_4, this.instance_4.parent = this, this.instance_4.setTransform(26.7, 61.5, 1, 1, 0, 0, 0, 26.7, 3.3), this.timeline.addTween(i.Tween.get(this.instance_4).to({
            regY: 3.4,
            scaleX: 1,
            scaleY: 1,
            rotation: 39.4,
            x: 26.6,
            y: 61.7
        }, 6).to({
            regX: 26.8,
            regY: 3.3,
            scaleX: 1,
            scaleY: 1,
            rotation: -45,
            x: 26.8,
            y: 61.6
        }, 2).to({
            regX: 26.9,
            regY: 3.4,
            rotation: 45,
            y: .8
        }, 4, i.Ease.get(1)).to({
            regX: 26.8,
            rotation: 0,
            y: 198.7
        }, 4, i.Ease.get(-1)).to({
            regY: 3.3,
            rotation: 30,
            y: 198.6
        }, 2).to({
            regY: 3.4,
            rotation: 0,
            y: 198.7
        }, 2).to({
            regY: 3.3,
            rotation: 30,
            y: 198.6
        }, 2).to({
            regY: 3.4,
            rotation: 0,
            y: 198.7
        }, 2).wait(7)), this.instance_5 = new t.img_jqr_6, this.instance_5.parent = this, this.instance_5.setTransform(62, 104.9, 1, 1, 0, 0, 0, 32.5, 9.5), this.timeline.addTween(i.Tween.get(this.instance_5).wait(8).to({
            scaleX: .8,
            scaleY: .8
        }, 4, i.Ease.get(1)).to({
            scaleX: 1,
            scaleY: 1,
            y: 241.9
        }, 4, i.Ease.get(-1)).wait(15))
    }).prototype = h = new i.MovieClip, h.nominalBounds = new i.Rectangle(0, 0, 124.8, 114.4), (t.dddd复制6 = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.yan, this.instance.parent = this, this.instance.setTransform(62, 36, 1, 1, 0, 0, 0, 27.5, 4), this.timeline.addTween(i.Tween.get(this.instance).to({
            y: 42
        }, 8, i.Ease.get(1)).to({
            y: -289.8
        }, 4, i.Ease.get(1)).to({
            y: -238
        }, 4, i.Ease.get(-1)).to({
            y: -236
        }, 2).to({
            y: -238
        }, 2).to({
            y: -236
        }, 2).to({
            y: -238
        }, 2).wait(7)), this.instance_1 = new t.img_jqr_1, this.instance_1.parent = this, this.instance_1.setTransform(62, 33.5, 1, 1, 0, 0, 0, 47.5, 33.5), this.timeline.addTween(i.Tween.get(this.instance_1).to({
            y: 39.5
        }, 8, i.Ease.get(1)).to({
            y: -292.3
        }, 4, i.Ease.get(1)).to({
            y: -240.5
        }, 4, i.Ease.get(-1)).to({
            y: -238.5
        }, 2).to({
            y: -240.5
        }, 2).to({
            y: -238.5
        }, 2).to({
            y: -240.5
        }, 2).wait(7)), this.instance_2 = new t.img_jqr_3, this.instance_2.parent = this, this.instance_2.setTransform(62, 64.8, 1, 1, 0, 0, 0, 36, 40.5), this.timeline.addTween(i.Tween.get(this.instance_2).wait(8).to({
            y: -251
        }, 4, i.Ease.get(1)).to({
            y: -209.2
        }, 4, i.Ease.get(-1)).wait(15)), this.instance_3 = new t.img_jqr_5, this.instance_3.parent = this, this.instance_3.setTransform(97.6, 61.6, 1, 1, 0, 0, 0, 4.8, 3.3), this.timeline.addTween(i.Tween.get(this.instance_3).to({
            scaleX: 1,
            scaleY: 1,
            rotation: -39.4,
            x: 97.7,
            y: 61.5
        }, 6).to({
            scaleX: 1,
            scaleY: 1,
            rotation: 45,
            x: 97.6,
            y: 61.6
        }, 2).to({
            rotation: -45,
            x: 97.8,
            y: -264.3
        }, 4, i.Ease.get(1)).to({
            regX: 4.9,
            rotation: 0,
            y: -212.4
        }, 4, i.Ease.get(-1)).to({
            rotation: -30,
            y: -212.5
        }, 2).to({
            rotation: 0,
            y: -212.4
        }, 2).to({
            rotation: -30,
            y: -212.5
        }, 2).to({
            rotation: 0,
            y: -212.4
        }, 2).wait(7)), this.instance_4 = new t.img_jqr_4, this.instance_4.parent = this, this.instance_4.setTransform(26.7, 61.5, 1, 1, 0, 0, 0, 26.7, 3.3), this.timeline.addTween(i.Tween.get(this.instance_4).to({
            regY: 3.4,
            scaleX: 1,
            scaleY: 1,
            rotation: 39.4,
            x: 26.6,
            y: 61.7
        }, 6).to({
            regX: 26.8,
            regY: 3.3,
            scaleX: 1,
            scaleY: 1,
            rotation: -45,
            x: 26.8,
            y: 61.6
        }, 2).to({
            regX: 26.9,
            regY: 3.4,
            rotation: 45,
            y: -264
        }, 4, i.Ease.get(1)).to({
            regX: 26.8,
            rotation: 0,
            y: -212.3
        }, 4, i.Ease.get(-1)).to({
            regY: 3.3,
            rotation: 30,
            y: -212.4
        }, 2).to({
            regY: 3.4,
            rotation: 0,
            y: -212.3
        }, 2).to({
            regY: 3.3,
            rotation: 30,
            y: -212.4
        }, 2).to({
            regY: 3.4,
            rotation: 0,
            y: -212.3
        }, 2).wait(7)), this.instance_5 = new t.img_jqr_6, this.instance_5.parent = this, this.instance_5.setTransform(62, 104.9, 1, 1, 0, 0, 0, 32.5, 9.5), this.timeline.addTween(i.Tween.get(this.instance_5).wait(8).to({
            scaleX: .8,
            scaleY: .8,
            y: -159.9
        }, 4, i.Ease.get(1)).to({
            scaleX: 1,
            scaleY: 1,
            y: -169.1
        }, 4, i.Ease.get(-1)).wait(15))
    }).prototype = h = new i.MovieClip, h.nominalBounds = new i.Rectangle(0, 0, 124.8, 114.4), (t.dddd复制5 = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.yan, this.instance.parent = this, this.instance.setTransform(62, 36, 1, 1, 0, 0, 0, 27.5, 4), this.timeline.addTween(i.Tween.get(this.instance).to({
            y: 42
        }, 8, i.Ease.get(1)).to({
            y: -158.6
        }, 4, i.Ease.get(1)).to({
            y: -101
        }, 4, i.Ease.get(-1)).to({
            y: -99
        }, 2).to({
            y: -101
        }, 2).to({
            y: -99
        }, 2).to({
            y: -101
        }, 2).wait(7)), this.instance_1 = new t.img_jqr_1, this.instance_1.parent = this, this.instance_1.setTransform(62, 33.5, 1, 1, 0, 0, 0, 47.5, 33.5), this.timeline.addTween(i.Tween.get(this.instance_1).to({
            y: 39.5
        }, 8, i.Ease.get(1)).to({
            y: -161.1
        }, 4, i.Ease.get(1)).to({
            y: -103.5
        }, 4, i.Ease.get(-1)).to({
            y: -101.5
        }, 2).to({
            y: -103.5
        }, 2).to({
            y: -101.5
        }, 2).to({
            y: -103.5
        }, 2).wait(7)), this.instance_2 = new t.img_jqr_3, this.instance_2.parent = this, this.instance_2.setTransform(62, 64.8, 1, 1, 0, 0, 0, 36, 40.5), this.timeline.addTween(i.Tween.get(this.instance_2).wait(8).to({
            y: -119.8
        }, 4, i.Ease.get(1)).to({
            y: -72.2
        }, 4, i.Ease.get(-1)).wait(15)), this.instance_3 = new t.img_jqr_5, this.instance_3.parent = this, this.instance_3.setTransform(97.6, 61.6, 1, 1, 0, 0, 0, 4.8, 3.3), this.timeline.addTween(i.Tween.get(this.instance_3).to({
            scaleX: 1,
            scaleY: 1,
            rotation: -39.4,
            x: 97.7,
            y: 61.5
        }, 6).to({
            scaleX: 1,
            scaleY: 1,
            rotation: 45,
            x: 97.6,
            y: 61.6
        }, 2).to({
            rotation: -45,
            x: 97.8,
            y: -133.1
        }, 4, i.Ease.get(1)).to({
            regX: 4.9,
            rotation: 0,
            y: -75.4
        }, 4, i.Ease.get(-1)).to({
            rotation: -30,
            y: -75.5
        }, 2).to({
            rotation: 0,
            y: -75.4
        }, 2).to({
            rotation: -30,
            y: -75.5
        }, 2).to({
            rotation: 0,
            y: -75.4
        }, 2).wait(7)), this.instance_4 = new t.img_jqr_4, this.instance_4.parent = this, this.instance_4.setTransform(26.7, 61.5, 1, 1, 0, 0, 0, 26.7, 3.3), this.timeline.addTween(i.Tween.get(this.instance_4).to({
            regY: 3.4,
            scaleX: 1,
            scaleY: 1,
            rotation: 39.4,
            x: 26.6,
            y: 61.7
        }, 6).to({
            regX: 26.8,
            regY: 3.3,
            scaleX: 1,
            scaleY: 1,
            rotation: -45,
            x: 26.8,
            y: 61.6
        }, 2).to({
            regX: 26.9,
            regY: 3.4,
            rotation: 45,
            y: -132.8
        }, 4, i.Ease.get(1)).to({
            regX: 26.8,
            rotation: 0,
            y: -75.3
        }, 4, i.Ease.get(-1)).to({
            regY: 3.3,
            rotation: 30,
            y: -75.4
        }, 2).to({
            regY: 3.4,
            rotation: 0,
            y: -75.3
        }, 2).to({
            regY: 3.3,
            rotation: 30,
            y: -75.4
        }, 2).to({
            regY: 3.4,
            rotation: 0,
            y: -75.3
        }, 2).wait(7)), this.instance_5 = new t.img_jqr_6, this.instance_5.parent = this, this.instance_5.setTransform(62, 104.9, 1, 1, 0, 0, 0, 32.5, 9.5), this.timeline.addTween(i.Tween.get(this.instance_5).wait(8).to({
            scaleX: .8,
            scaleY: .8,
            y: -28.7
        }, 4, i.Ease.get(1)).to({
            scaleX: 1,
            scaleY: 1,
            y: -32.1
        }, 4, i.Ease.get(-1)).wait(15))
    }).prototype = h = new i.MovieClip, h.nominalBounds = new i.Rectangle(0, 0, 124.8, 114.4), (t.dddd复制4 = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.yan, this.instance.parent = this, this.instance.setTransform(62, 36, 1, 1, 0, 0, 0, 27.5, 4), this.timeline.addTween(i.Tween.get(this.instance).to({
            y: -95.6
        }, 8, i.Ease.get(1)).to({
            y: -162.6
        }, 4, i.Ease.get(1)).to({
            y: -101.6
        }, 4, i.Ease.get(-1)).to({
            y: -99.6
        }, 2).to({
            y: -101.6
        }, 2).to({
            y: -99.6
        }, 2).to({
            y: -101.6
        }, 2).wait(7)), this.instance_1 = new t.img_jqr_1, this.instance_1.parent = this, this.instance_1.setTransform(62, 33.5, 1, 1, 0, 0, 0, 47.5, 33.5), this.timeline.addTween(i.Tween.get(this.instance_1).to({
            y: -98.1
        }, 8, i.Ease.get(1)).to({
            y: -165.1
        }, 4, i.Ease.get(1)).to({
            y: -104.1
        }, 4, i.Ease.get(-1)).to({
            y: -102.1
        }, 2).to({
            y: -104.1
        }, 2).to({
            y: -102.1
        }, 2).to({
            y: -104.1
        }, 2).wait(7)), this.instance_2 = new t.img_jqr_3, this.instance_2.parent = this, this.instance_2.setTransform(62, 64.8, 1, 1, 0, 0, 0, 36, 40.5), this.timeline.addTween(i.Tween.get(this.instance_2).to({
            y: -72.8
        }, 8, i.Ease.get(1)).to({
            y: -123.8
        }, 4, i.Ease.get(1)).to({
            y: -72.8
        }, 4, i.Ease.get(-1)).wait(15)), this.instance_3 = new t.img_jqr_5, this.instance_3.parent = this, this.instance_3.setTransform(97.6, 61.6, 1, 1, 0, 0, 0, 4.8, 3.3), this.timeline.addTween(i.Tween.get(this.instance_3).to({
            scaleX: 1,
            scaleY: 1,
            rotation: -39.4,
            x: 97.7,
            y: 61.5
        }, 6).to({
            scaleX: 1,
            scaleY: 1,
            rotation: 45,
            x: 97.6,
            y: -76
        }, 2).to({
            rotation: -45,
            x: 97.8,
            y: -137.1
        }, 4, i.Ease.get(1)).to({
            regX: 4.9,
            rotation: 0,
            y: -76
        }, 4, i.Ease.get(-1)).to({
            rotation: -30,
            y: -76.1
        }, 2).to({
            rotation: 0,
            y: -76
        }, 2).to({
            rotation: -30,
            y: -76.1
        }, 2).to({
            rotation: 0,
            y: -76
        }, 2).wait(7)), this.instance_4 = new t.img_jqr_4, this.instance_4.parent = this, this.instance_4.setTransform(26.7, 61.5, 1, 1, 0, 0, 0, 26.7, 3.3), this.timeline.addTween(i.Tween.get(this.instance_4).to({
            regY: 3.4,
            scaleX: 1,
            scaleY: 1,
            rotation: 39.4,
            x: 26.6,
            y: 61.7
        }, 6).to({
            regX: 26.8,
            regY: 3.3,
            scaleX: 1,
            scaleY: 1,
            rotation: -45,
            x: 26.8,
            y: -76
        }, 2).to({
            regX: 26.9,
            regY: 3.4,
            rotation: 45,
            y: -136.8
        }, 4, i.Ease.get(1)).to({
            regX: 26.8,
            rotation: 0,
            y: -75.9
        }, 4, i.Ease.get(-1)).to({
            regY: 3.3,
            rotation: 30,
            y: -76
        }, 2).to({
            regY: 3.4,
            rotation: 0,
            y: -75.9
        }, 2).to({
            regY: 3.3,
            rotation: 30,
            y: -76
        }, 2).to({
            regY: 3.4,
            rotation: 0,
            y: -75.9
        }, 2).wait(7)), this.instance_5 = new t.img_jqr_6, this.instance_5.parent = this, this.instance_5.setTransform(62, 104.9, 1, 1, 0, 0, 0, 32.5, 9.5), this.timeline.addTween(i.Tween.get(this.instance_5).to({
            y: -32.7
        }, 8, i.Ease.get(1)).to({
            scaleX: .8,
            scaleY: .8
        }, 4, i.Ease.get(1)).to({
            scaleX: 1,
            scaleY: 1
        }, 4, i.Ease.get(-1)).wait(15))
    }).prototype = h = new i.MovieClip, h.nominalBounds = new i.Rectangle(0, 0, 124.8, 114.4), (t.dddd复制3 = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.yan, this.instance.parent = this, this.instance.setTransform(62, 36, 1, 1, 0, 0, 0, 27.5, 4), this.timeline.addTween(i.Tween.get(this.instance).to({
            y: 42
        }, 8, i.Ease.get(1)).to({
            y: -25
        }, 4, i.Ease.get(1)).to({
            y: 173.6
        }, 6, i.Ease.get(-1)).to({
            y: 175.6
        }, 2).to({
            y: 173.6
        }, 2).to({
            y: 175.6
        }, 2).to({
            y: 173.6
        }, 2).wait(7)), this.instance_1 = new t.img_jqr_1, this.instance_1.parent = this, this.instance_1.setTransform(62, 33.5, 1, 1, 0, 0, 0, 47.5, 33.5), this.timeline.addTween(i.Tween.get(this.instance_1).to({
            y: 39.5
        }, 8, i.Ease.get(1)).to({
            y: -27.5
        }, 4, i.Ease.get(1)).to({
            y: 171.1
        }, 6, i.Ease.get(-1)).to({
            y: 173.1
        }, 2).to({
            y: 171.1
        }, 2).to({
            y: 173.1
        }, 2).to({
            y: 171.1
        }, 2).wait(7)), this.instance_2 = new t.img_jqr_3, this.instance_2.parent = this, this.instance_2.setTransform(62, 64.8, 1, 1, 0, 0, 0, 36, 40.5), this.timeline.addTween(i.Tween.get(this.instance_2).wait(8).to({
            y: 13.8
        }, 4, i.Ease.get(1)).to({
            y: 202.4
        }, 6, i.Ease.get(-1)).wait(15)), this.instance_3 = new t.img_jqr_5, this.instance_3.parent = this, this.instance_3.setTransform(97.6, 61.6, 1, 1, 0, 0, 0, 4.8, 3.3), this.timeline.addTween(i.Tween.get(this.instance_3).to({
            scaleX: 1,
            scaleY: 1,
            rotation: -39.4,
            x: 97.7,
            y: 61.5
        }, 6).to({
            scaleX: 1,
            scaleY: 1,
            rotation: 45,
            x: 97.6,
            y: 61.6
        }, 2).to({
            rotation: -45,
            x: 97.8,
            y: .5
        }, 4, i.Ease.get(1)).to({
            regX: 4.9,
            rotation: 0,
            y: 199.2
        }, 6, i.Ease.get(-1)).to({
            rotation: -30,
            y: 199.1
        }, 2).to({
            rotation: 0,
            y: 199.2
        }, 2).to({
            rotation: -30,
            y: 199.1
        }, 2).to({
            rotation: 0,
            y: 199.2
        }, 2).wait(7)), this.instance_4 = new t.img_jqr_4, this.instance_4.parent = this, this.instance_4.setTransform(26.7, 61.5, 1, 1, 0, 0, 0, 26.7, 3.3), this.timeline.addTween(i.Tween.get(this.instance_4).to({
            regY: 3.4,
            scaleX: 1,
            scaleY: 1,
            rotation: 39.4,
            x: 26.6,
            y: 61.7
        }, 6).to({
            regX: 26.8,
            regY: 3.3,
            scaleX: 1,
            scaleY: 1,
            rotation: -45,
            x: 26.8,
            y: 61.6
        }, 2).to({
            regX: 26.9,
            regY: 3.4,
            rotation: 45,
            y: .8
        }, 4, i.Ease.get(1)).to({
            regX: 26.8,
            rotation: 0,
            y: 199.3
        }, 6, i.Ease.get(-1)).to({
            regY: 3.3,
            rotation: 30,
            y: 199.2
        }, 2).to({
            regY: 3.4,
            rotation: 0,
            y: 199.3
        }, 2).to({
            regY: 3.3,
            rotation: 30,
            y: 199.2
        }, 2).to({
            regY: 3.4,
            rotation: 0,
            y: 199.3
        }, 2).wait(7)), this.instance_5 = new t.img_jqr_6, this.instance_5.parent = this, this.instance_5.setTransform(62, 104.9, 1, 1, 0, 0, 0, 32.5, 9.5), this.timeline.addTween(i.Tween.get(this.instance_5).wait(8).to({
            scaleX: .8,
            scaleY: .8
        }, 4, i.Ease.get(1)).to({
            scaleX: 1,
            scaleY: 1,
            y: 242.5
        }, 6, i.Ease.get(-1)).wait(15))
    }).prototype = h = new i.MovieClip, h.nominalBounds = new i.Rectangle(0, 0, 124.8, 114.4), (t.dddd = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.yan, this.instance.parent = this, this.instance.setTransform(62, 36, 1, 1, 0, 0, 0, 27.5, 4), this.timeline.addTween(i.Tween.get(this.instance).to({
            y: 42
        }, 8, i.Ease.get(1)).to({
            y: -25
        }, 4, i.Ease.get(1)).to({
            y: 36
        }, 4, i.Ease.get(-1)).to({
            y: 38
        }, 2).to({
            y: 36
        }, 2).to({
            y: 38
        }, 2).to({
            y: 36
        }, 2).wait(7)), this.instance_1 = new t.img_jqr_1, this.instance_1.parent = this, this.instance_1.setTransform(62, 33.5, 1, 1, 0, 0, 0, 47.5, 33.5), this.timeline.addTween(i.Tween.get(this.instance_1).to({
            y: 39.5
        }, 8, i.Ease.get(1)).to({
            y: -27.5
        }, 4, i.Ease.get(1)).to({
            y: 33.5
        }, 4, i.Ease.get(-1)).to({
            y: 35.5
        }, 2).to({
            y: 33.5
        }, 2).to({
            y: 35.5
        }, 2).to({
            y: 33.5
        }, 2).wait(7)), this.instance_2 = new t.img_jqr_3, this.instance_2.parent = this, this.instance_2.setTransform(62, 64.8, 1, 1, 0, 0, 0, 36, 40.5), this.timeline.addTween(i.Tween.get(this.instance_2).wait(8).to({
            y: 13.8
        }, 4, i.Ease.get(1)).to({
            y: 64.8
        }, 4, i.Ease.get(-1)).wait(15)), this.instance_3 = new t.img_jqr_5, this.instance_3.parent = this, this.instance_3.setTransform(97.6, 61.6, 1, 1, 0, 0, 0, 4.8, 3.3), this.timeline.addTween(i.Tween.get(this.instance_3).to({
            scaleX: 1,
            scaleY: 1,
            rotation: -39.4,
            x: 97.7,
            y: 61.5
        }, 6).to({
            scaleX: 1,
            scaleY: 1,
            rotation: 45,
            x: 97.6,
            y: 61.6
        }, 2).to({
            rotation: -45,
            x: 97.8,
            y: .5
        }, 4, i.Ease.get(1)).to({
            regX: 4.9,
            rotation: 0,
            y: 61.6
        }, 4, i.Ease.get(-1)).to({
            rotation: -30,
            y: 61.5
        }, 2).to({
            rotation: 0,
            y: 61.6
        }, 2).to({
            rotation: -30,
            y: 61.5
        }, 2).to({
            rotation: 0,
            y: 61.6
        }, 2).wait(7)), this.instance_4 = new t.img_jqr_4, this.instance_4.parent = this, this.instance_4.setTransform(26.7, 61.5, 1, 1, 0, 0, 0, 26.7, 3.3), this.timeline.addTween(i.Tween.get(this.instance_4).to({
            regY: 3.4,
            scaleX: 1,
            scaleY: 1,
            rotation: 39.4,
            x: 26.6,
            y: 61.7
        }, 6).to({
            regX: 26.8,
            regY: 3.3,
            scaleX: 1,
            scaleY: 1,
            rotation: -45,
            x: 26.8,
            y: 61.6
        }, 2).to({
            regX: 26.9,
            regY: 3.4,
            rotation: 45,
            y: .8
        }, 4, i.Ease.get(1)).to({
            regX: 26.8,
            rotation: 0,
            y: 61.7
        }, 4, i.Ease.get(-1)).to({
            rotation: 30,
            x: 26.7
        }, 2).to({
            rotation: 0,
            x: 26.8
        }, 2).to({
            rotation: 30,
            x: 26.7
        }, 2).to({
            rotation: 0,
            x: 26.8
        }, 2).wait(7)), this.instance_5 = new t.img_jqr_6, this.instance_5.parent = this, this.instance_5.setTransform(62, 104.9, 1, 1, 0, 0, 0, 32.5, 9.5), this.timeline.addTween(i.Tween.get(this.instance_5).wait(8).to({
            scaleX: .8,
            scaleY: .8
        }, 4, i.Ease.get(1)).to({
            scaleX: 1,
            scaleY: 1
        }, 4, i.Ease.get(-1)).wait(15))
    }).prototype = h = new i.MovieClip, h.nominalBounds = new i.Rectangle(0, 0, 124.8, 114.4), (t._000 = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.xmg, this.instance.parent = this, this.instance.setTransform(361.3, 32.5, 1, 1, 0, 0, 0, 34.8, 32.5), this.instance_1 = new t.xmg, this.instance_1.parent = this, this.instance_1.setTransform(307.3, 32.5, 1, 1, 0, 0, 0, 34.8, 32.5), this.instance_2 = new t.xmg, this.instance_2.parent = this, this.instance_2.setTransform(253.8, 32.5, 1, 1, 0, 0, 0, 34.8, 32.5), this.instance_3 = new t.xmg, this.instance_3.parent = this, this.instance_3.setTransform(198.2, 32.5, 1, 1, 0, 0, 0, 34.8, 32.5), this.instance_4 = new t.xmg, this.instance_4.parent = this, this.instance_4.setTransform(144.2, 32.5, 1, 1, 0, 0, 0, 34.8, 32.5), this.instance_5 = new t.xmg, this.instance_5.parent = this, this.instance_5.setTransform(90.2, 32.5, 1, 1, 0, 0, 0, 34.8, 32.5), this.instance_6 = new t.xmg, this.instance_6.parent = this, this.instance_6.setTransform(34.8, 32.5, 1, 1, 0, 0, 0, 34.8, 32.5), this.timeline.addTween(i.Tween.get({}).to({
            state: [{
                t: this.instance_6
            }, {
                t: this.instance_5
            }, {
                t: this.instance_4
            }, {
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1))
    }).prototype = o(t._000, new i.Rectangle(0, 0, 378.5, 48), null), (t.ppp = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t._000, this.instance.parent = this, this.instance.setTransform(189.3, 368.1, 1, 1, 0, 0, 0, 189.3, 24), this.instance_1 = new t._000, this.instance_1.parent = this, this.instance_1.setTransform(189.3, 310.5, 1, 1, 0, 0, 0, 189.3, 24), this.instance_2 = new t._000, this.instance_2.parent = this, this.instance_2.setTransform(189.3, 253.3, 1, 1, 0, 0, 0, 189.3, 24), this.instance_3 = new t._000, this.instance_3.parent = this, this.instance_3.setTransform(189.3, 196, 1, 1, 0, 0, 0, 189.3, 24), this.instance_4 = new t._000, this.instance_4.parent = this, this.instance_4.setTransform(189.3, 138.5, 1, 1, 0, 0, 0, 189.3, 24), this.instance_5 = new t._000, this.instance_5.parent = this, this.instance_5.setTransform(189.3, 81.3, 1, 1, 0, 0, 0, 189.3, 24), this.instance_6 = new t._000, this.instance_6.parent = this, this.instance_6.setTransform(189.3, 24, 1, 1, 0, 0, 0, 189.3, 24), this.timeline.addTween(i.Tween.get({}).to({
            state: [{
                t: this.instance_6
            }, {
                t: this.instance_5
            }, {
                t: this.instance_4
            }, {
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1))
    }).prototype = o(t.ppp, new i.Rectangle(0, 0, 378.5, 392.1), null), (t.iiii = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.ppp, this.instance.parent = this, this.instance.setTransform(571.2, 196.1, 1, 1, 0, 0, 0, 189.3, 196.1), this.instance_1 = new t.ppp, this.instance_1.parent = this, this.instance_1.setTransform(953.3, 196.1, 1, 1, 0, 0, 0, 189.3, 196.1), this.instance_2 = new t.ppp, this.instance_2.parent = this, this.instance_2.setTransform(189.3, 196.1, 1, 1, 0, 0, 0, 189.3, 196.1), this.timeline.addTween(i.Tween.get({}).to({
            state: [{
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1))
    }).prototype = o(t.iiii, new i.Rectangle(0, 0, 1142.5, 392.1), null), (t.iii888 = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.iiii, this.instance.parent = this, this.instance.setTransform(65.8, 57.5, 1, 1, 0, 0, 0, 571.3, 196.1), this.timeline.addTween(i.Tween.get(this.instance).to({
            regY: 196,
            scaleY: .96
        }, 3).to({
            regY: 196.1,
            scaleY: 1.05
        }, 3).to({
            scaleY: .97
        }, 2).to({
            scaleY: 1.02
        }, 2).to({
            scaleY: .97,
            y: 57.6
        }, 1).wait(1).to({
            regY: 196,
            scaleY: 1.02,
            y: 57.5
        }, 0).wait(1).to({
            regY: 196.1,
            scaleY: 1
        }, 0).wait(4)), this.instance_1 = new t.iiii, this.instance_1.parent = this, this.instance_1.setTransform(65.8, 57.5, 1, 1, 0, 0, 0, 571.3, 196.1), this.instance_1._off = !0, this.timeline.addTween(i.Tween.get(this.instance_1).wait(4).to({
            _off: !1
        }, 0).to({
            y: -348.9
        }, 7).to({
            y: -337.7
        }, 2).wait(1).to({
            y: -347.3
        }, 0).wait(1).to({
            y: -339.3
        }, 0).wait(1).to({
            y: -342.5
        }, 0).wait(1)), this.instance_2 = new t.iiii, this.instance_2.parent = this, this.instance_2.setTransform(65.8, 57.5, 1, 1, 0, 0, 0, 571.3, 196.1), this.instance_2._off = !0, this.timeline.addTween(i.Tween.get(this.instance_2).wait(4).to({
            _off: !1
        }, 0).to({
            y: 465.5
        }, 7).to({
            y: 454.3
        }, 2).wait(1).to({
            y: 463.9
        }, 0).wait(1).to({
            y: 455.9
        }, 0).wait(1).to({
            y: 459.1
        }, 0).wait(1))
    }).prototype = h = new i.MovieClip, h.nominalBounds = new i.Rectangle((-505.5), (-138.6), 1142.5, 392.1), (t.mc_home_ani = function (e, s, n) {
        this.initialize(e, s, n, {
            sound_1: 0,
            sound_2: 93,
            sound_2_1: 114,
            sound_3: 136,
            sound_4: 167,
            sound_5: 197,
            sound_6: 250,
            sound_7: 290,
            "@s_1": 133,
            "@s_2": 162,
            "@s_3": 196,
            "@s_4": 249,
            "@s_5": 285,
            "@s_6": 299
        }), this.instance = new t.ys, this.instance.parent = this, this.instance.setTransform(64, 468.6, 1, 1, 0, 0, 0, 34, 9.5), this.instance.alpha = .391, this.instance._off = !0, this.instance_1 = new t.yss, this.instance_1.parent = this, this.instance_1.setTransform(64, 468.6, 1, 1, 0, 0, 0, 34, 9.5), this.instance_1._off = !0, this.timeline.addTween(i.Tween.get(this.instance).wait(126).to({
            _off: !1
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .391
        }, 0).wait(1).to({
            alpha: 1
        }, 0).to({
            _off: !0
        }, 7).wait(231)), this.timeline.addTween(i.Tween.get(this.instance_1).wait(136).to({
            _off: !1
        }, 0).wait(1).to({
            alpha: .129
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .129
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .129
        }, 0).wait(1).to({
            alpha: 1
        }, 0).to({
            alpha: 0
        }, 3).to({
            _off: !0
        }, 1).wait(221)), this.instance_2 = new t.kk, this.instance_2.parent = this, this.instance_2.setTransform(63.5, 469.5, 1, 1, 0, 0, 0, 63.5, 20.5), this.instance_2.alpha = 0, this.instance_2._off = !0, this.instance_3 = new t.kks, this.instance_3.parent = this, this.instance_3.setTransform(63.5, 469.5, 1, 1, 0, 0, 0, 63.5, 20.5), this.instance_3._off = !0, this.timeline.addTween(i.Tween.get(this.instance_2).wait(120).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 3).wait(1).to({
            alpha: .441
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .441
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .441
        }, 0).wait(1).to({
            alpha: 1
        }, 0).to({
            _off: !0
        }, 8).wait(230)), this.timeline.addTween(i.Tween.get(this.instance_3).wait(137).to({
            _off: !1
        }, 0).wait(1).to({
            alpha: .129
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .129
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .129
        }, 0).wait(1).to({
            alpha: 1
        }, 0).to({
            alpha: 0
        }, 4).to({
            _off: !0
        }, 1).wait(219)), this.instance_4 = new t.zi1, this.instance_4.parent = this, this.instance_4.setTransform(9, 507.5, 1, 1, 0, 0, 0, 125, 11.5), this.instance_4.alpha = 0, this.instance_4._off = !0, this.timeline.addTween(i.Tween.get(this.instance_4).wait(104).to({
            _off: !1
        }, 0).to({
            y: 367.5,
            alpha: 1
        }, 7, i.Ease.get(1)).to({
            y: 407.5
        }, 4, i.Ease.get(-1)).to({
            y: 401.5
        }, 2).wait(1).to({
            y: 407.5
        }, 0).wait(1).to({
            y: 404.5
        }, 0).wait(1).to({
            y: 407.5
        }, 0).wait(15).to({
            alpha: .129
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .129
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .129
        }, 0).wait(1).to({
            alpha: 1
        }, 0).to({
            alpha: 0
        }, 4).to({
            _off: !0
        }, 1).wait(222)), this.instance_5 = new t.iii888("synched", 0, (!1)), this.instance_5.parent = this, this.instance_5.setTransform(62.4, 56.1, 1, 1, 0, 0, 0, 62.4, 56), this.instance_5._off = !0, this.timeline.addTween(i.Tween.get(this.instance_5).wait(272).to({
            _off: !1
        }, 0).to({
            regX: 62.5,
            regY: 56.1,
            scaleX: .87,
            scaleY: .87,
            x: 62.5,
            y: 91.4,
            startPosition: 10
        }, 10, i.Ease.get(1)).wait(8).to({
            startPosition: 16
        }, 0).to({
            regY: 56.2,
            scaleX: .83,
            scaleY: .83,
            y: 91.5
        }, 2).to({
            regX: 62.6,
            scaleX: .92,
            scaleY: .92,
            x: 62.6
        }, 3).to({
            regY: 56.3,
            scaleX: .87,
            scaleY: .87,
            x: 62.5,
            y: 91.6,
            alpha: 0
        }, 3).to({
            _off: !0
        }, 2).wait(67)), this.instance_6 = new t.ppp, this.instance_6.parent = this, this.instance_6.setTransform(65.6, 57.5, 1, 1, 0, 0, 0, 189.3, 196.1), this.instance_6._off = !0, this.timeline.addTween(i.Tween.get(this.instance_6).wait(250).to({
            _off: !1
        }, 0).to({
            regY: 196,
            scaleX: .95,
            y: 57.4
        }, 3).to({
            regY: 196.1,
            scaleX: 1.05,
            y: 57.5
        }, 3).to({
            regX: 189.2,
            scaleX: 1.02
        }, 2).to({
            scaleX: 1.08,
            x: 65.5
        }, 2).wait(1).to({
            regY: 196,
            scaleX: 1.03,
            x: 65.6,
            y: 57.4
        }, 0).wait(1).to({
            regX: 189.3,
            regY: 196.1,
            scaleX: 1,
            y: 57.5
        }, 0).to({
            _off: !0
        }, 10).wait(95)), this.instance_7 = new t.ppp, this.instance_7.parent = this, this.instance_7.setTransform(65.6, 57.5, 1, 1, 0, 0, 0, 189.3, 196.1), this.instance_7._off = !0, this.timeline.addTween(i.Tween.get(this.instance_7).wait(258).to({
            _off: !1
        }, 0).to({
            x: 454.2
        }, 4, i.Ease.get(1)).to({
            x: 446.2
        }, 2).to({
            x: 451
        }, 2).wait(1).to({
            x: 448.6
        }, 0).wait(1).to({
            x: 447.8
        }, 0).to({
            _off: !0
        }, 4).wait(95)), this.instance_8 = new t.ppp, this.instance_8.parent = this, this.instance_8.setTransform(65.6, 57.5, 1, 1, 0, 0, 0, 189.3, 196.1), this.instance_8._off = !0, this.timeline.addTween(i.Tween.get(this.instance_8).wait(258).to({
            _off: !1
        }, 0).to({
            x: -312.2
        }, 4, i.Ease.get(1)).to({
            x: -317
        }, 2).to({
            x: -320.2
        }, 2).wait(1).to({
            x: -315.4
        }, 0).wait(1).to({
            x: -316.2
        }, 0).to({
            _off: !0
        }, 4).wait(95)), this.instance_9 = new t.dddd("synched", 0, (!1)), this.instance_9.parent = this, this.instance_9.setTransform(-124.6, 124.5, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_9._off = !0, this.timeline.addTween(i.Tween.get(this.instance_9).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regY: 57.4,
            scaleX: .42,
            scaleY: .42,
            x: -97.3,
            y: 115,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_10 = new t.dddd("synched", 0, (!1)), this.instance_10.parent = this, this.instance_10.setTransform(-124.6, 57.4, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_10._off = !0, this.timeline.addTween(i.Tween.get(this.instance_10).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regY: 57.4,
            scaleX: .42,
            scaleY: .42,
            x: -97.3,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_11 = new t.dddd("synched", 0, (!1)), this.instance_11.parent = this, this.instance_11.setTransform(-124.6, -9.7, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_11._off = !0, this.timeline.addTween(i.Tween.get(this.instance_11).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            scaleX: .42,
            scaleY: .42,
            x: -97.3,
            y: -.1,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_12 = new t.dddd复制5("synched", 0, (!1)), this.instance_12.parent = this, this.instance_12.setTransform(-124.6, -9.7, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_12._off = !0, this.timeline.addTween(i.Tween.get(this.instance_12).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            scaleX: .42,
            scaleY: .42,
            x: -97.3,
            y: -.1,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_13 = new t.dddd复制6("synched", 0, (!1)), this.instance_13.parent = this, this.instance_13.setTransform(-124.6, -9.7, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_13._off = !0, this.timeline.addTween(i.Tween.get(this.instance_13).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            scaleX: .42,
            scaleY: .42,
            x: -97.3,
            y: -.1,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_14 = new t.dddd复制8("synched", 0, (!1)), this.instance_14.parent = this, this.instance_14.setTransform(-124.6, 124.5, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_14._off = !0, this.timeline.addTween(i.Tween.get(this.instance_14).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regY: 57.4,
            scaleX: .42,
            scaleY: .42,
            x: -97.3,
            y: 115,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_15 = new t.dddd复制9("synched", 0, (!1)), this.instance_15.parent = this, this.instance_15.setTransform(-124.6, 124.5, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_15._off = !0, this.timeline.addTween(i.Tween.get(this.instance_15).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regY: 57.4,
            scaleX: .42,
            scaleY: .42,
            x: -97.3,
            y: 115,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_16 = new t.dddd("synched", 0, (!1)), this.instance_16.parent = this, this.instance_16.setTransform(-60.9, 124.5, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_16._off = !0, this.timeline.addTween(i.Tween.get(this.instance_16).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regX: 62.3,
            regY: 57.4,
            scaleX: .42,
            scaleY: .42,
            x: -42.7,
            y: 115,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_17 = new t.dddd("synched", 0, (!1)), this.instance_17.parent = this, this.instance_17.setTransform(-60.9, 57.4, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_17._off = !0, this.timeline.addTween(i.Tween.get(this.instance_17).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regX: 62.3,
            regY: 57.4,
            scaleX: .42,
            scaleY: .42,
            x: -42.7,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_18 = new t.dddd("synched", 0, (!1)), this.instance_18.parent = this, this.instance_18.setTransform(-60.9, -9.7, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_18._off = !0, this.timeline.addTween(i.Tween.get(this.instance_18).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regX: 62.3,
            scaleX: .42,
            scaleY: .42,
            x: -42.7,
            y: -.1,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_19 = new t.dddd复制5("synched", 0, (!1)), this.instance_19.parent = this, this.instance_19.setTransform(-60.9, -9.7, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_19._off = !0, this.timeline.addTween(i.Tween.get(this.instance_19).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regX: 62.3,
            scaleX: .42,
            scaleY: .42,
            x: -42.7,
            y: -.1,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_20 = new t.dddd复制6("synched", 0, (!1)), this.instance_20.parent = this, this.instance_20.setTransform(-60.9, -9.7, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_20._off = !0, this.timeline.addTween(i.Tween.get(this.instance_20).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regX: 62.3,
            scaleX: .42,
            scaleY: .42,
            x: -42.7,
            y: -.1,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_21 = new t.dddd复制8("synched", 0, (!1)), this.instance_21.parent = this, this.instance_21.setTransform(-60.9, 124.5, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_21._off = !0, this.timeline.addTween(i.Tween.get(this.instance_21).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regX: 62.3,
            regY: 57.4,
            scaleX: .42,
            scaleY: .42,
            x: -42.7,
            y: 115,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_22 = new t.dddd复制9("synched", 0, (!1)), this.instance_22.parent = this, this.instance_22.setTransform(-60.9, 124.5, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_22._off = !0, this.timeline.addTween(i.Tween.get(this.instance_22).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regX: 62.3,
            regY: 57.4,
            scaleX: .42,
            scaleY: .42,
            x: -42.7,
            y: 115,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_23 = new t.dddd("synched", 0, (!1)), this.instance_23.parent = this, this.instance_23.setTransform(2.7, 124.5, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_23._off = !0, this.timeline.addTween(i.Tween.get(this.instance_23).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regX: 62.3,
            regY: 57.4,
            scaleX: .42,
            scaleY: .42,
            x: 11.7,
            y: 115,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_24 = new t.dddd("synched", 0, (!1)), this.instance_24.parent = this, this.instance_24.setTransform(2.7, 57.4, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_24._off = !0, this.timeline.addTween(i.Tween.get(this.instance_24).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regX: 62.3,
            regY: 57.4,
            scaleX: .42,
            scaleY: .42,
            x: 11.7,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_25 = new t.dddd("synched", 0, (!1)), this.instance_25.parent = this, this.instance_25.setTransform(2.7, -9.7, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_25._off = !0, this.timeline.addTween(i.Tween.get(this.instance_25).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regX: 62.3,
            scaleX: .42,
            scaleY: .42,
            x: 11.7,
            y: -.1,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_26 = new t.dddd复制5("synched", 0, (!1)), this.instance_26.parent = this, this.instance_26.setTransform(2.7, -9.7, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_26._off = !0, this.timeline.addTween(i.Tween.get(this.instance_26).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regX: 62.3,
            scaleX: .42,
            scaleY: .42,
            x: 11.7,
            y: -.1,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_27 = new t.dddd复制6("synched", 0, (!1)), this.instance_27.parent = this, this.instance_27.setTransform(2.7, -9.7, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_27._off = !0, this.timeline.addTween(i.Tween.get(this.instance_27).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regX: 62.3,
            scaleX: .42,
            scaleY: .42,
            x: 11.7,
            y: -.1,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_28 = new t.dddd复制8("synched", 0, (!1)), this.instance_28.parent = this, this.instance_28.setTransform(2.7, 124.5, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_28._off = !0, this.timeline.addTween(i.Tween.get(this.instance_28).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regX: 62.3,
            regY: 57.4,
            scaleX: .42,
            scaleY: .42,
            x: 11.7,
            y: 115,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_29 = new t.dddd复制9("synched", 0, (!1)), this.instance_29.parent = this, this.instance_29.setTransform(2.7, 124.5, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_29._off = !0, this.timeline.addTween(i.Tween.get(this.instance_29).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regX: 62.3,
            regY: 57.4,
            scaleX: .42,
            scaleY: .42,
            x: 11.7,
            y: 115,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_30 = new t.dddd("synched", 0, (!1)), this.instance_30.parent = this, this.instance_30.setTransform(256.4, 124.5, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_30._off = !0, this.timeline.addTween(i.Tween.get(this.instance_30).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regY: 57.4,
            scaleX: .42,
            scaleY: .42,
            x: 229.2,
            y: 115,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_31 = new t.dddd("synched", 0, (!1)), this.instance_31.parent = this, this.instance_31.setTransform(256.4, 57.4, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_31._off = !0, this.timeline.addTween(i.Tween.get(this.instance_31).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regY: 57.4,
            scaleX: .42,
            scaleY: .42,
            x: 229.2,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_32 = new t.dddd("synched", 0, (!1)), this.instance_32.parent = this, this.instance_32.setTransform(256.4, -9.7, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_32._off = !0, this.timeline.addTween(i.Tween.get(this.instance_32).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            scaleX: .42,
            scaleY: .42,
            x: 229.2,
            y: -.1,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_33 = new t.dddd复制5("synched", 0, (!1)), this.instance_33.parent = this, this.instance_33.setTransform(256.4, -9.7, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_33._off = !0, this.timeline.addTween(i.Tween.get(this.instance_33).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            scaleX: .42,
            scaleY: .42,
            x: 229.2,
            y: -.1,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_34 = new t.dddd复制6("synched", 0, (!1)), this.instance_34.parent = this, this.instance_34.setTransform(256.4, -9.7, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_34._off = !0, this.timeline.addTween(i.Tween.get(this.instance_34).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            scaleX: .42,
            scaleY: .42,
            x: 229.2,
            y: -.1,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_35 = new t.dddd复制8("synched", 0, (!1)), this.instance_35.parent = this, this.instance_35.setTransform(256.4, 124.5, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_35._off = !0, this.timeline.addTween(i.Tween.get(this.instance_35).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regY: 57.4,
            scaleX: .42,
            scaleY: .42,
            x: 229.2,
            y: 115,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_36 = new t.dddd复制9("synched", 0, (!1)), this.instance_36.parent = this, this.instance_36.setTransform(256.4, 124.5, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_36._off = !0, this.timeline.addTween(i.Tween.get(this.instance_36).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regY: 57.4,
            scaleX: .42,
            scaleY: .42,
            x: 229.2,
            y: 115,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_37 = new t.dddd("synched", 0, (!1)), this.instance_37.parent = this, this.instance_37.setTransform(192.9, 124.5, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_37._off = !0, this.timeline.addTween(i.Tween.get(this.instance_37).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regY: 57.4,
            scaleX: .42,
            scaleY: .42,
            x: 174.8,
            y: 115,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_38 = new t.dddd("synched", 0, (!1)), this.instance_38.parent = this, this.instance_38.setTransform(192.9, 57.4, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_38._off = !0, this.timeline.addTween(i.Tween.get(this.instance_38).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regY: 57.4,
            scaleX: .42,
            scaleY: .42,
            x: 174.8,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_39 = new t.dddd("synched", 0, (!1));
        this.instance_39.parent = this;
        this.instance_39.setTransform(192.9, -9.7, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_39._off = !0, this.timeline.addTween(i.Tween.get(this.instance_39).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            scaleX: .42,
            scaleY: .42,
            x: 174.8,
            y: -.1,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_40 = new t.dddd复制5("synched", 0, (!1)), this.instance_40.parent = this, this.instance_40.setTransform(192.9, -9.7, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_40._off = !0, this.timeline.addTween(i.Tween.get(this.instance_40).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            scaleX: .42,
            scaleY: .42,
            x: 174.8,
            y: -.1,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_41 = new t.dddd复制6("synched", 0, (!1)), this.instance_41.parent = this, this.instance_41.setTransform(192.9, -9.7, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_41._off = !0, this.timeline.addTween(i.Tween.get(this.instance_41).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            scaleX: .42,
            scaleY: .42,
            x: 174.8,
            y: -.1,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_42 = new t.dddd复制8("synched", 0, (!1)), this.instance_42.parent = this, this.instance_42.setTransform(192.9, 124.5, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_42._off = !0, this.timeline.addTween(i.Tween.get(this.instance_42).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regY: 57.4,
            scaleX: .42,
            scaleY: .42,
            x: 174.8,
            y: 115,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_43 = new t.dddd复制9("synched", 0, (!1)), this.instance_43.parent = this, this.instance_43.setTransform(192.9, 124.5, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_43._off = !0, this.timeline.addTween(i.Tween.get(this.instance_43).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regY: 57.4,
            scaleX: .42,
            scaleY: .42,
            x: 174.8,
            y: 115,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_44 = new t.dddd("synched", 0, (!1)), this.instance_44.parent = this, this.instance_44.setTransform(129.5, 124.5, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_44._off = !0, this.timeline.addTween(i.Tween.get(this.instance_44).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regX: 62.6,
            regY: 57.4,
            scaleX: .42,
            scaleY: .42,
            x: 120.5,
            y: 115,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_45 = new t.dddd("synched", 0, (!1)), this.instance_45.parent = this, this.instance_45.setTransform(129.5, 57.4, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_45._off = !0, this.timeline.addTween(i.Tween.get(this.instance_45).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regX: 62.6,
            regY: 57.4,
            scaleX: .42,
            scaleY: .42,
            x: 120.5,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_46 = new t.dddd("synched", 0, (!1)), this.instance_46.parent = this, this.instance_46.setTransform(129.5, -9.7, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_46._off = !0, this.timeline.addTween(i.Tween.get(this.instance_46).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regX: 62.6,
            scaleX: .42,
            scaleY: .42,
            x: 120.5,
            y: -.1,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_47 = new t.dddd复制5("synched", 0, (!1)), this.instance_47.parent = this, this.instance_47.setTransform(129.5, -9.7, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_47._off = !0, this.timeline.addTween(i.Tween.get(this.instance_47).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regX: 62.6,
            scaleX: .42,
            scaleY: .42,
            x: 120.5,
            y: -.1,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_48 = new t.dddd复制6("synched", 0, (!1)), this.instance_48.parent = this, this.instance_48.setTransform(129.5, -9.7, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_48._off = !0, this.timeline.addTween(i.Tween.get(this.instance_48).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regX: 62.6,
            scaleX: .42,
            scaleY: .42,
            x: 120.5,
            y: -.1,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_49 = new t.dddd复制8("synched", 0, (!1)), this.instance_49.parent = this, this.instance_49.setTransform(129.5, 124.5, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_49._off = !0, this.timeline.addTween(i.Tween.get(this.instance_49).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regX: 62.6,
            regY: 57.4,
            scaleX: .42,
            scaleY: .42,
            x: 120.5,
            y: 115,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_50 = new t.dddd复制9("synched", 0, (!1)), this.instance_50.parent = this, this.instance_50.setTransform(129.5, 124.5, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_50._off = !0, this.timeline.addTween(i.Tween.get(this.instance_50).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regX: 62.6,
            regY: 57.4,
            scaleX: .42,
            scaleY: .42,
            x: 120.5,
            y: 115,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_51 = new t.dddd("synched", 0, (!1)), this.instance_51.parent = this, this.instance_51.setTransform(66.2, 124.5, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_51._off = !0, this.timeline.addTween(i.Tween.get(this.instance_51).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regX: 62.6,
            regY: 57.4,
            scaleX: .42,
            scaleY: .42,
            x: 66.3,
            y: 115,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_52 = new t.dddd("synched", 0, (!1)), this.instance_52.parent = this, this.instance_52.setTransform(66.2, 57.4, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_52._off = !0, this.timeline.addTween(i.Tween.get(this.instance_52).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regX: 62.6,
            regY: 57.4,
            scaleX: .42,
            scaleY: .42,
            x: 66.3,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_53 = new t.dddd("synched", 0, (!1)), this.instance_53.parent = this, this.instance_53.setTransform(66.2, -9.7, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_53._off = !0, this.timeline.addTween(i.Tween.get(this.instance_53).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regX: 62.6,
            scaleX: .42,
            scaleY: .42,
            x: 66.3,
            y: -.1,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_54 = new t.dddd复制5("synched", 0, (!1)), this.instance_54.parent = this, this.instance_54.setTransform(66.2, -9.7, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_54._off = !0, this.timeline.addTween(i.Tween.get(this.instance_54).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regX: 62.6,
            scaleX: .42,
            scaleY: .42,
            x: 66.3,
            y: -.1,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_55 = new t.dddd复制6("synched", 0, (!1)), this.instance_55.parent = this, this.instance_55.setTransform(66.2, -9.7, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_55._off = !0, this.timeline.addTween(i.Tween.get(this.instance_55).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regX: 62.6,
            scaleX: .42,
            scaleY: .42,
            x: 66.3,
            y: -.1,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_56 = new t.dddd复制8("synched", 0, (!1)), this.instance_56.parent = this, this.instance_56.setTransform(66.2, 124.5, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_56._off = !0, this.timeline.addTween(i.Tween.get(this.instance_56).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regX: 62.6,
            regY: 57.4,
            scaleX: .42,
            scaleY: .42,
            x: 66.3,
            y: 115,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_57 = new t.dddd复制9("synched", 0, (!1)), this.instance_57.parent = this, this.instance_57.setTransform(66.2, 124.5, .488, .488, 0, 0, 0, 62.4, 57.3), this.instance_57._off = !0, this.timeline.addTween(i.Tween.get(this.instance_57).wait(223).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regX: 62.6,
            regY: 57.4,
            scaleX: .42,
            scaleY: .42,
            x: 66.3,
            y: 115,
            startPosition: 19
        }, 8, i.Ease.get(1)).to({
            _off: !0
        }, 8).wait(117)), this.instance_58 = new t.jqrrr("synched", 0, (!1)), this.instance_58.parent = this, this.instance_58.setTransform(62.9, 130.6, .533, .533, 0, 0, 0, 62.5, 57.3), this.instance_58._off = !0, this.timeline.addTween(i.Tween.get(this.instance_58).wait(197).to({
            _off: !1
        }, 0).to({
            regX: 62.7,
            regY: 57.4,
            scaleX: .49,
            scaleY: .49,
            x: 66.4,
            y: 124.6,
            startPosition: 12
        }, 12, i.Ease.get(1)).to({
            _off: !0
        }, 14).wait(144)), this.instance_59 = new t.jqrrr("synched", 0, (!1)), this.instance_59.parent = this, this.instance_59.setTransform(62.9, -16.1, .533, .533, 0, 0, 0, 62.5, 57.3), this.instance_59._off = !0, this.timeline.addTween(i.Tween.get(this.instance_59).wait(197).to({
            _off: !1
        }, 0).to({
            regX: 62.7,
            regY: 57.1,
            scaleX: .49,
            scaleY: .49,
            x: 66.4,
            y: -9.7,
            startPosition: 12
        }, 12, i.Ease.get(1)).to({
            _off: !0
        }, 14).wait(144)), this.instance_60 = new t.jqrrr("synched", 0, (!1)), this.instance_60.parent = this, this.instance_60.setTransform(62.9, 57.3, .533, .533, 0, 0, 0, 62.5, 57.3), this.instance_60._off = !0, this.timeline.addTween(i.Tween.get(this.instance_60).wait(197).to({
            _off: !1
        }, 0).to({
            regX: 62.7,
            scaleX: .49,
            scaleY: .49,
            x: 66.4,
            y: 57.4,
            startPosition: 12
        }, 12, i.Ease.get(1)).to({
            _off: !0
        }, 14).wait(144)), this.instance_61 = new t.jqrrr("synched", 0, (!1)), this.instance_61.parent = this, this.instance_61.setTransform(131.9, 130.5, .533, .533, 0, 0, 0, 62.5, 57.1), this.instance_61._off = !0, this.timeline.addTween(i.Tween.get(this.instance_61).wait(197).to({
            _off: !1
        }, 0).to({
            regX: 62.7,
            regY: 57.3,
            scaleX: .49,
            scaleY: .49,
            x: 129.6,
            y: 124.5,
            startPosition: 12
        }, 12, i.Ease.get(1)).to({
            _off: !0
        }, 14).wait(144)), this.instance_62 = new t.jqrrr复制("synched", 0, (!1)), this.instance_62.parent = this, this.instance_62.setTransform(131.9, 130.5, .533, .533, 0, 0, 0, 62.5, 57.1), this.instance_62._off = !0, this.timeline.addTween(i.Tween.get(this.instance_62).wait(197).to({
            _off: !1
        }, 0).to({
            regX: 62.7,
            regY: 57.3,
            scaleX: .49,
            scaleY: .49,
            x: 129.6,
            y: 124.5,
            startPosition: 12
        }, 12, i.Ease.get(1)).to({
            _off: !0
        }, 14).wait(144)), this.instance_63 = new t.jqrrr复制5("synched", 0, (!1)), this.instance_63.parent = this, this.instance_63.setTransform(131.9, 130.5, .533, .533, 0, 0, 0, 62.5, 57.1), this.instance_63._off = !0, this.timeline.addTween(i.Tween.get(this.instance_63).wait(197).to({
            _off: !1
        }, 0).to({
            regX: 62.7,
            regY: 57.3,
            scaleX: .49,
            scaleY: .49,
            x: 129.6,
            y: 124.5,
            startPosition: 12
        }, 12, i.Ease.get(1)).to({
            _off: !0
        }, 14).wait(144)), this.instance_64 = new t.jqrrr("synched", 0, (!1)), this.instance_64.parent = this, this.instance_64.setTransform(131.9, 57.2, .533, .533, 0, 0, 0, 62.5, 57.1), this.instance_64._off = !0, this.timeline.addTween(i.Tween.get(this.instance_64).wait(197).to({
            _off: !1
        }, 0).to({
            regX: 62.7,
            scaleX: .49,
            scaleY: .49,
            x: 129.6,
            y: 57.3,
            startPosition: 12
        }, 12, i.Ease.get(1)).to({
            _off: !0
        }, 14).wait(144)), this.instance_65 = new t.jqrrr复制("synched", 0, (!1)), this.instance_65.parent = this, this.instance_65.setTransform(131.9, 57.2, .533, .533, 0, 0, 0, 62.5, 57.1), this.instance_65._off = !0, this.timeline.addTween(i.Tween.get(this.instance_65).wait(197).to({
            _off: !1
        }, 0).to({
            regX: 62.7,
            scaleX: .49,
            scaleY: .49,
            x: 129.6,
            y: 57.3,
            startPosition: 12
        }, 12, i.Ease.get(1)).to({
            _off: !0
        }, 14).wait(144)), this.instance_66 = new t.jqrrr复制5("synched", 0, (!1)), this.instance_66.parent = this, this.instance_66.setTransform(131.9, 57.2, .533, .533, 0, 0, 0, 62.5, 57.1), this.instance_66._off = !0, this.timeline.addTween(i.Tween.get(this.instance_66).wait(197).to({
            _off: !1
        }, 0).to({
            regX: 62.7,
            scaleX: .49,
            scaleY: .49,
            x: 129.6,
            y: 57.3,
            startPosition: 12
        }, 12, i.Ease.get(1)).to({
            _off: !0
        }, 14).wait(144)), this.instance_67 = new t.jqrrr("synched", 0, (!1)), this.instance_67.parent = this, this.instance_67.setTransform(131.9, -16.2, .533, .533, 0, 0, 0, 62.5, 57.1), this.instance_67._off = !0, this.timeline.addTween(i.Tween.get(this.instance_67).wait(197).to({
            _off: !1
        }, 0).to({
            regX: 62.7,
            regY: 57,
            scaleX: .49,
            scaleY: .49,
            x: 129.6,
            y: -9.8,
            startPosition: 12
        }, 12, i.Ease.get(1)).to({
            _off: !0
        }, 14).wait(144)), this.instance_68 = new t.jqrrr复制("synched", 0, (!1)), this.instance_68.parent = this, this.instance_68.setTransform(131.9, -16.2, .533, .533, 0, 0, 0, 62.5, 57.1), this.instance_68._off = !0, this.timeline.addTween(i.Tween.get(this.instance_68).wait(197).to({
            _off: !1
        }, 0).to({
            regX: 62.7,
            regY: 57,
            scaleX: .49,
            scaleY: .49,
            x: 129.6,
            y: -9.8,
            startPosition: 12
        }, 12, i.Ease.get(1)).to({
            _off: !0
        }, 14).wait(144)), this.instance_69 = new t.jqrrr复制5("synched", 0, (!1)), this.instance_69.parent = this, this.instance_69.setTransform(131.9, -16.2, .533, .533, 0, 0, 0, 62.5, 57.1), this.instance_69._off = !0, this.timeline.addTween(i.Tween.get(this.instance_69).wait(197).to({
            _off: !1
        }, 0).to({
            regX: 62.7,
            regY: 57,
            scaleX: .49,
            scaleY: .49,
            x: 129.6,
            y: -9.8,
            startPosition: 12
        }, 12, i.Ease.get(1)).to({
            _off: !0
        }, 14).wait(144)), this.instance_70 = new t.jqrrr("synched", 0, (!1)), this.instance_70.parent = this, this.instance_70.setTransform(-6.7, 130.5, .533, .533, 0, 0, 0, 62.4, 57.2), this.instance_70._off = !0, this.timeline.addTween(i.Tween.get(this.instance_70).wait(197).to({
            _off: !1
        }, 0).to({
            regX: 62.3,
            regY: 57.4,
            scaleX: .49,
            scaleY: .49,
            x: 2.6,
            y: 124.5,
            startPosition: 12
        }, 12, i.Ease.get(1)).to({
            _off: !0
        }, 14).wait(144)), this.instance_71 = new t.jqrrr复制3("synched", 0, (!1)), this.instance_71.parent = this, this.instance_71.setTransform(-6.7, 130.6, .533, .533, 0, 0, 0, 62.4, 57.2), this.instance_71._off = !0, this.timeline.addTween(i.Tween.get(this.instance_71).wait(197).to({
            _off: !1
        }, 0).to({
            regX: 62.3,
            regY: 57.4,
            scaleX: .49,
            scaleY: .49,
            x: 2.6,
            y: 124.6,
            startPosition: 12
        }, 12, i.Ease.get(1)).to({
            _off: !0
        }, 14).wait(144)), this.instance_72 = new t.jqrrr复制4("synched", 0, (!1)), this.instance_72.parent = this, this.instance_72.setTransform(-6.7, 130.6, .533, .533, 0, 0, 0, 62.4, 57.2), this.instance_72._off = !0, this.timeline.addTween(i.Tween.get(this.instance_72).wait(197).to({
            _off: !1
        }, 0).to({
            regX: 62.3,
            regY: 57.4,
            scaleX: .49,
            scaleY: .49,
            x: 2.6,
            y: 124.6,
            startPosition: 12
        }, 12, i.Ease.get(1)).to({
            _off: !0
        }, 14).wait(144)), this.instance_73 = new t.jqrrr("synched", 0, (!1)), this.instance_73.parent = this, this.instance_73.setTransform(-6.7, 57.2, .533, .533, 0, 0, 0, 62.4, 57.2), this.instance_73._off = !0, this.timeline.addTween(i.Tween.get(this.instance_73).wait(197).to({
            _off: !1
        }, 0).to({
            regX: 62.3,
            regY: 57.3,
            scaleX: .49,
            scaleY: .49,
            x: 2.6,
            y: 57.3,
            startPosition: 12
        }, 12, i.Ease.get(1)).to({
            _off: !0
        }, 14).wait(144)), this.instance_74 = new t.jqrrr复制3("synched", 0, (!1)), this.instance_74.parent = this, this.instance_74.setTransform(-6.7, 57.2, .533, .533, 0, 0, 0, 62.4, 57.2), this.instance_74._off = !0, this.timeline.addTween(i.Tween.get(this.instance_74).wait(197).to({
            _off: !1
        }, 0).to({
            regX: 62.3,
            regY: 57.3,
            scaleX: .49,
            scaleY: .49,
            x: 2.6,
            y: 57.4,
            startPosition: 12
        }, 12, i.Ease.get(1)).to({
            _off: !0
        }, 14).wait(144)), this.instance_75 = new t.jqrrr复制4("synched", 0, (!1)), this.instance_75.parent = this, this.instance_75.setTransform(-6.7, 57.2, .533, .533, 0, 0, 0, 62.4, 57.2), this.instance_75._off = !0, this.timeline.addTween(i.Tween.get(this.instance_75).wait(197).to({
            _off: !1
        }, 0).to({
            regX: 62.3,
            regY: 57.3,
            scaleX: .49,
            scaleY: .49,
            x: 2.6,
            y: 57.4,
            startPosition: 12
        }, 12, i.Ease.get(1)).to({
            _off: !0
        }, 14).wait(144)), this.instance_76 = new t.jqrrr("synched", 0, (!1)), this.instance_76.parent = this, this.instance_76.setTransform(-6.7, -16.1, .533, .533, 0, 0, 0, 62.4, 57.2), this.instance_76._off = !0, this.timeline.addTween(i.Tween.get(this.instance_76).wait(197).to({
            _off: !1
        }, 0).to({
            regX: 62.3,
            regY: 57.1,
            scaleX: .49,
            scaleY: .49,
            x: 2.6,
            y: -9.7,
            startPosition: 12
        }, 12, i.Ease.get(1)).to({
            _off: !0
        }, 14).wait(144)), this.instance_77 = new t.jqrrr复制3("synched", 0, (!1)), this.instance_77.parent = this, this.instance_77.setTransform(-6.7, -16.1, .533, .533, 0, 0, 0, 62.4, 57.2), this.instance_77._off = !0, this.timeline.addTween(i.Tween.get(this.instance_77).wait(197).to({
            _off: !1
        }, 0).to({
            regX: 62.3,
            regY: 57.1,
            scaleX: .49,
            scaleY: .49,
            x: 2.6,
            y: -9.7,
            startPosition: 12
        }, 12, i.Ease.get(1)).to({
            _off: !0
        }, 14).wait(144)), this.instance_78 = new t.jqrrr复制4("synched", 0, (!1)), this.instance_78.parent = this, this.instance_78.setTransform(-6.7, -16.1, .533, .533, 0, 0, 0, 62.4, 57.2), this.instance_78._off = !0, this.timeline.addTween(i.Tween.get(this.instance_78).wait(197).to({
            _off: !1
        }, 0).to({
            regX: 62.3,
            regY: 57.1,
            scaleX: .49,
            scaleY: .49,
            x: 2.6,
            y: -9.7,
            startPosition: 12
        }, 12, i.Ease.get(1)).to({
            _off: !0
        }, 14).wait(144)), this.instance_79 = new t.dddd("synched", 0, (!1)), this.instance_79.parent = this;
        this.instance_79.setTransform(160.7, 57.2, .755, .755, 0, 0, 0, 62.4, 57.2);
        this.instance_79._off = !0, this.timeline.addTween(i.Tween.get(this.instance_79).wait(168).to({
            _off: !1
        }, 0).wait(8).to({
            startPosition: 8
        }, 0).to({
            regY: 57.3,
            scaleX: .53,
            scaleY: .53,
            x: 132,
            y: 57.3,
            startPosition: 24
        }, 16, i.Ease.get(1)).to({
            _off: !0
        }, 5).wait(170)), this.instance_80 = new t.dddd复制4("synched", 0, (!1)), this.instance_80.parent = this, this.instance_80.setTransform(160.6, 57.2, .755, .755, 0, 0, 0, 62.4, 57.2), this.instance_80._off = !0, this.timeline.addTween(i.Tween.get(this.instance_80).wait(168).to({
            _off: !1
        }, 0).wait(8).to({
            startPosition: 8
        }, 0).to({
            regX: 62.5,
            regY: 57.3,
            scaleX: .53,
            scaleY: .53,
            x: 132,
            y: 57.3,
            startPosition: 24
        }, 16, i.Ease.get(1)).to({
            _off: !0
        }, 5).wait(170)), this.instance_81 = new t.dddd复制3("synched", 0, (!1)), this.instance_81.parent = this, this.instance_81.setTransform(160.6, 57.2, .755, .755, 0, 0, 0, 62.4, 57.2), this.instance_81._off = !0, this.timeline.addTween(i.Tween.get(this.instance_81).wait(168).to({
            _off: !1
        }, 0).wait(8).to({
            startPosition: 8
        }, 0).to({
            regX: 62.5,
            regY: 57.3,
            scaleX: .53,
            scaleY: .53,
            x: 132,
            y: 57.3,
            startPosition: 24
        }, 16, i.Ease.get(1)).to({
            _off: !0
        }, 5).wait(170)), this.instance_82 = new t.dddd("synched", 0, (!1)), this.instance_82.parent = this, this.instance_82.setTransform(-35.8, 57.2, .755, .755, 0, 0, 0, 62.4, 57.2), this.instance_82._off = !0, this.timeline.addTween(i.Tween.get(this.instance_82).wait(165).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regY: 57.3,
            scaleX: .53,
            scaleY: .53,
            x: -6.7,
            y: 57.3,
            startPosition: 27
        }, 16, i.Ease.get(1)).to({
            _off: !0
        }, 5).wait(170)), this.instance_83 = new t.dddd复制4("synched", 0, (!1)), this.instance_83.parent = this, this.instance_83.setTransform(-35.9, 57.2, .755, .755, 0, 0, 0, 62.4, 57.2), this.instance_83._off = !0, this.timeline.addTween(i.Tween.get(this.instance_83).wait(165).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regX: 62.3,
            regY: 57.3,
            scaleX: .53,
            scaleY: .53,
            x: -6.8,
            y: 57.3,
            startPosition: 27
        }, 16, i.Ease.get(1)).to({
            _off: !0
        }, 5).wait(170)), this.instance_84 = new t.dddd复制3("synched", 0, (!1)), this.instance_84.parent = this, this.instance_84.setTransform(-35.9, 57.2, .755, .755, 0, 0, 0, 62.4, 57.2), this.instance_84._off = !0, this.timeline.addTween(i.Tween.get(this.instance_84).wait(165).to({
            _off: !1
        }, 0).wait(11).to({
            startPosition: 11
        }, 0).to({
            regX: 62.3,
            regY: 57.3,
            scaleX: .53,
            scaleY: .53,
            x: -6.8,
            y: 57.3,
            startPosition: 27
        }, 16, i.Ease.get(1)).to({
            _off: !0
        }, 5).wait(170)), this.instance_85 = new t.dddd("synched", 0, (!1)), this.instance_85.parent = this, this.instance_85.setTransform(62.4, 57.2, .755, .755, 0, 0, 0, 62.4, 57.2), this.instance_85._off = !0, this.timeline.addTween(i.Tween.get(this.instance_85).wait(163).to({
            _off: !1
        }, 0).wait(13).to({
            startPosition: 13
        }, 0).to({
            regY: 57.3,
            scaleX: .53,
            scaleY: .53,
            x: 62.7,
            y: 57.3,
            startPosition: 29
        }, 16, i.Ease.get(1)).to({
            _off: !0
        }, 5).wait(170)), this.instance_86 = new t.dddd复制4("synched", 0, (!1)), this.instance_86.parent = this, this.instance_86.setTransform(62.4, 57.2, .755, .755, 0, 0, 0, 62.4, 57.2), this.instance_86._off = !0, this.timeline.addTween(i.Tween.get(this.instance_86).wait(163).to({
            _off: !1
        }, 0).wait(13).to({
            startPosition: 13
        }, 0).to({
            regY: 57.3,
            scaleX: .53,
            scaleY: .53,
            x: 62.7,
            y: 57.3,
            startPosition: 29
        }, 16, i.Ease.get(1)).to({
            _off: !0
        }, 5).wait(170)), this.instance_87 = new t.dddd复制3("synched", 0, (!1)), this.instance_87.parent = this, this.instance_87.setTransform(62.4, 57.2, .755, .755, 0, 0, 0, 62.4, 57.2), this.instance_87._off = !0, this.timeline.addTween(i.Tween.get(this.instance_87).wait(163).to({
            _off: !1
        }, 0).wait(13).to({
            startPosition: 13
        }, 0).to({
            regY: 57.3,
            scaleX: .53,
            scaleY: .53,
            x: 62.7,
            y: 57.3,
            startPosition: 29
        }, 16, i.Ease.get(1)).to({
            _off: !0
        }, 5).wait(170)), this.instance_88 = new t.jqrrr("synched", 0, (!1)), this.instance_88.parent = this, this.instance_88.setTransform(62.5, 57.2, 1, 1, 0, 0, 0, 62.4, 57.2), this.instance_88._off = !0, this.timeline.addTween(i.Tween.get(this.instance_88).wait(135).to({
            _off: !1
        }, 0).wait(8).to({
            startPosition: 8
        }, 0).to({
            regX: 62.5,
            scaleX: .76,
            scaleY: .76,
            startPosition: 23
        }, 16, i.Ease.get(1)).to({
            _off: !0
        }, 4).wait(204)), this.instance_89 = new t.jqrrr复制("synched", 0, (!1)), this.instance_89.parent = this, this.instance_89.setTransform(62.5, 57.2, 1, 1, 0, 0, 0, 62.4, 57.2), this.instance_89._off = !0, this.timeline.addTween(i.Tween.get(this.instance_89).wait(135).to({
            _off: !1
        }, 0).wait(8).to({
            startPosition: 8
        }, 0).to({
            regX: 62.5,
            scaleX: .76,
            scaleY: .76,
            startPosition: 23
        }, 16, i.Ease.get(1)).to({
            _off: !0
        }, 10).wait(198)), this.instance_90 = new t.jqrrr_2("synched", 0, (!1)), this.instance_90.parent = this, this.instance_90.setTransform(62.5, 57.2, 1, 1, 0, 0, 0, 62.4, 57.2), this.instance_90._off = !0, this.timeline.addTween(i.Tween.get(this.instance_90).wait(135).to({
            _off: !1
        }, 0).wait(8).to({
            startPosition: 8
        }, 0).to({
            regX: 62.5,
            scaleX: .76,
            scaleY: .76,
            startPosition: 23
        }, 16, i.Ease.get(1)).to({
            _off: !0
        }, 7).wait(201)), this.instance_91 = new t.mc_jqr_2, this.instance_91.parent = this, this.instance_91.setTransform(62.4, 669.2, 1, 1, 0, 0, 0, 62.4, 57.2), this.instance_92 = new t.mc_jqr_1("synched", 0), this.instance_92.parent = this, this.instance_92.setTransform(62.4, 57.2, 1, 1, 0, 0, 0, 62.4, 57.2), this.instance_93 = new t.jqr2, this.instance_93.parent = this, this.instance_93.setTransform(62.5, 57.2, 1, 1, 0, 0, 0, 62.4, 57.2), this.timeline.addTween(i.Tween.get({}).to({
            state: [{
                t: this.instance_91
            }]
        }).to({
            state: [{
                t: this.instance_91
            }]
        }, 89).to({
            state: [{
                t: this.instance_92
            }]
        }, 1).to({
            state: [{
                t: this.instance_93
            }]
        }, 21).to({
            state: []
        }, 24).wait(232)), this.timeline.addTween(i.Tween.get(this.instance_91).to({
            y: 57.2
        }, 89).to({
            _off: !0
        }, 1).wait(277))
    }).prototype = h = new i.MovieClip, h.nominalBounds = new i.Rectangle(0, 612, 124.8, 114.4), (t.home_ani = function (e, s, n) {
        this.initialize(e, s, n, {}), this.instance = new t.mc_btn_go, this.instance.parent = this, this.instance.setTransform(256.6, 908), this.timeline.addTween(i.Tween.get(this.instance).wait(1)), this.instance_1 = new t.mc_home_ani, this.instance_1.parent = this, this.instance_1.setTransform(320.1, 485.2, 1, 1, 0, 0, 0, 62.4, 57.2), this.timeline.addTween(i.Tween.get(this.instance_1).wait(1))
    }).prototype = h = new i.MovieClip, h.nominalBounds = new i.Rectangle(576.5, 1427.4, 127, 246.4), t.properties = {
        width: 640,
        height: 1039,
        fps: 30,
        color: "#1B1B1B",
        opacity: 1,
        manifest: [{
            src: "images/home_ani_atlas_.png?1489986684141",
            id: "home_ani_atlas_"
        }],
        preloads: []
    }
};
var loading_ani = function (t, i, e, n, s) {
    function a() {
        var t = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        return t.gotoAndStop(this.currentFrame), t.paused = this.paused, t.framerate = this.framerate, t
    }

    function o(t, i, n) {
        var s = e.extend(t, e.MovieClip);
        return s.clone = a, s.nominalBounds = i, s.frameBounds = n, s
    }
    var h;
    t.ssMetadata = [{
        name: "loading_ani_atlas_",
        frames: [
            [0, 0, 95, 67],
            [74, 86, 8, 8],
            [0, 69, 72, 81],
            [67, 152, 32, 15],
            [74, 69, 32, 15],
            [0, 152, 65, 19]
        ]
    }], (t.jqr_01 = function () {
        this.spriteSheet = n.loading_ani_atlas_, this.gotoAndStop(0)
    }).prototype = h = new e.Sprite, (t.jqr_02 = function () {
        this.spriteSheet = n.loading_ani_atlas_, this.gotoAndStop(1)
    }).prototype = h = new e.Sprite, (t.jqr_03 = function () {
        this.spriteSheet = n.loading_ani_atlas_, this.gotoAndStop(2)
    }).prototype = h = new e.Sprite, (t.jqr_04 = function () {
        this.spriteSheet = n.loading_ani_atlas_, this.gotoAndStop(3)
    }).prototype = h = new e.Sprite, (t.jqr_05 = function () {
        this.spriteSheet = n.loading_ani_atlas_, this.gotoAndStop(4)
    }).prototype = h = new e.Sprite, (t.jqr_06 = function () {
        this.spriteSheet = n.loading_ani_atlas_, this.gotoAndStop(5)
    }).prototype = h = new e.Sprite, (t.img_jqr_6 = function (i, n, s) {
        this.initialize(i, n, s, {}), this.instance = new t.jqr_06, this.instance.parent = this, this.timeline.addTween(e.Tween.get(this.instance).wait(1))
    }).prototype = o(t.img_jqr_6, new e.Rectangle(0, 0, 65, 19), null), (t.img_jqr_5 = function (i, n, s) {
        this.initialize(i, n, s, {}), this.instance = new t.jqr_05, this.instance.parent = this, this.timeline.addTween(e.Tween.get(this.instance).wait(1))
    }).prototype = o(t.img_jqr_5, new e.Rectangle(0, 0, 32, 15), null), (t.img_jqr_4 = function (i, n, s) {
        this.initialize(i, n, s, {}), this.instance = new t.jqr_04, this.instance.parent = this, this.timeline.addTween(e.Tween.get(this.instance).wait(1))
    }).prototype = o(t.img_jqr_4, new e.Rectangle(0, 0, 32, 15), null), (t.img_jqr_3 = function (i, n, s) {
        this.initialize(i, n, s, {}), this.instance = new t.jqr_03, this.instance.parent = this, this.timeline.addTween(e.Tween.get(this.instance).wait(1))
    }).prototype = o(t.img_jqr_3, new e.Rectangle(0, 0, 72, 81), null), (t.img_jqr_2 = function (i, n, s) {
        this.initialize(i, n, s, {}), this.instance = new t.jqr_02, this.instance.parent = this, this.timeline.addTween(e.Tween.get(this.instance).wait(1))
    }).prototype = o(t.img_jqr_2, new e.Rectangle(0, 0, 8, 8), null), (t.img_jqr_1 = function (i, n, s) {
        this.initialize(i, n, s, {}), this.instance = new t.jqr_01, this.instance.parent = this, this.timeline.addTween(e.Tween.get(this.instance).wait(1))
    }).prototype = o(t.img_jqr_1, new e.Rectangle(0, 0, 95, 67), null), (t.yan2 = function (i, n, s) {
        this.initialize(i, n, s, {}), this.instance = new t.img_jqr_2, this.instance.parent = this, this.instance.setTransform(51, 4, 1, 1, 0, 0, 0, 4, 4), this.instance_1 = new t.img_jqr_2, this.instance_1.parent = this, this.instance_1.setTransform(4, 4, 1, 1, 0, 0, 0, 4, 4), this.timeline.addTween(e.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1))
    }).prototype = o(t.yan2, new e.Rectangle(0, 0, 55, 8), null), (t.mc_jqr_1 = function (i, n, s) {
        this.initialize(i, n, s, {}), this.instance = new t.img_jqr_4, this.instance.parent = this, this.instance.setTransform(26.7, 61.5, 1, 1, -40, 0, 0, 26.7, 3.2), this.instance._off = !0, this.timeline.addTween(e.Tween.get(this.instance).wait(4).to({
            _off: !1
        }, 0).to({
            regY: 3.3,
            rotation: 108.7,
            x: 61.7,
            y: 41.6
        }, 4, e.Ease.get(1)).to({
            regX: 26.8,
            scaleX: 1,
            scaleY: 1,
            rotation: 189.5,
            x: 88.4,
            y: 59.1
        }, 3).to({
            _off: !0
        }, 1).wait(21).to({
            _off: !1,
            regX: 26.7,
            regY: 3.2,
            scaleX: 1,
            scaleY: 1,
            rotation: 320,
            x: 26.7,
            y: 61.5
        }, 0).to({
            regY: 3.3,
            rotation: 468.7,
            x: 61.7,
            y: 41.6
        }, 4, e.Ease.get(1)).to({
            regX: 26.8,
            scaleX: 1,
            scaleY: 1,
            rotation: 549.5,
            x: 88.4,
            y: 59.1
        }, 3).to({
            _off: !0
        }, 1).wait(17));
        var a = new e.Shape;
        a._off = !0;
        var o = (new e.Graphics).p("AmSDXQgBmpHchPQGfAgA7G9QkGCYj4AAQjgAAjXh9g"),
            h = (new e.Graphics).p("AmSC+QgBmpHchPQGfAgA7G9QkGCYj4AAQjgAAjXh9g"),
            r = (new e.Graphics).p("AmSC+QgBmpHchPQGfAgA7G9QkGCYj4AAQjgAAjXh9g"),
            c = (new e.Graphics).p("AmSC+QgBmpHchPQGfAgA7G9QkGCYj4AAQjgAAjXh9g"),
            g = (new e.Graphics).p("AmSC+QgBmpHchPQGfAgA7G9QkGCYj4AAQjgAAjXh9g"),
            _ = (new e.Graphics).p("AmSC+QgBmpHchPQGfAgA7G9QkGCYj4AAQjgAAjXh9g"),
            w = (new e.Graphics).p("AmSC+QgBmpHchPQGfAgA7G9QkGCYj4AAQjgAAjXh9g"),
            p = (new e.Graphics).p("AmSC+QgBmpHchPQGfAgA7G9QkGCYj4AAQjgAAjXh9g"),
            m = (new e.Graphics).p("AmSC+QgBmpHchPQGfAgA7G9QkGCYj4AAQjgAAjXh9g"),
            f = (new e.Graphics).p("AmSDXQgBmpHchPQGfAgA7G9QkGCYj4AAQjgAAjXh9g"),
            A = (new e.Graphics).p("AmSC+QgBmpHchPQGfAgA7G9QkGCYj4AAQjgAAjXh9g"),
            l = (new e.Graphics).p("AmSC+QgBmpHchPQGfAgA7G9QkGCYj4AAQjgAAjXh9g"),
            y = (new e.Graphics).p("AmSC+QgBmpHchPQGfAgA7G9QkGCYj4AAQjgAAjXh9g"),
            d = (new e.Graphics).p("AmSC+QgBmpHchPQGfAgA7G9QkGCYj4AAQjgAAjXh9g"),
            j = (new e.Graphics).p("AmSC+QgBmpHchPQGfAgA7G9QkGCYj4AAQjgAAjXh9g"),
            T = (new e.Graphics).p("AmSC+QgBmpHchPQGfAgA7G9QkGCYj4AAQjgAAjXh9g"),
            G = (new e.Graphics).p("AmSC+QgBmpHchPQGfAgA7G9QkGCYj4AAQjgAAjXh9g"),
            Q = (new e.Graphics).p("AmSC+QgBmpHchPQGfAgA7G9QkGCYj4AAQjgAAjXh9g");
        this.timeline.addTween(e.Tween.get(a).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(4).to({
            graphics: o,
            x: 54.7,
            y: 34
        }).wait(1).to({
            graphics: h,
            x: 54.7,
            y: 23.4
        }).wait(1).to({
            graphics: r,
            x: 54.7,
            y: 14
        }).wait(1).to({
            graphics: c,
            x: 54.7,
            y: 8.4
        }).wait(1).to({
            graphics: g,
            x: 54.7,
            y: 6.5
        }).wait(1).to({
            graphics: _,
            x: 54.7,
            y: 8
        }).wait(1).to({
            graphics: w,
            x: 54.7,
            y: 12.7
        }).wait(1).to({
            graphics: p,
            x: 54.7,
            y: 20.4
        }).wait(1).to({
            graphics: m,
            x: 54.7,
            y: 31.2
        }).wait(17).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(4).to({
            graphics: f,
            x: 54.7,
            y: 34
        }).wait(1).to({
            graphics: A,
            x: 54.7,
            y: 23.4
        }).wait(1).to({
            graphics: l,
            x: 54.7,
            y: 14
        }).wait(1).to({
            graphics: y,
            x: 54.7,
            y: 8.4
        }).wait(1).to({
            graphics: d,
            x: 54.7,
            y: 6.5
        }).wait(1).to({
            graphics: j,
            x: 54.7,
            y: 8
        }).wait(1).to({
            graphics: T,
            x: 54.7,
            y: 12.7
        }).wait(1).to({
            graphics: G,
            x: 54.7,
            y: 20.4
        }).wait(1).to({
            graphics: Q,
            x: 54.7,
            y: 31.2
        }).wait(17)), this.instance_1 = new t.yan2, this.instance_1.parent = this, this.instance_1.setTransform(-14, 42, 1, 1, 0, 0, 0, 27.5, 4), this.instance_1._off = !0;
        for (var x = [this.instance_1], u = 0; u < x.length; u++) x[u].mask = a;
        this.timeline.addTween(e.Tween.get(this.instance_1).wait(4).to({
            _off: !1
        }, 0).to({
            x: 17.8,
            y: 5.5
        }, 4, e.Ease.get(1)).to({
            x: 62,
            y: 36
        }, 4, e.Ease.get(-1)).to({
            y: 39
        }, 2).to({
            y: 36
        }, 2).to({
            y: 39
        }, 2).to({
            y: 36
        }, 2).to({
            _off: !0
        }, 9).wait(4).to({
            _off: !1
        }, 0).to({
            x: 109.8,
            y: 5.5
        }, 4, e.Ease.get(1)).to({
            x: 139,
            y: 36
        }, 4, e.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(16)), this.instance_2 = new t.img_jqr_1, this.instance_2.parent = this, this.instance_2.setTransform(62, 33.5, 1, 1, 0, 0, 0, 47.5, 33.5), this.timeline.addTween(e.Tween.get(this.instance_2).to({
            y: 38.5
        }, 4, e.Ease.get(1)).to({
            y: 8.5
        }, 4, e.Ease.get(1)).to({
            y: 33.5
        }, 4, e.Ease.get(-1)).to({
            y: 36.5
        }, 2).to({
            y: 33.5
        }, 2).to({
            y: 36.5
        }, 2).to({
            y: 33.5
        }, 2).wait(9).to({
            y: 38.5
        }, 4, e.Ease.get(1)).to({
            y: 8.5
        }, 4, e.Ease.get(1)).to({
            y: 33.5
        }, 4, e.Ease.get(-1)).to({
            y: 36.5
        }, 2).to({
            y: 33.5
        }, 2).to({
            y: 36.5
        }, 2).to({
            y: 33.5
        }, 2).wait(9)), this.instance_3 = new t.img_jqr_3, this.instance_3.parent = this, this.instance_3.setTransform(62, 64.8, 1, 1, 0, 0, 0, 36, 40.5), this.timeline.addTween(e.Tween.get(this.instance_3).wait(4).to({
            y: 39.8
        }, 4, e.Ease.get(1)).to({
            y: 64.8
        }, 4, e.Ease.get(-1)).wait(21).to({
            y: 39.8
        }, 4, e.Ease.get(1)).to({
            y: 64.8
        }, 4, e.Ease.get(-1)).wait(17)), this.instance_4 = new t.img_jqr_5, this.instance_4.parent = this, this.instance_4.setTransform(97.6, 61.6, 1, 1, 0, 0, 0, 4.8, 3.3), this.timeline.addTween(e.Tween.get(this.instance_4).to({
            rotation: 43.2,
            x: 97.5
        }, 4, e.Ease.get(1)).to({
            rotation: -96.7,
            x: 57.6,
            y: 41.5
        }, 4, e.Ease.get(1)).wait(4).to({
            rotation: 0,
            x: 97.6,
            y: 61.6
        }, 0).to({
            rotation: 15,
            y: 61.7
        }, 2).to({
            rotation: 0,
            y: 61.6
        }, 2).to({
            rotation: 8.7
        }, 2).to({
            rotation: 0
        }, 2).wait(9).to({
            rotation: 43.2,
            x: 97.5
        }, 4, e.Ease.get(1)).to({
            rotation: -96.7,
            x: 57.6,
            y: 41.5
        }, 4, e.Ease.get(1)).wait(4).to({
            rotation: 0,
            x: 97.6,
            y: 61.6
        }, 0).to({
            rotation: 15,
            y: 61.7
        }, 2).to({
            rotation: 0,
            y: 61.6
        }, 2).to({
            rotation: 8.7
        }, 2).to({
            rotation: 0
        }, 2).wait(9)), this.instance_5 = new t.img_jqr_4, this.instance_5.parent = this, this.instance_5.setTransform(26.8, 61.6, 1, 1, 0, 0, 0, 26.8, 3.3), this.timeline.addTween(e.Tween.get(this.instance_5).to({
            regX: 26.7,
            regY: 3.2,
            rotation: -40,
            x: 26.7,
            y: 61.5
        }, 4, e.Ease.get(1)).to({
            regY: 3.3,
            rotation: 96.2,
            x: 26.6,
            y: 36.6
        }, 4, e.Ease.get(1)).to({
            rotation: 0,
            x: 26.8,
            y: 61.5
        }, 4, e.Ease.get(-1)).to({
            regY: 3.4,
            rotation: -19.9,
            y: 61.6
        }, 2).to({
            regY: 3.3,
            rotation: 0,
            y: 61.5
        }, 2).to({
            rotation: -7.2
        }, 2).to({
            rotation: 0
        }, 2).wait(9).to({
            regX: 26.8,
            y: 61.6
        }, 0).to({
            regX: 26.7,
            regY: 3.2,
            rotation: -40,
            x: 26.7,
            y: 61.5
        }, 4, e.Ease.get(1)).to({
            regY: 3.3,
            rotation: 96.2,
            x: 26.6,
            y: 36.6
        }, 4, e.Ease.get(1)).to({
            rotation: 0,
            x: 26.8,
            y: 61.5
        }, 4, e.Ease.get(-1)).to({
            regY: 3.4,
            rotation: -19.9,
            y: 61.6
        }, 2).to({
            regY: 3.3,
            rotation: 0,
            y: 61.5
        }, 2).to({
            rotation: -7.2
        }, 2).to({
            rotation: 0
        }, 2).wait(9)), this.instance_6 = new t.img_jqr_6, this.instance_6.parent = this, this.instance_6.setTransform(62, 104.9, 1, 1, 0, 0, 0, 32.5, 9.5), this.timeline.addTween(e.Tween.get(this.instance_6).wait(4).to({
            scaleX: .83,
            scaleY: .83,
            x: 62.1,
            y: 105
        }, 4, e.Ease.get(1)).to({
            scaleX: 1,
            scaleY: 1,
            x: 62,
            y: 104.9
        }, 4, e.Ease.get(-1)).wait(21).to({
            scaleX: .83,
            scaleY: .83,
            x: 62.1,
            y: 105
        }, 4, e.Ease.get(1)).to({
            scaleX: 1,
            scaleY: 1,
            x: 62,
            y: 104.9
        }, 4, e.Ease.get(-1)).wait(17))
    }).prototype = h = new e.MovieClip, h.nominalBounds = new e.Rectangle(0, 0, 124.8, 114.4), (t.mc_loading = function (i, n, s) {
        this.initialize(i, n, s, {}), this.numLabel = new e.Text("Loading  100%", "22px 'PingFang SC Regular'", "#E40000"), this.numLabel.name = "numLabel", this.numLabel.textAlign = "center", this.numLabel.lineHeight = 33, this.numLabel.lineWidth = 181, this.numLabel.parent = this, this.numLabel.setTransform(0, 43.7), this.timeline.addTween(e.Tween.get(this.numLabel).wait(117)), this.instance = new t.mc_jqr_1("synched", 0), this.instance.parent = this, this.instance.setTransform(1.7, -71.9, .441, .441, 0, 0, 0, 62.5, 57.3), this.timeline.addTween(e.Tween.get(this.instance).wait(117)), this.instance_1 = new t.mc_jqr_1("synched", 4), this.instance_1.parent = this, this.instance_1.setTransform(1.7, -71.9, .441, .441, 0, 0, 0, 62.5, 57.3), this.instance_1._off = !0, this.timeline.addTween(e.Tween.get(this.instance_1).wait(4).to({
            _off: !1
        }, 0).to({
            x: -54.2,
            startPosition: 12
        }, 8).wait(50).to({
            startPosition: 4
        }, 0).to({
            x: 1.7,
            startPosition: 13
        }, 9).to({
            _off: !0
        }, 1).wait(45)), this.instance_2 = new t.mc_jqr_1("synched", 4), this.instance_2.parent = this, this.instance_2.setTransform(1.7, -71.9, .441, .441, 0, 0, 0, 62.5, 57.3), this.instance_2._off = !0, this.timeline.addTween(e.Tween.get(this.instance_2).wait(4).to({
            _off: !1
        }, 0).to({
            x: 57.6,
            startPosition: 12
        }, 8).wait(50).to({
            startPosition: 4
        }, 0).to({
            x: 1.7,
            startPosition: 13
        }, 9).to({
            _off: !0
        }, 1).wait(45)), this.instance_3 = new t.mc_jqr_1("synched", 33), this.instance_3.parent = this, this.instance_3.setTransform(1.7, -71.9, .441, .441, 0, 0, 0, 62.5, 57.3), this.instance_3._off = !0, this.timeline.addTween(e.Tween.get(this.instance_3).wait(33).to({
            _off: !1
        }, 0).to({
            regY: 57.4,
            y: -127.7,
            startPosition: 41
        }, 8).wait(50).to({
            startPosition: 33
        }, 0).to({
            regY: 57.3,
            y: -71.9,
            startPosition: 41
        }, 8).to({
            _off: !0
        }, 1).wait(17)), this.instance_4 = new t.mc_jqr_1("synched", 33), this.instance_4.parent = this, this.instance_4.setTransform(-54.2, -71.9, .441, .441, 0, 0, 0, 62.5, 57.3), this.instance_4._off = !0, this.timeline.addTween(e.Tween.get(this.instance_4).wait(33).to({
            _off: !1
        }, 0).to({
            regY: 57.4,
            y: -127.7,
            startPosition: 41
        }, 8).wait(21).to({
            startPosition: 4
        }, 0).to({
            x: 1.7,
            startPosition: 13
        }, 9).to({
            _off: !0
        }, 1).wait(45)), this.instance_5 = new t.mc_jqr_1("synched", 33), this.instance_5.parent = this, this.instance_5.setTransform(57.6, -71.9, .441, .441, 0, 0, 0, 62.5, 57.3), this.instance_5._off = !0, this.timeline.addTween(e.Tween.get(this.instance_5).wait(33).to({
            _off: !1
        }, 0).to({
            regY: 57.4,
            y: -127.7,
            startPosition: 41
        }, 8).wait(21).to({
            startPosition: 4
        }, 0).to({
            x: 1.7,
            startPosition: 13
        }, 9).to({
            _off: !0
        }, 1).wait(45)), this.instance_6 = new t.mc_jqr_1("synched", 33), this.instance_6.parent = this, this.instance_6.setTransform(1.7, -71.9, .441, .441, 0, 0, 0, 62.5, 57.3), this.instance_6._off = !0, this.timeline.addTween(e.Tween.get(this.instance_6).wait(33).to({
            _off: !1
        }, 0).to({
            regY: 57.4,
            y: -16,
            startPosition: 41
        }, 8).wait(50).to({
            startPosition: 33
        }, 0).to({
            regY: 57.3,
            y: -71.9,
            startPosition: 41
        }, 8).to({
            _off: !0
        }, 1).wait(17)), this.instance_7 = new t.mc_jqr_1("synched", 33), this.instance_7.parent = this, this.instance_7.setTransform(-54.2, -71.9, .441, .441, 0, 0, 0, 62.5, 57.3), this.instance_7._off = !0, this.timeline.addTween(e.Tween.get(this.instance_7).wait(33).to({
            _off: !1
        }, 0).to({
            regY: 57.4,
            y: -16,
            startPosition: 41
        }, 8).wait(21).to({
            startPosition: 4
        }, 0).to({
            x: 1.7,
            startPosition: 13
        }, 9).to({
            _off: !0
        }, 1).wait(45)), this.instance_8 = new t.mc_jqr_1("synched", 33), this.instance_8.parent = this, this.instance_8.setTransform(57.6, -71.9, .441, .441, 0, 0, 0, 62.5, 57.3), this.instance_8._off = !0, this.timeline.addTween(e.Tween.get(this.instance_8).wait(33).to({
            _off: !1
        }, 0).to({
            regY: 57.4,
            y: -16,
            startPosition: 41
        }, 8).wait(21).to({
            startPosition: 4
        }, 0).to({
            x: 1.7,
            startPosition: 13
        }, 9).to({
            _off: !0
        }, 1).wait(45))
    }).prototype = h = new e.MovieClip, h.nominalBounds = new e.Rectangle((-92.6), (-97.2), 185.3, 173.7), (t.loading_ani = function (i, n, s) {
        this.initialize(i, n, s, {}), this.instance = new t.mc_loading, this.instance.parent = this, this.instance.setTransform(318, 536.9), this.timeline.addTween(e.Tween.get(this.instance).wait(1))
    }).prototype = h = new e.MovieClip, h.nominalBounds = new e.Rectangle(545.4, 959.2, 185.2, 173.7), t.properties = {
        width: 640,
        height: 1039,
        fps: 24,
        color: "#000000",
        opacity: 1,
        manifest: [{
            src: "images/loading_ani_atlas_.png?1489904448726",
            id: "loading_ani_atlas_"
        }],
        preloads: []
    }
};
var trans_end = function (t, i, e, n, a) {
    function s() {
        var t = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        return t.gotoAndStop(this.currentFrame), t.paused = this.paused, t.framerate = this.framerate, t
    }

    function h(t, i, n) {
        var a = e.extend(t, e.MovieClip);
        return a.clone = s, a.nominalBounds = i, a.frameBounds = n, a
    }
    var o;
    t.ssMetadata = [{
        name: "trans_end_atlas_",
        frames: [
            [0, 0, 730, 355],
            [936, 108, 64, 44],
            [732, 0, 93, 107],
            [0, 357, 321, 128],
            [642, 357, 317, 51],
            [732, 109, 202, 28],
            [732, 139, 201, 28],
            [827, 0, 95, 67],
            [924, 0, 72, 81],
            [983, 175, 32, 15],
            [983, 192, 32, 15],
            [935, 154, 65, 19],
            [323, 357, 317, 51],
            [323, 410, 335, 37],
            [827, 83, 191, 23],
            [660, 410, 321, 25]
        ]
    }], (t.chedeng = function () {
        this.spriteSheet = n.trans_end_atlas_, this.gotoAndStop(0)
    }).prototype = o = new e.Sprite, (t.fenxg = function () {
        this.spriteSheet = n.trans_end_atlas_, this.gotoAndStop(1)
    }).prototype = o = new e.Sprite, (t.gai07 = function () {
        this.spriteSheet = n.trans_end_atlas_, this.gotoAndStop(2)
    }).prototype = o = new e.Sprite, (t.gai08 = function () {
        this.spriteSheet = n.trans_end_atlas_, this.gotoAndStop(3)
    }).prototype = o = new e.Sprite, (t.gai10 = function () {
        this.spriteSheet = n.trans_end_atlas_, this.gotoAndStop(4)
    }).prototype = o = new e.Sprite, (t.gai11 = function () {
        this.spriteSheet = n.trans_end_atlas_, this.gotoAndStop(5)
    }).prototype = o = new e.Sprite, (t.gai12 = function () {
        this.spriteSheet = n.trans_end_atlas_, this.gotoAndStop(6)
    }).prototype = o = new e.Sprite, (t.jqr_01 = function () {
        this.spriteSheet = n.trans_end_atlas_, this.gotoAndStop(7)
    }).prototype = o = new e.Sprite, (t.jqr_03 = function () {
        this.spriteSheet = n.trans_end_atlas_, this.gotoAndStop(8)
    }).prototype = o = new e.Sprite, (t.jqr_04 = function () {
        this.spriteSheet = n.trans_end_atlas_, this.gotoAndStop(9)
    }).prototype = o = new e.Sprite, (t.jqr_05 = function () {
        this.spriteSheet = n.trans_end_atlas_, this.gotoAndStop(10)
    }).prototype = o = new e.Sprite, (t.jqr_06 = function () {
        this.spriteSheet = n.trans_end_atlas_, this.gotoAndStop(11)
    }).prototype = o = new e.Sprite, (t.kuang2 = function () {
        this.spriteSheet = n.trans_end_atlas_, this.gotoAndStop(12)
    }).prototype = o = new e.Sprite, (t.txt_bg = function () {
        this.spriteSheet = n.trans_end_atlas_, this.gotoAndStop(13)
    }).prototype = o = new e.Sprite, (t.xiugai_06 = function () {
        this.spriteSheet = n.trans_end_atlas_, this.gotoAndStop(14)
    }).prototype = o = new e.Sprite, (t.xiugai_07 = function () {
        this.spriteSheet = n.trans_end_atlas_, this.gotoAndStop(15)
    }).prototype = o = new e.Sprite, (t.img_zi_b = function (i, n, a) {
        this.initialize(i, n, a, {}), this.instance = new t.xiugai_07, this.instance.parent = this, this.timeline.addTween(e.Tween.get(this.instance).wait(1))
    }).prototype = h(t.img_zi_b, new e.Rectangle(0, 0, 321, 25), null), (t.img_zi_a = function (i, n, a) {
        this.initialize(i, n, a, {}), this.instance = new t.gai08, this.instance.parent = this, this.timeline.addTween(e.Tween.get(this.instance).wait(1))
    }).prototype = h(t.img_zi_a, new e.Rectangle(0, 0, 321, 128), null), (t.img_logooo = function (i, n, a) {
        this.initialize(i, n, a, {}), this.instance = new t.gai07, this.instance.parent = this, this.timeline.addTween(e.Tween.get(this.instance).wait(1))
    }).prototype = h(t.img_logooo, new e.Rectangle(0, 0, 93, 107), null), (t.img_kuang_2copy = function (i, n, a) {
        this.initialize(i, n, a, {}), this.instance = new t.gai10, this.instance.parent = this, this.timeline.addTween(e.Tween.get(this.instance).wait(1))
    }).prototype = h(t.img_kuang_2copy, new e.Rectangle(0, 0, 317, 51), null), (t.img_kuang_2 = function (i, n, a) {
        this.initialize(i, n, a, {}), this.instance = new t.kuang2, this.instance.parent = this, this.timeline.addTween(e.Tween.get(this.instance).wait(1))
    }).prototype = h(t.img_kuang_2, new e.Rectangle(0, 0, 317, 51), null), (t.img_jqr_6 = function (i, n, a) {
        this.initialize(i, n, a, {}), this.instance = new t.jqr_06, this.instance.parent = this, this.timeline.addTween(e.Tween.get(this.instance).wait(1))
    }).prototype = h(t.img_jqr_6, new e.Rectangle(0, 0, 65, 19), null), (t.img_jqr_5 = function (i, n, a) {
        this.initialize(i, n, a, {}), this.instance = new t.jqr_05, this.instance.parent = this, this.timeline.addTween(e.Tween.get(this.instance).wait(1))
    }).prototype = h(t.img_jqr_5, new e.Rectangle(0, 0, 32, 15), null), (t.img_jqr_4 = function (i, n, a) {
        this.initialize(i, n, a, {}), this.instance = new t.jqr_04, this.instance.parent = this, this.timeline.addTween(e.Tween.get(this.instance).wait(1))
    }).prototype = h(t.img_jqr_4, new e.Rectangle(0, 0, 32, 15), null), (t.img_jqr_3 = function (i, n, a) {
        this.initialize(i, n, a, {}), this.instance = new t.jqr_03, this.instance.parent = this, this.timeline.addTween(e.Tween.get(this.instance).wait(1))
    }).prototype = h(t.img_jqr_3, new e.Rectangle(0, 0, 72, 81), null), (t.img_jqr_1 = function (i, n, a) {
        this.initialize(i, n, a, {}), this.instance = new t.jqr_01, this.instance.parent = this, this.timeline.addTween(e.Tween.get(this.instance).wait(1))
    }).prototype = h(t.img_jqr_1, new e.Rectangle(0, 0, 95, 67), null), (t.img_fxg = function (i, n, a) {
        this.initialize(i, n, a, {}), this.instance = new t.fenxg, this.instance.parent = this, this.timeline.addTween(e.Tween.get(this.instance).wait(1))
    }).prototype = h(t.img_fxg, new e.Rectangle(0, 0, 64, 44), null), (t.img_chedeng = function (i, n, a) {
        this.initialize(i, n, a, {}), this.instance = new t.chedeng, this.instance.parent = this, this.timeline.addTween(e.Tween.get(this.instance).wait(1))
    }).prototype = h(t.img_chedeng, new e.Rectangle(0, 0, 730, 355), null), (t.img_btzi_2 = function (i, n, a) {
        this.initialize(i, n, a, {}), this.instance = new t.gai12, this.instance.parent = this, this.timeline.addTween(e.Tween.get(this.instance).wait(1))
    }).prototype = h(t.img_btzi_2, new e.Rectangle(0, 0, 201, 28), null), (t.img_btzi_1 = function (i, n, a) {
        this.initialize(i, n, a, {}), this.instance = new t.gai11, this.instance.parent = this, this.timeline.addTween(e.Tween.get(this.instance).wait(1))
    }).prototype = h(t.img_btzi_1, new e.Rectangle(0, 0, 202, 28), null), (t.img_black = function (t, i, n) {
        this.initialize(t, i, n, {}), this.shape = new e.Shape, this.shape.graphics.f("#000000").s().p("AtHNIIAA6PIaPAAIAAaPg"), this.shape.setTransform(84, 84), this.timeline.addTween(e.Tween.get(this.shape).wait(1))
    }).prototype = h(t.img_black, new e.Rectangle(0, 0, 168, 168), null), (t.fxtsy = function (i, n, a) {
        this.initialize(i, n, a, {}), this.instance = new t.xiugai_06, this.instance.parent = this, this.timeline.addTween(e.Tween.get(this.instance).wait(1))
    }).prototype = h(t.fxtsy, new e.Rectangle(0, 0, 191, 23), null), (t.btn_hitarea_sym = function (i, n, a) {
        this.initialize(i, n, a, {}), this.instance = new t.txt_bg, this.instance.parent = this, this.instance.setTransform(0, 0, 1, 3.486), this.timeline.addTween(e.Tween.get(this.instance).wait(1))
    }).prototype = h(t.btn_hitarea_sym, new e.Rectangle(0, 0, 335, 129), null), (t.mc_kuang2shancopy = function (i, n, a) {
        this.initialize(i, n, a, {}), this.instance = new t.img_kuang_2copy, this.instance.parent = this, this.instance.setTransform(158.5, 25.5, 1, 1, 0, 0, 0, 158.5, 25.5), this.instance_1 = new t.img_kuang_2, this.instance_1.parent = this, this.instance_1.setTransform(158.5, 25.5, 1, 1, 0, 0, 0, 158.5, 25.5), this.timeline.addTween(e.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance
            }]
        }, 36).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).wait(11)), this.timeline.addTween(e.Tween.get(this.instance).wait(37).to({
            alpha: .379
        }, 0).to({
            _off: !0
        }, 1).wait(1).to({
            _off: !1
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .379
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .379
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(11))
    }).prototype = o = new e.MovieClip, o.nominalBounds = new e.Rectangle(0, 0, 317, 51), (t.mc_kuang2shan = function (i, n, a) {
        this.initialize(i, n, a, {}), this.instance = new t.img_kuang_2, this.instance.parent = this, this.instance.setTransform(158.5, 25.5, 1, 1, 0, 0, 0, 158.5, 25.5), this.timeline.addTween(e.Tween.get(this.instance).wait(37).to({
            alpha: .379
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .379
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .379
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .379
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(11))
    }).prototype = o = new e.MovieClip, o.nominalBounds = new e.Rectangle(0, 0, 317, 51), (t.mc_jqr_2 = function (i, n, a) {
        this.initialize(i, n, a, {}), this.instance = new t.img_jqr_1, this.instance.parent = this, this.instance.setTransform(62.5, 60.8, 1, 1, 0, 0, 0, 48, 60.8), this.timeline.addTween(e.Tween.get(this.instance).to({
            rotation: -5
        }, 4).to({
            rotation: 0
        }, 4).to({
            regY: 60.7,
            rotation: 7.7
        }, 4).to({
            regY: 60.8,
            rotation: 0
        }, 4).wait(1)), this.instance_1 = new t.img_jqr_3, this.instance_1.parent = this, this.instance_1.setTransform(62, 64.8, 1, 1, 0, 0, 0, 36, 40.5), this.timeline.addTween(e.Tween.get(this.instance_1).to({
            regX: 36.1,
            rotation: 4.5,
            x: 62.1
        }, 4).to({
            regX: 36,
            rotation: 0,
            x: 62
        }, 4).to({
            rotation: -3.5
        }, 4).to({
            rotation: 0
        }, 4).wait(1)), this.instance_2 = new t.img_jqr_5, this.instance_2.parent = this, this.instance_2.setTransform(97.6, 61.6, 1, 1, 0, 0, 0, 4.8, 3.3), this.timeline.addTween(e.Tween.get(this.instance_2).to({
            regX: 4.7,
            rotation: 35.8,
            x: 97.4
        }, 4).to({
            regX: 4.8,
            rotation: 0,
            x: 97.6
        }, 4).to({
            rotation: 18,
            x: 97.5
        }, 4).to({
            rotation: 0,
            x: 97.6
        }, 4).wait(1)), this.instance_3 = new t.img_jqr_4, this.instance_3.parent = this, this.instance_3.setTransform(26.8, 61.6, 1, 1, 0, 0, 0, 26.8, 3.3), this.timeline.addTween(e.Tween.get(this.instance_3).to({
            rotation: -27,
            x: 26.9
        }, 4).to({
            rotation: 0,
            x: 26.8
        }, 4).to({
            regY: 3.2,
            rotation: -28.3,
            y: 61.5
        }, 4).to({
            regY: 3.3,
            rotation: 0,
            y: 61.6
        }, 4).wait(1)), this.instance_4 = new t.img_jqr_6, this.instance_4.parent = this, this.instance_4.setTransform(62, 104.9, 1, 1, 0, 0, 0, 32.5, 9.5), this.timeline.addTween(e.Tween.get(this.instance_4).to({
            x: 57.5
        }, 4).to({
            x: 62
        }, 4).to({
            x: 66
        }, 4).to({
            x: 62
        }, 4).wait(1))
    }).prototype = o = new e.MovieClip, o.nominalBounds = new e.Rectangle(0, 0, 124.8, 114.4), (t.mc_gebod = function (i, n, a) {
        this.initialize(i, n, a, {}), this.instance = new t.img_jqr_5, this.instance.parent = this, this.instance.setTransform(5.6, 22.8, 1, 1, -49.4, 0, 0, 4.8, 3.3), this.timeline.addTween(e.Tween.get(this.instance).to({
            regX: 4.6,
            regY: 3.4,
            rotation: -44.7,
            y: 23
        }, 2, e.Ease.get(1)).to({
            regX: 4.8,
            regY: 3.3,
            rotation: -49.4,
            y: 22.8
        }, 2, e.Ease.get(-1)).to({
            regX: 4.7,
            regY: 3.4,
            rotation: -64.7,
            y: 22.9
        }, 2, e.Ease.get(1)).to({
            scaleX: 1,
            scaleY: 1,
            rotation: -60.9,
            x: 5.7
        }, 1, e.Ease.get(-1)).wait(1))
    }).prototype = o = new e.MovieClip, o.nominalBounds = new e.Rectangle(0, 0, 32.2, 34.1), (t.mc_fxgs = function (i, n, a) {
        this.initialize(i, n, a, {}), this.instance = new t.img_fxg, this.instance.parent = this, this.instance.setTransform(32, 22, 1, 1, 0, 0, 0, 32, 22), this.instance.alpha = 0, this.timeline.addTween(e.Tween.get(this.instance).to({
            alpha: .699
        }, 5, e.Ease.get(1)).to({
            alpha: 0
        }, 5, e.Ease.get(1)).wait(1))
    }).prototype = o = new e.MovieClip, o.nominalBounds = new e.Rectangle(0, 0, 64, 44), (t.fxtsys = function (i, n, a) {
        this.initialize(i, n, a, {}), this.instance = new t.fxtsy, this.instance.parent = this, this.instance.setTransform(95.5, 11.5, 1, 1, 0, 0, 0, 95.5, 11.5), this.instance.alpha = .801, this.timeline.addTween(e.Tween.get(this.instance).to({
            alpha: 1
        }, 2).to({
            alpha: .801
        }, 2).wait(1))
    }).prototype = o = new e.MovieClip, o.nominalBounds = new e.Rectangle(0, 0, 191, 23), (t.btn_hitarea = function (i, n, a) {
        this.initialize(i, n, a, {}), this.frame_0 = function () {
            this.hitArea = this.hit_area, this.hit_area.visible = !1
        }, this.timeline.addTween(e.Tween.get(this).call(this.frame_0).wait(1)), this.hit_area = new t.btn_hitarea_sym, this.hit_area.parent = this, this.hit_area.setTransform(167.5, 64.5, 1, 1, 0, 0, 0, 167.5, 64.5), this.timeline.addTween(e.Tween.get(this.hit_area).wait(1))
    }).prototype = h(t.btn_hitarea, new e.Rectangle(0, 0, 335, 129), null), (t.mc_share = function (i, n, a) {
        this.initialize(i, n, a, {}), this.instance = new t.mc_fxgs, this.instance.parent = this, this.instance.setTransform(169, -53, 1, 1, 0, 0, 0, 32, 22), this.instance._off = !0, this.timeline.addTween(e.Tween.get(this.instance).wait(7).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 67).wait(46)), this.instance_1 = new t.img_jqr_1, this.instance_1.parent = this, this.instance_1.setTransform(62.5, 60.8, 1, 1, 0, 0, 0, 48, 60.8), this.timeline.addTween(e.Tween.get(this.instance_1).to({
            regX: 48.1,
            rotation: -2.8,
            x: 75.6,
            y: 43.1
        }, 6, e.Ease.get(1)).wait(68).to({
            regX: 48,
            rotation: 0,
            x: 62.5,
            y: 60.8
        }, 11).wait(35)), this.instance_2 = new t.img_jqr_3, this.instance_2.parent = this, this.instance_2.setTransform(62, 64.8, 1, 1, 0, 0, 0, 36, 40.5), this.timeline.addTween(e.Tween.get(this.instance_2).to({
            regX: 36.1,
            rotation: 17.5,
            x: 65.1,
            y: 59.8
        }, 6, e.Ease.get(1)).wait(68).to({
            regX: 36,
            rotation: 0,
            x: 62,
            y: 64.8
        }, 11).wait(35)), this.instance_3 = new t.img_jqr_5, this.instance_3.parent = this, this.instance_3.setTransform(97.6, 61.6, 1, 1, 0, 0, 0, 4.8, 3.3), this.instance_4 = new t.mc_gebod, this.instance_4.parent = this, this.instance_4.setTransform(125.6, 22, 1, 1, 0, 0, 0, 16.1, 17), this.timeline.addTween(e.Tween.get({}).to({
            state: [{
                t: this.instance_3
            }]
        }).to({
            state: [{
                t: this.instance_3
            }]
        }, 6).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 67).to({
            state: [{
                t: this.instance_3
            }]
        }, 11).wait(35)), this.timeline.addTween(e.Tween.get(this.instance_3).to({
            rotation: -49.4,
            x: 115.1,
            y: 27.8
        }, 6, e.Ease.get(1)).to({
            _off: !0
        }, 1).wait(67).to({
            _off: !1
        }, 0).to({
            rotation: 0,
            x: 97.6,
            y: 61.6
        }, 11).wait(35)), this.instance_5 = new t.img_jqr_4, this.instance_5.parent = this, this.instance_5.setTransform(26.8, 61.6, 1, 1, 0, 0, 0, 26.8, 3.3), this.timeline.addTween(e.Tween.get(this.instance_5).to({
            x: 29.8,
            y: 48.6
        }, 6, e.Ease.get(1)).wait(68).to({
            x: 26.8,
            y: 61.6
        }, 11).wait(35)), this.instance_6 = new t.img_jqr_6, this.instance_6.parent = this, this.instance_6.setTransform(62, 104.9, 1, 1, 0, 0, 0, 32.5, 9.5), this.timeline.addTween(e.Tween.get(this.instance_6).wait(120)), this.instance_7 = new t.fxtsy, this.instance_7.parent = this, this.instance_7.setTransform(61.5, 88.5, 1, 1, 0, 0, 0, 95.5, 11.5), this.instance_7.alpha = 0, this.instance_8 = new t.fxtsys("synched", 0), this.instance_8.parent = this, this.instance_8.setTransform(-139.5, 88.5, 1, 1, 0, 0, 0, 95.5, 11.5), this.timeline.addTween(e.Tween.get({}).to({
            state: [{
                t: this.instance_7
            }]
        }).to({
            state: [{
                t: this.instance_7
            }]
        }, 7).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 66).to({
            state: [{
                t: this.instance_7
            }]
        }, 11).wait(35)), this.timeline.addTween(e.Tween.get(this.instance_7).to({
            x: -144.5,
            alpha: 1
        }, 7, e.Ease.get(1)).to({
            _off: !0
        }, 1).wait(66).to({
            _off: !1,
            x: -143.5
        }, 0).to({
            x: 61.5,
            alpha: 0
        }, 11, e.Ease.get(1)).wait(35))
    }).prototype = o = new e.MovieClip, o.nominalBounds = new e.Rectangle((-34), 0, 191, 114.4), (t.mc_end = function (i, n, a) {
        this.initialize(i, n, a, {
            sound_1: 0,
            sound_9: 54,
            "@s_end": 97
        }), this.btn_share = new t.btn_hitarea, this.btn_share.parent = this, this.btn_share.setTransform(150, 865), this.btn_reg = new t.btn_hitarea, this.btn_reg.parent = this, this.btn_reg.setTransform(150, 736), this.timeline.addTween(e.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.btn_reg
            }, {
                t: this.btn_share
            }]
        }, 96).wait(2)), this.instance = new t.img_btzi_2, this.instance.parent = this, this.instance.setTransform(317, 903.5, 1, 1, 0, 0, 0, 97, 14), this.instance.alpha = .379, this.instance._off = !0, this.timeline.addTween(e.Tween.get(this.instance).wait(85).to({
            _off: !1
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .379
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .379
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .379
        }, 0).to({
            alpha: 1
        }, 5, e.Ease.get(1)).wait(2)), this.instance_1 = new t.img_kuang_2, this.instance_1.parent = this, this.instance_1.setTransform(320, 903.5, 1, 1, 0, 0, 0, 158.5, 25.5), this.instance_1.alpha = .379, this.instance_1._off = !0, this.instance_2 = new t.mc_kuang2shan, this.instance_2.parent = this, this.instance_2.setTransform(320, 903.5, 1, 1, 0, 0, 0, 158.5, 25.5), this.timeline.addTween(e.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 82).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 5).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).wait(4)), this.timeline.addTween(e.Tween.get(this.instance_1).wait(82).to({
            _off: !1
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .379
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .379
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .379
        }, 0).to({
            alpha: 1
        }, 5, e.Ease.get(1)).to({
            _off: !0
        }, 1).wait(4)), this.instance_3 = new t.img_btzi_1, this.instance_3.parent = this, this.instance_3.setTransform(316.5, 827.5, 1, 1, 0, 0, 0, 97.5, 14), this.instance_3.alpha = .379, this.instance_3._off = !0, this.timeline.addTween(e.Tween.get(this.instance_3).wait(73).to({
            _off: !1
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .379
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .379
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .379
        }, 0).to({
            alpha: 1
        }, 5, e.Ease.get(1)).wait(14)), this.instance_4 = new t.img_kuang_2copy, this.instance_4.parent = this, this.instance_4.setTransform(320, 828, 1, 1, 0, 0, 0, 158.5, 25.5), this.instance_4.alpha = .379, this.instance_4._off = !0, this.instance_5 = new t.mc_kuang2shancopy, this.instance_5.parent = this, this.instance_5.setTransform(320, 828, 1, 1, 0, 0, 0, 158.5, 25.5), this.timeline.addTween(e.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_4
            }]
        }, 70).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 5).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).wait(16)), this.timeline.addTween(e.Tween.get(this.instance_4).wait(70).to({
            _off: !1
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .379
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .379
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: .379
        }, 0).to({
            alpha: 1
        }, 5, e.Ease.get(1)).to({
            _off: !0
        }, 1).wait(16)), this.instance_6 = new t.img_zi_b, this.instance_6.parent = this, this.instance_6.setTransform(162, 688.5), this.instance_6.alpha = 0, this.instance_6._off = !0, this.timeline.addTween(e.Tween.get(this.instance_6).wait(63).to({
            _off: !1
        }, 0).to({
            y: 694.5,
            alpha: 1
        }, 7, e.Ease.get(1)).wait(28)), this.instance_7 = new t.img_zi_a, this.instance_7.parent = this, this.instance_7.setTransform(385.5, 553.5, 1, 1, 0, 0, 0, 223.5, 18), this.instance_7.alpha = 0, this.instance_7._off = !0, this.timeline.addTween(e.Tween.get(this.instance_7).wait(61).to({
            _off: !1
        }, 0).to({
            y: 559.5,
            alpha: 1
        }, 7, e.Ease.get(1)).wait(30)), this.imgLogo = new t.img_logooo, this.imgLogo.parent = this, this.imgLogo.setTransform(36.1, 34.5), this.imgLogo.alpha = 0, this.imgLogo._off = !0, this.timeline.addTween(e.Tween.get(this.imgLogo).wait(59).to({
            _off: !1
        }, 0).to({
            x: 36.6,
            y: 37,
            alpha: 1
        }, 7, e.Ease.get(1)).wait(32)), this.instance_8 = new t.img_chedeng, this.instance_8.parent = this, this.instance_8.setTransform(320, 441, 1, 1, 0, 0, 0, 365, 177.5), this.instance_8.alpha = 0, this.instance_8._off = !0, this.timeline.addTween(e.Tween.get(this.instance_8).wait(54).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 5).wait(39)), this.instance_9 = new t.img_black, this.instance_9.parent = this, this.instance_9.setTransform(320.1, 482.5, 1, 1, 0, 0, 0, 84, 84), this.instance_9.alpha = 0, this.timeline.addTween(e.Tween.get(this.instance_9).to({
            alpha: 1
        }, 59, e.Ease.get(1)).to({
            _off: !0
        }, 1).wait(38)), this.instance_10 = new t.mc_jqr_2("synched", 0), this.instance_10.parent = this, this.instance_10.setTransform(320.1, 472, 1, 1, 0, 0, 0, 62.4, 57.2), this.timeline.addTween(e.Tween.get(this.instance_10).to({
            regY: 57.3,
            scaleX: .22,
            scaleY: .22,
            y: 472.1,
            startPosition: 8
        }, 59, e.Ease.get(1)).to({
            _off: !0
        }, 1).wait(38))
    }).prototype = o = new e.MovieClip, o.nominalBounds = new e.Rectangle(0, 0, 640, 1039), (t.trans_end = function (i, n, a) {
        this.initialize(i, n, a, {}), this.instance = new t.mc_share, this.instance.parent = this, this.instance.setTransform(431.1, 87.4), this.timeline.addTween(e.Tween.get(this.instance).wait(1)), this.instance_1 = new t.mc_end, this.instance_1.parent = this, this.timeline.addTween(e.Tween.get(this.instance_1).wait(1))
    }).prototype = o = new e.MovieClip, o.nominalBounds = new e.Rectangle(556.1, 606.9, 352, 479), t.properties = {
        width: 640,
        height: 1039,
        fps: 30,
        color: "#000000",
        opacity: 1,
        manifest: [{
            src: "images/trans_end_atlas_.png?1490166225112",
            id: "trans_end_atlas_"
        }],
        preloads: []
    }
};
this.answerjs = this.answerjs || {},
    function () {
        "use strict";

        function e() {}
        e.areadata = [{
            code: "110000",
            name: "北京市",
            children: [{
                code: "110101",
                name: "东城区"
            }, {
                code: "110102",
                name: "西城区"
            }, {
                code: "110105",
                name: "朝阳区"
            }, {
                code: "110106",
                name: "丰台区"
            }, {
                code: "110107",
                name: "石景山区"
            }, {
                code: "110108",
                name: "海淀区"
            }, {
                code: "110109",
                name: "门头沟区"
            }, {
                code: "110111",
                name: "房山区"
            }, {
                code: "110112",
                name: "通州区"
            }, {
                code: "110113",
                name: "顺义区"
            }, {
                code: "110114",
                name: "昌平区"
            }, {
                code: "110115",
                name: "大兴区"
            }, {
                code: "110116",
                name: "怀柔区"
            }, {
                code: "110117",
                name: "平谷区"
            }, {
                code: "110228",
                name: "密云县"
            }, {
                code: "110229",
                name: "延庆县"
            }]
        }, {
            code: "120000",
            name: "天津市",
            children: [{
                code: "120101",
                name: "和平区"
            }, {
                code: "120102",
                name: "河东区"
            }, {
                code: "120103",
                name: "河西区"
            }, {
                code: "120104",
                name: "南开区"
            }, {
                code: "120105",
                name: "河北区"
            }, {
                code: "120106",
                name: "红桥区"
            }, {
                code: "120110",
                name: "东丽区"
            }, {
                code: "120111",
                name: "西青区"
            }, {
                code: "120112",
                name: "津南区"
            }, {
                code: "120113",
                name: "北辰区"
            }, {
                code: "120114",
                name: "武清区"
            }, {
                code: "120115",
                name: "宝坻区"
            }, {
                code: "120116",
                name: "滨海新区"
            }, {
                code: "120221",
                name: "宁河县"
            }, {
                code: "120223",
                name: "静海县"
            }, {
                code: "120225",
                name: "蓟县"
            }]
        }, {
            code: "130000",
            name: "河北省",
            children: [{
                code: "130100",
                name: "石家庄市"
            }, {
                code: "130200",
                name: "唐山市"
            }, {
                code: "130300",
                name: "秦皇岛市"
            }, {
                code: "130400",
                name: "邯郸市"
            }, {
                code: "130500",
                name: "邢台市"
            }, {
                code: "130600",
                name: "保定市"
            }, {
                code: "130700",
                name: "张家口市"
            }, {
                code: "130800",
                name: "承德市"
            }, {
                code: "130900",
                name: "沧州市"
            }, {
                code: "131000",
                name: "廊坊市"
            }, {
                code: "131100",
                name: "衡水市"
            }]
        }, {
            code: "140000",
            name: "山西省",
            children: [{
                code: "140100",
                name: "太原市"
            }, {
                code: "140200",
                name: "大同市"
            }, {
                code: "140300",
                name: "阳泉市"
            }, {
                code: "140400",
                name: "长治市"
            }, {
                code: "140500",
                name: "晋城市"
            }, {
                code: "140600",
                name: "朔州市"
            }, {
                code: "140700",
                name: "晋中市"
            }, {
                code: "140800",
                name: "运城市"
            }, {
                code: "140900",
                name: "忻州市"
            }, {
                code: "141000",
                name: "临汾市"
            }, {
                code: "141100",
                name: "吕梁市"
            }]
        }, {
            code: "150000",
            name: "内蒙古自治区",
            children: [{
                code: "150100",
                name: "呼和浩特市"
            }, {
                code: "150200",
                name: "包头市"
            }, {
                code: "150300",
                name: "乌海市"
            }, {
                code: "150400",
                name: "赤峰市"
            }, {
                code: "150500",
                name: "通辽市"
            }, {
                code: "150600",
                name: "鄂尔多斯市"
            }, {
                code: "150700",
                name: "呼伦贝尔市"
            }, {
                code: "150800",
                name: "巴彦淖尔市"
            }, {
                code: "150900",
                name: "乌兰察布市"
            }, {
                code: "152200",
                name: "兴安盟"
            }, {
                code: "152500",
                name: "锡林郭勒盟"
            }, {
                code: "152900",
                name: "阿拉善盟"
            }]
        }, {
            code: "210000",
            name: "辽宁省",
            children: [{
                code: "210100",
                name: "沈阳市"
            }, {
                code: "210200",
                name: "大连市"
            }, {
                code: "210300",
                name: "鞍山市"
            }, {
                code: "210400",
                name: "抚顺市"
            }, {
                code: "210500",
                name: "本溪市"
            }, {
                code: "210600",
                name: "丹东市"
            }, {
                code: "210700",
                name: "锦州市"
            }, {
                code: "210800",
                name: "营口市"
            }, {
                code: "210900",
                name: "阜新市"
            }, {
                code: "211000",
                name: "辽阳市"
            }, {
                code: "211100",
                name: "盘锦市"
            }, {
                code: "211200",
                name: "铁岭市"
            }, {
                code: "211300",
                name: "朝阳市"
            }, {
                code: "211400",
                name: "葫芦岛市"
            }]
        }, {
            code: "220000",
            name: "吉林省",
            children: [{
                code: "220100",
                name: "长春市"
            }, {
                code: "220200",
                name: "吉林市"
            }, {
                code: "220300",
                name: "四平市"
            }, {
                code: "220400",
                name: "辽源市"
            }, {
                code: "220500",
                name: "通化市"
            }, {
                code: "220600",
                name: "白山市"
            }, {
                code: "220700",
                name: "松原市"
            }, {
                code: "220800",
                name: "白城市"
            }, {
                code: "222400",
                name: "延边朝鲜族自治州"
            }]
        }, {
            code: "230000",
            name: "黑龙江省",
            children: [{
                code: "230100",
                name: "哈尔滨市"
            }, {
                code: "230200",
                name: "齐齐哈尔市"
            }, {
                code: "230300",
                name: "鸡西市"
            }, {
                code: "230400",
                name: "鹤岗市"
            }, {
                code: "230500",
                name: "双鸭山市"
            }, {
                code: "230600",
                name: "大庆市"
            }, {
                code: "230700",
                name: "伊春市"
            }, {
                code: "230800",
                name: "佳木斯市"
            }, {
                code: "230900",
                name: "七台河市"
            }, {
                code: "231000",
                name: "牡丹江市"
            }, {
                code: "231100",
                name: "黑河市"
            }, {
                code: "231200",
                name: "绥化市"
            }, {
                code: "232700",
                name: "大兴安岭地区"
            }]
        }, {
            code: "310000",
            name: "上海市",
            children: [{
                code: "310101",
                name: "黄浦区"
            }, {
                code: "310104",
                name: "徐汇区"
            }, {
                code: "310105",
                name: "长宁区"
            }, {
                code: "310106",
                name: "静安区"
            }, {
                code: "310107",
                name: "普陀区"
            }, {
                code: "310108",
                name: "闸北区"
            }, {
                code: "310109",
                name: "虹口区"
            }, {
                code: "310110",
                name: "杨浦区"
            }, {
                code: "310112",
                name: "闵行区"
            }, {
                code: "310113",
                name: "宝山区"
            }, {
                code: "310114",
                name: "嘉定区"
            }, {
                code: "310115",
                name: "浦东新区"
            }, {
                code: "310116",
                name: "金山区"
            }, {
                code: "310117",
                name: "松江区"
            }, {
                code: "310118",
                name: "青浦区"
            }, {
                code: "310120",
                name: "奉贤区"
            }, {
                code: "310230",
                name: "崇明县"
            }]
        }, {
            code: "320000",
            name: "江苏省",
            children: [{
                code: "320100",
                name: "南京市"
            }, {
                code: "320200",
                name: "无锡市"
            }, {
                code: "320300",
                name: "徐州市"
            }, {
                code: "320400",
                name: "常州市"
            }, {
                code: "320500",
                name: "苏州市"
            }, {
                code: "320600",
                name: "南通市"
            }, {
                code: "320700",
                name: "连云港市"
            }, {
                code: "320800",
                name: "淮安市"
            }, {
                code: "320900",
                name: "盐城市"
            }, {
                code: "321000",
                name: "扬州市"
            }, {
                code: "321100",
                name: "镇江市"
            }, {
                code: "321200",
                name: "泰州市"
            }, {
                code: "321300",
                name: "宿迁市"
            }]
        }, {
            code: "330000",
            name: "浙江省",
            children: [{
                code: "330100",
                name: "杭州市"
            }, {
                code: "330200",
                name: "宁波市"
            }, {
                code: "330300",
                name: "温州市"
            }, {
                code: "330400",
                name: "嘉兴市"
            }, {
                code: "330500",
                name: "湖州市"
            }, {
                code: "330600",
                name: "绍兴市"
            }, {
                code: "330700",
                name: "金华市"
            }, {
                code: "330800",
                name: "衢州市"
            }, {
                code: "330900",
                name: "舟山市"
            }, {
                code: "331000",
                name: "台州市"
            }, {
                code: "331100",
                name: "丽水市"
            }]
        }, {
            code: "340000",
            name: "安徽省",
            children: [{
                code: "340100",
                name: "合肥市"
            }, {
                code: "340200",
                name: "芜湖市"
            }, {
                code: "340300",
                name: "蚌埠市"
            }, {
                code: "340400",
                name: "淮南市"
            }, {
                code: "340500",
                name: "马鞍山市"
            }, {
                code: "340600",
                name: "淮北市"
            }, {
                code: "340700",
                name: "铜陵市"
            }, {
                code: "340800",
                name: "安庆市"
            }, {
                code: "341000",
                name: "黄山市"
            }, {
                code: "341100",
                name: "滁州市"
            }, {
                code: "341200",
                name: "阜阳市"
            }, {
                code: "341300",
                name: "宿州市"
            }, {
                code: "341500",
                name: "六安市"
            }, {
                code: "341600",
                name: "亳州市"
            }, {
                code: "341700",
                name: "池州市"
            }, {
                code: "341800",
                name: "宣城市"
            }]
        }, {
            code: "350000",
            name: "福建省",
            children: [{
                code: "350100",
                name: "福州市"
            }, {
                code: "350200",
                name: "厦门市"
            }, {
                code: "350300",
                name: "莆田市"
            }, {
                code: "350400",
                name: "三明市"
            }, {
                code: "350500",
                name: "泉州市"
            }, {
                code: "350600",
                name: "漳州市"
            }, {
                code: "350700",
                name: "南平市"
            }, {
                code: "350800",
                name: "龙岩市"
            }, {
                code: "350900",
                name: "宁德市"
            }]
        }, {
            code: "360000",
            name: "江西省",
            children: [{
                code: "360100",
                name: "南昌市"
            }, {
                code: "360200",
                name: "景德镇市"
            }, {
                code: "360300",
                name: "萍乡市"
            }, {
                code: "360400",
                name: "九江市"
            }, {
                code: "360500",
                name: "新余市"
            }, {
                code: "360600",
                name: "鹰潭市"
            }, {
                code: "360700",
                name: "赣州市"
            }, {
                code: "360800",
                name: "吉安市"
            }, {
                code: "360900",
                name: "宜春市"
            }, {
                code: "361000",
                name: "抚州市"
            }, {
                code: "361100",
                name: "上饶市"
            }]
        }, {
            code: "370000",
            name: "山东省",
            children: [{
                code: "370100",
                name: "济南市"
            }, {
                code: "370200",
                name: "青岛市"
            }, {
                code: "370300",
                name: "淄博市"
            }, {
                code: "370400",
                name: "枣庄市"
            }, {
                code: "370500",
                name: "东营市"
            }, {
                code: "370600",
                name: "烟台市"
            }, {
                code: "370700",
                name: "潍坊市"
            }, {
                code: "370800",
                name: "济宁市"
            }, {
                code: "370900",
                name: "泰安市"
            }, {
                code: "371000",
                name: "威海市"
            }, {
                code: "371100",
                name: "日照市"
            }, {
                code: "371200",
                name: "莱芜市"
            }, {
                code: "371300",
                name: "临沂市"
            }, {
                code: "371400",
                name: "德州市"
            }, {
                code: "371500",
                name: "聊城市"
            }, {
                code: "371600",
                name: "滨州市"
            }, {
                code: "371700",
                name: "菏泽市"
            }]
        }, {
            code: "410000",
            name: "河南省",
            children: [{
                code: "410100",
                name: "郑州市"
            }, {
                code: "410200",
                name: "开封市"
            }, {
                code: "410300",
                name: "洛阳市"
            }, {
                code: "410400",
                name: "平顶山市"
            }, {
                code: "410500",
                name: "安阳市"
            }, {
                code: "410600",
                name: "鹤壁市"
            }, {
                code: "410700",
                name: "新乡市"
            }, {
                code: "410800",
                name: "焦作市"
            }, {
                code: "410900",
                name: "濮阳市"
            }, {
                code: "411000",
                name: "许昌市"
            }, {
                code: "411100",
                name: "漯河市"
            }, {
                code: "411200",
                name: "三门峡市"
            }, {
                code: "411300",
                name: "南阳市"
            }, {
                code: "411400",
                name: "商丘市"
            }, {
                code: "411500",
                name: "信阳市"
            }, {
                code: "411600",
                name: "周口市"
            }, {
                code: "411700",
                name: "驻马店市"
            }, {
                code: "419000",
                name: "省直辖县级行政区划"
            }]
        }, {
            code: "420000",
            name: "湖北省",
            children: [{
                code: "420100",
                name: "武汉市"
            }, {
                code: "420200",
                name: "黄石市"
            }, {
                code: "420300",
                name: "十堰市"
            }, {
                code: "420500",
                name: "宜昌市"
            }, {
                code: "420600",
                name: "襄阳市"
            }, {
                code: "420700",
                name: "鄂州市"
            }, {
                code: "420800",
                name: "荆门市"
            }, {
                code: "420900",
                name: "孝感市"
            }, {
                code: "421000",
                name: "荆州市"
            }, {
                code: "421100",
                name: "黄冈市"
            }, {
                code: "421200",
                name: "咸宁市"
            }, {
                code: "421300",
                name: "随州市"
            }, {
                code: "422800",
                name: "恩施土家族苗族自治州"
            }, {
                code: "429000",
                name: "省直辖县级行政区划"
            }]
        }, {
            code: "430000",
            name: "湖南省",
            children: [{
                code: "430100",
                name: "长沙市"
            }, {
                code: "430200",
                name: "株洲市"
            }, {
                code: "430300",
                name: "湘潭市"
            }, {
                code: "430400",
                name: "衡阳市"
            }, {
                code: "430500",
                name: "邵阳市"
            }, {
                code: "430600",
                name: "岳阳市"
            }, {
                code: "430700",
                name: "常德市"
            }, {
                code: "430800",
                name: "张家界市"
            }, {
                code: "430900",
                name: "益阳市"
            }, {
                code: "431000",
                name: "郴州市"
            }, {
                code: "431100",
                name: "永州市"
            }, {
                code: "431200",
                name: "怀化市"
            }, {
                code: "431300",
                name: "娄底市"
            }, {
                code: "433100",
                name: "湘西土家族苗族自治州"
            }]
        }, {
            code: "440000",
            name: "广东省",
            children: [{
                code: "440100",
                name: "广州市"
            }, {
                code: "440200",
                name: "韶关市"
            }, {
                code: "440300",
                name: "深圳市"
            }, {
                code: "440400",
                name: "珠海市"
            }, {
                code: "440500",
                name: "汕头市"
            }, {
                code: "440600",
                name: "佛山市"
            }, {
                code: "440700",
                name: "江门市"
            }, {
                code: "440800",
                name: "湛江市"
            }, {
                code: "440900",
                name: "茂名市"
            }, {
                code: "441200",
                name: "肇庆市"
            }, {
                code: "441300",
                name: "惠州市"
            }, {
                code: "441400",
                name: "梅州市"
            }, {
                code: "441500",
                name: "汕尾市"
            }, {
                code: "441600",
                name: "河源市"
            }, {
                code: "441700",
                name: "阳江市"
            }, {
                code: "441800",
                name: "清远市"
            }, {
                code: "441900",
                name: "东莞市"
            }, {
                code: "442000",
                name: "中山市"
            }, {
                code: "445100",
                name: "潮州市"
            }, {
                code: "445200",
                name: "揭阳市"
            }, {
                code: "445300",
                name: "云浮市"
            }]
        }, {
            code: "450000",
            name: "广西壮族自治区",
            children: [{
                code: "450100",
                name: "南宁市"
            }, {
                code: "450200",
                name: "柳州市"
            }, {
                code: "450300",
                name: "桂林市"
            }, {
                code: "450400",
                name: "梧州市"
            }, {
                code: "450500",
                name: "北海市"
            }, {
                code: "450600",
                name: "防城港市"
            }, {
                code: "450700",
                name: "钦州市"
            }, {
                code: "450800",
                name: "贵港市"
            }, {
                code: "450900",
                name: "玉林市"
            }, {
                code: "451000",
                name: "百色市"
            }, {
                code: "451100",
                name: "贺州市"
            }, {
                code: "451200",
                name: "河池市"
            }, {
                code: "451300",
                name: "来宾市"
            }, {
                code: "451400",
                name: "崇左市"
            }]
        }, {
            code: "460000",
            name: "海南省",
            children: [{
                code: "460100",
                name: "海口市"
            }, {
                code: "460200",
                name: "三亚市"
            }, {
                code: "460300",
                name: "三沙市"
            }, {
                code: "469000",
                name: "省直辖县级行政区划"
            }]
        }, {
            code: "500000",
            name: "重庆市",
            children: [{
                code: "500101",
                name: "万州区"
            }, {
                code: "500102",
                name: "涪陵区"
            }, {
                code: "500103",
                name: "渝中区"
            }, {
                code: "500104",
                name: "大渡口区"
            }, {
                code: "500105",
                name: "江北区"
            }, {
                code: "500106",
                name: "沙坪坝区"
            }, {
                code: "500107",
                name: "九龙坡区"
            }, {
                code: "500108",
                name: "南岸区"
            }, {
                code: "500109",
                name: "北碚区"
            }, {
                code: "500110",
                name: "綦江区"
            }, {
                code: "500111",
                name: "大足区"
            }, {
                code: "500112",
                name: "渝北区"
            }, {
                code: "500113",
                name: "巴南区"
            }, {
                code: "500114",
                name: "黔江区"
            }, {
                code: "500115",
                name: "长寿区"
            }, {
                code: "500116",
                name: "江津区"
            }, {
                code: "500117",
                name: "合川区"
            }, {
                code: "500118",
                name: "永川区"
            }, {
                code: "500119",
                name: "南川区"
            }, {
                code: "500223",
                name: "潼南县"
            }, {
                code: "500224",
                name: "铜梁县"
            }, {
                code: "500226",
                name: "荣昌县"
            }, {
                code: "500227",
                name: "璧山县"
            }, {
                code: "500228",
                name: "梁平县"
            }, {
                code: "500229",
                name: "城口县"
            }, {
                code: "500230",
                name: "丰都县"
            }, {
                code: "500231",
                name: "垫江县"
            }, {
                code: "500232",
                name: "武隆县"
            }, {
                code: "500233",
                name: "忠县"
            }, {
                code: "500234",
                name: "开县"
            }, {
                code: "500235",
                name: "云阳县"
            }, {
                code: "500236",
                name: "奉节县"
            }, {
                code: "500237",
                name: "巫山县"
            }, {
                code: "500238",
                name: "巫溪县"
            }, {
                code: "500240",
                name: "石柱土家族自治县"
            }, {
                code: "500241",
                name: "秀山土家族苗族自治县"
            }, {
                code: "500242",
                name: "酉阳土家族苗族自治县"
            }, {
                code: "500243",
                name: "彭水苗族土家族自治县"
            }]
        }, {
            code: "510000",
            name: "四川省",
            children: [{
                code: "510100",
                name: "成都市"
            }, {
                code: "510300",
                name: "自贡市"
            }, {
                code: "510400",
                name: "攀枝花市"
            }, {
                code: "510500",
                name: "泸州市"
            }, {
                code: "510600",
                name: "德阳市"
            }, {
                code: "510700",
                name: "绵阳市"
            }, {
                code: "510800",
                name: "广元市"
            }, {
                code: "510900",
                name: "遂宁市"
            }, {
                code: "511000",
                name: "内江市"
            }, {
                code: "511100",
                name: "乐山市"
            }, {
                code: "511300",
                name: "南充市"
            }, {
                code: "511400",
                name: "眉山市"
            }, {
                code: "511500",
                name: "宜宾市"
            }, {
                code: "511600",
                name: "广安市"
            }, {
                code: "511700",
                name: "达州市"
            }, {
                code: "511800",
                name: "雅安市"
            }, {
                code: "511900",
                name: "巴中市"
            }, {
                code: "512000",
                name: "资阳市"
            }, {
                code: "513200",
                name: "阿坝藏族羌族自治州"
            }, {
                code: "513300",
                name: "甘孜藏族自治州"
            }, {
                code: "513400",
                name: "凉山彝族自治州"
            }]
        }, {
            code: "520000",
            name: "贵州省",
            children: [{
                code: "520100",
                name: "贵阳市"
            }, {
                code: "520200",
                name: "六盘水市"
            }, {
                code: "520300",
                name: "遵义市"
            }, {
                code: "520400",
                name: "安顺市"
            }, {
                code: "520500",
                name: "毕节市"
            }, {
                code: "520600",
                name: "铜仁市"
            }, {
                code: "522300",
                name: "黔西南布依族苗族自治州"
            }, {
                code: "522600",
                name: "黔东南苗族侗族自治州"
            }, {
                code: "522700",
                name: "黔南布依族苗族自治州"
            }]
        }, {
            code: "530000",
            name: "云南省",
            children: [{
                code: "530100",
                name: "昆明市"
            }, {
                code: "530300",
                name: "曲靖市"
            }, {
                code: "530400",
                name: "玉溪市"
            }, {
                code: "530500",
                name: "保山市"
            }, {
                code: "530600",
                name: "昭通市"
            }, {
                code: "530700",
                name: "丽江市"
            }, {
                code: "530800",
                name: "普洱市"
            }, {
                code: "530900",
                name: "临沧市"
            }, {
                code: "532300",
                name: "楚雄彝族自治州"
            }, {
                code: "532500",
                name: "红河哈尼族彝族自治州"
            }, {
                code: "532600",
                name: "文山壮族苗族自治州"
            }, {
                code: "532800",
                name: "西双版纳傣族自治州"
            }, {
                code: "532900",
                name: "大理白族自治州"
            }, {
                code: "533100",
                name: "德宏傣族景颇族自治州"
            }, {
                code: "533300",
                name: "怒江傈僳族自治州"
            }, {
                code: "533400",
                name: "迪庆藏族自治州"
            }]
        }, {
            code: "540000",
            name: "西藏自治区",
            children: [{
                code: "540100",
                name: "拉萨市"
            }, {
                code: "542100",
                name: "昌都地区"
            }, {
                code: "542200",
                name: "山南地区"
            }, {
                code: "542300",
                name: "日喀则地区"
            }, {
                code: "542400",
                name: "那曲地区"
            }, {
                code: "542500",
                name: "阿里地区"
            }, {
                code: "542600",
                name: "林芝地区"
            }]
        }, {
            code: "610000",
            name: "陕西省",
            children: [{
                code: "610100",
                name: "西安市"
            }, {
                code: "610200",
                name: "铜川市"
            }, {
                code: "610300",
                name: "宝鸡市"
            }, {
                code: "610400",
                name: "咸阳市"
            }, {
                code: "610500",
                name: "渭南市"
            }, {
                code: "610600",
                name: "延安市"
            }, {
                code: "610700",
                name: "汉中市"
            }, {
                code: "610800",
                name: "榆林市"
            }, {
                code: "610900",
                name: "安康市"
            }, {
                code: "611000",
                name: "商洛市"
            }]
        }, {
            code: "620000",
            name: "甘肃省",
            children: [{
                code: "620100",
                name: "兰州市"
            }, {
                code: "620200",
                name: "嘉峪关市"
            }, {
                code: "620300",
                name: "金昌市"
            }, {
                code: "620400",
                name: "白银市"
            }, {
                code: "620500",
                name: "天水市"
            }, {
                code: "620600",
                name: "武威市"
            }, {
                code: "620700",
                name: "张掖市"
            }, {
                code: "620800",
                name: "平凉市"
            }, {
                code: "620900",
                name: "酒泉市"
            }, {
                code: "621000",
                name: "庆阳市"
            }, {
                code: "621100",
                name: "定西市"
            }, {
                code: "621200",
                name: "陇南市"
            }, {
                code: "622900",
                name: "临夏回族自治州"
            }, {
                code: "623000",
                name: "甘南藏族自治州"
            }]
        }, {
            code: "630000",
            name: "青海省",
            children: [{
                code: "630100",
                name: "西宁市"
            }, {
                code: "630200",
                name: "海东市"
            }, {
                code: "632200",
                name: "海北藏族自治州"
            }, {
                code: "632300",
                name: "黄南藏族自治州"
            }, {
                code: "632500",
                name: "海南藏族自治州"
            }, {
                code: "632600",
                name: "果洛藏族自治州"
            }, {
                code: "632700",
                name: "玉树藏族自治州"
            }, {
                code: "632800",
                name: "海西蒙古族藏族自治州"
            }]
        }, {
            code: "640000",
            name: "宁夏回族自治区",
            children: [{
                code: "640100",
                name: "银川市"
            }, {
                code: "640200",
                name: "石嘴山市"
            }, {
                code: "640300",
                name: "吴忠市"
            }, {
                code: "640400",
                name: "固原市"
            }, {
                code: "640500",
                name: "中卫市"
            }]
        }, {
            code: "650000",
            name: "新疆维吾尔自治区",
            children: [{
                code: "650100",
                name: "乌鲁木齐市"
            }, {
                code: "650200",
                name: "克拉玛依市"
            }, {
                code: "652100",
                name: "吐鲁番地区"
            }, {
                code: "652200",
                name: "哈密地区"
            }, {
                code: "652300",
                name: "昌吉回族自治州"
            }, {
                code: "652700",
                name: "博尔塔拉蒙古自治州"
            }, {
                code: "652800",
                name: "巴音郭楞蒙古自治州"
            }, {
                code: "652900",
                name: "阿克苏地区"
            }, {
                code: "653000",
                name: "克孜勒苏柯尔克孜自治州"
            }, {
                code: "653100",
                name: "喀什地区"
            }, {
                code: "653200",
                name: "和田地区"
            }, {
                code: "654000",
                name: "伊犁哈萨克自治州"
            }, {
                code: "654200",
                name: "塔城地区"
            }, {
                code: "654300",
                name: "阿勒泰地区"
            }, {
                code: "659000",
                name: "自治区直辖县级行政区划"
            }]
        }], answerjs.ChinaCiry = e
    }();
this.answerjs = this.answerjs || {},
    function () {
        "use strict";

        function s() {
            this.PageBase_constructor(), this.lib = {}, this.images = {}, this.ss = {}, this.AdobeAn = {}, this.curSwfIndex = 0
        }
        var t = createjs.extend(s, answerjs.PageBase);
        t.onAdded = function () {
            this.bg = new createjs.Bitmap(answerjs.RES.getRes(answerjs.queueLoading, "home_bg")), this.addChild(this.bg), this.createContentGroup(), new home_ani(this.lib, this.images, createjs, this.ss, this.AdobeAn);
            for (var s = answerjs.queuePreload, t = this.lib.ssMetadata, i = 0; i < t.length; i++) this.ss[t[i].name] = new createjs.SpriteSheet({
                images: [s.getResult(t[i].name)],
                frames: t[i].frames
            });
            this.swf = new this.lib.mc_home_ani, this.swf.parent = this, this.swf.setTransform(320.1, 485.2, 1, 1, 0, 0, 0, 62.4, 57.2), this.contentGroup.addChild(this.swf), this.oldLabel = null, this.swfTick = this.swf.on("tick", this.onMcTick, this), this.tipSwf = new this.lib.mc_btn_go, this.tipSwf.parent = this, this.contentGroup.addChild(this.tipSwf), this.tipSwf.gotoAndStop(0), this.tipSwf.loop = !1, this.PageBase_onAdded()
        }, t.onShowNavArrow = function () {
            return !1
        }, t.onMcTick = function (s) {
            var t = s.currentTarget,
                i = t.currentLabel;
            null != i && this.oldLabel != i && this.onLabelEvent(i), t.currentFrame >= t.totalFrames && (this.onMcComplete(), this.swf.off("tick", this.swfTick), this.swfTick = null), this.oldLabel = i
        }, t.onLabelEvent = function (s) {
            switch (s) {
            case "@s_1":
                this.swf.stop(), this.stage.on("click", this.onNextStep, this, !0);
                break;
            case "@s_21":
            case "@s_3":
            case "@s_41":
            case "@s_51":
                this.swf.stop(), this.stage.on("click", this.onNextStep, this, !0), this.tipSwf.gotoAndPlay(1);
                break;
            case "@s_6":
                this.swf.stop(), this.onPageNext()
            }
            s.indexOf("sound") != -1 && ("sound_1" == s ? this.soundFirst1 = new answerjs.SoundEffectFirst("res/sound/sound_1.mp3", this.stage, (!0)) : "sound_2" == s ? (this.clearSondFirst(this.soundFirst1), this.soundFirst2 = new answerjs.SoundEffectFirst("res/sound/sound_2.mp3", this.stage, (!1))) : "sound_2_1" == s ? (this.soundFirst2.clearStageClick(), this.soundFirst3 = new answerjs.SoundEffectFirst("res/sound/sound_2_1.mp3", this.stage, (!1))) : (this.clearSondFirst(this.soundFirst2), this.clearSondFirst(this.soundFirst3), "sound_5" == s ? createjs.Sound.play(s, {
                loop: 1
            }) : createjs.Sound.play(s)))
        }, t.clearSondFirst = function (s) {
            s && (s.bgSoundStop(), s.clearAllListener(), s = null)
        }, t.onNextStep = function () {
            this.swf.play(), this.swfTick1 && this.tipSwf.off("tick", this.swfTick1), this.swfTick1 = this.tipSwf.on("tick", this.onMcTick1, this), answerjs.BaiDu.trackPageview("/home/" + this.swf.currentLabel.substr(1))
        }, t.onMcTick1 = function (s) {
            var t = 0;
            this.tipSwf.currentFrame > 0 ? (t = this.tipSwf.currentFrame - 1, this.tipSwf.gotoAndStop(t)) : this.tipSwf.off("tick", this.swfTick1)
        }, t.onStageResize = function () {
            this.PageBase_onStageResize(), this.tipSwf && (this.tipSwf.x = (answerjs.GameData.DESIGN_PORTRAIT_WIDTH - this.tipSwf.getBounds().width) / 2, this.tipSwf.y = 900)
        }, answerjs.Home = createjs.promote(s, "PageBase")
    }();
this.answerjs = this.answerjs || {},
    function () {
        "use strict";

        function e() {
            this.PageBase_constructor(), this.enabledCompleteEvent = !0, this.isComplete = !1, this.lib = {}, this.images = {}, this.ss = {}, this.AdobeAn = {}
        }
        var s = createjs.extend(e, answerjs.PageBase);
        s.onAdded = function () {
            this.PageBase_onAdded(), this.bg = new createjs.Shape, this.bg.graphics.beginFill(0).drawRect(0, 0, answerjs.GameData.DESIGN_PORTRAIT_WIDTH, answerjs.GameData.DESIGN_PORTRAIT_HEIGHT).endFill(), this.addChild(this.bg), this.createContentGroup(), new loading_ani(this.lib, this.images, createjs, this.ss, this.AdobeAn);
            for (var e = answerjs.queueLoading, s = this.lib.ssMetadata, t = 0; t < s.length; t++) this.ss[s[t].name] = new createjs.SpriteSheet({
                images: [e.getResult(s[t].name)],
                frames: s[t].frames
            });
            this.swf = new this.lib.mc_loading, this.swf.parent = this, this.swf.setTransform(318, 536.9), this.contentGroup.addChild(this.swf), this.swf.numLabel.text = "Loading 0%", this.onStageResize()
        }, s.setProgress = function (e) {
            if (this.isAdded) {
                var s = Math.floor(100 * e);
                this.swf.numLabel.text = "Loading " + s + "%", e >= 1 && !this.isComplete && this.enabledCompleteEvent && (this.isComplete = !0, this.showComplete())
            }
        }, s.showComplete = function () {
            this.clearAllListener(), this.dispatchEvent("complete")
        }, answerjs.Loading = createjs.promote(e, "PageBase")
    }();
this.answerjs = this.answerjs || {},
    function () {
        "use strict";

        function e() {
            this.PageBase_constructor()
        }
        var s = createjs.extend(e, answerjs.PageBase);
        s.onAdded = function () {
            this.logoSprite = new createjs.Sprite(answerjs.RES.getRes(answerjs.queuePreload, "sheet_home"), "home_logo"), this.logoSprite.x = (this.stage.stageWidth - this.logoSprite.getBounds().width) / 2, this.logoSprite.y = 20, this.addChild(this.logoSprite), this.PageBase_onAdded()
        }, s.onStageResize = function () {
            this.PageBase_onStageResize(), this.logoSprite && (this.logoSprite.x = 20)
        }, answerjs.Logo = createjs.promote(e, "PageBase")
    }();
this.answerjs = this.answerjs || {},
    function () {
        "use strict";

        function s() {}
        s.loading = [{
            id: "loading_ani_atlas_",
            src: "res/loading_ani_atlas_.png"
        }, {
            id: "home_bg",
            src: "res/home_bg.jpg"
        }], s.preload = [{
            id: "sound_bg1",
            src: "res/sound/sound_bg.mp3"
        }, {
            id: "sound_1",
            src: "res/sound/sound_1.mp3"
        }, {
            id: "sound_2",
            src: "res/sound/sound_2.mp3"
        }, {
            id: "sound_2_1",
            src: "res/sound/sound_2_1.mp3"
        }, {
            id: "sound_3",
            src: "res/sound/sound_3.mp3"
        }, {
            id: "sound_4",
            src: "res/sound/sound_4.mp3"
        }, {
            id: "sound_5",
            src: "res/sound/sound_5.mp3"
        }, {
            id: "sound_6",
            src: "res/sound/sound_6.mp3"
        }, {
            id: "sound_7",
            src: "res/sound/sound_7.mp3"
        }, {
            id: "sound_9",
            src: "res/sound/sound_9.mp3"
        }, {
            id: "trans_1_js",
            src: "js/trans_1.js"
        }, {
            id: "sheet_home",
            src: "res/sheet_home.json?v=2",
            type: "spritesheet",
            crossOrigin: !0
        }, {
            id: "home_ani_atlas_",
            src: "res/home_ani_atlas_.png?v=1"
        }, {
            id: "trans_1_atlas_",
            src: "res/trans_1_atlas_.png?v=1"
        }, {
            id: "trans_end_atlas_",
            src: "res/trans_end_atlas_.png?v=1"
        }], answerjs.Mainfest = s
    }();
this.answerjs = this.answerjs || {},
    function () {
        "use strict";

        function t() {
            this.PageBase_constructor(), this.lib = {}, this.images = {}, this.ss = {}, this.AdobeAn = {}, this.maxRow = 64, this.maxCol = 48, this.xmgW = 16.75, this.xmgH = 18.75, this.xmgTotal = 30, this.isAutoPlay = !1, this.curSwfIndex = 0
        }
        var e = createjs.extend(t, answerjs.PageBase);
        e.onAdded = function () {
            this.bg = new createjs.Bitmap(answerjs.RES.getRes(answerjs.queueLoading, "home_bg")), this.addChild(this.bg), this.createContentGroup(), this.bgSprite = new createjs.Container, this.contentGroup.addChild(this.bgSprite), this.bgSprite.x = -81.8, this.bgSprite.y = -52.2, this.bgXmg = answerjs.RES.getRes(answerjs.queuePreload, "sheet_home", "page_bg"), this.bgSprite.addChild(this.bgXmg), this.bgDot = new createjs.Container, this.bgSprite.addChild(this.bgDot), new trans_1(this.lib, this.images, createjs, this.ss, this.AdobeAn);
            for (var t = answerjs.queuePreload, e = this.lib.ssMetadata, s = 0; s < e.length; s++) this.ss[e[s].name] = new createjs.SpriteSheet({
                images: [t.getResult(e[s].name)],
                frames: e[s].frames
            });
            for (var s = 0; s < this.xmgTotal; s++) {
                this["xmg_" + s] = new createjs.Container;
                var i = new this.lib.img_xiaomogu,
                    h = answerjs.RES.getRes(answerjs.queuePreload, "sheet_home", "page_1_xmg_1");
                i.name = "xmg_2", h.name = "xmg_1", i.visible = !1, this["xmg_" + s].addChild(h), this["xmg_" + s].addChild(i);
                var a = Math.floor(Math.random() * this.maxRow),
                    n = Math.floor(Math.random() * this.maxCol);
                this["xmg_" + s].x = this.xmgW * n, this["xmg_" + s].y = this.xmgH * a, this["xmg_" + s].alpha = 0, this.bgDot.addChild(this["xmg_" + s])
            }
            createjs.Tween.get(this.bgSprite, {
                loop: !0
            }).call(function () {
                this.createBgRandomXmg()
            }, "", this).wait(2e3), this.goSwf = new this.lib.mc_go, this.goSwf.parent = this, this.contentGroup.addChild(this.goSwf), this.goSwf.loop = !1, this.goSwf.x = 68, this.goSwf.y = 819, createjs.Tween.get(this.goSwf).wait(500).call(function () {
                this.stage.on("click", this.showTxtGo, this, !0)
            }, "", this), this.transContainer = new createjs.Container, this.contentGroup.addChild(this.transContainer), this.tipSwf = new this.lib.mc_btn_go, this.tipSwf.parent = this, this.contentGroup.addChild(this.tipSwf), this.tipSwf.gotoAndStop(0), this.tipSwf.loop = !1, this.PageBase_onAdded()
        }, e.onShowNavArrow = function () {
            return !1
        }, e.createBgRandomXmg = function () {
            for (var t = 0; t < this.xmgTotal; t++) {
                var e = Math.floor(Math.random() * this.maxRow),
                    s = Math.floor(Math.random() * this.maxCol);
                this["xmg_" + t].x = this.xmgW * s, this["xmg_" + t].y = this.xmgH * e, this["xmg_" + t].alpha = 0;
                var i = Math.floor(400 * Math.random()),
                    h = Math.floor(500 * Math.random()) + 100;
                createjs.Tween.removeTweens(this["xmg_" + t]), createjs.Tween.get(this["xmg_" + t]).wait(i).to({
                    alpha: 1
                }, h).wait(i).to({
                    alpha: 0
                }, h)
            }
        }, e.showTxtGo = function () {
            createjs.Tween.get(this.bgXmg).to({
                alpha: .3
            }), createjs.Tween.get(this.goSwf).to({
                alpha: 0
            }, 300).call(function () {
                this.contentGroup.removeChild(this.goSwf), this.showTxt1(1), this.changeBgDot()
            }, "", this)
        }, e.changeBgDot = function () {
            for (var t = 0; t < this.xmgTotal; t++) this["xmg_" + t].getChildByName("xmg_1").visible = !1, this["xmg_" + t].getChildByName("xmg_2").visible = !0
        }, e.showTxt1 = function (t) {
            this.curScene = t, this.swf && (this.swf.off("tick", this.swfTick), this.transContainer.removeChild(this.swf));
            var e = this.lib["mc_movie" + this.curScene];
            this.swf = new e, this.swf.parent = this, this.swf.setTransform(-81.8, -52.5), this.transContainer.addChild(this.swf), this.swf.loop = !1, this.oldLabel = null, this.swfTick = this.swf.on("tick", this.onMcTick, this)
        }, e.onMcTick = function (t) {
            var e = t.currentTarget,
                s = e.currentLabel;
            null != s && this.oldLabel != s && this.onLabelEvent(e, s), this.oldLabel = s
        }, e.onLabelEvent = function (t, e) {
            switch (e) {
            case "@s_end":
                this.isAutoPlay ? createjs.Tween.get(t).wait(2e3).call(function () {
                    this.swfTick1 = t.on("tick", this.onMcTick1, this)
                }, "", this) : (this.stage.on("click", this.onNextStep, this, !0), createjs.Tween.removeTweens(this.tipSwf), this.tipSwf.alpha = 1, this.tipSwf.gotoAndPlay(1))
            }
        }, e.onNextStep = function () {
            this.swfTick1 = this.swf.on("tick", this.onMcTick1, this), createjs.Tween.get(this.tipSwf).to({
                alpha: 0
            }, 300), answerjs.BaiDu.trackPageview("/page1/scene_" + this.curScene)
        }, e.onMcTick1 = function (t) {
            var e = t.currentTarget,
                s = 0;
            e.currentFrame > 0 ? (s = e.currentFrame - 3, s < 0 && (s = 0), e.gotoAndStop(s)) : this.curScene < 3 ? this.showTxt1(this.curScene + 1) : this.onPageNext()
        }, e.onMcComplete = function () {}, e.onPagePrev = function () {}, e.clearAllListener = function () {
            this.PageBase_clearAllListener(), createjs.Tween.removeTweens(this.bgSprite)
        }, e.onStageResize = function () {
            this.PageBase_onStageResize(), this.tipSwf && (this.tipSwf.x = (answerjs.GameData.DESIGN_PORTRAIT_WIDTH - this.tipSwf.getBounds().width) / 2, this.tipSwf.y = 950)
        }, answerjs.Page1 = createjs.promote(t, "PageBase")
    }();
this.answerjs = this.answerjs || {},
    function () {
        "use strict";

        function t() {
            this.PageBase_constructor(), this.lib = {}, this.images = {}, this.ss = {}, this.AdobeAn = {}
        }
        var e = createjs.extend(t, answerjs.PageBase);
        e.onAdded = function () {
            this.bg = new createjs.Shape, this.bg.graphics.beginFill(0).drawRect(0, 0, answerjs.GameData.DESIGN_PORTRAIT_WIDTH, answerjs.GameData.DESIGN_PORTRAIT_HEIGHT).endFill(), this.addChild(this.bg), this.createContentGroup(), new trans_end(this.lib, this.images, createjs, this.ss, this.AdobeAn);
            for (var t = answerjs.queuePreload, e = this.lib.ssMetadata, i = 0; i < e.length; i++) this.ss[e[i].name] = new createjs.SpriteSheet({
                images: [t.getResult(e[i].name)],
                frames: e[i].frames
            });
            this.swf = new this.lib.mc_end, this.swf.parent = this, this.contentGroup.addChild(this.swf), this.oldLabel = null, this.swfTick = this.swf.on("tick", this.onMcTick, this), this.swf.gotoAndStop(0), createjs.Tween.get(this.swf).wait(500).call(function () {
                this.swf.play()
            }, "", this), this.initReg(), this.PageBase_onAdded()
        }, e.onShowNavArrow = function () {
            return !1
        }, e.onMcTick = function (t) {
            var e = t.currentTarget,
                i = e.currentLabel;
            null != i && this.oldLabel != i && this.onLabelEvent(e, i), e.currentFrame >= e.totalFrames && (this.onMcComplete(), this.target.off("tick", this.swfTick), this.swfTick = null), this.oldLabel = i
        }, e.onLabelEvent = function (t, e) {
            switch (e) {
            case "@s_end":
                t.stop(), this.swf.btn_reg.on("click", this.onTapReg, this), this.swf.btn_share.on("click", this.onTapShare, this)
            }
            switch (e) {
            case "sound_1":
                createjs.Sound.play(e, {
                    loop: -1
                });
                break;
            case "sound_9":
                createjs.Sound.stop("sound_1"), createjs.Sound.play(e)
            }
        }, e.onTapReg = function () {
            this.showReg(), answerjs.BaiDu.trackEvent("page2_click", "page2_click_reg", "page2_click_reg", 1)
        }, e.onTapShare = function () {
            this.pageShare = new answerjs.PageShare, this.stage.addChild(this.pageShare), answerjs.BaiDu.trackEvent("page2_click", "page2_click_share", "page2_click_share", 1)
        }, e.showXiangQing = function () {
            var t = new answerjs.PageGuiZe;
            this.addChild(t), t.on("close", this.closeXiangQing, this, !0), this.hideReg(), answerjs.BaiDu.trackEvent("reg_click", "reg_click_detail", "reg_click_detail", 1)
        }, e.closeXiangQing = function () {
            this.showReg()
        }, e.regBack = function () {
            this.hideReg(), this.contentGroup.visible = !0, answerjs.BaiDu.trackEvent("reg_click", "reg_click_back", "reg_click_back", 1)
        }, e.initReg = function () {
            this.onSubmitFunc = this.onSubmit.bind(this), $(".btn-submit").on("click", this.onSubmitFunc), $(".btn-more").on("click", this.showXiangQing.bind(this)), $(".btn-back").on("click", this.regBack.bind(this)), $("#name").val(""), $("#mobile").val(""), $("input").focus(function () {
                answerjs.GameData.isInputState = !0, $("#msg").text($("#msg").text() + " focus ")
            }).blur(function () {
                answerjs.GameData.isInputState = !1, $("#msg").text($("#msg").text() + " blur ")
            }), $("#province").empty(), $("#province").append('<option value="-1">请选择省</option>');
            for (var t = 0; t < answerjs.ChinaCiry.areadata.length; t++) {
                var e = answerjs.ChinaCiry.areadata[t],
                    i = '<option value="' + t + '"> ' + e.name + "</option>";
                $("#province").append(i)
            }
            $("#city").empty(), $("#city").append('<option value="-1">请选择市</option>'), $("#province").on("change", this.onChangeProvince.bind(this))
        }, e.onChangeProvince = function (t) {
            var e = Number($("#province").val());
            if (e != -1) {
                var i = answerjs.ChinaCiry.areadata[e].children;
                $("#city").empty(), $("#city").append('<option value="-1">请选择市</option>');
                for (var n = 0; n < i.length; n++) {
                    var a = i[n],
                        s = '<option value="' + n + '"> ' + a.name + "</option>";
                    $("#city").append(s)
                }
            }
        }, e.onSubmit = function () {
            if (this.checkInput()) {
                $(".btn-submit").off("click", this.onSubmitFunc);
                var t = "";
                t += $("#province option").eq($("#province").attr("selectedIndex")).text(), t += ",", t += $("#city option").eq($("#city").attr("selectedIndex")).text();
                var e = $("input[name='key']").val(),
                    i = {
                        username: $("#name").val(),
                        numberphone: $("#mobile").val(),
                        city: t,
                        key: e
                    };
                $.ajax({
                    url: answerjs.GameData.regURl,
                    type: "POST",
                    data: i,
                    success: function (t) {
                        this.onSubmitComplete(t)
                    }.bind(this),
                    error: function () {
                        this.onSubmitError()
                    }.bind(this)
                }), answerjs.BaiDu.trackEvent("reg_click", "reg_click_submit", "reg_click_submit", 1)
            }
        }, e.onSubmitComplete = function (t) {
            if (t = JSON.parse(t), 1003 == t.start) return alert("该手机已经注册!"), void $(".btn-submit").on("click", this.onSubmitFunc);
            if (1002 == t.start) return alert("请输入正确的手机号!"), void $(".btn-submit").on("click", this.onSubmitFunc);
            if (1006 == t.start) return alert("提交太频繁，请稍候在试!"), void $(".btn-submit").on("click", this.onSubmitFunc);
            if (2007 == t.start) return void alert("活动已经结束，谢谢您的参与!");
            var e = 0;
            e = 2004 == t.start ? t.data : 0, this.clearAllListener(), this.hideReg();
            var i = new createjs.Event(answerjs.GameEvent.NEXT_STEP);
            i.data = e, this.dispatchEvent(i)
        }, e.onSubmitError = function (t) {
            $(".btn-submit").on("click", this.onSubmitFunc)
        }, e.checkInput = function () {
            var t = !0;
            return "" == $("#name").val() ? (alert("请输入姓名！"), t = !1) : "" == $("#mobile").val() ? (alert("请输入手机号！"), t = !1) : answerjs.Utils.checkMobile($("#mobile").val()) ? "-1" == $("#province").val() ? (alert("请选择省！"), t = !1) : "-1" == $("#city").val() && (alert("请选择市！"), t = !1) : (alert("请输入正确的手机号！"), t = !1), t
        }, e.showReg = function () {
            this.contentGroup.visible = !1, $("#reg").removeClass("hide")
        }, e.hideReg = function () {
            $("#reg").addClass("hide")
        }, e.onMcComplete = function () {}, e.onPagePrev = function () {}, e.clearAllListener = function () {
            this.PageBase_clearAllListener()
        }, e.onStageResize = function () {
            this.PageBase_onStageResize();
            var t = new createjs.Point(36, 36);
            this.swf.globalToLocal(t.x, t.y), this.swf.imgLogo.x = t.x, this.swf.imgLogo.y = t.y
        }, answerjs.Page2 = createjs.promote(t, "PageBase")
    }();
this.answerjs = this.answerjs || {},
    function () {
        "use strict";

        function e(e) {
            this.PageBase_constructor(), this.prizeID = e
        }
        var t = createjs.extend(e, answerjs.PageBase);
        t.onAdded = function () {
            this.bg = new createjs.Shape, this.bg.graphics.beginFill("#000000").drawRect(0, 0, answerjs.GameData.DESIGN_PORTRAIT_WIDTH, answerjs.GameData.DESIGN_PORTRAIT_HEIGHT).endFill(), this.addChild(this.bg), this.createContentGroup(), this.panelContainer = new createjs.Container, this.contentGroup.addChild(this.panelContainer), this.panelBg = new answerjs.RES.getRes(answerjs.queuePreload, "sheet_home", "reg_result_panel"), this.panelContainer.addChild(this.panelBg), this.panelContainer.x = (this.contentGroup.getBounds().width - this.panelBg.getBounds().width) / 2, this.panelContainer.y = (this.contentGroup.getBounds().height - this.panelBg.getBounds().height) / 2, this.title = new answerjs.RES.getRes(answerjs.queuePreload, "sheet_home", "reg_gongxi"), this.panelContainer.addChild(this.title), this.title.x = (this.panelBg.getBounds().width - this.title.getBounds().width) / 2, this.title.y = 239, this.title2 = new answerjs.RES.getRes(answerjs.queuePreload, "sheet_home", "reg_gongxi_1"), this.panelContainer.addChild(this.title2), this.title2.x = (this.panelBg.getBounds().width - this.title2.getBounds().width) / 2, this.title2.y = 568, this.btnBack = new answerjs.RES.getRes(answerjs.queuePreload, "sheet_home", "btn_again"), this.panelContainer.addChild(this.btnBack), this.btnBack.x = (this.panelBg.getBounds().width - this.btnBack.getBounds().width) / 2, this.btnBack.y = this.panelBg.y + this.panelBg.getBounds().height + 50;
            var e = "";
            this.prizeID >= 1 && this.prizeID <= 4 ? e = "reg_award_" + this.prizeID : (e = "reg_award_0", this.title.visible = !1, this.title2.visible = !1), this.awardImg = new answerjs.RES.getRes(answerjs.queuePreload, "sheet_home", e), this.panelContainer.addChild(this.awardImg), this.awardImg.x = (this.panelBg.getBounds().width - this.awardImg.getBounds().width) / 2, this.awardImg.y = 427 - this.awardImg.getBounds().height / 2, createjs.Tween.get(this).wait(500).call(function () {
                this.btnBack.on("click", this.onClick, this, !0)
            }, "", this), this.PageBase_onAdded()
        }, t.onClick = function () {
            console.log("clicks"), this.clearAllListener(), this.dispatchEvent(answerjs.GameEvent.NEXT_STEP)
        }, t.onShowNavArrow = function () {
            return !1
        }, t.clearAllListener = function () {
            this.PageBase_clearAllListener()
        }, t.onStageResize = function () {
            this.PageBase_onStageResize()
        }, answerjs.PageAward = createjs.promote(e, "PageBase")
    }();
this.answerjs = this.answerjs || {},
    function () {
        "use strict";

        function t() {
            this.PageBase_constructor()
        }
        var e = createjs.extend(t, answerjs.PageBase);
        e.onAdded = function () {
            this.bg = new createjs.Shape, this.bg.graphics.beginFill("#000000").drawRect(0, 0, answerjs.GameData.DESIGN_PORTRAIT_WIDTH, answerjs.GameData.DESIGN_PORTRAIT_HEIGHT).endFill(), this.addChild(this.bg), this.createContentGroup(), this.panelContainer = new createjs.Container, this.contentGroup.addChild(this.panelContainer), this.panelBg = new answerjs.RES.getRes(answerjs.queuePreload, "sheet_home", "page_more_box"), this.panelContainer.addChild(this.panelBg), this.panelContainer.x = (this.contentGroup.getBounds().width - this.panelBg.getBounds().width) / 2, this.panelContainer.y = (this.contentGroup.getBounds().height - this.panelBg.getBounds().height) / 2, this.title = new answerjs.RES.getRes(answerjs.queuePreload, "sheet_home", "page_more_title"), this.panelContainer.addChild(this.title), this.title.x = (this.panelBg.getBounds().width - this.title.getBounds().width) / 2, this.title.y = 58, this.btnBack = new answerjs.RES.getRes(answerjs.queuePreload, "sheet_home", "btn_back"), this.panelContainer.addChild(this.btnBack), this.btnBack.x = (this.panelBg.getBounds().width - this.btnBack.getBounds().width) / 2, this.btnBack.y = this.panelBg.y + this.panelBg.getBounds().height + 30, this.scroller = new createjs.Container, this.panelContainer.addChild(this.scroller), this.scrollerBg = new createjs.Shape, this.scrollerBg.graphics.beginFill(16777215).drawRect(0, 0, 463, 672).endFill(), this.scroller.addChild(this.scrollerBg), this.txtMask = new createjs.Shape, this.txtMask.graphics.beginFill(0).drawRect(0, 0, 463, 672).endFill(), this.scroller.addChild(this.txtMask), this.scroller.x = (this.panelBg.getBounds().width - 463) / 2, this.scroller.y = 121, this.scroller.mouseEnabled = !0, this.txtCon = new answerjs.RES.getRes(answerjs.queuePreload, "sheet_home", "page_more_con"), this.scroller.addChild(this.txtCon), this.txtCon.x = this.txtMask.x, this.txtCon.y = this.txtMask.y, this.txtCon.mask = this.txtMask, createjs.Tween.get(this).to({
                alpha: 1
            }, 300).call(function () {
                this.clickListener = this.btnBack.on("click", this.onClose, this, !0)
            }, "", this), this.initScroller(), this.PageBase_onAdded()
        }, e.initScroller = function () {
            this.touchBegin = null, this.touchEnd = null, this.minY = this.txtMask.y, this.maxY = this.txtMask.y - (this.txtCon.getBounds().height - 672), this.startListener()
        }, e.startListener = function () {
            this.stopListener(), this.touchBegin = this.scroller.on("mousedown", this.onTouchBegin, this), this.touchEnd = this.scroller.on("pressmove", this.onTouchEnd, this)
        }, e.stopListener = function () {
            this.touchBegin && this.scroller.off("mousedown", this.touchBegin), this.touchEnd && this.scroller.off("mouseover", this.touchEnd)
        }, e.onTouchBegin = function (t) {
            this.touchID = t.pointerID, this.beginPoint = {
                x: t.stageX,
                y: t.stageY
            }, this.txtInitY = this.txtCon.y
        }, e.stopPropagation = function (t) {
            this.isStopPropagation && t.stopPropagation()
        }, e.onTouchEnd = function (t) {
            if (this.touchID == t.pointerID) {
                var e = (t.stageX - this.beginPoint.x, t.stageY - this.beginPoint.y),
                    s = this.txtInitY + e;
                s < this.maxY ? s = this.maxY : s > this.minY && (s = this.minY), this.txtCon.y = s
            }
        }, e.onClose = function () {
            this.btnBack.off("click", this.clickListener), createjs.Tween.get(this).to({
                alpha: 0
            }, 300).call(function () {
                this.clearAllListener(), this.dispatchEvent("close"), this.parent.removeChild(this)
            }, "", this)
        }, e.clearAllListener = function () {
            this.PageBase_clearAllListener(), this.stopListener()
        }, e.onStageResize = function () {
            this.PageBase_onStageResize()
        }, answerjs.PageGuiZe = createjs.promote(t, "PageBase")
    }();
this.answerjs = this.answerjs || {},
    function () {
        "use strict";

        function e(e) {
            this.PageBase_constructor(), this.toBottom = e || 8
        }
        var t = createjs.extend(e, answerjs.PageBase);
        t.onAdded = function () {
            this.iconSprite = new createjs.Sprite(answerjs.RES.getRes(answerjs.queuePreload, "sheet_home"), "home_nav_arrow"), this.iconSprite.x = 0, this.iconSprite.y = 0, this.addChild(this.iconSprite), this.stage.on(answerjs.GameEvent.PAGE_NAV_ARROW_SHOW, this.showNavArrow, this), this.stage.on(answerjs.GameEvent.PAGE_NAV_ARROW_HIDE, this.hideNavArrow, this), this.visible = !1, this.PageBase_onAdded()
        }, t.showNavArrow = function () {
            this.visible = !0, this.alpha = 0, createjs.Tween.get(this).to({
                alpha: 1
            }, 300), createjs.Tween.removeTweens(this.iconSprite), this.iconSprite.y = 0, createjs.Tween.get(this.iconSprite, {
                loop: !0
            }).to({
                y: -10
            }, 500).to({
                y: 0
            }, 500)
        }, t.hideNavArrow = function () {
            createjs.Tween.removeTweens(this.iconSprite), createjs.Tween.get(this.iconSprite).to({
                y: 0
            }, 300), createjs.Tween.get(this).to({
                alpha: 0
            }, 300).set({
                visible: !1
            })
        }, t.onStageResize = function () {
            this.iconSprite && (this.x = (this.stage.stageWidth - this.iconSprite.getBounds().width) / 2, this.y = this.stage.stageHeight - this.iconSprite.getBounds().height - this.toBottom)
        }, answerjs.PageNavArrow = createjs.promote(e, "PageBase")
    }();
this.answerjs = this.answerjs || {},
    function () {
        "use strict";

        function e() {
            this.PageBase_constructor(), this.lib = {}, this.images = {}, this.ss = {}, this.AdobeAn = {}
        }
        var s = createjs.extend(e, answerjs.PageBase);
        s.onAdded = function () {
            this.bg = new createjs.Shape, this.bg.graphics.beginFill("#000000").drawRect(0, 0, answerjs.GameData.DESIGN_PORTRAIT_WIDTH, answerjs.GameData.DESIGN_PORTRAIT_HEIGHT).endFill(), this.addChild(this.bg), this.bg.alpha = .9, this.shareContainer = new createjs.Container, this.addChild(this.shareContainer), new trans_end(this.lib, this.images, createjs, this.ss, this.AdobeAn);
            for (var e = answerjs.queuePreload, s = this.lib.ssMetadata, t = 0; t < s.length; t++) this.ss[s[t].name] = new createjs.SpriteSheet({
                images: [e.getResult(s[t].name)],
                frames: s[t].frames
            });
            this.swf = new this.lib.mc_share, this.swf.parent = this, this.shareContainer.addChild(this.swf), this.alpha = 0, createjs.Tween.get(this).to({
                alpha: 1
            }, 300).call(function () {
                this.clickListener = this.on("click", this.onClose, this)
            }, "", this), this.PageBase_onAdded()
        }, s.onClose = function () {
            this.off("click", this.clickListener), createjs.Tween.get(this).to({
                alpha: 0
            }, 300).call(function () {
                this.clearAllListener(), this.dispatchEvent("close"), this.parent.removeChild(this)
            }, "", this)
        }, s.clearAllListener = function () {
            this.PageBase_clearAllListener()
        }, s.onStageResize = function () {
            this.PageBase_onStageResize(), this.shareContainer && (this.shareContainer.x = this.stage.stageWidth - 210, this.shareContainer.y = 87)
        }, answerjs.PageShare = createjs.promote(e, "PageBase")
    }();
this.answerjs = this.answerjs || {},
    function () {
        "use strict";

        function i() {
            this.PageBase_constructor(), this.spaceX = 20, this.spaceY = 20, this.soundOnImgName = "home_sound_on", this.soundOffImgName = "home_sound_off", this.bgSoundFlag = !1, this.isUseH5Sound = !0
        }
        var t = createjs.extend(i, answerjs.PageBase);
        t.onAdded = function () {
            this.iconSprite = new createjs.Sprite(answerjs.RES.getRes(answerjs.queuePreload, "sheet_home"), "home_sound_on"), this.iconSprite.regX = this.iconSprite.getBounds().width / 2, this.iconSprite.regY = this.iconSprite.getBounds().height / 2, this.iconSprite.x = this.iconSprite.getBounds().width / 2, this.iconSprite.y = this.iconSprite.getBounds().height / 2, this.addChild(this.iconSprite);
            var i = this.iconSprite.getBounds();
            this.btnHit = new createjs.Shape, this.btnHit.graphics.beginFill(16777215).drawRect(0, 0, i.width + 2 * i.width, i.height + 2 * this.spaceY).endFill(), this.addChild(this.btnHit), this.btnHit.x = -this.spaceX, this.btnHit.y = -this.spaceY, this.hitArea = this.btnHit, this.btnHit.visible = !1, this.mouseEnabled = !0, this.x = this.spaceX, this.y = this.spaceY, this.stage.on(answerjs.GameEvent.SOUND_BG_PLAY, this.onSoundPlay, this), this.stage.on(answerjs.GameEvent.SOUND_BG_STOP, this.onSoundStop, this), this.stage.on(answerjs.GameEvent.SOUND_SHOW, this.onShow, this), this.stage.on(answerjs.GameEvent.SOUND_HIDE, this.onHide, this), this.PageBase_onAdded()
        }, t.init = function () {
            answerjs.Utils.isIos() && answerjs.Utils.isWeiXin() ? (this.wxInterval = setInterval(this.checkWeixinJSBridge.bind(this), 200), this.checkWeixinJSBridge()) : (this.initSound(), this.stage.on("click", this.onClickFirst, this, !0)), this.PageBase_onAdded()
        }, t.onClickFirst = function () {
            this.bgSound.paused && this.initSound()
        }, t.checkWeixinJSBridge = function () {
            answerjs.Utils.isWeiXin() && "undefined" != typeof WeixinJSBridge && "undefined" != typeof WeixinJSBridge.invoke && (clearInterval(this.wxInterval), window.WeixinJSBridge.invoke("getNetworkType", {}, function (i) {
                this.initSound()
            }.bind(this)))
        }, t.initSound = function () {
            this.on("click", this.onClick, this), this.bgSoundPlay()
        }, t.onClick = function () {
            this.bgSound.paused ? this.bgSoundPlay() : this.bgSoundStop()
        }, t.onShow = function () {
            this.visible = !0
        }, t.onHide = function () {
            this.visible = !1
        }, t.starAni = function () {
            this.iconSprite.gotoAndStop(this.soundOnImgName), createjs.Tween.removeTweens(this.iconSprite), createjs.Tween.get(this.iconSprite, {
                loop: !0
            }).to({
                rotation: 360
            }, 2e3)
        }, t.stopAni = function () {
            this.iconSprite.gotoAndStop(this.soundOffImgName), createjs.Tween.removeTweens(this.iconSprite), this.iconSprite.rotation = 0
        }, t.onSoundPlay = function () {
            this.bgSoundPlay()
        }, t.onSoundStop = function () {
            this.bgSoundStop()
        }, t.bgSoundPlay = function () {
            if (this.bgSoundFlag = !0, this.isUseH5Sound) {
                if (!this.bgSound) {
                    this.bgSound = document.createElement("audio"), this.bgSound.id = "bgsound", this.bgSound.src = answerjs.Mainfest.preload[0].src, this.bgSound.loop = !0, this.bgSound.class = "hide";
                    var i = document.getElementsByTagName("body")[0];
                    i.appendChild(this.bgSound)
                }
                this.bgSound.paused && this.bgSound.play()
            } else this.bgSound && (this.bgSound = createjs.Sound.stop("sound_bg1")), this.bgSound = createjs.Sound.play("sound_bg1", {
                loop: -1
            });
            this.starAni()
        }, t.bgSoundStop = function () {
            this.bgSoundFlag = !1, this.isUseH5Sound ? this.bgSound && this.bgSound.pause() : this.bgSound && (this.bgSound = createjs.Sound.stop("sound_bg1")), this.stopAni()
        }, t.onStageResize = function () {
            this.PageBase_onStageResize(), this.iconSprite && (this.x = this.stage.stageWidth - this.iconSprite.getBounds().width - this.spaceX)
        }, answerjs.Sound = createjs.promote(i, "PageBase")
    }();
this.answerjs = this.answerjs || {},
    function () {
        "use strict";

        function i(i, t, s) {
            this.EventDispatcher_constructor(), this.bgSoundFlag = !1, this.isUseH5Sound = !0, this.soundSrc = i, this.stage = t, this.isLoop = s, this.init()
        }
        var t = createjs.extend(i, createjs.EventDispatcher);
        t.init = function () {
            answerjs.Utils.isIos() && answerjs.Utils.isWeiXin() ? (this.wxInterval = setInterval(this.checkWeixinJSBridge.bind(this), 200), this.checkWeixinJSBridge()) : (this.initSound(), this.stageListener = this.stage.on("click", this.onClickFirst, this, !0))
        }, t.onClickFirst = function () {
            this.bgSound.paused && this.initSound()
        }, t.checkWeixinJSBridge = function () {
            answerjs.Utils.isWeiXin() && "undefined" != typeof WeixinJSBridge && "undefined" != typeof WeixinJSBridge.invoke && (clearInterval(this.wxInterval), window.WeixinJSBridge.invoke("getNetworkType", {}, function (i) {
                this.initSound()
            }.bind(this)))
        }, t.initSound = function () {
            this.bgSoundPlay()
        }, t.onSoundPlay = function () {
            this.bgSoundPlay()
        }, t.onSoundStop = function () {
            this.bgSoundStop()
        }, t.bgSoundPlay = function () {
            if (this.bgSoundFlag = !0, this.isUseH5Sound) {
                if (!this.bgSound) {
                    this.bgSound = document.createElement("audio"), this.bgSound.src = this.soundSrc, this.bgSound.loop = this.isLoop, this.bgSound.class = "hide";
                    var i = document.getElementsByTagName("body")[0];
                    i.appendChild(this.bgSound)
                }
                this.bgSound.paused && this.bgSound.play()
            } else this.bgSound && (this.bgSound = createjs.Sound.stop(this.soundSrc)), this.bgSound = createjs.Sound.play(this.soundSrc)
        }, t.bgSoundStop = function () {
            this.bgSoundFlag = !1, this.isUseH5Sound ? this.bgSound && this.bgSound.pause() : this.bgSound && (this.bgSound = createjs.Sound.stop(this.soundSrc))
        }, t.clearAllListener = function () {
            this.clearStageClick(), $(this.bgSound).remove()
        }, t.clearStageClick = function () {
            this.stageListener && this.stage.off("click", this.stageListener)
        }, answerjs.SoundEffectFirst = createjs.promote(i, "EventDispatcher")
    }();
this.answerjs = this.answerjs || {},
    function () {
        "use strict";

        function n() {}
        n.trackPageview = function (n) {
            window._hmt && window._hmt.push(["_trackPageview", n]), window.stm_clicki && window.stm_clicki("send", "pageview", n), window.ga && window.ga("send", {
                hitType: "pageview",
                page: n
            })
        }, n.trackEvent = function (n, e, i, t) {
            window._hmt && window._hmt.push(["_trackEvent", n, e, i, t]), window.stm_clicki && window.stm_clicki("send", "event", n, e, i, t, customData), window.ga && window.ga("send", {
                hitType: "event",
                eventCategory: n,
                eventAction: e,
                eventLabel: i,
                eventValue: t
            })
        }, n.miaoZhen = function (n) {
            var e = new Image(1, 1);
            e.onload = e.onerror = function () {}, e.src = n
        }, answerjs.BaiDu = n
    }();

function ready(e) {
    function a(e) {
        if (!isInited) try {
            e.init(), isInited = !0
        } catch (e) {
            console.log("init failed")
        }
    }
    return window.WebViewJavascriptBridge ? (a(WebViewJavascriptBridge), void e(WebViewJavascriptBridge)) : void document.addEventListener("WebViewJavascriptBridgeReady", function () {
        a(WebViewJavascriptBridge), e(WebViewJavascriptBridge)
    }, !1)
}

function setShare(e) {
    ready(function (a) {
        a.callHandler("callNativeMethod", {
            moduleName: "platform",
            methodName: "shareCommon",
            data: {
                channel: e.channel,
                content: e.content,
                "content_-1": e.content,
                content_1: !0,
                detailURL: e.href,
                imageURL: e.imageURL,
                title: e.title
            }
        }, function (a) {
            e.success && e.success(a)
        }), a.callHandler("callNativeMethod", {
            moduleName: "share",
            methodName: "invoke",
            data: {
                channel: e.channel,
                content: e.content,
                "content_-1": e.content,
                content_1: e.content,
                detailURL: e.href || window.location.href,
                imageURL: e.imageURL,
                title: e.title
            }
        }, function (a) {
            e.success && e.success(a)
        })
    })
}

function setKNBShare() {
    clearInterval(KNBInterval), KNB.configShare && KNB.configShare({
        title: answerjs.GameData.wxShareTitle,
        desc: answerjs.GameData.WxShareDesc,
        image: answerjs.GameData.WxShareImg,
        url: answerjs.GameData.baseURL,
        channel: [KNB.share.WECHAT_FRIENDS, KNB.share.WECHAT_TIMELINE],
        handle: function () {}, success: function (e) {}
    }), KNB.share
}
var isInited = !1,
    shareConfig = {
        channel: 385,
        content: answerjs.GameData.WxShareDesc,
        href: answerjs.GameData.WxShareLink,
        imageURL: answerjs.GameData.WxShareImg,
        title: answerjs.GameData.wxShareTitle,
        success: null
    };
setShare(shareConfig);
var KNBInterval = setInterval(function () {
    KNB && KNB.share && (setKNBShare(), console.log("interval"))
}, 100);
this.answerjs = this.answerjs || {},
    function () {
        "use strict";

        function e(e, t) {
            this.EventDispatcher_constructor(), this.serverTimeURL = e || "", this.curServerTime = 0, this.curLocalTime = 0, this.intervalTime = t || 30, this.onTimerBind = this.onTimer.bind(this), this.loadServerTime()
        }
        var t = createjs.extend(e, createjs.EventDispatcher);
        t.startTimer = function () {
            this.changeTimer && clearInterval(this.changeTimer), this.changeTimer = setInterval(this.onTimerBind, this.intervalTime)
        }, t.stopTimer = function () {
            this.changeTimer && clearInterval(this.changeTimer)
        }, t.onTimer = function () {
            this.dispatchEvent(answerjs.GameEvent.CHANGE)
        }, t.getMsec = function () {
            return this.curServerTime + (createjs.Ticker.getTime() - this.curLocalTime)
        }, t.getDate = function () {
            return new Date(this.getMsec())
        }, t.getLastTimeMsec = function (e) {
            var t = new Date(e.year, e.month - 1, e.day, e.hour || 0, e.minute || 0, e.sec || 0, e.msec || 0).getTime();
            return t - this.getMsec()
        }, t.loadServerTime = function () {
            $.ajax({
                url: this.serverTimeURL,
                dataType: "json",
                success: this.onLoadComplete.bind(this),
                error: this.onLoadError.bind(this)
            })
        }, t.onLoadComplete = function (e) {
            this.curServerTime = Number(e), this.curLocalTime = createjs.Ticker.getTime(), this.dispatchEvent(answerjs.GameEvent.COMPLETE)
        }, t.onLoadError = function (e) {
            this.curServerTime = (new Date).getTime(), this.curLocalTime = createjs.Ticker.getTime(), this.dispatchEvent(answerjs.GameEvent.IO_ERROR)
        }, answerjs.ServerTime = createjs.promote(e, "EventDispatcher")
    }();
this.answerjs = this.answerjs || {},
    function () {
        "use strict";

        function n() {}
        n.isWeiXin = function () {
            return navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/)
        }, n.isQQ = function () {
            return navigator.userAgent.ua.match(/QQ\/([\d\.]+)/)
        }, n.isQZone = function () {
            return navigator.userAgent.ua.indexOf("Qzone/") !== -1
        }, n.isIos = function () {
            return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
        }, n.isIPhone = function () {
            return navigator.userAgent.indexOf("iPhone") > -1 || u.indexOf("Mac") > -1
        }, n.isIpad = function () {
            return navigator.userAgent.indexOf("iPad") > -1
        }, n.isAndroid = function () {
            var n = navigator.userAgent;
            return navigator.userAgent.indexOf("Android") > -1 || n.indexOf("Linux") > -1
        }, n.isMobile = function () {
            return null != navigator.userAgent.match(/(iPhone|iPod|Android|ios|SymbianOS)/i)
        }, n.isPortrait = function () {
            if (gulp, !n.isMobile()) return !0;
            if (n.isAndroid() && n.isWeiXin()) return n.windowW() < n.windowH();
            var i = window.orientation;
            return i ? 180 == i || 0 == i || 90 != i && i != -90 && void 0 : n.windowW() < n.windowH()
        }, n.isPortrait2 = function () {
            if (!window.orientation) return 3;
            var n = window.orientation;
            return 180 == n || 0 == n ? 1 : 90 == n || n == -90 ? 2 : void 0
        }, n.windowW = function () {
            return $(window).width()
        }, n.windowH = function () {
            return $(window).height()
        }, n.getQueryString = function (n) {
            var i = new RegExp("(^|&)" + n + "=([^&]*)(&|$)", "i"),
                t = window.location.search.substr(1).match(i);
            return null != t ? decodeURIComponent(t[2]) : ""
        }, n.checkMobile = function (n) {
            var i = /^0{0,1}(1[34578][0-9])\d{8}$/;
            return !!i.test(n)
        }, n.checkEmail = function (n) {
            var i = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
            return i.test(n)
        }, n.mscToHourMintueSec = function (n) {
            var i = n / 1e3,
                t = 86400,
                r = 3600,
                e = {
                    day: Math.floor(i / t),
                    hour: Math.floor(i % t / r),
                    minute: Math.floor(i % t % r / 60),
                    sec: Math.floor(i % t % r % 60)
                };
            return e
        }, n.mscToHourMintueSecStr = function (i) {
            var t = n.mscToHourMintueSec(i);
            return {
                day: t.day + "",
                hour: n.numToFixedLength(t.hour, 2),
                minute: n.numToFixedLength(t.minute, 2),
                sec: n.numToFixedLength(t.sec, 2)
            }
        }, n.numToFixedLength = function (n, i) {
            i = i || 2;
            var t = n.toString(),
                r = i - t.length;
            if (r > 0)
                for (var e = 0; e < r; e++) t = "0" + t;
            return t
        }, answerjs.Utils = n
    }();
this.answerjs = this.answerjs || {},
    function () {
        "use strict";

        function e() {
            this.EventDispatcher_constructor(), this.JSSDKURL = "", this.title = "", this.desc = "", this.link = "", this.imgUrl = "", this.type = "", this.dataUrl = "", this.QQApi = "//open.mobile.qq.com/sdk/qqapi.js?_bid=152", this.QZoneApi = "//qzonestyle.gtimg.cn/qzone/phone/m/v4/widget/mobile/jsbridge.js?_bid=339", this.onCancel = this.onCancelCallback.bind(this)
        }
        var t = createjs.extend(e, createjs.EventDispatcher);
        t.loadJs = function (e, t) {
            var i = document,
                s = i.head || i.getElementsByTagName("head")[0] || i.documentElement,
                n = i.createElement("script");
            n.onload = t, n.onerror = function () {}, n.async = !0, n.src = e[0], s.appendChild(n)
        }, t.init = function (e, t, i) {
            if (answerjs.Utils.isWeiXin()) {
                this.JSSDKURL = e || "", t = t || !1, i = i || !1;
                var s = location.href;
                i && (s = encodeURIComponent(s)), t ? $.ajax({
                    url: this.JSSDKURL,
                    dataType: "jsonp",
                    jsonp: "callback",
                    data: {
                        url: s
                    },
                    success: function (e) {
                        this.onLoadJsonpComplete(e)
                    }.bind(this)
                }) : $.ajax({
                    url: this.JSSDKURL,
                    type: "POST",
                    data: {
                        url: s
                    },
                    success: function (e) {
                        this.onLoadJsonpComplete(e)
                    }.bind(this)
                })
            }
        }, t.onSuccessCallback = function (e) {
            var t = new createjs.Event(answerjs.GameEvent.WX_SUCCESS);
            t.data = e, this.dispatchEvent(t)
        }, t.onCancelCallback = function () {
            this.dispatchEvent(answerjs.GameEvent.WX_CANCEL)
        }, t.onLoadJsonpComplete = function (e) {
            e = JSON.parse(e);
            var t = {
                debug: !1,
                appId: e.appId,
                timestamp: e.timestamp,
                nonceStr: e.nonceStr,
                signature: e.signature,
                jsApiList: answerjs.WxShare.jsApiList
            };
            this.wxConfigReady(t)
        }, t.wxConfigReady = function (e) {
            wx.config(e), wx.ready(function () {
                this.update()
            }.bind(this))
        }, t.update = function () {
            wx.onMenuShareTimeline({
                title: this.desc,
                link: this.link,
                imgUrl: this.imgUrl,
                success: function () {
                    this.onSuccessCallback(answerjs.GameEvent.WX_SHARE_TIMELINE)
                }.bind(this),
                cancel: this.onCancel
            }), wx.onMenuShareAppMessage({
                title: this.title,
                desc: this.desc,
                link: this.link,
                imgUrl: this.imgUrl,
                type: this.type,
                dataUrl: this.dataUrl,
                success: function () {
                    this.onSuccessCallback(answerjs.GameEvent.WX_SHARE_APP_MESSAGE)
                }.bind(this),
                cancel: this.onCancel
            }), wx.onMenuShareQQ({
                title: this.title,
                desc: this.desc,
                link: this.link,
                imgUrl: this.imgUrl,
                success: function () {
                    this.onSuccessCallback(answerjs.GameEvent.WX_SHARE_QQ)
                }.bind(this),
                cancel: this.onCancel
            }), wx.onMenuShareWeibo({
                title: this.title,
                desc: this.desc,
                link: this.link,
                imgUrl: this.imgUrl,
                success: function () {
                    this.onSuccessCallback(answerjs.GameEvent.WX_SHARE_WEIBO)
                }.bind(this),
                cancel: this.onCancel
            }), wx.onMenuShareQZone({
                title: this.title,
                desc: this.desc,
                link: this.link,
                imgUrl: this.imgUrl,
                success: function () {
                    this.onSuccessCallback(answerjs.GameEvent.WX_SHARE_QZONE)
                }.bind(this),
                cancel: this.onCancel
            })
        }, t.initQQ = function (e) {
            window.mqq ? this.doQQShare(e) : this.loadJs([this.QQApi], this.doQQShare(e).bind(this))
        }, t.doQQShare = function (e) {
            var t = {
                title: e.title,
                desc: e.summary,
                share_url: e.url,
                image_url: e.pic
            };
            try {
                e.callback ? window.mqq.ui.setOnShareHandler(function (i) {
                    3 == i && (e.swapTitle || e.WXconfig && e.WXconfig.swapTitleInWX) ? t.title = e.summary : t.title = e.title, t.share_type = i, t.back = !0, window.mqq.ui.shareMessage(t, function (t) {
                        0 === t.retCode && e.callback && e.callback.call(this, t)
                    })
                }) : window.mqq.data.setShareInfo(t)
            } catch (e) {}
        }, t.initQZone = function () {
            window.QZAppExternal ? this.doQZoneShare() : this.loadJs([this.QZoneApi], this.doQZShare().bind(this))
        }, t.doQZoneShare = function (e) {
            if (QZAppExternal && QZAppExternal.setShare) {
                for (var t = [], i = [], s = [], n = [], a = 0; a < 5; a++) t.push(e.pic), n.push(e.url), 4 === a && (e.swapTitle || e.WXconfig && e.WXconfig.swapTitleInWX) ? (i.push(e.summary), s.push(e.title)) : (i.push(e.title), s.push(e.summary));
                QZAppExternal.setShare(function (e) {}, {
                    type: "share",
                    image: t,
                    title: i,
                    summary: s,
                    shareURL: n
                })
            }
        }, e.jsApiList = ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo"], answerjs.WxShare = createjs.promote(e, "EventDispatcher")
    }();
this.answerjs = this.answerjs || {},
    function () {
        "use strict";

        function e(e) {
            this.EventDispatcher_constructor(), this.canvasID = e || "canvas", this.stage = null, this.uiLayer = null, this.init()
        }
        var s = createjs.extend(e, createjs.EventDispatcher);
        s.init = function () {
            answerjs.GameData.initAPI(), this.stage = new createjs.Stage(this.canvasID), createjs.Ticker.addEventListener("tick", this.stage), createjs.Ticker.framerate = 30, createjs.Touch.enable(this.stage), this.uiLayer = new createjs.Container, this.stage.addChild(this.uiLayer), this.loadLoading(), this.initWX(), this.oldOrientation = answerjs.Utils.isPortrait2(), this.orientationChange = !1, window.addEventListener("resize", this.onStageResize.bind(this)), window.addEventListener("orientationchange", this.onOrientationChange.bind(this)), this.onStageResize()
        }, s.initWX = function () {
            answerjs.wx = new answerjs.WxShare, answerjs.wx.title = answerjs.GameData.wxShareTitle, answerjs.wx.desc = answerjs.GameData.WxShareDesc, answerjs.wx.link = answerjs.GameData.WxShareLink, answerjs.wx.imgUrl = answerjs.GameData.WxShareImg, answerjs.wx.init(answerjs.GameData.wxJssdkURL, !1, !1), answerjs.wx.on(answerjs.GameEvent.WX_SUCCESS, this.onWxShareSuccess, this)
        }, s.onWxShareSuccess = function (e) {
            answerjs.BaiDu.trackEvent("wx_share", e.data, e.data, 1)
        }, s.loadLoading = function () {
            answerjs.queueLoading = new createjs.LoadQueue((!1)), answerjs.queueLoading.on("fileload", this.loadLoadingFileload, this), answerjs.queueLoading.on("complete", this.loadLoadingComplete, this), answerjs.queueLoading.loadManifest(answerjs.Mainfest.loading)
        }, s.loadLoadingFileload = function (e) {}, s.loadLoadingComplete = function (e) {
            this.initLoadingUI(), this.loadPreload()
        }, s.loadPreload = function () {
            answerjs.queuePreload = new createjs.LoadQueue((!1)), answerjs.queuePreload.installPlugin(createjs.Sound), createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin]), createjs.Sound.alternateExtensions = ["mp3"], answerjs.queuePreload.on("fileload", this.loadPreloadFileload, this), answerjs.queuePreload.on("complete", this.loadProloadComplete, this), answerjs.queuePreload.on("progress", this.loadPreloadProgress, this), answerjs.queuePreload.loadManifest(answerjs.Mainfest.preload)
        }, s.loadPreloadFileload = function (e) {}, s.loadProloadComplete = function (e) {}, s.loadPreloadProgress = function (e) {
            this.loadingUI.setProgress(e.progress)
        }, s.initLoadingUI = function () {
            this.loadingUI = new answerjs.Loading, this.uiLayer.addChild(this.loadingUI), this.loadingUI.on("complete", this.startCreateScene, this), this.curPage = this.loadingUI
        }, s.startCreateScene = function () {
            this.showHome(), this.showOtherPanel(), this.initPageNavArrow()
        }, s.showOtherPanel = function () {
            this.soundUI = new answerjs.Sound, this.stage.addChild(this.soundUI), this.soundUI.visible = !1
        }, s.initPageNavArrow = function () {
            this.pageNavArrow = new answerjs.PageNavArrow(14), this.stage.addChild(this.pageNavArrow)
        }, s.showPageNavArrow = function () {
            this.stage.dispatchEvent(new createjs.Event(answerjs.GameEvent.PAGE_NAV_ARROW_SHOW))
        }, s.hidePageNavArrow = function () {
            this.stage.dispatchEvent(new createjs.Event(answerjs.GameEvent.PAGE_NAV_ARROW_HIDE))
        }, s.showPage = function (e, s) {
            this.hidePageNavArrow();
            var a, t = answerjs[e];
            a = null == s ? new t : new t(s), this.uiLayer.addChild(a);
            var n = this.curPage;
            return a.alpha = 0, createjs.Tween.get(a).to({
                alpha: 1
            }, 500).call(function () {
                this.showPageComplete(n)
            }, "", this), this.curPage = a, answerjs.BaiDu.trackPageview("/" + e), a
        }, s.showPageComplete = function (e) {
            e.clearAllListener && e.clearAllListener(), this.uiLayer.removeChild(e), this.curPage.onShowNavArrow() && this.showPageNavArrow(), this.curPage.pageInComplete()
        }, s.showHome = function () {
            var e = this.showPage("Home");
            e.on(answerjs.GameEvent.NEXT_STEP, this.showPage1, this, !0)
        }, s.showPage1 = function () {
            var e = this.showPage("Page1");
            e.on(answerjs.GameEvent.NEXT_STEP, this.showPage2, this, !0), this.soundUI.init();
            var s = new createjs.Event(answerjs.GameEvent.SOUND_SHOW);
            this.stage.dispatchEvent(s)
        }, s.showPage2 = function () {
            var e = this.showPage("Page2");
            e.on(answerjs.GameEvent.NEXT_STEP, this.showPageAward, this, !0)
        }, s.showPageAward = function (e) {
            var s = this.showPage("PageAward", e.data);
            s.on(answerjs.GameEvent.NEXT_STEP, this.showAgain, this, !0)
        }, s.showAgain = function () {
            this.stage.dispatchEvent(answerjs.GameEvent.SOUND_BG_STOP), this.stage.dispatchEvent(answerjs.GameEvent.SOUND_HIDE), this.showHome()
        }, s.onStageResize = function (e) {
            answerjs.GameData.isInputState || this.onStageResize2()
        }, s.onOrientationChange = function () {}, s.onStageResize2 = function () {
            var e, s = answerjs.Utils.windowW(),
                a = answerjs.Utils.windowH(),
                t = answerjs.GameData.DESIGN_PORTRAIT_WIDTH,
                n = answerjs.GameData.DESIGN_PORTRAIT_HEIGHT;
            e = answerjs.Utils.isMobile() ? s < a : !(s > t) && s < a;
            var i, r, o, h, w;
            e ? (i = .5, h = s / i, w = a / i, r = 0, o = 0) : (i = a / n, h = t, w = n, r = (s - t * i) / 2, o = (a - n * i) / 2), $("#" + this.canvasID).attr({
                width: h + "px",
                height: w + "px"
            }), $("#" + this.canvasID).css({
                position: "absolute",
                left: r + "px",
                top: o + "px",
                "transform-origin": "0 0",
                "-ms-transform-origin": "0 0",
                "-moz-transform-origin": "0 0",
                "-webkit-transform-origin": "0 0",
                transform: "scale(" + i + "," + i + ")",
                "-ms-transform": "scale(" + i + "," + i + ")",
                "-moz-transform": "scale(" + i + "," + i + ")",
                "-webkit-transform": "scale(" + i + "," + i + ")"
            }), $("#reg").attr({
                width: h + "px",
                height: w + "px"
            }), $("#reg").css({
                position: "absolute",
                left: r + "px",
                top: o + "px",
                "transform-origin": "0 0",
                "-ms-transform-origin": "0 0",
                "-moz-transform-origin": "0 0",
                "-webkit-transform-origin": "0 0",
                transform: "scale(" + i + "," + i + ")",
                "-ms-transform": "scale(" + i + "," + i + ")",
                "-moz-transform": "scale(" + i + "," + i + ")",
                "-webkit-transform": "scale(" + i + "," + i + ")"
            });
            var l = 507,
                d = 899,
                g = 1.04;
            r = (h - l * g) / 2, o = (w - d * g) / 2, $(".reg-bg").css({
                position: "absolute",
                left: r + "px",
                top: o + "px",
                "transform-origin": "0 0",
                "-ms-transform-origin": "0 0",
                "-moz-transform-origin": "0 0",
                "-webkit-transform-origin": "0 0",
                transform: "scale(" + g + "," + g + ")",
                "-ms-transform": "scale(" + g + "," + g + ")",
                "-moz-transform": "scale(" + g + "," + g + ")",
                "-webkit-transform": "scale(" + g + "," + g + ")"
            });
            var c = new createjs.Event(answerjs.GameEvent.RESIZE);
            this.stage.stageWidth = h, this.stage.stageHeight = w, this.stage.dispatchEvent(c)
        }, answerjs.Main = createjs.promote(e, "EventDispatcher")
    }();
this.answerjs = this.answerjs || {},
    function () {
        "use strict";

        function e() {}
        e.getRes = function (e, t, s) {
            return s ? new createjs.Sprite(e.getResult(t), s) : e.getResult(t)
        }, answerjs.RES = e
    }();
this.answerjs = this.answerjs || {},
    function () {
        "use strict";

        function t(t, s, i) {
            this.EventDispatcher_constructor(), this.stage = t, this.isStopPropagation = s || !1, this.maxDist = i || 10, this.touchBegin = null, this.touchEnd = null
        }
        var s = createjs.extend(t, createjs.EventDispatcher);
        s.startListener = function () {
            this.stopListener(), this.touchBegin = this.stage.on("mousedown", this.onTouchBegin, this), this.touchEnd = this.stage.on("pressup", this.onTouchEnd, this)
        }, s.stopListener = function () {
            this.touchBegin && this.stage.off("mousedown", this.touchBegin), this.touchEnd && this.stage.off("pressup", this.touchEnd)
        }, s.onTouchBegin = function (t) {
            this.touchID = t.pointerID, this.beginPoint = {
                x: t.stageX,
                y: t.stageY
            }, this.isStopPropagation
        }, s.stopPropagation = function (t) {
            this.isStopPropagation && t.stopPropagation()
        }, s.onTouchEnd = function (t) {
            if (this.touchID == t.pointerID) {
                var s = t.stageX - this.beginPoint.x,
                    i = t.stageY - this.beginPoint.y;
                s > this.maxDist && (this.dispatchEvent(answerjs.GameEvent.PAGE_RIGHT), this.stopPropagation(t)), s < -this.maxDist && (this.dispatchEvent(answerjs.GameEvent.PAGE_LEFT), this.stopPropagation(t)), i > this.maxDist && this.dispatchEvent(answerjs.GameEvent.PAGE_PREV), i < -this.maxDist && this.dispatchEvent(answerjs.GameEvent.PAGE_NEXT)
            }
        }, answerjs.TouchMoveTurnPage = createjs.promote(t, "EventDispatcher")
    }();