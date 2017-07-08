!function(e, t) {

    t.init = function() {
        var e = navigator.userAgent.toLowerCase(),
            a = /micromessenger/.test(e),
            n = /iphone|ipod|ipad/.test(e),
            i = /android/.test(e),
            r = $("#guanzhu");
        a ? n ? r.data("href", "http://www.ruixinhudong.com") : i && r.data("href", "http://www.ruixinhudong.com") : n ? r.data("href", "http://www.ruixinhudong.com") : i && r.data("href", "http://www.ruixinhudong.com"),
            r.on("tap",
                function() {
                    location.href = $(this).data("href")
                });

        var l = {
            link: "",
            img: "http://wsqcom.b0.upaiyun.com/share/hjxld.jpg",
            title: "江阴黄嘉喜来登酒店",
            desc: "2015情人节，在江阴黄嘉喜来登酒店的浪漫宣言"
        };

        wechat("friend", l),
            wechat("timeline", l),
            this.audio.init(),
            t.ready(function() {
                t.start({
                    hasAudio: !0
                })
            }),
            $(".map").on("click", "a",
                function() {
                    if ($(this).hasClass("map--close-result")) return void $(".map--result").hide();
                    var e = $(this).data("type");
                    switch (e && t.map.clearInfoWindow(), e) {
                        case 1:
                            s(o);
                            break;
                        case 2:
                            s(u);
                            break;
                        case 3:
                            s(m)
                    }
                })
    },
        t.ready = function(e) {
            $(".index").removeClass("hide");
            $(".btn").click(function(){
                $(".index").addClass("hide");
                 $(".show-dom-ready").removeClass("hide");
                 $(".show-app-ready").removeClass("hide");
                 $(".sound_have").removeClass("hide");
                 $(".hide-dom-ready").addClass("hide");

                music();

                 numScroll();
            });

                CL.lazyload(e);


        },
        t.start = function(e) {
            e = e || {},
                //$(".show-app-ready").removeClass("hide"),
            e.hasAudio && (this.audio.player.play(), document.addEventListener("touchstart",
                function() {
                    $(".audio").data("status") || t.audio.player.play()
                },
                !1));
            this.swiper.init({
                swipeType: "cover",
                container: "#carousel",
                swiper: ".swiper-wrapper > .swiper-slide",
                loop: !0,
                onEnd: function() {
                    var e = $(".vertical-swiper > .swiper-slide"),
                        a = $(".vertical-swiper > .current"),
                        n = a.data("index");
                    n == e.length - 1 ? $(".guide-arrow").hide() : $(".guide-arrow").show(),
                    a.data("horizontal") && t.slider.init({
                        container: "#horizontal-" + a.data("horizontal"),
                        swiper: ".slider-wrapper > .slide"
                    })
                }
            }),
                $(".geolocation").on("tap",
                    function(e) {
                        n(e),
                            $(".map").on("transitionend webkitTransitionEnd",
                                function() {
                                    $(this).data("isClose") && $(this).css("display", "none")
                                })
                    }),
                $(".map--close").on("tap", i)
        },
        e.App = t
} (window, window.App || {}),
    function(e) {
        var t = {};
        t.init = function() {
            var e = this,
                t = new Audio,
                a = $(".audio");
            t.loop = !0,
                t.preload = "auto",
                t.src = a.data("src"),
                t.play(),
                this.player = t,
                a.dance({
                    steams: [],
                    steamHeight: 100,
                    steamWidth: 44
                }).on("tap",
                    function(a) {
                        a.preventDefault(),
                            a.stopPropagation(),
                            e.isPlay ? t.pause() : t.play()
                    }),
                $(t).on("play",
                    function() {
                        e.isPlay = !0,
                            e.play(),
                            a.addClass("play")
                    }),
                $(t).on("pause",
                    function() {
                        e.isPlay = !1,
                            e.stop(),
                            a.removeClass("play")
                    })
        },
            t.switcherText = function() {
                var e = "关闭",
                    t = $(".audio--switcher");
                this.textTimeout && clearTimeout(this.textTimeout),
                this.isPlay && (e = "打开"),
                    t.text(e).removeClass("hidden"),
                    this.textTimeout = setTimeout(function() {
                            t.addClass("hidden")
                        },
                        1200)
            },
            t.play = function() {
                $.fn.dance.start(),
                    this.switcherText(),
                    $(".audio").data("status", "on"),
                    $(".audio--steam-box").show(400)
            },
            t.stop = function() {
                $.fn.dance.stop(),
                    this.switcherText(status),
                    $(".audio").data("status", "off"),
                    $(".audio--steam-box").hide(400)
            },
            e.audio = t,
            window.App = e
    } (window.App || {}),
    function(e, t) {
        t.imageReady = function(e, t) {
            var a = this,
                n = t.index;
            if ("undefined" == typeof t.index && (n = 0, t.index = 0), n < e.length) {
                var i = new Image;
                i.onload = function() {
                    t.index += 1,
                        a.imageReady(e, t),
                    t.eachReady && t.eachReady(i.src, n)
                },
                    i.src = e[n]
            } else t.allReady && t.allReady()
        },
            t.lazyload = function(e) {
                var a = $(".lazyload"),
                    n = a.length,
                    i = 0;
                a.each(function() {
                    var a = $(this),
                        s = a.data("image") || a.data("bg");
                    t.imageReady([s], {
                        eachReady: function(t) {
                            a.removeClass("lazyload"),
                                a.data("bg") ? a.css({
                                    "background-image": "url(" + t + ")"
                                }).removeAttr("data-bg") : a.data("image") && a.attr("src", t).removeAttr("data-image"),
                                i += 1,
                                $("#loading-progress").text(parseInt(i / n * 100) + "%"),
                            i === n && setTimeout(function() {
                                    $("#spinner").hide(),
                                    e && e()

                                },
                                200)
                        }
                    })
                })
            },
            e.CL = t
    } (window, window.CL || {}),
    function(e) {
        e.fn.dance = function(t) {
            function a() {
                var t = o(0, 44),
                    a = o( - 90, 89),
                    n = r(.5, 1),
                    i = e.fx.cssPrefix + "transform";
                i = i + ":rotate(" + a + "deg) scale(" + n + ");";
                var l = e('<span class="audio--steam-item">' + s(1, d.steams) + "</span>"),
                    p = o(0, f - d.steamWidth);
                p > t && (p = o(0, t)),
                    l.css({
                        position: "absolute",
                        left: t,
                        top: d.steamHeight,
                        display: "block",
                        opacity: 1
                    }).attr("style", l.attr("style") + i).appendTo(m).animate({
                            top: o(d.steamHeight / 2, 0),
                            left: p,
                            opacity: 0
                        },
                        o(d.steamFlyTime / 2, 1.2 * d.steamFlyTime), c,
                        function() {
                            l.remove(),
                                l = null
                        })
            }
            function n() {
                var e = o( - 10, 10);
                e += parseInt(m.css("left")),
                    e >= 54 ? e = 54 : 34 >= e && (e = 34),
                    m.animate({
                            left: e
                        },
                        o(1e3, 3e3), c)
            }
            function s(e, t) {
                e = e || 1;
                var a = "",
                    n = t.length - 1,
                    s = 0;
                for (i = 0; e > i; i++) s = o(0, n - 1),
                    a += t.slice(s, s + 1);
                return a
            }
            function o(e, t) {
                var a = t - e,
                    n = e + Math.round(Math.random() * a);
                return parseInt(n)
            }
            function r(e, t) {
                var a = t - e,
                    n = e + Math.random() * a;
                return parseFloat(n)
            }
            var l = null,
                p = null,
                c = "cubic-bezier(.09,.64,.16,.94)",
                u = e(this),
                d = e.extend({},
                    e.fn.dance.defaults, t),
                f = d.steamWidth,
                m = e('<div class="audio--steam-box"></div>').css({
                    height: d.steamHeight,
                    width: d.steamWidth,
                    left: 70,
                    top: -70,
                    position: "absolute",
                    overflow: "hidden",
                    "z-index": 0
                }).appendTo(u);
            return e.fn.dance.stop = function() {
                clearInterval(l),
                    clearInterval(p)
            },
                e.fn.dance.start = function() {
                    l = setInterval(function() {
                            a()
                        },
                        o(d.steamInterval / 2, 2 * d.steamInterval)),
                        p = setInterval(function() {
                                n()
                            },
                            o(100, 1e3) + o(1e3, 3e3))
                },
                u
        },
            e.fn.dance.defaults = {
                steams: [],
                steamFlyTime: 5e3,
                steamInterval: 500,
                steamMaxSize: 30,
                steamHeight: 200,
                steamWidth: 300
            }
    } (Zepto),
    function(e, t) {
        function a() {
            m = 0,
                h = 0,
                g = 0,
                w = 0,
                v = 0,
                y = 0,
                M = 0,
                b = 0,
                k = 0,
                L = null,
                x = null,
                C = 0,
                T = null,
                D = !1,
                S = !1,
                W = null,
                I = !1,
                Y = !1,
                r = null,
                l = null,
                p = !1,
                c = !1,
                u = !1,
                d = !1
        }
        function n(e, t) {
            e.preventDefault(),
            "function" == typeof t && t(e),
                r = L.find(".current"),
            r[0] && (W = !0, Y = !0, "touchstart" === e.type ? (m = e.touches[0].pageX, h = e.touches[0].pageY) : (m = e.pageX, h = e.pageY))
        }
        function i(e, t) {
            e.preventDefault(),
            W && Y && ("touchmove" === e.type ? (g = e.touches[0].pageX, w = e.touches[0].pageY) : (g = e.pageX, w = e.pageY), M = g - m, b = w - h, "horizontal" === T && Math.abs(b) < Math.abs(M) && "function" == typeof t && t(e, {
                startX: m,
                startY: h,
                curX: g,
                curY: w,
                distanceX: M,
                distanceY: b
            }))
        }
        function s(e, t) {
            e.preventDefault(),
            W && (W = !1, I = !0, "horizontal" === T && Math.abs(b) < Math.abs(M) && Math.abs(M) > A && o(t))
        }
        function o(e, t) {
            var a, n, i = L.find(".slide").eq(C - 1);
            M > 0 || "toRight" === t ? a = "toRight": (0 > M || "toLeft" === t) && (a = "toLeft"),
                r.addClass(a).on("animationend webkitAnimationEnd",
                    function() {
                        I = !1,
                            r.removeClass(a + " current").insertAfter(i),
                            n.addClass("current"),
                            M = 0,
                            b = 0,
                        "function" == typeof e && e(event)
                    })
        }
        var r, l, p, c, u, d, f = {},
            m = 0,
            h = 0,
            g = 0,
            w = 0,
            v = 0,
            y = 0,
            M = 0,
            b = 0,
            A = 30,
            k = 0,
            L = null,
            x = null,
            C = 0,
            T = null,
            P = 0,
            z = 0,
            D = !1,
            S = !1,
            W = null,
            I = !1,
            Y = !1;
        f.init = function(t) {
            a(),
                t = t || {},
                P = $(e).height(),
                z = $(e).width(),
                T = "horizontal",
                D = t.loop,
                L = $(t.container || ".slider-container"),
                x = L.find(t.swiper || ".slide"),
                C = x.length,
                x.each(function(e) {
                    0 === e && $(this).addClass("current"),
                        $(this).on("mousedown touchstart",
                            function(e) {
                                f.isDisabled || (I ? setTimeout(function() {
                                        I = !1,
                                            n(e, t.onStart)
                                    },
                                    150) : n(e, t.onStart))
                            }).on("mousemove touchmove",
                            function(e) {
                                i(e, t.onMove)
                            }).on("mouseup touchend",
                            function(e) {
                                s(e, t.onEnd)
                            })
                })
        },
            t.slider = f,
            e.App = t
    } (window, window.App || {}),
    function(e, t) {
        function a() {
            w = 0,
                v = 0,
                y = 0,
                M = 0,
                b = 0,
                A = 0,
                k = 0,
                L = 0,
                C = null,
                T = null,
                P = 0,
                z = null,
                W = null,
                I = !1,
                Y = !1,
                r = null,
                l = null,
                p = null,
                d = !1,
                f = !1,
                m = !1,
                h = !1
        }
        function n(e, t) {
            e.preventDefault(),
            "function" == typeof t && t(e),
                r = C.find(".current"),
                l = C.find(".next-current"),
                p = C.find(".prev-current"),
                c = p.prev(),
            c[0] || (c = T.eq(P - 1)),
                c.addClass("toPrev"),
                u = l.next(),
            u[0] || (u = T.eq(0)),
                u.addClass("toNext"),
            r[0] && (W = !0, Y = !0, "touchstart" === e.type ? (w = e.touches[0].pageX, v = e.touches[0].pageY) : (w = e.pageX, v = e.pageY))
        }
        function i(e, t) {
            e.preventDefault(),
            W && Y && ("touchmove" === e.type ? (y = e.touches[0].pageX, M = e.touches[0].pageY) : (y = e.pageX, M = e.pageY), k = y - w, L = M - v, "horizontal" === z && Math.abs(L) < Math.abs(k) && "function" == typeof t && t(e, {
                startX: w,
                startY: v,
                curX: y,
                curY: M,
                distanceX: k,
                distanceY: L
            }))
        }
        function s(e, t) {
            e.preventDefault(),
            W && (W = !1, "horizontal" === z && Math.abs(L) < Math.abs(k) && Math.abs(k) > x && o(t))
        }
        function o(e, t) {
            I = !0,
                k > 0 || "toRight" === t ? (l.addClass("toNext").removeClass("next-current"), r.addClass("next-current").removeClass("current"), p.addClass("current").removeClass("prev-current"), c.css({
                    "-webkit-transform": "perspective(3000px) translate3d(-100%, 0, 0) rotateY(-20deg) scale(.94)",
                    opacity: "0",
                    "-webkit-transition": "none"
                }), setTimeout(function() {
                        l.removeClass("toNext"),
                            c.addClass("prev-current").removeClass("toPrev"),
                            c[0].style.cssText = "",
                            u.removeClass("toNext"),
                            I = !1,
                            k = 0,
                            L = 0,
                        "function" == typeof e && e(event)
                    },
                    300)) : (0 > k || "toLeft" === t) && (p.addClass("toPrev").removeClass("prev-current"), r.addClass("prev-current").removeClass("current"), l.addClass("current").removeClass("next-current"), u.css({
                    "-webkit-transform": "perspective(3000px) translate3d(100%, 0, 0) rotateY(20deg) scale(.94)",
                    opacity: "0",
                    "-webkit-transition": "none"
                }), setTimeout(function() {
                        p.removeClass("toPrev"),
                            u.addClass("next-current").removeClass("toNext"),
                            u[0].style.cssText = "",
                            c.removeClass("toPrev"),
                            I = !1,
                            k = 0,
                            L = 0,
                        "function" == typeof e && e(event)
                    },
                    500))
        }
        var r, l, p, c, u, d, f, m, h, g = {},
            w = 0,
            v = 0,
            y = 0,
            M = 0,
            b = 0,
            A = 0,
            k = 0,
            L = 0,
            x = 30,
            C = null,
            T = null,
            P = 0,
            z = null,
            D = 0,
            S = 0,
            W = null,
            I = !1,
            Y = !1;
        g.init = function(t) {
            a(),
                t = t || {},
                D = $(e).height(),
                S = $(e).width(),
                z = "horizontal",
                C = $(t.container || ".slider-container"),
                T = C.find(t.swiper || ".slide"),
                P = T.length,
            C.find(".current")[0] || T.each(function(e) {
                1 === e && ($(this).addClass("current").prev().addClass("prev-current"), $(this).next().addClass("next-current"))
            });
            C.on("mousedown touchstart",
                function(e) {
                    I || n(e, t.onStart)
                }).on("mousemove touchmove",
                function(e) {
                    i(e, t.onMove)
                }).on("mouseup touchend",
                function(e) {
                    s(e, t.onEnd)
                })
        },
            t.slider = g,
            e.App = t
    } (window, window.App || {}),
    function(e, t) {
        function a(e, t) {
            //e.preventDefault(),
            "function" == typeof t && t(e),
                p = L.find(g.opts.swiper + ".current"),
            p[0] && (W = !0, Y = !0, "touchstart" === e.type ? (w = e.touches[0].pageX, v = e.touches[0].pageY) : (w = e.pageX, v = e.pageY))
        }
        function n(e, t) {
            e.preventDefault(),
            W && (c && c[0] || Y) && ("touchmove" === e.type ? (y = e.touches[0].pageX, M = e.touches[0].pageY) : (y = e.pageX, M = e.pageY), b = y - w, A = M - v, "vertical" === T && Math.abs(A) > Math.abs(b) ? i() : "horizontal" === T && Math.abs(A) < Math.abs(b) && horizontalMove(), "function" == typeof t && t(e, {
                startX: w,
                startY: v,
                curX: y,
                curY: M,
                distanceX: b,
                distanceY: A
            }))
        }
        function i() {
            var e = "translate3d(0, 0, 0) scale(1)";
            if (A > 0) {
                if (u) return;
                f || Y ? (f = !1, Y = !1, c && c[0] && c.removeClass("active"), c = p.prev()[0] ? p.prev() : S ? x.last() : null, c && c[0] ? (c.addClass("active").css({
                    "-webkit-transition": "none",
                    "-webkit-transform": "translate3d(0, -100%, 0)"
                }), p.css({
                    "-webkit-transform-origin": "bottom center"
                })) : p.css({
                    "-webkit-transform": "translate3d(0, 0, 0) scale(1)"
                })) : ("scale" === m ? e = "translateZ(0) scale(" + (P / (P + A)).toFixed(3) + ")": "slide" === m && (e = "translate3d(0, " + A + "px, 0)"), p.css({
                    "-webkit-transform": e
                }), c.css({
                    "-webkit-transform": "translate3d(0, " + ( - P + A) + "px, 0)"
                }))
                numScroll();
                numScrollRemove();
            } else if (0 > A) {
                if (d) return; ! f || Y ? (f = !0, Y = !1, c && c[0] && c.removeClass("active"), p.next()[0] ? c = p.next() : (c = x.eq(0), D && (S = !0)), c && c[0] ? (c.addClass("active").css({
                    "-webkit-transform": "translate3d(0, " + P + "px, 0)",
                    "-webkit-transition": "none"
                }), p.css({
                    "-webkit-transform-origin": "top center"
                })) : (c = null, p.css({
                    "-webkit-transform": "translate3d(0, 0, 0) scale(1)"
                }))) : ("scale" === m ? e = "translateZ(0) scale(" + ((P + A) / P).toFixed(3) + ")": "slide" === m && (e = "translate3d(0, " + A + "px, 0)"), p.css({
                    "-webkit-transform": e
                }), c.css({
                    "-webkit-transform": "translate3d(0, " + (P + A) + "px, 0) scale(1)"
                }))
                clearTime();
                numScrollRemove();
                numScroll();
                numAll();
            }
        }
        function s(e, t) {
            //e.preventDefault(),
            W && (W = !1, c && c[0] && (p.css({
                "-webkit-transition": "-webkit-transform .4s ease-out"
            }), c.css({
                "-webkit-transition": "-webkit-transform .4s ease-out"
            }), "vertical" === T && Math.abs(A) > Math.abs(b) ? o(t) : "horizontal" === T && Math.abs(A) < Math.abs(b) && horizontalEnd(t)))
        }
        function o(e) {
            var t;
            I = !0,
                Math.abs(A) > k ? ("scale" === m && (t = "translateZ(0) scale(0.3)"), f ? ("slide" === m && (t = "translate3d(0, " + -P + "px, 0)"), t && p.css({
                    "-webkit-transform": t
                }), c.css({
                    "-webkit-transform": "translate3d(0, 0, 0)"
                })) : ("slide" === m && (t = "translate3d(0, " + P + "px, 0)"), t && p.css({
                    "-webkit-transform": t
                }), c.css({
                    "-webkit-transform": "translate3d(0, 0, 0)"
                })), setTimeout(function() {
                        c.removeClass("active").addClass("current"),
                            c = null,
                            p.removeClass("current"),
                            I = !1,
                        "function" == typeof e && e(event)
                    },
                    500)) : ("scale" === m ? t = "translateZ(0) scale(1)": "slide" === m && (t = "translate3d(0, 0, 0)"), f ? (t && p.css({
                    "-webkit-transform": t
                }), c.css({
                    "-webkit-transform": "translate3d(0, 100%, 0)"
                })) : (t && p.css({
                    "-webkit-transform": t
                }), c.css({
                    "-webkit-transform": "translate3d(0, -100%, 0)"
                })), setTimeout(function() {
                        c.removeClass("active"),
                            $acitve = null,
                            I = !1,
                        "function" == typeof e && e(event)
                    },
                    500))

        }
        function r(e) {
            I || (p = L.find(g.opts.swiper + ".current"), W = !1, Y = !1, f = !0, I = !0, c || (c = p.next()[0] ? p.next() : x.eq(0)), c[0] === x[0] && D && (S = !0), c.css({
                "-webkit-transform": "translate3d(0, " + P + "px, 0)"
            }).addClass("active"), setTimeout(function() {
                    c.css({
                        "-webkit-transform": "translate3d(0, 0, 0)"
                    })
                },
                50), setTimeout(function() {
                    c.removeClass("active").addClass("current"),
                        c = null,
                        p.removeClass("current"),
                        I = !1,
                    "function" == typeof e && e()
                },
                500))
        }
        function l(e) {
            I || (p = L.find(g.opts.swiper + ".current"), W = !1, Y = !1, f = !1, I = !0, c || (c = p.next()[0] ? p.next() : x.eq(0)), c[0] === x[0] && D && (S = !0), c.css({
                "-webkit-transform": "translate3d(0, " + -P + "px, 0)"
            }).addClass("active"), setTimeout(function() {
                    c.css({
                        "-webkit-transform": "translate3d(0, 0, 0)"
                    })
                },
                100), setTimeout(function() {
                    c.removeClass("active").addClass("current"),
                        c = null,
                        p.removeClass("current"),
                        I = !1,
                    "function" == typeof e && e()
                },
                500));

        }
        var p, c, u, d, f, m, h, g = {},
            w = 0,
            v = 0,
            y = 0,
            M = 0,
            b = 0,
            A = 0,
            k = 100,
            L = null,
            x = null,
            C = 0,
            T = null,
            P = 0,
            z = 0,
            D = !1,
            S = !1,
            W = null,
            I = !1,
            Y = !1; !
            function() {
                $(e).on("scroll.elasticity",
                    function(e) {
                        e.preventDefault()
                    }).on("touchmove.elasticity",
                    function(e) {
                        e.preventDefault()
                    }),
                    $(e).on("img", "mousemove",
                        function(e) {
                            e.preventDefault()
                        })
            } (),
            g.init = function(t) {
                t = t || {},
                    P = $(e).height(),
                    z = $(e).width(),
                    T = t.direction || "vertical",
                    D = t.loop,
                    m = t.swipeType || "slide",
                    t.swiper = t.swiper || ".swiper-slide",
                    L = $(t.container || ".swiper-container"),
                    x = L.find(t.swiper),
                    C = x.length,
                    h = $(t.next || ".guide-arrow"),
                    this.opts = t,
                    x.each(function(e) {
                        0 === e && $(this).addClass("current"),
                        "rotation" !== T && $(this).css({
                            "-webkit-transition": "-webkit-transform 0.4s ease-out",
                            height: P + "px"
                        }).data("index", e)
                    });
                L.on("mousedown touchstart",
                    function(e) {
                        if (!$(e.target).hasClass("tel")) {
                            if (g.isDisabled) return;
                            if (I) return;
                            a(e, t.onStart)
                        }
                    }).on("mousemove touchmove",
                    function(e) {
                        g.isDisabled || n(e, t.onMove)
                    }).on("mouseup touchend",
                    function(e) {
                        g.isDisabled || s(e, t.onEnd)
                    }),
                    $(".m-lines--point").on("tap",
                        function() {
                            c = $('[data-horizontal="' + $(this).data("addr") + '"]'),
                                r(t.onEnd)
                        }),
                    $(".back").on("tap",
                        function() {
                            c = $('[data-lines="' + $(this).data("back") + '"]'),
                                l(t.onEnd)
                        })
            },
            t.swiper = g,
            e.App = t
    } (window, window.App || {}),
    function(e, t) {
        var a = function() {},
            n = function() {
                this.calls = [],
                    this.map = {
                        events: {
                            friend: "menu:share:appmessage",
                            timeline: "menu:share:timeline",
                            weibo: "menu:share:weibo"
                        },
                        actions: {
                            friend: "sendAppMessage",
                            timeline: "shareTimeline",
                            weibo: "shareWeibo"
                        },
                        direct: {
                            network: "getNetworkType",
                            hideToolbar: "hideToolbar",
                            hideOptionMenu: "hideOptionMenu",
                            showOptionMenu: "showOptionMenu"
                        }
                    }
            };
        n.prototype._data = function(e) {
            var t = {};
            for (var a in e) {
                if (!e.hasOwnProperty(a)) return;
                t[a] = "function" == typeof e[a] ? e[a]() : e[a]
            }
            return t.appid = t.app,
                t.img_url = t.img,
                delete t.app,
                delete t.img,
                t
        },
            n.prototype._make = function(e) {
                if ("undefined" == typeof WeixinJSBridge) return this.calls.push(e);
                var t = e.name,
                    a = this.map.direct[t],
                    n = e.data,
                    i = e.callback;
                if (a) return "network" === t ? WeixinJSBridge.invoke(a, {},
                    i) : WeixinJSBridge.call(a, i);
                "weibo" === t ? (n.content = n.desc, n.url = n.link) : "timeline" === t && (n.title = n.title + " - " + n.desc, n.desc = n.title);
                var s = this;
                WeixinJSBridge.on(this.map.events[t],
                    function() {
                        WeixinJSBridge.invoke(s.map.actions[t], n, i)
                    })
            },
            n.prototype.on = function(e, t, n) {
                return e ? ("function" == typeof t && (n = t, t = null), this._make({
                    name: e,
                    data: t ? this._data(t) : {},
                    callback: n || a
                }), this) : void 0
            };
        var i = function() {
                for (var e = 0,
                         t = s.calls.length; t > e; e++) s._make(s.calls[e])
            },
            s = new n;
        e.wechat = e.wechat ||
            function() {
                return s.on.apply(s, arguments)
            },
            "undefined" == typeof WeixinJSBridge ? t.addEventListener ? t.addEventListener("WeixinJSBridgeReady", i, !1) : (t.attachEvent("WeixinJSBridgeReady", i), t.attachEvent("onWeixinJSBridgeReady", i)) : i()
    } (window, document);