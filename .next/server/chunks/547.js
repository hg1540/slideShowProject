exports.id = 547;
exports.ids = [547];
exports.modules = {

/***/ 9547:
/***/ (() => {

/*! jQuery UI - v1.9.0 - 2012-10-05
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */ (function(e1, t1) {
    function i1(t1, n1) {
        var r1, i1, o1, u1 = t1.nodeName.toLowerCase();
        return "area" === u1 ? (r1 = t1.parentNode, i1 = r1.name, !t1.href || !i1 || r1.nodeName.toLowerCase() !== "map" ? !1 : (o1 = e1("img[usemap=#" + i1 + "]")[0], !!o1 && s1(o1))) : (/input|select|textarea|button|object/.test(u1) ? !t1.disabled : "a" === u1 ? t1.href || n1 : n1) && s1(t1);
    }
    function s1(t1) {
        return !e1(t1).parents().andSelf().filter(function() {
            return e1.css(this, "visibility") === "hidden" || e1.expr.filters.hidden(this);
        }).length;
    }
    var n1 = 0, r1 = /^ui-id-\d+$/;
    e1.ui = e1.ui || {};
    if (e1.ui.version) return;
    e1.extend(e1.ui, {
        version: "1.9.0",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e1.fn.extend({
        _focus: e1.fn.focus,
        focus: function(t1, n1) {
            return typeof t1 == "number" ? this.each(function() {
                var r1 = this;
                setTimeout(function() {
                    e1(r1).focus(), n1 && n1.call(r1);
                }, t1);
            }) : this._focus.apply(this, arguments);
        },
        scrollParent: function() {
            var t1;
            return e1.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? t1 = this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e1.css(this, "position")) && /(auto|scroll)/.test(e1.css(this, "overflow") + e1.css(this, "overflow-y") + e1.css(this, "overflow-x"));
            }).eq(0) : t1 = this.parents().filter(function() {
                return /(auto|scroll)/.test(e1.css(this, "overflow") + e1.css(this, "overflow-y") + e1.css(this, "overflow-x"));
            }).eq(0), /fixed/.test(this.css("position")) || !t1.length ? e1(document) : t1;
        },
        zIndex: function(n1) {
            if (n1 !== t1) return this.css("zIndex", n1);
            if (this.length) {
                var r1 = e1(this[0]), i1, s1;
                while(r1.length && r1[0] !== document){
                    i1 = r1.css("position");
                    if (i1 === "absolute" || i1 === "relative" || i1 === "fixed") {
                        s1 = parseInt(r1.css("zIndex"), 10);
                        if (!isNaN(s1) && s1 !== 0) return s1;
                    }
                    r1 = r1.parent();
                }
            }
            return 0;
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++n1);
            });
        },
        removeUniqueId: function() {
            return this.each(function() {
                r1.test(this.id) && e1(this).removeAttr("id");
            });
        }
    }), e1("<a>").outerWidth(1).jquery || e1.each([
        "Width",
        "Height"
    ], function(n1, r1) {
        function u1(t1, n1, r1, s1) {
            return e1.each(i1, function() {
                n1 -= parseFloat(e1.css(t1, "padding" + this)) || 0, r1 && (n1 -= parseFloat(e1.css(t1, "border" + this + "Width")) || 0), s1 && (n1 -= parseFloat(e1.css(t1, "margin" + this)) || 0);
            }), n1;
        }
        var i1 = r1 === "Width" ? [
            "Left",
            "Right"
        ] : [
            "Top",
            "Bottom"
        ], s1 = r1.toLowerCase(), o1 = {
            innerWidth: e1.fn.innerWidth,
            innerHeight: e1.fn.innerHeight,
            outerWidth: e1.fn.outerWidth,
            outerHeight: e1.fn.outerHeight
        };
        e1.fn["inner" + r1] = function(n1) {
            return n1 === t1 ? o1["inner" + r1].call(this) : this.each(function() {
                e1(this).css(s1, u1(this, n1) + "px");
            });
        }, e1.fn["outer" + r1] = function(t1, n1) {
            return typeof t1 != "number" ? o1["outer" + r1].call(this, t1) : this.each(function() {
                e1(this).css(s1, u1(this, t1, !0, n1) + "px");
            });
        };
    }), e1.extend(e1.expr[":"], {
        data: e1.expr.createPseudo ? e1.expr.createPseudo(function(t1) {
            return function(n1) {
                return !!e1.data(n1, t1);
            };
        }) : function(t1, n1, r1) {
            return !!e1.data(t1, r1[3]);
        },
        focusable: function(t1) {
            return i1(t1, !isNaN(e1.attr(t1, "tabindex")));
        },
        tabbable: function(t1) {
            var n1 = e1.attr(t1, "tabindex"), r1 = isNaN(n1);
            return (r1 || n1 >= 0) && i1(t1, !r1);
        }
    }), e1(function() {
        var t1 = document.body, n1 = t1.appendChild(n1 = document.createElement("div"));
        n1.offsetHeight, e1.extend(n1.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }), e1.support.minHeight = n1.offsetHeight === 100, e1.support.selectstart = "onselectstart" in n1, t1.removeChild(n1).style.display = "none";
    }), e1.fn.extend({
        disableSelection: function() {
            return this.bind((e1.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e1) {
                e1.preventDefault();
            });
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection");
        }
    }), e1.extend(e1.ui, {
        plugin: {
            add: function(t1, n1, r1) {
                var i1, s1 = e1.ui[t1].prototype;
                for(i1 in r1)s1.plugins[i1] = s1.plugins[i1] || [], s1.plugins[i1].push([
                    n1,
                    r1[i1]
                ]);
            },
            call: function(e1, t1, n1) {
                var r1, i1 = e1.plugins[t1];
                if (!i1 || !e1.element[0].parentNode || e1.element[0].parentNode.nodeType === 11) return;
                for(r1 = 0; r1 < i1.length; r1++)e1.options[i1[r1][0]] && i1[r1][1].apply(e1.element, n1);
            }
        },
        contains: e1.contains,
        hasScroll: function(t1, n1) {
            if (e1(t1).css("overflow") === "hidden") return !1;
            var r1 = n1 && n1 === "left" ? "scrollLeft" : "scrollTop", i1 = !1;
            return t1[r1] > 0 ? !0 : (t1[r1] = 1, i1 = t1[r1] > 0, t1[r1] = 0, i1);
        },
        isOverAxis: function(e1, t1, n1) {
            return e1 > t1 && e1 < t1 + n1;
        },
        isOver: function(t1, n1, r1, i1, s1, o1) {
            return e1.ui.isOverAxis(t1, r1, s1) && e1.ui.isOverAxis(n1, i1, o1);
        }
    });
})(jQuery), function(e1, t1) {
    var n1 = 0, r1 = Array.prototype.slice, i1 = e1.cleanData;
    e1.cleanData = function(t1) {
        for(var n1 = 0, r1; (r1 = t1[n1]) != null; n1++)try {
            e1(r1).triggerHandler("remove");
        } catch (s1) {}
        i1(t1);
    }, e1.widget = function(t1, n1, r1) {
        var i1, s1, o1, u1, a1 = t1.split(".")[0];
        t1 = t1.split(".")[1], i1 = a1 + "-" + t1, r1 || (r1 = n1, n1 = e1.Widget), e1.expr[":"][i1.toLowerCase()] = function(t1) {
            return !!e1.data(t1, i1);
        }, e1[a1] = e1[a1] || {}, s1 = e1[a1][t1], o1 = e1[a1][t1] = function(e1, t1) {
            if (!this._createWidget) return new o1(e1, t1);
            arguments.length && this._createWidget(e1, t1);
        }, e1.extend(o1, s1, {
            version: r1.version,
            _proto: e1.extend({}, r1),
            _childConstructors: []
        }), u1 = new n1, u1.options = e1.widget.extend({}, u1.options), e1.each(r1, function(t1, i1) {
            e1.isFunction(i1) && (r1[t1] = function() {
                var e1 = function() {
                    return n1.prototype[t1].apply(this, arguments);
                }, r1 = function(e1) {
                    return n1.prototype[t1].apply(this, e1);
                };
                return function() {
                    var t1 = this._super, n1 = this._superApply, s1;
                    return this._super = e1, this._superApply = r1, s1 = i1.apply(this, arguments), this._super = t1, this._superApply = n1, s1;
                };
            }());
        }), o1.prototype = e1.widget.extend(u1, {
            widgetEventPrefix: t1
        }, r1, {
            constructor: o1,
            namespace: a1,
            widgetName: t1,
            widgetBaseClass: i1,
            widgetFullName: i1
        }), s1 ? (e1.each(s1._childConstructors, function(t1, n1) {
            var r1 = n1.prototype;
            e1.widget(r1.namespace + "." + r1.widgetName, o1, n1._proto);
        }), delete s1._childConstructors) : n1._childConstructors.push(o1), e1.widget.bridge(t1, o1);
    }, e1.widget.extend = function(n1) {
        var i1 = r1.call(arguments, 1), s1 = 0, o1 = i1.length, u1, a1;
        for(; s1 < o1; s1++)for(u1 in i1[s1])a1 = i1[s1][u1], i1[s1].hasOwnProperty(u1) && a1 !== t1 && (n1[u1] = e1.isPlainObject(a1) ? e1.widget.extend({}, n1[u1], a1) : a1);
        return n1;
    }, e1.widget.bridge = function(n1, i1) {
        var s1 = i1.prototype.widgetFullName;
        e1.fn[n1] = function(o1) {
            var u1 = typeof o1 == "string", a1 = r1.call(arguments, 1), f1 = this;
            return o1 = !u1 && a1.length ? e1.widget.extend.apply(null, [
                o1
            ].concat(a1)) : o1, u1 ? this.each(function() {
                var r1, i1 = e1.data(this, s1);
                if (!i1) return e1.error("cannot call methods on " + n1 + " prior to initialization; " + "attempted to call method '" + o1 + "'");
                if (!e1.isFunction(i1[o1]) || o1.charAt(0) === "_") return e1.error("no such method '" + o1 + "' for " + n1 + " widget instance");
                r1 = i1[o1].apply(i1, a1);
                if (r1 !== i1 && r1 !== t1) return f1 = r1 && r1.jquery ? f1.pushStack(r1.get()) : r1, !1;
            }) : this.each(function() {
                var t1 = e1.data(this, s1);
                t1 ? t1.option(o1 || {})._init() : new i1(o1, this);
            }), f1;
        };
    }, e1.Widget = function(e1, t1) {}, e1.Widget._childConstructors = [], e1.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t1, r1) {
            r1 = e1(r1 || this.defaultElement || this)[0], this.element = e1(r1), this.uuid = n1++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e1.widget.extend({}, this.options, this._getCreateOptions(), t1), this.bindings = e1(), this.hoverable = e1(), this.focusable = e1(), r1 !== this && (e1.data(r1, this.widgetName, this), e1.data(r1, this.widgetFullName, this), this._on({
                remove: "destroy"
            }), this.document = e1(r1.style ? r1.ownerDocument : r1.document || r1), this.window = e1(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init();
        },
        _getCreateOptions: e1.noop,
        _getCreateEventData: e1.noop,
        _create: e1.noop,
        _init: e1.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e1.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus");
        },
        _destroy: e1.noop,
        widget: function() {
            return this.element;
        },
        option: function(n1, r1) {
            var i1 = n1, s1, o1, u1;
            if (arguments.length === 0) return e1.widget.extend({}, this.options);
            if (typeof n1 == "string") {
                i1 = {}, s1 = n1.split("."), n1 = s1.shift();
                if (s1.length) {
                    o1 = i1[n1] = e1.widget.extend({}, this.options[n1]);
                    for(u1 = 0; u1 < s1.length - 1; u1++)o1[s1[u1]] = o1[s1[u1]] || {}, o1 = o1[s1[u1]];
                    n1 = s1.pop();
                    if (r1 === t1) return o1[n1] === t1 ? null : o1[n1];
                    o1[n1] = r1;
                } else {
                    if (r1 === t1) return this.options[n1] === t1 ? null : this.options[n1];
                    i1[n1] = r1;
                }
            }
            return this._setOptions(i1), this;
        },
        _setOptions: function(e1) {
            var t1;
            for(t1 in e1)this._setOption(t1, e1[t1]);
            return this;
        },
        _setOption: function(e1, t1) {
            return this.options[e1] = t1, e1 === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t1).attr("aria-disabled", t1), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this;
        },
        enable: function() {
            return this._setOption("disabled", !1);
        },
        disable: function() {
            return this._setOption("disabled", !0);
        },
        _on: function(t1, n1) {
            n1 ? (t1 = e1(t1), this.bindings = this.bindings.add(t1)) : (n1 = t1, t1 = this.element);
            var r1 = this;
            e1.each(n1, function(n1, i1) {
                function s1() {
                    if (r1.options.disabled === !0 || e1(this).hasClass("ui-state-disabled")) return;
                    return (typeof i1 == "string" ? r1[i1] : i1).apply(r1, arguments);
                }
                typeof i1 != "string" && (s1.guid = i1.guid = i1.guid || s1.guid || e1.guid++);
                var o1 = n1.match(/^(\w+)\s*(.*)$/), u1 = o1[1] + r1.eventNamespace, a1 = o1[2];
                a1 ? r1.widget().delegate(a1, u1, s1) : t1.bind(u1, s1);
            });
        },
        _off: function(e1, t1) {
            t1 = (t1 || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e1.unbind(t1).undelegate(t1);
        },
        _delay: function(e1, t1) {
            function n1() {
                return (typeof e1 == "string" ? r1[e1] : e1).apply(r1, arguments);
            }
            var r1 = this;
            return setTimeout(n1, t1 || 0);
        },
        _hoverable: function(t1) {
            this.hoverable = this.hoverable.add(t1), this._on(t1, {
                mouseenter: function(t1) {
                    e1(t1.currentTarget).addClass("ui-state-hover");
                },
                mouseleave: function(t1) {
                    e1(t1.currentTarget).removeClass("ui-state-hover");
                }
            });
        },
        _focusable: function(t1) {
            this.focusable = this.focusable.add(t1), this._on(t1, {
                focusin: function(t1) {
                    e1(t1.currentTarget).addClass("ui-state-focus");
                },
                focusout: function(t1) {
                    e1(t1.currentTarget).removeClass("ui-state-focus");
                }
            });
        },
        _trigger: function(t1, n1, r1) {
            var i1, s1, o1 = this.options[t1];
            r1 = r1 || {}, n1 = e1.Event(n1), n1.type = (t1 === this.widgetEventPrefix ? t1 : this.widgetEventPrefix + t1).toLowerCase(), n1.target = this.element[0], s1 = n1.originalEvent;
            if (s1) for(i1 in s1)i1 in n1 || (n1[i1] = s1[i1]);
            return this.element.trigger(n1, r1), !(e1.isFunction(o1) && o1.apply(this.element[0], [
                n1
            ].concat(r1)) === !1 || n1.isDefaultPrevented());
        }
    }, e1.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t1, n1) {
        e1.Widget.prototype["_" + t1] = function(r1, i1, s1) {
            typeof i1 == "string" && (i1 = {
                effect: i1
            });
            var o1, u1 = i1 ? i1 === !0 || typeof i1 == "number" ? n1 : i1.effect || n1 : t1;
            i1 = i1 || {}, typeof i1 == "number" && (i1 = {
                duration: i1
            }), o1 = !e1.isEmptyObject(i1), i1.complete = s1, i1.delay && r1.delay(i1.delay), o1 && e1.effects && (e1.effects.effect[u1] || e1.uiBackCompat !== !1 && e1.effects[u1]) ? r1[t1](i1) : u1 !== t1 && r1[u1] ? r1[u1](i1.duration, i1.easing, s1) : r1.queue(function(n1) {
                e1(this)[t1](), s1 && s1.call(r1[0]), n1();
            });
        };
    }), e1.uiBackCompat !== !1 && (e1.Widget.prototype._getCreateOptions = function() {
        return e1.metadata && e1.metadata.get(this.element[0])[this.widgetName];
    });
}(jQuery), function(e1, t1) {
    var n1 = !1;
    e1(document).mouseup(function(e1) {
        n1 = !1;
    }), e1.widget("ui.mouse", {
        version: "1.9.0",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t1 = this;
            this.element.bind("mousedown." + this.widgetName, function(e1) {
                return t1._mouseDown(e1);
            }).bind("click." + this.widgetName, function(n1) {
                if (!0 === e1.data(n1.target, t1.widgetName + ".preventClickEvent")) return e1.removeData(n1.target, t1.widgetName + ".preventClickEvent"), n1.stopImmediatePropagation(), !1;
            }), this.started = !1;
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e1(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function(t1) {
            if (n1) return;
            this._mouseStarted && this._mouseUp(t1), this._mouseDownEvent = t1;
            var r1 = this, i1 = t1.which === 1, s1 = typeof this.options.cancel == "string" && t1.target.nodeName ? e1(t1.target).closest(this.options.cancel).length : !1;
            if (!i1 || s1 || !this._mouseCapture(t1)) return !0;
            this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                r1.mouseDelayMet = !0;
            }, this.options.delay));
            if (this._mouseDistanceMet(t1) && this._mouseDelayMet(t1)) {
                this._mouseStarted = this._mouseStart(t1) !== !1;
                if (!this._mouseStarted) return t1.preventDefault(), !0;
            }
            return !0 === e1.data(t1.target, this.widgetName + ".preventClickEvent") && e1.removeData(t1.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e1) {
                return r1._mouseMove(e1);
            }, this._mouseUpDelegate = function(e1) {
                return r1._mouseUp(e1);
            }, e1(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t1.preventDefault(), n1 = !0, !0;
        },
        _mouseMove: function(t1) {
            return !e1.browser.msie || document.documentMode >= 9 || !!t1.button ? this._mouseStarted ? (this._mouseDrag(t1), t1.preventDefault()) : (this._mouseDistanceMet(t1) && this._mouseDelayMet(t1) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t1) !== !1, this._mouseStarted ? this._mouseDrag(t1) : this._mouseUp(t1)), !this._mouseStarted) : this._mouseUp(t1);
        },
        _mouseUp: function(t1) {
            return e1(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t1.target === this._mouseDownEvent.target && e1.data(t1.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t1)), !1;
        },
        _mouseDistanceMet: function(e1) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e1.pageX), Math.abs(this._mouseDownEvent.pageY - e1.pageY)) >= this.options.distance;
        },
        _mouseDelayMet: function(e1) {
            return this.mouseDelayMet;
        },
        _mouseStart: function(e1) {},
        _mouseDrag: function(e1) {},
        _mouseStop: function(e1) {},
        _mouseCapture: function(e1) {
            return !0;
        }
    });
}(jQuery), function(e1, t1) {
    e1.widget("ui.draggable", e1.ui.mouse, {
        version: "1.9.0",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1
        },
        _create: function() {
            this.options.helper == "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit();
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy();
        },
        _mouseCapture: function(t1) {
            var n1 = this.options;
            return this.helper || n1.disabled || e1(t1.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(t1), this.handle ? (e1(n1.iframeFix === !0 ? "iframe" : n1.iframeFix).each(function() {
                e1('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(e1(this).offset()).appendTo("body");
            }), !0) : !1);
        },
        _mouseStart: function(t1) {
            var n1 = this.options;
            return this.helper = this._createHelper(t1), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e1.ui.ddmanager && (e1.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, e1.extend(this.offset, {
                click: {
                    left: t1.pageX - this.offset.left,
                    top: t1.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(t1), this.originalPageX = t1.pageX, this.originalPageY = t1.pageY, n1.cursorAt && this._adjustOffsetFromHelper(n1.cursorAt), n1.containment && this._setContainment(), this._trigger("start", t1) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e1.ui.ddmanager && !n1.dropBehaviour && e1.ui.ddmanager.prepareOffsets(this, t1), this._mouseDrag(t1, !0), e1.ui.ddmanager && e1.ui.ddmanager.dragStart(this, t1), !0);
        },
        _mouseDrag: function(t1, n1) {
            this.position = this._generatePosition(t1), this.positionAbs = this._convertPositionTo("absolute");
            if (!n1) {
                var r1 = this._uiHash();
                if (this._trigger("drag", t1, r1) === !1) return this._mouseUp({}), !1;
                this.position = r1.position;
            }
            if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
            return e1.ui.ddmanager && e1.ui.ddmanager.drag(this, t1), !1;
        },
        _mouseStop: function(t1) {
            var n1 = !1;
            e1.ui.ddmanager && !this.options.dropBehaviour && (n1 = e1.ui.ddmanager.drop(this, t1)), this.dropped && (n1 = this.dropped, this.dropped = !1);
            var r1 = this.element[0], i1 = !1;
            while(r1 && (r1 = r1.parentNode))r1 == document && (i1 = !0);
            if (!i1 && this.options.helper === "original") return !1;
            if (this.options.revert == "invalid" && !n1 || this.options.revert == "valid" && n1 || this.options.revert === !0 || e1.isFunction(this.options.revert) && this.options.revert.call(this.element, n1)) {
                var s1 = this;
                e1(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    s1._trigger("stop", t1) !== !1 && s1._clear();
                });
            } else this._trigger("stop", t1) !== !1 && this._clear();
            return !1;
        },
        _mouseUp: function(t1) {
            return e1("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this);
            }), e1.ui.ddmanager && e1.ui.ddmanager.dragStop(this, t1), e1.ui.mouse.prototype._mouseUp.call(this, t1);
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this;
        },
        _getHandle: function(t1) {
            var n1 = !this.options.handle || !e1(this.options.handle, this.element).length ? !0 : !1;
            return e1(this.options.handle, this.element).find("*").andSelf().each(function() {
                this == t1.target && (n1 = !0);
            }), n1;
        },
        _createHelper: function(t1) {
            var n1 = this.options, r1 = e1.isFunction(n1.helper) ? e1(n1.helper.apply(this.element[0], [
                t1
            ])) : n1.helper == "clone" ? this.element.clone().removeAttr("id") : this.element;
            return r1.parents("body").length || r1.appendTo(n1.appendTo == "parent" ? this.element[0].parentNode : n1.appendTo), r1[0] != this.element[0] && !/(fixed|absolute)/.test(r1.css("position")) && r1.css("position", "absolute"), r1;
        },
        _adjustOffsetFromHelper: function(t1) {
            typeof t1 == "string" && (t1 = t1.split(" ")), e1.isArray(t1) && (t1 = {
                left: +t1[0],
                top: +t1[1] || 0
            }), "left" in t1 && (this.offset.click.left = t1.left + this.margins.left), "right" in t1 && (this.offset.click.left = this.helperProportions.width - t1.right + this.margins.left), "top" in t1 && (this.offset.click.top = t1.top + this.margins.top), "bottom" in t1 && (this.offset.click.top = this.helperProportions.height - t1.bottom + this.margins.top);
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t1 = this.offsetParent.offset();
            this.cssPosition == "absolute" && this.scrollParent[0] != document && e1.contains(this.scrollParent[0], this.offsetParent[0]) && (t1.left += this.scrollParent.scrollLeft(), t1.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && e1.browser.msie) t1 = {
                top: 0,
                left: 0
            };
            return {
                top: t1.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t1.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if (this.cssPosition == "relative") {
                var e1 = this.element.position();
                return {
                    top: e1.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e1.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                };
            }
            return {
                top: 0,
                left: 0
            };
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },
        _setContainment: function() {
            var t1 = this.options;
            t1.containment == "parent" && (t1.containment = this.helper[0].parentNode);
            if (t1.containment == "document" || t1.containment == "window") this.containment = [
                t1.containment == "document" ? 0 : e1(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
                t1.containment == "document" ? 0 : e1(window).scrollTop() - this.offset.relative.top - this.offset.parent.top,
                (t1.containment == "document" ? 0 : e1(window).scrollLeft()) + e1(t1.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left,
                (t1.containment == "document" ? 0 : e1(window).scrollTop()) + (e1(t1.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
            ];
            if (!/^(document|window|parent)$/.test(t1.containment) && t1.containment.constructor != Array) {
                var n1 = e1(t1.containment), r1 = n1[0];
                if (!r1) return;
                var i1 = n1.offset(), s1 = e1(r1).css("overflow") != "hidden";
                this.containment = [
                    (parseInt(e1(r1).css("borderLeftWidth"), 10) || 0) + (parseInt(e1(r1).css("paddingLeft"), 10) || 0),
                    (parseInt(e1(r1).css("borderTopWidth"), 10) || 0) + (parseInt(e1(r1).css("paddingTop"), 10) || 0),
                    (s1 ? Math.max(r1.scrollWidth, r1.offsetWidth) : r1.offsetWidth) - (parseInt(e1(r1).css("borderLeftWidth"), 10) || 0) - (parseInt(e1(r1).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right,
                    (s1 ? Math.max(r1.scrollHeight, r1.offsetHeight) : r1.offsetHeight) - (parseInt(e1(r1).css("borderTopWidth"), 10) || 0) - (parseInt(e1(r1).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom
                ], this.relative_container = n1;
            } else t1.containment.constructor == Array && (this.containment = t1.containment);
        },
        _convertPositionTo: function(t1, n1) {
            n1 || (n1 = this.position);
            var r1 = t1 == "absolute" ? 1 : -1, i1 = this.options, s1 = this.cssPosition != "absolute" || this.scrollParent[0] != document && !!e1.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, o1 = /(html|body)/i.test(s1[0].tagName);
            return {
                top: n1.top + this.offset.relative.top * r1 + this.offset.parent.top * r1 - (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : o1 ? 0 : s1.scrollTop()) * r1,
                left: n1.left + this.offset.relative.left * r1 + this.offset.parent.left * r1 - (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : o1 ? 0 : s1.scrollLeft()) * r1
            };
        },
        _generatePosition: function(t1) {
            var n1 = this.options, r1 = this.cssPosition != "absolute" || this.scrollParent[0] != document && !!e1.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, i1 = /(html|body)/i.test(r1[0].tagName), s1 = t1.pageX, o1 = t1.pageY;
            if (this.originalPosition) {
                var u1;
                if (this.containment) {
                    if (this.relative_container) {
                        var a1 = this.relative_container.offset();
                        u1 = [
                            this.containment[0] + a1.left,
                            this.containment[1] + a1.top,
                            this.containment[2] + a1.left,
                            this.containment[3] + a1.top
                        ];
                    } else u1 = this.containment;
                    t1.pageX - this.offset.click.left < u1[0] && (s1 = u1[0] + this.offset.click.left), t1.pageY - this.offset.click.top < u1[1] && (o1 = u1[1] + this.offset.click.top), t1.pageX - this.offset.click.left > u1[2] && (s1 = u1[2] + this.offset.click.left), t1.pageY - this.offset.click.top > u1[3] && (o1 = u1[3] + this.offset.click.top);
                }
                if (n1.grid) {
                    var f1 = n1.grid[1] ? this.originalPageY + Math.round((o1 - this.originalPageY) / n1.grid[1]) * n1.grid[1] : this.originalPageY;
                    o1 = u1 ? f1 - this.offset.click.top < u1[1] || f1 - this.offset.click.top > u1[3] ? f1 - this.offset.click.top < u1[1] ? f1 + n1.grid[1] : f1 - n1.grid[1] : f1 : f1;
                    var l1 = n1.grid[0] ? this.originalPageX + Math.round((s1 - this.originalPageX) / n1.grid[0]) * n1.grid[0] : this.originalPageX;
                    s1 = u1 ? l1 - this.offset.click.left < u1[0] || l1 - this.offset.click.left > u1[2] ? l1 - this.offset.click.left < u1[0] ? l1 + n1.grid[0] : l1 - n1.grid[0] : l1 : l1;
                }
            }
            return {
                top: o1 - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : i1 ? 0 : r1.scrollTop()),
                left: s1 - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i1 ? 0 : r1.scrollLeft())
            };
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1;
        },
        _trigger: function(t1, n1, r1) {
            return r1 = r1 || this._uiHash(), e1.ui.plugin.call(this, t1, [
                n1,
                r1
            ]), t1 == "drag" && (this.positionAbs = this._convertPositionTo("absolute")), e1.Widget.prototype._trigger.call(this, t1, n1, r1);
        },
        plugins: {},
        _uiHash: function(e1) {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            };
        }
    }), e1.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t1, n1) {
            var r1 = e1(this).data("draggable"), i1 = r1.options, s1 = e1.extend({}, n1, {
                item: r1.element
            });
            r1.sortables = [], e1(i1.connectToSortable).each(function() {
                var n1 = e1.data(this, "sortable");
                n1 && !n1.options.disabled && (r1.sortables.push({
                    instance: n1,
                    shouldRevert: n1.options.revert
                }), n1.refreshPositions(), n1._trigger("activate", t1, s1));
            });
        },
        stop: function(t1, n1) {
            var r1 = e1(this).data("draggable"), i1 = e1.extend({}, n1, {
                item: r1.element
            });
            e1.each(r1.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, r1.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(t1), this.instance.options.helper = this.instance.options._helper, r1.options.helper == "original" && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t1, i1));
            });
        },
        drag: function(t1, n1) {
            var r1 = e1(this).data("draggable"), i1 = this, s1 = function(t1) {
                var n1 = this.offset.click.top, r1 = this.offset.click.left, i1 = this.positionAbs.top, s1 = this.positionAbs.left, o1 = t1.height, u1 = t1.width, a1 = t1.top, f1 = t1.left;
                return e1.ui.isOver(i1 + n1, s1 + r1, a1, f1, o1, u1);
            };
            e1.each(r1.sortables, function(s1) {
                this.instance.positionAbs = r1.positionAbs, this.instance.helperProportions = r1.helperProportions, this.instance.offset.click = r1.offset.click, this.instance._intersectsWith(this.instance.containerCache) ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e1(i1).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return n1.helper[0];
                }, t1.target = this.instance.currentItem[0], this.instance._mouseCapture(t1, !0), this.instance._mouseStart(t1, !0, !0), this.instance.offset.click.top = r1.offset.click.top, this.instance.offset.click.left = r1.offset.click.left, this.instance.offset.parent.left -= r1.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= r1.offset.parent.top - this.instance.offset.parent.top, r1._trigger("toSortable", t1), r1.dropped = this.instance.element, r1.currentItem = r1.element, this.instance.fromOutside = r1), this.instance.currentItem && this.instance._mouseDrag(t1)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t1, this.instance._uiHash(this.instance)), this.instance._mouseStop(t1, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), r1._trigger("fromSortable", t1), r1.dropped = !1);
            });
        }
    }), e1.ui.plugin.add("draggable", "cursor", {
        start: function(t1, n1) {
            var r1 = e1("body"), i1 = e1(this).data("draggable").options;
            r1.css("cursor") && (i1._cursor = r1.css("cursor")), r1.css("cursor", i1.cursor);
        },
        stop: function(t1, n1) {
            var r1 = e1(this).data("draggable").options;
            r1._cursor && e1("body").css("cursor", r1._cursor);
        }
    }), e1.ui.plugin.add("draggable", "opacity", {
        start: function(t1, n1) {
            var r1 = e1(n1.helper), i1 = e1(this).data("draggable").options;
            r1.css("opacity") && (i1._opacity = r1.css("opacity")), r1.css("opacity", i1.opacity);
        },
        stop: function(t1, n1) {
            var r1 = e1(this).data("draggable").options;
            r1._opacity && e1(n1.helper).css("opacity", r1._opacity);
        }
    }), e1.ui.plugin.add("draggable", "scroll", {
        start: function(t1, n1) {
            var r1 = e1(this).data("draggable");
            r1.scrollParent[0] != document && r1.scrollParent[0].tagName != "HTML" && (r1.overflowOffset = r1.scrollParent.offset());
        },
        drag: function(t1, n1) {
            var r1 = e1(this).data("draggable"), i1 = r1.options, s1 = !1;
            if (r1.scrollParent[0] != document && r1.scrollParent[0].tagName != "HTML") {
                if (!i1.axis || i1.axis != "x") r1.overflowOffset.top + r1.scrollParent[0].offsetHeight - t1.pageY < i1.scrollSensitivity ? r1.scrollParent[0].scrollTop = s1 = r1.scrollParent[0].scrollTop + i1.scrollSpeed : t1.pageY - r1.overflowOffset.top < i1.scrollSensitivity && (r1.scrollParent[0].scrollTop = s1 = r1.scrollParent[0].scrollTop - i1.scrollSpeed);
                if (!i1.axis || i1.axis != "y") r1.overflowOffset.left + r1.scrollParent[0].offsetWidth - t1.pageX < i1.scrollSensitivity ? r1.scrollParent[0].scrollLeft = s1 = r1.scrollParent[0].scrollLeft + i1.scrollSpeed : t1.pageX - r1.overflowOffset.left < i1.scrollSensitivity && (r1.scrollParent[0].scrollLeft = s1 = r1.scrollParent[0].scrollLeft - i1.scrollSpeed);
            } else {
                if (!i1.axis || i1.axis != "x") t1.pageY - e1(document).scrollTop() < i1.scrollSensitivity ? s1 = e1(document).scrollTop(e1(document).scrollTop() - i1.scrollSpeed) : e1(window).height() - (t1.pageY - e1(document).scrollTop()) < i1.scrollSensitivity && (s1 = e1(document).scrollTop(e1(document).scrollTop() + i1.scrollSpeed));
                if (!i1.axis || i1.axis != "y") t1.pageX - e1(document).scrollLeft() < i1.scrollSensitivity ? s1 = e1(document).scrollLeft(e1(document).scrollLeft() - i1.scrollSpeed) : e1(window).width() - (t1.pageX - e1(document).scrollLeft()) < i1.scrollSensitivity && (s1 = e1(document).scrollLeft(e1(document).scrollLeft() + i1.scrollSpeed));
            }
            s1 !== !1 && e1.ui.ddmanager && !i1.dropBehaviour && e1.ui.ddmanager.prepareOffsets(r1, t1);
        }
    }), e1.ui.plugin.add("draggable", "snap", {
        start: function(t1, n1) {
            var r1 = e1(this).data("draggable"), i1 = r1.options;
            r1.snapElements = [], e1(i1.snap.constructor != String ? i1.snap.items || ":data(draggable)" : i1.snap).each(function() {
                var t1 = e1(this), n1 = t1.offset();
                this != r1.element[0] && r1.snapElements.push({
                    item: this,
                    width: t1.outerWidth(),
                    height: t1.outerHeight(),
                    top: n1.top,
                    left: n1.left
                });
            });
        },
        drag: function(t1, n1) {
            var r1 = e1(this).data("draggable"), i1 = r1.options, s1 = i1.snapTolerance, o1 = n1.offset.left, u1 = o1 + r1.helperProportions.width, a1 = n1.offset.top, f1 = a1 + r1.helperProportions.height;
            for(var l1 = r1.snapElements.length - 1; l1 >= 0; l1--){
                var c1 = r1.snapElements[l1].left, h1 = c1 + r1.snapElements[l1].width, p1 = r1.snapElements[l1].top, d1 = p1 + r1.snapElements[l1].height;
                if (!(c1 - s1 < o1 && o1 < h1 + s1 && p1 - s1 < a1 && a1 < d1 + s1 || c1 - s1 < o1 && o1 < h1 + s1 && p1 - s1 < f1 && f1 < d1 + s1 || c1 - s1 < u1 && u1 < h1 + s1 && p1 - s1 < a1 && a1 < d1 + s1 || c1 - s1 < u1 && u1 < h1 + s1 && p1 - s1 < f1 && f1 < d1 + s1)) {
                    r1.snapElements[l1].snapping && r1.options.snap.release && r1.options.snap.release.call(r1.element, t1, e1.extend(r1._uiHash(), {
                        snapItem: r1.snapElements[l1].item
                    })), r1.snapElements[l1].snapping = !1;
                    continue;
                }
                if (i1.snapMode != "inner") {
                    var v1 = Math.abs(p1 - f1) <= s1, m1 = Math.abs(d1 - a1) <= s1, g1 = Math.abs(c1 - u1) <= s1, y1 = Math.abs(h1 - o1) <= s1;
                    v1 && (n1.position.top = r1._convertPositionTo("relative", {
                        top: p1 - r1.helperProportions.height,
                        left: 0
                    }).top - r1.margins.top), m1 && (n1.position.top = r1._convertPositionTo("relative", {
                        top: d1,
                        left: 0
                    }).top - r1.margins.top), g1 && (n1.position.left = r1._convertPositionTo("relative", {
                        top: 0,
                        left: c1 - r1.helperProportions.width
                    }).left - r1.margins.left), y1 && (n1.position.left = r1._convertPositionTo("relative", {
                        top: 0,
                        left: h1
                    }).left - r1.margins.left);
                }
                var b1 = v1 || m1 || g1 || y1;
                if (i1.snapMode != "outer") {
                    var v1 = Math.abs(p1 - a1) <= s1, m1 = Math.abs(d1 - f1) <= s1, g1 = Math.abs(c1 - o1) <= s1, y1 = Math.abs(h1 - u1) <= s1;
                    v1 && (n1.position.top = r1._convertPositionTo("relative", {
                        top: p1,
                        left: 0
                    }).top - r1.margins.top), m1 && (n1.position.top = r1._convertPositionTo("relative", {
                        top: d1 - r1.helperProportions.height,
                        left: 0
                    }).top - r1.margins.top), g1 && (n1.position.left = r1._convertPositionTo("relative", {
                        top: 0,
                        left: c1
                    }).left - r1.margins.left), y1 && (n1.position.left = r1._convertPositionTo("relative", {
                        top: 0,
                        left: h1 - r1.helperProportions.width
                    }).left - r1.margins.left);
                }
                !r1.snapElements[l1].snapping && (v1 || m1 || g1 || y1 || b1) && r1.options.snap.snap && r1.options.snap.snap.call(r1.element, t1, e1.extend(r1._uiHash(), {
                    snapItem: r1.snapElements[l1].item
                })), r1.snapElements[l1].snapping = v1 || m1 || g1 || y1 || b1;
            }
        }
    }), e1.ui.plugin.add("draggable", "stack", {
        start: function(t1, n1) {
            var r1 = e1(this).data("draggable").options, i1 = e1.makeArray(e1(r1.stack)).sort(function(t1, n1) {
                return (parseInt(e1(t1).css("zIndex"), 10) || 0) - (parseInt(e1(n1).css("zIndex"), 10) || 0);
            });
            if (!i1.length) return;
            var s1 = parseInt(i1[0].style.zIndex) || 0;
            e1(i1).each(function(e1) {
                this.style.zIndex = s1 + e1;
            }), this[0].style.zIndex = s1 + i1.length;
        }
    }), e1.ui.plugin.add("draggable", "zIndex", {
        start: function(t1, n1) {
            var r1 = e1(n1.helper), i1 = e1(this).data("draggable").options;
            r1.css("zIndex") && (i1._zIndex = r1.css("zIndex")), r1.css("zIndex", i1.zIndex);
        },
        stop: function(t1, n1) {
            var r1 = e1(this).data("draggable").options;
            r1._zIndex && e1(n1.helper).css("zIndex", r1._zIndex);
        }
    });
}(jQuery), function(e1, t1) {
    e1.widget("ui.droppable", {
        version: "1.9.0",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect"
        },
        _create: function() {
            var t1 = this.options, n1 = t1.accept;
            this.isover = 0, this.isout = 1, this.accept = e1.isFunction(n1) ? n1 : function(e1) {
                return e1.is(n1);
            }, this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            }, e1.ui.ddmanager.droppables[t1.scope] = e1.ui.ddmanager.droppables[t1.scope] || [], e1.ui.ddmanager.droppables[t1.scope].push(this), t1.addClasses && this.element.addClass("ui-droppable");
        },
        _destroy: function() {
            var t1 = e1.ui.ddmanager.droppables[this.options.scope];
            for(var n1 = 0; n1 < t1.length; n1++)t1[n1] == this && t1.splice(n1, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled");
        },
        _setOption: function(t1, n1) {
            t1 == "accept" && (this.accept = e1.isFunction(n1) ? n1 : function(e1) {
                return e1.is(n1);
            }), e1.Widget.prototype._setOption.apply(this, arguments);
        },
        _activate: function(t1) {
            var n1 = e1.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), n1 && this._trigger("activate", t1, this.ui(n1));
        },
        _deactivate: function(t1) {
            var n1 = e1.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), n1 && this._trigger("deactivate", t1, this.ui(n1));
        },
        _over: function(t1) {
            var n1 = e1.ui.ddmanager.current;
            if (!n1 || (n1.currentItem || n1.element)[0] == this.element[0]) return;
            this.accept.call(this.element[0], n1.currentItem || n1.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t1, this.ui(n1)));
        },
        _out: function(t1) {
            var n1 = e1.ui.ddmanager.current;
            if (!n1 || (n1.currentItem || n1.element)[0] == this.element[0]) return;
            this.accept.call(this.element[0], n1.currentItem || n1.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t1, this.ui(n1)));
        },
        _drop: function(t1, n1) {
            var r1 = n1 || e1.ui.ddmanager.current;
            if (!r1 || (r1.currentItem || r1.element)[0] == this.element[0]) return !1;
            var i1 = !1;
            return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
                var t1 = e1.data(this, "droppable");
                if (t1.options.greedy && !t1.options.disabled && t1.options.scope == r1.options.scope && t1.accept.call(t1.element[0], r1.currentItem || r1.element) && e1.ui.intersect(r1, e1.extend(t1, {
                    offset: t1.element.offset()
                }), t1.options.tolerance)) return i1 = !0, !1;
            }), i1 ? !1 : this.accept.call(this.element[0], r1.currentItem || r1.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t1, this.ui(r1)), this.element) : !1;
        },
        ui: function(e1) {
            return {
                draggable: e1.currentItem || e1.element,
                helper: e1.helper,
                position: e1.position,
                offset: e1.positionAbs
            };
        }
    }), e1.ui.intersect = function(t1, n1, r1) {
        if (!n1.offset) return !1;
        var i1 = (t1.positionAbs || t1.position.absolute).left, s1 = i1 + t1.helperProportions.width, o1 = (t1.positionAbs || t1.position.absolute).top, u1 = o1 + t1.helperProportions.height, a1 = n1.offset.left, f1 = a1 + n1.proportions.width, l1 = n1.offset.top, c1 = l1 + n1.proportions.height;
        switch(r1){
            case "fit":
                return a1 <= i1 && s1 <= f1 && l1 <= o1 && u1 <= c1;
            case "intersect":
                return a1 < i1 + t1.helperProportions.width / 2 && s1 - t1.helperProportions.width / 2 < f1 && l1 < o1 + t1.helperProportions.height / 2 && u1 - t1.helperProportions.height / 2 < c1;
            case "pointer":
                var h1 = (t1.positionAbs || t1.position.absolute).left + (t1.clickOffset || t1.offset.click).left, p1 = (t1.positionAbs || t1.position.absolute).top + (t1.clickOffset || t1.offset.click).top, d1 = e1.ui.isOver(p1, h1, l1, a1, n1.proportions.height, n1.proportions.width);
                return d1;
            case "touch":
                return (o1 >= l1 && o1 <= c1 || u1 >= l1 && u1 <= c1 || o1 < l1 && u1 > c1) && (i1 >= a1 && i1 <= f1 || s1 >= a1 && s1 <= f1 || i1 < a1 && s1 > f1);
            default:
                return !1;
        }
    }, e1.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(t1, n1) {
            var r1 = e1.ui.ddmanager.droppables[t1.options.scope] || [], i1 = n1 ? n1.type : null, s1 = (t1.currentItem || t1.element).find(":data(droppable)").andSelf();
            e: for(var o1 = 0; o1 < r1.length; o1++){
                if (r1[o1].options.disabled || t1 && !r1[o1].accept.call(r1[o1].element[0], t1.currentItem || t1.element)) continue;
                for(var u1 = 0; u1 < s1.length; u1++)if (s1[u1] == r1[o1].element[0]) {
                    r1[o1].proportions.height = 0;
                    continue e;
                }
                r1[o1].visible = r1[o1].element.css("display") != "none";
                if (!r1[o1].visible) continue;
                i1 == "mousedown" && r1[o1]._activate.call(r1[o1], n1), r1[o1].offset = r1[o1].element.offset(), r1[o1].proportions = {
                    width: r1[o1].element[0].offsetWidth,
                    height: r1[o1].element[0].offsetHeight
                };
            }
        },
        drop: function(t1, n1) {
            var r1 = !1;
            return e1.each(e1.ui.ddmanager.droppables[t1.options.scope] || [], function() {
                if (!this.options) return;
                !this.options.disabled && this.visible && e1.ui.intersect(t1, this, this.options.tolerance) && (r1 = this._drop.call(this, n1) || r1), !this.options.disabled && this.visible && this.accept.call(this.element[0], t1.currentItem || t1.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, n1));
            }), r1;
        },
        dragStart: function(t1, n1) {
            t1.element.parentsUntil("body").bind("scroll.droppable", function() {
                t1.options.refreshPositions || e1.ui.ddmanager.prepareOffsets(t1, n1);
            });
        },
        drag: function(t1, n1) {
            t1.options.refreshPositions && e1.ui.ddmanager.prepareOffsets(t1, n1), e1.each(e1.ui.ddmanager.droppables[t1.options.scope] || [], function() {
                if (this.options.disabled || this.greedyChild || !this.visible) return;
                var r1 = e1.ui.intersect(t1, this, this.options.tolerance), i1 = !r1 && this.isover == 1 ? "isout" : r1 && this.isover == 0 ? "isover" : null;
                if (!i1) return;
                var s1;
                if (this.options.greedy) {
                    var o1 = this.options.scope, u1 = this.element.parents(":data(droppable)").filter(function() {
                        return e1.data(this, "droppable").options.scope === o1;
                    });
                    u1.length && (s1 = e1.data(u1[0], "droppable"), s1.greedyChild = i1 == "isover" ? 1 : 0);
                }
                s1 && i1 == "isover" && (s1.isover = 0, s1.isout = 1, s1._out.call(s1, n1)), this[i1] = 1, this[i1 == "isout" ? "isover" : "isout"] = 0, this[i1 == "isover" ? "_over" : "_out"].call(this, n1), s1 && i1 == "isout" && (s1.isout = 0, s1.isover = 1, s1._over.call(s1, n1));
            });
        },
        dragStop: function(t1, n1) {
            t1.element.parentsUntil("body").unbind("scroll.droppable"), t1.options.refreshPositions || e1.ui.ddmanager.prepareOffsets(t1, n1);
        }
    };
}(jQuery), function(e1, t1) {
    e1.widget("ui.resizable", e1.ui.mouse, {
        version: "1.9.0",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 1e3
        },
        _create: function() {
            var t1 = this, n1 = this.options;
            this.element.addClass("ui-resizable"), e1.extend(this, {
                _aspectRatio: !!n1.aspectRatio,
                aspectRatio: n1.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: n1.helper || n1.ghost || n1.animate ? n1.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e1('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({
                margin: this.originalElement.css("margin")
            }), this._proportionallyResize()), this.handles = n1.handles || (e1(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se");
            if (this.handles.constructor == String) {
                this.handles == "all" && (this.handles = "n,e,s,w,se,sw,ne,nw");
                var r1 = this.handles.split(",");
                this.handles = {};
                for(var i1 = 0; i1 < r1.length; i1++){
                    var s1 = e1.trim(r1[i1]), o1 = "ui-resizable-" + s1, u1 = e1('<div class="ui-resizable-handle ' + o1 + '"></div>');
                    u1.css({
                        zIndex: n1.zIndex
                    }), "se" == s1 && u1.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s1] = ".ui-resizable-" + s1, this.element.append(u1);
                }
            }
            this._renderAxis = function(t1) {
                t1 = t1 || this.element;
                for(var n1 in this.handles){
                    this.handles[n1].constructor == String && (this.handles[n1] = e1(this.handles[n1], this.element).show());
                    if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                        var r1 = e1(this.handles[n1], this.element), i1 = 0;
                        i1 = /sw|ne|nw|se|n|s/.test(n1) ? r1.outerHeight() : r1.outerWidth();
                        var s1 = [
                            "padding",
                            /ne|nw|n/.test(n1) ? "Top" : /se|sw|s/.test(n1) ? "Bottom" : /^e$/.test(n1) ? "Right" : "Left"
                        ].join("");
                        t1.css(s1, i1), this._proportionallyResize();
                    }
                    if (!e1(this.handles[n1]).length) continue;
                }
            }, this._renderAxis(this.element), this._handles = e1(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                if (!t1.resizing) {
                    if (this.className) var e1 = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                    t1.axis = e1 && e1[1] ? e1[1] : "se";
                }
            }), n1.autoHide && (this._handles.hide(), e1(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                if (n1.disabled) return;
                e1(this).removeClass("ui-resizable-autohide"), t1._handles.show();
            }).mouseleave(function() {
                if (n1.disabled) return;
                t1.resizing || (e1(this).addClass("ui-resizable-autohide"), t1._handles.hide());
            })), this._mouseInit();
        },
        _destroy: function() {
            this._mouseDestroy();
            var t1 = function(t1) {
                e1(t1).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove();
            };
            if (this.elementIsWrapper) {
                t1(this.element);
                var n1 = this.element;
                n1.after(this.originalElement.css({
                    position: n1.css("position"),
                    width: n1.outerWidth(),
                    height: n1.outerHeight(),
                    top: n1.css("top"),
                    left: n1.css("left")
                })).remove();
            }
            return this.originalElement.css("resize", this.originalResizeStyle), t1(this.originalElement), this;
        },
        _mouseCapture: function(t1) {
            var n1 = !1;
            for(var r1 in this.handles)e1(this.handles[r1])[0] == t1.target && (n1 = !0);
            return !this.options.disabled && n1;
        },
        _mouseStart: function(t1) {
            var r1 = this.options, i1 = this.element.position(), s1 = this.element;
            this.resizing = !0, this.documentScroll = {
                top: e1(document).scrollTop(),
                left: e1(document).scrollLeft()
            }, (s1.is(".ui-draggable") || /absolute/.test(s1.css("position"))) && s1.css({
                position: "absolute",
                top: i1.top,
                left: i1.left
            }), this._renderProxy();
            var o1 = n1(this.helper.css("left")), u1 = n1(this.helper.css("top"));
            r1.containment && (o1 += e1(r1.containment).scrollLeft() || 0, u1 += e1(r1.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: o1,
                top: u1
            }, this.size = this._helper ? {
                width: s1.outerWidth(),
                height: s1.outerHeight()
            } : {
                width: s1.width(),
                height: s1.height()
            }, this.originalSize = this._helper ? {
                width: s1.outerWidth(),
                height: s1.outerHeight()
            } : {
                width: s1.width(),
                height: s1.height()
            }, this.originalPosition = {
                left: o1,
                top: u1
            }, this.sizeDiff = {
                width: s1.outerWidth() - s1.width(),
                height: s1.outerHeight() - s1.height()
            }, this.originalMousePosition = {
                left: t1.pageX,
                top: t1.pageY
            }, this.aspectRatio = typeof r1.aspectRatio == "number" ? r1.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
            var a1 = e1(".ui-resizable-" + this.axis).css("cursor");
            return e1("body").css("cursor", a1 == "auto" ? this.axis + "-resize" : a1), s1.addClass("ui-resizable-resizing"), this._propagate("start", t1), !0;
        },
        _mouseDrag: function(e1) {
            var t1 = this.helper, n1 = this.options, r1 = {}, i1 = this, s1 = this.originalMousePosition, o1 = this.axis, u1 = e1.pageX - s1.left || 0, a1 = e1.pageY - s1.top || 0, f1 = this._change[o1];
            if (!f1) return !1;
            var l1 = f1.apply(this, [
                e1,
                u1,
                a1
            ]);
            this._updateVirtualBoundaries(e1.shiftKey);
            if (this._aspectRatio || e1.shiftKey) l1 = this._updateRatio(l1, e1);
            return l1 = this._respectSize(l1, e1), this._propagate("resize", e1), t1.css({
                top: this.position.top + "px",
                left: this.position.left + "px",
                width: this.size.width + "px",
                height: this.size.height + "px"
            }), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(l1), this._trigger("resize", e1, this.ui()), !1;
        },
        _mouseStop: function(t1) {
            this.resizing = !1;
            var n1 = this.options, r1 = this;
            if (this._helper) {
                var i1 = this._proportionallyResizeElements, s1 = i1.length && /textarea/i.test(i1[0].nodeName), o1 = s1 && e1.ui.hasScroll(i1[0], "left") ? 0 : r1.sizeDiff.height, u1 = s1 ? 0 : r1.sizeDiff.width, a1 = {
                    width: r1.helper.width() - u1,
                    height: r1.helper.height() - o1
                }, f1 = parseInt(r1.element.css("left"), 10) + (r1.position.left - r1.originalPosition.left) || null, l1 = parseInt(r1.element.css("top"), 10) + (r1.position.top - r1.originalPosition.top) || null;
                n1.animate || this.element.css(e1.extend(a1, {
                    top: l1,
                    left: f1
                })), r1.helper.height(r1.size.height), r1.helper.width(r1.size.width), this._helper && !n1.animate && this._proportionallyResize();
            }
            return e1("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t1), this._helper && this.helper.remove(), !1;
        },
        _updateVirtualBoundaries: function(e1) {
            var t1 = this.options, n1, i1, s1, o1, u1;
            u1 = {
                minWidth: r1(t1.minWidth) ? t1.minWidth : 0,
                maxWidth: r1(t1.maxWidth) ? t1.maxWidth : Infinity,
                minHeight: r1(t1.minHeight) ? t1.minHeight : 0,
                maxHeight: r1(t1.maxHeight) ? t1.maxHeight : Infinity
            };
            if (this._aspectRatio || e1) n1 = u1.minHeight * this.aspectRatio, s1 = u1.minWidth / this.aspectRatio, i1 = u1.maxHeight * this.aspectRatio, o1 = u1.maxWidth / this.aspectRatio, n1 > u1.minWidth && (u1.minWidth = n1), s1 > u1.minHeight && (u1.minHeight = s1), i1 < u1.maxWidth && (u1.maxWidth = i1), o1 < u1.maxHeight && (u1.maxHeight = o1);
            this._vBoundaries = u1;
        },
        _updateCache: function(e1) {
            var t1 = this.options;
            this.offset = this.helper.offset(), r1(e1.left) && (this.position.left = e1.left), r1(e1.top) && (this.position.top = e1.top), r1(e1.height) && (this.size.height = e1.height), r1(e1.width) && (this.size.width = e1.width);
        },
        _updateRatio: function(e1, t1) {
            var n1 = this.options, i1 = this.position, s1 = this.size, o1 = this.axis;
            return r1(e1.height) ? e1.width = e1.height * this.aspectRatio : r1(e1.width) && (e1.height = e1.width / this.aspectRatio), o1 == "sw" && (e1.left = i1.left + (s1.width - e1.width), e1.top = null), o1 == "nw" && (e1.top = i1.top + (s1.height - e1.height), e1.left = i1.left + (s1.width - e1.width)), e1;
        },
        _respectSize: function(e1, t1) {
            var n1 = this.helper, i1 = this._vBoundaries, s1 = this._aspectRatio || t1.shiftKey, o1 = this.axis, u1 = r1(e1.width) && i1.maxWidth && i1.maxWidth < e1.width, a1 = r1(e1.height) && i1.maxHeight && i1.maxHeight < e1.height, f1 = r1(e1.width) && i1.minWidth && i1.minWidth > e1.width, l1 = r1(e1.height) && i1.minHeight && i1.minHeight > e1.height;
            f1 && (e1.width = i1.minWidth), l1 && (e1.height = i1.minHeight), u1 && (e1.width = i1.maxWidth), a1 && (e1.height = i1.maxHeight);
            var c1 = this.originalPosition.left + this.originalSize.width, h1 = this.position.top + this.size.height, p1 = /sw|nw|w/.test(o1), d1 = /nw|ne|n/.test(o1);
            f1 && p1 && (e1.left = c1 - i1.minWidth), u1 && p1 && (e1.left = c1 - i1.maxWidth), l1 && d1 && (e1.top = h1 - i1.minHeight), a1 && d1 && (e1.top = h1 - i1.maxHeight);
            var v1 = !e1.width && !e1.height;
            return v1 && !e1.left && e1.top ? e1.top = null : v1 && !e1.top && e1.left && (e1.left = null), e1;
        },
        _proportionallyResize: function() {
            var t1 = this.options;
            if (!this._proportionallyResizeElements.length) return;
            var n1 = this.helper || this.element;
            for(var r1 = 0; r1 < this._proportionallyResizeElements.length; r1++){
                var i1 = this._proportionallyResizeElements[r1];
                if (!this.borderDif) {
                    var s1 = [
                        i1.css("borderTopWidth"),
                        i1.css("borderRightWidth"),
                        i1.css("borderBottomWidth"),
                        i1.css("borderLeftWidth")
                    ], o1 = [
                        i1.css("paddingTop"),
                        i1.css("paddingRight"),
                        i1.css("paddingBottom"),
                        i1.css("paddingLeft")
                    ];
                    this.borderDif = e1.map(s1, function(e1, t1) {
                        var n1 = parseInt(e1, 10) || 0, r1 = parseInt(o1[t1], 10) || 0;
                        return n1 + r1;
                    });
                }
                i1.css({
                    height: n1.height() - this.borderDif[0] - this.borderDif[2] || 0,
                    width: n1.width() - this.borderDif[1] - this.borderDif[3] || 0
                });
            }
        },
        _renderProxy: function() {
            var t1 = this.element, n1 = this.options;
            this.elementOffset = t1.offset();
            if (this._helper) {
                this.helper = this.helper || e1('<div style="overflow:hidden;"></div>');
                var r1 = e1.browser.msie && e1.browser.version < 7, i1 = r1 ? 1 : 0, s1 = r1 ? 2 : -1;
                this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() + s1,
                    height: this.element.outerHeight() + s1,
                    position: "absolute",
                    left: this.elementOffset.left - i1 + "px",
                    top: this.elementOffset.top - i1 + "px",
                    zIndex: ++n1.zIndex
                }), this.helper.appendTo("body").disableSelection();
            } else this.helper = this.element;
        },
        _change: {
            e: function(e1, t1, n1) {
                return {
                    width: this.originalSize.width + t1
                };
            },
            w: function(e1, t1, n1) {
                var r1 = this.options, i1 = this.originalSize, s1 = this.originalPosition;
                return {
                    left: s1.left + t1,
                    width: i1.width - t1
                };
            },
            n: function(e1, t1, n1) {
                var r1 = this.options, i1 = this.originalSize, s1 = this.originalPosition;
                return {
                    top: s1.top + n1,
                    height: i1.height - n1
                };
            },
            s: function(e1, t1, n1) {
                return {
                    height: this.originalSize.height + n1
                };
            },
            se: function(t1, n1, r1) {
                return e1.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [
                    t1,
                    n1,
                    r1
                ]));
            },
            sw: function(t1, n1, r1) {
                return e1.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [
                    t1,
                    n1,
                    r1
                ]));
            },
            ne: function(t1, n1, r1) {
                return e1.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [
                    t1,
                    n1,
                    r1
                ]));
            },
            nw: function(t1, n1, r1) {
                return e1.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [
                    t1,
                    n1,
                    r1
                ]));
            }
        },
        _propagate: function(t1, n1) {
            e1.ui.plugin.call(this, t1, [
                n1,
                this.ui()
            ]), t1 != "resize" && this._trigger(t1, n1, this.ui());
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            };
        }
    }), e1.ui.plugin.add("resizable", "alsoResize", {
        start: function(t1, n1) {
            var r1 = e1(this).data("resizable"), i1 = r1.options, s1 = function(t1) {
                e1(t1).each(function() {
                    var t1 = e1(this);
                    t1.data("resizable-alsoresize", {
                        width: parseInt(t1.width(), 10),
                        height: parseInt(t1.height(), 10),
                        left: parseInt(t1.css("left"), 10),
                        top: parseInt(t1.css("top"), 10)
                    });
                });
            };
            typeof i1.alsoResize == "object" && !i1.alsoResize.parentNode ? i1.alsoResize.length ? (i1.alsoResize = i1.alsoResize[0], s1(i1.alsoResize)) : e1.each(i1.alsoResize, function(e1) {
                s1(e1);
            }) : s1(i1.alsoResize);
        },
        resize: function(t1, n1) {
            var r1 = e1(this).data("resizable"), i1 = r1.options, s1 = r1.originalSize, o1 = r1.originalPosition, u1 = {
                height: r1.size.height - s1.height || 0,
                width: r1.size.width - s1.width || 0,
                top: r1.position.top - o1.top || 0,
                left: r1.position.left - o1.left || 0
            }, a1 = function(t1, r1) {
                e1(t1).each(function() {
                    var t1 = e1(this), i1 = e1(this).data("resizable-alsoresize"), s1 = {}, o1 = r1 && r1.length ? r1 : t1.parents(n1.originalElement[0]).length ? [
                        "width",
                        "height"
                    ] : [
                        "width",
                        "height",
                        "top",
                        "left"
                    ];
                    e1.each(o1, function(e1, t1) {
                        var n1 = (i1[t1] || 0) + (u1[t1] || 0);
                        n1 && n1 >= 0 && (s1[t1] = n1 || null);
                    }), t1.css(s1);
                });
            };
            typeof i1.alsoResize == "object" && !i1.alsoResize.nodeType ? e1.each(i1.alsoResize, function(e1, t1) {
                a1(e1, t1);
            }) : a1(i1.alsoResize);
        },
        stop: function(t1, n1) {
            e1(this).removeData("resizable-alsoresize");
        }
    }), e1.ui.plugin.add("resizable", "animate", {
        stop: function(t1, n1) {
            var r1 = e1(this).data("resizable"), i1 = r1.options, s1 = r1._proportionallyResizeElements, o1 = s1.length && /textarea/i.test(s1[0].nodeName), u1 = o1 && e1.ui.hasScroll(s1[0], "left") ? 0 : r1.sizeDiff.height, a1 = o1 ? 0 : r1.sizeDiff.width, f1 = {
                width: r1.size.width - a1,
                height: r1.size.height - u1
            }, l1 = parseInt(r1.element.css("left"), 10) + (r1.position.left - r1.originalPosition.left) || null, c1 = parseInt(r1.element.css("top"), 10) + (r1.position.top - r1.originalPosition.top) || null;
            r1.element.animate(e1.extend(f1, c1 && l1 ? {
                top: c1,
                left: l1
            } : {}), {
                duration: i1.animateDuration,
                easing: i1.animateEasing,
                step: function() {
                    var n1 = {
                        width: parseInt(r1.element.css("width"), 10),
                        height: parseInt(r1.element.css("height"), 10),
                        top: parseInt(r1.element.css("top"), 10),
                        left: parseInt(r1.element.css("left"), 10)
                    };
                    s1 && s1.length && e1(s1[0]).css({
                        width: n1.width,
                        height: n1.height
                    }), r1._updateCache(n1), r1._propagate("resize", t1);
                }
            });
        }
    }), e1.ui.plugin.add("resizable", "containment", {
        start: function(t1, r1) {
            var i1 = e1(this).data("resizable"), s1 = i1.options, o1 = i1.element, u1 = s1.containment, a1 = u1 instanceof e1 ? u1.get(0) : /parent/.test(u1) ? o1.parent().get(0) : u1;
            if (!a1) return;
            i1.containerElement = e1(a1);
            if (/document/.test(u1) || u1 == document) i1.containerOffset = {
                left: 0,
                top: 0
            }, i1.containerPosition = {
                left: 0,
                top: 0
            }, i1.parentData = {
                element: e1(document),
                left: 0,
                top: 0,
                width: e1(document).width(),
                height: e1(document).height() || document.body.parentNode.scrollHeight
            };
            else {
                var f1 = e1(a1), l1 = [];
                e1([
                    "Top",
                    "Right",
                    "Left",
                    "Bottom"
                ]).each(function(e1, t1) {
                    l1[e1] = n1(f1.css("padding" + t1));
                }), i1.containerOffset = f1.offset(), i1.containerPosition = f1.position(), i1.containerSize = {
                    height: f1.innerHeight() - l1[3],
                    width: f1.innerWidth() - l1[1]
                };
                var c1 = i1.containerOffset, h1 = i1.containerSize.height, p1 = i1.containerSize.width, d1 = e1.ui.hasScroll(a1, "left") ? a1.scrollWidth : p1, v1 = e1.ui.hasScroll(a1) ? a1.scrollHeight : h1;
                i1.parentData = {
                    element: a1,
                    left: c1.left,
                    top: c1.top,
                    width: d1,
                    height: v1
                };
            }
        },
        resize: function(t1, n1) {
            var r1 = e1(this).data("resizable"), i1 = r1.options, s1 = r1.containerSize, o1 = r1.containerOffset, u1 = r1.size, a1 = r1.position, f1 = r1._aspectRatio || t1.shiftKey, l1 = {
                top: 0,
                left: 0
            }, c1 = r1.containerElement;
            c1[0] != document && /static/.test(c1.css("position")) && (l1 = o1), a1.left < (r1._helper ? o1.left : 0) && (r1.size.width = r1.size.width + (r1._helper ? r1.position.left - o1.left : r1.position.left - l1.left), f1 && (r1.size.height = r1.size.width / r1.aspectRatio), r1.position.left = i1.helper ? o1.left : 0), a1.top < (r1._helper ? o1.top : 0) && (r1.size.height = r1.size.height + (r1._helper ? r1.position.top - o1.top : r1.position.top), f1 && (r1.size.width = r1.size.height * r1.aspectRatio), r1.position.top = r1._helper ? o1.top : 0), r1.offset.left = r1.parentData.left + r1.position.left, r1.offset.top = r1.parentData.top + r1.position.top;
            var h1 = Math.abs((r1._helper ? r1.offset.left - l1.left : r1.offset.left - l1.left) + r1.sizeDiff.width), p1 = Math.abs((r1._helper ? r1.offset.top - l1.top : r1.offset.top - o1.top) + r1.sizeDiff.height), d1 = r1.containerElement.get(0) == r1.element.parent().get(0), v1 = /relative|absolute/.test(r1.containerElement.css("position"));
            d1 && v1 && (h1 -= r1.parentData.left), h1 + r1.size.width >= r1.parentData.width && (r1.size.width = r1.parentData.width - h1, f1 && (r1.size.height = r1.size.width / r1.aspectRatio)), p1 + r1.size.height >= r1.parentData.height && (r1.size.height = r1.parentData.height - p1, f1 && (r1.size.width = r1.size.height * r1.aspectRatio));
        },
        stop: function(t1, n1) {
            var r1 = e1(this).data("resizable"), i1 = r1.options, s1 = r1.position, o1 = r1.containerOffset, u1 = r1.containerPosition, a1 = r1.containerElement, f1 = e1(r1.helper), l1 = f1.offset(), c1 = f1.outerWidth() - r1.sizeDiff.width, h1 = f1.outerHeight() - r1.sizeDiff.height;
            r1._helper && !i1.animate && /relative/.test(a1.css("position")) && e1(this).css({
                left: l1.left - u1.left - o1.left,
                width: c1,
                height: h1
            }), r1._helper && !i1.animate && /static/.test(a1.css("position")) && e1(this).css({
                left: l1.left - u1.left - o1.left,
                width: c1,
                height: h1
            });
        }
    }), e1.ui.plugin.add("resizable", "ghost", {
        start: function(t1, n1) {
            var r1 = e1(this).data("resizable"), i1 = r1.options, s1 = r1.size;
            r1.ghost = r1.originalElement.clone(), r1.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: s1.height,
                width: s1.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass(typeof i1.ghost == "string" ? i1.ghost : ""), r1.ghost.appendTo(r1.helper);
        },
        resize: function(t1, n1) {
            var r1 = e1(this).data("resizable"), i1 = r1.options;
            r1.ghost && r1.ghost.css({
                position: "relative",
                height: r1.size.height,
                width: r1.size.width
            });
        },
        stop: function(t1, n1) {
            var r1 = e1(this).data("resizable"), i1 = r1.options;
            r1.ghost && r1.helper && r1.helper.get(0).removeChild(r1.ghost.get(0));
        }
    }), e1.ui.plugin.add("resizable", "grid", {
        resize: function(t1, n1) {
            var r1 = e1(this).data("resizable"), i1 = r1.options, s1 = r1.size, o1 = r1.originalSize, u1 = r1.originalPosition, a1 = r1.axis, f1 = i1._aspectRatio || t1.shiftKey;
            i1.grid = typeof i1.grid == "number" ? [
                i1.grid,
                i1.grid
            ] : i1.grid;
            var l1 = Math.round((s1.width - o1.width) / (i1.grid[0] || 1)) * (i1.grid[0] || 1), c1 = Math.round((s1.height - o1.height) / (i1.grid[1] || 1)) * (i1.grid[1] || 1);
            /^(se|s|e)$/.test(a1) ? (r1.size.width = o1.width + l1, r1.size.height = o1.height + c1) : /^(ne)$/.test(a1) ? (r1.size.width = o1.width + l1, r1.size.height = o1.height + c1, r1.position.top = u1.top - c1) : /^(sw)$/.test(a1) ? (r1.size.width = o1.width + l1, r1.size.height = o1.height + c1, r1.position.left = u1.left - l1) : (r1.size.width = o1.width + l1, r1.size.height = o1.height + c1, r1.position.top = u1.top - c1, r1.position.left = u1.left - l1);
        }
    });
    var n1 = function(e1) {
        return parseInt(e1, 10) || 0;
    }, r1 = function(e1) {
        return !isNaN(parseInt(e1, 10));
    };
}(jQuery), function(e1, t1) {
    e1.widget("ui.selectable", e1.ui.mouse, {
        version: "1.9.0",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch"
        },
        _create: function() {
            var t1 = this;
            this.element.addClass("ui-selectable"), this.dragged = !1;
            var n1;
            this.refresh = function() {
                n1 = e1(t1.options.filter, t1.element[0]), n1.addClass("ui-selectee"), n1.each(function() {
                    var t1 = e1(this), n1 = t1.offset();
                    e1.data(this, "selectable-item", {
                        element: this,
                        $element: t1,
                        left: n1.left,
                        top: n1.top,
                        right: n1.left + t1.outerWidth(),
                        bottom: n1.top + t1.outerHeight(),
                        startselected: !1,
                        selected: t1.hasClass("ui-selected"),
                        selecting: t1.hasClass("ui-selecting"),
                        unselecting: t1.hasClass("ui-unselecting")
                    });
                });
            }, this.refresh(), this.selectees = n1.addClass("ui-selectee"), this._mouseInit(), this.helper = e1("<div class='ui-selectable-helper'></div>");
        },
        _destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy();
        },
        _mouseStart: function(t1) {
            var n1 = this;
            this.opos = [
                t1.pageX,
                t1.pageY
            ];
            if (this.options.disabled) return;
            var r1 = this.options;
            this.selectees = e1(r1.filter, this.element[0]), this._trigger("start", t1), e1(r1.appendTo).append(this.helper), this.helper.css({
                left: t1.clientX,
                top: t1.clientY,
                width: 0,
                height: 0
            }), r1.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var r1 = e1.data(this, "selectable-item");
                r1.startselected = !0, !t1.metaKey && !t1.ctrlKey && (r1.$element.removeClass("ui-selected"), r1.selected = !1, r1.$element.addClass("ui-unselecting"), r1.unselecting = !0, n1._trigger("unselecting", t1, {
                    unselecting: r1.element
                }));
            }), e1(t1.target).parents().andSelf().each(function() {
                var r1 = e1.data(this, "selectable-item");
                if (r1) {
                    var i1 = !t1.metaKey && !t1.ctrlKey || !r1.$element.hasClass("ui-selected");
                    return r1.$element.removeClass(i1 ? "ui-unselecting" : "ui-selected").addClass(i1 ? "ui-selecting" : "ui-unselecting"), r1.unselecting = !i1, r1.selecting = i1, r1.selected = i1, i1 ? n1._trigger("selecting", t1, {
                        selecting: r1.element
                    }) : n1._trigger("unselecting", t1, {
                        unselecting: r1.element
                    }), !1;
                }
            });
        },
        _mouseDrag: function(t1) {
            var n1 = this;
            this.dragged = !0;
            if (this.options.disabled) return;
            var r1 = this.options, i1 = this.opos[0], s1 = this.opos[1], o1 = t1.pageX, u1 = t1.pageY;
            if (i1 > o1) {
                var a1 = o1;
                o1 = i1, i1 = a1;
            }
            if (s1 > u1) {
                var a1 = u1;
                u1 = s1, s1 = a1;
            }
            return this.helper.css({
                left: i1,
                top: s1,
                width: o1 - i1,
                height: u1 - s1
            }), this.selectees.each(function() {
                var a1 = e1.data(this, "selectable-item");
                if (!a1 || a1.element == n1.element[0]) return;
                var f1 = !1;
                r1.tolerance == "touch" ? f1 = !(a1.left > o1 || a1.right < i1 || a1.top > u1 || a1.bottom < s1) : r1.tolerance == "fit" && (f1 = a1.left > i1 && a1.right < o1 && a1.top > s1 && a1.bottom < u1), f1 ? (a1.selected && (a1.$element.removeClass("ui-selected"), a1.selected = !1), a1.unselecting && (a1.$element.removeClass("ui-unselecting"), a1.unselecting = !1), a1.selecting || (a1.$element.addClass("ui-selecting"), a1.selecting = !0, n1._trigger("selecting", t1, {
                    selecting: a1.element
                }))) : (a1.selecting && ((t1.metaKey || t1.ctrlKey) && a1.startselected ? (a1.$element.removeClass("ui-selecting"), a1.selecting = !1, a1.$element.addClass("ui-selected"), a1.selected = !0) : (a1.$element.removeClass("ui-selecting"), a1.selecting = !1, a1.startselected && (a1.$element.addClass("ui-unselecting"), a1.unselecting = !0), n1._trigger("unselecting", t1, {
                    unselecting: a1.element
                }))), a1.selected && !t1.metaKey && !t1.ctrlKey && !a1.startselected && (a1.$element.removeClass("ui-selected"), a1.selected = !1, a1.$element.addClass("ui-unselecting"), a1.unselecting = !0, n1._trigger("unselecting", t1, {
                    unselecting: a1.element
                })));
            }), !1;
        },
        _mouseStop: function(t1) {
            var n1 = this;
            this.dragged = !1;
            var r1 = this.options;
            return e1(".ui-unselecting", this.element[0]).each(function() {
                var r1 = e1.data(this, "selectable-item");
                r1.$element.removeClass("ui-unselecting"), r1.unselecting = !1, r1.startselected = !1, n1._trigger("unselected", t1, {
                    unselected: r1.element
                });
            }), e1(".ui-selecting", this.element[0]).each(function() {
                var r1 = e1.data(this, "selectable-item");
                r1.$element.removeClass("ui-selecting").addClass("ui-selected"), r1.selecting = !1, r1.selected = !0, r1.startselected = !0, n1._trigger("selected", t1, {
                    selected: r1.element
                });
            }), this._trigger("stop", t1), this.helper.remove(), !1;
        }
    });
}(jQuery), function(e1, t1) {
    e1.widget("ui.sortable", e1.ui.mouse, {
        version: "1.9.0",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3
        },
        _create: function() {
            var e1 = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? e1.axis === "x" || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0;
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for(var e1 = this.items.length - 1; e1 >= 0; e1--)this.items[e1].item.removeData(this.widgetName + "-item");
            return this;
        },
        _setOption: function(t1, n1) {
            t1 === "disabled" ? (this.options[t1] = n1, this.widget().toggleClass("ui-sortable-disabled", !!n1)) : e1.Widget.prototype._setOption.apply(this, arguments);
        },
        _mouseCapture: function(t1, n1) {
            var r1 = this;
            if (this.reverting) return !1;
            if (this.options.disabled || this.options.type == "static") return !1;
            this._refreshItems(t1);
            var i1 = null, s1 = e1(t1.target).parents().each(function() {
                if (e1.data(this, r1.widgetName + "-item") == r1) return i1 = e1(this), !1;
            });
            e1.data(t1.target, r1.widgetName + "-item") == r1 && (i1 = e1(t1.target));
            if (!i1) return !1;
            if (this.options.handle && !n1) {
                var o1 = !1;
                e1(this.options.handle, i1).find("*").andSelf().each(function() {
                    this == t1.target && (o1 = !0);
                });
                if (!o1) return !1;
            }
            return this.currentItem = i1, this._removeCurrentsFromItems(), !0;
        },
        _mouseStart: function(t1, n1, r1) {
            var i1 = this.options;
            this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t1), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, e1.extend(this.offset, {
                click: {
                    left: t1.pageX - this.offset.left,
                    top: t1.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t1), this.originalPageX = t1.pageX, this.originalPageY = t1.pageY, i1.cursorAt && this._adjustOffsetFromHelper(i1.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), i1.containment && this._setContainment(), i1.cursor && (e1("body").css("cursor") && (this._storedCursor = e1("body").css("cursor")), e1("body").css("cursor", i1.cursor)), i1.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", i1.opacity)), i1.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", i1.zIndex)), this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t1, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions();
            if (!r1) for(var s1 = this.containers.length - 1; s1 >= 0; s1--)this.containers[s1]._trigger("activate", t1, this._uiHash(this));
            return e1.ui.ddmanager && (e1.ui.ddmanager.current = this), e1.ui.ddmanager && !i1.dropBehaviour && e1.ui.ddmanager.prepareOffsets(this, t1), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t1), !0;
        },
        _mouseDrag: function(t1) {
            this.position = this._generatePosition(t1), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs);
            if (this.options.scroll) {
                var n1 = this.options, r1 = !1;
                this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t1.pageY < n1.scrollSensitivity ? this.scrollParent[0].scrollTop = r1 = this.scrollParent[0].scrollTop + n1.scrollSpeed : t1.pageY - this.overflowOffset.top < n1.scrollSensitivity && (this.scrollParent[0].scrollTop = r1 = this.scrollParent[0].scrollTop - n1.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t1.pageX < n1.scrollSensitivity ? this.scrollParent[0].scrollLeft = r1 = this.scrollParent[0].scrollLeft + n1.scrollSpeed : t1.pageX - this.overflowOffset.left < n1.scrollSensitivity && (this.scrollParent[0].scrollLeft = r1 = this.scrollParent[0].scrollLeft - n1.scrollSpeed)) : (t1.pageY - e1(document).scrollTop() < n1.scrollSensitivity ? r1 = e1(document).scrollTop(e1(document).scrollTop() - n1.scrollSpeed) : e1(window).height() - (t1.pageY - e1(document).scrollTop()) < n1.scrollSensitivity && (r1 = e1(document).scrollTop(e1(document).scrollTop() + n1.scrollSpeed)), t1.pageX - e1(document).scrollLeft() < n1.scrollSensitivity ? r1 = e1(document).scrollLeft(e1(document).scrollLeft() - n1.scrollSpeed) : e1(window).width() - (t1.pageX - e1(document).scrollLeft()) < n1.scrollSensitivity && (r1 = e1(document).scrollLeft(e1(document).scrollLeft() + n1.scrollSpeed))), r1 !== !1 && e1.ui.ddmanager && !n1.dropBehaviour && e1.ui.ddmanager.prepareOffsets(this, t1);
            }
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
            for(var i1 = this.items.length - 1; i1 >= 0; i1--){
                var s1 = this.items[i1], o1 = s1.item[0], u1 = this._intersectsWithPointer(s1);
                if (!u1) continue;
                if (s1.instance !== this.currentContainer) continue;
                if (o1 != this.currentItem[0] && this.placeholder[u1 == 1 ? "next" : "prev"]()[0] != o1 && !e1.contains(this.placeholder[0], o1) && (this.options.type == "semi-dynamic" ? !e1.contains(this.element[0], o1) : !0)) {
                    this.direction = u1 == 1 ? "down" : "up";
                    if (this.options.tolerance != "pointer" && !this._intersectsWithSides(s1)) break;
                    this._rearrange(t1, s1), this._trigger("change", t1, this._uiHash());
                    break;
                }
            }
            return this._contactContainers(t1), e1.ui.ddmanager && e1.ui.ddmanager.drag(this, t1), this._trigger("sort", t1, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1;
        },
        _mouseStop: function(t1, n1) {
            if (!t1) return;
            e1.ui.ddmanager && !this.options.dropBehaviour && e1.ui.ddmanager.drop(this, t1);
            if (this.options.revert) {
                var r1 = this, i1 = this.placeholder.offset();
                this.reverting = !0, e1(this.helper).animate({
                    left: i1.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                    top: i1.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                }, parseInt(this.options.revert, 10) || 500, function() {
                    r1._clear(t1);
                });
            } else this._clear(t1, n1);
            return !1;
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), this.options.helper == "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for(var t1 = this.containers.length - 1; t1 >= 0; t1--)this.containers[t1]._trigger("deactivate", null, this._uiHash(this)), this.containers[t1].containerCache.over && (this.containers[t1]._trigger("out", null, this._uiHash(this)), this.containers[t1].containerCache.over = 0);
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.options.helper != "original" && this.helper && this.helper[0].parentNode && this.helper.remove(), e1.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? e1(this.domPosition.prev).after(this.currentItem) : e1(this.domPosition.parent).prepend(this.currentItem)), this;
        },
        serialize: function(t1) {
            var n1 = this._getItemsAsjQuery(t1 && t1.connected), r1 = [];
            return t1 = t1 || {}, e1(n1).each(function() {
                var n1 = (e1(t1.item || this).attr(t1.attribute || "id") || "").match(t1.expression || /(.+)[-=_](.+)/);
                n1 && r1.push((t1.key || n1[1] + "[]") + "=" + (t1.key && t1.expression ? n1[1] : n1[2]));
            }), !r1.length && t1.key && r1.push(t1.key + "="), r1.join("&");
        },
        toArray: function(t1) {
            var n1 = this._getItemsAsjQuery(t1 && t1.connected), r1 = [];
            return t1 = t1 || {}, n1.each(function() {
                r1.push(e1(t1.item || this).attr(t1.attribute || "id") || "");
            }), r1;
        },
        _intersectsWith: function(e1) {
            var t1 = this.positionAbs.left, n1 = t1 + this.helperProportions.width, r1 = this.positionAbs.top, i1 = r1 + this.helperProportions.height, s1 = e1.left, o1 = s1 + e1.width, u1 = e1.top, a1 = u1 + e1.height, f1 = this.offset.click.top, l1 = this.offset.click.left, c1 = r1 + f1 > u1 && r1 + f1 < a1 && t1 + l1 > s1 && t1 + l1 < o1;
            return this.options.tolerance == "pointer" || this.options.forcePointerForContainers || this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > e1[this.floating ? "width" : "height"] ? c1 : s1 < t1 + this.helperProportions.width / 2 && n1 - this.helperProportions.width / 2 < o1 && u1 < r1 + this.helperProportions.height / 2 && i1 - this.helperProportions.height / 2 < a1;
        },
        _intersectsWithPointer: function(t1) {
            var n1 = this.options.axis === "x" || e1.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t1.top, t1.height), r1 = this.options.axis === "y" || e1.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t1.left, t1.width), i1 = n1 && r1, s1 = this._getDragVerticalDirection(), o1 = this._getDragHorizontalDirection();
            return i1 ? this.floating ? o1 && o1 == "right" || s1 == "down" ? 2 : 1 : s1 && (s1 == "down" ? 2 : 1) : !1;
        },
        _intersectsWithSides: function(t1) {
            var n1 = e1.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t1.top + t1.height / 2, t1.height), r1 = e1.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t1.left + t1.width / 2, t1.width), i1 = this._getDragVerticalDirection(), s1 = this._getDragHorizontalDirection();
            return this.floating && s1 ? s1 == "right" && r1 || s1 == "left" && !r1 : i1 && (i1 == "down" && n1 || i1 == "up" && !n1);
        },
        _getDragVerticalDirection: function() {
            var e1 = this.positionAbs.top - this.lastPositionAbs.top;
            return e1 != 0 && (e1 > 0 ? "down" : "up");
        },
        _getDragHorizontalDirection: function() {
            var e1 = this.positionAbs.left - this.lastPositionAbs.left;
            return e1 != 0 && (e1 > 0 ? "right" : "left");
        },
        refresh: function(e1) {
            return this._refreshItems(e1), this.refreshPositions(), this;
        },
        _connectWith: function() {
            var e1 = this.options;
            return e1.connectWith.constructor == String ? [
                e1.connectWith
            ] : e1.connectWith;
        },
        _getItemsAsjQuery: function(t1) {
            var n1 = [], r1 = [], i1 = this._connectWith();
            if (i1 && t1) for(var s1 = i1.length - 1; s1 >= 0; s1--){
                var o1 = e1(i1[s1]);
                for(var u1 = o1.length - 1; u1 >= 0; u1--){
                    var a1 = e1.data(o1[u1], this.widgetName);
                    a1 && a1 != this && !a1.options.disabled && r1.push([
                        e1.isFunction(a1.options.items) ? a1.options.items.call(a1.element) : e1(a1.options.items, a1.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),
                        a1
                    ]);
                }
            }
            r1.push([
                e1.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : e1(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),
                this
            ]);
            for(var s1 = r1.length - 1; s1 >= 0; s1--)r1[s1][0].each(function() {
                n1.push(this);
            });
            return e1(n1);
        },
        _removeCurrentsFromItems: function() {
            var e1 = this.currentItem.find(":data(" + this.widgetName + "-item)");
            for(var t1 = 0; t1 < this.items.length; t1++)for(var n1 = 0; n1 < e1.length; n1++)e1[n1] == this.items[t1].item[0] && this.items.splice(t1, 1);
        },
        _refreshItems: function(t1) {
            this.items = [], this.containers = [
                this
            ];
            var n1 = this.items, r1 = [
                [
                    e1.isFunction(this.options.items) ? this.options.items.call(this.element[0], t1, {
                        item: this.currentItem
                    }) : e1(this.options.items, this.element),
                    this
                ]
            ], i1 = this._connectWith();
            if (i1 && this.ready) for(var s1 = i1.length - 1; s1 >= 0; s1--){
                var o1 = e1(i1[s1]);
                for(var u1 = o1.length - 1; u1 >= 0; u1--){
                    var a1 = e1.data(o1[u1], this.widgetName);
                    a1 && a1 != this && !a1.options.disabled && (r1.push([
                        e1.isFunction(a1.options.items) ? a1.options.items.call(a1.element[0], t1, {
                            item: this.currentItem
                        }) : e1(a1.options.items, a1.element),
                        a1
                    ]), this.containers.push(a1));
                }
            }
            for(var s1 = r1.length - 1; s1 >= 0; s1--){
                var f1 = r1[s1][1], l1 = r1[s1][0];
                for(var u1 = 0, c1 = l1.length; u1 < c1; u1++){
                    var h1 = e1(l1[u1]);
                    h1.data(this.widgetName + "-item", f1), n1.push({
                        item: h1,
                        instance: f1,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    });
                }
            }
        },
        refreshPositions: function(t1) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            for(var n1 = this.items.length - 1; n1 >= 0; n1--){
                var r1 = this.items[n1];
                if (r1.instance != this.currentContainer && this.currentContainer && r1.item[0] != this.currentItem[0]) continue;
                var i1 = this.options.toleranceElement ? e1(this.options.toleranceElement, r1.item) : r1.item;
                t1 || (r1.width = i1.outerWidth(), r1.height = i1.outerHeight());
                var s1 = i1.offset();
                r1.left = s1.left, r1.top = s1.top;
            }
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else for(var n1 = this.containers.length - 1; n1 >= 0; n1--){
                var s1 = this.containers[n1].element.offset();
                this.containers[n1].containerCache.left = s1.left, this.containers[n1].containerCache.top = s1.top, this.containers[n1].containerCache.width = this.containers[n1].element.outerWidth(), this.containers[n1].containerCache.height = this.containers[n1].element.outerHeight();
            }
            return this;
        },
        _createPlaceholder: function(t1) {
            t1 = t1 || this;
            var n1 = t1.options;
            if (!n1.placeholder || n1.placeholder.constructor == String) {
                var r1 = n1.placeholder;
                n1.placeholder = {
                    element: function() {
                        var n1 = e1(document.createElement(t1.currentItem[0].nodeName)).addClass(r1 || t1.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        return r1 || (n1.style.visibility = "hidden"), n1;
                    },
                    update: function(e1, i1) {
                        if (r1 && !n1.forcePlaceholderSize) return;
                        i1.height() || i1.height(t1.currentItem.innerHeight() - parseInt(t1.currentItem.css("paddingTop") || 0, 10) - parseInt(t1.currentItem.css("paddingBottom") || 0, 10)), i1.width() || i1.width(t1.currentItem.innerWidth() - parseInt(t1.currentItem.css("paddingLeft") || 0, 10) - parseInt(t1.currentItem.css("paddingRight") || 0, 10));
                    }
                };
            }
            t1.placeholder = e1(n1.placeholder.element.call(t1.element, t1.currentItem)), t1.currentItem.after(t1.placeholder), n1.placeholder.update(t1, t1.placeholder);
        },
        _contactContainers: function(t1) {
            var n1 = null, r1 = null;
            for(var i1 = this.containers.length - 1; i1 >= 0; i1--){
                if (e1.contains(this.currentItem[0], this.containers[i1].element[0])) continue;
                if (this._intersectsWith(this.containers[i1].containerCache)) {
                    if (n1 && e1.contains(this.containers[i1].element[0], n1.element[0])) continue;
                    n1 = this.containers[i1], r1 = i1;
                } else this.containers[i1].containerCache.over && (this.containers[i1]._trigger("out", t1, this._uiHash(this)), this.containers[i1].containerCache.over = 0);
            }
            if (!n1) return;
            if (this.containers.length === 1) this.containers[r1]._trigger("over", t1, this._uiHash(this)), this.containers[r1].containerCache.over = 1;
            else if (this.currentContainer != this.containers[r1]) {
                var s1 = 1e4, o1 = null, u1 = this.positionAbs[this.containers[r1].floating ? "left" : "top"];
                for(var a1 = this.items.length - 1; a1 >= 0; a1--){
                    if (!e1.contains(this.containers[r1].element[0], this.items[a1].item[0])) continue;
                    var f1 = this.containers[r1].floating ? this.items[a1].item.offset().left : this.items[a1].item.offset().top;
                    Math.abs(f1 - u1) < s1 && (s1 = Math.abs(f1 - u1), o1 = this.items[a1], this.direction = f1 - u1 > 0 ? "down" : "up");
                }
                if (!o1 && !this.options.dropOnEmpty) return;
                this.currentContainer = this.containers[r1], o1 ? this._rearrange(t1, o1, null, !0) : this._rearrange(t1, null, this.containers[r1].element, !0), this._trigger("change", t1, this._uiHash()), this.containers[r1]._trigger("change", t1, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[r1]._trigger("over", t1, this._uiHash(this)), this.containers[r1].containerCache.over = 1;
            }
        },
        _createHelper: function(t1) {
            var n1 = this.options, r1 = e1.isFunction(n1.helper) ? e1(n1.helper.apply(this.element[0], [
                t1,
                this.currentItem
            ])) : n1.helper == "clone" ? this.currentItem.clone() : this.currentItem;
            return r1.parents("body").length || e1(n1.appendTo != "parent" ? n1.appendTo : this.currentItem[0].parentNode)[0].appendChild(r1[0]), r1[0] == this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (r1[0].style.width == "" || n1.forceHelperSize) && r1.width(this.currentItem.width()), (r1[0].style.height == "" || n1.forceHelperSize) && r1.height(this.currentItem.height()), r1;
        },
        _adjustOffsetFromHelper: function(t1) {
            typeof t1 == "string" && (t1 = t1.split(" ")), e1.isArray(t1) && (t1 = {
                left: +t1[0],
                top: +t1[1] || 0
            }), "left" in t1 && (this.offset.click.left = t1.left + this.margins.left), "right" in t1 && (this.offset.click.left = this.helperProportions.width - t1.right + this.margins.left), "top" in t1 && (this.offset.click.top = t1.top + this.margins.top), "bottom" in t1 && (this.offset.click.top = this.helperProportions.height - t1.bottom + this.margins.top);
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t1 = this.offsetParent.offset();
            this.cssPosition == "absolute" && this.scrollParent[0] != document && e1.contains(this.scrollParent[0], this.offsetParent[0]) && (t1.left += this.scrollParent.scrollLeft(), t1.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && e1.browser.msie) t1 = {
                top: 0,
                left: 0
            };
            return {
                top: t1.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t1.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if (this.cssPosition == "relative") {
                var e1 = this.currentItem.position();
                return {
                    top: e1.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e1.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                };
            }
            return {
                top: 0,
                left: 0
            };
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },
        _setContainment: function() {
            var t1 = this.options;
            t1.containment == "parent" && (t1.containment = this.helper[0].parentNode);
            if (t1.containment == "document" || t1.containment == "window") this.containment = [
                0 - this.offset.relative.left - this.offset.parent.left,
                0 - this.offset.relative.top - this.offset.parent.top,
                e1(t1.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left,
                (e1(t1.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
            ];
            if (!/^(document|window|parent)$/.test(t1.containment)) {
                var n1 = e1(t1.containment)[0], r1 = e1(t1.containment).offset(), i1 = e1(n1).css("overflow") != "hidden";
                this.containment = [
                    r1.left + (parseInt(e1(n1).css("borderLeftWidth"), 10) || 0) + (parseInt(e1(n1).css("paddingLeft"), 10) || 0) - this.margins.left,
                    r1.top + (parseInt(e1(n1).css("borderTopWidth"), 10) || 0) + (parseInt(e1(n1).css("paddingTop"), 10) || 0) - this.margins.top,
                    r1.left + (i1 ? Math.max(n1.scrollWidth, n1.offsetWidth) : n1.offsetWidth) - (parseInt(e1(n1).css("borderLeftWidth"), 10) || 0) - (parseInt(e1(n1).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left,
                    r1.top + (i1 ? Math.max(n1.scrollHeight, n1.offsetHeight) : n1.offsetHeight) - (parseInt(e1(n1).css("borderTopWidth"), 10) || 0) - (parseInt(e1(n1).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top
                ];
            }
        },
        _convertPositionTo: function(t1, n1) {
            n1 || (n1 = this.position);
            var r1 = t1 == "absolute" ? 1 : -1, i1 = this.options, s1 = this.cssPosition != "absolute" || this.scrollParent[0] != document && !!e1.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, o1 = /(html|body)/i.test(s1[0].tagName);
            return {
                top: n1.top + this.offset.relative.top * r1 + this.offset.parent.top * r1 - (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : o1 ? 0 : s1.scrollTop()) * r1,
                left: n1.left + this.offset.relative.left * r1 + this.offset.parent.left * r1 - (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : o1 ? 0 : s1.scrollLeft()) * r1
            };
        },
        _generatePosition: function(t1) {
            var n1 = this.options, r1 = this.cssPosition != "absolute" || this.scrollParent[0] != document && !!e1.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, i1 = /(html|body)/i.test(r1[0].tagName);
            this.cssPosition == "relative" && (this.scrollParent[0] == document || this.scrollParent[0] == this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset());
            var s1 = t1.pageX, o1 = t1.pageY;
            if (this.originalPosition) {
                this.containment && (t1.pageX - this.offset.click.left < this.containment[0] && (s1 = this.containment[0] + this.offset.click.left), t1.pageY - this.offset.click.top < this.containment[1] && (o1 = this.containment[1] + this.offset.click.top), t1.pageX - this.offset.click.left > this.containment[2] && (s1 = this.containment[2] + this.offset.click.left), t1.pageY - this.offset.click.top > this.containment[3] && (o1 = this.containment[3] + this.offset.click.top));
                if (n1.grid) {
                    var u1 = this.originalPageY + Math.round((o1 - this.originalPageY) / n1.grid[1]) * n1.grid[1];
                    o1 = this.containment ? u1 - this.offset.click.top < this.containment[1] || u1 - this.offset.click.top > this.containment[3] ? u1 - this.offset.click.top < this.containment[1] ? u1 + n1.grid[1] : u1 - n1.grid[1] : u1 : u1;
                    var a1 = this.originalPageX + Math.round((s1 - this.originalPageX) / n1.grid[0]) * n1.grid[0];
                    s1 = this.containment ? a1 - this.offset.click.left < this.containment[0] || a1 - this.offset.click.left > this.containment[2] ? a1 - this.offset.click.left < this.containment[0] ? a1 + n1.grid[0] : a1 - n1.grid[0] : a1 : a1;
                }
            }
            return {
                top: o1 - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : i1 ? 0 : r1.scrollTop()),
                left: s1 - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i1 ? 0 : r1.scrollLeft())
            };
        },
        _rearrange: function(e1, t1, n1, r1) {
            n1 ? n1[0].appendChild(this.placeholder[0]) : t1.item[0].parentNode.insertBefore(this.placeholder[0], this.direction == "down" ? t1.item[0] : t1.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var i1 = this.counter;
            this._delay(function() {
                i1 == this.counter && this.refreshPositions(!r1);
            });
        },
        _clear: function(t1, n1) {
            this.reverting = !1;
            var r1 = [];
            !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null;
            if (this.helper[0] == this.currentItem[0]) {
                for(var i1 in this._storedCSS)if (this._storedCSS[i1] == "auto" || this._storedCSS[i1] == "static") this._storedCSS[i1] = "";
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
            } else this.currentItem.show();
            this.fromOutside && !n1 && r1.push(function(e1) {
                this._trigger("receive", e1, this._uiHash(this.fromOutside));
            }), (this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !n1 && r1.push(function(e1) {
                this._trigger("update", e1, this._uiHash());
            }), this !== this.currentContainer && (n1 || (r1.push(function(e1) {
                this._trigger("remove", e1, this._uiHash());
            }), r1.push((function(e1) {
                return function(t1) {
                    e1._trigger("receive", t1, this._uiHash(this));
                };
            }).call(this, this.currentContainer)), r1.push((function(e1) {
                return function(t1) {
                    e1._trigger("update", t1, this._uiHash(this));
                };
            }).call(this, this.currentContainer))));
            for(var i1 = this.containers.length - 1; i1 >= 0; i1--)n1 || r1.push((function(e1) {
                return function(t1) {
                    e1._trigger("deactivate", t1, this._uiHash(this));
                };
            }).call(this, this.containers[i1])), this.containers[i1].containerCache.over && (r1.push((function(e1) {
                return function(t1) {
                    e1._trigger("out", t1, this._uiHash(this));
                };
            }).call(this, this.containers[i1])), this.containers[i1].containerCache.over = 0);
            this._storedCursor && e1("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex), this.dragging = !1;
            if (this.cancelHelperRemoval) {
                if (!n1) {
                    this._trigger("beforeStop", t1, this._uiHash());
                    for(var i1 = 0; i1 < r1.length; i1++)r1[i1].call(this, t1);
                    this._trigger("stop", t1, this._uiHash());
                }
                return this.fromOutside = !1, !1;
            }
            n1 || this._trigger("beforeStop", t1, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null;
            if (!n1) {
                for(var i1 = 0; i1 < r1.length; i1++)r1[i1].call(this, t1);
                this._trigger("stop", t1, this._uiHash());
            }
            return this.fromOutside = !1, !0;
        },
        _trigger: function() {
            e1.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel();
        },
        _uiHash: function(t1) {
            var n1 = t1 || this;
            return {
                helper: n1.helper,
                placeholder: n1.placeholder || e1([]),
                position: n1.position,
                originalPosition: n1.originalPosition,
                offset: n1.positionAbs,
                item: n1.currentItem,
                sender: t1 ? t1.element : null
            };
        }
    });
}(jQuery), jQuery.effects || function(e1, t1) {
    var n1 = e1.uiBackCompat !== !1, r1 = "ui-effects-";
    e1.effects = {
        effect: {}
    }, function(t1, n1) {
        function p1(e1, t1, n1) {
            var r1 = a1[t1.type] || {};
            return e1 == null ? n1 || !t1.def ? null : t1.def : (e1 = r1.floor ? ~~e1 : parseFloat(e1), isNaN(e1) ? t1.def : r1.mod ? (e1 + r1.mod) % r1.mod : 0 > e1 ? 0 : r1.max < e1 ? r1.max : e1);
        }
        function d1(e1) {
            var n1 = o1(), r1 = n1._rgba = [];
            return e1 = e1.toLowerCase(), h1(s1, function(t1, i1) {
                var s1, o1 = i1.re.exec(e1), a1 = o1 && i1.parse(o1), f1 = i1.space || "rgba";
                if (a1) return s1 = n1[f1](a1), n1[u1[f1].cache] = s1[u1[f1].cache], r1 = n1._rgba = s1._rgba, !1;
            }), r1.length ? (r1.join() === "0,0,0,0" && t1.extend(r1, c1.transparent), n1) : c1[e1];
        }
        function v1(e1, t1, n1) {
            return n1 = (n1 + 1) % 1, n1 * 6 < 1 ? e1 + (t1 - e1) * n1 * 6 : n1 * 2 < 1 ? t1 : n1 * 3 < 2 ? e1 + (t1 - e1) * (2 / 3 - n1) * 6 : e1;
        }
        var r1 = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "), i1 = /^([\-+])=\s*(\d+\.?\d*)/, s1 = [
            {
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function(e1) {
                    return [
                        e1[1],
                        e1[2],
                        e1[3],
                        e1[4]
                    ];
                }
            },
            {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function(e1) {
                    return [
                        e1[1] * 2.55,
                        e1[2] * 2.55,
                        e1[3] * 2.55,
                        e1[4]
                    ];
                }
            },
            {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                parse: function(e1) {
                    return [
                        parseInt(e1[1], 16),
                        parseInt(e1[2], 16),
                        parseInt(e1[3], 16)
                    ];
                }
            },
            {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                parse: function(e1) {
                    return [
                        parseInt(e1[1] + e1[1], 16),
                        parseInt(e1[2] + e1[2], 16),
                        parseInt(e1[3] + e1[3], 16)
                    ];
                }
            },
            {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function(e1) {
                    return [
                        e1[1],
                        e1[2] / 100,
                        e1[3] / 100,
                        e1[4]
                    ];
                }
            }
        ], o1 = t1.Color = function(e1, n1, r1, i1) {
            return new t1.Color.fn.parse(e1, n1, r1, i1);
        }, u1 = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, a1 = {
            "byte": {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        }, f1 = o1.support = {}, l1 = t1("<p>")[0], c1, h1 = t1.each;
        l1.style.cssText = "background-color:rgba(1,1,1,.5)", f1.rgba = l1.style.backgroundColor.indexOf("rgba") > -1, h1(u1, function(e1, t1) {
            t1.cache = "_" + e1, t1.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            };
        }), o1.fn = t1.extend(o1.prototype, {
            parse: function(r1, i1, s1, a1) {
                if (r1 === n1) return this._rgba = [
                    null,
                    null,
                    null,
                    null
                ], this;
                if (r1.jquery || r1.nodeType) r1 = t1(r1).css(i1), i1 = n1;
                var f1 = this, l1 = t1.type(r1), v1 = this._rgba = [], m1;
                i1 !== n1 && (r1 = [
                    r1,
                    i1,
                    s1,
                    a1
                ], l1 = "array");
                if (l1 === "string") return this.parse(d1(r1) || c1._default);
                if (l1 === "array") return h1(u1.rgba.props, function(e1, t1) {
                    v1[t1.idx] = p1(r1[t1.idx], t1);
                }), this;
                if (l1 === "object") return r1 instanceof o1 ? h1(u1, function(e1, t1) {
                    r1[t1.cache] && (f1[t1.cache] = r1[t1.cache].slice());
                }) : h1(u1, function(t1, n1) {
                    var i1 = n1.cache;
                    h1(n1.props, function(e1, t1) {
                        if (!f1[i1] && n1.to) {
                            if (e1 === "alpha" || r1[e1] == null) return;
                            f1[i1] = n1.to(f1._rgba);
                        }
                        f1[i1][t1.idx] = p1(r1[e1], t1, !0);
                    }), f1[i1] && e1.inArray(null, f1[i1].slice(0, 3)) < 0 && (f1[i1][3] = 1, n1.from && (f1._rgba = n1.from(f1[i1])));
                }), this;
            },
            is: function(e1) {
                var t1 = o1(e1), n1 = !0, r1 = this;
                return h1(u1, function(e1, i1) {
                    var s1, o1 = t1[i1.cache];
                    return o1 && (s1 = r1[i1.cache] || i1.to && i1.to(r1._rgba) || [], h1(i1.props, function(e1, t1) {
                        if (o1[t1.idx] != null) return n1 = o1[t1.idx] === s1[t1.idx], n1;
                    })), n1;
                }), n1;
            },
            _space: function() {
                var e1 = [], t1 = this;
                return h1(u1, function(n1, r1) {
                    t1[r1.cache] && e1.push(n1);
                }), e1.pop();
            },
            transition: function(e1, t1) {
                var n1 = o1(e1), r1 = n1._space(), i1 = u1[r1], s1 = this.alpha() === 0 ? o1("transparent") : this, f1 = s1[i1.cache] || i1.to(s1._rgba), l1 = f1.slice();
                return n1 = n1[i1.cache], h1(i1.props, function(e1, r1) {
                    var i1 = r1.idx, s1 = f1[i1], o1 = n1[i1], u1 = a1[r1.type] || {};
                    if (o1 === null) return;
                    s1 === null ? l1[i1] = o1 : (u1.mod && (o1 - s1 > u1.mod / 2 ? s1 += u1.mod : s1 - o1 > u1.mod / 2 && (s1 -= u1.mod)), l1[i1] = p1((o1 - s1) * t1 + s1, r1));
                }), this[r1](l1);
            },
            blend: function(e1) {
                if (this._rgba[3] === 1) return this;
                var n1 = this._rgba.slice(), r1 = n1.pop(), i1 = o1(e1)._rgba;
                return o1(t1.map(n1, function(e1, t1) {
                    return (1 - r1) * i1[t1] + r1 * e1;
                }));
            },
            toRgbaString: function() {
                var e1 = "rgba(", n1 = t1.map(this._rgba, function(e1, t1) {
                    return e1 == null ? t1 > 2 ? 1 : 0 : e1;
                });
                return n1[3] === 1 && (n1.pop(), e1 = "rgb("), e1 + n1.join() + ")";
            },
            toHslaString: function() {
                var e1 = "hsla(", n1 = t1.map(this.hsla(), function(e1, t1) {
                    return e1 == null && (e1 = t1 > 2 ? 1 : 0), t1 && t1 < 3 && (e1 = Math.round(e1 * 100) + "%"), e1;
                });
                return n1[3] === 1 && (n1.pop(), e1 = "hsl("), e1 + n1.join() + ")";
            },
            toHexString: function(e1) {
                var n1 = this._rgba.slice(), r1 = n1.pop();
                return e1 && n1.push(~~(r1 * 255)), "#" + t1.map(n1, function(e1, t1) {
                    return e1 = (e1 || 0).toString(16), e1.length === 1 ? "0" + e1 : e1;
                }).join("");
            },
            toString: function() {
                return this._rgba[3] === 0 ? "transparent" : this.toRgbaString();
            }
        }), o1.fn.parse.prototype = o1.fn, u1.hsla.to = function(e1) {
            if (e1[0] == null || e1[1] == null || e1[2] == null) return [
                null,
                null,
                null,
                e1[3]
            ];
            var t1 = e1[0] / 255, n1 = e1[1] / 255, r1 = e1[2] / 255, i1 = e1[3], s1 = Math.max(t1, n1, r1), o1 = Math.min(t1, n1, r1), u1 = s1 - o1, a1 = s1 + o1, f1 = a1 * .5, l1, c1;
            return o1 === s1 ? l1 = 0 : t1 === s1 ? l1 = 60 * (n1 - r1) / u1 + 360 : n1 === s1 ? l1 = 60 * (r1 - t1) / u1 + 120 : l1 = 60 * (t1 - n1) / u1 + 240, f1 === 0 || f1 === 1 ? c1 = f1 : f1 <= .5 ? c1 = u1 / a1 : c1 = u1 / (2 - a1), [
                Math.round(l1) % 360,
                c1,
                f1,
                i1 == null ? 1 : i1
            ];
        }, u1.hsla.from = function(e1) {
            if (e1[0] == null || e1[1] == null || e1[2] == null) return [
                null,
                null,
                null,
                e1[3]
            ];
            var t1 = e1[0] / 360, n1 = e1[1], r1 = e1[2], i1 = e1[3], s1 = r1 <= .5 ? r1 * (1 + n1) : r1 + n1 - r1 * n1, o1 = 2 * r1 - s1, u1, a1, f1;
            return [
                Math.round(v1(o1, s1, t1 + 1 / 3) * 255),
                Math.round(v1(o1, s1, t1) * 255),
                Math.round(v1(o1, s1, t1 - 1 / 3) * 255),
                i1
            ];
        }, h1(u1, function(e1, r1) {
            var s1 = r1.props, u1 = r1.cache, a1 = r1.to, f1 = r1.from;
            o1.fn[e1] = function(e1) {
                a1 && !this[u1] && (this[u1] = a1(this._rgba));
                if (e1 === n1) return this[u1].slice();
                var r1, i1 = t1.type(e1), l1 = i1 === "array" || i1 === "object" ? e1 : arguments, c1 = this[u1].slice();
                return h1(s1, function(e1, t1) {
                    var n1 = l1[i1 === "object" ? e1 : t1.idx];
                    n1 == null && (n1 = c1[t1.idx]), c1[t1.idx] = p1(n1, t1);
                }), f1 ? (r1 = o1(f1(c1)), r1[u1] = c1, r1) : o1(c1);
            }, h1(s1, function(n1, r1) {
                if (o1.fn[n1]) return;
                o1.fn[n1] = function(s1) {
                    var o1 = t1.type(s1), u1 = n1 === "alpha" ? this._hsla ? "hsla" : "rgba" : e1, a1 = this[u1](), f1 = a1[r1.idx], l1;
                    return o1 === "undefined" ? f1 : (o1 === "function" && (s1 = s1.call(this, f1), o1 = t1.type(s1)), s1 == null && r1.empty ? this : (o1 === "string" && (l1 = i1.exec(s1), l1 && (s1 = f1 + parseFloat(l1[2]) * (l1[1] === "+" ? 1 : -1))), a1[r1.idx] = s1, this[u1](a1)));
                };
            });
        }), h1(r1, function(e1, n1) {
            t1.cssHooks[n1] = {
                set: function(e1, r1) {
                    var i1, s1, u1 = "";
                    if (t1.type(r1) !== "string" || (i1 = d1(r1))) {
                        r1 = o1(i1 || r1);
                        if (!f1.rgba && r1._rgba[3] !== 1) {
                            s1 = n1 === "backgroundColor" ? e1.parentNode : e1;
                            while((u1 === "" || u1 === "transparent") && s1 && s1.style)try {
                                u1 = t1.css(s1, "backgroundColor"), s1 = s1.parentNode;
                            } catch (a1) {}
                            r1 = r1.blend(u1 && u1 !== "transparent" ? u1 : "_default");
                        }
                        r1 = r1.toRgbaString();
                    }
                    try {
                        e1.style[n1] = r1;
                    } catch (r1) {}
                }
            }, t1.fx.step[n1] = function(e1) {
                e1.colorInit || (e1.start = o1(e1.elem, n1), e1.end = o1(e1.end), e1.colorInit = !0), t1.cssHooks[n1].set(e1.elem, e1.start.transition(e1.end, e1.pos));
            };
        }), t1.cssHooks.borderColor = {
            expand: function(e1) {
                var t1 = {};
                return h1([
                    "Top",
                    "Right",
                    "Bottom",
                    "Left"
                ], function(n1, r1) {
                    t1["border" + r1 + "Color"] = e1;
                }), t1;
            }
        }, c1 = t1.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [
                null,
                null,
                null,
                0
            ],
            _default: "#ffffff"
        };
    }(jQuery), function() {
        function i1() {
            var t1 = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle, n1 = {}, r1, i1, s1;
            if (t1 && t1.length && t1[0] && t1[t1[0]]) {
                s1 = t1.length;
                while(s1--)r1 = t1[s1], typeof t1[r1] == "string" && (n1[e1.camelCase(r1)] = t1[r1]);
            } else for(r1 in t1)typeof t1[r1] == "string" && (n1[r1] = t1[r1]);
            return n1;
        }
        function s1(t1, n1) {
            var i1 = {}, s1, o1;
            for(s1 in n1)o1 = n1[s1], t1[s1] !== o1 && !r1[s1] && (e1.fx.step[s1] || !isNaN(parseFloat(o1))) && (i1[s1] = o1);
            return i1;
        }
        var n1 = [
            "add",
            "remove",
            "toggle"
        ], r1 = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        e1.each([
            "borderLeftStyle",
            "borderRightStyle",
            "borderBottomStyle",
            "borderTopStyle"
        ], function(t1, n1) {
            e1.fx.step[n1] = function(e1) {
                if (e1.end !== "none" && !e1.setAttr || e1.pos === 1 && !e1.setAttr) jQuery.style(e1.elem, n1, e1.end), e1.setAttr = !0;
            };
        }), e1.effects.animateClass = function(t1, r1, o1, u1) {
            var a1 = e1.speed(r1, o1, u1);
            return this.queue(function() {
                var r1 = e1(this), o1 = r1.attr("class") || "", u1, f1 = a1.children ? r1.find("*").andSelf() : r1;
                f1 = f1.map(function() {
                    var t1 = e1(this);
                    return {
                        el: t1,
                        start: i1.call(this)
                    };
                }), u1 = function() {
                    e1.each(n1, function(e1, n1) {
                        t1[n1] && r1[n1 + "Class"](t1[n1]);
                    });
                }, u1(), f1 = f1.map(function() {
                    return this.end = i1.call(this.el[0]), this.diff = s1(this.start, this.end), this;
                }), r1.attr("class", o1), f1 = f1.map(function() {
                    var t1 = this, n1 = e1.Deferred(), r1 = jQuery.extend({}, a1, {
                        queue: !1,
                        complete: function() {
                            n1.resolve(t1);
                        }
                    });
                    return this.el.animate(this.diff, r1), n1.promise();
                }), e1.when.apply(e1, f1.get()).done(function() {
                    u1(), e1.each(arguments, function() {
                        var t1 = this.el;
                        e1.each(this.diff, function(e1) {
                            t1.css(e1, "");
                        });
                    }), a1.complete.call(r1[0]);
                });
            });
        }, e1.fn.extend({
            _addClass: e1.fn.addClass,
            addClass: function(t1, n1, r1, i1) {
                return n1 ? e1.effects.animateClass.call(this, {
                    add: t1
                }, n1, r1, i1) : this._addClass(t1);
            },
            _removeClass: e1.fn.removeClass,
            removeClass: function(t1, n1, r1, i1) {
                return n1 ? e1.effects.animateClass.call(this, {
                    remove: t1
                }, n1, r1, i1) : this._removeClass(t1);
            },
            _toggleClass: e1.fn.toggleClass,
            toggleClass: function(n1, r1, i1, s1, o1) {
                return typeof r1 == "boolean" || r1 === t1 ? i1 ? e1.effects.animateClass.call(this, r1 ? {
                    add: n1
                } : {
                    remove: n1
                }, i1, s1, o1) : this._toggleClass(n1, r1) : e1.effects.animateClass.call(this, {
                    toggle: n1
                }, r1, i1, s1);
            },
            switchClass: function(t1, n1, r1, i1, s1) {
                return e1.effects.animateClass.call(this, {
                    add: n1,
                    remove: t1
                }, r1, i1, s1);
            }
        });
    }(), function() {
        function i1(n1, r1, i1, s1) {
            e1.isPlainObject(n1) && (r1 = n1, n1 = n1.effect), n1 = {
                effect: n1
            }, r1 === t1 && (r1 = {}), e1.isFunction(r1) && (s1 = r1, i1 = null, r1 = {});
            if (typeof r1 == "number" || e1.fx.speeds[r1]) s1 = i1, i1 = r1, r1 = {};
            return e1.isFunction(i1) && (s1 = i1, i1 = null), r1 && e1.extend(n1, r1), i1 = i1 || r1.duration, n1.duration = e1.fx.off ? 0 : typeof i1 == "number" ? i1 : i1 in e1.fx.speeds ? e1.fx.speeds[i1] : e1.fx.speeds._default, n1.complete = s1 || r1.complete, n1;
        }
        function s1(t1) {
            return !t1 || typeof t1 == "number" || e1.fx.speeds[t1] ? !0 : typeof t1 == "string" && !e1.effects.effect[t1] ? n1 && e1.effects[t1] ? !1 : !0 : !1;
        }
        e1.extend(e1.effects, {
            version: "1.9.0",
            save: function(e1, t1) {
                for(var n1 = 0; n1 < t1.length; n1++)t1[n1] !== null && e1.data(r1 + t1[n1], e1[0].style[t1[n1]]);
            },
            restore: function(e1, n1) {
                var i1, s1;
                for(s1 = 0; s1 < n1.length; s1++)n1[s1] !== null && (i1 = e1.data(r1 + n1[s1]), i1 === t1 && (i1 = ""), e1.css(n1[s1], i1));
            },
            setMode: function(e1, t1) {
                return t1 === "toggle" && (t1 = e1.is(":hidden") ? "show" : "hide"), t1;
            },
            getBaseline: function(e1, t1) {
                var n1, r1;
                switch(e1[0]){
                    case "top":
                        n1 = 0;
                        break;
                    case "middle":
                        n1 = .5;
                        break;
                    case "bottom":
                        n1 = 1;
                        break;
                    default:
                        n1 = e1[0] / t1.height;
                }
                switch(e1[1]){
                    case "left":
                        r1 = 0;
                        break;
                    case "center":
                        r1 = .5;
                        break;
                    case "right":
                        r1 = 1;
                        break;
                    default:
                        r1 = e1[1] / t1.width;
                }
                return {
                    x: r1,
                    y: n1
                };
            },
            createWrapper: function(t1) {
                if (t1.parent().is(".ui-effects-wrapper")) return t1.parent();
                var n1 = {
                    width: t1.outerWidth(!0),
                    height: t1.outerHeight(!0),
                    "float": t1.css("float")
                }, r1 = e1("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }), i1 = {
                    width: t1.width(),
                    height: t1.height()
                }, s1 = document.activeElement;
                try {
                    s1.id;
                } catch (o1) {
                    s1 = document.body;
                }
                return t1.wrap(r1), (t1[0] === s1 || e1.contains(t1[0], s1)) && e1(s1).focus(), r1 = t1.parent(), t1.css("position") === "static" ? (r1.css({
                    position: "relative"
                }), t1.css({
                    position: "relative"
                })) : (e1.extend(n1, {
                    position: t1.css("position"),
                    zIndex: t1.css("z-index")
                }), e1.each([
                    "top",
                    "left",
                    "bottom",
                    "right"
                ], function(e1, r1) {
                    n1[r1] = t1.css(r1), isNaN(parseInt(n1[r1], 10)) && (n1[r1] = "auto");
                }), t1.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), t1.css(i1), r1.css(n1).show();
            },
            removeWrapper: function(t1) {
                var n1 = document.activeElement;
                return t1.parent().is(".ui-effects-wrapper") && (t1.parent().replaceWith(t1), (t1[0] === n1 || e1.contains(t1[0], n1)) && e1(n1).focus()), t1;
            },
            setTransition: function(t1, n1, r1, i1) {
                return i1 = i1 || {}, e1.each(n1, function(e1, n1) {
                    var s1 = t1.cssUnit(n1);
                    s1[0] > 0 && (i1[n1] = s1[0] * r1 + s1[1]);
                }), i1;
            }
        }), e1.fn.extend({
            effect: function(t1, r1, s1, o1) {
                function h1(t1) {
                    function s1() {
                        e1.isFunction(r1) && r1.call(n1[0]), e1.isFunction(t1) && t1();
                    }
                    var n1 = e1(this), r1 = u1.complete, i1 = u1.mode;
                    (n1.is(":hidden") ? i1 === "hide" : i1 === "show") ? s1() : l1.call(n1[0], u1, s1);
                }
                var u1 = i1.apply(this, arguments), a1 = u1.mode, f1 = u1.queue, l1 = e1.effects.effect[u1.effect], c1 = !l1 && n1 && e1.effects[u1.effect];
                return e1.fx.off || !l1 && !c1 ? a1 ? this[a1](u1.duration, u1.complete) : this.each(function() {
                    u1.complete && u1.complete.call(this);
                }) : l1 ? f1 === !1 ? this.each(h1) : this.queue(f1 || "fx", h1) : c1.call(this, {
                    options: u1,
                    duration: u1.duration,
                    callback: u1.complete,
                    mode: u1.mode
                });
            },
            _show: e1.fn.show,
            show: function(e1) {
                if (s1(e1)) return this._show.apply(this, arguments);
                var t1 = i1.apply(this, arguments);
                return t1.mode = "show", this.effect.call(this, t1);
            },
            _hide: e1.fn.hide,
            hide: function(e1) {
                if (s1(e1)) return this._hide.apply(this, arguments);
                var t1 = i1.apply(this, arguments);
                return t1.mode = "hide", this.effect.call(this, t1);
            },
            __toggle: e1.fn.toggle,
            toggle: function(t1) {
                if (s1(t1) || typeof t1 == "boolean" || e1.isFunction(t1)) return this.__toggle.apply(this, arguments);
                var n1 = i1.apply(this, arguments);
                return n1.mode = "toggle", this.effect.call(this, n1);
            },
            cssUnit: function(t1) {
                var n1 = this.css(t1), r1 = [];
                return e1.each([
                    "em",
                    "px",
                    "%",
                    "pt"
                ], function(e1, t1) {
                    n1.indexOf(t1) > 0 && (r1 = [
                        parseFloat(n1),
                        t1
                    ]);
                }), r1;
            }
        });
    }(), function() {
        var t1 = {};
        e1.each([
            "Quad",
            "Cubic",
            "Quart",
            "Quint",
            "Expo"
        ], function(e1, n1) {
            t1[n1] = function(t1) {
                return Math.pow(t1, e1 + 2);
            };
        }), e1.extend(t1, {
            Sine: function(e1) {
                return 1 - Math.cos(e1 * Math.PI / 2);
            },
            Circ: function(e1) {
                return 1 - Math.sqrt(1 - e1 * e1);
            },
            Elastic: function(e1) {
                return e1 === 0 || e1 === 1 ? e1 : -Math.pow(2, 8 * (e1 - 1)) * Math.sin(((e1 - 1) * 80 - 7.5) * Math.PI / 15);
            },
            Back: function(e1) {
                return e1 * e1 * (3 * e1 - 2);
            },
            Bounce: function(e1) {
                var t1, n1 = 4;
                while(e1 < ((t1 = Math.pow(2, --n1)) - 1) / 11);
                return 1 / Math.pow(4, 3 - n1) - 7.5625 * Math.pow((t1 * 3 - 2) / 22 - e1, 2);
            }
        }), e1.each(t1, function(t1, n1) {
            e1.easing["easeIn" + t1] = n1, e1.easing["easeOut" + t1] = function(e1) {
                return 1 - n1(1 - e1);
            }, e1.easing["easeInOut" + t1] = function(e1) {
                return e1 < .5 ? n1(e1 * 2) / 2 : 1 - n1(e1 * -2 + 2) / 2;
            };
        });
    }();
}(jQuery), function(e1, t1) {
    var n1 = 0, r1 = {}, i1 = {};
    r1.height = r1.paddingTop = r1.paddingBottom = r1.borderTopWidth = r1.borderBottomWidth = "hide", i1.height = i1.paddingTop = i1.paddingBottom = i1.borderTopWidth = i1.borderBottomWidth = "show", e1.widget("ui.accordion", {
        version: "1.9.0",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        _create: function() {
            var t1 = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++n1), r1 = this.options;
            this.prevShow = this.prevHide = e1(), this.element.addClass("ui-accordion ui-widget ui-helper-reset"), this.headers = this.element.find(r1.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this._hoverable(this.headers), this._focusable(this.headers), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(), !r1.collapsible && r1.active === !1 && (r1.active = 0), r1.active < 0 && (r1.active += this.headers.length), this.active = this._findActive(r1.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top"), this.active.next().addClass("ui-accordion-content-active").show(), this._createIcons(), this.originalHeight = this.element[0].style.height, this.refresh(), this.element.attr("role", "tablist"), this.headers.attr("role", "tab").each(function(n1) {
                var r1 = e1(this), i1 = r1.attr("id"), s1 = r1.next(), o1 = s1.attr("id");
                i1 || (i1 = t1 + "-header-" + n1, r1.attr("id", i1)), o1 || (o1 = t1 + "-panel-" + n1, s1.attr("id", o1)), r1.attr("aria-controls", o1), s1.attr("aria-labelledby", i1);
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }).next().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                tabIndex: 0
            }).next().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0), this._on(this.headers, {
                keydown: "_keydown"
            }), this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }), this._setupEvents(r1.event);
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                content: this.active.length ? this.active.next() : e1()
            };
        },
        _createIcons: function() {
            var t1 = this.options.icons;
            t1 && (e1("<span>").addClass("ui-accordion-header-icon ui-icon " + t1.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t1.header).addClass(t1.activeHeader), this.headers.addClass("ui-accordion-icons"));
        },
        _destroyIcons: function() {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove();
        },
        _destroy: function() {
            var e1;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id");
            }), this._destroyIcons(), e1 = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id");
            }), this.options.heightStyle !== "content" && (this.element.css("height", this.originalHeight), e1.css("height", ""));
        },
        _setOption: function(e1, t1) {
            if (e1 === "active") {
                this._activate(t1);
                return;
            }
            e1 === "event" && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t1)), this._super(e1, t1), e1 === "collapsible" && !t1 && this.options.active === !1 && this._activate(0), e1 === "icons" && (this._destroyIcons(), t1 && this._createIcons()), e1 === "disabled" && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t1);
        },
        _keydown: function(t1) {
            if (t1.altKey || t1.ctrlKey) return;
            var n1 = e1.ui.keyCode, r1 = this.headers.length, i1 = this.headers.index(t1.target), s1 = !1;
            switch(t1.keyCode){
                case n1.RIGHT:
                case n1.DOWN:
                    s1 = this.headers[(i1 + 1) % r1];
                    break;
                case n1.LEFT:
                case n1.UP:
                    s1 = this.headers[(i1 - 1 + r1) % r1];
                    break;
                case n1.SPACE:
                case n1.ENTER:
                    this._eventHandler(t1);
                    break;
                case n1.HOME:
                    s1 = this.headers[0];
                    break;
                case n1.END:
                    s1 = this.headers[r1 - 1];
            }
            s1 && (e1(t1.target).attr("tabIndex", -1), e1(s1).attr("tabIndex", 0), s1.focus(), t1.preventDefault());
        },
        _panelKeyDown: function(t1) {
            t1.keyCode === e1.ui.keyCode.UP && t1.ctrlKey && e1(t1.currentTarget).prev().focus();
        },
        refresh: function() {
            var t1, n1, r1 = this.options.heightStyle, i1 = this.element.parent();
            this.element.css("height", this.originalHeight), r1 === "fill" ? (e1.support.minHeight || (n1 = i1.css("overflow"), i1.css("overflow", "hidden")), t1 = i1.height(), this.element.siblings(":visible").each(function() {
                var n1 = e1(this), r1 = n1.css("position");
                if (r1 === "absolute" || r1 === "fixed") return;
                t1 -= n1.outerHeight(!0);
            }), n1 && i1.css("overflow", n1), this.headers.each(function() {
                t1 -= e1(this).outerHeight(!0);
            }), this.headers.next().each(function() {
                e1(this).height(Math.max(0, t1 - e1(this).innerHeight() + e1(this).height()));
            }).css("overflow", "auto")) : r1 === "auto" && (t1 = 0, this.headers.next().each(function() {
                t1 = Math.max(t1, e1(this).height("").height());
            }).height(t1)), r1 !== "content" && this.element.height(this.element.height());
        },
        _activate: function(t1) {
            var n1 = this._findActive(t1)[0];
            if (n1 === this.active[0]) return;
            n1 = n1 || this.active[0], this._eventHandler({
                target: n1,
                currentTarget: n1,
                preventDefault: e1.noop
            });
        },
        _findActive: function(t1) {
            return typeof t1 == "number" ? this.headers.eq(t1) : e1();
        },
        _setupEvents: function(t1) {
            var n1 = {};
            if (!t1) return;
            e1.each(t1.split(" "), function(e1, t1) {
                n1[t1] = "_eventHandler";
            }), this._on(this.headers, n1);
        },
        _eventHandler: function(t1) {
            var n1 = this.options, r1 = this.active, i1 = e1(t1.currentTarget), s1 = i1[0] === r1[0], o1 = s1 && n1.collapsible, u1 = o1 ? e1() : i1.next(), a1 = r1.next(), f1 = {
                oldHeader: r1,
                oldPanel: a1,
                newHeader: o1 ? e1() : i1,
                newPanel: u1
            };
            t1.preventDefault();
            if (s1 && !n1.collapsible || this._trigger("beforeActivate", t1, f1) === !1) return;
            n1.active = o1 ? !1 : this.headers.index(i1), this.active = s1 ? e1() : i1, this._toggle(f1), r1.removeClass("ui-accordion-header-active ui-state-active"), n1.icons && r1.children(".ui-accordion-header-icon").removeClass(n1.icons.activeHeader).addClass(n1.icons.header), s1 || (i1.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), n1.icons && i1.children(".ui-accordion-header-icon").removeClass(n1.icons.header).addClass(n1.icons.activeHeader), i1.next().addClass("ui-accordion-content-active"));
        },
        _toggle: function(t1) {
            var n1 = t1.newPanel, r1 = this.prevShow.length ? this.prevShow : t1.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = n1, this.prevHide = r1, this.options.animate ? this._animate(n1, r1, t1) : (r1.hide(), n1.show(), this._toggleComplete(t1)), r1.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), r1.prev().attr("aria-selected", "false"), n1.length && r1.length ? r1.prev().attr("tabIndex", -1) : n1.length && this.headers.filter(function() {
                return e1(this).attr("tabIndex") === 0;
            }).attr("tabIndex", -1), n1.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }).prev().attr({
                "aria-selected": "true",
                tabIndex: 0
            });
        },
        _animate: function(e1, t1, n1) {
            var s1, o1, u1, a1 = this, f1 = 0, l1 = e1.length && (!t1.length || e1.index() < t1.index()), c1 = this.options.animate || {}, h1 = l1 && c1.down || c1, p1 = function() {
                a1._toggleComplete(n1);
            };
            typeof h1 == "number" && (u1 = h1), typeof h1 == "string" && (o1 = h1), o1 = o1 || h1.easing || c1.easing, u1 = u1 || h1.duration || c1.duration;
            if (!t1.length) return e1.animate(i1, u1, o1, p1);
            if (!e1.length) return t1.animate(r1, u1, o1, p1);
            s1 = e1.show().outerHeight(), t1.animate(r1, {
                duration: u1,
                easing: o1,
                step: function(e1, t1) {
                    t1.now = Math.round(e1);
                }
            }), e1.hide().animate(i1, {
                duration: u1,
                easing: o1,
                complete: p1,
                step: function(e1, n1) {
                    n1.now = Math.round(e1), n1.prop !== "height" ? f1 += n1.now : a1.options.heightStyle !== "content" && (n1.now = Math.round(s1 - t1.outerHeight() - f1), f1 = 0);
                }
            });
        },
        _toggleComplete: function(e1) {
            var t1 = e1.oldPanel;
            t1.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t1.length && (t1.parent()[0].className = t1.parent()[0].className), this._trigger("activate", null, e1);
        }
    }), e1.uiBackCompat !== !1 && (function(e1, t1) {
        e1.extend(t1.options, {
            navigation: !1,
            navigationFilter: function() {
                return this.href.toLowerCase() === location.href.toLowerCase();
            }
        });
        var n1 = t1._create;
        t1._create = function() {
            if (this.options.navigation) {
                var t1 = this, r1 = this.element.find(this.options.header), i1 = r1.next(), s1 = r1.add(i1).find("a").filter(this.options.navigationFilter)[0];
                s1 && r1.add(i1).each(function(n1) {
                    if (e1.contains(this, s1)) return t1.options.active = Math.floor(n1 / 2), !1;
                });
            }
            n1.call(this);
        };
    }(jQuery, jQuery.ui.accordion.prototype), function(e1, t1) {
        e1.extend(t1.options, {
            heightStyle: null,
            autoHeight: !0,
            clearStyle: !1,
            fillSpace: !1
        });
        var n1 = t1._create, r1 = t1._setOption;
        e1.extend(t1, {
            _create: function() {
                this.options.heightStyle = this.options.heightStyle || this._mergeHeightStyle(), n1.call(this);
            },
            _setOption: function(e1, t1) {
                if (e1 === "autoHeight" || e1 === "clearStyle" || e1 === "fillSpace") this.options.heightStyle = this._mergeHeightStyle();
                r1.apply(this, arguments);
            },
            _mergeHeightStyle: function() {
                var e1 = this.options;
                if (e1.fillSpace) return "fill";
                if (e1.clearStyle) return "content";
                if (e1.autoHeight) return "auto";
            }
        });
    }(jQuery, jQuery.ui.accordion.prototype), function(e1, t1) {
        e1.extend(t1.options.icons, {
            activeHeader: null,
            headerSelected: "ui-icon-triangle-1-s"
        });
        var n1 = t1._createIcons;
        t1._createIcons = function() {
            this.options.icons && (this.options.icons.activeHeader = this.options.icons.activeHeader || this.options.icons.headerSelected), n1.call(this);
        };
    }(jQuery, jQuery.ui.accordion.prototype), function(e1, t1) {
        t1.activate = t1._activate;
        var n1 = t1._findActive;
        t1._findActive = function(e1) {
            return e1 === -1 && (e1 = !1), e1 && typeof e1 != "number" && (e1 = this.headers.index(this.headers.filter(e1)), e1 === -1 && (e1 = !1)), n1.call(this, e1);
        };
    }(jQuery, jQuery.ui.accordion.prototype), jQuery.ui.accordion.prototype.resize = jQuery.ui.accordion.prototype.refresh, function(e1, t1) {
        e1.extend(t1.options, {
            change: null,
            changestart: null
        });
        var n1 = t1._trigger;
        t1._trigger = function(e1, t1, r1) {
            var i1 = n1.apply(this, arguments);
            return i1 ? (e1 === "beforeActivate" ? i1 = n1.call(this, "changestart", t1, {
                oldHeader: r1.oldHeader,
                oldContent: r1.oldPanel,
                newHeader: r1.newHeader,
                newContent: r1.newPanel
            }) : e1 === "activate" && (i1 = n1.call(this, "change", t1, {
                oldHeader: r1.oldHeader,
                oldContent: r1.oldPanel,
                newHeader: r1.newHeader,
                newContent: r1.newPanel
            })), i1) : !1;
        };
    }(jQuery, jQuery.ui.accordion.prototype), function(e1, t1) {
        e1.extend(t1.options, {
            animate: null,
            animated: "slide"
        });
        var n1 = t1._create;
        t1._create = function() {
            var e1 = this.options;
            e1.animate === null && (e1.animated ? e1.animated === "slide" ? e1.animate = 300 : e1.animated === "bounceslide" ? e1.animate = {
                duration: 200,
                down: {
                    easing: "easeOutBounce",
                    duration: 1e3
                }
            } : e1.animate = e1.animated : e1.animate = !1), n1.call(this);
        };
    }(jQuery, jQuery.ui.accordion.prototype));
}(jQuery), function(e1, t1) {
    var n1 = 0;
    e1.widget("ui.autocomplete", {
        version: "1.9.0",
        defaultElement: "<input>",
        options: {
            appendTo: "body",
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        pending: 0,
        _create: function() {
            var t1, n1, r1;
            this.isMultiLine = this._isMultiLine(), this.valueMethod = this.element[this.element.is("input,textarea") ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on({
                keydown: function(i1) {
                    if (this.element.prop("readOnly")) {
                        t1 = !0, r1 = !0, n1 = !0;
                        return;
                    }
                    t1 = !1, r1 = !1, n1 = !1;
                    var s1 = e1.ui.keyCode;
                    switch(i1.keyCode){
                        case s1.PAGE_UP:
                            t1 = !0, this._move("previousPage", i1);
                            break;
                        case s1.PAGE_DOWN:
                            t1 = !0, this._move("nextPage", i1);
                            break;
                        case s1.UP:
                            t1 = !0, this._keyEvent("previous", i1);
                            break;
                        case s1.DOWN:
                            t1 = !0, this._keyEvent("next", i1);
                            break;
                        case s1.ENTER:
                        case s1.NUMPAD_ENTER:
                            this.menu.active && (t1 = !0, i1.preventDefault(), this.menu.select(i1));
                            break;
                        case s1.TAB:
                            this.menu.active && this.menu.select(i1);
                            break;
                        case s1.ESCAPE:
                            this.menu.element.is(":visible") && (this._value(this.term), this.close(i1), i1.preventDefault());
                            break;
                        default:
                            n1 = !0, this._searchTimeout(i1);
                    }
                },
                keypress: function(r1) {
                    if (t1) {
                        t1 = !1, r1.preventDefault();
                        return;
                    }
                    if (n1) return;
                    var i1 = e1.ui.keyCode;
                    switch(r1.keyCode){
                        case i1.PAGE_UP:
                            this._move("previousPage", r1);
                            break;
                        case i1.PAGE_DOWN:
                            this._move("nextPage", r1);
                            break;
                        case i1.UP:
                            this._keyEvent("previous", r1);
                            break;
                        case i1.DOWN:
                            this._keyEvent("next", r1);
                    }
                },
                input: function(e1) {
                    if (r1) {
                        r1 = !1, e1.preventDefault();
                        return;
                    }
                    this._searchTimeout(e1);
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value();
                },
                blur: function(e1) {
                    if (this.cancelBlur) {
                        delete this.cancelBlur;
                        return;
                    }
                    clearTimeout(this.searching), this.close(e1), this._change(e1);
                }
            }), this._initSource(), this.menu = e1("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo || "body")[0]).menu({
                input: e1(),
                role: null
            }).zIndex(this.element.zIndex() + 1).hide().data("menu"), this._on(this.menu.element, {
                mousedown: function(t1) {
                    t1.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur;
                    });
                    var n1 = this.menu.element[0];
                    e1(t1.target).closest(".ui-menu-item").length || this._delay(function() {
                        var t1 = this;
                        this.document.one("mousedown", function(r1) {
                            r1.target !== t1.element[0] && r1.target !== n1 && !e1.contains(n1, r1.target) && t1.close();
                        });
                    });
                },
                menufocus: function(t1, n1) {
                    if (this.isNewMenu) {
                        this.isNewMenu = !1;
                        if (t1.originalEvent && /^mouse/.test(t1.originalEvent.type)) {
                            this.menu.blur(), this.document.one("mousemove", function() {
                                e1(t1.target).trigger(t1.originalEvent);
                            });
                            return;
                        }
                    }
                    var r1 = n1.item.data("ui-autocomplete-item") || n1.item.data("item.autocomplete");
                    !1 !== this._trigger("focus", t1, {
                        item: r1
                    }) ? t1.originalEvent && /^key/.test(t1.originalEvent.type) && this._value(r1.value) : this.liveRegion.text(r1.value);
                },
                menuselect: function(e1, t1) {
                    var n1 = t1.item.data("ui-autocomplete-item") || t1.item.data("item.autocomplete"), r1 = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = r1, this._delay(function() {
                        this.previous = r1, this.selectedItem = n1;
                    })), !1 !== this._trigger("select", e1, {
                        item: n1
                    }) && this._value(n1.value), this.term = this._value(), this.close(e1), this.selectedItem = n1;
                }
            }), this.liveRegion = e1("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertAfter(this.element), e1.fn.bgiframe && this.menu.element.bgiframe(), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete");
                }
            });
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove();
        },
        _setOption: function(e1, t1) {
            this._super(e1, t1), e1 === "source" && this._initSource(), e1 === "appendTo" && this.menu.element.appendTo(this.document.find(t1 || "body")[0]), e1 === "disabled" && t1 && this.xhr && this.xhr.abort();
        },
        _isMultiLine: function() {
            return this.element.is("textarea") ? !0 : this.element.is("input") ? !1 : this.element.prop("isContentEditable");
        },
        _initSource: function() {
            var t1, n1, r1 = this;
            e1.isArray(this.options.source) ? (t1 = this.options.source, this.source = function(n1, r1) {
                r1(e1.ui.autocomplete.filter(t1, n1.term));
            }) : typeof this.options.source == "string" ? (n1 = this.options.source, this.source = function(t1, i1) {
                r1.xhr && r1.xhr.abort(), r1.xhr = e1.ajax({
                    url: n1,
                    data: t1,
                    dataType: "json",
                    success: function(e1, t1) {
                        i1(e1);
                    },
                    error: function() {
                        i1([]);
                    }
                });
            }) : this.source = this.options.source;
        },
        _searchTimeout: function(e1) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, e1));
            }, this.options.delay);
        },
        search: function(e1, t1) {
            e1 = e1 != null ? e1 : this._value(), this.term = this._value();
            if (e1.length < this.options.minLength) return this.close(t1);
            if (this._trigger("search", t1) === !1) return;
            return this._search(e1);
        },
        _search: function(e1) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                term: e1
            }, this._response());
        },
        _response: function() {
            var e1 = this, t1 = ++n1;
            return function(r1) {
                t1 === n1 && e1.__response(r1), e1.pending--, e1.pending || e1.element.removeClass("ui-autocomplete-loading");
            };
        },
        __response: function(e1) {
            e1 && (e1 = this._normalize(e1)), this._trigger("response", null, {
                content: e1
            }), !this.options.disabled && e1 && e1.length && !this.cancelSearch ? (this._suggest(e1), this._trigger("open")) : this._close();
        },
        close: function(e1) {
            this.cancelSearch = !0, this._close(e1);
        },
        _close: function(e1) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e1));
        },
        _change: function(e1) {
            this.previous !== this._value() && this._trigger("change", e1, {
                item: this.selectedItem
            });
        },
        _normalize: function(t1) {
            return t1.length && t1[0].label && t1[0].value ? t1 : e1.map(t1, function(t1) {
                return typeof t1 == "string" ? {
                    label: t1,
                    value: t1
                } : e1.extend({
                    label: t1.label || t1.value,
                    value: t1.value || t1.label
                }, t1);
            });
        },
        _suggest: function(t1) {
            var n1 = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
            this._renderMenu(n1, t1), this.menu.refresh(), n1.show(), this._resizeMenu(), n1.position(e1.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next();
        },
        _resizeMenu: function() {
            var e1 = this.menu.element;
            e1.outerWidth(Math.max(e1.width("").outerWidth() + 1, this.element.outerWidth()));
        },
        _renderMenu: function(t1, n1) {
            var r1 = this;
            e1.each(n1, function(e1, n1) {
                r1._renderItemData(t1, n1);
            });
        },
        _renderItemData: function(e1, t1) {
            return this._renderItem(e1, t1).data("ui-autocomplete-item", t1);
        },
        _renderItem: function(t1, n1) {
            return e1("<li>").append(e1("<a>").text(n1.label)).appendTo(t1);
        },
        _move: function(e1, t1) {
            if (!this.menu.element.is(":visible")) {
                this.search(null, t1);
                return;
            }
            if (this.menu.isFirstItem() && /^previous/.test(e1) || this.menu.isLastItem() && /^next/.test(e1)) {
                this._value(this.term), this.menu.blur();
                return;
            }
            this.menu[e1](t1);
        },
        widget: function() {
            return this.menu.element;
        },
        _value: function(e1) {
            return this.valueMethod.apply(this.element, arguments);
        },
        _keyEvent: function(e1, t1) {
            if (!this.isMultiLine || this.menu.element.is(":visible")) this._move(e1, t1), t1.preventDefault();
        }
    }), e1.extend(e1.ui.autocomplete, {
        escapeRegex: function(e1) {
            return e1.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        },
        filter: function(t1, n1) {
            var r1 = new RegExp(e1.ui.autocomplete.escapeRegex(n1), "i");
            return e1.grep(t1, function(e1) {
                return r1.test(e1.label || e1.value || e1);
            });
        }
    }), e1.widget("ui.autocomplete", e1.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(e1) {
                    return e1 + (e1 > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
                }
            }
        },
        __response: function(e1) {
            var t1;
            this._superApply(arguments);
            if (this.options.disabled || this.cancelSearch) return;
            e1 && e1.length ? t1 = this.options.messages.results(e1.length) : t1 = this.options.messages.noResults, this.liveRegion.text(t1);
        }
    });
}(jQuery), function(e1, t1) {
    var n1, r1, i1, s1, o1 = "ui-button ui-widget ui-state-default ui-corner-all", u1 = "ui-state-hover ui-state-active ", a1 = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", f1 = function() {
        var t1 = e1(this).find(":ui-button");
        setTimeout(function() {
            t1.button("refresh");
        }, 1);
    }, l1 = function(t1) {
        var n1 = t1.name, r1 = t1.form, i1 = e1([]);
        return n1 && (r1 ? i1 = e1(r1).find("[name='" + n1 + "']") : i1 = e1("[name='" + n1 + "']", t1.ownerDocument).filter(function() {
            return !this.form;
        })), i1;
    };
    e1.widget("ui.button", {
        version: "1.9.0",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, f1), typeof this.options.disabled != "boolean" ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var t1 = this, u1 = this.options, a1 = this.type === "checkbox" || this.type === "radio", c1 = "ui-state-hover" + (a1 ? "" : " ui-state-active"), h1 = "ui-state-focus";
            u1.label === null && (u1.label = this.type === "input" ? this.buttonElement.val() : this.buttonElement.html()), this.buttonElement.addClass(o1).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                if (u1.disabled) return;
                e1(this).addClass("ui-state-hover"), this === n1 && e1(this).addClass("ui-state-active");
            }).bind("mouseleave" + this.eventNamespace, function() {
                if (u1.disabled) return;
                e1(this).removeClass(c1);
            }).bind("click" + this.eventNamespace, function(e1) {
                u1.disabled && (e1.preventDefault(), e1.stopImmediatePropagation());
            }), this.element.bind("focus" + this.eventNamespace, function() {
                t1.buttonElement.addClass(h1);
            }).bind("blur" + this.eventNamespace, function() {
                t1.buttonElement.removeClass(h1);
            }), a1 && (this.element.bind("change" + this.eventNamespace, function() {
                if (s1) return;
                t1.refresh();
            }), this.buttonElement.bind("mousedown" + this.eventNamespace, function(e1) {
                if (u1.disabled) return;
                s1 = !1, r1 = e1.pageX, i1 = e1.pageY;
            }).bind("mouseup" + this.eventNamespace, function(e1) {
                if (u1.disabled) return;
                if (r1 !== e1.pageX || i1 !== e1.pageY) s1 = !0;
            })), this.type === "checkbox" ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (u1.disabled || s1) return !1;
                e1(this).toggleClass("ui-state-active"), t1.buttonElement.attr("aria-pressed", t1.element[0].checked);
            }) : this.type === "radio" ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (u1.disabled || s1) return !1;
                e1(this).addClass("ui-state-active"), t1.buttonElement.attr("aria-pressed", "true");
                var n1 = t1.element[0];
                l1(n1).not(n1).map(function() {
                    return e1(this).button("widget")[0];
                }).removeClass("ui-state-active").attr("aria-pressed", "false");
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                if (u1.disabled) return !1;
                e1(this).addClass("ui-state-active"), n1 = this, t1.document.one("mouseup", function() {
                    n1 = null;
                });
            }).bind("mouseup" + this.eventNamespace, function() {
                if (u1.disabled) return !1;
                e1(this).removeClass("ui-state-active");
            }).bind("keydown" + this.eventNamespace, function(t1) {
                if (u1.disabled) return !1;
                (t1.keyCode === e1.ui.keyCode.SPACE || t1.keyCode === e1.ui.keyCode.ENTER) && e1(this).addClass("ui-state-active");
            }).bind("keyup" + this.eventNamespace, function() {
                e1(this).removeClass("ui-state-active");
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function(t1) {
                t1.keyCode === e1.ui.keyCode.SPACE && e1(this).click();
            })), this._setOption("disabled", u1.disabled), this._resetButton();
        },
        _determineButtonType: function() {
            var e1, t1, n1;
            this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button", this.type === "checkbox" || this.type === "radio" ? (e1 = this.element.parents().last(), t1 = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e1.find(t1), this.buttonElement.length || (e1 = e1.length ? e1.siblings() : this.element.siblings(), this.buttonElement = e1.filter(t1), this.buttonElement.length || (this.buttonElement = e1.find(t1))), this.element.addClass("ui-helper-hidden-accessible"), n1 = this.element.is(":checked"), n1 && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", n1)) : this.buttonElement = this.element;
        },
        widget: function() {
            return this.buttonElement;
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(o1 + " " + u1 + " " + a1).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title");
        },
        _setOption: function(e1, t1) {
            this._super(e1, t1);
            if (e1 === "disabled") {
                t1 ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1);
                return;
            }
            this._resetButton();
        },
        refresh: function() {
            var t1 = this.element.is(":disabled");
            t1 !== this.options.disabled && this._setOption("disabled", t1), this.type === "radio" ? l1(this.element[0]).each(function() {
                e1(this).is(":checked") ? e1(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e1(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false");
            }) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"));
        },
        _resetButton: function() {
            if (this.type === "input") {
                this.options.label && this.element.val(this.options.label);
                return;
            }
            var t1 = this.buttonElement.removeClass(a1), n1 = e1("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t1.empty()).text(), r1 = this.options.icons, i1 = r1.primary && r1.secondary, s1 = [];
            r1.primary || r1.secondary ? (this.options.text && s1.push("ui-button-text-icon" + (i1 ? "s" : r1.primary ? "-primary" : "-secondary")), r1.primary && t1.prepend("<span class='ui-button-icon-primary ui-icon " + r1.primary + "'></span>"), r1.secondary && t1.append("<span class='ui-button-icon-secondary ui-icon " + r1.secondary + "'></span>"), this.options.text || (s1.push(i1 ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t1.attr("title", e1.trim(n1)))) : s1.push("ui-button-text-only"), t1.addClass(s1.join(" "));
        }
    }), e1.widget("ui.buttonset", {
        version: "1.9.0",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset");
        },
        _init: function() {
            this.refresh();
        },
        _setOption: function(e1, t1) {
            e1 === "disabled" && this.buttons.button("option", e1, t1), this._super(e1, t1);
        },
        refresh: function() {
            var t1 = this.element.css("direction") === "rtl";
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                return e1(this).button("widget")[0];
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t1 ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t1 ? "ui-corner-left" : "ui-corner-right").end().end();
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                return e1(this).button("widget")[0];
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
        }
    });
}(jQuery), function($, undefined) {
    function Datepicker() {
        this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ],
            monthNamesShort: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ],
            dayNames: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            dayNamesShort: [
                "Sun",
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat"
            ],
            dayNamesMin: [
                "Su",
                "Mo",
                "Tu",
                "We",
                "Th",
                "Fr",
                "Sa"
            ],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, $.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'));
    }
    function bindHover(e1) {
        var t1 = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e1.delegate(t1, "mouseout", function() {
            $(this).removeClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") != -1 && $(this).removeClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") != -1 && $(this).removeClass("ui-datepicker-next-hover");
        }).delegate(t1, "mouseover", function() {
            $.datepicker._isDisabledDatepicker(instActive.inline ? e1.parent()[0] : instActive.input[0]) || ($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), $(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") != -1 && $(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") != -1 && $(this).addClass("ui-datepicker-next-hover"));
        });
    }
    function extendRemove(e1, t1) {
        $.extend(e1, t1);
        for(var n1 in t1)if (t1[n1] == null || t1[n1] == undefined) e1[n1] = t1[n1];
        return e1;
    }
    $.extend($.ui, {
        datepicker: {
            version: "1.9.0"
        }
    });
    var PROP_NAME = "datepicker", dpuuid = (new Date).getTime(), instActive;
    $.extend(Datepicker.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        log: function() {
            this.debug && console.log.apply("", arguments);
        },
        _widgetDatepicker: function() {
            return this.dpDiv;
        },
        setDefaults: function(e1) {
            return extendRemove(this._defaults, e1 || {}), this;
        },
        _attachDatepicker: function(target, settings) {
            var inlineSettings = null;
            for(var attrName in this._defaults){
                var attrValue = target.getAttribute("date:" + attrName);
                if (attrValue) {
                    inlineSettings = inlineSettings || {};
                    try {
                        inlineSettings[attrName] = eval(attrValue);
                    } catch (err) {
                        inlineSettings[attrName] = attrValue;
                    }
                }
            }
            var nodeName = target.nodeName.toLowerCase(), inline = nodeName == "div" || nodeName == "span";
            target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
            var inst = this._newInst($(target), inline);
            inst.settings = $.extend({}, settings || {}, inlineSettings || {}), nodeName == "input" ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst);
        },
        _newInst: function(e1, t1) {
            var n1 = e1[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
            return {
                id: n1,
                input: e1,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: t1,
                dpDiv: t1 ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
            };
        },
        _connectDatepicker: function(e1, t1) {
            var n1 = $(e1);
            t1.append = $([]), t1.trigger = $([]);
            if (n1.hasClass(this.markerClassName)) return;
            this._attachments(n1, t1), n1.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(e1, n1, r1) {
                t1.settings[n1] = r1;
            }).bind("getData.datepicker", function(e1, n1) {
                return this._get(t1, n1);
            }), this._autoSize(t1), $.data(e1, PROP_NAME, t1), t1.settings.disabled && this._disableDatepicker(e1);
        },
        _attachments: function(e1, t1) {
            var n1 = this._get(t1, "appendText"), r1 = this._get(t1, "isRTL");
            t1.append && t1.append.remove(), n1 && (t1.append = $('<span class="' + this._appendClass + '">' + n1 + "</span>"), e1[r1 ? "before" : "after"](t1.append)), e1.unbind("focus", this._showDatepicker), t1.trigger && t1.trigger.remove();
            var i1 = this._get(t1, "showOn");
            (i1 == "focus" || i1 == "both") && e1.focus(this._showDatepicker);
            if (i1 == "button" || i1 == "both") {
                var s1 = this._get(t1, "buttonText"), o1 = this._get(t1, "buttonImage");
                t1.trigger = $(this._get(t1, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                    src: o1,
                    alt: s1,
                    title: s1
                }) : $('<button type="button"></button>').addClass(this._triggerClass).html(o1 == "" ? s1 : $("<img/>").attr({
                    src: o1,
                    alt: s1,
                    title: s1
                }))), e1[r1 ? "before" : "after"](t1.trigger), t1.trigger.click(function() {
                    return $.datepicker._datepickerShowing && $.datepicker._lastInput == e1[0] ? $.datepicker._hideDatepicker() : $.datepicker._datepickerShowing && $.datepicker._lastInput != e1[0] ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(e1[0])) : $.datepicker._showDatepicker(e1[0]), !1;
                });
            }
        },
        _autoSize: function(e1) {
            if (this._get(e1, "autoSize") && !e1.inline) {
                var t1 = new Date(2009, 11, 20), n1 = this._get(e1, "dateFormat");
                if (n1.match(/[DM]/)) {
                    var r1 = function(e1) {
                        var t1 = 0, n1 = 0;
                        for(var r1 = 0; r1 < e1.length; r1++)e1[r1].length > t1 && (t1 = e1[r1].length, n1 = r1);
                        return n1;
                    };
                    t1.setMonth(r1(this._get(e1, n1.match(/MM/) ? "monthNames" : "monthNamesShort"))), t1.setDate(r1(this._get(e1, n1.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - t1.getDay());
                }
                e1.input.attr("size", this._formatDate(e1, t1).length);
            }
        },
        _inlineDatepicker: function(e1, t1) {
            var n1 = $(e1);
            if (n1.hasClass(this.markerClassName)) return;
            n1.addClass(this.markerClassName).append(t1.dpDiv).bind("setData.datepicker", function(e1, n1, r1) {
                t1.settings[n1] = r1;
            }).bind("getData.datepicker", function(e1, n1) {
                return this._get(t1, n1);
            }), $.data(e1, PROP_NAME, t1), this._setDate(t1, this._getDefaultDate(t1), !0), this._updateDatepicker(t1), this._updateAlternate(t1), t1.settings.disabled && this._disableDatepicker(e1), t1.dpDiv.css("display", "block");
        },
        _dialogDatepicker: function(e1, t1, n1, r1, i1) {
            var s1 = this._dialogInst;
            if (!s1) {
                this.uuid += 1;
                var o1 = "dp" + this.uuid;
                this._dialogInput = $('<input type="text" id="' + o1 + '" style="position: absolute; top: -100px; width: 0px;"/>'), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), s1 = this._dialogInst = this._newInst(this._dialogInput, !1), s1.settings = {}, $.data(this._dialogInput[0], PROP_NAME, s1);
            }
            extendRemove(s1.settings, r1 || {}), t1 = t1 && t1.constructor == Date ? this._formatDate(s1, t1) : t1, this._dialogInput.val(t1), this._pos = i1 ? i1.length ? i1 : [
                i1.pageX,
                i1.pageY
            ] : null;
            if (!this._pos) {
                var u1 = document.documentElement.clientWidth, a1 = document.documentElement.clientHeight, f1 = document.documentElement.scrollLeft || document.body.scrollLeft, l1 = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = [
                    u1 / 2 - 100 + f1,
                    a1 / 2 - 150 + l1
                ];
            }
            return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), s1.settings.onSelect = n1, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], PROP_NAME, s1), this;
        },
        _destroyDatepicker: function(e1) {
            var t1 = $(e1), n1 = $.data(e1, PROP_NAME);
            if (!t1.hasClass(this.markerClassName)) return;
            var r1 = e1.nodeName.toLowerCase();
            $.removeData(e1, PROP_NAME), r1 == "input" ? (n1.append.remove(), n1.trigger.remove(), t1.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (r1 == "div" || r1 == "span") && t1.removeClass(this.markerClassName).empty();
        },
        _enableDatepicker: function(e1) {
            var t1 = $(e1), n1 = $.data(e1, PROP_NAME);
            if (!t1.hasClass(this.markerClassName)) return;
            var r1 = e1.nodeName.toLowerCase();
            if (r1 == "input") e1.disabled = !1, n1.trigger.filter("button").each(function() {
                this.disabled = !1;
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            });
            else if (r1 == "div" || r1 == "span") {
                var i1 = t1.children("." + this._inlineClass);
                i1.children().removeClass("ui-state-disabled"), i1.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1);
            }
            this._disabledInputs = $.map(this._disabledInputs, function(t1) {
                return t1 == e1 ? null : t1;
            });
        },
        _disableDatepicker: function(e1) {
            var t1 = $(e1), n1 = $.data(e1, PROP_NAME);
            if (!t1.hasClass(this.markerClassName)) return;
            var r1 = e1.nodeName.toLowerCase();
            if (r1 == "input") e1.disabled = !0, n1.trigger.filter("button").each(function() {
                this.disabled = !0;
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            });
            else if (r1 == "div" || r1 == "span") {
                var i1 = t1.children("." + this._inlineClass);
                i1.children().addClass("ui-state-disabled"), i1.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0);
            }
            this._disabledInputs = $.map(this._disabledInputs, function(t1) {
                return t1 == e1 ? null : t1;
            }), this._disabledInputs[this._disabledInputs.length] = e1;
        },
        _isDisabledDatepicker: function(e1) {
            if (!e1) return !1;
            for(var t1 = 0; t1 < this._disabledInputs.length; t1++)if (this._disabledInputs[t1] == e1) return !0;
            return !1;
        },
        _getInst: function(e1) {
            try {
                return $.data(e1, PROP_NAME);
            } catch (t1) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function(e1, t1, n1) {
            var r1 = this._getInst(e1);
            if (arguments.length == 2 && typeof t1 == "string") return t1 == "defaults" ? $.extend({}, $.datepicker._defaults) : r1 ? t1 == "all" ? $.extend({}, r1.settings) : this._get(r1, t1) : null;
            var i1 = t1 || {};
            typeof t1 == "string" && (i1 = {}, i1[t1] = n1);
            if (r1) {
                this._curInst == r1 && this._hideDatepicker();
                var s1 = this._getDateDatepicker(e1, !0), o1 = this._getMinMaxDate(r1, "min"), u1 = this._getMinMaxDate(r1, "max");
                extendRemove(r1.settings, i1), o1 !== null && i1.dateFormat !== undefined && i1.minDate === undefined && (r1.settings.minDate = this._formatDate(r1, o1)), u1 !== null && i1.dateFormat !== undefined && i1.maxDate === undefined && (r1.settings.maxDate = this._formatDate(r1, u1)), this._attachments($(e1), r1), this._autoSize(r1), this._setDate(r1, s1), this._updateAlternate(r1), this._updateDatepicker(r1);
            }
        },
        _changeDatepicker: function(e1, t1, n1) {
            this._optionDatepicker(e1, t1, n1);
        },
        _refreshDatepicker: function(e1) {
            var t1 = this._getInst(e1);
            t1 && this._updateDatepicker(t1);
        },
        _setDateDatepicker: function(e1, t1) {
            var n1 = this._getInst(e1);
            n1 && (this._setDate(n1, t1), this._updateDatepicker(n1), this._updateAlternate(n1));
        },
        _getDateDatepicker: function(e1, t1) {
            var n1 = this._getInst(e1);
            return n1 && !n1.inline && this._setDateFromField(n1, t1), n1 ? this._getDate(n1) : null;
        },
        _doKeyDown: function(e1) {
            var t1 = $.datepicker._getInst(e1.target), n1 = !0, r1 = t1.dpDiv.is(".ui-datepicker-rtl");
            t1._keyEvent = !0;
            if ($.datepicker._datepickerShowing) switch(e1.keyCode){
                case 9:
                    $.datepicker._hideDatepicker(), n1 = !1;
                    break;
                case 13:
                    var i1 = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", t1.dpDiv);
                    i1[0] && $.datepicker._selectDay(e1.target, t1.selectedMonth, t1.selectedYear, i1[0]);
                    var s1 = $.datepicker._get(t1, "onSelect");
                    if (s1) {
                        var o1 = $.datepicker._formatDate(t1);
                        s1.apply(t1.input ? t1.input[0] : null, [
                            o1,
                            t1
                        ]);
                    } else $.datepicker._hideDatepicker();
                    return !1;
                case 27:
                    $.datepicker._hideDatepicker();
                    break;
                case 33:
                    $.datepicker._adjustDate(e1.target, e1.ctrlKey ? -$.datepicker._get(t1, "stepBigMonths") : -$.datepicker._get(t1, "stepMonths"), "M");
                    break;
                case 34:
                    $.datepicker._adjustDate(e1.target, e1.ctrlKey ? +$.datepicker._get(t1, "stepBigMonths") : +$.datepicker._get(t1, "stepMonths"), "M");
                    break;
                case 35:
                    (e1.ctrlKey || e1.metaKey) && $.datepicker._clearDate(e1.target), n1 = e1.ctrlKey || e1.metaKey;
                    break;
                case 36:
                    (e1.ctrlKey || e1.metaKey) && $.datepicker._gotoToday(e1.target), n1 = e1.ctrlKey || e1.metaKey;
                    break;
                case 37:
                    (e1.ctrlKey || e1.metaKey) && $.datepicker._adjustDate(e1.target, r1 ? 1 : -1, "D"), n1 = e1.ctrlKey || e1.metaKey, e1.originalEvent.altKey && $.datepicker._adjustDate(e1.target, e1.ctrlKey ? -$.datepicker._get(t1, "stepBigMonths") : -$.datepicker._get(t1, "stepMonths"), "M");
                    break;
                case 38:
                    (e1.ctrlKey || e1.metaKey) && $.datepicker._adjustDate(e1.target, -7, "D"), n1 = e1.ctrlKey || e1.metaKey;
                    break;
                case 39:
                    (e1.ctrlKey || e1.metaKey) && $.datepicker._adjustDate(e1.target, r1 ? -1 : 1, "D"), n1 = e1.ctrlKey || e1.metaKey, e1.originalEvent.altKey && $.datepicker._adjustDate(e1.target, e1.ctrlKey ? +$.datepicker._get(t1, "stepBigMonths") : +$.datepicker._get(t1, "stepMonths"), "M");
                    break;
                case 40:
                    (e1.ctrlKey || e1.metaKey) && $.datepicker._adjustDate(e1.target, 7, "D"), n1 = e1.ctrlKey || e1.metaKey;
                    break;
                default:
                    n1 = !1;
            }
            else e1.keyCode == 36 && e1.ctrlKey ? $.datepicker._showDatepicker(this) : n1 = !1;
            n1 && (e1.preventDefault(), e1.stopPropagation());
        },
        _doKeyPress: function(e1) {
            var t1 = $.datepicker._getInst(e1.target);
            if ($.datepicker._get(t1, "constrainInput")) {
                var n1 = $.datepicker._possibleChars($.datepicker._get(t1, "dateFormat")), r1 = String.fromCharCode(e1.charCode == undefined ? e1.keyCode : e1.charCode);
                return e1.ctrlKey || e1.metaKey || r1 < " " || !n1 || n1.indexOf(r1) > -1;
            }
        },
        _doKeyUp: function(e1) {
            var t1 = $.datepicker._getInst(e1.target);
            if (t1.input.val() != t1.lastVal) try {
                var n1 = $.datepicker.parseDate($.datepicker._get(t1, "dateFormat"), t1.input ? t1.input.val() : null, $.datepicker._getFormatConfig(t1));
                n1 && ($.datepicker._setDateFromField(t1), $.datepicker._updateAlternate(t1), $.datepicker._updateDatepicker(t1));
            } catch (r1) {
                $.datepicker.log(r1);
            }
            return !0;
        },
        _showDatepicker: function(e1) {
            e1 = e1.target || e1, e1.nodeName.toLowerCase() != "input" && (e1 = $("input", e1.parentNode)[0]);
            if ($.datepicker._isDisabledDatepicker(e1) || $.datepicker._lastInput == e1) return;
            var t1 = $.datepicker._getInst(e1);
            $.datepicker._curInst && $.datepicker._curInst != t1 && ($.datepicker._curInst.dpDiv.stop(!0, !0), t1 && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
            var n1 = $.datepicker._get(t1, "beforeShow"), r1 = n1 ? n1.apply(e1, [
                e1,
                t1
            ]) : {};
            if (r1 === !1) return;
            extendRemove(t1.settings, r1), t1.lastVal = null, $.datepicker._lastInput = e1, $.datepicker._setDateFromField(t1), $.datepicker._inDialog && (e1.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(e1), $.datepicker._pos[1] += e1.offsetHeight);
            var i1 = !1;
            $(e1).parents().each(function() {
                return i1 |= $(this).css("position") == "fixed", !i1;
            });
            var s1 = {
                left: $.datepicker._pos[0],
                top: $.datepicker._pos[1]
            };
            $.datepicker._pos = null, t1.dpDiv.empty(), t1.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            }), $.datepicker._updateDatepicker(t1), s1 = $.datepicker._checkOffset(t1, s1, i1), t1.dpDiv.css({
                position: $.datepicker._inDialog && $.blockUI ? "static" : i1 ? "fixed" : "absolute",
                display: "none",
                left: s1.left + "px",
                top: s1.top + "px"
            });
            if (!t1.inline) {
                var o1 = $.datepicker._get(t1, "showAnim"), u1 = $.datepicker._get(t1, "duration"), a1 = function() {
                    var e1 = t1.dpDiv.find("iframe.ui-datepicker-cover");
                    if (!!e1.length) {
                        var n1 = $.datepicker._getBorders(t1.dpDiv);
                        e1.css({
                            left: -n1[0],
                            top: -n1[1],
                            width: t1.dpDiv.outerWidth(),
                            height: t1.dpDiv.outerHeight()
                        });
                    }
                };
                t1.dpDiv.zIndex($(e1).zIndex() + 1), $.datepicker._datepickerShowing = !0, $.effects && ($.effects.effect[o1] || $.effects[o1]) ? t1.dpDiv.show(o1, $.datepicker._get(t1, "showOptions"), u1, a1) : t1.dpDiv[o1 || "show"](o1 ? u1 : null, a1), (!o1 || !u1) && a1(), t1.input.is(":visible") && !t1.input.is(":disabled") && t1.input.focus(), $.datepicker._curInst = t1;
            }
        },
        _updateDatepicker: function(e1) {
            this.maxRows = 4;
            var t1 = $.datepicker._getBorders(e1.dpDiv);
            instActive = e1, e1.dpDiv.empty().append(this._generateHTML(e1)), this._attachHandlers(e1);
            var n1 = e1.dpDiv.find("iframe.ui-datepicker-cover");
            !n1.length || n1.css({
                left: -t1[0],
                top: -t1[1],
                width: e1.dpDiv.outerWidth(),
                height: e1.dpDiv.outerHeight()
            }), e1.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var r1 = this._getNumberOfMonths(e1), i1 = r1[1], s1 = 17;
            e1.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), i1 > 1 && e1.dpDiv.addClass("ui-datepicker-multi-" + i1).css("width", s1 * i1 + "em"), e1.dpDiv[(r1[0] != 1 || r1[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e1.dpDiv[(this._get(e1, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e1 == $.datepicker._curInst && $.datepicker._datepickerShowing && e1.input && e1.input.is(":visible") && !e1.input.is(":disabled") && e1.input[0] != document.activeElement && e1.input.focus();
            if (e1.yearshtml) {
                var o1 = e1.yearshtml;
                setTimeout(function() {
                    o1 === e1.yearshtml && e1.yearshtml && e1.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e1.yearshtml), o1 = e1.yearshtml = null;
                }, 0);
            }
        },
        _getBorders: function(e1) {
            var t1 = function(e1) {
                return ({
                    thin: 1,
                    medium: 2,
                    thick: 3
                })[e1] || e1;
            };
            return [
                parseFloat(t1(e1.css("border-left-width"))),
                parseFloat(t1(e1.css("border-top-width")))
            ];
        },
        _checkOffset: function(e1, t1, n1) {
            var r1 = e1.dpDiv.outerWidth(), i1 = e1.dpDiv.outerHeight(), s1 = e1.input ? e1.input.outerWidth() : 0, o1 = e1.input ? e1.input.outerHeight() : 0, u1 = document.documentElement.clientWidth + (n1 ? 0 : $(document).scrollLeft()), a1 = document.documentElement.clientHeight + (n1 ? 0 : $(document).scrollTop());
            return t1.left -= this._get(e1, "isRTL") ? r1 - s1 : 0, t1.left -= n1 && t1.left == e1.input.offset().left ? $(document).scrollLeft() : 0, t1.top -= n1 && t1.top == e1.input.offset().top + o1 ? $(document).scrollTop() : 0, t1.left -= Math.min(t1.left, t1.left + r1 > u1 && u1 > r1 ? Math.abs(t1.left + r1 - u1) : 0), t1.top -= Math.min(t1.top, t1.top + i1 > a1 && a1 > i1 ? Math.abs(i1 + o1) : 0), t1;
        },
        _findPos: function(e1) {
            var t1 = this._getInst(e1), n1 = this._get(t1, "isRTL");
            while(e1 && (e1.type == "hidden" || e1.nodeType != 1 || $.expr.filters.hidden(e1)))e1 = e1[n1 ? "previousSibling" : "nextSibling"];
            var r1 = $(e1).offset();
            return [
                r1.left,
                r1.top
            ];
        },
        _hideDatepicker: function(e1) {
            var t1 = this._curInst;
            if (!t1 || e1 && t1 != $.data(e1, PROP_NAME)) return;
            if (this._datepickerShowing) {
                var n1 = this._get(t1, "showAnim"), r1 = this._get(t1, "duration"), i1 = function() {
                    $.datepicker._tidyDialog(t1);
                };
                $.effects && ($.effects.effect[n1] || $.effects[n1]) ? t1.dpDiv.hide(n1, $.datepicker._get(t1, "showOptions"), r1, i1) : t1.dpDiv[n1 == "slideDown" ? "slideUp" : n1 == "fadeIn" ? "fadeOut" : "hide"](n1 ? r1 : null, i1), n1 || i1(), this._datepickerShowing = !1;
                var s1 = this._get(t1, "onClose");
                s1 && s1.apply(t1.input ? t1.input[0] : null, [
                    t1.input ? t1.input.val() : "",
                    t1
                ]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1;
            }
        },
        _tidyDialog: function(e1) {
            e1.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
        },
        _checkExternalClick: function(e1) {
            if (!$.datepicker._curInst) return;
            var t1 = $(e1.target), n1 = $.datepicker._getInst(t1[0]);
            (t1[0].id != $.datepicker._mainDivId && t1.parents("#" + $.datepicker._mainDivId).length == 0 && !t1.hasClass($.datepicker.markerClassName) && !t1.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && (!$.datepicker._inDialog || !$.blockUI) || t1.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != n1) && $.datepicker._hideDatepicker();
        },
        _adjustDate: function(e1, t1, n1) {
            var r1 = $(e1), i1 = this._getInst(r1[0]);
            if (this._isDisabledDatepicker(r1[0])) return;
            this._adjustInstDate(i1, t1 + (n1 == "M" ? this._get(i1, "showCurrentAtPos") : 0), n1), this._updateDatepicker(i1);
        },
        _gotoToday: function(e1) {
            var t1 = $(e1), n1 = this._getInst(t1[0]);
            if (this._get(n1, "gotoCurrent") && n1.currentDay) n1.selectedDay = n1.currentDay, n1.drawMonth = n1.selectedMonth = n1.currentMonth, n1.drawYear = n1.selectedYear = n1.currentYear;
            else {
                var r1 = new Date;
                n1.selectedDay = r1.getDate(), n1.drawMonth = n1.selectedMonth = r1.getMonth(), n1.drawYear = n1.selectedYear = r1.getFullYear();
            }
            this._notifyChange(n1), this._adjustDate(t1);
        },
        _selectMonthYear: function(e1, t1, n1) {
            var r1 = $(e1), i1 = this._getInst(r1[0]);
            i1["selected" + (n1 == "M" ? "Month" : "Year")] = i1["draw" + (n1 == "M" ? "Month" : "Year")] = parseInt(t1.options[t1.selectedIndex].value, 10), this._notifyChange(i1), this._adjustDate(r1);
        },
        _selectDay: function(e1, t1, n1, r1) {
            var i1 = $(e1);
            if ($(r1).hasClass(this._unselectableClass) || this._isDisabledDatepicker(i1[0])) return;
            var s1 = this._getInst(i1[0]);
            s1.selectedDay = s1.currentDay = $("a", r1).html(), s1.selectedMonth = s1.currentMonth = t1, s1.selectedYear = s1.currentYear = n1, this._selectDate(e1, this._formatDate(s1, s1.currentDay, s1.currentMonth, s1.currentYear));
        },
        _clearDate: function(e1) {
            var t1 = $(e1), n1 = this._getInst(t1[0]);
            this._selectDate(t1, "");
        },
        _selectDate: function(e1, t1) {
            var n1 = $(e1), r1 = this._getInst(n1[0]);
            t1 = t1 != null ? t1 : this._formatDate(r1), r1.input && r1.input.val(t1), this._updateAlternate(r1);
            var i1 = this._get(r1, "onSelect");
            i1 ? i1.apply(r1.input ? r1.input[0] : null, [
                t1,
                r1
            ]) : r1.input && r1.input.trigger("change"), r1.inline ? this._updateDatepicker(r1) : (this._hideDatepicker(), this._lastInput = r1.input[0], typeof r1.input[0] != "object" && r1.input.focus(), this._lastInput = null);
        },
        _updateAlternate: function(e1) {
            var t1 = this._get(e1, "altField");
            if (t1) {
                var n1 = this._get(e1, "altFormat") || this._get(e1, "dateFormat"), r1 = this._getDate(e1), i1 = this.formatDate(n1, r1, this._getFormatConfig(e1));
                $(t1).each(function() {
                    $(this).val(i1);
                });
            }
        },
        noWeekends: function(e1) {
            var t1 = e1.getDay();
            return [
                t1 > 0 && t1 < 6,
                ""
            ];
        },
        iso8601Week: function(e1) {
            var t1 = new Date(e1.getTime());
            t1.setDate(t1.getDate() + 4 - (t1.getDay() || 7));
            var n1 = t1.getTime();
            return t1.setMonth(0), t1.setDate(1), Math.floor(Math.round((n1 - t1) / 864e5) / 7) + 1;
        },
        parseDate: function(e1, t1, n1) {
            if (e1 == null || t1 == null) throw "Invalid arguments";
            t1 = typeof t1 == "object" ? t1.toString() : t1 + "";
            if (t1 == "") return null;
            var r1 = (n1 ? n1.shortYearCutoff : null) || this._defaults.shortYearCutoff;
            r1 = typeof r1 != "string" ? r1 : (new Date).getFullYear() % 100 + parseInt(r1, 10);
            var i1 = (n1 ? n1.dayNamesShort : null) || this._defaults.dayNamesShort, s1 = (n1 ? n1.dayNames : null) || this._defaults.dayNames, o1 = (n1 ? n1.monthNamesShort : null) || this._defaults.monthNamesShort, u1 = (n1 ? n1.monthNames : null) || this._defaults.monthNames, a1 = -1, f1 = -1, l1 = -1, c1 = -1, h1 = !1, p1 = function(t1) {
                var n1 = y1 + 1 < e1.length && e1.charAt(y1 + 1) == t1;
                return n1 && y1++, n1;
            }, d1 = function(e1) {
                var n1 = p1(e1), r1 = e1 == "@" ? 14 : e1 == "!" ? 20 : e1 == "y" && n1 ? 4 : e1 == "o" ? 3 : 2, i1 = new RegExp("^\\d{1," + r1 + "}"), s1 = t1.substring(g1).match(i1);
                if (!s1) throw "Missing number at position " + g1;
                return g1 += s1[0].length, parseInt(s1[0], 10);
            }, v1 = function(e1, n1, r1) {
                var i1 = $.map(p1(e1) ? r1 : n1, function(e1, t1) {
                    return [
                        [
                            t1,
                            e1
                        ]
                    ];
                }).sort(function(e1, t1) {
                    return -(e1[1].length - t1[1].length);
                }), s1 = -1;
                $.each(i1, function(e1, n1) {
                    var r1 = n1[1];
                    if (t1.substr(g1, r1.length).toLowerCase() == r1.toLowerCase()) return s1 = n1[0], g1 += r1.length, !1;
                });
                if (s1 != -1) return s1 + 1;
                throw "Unknown name at position " + g1;
            }, m1 = function() {
                if (t1.charAt(g1) != e1.charAt(y1)) throw "Unexpected literal at position " + g1;
                g1++;
            }, g1 = 0;
            for(var y1 = 0; y1 < e1.length; y1++)if (h1) e1.charAt(y1) == "'" && !p1("'") ? h1 = !1 : m1();
            else switch(e1.charAt(y1)){
                case "d":
                    l1 = d1("d");
                    break;
                case "D":
                    v1("D", i1, s1);
                    break;
                case "o":
                    c1 = d1("o");
                    break;
                case "m":
                    f1 = d1("m");
                    break;
                case "M":
                    f1 = v1("M", o1, u1);
                    break;
                case "y":
                    a1 = d1("y");
                    break;
                case "@":
                    var b1 = new Date(d1("@"));
                    a1 = b1.getFullYear(), f1 = b1.getMonth() + 1, l1 = b1.getDate();
                    break;
                case "!":
                    var b1 = new Date((d1("!") - this._ticksTo1970) / 1e4);
                    a1 = b1.getFullYear(), f1 = b1.getMonth() + 1, l1 = b1.getDate();
                    break;
                case "'":
                    p1("'") ? m1() : h1 = !0;
                    break;
                default:
                    m1();
            }
            if (g1 < t1.length) {
                var w1 = t1.substr(g1);
                if (!/^\s+/.test(w1)) throw "Extra/unparsed characters found in date: " + w1;
            }
            a1 == -1 ? a1 = (new Date).getFullYear() : a1 < 100 && (a1 += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (a1 <= r1 ? 0 : -100));
            if (c1 > -1) {
                f1 = 1, l1 = c1;
                do {
                    var E1 = this._getDaysInMonth(a1, f1 - 1);
                    if (l1 <= E1) break;
                    f1++, l1 -= E1;
                }while (!0);
            }
            var b1 = this._daylightSavingAdjust(new Date(a1, f1 - 1, l1));
            if (b1.getFullYear() != a1 || b1.getMonth() + 1 != f1 || b1.getDate() != l1) throw "Invalid date";
            return b1;
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1e7,
        formatDate: function(e1, t1, n1) {
            if (!t1) return "";
            var r1 = (n1 ? n1.dayNamesShort : null) || this._defaults.dayNamesShort, i1 = (n1 ? n1.dayNames : null) || this._defaults.dayNames, s1 = (n1 ? n1.monthNamesShort : null) || this._defaults.monthNamesShort, o1 = (n1 ? n1.monthNames : null) || this._defaults.monthNames, u1 = function(t1) {
                var n1 = h1 + 1 < e1.length && e1.charAt(h1 + 1) == t1;
                return n1 && h1++, n1;
            }, a1 = function(e1, t1, n1) {
                var r1 = "" + t1;
                if (u1(e1)) while(r1.length < n1)r1 = "0" + r1;
                return r1;
            }, f1 = function(e1, t1, n1, r1) {
                return u1(e1) ? r1[t1] : n1[t1];
            }, l1 = "", c1 = !1;
            if (t1) for(var h1 = 0; h1 < e1.length; h1++)if (c1) e1.charAt(h1) == "'" && !u1("'") ? c1 = !1 : l1 += e1.charAt(h1);
            else switch(e1.charAt(h1)){
                case "d":
                    l1 += a1("d", t1.getDate(), 2);
                    break;
                case "D":
                    l1 += f1("D", t1.getDay(), r1, i1);
                    break;
                case "o":
                    l1 += a1("o", Math.round((new Date(t1.getFullYear(), t1.getMonth(), t1.getDate()).getTime() - new Date(t1.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                    break;
                case "m":
                    l1 += a1("m", t1.getMonth() + 1, 2);
                    break;
                case "M":
                    l1 += f1("M", t1.getMonth(), s1, o1);
                    break;
                case "y":
                    l1 += u1("y") ? t1.getFullYear() : (t1.getYear() % 100 < 10 ? "0" : "") + t1.getYear() % 100;
                    break;
                case "@":
                    l1 += t1.getTime();
                    break;
                case "!":
                    l1 += t1.getTime() * 1e4 + this._ticksTo1970;
                    break;
                case "'":
                    u1("'") ? l1 += "'" : c1 = !0;
                    break;
                default:
                    l1 += e1.charAt(h1);
            }
            return l1;
        },
        _possibleChars: function(e1) {
            var t1 = "", n1 = !1, r1 = function(t1) {
                var n1 = i1 + 1 < e1.length && e1.charAt(i1 + 1) == t1;
                return n1 && i1++, n1;
            };
            for(var i1 = 0; i1 < e1.length; i1++)if (n1) e1.charAt(i1) == "'" && !r1("'") ? n1 = !1 : t1 += e1.charAt(i1);
            else switch(e1.charAt(i1)){
                case "d":
                case "m":
                case "y":
                case "@":
                    t1 += "0123456789";
                    break;
                case "D":
                case "M":
                    return null;
                case "'":
                    r1("'") ? t1 += "'" : n1 = !0;
                    break;
                default:
                    t1 += e1.charAt(i1);
            }
            return t1;
        },
        _get: function(e1, t1) {
            return e1.settings[t1] !== undefined ? e1.settings[t1] : this._defaults[t1];
        },
        _setDateFromField: function(e1, t1) {
            if (e1.input.val() == e1.lastVal) return;
            var n1 = this._get(e1, "dateFormat"), r1 = e1.lastVal = e1.input ? e1.input.val() : null, i1, s1;
            i1 = s1 = this._getDefaultDate(e1);
            var o1 = this._getFormatConfig(e1);
            try {
                i1 = this.parseDate(n1, r1, o1) || s1;
            } catch (u1) {
                this.log(u1), r1 = t1 ? "" : r1;
            }
            e1.selectedDay = i1.getDate(), e1.drawMonth = e1.selectedMonth = i1.getMonth(), e1.drawYear = e1.selectedYear = i1.getFullYear(), e1.currentDay = r1 ? i1.getDate() : 0, e1.currentMonth = r1 ? i1.getMonth() : 0, e1.currentYear = r1 ? i1.getFullYear() : 0, this._adjustInstDate(e1);
        },
        _getDefaultDate: function(e1) {
            return this._restrictMinMax(e1, this._determineDate(e1, this._get(e1, "defaultDate"), new Date));
        },
        _determineDate: function(e1, t1, n1) {
            var r1 = function(e1) {
                var t1 = new Date;
                return t1.setDate(t1.getDate() + e1), t1;
            }, i1 = function(t1) {
                try {
                    return $.datepicker.parseDate($.datepicker._get(e1, "dateFormat"), t1, $.datepicker._getFormatConfig(e1));
                } catch (n1) {}
                var r1 = (t1.toLowerCase().match(/^c/) ? $.datepicker._getDate(e1) : null) || new Date, i1 = r1.getFullYear(), s1 = r1.getMonth(), o1 = r1.getDate(), u1 = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, a1 = u1.exec(t1);
                while(a1){
                    switch(a1[2] || "d"){
                        case "d":
                        case "D":
                            o1 += parseInt(a1[1], 10);
                            break;
                        case "w":
                        case "W":
                            o1 += parseInt(a1[1], 10) * 7;
                            break;
                        case "m":
                        case "M":
                            s1 += parseInt(a1[1], 10), o1 = Math.min(o1, $.datepicker._getDaysInMonth(i1, s1));
                            break;
                        case "y":
                        case "Y":
                            i1 += parseInt(a1[1], 10), o1 = Math.min(o1, $.datepicker._getDaysInMonth(i1, s1));
                    }
                    a1 = u1.exec(t1);
                }
                return new Date(i1, s1, o1);
            }, s1 = t1 == null || t1 === "" ? n1 : typeof t1 == "string" ? i1(t1) : typeof t1 == "number" ? isNaN(t1) ? n1 : r1(t1) : new Date(t1.getTime());
            return s1 = s1 && s1.toString() == "Invalid Date" ? n1 : s1, s1 && (s1.setHours(0), s1.setMinutes(0), s1.setSeconds(0), s1.setMilliseconds(0)), this._daylightSavingAdjust(s1);
        },
        _daylightSavingAdjust: function(e1) {
            return e1 ? (e1.setHours(e1.getHours() > 12 ? e1.getHours() + 2 : 0), e1) : null;
        },
        _setDate: function(e1, t1, n1) {
            var r1 = !t1, i1 = e1.selectedMonth, s1 = e1.selectedYear, o1 = this._restrictMinMax(e1, this._determineDate(e1, t1, new Date));
            e1.selectedDay = e1.currentDay = o1.getDate(), e1.drawMonth = e1.selectedMonth = e1.currentMonth = o1.getMonth(), e1.drawYear = e1.selectedYear = e1.currentYear = o1.getFullYear(), (i1 != e1.selectedMonth || s1 != e1.selectedYear) && !n1 && this._notifyChange(e1), this._adjustInstDate(e1), e1.input && e1.input.val(r1 ? "" : this._formatDate(e1));
        },
        _getDate: function(e1) {
            var t1 = !e1.currentYear || e1.input && e1.input.val() == "" ? null : this._daylightSavingAdjust(new Date(e1.currentYear, e1.currentMonth, e1.currentDay));
            return t1;
        },
        _attachHandlers: function(e1) {
            var t1 = this._get(e1, "stepMonths"), n1 = "#" + e1.id.replace(/\\\\/g, "\\");
            e1.dpDiv.find("[data-handler]").map(function() {
                var e1 = {
                    prev: function() {
                        window["DP_jQuery_" + dpuuid].datepicker._adjustDate(n1, -t1, "M");
                    },
                    next: function() {
                        window["DP_jQuery_" + dpuuid].datepicker._adjustDate(n1, +t1, "M");
                    },
                    hide: function() {
                        window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker();
                    },
                    today: function() {
                        window["DP_jQuery_" + dpuuid].datepicker._gotoToday(n1);
                    },
                    selectDay: function() {
                        return window["DP_jQuery_" + dpuuid].datepicker._selectDay(n1, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1;
                    },
                    selectMonth: function() {
                        return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(n1, this, "M"), !1;
                    },
                    selectYear: function() {
                        return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(n1, this, "Y"), !1;
                    }
                };
                $(this).bind(this.getAttribute("data-event"), e1[this.getAttribute("data-handler")]);
            });
        },
        _generateHTML: function(e1) {
            var t1 = new Date;
            t1 = this._daylightSavingAdjust(new Date(t1.getFullYear(), t1.getMonth(), t1.getDate()));
            var n1 = this._get(e1, "isRTL"), r1 = this._get(e1, "showButtonPanel"), i1 = this._get(e1, "hideIfNoPrevNext"), s1 = this._get(e1, "navigationAsDateFormat"), o1 = this._getNumberOfMonths(e1), u1 = this._get(e1, "showCurrentAtPos"), a1 = this._get(e1, "stepMonths"), f1 = o1[0] != 1 || o1[1] != 1, l1 = this._daylightSavingAdjust(e1.currentDay ? new Date(e1.currentYear, e1.currentMonth, e1.currentDay) : new Date(9999, 9, 9)), c1 = this._getMinMaxDate(e1, "min"), h1 = this._getMinMaxDate(e1, "max"), p1 = e1.drawMonth - u1, d1 = e1.drawYear;
            p1 < 0 && (p1 += 12, d1--);
            if (h1) {
                var v1 = this._daylightSavingAdjust(new Date(h1.getFullYear(), h1.getMonth() - o1[0] * o1[1] + 1, h1.getDate()));
                v1 = c1 && v1 < c1 ? c1 : v1;
                while(this._daylightSavingAdjust(new Date(d1, p1, 1)) > v1)p1--, p1 < 0 && (p1 = 11, d1--);
            }
            e1.drawMonth = p1, e1.drawYear = d1;
            var m1 = this._get(e1, "prevText");
            m1 = s1 ? this.formatDate(m1, this._daylightSavingAdjust(new Date(d1, p1 - a1, 1)), this._getFormatConfig(e1)) : m1;
            var g1 = this._canAdjustMonth(e1, -1, d1, p1) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + m1 + '"><span class="ui-icon ui-icon-circle-triangle-' + (n1 ? "e" : "w") + '">' + m1 + "</span></a>" : i1 ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + m1 + '"><span class="ui-icon ui-icon-circle-triangle-' + (n1 ? "e" : "w") + '">' + m1 + "</span></a>", y1 = this._get(e1, "nextText");
            y1 = s1 ? this.formatDate(y1, this._daylightSavingAdjust(new Date(d1, p1 + a1, 1)), this._getFormatConfig(e1)) : y1;
            var b1 = this._canAdjustMonth(e1, 1, d1, p1) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + y1 + '"><span class="ui-icon ui-icon-circle-triangle-' + (n1 ? "w" : "e") + '">' + y1 + "</span></a>" : i1 ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + y1 + '"><span class="ui-icon ui-icon-circle-triangle-' + (n1 ? "w" : "e") + '">' + y1 + "</span></a>", w1 = this._get(e1, "currentText"), E1 = this._get(e1, "gotoCurrent") && e1.currentDay ? l1 : t1;
            w1 = s1 ? this.formatDate(w1, E1, this._getFormatConfig(e1)) : w1;
            var S1 = e1.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(e1, "closeText") + "</button>", x1 = r1 ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (n1 ? S1 : "") + (this._isInRange(e1, E1) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + w1 + "</button>" : "") + (n1 ? "" : S1) + "</div>" : "", T1 = parseInt(this._get(e1, "firstDay"), 10);
            T1 = isNaN(T1) ? 0 : T1;
            var N1 = this._get(e1, "showWeek"), C1 = this._get(e1, "dayNames"), k1 = this._get(e1, "dayNamesShort"), L1 = this._get(e1, "dayNamesMin"), A1 = this._get(e1, "monthNames"), O1 = this._get(e1, "monthNamesShort"), M1 = this._get(e1, "beforeShowDay"), _1 = this._get(e1, "showOtherMonths"), D1 = this._get(e1, "selectOtherMonths"), P1 = this._get(e1, "calculateWeek") || this.iso8601Week, H1 = this._getDefaultDate(e1), B1 = "";
            for(var j1 = 0; j1 < o1[0]; j1++){
                var F1 = "";
                this.maxRows = 4;
                for(var I1 = 0; I1 < o1[1]; I1++){
                    var q1 = this._daylightSavingAdjust(new Date(d1, p1, e1.selectedDay)), R1 = " ui-corner-all", U1 = "";
                    if (f1) {
                        U1 += '<div class="ui-datepicker-group';
                        if (o1[1] > 1) switch(I1){
                            case 0:
                                U1 += " ui-datepicker-group-first", R1 = " ui-corner-" + (n1 ? "right" : "left");
                                break;
                            case o1[1] - 1:
                                U1 += " ui-datepicker-group-last", R1 = " ui-corner-" + (n1 ? "left" : "right");
                                break;
                            default:
                                U1 += " ui-datepicker-group-middle", R1 = "";
                        }
                        U1 += '">';
                    }
                    U1 += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + R1 + '">' + (/all|left/.test(R1) && j1 == 0 ? n1 ? b1 : g1 : "") + (/all|right/.test(R1) && j1 == 0 ? n1 ? g1 : b1 : "") + this._generateMonthYearHeader(e1, p1, d1, c1, h1, j1 > 0 || I1 > 0, A1, O1) + '</div><table class="ui-datepicker-calendar"><thead>' + "<tr>";
                    var z1 = N1 ? '<th class="ui-datepicker-week-col">' + this._get(e1, "weekHeader") + "</th>" : "";
                    for(var W1 = 0; W1 < 7; W1++){
                        var X1 = (W1 + T1) % 7;
                        z1 += "<th" + ((W1 + T1 + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + ">" + '<span title="' + C1[X1] + '">' + L1[X1] + "</span></th>";
                    }
                    U1 += z1 + "</tr></thead><tbody>";
                    var V1 = this._getDaysInMonth(d1, p1);
                    d1 == e1.selectedYear && p1 == e1.selectedMonth && (e1.selectedDay = Math.min(e1.selectedDay, V1));
                    var J1 = (this._getFirstDayOfMonth(d1, p1) - T1 + 7) % 7, K1 = Math.ceil((J1 + V1) / 7), Q1 = f1 ? this.maxRows > K1 ? this.maxRows : K1 : K1;
                    this.maxRows = Q1;
                    var G1 = this._daylightSavingAdjust(new Date(d1, p1, 1 - J1));
                    for(var Y1 = 0; Y1 < Q1; Y1++){
                        U1 += "<tr>";
                        var Z1 = N1 ? '<td class="ui-datepicker-week-col">' + this._get(e1, "calculateWeek")(G1) + "</td>" : "";
                        for(var W1 = 0; W1 < 7; W1++){
                            var et1 = M1 ? M1.apply(e1.input ? e1.input[0] : null, [
                                G1
                            ]) : [
                                !0,
                                ""
                            ], tt1 = G1.getMonth() != p1, nt1 = tt1 && !D1 || !et1[0] || c1 && G1 < c1 || h1 && G1 > h1;
                            Z1 += '<td class="' + ((W1 + T1 + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (tt1 ? " ui-datepicker-other-month" : "") + (G1.getTime() == q1.getTime() && p1 == e1.selectedMonth && e1._keyEvent || H1.getTime() == G1.getTime() && H1.getTime() == q1.getTime() ? " " + this._dayOverClass : "") + (nt1 ? " " + this._unselectableClass + " ui-state-disabled" : "") + (tt1 && !_1 ? "" : " " + et1[1] + (G1.getTime() == l1.getTime() ? " " + this._currentClass : "") + (G1.getTime() == t1.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!tt1 || _1) && et1[2] ? ' title="' + et1[2] + '"' : "") + (nt1 ? "" : ' data-handler="selectDay" data-event="click" data-month="' + G1.getMonth() + '" data-year="' + G1.getFullYear() + '"') + ">" + (tt1 && !_1 ? "&#xa0;" : nt1 ? '<span class="ui-state-default">' + G1.getDate() + "</span>" : '<a class="ui-state-default' + (G1.getTime() == t1.getTime() ? " ui-state-highlight" : "") + (G1.getTime() == l1.getTime() ? " ui-state-active" : "") + (tt1 ? " ui-priority-secondary" : "") + '" href="#">' + G1.getDate() + "</a>") + "</td>", G1.setDate(G1.getDate() + 1), G1 = this._daylightSavingAdjust(G1);
                        }
                        U1 += Z1 + "</tr>";
                    }
                    p1++, p1 > 11 && (p1 = 0, d1++), U1 += "</tbody></table>" + (f1 ? "</div>" + (o1[0] > 0 && I1 == o1[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), F1 += U1;
                }
                B1 += F1;
            }
            return B1 += x1 + ($.browser.msie && parseInt($.browser.version, 10) < 7 && !e1.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), e1._keyEvent = !1, B1;
        },
        _generateMonthYearHeader: function(e1, t1, n1, r1, i1, s1, o1, u1) {
            var a1 = this._get(e1, "changeMonth"), f1 = this._get(e1, "changeYear"), l1 = this._get(e1, "showMonthAfterYear"), c1 = '<div class="ui-datepicker-title">', h1 = "";
            if (s1 || !a1) h1 += '<span class="ui-datepicker-month">' + o1[t1] + "</span>";
            else {
                var p1 = r1 && r1.getFullYear() == n1, d1 = i1 && i1.getFullYear() == n1;
                h1 += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
                for(var v1 = 0; v1 < 12; v1++)(!p1 || v1 >= r1.getMonth()) && (!d1 || v1 <= i1.getMonth()) && (h1 += '<option value="' + v1 + '"' + (v1 == t1 ? ' selected="selected"' : "") + ">" + u1[v1] + "</option>");
                h1 += "</select>";
            }
            l1 || (c1 += h1 + (s1 || !a1 || !f1 ? "&#xa0;" : ""));
            if (!e1.yearshtml) {
                e1.yearshtml = "";
                if (s1 || !f1) c1 += '<span class="ui-datepicker-year">' + n1 + "</span>";
                else {
                    var m1 = this._get(e1, "yearRange").split(":"), g1 = (new Date).getFullYear(), y1 = function(e1) {
                        var t1 = e1.match(/c[+-].*/) ? n1 + parseInt(e1.substring(1), 10) : e1.match(/[+-].*/) ? g1 + parseInt(e1, 10) : parseInt(e1, 10);
                        return isNaN(t1) ? g1 : t1;
                    }, b1 = y1(m1[0]), w1 = Math.max(b1, y1(m1[1] || ""));
                    b1 = r1 ? Math.max(b1, r1.getFullYear()) : b1, w1 = i1 ? Math.min(w1, i1.getFullYear()) : w1, e1.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';
                    for(; b1 <= w1; b1++)e1.yearshtml += '<option value="' + b1 + '"' + (b1 == n1 ? ' selected="selected"' : "") + ">" + b1 + "</option>";
                    e1.yearshtml += "</select>", c1 += e1.yearshtml, e1.yearshtml = null;
                }
            }
            return c1 += this._get(e1, "yearSuffix"), l1 && (c1 += (s1 || !a1 || !f1 ? "&#xa0;" : "") + h1), c1 += "</div>", c1;
        },
        _adjustInstDate: function(e1, t1, n1) {
            var r1 = e1.drawYear + (n1 == "Y" ? t1 : 0), i1 = e1.drawMonth + (n1 == "M" ? t1 : 0), s1 = Math.min(e1.selectedDay, this._getDaysInMonth(r1, i1)) + (n1 == "D" ? t1 : 0), o1 = this._restrictMinMax(e1, this._daylightSavingAdjust(new Date(r1, i1, s1)));
            e1.selectedDay = o1.getDate(), e1.drawMonth = e1.selectedMonth = o1.getMonth(), e1.drawYear = e1.selectedYear = o1.getFullYear(), (n1 == "M" || n1 == "Y") && this._notifyChange(e1);
        },
        _restrictMinMax: function(e1, t1) {
            var n1 = this._getMinMaxDate(e1, "min"), r1 = this._getMinMaxDate(e1, "max"), i1 = n1 && t1 < n1 ? n1 : t1;
            return i1 = r1 && i1 > r1 ? r1 : i1, i1;
        },
        _notifyChange: function(e1) {
            var t1 = this._get(e1, "onChangeMonthYear");
            t1 && t1.apply(e1.input ? e1.input[0] : null, [
                e1.selectedYear,
                e1.selectedMonth + 1,
                e1
            ]);
        },
        _getNumberOfMonths: function(e1) {
            var t1 = this._get(e1, "numberOfMonths");
            return t1 == null ? [
                1,
                1
            ] : typeof t1 == "number" ? [
                1,
                t1
            ] : t1;
        },
        _getMinMaxDate: function(e1, t1) {
            return this._determineDate(e1, this._get(e1, t1 + "Date"), null);
        },
        _getDaysInMonth: function(e1, t1) {
            return 32 - this._daylightSavingAdjust(new Date(e1, t1, 32)).getDate();
        },
        _getFirstDayOfMonth: function(e1, t1) {
            return new Date(e1, t1, 1).getDay();
        },
        _canAdjustMonth: function(e1, t1, n1, r1) {
            var i1 = this._getNumberOfMonths(e1), s1 = this._daylightSavingAdjust(new Date(n1, r1 + (t1 < 0 ? t1 : i1[0] * i1[1]), 1));
            return t1 < 0 && s1.setDate(this._getDaysInMonth(s1.getFullYear(), s1.getMonth())), this._isInRange(e1, s1);
        },
        _isInRange: function(e1, t1) {
            var n1 = this._getMinMaxDate(e1, "min"), r1 = this._getMinMaxDate(e1, "max");
            return (!n1 || t1.getTime() >= n1.getTime()) && (!r1 || t1.getTime() <= r1.getTime());
        },
        _getFormatConfig: function(e1) {
            var t1 = this._get(e1, "shortYearCutoff");
            return t1 = typeof t1 != "string" ? t1 : (new Date).getFullYear() % 100 + parseInt(t1, 10), {
                shortYearCutoff: t1,
                dayNamesShort: this._get(e1, "dayNamesShort"),
                dayNames: this._get(e1, "dayNames"),
                monthNamesShort: this._get(e1, "monthNamesShort"),
                monthNames: this._get(e1, "monthNames")
            };
        },
        _formatDate: function(e1, t1, n1, r1) {
            t1 || (e1.currentDay = e1.selectedDay, e1.currentMonth = e1.selectedMonth, e1.currentYear = e1.selectedYear);
            var i1 = t1 ? typeof t1 == "object" ? t1 : this._daylightSavingAdjust(new Date(r1, n1, t1)) : this._daylightSavingAdjust(new Date(e1.currentYear, e1.currentMonth, e1.currentDay));
            return this.formatDate(this._get(e1, "dateFormat"), i1, this._getFormatConfig(e1));
        }
    }), $.fn.datepicker = function(e1) {
        if (!this.length) return this;
        $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv), $.datepicker.initialized = !0);
        var t1 = Array.prototype.slice.call(arguments, 1);
        return typeof e1 != "string" || e1 != "isDisabled" && e1 != "getDate" && e1 != "widget" ? e1 == "option" && arguments.length == 2 && typeof arguments[1] == "string" ? $.datepicker["_" + e1 + "Datepicker"].apply($.datepicker, [
            this[0]
        ].concat(t1)) : this.each(function() {
            typeof e1 == "string" ? $.datepicker["_" + e1 + "Datepicker"].apply($.datepicker, [
                this
            ].concat(t1)) : $.datepicker._attachDatepicker(this, e1);
        }) : $.datepicker["_" + e1 + "Datepicker"].apply($.datepicker, [
            this[0]
        ].concat(t1));
    }, $.datepicker = new Datepicker, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.9.0", window["DP_jQuery_" + dpuuid] = $;
}(jQuery), function(e1, t1) {
    var n1 = "ui-dialog ui-widget ui-widget-content ui-corner-all ", r1 = {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0
    }, i1 = {
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0
    };
    e1.widget("ui.dialog", {
        version: "1.9.0",
        options: {
            autoOpen: !0,
            buttons: {},
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: !1,
            maxWidth: !1,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(t1) {
                    var n1 = e1(this).css(t1).offset().top;
                    n1 < 0 && e1(this).css("top", t1.top - n1);
                }
            },
            resizable: !0,
            show: null,
            stack: !0,
            title: "",
            width: 300,
            zIndex: 1e3
        },
        _create: function() {
            this.originalTitle = this.element.attr("title"), typeof this.originalTitle != "string" && (this.originalTitle = ""), this.oldPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.options.title = this.options.title || this.originalTitle;
            var t1 = this, r1 = this.options, i1 = r1.title || "&#160;", s1 = (this.uiDialog = e1("<div>")).addClass(n1 + r1.dialogClass).css({
                display: "none",
                outline: 0,
                zIndex: r1.zIndex
            }).attr("tabIndex", -1).keydown(function(n1) {
                r1.closeOnEscape && !n1.isDefaultPrevented() && n1.keyCode && n1.keyCode === e1.ui.keyCode.ESCAPE && (t1.close(n1), n1.preventDefault());
            }).mousedown(function(e1) {
                t1.moveToTop(!1, e1);
            }).appendTo("body"), o1 = this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(s1), u1 = (this.uiDialogTitlebar = e1("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").prependTo(s1), a1 = e1("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role", "button").click(function(e1) {
                e1.preventDefault(), t1.close(e1);
            }).appendTo(u1), f1 = (this.uiDialogTitlebarCloseText = e1("<span>")).addClass("ui-icon ui-icon-closethick").text(r1.closeText).appendTo(a1), l1 = e1("<span>").uniqueId().addClass("ui-dialog-title").html(i1).prependTo(u1), c1 = (this.uiDialogButtonPane = e1("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), h1 = (this.uiButtonSet = e1("<div>")).addClass("ui-dialog-buttonset").appendTo(c1);
            s1.attr({
                role: "dialog",
                "aria-labelledby": l1.attr("id")
            }), u1.find("*").add(u1).disableSelection(), this._hoverable(a1), this._focusable(a1), r1.draggable && e1.fn.draggable && this._makeDraggable(), r1.resizable && e1.fn.resizable && this._makeResizable(), this._createButtons(r1.buttons), this._isOpen = !1, e1.fn.bgiframe && s1.bgiframe(), this._on(s1, {
                keydown: function(t1) {
                    if (!r1.modal || t1.keyCode !== e1.ui.keyCode.TAB) return;
                    var n1 = e1(":tabbable", s1), i1 = n1.filter(":first"), o1 = n1.filter(":last");
                    if (t1.target === o1[0] && !t1.shiftKey) return i1.focus(1), !1;
                    if (t1.target === i1[0] && t1.shiftKey) return o1.focus(1), !1;
                }
            });
        },
        _init: function() {
            this.options.autoOpen && this.open();
        },
        _destroy: function() {
            var e1, t1 = this.oldPosition;
            this.overlay && this.overlay.destroy(), this.uiDialog.hide(), this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e1 = t1.parent.children().eq(t1.index), e1.length && e1[0] !== this.element[0] ? e1.before(this.element) : t1.parent.append(this.element);
        },
        widget: function() {
            return this.uiDialog;
        },
        close: function(t1) {
            var n1 = this, r1, i1;
            if (!this._isOpen) return;
            if (!1 === this._trigger("beforeClose", t1)) return;
            return this._isOpen = !1, this.overlay && this.overlay.destroy(), this.options.hide ? this.uiDialog.hide(this.options.hide, function() {
                n1._trigger("close", t1);
            }) : (this.uiDialog.hide(), this._trigger("close", t1)), e1.ui.dialog.overlay.resize(), this.options.modal && (r1 = 0, e1(".ui-dialog").each(function() {
                this !== n1.uiDialog[0] && (i1 = e1(this).css("z-index"), isNaN(i1) || (r1 = Math.max(r1, i1)));
            }), e1.ui.dialog.maxZ = r1), this;
        },
        isOpen: function() {
            return this._isOpen;
        },
        moveToTop: function(t1, n1) {
            var r1 = this.options, i1;
            return r1.modal && !t1 || !r1.stack && !r1.modal ? this._trigger("focus", n1) : (r1.zIndex > e1.ui.dialog.maxZ && (e1.ui.dialog.maxZ = r1.zIndex), this.overlay && (e1.ui.dialog.maxZ += 1, e1.ui.dialog.overlay.maxZ = e1.ui.dialog.maxZ, this.overlay.$el.css("z-index", e1.ui.dialog.overlay.maxZ)), i1 = {
                scrollTop: this.element.scrollTop(),
                scrollLeft: this.element.scrollLeft()
            }, e1.ui.dialog.maxZ += 1, this.uiDialog.css("z-index", e1.ui.dialog.maxZ), this.element.attr(i1), this._trigger("focus", n1), this);
        },
        open: function() {
            if (this._isOpen) return;
            var t1, n1 = this.options, r1 = this.uiDialog;
            return this._size(), this._position(n1.position), r1.show(n1.show), this.overlay = n1.modal ? new e1.ui.dialog.overlay(this) : null, this.moveToTop(!0), t1 = this.element.find(":tabbable"), t1.length || (t1 = this.uiDialogButtonPane.find(":tabbable"), t1.length || (t1 = r1)), t1.eq(0).focus(), this._isOpen = !0, this._trigger("open"), this;
        },
        _createButtons: function(t1) {
            var n1, r1, i1 = this, s1 = !1;
            this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), typeof t1 == "object" && t1 !== null && e1.each(t1, function() {
                return !(s1 = !0);
            }), s1 ? (e1.each(t1, function(t1, n1) {
                n1 = e1.isFunction(n1) ? {
                    click: n1,
                    text: t1
                } : n1;
                var r1 = e1("<button type='button'>").attr(n1, !0).unbind("click").click(function() {
                    n1.click.apply(i1.element[0], arguments);
                }).appendTo(i1.uiButtonSet);
                e1.fn.button && r1.button();
            }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog)) : this.uiDialog.removeClass("ui-dialog-buttons");
        },
        _makeDraggable: function() {
            function r1(e1) {
                return {
                    position: e1.position,
                    offset: e1.offset
                };
            }
            var t1 = this, n1 = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(n1, i1) {
                    e1(this).addClass("ui-dialog-dragging"), t1._trigger("dragStart", n1, r1(i1));
                },
                drag: function(e1, n1) {
                    t1._trigger("drag", e1, r1(n1));
                },
                stop: function(i1, s1) {
                    n1.position = [
                        s1.position.left - t1.document.scrollLeft(),
                        s1.position.top - t1.document.scrollTop()
                    ], e1(this).removeClass("ui-dialog-dragging"), t1._trigger("dragStop", i1, r1(s1)), e1.ui.dialog.overlay.resize();
                }
            });
        },
        _makeResizable: function(n1) {
            function u1(e1) {
                return {
                    originalPosition: e1.originalPosition,
                    originalSize: e1.originalSize,
                    position: e1.position,
                    size: e1.size
                };
            }
            n1 = n1 === t1 ? this.options.resizable : n1;
            var r1 = this, i1 = this.options, s1 = this.uiDialog.css("position"), o1 = typeof n1 == "string" ? n1 : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: i1.maxWidth,
                maxHeight: i1.maxHeight,
                minWidth: i1.minWidth,
                minHeight: this._minHeight(),
                handles: o1,
                start: function(t1, n1) {
                    e1(this).addClass("ui-dialog-resizing"), r1._trigger("resizeStart", t1, u1(n1));
                },
                resize: function(e1, t1) {
                    r1._trigger("resize", e1, u1(t1));
                },
                stop: function(t1, n1) {
                    e1(this).removeClass("ui-dialog-resizing"), i1.height = e1(this).height(), i1.width = e1(this).width(), r1._trigger("resizeStop", t1, u1(n1)), e1.ui.dialog.overlay.resize();
                }
            }).css("position", s1).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se");
        },
        _minHeight: function() {
            var e1 = this.options;
            return e1.height === "auto" ? e1.minHeight : Math.min(e1.minHeight, e1.height);
        },
        _position: function(t1) {
            var n1 = [], r1 = [
                0,
                0
            ], i1;
            if (t1) {
                if (typeof t1 == "string" || typeof t1 == "object" && "0" in t1) n1 = t1.split ? t1.split(" ") : [
                    t1[0],
                    t1[1]
                ], n1.length === 1 && (n1[1] = n1[0]), e1.each([
                    "left",
                    "top"
                ], function(e1, t1) {
                    +n1[e1] === n1[e1] && (r1[e1] = n1[e1], n1[e1] = t1);
                }), t1 = {
                    my: n1.join(" "),
                    at: n1.join(" "),
                    offset: r1.join(" ")
                };
                t1 = e1.extend({}, e1.ui.dialog.prototype.options.position, t1);
            } else t1 = e1.ui.dialog.prototype.options.position;
            i1 = this.uiDialog.is(":visible"), i1 || this.uiDialog.show(), this.uiDialog.position(t1), i1 || this.uiDialog.hide();
        },
        _setOptions: function(t1) {
            var n1 = this, s1 = {}, o1 = !1;
            e1.each(t1, function(e1, t1) {
                n1._setOption(e1, t1), e1 in r1 && (o1 = !0), e1 in i1 && (s1[e1] = t1);
            }), o1 && this._size(), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", s1);
        },
        _setOption: function(t1, r1) {
            var i1, s1, o1 = this.uiDialog;
            switch(t1){
                case "buttons":
                    this._createButtons(r1);
                    break;
                case "closeText":
                    this.uiDialogTitlebarCloseText.text("" + r1);
                    break;
                case "dialogClass":
                    o1.removeClass(this.options.dialogClass).addClass(n1 + r1);
                    break;
                case "disabled":
                    r1 ? o1.addClass("ui-dialog-disabled") : o1.removeClass("ui-dialog-disabled");
                    break;
                case "draggable":
                    i1 = o1.is(":data(draggable)"), i1 && !r1 && o1.draggable("destroy"), !i1 && r1 && this._makeDraggable();
                    break;
                case "position":
                    this._position(r1);
                    break;
                case "resizable":
                    s1 = o1.is(":data(resizable)"), s1 && !r1 && o1.resizable("destroy"), s1 && typeof r1 == "string" && o1.resizable("option", "handles", r1), !s1 && r1 !== !1 && this._makeResizable(r1);
                    break;
                case "title":
                    e1(".ui-dialog-title", this.uiDialogTitlebar).html("" + (r1 || "&#160;"));
            }
            this._super(t1, r1);
        },
        _size: function() {
            var t1, n1, r1, i1 = this.options, s1 = this.uiDialog.is(":visible");
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                height: 0
            }), i1.minWidth > i1.width && (i1.width = i1.minWidth), t1 = this.uiDialog.css({
                height: "auto",
                width: i1.width
            }).outerHeight(), n1 = Math.max(0, i1.minHeight - t1), i1.height === "auto" ? e1.support.minHeight ? this.element.css({
                minHeight: n1,
                height: "auto"
            }) : (this.uiDialog.show(), r1 = this.element.css("height", "auto").height(), s1 || this.uiDialog.hide(), this.element.height(Math.max(r1, n1))) : this.element.height(Math.max(i1.height - t1, 0)), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight());
        }
    }), e1.extend(e1.ui.dialog, {
        uuid: 0,
        maxZ: 0,
        getTitleId: function(e1) {
            var t1 = e1.attr("id");
            return t1 || (this.uuid += 1, t1 = this.uuid), "ui-dialog-title-" + t1;
        },
        overlay: function(t1) {
            this.$el = e1.ui.dialog.overlay.create(t1);
        }
    }), e1.extend(e1.ui.dialog.overlay, {
        instances: [],
        oldInstances: [],
        maxZ: 0,
        events: e1.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function(e1) {
            return e1 + ".dialog-overlay";
        }).join(" "),
        create: function(t1) {
            this.instances.length === 0 && (setTimeout(function() {
                e1.ui.dialog.overlay.instances.length && e1(document).bind(e1.ui.dialog.overlay.events, function(t1) {
                    if (e1(t1.target).zIndex() < e1.ui.dialog.overlay.maxZ) return !1;
                });
            }, 1), e1(window).bind("resize.dialog-overlay", e1.ui.dialog.overlay.resize));
            var n1 = this.oldInstances.pop() || e1("<div>").addClass("ui-widget-overlay");
            return e1(document).bind("keydown.dialog-overlay", function(r1) {
                var i1 = e1.ui.dialog.overlay.instances;
                i1.length !== 0 && i1[i1.length - 1] === n1 && t1.options.closeOnEscape && !r1.isDefaultPrevented() && r1.keyCode && r1.keyCode === e1.ui.keyCode.ESCAPE && (t1.close(r1), r1.preventDefault());
            }), n1.appendTo(document.body).css({
                width: this.width(),
                height: this.height()
            }), e1.fn.bgiframe && n1.bgiframe(), this.instances.push(n1), n1;
        },
        destroy: function(t1) {
            var n1 = e1.inArray(t1, this.instances), r1 = 0;
            n1 !== -1 && this.oldInstances.push(this.instances.splice(n1, 1)[0]), this.instances.length === 0 && e1([
                document,
                window
            ]).unbind(".dialog-overlay"), t1.height(0).width(0).remove(), e1.each(this.instances, function() {
                r1 = Math.max(r1, this.css("z-index"));
            }), this.maxZ = r1;
        },
        height: function() {
            var t1, n1;
            return e1.browser.msie ? (t1 = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), n1 = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), t1 < n1 ? e1(window).height() + "px" : t1 + "px") : e1(document).height() + "px";
        },
        width: function() {
            var t1, n1;
            return e1.browser.msie ? (t1 = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), n1 = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), t1 < n1 ? e1(window).width() + "px" : t1 + "px") : e1(document).width() + "px";
        },
        resize: function() {
            var t1 = e1([]);
            e1.each(e1.ui.dialog.overlay.instances, function() {
                t1 = t1.add(this);
            }), t1.css({
                width: 0,
                height: 0
            }).css({
                width: e1.ui.dialog.overlay.width(),
                height: e1.ui.dialog.overlay.height()
            });
        }
    }), e1.extend(e1.ui.dialog.overlay.prototype, {
        destroy: function() {
            e1.ui.dialog.overlay.destroy(this.$el);
        }
    });
}(jQuery), function(e1, t1) {
    var n1 = /up|down|vertical/, r1 = /up|left|vertical|horizontal/;
    e1.effects.effect.blind = function(t1, i1) {
        var s1 = e1(this), o1 = [
            "position",
            "top",
            "bottom",
            "left",
            "right",
            "height",
            "width"
        ], u1 = e1.effects.setMode(s1, t1.mode || "hide"), a1 = t1.direction || "up", f1 = n1.test(a1), l1 = f1 ? "height" : "width", c1 = f1 ? "top" : "left", h1 = r1.test(a1), p1 = {}, d1 = u1 === "show", v1, m1, g1;
        s1.parent().is(".ui-effects-wrapper") ? e1.effects.save(s1.parent(), o1) : e1.effects.save(s1, o1), s1.show(), v1 = e1.effects.createWrapper(s1).css({
            overflow: "hidden"
        }), m1 = v1[l1](), g1 = parseFloat(v1.css(c1)) || 0, p1[l1] = d1 ? m1 : 0, h1 || (s1.css(f1 ? "bottom" : "right", 0).css(f1 ? "top" : "left", "auto").css({
            position: "absolute"
        }), p1[c1] = d1 ? g1 : m1 + g1), d1 && (v1.css(l1, 0), h1 || v1.css(c1, g1 + m1)), v1.animate(p1, {
            duration: t1.duration,
            easing: t1.easing,
            queue: !1,
            complete: function() {
                u1 === "hide" && s1.hide(), e1.effects.restore(s1, o1), e1.effects.removeWrapper(s1), i1();
            }
        });
    };
}(jQuery), function(e1, t1) {
    e1.effects.effect.bounce = function(t1, n1) {
        var r1 = e1(this), i1 = [
            "position",
            "top",
            "bottom",
            "left",
            "right",
            "height",
            "width"
        ], s1 = e1.effects.setMode(r1, t1.mode || "effect"), o1 = s1 === "hide", u1 = s1 === "show", a1 = t1.direction || "up", f1 = t1.distance, l1 = t1.times || 5, c1 = l1 * 2 + (u1 || o1 ? 1 : 0), h1 = t1.duration / c1, p1 = t1.easing, d1 = a1 === "up" || a1 === "down" ? "top" : "left", v1 = a1 === "up" || a1 === "left", m1, g1, y1, b1 = r1.queue(), w1 = b1.length;
        (u1 || o1) && i1.push("opacity"), e1.effects.save(r1, i1), r1.show(), e1.effects.createWrapper(r1), f1 || (f1 = r1[d1 === "top" ? "outerHeight" : "outerWidth"]() / 3), u1 && (y1 = {
            opacity: 1
        }, y1[d1] = 0, r1.css("opacity", 0).css(d1, v1 ? -f1 * 2 : f1 * 2).animate(y1, h1, p1)), o1 && (f1 /= Math.pow(2, l1 - 1)), y1 = {}, y1[d1] = 0;
        for(m1 = 0; m1 < l1; m1++)g1 = {}, g1[d1] = (v1 ? "-=" : "+=") + f1, r1.animate(g1, h1, p1).animate(y1, h1, p1), f1 = o1 ? f1 * 2 : f1 / 2;
        o1 && (g1 = {
            opacity: 0
        }, g1[d1] = (v1 ? "-=" : "+=") + f1, r1.animate(g1, h1, p1)), r1.queue(function() {
            o1 && r1.hide(), e1.effects.restore(r1, i1), e1.effects.removeWrapper(r1), n1();
        }), w1 > 1 && b1.splice.apply(b1, [
            1,
            0
        ].concat(b1.splice(w1, c1 + 1))), r1.dequeue();
    };
}(jQuery), function(e1, t1) {
    e1.effects.effect.clip = function(t1, n1) {
        var r1 = e1(this), i1 = [
            "position",
            "top",
            "bottom",
            "left",
            "right",
            "height",
            "width"
        ], s1 = e1.effects.setMode(r1, t1.mode || "hide"), o1 = s1 === "show", u1 = t1.direction || "vertical", a1 = u1 === "vertical", f1 = a1 ? "height" : "width", l1 = a1 ? "top" : "left", c1 = {}, h1, p1, d1;
        e1.effects.save(r1, i1), r1.show(), h1 = e1.effects.createWrapper(r1).css({
            overflow: "hidden"
        }), p1 = r1[0].tagName === "IMG" ? h1 : r1, d1 = p1[f1](), o1 && (p1.css(f1, 0), p1.css(l1, d1 / 2)), c1[f1] = o1 ? d1 : 0, c1[l1] = o1 ? 0 : d1 / 2, p1.animate(c1, {
            queue: !1,
            duration: t1.duration,
            easing: t1.easing,
            complete: function() {
                o1 || r1.hide(), e1.effects.restore(r1, i1), e1.effects.removeWrapper(r1), n1();
            }
        });
    };
}(jQuery), function(e1, t1) {
    e1.effects.effect.drop = function(t1, n1) {
        var r1 = e1(this), i1 = [
            "position",
            "top",
            "bottom",
            "left",
            "right",
            "opacity",
            "height",
            "width"
        ], s1 = e1.effects.setMode(r1, t1.mode || "hide"), o1 = s1 === "show", u1 = t1.direction || "left", a1 = u1 === "up" || u1 === "down" ? "top" : "left", f1 = u1 === "up" || u1 === "left" ? "pos" : "neg", l1 = {
            opacity: o1 ? 1 : 0
        }, c1;
        e1.effects.save(r1, i1), r1.show(), e1.effects.createWrapper(r1), c1 = t1.distance || r1[a1 === "top" ? "outerHeight" : "outerWidth"](!0) / 2, o1 && r1.css("opacity", 0).css(a1, f1 === "pos" ? -c1 : c1), l1[a1] = (o1 ? f1 === "pos" ? "+=" : "-=" : f1 === "pos" ? "-=" : "+=") + c1, r1.animate(l1, {
            queue: !1,
            duration: t1.duration,
            easing: t1.easing,
            complete: function() {
                s1 === "hide" && r1.hide(), e1.effects.restore(r1, i1), e1.effects.removeWrapper(r1), n1();
            }
        });
    };
}(jQuery), function(e1, t1) {
    e1.effects.effect.explode = function(t1, n1) {
        function y1() {
            c1.push(this), c1.length === r1 * i1 && b1();
        }
        function b1() {
            s1.css({
                visibility: "visible"
            }), e1(c1).remove(), u1 || s1.hide(), n1();
        }
        var r1 = t1.pieces ? Math.round(Math.sqrt(t1.pieces)) : 3, i1 = r1, s1 = e1(this), o1 = e1.effects.setMode(s1, t1.mode || "hide"), u1 = o1 === "show", a1 = s1.show().css("visibility", "hidden").offset(), f1 = Math.ceil(s1.outerWidth() / i1), l1 = Math.ceil(s1.outerHeight() / r1), c1 = [], h1, p1, d1, v1, m1, g1;
        for(h1 = 0; h1 < r1; h1++){
            v1 = a1.top + h1 * l1, g1 = h1 - (r1 - 1) / 2;
            for(p1 = 0; p1 < i1; p1++)d1 = a1.left + p1 * f1, m1 = p1 - (i1 - 1) / 2, s1.clone().appendTo("body").wrap("<div></div>").css({
                position: "absolute",
                visibility: "visible",
                left: -p1 * f1,
                top: -h1 * l1
            }).parent().addClass("ui-effects-explode").css({
                position: "absolute",
                overflow: "hidden",
                width: f1,
                height: l1,
                left: d1 + (u1 ? m1 * f1 : 0),
                top: v1 + (u1 ? g1 * l1 : 0),
                opacity: u1 ? 0 : 1
            }).animate({
                left: d1 + (u1 ? 0 : m1 * f1),
                top: v1 + (u1 ? 0 : g1 * l1),
                opacity: u1 ? 1 : 0
            }, t1.duration || 500, t1.easing, y1);
        }
    };
}(jQuery), function(e1, t1) {
    e1.effects.effect.fade = function(t1, n1) {
        var r1 = e1(this), i1 = e1.effects.setMode(r1, t1.mode || "toggle");
        r1.animate({
            opacity: i1
        }, {
            queue: !1,
            duration: t1.duration,
            easing: t1.easing,
            complete: n1
        });
    };
}(jQuery), function(e1, t1) {
    e1.effects.effect.fold = function(t1, n1) {
        var r1 = e1(this), i1 = [
            "position",
            "top",
            "bottom",
            "left",
            "right",
            "height",
            "width"
        ], s1 = e1.effects.setMode(r1, t1.mode || "hide"), o1 = s1 === "show", u1 = s1 === "hide", a1 = t1.size || 15, f1 = /([0-9]+)%/.exec(a1), l1 = !!t1.horizFirst, c1 = o1 !== l1, h1 = c1 ? [
            "width",
            "height"
        ] : [
            "height",
            "width"
        ], p1 = t1.duration / 2, d1, v1, m1 = {}, g1 = {};
        e1.effects.save(r1, i1), r1.show(), d1 = e1.effects.createWrapper(r1).css({
            overflow: "hidden"
        }), v1 = c1 ? [
            d1.width(),
            d1.height()
        ] : [
            d1.height(),
            d1.width()
        ], f1 && (a1 = parseInt(f1[1], 10) / 100 * v1[u1 ? 0 : 1]), o1 && d1.css(l1 ? {
            height: 0,
            width: a1
        } : {
            height: a1,
            width: 0
        }), m1[h1[0]] = o1 ? v1[0] : a1, g1[h1[1]] = o1 ? v1[1] : 0, d1.animate(m1, p1, t1.easing).animate(g1, p1, t1.easing, function() {
            u1 && r1.hide(), e1.effects.restore(r1, i1), e1.effects.removeWrapper(r1), n1();
        });
    };
}(jQuery), function(e1, t1) {
    e1.effects.effect.highlight = function(t1, n1) {
        var r1 = e1(this), i1 = [
            "backgroundImage",
            "backgroundColor",
            "opacity"
        ], s1 = e1.effects.setMode(r1, t1.mode || "show"), o1 = {
            backgroundColor: r1.css("backgroundColor")
        };
        s1 === "hide" && (o1.opacity = 0), e1.effects.save(r1, i1), r1.show().css({
            backgroundImage: "none",
            backgroundColor: t1.color || "#ffff99"
        }).animate(o1, {
            queue: !1,
            duration: t1.duration,
            easing: t1.easing,
            complete: function() {
                s1 === "hide" && r1.hide(), e1.effects.restore(r1, i1), n1();
            }
        });
    };
}(jQuery), function(e1, t1) {
    e1.effects.effect.pulsate = function(t1, n1) {
        var r1 = e1(this), i1 = e1.effects.setMode(r1, t1.mode || "show"), s1 = i1 === "show", o1 = i1 === "hide", u1 = s1 || i1 === "hide", a1 = (t1.times || 5) * 2 + (u1 ? 1 : 0), f1 = t1.duration / a1, l1 = 0, c1 = r1.queue(), h1 = c1.length, p1;
        if (s1 || !r1.is(":visible")) r1.css("opacity", 0).show(), l1 = 1;
        for(p1 = 1; p1 < a1; p1++)r1.animate({
            opacity: l1
        }, f1, t1.easing), l1 = 1 - l1;
        r1.animate({
            opacity: l1
        }, f1, t1.easing), r1.queue(function() {
            o1 && r1.hide(), n1();
        }), h1 > 1 && c1.splice.apply(c1, [
            1,
            0
        ].concat(c1.splice(h1, a1 + 1))), r1.dequeue();
    };
}(jQuery), function(e1, t1) {
    e1.effects.effect.puff = function(t1, n1) {
        var r1 = e1(this), i1 = e1.effects.setMode(r1, t1.mode || "hide"), s1 = i1 === "hide", o1 = parseInt(t1.percent, 10) || 150, u1 = o1 / 100, a1 = {
            height: r1.height(),
            width: r1.width()
        };
        e1.extend(t1, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: i1,
            complete: n1,
            percent: s1 ? o1 : 100,
            from: s1 ? a1 : {
                height: a1.height * u1,
                width: a1.width * u1
            }
        }), r1.effect(t1);
    }, e1.effects.effect.scale = function(t1, n1) {
        var r1 = e1(this), i1 = e1.extend(!0, {}, t1), s1 = e1.effects.setMode(r1, t1.mode || "effect"), o1 = parseInt(t1.percent, 10) || (parseInt(t1.percent, 10) === 0 ? 0 : s1 === "hide" ? 0 : 100), u1 = t1.direction || "both", a1 = t1.origin, f1 = {
            height: r1.height(),
            width: r1.width(),
            outerHeight: r1.outerHeight(),
            outerWidth: r1.outerWidth()
        }, l1 = {
            y: u1 !== "horizontal" ? o1 / 100 : 1,
            x: u1 !== "vertical" ? o1 / 100 : 1
        };
        i1.effect = "size", i1.queue = !1, i1.complete = n1, s1 !== "effect" && (i1.origin = a1 || [
            "middle",
            "center"
        ], i1.restore = !0), i1.from = t1.from || (s1 === "show" ? {
            height: 0,
            width: 0
        } : f1), i1.to = {
            height: f1.height * l1.y,
            width: f1.width * l1.x,
            outerHeight: f1.outerHeight * l1.y,
            outerWidth: f1.outerWidth * l1.x
        }, i1.fade && (s1 === "show" && (i1.from.opacity = 0, i1.to.opacity = 1), s1 === "hide" && (i1.from.opacity = 1, i1.to.opacity = 0)), r1.effect(i1);
    }, e1.effects.effect.size = function(t1, n1) {
        var r1 = e1(this), i1 = [
            "position",
            "top",
            "bottom",
            "left",
            "right",
            "width",
            "height",
            "overflow",
            "opacity"
        ], s1 = [
            "position",
            "top",
            "bottom",
            "left",
            "right",
            "overflow",
            "opacity"
        ], o1 = [
            "width",
            "height",
            "overflow"
        ], u1 = [
            "fontSize"
        ], a1 = [
            "borderTopWidth",
            "borderBottomWidth",
            "paddingTop",
            "paddingBottom"
        ], f1 = [
            "borderLeftWidth",
            "borderRightWidth",
            "paddingLeft",
            "paddingRight"
        ], l1 = e1.effects.setMode(r1, t1.mode || "effect"), c1 = t1.restore || l1 !== "effect", h1 = t1.scale || "both", p1 = t1.origin || [
            "middle",
            "center"
        ], d1, v1, m1, g1 = r1.css("position");
        l1 === "show" && r1.show(), d1 = {
            height: r1.height(),
            width: r1.width(),
            outerHeight: r1.outerHeight(),
            outerWidth: r1.outerWidth()
        }, r1.from = t1.from || d1, r1.to = t1.to || d1, m1 = {
            from: {
                y: r1.from.height / d1.height,
                x: r1.from.width / d1.width
            },
            to: {
                y: r1.to.height / d1.height,
                x: r1.to.width / d1.width
            }
        };
        if (h1 === "box" || h1 === "both") m1.from.y !== m1.to.y && (i1 = i1.concat(a1), r1.from = e1.effects.setTransition(r1, a1, m1.from.y, r1.from), r1.to = e1.effects.setTransition(r1, a1, m1.to.y, r1.to)), m1.from.x !== m1.to.x && (i1 = i1.concat(f1), r1.from = e1.effects.setTransition(r1, f1, m1.from.x, r1.from), r1.to = e1.effects.setTransition(r1, f1, m1.to.x, r1.to));
        (h1 === "content" || h1 === "both") && m1.from.y !== m1.to.y && (i1 = i1.concat(u1), r1.from = e1.effects.setTransition(r1, u1, m1.from.y, r1.from), r1.to = e1.effects.setTransition(r1, u1, m1.to.y, r1.to)), e1.effects.save(r1, c1 ? i1 : s1), r1.show(), e1.effects.createWrapper(r1), r1.css("overflow", "hidden").css(r1.from), p1 && (v1 = e1.effects.getBaseline(p1, d1), r1.from.top = (d1.outerHeight - r1.outerHeight()) * v1.y, r1.from.left = (d1.outerWidth - r1.outerWidth()) * v1.x, r1.to.top = (d1.outerHeight - r1.to.outerHeight) * v1.y, r1.to.left = (d1.outerWidth - r1.to.outerWidth) * v1.x), r1.css(r1.from);
        if (h1 === "content" || h1 === "both") a1 = a1.concat([
            "marginTop",
            "marginBottom"
        ]).concat(u1), f1 = f1.concat([
            "marginLeft",
            "marginRight"
        ]), o1 = i1.concat(a1).concat(f1), r1.find("*[width]").each(function() {
            var n1 = e1(this), r1 = {
                height: n1.height(),
                width: n1.width()
            };
            c1 && e1.effects.save(n1, o1), n1.from = {
                height: r1.height * m1.from.y,
                width: r1.width * m1.from.x
            }, n1.to = {
                height: r1.height * m1.to.y,
                width: r1.width * m1.to.x
            }, m1.from.y !== m1.to.y && (n1.from = e1.effects.setTransition(n1, a1, m1.from.y, n1.from), n1.to = e1.effects.setTransition(n1, a1, m1.to.y, n1.to)), m1.from.x !== m1.to.x && (n1.from = e1.effects.setTransition(n1, f1, m1.from.x, n1.from), n1.to = e1.effects.setTransition(n1, f1, m1.to.x, n1.to)), n1.css(n1.from), n1.animate(n1.to, t1.duration, t1.easing, function() {
                c1 && e1.effects.restore(n1, o1);
            });
        });
        r1.animate(r1.to, {
            queue: !1,
            duration: t1.duration,
            easing: t1.easing,
            complete: function() {
                r1.to.opacity === 0 && r1.css("opacity", r1.from.opacity), l1 === "hide" && r1.hide(), e1.effects.restore(r1, c1 ? i1 : s1), c1 || (g1 === "static" ? r1.css({
                    position: "relative",
                    top: r1.to.top,
                    left: r1.to.left
                }) : e1.each([
                    "top",
                    "left"
                ], function(e1, t1) {
                    r1.css(t1, function(t1, n1) {
                        var i1 = parseInt(n1, 10), s1 = e1 ? r1.to.left : r1.to.top;
                        return n1 === "auto" ? s1 + "px" : i1 + s1 + "px";
                    });
                })), e1.effects.removeWrapper(r1), n1();
            }
        });
    };
}(jQuery), function(e1, t1) {
    e1.effects.effect.shake = function(t1, n1) {
        var r1 = e1(this), i1 = [
            "position",
            "top",
            "bottom",
            "left",
            "right",
            "height",
            "width"
        ], s1 = e1.effects.setMode(r1, t1.mode || "effect"), o1 = t1.direction || "left", u1 = t1.distance || 20, a1 = t1.times || 3, f1 = a1 * 2 + 1, l1 = Math.round(t1.duration / f1), c1 = o1 === "up" || o1 === "down" ? "top" : "left", h1 = o1 === "up" || o1 === "left", p1 = {}, d1 = {}, v1 = {}, m1, g1 = r1.queue(), y1 = g1.length;
        e1.effects.save(r1, i1), r1.show(), e1.effects.createWrapper(r1), p1[c1] = (h1 ? "-=" : "+=") + u1, d1[c1] = (h1 ? "+=" : "-=") + u1 * 2, v1[c1] = (h1 ? "-=" : "+=") + u1 * 2, r1.animate(p1, l1, t1.easing);
        for(m1 = 1; m1 < a1; m1++)r1.animate(d1, l1, t1.easing).animate(v1, l1, t1.easing);
        r1.animate(d1, l1, t1.easing).animate(p1, l1 / 2, t1.easing).queue(function() {
            s1 === "hide" && r1.hide(), e1.effects.restore(r1, i1), e1.effects.removeWrapper(r1), n1();
        }), y1 > 1 && g1.splice.apply(g1, [
            1,
            0
        ].concat(g1.splice(y1, f1 + 1))), r1.dequeue();
    };
}(jQuery), function(e1, t1) {
    e1.effects.effect.slide = function(t1, n1) {
        var r1 = e1(this), i1 = [
            "position",
            "top",
            "bottom",
            "left",
            "right",
            "width",
            "height"
        ], s1 = e1.effects.setMode(r1, t1.mode || "show"), o1 = s1 === "show", u1 = t1.direction || "left", a1 = u1 === "up" || u1 === "down" ? "top" : "left", f1 = u1 === "up" || u1 === "left", l1, c1 = {};
        e1.effects.save(r1, i1), r1.show(), l1 = t1.distance || r1[a1 === "top" ? "outerHeight" : "outerWidth"](!0), e1.effects.createWrapper(r1).css({
            overflow: "hidden"
        }), o1 && r1.css(a1, f1 ? isNaN(l1) ? "-" + l1 : -l1 : l1), c1[a1] = (o1 ? f1 ? "+=" : "-=" : f1 ? "-=" : "+=") + l1, r1.animate(c1, {
            queue: !1,
            duration: t1.duration,
            easing: t1.easing,
            complete: function() {
                s1 === "hide" && r1.hide(), e1.effects.restore(r1, i1), e1.effects.removeWrapper(r1), n1();
            }
        });
    };
}(jQuery), function(e1, t1) {
    e1.effects.effect.transfer = function(t1, n1) {
        var r1 = e1(this), i1 = e1(t1.to), s1 = i1.css("position") === "fixed", o1 = e1("body"), u1 = s1 ? o1.scrollTop() : 0, a1 = s1 ? o1.scrollLeft() : 0, f1 = i1.offset(), l1 = {
            top: f1.top - u1,
            left: f1.left - a1,
            height: i1.innerHeight(),
            width: i1.innerWidth()
        }, c1 = r1.offset(), h1 = e1('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(t1.className).css({
            top: c1.top - u1,
            left: c1.left - a1,
            height: r1.innerHeight(),
            width: r1.innerWidth(),
            position: s1 ? "fixed" : "absolute"
        }).animate(l1, t1.duration, t1.easing, function() {
            h1.remove(), n1();
        });
    };
}(jQuery), function(e1, t1) {
    var n1 = !1;
    e1.widget("ui.menu", {
        version: "1.9.0",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, e1.proxy(function(e1) {
                this.options.disabled && e1.preventDefault();
            }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                "mousedown .ui-menu-item > a": function(e1) {
                    e1.preventDefault();
                },
                "click .ui-state-disabled > a": function(e1) {
                    e1.preventDefault();
                },
                "click .ui-menu-item:has(a)": function(t1) {
                    var r1 = e1(t1.target).closest(".ui-menu-item");
                    !n1 && r1.not(".ui-state-disabled").length && (n1 = !0, this.select(t1), r1.has(".ui-menu").length ? this.expand(t1) : this.element.is(":focus") || (this.element.trigger("focus", [
                        !0
                    ]), this.active && this.active.parents(".ui-menu").length === 1 && clearTimeout(this.timer)));
                },
                "mouseenter .ui-menu-item": function(t1) {
                    var n1 = e1(t1.currentTarget);
                    n1.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(t1, n1);
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(e1, t1) {
                    var n1 = this.active || this.element.children(".ui-menu-item").eq(0);
                    t1 || this.focus(e1, n1);
                },
                blur: function(t1) {
                    this._delay(function() {
                        e1.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t1);
                    });
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(t1) {
                    e1(t1.target).closest(".ui-menu").length || this.collapseAll(t1), n1 = !1;
                }
            });
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var t1 = e1(this);
                t1.data("ui-menu-submenu-carat") && t1.remove();
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content");
        },
        _keydown: function(t1) {
            function a1(e1) {
                return e1.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            }
            var n1, r1, i1, s1, o1, u1 = !0;
            switch(t1.keyCode){
                case e1.ui.keyCode.PAGE_UP:
                    this.previousPage(t1);
                    break;
                case e1.ui.keyCode.PAGE_DOWN:
                    this.nextPage(t1);
                    break;
                case e1.ui.keyCode.HOME:
                    this._move("first", "first", t1);
                    break;
                case e1.ui.keyCode.END:
                    this._move("last", "last", t1);
                    break;
                case e1.ui.keyCode.UP:
                    this.previous(t1);
                    break;
                case e1.ui.keyCode.DOWN:
                    this.next(t1);
                    break;
                case e1.ui.keyCode.LEFT:
                    this.collapse(t1);
                    break;
                case e1.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(t1);
                    break;
                case e1.ui.keyCode.ENTER:
                case e1.ui.keyCode.SPACE:
                    this._activate(t1);
                    break;
                case e1.ui.keyCode.ESCAPE:
                    this.collapse(t1);
                    break;
                default:
                    u1 = !1, r1 = this.previousFilter || "", i1 = String.fromCharCode(t1.keyCode), s1 = !1, clearTimeout(this.filterTimer), i1 === r1 ? s1 = !0 : i1 = r1 + i1, o1 = new RegExp("^" + a1(i1), "i"), n1 = this.activeMenu.children(".ui-menu-item").filter(function() {
                        return o1.test(e1(this).children("a").text());
                    }), n1 = s1 && n1.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : n1, n1.length || (i1 = String.fromCharCode(t1.keyCode), o1 = new RegExp("^" + a1(i1), "i"), n1 = this.activeMenu.children(".ui-menu-item").filter(function() {
                        return o1.test(e1(this).children("a").text());
                    })), n1.length ? (this.focus(t1, n1), n1.length > 1 ? (this.previousFilter = i1, this.filterTimer = this._delay(function() {
                        delete this.previousFilter;
                    }, 1e3)) : delete this.previousFilter) : delete this.previousFilter;
            }
            u1 && t1.preventDefault();
        },
        _activate: function(e1) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(e1) : this.select(e1));
        },
        refresh: function() {
            var t1, n1 = this.options.icons.submenu, r1 = this.element.find(this.options.menus + ":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            });
            t1 = r1.add(this.element), t1.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }), t1.children(":not(.ui-menu-item)").each(function() {
                var t1 = e1(this);
                /[^\-—–\s]/.test(t1.text()) || t1.addClass("ui-widget-content ui-menu-divider");
            }), t1.children(".ui-state-disabled").attr("aria-disabled", "true"), r1.each(function() {
                var t1 = e1(this), r1 = t1.prev("a"), i1 = e1("<span>").addClass("ui-menu-icon ui-icon " + n1).data("ui-menu-submenu-carat", !0);
                r1.attr("aria-haspopup", "true").prepend(i1), t1.attr("aria-labelledby", r1.attr("id"));
            }), this.active && !e1.contains(this.element[0], this.active[0]) && this.blur();
        },
        _itemRole: function() {
            return ({
                menu: "menuitem",
                listbox: "option"
            })[this.options.role];
        },
        focus: function(e1, t1) {
            var n1, r1;
            this.blur(e1, e1 && e1.type === "focus"), this._scrollIntoView(t1), this.active = t1.first(), r1 = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", r1.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), e1 && e1.type === "keydown" ? this._close() : this.timer = this._delay(function() {
                this._close();
            }, this.delay), n1 = t1.children(".ui-menu"), n1.length && /^mouse/.test(e1.type) && this._startOpening(n1), this.activeMenu = t1.parent(), this._trigger("focus", e1, {
                item: t1
            });
        },
        _scrollIntoView: function(t1) {
            var n1, r1, i1, s1, o1, u1;
            this._hasScroll() && (n1 = parseFloat(e1.css(this.activeMenu[0], "borderTopWidth")) || 0, r1 = parseFloat(e1.css(this.activeMenu[0], "paddingTop")) || 0, i1 = t1.offset().top - this.activeMenu.offset().top - n1 - r1, s1 = this.activeMenu.scrollTop(), o1 = this.activeMenu.height(), u1 = t1.height(), i1 < 0 ? this.activeMenu.scrollTop(s1 + i1) : i1 + u1 > o1 && this.activeMenu.scrollTop(s1 + i1 - o1 + u1));
        },
        blur: function(e1, t1) {
            t1 || clearTimeout(this.timer);
            if (!this.active) return;
            this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e1, {
                item: this.active
            });
        },
        _startOpening: function(e1) {
            clearTimeout(this.timer);
            if (e1.attr("aria-hidden") !== "true") return;
            this.timer = this._delay(function() {
                this._close(), this._open(e1);
            }, this.delay);
        },
        _open: function(t1) {
            var n1 = e1.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(t1.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t1.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(n1);
        },
        collapseAll: function(t1, n1) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var r1 = n1 ? this.element : e1(t1 && t1.target).closest(this.element.find(".ui-menu"));
                r1.length || (r1 = this.element), this._close(r1), this.blur(t1), this.activeMenu = r1;
            }, this.delay);
        },
        _close: function(e1) {
            e1 || (e1 = this.active ? this.active.parent() : this.element), e1.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active");
        },
        collapse: function(e1) {
            var t1 = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            t1 && t1.length && (this._close(), this.focus(e1, t1));
        },
        expand: function(e1) {
            var t1 = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            t1 && t1.length && (this._open(t1.parent()), this._delay(function() {
                this.focus(e1, t1);
            }));
        },
        next: function(e1) {
            this._move("next", "first", e1);
        },
        previous: function(e1) {
            this._move("prev", "last", e1);
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length;
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length;
        },
        _move: function(e1, t1, n1) {
            var r1;
            this.active && (e1 === "first" || e1 === "last" ? r1 = this.active[e1 === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : r1 = this.active[e1 + "All"](".ui-menu-item").eq(0));
            if (!r1 || !r1.length || !this.active) r1 = this.activeMenu.children(".ui-menu-item")[t1]();
            this.focus(n1, r1);
        },
        nextPage: function(t1) {
            var n1, r1, i1;
            if (!this.active) {
                this.next(t1);
                return;
            }
            if (this.isLastItem()) return;
            this._hasScroll() ? (r1 = this.active.offset().top, i1 = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return n1 = e1(this), n1.offset().top - r1 - i1 < 0;
            }), this.focus(t1, n1)) : this.focus(t1, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]());
        },
        previousPage: function(t1) {
            var n1, r1, i1;
            if (!this.active) {
                this.next(t1);
                return;
            }
            if (this.isFirstItem()) return;
            this._hasScroll() ? (r1 = this.active.offset().top, i1 = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return n1 = e1(this), n1.offset().top - r1 + i1 > 0;
            }), this.focus(t1, n1)) : this.focus(t1, this.activeMenu.children(".ui-menu-item").first());
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight");
        },
        select: function(t1) {
            this.active = this.active || e1(t1.target).closest(".ui-menu-item");
            var n1 = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(t1, !0), this._trigger("select", t1, n1);
        }
    });
}(jQuery), function(e1, t1) {
    function h1(e1, t1, n1) {
        return [
            parseInt(e1[0], 10) * (l1.test(e1[0]) ? t1 / 100 : 1),
            parseInt(e1[1], 10) * (l1.test(e1[1]) ? n1 / 100 : 1)
        ];
    }
    function p1(t1, n1) {
        return parseInt(e1.css(t1, n1), 10) || 0;
    }
    e1.ui = e1.ui || {};
    var n1, r1 = Math.max, i1 = Math.abs, s1 = Math.round, o1 = /left|center|right/, u1 = /top|center|bottom/, a1 = /[\+\-]\d+%?/, f1 = /^\w+/, l1 = /%$/, c1 = e1.fn.position;
    e1.position = {
        scrollbarWidth: function() {
            if (n1 !== t1) return n1;
            var r1, i1, s1 = e1("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o1 = s1.children()[0];
            return e1("body").append(s1), r1 = o1.offsetWidth, s1.css("overflow", "scroll"), i1 = o1.offsetWidth, r1 === i1 && (i1 = s1[0].clientWidth), s1.remove(), n1 = r1 - i1;
        },
        getScrollInfo: function(t1) {
            var n1 = t1.isWindow ? "" : t1.element.css("overflow-x"), r1 = t1.isWindow ? "" : t1.element.css("overflow-y"), i1 = n1 === "scroll" || n1 === "auto" && t1.width < t1.element[0].scrollWidth, s1 = r1 === "scroll" || r1 === "auto" && t1.height < t1.element[0].scrollHeight;
            return {
                width: i1 ? e1.position.scrollbarWidth() : 0,
                height: s1 ? e1.position.scrollbarWidth() : 0
            };
        },
        getWithinInfo: function(t1) {
            var n1 = e1(t1 || window), r1 = e1.isWindow(n1[0]);
            return {
                element: n1,
                isWindow: r1,
                offset: n1.offset() || {
                    left: 0,
                    top: 0
                },
                scrollLeft: n1.scrollLeft(),
                scrollTop: n1.scrollTop(),
                width: r1 ? n1.width() : n1.outerWidth(),
                height: r1 ? n1.height() : n1.outerHeight()
            };
        }
    }, e1.fn.position = function(t1) {
        if (!t1 || !t1.of) return c1.apply(this, arguments);
        t1 = e1.extend({}, t1);
        var n1, l1, d1, v1, m1, g1 = e1(t1.of), y1 = e1.position.getWithinInfo(t1.within), b1 = e1.position.getScrollInfo(y1), w1 = g1[0], E1 = (t1.collision || "flip").split(" "), S1 = {};
        return w1.nodeType === 9 ? (l1 = g1.width(), d1 = g1.height(), v1 = {
            top: 0,
            left: 0
        }) : e1.isWindow(w1) ? (l1 = g1.width(), d1 = g1.height(), v1 = {
            top: g1.scrollTop(),
            left: g1.scrollLeft()
        }) : w1.preventDefault ? (t1.at = "left top", l1 = d1 = 0, v1 = {
            top: w1.pageY,
            left: w1.pageX
        }) : (l1 = g1.outerWidth(), d1 = g1.outerHeight(), v1 = g1.offset()), m1 = e1.extend({}, v1), e1.each([
            "my",
            "at"
        ], function() {
            var e1 = (t1[this] || "").split(" "), n1, r1;
            e1.length === 1 && (e1 = o1.test(e1[0]) ? e1.concat([
                "center"
            ]) : u1.test(e1[0]) ? [
                "center"
            ].concat(e1) : [
                "center",
                "center"
            ]), e1[0] = o1.test(e1[0]) ? e1[0] : "center", e1[1] = u1.test(e1[1]) ? e1[1] : "center", n1 = a1.exec(e1[0]), r1 = a1.exec(e1[1]), S1[this] = [
                n1 ? n1[0] : 0,
                r1 ? r1[0] : 0
            ], t1[this] = [
                f1.exec(e1[0])[0],
                f1.exec(e1[1])[0]
            ];
        }), E1.length === 1 && (E1[1] = E1[0]), t1.at[0] === "right" ? m1.left += l1 : t1.at[0] === "center" && (m1.left += l1 / 2), t1.at[1] === "bottom" ? m1.top += d1 : t1.at[1] === "center" && (m1.top += d1 / 2), n1 = h1(S1.at, l1, d1), m1.left += n1[0], m1.top += n1[1], this.each(function() {
            var o1, u1, a1 = e1(this), f1 = a1.outerWidth(), c1 = a1.outerHeight(), w1 = p1(this, "marginLeft"), x1 = p1(this, "marginTop"), T1 = f1 + w1 + p1(this, "marginRight") + b1.width, N1 = c1 + x1 + p1(this, "marginBottom") + b1.height, C1 = e1.extend({}, m1), k1 = h1(S1.my, a1.outerWidth(), a1.outerHeight());
            t1.my[0] === "right" ? C1.left -= f1 : t1.my[0] === "center" && (C1.left -= f1 / 2), t1.my[1] === "bottom" ? C1.top -= c1 : t1.my[1] === "center" && (C1.top -= c1 / 2), C1.left += k1[0], C1.top += k1[1], e1.support.offsetFractions || (C1.left = s1(C1.left), C1.top = s1(C1.top)), o1 = {
                marginLeft: w1,
                marginTop: x1
            }, e1.each([
                "left",
                "top"
            ], function(r1, i1) {
                e1.ui.position[E1[r1]] && e1.ui.position[E1[r1]][i1](C1, {
                    targetWidth: l1,
                    targetHeight: d1,
                    elemWidth: f1,
                    elemHeight: c1,
                    collisionPosition: o1,
                    collisionWidth: T1,
                    collisionHeight: N1,
                    offset: [
                        n1[0] + k1[0],
                        n1[1] + k1[1]
                    ],
                    my: t1.my,
                    at: t1.at,
                    within: y1,
                    elem: a1
                });
            }), e1.fn.bgiframe && a1.bgiframe(), t1.using && (u1 = function(e1) {
                var n1 = v1.left - C1.left, s1 = n1 + l1 - f1, o1 = v1.top - C1.top, u1 = o1 + d1 - c1, h1 = {
                    target: {
                        element: g1,
                        left: v1.left,
                        top: v1.top,
                        width: l1,
                        height: d1
                    },
                    element: {
                        element: a1,
                        left: C1.left,
                        top: C1.top,
                        width: f1,
                        height: c1
                    },
                    horizontal: s1 < 0 ? "left" : n1 > 0 ? "right" : "center",
                    vertical: u1 < 0 ? "top" : o1 > 0 ? "bottom" : "middle"
                };
                l1 < f1 && i1(n1 + s1) < l1 && (h1.horizontal = "center"), d1 < c1 && i1(o1 + u1) < d1 && (h1.vertical = "middle"), r1(i1(n1), i1(s1)) > r1(i1(o1), i1(u1)) ? h1.important = "horizontal" : h1.important = "vertical", t1.using.call(this, e1, h1);
            }), a1.offset(e1.extend(C1, {
                using: u1
            }));
        });
    }, e1.ui.position = {
        fit: {
            left: function(e1, t1) {
                var n1 = t1.within, i1 = n1.isWindow ? n1.scrollLeft : n1.offset.left, s1 = n1.width, o1 = e1.left - t1.collisionPosition.marginLeft, u1 = i1 - o1, a1 = o1 + t1.collisionWidth - s1 - i1, f1;
                t1.collisionWidth > s1 ? u1 > 0 && a1 <= 0 ? (f1 = e1.left + u1 + t1.collisionWidth - s1 - i1, e1.left += u1 - f1) : a1 > 0 && u1 <= 0 ? e1.left = i1 : u1 > a1 ? e1.left = i1 + s1 - t1.collisionWidth : e1.left = i1 : u1 > 0 ? e1.left += u1 : a1 > 0 ? e1.left -= a1 : e1.left = r1(e1.left - o1, e1.left);
            },
            top: function(e1, t1) {
                var n1 = t1.within, i1 = n1.isWindow ? n1.scrollTop : n1.offset.top, s1 = t1.within.height, o1 = e1.top - t1.collisionPosition.marginTop, u1 = i1 - o1, a1 = o1 + t1.collisionHeight - s1 - i1, f1;
                t1.collisionHeight > s1 ? u1 > 0 && a1 <= 0 ? (f1 = e1.top + u1 + t1.collisionHeight - s1 - i1, e1.top += u1 - f1) : a1 > 0 && u1 <= 0 ? e1.top = i1 : u1 > a1 ? e1.top = i1 + s1 - t1.collisionHeight : e1.top = i1 : u1 > 0 ? e1.top += u1 : a1 > 0 ? e1.top -= a1 : e1.top = r1(e1.top - o1, e1.top);
            }
        },
        flip: {
            left: function(e1, t1) {
                var n1 = t1.within, r1 = n1.offset.left + n1.scrollLeft, s1 = n1.width, o1 = n1.isWindow ? n1.scrollLeft : n1.offset.left, u1 = e1.left - t1.collisionPosition.marginLeft, a1 = u1 - o1, f1 = u1 + t1.collisionWidth - s1 - o1, l1 = t1.my[0] === "left" ? -t1.elemWidth : t1.my[0] === "right" ? t1.elemWidth : 0, c1 = t1.at[0] === "left" ? t1.targetWidth : t1.at[0] === "right" ? -t1.targetWidth : 0, h1 = -2 * t1.offset[0], p1, d1;
                if (a1 < 0) {
                    p1 = e1.left + l1 + c1 + h1 + t1.collisionWidth - s1 - r1;
                    if (p1 < 0 || p1 < i1(a1)) e1.left += l1 + c1 + h1;
                } else if (f1 > 0) {
                    d1 = e1.left - t1.collisionPosition.marginLeft + l1 + c1 + h1 - o1;
                    if (d1 > 0 || i1(d1) < f1) e1.left += l1 + c1 + h1;
                }
            },
            top: function(e1, t1) {
                var n1 = t1.within, r1 = n1.offset.top + n1.scrollTop, s1 = n1.height, o1 = n1.isWindow ? n1.scrollTop : n1.offset.top, u1 = e1.top - t1.collisionPosition.marginTop, a1 = u1 - o1, f1 = u1 + t1.collisionHeight - s1 - o1, l1 = t1.my[1] === "top", c1 = l1 ? -t1.elemHeight : t1.my[1] === "bottom" ? t1.elemHeight : 0, h1 = t1.at[1] === "top" ? t1.targetHeight : t1.at[1] === "bottom" ? -t1.targetHeight : 0, p1 = -2 * t1.offset[1], d1, v1;
                a1 < 0 ? (v1 = e1.top + c1 + h1 + p1 + t1.collisionHeight - s1 - r1, e1.top + c1 + h1 + p1 > a1 && (v1 < 0 || v1 < i1(a1)) && (e1.top += c1 + h1 + p1)) : f1 > 0 && (d1 = e1.top - t1.collisionPosition.marginTop + c1 + h1 + p1 - o1, e1.top + c1 + h1 + p1 > f1 && (d1 > 0 || i1(d1) < f1) && (e1.top += c1 + h1 + p1));
            }
        },
        flipfit: {
            left: function() {
                e1.ui.position.flip.left.apply(this, arguments), e1.ui.position.fit.left.apply(this, arguments);
            },
            top: function() {
                e1.ui.position.flip.top.apply(this, arguments), e1.ui.position.fit.top.apply(this, arguments);
            }
        }
    }, function() {
        var t1, n1, r1, i1, s1, o1 = document.getElementsByTagName("body")[0], u1 = document.createElement("div");
        t1 = document.createElement(o1 ? "div" : "body"), r1 = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, o1 && e1.extend(r1, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for(s1 in r1)t1.style[s1] = r1[s1];
        t1.appendChild(u1), n1 = o1 || document.documentElement, n1.insertBefore(t1, n1.firstChild), u1.style.cssText = "position: absolute; left: 10.7432222px;", i1 = e1(u1).offset().left, e1.support.offsetFractions = i1 > 10 && i1 < 11, t1.innerHTML = "", n1.removeChild(t1);
    }(), e1.uiBackCompat !== !1 && function(e1) {
        var n1 = e1.fn.position;
        e1.fn.position = function(r1) {
            if (!r1 || !r1.offset) return n1.call(this, r1);
            var i1 = r1.offset.split(" "), s1 = r1.at.split(" ");
            return i1.length === 1 && (i1[1] = i1[0]), /^\d/.test(i1[0]) && (i1[0] = "+" + i1[0]), /^\d/.test(i1[1]) && (i1[1] = "+" + i1[1]), s1.length === 1 && (/left|center|right/.test(s1[0]) ? s1[1] = "center" : (s1[1] = s1[0], s1[0] = "center")), n1.call(this, e1.extend(r1, {
                at: s1[0] + i1[0] + " " + s1[1] + i1[1],
                offset: t1
            }));
        };
    }(jQuery);
}(jQuery), function(e1, t1) {
    e1.widget("ui.progressbar", {
        version: "1.9.0",
        options: {
            value: 0,
            max: 100
        },
        min: 0,
        _create: function() {
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._value()
            }), this.valueDiv = e1("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this.oldValue = this._value(), this._refreshValue();
        },
        _destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove();
        },
        value: function(e1) {
            return e1 === t1 ? this._value() : (this._setOption("value", e1), this);
        },
        _setOption: function(e1, t1) {
            e1 === "value" && (this.options.value = t1, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), this._super(e1, t1);
        },
        _value: function() {
            var e1 = this.options.value;
            return typeof e1 != "number" && (e1 = 0), Math.min(this.options.max, Math.max(this.min, e1));
        },
        _percentage: function() {
            return 100 * this._value() / this.options.max;
        },
        _refreshValue: function() {
            var e1 = this.value(), t1 = this._percentage();
            this.oldValue !== e1 && (this.oldValue = e1, this._trigger("change")), this.valueDiv.toggle(e1 > this.min).toggleClass("ui-corner-right", e1 === this.options.max).width(t1.toFixed(0) + "%"), this.element.attr("aria-valuenow", e1);
        }
    });
}(jQuery), function(e1, t1) {
    var n1 = 5;
    e1.widget("ui.slider", e1.ui.mouse, {
        version: "1.9.0",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null
        },
        _create: function() {
            var t1, r1 = this.options, i1 = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), s1 = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", o1 = r1.values && r1.values.length || 1, u1 = [];
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all" + (r1.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = e1([]), r1.range && (r1.range === !0 && (r1.values || (r1.values = [
                this._valueMin(),
                this._valueMin()
            ]), r1.values.length && r1.values.length !== 2 && (r1.values = [
                r1.values[0],
                r1.values[0]
            ])), this.range = e1("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + (r1.range === "min" || r1.range === "max" ? " ui-slider-range-" + r1.range : "")));
            for(t1 = i1.length; t1 < o1; t1++)u1.push(s1);
            this.handles = i1.add(e1(u1.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function(e1) {
                e1.preventDefault();
            }).mouseenter(function() {
                r1.disabled || e1(this).addClass("ui-state-hover");
            }).mouseleave(function() {
                e1(this).removeClass("ui-state-hover");
            }).focus(function() {
                r1.disabled ? e1(this).blur() : (e1(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), e1(this).addClass("ui-state-focus"));
            }).blur(function() {
                e1(this).removeClass("ui-state-focus");
            }), this.handles.each(function(t1) {
                e1(this).data("ui-slider-handle-index", t1);
            }), this._on(this.handles, {
                keydown: function(t1) {
                    var r1, i1, s1, o1, u1 = e1(t1.target).data("ui-slider-handle-index");
                    switch(t1.keyCode){
                        case e1.ui.keyCode.HOME:
                        case e1.ui.keyCode.END:
                        case e1.ui.keyCode.PAGE_UP:
                        case e1.ui.keyCode.PAGE_DOWN:
                        case e1.ui.keyCode.UP:
                        case e1.ui.keyCode.RIGHT:
                        case e1.ui.keyCode.DOWN:
                        case e1.ui.keyCode.LEFT:
                            t1.preventDefault();
                            if (!this._keySliding) {
                                this._keySliding = !0, e1(t1.target).addClass("ui-state-active"), r1 = this._start(t1, u1);
                                if (r1 === !1) return;
                            }
                    }
                    o1 = this.options.step, this.options.values && this.options.values.length ? i1 = s1 = this.values(u1) : i1 = s1 = this.value();
                    switch(t1.keyCode){
                        case e1.ui.keyCode.HOME:
                            s1 = this._valueMin();
                            break;
                        case e1.ui.keyCode.END:
                            s1 = this._valueMax();
                            break;
                        case e1.ui.keyCode.PAGE_UP:
                            s1 = this._trimAlignValue(i1 + (this._valueMax() - this._valueMin()) / n1);
                            break;
                        case e1.ui.keyCode.PAGE_DOWN:
                            s1 = this._trimAlignValue(i1 - (this._valueMax() - this._valueMin()) / n1);
                            break;
                        case e1.ui.keyCode.UP:
                        case e1.ui.keyCode.RIGHT:
                            if (i1 === this._valueMax()) return;
                            s1 = this._trimAlignValue(i1 + o1);
                            break;
                        case e1.ui.keyCode.DOWN:
                        case e1.ui.keyCode.LEFT:
                            if (i1 === this._valueMin()) return;
                            s1 = this._trimAlignValue(i1 - o1);
                    }
                    this._slide(t1, u1, s1);
                },
                keyup: function(t1) {
                    var n1 = e1(t1.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(t1, n1), this._change(t1, n1), e1(t1.target).removeClass("ui-state-active"));
                }
            }), this._refreshValue(), this._animateOff = !1;
        },
        _destroy: function() {
            this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy();
        },
        _mouseCapture: function(t1) {
            var n1, r1, i1, s1, o1, u1, a1, f1, l1 = this, c1 = this.options;
            return c1.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), n1 = {
                x: t1.pageX,
                y: t1.pageY
            }, r1 = this._normValueFromMouse(n1), i1 = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t1) {
                var n1 = Math.abs(r1 - l1.values(t1));
                i1 > n1 && (i1 = n1, s1 = e1(this), o1 = t1);
            }), c1.range === !0 && this.values(1) === c1.min && (o1 += 1, s1 = e1(this.handles[o1])), u1 = this._start(t1, o1), u1 === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o1, s1.addClass("ui-state-active").focus(), a1 = s1.offset(), f1 = !e1(t1.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = f1 ? {
                left: 0,
                top: 0
            } : {
                left: t1.pageX - a1.left - s1.width() / 2,
                top: t1.pageY - a1.top - s1.height() / 2 - (parseInt(s1.css("borderTopWidth"), 10) || 0) - (parseInt(s1.css("borderBottomWidth"), 10) || 0) + (parseInt(s1.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(t1, o1, r1), this._animateOff = !0, !0));
        },
        _mouseStart: function(e1) {
            return !0;
        },
        _mouseDrag: function(e1) {
            var t1 = {
                x: e1.pageX,
                y: e1.pageY
            }, n1 = this._normValueFromMouse(t1);
            return this._slide(e1, this._handleIndex, n1), !1;
        },
        _mouseStop: function(e1) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e1, this._handleIndex), this._change(e1, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1;
        },
        _detectOrientation: function() {
            this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal";
        },
        _normValueFromMouse: function(e1) {
            var t1, n1, r1, i1, s1;
            return this.orientation === "horizontal" ? (t1 = this.elementSize.width, n1 = e1.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t1 = this.elementSize.height, n1 = e1.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), r1 = n1 / t1, r1 > 1 && (r1 = 1), r1 < 0 && (r1 = 0), this.orientation === "vertical" && (r1 = 1 - r1), i1 = this._valueMax() - this._valueMin(), s1 = this._valueMin() + r1 * i1, this._trimAlignValue(s1);
        },
        _start: function(e1, t1) {
            var n1 = {
                handle: this.handles[t1],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (n1.value = this.values(t1), n1.values = this.values()), this._trigger("start", e1, n1);
        },
        _slide: function(e1, t1, n1) {
            var r1, i1, s1;
            this.options.values && this.options.values.length ? (r1 = this.values(t1 ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (t1 === 0 && n1 > r1 || t1 === 1 && n1 < r1) && (n1 = r1), n1 !== this.values(t1) && (i1 = this.values(), i1[t1] = n1, s1 = this._trigger("slide", e1, {
                handle: this.handles[t1],
                value: n1,
                values: i1
            }), r1 = this.values(t1 ? 0 : 1), s1 !== !1 && this.values(t1, n1, !0))) : n1 !== this.value() && (s1 = this._trigger("slide", e1, {
                handle: this.handles[t1],
                value: n1
            }), s1 !== !1 && this.value(n1));
        },
        _stop: function(e1, t1) {
            var n1 = {
                handle: this.handles[t1],
                value: this.value()
            };
            this.options.values && this.options.values.length && (n1.value = this.values(t1), n1.values = this.values()), this._trigger("stop", e1, n1);
        },
        _change: function(e1, t1) {
            if (!this._keySliding && !this._mouseSliding) {
                var n1 = {
                    handle: this.handles[t1],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (n1.value = this.values(t1), n1.values = this.values()), this._trigger("change", e1, n1);
            }
        },
        value: function(e1) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(e1), this._refreshValue(), this._change(null, 0);
                return;
            }
            return this._value();
        },
        values: function(t1, n1) {
            var r1, i1, s1;
            if (arguments.length > 1) {
                this.options.values[t1] = this._trimAlignValue(n1), this._refreshValue(), this._change(null, t1);
                return;
            }
            if (!arguments.length) return this._values();
            if (!e1.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t1) : this.value();
            r1 = this.options.values, i1 = arguments[0];
            for(s1 = 0; s1 < r1.length; s1 += 1)r1[s1] = this._trimAlignValue(i1[s1]), this._change(null, s1);
            this._refreshValue();
        },
        _setOption: function(t1, n1) {
            var r1, i1 = 0;
            e1.isArray(this.options.values) && (i1 = this.options.values.length), e1.Widget.prototype._setOption.apply(this, arguments);
            switch(t1){
                case "disabled":
                    n1 ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.prop("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.prop("disabled", !1), this.element.removeClass("ui-disabled"));
                    break;
                case "orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    this._animateOff = !0, this._refreshValue();
                    for(r1 = 0; r1 < i1; r1 += 1)this._change(null, r1);
                    this._animateOff = !1;
            }
        },
        _value: function() {
            var e1 = this.options.value;
            return e1 = this._trimAlignValue(e1), e1;
        },
        _values: function(e1) {
            var t1, n1, r1;
            if (arguments.length) return t1 = this.options.values[e1], t1 = this._trimAlignValue(t1), t1;
            n1 = this.options.values.slice();
            for(r1 = 0; r1 < n1.length; r1 += 1)n1[r1] = this._trimAlignValue(n1[r1]);
            return n1;
        },
        _trimAlignValue: function(e1) {
            if (e1 <= this._valueMin()) return this._valueMin();
            if (e1 >= this._valueMax()) return this._valueMax();
            var t1 = this.options.step > 0 ? this.options.step : 1, n1 = (e1 - this._valueMin()) % t1, r1 = e1 - n1;
            return Math.abs(n1) * 2 >= t1 && (r1 += n1 > 0 ? t1 : -t1), parseFloat(r1.toFixed(5));
        },
        _valueMin: function() {
            return this.options.min;
        },
        _valueMax: function() {
            return this.options.max;
        },
        _refreshValue: function() {
            var t1, n1, r1, i1, s1, o1 = this.options.range, u1 = this.options, a1 = this, f1 = this._animateOff ? !1 : u1.animate, l1 = {};
            this.options.values && this.options.values.length ? this.handles.each(function(r1, i1) {
                n1 = (a1.values(r1) - a1._valueMin()) / (a1._valueMax() - a1._valueMin()) * 100, l1[a1.orientation === "horizontal" ? "left" : "bottom"] = n1 + "%", e1(this).stop(1, 1)[f1 ? "animate" : "css"](l1, u1.animate), a1.options.range === !0 && (a1.orientation === "horizontal" ? (r1 === 0 && a1.range.stop(1, 1)[f1 ? "animate" : "css"]({
                    left: n1 + "%"
                }, u1.animate), r1 === 1 && a1.range[f1 ? "animate" : "css"]({
                    width: n1 - t1 + "%"
                }, {
                    queue: !1,
                    duration: u1.animate
                })) : (r1 === 0 && a1.range.stop(1, 1)[f1 ? "animate" : "css"]({
                    bottom: n1 + "%"
                }, u1.animate), r1 === 1 && a1.range[f1 ? "animate" : "css"]({
                    height: n1 - t1 + "%"
                }, {
                    queue: !1,
                    duration: u1.animate
                }))), t1 = n1;
            }) : (r1 = this.value(), i1 = this._valueMin(), s1 = this._valueMax(), n1 = s1 !== i1 ? (r1 - i1) / (s1 - i1) * 100 : 0, l1[this.orientation === "horizontal" ? "left" : "bottom"] = n1 + "%", this.handle.stop(1, 1)[f1 ? "animate" : "css"](l1, u1.animate), o1 === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[f1 ? "animate" : "css"]({
                width: n1 + "%"
            }, u1.animate), o1 === "max" && this.orientation === "horizontal" && this.range[f1 ? "animate" : "css"]({
                width: 100 - n1 + "%"
            }, {
                queue: !1,
                duration: u1.animate
            }), o1 === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[f1 ? "animate" : "css"]({
                height: n1 + "%"
            }, u1.animate), o1 === "max" && this.orientation === "vertical" && this.range[f1 ? "animate" : "css"]({
                height: 100 - n1 + "%"
            }, {
                queue: !1,
                duration: u1.animate
            }));
        }
    });
}(jQuery), function(e1) {
    function t1(e1) {
        return function() {
            var t1 = this.element.val();
            e1.apply(this, arguments), this._refresh(), t1 !== this.element.val() && this._trigger("change");
        };
    }
    e1.widget("ui.spinner", {
        version: "1.9.0",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete");
                }
            });
        },
        _getCreateOptions: function() {
            var t1 = {}, n1 = this.element;
            return e1.each([
                "min",
                "max",
                "step"
            ], function(e1, r1) {
                var i1 = n1.attr(r1);
                i1 !== undefined && i1.length && (t1[r1] = i1);
            }), t1;
        },
        _events: {
            keydown: function(e1) {
                this._start(e1) && this._keydown(e1) && e1.preventDefault();
            },
            keyup: "_stop",
            focus: function() {
                this.uiSpinner.addClass("ui-state-active"), this.previous = this.element.val();
            },
            blur: function(e1) {
                if (this.cancelBlur) {
                    delete this.cancelBlur;
                    return;
                }
                this._refresh(), this.uiSpinner.removeClass("ui-state-active"), this.previous !== this.element.val() && this._trigger("change", e1);
            },
            mousewheel: function(e1, t1) {
                if (!t1) return;
                if (!this.spinning && !this._start(e1)) return !1;
                this._spin((t1 > 0 ? 1 : -1) * this.options.step, e1), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                    this.spinning && this._stop(e1);
                }, 100), e1.preventDefault();
            },
            "mousedown .ui-spinner-button": function(t1) {
                function r1() {
                    var e1 = this.element[0] === this.document[0].activeElement;
                    e1 || (this.element.focus(), this.previous = n1, this._delay(function() {
                        this.previous = n1;
                    }));
                }
                var n1;
                n1 = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t1.preventDefault(), r1.call(this), this.cancelBlur = !0, this._delay(function() {
                    delete this.cancelBlur, r1.call(this);
                });
                if (this._start(t1) === !1) return;
                this._repeat(null, e1(t1.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t1);
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(t1) {
                if (!e1(t1.currentTarget).hasClass("ui-state-active")) return;
                if (this._start(t1) === !1) return !1;
                this._repeat(null, e1(t1.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t1);
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function() {
            var e1 = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this._hoverable(e1), this.element.attr("role", "spinbutton"), this.buttons = e1.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(e1.height() * .5) && e1.height() > 0 && e1.height(e1.height()), this.options.disabled && this.disable();
        },
        _keydown: function(t1) {
            var n1 = this.options, r1 = e1.ui.keyCode;
            switch(t1.keyCode){
                case r1.UP:
                    return this._repeat(null, 1, t1), !0;
                case r1.DOWN:
                    return this._repeat(null, -1, t1), !0;
                case r1.PAGE_UP:
                    return this._repeat(null, n1.page, t1), !0;
                case r1.PAGE_DOWN:
                    return this._repeat(null, -n1.page, t1), !0;
            }
            return !1;
        },
        _uiSpinnerHtml: function() {
            return "<span class='ui-spinner ui-state-default ui-widget ui-widget-content ui-corner-all'></span>";
        },
        _buttonHtml: function() {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>";
        },
        _start: function(e1) {
            return !this.spinning && this._trigger("start", e1) === !1 ? !1 : (this.counter || (this.counter = 1), this.spinning = !0, !0);
        },
        _repeat: function(e1, t1, n1) {
            e1 = e1 || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                this._repeat(40, t1, n1);
            }, e1), this._spin(t1 * this.options.step, n1);
        },
        _spin: function(e1, t1) {
            var n1 = this.value() || 0;
            this.counter || (this.counter = 1), n1 = this._adjustValue(n1 + e1 * this._increment(this.counter));
            if (!this.spinning || this._trigger("spin", t1, {
                value: n1
            }) !== !1) this._value(n1), this.counter++;
        },
        _increment: function(t1) {
            var n1 = this.options.incremental;
            return n1 ? e1.isFunction(n1) ? n1(t1) : Math.floor(t1 * t1 * t1 / 5e4 - t1 * t1 / 500 + 17 * t1 / 200 + 1) : 1;
        },
        _precision: function() {
            var e1 = this._precisionOf(this.options.step);
            return this.options.min !== null && (e1 = Math.max(e1, this._precisionOf(this.options.min))), e1;
        },
        _precisionOf: function(e1) {
            var t1 = e1.toString(), n1 = t1.indexOf(".");
            return n1 === -1 ? 0 : t1.length - n1 - 1;
        },
        _adjustValue: function(e1) {
            var t1, n1, r1 = this.options;
            return t1 = r1.min !== null ? r1.min : 0, n1 = e1 - t1, n1 = Math.round(n1 / r1.step) * r1.step, e1 = t1 + n1, e1 = parseFloat(e1.toFixed(this._precision())), r1.max !== null && e1 > r1.max ? r1.max : r1.min !== null && e1 < r1.min ? r1.min : e1;
        },
        _stop: function(e1) {
            if (!this.spinning) return;
            clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", e1);
        },
        _setOption: function(e1, t1) {
            if (e1 === "culture" || e1 === "numberFormat") {
                var n1 = this._parse(this.element.val());
                this.options[e1] = t1, this.element.val(this._format(n1));
                return;
            }
            (e1 === "max" || e1 === "min" || e1 === "step") && typeof t1 == "string" && (t1 = this._parse(t1)), this._super(e1, t1), e1 === "disabled" && (t1 ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")));
        },
        _setOptions: t1(function(e1) {
            this._super(e1), this._value(this.element.val());
        }),
        _parse: function(e1) {
            return typeof e1 == "string" && e1 !== "" && (e1 = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e1, 10, this.options.culture) : +e1), e1 === "" || isNaN(e1) ? null : e1;
        },
        _format: function(e1) {
            return e1 === "" ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(e1, this.options.numberFormat, this.options.culture) : e1;
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            });
        },
        _value: function(e1, t1) {
            var n1;
            e1 !== "" && (n1 = this._parse(e1), n1 !== null && (t1 || (n1 = this._adjustValue(n1)), e1 = this._format(n1))), this.element.val(e1), this._refresh();
        },
        _destroy: function() {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element);
        },
        stepUp: t1(function(e1) {
            this._stepUp(e1);
        }),
        _stepUp: function(e1) {
            this._spin((e1 || 1) * this.options.step);
        },
        stepDown: t1(function(e1) {
            this._stepDown(e1);
        }),
        _stepDown: function(e1) {
            this._spin((e1 || 1) * -this.options.step);
        },
        pageUp: t1(function(e1) {
            this._stepUp((e1 || 1) * this.options.page);
        }),
        pageDown: t1(function(e1) {
            this._stepDown((e1 || 1) * this.options.page);
        }),
        value: function(e1) {
            if (!arguments.length) return this._parse(this.element.val());
            t1(this._value).call(this, e1);
        },
        widget: function() {
            return this.uiSpinner;
        }
    });
}(jQuery), function(e1, t1) {
    function i1() {
        return ++n1;
    }
    function s1(e1) {
        return e1 = e1.cloneNode(!1), e1.hash.length > 1 && e1.href.replace(r1, "") === location.href.replace(r1, "");
    }
    var n1 = 0, r1 = /#.*$/;
    e1.widget("ui.tabs", {
        version: "1.9.0",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _create: function() {
            var t1, n1 = this, r1 = this.options, i1 = r1.active;
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", r1.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(t1) {
                e1(this).is(".ui-state-disabled") && t1.preventDefault();
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                e1(this).closest("li").is(".ui-state-disabled") && this.blur();
            }), this._processTabs();
            if (i1 === null) {
                location.hash && this.anchors.each(function(e1, t1) {
                    if (t1.hash === location.hash) return i1 = e1, !1;
                }), i1 === null && (i1 = this.tabs.filter(".ui-tabs-active").index());
                if (i1 === null || i1 === -1) i1 = this.tabs.length ? 0 : !1;
            }
            i1 !== !1 && (i1 = this.tabs.index(this.tabs.eq(i1)), i1 === -1 && (i1 = r1.collapsible ? !1 : 0)), r1.active = i1, !r1.collapsible && r1.active === !1 && this.anchors.length && (r1.active = 0), e1.isArray(r1.disabled) && (r1.disabled = e1.unique(r1.disabled.concat(e1.map(this.tabs.filter(".ui-state-disabled"), function(e1) {
                return n1.tabs.index(e1);
            }))).sort()), this.options.active !== !1 && this.anchors.length ? this.active = this._findActive(this.options.active) : this.active = e1(), this._refresh(), this.active.length && this.load(r1.active);
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : e1()
            };
        },
        _tabKeydown: function(t1) {
            var n1 = e1(this.document[0].activeElement).closest("li"), r1 = this.tabs.index(n1), i1 = !0;
            if (this._handlePageNav(t1)) return;
            switch(t1.keyCode){
                case e1.ui.keyCode.RIGHT:
                case e1.ui.keyCode.DOWN:
                    r1++;
                    break;
                case e1.ui.keyCode.UP:
                case e1.ui.keyCode.LEFT:
                    i1 = !1, r1--;
                    break;
                case e1.ui.keyCode.END:
                    r1 = this.anchors.length - 1;
                    break;
                case e1.ui.keyCode.HOME:
                    r1 = 0;
                    break;
                case e1.ui.keyCode.SPACE:
                    t1.preventDefault(), clearTimeout(this.activating), this._activate(r1);
                    return;
                case e1.ui.keyCode.ENTER:
                    t1.preventDefault(), clearTimeout(this.activating), this._activate(r1 === this.options.active ? !1 : r1);
                    return;
                default:
                    return;
            }
            t1.preventDefault(), clearTimeout(this.activating), r1 = this._focusNextTab(r1, i1), t1.ctrlKey || (n1.attr("aria-selected", "false"), this.tabs.eq(r1).attr("aria-selected", "true"), this.activating = this._delay(function() {
                this.option("active", r1);
            }, this.delay));
        },
        _panelKeydown: function(t1) {
            if (this._handlePageNav(t1)) return;
            t1.ctrlKey && t1.keyCode === e1.ui.keyCode.UP && (t1.preventDefault(), this.active.focus());
        },
        _handlePageNav: function(t1) {
            if (t1.altKey && t1.keyCode === e1.ui.keyCode.PAGE_UP) return this._activate(this._focusNextTab(this.options.active - 1, !1)), !0;
            if (t1.altKey && t1.keyCode === e1.ui.keyCode.PAGE_DOWN) return this._activate(this._focusNextTab(this.options.active + 1, !0)), !0;
        },
        _findNextTab: function(t1, n1) {
            function i1() {
                return t1 > r1 && (t1 = 0), t1 < 0 && (t1 = r1), t1;
            }
            var r1 = this.tabs.length - 1;
            while(e1.inArray(i1(), this.options.disabled) !== -1)t1 = n1 ? t1 + 1 : t1 - 1;
            return t1;
        },
        _focusNextTab: function(e1, t1) {
            return e1 = this._findNextTab(e1, t1), this.tabs.eq(e1).focus(), e1;
        },
        _setOption: function(e1, t1) {
            if (e1 === "active") {
                this._activate(t1);
                return;
            }
            if (e1 === "disabled") {
                this._setupDisabled(t1);
                return;
            }
            this._super(e1, t1), e1 === "collapsible" && (this.element.toggleClass("ui-tabs-collapsible", t1), !t1 && this.options.active === !1 && this._activate(0)), e1 === "event" && this._setupEvents(t1), e1 === "heightStyle" && this._setupHeightStyle(t1);
        },
        _tabId: function(e1) {
            return e1.attr("aria-controls") || "ui-tabs-" + i1();
        },
        _sanitizeSelector: function(e1) {
            return e1 ? e1.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
        },
        refresh: function() {
            var t1, n1 = this.options, r1 = this.tablist.children(":has(a[href])");
            n1.disabled = e1.map(r1.filter(".ui-state-disabled"), function(e1) {
                return r1.index(e1);
            }), this._processTabs(), n1.active === !1 || !this.anchors.length ? (n1.active = !1, this.active = e1()) : this.active.length && !e1.contains(this.tablist[0], this.active[0]) ? this.tabs.length === n1.disabled.length ? (n1.active = !1, this.active = e1()) : this._activate(this._findNextTab(Math.max(0, n1.active - 1), !1)) : n1.active = this.tabs.index(this.active), this._refresh();
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0);
        },
        _processTabs: function() {
            var t1 = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }), this.anchors = this.tabs.map(function() {
                return e1("a", this)[0];
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }), this.panels = e1(), this.anchors.each(function(n1, r1) {
                var i1, o1, u1, a1 = e1(r1).uniqueId().attr("id"), f1 = e1(r1).closest("li"), l1 = f1.attr("aria-controls");
                s1(r1) ? (i1 = r1.hash, o1 = t1.element.find(t1._sanitizeSelector(i1))) : (u1 = t1._tabId(f1), i1 = "#" + u1, o1 = t1.element.find(i1), o1.length || (o1 = t1._createPanel(u1), o1.insertAfter(t1.panels[n1 - 1] || t1.tablist)), o1.attr("aria-live", "polite")), o1.length && (t1.panels = t1.panels.add(o1)), l1 && f1.data("ui-tabs-aria-controls", l1), f1.attr({
                    "aria-controls": i1.substring(1),
                    "aria-labelledby": a1
                }), o1.attr("aria-labelledby", a1);
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel");
        },
        _getList: function() {
            return this.element.find("ol,ul").eq(0);
        },
        _createPanel: function(t1) {
            return e1("<div>").attr("id", t1).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0);
        },
        _setupDisabled: function(t1) {
            e1.isArray(t1) && (t1.length ? t1.length === this.anchors.length && (t1 = !0) : t1 = !1);
            for(var n1 = 0, r1; r1 = this.tabs[n1]; n1++)t1 === !0 || e1.inArray(n1, t1) !== -1 ? e1(r1).addClass("ui-state-disabled").attr("aria-disabled", "true") : e1(r1).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = t1;
        },
        _setupEvents: function(t1) {
            var n1 = {
                click: function(e1) {
                    e1.preventDefault();
                }
            };
            t1 && e1.each(t1.split(" "), function(e1, t1) {
                n1[t1] = "_eventHandler";
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, n1), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs);
        },
        _setupHeightStyle: function(t1) {
            var n1, r1, i1 = this.element.parent();
            t1 === "fill" ? (e1.support.minHeight || (r1 = i1.css("overflow"), i1.css("overflow", "hidden")), n1 = i1.height(), this.element.siblings(":visible").each(function() {
                var t1 = e1(this), r1 = t1.css("position");
                if (r1 === "absolute" || r1 === "fixed") return;
                n1 -= t1.outerHeight(!0);
            }), r1 && i1.css("overflow", r1), this.element.children().not(this.panels).each(function() {
                n1 -= e1(this).outerHeight(!0);
            }), this.panels.each(function() {
                e1(this).height(Math.max(0, n1 - e1(this).innerHeight() + e1(this).height()));
            }).css("overflow", "auto")) : t1 === "auto" && (n1 = 0, this.panels.each(function() {
                n1 = Math.max(n1, e1(this).height("").height());
            }).height(n1));
        },
        _eventHandler: function(t1) {
            var n1 = this.options, r1 = this.active, i1 = e1(t1.currentTarget), s1 = i1.closest("li"), o1 = s1[0] === r1[0], u1 = o1 && n1.collapsible, a1 = u1 ? e1() : this._getPanelForTab(s1), f1 = r1.length ? this._getPanelForTab(r1) : e1(), l1 = {
                oldTab: r1,
                oldPanel: f1,
                newTab: u1 ? e1() : s1,
                newPanel: a1
            };
            t1.preventDefault();
            if (s1.hasClass("ui-state-disabled") || s1.hasClass("ui-tabs-loading") || this.running || o1 && !n1.collapsible || this._trigger("beforeActivate", t1, l1) === !1) return;
            n1.active = u1 ? !1 : this.tabs.index(s1), this.active = o1 ? e1() : s1, this.xhr && this.xhr.abort(), !f1.length && !a1.length && e1.error("jQuery UI Tabs: Mismatching fragment identifier."), a1.length && this.load(this.tabs.index(s1), t1), this._toggle(t1, l1);
        },
        _toggle: function(t1, n1) {
            function o1() {
                r1.running = !1, r1._trigger("activate", t1, n1);
            }
            function u1() {
                n1.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), i1.length && r1.options.show ? r1._show(i1, r1.options.show, o1) : (i1.show(), o1());
            }
            var r1 = this, i1 = n1.newPanel, s1 = n1.oldPanel;
            this.running = !0, s1.length && this.options.hide ? this._hide(s1, this.options.hide, function() {
                n1.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), u1();
            }) : (n1.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), s1.hide(), u1()), s1.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), n1.oldTab.attr("aria-selected", "false"), i1.length && s1.length ? n1.oldTab.attr("tabIndex", -1) : i1.length && this.tabs.filter(function() {
                return e1(this).attr("tabIndex") === 0;
            }).attr("tabIndex", -1), i1.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }), n1.newTab.attr({
                "aria-selected": "true",
                tabIndex: 0
            });
        },
        _activate: function(t1) {
            var n1, r1 = this._findActive(t1);
            if (r1[0] === this.active[0]) return;
            r1.length || (r1 = this.active), n1 = r1.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: n1,
                currentTarget: n1,
                preventDefault: e1.noop
            });
        },
        _findActive: function(t1) {
            return t1 === !1 ? e1() : this.tabs.eq(t1);
        },
        _getIndex: function(e1) {
            return typeof e1 == "string" && (e1 = this.anchors.index(this.anchors.filter("[href$='" + e1 + "']"))), e1;
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeData("href.tabs").removeData("load.tabs").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                e1.data(this, "ui-tabs-destroy") ? e1(this).remove() : e1(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role");
            }), this.tabs.each(function() {
                var t1 = e1(this), n1 = t1.data("ui-tabs-aria-controls");
                n1 ? t1.attr("aria-controls", n1) : t1.removeAttr("aria-controls");
            }), this.options.heightStyle !== "content" && this.panels.css("height", "");
        },
        enable: function(n1) {
            var r1 = this.options.disabled;
            if (r1 === !1) return;
            n1 === t1 ? r1 = !1 : (n1 = this._getIndex(n1), e1.isArray(r1) ? r1 = e1.map(r1, function(e1) {
                return e1 !== n1 ? e1 : null;
            }) : r1 = e1.map(this.tabs, function(e1, t1) {
                return t1 !== n1 ? t1 : null;
            })), this._setupDisabled(r1);
        },
        disable: function(n1) {
            var r1 = this.options.disabled;
            if (r1 === !0) return;
            if (n1 === t1) r1 = !0;
            else {
                n1 = this._getIndex(n1);
                if (e1.inArray(n1, r1) !== -1) return;
                e1.isArray(r1) ? r1 = e1.merge([
                    n1
                ], r1).sort() : r1 = [
                    n1
                ];
            }
            this._setupDisabled(r1);
        },
        load: function(t1, n1) {
            t1 = this._getIndex(t1);
            var r1 = this, i1 = this.tabs.eq(t1), o1 = i1.find(".ui-tabs-anchor"), u1 = this._getPanelForTab(i1), a1 = {
                tab: i1,
                panel: u1
            };
            if (s1(o1[0])) return;
            this.xhr = e1.ajax(this._ajaxSettings(o1, n1, a1)), this.xhr && this.xhr.statusText !== "canceled" && (i1.addClass("ui-tabs-loading"), u1.attr("aria-busy", "true"), this.xhr.success(function(e1) {
                setTimeout(function() {
                    u1.html(e1), r1._trigger("load", n1, a1);
                }, 1);
            }).complete(function(e1, t1) {
                setTimeout(function() {
                    t1 === "abort" && r1.panels.stop(!1, !0), i1.removeClass("ui-tabs-loading"), u1.removeAttr("aria-busy"), e1 === r1.xhr && delete r1.xhr;
                }, 1);
            }));
        },
        _ajaxSettings: function(t1, n1, r1) {
            var i1 = this;
            return {
                url: t1.attr("href"),
                beforeSend: function(t1, s1) {
                    return i1._trigger("beforeLoad", n1, e1.extend({
                        jqXHR: t1,
                        ajaxSettings: s1
                    }, r1));
                }
            };
        },
        _getPanelForTab: function(t1) {
            var n1 = e1(t1).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + n1));
        }
    }), e1.uiBackCompat !== !1 && (e1.ui.tabs.prototype._ui = function(e1, t1) {
        return {
            tab: e1,
            panel: t1,
            index: this.anchors.index(e1)
        };
    }, e1.widget("ui.tabs", e1.ui.tabs, {
        url: function(e1, t1) {
            this.anchors.eq(e1).attr("href", t1);
        }
    }), e1.widget("ui.tabs", e1.ui.tabs, {
        options: {
            ajaxOptions: null,
            cache: !1
        },
        _create: function() {
            this._super();
            var t1 = this;
            this._on({
                tabsbeforeload: function(n1, r1) {
                    if (e1.data(r1.tab[0], "cache.tabs")) {
                        n1.preventDefault();
                        return;
                    }
                    r1.jqXHR.success(function() {
                        t1.options.cache && e1.data(r1.tab[0], "cache.tabs", !0);
                    });
                }
            });
        },
        _ajaxSettings: function(t1, n1, r1) {
            var i1 = this.options.ajaxOptions;
            return e1.extend({}, i1, {
                error: function(e1, t1, n1) {
                    try {
                        i1.error(e1, t1, r1.tab.closest("li").index(), r1.tab[0]);
                    } catch (n1) {}
                }
            }, this._superApply(arguments));
        },
        _setOption: function(e1, t1) {
            e1 === "cache" && t1 === !1 && this.anchors.removeData("cache.tabs"), this._super(e1, t1);
        },
        _destroy: function() {
            this.anchors.removeData("cache.tabs"), this._super();
        },
        url: function(e1, t1) {
            this.anchors.eq(e1).removeData("cache.tabs"), this._superApply(arguments);
        }
    }), e1.widget("ui.tabs", e1.ui.tabs, {
        abort: function() {
            this.xhr && this.xhr.abort();
        }
    }), e1.widget("ui.tabs", e1.ui.tabs, {
        options: {
            spinner: "<em>Loading&#8230;</em>"
        },
        _create: function() {
            this._super(), this._on({
                tabsbeforeload: function(e1, t1) {
                    if (e1.target !== this.element[0] || !this.options.spinner) return;
                    var n1 = t1.tab.find("span"), r1 = n1.html();
                    n1.html(this.options.spinner), t1.jqXHR.complete(function() {
                        n1.html(r1);
                    });
                }
            });
        }
    }), e1.widget("ui.tabs", e1.ui.tabs, {
        options: {
            enable: null,
            disable: null
        },
        enable: function(t1) {
            var n1 = this.options, r1;
            if (t1 && n1.disabled === !0 || e1.isArray(n1.disabled) && e1.inArray(t1, n1.disabled) !== -1) r1 = !0;
            this._superApply(arguments), r1 && this._trigger("enable", null, this._ui(this.anchors[t1], this.panels[t1]));
        },
        disable: function(t1) {
            var n1 = this.options, r1;
            if (t1 && n1.disabled === !1 || e1.isArray(n1.disabled) && e1.inArray(t1, n1.disabled) === -1) r1 = !0;
            this._superApply(arguments), r1 && this._trigger("disable", null, this._ui(this.anchors[t1], this.panels[t1]));
        }
    }), e1.widget("ui.tabs", e1.ui.tabs, {
        options: {
            add: null,
            remove: null,
            tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
        },
        add: function(n1, r1, i1) {
            i1 === t1 && (i1 = this.anchors.length);
            var s1, o1, u1 = this.options, a1 = e1(u1.tabTemplate.replace(/#\{href\}/g, n1).replace(/#\{label\}/g, r1)), f1 = n1.indexOf("#") ? this._tabId(a1) : n1.replace("#", "");
            return a1.addClass("ui-state-default ui-corner-top").data("ui-tabs-destroy", !0), a1.attr("aria-controls", f1), s1 = i1 >= this.tabs.length, o1 = this.element.find("#" + f1), o1.length || (o1 = this._createPanel(f1), s1 ? i1 > 0 ? o1.insertAfter(this.panels.eq(-1)) : o1.appendTo(this.element) : o1.insertBefore(this.panels[i1])), o1.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").hide(), s1 ? a1.appendTo(this.tablist) : a1.insertBefore(this.tabs[i1]), u1.disabled = e1.map(u1.disabled, function(e1) {
                return e1 >= i1 ? ++e1 : e1;
            }), this.refresh(), this.tabs.length === 1 && u1.active === !1 && this.option("active", 0), this._trigger("add", null, this._ui(this.anchors[i1], this.panels[i1])), this;
        },
        remove: function(t1) {
            t1 = this._getIndex(t1);
            var n1 = this.options, r1 = this.tabs.eq(t1).remove(), i1 = this._getPanelForTab(r1).remove();
            return r1.hasClass("ui-tabs-active") && this.anchors.length > 2 && this._activate(t1 + (t1 + 1 < this.anchors.length ? 1 : -1)), n1.disabled = e1.map(e1.grep(n1.disabled, function(e1) {
                return e1 !== t1;
            }), function(e1) {
                return e1 >= t1 ? --e1 : e1;
            }), this.refresh(), this._trigger("remove", null, this._ui(r1.find("a")[0], i1[0])), this;
        }
    }), e1.widget("ui.tabs", e1.ui.tabs, {
        length: function() {
            return this.anchors.length;
        }
    }), e1.widget("ui.tabs", e1.ui.tabs, {
        options: {
            idPrefix: "ui-tabs-"
        },
        _tabId: function(t1) {
            var n1 = t1.is("li") ? t1.find("a[href]") : t1;
            return n1 = n1[0], e1(n1).closest("li").attr("aria-controls") || n1.title && n1.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF\-]/g, "") || this.options.idPrefix + i1();
        }
    }), e1.widget("ui.tabs", e1.ui.tabs, {
        options: {
            panelTemplate: "<div></div>"
        },
        _createPanel: function(t1) {
            return e1(this.options.panelTemplate).attr("id", t1).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0);
        }
    }), e1.widget("ui.tabs", e1.ui.tabs, {
        _create: function() {
            var e1 = this.options;
            e1.active === null && e1.selected !== t1 && (e1.active = e1.selected === -1 ? !1 : e1.selected), this._super(), e1.selected = e1.active, e1.selected === !1 && (e1.selected = -1);
        },
        _setOption: function(e1, t1) {
            if (e1 !== "selected") return this._super(e1, t1);
            var n1 = this.options;
            this._super("active", t1 === -1 ? !1 : t1), n1.selected = n1.active, n1.selected === !1 && (n1.selected = -1);
        },
        _eventHandler: function(e1) {
            this._superApply(arguments), this.options.selected = this.options.active, this.options.selected === !1 && (this.options.selected = -1);
        }
    }), e1.widget("ui.tabs", e1.ui.tabs, {
        options: {
            show: null,
            select: null
        },
        _create: function() {
            this._super(), this.options.active !== !1 && this._trigger("show", null, this._ui(this.active.find(".ui-tabs-anchor")[0], this._getPanelForTab(this.active)[0]));
        },
        _trigger: function(e1, t1, n1) {
            var r1 = this._superApply(arguments);
            return r1 ? (e1 === "beforeActivate" && n1.newTab.length ? r1 = this._super("select", t1, {
                tab: n1.newTab.find(".ui-tabs-anchor")[0],
                panel: n1.newPanel[0],
                index: n1.newTab.closest("li").index()
            }) : e1 === "activate" && n1.newTab.length && (r1 = this._super("show", t1, {
                tab: n1.newTab.find(".ui-tabs-anchor")[0],
                panel: n1.newPanel[0],
                index: n1.newTab.closest("li").index()
            })), r1) : !1;
        }
    }), e1.widget("ui.tabs", e1.ui.tabs, {
        select: function(e1) {
            e1 = this._getIndex(e1);
            if (e1 === -1) {
                if (!this.options.collapsible || this.options.selected === -1) return;
                e1 = this.options.selected;
            }
            this.anchors.eq(e1).trigger(this.options.event + this.eventNamespace);
        }
    }), function() {
        var t1 = 0;
        e1.widget("ui.tabs", e1.ui.tabs, {
            options: {
                cookie: null
            },
            _create: function() {
                var e1 = this.options, t1;
                e1.active == null && e1.cookie && (t1 = parseInt(this._cookie(), 10), t1 === -1 && (t1 = !1), e1.active = t1), this._super();
            },
            _cookie: function(n1) {
                var r1 = [
                    this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + ++t1)
                ];
                return arguments.length && (r1.push(n1 === !1 ? -1 : n1), r1.push(this.options.cookie)), e1.cookie.apply(null, r1);
            },
            _refresh: function() {
                this._super(), this.options.cookie && this._cookie(this.options.active, this.options.cookie);
            },
            _eventHandler: function(e1) {
                this._superApply(arguments), this.options.cookie && this._cookie(this.options.active, this.options.cookie);
            },
            _destroy: function() {
                this._super(), this.options.cookie && this._cookie(null, this.options.cookie);
            }
        });
    }(), e1.widget("ui.tabs", e1.ui.tabs, {
        _trigger: function(t1, n1, r1) {
            var i1 = e1.extend({}, r1);
            return t1 === "load" && (i1.panel = i1.panel[0], i1.tab = i1.tab.find(".ui-tabs-anchor")[0]), this._super(t1, n1, i1);
        }
    }), e1.widget("ui.tabs", e1.ui.tabs, {
        options: {
            fx: null
        },
        _getFx: function() {
            var t1, n1, r1 = this.options.fx;
            return r1 && (e1.isArray(r1) ? (t1 = r1[0], n1 = r1[1]) : t1 = n1 = r1), r1 ? {
                show: n1,
                hide: t1
            } : null;
        },
        _toggle: function(e1, t1) {
            function o1() {
                n1.running = !1, n1._trigger("activate", e1, t1);
            }
            function u1() {
                t1.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), r1.length && s1.show ? r1.animate(s1.show, s1.show.duration, function() {
                    o1();
                }) : (r1.show(), o1());
            }
            var n1 = this, r1 = t1.newPanel, i1 = t1.oldPanel, s1 = this._getFx();
            if (!s1) return this._super(e1, t1);
            n1.running = !0, i1.length && s1.hide ? i1.animate(s1.hide, s1.hide.duration, function() {
                t1.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), u1();
            }) : (t1.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), i1.hide(), u1());
        }
    }));
}(jQuery), function(e1) {
    function n1(t1, n1) {
        var r1 = (t1.attr("aria-describedby") || "").split(/\s+/);
        r1.push(n1), t1.data("ui-tooltip-id", n1).attr("aria-describedby", e1.trim(r1.join(" ")));
    }
    function r1(t1) {
        var n1 = t1.data("ui-tooltip-id"), r1 = (t1.attr("aria-describedby") || "").split(/\s+/), i1 = e1.inArray(n1, r1);
        i1 !== -1 && r1.splice(i1, 1), t1.removeData("ui-tooltip-id"), r1 = e1.trim(r1.join(" ")), r1 ? t1.attr("aria-describedby", r1) : t1.removeAttr("aria-describedby");
    }
    var t1 = 0;
    e1.widget("ui.tooltip", {
        version: "1.9.0",
        options: {
            content: function() {
                return e1(this).attr("title");
            },
            hide: !0,
            items: "[title]",
            position: {
                my: "left+15 center",
                at: "right center",
                collision: "flipfit flipfit"
            },
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {};
        },
        _setOption: function(t1, n1) {
            var r1 = this;
            if (t1 === "disabled") {
                this[n1 ? "_disable" : "_enable"](), this.options[t1] = n1;
                return;
            }
            this._super(t1, n1), t1 === "content" && e1.each(this.tooltips, function(e1, t1) {
                r1._updateContent(t1);
            });
        },
        _disable: function() {
            var t1 = this;
            e1.each(this.tooltips, function(n1, r1) {
                var i1 = e1.Event("blur");
                i1.target = i1.currentTarget = r1[0], t1.close(i1, !0);
            }), this.element.find(this.options.items).andSelf().each(function() {
                var t1 = e1(this);
                t1.is("[title]") && t1.data("ui-tooltip-title", t1.attr("title")).attr("title", "");
            });
        },
        _enable: function() {
            this.element.find(this.options.items).andSelf().each(function() {
                var t1 = e1(this);
                t1.data("ui-tooltip-title") && t1.attr("title", t1.data("ui-tooltip-title"));
            });
        },
        open: function(t1) {
            var n1 = e1(t1 ? t1.target : this.element).closest(this.options.items);
            if (!n1.length) return;
            if (this.options.track && n1.data("ui-tooltip-id")) {
                this._find(n1).position(e1.extend({
                    of: n1
                }, this.options.position)), this._off(this.document, "mousemove");
                return;
            }
            n1.attr("title") && n1.data("ui-tooltip-title", n1.attr("title")), n1.data("tooltip-open", !0), this._updateContent(n1, t1);
        },
        _updateContent: function(e1, t1) {
            var n1, r1 = this.options.content, i1 = this;
            if (typeof r1 == "string") return this._open(t1, e1, r1);
            n1 = r1.call(e1[0], function(n1) {
                if (!e1.data("tooltip-open")) return;
                i1._delay(function() {
                    this._open(t1, e1, n1);
                });
            }), n1 && this._open(t1, e1, n1);
        },
        _open: function(t1, r1, i1) {
            function u1(e1) {
                o1.of = e1, s1.position(o1);
            }
            var s1, o1;
            if (!i1) return;
            s1 = this._find(r1);
            if (s1.length) {
                s1.find(".ui-tooltip-content").html(i1);
                return;
            }
            r1.is("[title]") && (t1 && t1.type === "mouseover" ? r1.attr("title", "") : r1.removeAttr("title")), s1 = this._tooltip(r1), n1(r1, s1.attr("id")), s1.find(".ui-tooltip-content").html(i1), this.options.track && t1 && /^mouse/.test(t1.originalEvent.type) ? (o1 = e1.extend({}, this.options.position), this._on(this.document, {
                mousemove: u1
            }), u1(t1)) : s1.position(e1.extend({
                of: r1
            }, this.options.position)), s1.hide(), this._show(s1, this.options.show), this._trigger("open", t1, {
                tooltip: s1
            }), this._on(r1, {
                mouseleave: "close",
                focusout: "close",
                keyup: function(t1) {
                    if (t1.keyCode === e1.ui.keyCode.ESCAPE) {
                        var n1 = e1.Event(t1);
                        n1.currentTarget = r1[0], this.close(n1, !0);
                    }
                }
            });
        },
        close: function(t1, n1) {
            var i1 = this, s1 = e1(t1 ? t1.currentTarget : this.element), o1 = this._find(s1);
            if (this.closing) return;
            if (!n1 && t1 && t1.type !== "focusout" && this.document[0].activeElement === s1[0]) return;
            s1.data("ui-tooltip-title") && s1.attr("title", s1.data("ui-tooltip-title")), r1(s1), o1.stop(!0), this._hide(o1, this.options.hide, function() {
                e1(this).remove(), delete i1.tooltips[this.id];
            }), s1.removeData("tooltip-open"), this._off(s1, "mouseleave focusout keyup"), this._off(this.document, "mousemove"), this.closing = !0, this._trigger("close", t1, {
                tooltip: o1
            }), this.closing = !1;
        },
        _tooltip: function(n1) {
            var r1 = "ui-tooltip-" + t1++, i1 = e1("<div>").attr({
                id: r1,
                role: "tooltip"
            }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
            return e1("<div>").addClass("ui-tooltip-content").appendTo(i1), i1.appendTo(this.document[0].body), e1.fn.bgiframe && i1.bgiframe(), this.tooltips[r1] = n1, i1;
        },
        _find: function(t1) {
            var n1 = t1.data("ui-tooltip-id");
            return n1 ? e1("#" + n1) : e1();
        },
        _destroy: function() {
            var t1 = this;
            e1.each(this.tooltips, function(n1, r1) {
                var i1 = e1.Event("blur");
                i1.target = i1.currentTarget = r1[0], t1.close(i1, !0), e1("#" + n1).remove(), r1.data("ui-tooltip-title") && (r1.attr("title", r1.data("ui-tooltip-title")), r1.removeData("ui-tooltip-title"));
            });
        }
    });
}(jQuery);


/***/ })

};
;