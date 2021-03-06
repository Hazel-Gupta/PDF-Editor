/*! modernizr 3.1.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-applicationcache-audio-backgroundsize-borderimage-borderradius-boxshadow-canvas-canvastext-cssanimations-csscolumns-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-flexbox-fontface-generatedcontent-generators-geolocation-hashchange-history-hsla-indexeddb-inlinesvg-input-inputtypes-localstorage-multiplebgs-opacity-postmessage-rgba-sessionstorage-smil-svg-svgclippaths-textshadow-video-webgl-websockets-websqldatabase-webworkers-addtest-domprefixes-hasevent-prefixes-testallprops-testprop-teststyles ! */
!(function(e, t, n) {
  function r(e, t) {
    return typeof e === t;
  }
  function a() {
    var e, t, n, a, o, s, i;
    for (var d in b) {
      if (((e = []), (t = b[d]), t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)))
        for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
      for (a = r(t.fn, 'function') ? t.fn() : t.fn, o = 0; o < e.length; o++)
        (s = e[o]),
          (i = s.split('.')),
          i.length === 1 ? (Modernizr[i[0]] = a) : (!Modernizr[i[0]] || Modernizr[i[0]] instanceof Boolean || (Modernizr[i[0]] = new Boolean(Modernizr[i[0]])), (Modernizr[i[0]][i[1]] = a)),
          T.push((a ? '' : 'no-') + i.join('-'));
    }
  }
  function o(e) {
    var t = w.className,
      n = Modernizr._config.classPrefix || '';
    if ((S && (t = t.baseVal), Modernizr._config.enableJSClass)) {
      var r = new RegExp('(^|\\s)' + n + 'no-js(\\s|$)');
      t = t.replace(r, '$1' + n + 'js$2');
    }
    Modernizr._config.enableClasses && ((t += ' ' + n + e.join(' ' + n)), S ? (w.className.baseVal = t) : (w.className = t));
  }
  function s(e, t) {
    if (typeof e === 'object') for (var n in e) P(e, n) && s(n, e[n]);
    else {
      e = e.toLowerCase();
      var r = e.split('.'),
        a = Modernizr[r[0]];
      if ((r.length == 2 && (a = a[r[1]]), typeof a !== 'undefined')) return Modernizr;
      (t = typeof t === 'function' ? t() : t),
        r.length == 1 ? (Modernizr[r[0]] = t) : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), (Modernizr[r[0]][r[1]] = t)),
        o([(t && t != 0 ? '' : 'no-') + r.join('-')]),
        Modernizr._trigger(e, t);
    }
    return Modernizr;
  }
  function i() {
    return typeof t.createElement !== 'function' ? t.createElement(arguments[0]) : S ? t.createElementNS.call(t, 'http://www.w3.org/2000/svg', arguments[0]) : t.createElement.apply(t, arguments);
  }
  function d(e, t) {
    return !!~('' + e).indexOf(t);
  }
  function l() {
    var e = t.body;
    return e || ((e = i(S ? 'svg' : 'body')), (e.fake = !0)), e;
  }
  function c(e, n, r, a) {
    var o,
      s,
      d,
      c,
      u = 'modernizr',
      f = i('div'),
      p = l();
    if (parseInt(r, 10)) for (; r--; ) (d = i('div')), (d.id = a ? a[r] : u + (r + 1)), f.appendChild(d);
    return (
      (o = i('style')),
      (o.type = 'text/css'),
      (o.id = 's' + u),
      (p.fake ? p : f).appendChild(o),
      p.appendChild(f),
      o.styleSheet ? (o.styleSheet.cssText = e) : o.appendChild(t.createTextNode(e)),
      (f.id = u),
      p.fake && ((p.style.background = ''), (p.style.overflow = 'hidden'), (c = w.style.overflow), (w.style.overflow = 'hidden'), w.appendChild(p)),
      (s = n(f, e)),
      p.fake ? (p.parentNode.removeChild(p), (w.style.overflow = c), w.offsetHeight) : f.parentNode.removeChild(f),
      !!s
    );
  }
  function u(e) {
    return e
      .replace(/([A-Z])/g, function(e, t) {
        return '-' + t.toLowerCase();
      })
      .replace(/^ms-/, '-ms-');
  }
  function f(t, r) {
    var a = t.length;
    if ('CSS' in e && 'supports' in e.CSS) {
      for (; a--; ) if (e.CSS.supports(u(t[a]), r)) return !0;
      return !1;
    }
    if ('CSSSupportsRule' in e) {
      for (var o = []; a--; ) o.push('(' + u(t[a]) + ':' + r + ')');
      return (
        (o = o.join(' or ')),
        c('@supports (' + o + ') { #modernizr { position: absolute; } }', function(e) {
          return getComputedStyle(e, null).position == 'absolute';
        })
      );
    }
    return n;
  }
  function p(e) {
    return e
      .replace(/([a-z])-([a-z])/g, function(e, t, n) {
        return t + n.toUpperCase();
      })
      .replace(/^-/, '');
  }
  function g(e, t, a, o) {
    function s() {
      c && (delete $.style, delete $.modElem);
    }
    if (((o = r(o, 'undefined') ? !1 : o), !r(a, 'undefined'))) {
      var l = f(e, a);
      if (!r(l, 'undefined')) return l;
    }
    for (var c, u, g, m, v, h = ['modernizr', 'tspan']; !$.style; ) (c = !0), ($.modElem = i(h.shift())), ($.style = $.modElem.style);
    for (g = e.length, u = 0; g > u; u++)
      if (((m = e[u]), (v = $.style[m]), d(m, '-') && (m = p(m)), $.style[m] !== n)) {
        if (o || r(a, 'undefined')) return s(), t == 'pfx' ? m : !0;
        try {
          $.style[m] = a;
        } catch (y) {}
        if ($.style[m] != v) return s(), t == 'pfx' ? m : !0;
      }
    return s(), !1;
  }
  function m(e, t) {
    return function() {
      return e.apply(t, arguments);
    };
  }
  function v(e, t, n) {
    var a;
    for (var o in e) if (e[o] in t) return n === !1 ? e[o] : ((a = t[e[o]]), r(a, 'function') ? m(a, n || t) : a);
    return !1;
  }
  function h(e, t, n, a, o) {
    var s = e.charAt(0).toUpperCase() + e.slice(1),
      i = (e + ' ' + R.join(s + ' ') + s).split(' ');
    return r(t, 'string') || r(t, 'undefined') ? g(i, t, a, o) : ((i = (e + ' ' + k.join(s + ' ') + s).split(' ')), v(i, t, n));
  }
  function y(e, t, r) {
    return h(e, n, n, t, r);
  }
  var b = [],
    x = {
      _version: '3.1.0',
      _config: {
        classPrefix: '',
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function(e, t) {
        var n = this;
        setTimeout(function() {
          t(n[e]);
        }, 0);
      },
      addTest: function(e, t, n) {
        b.push({ name: e, fn: t, options: n });
      },
      addAsyncTest: function(e) {
        b.push({ name: null, fn: e });
      },
    },
    Modernizr = function() {};
  (Modernizr.prototype = x), (Modernizr = new Modernizr());
  var T = [],
    w = t.documentElement,
    S = w.nodeName.toLowerCase() === 'svg',
    C = 'Moz O ms Webkit',
    k = x._config.usePrefixes ? C.toLowerCase().split(' ') : [];
  x._domPrefixes = k;
  var _ = x._config.usePrefixes ? ' -webkit- -moz- -o- -ms- '.split(' ') : [];
  x._prefixes = _;
  var P;
  !(function() {
    var e = {}.hasOwnProperty;
    P =
      r(e, 'undefined') || r(e.call, 'undefined')
        ? function(e, t) {
            return t in e && r(e.constructor.prototype[t], 'undefined');
          }
        : function(t, n) {
            return e.call(t, n);
          };
  })(),
    (x._l = {}),
    (x.on = function(e, t) {
      this._l[e] || (this._l[e] = []),
        this._l[e].push(t),
        Modernizr.hasOwnProperty(e) &&
          setTimeout(function() {
            Modernizr._trigger(e, Modernizr[e]);
          }, 0);
    }),
    (x._trigger = function(e, t) {
      if (this._l[e]) {
        var n = this._l[e];
        setTimeout(function() {
          var e, r;
          for (e = 0; e < n.length; e++) (r = n[e])(t);
        }, 0),
          delete this._l[e];
      }
    }),
    Modernizr._q.push(function() {
      x.addTest = s;
    });
  var E = (function(e) {
    function n(t, n) {
      var a;
      return t
        ? ((n && typeof n !== 'string') || (n = i(n || 'div')),
          (t = 'on' + t),
          (a = t in n),
          !a && r && (n.setAttribute || (n = i('div')), n.setAttribute(t, ''), (a = typeof n[t] === 'function'), n[t] !== e && (n[t] = e), n.removeAttribute(t)),
          a)
        : !1;
    }
    var r = !('onblur' in t.documentElement);
    return n;
  })();
  x.hasEvent = E;
  var R = x._config.usePrefixes ? C.split(' ') : [];
  x._cssomPrefixes = R;
  var A = { elem: i('modernizr') };
  Modernizr._q.push(function() {
    delete A.elem;
  });
  var $ = { style: A.elem.style };
  Modernizr._q.unshift(function() {
    delete $.style;
  }),
    (x.testAllProps = h),
    (x.testAllProps = y);
  var z = (x.testProp = function(e, t, r) {
      return g([e], n, t, r);
    }),
    N = (x.testStyles = c);
  Modernizr.addTest('applicationcache', 'applicationCache' in e),
    Modernizr.addTest('audio', function() {
      var e = i('audio'),
        t = !1;
      try {
        (t = !!e.canPlayType) &&
          ((t = new Boolean(t)),
          (t.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '')),
          (t.mp3 = e.canPlayType('audio/mpeg;').replace(/^no$/, '')),
          (t.opus = e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, '')),
          (t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '')),
          (t.m4a = (e.canPlayType('audio/x-m4a;') || e.canPlayType('audio/aac;')).replace(/^no$/, '')));
      } catch (n) {}
      return t;
    }),
    Modernizr.addTest('canvas', function() {
      var e = i('canvas');
      return !(!e.getContext || !e.getContext('2d'));
    }),
    Modernizr.addTest('canvastext', function() {
      return Modernizr.canvas === !1 ? !1 : typeof i('canvas').getContext('2d').fillText === 'function';
    }),
    Modernizr.addTest('geolocation', 'geolocation' in navigator),
    Modernizr.addTest('hashchange', function() {
      return E('hashchange', e) === !1 ? !1 : t.documentMode === n || t.documentMode > 7;
    }),
    Modernizr.addTest('history', function() {
      var t = navigator.userAgent;
      return (t.indexOf('Android 2.') === -1 && t.indexOf('Android 4.0') === -1) || t.indexOf('Mobile Safari') === -1 || t.indexOf('Chrome') !== -1 || t.indexOf('Windows Phone') !== -1
        ? e.history && 'pushState' in e.history
        : !1;
    });
  var O = function(t) {
    var r,
      a = _.length,
      o = e.CSSRule;
    if (typeof o === 'undefined') return n;
    if (!t) return !1;
    if (((t = t.replace(/^@/, '')), (r = t.replace(/-/g, '_').toUpperCase() + '_RULE'), r in o)) return '@' + t;
    for (var s = 0; a > s; s++) {
      var i = _[s],
        d = i.toUpperCase() + '_' + r;
      if (d in o) return '@-' + i.toLowerCase() + '-' + t;
    }
    return !1;
  };
  x.atRule = O;
  var L = (x.prefixed = function(e, t, n) {
      return e.indexOf('@') === 0 ? O(e) : (e.indexOf('-') != -1 && (e = p(e)), t ? h(e, t, n) : h(e, 'pfx'));
    }),
    B = L('indexedDB', e);
  Modernizr.addTest('indexeddb', !!B), B && Modernizr.addTest('indexeddb.deletedatabase', 'deleteDatabase' in B);
  var I = i('input'),
    j = 'autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '),
    V = {};
  Modernizr.input = (function(t) {
    for (var n = 0, r = t.length; r > n; n++) V[t[n]] = !!(t[n] in I);
    return V.list && (V.list = !(!i('datalist') || !e.HTMLDataListElement)), V;
  })(j);
  var W = 'search tel url email datetime date month week time datetime-local number range color'.split(' '),
    q = {};
  (Modernizr.inputtypes = (function(e) {
    for (var r, a, o, s = e.length, i = ':)', d = 0; s > d; d++)
      I.setAttribute('type', (r = e[d])),
        (o = I.type !== 'text' && 'style' in I),
        o &&
          ((I.value = i),
          (I.style.cssText = 'position:absolute;visibility:hidden;'),
          /^range$/.test(r) && I.style.WebkitAppearance !== n
            ? (w.appendChild(I), (a = t.defaultView), (o = a.getComputedStyle && a.getComputedStyle(I, null).WebkitAppearance !== 'textfield' && I.offsetHeight !== 0), w.removeChild(I))
            : /^(search|tel)$/.test(r) || (o = /^(url|email|number)$/.test(r) ? I.checkValidity && I.checkValidity() === !1 : I.value != i)),
        (q[e[d]] = !!o);
    return q;
  })(W)),
    Modernizr.addTest('postmessage', 'postMessage' in e),
    Modernizr.addTest('svg', !!t.createElementNS && !!t.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect),
    Modernizr.addTest('video', function() {
      var e = i('video'),
        t = !1;
      try {
        (t = !!e.canPlayType) &&
          ((t = new Boolean(t)),
          (t.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, '')),
          (t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, '')),
          (t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, '')),
          (t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, '')),
          (t.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, '')));
      } catch (n) {}
      return t;
    }),
    Modernizr.addTest('webgl', function() {
      var t = i('canvas'),
        n = 'probablySupportsContext' in t ? 'probablySupportsContext' : 'supportsContext';
      return n in t ? t[n]('webgl') || t[n]('experimental-webgl') : 'WebGLRenderingContext' in e;
    }),
    Modernizr.addTest('websockets', 'WebSocket' in e && e.WebSocket.CLOSING === 2),
    Modernizr.addTest('cssanimations', y('animationName', 'a', !0)),
    Modernizr.addTest('backgroundsize', y('backgroundSize', '100%', !0)),
    Modernizr.addTest('borderimage', y('borderImage', 'url() 1', !0)),
    Modernizr.addTest('borderradius', y('borderRadius', '0px', !0)),
    Modernizr.addTest('boxshadow', y('boxShadow', '1px 1px', !0)),
    (function() {
      Modernizr.addTest('csscolumns', function() {
        var e = !1,
          t = y('columnCount');
        try {
          (e = !!t) && (e = new Boolean(e));
        } catch (n) {}
        return e;
      });
      for (var e, t, n = ['Width', 'Span', 'Fill', 'Gap', 'Rule', 'RuleColor', 'RuleStyle', 'RuleWidth', 'BreakBefore', 'BreakAfter', 'BreakInside'], r = 0; r < n.length; r++)
        (e = n[r].toLowerCase()), (t = y('column' + n[r])), (e === 'breakbefore' || e === 'breakafter' || e == 'breakinside') && (t = t || y(n[r])), Modernizr.addTest('csscolumns.' + e, t);
    })(),
    Modernizr.addTest('flexbox', y('flexBasis', '1px', !0));
  var M = (function() {
    var e = navigator.userAgent,
      t = e.match(/applewebkit\/([0-9]+)/gi) && parseFloat(RegExp.$1),
      n = e.match(/w(eb)?osbrowser/gi),
      r = e.match(/windows phone/gi) && e.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9,
      a = t < 533 && e.match(/android/gi);
    return n || a || r;
  })();
  M
    ? Modernizr.addTest('fontface', !1)
    : N('@font-face {font-family:"font";src:url("https://")}', function(e, n) {
        var r = t.getElementById('smodernizr'),
          a = r.sheet || r.styleSheet,
          o = a ? (a.cssRules && a.cssRules[0] ? a.cssRules[0].cssText : a.cssText || '') : '',
          s = /src/i.test(o) && o.indexOf(n.split(' ')[0]) === 0;
        Modernizr.addTest('fontface', s);
      }),
    N('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function(e) {
      Modernizr.addTest('generatedcontent', e.offsetHeight >= 7);
    }),
    Modernizr.addTest('cssgradients', function() {
      var e = 'background-image:',
        t = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
        n = 'linear-gradient(left top,#9f9, white);',
        r = e + _.join(n + e).slice(0, -e.length);
      Modernizr._config.usePrefixes && (r += e + '-webkit-' + t);
      var a = i('a'),
        o = a.style;
      return (o.cssText = r), ('' + o.backgroundImage).indexOf('gradient') > -1;
    }),
    Modernizr.addTest('hsla', function() {
      var e = i('a').style;
      return (e.cssText = 'background-color:hsla(120,40%,100%,.5)'), d(e.backgroundColor, 'rgba') || d(e.backgroundColor, 'hsla');
    }),
    Modernizr.addTest('multiplebgs', function() {
      var e = i('a').style;
      return (e.cssText = 'background:url(https://),url(https://),red url(https://)'), /(url\s*\(.*?){3}/.test(e.background);
    }),
    Modernizr.addTest('opacity', function() {
      var e = i('a').style;
      return (e.cssText = _.join('opacity:.55;')), /^0.55$/.test(e.opacity);
    }),
    Modernizr.addTest('cssreflections', y('boxReflect', 'above', !0)),
    Modernizr.addTest('rgba', function() {
      var e = i('a').style;
      return (e.cssText = 'background-color:rgba(150,255,150,.5)'), ('' + e.backgroundColor).indexOf('rgba') > -1;
    }),
    Modernizr.addTest('textshadow', z('textShadow', '1px 1px')),
    Modernizr.addTest('csstransforms', function() {
      return navigator.userAgent.indexOf('Android 2.') === -1 && y('transform', 'scale(1)', !0);
    });
  var G = 'CSS' in e && 'supports' in e.CSS,
    U = 'supportsCSS' in e;
  Modernizr.addTest('supports', G || U),
    Modernizr.addTest('csstransforms3d', function() {
      var e = !!y('perspective', '1px', !0),
        t = Modernizr._config.usePrefixes;
      if (e && (!t || 'webkitPerspective' in w.style)) {
        var n;
        Modernizr.supports ? (n = '@supports (perspective: 1px)') : ((n = '@media (transform-3d)'), t && (n += ',(-webkit-transform-3d)')),
          (n += '{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}'),
          N(n, function(t) {
            e = t.offsetLeft === 9 && t.offsetHeight === 5;
          });
      }
      return e;
    }),
    Modernizr.addTest('csstransitions', y('transition', 'all', !0)),
    Modernizr.addTest('generators', function() {
      try {
        new Function('function* test() {}')();
      } catch (e) {
        return !1;
      }
      return !0;
    }),
    Modernizr.addTest('localstorage', function() {
      var e = 'modernizr';
      try {
        return localStorage.setItem(e, e), localStorage.removeItem(e), !0;
      } catch (t) {
        return !1;
      }
    }),
    Modernizr.addTest('sessionstorage', function() {
      var e = 'modernizr';
      try {
        return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0;
      } catch (t) {
        return !1;
      }
    }),
    Modernizr.addTest('websqldatabase', 'openDatabase' in e);
  var H = {}.toString;
  Modernizr.addTest('svgclippaths', function() {
    return !!t.createElementNS && /SVGClipPath/.test(H.call(t.createElementNS('http://www.w3.org/2000/svg', 'clipPath')));
  }),
    Modernizr.addTest('inlinesvg', function() {
      var e = i('div');
      return (e.innerHTML = '<svg/>'), (typeof SVGRect !== 'undefined' && e.firstChild && e.firstChild.namespaceURI) == 'http://www.w3.org/2000/svg';
    }),
    Modernizr.addTest('smil', function() {
      return !!t.createElementNS && /SVGAnimate/.test(H.call(t.createElementNS('http://www.w3.org/2000/svg', 'animate')));
    }),
    Modernizr.addTest('webworkers', 'Worker' in e),
    a(),
    o(T),
    delete x.addTest,
    delete x.addAsyncTest;
  for (var D = 0; D < Modernizr._q.length; D++) Modernizr._q[D]();
  e.Modernizr = Modernizr;
})(window, document);
