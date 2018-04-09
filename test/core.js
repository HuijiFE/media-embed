(function() {
  window.NEJ = window.NEJ || {};
  NEJ.O = {};
  NEJ.R = [];
  NEJ.F = function() {
    return !1;
  };
  NEJ.P = function(DQ9H) {
    if (!DQ9H || !DQ9H.length) return null;
    var XC5H = window;
    for (
      var a = DQ9H.split('.'), l = a.length, i = a[0] == 'window' ? 1 : 0;
      i < l;
      XC5H = XC5H[a[i]] = XC5H[a[i]] || {}, i++
    );
    return XC5H;
  };
  NEJ.Q = function(bJ0x, DQ9H) {
    bJ0x = bJ0x || NEJ.O;
    var bs9j = DQ9H.split('.');
    for (var i = 0, l = bs9j.length; i < l; i++) {
      bJ0x = bJ0x[bs9j[i]];
      if (!bJ0x) break;
    }
    return bJ0x;
  };
  NEJ.C = (function() {
    var bxL2x = function() {
      return NEJ.O.toString.call(arguments[0]) != '[object Function]';
    };
    var bxX2x = function(D9u, bz0x) {
      for (var x in bz0x) if (D9u == bz0x[x]) return x;
      return null;
    };
    var bjv9m = {
        cy0x: 0,
        bk9b: 1,
        bD0x: 2,
        bW0x: 3,
        bL0x: 4,
        fb1x: 5,
        kq3x: 6,
        eE0x: 7,
      },
      vT6N = {
        cG0x: 0,
        bm9d: 1,
        bG0x: 2,
        ch0x: 3,
        bQ0x: 4,
        gK2x: 5,
        lh3x: 6,
        gl1x: 7,
      };
    return function() {
      var fJ1x = function() {
        this.byv2x();
        return this.cy0x.apply(this, arguments);
      };
      fJ1x.prototype.byv2x = NEJ.F;
      fJ1x.prototype.cy0x = NEJ.F;
      fJ1x.N9E = function(Dr8j, bzs2x) {
        if (bxL2x(Dr8j)) return;
        if (bzs2x == null || !!bzs2x) NEJ.X(this, Dr8j, bxL2x);
        this.czI6C = Dr8j;
        this.ct0x = Dr8j.prototype;
        var bI0x = function() {};
        bI0x.prototype = Dr8j.prototype;
        this.prototype = new bI0x();
        var FL9C = this.prototype;
        FL9C.constructor = this;
        var cl0x;
        for (var x in bjv9m) {
          cl0x = bxX2x(bjv9m[x], vT6N);
          if (!cl0x || !this.ct0x[x]) continue;
          FL9C[x] = (function(V9M) {
            return function() {
              this[V9M].apply(this, arguments);
            };
          })(cl0x);
        }
        var HB0x = {};
        for (var x in vT6N) {
          cl0x = bxX2x(vT6N[x], bjv9m);
          if (!cl0x || !this.ct0x[cl0x]) continue;
          HB0x[cl0x] = Dr8j;
          FL9C[x] = (function(V9M) {
            return function() {
              var o9f,
                bI0x = this.bfT8L[V9M],
                beM7F = bI0x.prototype[V9M];
              this.bfT8L[V9M] = bI0x.czI6C || Dr8j;
              if (!!beM7F) o9f = beM7F.apply(this, arguments);
              this.bfT8L[V9M] = Dr8j;
              return o9f;
            };
          })(cl0x);
        }
        FL9C.byv2x = function() {
          this.bfT8L = NEJ.X({}, HB0x);
        };
        FL9C.cII8A = FL9C.cG0x;
        return FL9C;
      };
      return fJ1x;
    };
  })();
  NEJ.X = function(gm1x, bP0x, dW0x) {
    if (!gm1x || !bP0x) return gm1x;
    dW0x = dW0x || NEJ.F;
    for (var x in bP0x) {
      if (bP0x.hasOwnProperty(x) && !dW0x(bP0x[x], x)) gm1x[x] = bP0x[x];
    }
    return gm1x;
  };
  NEJ.EX = function(gm1x, bP0x) {
    if (!gm1x || !bP0x) return gm1x;
    for (var x in gm1x) {
      if (gm1x.hasOwnProperty(x) && bP0x[x] != null) gm1x[x] = bP0x[x];
    }
    return gm1x;
  };
  var Ie0x = Function.prototype;
  Ie0x.eF0x = function(lB3x, wb6V) {
    var f = NEJ.F,
      wb6V = wb6V || f,
      lB3x = lB3x || f,
      dx0x = this;
    return function() {
      var d9g = {
        args: NEJ.R.slice.call(arguments, 0),
      };
      lB3x(d9g);
      if (!d9g.stopped) {
        d9g.value = dx0x.apply(this, d9g.args);
        wb6V(d9g);
      }
      return d9g.value;
    };
  };
  Ie0x.g9d = function() {
    var bf9W = arguments,
      gm1x = arguments[0],
      bqw0x = this;
    return function() {
      var wc6W = NEJ.R.slice.call(bf9W, 1);
      NEJ.R.push.apply(wc6W, arguments);
      return bqw0x.apply(gm1x || window, wc6W);
    };
  };
  Ie0x.et0x = function() {
    var bf9W = arguments,
      gm1x = NEJ.R.shift.call(bf9W),
      bqw0x = this;
    return function() {
      NEJ.R.push.apply(arguments, bf9W);
      return bqw0x.apply(gm1x || window, arguments);
    };
  };
  var Ie0x = String.prototype;
  if (!Ie0x.trim) {
    Ie0x.trim = (function() {
      var df0x = /(?:^\s+)|(?:\s+$)/g;
      return function() {
        return this.replace(df0x, '');
      };
    })();
  }
  if (!window.MWF) window.MWF = NEJ;
  if (!window.mwf) window.mwf = NEJ.P('nej');
  if (!window.console) {
    NEJ.P('console').log = NEJ.F;
    NEJ.P('console').error = NEJ.F;
  }
  var lt, gt, amp, nbsp, quot, apos, copy, reg;
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    O9F = c9h('nej.p'),
    uw6q = window.navigator.platform,
    uF6z = window.navigator.userAgent;
  var le3x = {
    mac: uw6q,
    win: uw6q,
    linux: uw6q,
    ipad: uF6z,
    ipod: uF6z,
    iphone: uw6q,
    android: uF6z,
  };
  O9F.Ig0x = le3x;
  for (var x in le3x) le3x[x] = new RegExp(x, 'i').test(le3x[x]);
  le3x.ios = le3x.ipad || le3x.iphone || le3x.ipod;
  le3x.tablet = le3x.ipad;
  le3x.desktop = le3x.mac || le3x.win || (le3x.linux && !le3x.android);
  var iC2x = {
    engine: 'unknow',
    release: 'unknow',
    browser: 'unknow',
    version: 'unknow',
    prefix: {
      css: '',
      pro: '',
      clz: '',
    },
  };
  O9F.ds0x = iC2x;
  if (/msie\s+(.*?);/i.test(uF6z) || /trident\/.+rv:([\d\.]+)/i.test(uF6z)) {
    iC2x.engine = 'trident';
    iC2x.browser = 'ie';
    iC2x.version = RegExp.$1;
    iC2x.prefix = {
      css: 'ms',
      pro: 'ms',
      clz: 'MS',
      evt: 'MS',
    };
    var mC3x = {
      6: '2.0',
      7: '3.0',
      8: '4.0',
      9: '5.0',
      10: '6.0',
      11: '7.0',
    };
    iC2x.release = mC3x[document.documentMode] || mC3x[parseInt(iC2x.version)];
  } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(uF6z)) {
    iC2x.engine = 'webkit';
    iC2x.release = RegExp.$1 || '';
    iC2x.prefix = {
      css: 'webkit',
      pro: 'webkit',
      clz: 'WebKit',
    };
  } else if (/rv\:(.*?)\)\s+gecko\//i.test(uF6z)) {
    iC2x.engine = 'gecko';
    iC2x.release = RegExp.$1 || '';
    iC2x.browser = 'firefox';
    iC2x.prefix = {
      css: 'Moz',
      pro: 'moz',
      clz: 'Moz',
    };
    if (/firefox\/(.*?)(?=\s|$)/i.test(uF6z)) iC2x.version = RegExp.$1 || '';
  } else if (/presto\/(.*?)\s/i.test(uF6z)) {
    iC2x.engine = 'presto';
    iC2x.release = RegExp.$1 || '';
    iC2x.browser = 'opera';
    iC2x.prefix = {
      css: 'O',
      pro: 'o',
      clz: 'O',
    };
    if (/version\/(.*?)(?=\s|$)/i.test(uF6z)) iC2x.version = RegExp.$1 || '';
  }
  if (iC2x.browser == 'unknow') {
    var mC3x = ['chrome', 'maxthon', 'safari'];
    for (var i = 0, l = mC3x.length, V9M; i < l; i++) {
      V9M = mC3x[i] == 'safari' ? 'version' : mC3x[i];
      if (new RegExp(V9M + '/(.*?)(?=\\s|$)', 'i').test(uF6z)) {
        iC2x.browser = mC3x[i];
        iC2x.version = RegExp.$1.trim();
        break;
      }
    }
  }
  O9F.bAk3x = {};
  var beF7y = iC2x.engine != 'trident';
  O9F.nq3x = {
    gecko: iC2x.engine != 'gecko',
    webkit: iC2x.engine != 'webkit',
    presto: iC2x.engine != 'presto',
    trident0: beF7y || iC2x.release > '2.0',
    trident1: beF7y || iC2x.release < '6.0',
    trident2: beF7y || iC2x.release > '3.0',
    trident: beF7y || iC2x.release >= '6.0',
  };
})();
(function() {
  var iv2x = NEJ.P('nej.c'),
    R9I = {};
  var bhz8r = (function() {
    var df0x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
    return function(Y9P) {
      Y9P = Y9P || '';
      if (df0x.test(Y9P)) return RegExp.$1;
      return location.protocol + '//' + location.host;
    };
  })();
  var UP4T = (function() {
    var bAw3x = function(i9b, bz0x) {
      if (!i9b || !i9b.length) return;
      for (var i = 0, l = i9b.length, jR2x; i < l; i++) {
        jR2x = i9b[i];
        if (jR2x.indexOf('://') > 0) bz0x[bhz8r(jR2x)] = jR2x;
      }
    };
    var bg9X = {
      portrait: {
        name: 'portrait',
        dft: 'portrait/',
      },
      'ajax.swf': {
        name: 'ajax',
        dft: 'nej_proxy_flash.swf',
      },
      'chart.swf': {
        name: 'chart',
        dft: 'nej_flex_chart.swf',
      },
      'audio.swf': {
        name: 'audio',
        dft: 'nej_player_audio.swf',
      },
      'video.swf': {
        name: 'video',
        dft: 'nej_player_video.swf',
      },
      'clipboard.swf': {
        name: 'clipboard',
        dft: 'nej_clipboard.swf',
      },
    };
    return function(bP0x) {
      iv2x.Ij0x('root', bP0x.root || '/res/');
      var brM1x,
        ga1x = iv2x.B9s('root');
      for (var x in bg9X) {
        brM1x = bg9X[x];
        iv2x.Ij0x(x, bP0x[brM1x.name] || ga1x + brM1x.dft);
      }
      var Dm8e = bP0x.p_csrf;
      if (Dm8e == !0) {
        Dm8e = {
          cookie: 'AntiCSRF',
          param: 'AntiCSRF',
        };
      }
      iv2x.Ij0x(
        'csrf',
        NEJ.EX(
          {
            cookie: '',
            param: '',
          },
          Dm8e
        )
      );
      R9I.frames = {};
      bAw3x(bP0x.p_frame, R9I.frames);
      R9I.flashs = {};
      bAw3x(bP0x.p_flash, R9I.flashs);
    };
  })();
  iv2x.Ij0x = function(J9A, D9u) {
    R9I[J9A] = D9u;
  };
  iv2x.B9s = function(J9A) {
    return R9I[J9A];
  };
  iv2x.ciN2x = function(Y9P) {
    var tN5S = bhz8r(Y9P);
    return R9I.frames[tN5S] || tN5S + '/res/nej_proxy_frame.html';
  };
  iv2x.csn4r = function(Y9P) {
    return R9I.flashs[bhz8r(Y9P)];
  };
  UP4T(window.NEJ_CONF || NEJ.O);
})();
(function() {
  var c9h = NEJ.P,
    O9F = c9h('nej.p'),
    iv2x = c9h('nej.c'),
    bP0x = window.NEJ_CONF || NEJ.O;
  if (O9F.nq3x.trident) return;
  iv2x.Ij0x('storage.swf', bP0x.storage || iv2x.B9s('root') + 'nej_storage.swf');
  if (O9F.ds0x.release < '4.0') {
    iv2x.Ij0x('blank.png', bP0x.blank || iv2x.B9s('root') + 'nej_blank.gif');
  }
  var i9b = bP0x.xdr,
    gH2x = /^(https?:\/\/.*?)(?=\/|$)/i,
    kx3x = /[\/?=&]/i;
  var bBv3x = function(Y9P) {
    return (gH2x.test(Y9P) ? RegExp.$1 : '').toLowerCase();
  };
  if (!!i9b && !!i9b.length)
    for (var i = i9b.length - 1, Y9P, J9A; i >= 0; i--) {
      Y9P = i9b[i];
      J9A = bBv3x(Y9P);
      if (!!J9A) iv2x.Ij0x(J9A, Y9P);
    }
  iv2x.cIu8m = function(Y9P) {
    var J9A = bBv3x(Y9P);
    if (!J9A) {
      if (kx3x.test(Y9P)) {
        J9A = location.protocol + '//' + location.host;
      } else if (Y9P.indexOf('://') < 0) {
        J9A = location.protocol + '//' + Y9P;
      } else {
        J9A = Y9P;
      }
    }
    return iv2x.B9s(J9A) || J9A + '/res/nej_xdomain.html';
  };
})();
(function() {
  var c9h = NEJ.P,
    iv2x = c9h('nej.c'),
    O9F = c9h('nej.g'),
    gG2x = +new Date();
  O9F.cIq8i = 10000 - gG2x;
  O9F.bwO2x = 10001 - gG2x;
  O9F.cIp8h = 10002 - gG2x;
  O9F.bBW3x = 10003 - gG2x;
  O9F.caF0x = 10004 - gG2x;
  O9F.cIj8b = 10005 - gG2x;
  O9F.biF8x = 10006 - gG2x;
  O9F.cfk1x = 10007 - gG2x;
  O9F.Ak7d = 'Content-Type';
  O9F.cIe8W = 'text/plain';
  O9F.HF0x = 'multipart/form-data';
  O9F.cjk2x = 'application/x-www-form-urlencoded';
  O9F.blV9M =
    iv2x.B9s('blank.png') ||
    'data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
})();
(function() {
  var c9h = NEJ.P,
    fz1x = NEJ.R,
    O9F = c9h('nej.p'),
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    be9V = c9h('nej.h');
  var kg3x = O9F.ds0x.prefix,
    bEi3x = O9F.bAk3x,
    clQ2x = {
      scale: 'scale({x|1},{y|1})',
      rotate: 'rotate({a})',
      translate: 'translate({x},{y})',
    },
    cmh3x = {
      scale: 'scale3d({x|1},{y|1},{z|1})',
      rotate: 'rotate3d({x},{y},{z},{a})',
      translate: 'translate3d({x},{y},{z})',
    },
    Rg3x = {
      transition: !0,
      transform: !0,
      animation: !0,
      keyframes: !0,
      box: !0,
      'box-pack': !0,
      'box-flex': !0,
      marquee: !0,
      'border-radius': !0,
      'user-select': !0,
    };
  var UP4T = function() {
    var tL5Q = be9V.bGt4x();
    bEi3x.css3d = !!tL5Q && tL5Q.m41 != null;
    var df0x = /-([a-z])/g;
    for (var x in Rg3x) {
      Rg3x[bGu4y(x)] = Rg3x[x];
    }
  };
  var bGu4y = (function() {
    var df0x = /-([a-z])/g;
    return function(V9M) {
      V9M = V9M || '';
      return V9M.replace(df0x, function($1, $2) {
        return $2.toUpperCase();
      });
    };
  })();
  var bGN4R = function(V9M) {
    return (!bEi3x.css3d ? clQ2x : cmh3x)[V9M];
  };
  var bGO4S = (function() {
    var df0x = /\s+/;
    return function(fJ1x) {
      fJ1x = (fJ1x || '').trim();
      return !!fJ1x ? fJ1x.split(df0x) : null;
    };
  })();
  var ben7g = function(F9w, u9l, fJ1x) {
    F9w = a8i.B9s(F9w);
    if (!F9w) return;
    k9b.bd9U(bGO4S(fJ1x), function(ec0x) {
      F9w.classList[u9l](ec0x);
    });
  };
  be9V.Ip0x = function(i9b) {
    return fz1x.slice.call(i9b, 0);
  };
  be9V.bka9R = function(F9w) {
    return be9V.Ip0x(F9w.children);
  };
  be9V.bkb9S = function(F9w, fJ1x) {
    return be9V.Ip0x(F9w.getElementsByClassName(fJ1x));
  };
  be9V.bke9V = function(F9w, Iq0x) {
    ben7g(F9w, 'add', Iq0x);
  };
  be9V.blC9t = function(F9w, Ir0x) {
    ben7g(F9w, 'remove', Ir0x);
  };
  be9V.RE3x = function(F9w, Ir0x, Iq0x) {
    ben7g(F9w, 'remove', Ir0x);
    ben7g(F9w, 'add', Iq0x);
  };
  be9V.boY0x = function(F9w, fJ1x) {
    F9w = a8i.B9s(F9w);
    if (!F9w) return !1;
    var i9b = F9w.classList;
    if (!i9b || !i9b.length) return !1;
    return (
      k9b.di0x(bGO4S(fJ1x), function(ec0x) {
        return i9b.contains(ec0x);
      }) >= 0
    );
  };
  be9V.bpF0x = function(F9w, ec0x) {};
  be9V.bpM0x = function(F9w) {};
  be9V.bqb0x = function(gj1x, nP4T) {
    gj1x.selectionEnd = nP4T.end || 0;
    gj1x.selectionStart = nP4T.start || 0;
    gj1x.focus();
  };
  be9V.brN1x = function(gj1x) {
    return {
      end: gj1x.selectionEnd,
      start: gj1x.selectionStart,
    };
  };
  be9V.bto1x = (function() {
    var En9e = function(ec0x, d9g) {
      var F9w = h9c.W9N(d9g);
      if (!F9w.value) a8i.x9o(F9w, ec0x);
    };
    var Iv0x = function(ec0x, d9g) {
      a8i.y9p(h9c.W9N(d9g), ec0x);
    };
    return function(F9w, fj1x, ec0x) {
      if (fj1x == 1) {
        h9c.s9j(F9w, 'blur', En9e.g9d(null, ec0x));
      }
      if (fj1x == 1 || fj1x == -1) {
        h9c.s9j(F9w, 'focus', Iv0x.g9d(null, ec0x));
      }
    };
  })();
  be9V.bfX8P = function(G9x) {
    return new XMLSerializer().serializeToString(G9x) || '';
  };
  be9V.bgk8c = function(De8W) {
    var ga1x = new DOMParser().parseFromString(De8W, 'text/xml').documentElement;
    return ga1x.nodeName == 'parsererror' ? null : ga1x;
  };
  be9V.bgS8K = function(F9w) {};
  be9V.nQ4U = function(F9w) {
    return null;
  };
  be9V.bhL8D = function(F9w) {
    return null;
  };
  be9V.bhR8J = function(dP0x) {};
  be9V.bic8U = function() {
    var bf9W = be9V.Ip0x(arguments);
    bf9W[0] = a8i.B9s(bf9W[0]);
    if (!bf9W[0]) return null;
    bf9W[1] = (bf9W[1] || '').toLowerCase();
    if (!bf9W[1]) return null;
    return bf9W;
  };
  be9V.Dd8V = (function() {
    var wd6X = {
        touchstart: 'mousedown',
        touchmove: 'mousemove',
        touchend: 'mouseup',
      },
      jI2x = {
        transitionend: 'TransitionEnd',
        animationend: 'AnimationEnd',
        animationstart: 'AnimationStart',
        animationiteration: 'AnimationIteration',
      };
    var cAQ6K = function(u9l) {
      return (kg3x.evt || kg3x.pro) + u9l;
    };
    return function() {
      var bf9W = be9V.bic8U.apply(be9V, arguments);
      if (!bf9W) return;
      var bec7V = jI2x[bf9W[1]],
        beb7U = wd6X[bf9W[1]];
      if (!!bec7V) {
        bf9W[4] = bf9W[1];
        bf9W[1] = cAQ6K(bec7V);
      } else if (!!beb7U) {
        var V9M = 'on' + bf9W[1];
        if (!(V9M in bf9W[0])) {
          bf9W[4] = bf9W[1];
          bf9W[1] = beb7U;
        }
      }
      return bf9W;
    };
  })();
  be9V.bjO9F = function() {
    var bf9W = arguments;
    bf9W[0].addEventListener(bf9W[1], bf9W[2], !!bf9W[3]);
  };
  be9V.bea7T = function() {
    var bf9W = arguments;
    bf9W[0].removeEventListener(bf9W[1], bf9W[2], !!bf9W[3]);
  };
  be9V.bjT9K = function(F9w, u9l, e9f) {
    var d9g = document.createEvent('Event');
    d9g.initEvent(u9l, !0, !0);
    NEJ.X(d9g, e9f);
    F9w.dispatchEvent(d9g);
  };
  be9V.bGt4x = (function() {
    var gH2x = /\((.*?)\)/,
      kx3x = /\s*,\s*/,
      i9b = ['m11', 'm12', 'm21', 'm22', 'm41', 'm42'];
    var bdZ7S = function(tL5Q) {
      var ik2x = {};
      if (gH2x.test(tL5Q || '')) {
        k9b.bd9U(RegExp.$1.split(kx3x), function(D9u, r9i) {
          ik2x[i9b[r9i]] = D9u || '';
        });
      }
      return ik2x;
    };
    return function(tL5Q) {
      if (!!window.CSSMatrix) return new CSSMatrix(tL5Q);
      var V9M = kg3x.clz + 'CSSMatrix';
      if (!!window[V9M]) return new window[V9M](tL5Q || '');
      return bdZ7S(tL5Q);
    };
  })();
  be9V.bHa4e = (function() {
    var df0x = /\{(.*?)\}/g;
    return function(V9M, bz0x) {
      bz0x = bz0x || o;
      var pe4i = bGN4R(V9M);
      return !pe4i
        ? ''
        : pe4i.replace(df0x, function($1, $2) {
            var bs9j = $2.split('|');
            return bz0x[bs9j[0]] || bs9j[1] || '0';
          });
    };
  })();
  be9V.blX9O = function(F9w, V9M, D9u) {
    F9w.style[be9V.bHb4f(V9M)] = D9u;
  };
  be9V.bHb4f = (function() {
    var df0x = /^[a-z]/,
      bmr9i = kg3x.css;
    var cBr6l = function(V9M) {
      return V9M.replace(df0x, function($1) {
        return bmr9i + $1.toUpperCase();
      });
    };
    return function(V9M) {
      V9M = bGu4y(V9M);
      var cBv6p = be9V.cBG6A(V9M, Rg3x);
      return cBv6p ? cBr6l(V9M) : V9M;
    };
  })();
  be9V.cBG6A = (function() {
    var df0x = /^([a-z]+?)[A-Z]/;
    return function(V9M, bz0x) {
      if (!bz0x[V9M]) {
        if (df0x.test(V9M)) V9M = RegExp.$1;
      }
      return !!bz0x[V9M];
    };
  })();
  be9V.cDl7e = (function() {
    var df0x = /\$<(.*?)>/gi,
      bmr9i = '-' + kg3x.css.toLowerCase() + '-';
    return function(kA3x) {
      return kA3x.replace(df0x, function($1, $2) {
        var eS1x = $2,
          bs9j = eS1x.split('|'),
          pe4i = bGN4R(bs9j[0]);
        if (!!pe4i) {
          return be9V.bHa4e(bs9j[0], k9b.hy2x(bs9j[1]));
        }
        return !be9V.bVi8a(eS1x, Rg3x) ? eS1x : bmr9i + eS1x;
      });
    };
  })();
  be9V.bVi8a = function(V9M, bz0x) {
    return !!bz0x[V9M];
  };
  be9V.bqc0x = function(ci0x, kA3x) {
    ci0x.textContent = kA3x;
  };
  be9V.brK0x = function(ci0x, kA3x) {
    var Aa7T = ci0x.sheet,
      bp9g = Aa7T.cssRules.length;
    Aa7T.insertRule(kA3x, bp9g);
    return Aa7T.cssRules[bp9g];
  };
  be9V.cHb7U = function(F9w, e9f) {};
  be9V.bdU7N = function(bdT7M) {
    return (bdT7M || '').toLowerCase() != 'transparent';
  };
  be9V.bVw8o = function(F9w) {};
  be9V.bvM1x = function(F9w, V9M) {
    if (!!F9w.getAttribute) return F9w.getAttribute(V9M);
    return '';
  };
  be9V.bdR7K = function(eL0x) {
    a8i.cJ0x(eL0x);
  };
  UP4T();
})();
(function() {
  var c9h = NEJ.P,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    O9F = c9h('nej.p'),
    be9V = c9h('nej.h');
  if (O9F.nq3x.trident0) return;
  var gG2x = +new Date();
  R9I = {};
  be9V.bpF0x = be9V.bpF0x.eF0x(function(d9g) {
    d9g.stopped = !0;
    var bf9W = d9g.args,
      C9t = a8i.lw3x(bf9W[0]),
      J9A = 'hover-' + C9t;
    if (!C9t || !!R9I[J9A]) return;
    R9I[J9A] = !0;
    h9c.s9j(C9t, 'mouseenter', a8i.y9p.g9d(a8i, C9t, bf9W[1]));
    h9c.s9j(C9t, 'mouseleave', a8i.x9o.g9d(a8i, C9t, bf9W[1]));
  });
  be9V.bpM0x = (function() {
    var cGZ7S = function() {};
    return be9V.bpM0x.eF0x(function(d9g) {
      d9g.stopped = !0;
      var F9w = d9g.args[0],
        C9t = 'fixed-' + a8i.lw3x(F9w);
      if (!!R9I[C9t]) return;
      var bg9X = {};
      R9I[C9t] = bg9X;
    });
  })();
  be9V.bgS8K = be9V.bgS8K.eF0x(function(d9g) {
    d9g.stopped = !0;
    var F9w = d9g.args[0],
      ci0x = F9w.style,
      bHw4A = a8i.oE4I();
    ci0x.width = bHw4A.scrollWidth + 'px';
    ci0x.height = bHw4A.scrollHeight + 'px';
  });
  be9V.nQ4U = be9V.nQ4U.eF0x(function(d9g) {
    d9g.stopped = !0;
    var F9w = d9g.args[0],
      lm3x = R9I[F9w.msk];
    if (!lm3x) {
      F9w.msk = gG2x++;
      lm3x = a8i.dh0x('iframe');
      lm3x.style.position = 'absolute';
      R9I[F9w.msk] = lm3x;
    }
    d9g.value = lm3x;
    var ci0x = lm3x.style;
    ci0x.top = (parseInt(a8i.de0x(F9w, 'top')) || 0) + 'px';
    ci0x.left = (parseInt(a8i.de0x(F9w, 'left')) || 0) + 'px';
    ci0x.width = F9w.offsetWidth + 'px';
    ci0x.height = F9w.offsetHeight + 'px';
    F9w.insertAdjacentElement('beforeBegin', lm3x);
  });
  be9V.bhL8D = be9V.bhL8D.eF0x(function(d9g) {
    d9g.stopped = !0;
    var lm3x = R9I[d9g.args[0].msk];
    if (!!lm3x) a8i.mu3x(lm3x);
  });
})();
(function() {
  var c9h = NEJ.P,
    O9F = c9h('nej.p'),
    a8i = c9h('nej.e'),
    be9V = c9h('nej.h');
  if (O9F.nq3x.trident1) return;
  be9V.Dd8V = (function() {
    var wd6X = {
      touchcancel: 'MSPointerCancel',
      touchstart: 'MSPointerDown',
      touchmove: 'MSPointerMove',
      touchend: 'MSPointerUp',
    };
    return be9V.Dd8V.eF0x(function(d9g) {
      var bf9W = be9V.bic8U.apply(be9V, d9g.args);
      if (!bf9W) {
        d9g.stopped = !0;
        return;
      }
      var u9l = wd6X[bf9W[1]];
      if (!!u9l && ('on' + u9l).toLowerCase() in bf9W[0]) {
        bf9W[4] = bf9W[1];
        bf9W[1] = u9l;
        d9g.stopped = !0;
        d9g.value = bf9W;
      }
    });
  })();
  be9V.bdU7N = function(bdT7M) {
    return !0;
  };
  be9V.bdR7K = be9V.bdR7K.eF0x(function(d9g) {
    d9g.stopped = !0;
    var eL0x = d9g.args[0];
    a8i.ba9R(eL0x, 'display', 'none');
    try {
      eL0x.contentWindow.document.body.innerHTML = '&nbsp;';
    } catch (ex) {}
  });
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    O9F = c9h('nej.p'),
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    be9V = c9h('nej.h'),
    bhy8q = {};
  if (O9F.nq3x.trident) return;
  be9V.Ip0x = be9V.Ip0x.eF0x(function(d9g) {
    d9g.stopped = !0;
    var i9b = d9g.args[0];
    if (!i9b) {
      d9g.value = null;
      return;
    }
    var r9i = 0,
      o9f = [];
    while (!!i9b[r9i]) {
      o9f.push(i9b[r9i++]);
    }
    d9g.value = o9f;
  });
  be9V.bka9R = be9V.bka9R.eF0x(function(d9g) {
    d9g.stopped = !0;
    var bs9j = [];
    k9b.bd9U(d9g.args[0].childNodes, function(f9e) {
      if (f9e.nodeType == 1) bs9j.push(f9e);
    });
    d9g.value = bs9j;
  });
  be9V.bkb9S = be9V.bkb9S.eF0x(function(d9g) {
    var F9w = d9g.args[0];
    if (!!F9w.getElementsByClassName) return;
    d9g.stopped = !0;
    var o9f = [],
      UF4J = new RegExp('(\\s|^)(?:' + d9g.args[1].replace(/\s+/g, '|') + ')(?=\\s|$)');
    k9b.bd9U(F9w.getElementsByTagName('*'), function(f9e) {
      if (UF4J.test(f9e.className)) o9f.push(f9e);
    });
    d9g.value = o9f;
  });
  be9V.bqb0x = be9V.bqb0x.eF0x(function(d9g) {
    var gj1x = d9g.args[0],
      nP4T = d9g.args[1];
    if (gj1x.selectionStart == null) {
      d9g.stopped = !0;
      var dc0x = gj1x.createTextRange();
      dc0x.collapse(!0);
      dc0x.moveStart('character', nP4T.start);
      dc0x.moveEnd('character', nP4T.end - nP4T.start);
      dc0x.select();
      gj1x.focus();
    }
  });
  be9V.brN1x = be9V.brN1x.eF0x(function(d9g) {
    var gj1x = d9g.args[0];
    gj1x.focus();
    if (gj1x.selectionStart == null) {
      d9g.stopped = !0;
      var bHx4B = document.selection.createRange();
      var bHy4C = gj1x.createTextRange();
      bHy4C.moveToBookmark(bHx4B.getBookmark());
      var bix8p = gj1x.createTextRange();
      bix8p.collapse(!0);
      bix8p.setEndPoint('EndToStart', bHy4C);
      var hC2x = bix8p.text.length;
      d9g.value = {
        start: hC2x,
        end: hC2x + bHx4B.text.length,
      };
    }
  });
  be9V.bfX8P = be9V.bfX8P.eF0x(function(d9g) {
    if (!!window.XMLSerializer) return;
    d9g.stopped = !0;
    var F9w = d9g.args[0];
    d9g.value = F9w.xml != null ? F9w.xml : F9w.outHTML;
  });
  be9V.bgk8c = (function() {
    var Vm4q = ['Msxml2.DOMDocument.6.0', 'Msxml2.DOMDocument.3.0'];
    var bWV9M = function() {
      try {
        for (var i = 0, l = Vm4q.length; i < l; i++) return new ActiveXObject(Vm4q[i]);
      } catch (ex) {
        return null;
      }
    };
    return be9V.bgk8c.eF0x(function(d9g) {
      if (!!window.DOMParser) return;
      d9g.stopped = !0;
      var nX4b = bWV9M();
      if (!!nX4b && nX4b.loadXML(d9g.args[0]) && !nX4b.parseError.errorCode)
        d9g.value = nX4b.documentElement;
    });
  })();
  be9V.Dd8V = (function() {
    var jI2x = {
      input: 'propertychange',
      load: 'readystatechange',
    };
    for (var x in jI2x) bhy8q[jI2x[x]] = !0;
    var bXu9l = function(F9w, u9l) {
      if ('on' + u9l in F9w) return null;
      return jI2x[u9l] || '';
    };
    var bXY9P = function(u9l, dx0x) {
      var cN0x = dx0x;
      switch (u9l) {
        case 'readystatechange':
          cN0x = function(d9g) {
            var F9w = h9c.W9N(d9g) || this;
            if (F9w.readyState == 'loaded' || F9w.readyState == 'complete') {
              d9g.target = F9w;
              dx0x.call(F9w, d9g);
            }
          };
          break;
        case 'propertychange':
          cN0x = function(d9g) {
            var F9w = h9c.W9N(d9g) || this;
            if ('value' in F9w && d9g.propertyName == 'value') {
              d9g.target = F9w;
              dx0x.call(F9w, d9g);
            }
          };
          break;
      }
      return cN0x;
    };
    return be9V.Dd8V.eF0x(
      function(d9g) {
        var bf9W = be9V.bic8U.apply(be9V, d9g.args);
        if (!bf9W) {
          d9g.stopped = !0;
          return;
        }
        var u9l = bXu9l(bf9W[0], bf9W[1]);
        if (!!u9l) {
          d9g.stopped = !0;
          bf9W[4] = bf9W[1];
          bf9W[1] = u9l;
          if (!!bf9W[2]) {
            bf9W[5] = bf9W[2];
            bf9W[2] = bXY9P(bf9W[1], bf9W[2]);
          }
          d9g.value = bf9W;
        }
      },
      function(d9g) {
        var bf9W = d9g.value;
        if (!bf9W[0] || !k9b.gJ2x(bf9W[2])) return;
        if (!k9b.gJ2x(bf9W[5])) bf9W[5] = bf9W[2];
        bf9W[2] = bf9W[2].g9d(bf9W[0]);
      }
    );
  })();
  be9V.bjO9F = be9V.bjO9F.eF0x(function(d9g) {
    var bf9W = d9g.args;
    if (!!bhy8q[bf9W[1]] || !document.addEventListener) {
      d9g.stopped = !0;
      bf9W[0].attachEvent('on' + bf9W[1], bf9W[2]);
    }
  });
  be9V.bea7T = be9V.bea7T.eF0x(function(d9g) {
    var bf9W = d9g.args;
    if (!!bhy8q[bf9W[1]] || !document.removeEventListener) {
      d9g.stopped = !0;
      bf9W[0].detachEvent('on' + bf9W[1], bf9W[2]);
    }
  });
  be9V.bjT9K = be9V.bjT9K.eF0x(function(d9g) {
    if (!document.createEvent) {
      d9g.stopped = !0;
      var bf9W = d9g.args,
        bJN5S = document.createEventObject();
      NEJ.X(bJN5S, bf9W[2]);
      try {
        bf9W[0].fireEvent('on' + bf9W[1], bJN5S);
      } catch (ex) {
        console.error(ex.message);
        console.error(ex.stack);
      }
    }
  });
  be9V.blX9O = be9V.blX9O.eF0x(function(d9g) {
    var bf9W = d9g.args,
      V9M = bf9W[1].toLowerCase();
    if (V9M == 'opacity' && !(V9M in document.body.style)) {
      bf9W[1] = 'filter';
      bf9W[2] = 'alpha(opacity=' + bf9W[2] * 100 + ')';
    }
  });
  be9V.bqc0x = (function() {
    var fo1x = 30;
    return be9V.bqc0x.eF0x(function(d9g) {
      var F9w = d9g.args[0];
      if (!F9w.styleSheet) return;
      d9g.stopped = !0;
      var kA3x = d9g.args[1];
      var i9b = document.styleSheets;
      if (i9b.length > fo1x) {
        F9w = i9b[fo1x];
        kA3x = F9w.cssText + kA3x;
      } else {
        F9w = F9w.styleSheet;
      }
      F9w.cssText = kA3x;
    });
  })();
  be9V.brK0x = be9V.brK0x.eF0x(function(d9g) {
    var bf9W = d9g.args,
      Aa7T = bf9W[0].sheet;
    if (!!Aa7T) return;
    d9g.stopped = !0;
    var Aa7T = bf9W[0].styleSheet,
      bp9g = Aa7T.rules.length,
      bs9j = bf9W[1].split(/[\{\}]/);
    Aa7T.addRule(bs9j[0], bs9j[1], bp9g);
    d9g.value = Aa7T.rules[bp9g];
  });
  be9V.bto1x = (function() {
    var En9e = function(ec0x, d9g) {
      a8i.x9o(h9c.W9N(d9g), ec0x);
    };
    return be9V.bto1x.eF0x(function(d9g) {
      if (O9F.ds0x.release >= '4.0') return;
      var bf9W = d9g.args;
      if (bf9W[1] != 1) {
        h9c.s9j(bf9W[0], 'blur', En9e.g9d(null, bf9W[2]));
        bf9W[1] = -1;
      }
    });
  })();
  be9V.bdU7N = function(bdT7M) {
    return !0;
  };
  be9V.bvM1x = be9V.bvM1x.eF0x(
    function(d9g) {
      var bf9W = d9g.args,
        f9e = (bf9W[0].attributes || bb9S)[bf9W[1]];
      if (!!f9e) {
        d9g.stopped = !0;
        d9g.value = f9e.value;
      }
    },
    function(d9g) {
      var bf9W = d9g.args;
      if (bf9W[1] == 'maxlength' && d9g.value == 2147483647) d9g.value = '';
    }
  );
  if (O9F.ds0x.release < 5) {
    be9V.bhR8J = (function() {
      var ei0x,
        eL0x,
        kz3x = [],
        bkC9t = 'cb-' + +new Date(),
        bo9f =
          '<script>parent.nej.h["' +
          bkC9t +
          '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' +
          'ipt>';
      var bJT5Y = function() {
        ei0x = window.clearTimeout(ei0x);
        if (!kz3x.length) return;
        var dP0x = kz3x.shift();
        try {
          var we6Y = eL0x.contentWindow.document;
          we6Y.open();
          we6Y.write('<head><title>');
          we6Y.write(document.title);
          we6Y.write('</title>');
          we6Y.write(bo9f.replace('#<HASH>', encodeURIComponent(dP0x)));
          we6Y.write('</head><body></body>');
          if (location.hostname != document.domain) we6Y.domain = document.domain;
          we6Y.close();
          be9V[bkC9t] = !1;
        } catch (ex) {
          console.log(ex.message || ex);
          kz3x.unshift(dP0x);
        }
        ei0x = window.setTimeout(bJT5Y, 50);
      };
      return be9V.bhR8J.eF0x(function(d9g) {
        d9g.stopped = !0;
        var dP0x = d9g.args[0];
        if (!!be9V[bkC9t] || (!eL0x && !dP0x)) return;
        kz3x.push(dP0x);
        if (!eL0x) eL0x = a8i.bdx7q();
        bJT5Y();
      });
    })();
  }
  try {
    document.execCommand('BackgroundImageCache', !1, !0);
  } catch (e) {}
})();
(function() {
  var c9h = NEJ.P,
    h9c = c9h('nej.v'),
    be9V = c9h('nej.h'),
    O9F = c9h('nej.p'),
    bdw7p = O9F.bAk3x;
  if (O9F.nq3x.gecko) return;
  var UP4T = function() {
    bdw7p.css3d = bdw7p.css3d || 'MozPerspective' in document.body.style;
    if (!document.body.insertAdjacentElement)
      HTMLElement.prototype.insertAdjacentElement = function(iU2x, F9w) {
        if (!iU2x || !F9w) return;
        switch (iU2x) {
          case 'beforeEnd':
            this.appendChild(F9w);
            return;
          case 'beforeBegin':
            this.parentNode.insertBefore(F9w, this);
            return;
          case 'afterBegin':
            !this.firstChild
              ? this.appendChild(F9w)
              : this.insertBefore(F9w, this.firstChild);
            return;
          case 'afterEnd':
            !this.nextSibling
              ? this.parentNode.appendChild(F9w)
              : this.parentNode.insertBefore(F9w, this.nextSibling);
            return;
        }
      };
    if (!('innerText' in document.body)) {
      HTMLElement.prototype['__defineGetter__']('innerText', function() {
        return this.textContent;
      });
      HTMLElement.prototype['__defineSetter__']('innerText', function(bo9f) {
        this.textContent = bo9f;
      });
    }
  };
  be9V.Dd8V = (function() {
    var gH2x = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
    return be9V.Dd8V.eF0x(function(d9g) {
      var bf9W = d9g.args;
      if (gH2x.test(bf9W[1] || '')) {
        d9g.stopped = !0;
        d9g.value = bf9W;
      }
    });
  })();
  be9V.bVw8o = (function() {
    var caO0x = function(d9g) {
      h9c.bh9Y(d9g);
      h9c.W9N(d9g).control.click();
    };
    return function(F9w) {
      h9c.s9j(F9w, 'click', caO0x);
    };
  })();
  UP4T();
})();
(function() {
  var c9h = NEJ.P,
    a8i = c9h('nej.e'),
    be9V = c9h('nej.h');
  var bdu7n = (function() {
    var mC3x = !!document.body.classList;
    return function() {
      return mC3x;
    };
  })();
  var bKb5g = (function() {
    var df0x = /\s+/g;
    return function(fJ1x) {
      fJ1x = (fJ1x || '').trim();
      return !fJ1x
        ? null
        : new RegExp('(\\s|^)(?:' + fJ1x.replace(df0x, '|') + ')(?=\\s|$)', 'g');
    };
  })();
  be9V.RE3x = be9V.RE3x.eF0x(function(d9g) {
    if (bdu7n()) return;
    d9g.stopped = !0;
    var bf9W = d9g.args,
      F9w = a8i.B9s(bf9W[0]);
    if (!F9w || (!bf9W[1] && !bf9W[2])) return;
    var fJ1x = F9w.className || '';
    var Iq0x = ' ' + (bf9W[2] || ''),
      Ir0x = bKb5g((bf9W[1] || '') + Iq0x);
    !!Ir0x && (fJ1x = fJ1x.replace(Ir0x, '$1'));
    F9w.className = (fJ1x + Iq0x).replace(/\s+/g, ' ').trim();
  });
  be9V.bke9V = be9V.bke9V.eF0x(function(d9g) {
    if (bdu7n()) return;
    d9g.stopped = !0;
    var bf9W = d9g.args;
    be9V.RE3x(bf9W[0], '', bf9W[1]);
  });
  be9V.blC9t = be9V.blC9t.eF0x(function(d9g) {
    if (bdu7n()) return;
    d9g.stopped = !0;
    var bf9W = d9g.args;
    be9V.RE3x(bf9W[0], bf9W[1], '');
  });
  be9V.boY0x = be9V.boY0x.eF0x(function(d9g) {
    if (bdu7n()) return;
    d9g.stopped = !0;
    var bf9W = d9g.args,
      F9w = a8i.B9s(bf9W[0]);
    if (!F9w) {
      d9g.value = !1;
      return;
    }
    var df0x = bKb5g(bf9W[1]);
    d9g.value = !df0x ? !1 : df0x.test(F9w.className || '');
  });
})();
(function() {
  var c9h = NEJ.P,
    O9F = c9h('nej.p'),
    be9V = c9h('nej.h');
  if (O9F.nq3x.webkit) return;
  be9V.bdU7N = function(bdT7M) {
    return !0;
  };
})();
(function() {
  var c9h = NEJ.P,
    be9V = c9h('nej.h'),
    a8i = c9h('nej.e'),
    k9b = c9h('nej.u'),
    h9c = c9h('nej.v'),
    cY0x = c9h('nej.x'),
    R9I = {};
  var bKu5z = function(F9w) {
    F9w = a8i.B9s(F9w);
    if (!F9w || !R9I[F9w.id]) return;
    var bds7l = !0,
      C9t = F9w.id;
    k9b.eD0x(R9I[C9t], function() {
      bds7l = !1;
      return !0;
    });
    if (bds7l) delete R9I[C9t];
  };
  h9c.s9j = cY0x.s9j = (function() {
    var cbW0x = function() {
      var bf9W = be9V.Dd8V.apply(be9V, arguments);
      if (!bf9W || !bf9W[2]) return;
      var uZ6T = a8i.lw3x(bf9W[0]),
        oO4S = R9I[uZ6T] || {};
      R9I[uZ6T] = oO4S;
      uZ6T = bf9W[4] || bf9W[1];
      var CK8C = oO4S[uZ6T] || [];
      oO4S[uZ6T] = CK8C;
      CK8C.push({
        type: bf9W[1],
        func: bf9W[2],
        capt: !!bf9W[3],
        sfun: bf9W[5] || bf9W[2],
      });
      return bf9W.slice(0, 4);
    };
    return function() {
      var bf9W = cbW0x.apply(null, arguments);
      if (!!bf9W) be9V.bjO9F.apply(be9V, bf9W);
      return this;
    };
  })();
  h9c.mv3x = cY0x.mv3x = (function() {
    var cci0x = function() {
      var wc6W = arguments,
        uZ6T = a8i.lw3x(wc6W[0]),
        oO4S = R9I[uZ6T],
        u9l = (wc6W[1] || '').toLowerCase(),
        d9g = wc6W[2];
      if (!oO4S || !u9l || !d9g) return;
      oO4S = oO4S[u9l];
      if (!oO4S) return;
      var ccC0x = !!wc6W[3],
        r9i = k9b.di0x(oO4S, function(jI2x) {
          return d9g == jI2x.sfun && ccC0x == jI2x.capt;
        });
      if (r9i < 0) return;
      var jI2x = oO4S.splice(r9i, 1)[0];
      return !jI2x ? null : [a8i.B9s(uZ6T), jI2x.type, jI2x.func, jI2x.capt];
    };
    return function() {
      var bf9W = cci0x.apply(null, arguments);
      if (!!bf9W) {
        be9V.bea7T.apply(be9V, bf9W);
        bKu5z(bf9W[0]);
      }
      return this;
    };
  })();
  h9c.he2x = cY0x.he2x = (function() {
    var bKQ5V = function() {
      var wc6W = arguments,
        uZ6T = a8i.lw3x(wc6W[0]),
        oO4S = R9I[uZ6T],
        CK8C = (wc6W[1] || '').toLowerCase();
      if (!oO4S || !CK8C) return;
      var F9w = a8i.B9s(uZ6T);
      k9b.nH4L(oO4S[CK8C], function(jI2x, r9i, i9b) {
        be9V.bea7T(F9w, jI2x.type, jI2x.func, jI2x.capt);
        i9b.splice(r9i, 1);
      });
      delete oO4S[CK8C];
    };
    var cdM0x = function(F9w) {
      F9w = a8i.B9s(F9w);
      if (!F9w) return;
      var C9t = F9w.id;
      k9b.eD0x(R9I[C9t], function(i9b, u9l) {
        bKQ5V(C9t, u9l);
      });
      delete R9I[C9t];
    };
    return function(F9w, u9l) {
      !u9l ? cdM0x(F9w) : bKQ5V(F9w, u9l);
      bKu5z(F9w);
      return this;
    };
  })();
  h9c.W9N = (function() {
    var bvd1x;
    var IH0x = function(V9M, F9w) {
      var bs9j = V9M.split(':');
      if (bs9j.length > 1) {
        if (!bvd1x)
          bvd1x = {
            c: a8i.bE0x,
            d: a8i.t9k,
            a: a8i.gy1x,
          };
        var II0x = bvd1x[bs9j[0]];
        if (!!II0x) return !!II0x(F9w, bs9j[1]);
        V9M = bs9j[1];
      }
      return !!a8i.gy1x(F9w, V9M) || !!a8i.t9k(F9w, V9M) || a8i.bE0x(F9w, V9M);
    };
    return function(d9g) {
      if (!d9g) return null;
      var F9w = d9g.target || d9g.srcElement,
        dW0x = arguments[1];
      if (!dW0x) return F9w;
      if (k9b.fH1x(dW0x)) dW0x = IH0x.g9d(null, dW0x);
      if (k9b.gJ2x(dW0x)) {
        while (F9w) {
          if (!!dW0x(F9w)) return F9w;
          F9w = F9w.parentNode;
        }
        return null;
      }
      return F9w;
    };
  })();
  h9c.bh9Y = function(d9g) {
    h9c.te5j(d9g);
    h9c.cr0x(d9g);
    return this;
  };
  h9c.te5j = function(d9g) {
    if (!!d9g) {
      !!d9g.stopPropagation ? d9g.stopPropagation() : (d9g.cancelBubble = !0);
    }
    return this;
  };
  h9c.cr0x = function(d9g) {
    if (!!d9g) {
      !!d9g.preventDefault ? d9g.preventDefault() : (d9g.returnValue = !1);
    }
    return this;
  };
  h9c.cGy7r = (function() {
    var qK4O = !1;
    var cdT0x = function() {
      if (qK4O) return;
      qK4O = !0;
      h9c.s9j(document, 'click', cec0x, !0);
    };
    var cec0x = function(d9g) {
      var F9w = h9c.W9N(d9g),
        cef1x = a8i.t9k(F9w, 'stopped');
      if (cef1x == 'true') {
        h9c.bh9Y(d9g);
        a8i.t9k(F9w, 'stopped', 'false');
      }
    };
    return function(d9g) {
      if (!d9g) return;
      if (d9g.type == 'click') {
        h9c.bh9Y(d9g);
        return;
      }
      cdT0x();
      a8i.t9k(h9c.W9N(d9g), 'stopped', 'true');
    };
  })();
  h9c.jB2x = function(d9g) {
    return d9g.pageX != null ? d9g.pageX : d9g.clientX + a8i.oE4I().scrollLeft;
  };
  h9c.mg3x = function(d9g) {
    return d9g.pageY != null ? d9g.pageY : d9g.clientY + a8i.oE4I().scrollTop;
  };
  h9c.z9q = cY0x.z9q = function(F9w, u9l, e9f) {
    var bf9W = be9V.Dd8V(F9w, u9l);
    if (!!bf9W) be9V.bjT9K(bf9W[0], bf9W[1], e9f);
    return this;
  };
  c9h('dbg').dumpEV = function() {
    return R9I;
  };
  cY0x.isChange = !0;
})();
(function() {
  var o = !0,
    w = null;
  (function(B) {
    function v(a) {
      if ('bug-string-char-index' == a) return 'a' != 'a'[0];
      var f,
        c = 'json' == a;
      if (c || 'json-stringify' == a || 'json-parse' == a) {
        if ('json-stringify' == a || c) {
          var d = k.stringify,
            b = 'function' == typeof d && l;
          if (b) {
            (f = function() {
              return 1;
            }).toJSON = f;
            try {
              b =
                '0' === d(0) &&
                '0' === d(new Number()) &&
                '""' == d(new String()) &&
                d(m) === r &&
                d(r) === r &&
                d() === r &&
                '1' === d(f) &&
                '[1]' == d([f]) &&
                '[null]' == d([r]) &&
                'null' == d(w) &&
                '[null,null,null]' == d([r, m, w]) &&
                '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' ==
                  d({
                    a: [f, o, !1, w, '\0\n\f\r\t'],
                  }) &&
                '1' === d(w, f) &&
                '[\n 1,\n 2\n]' == d([1, 2], w, 1) &&
                '"-271821-04-20T00:00:00.000Z"' == d(new Date(-8640000000000000)) &&
                '"+275760-09-13T00:00:00.000Z"' == d(new Date(8640000000000000)) &&
                '"-000001-01-01T00:00:00.000Z"' == d(new Date(-62198755200000)) &&
                '"1969-12-31T23:59:59.999Z"' == d(new Date(-1));
            } catch (n) {
              b = !1;
            }
          }
          if (!c) return b;
        }
        if ('json-parse' == a || c) {
          a = k.parse;
          if ('function' == typeof a)
            try {
              if (0 === a('0') && !a(!1)) {
                f = a('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                var e = 5 == f.a.length && 1 === f.a[0];
                if (e) {
                  try {
                    e = !a('"\t"');
                  } catch (g) {}
                  if (e)
                    try {
                      e = 1 !== a('01');
                    } catch (i) {}
                }
              }
            } catch (O) {
              e = !1;
            }
          if (!c) return e;
        }
        return b && e;
      }
    }
    var m = {}.toString,
      p,
      C,
      r,
      D = typeof define === 'function' && define.amd,
      k = 'object' == typeof exports && exports;
    k || D
      ? 'object' == typeof JSON && JSON
        ? k ? ((k.stringify = JSON.stringify), (k.parse = JSON.parse)) : (k = JSON)
        : D && (k = B.JSON = {})
      : (k = B.JSON || (B.JSON = {}));
    var l = new Date(-3509827334573292);
    try {
      l =
        -109252 == l.getUTCFullYear() &&
        0 === l.getUTCMonth() &&
        1 === l.getUTCDate() &&
        10 == l.getUTCHours() &&
        37 == l.getUTCMinutes() &&
        6 == l.getUTCSeconds() &&
        708 == l.getUTCMilliseconds();
    } catch (P) {}
    if (!v('json')) {
      var s = v('bug-string-char-index');
      if (!l)
        var t = Math.floor,
          J = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
          z = function(a, f) {
            return (
              J[f] +
              365 * (a - 1970) +
              t((a - 1969 + (f = +(f > 1))) / 4) -
              t((a - 1901 + f) / 100) +
              t((a - 1601 + f) / 400)
            );
          };
      if (!(p = {}.hasOwnProperty))
        p = function(a) {
          var f = {},
            c;
          if (
            ((f.__proto__ = w),
            (f.__proto__ = {
              toString: 1,
            }),
            f).toString != m
          )
            p = function(a) {
              var f = this.__proto__,
                a = a in ((this.__proto__ = w), this);
              this.__proto__ = f;
              return a;
            };
          else {
            c = f.constructor;
            p = function(a) {
              var f = (this.constructor || c).prototype;
              return a in this && !(a in f && this[a] === f[a]);
            };
          }
          f = w;
          return p.call(this, a);
        };
      var K = {
        boolean: 1,
        number: 1,
        string: 1,
        undefined: 1,
      };
      C = function(a, f) {
        var c = 0,
          b,
          h,
          n;
        (b = function() {
          this.valueOf = 0;
        }).prototype.valueOf = 0;
        h = new b();
        for (n in h) p.call(h, n) && c++;
        b = h = w;
        if (c)
          c =
            c == 2
              ? function(a, f) {
                  var c = {},
                    b = m.call(a) == '[object Function]',
                    d;
                  for (d in a)
                    !(b && d == 'prototype') &&
                      !p.call(c, d) &&
                      (c[d] = 1) &&
                      p.call(a, d) &&
                      f(d);
                }
              : function(a, f) {
                  var c = m.call(a) == '[object Function]',
                    b,
                    d;
                  for (b in a)
                    !(c && b == 'prototype') &&
                      p.call(a, b) &&
                      !(d = b === 'constructor') &&
                      f(b);
                  (d || p.call(a, (b = 'constructor'))) && f(b);
                };
        else {
          h = [
            'valueOf',
            'toString',
            'toLocaleString',
            'propertyIsEnumerable',
            'isPrototypeOf',
            'hasOwnProperty',
            'constructor',
          ];
          c = function(a, f) {
            var c = m.call(a) == '[object Function]',
              b,
              d;
            if ((d = !c))
              if ((d = typeof a.constructor != 'function')) {
                d = typeof a.hasOwnProperty;
                d = d == 'object' ? !!a.hasOwnProperty : !K[d];
              }
            d = d ? a.hasOwnProperty : p;
            for (b in a) !(c && b == 'prototype') && d.call(a, b) && f(b);
            for (c = h.length; (b = h[--c]); d.call(a, b) && f(b));
          };
        }
        c(a, f);
      };
      if (!v('json-stringify')) {
        var L = {
            92: '\\\\',
            34: '\\"',
            8: '\\b',
            12: '\\f',
            10: '\\n',
            13: '\\r',
            9: '\\t',
          },
          u = function(a, f) {
            return ('000000' + (f || 0)).slice(-a);
          },
          G = function(a) {
            var f = '"',
              b = 0,
              d = a.length,
              h = d > 10 && s,
              n;
            for (h && (n = a.split('')); b < d; b++) {
              var e = a.charCodeAt(b);
              switch (e) {
                case 8:
                case 9:
                case 10:
                case 12:
                case 13:
                case 34:
                case 92:
                  f = f + L[e];
                  break;
                default:
                  if (e < 32) {
                    f = f + ('\\u00' + u(2, e.toString(16)));
                    break;
                  }
                  f = f + (h ? n[b] : s ? a.charAt(b) : a[b]);
              }
            }
            return f + '"';
          },
          E = function(a, b, c, d, h, n, e) {
            var g = b[a],
              i,
              j,
              k,
              l,
              q,
              s,
              v,
              x,
              y;
            try {
              g = b[a];
            } catch (A) {}
            if (typeof g == 'object' && g) {
              i = m.call(g);
              if (i == '[object Date]' && !p.call(g, 'toJSON'))
                if (g > -1 / 0 && g < 1 / 0) {
                  if (z) {
                    k = t(g / 86400000);
                    for (i = t(k / 365.2425) + 1970 - 1; z(i + 1, 0) <= k; i++);
                    for (j = t((k - z(i, 0)) / 30.42); z(i, j + 1) <= k; j++);
                    k = 1 + k - z(i, j);
                    l = (g % 86400000 + 86400000) % 86400000;
                    q = t(l / 3600000) % 24;
                    s = t(l / 60000) % 60;
                    v = t(l / 1000) % 60;
                    l = l % 1000;
                  } else {
                    i = g.getUTCFullYear();
                    j = g.getUTCMonth();
                    k = g.getUTCDate();
                    q = g.getUTCHours();
                    s = g.getUTCMinutes();
                    v = g.getUTCSeconds();
                    l = g.getUTCMilliseconds();
                  }
                  g =
                    (i <= 0 || i >= 10000
                      ? (i < 0 ? '-' : '+') + u(6, i < 0 ? -i : i)
                      : u(4, i)) +
                    '-' +
                    u(2, j + 1) +
                    '-' +
                    u(2, k) +
                    'T' +
                    u(2, q) +
                    ':' +
                    u(2, s) +
                    ':' +
                    u(2, v) +
                    '.' +
                    u(3, l) +
                    'Z';
                } else g = w;
              else if (
                typeof g.toJSON == 'function' &&
                ((i != '[object Number]' &&
                  i != '[object String]' &&
                  i != '[object Array]') ||
                  p.call(g, 'toJSON'))
              )
                g = g.toJSON(a);
            }
            c && (g = c.call(b, a, g));
            if (g === w) return 'null';
            i = m.call(g);
            if (i == '[object Boolean]') return '' + g;
            if (i == '[object Number]') return g > -1 / 0 && g < 1 / 0 ? '' + g : 'null';
            if (i == '[object String]') return G('' + g);
            if (typeof g == 'object') {
              for (a = e.length; a--; ) if (e[a] === g) throw TypeError();
              e.push(g);
              x = [];
              b = n;
              n = n + h;
              if (i == '[object Array]') {
                j = 0;
                for (a = g.length; j < a; y || (y = o), j++) {
                  i = E(j, g, c, d, h, n, e);
                  x.push(i === r ? 'null' : i);
                }
                a = y
                  ? h
                    ? '[\n' + n + x.join(',\n' + n) + '\n' + b + ']'
                    : '[' + x.join(',') + ']'
                  : '[]';
              } else {
                C(d || g, function(a) {
                  var b = E(a, g, c, d, h, n, e);
                  b !== r && x.push(G(a) + ':' + (h ? ' ' : '') + b);
                  y || (y = o);
                });
                a = y
                  ? h
                    ? '{\n' + n + x.join(',\n' + n) + '\n' + b + '}'
                    : '{' + x.join(',') + '}'
                  : '{}';
              }
              e.pop();
              return a;
            }
          };
        k.stringify = function(a, b, c) {
          var d, h, j;
          if (typeof b == 'function' || (typeof b == 'object' && b))
            if (m.call(b) == '[object Function]') h = b;
            else if (m.call(b) == '[object Array]') {
              j = {};
              for (
                var e = 0, g = b.length, i;
                e < g;
                i = b[e++],
                  (m.call(i) == '[object String]' || m.call(i) == '[object Number]') &&
                    (j[i] = 1)
              );
            }
          if (c)
            if (m.call(c) == '[object Number]') {
              if ((c = c - c % 1) > 0) {
                d = '';
                for (c > 10 && (c = 10); d.length < c; d = d + ' ');
              }
            } else
              m.call(c) == '[object String]' && (d = c.length <= 10 ? c : c.slice(0, 10));
          return E('', ((i = {}), (i[''] = a), i), h, j, d, '', []);
        };
      }
      if (!v('json-parse')) {
        var M = String.fromCharCode,
          N = {
            92: '\\',
            34: '"',
            47: '/',
            98: '',
            116: '\t',
            110: '\n',
            102: '\f',
            114: '\r',
          },
          b,
          A,
          j = function() {
            b = A = w;
            throw SyntaxError();
          },
          q = function() {
            for (var a = A, f = a.length, c, d, h, k, e; b < f; ) {
              e = a.charCodeAt(b);
              switch (e) {
                case 9:
                case 10:
                case 13:
                case 32:
                  b++;
                  break;
                case 123:
                case 125:
                case 91:
                case 93:
                case 58:
                case 44:
                  c = s ? a.charAt(b) : a[b];
                  b++;
                  return c;
                case 34:
                  c = '@';
                  for (b++; b < f; ) {
                    e = a.charCodeAt(b);
                    if (e < 32) j();
                    else if (e == 92) {
                      e = a.charCodeAt(++b);
                      switch (e) {
                        case 92:
                        case 34:
                        case 47:
                        case 98:
                        case 116:
                        case 110:
                        case 102:
                        case 114:
                          c = c + N[e];
                          b++;
                          break;
                        case 117:
                          d = ++b;
                          for (h = b + 4; b < h; b++) {
                            e = a.charCodeAt(b);
                            (e >= 48 && e <= 57) ||
                              (e >= 97 && e <= 102) ||
                              (e >= 65 && e <= 70) ||
                              j();
                          }
                          c = c + M('0x' + a.slice(d, b));
                          break;
                        default:
                          j();
                      }
                    } else {
                      if (e == 34) break;
                      e = a.charCodeAt(b);
                      for (d = b; e >= 32 && e != 92 && e != 34; ) e = a.charCodeAt(++b);
                      c = c + a.slice(d, b);
                    }
                  }
                  if (a.charCodeAt(b) == 34) {
                    b++;
                    return c;
                  }
                  j();
                default:
                  d = b;
                  if (e == 45) {
                    k = o;
                    e = a.charCodeAt(++b);
                  }
                  if (e >= 48 && e <= 57) {
                    for (
                      e == 48 && ((e = a.charCodeAt(b + 1)), e >= 48 && e <= 57) && j();
                      b < f && ((e = a.charCodeAt(b)), e >= 48 && e <= 57);
                      b++
                    );
                    if (a.charCodeAt(b) == 46) {
                      for (
                        h = ++b;
                        h < f && ((e = a.charCodeAt(h)), e >= 48 && e <= 57);
                        h++
                      );
                      h == b && j();
                      b = h;
                    }
                    e = a.charCodeAt(b);
                    if (e == 101 || e == 69) {
                      e = a.charCodeAt(++b);
                      (e == 43 || e == 45) && b++;
                      for (
                        h = b;
                        h < f && ((e = a.charCodeAt(h)), e >= 48 && e <= 57);
                        h++
                      );
                      h == b && j();
                      b = h;
                    }
                    return +a.slice(d, b);
                  }
                  k && j();
                  if (a.slice(b, b + 4) == 'true') {
                    b = b + 4;
                    return o;
                  }
                  if (a.slice(b, b + 5) == 'false') {
                    b = b + 5;
                    return false;
                  }
                  if (a.slice(b, b + 4) == 'null') {
                    b = b + 4;
                    return w;
                  }
                  j();
              }
            }
            return '$';
          },
          F = function(a) {
            var b, c;
            a == '$' && j();
            if (typeof a == 'string') {
              if ((s ? a.charAt(0) : a[0]) == '@') return a.slice(1);
              if (a == '[') {
                for (b = []; ; c || (c = o)) {
                  a = q();
                  if (a == ']') break;
                  if (c)
                    if (a == ',') {
                      a = q();
                      a == ']' && j();
                    } else j();
                  a == ',' && j();
                  b.push(F(a));
                }
                return b;
              }
              if (a == '{') {
                for (b = {}; ; c || (c = o)) {
                  a = q();
                  if (a == '}') break;
                  if (c)
                    if (a == ',') {
                      a = q();
                      a == '}' && j();
                    } else j();
                  (a == ',' ||
                    typeof a != 'string' ||
                    (s ? a.charAt(0) : a[0]) != '@' ||
                    q() != ':') &&
                    j();
                  b[a.slice(1)] = F(q());
                }
                return b;
              }
              j();
            }
            return a;
          },
          I = function(a, b, c) {
            c = H(a, b, c);
            c === r ? delete a[b] : (a[b] = c);
          },
          H = function(a, b, c) {
            var d = a[b],
              h;
            if (typeof d == 'object' && d)
              if (m.call(d) == '[object Array]') for (h = d.length; h--; ) I(d, h, c);
              else
                C(d, function(a) {
                  I(d, a, c);
                });
            return c.call(a, b, d);
          };
        k.parse = function(a, f) {
          var c, d;
          b = 0;
          A = '' + a;
          c = F(q());
          q() != '$' && j();
          b = A = w;
          return f && m.call(f) == '[object Function]'
            ? H(((d = {}), (d[''] = c), d), '', f)
            : c;
        };
      }
    }
    D &&
      define(function() {
        return k;
      });
  })(this);
})();
(function() {
  var c9h = NEJ.P,
    O9F = c9h('nej.p');
  if (O9F.nq3x.trident0) return;
  JSON.parse = JSON.parse.eF0x(function(d9g) {
    var cL0x = d9g.args[0] || '';
    if (cL0x.length >= 500000) {
      d9g.stopped = !0;
      d9g.value = eval('(' + cL0x + ')');
    }
  });
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    br9i = NEJ.F,
    ek0x = c9h('nej.g'),
    a8i = c9h('nej.e'),
    k9b = c9h('nej.u'),
    h9c = c9h('nej.v'),
    be9V = c9h('nej.h'),
    cY0x = c9h('nej.x'),
    IK0x,
    bhZ8R = {},
    R9I = document.createDocumentFragment();
  a8i.lw3x = cY0x.lw3x = function(F9w) {
    F9w = a8i.B9s(F9w);
    if (!F9w) return;
    var C9t = !!F9w.id ? F9w.id : 'auto-id-' + k9b.Pn2x(16);
    F9w.id = C9t;
    if (a8i.B9s(C9t) != F9w) bhZ8R[C9t] = F9w;
    return C9t;
  };
  a8i.B9s = cY0x.B9s = function(F9w) {
    var f9e = bhZ8R['' + F9w];
    if (!!f9e) return f9e;
    if (!k9b.fH1x(F9w) && !k9b.sV5a(F9w)) return F9w;
    return document.getElementById(F9w);
  };
  a8i.dj0x = cY0x.dj0x = function(F9w, ec0x) {
    F9w = a8i.B9s(F9w);
    if (!F9w) return null;
    var i9b = be9V.bka9R(F9w);
    if (!!ec0x)
      k9b.nH4L(i9b, function(f9e, r9i) {
        if (!a8i.bE0x(f9e, ec0x)) i9b.splice(r9i, 1);
      });
    return i9b;
  };
  a8i.H9y = cY0x.H9y = function(F9w, fJ1x) {
    F9w = a8i.B9s(F9w);
    return !F9w ? null : be9V.bkb9S(F9w, fJ1x.trim());
  };
  a8i.bLt5y = cY0x.bLt5y = function(F9w) {
    F9w = a8i.B9s(F9w);
    if (!!F9w) {
      F9w = F9w.parentNode;
      while (!!F9w) {
        if (F9w.scrollHeight > F9w.clientHeight) break;
        F9w = F9w.parentNode;
      }
      if (!!F9w) return F9w;
    }
    var oO4S = document.body.scrollHeight,
      CK8C = document.documentElement.scrollHeight;
    return CK8C >= oO4S ? document.documentElement : document.body;
  };
  a8i.oE4I = (function() {
    var bLu5z = function(i9b) {
      var o9f = 0;
      k9b.bd9U(i9b, function(eG0x) {
        if (!eG0x) return;
        if (!o9f) {
          o9f = eG0x;
        } else {
          o9f = Math.min(o9f, eG0x);
        }
      });
      return o9f;
    };
    return function(we6Y) {
      var IP0x = we6Y || document,
        CF8x = IP0x.body,
        CE8w = IP0x.documentElement,
        o9f = {
          scrollTop: Math.max(CF8x.scrollTop, CE8w.scrollTop),
          scrollLeft: Math.max(CF8x.scrollLeft, CE8w.scrollLeft),
          clientWidth: bLu5z([
            CF8x.clientWidth,
            CF8x.offsetWidth,
            CE8w.clientWidth,
            CE8w.offsetWidth,
          ]),
          clientHeight: bLu5z([
            CF8x.clientHeight,
            CF8x.offsetHeight,
            CE8w.clientHeight,
            CE8w.offsetHeight,
          ]),
        };
      o9f.scrollWidth = Math.max(o9f.clientWidth, CF8x.scrollWidth, CE8w.scrollWidth);
      o9f.scrollHeight = Math.max(o9f.clientHeight, CF8x.scrollHeight, CE8w.scrollHeight);
      return o9f;
    };
  })();
  a8i.cGr7k = function(fo1x, pd4h) {
    var o9f = NEJ.X({}, pd4h),
      bLv5A = fo1x.width / fo1x.height,
      bcY7R = pd4h.width / pd4h.height;
    if (bLv5A > bcY7R && pd4h.height > fo1x.height) {
      o9f.height = fo1x.height;
      o9f.width = o9f.height * bcY7R;
    }
    if (bLv5A < bcY7R && pd4h.width > fo1x.width) {
      o9f.width = fo1x.width;
      o9f.height = o9f.width / bcY7R;
    }
    return o9f;
  };
  a8i.cGp7i = (function() {
    var df0x = /\s+/;
    var ud5i = {
      left: function() {
        return 0;
      },
      center: function(hB2x, pd4h) {
        return (hB2x.width - pd4h.width) / 2;
      },
      right: function(hB2x, pd4h) {
        return hB2x.width - pd4h.width;
      },
      top: function() {
        return 0;
      },
      middle: function(hB2x, pd4h) {
        return (hB2x.height - pd4h.height) / 2;
      },
      bottom: function(hB2x, pd4h) {
        return hB2x.height - pd4h.height;
      },
    };
    return function(hB2x, pd4h, ob4f) {
      var o9f = {},
        bs9j = (ob4f || '').split(df0x),
        gz1x = ud5i[bs9j[1]] || ud5i.middle,
        gU2x = ud5i[bs9j[0]] || ud5i.center;
      o9f.top = gz1x(hB2x, pd4h);
      o9f.left = gU2x(hB2x, pd4h);
      return o9f;
    };
  })();
  a8i.tp5u = cY0x.tp5u = function(F9w, ec0x) {
    be9V.bpF0x(F9w, ec0x || a8i.t9k(F9w, 'hover') || 'js-hover');
    return this;
  };
  a8i.IT0x = cY0x.IT0x = function(F9w) {
    F9w = a8i.B9s(F9w);
    if (!F9w) return;
    be9V.bpM0x(F9w);
  };
  a8i.cej1x = cY0x.cej1x = (function() {
    var R9I = {},
      bLw5B = 2;
    var ces1x = function(C9t, ec0x, d9g) {
      R9I[C9t] = [h9c.jB2x(d9g), h9c.mg3x(d9g)];
      a8i.y9p(C9t, ec0x);
    };
    var ceW1x = function(C9t, ec0x, d9g) {
      var bM0x = R9I[C9t];
      if (!k9b.eI0x(bM0x)) return;
      var cfd1x = Math.abs(h9c.jB2x(d9g) - bM0x[0]),
        cgS1x = Math.abs(h9c.mg3x(d9g) - bM0x[1]);
      if (cfd1x > bLw5B || cgS1x > bLw5B) bpC0x(C9t, ec0x);
    };
    var bpC0x = function(C9t, ec0x) {
      if (k9b.eI0x(R9I[C9t])) {
        R9I[C9t] = -1;
        a8i.x9o(C9t, ec0x);
      }
    };
    return function(F9w, ec0x) {
      var C9t = a8i.lw3x(F9w);
      if (!C9t || R9I[C9t] != null) return;
      R9I[C9t] = -1;
      ec0x = ec0x || a8i.t9k(C9t, 'highlight') || 'js-highlight';
      h9c.s9j(C9t, 'touchstart', ces1x.g9d(null, C9t, ec0x));
      h9c.s9j(document, 'touchmove', ceW1x.g9d(null, C9t, ec0x));
      h9c.s9j(document, 'touchend', bpC0x.g9d(null, C9t, ec0x));
      h9c.s9j(document, 'touchcancel', bpC0x.g9d(null, C9t, ec0x));
    };
  })();
  a8i.Cy8q = cY0x.Cy8q = (function() {
    var cgY1x = function(C9t, ec0x, cjy2x) {
      var F9w = a8i.B9s(C9t),
        d9g = {
          clazz: ec0x,
          target: F9w,
        };
      if (a8i.bE0x(F9w, ec0x)) {
        d9g.toggled = !1;
        a8i.x9o(F9w, ec0x);
      } else {
        d9g.toggled = !0;
        a8i.y9p(F9w, ec0x);
      }
      cjy2x.call(null, d9g);
    };
    return function(F9w, e9f) {
      F9w = a8i.B9s(F9w);
      if (!!F9w) {
        var ik2x = {
          ontoggle: br9i,
          clazz: 'js-toggle',
          element: F9w.parentNode,
        };
        if (k9b.fH1x(e9f)) {
          var f9e = a8i.B9s(e9f);
          !!f9e ? (ik2x.element = f9e) : (ik2x.clazz = e9f);
        } else {
          NEJ.EX(ik2x, e9f);
          ik2x.element = a8i.B9s(ik2x.element);
        }
        var C9t = a8i.lw3x(ik2x.element);
        h9c.s9j(F9w, 'click', cgY1x.g9d(null, C9t, ik2x.clazz, ik2x.ontoggle || br9i));
      }
      return this;
    };
  })();
  a8i.ms3x = cY0x.ms3x = function(F9w, e9f) {
    F9w = a8i.B9s(F9w);
    if (!F9w) return;
    var fj1x = 0,
      ec0x = 'js-focus';
    if (k9b.sV5a(e9f)) {
      fj1x = e9f;
    } else if (k9b.fH1x(e9f)) {
      ec0x = e9f;
    } else if (k9b.lO3x(e9f)) {
      fj1x = e9f.mode || fj1x;
      ec0x = e9f.clazz || ec0x;
    }
    var D9u = parseInt(a8i.t9k(F9w, 'mode'));
    if (!isNaN(D9u)) fj1x = D9u;
    D9u = a8i.t9k(F9w, 'focus');
    if (!!D9u) ec0x = D9u;
    be9V.bto1x(F9w, fj1x, ec0x);
    return this;
  };
  a8i.dh0x = (function() {
    var bz0x = {
      a: {
        href: '#',
        hideFocus: !0,
      },
      style: {
        type: 'text/css',
      },
      link: {
        type: 'text/css',
        rel: 'stylesheet',
      },
      iframe: {
        frameBorder: 0,
      },
      script: {
        defer: !0,
        type: 'text/javascript',
      },
    };
    return function(fw1x, fJ1x, bI0x) {
      var F9w = document.createElement(fw1x);
      NEJ.X(F9w, bz0x[fw1x.toLowerCase()]);
      if (!!fJ1x) F9w.className = fJ1x;
      bI0x = a8i.B9s(bI0x);
      if (!!bI0x) bI0x.appendChild(F9w);
      return F9w;
    };
  })();
  a8i.bdx7q = (function() {
    var cjQ2x = function() {
      if (location.hostname == document.domain) return 'about:blank';
      return (
        'javascript:(function(){document.open();document.domain="' +
        document.domain +
        '";document.close();})();'
      );
    };
    var cly2x = function(V9M) {
      V9M = V9M.trim();
      if (!V9M) return a8i.dh0x('iframe');
      var eL0x;
      try {
        eL0x = document.createElement('<iframe name="' + V9M + '"></iframe>');
        eL0x.frameBorder = 0;
      } catch (e) {
        eL0x = a8i.dh0x('iframe');
        eL0x.name = V9M;
      }
      return eL0x;
    };
    return function(e9f) {
      e9f = e9f || bb9S;
      var eL0x = cly2x(e9f.name || '');
      if (!e9f.visible) eL0x.style.display = 'none';
      if (k9b.gJ2x(e9f.onload))
        h9c.s9j(eL0x, 'load', function(d9g) {
          if (!eL0x.src) return;
          h9c.he2x(eL0x, 'load');
          e9f.onload(d9g);
        });
      var bI0x = e9f.parent;
      if (k9b.gJ2x(bI0x)) {
        try {
          bI0x(eL0x);
        } catch (e) {}
      } else {
        (a8i.B9s(bI0x) || document.body).appendChild(eL0x);
      }
      var cS0x = e9f.src || cjQ2x();
      window.setTimeout(function() {
        eL0x.src = cS0x;
      }, 0);
      return eL0x;
    };
  })();
  a8i.cJ0x = cY0x.cJ0x = (function() {
    var bOp6j = function(zJ7C) {
      zJ7C.src = ek0x.blV9M;
    };
    var bOE6y = function(ej0x) {
      ej0x.src = 'about:blank';
    };
    return function(F9w, cnp3x) {
      F9w = a8i.B9s(F9w);
      if (!F9w) return this;
      if (!cnp3x) h9c.he2x(F9w);
      delete bhZ8R[F9w.id];
      var fw1x = F9w.tagName;
      if (fw1x == 'IFRAME') {
        bOE6y(F9w);
      } else if (fw1x == 'IMG') {
        bOp6j(F9w);
      } else if (!!F9w.getElementsByTagName) {
        k9b.bd9U(F9w.getElementsByTagName('img'), bOp6j);
        k9b.bd9U(F9w.getElementsByTagName('iframe'), bOE6y);
      }
      if (!!F9w.parentNode) {
        F9w.parentNode.removeChild(F9w);
      }
      return this;
    };
  })();
  a8i.mu3x = cY0x.mu3x = function(F9w) {
    F9w = a8i.B9s(F9w);
    if (!!F9w) R9I.appendChild(F9w);
    return this;
  };
  a8i.bPh6b = cY0x.bPh6b = function(F9w) {
    F9w = a8i.B9s(F9w);
    if (!F9w) return;
    k9b.nH4L(F9w.childNodes, function(f9e) {
      a8i.cJ0x(f9e);
    });
  };
  a8i.Ja0x = cY0x.Ja0x = (function() {
    var ec0x,
      gH2x = /\s+/;
    var cnX3x = function() {
      if (!!ec0x) return;
      ec0x = a8i.sK5P(
        '.#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}'
      );
      a8i.bPn6h();
    };
    return function(F9w, e9f) {
      F9w = a8i.B9s(F9w);
      if (!F9w) return;
      cnX3x();
      e9f = e9f || bb9S;
      var bI0x = F9w.parentNode;
      if (!a8i.bE0x(bI0x, ec0x)) {
        bI0x = a8i.dh0x('span', ec0x);
        F9w.insertAdjacentElement('beforeBegin', bI0x);
        bI0x.appendChild(F9w);
      }
      var bPo6i = e9f.nid || '',
        f9e = a8i.H9y(bI0x, bPo6i || ec0x + '-show')[0];
      if (!f9e) {
        var dZ0x = ((e9f.clazz || '') + ' ' + bPo6i).trim();
        dZ0x = ec0x + '-show' + (!dZ0x ? '' : ' ') + dZ0x;
        f9e = a8i.dh0x(e9f.tag || 'span', dZ0x);
        bI0x.appendChild(f9e);
      }
      var dZ0x = e9f.clazz;
      if (!!dZ0x) {
        dZ0x = (dZ0x || '').trim().split(gH2x)[0] + '-parent';
        a8i.y9p(bI0x, dZ0x);
      }
      return f9e;
    };
  })();
  a8i.t9k = cY0x.t9k = (function() {
    var bfo8g = {},
      fw1x = 'data-',
      df0x = /\-(.{1})/gi;
    var Dz8r = function(F9w) {
      var C9t = a8i.lw3x(F9w);
      if (!!bfo8g[C9t]) return;
      var bz0x = {};
      k9b.bd9U(F9w.attributes, function(f9e) {
        var J9A = f9e.nodeName;
        if (J9A.indexOf(fw1x) != 0) return;
        J9A = J9A.replace(fw1x, '').replace(df0x, function($1, $2) {
          return $2.toUpperCase();
        });
        bz0x[J9A] = f9e.nodeValue || '';
      });
      bfo8g[C9t] = bz0x;
    };
    return function(F9w, J9A, D9u) {
      F9w = a8i.B9s(F9w);
      if (!F9w) return null;
      var bcB7u = F9w.dataset;
      if (!bcB7u) {
        Dz8r(F9w);
        bcB7u = bfo8g[F9w.id];
      }
      if (D9u !== undefined) bcB7u[J9A] = D9u;
      return bcB7u[J9A];
    };
  })();
  a8i.gy1x = cY0x.gy1x = function(F9w, V9M, D9u) {
    F9w = a8i.B9s(F9w);
    if (!F9w) return '';
    if (D9u !== undefined && !!F9w.setAttribute) F9w.setAttribute(V9M, D9u);
    return be9V.bvM1x(F9w, V9M);
  };
  a8i.nI4M = function(dQ0x) {
    var sx5C = document.createElement('div');
    sx5C.innerHTML = dQ0x;
    var i9b = a8i.dj0x(sx5C);
    return i9b.length > 1 ? sx5C : i9b[0];
  };
  a8i.cod3x = cY0x.cod3x = function(F9w) {
    F9w = a8i.B9s(F9w);
    return !F9w ? '' : be9V.bfX8P(F9w);
  };
  a8i.bPu6o = function(De8W) {
    De8W = (De8W || '').trim();
    return !De8W ? null : be9V.bgk8c(De8W);
  };
  a8i.cot3x = function(cH0x, u9l) {
    cH0x = cH0x || '';
    switch (u9l) {
      case 'xml':
        cH0x = a8i.bPu6o(cH0x);
        break;
      case 'json':
        try {
          cH0x = JSON.parse(cH0x);
        } catch (ex) {
          cH0x = null;
        }
        break;
    }
    return cH0x;
  };
  a8i.hQ2x = cY0x.hQ2x = (function() {
    var cov3x = function(F9w) {
      return F9w == document.body || F9w == document.documentElement;
    };
    return function(eb0x, nt3x) {
      eb0x = a8i.B9s(eb0x);
      if (!eb0x) return null;
      nt3x = a8i.B9s(nt3x) || null;
      var o9f = {
          x: 0,
          y: 0,
        },
        bhB8t,
        dp0x,
        bcu7n;
      while (!!eb0x && eb0x != nt3x) {
        bhB8t = cov3x(eb0x);
        dp0x = bhB8t ? 0 : eb0x.scrollLeft;
        bcu7n = parseInt(a8i.de0x(eb0x, 'borderLeftWidth')) || 0;
        o9f.x += eb0x.offsetLeft + bcu7n - dp0x;
        dp0x = bhB8t ? 0 : eb0x.scrollTop;
        bcu7n = parseInt(a8i.de0x(eb0x, 'borderTopWidth')) || 0;
        o9f.y += eb0x.offsetTop + bcu7n - dp0x;
        eb0x = eb0x.offsetParent;
      }
      return o9f;
    };
  })();
  a8i.nC4G = cY0x.nC4G = function(F9w) {
    var bi9Z = a8i.hQ2x(F9w);
    window.scrollTo(bi9Z.x, bi9Z.y);
    return this;
  };
  a8i.cFj7c = function(tL5Q) {
    tL5Q = (tL5Q || '').trim();
    return be9V.bGt4x(tL5Q);
  };
  a8i.coL3x = cY0x.coL3x = function(F9w, V9M, bz0x) {
    F9w = a8i.B9s(F9w);
    if (!F9w) return this;
    var D9u = be9V.bHa4e(V9M, bz0x);
    if (!D9u) return this;
    a8i.ba9R(F9w, 'transform', D9u);
    return this;
  };
  a8i.eY1x = cY0x.eY1x = function(F9w, bz0x) {
    F9w = a8i.B9s(F9w);
    if (!!F9w)
      k9b.eD0x(bz0x, function(D9u, V9M) {
        a8i.ba9R(F9w, V9M, D9u);
      });
    return this;
  };
  a8i.coP3x = cY0x.coP3x = function(gj1x, e9f) {
    gj1x = a8i.B9s(gj1x);
    if (!gj1x)
      return {
        start: 0,
        end: 0,
      };
    if (k9b.sV5a(e9f))
      e9f = {
        start: e9f,
        end: e9f,
      };
    if (e9f != null) {
      if (e9f.end == null) e9f.end = e9f.start || 0;
      be9V.bqb0x(gj1x, e9f);
    } else {
      e9f = be9V.brN1x(gj1x);
    }
    return e9f;
  };
  a8i.ba9R = cY0x.ba9R = function(F9w, V9M, D9u) {
    F9w = a8i.B9s(F9w);
    if (!!F9w) be9V.blX9O(F9w, V9M, D9u);
    return this;
  };
  a8i.de0x = cY0x.de0x = function(F9w, V9M) {
    F9w = a8i.B9s(F9w);
    if (!F9w) return '';
    var hc2x = !window.getComputedStyle
      ? F9w.currentStyle || bb9S
      : window.getComputedStyle(F9w, null);
    return hc2x[be9V.bHb4f(V9M)] || '';
  };
  a8i.bPF6z = (function() {
    var df0x = /[\s\r\n]+/gi;
    return function(ci0x) {
      ci0x = (ci0x || '').trim().replace(df0x, ' ');
      if (!ci0x) return;
      var f9e = a8i.dh0x('style');
      document.head.appendChild(f9e);
      be9V.bqc0x(f9e, be9V.cDl7e(ci0x));
      return f9e;
    };
  })();
  a8i.bPH6B = function(zD7w) {
    try {
      zD7w = zD7w.trim();
      if (!!zD7w) return new Function(zD7w)();
    } catch (ex) {
      console.error(ex.message);
      console.error(ex.stack);
    }
  };
  a8i.sK5P = (function() {
    var df0x = /#<.*?>/g,
      gG2x = +new Date();
    return function(kA3x) {
      if (!IK0x) IK0x = [];
      var fJ1x = 'auto-' + gG2x++;
      IK0x.push(kA3x.replace(df0x, fJ1x));
      return fJ1x;
    };
  })();
  a8i.bPn6h = function() {
    if (!!IK0x) {
      a8i.bPF6z(IK0x.join(''));
      IK0x = null;
    }
    return this;
  };
  a8i.cFe7X = function(ci0x, kA3x) {
    ci0x = a8i.B9s(ci0x);
    return !ci0x ? null : be9V.brK0x(ci0x, kA3x);
  };
  a8i.y9p = cY0x.y9p = function() {
    be9V.bke9V.apply(be9V, arguments);
    return this;
  };
  a8i.x9o = cY0x.x9o = function() {
    be9V.blC9t.apply(be9V, arguments);
    return this;
  };
  a8i.fi1x = cY0x.fi1x = function() {
    be9V.RE3x.apply(be9V, arguments);
    return this;
  };
  a8i.bE0x = cY0x.bE0x = function() {
    return be9V.boY0x.apply(be9V, arguments);
  };
  if (!document.head)
    document.head = document.getElementsByTagName('head')[0] || document.body;
  cY0x.isChange = !0;
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    fz1x = NEJ.R,
    br9i = NEJ.F,
    a8i = c9h('nej.e'),
    be9V = c9h('nej.h'),
    k9b = c9h('nej.u');
  var Eh9Y = function(j9a, u9l) {
    try {
      u9l = u9l.toLowerCase();
      if (j9a === null) return u9l == 'null';
      if (j9a === undefined) return u9l == 'undefined';
      return bb9S.toString.call(j9a).toLowerCase() == '[object ' + u9l + ']';
    } catch (e) {
      return !1;
    }
  };
  k9b.gJ2x = function(j9a) {
    return Eh9Y(j9a, 'function');
  };
  k9b.fH1x = function(j9a) {
    return Eh9Y(j9a, 'string');
  };
  k9b.sV5a = function(j9a) {
    return Eh9Y(j9a, 'number');
  };
  k9b.cEX7Q = function(j9a) {
    return Eh9Y(j9a, 'boolean');
  };
  k9b.Ew9n = function(j9a) {
    return Eh9Y(j9a, 'date');
  };
  k9b.eI0x = function(j9a) {
    return Eh9Y(j9a, 'array');
  };
  k9b.lO3x = function(j9a) {
    return Eh9Y(j9a, 'object');
  };
  k9b.fy1x = (function() {
    var df0x = /[^\x00-\xfff]/g;
    return function(bo9f) {
      return ('' + (bo9f || '')).replace(df0x, '**').length;
    };
  })();
  k9b.di0x = function(i9b, p9g) {
    var dW0x = k9b.gJ2x(p9g)
        ? p9g
        : function(D9u) {
            return D9u === p9g;
          },
      r9i = k9b.eD0x(i9b, dW0x);
    return r9i != null ? r9i : -1;
  };
  k9b.cES7L = (function() {
    var bQe6Y;
    var SQ4U = function(i9b, oC4G, oD4H) {
      if (oC4G > oD4H) return -1;
      var Fd9U = Math.ceil((oC4G + oD4H) / 2),
        o9f = bQe6Y(i9b[Fd9U], Fd9U, i9b);
      if (o9f == 0) return Fd9U;
      if (o9f < 0) return SQ4U(i9b, oC4G, Fd9U - 1);
      return SQ4U(i9b, Fd9U + 1, oD4H);
    };
    return function(i9b, II0x) {
      bQe6Y = II0x || br9i;
      return SQ4U(i9b, 0, i9b.length - 1);
    };
  })();
  k9b.nH4L = function(i9b, cN0x, P9G) {
    if (!i9b || !i9b.length || !k9b.gJ2x(cN0x)) return null;
    for (var i = i9b.length - 1; i >= 0; i--)
      if (!!cN0x.call(P9G, i9b[i], i, i9b)) return i;
    return null;
  };
  k9b.bd9U = function(i9b, cN0x, P9G) {
    if (!i9b || !i9b.length || !k9b.gJ2x(cN0x)) return this;
    if (!!i9b.forEach) {
      i9b.forEach(cN0x, P9G);
      return this;
    }
    for (var i = 0, l = i9b.length; i < l; i++) cN0x.call(P9G, i9b[i], i, i9b);
    return this;
  };
  k9b.eD0x = function(i9b, cN0x, P9G) {
    if (!i9b || !k9b.gJ2x(cN0x)) return null;
    if (i9b.length != null) {
      if (i9b.length > 0)
        for (var i = 0, l = i9b.length; i < l; i++)
          if (!!cN0x.call(P9G, i9b[i], i, i9b)) return i;
    }
    if (k9b.lO3x(i9b)) {
      for (var x in i9b)
        if (i9b.hasOwnProperty(x) && !!cN0x.call(P9G, i9b[x], x, i9b)) return x;
    }
    return null;
  };
  k9b.cqL4P = function(ji2x, crs4w, e9f) {
    ji2x = ji2x || [];
    e9f = e9f || bb9S;
    var bQN7G = !!e9f.union,
      wt6n = !!e9f.begin,
      bbZ7S = e9f.compare,
      crB4F = bQN7G && wt6n ? k9b.nH4L : k9b.bd9U;
    crB4F(crs4w, function(p9g) {
      if (!!bbZ7S) bbZ7S = bbZ7S.et0x(p9g);
      var r9i = k9b.di0x(ji2x, bbZ7S || p9g);
      if (r9i >= 0) ji2x.splice(r9i, 1);
      if (bQN7G) ji2x[wt6n ? 'unshift' : 'push'](p9g);
    });
    return ji2x;
  };
  k9b.Ch8Z = function(bz0x, bo9f) {
    if (!bz0x || !bo9f || !bo9f.replace) return bo9f || '';
    return bo9f.replace(bz0x.r, function($1) {
      var o9f = bz0x[!bz0x.i ? $1.toLowerCase() : $1];
      return o9f != null ? o9f : $1;
    });
  };
  k9b.dH0x = (function() {
    var bz0x = {
      r: /\<|\>|\&lt;|\&gt;|\&|\r|\n|\s|\'|\"/g,
      '<': '&lt;',
      '>': '&gt;',
      '&': '&amp;',
      ' ': '&nbsp;',
      '"': '&quot;',
      "'": '&#39;',
      '\n': '<br/>',
      '\r': '',
      '&lt;': '&lt;',
      '&gt;': '&gt;',
    };
    return function(bo9f) {
      return k9b.Ch8Z(bz0x, bo9f);
    };
  })();
  k9b.Ce8W = (function() {
    var bz0x = {
      r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
      '&lt;': '<',
      '&gt;': '>',
      '&amp;': '&',
      '&nbsp;': ' ',
      '&#39;': "'",
      '&quot;': '"',
      '<br/>': '\n',
    };
    return function(bo9f) {
      return k9b.Ch8Z(bz0x, bo9f);
    };
  })();
  k9b.id2x = (function() {
    var bz0x = {
        i: !0,
        r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g,
      },
      csr4v = ['上午', '下午'],
      css4w = ['A.M.', 'P.M.'],
      bpJ0x = ['日', '一', '二', '三', '四', '五', '六'],
      ctb4f = [
        '一',
        '二',
        '三',
        '四',
        '五',
        '六',
        '七',
        '八',
        '九',
        '十',
        '十一',
        '十二',
      ],
      cuo4s = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec',
      ];
    var TK4O = function(gS2x) {
      gS2x = parseInt(gS2x) || 0;
      return (gS2x < 10 ? '0' : '') + gS2x;
    };
    var cvh5m = function(qe4i) {
      return qe4i < 12 ? 0 : 1;
    };
    return function(bA0x, Jr0x, cvu5z) {
      if (!bA0x || !Jr0x) return '';
      bA0x = k9b.bbT7M(bA0x);
      bz0x.yyyy = bA0x.getFullYear();
      bz0x.yy = ('' + bz0x.yyyy).substr(2);
      bz0x.M = bA0x.getMonth() + 1;
      bz0x.MM = TK4O(bz0x.M);
      bz0x.eM = cuo4s[bz0x.M - 1];
      bz0x.cM = ctb4f[bz0x.M - 1];
      bz0x.d = bA0x.getDate();
      bz0x.dd = TK4O(bz0x.d);
      bz0x.H = bA0x.getHours();
      bz0x.HH = TK4O(bz0x.H);
      bz0x.m = bA0x.getMinutes();
      bz0x.mm = TK4O(bz0x.m);
      bz0x.s = bA0x.getSeconds();
      bz0x.ss = TK4O(bz0x.s);
      bz0x.ms = bA0x.getMilliseconds();
      bz0x.w = bpJ0x[bA0x.getDay()];
      var bSE8w = cvh5m(bz0x.H);
      bz0x.ct = csr4v[bSE8w];
      bz0x.et = css4w[bSE8w];
      if (!!cvu5z) {
        bz0x.H = bz0x.H % 12;
      }
      return k9b.Ch8Z(bz0x, Jr0x);
    };
  })();
  k9b.bbT7M = function(bA0x) {
    var da0x = bA0x;
    if (k9b.fH1x(bA0x)) da0x = new Date(Date.parse(bA0x));
    if (!k9b.Ew9n(bA0x)) da0x = new Date(bA0x);
    return da0x;
  };
  k9b.IT0x = function(cwr5w, cxS5X) {
    return new Number(cwr5w).toFixed(cxS5X);
  };
  k9b.bsN1x = (function() {
    var gH2x = /([^\/:])\/.*$/,
      kx3x = /\/[^\/]+$/,
      EV9M = /[#\?]/,
      btA1x = location.href.split(/[?#]/)[0],
      sF5K = document.createElement('a');
    var btN1x = function(jy2x) {
      return (jy2x || '').indexOf('://') > 0;
    };
    var bTX8P = function(jy2x) {
      return (jy2x || '').split(EV9M)[0].replace(kx3x, '/');
    };
    var cDc7V = function(jy2x, ga1x) {
      if (jy2x.indexOf('/') == 0) return ga1x.replace(gH2x, '$1') + jy2x;
      return bTX8P(ga1x) + jy2x;
    };
    btA1x = bTX8P(btA1x);
    return function(jy2x, ga1x) {
      jy2x = (jy2x || '').trim();
      if (!btN1x(ga1x)) ga1x = btA1x;
      if (!jy2x) return ga1x;
      if (btN1x(jy2x)) return jy2x;
      jy2x = cDc7V(jy2x, ga1x);
      sF5K.href = jy2x;
      jy2x = sF5K.href;
      return btN1x(jy2x) ? jy2x : sF5K.getAttribute('href', 4);
    };
  })();
  k9b.cDd7W = (function() {
    var df0x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
    return function(Y9P) {
      if (df0x.test(Y9P || '')) return RegExp.$1.toLowerCase();
      return '';
    };
  })();
  k9b.bUZ8R = function(G9x, ik2x) {
    if (!G9x) return ik2x;
    var V9M = G9x.tagName.toLowerCase(),
      i9b = a8i.dj0x(G9x);
    if (!i9b || !i9b.length) {
      ik2x[V9M] = G9x.textContent || G9x.text || '';
      return ik2x;
    }
    var cl0x = {};
    ik2x[V9M] = cl0x;
    k9b.bd9U(i9b, function(f9e) {
      k9b.bUZ8R(f9e, cl0x);
    });
    return ik2x;
  };
  k9b.cDO7H = function(De8W) {
    try {
      return k9b.bUZ8R(a8i.bPu6o(De8W), {});
    } catch (ex) {
      return null;
    }
  };
  k9b.Vv4z = function(ih2x, Vw4A) {
    var ik2x = {};
    k9b.bd9U((ih2x || '').split(Vw4A), function(V9M) {
      var bbM7F = V9M.split('=');
      if (!bbM7F || !bbM7F.length) return;
      var J9A = bbM7F.shift();
      if (!J9A) return;
      ik2x[decodeURIComponent(J9A)] = decodeURIComponent(bbM7F.join('='));
    });
    return ik2x;
  };
  k9b.uu6o = function(gm1x, Vw4A, cDi7b) {
    if (!gm1x) return '';
    var bs9j = [];
    for (var x in gm1x) {
      bs9j.push(
        encodeURIComponent(x) + '=' + (!!cDi7b ? encodeURIComponent(gm1x[x]) : gm1x[x])
      );
    }
    return bs9j.join(Vw4A || ',');
  };
  k9b.hy2x = function(bv9m) {
    return k9b.Vv4z(bv9m, '&');
  };
  k9b.cF0x = function(gm1x) {
    return k9b.uu6o(gm1x, '&', !0);
  };
  k9b.cDL7E = function(gm1x) {
    return be9V.Ip0x(gm1x);
  };
  k9b.cGu7n = function(i9b, dW0x) {
    var o9f = {};
    k9b.bd9U(i9b, function(p9g) {
      var J9A = p9g;
      if (!!dW0x) {
        J9A = dW0x(p9g);
      }
      o9f[J9A] = p9g;
    });
    return o9f;
  };
  k9b.cDM7F = function(gS2x, fY1x) {
    var cDG7z = ('' + gS2x).length,
      cDF7y = Math.max(1, parseInt(fY1x) || 0),
      dp0x = cDF7y - cDG7z;
    if (dp0x > 0) {
      gS2x = new Array(dp0x + 1).join('0') + gS2x;
    }
    return '' + gS2x;
  };
  k9b.bbE7x = function(gm1x, V9M) {
    if (!k9b.eI0x(V9M)) {
      try {
        delete gm1x[V9M];
      } catch (e) {
        gm1x[V9M] = undefined;
      }
      return this;
    }
    k9b.bd9U(V9M, k9b.bbE7x.g9d(k9b, gm1x));
    return this;
  };
  k9b.Pn2x = (function() {
    var bVg8Y = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
    return function(bp9g) {
      bp9g = bp9g || 10;
      var o9f = [];
      for (var i = 0, bVf8X; i < bp9g; ++i) {
        bVf8X = Math.floor(Math.random() * bVg8Y.length);
        o9f.push(bVg8Y.charAt(bVf8X));
      }
      return o9f.join('');
    };
  })();
  k9b.BS8K = function(fF1x, fo1x) {
    return Math.floor(Math.random() * (fo1x - fF1x) + fF1x);
  };
  k9b.oj4n = function(bp9g) {
    bp9g = Math.max(0, Math.min(bp9g || 8, 30));
    var fF1x = Math.pow(10, bp9g - 1),
      fo1x = fF1x * 10;
    return k9b.BS8K(fF1x, fo1x).toString();
  };
  k9b.bby7r = (function() {
    var gG2x = +new Date();
    return function() {
      return '' + gG2x++;
    };
  })();
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    fz1x = NEJ.R,
    br9i = NEJ.F,
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    O9F = c9h('nej.ut'),
    oK4O;
  if (!!O9F.cI0x) return;
  O9F.cI0x = NEJ.C();
  oK4O = O9F.cI0x.prototype;
  O9F.cI0x.A9r = function(e9f) {
    e9f = e9f || {};
    var cA0x = !!this.BQ8I && this.BQ8I.shift();
    if (!cA0x) {
      cA0x = new this(e9f);
      this.cDC7v = (this.cDC7v || 0) + 1;
    }
    cA0x.bk9b(e9f);
    return cA0x;
  };
  O9F.cI0x.T9K = (function() {
    var Nb1x = function(p9g, r9i, i9b) {
      p9g.T9K();
      i9b.splice(r9i, 1);
    };
    return function(cA0x) {
      if (!cA0x) return null;
      if (!k9b.eI0x(cA0x)) {
        if (!(cA0x instanceof this)) {
          var fJ1x = cA0x.constructor;
          if (!!fJ1x.T9K) fJ1x.T9K(cA0x);
          return null;
        }
        if (cA0x == this.ff1x) delete this.ff1x;
        if (cA0x == this.BP8H) delete this.BP8H;
        cA0x.bD0x();
        if (!this.BQ8I) this.BQ8I = [];
        if (k9b.di0x(this.BQ8I, cA0x) < 0) {
          this.BQ8I.push(cA0x);
        }
        return null;
      }
      k9b.nH4L(cA0x, Nb1x, this);
    };
  })();
  O9F.cI0x.gt1x = function(e9f) {
    e9f = e9f || {};
    if (!this.ff1x) this.ff1x = this.A9r(e9f);
    return this.ff1x;
  };
  O9F.cI0x.bVe8W = function(e9f, rD5I) {
    e9f = e9f || {};
    if (!!rD5I && !!this.BP8H) {
      this.BP8H.T9K();
      delete this.BP8H;
    }
    if (!this.BP8H) {
      this.BP8H = this.A9r(e9f);
    } else {
      this.BP8H.bk9b(e9f);
    }
    return this.BP8H;
  };
  oK4O.cy0x = (function() {
    var gG2x = +new Date();
    return function() {
      this.id = gG2x++;
      this.mb3x = {};
      this.bVd8V = {};
    };
  })();
  oK4O.bk9b = function(e9f) {
    this.bjM9D(e9f);
  };
  oK4O.bD0x = function() {
    this.he2x();
    this.JM0x();
  };
  oK4O.bX0x = (function() {
    var gG2x = +new Date();
    var cDz7s = function(bf9W) {
      if (!bf9W || bf9W.length < 3) return;
      this.bVd8V['de-' + gG2x++] = bf9W;
      h9c.s9j.apply(h9c, bf9W);
    };
    return function(i9b) {
      k9b.bd9U(i9b, cDz7s, this);
    };
  })();
  oK4O.JM0x = (function() {
    var cDh7a = function(bf9W, J9A, bz0x) {
      delete bz0x[J9A];
      h9c.mv3x.apply(h9c, bf9W);
    };
    return function() {
      k9b.eD0x(this.bVd8V, cDh7a);
    };
  })();
  oK4O.cDR7K = function(dW0x) {
    dW0x = dW0x || br9i;
    k9b.eD0x(this, function(FC9t, J9A, bz0x) {
      if (!!FC9t && !!FC9t.T9K && !dW0x(FC9t)) {
        delete bz0x[J9A];
        FC9t.T9K();
      }
    });
  };
  oK4O.T9K = function() {
    this.constructor.T9K(this);
  };
  oK4O.bjW9N = function(u9l) {
    var d9g = this.mb3x[u9l.toLowerCase()];
    return !!d9g && d9g !== br9i;
  };
  oK4O.s9j = function(u9l, d9g) {
    this.wv6p.apply(this, arguments);
    return this;
  };
  oK4O.mv3x = function(u9l, d9g) {
    var u9l = (u9l || '').toLowerCase(),
      ed0x = this.mb3x[u9l];
    if (!k9b.eI0x(ed0x)) {
      if (ed0x == d9g) delete this.mb3x[u9l];
      return;
    }
    k9b.nH4L(ed0x, function(ew0x, r9i, i9b) {
      if (ew0x == d9g) i9b.splice(r9i, 1);
    });
  };
  oK4O.wv6p = function(u9l, d9g) {
    if (!!u9l && k9b.gJ2x(d9g)) this.mb3x[u9l.toLowerCase()] = d9g;
    return this;
  };
  oK4O.bjM9D = (function() {
    var cDb7U = function(d9g, u9l) {
      this.wv6p(u9l, d9g);
    };
    return function(ed0x) {
      k9b.eD0x(ed0x, cDb7U, this);
      return this;
    };
  })();
  oK4O.he2x = (function() {
    var bkp9g = function(d9g, u9l) {
      this.he2x(u9l);
    };
    return function(u9l) {
      var u9l = (u9l || '').toLowerCase();
      if (!!u9l) {
        delete this.mb3x[u9l];
      } else {
        k9b.eD0x(this.mb3x, bkp9g, this);
      }
      return this;
    };
  })();
  oK4O.bkv9m = function(u9l, d9g) {
    if (!u9l || !k9b.gJ2x(d9g)) return this;
    u9l = u9l.toLowerCase();
    var ed0x = this.mb3x[u9l];
    if (!ed0x) {
      this.mb3x[u9l] = d9g;
      return this;
    }
    if (!k9b.eI0x(ed0x)) {
      this.mb3x[u9l] = [ed0x];
    }
    this.mb3x[u9l].push(d9g);
    return this;
  };
  oK4O.z9q = function(u9l) {
    var d9g = this.mb3x[(u9l || '').toLowerCase()];
    if (!d9g) return this;
    var bf9W = fz1x.slice.call(arguments, 1);
    if (!k9b.eI0x(d9g)) return d9g.apply(this, bf9W);
    k9b.bd9U(
      d9g,
      function(dx0x) {
        try {
          dx0x.apply(this, bf9W);
        } catch (ex) {
          console.error(ex.message);
          console.error(ex.stack);
        }
      },
      this
    );
    return this;
  };
  O9F.bbr7k = (function() {
    var R9I = {};
    return function(C9t, fJ1x, e9f) {
      var fe1x = fJ1x.cDa7T;
      if (!fe1x) {
        fe1x = k9b.Pn2x(10);
        fJ1x.cDa7T = fe1x;
      }
      var J9A = C9t + '-' + fe1x,
        cA0x = R9I[J9A];
      if (!!e9f && !cA0x) {
        cA0x = fJ1x.A9r(e9f);
        cA0x.T9K = cA0x.T9K.eF0x(function(d9g) {
          delete R9I[J9A];
          delete cA0x.T9K;
        });
        R9I[J9A] = cA0x;
      }
      return cA0x;
    };
  })();
})();
(function() {
  var o = NEJ.O,
    u = NEJ.P('nej.u'),
    j = NEJ.P('nej.j');
  j.gB1x = (function() {
    var da0x = new Date(),
      cCZ7S = +da0x,
      blP9G = 86400000;
    var cCX7Q = function(V9M) {
      var rw5B = document.cookie,
        tV5a = '\\b' + V9M + '=',
        bbn7g = rw5B.search(tV5a);
      if (bbn7g < 0) return '';
      bbn7g += tV5a.length - 2;
      var ww6q = rw5B.indexOf(';', bbn7g);
      if (ww6q < 0) ww6q = rw5B.length;
      return rw5B.substring(bbn7g, ww6q) || '';
    };
    return function(V9M, j9a) {
      if (j9a === undefined) return cCX7Q(V9M);
      if (u.fH1x(j9a)) {
        if (!!j9a) {
          document.cookie = V9M + '=' + j9a + ';';
          return j9a;
        }
        j9a = {
          expires: -100,
        };
      }
      j9a = j9a || o;
      var rw5B = V9M + '=' + (j9a.value || '') + ';';
      delete j9a.value;
      if (j9a.expires !== undefined) {
        da0x.setTime(cCZ7S + j9a.expires * blP9G);
        j9a.expires = da0x.toGMTString();
      }
      rw5B += u.uu6o(j9a, ';');
      document.cookie = rw5B;
    };
  })();
})();
(function() {
  var c9h = NEJ.P,
    br9i = NEJ.F,
    iv2x = c9h('nej.c'),
    ek0x = c9h('nej.g'),
    a8i = c9h('nej.e'),
    v9m = c9h('nej.j'),
    I9z = c9h('nej.ut'),
    O9F = c9h('nej.ut.j'),
    k9b = c9h('nej.u'),
    b9i;
  if (!!O9F.JN0x) return;
  O9F.JN0x = NEJ.C();
  b9i = O9F.JN0x.N9E(I9z.cI0x);
  b9i.bk9b = function(e9f) {
    this.bm9d(e9f);
    this.pC4G = {
      noescape: false,
      url: '',
      sync: !1,
      cookie: !1,
      type: 'text',
      method: 'GET',
      timeout: 60000,
    };
    NEJ.EX(this.pC4G, e9f);
    var Dm8e = iv2x.B9s('csrf');
    if (
      (/^\/[^\/]/.test(this.pC4G.url) ||
        this.pC4G.url.indexOf(location.protocol + '//' + location.host) == 0) &&
      !!Dm8e.cookie &&
      !!Dm8e.param
    ) {
      var bv9m =
          encodeURIComponent(Dm8e.param) +
          '=' +
          encodeURIComponent(v9m.gB1x(Dm8e.cookie) || ''),
        Vw4A = this.pC4G.url.indexOf('?') < 0 ? '?' : '&';
      this.pC4G.url += Vw4A + bv9m;
    }
    this.bbj7c = e9f.headers || {};
    var bo9f = this.bbj7c[ek0x.Ak7d];
    if (bo9f == null) this.bbj7c[ek0x.Ak7d] = ek0x.cjk2x;
  };
  b9i.bD0x = function() {
    this.bG0x();
    delete this.BK8C;
    delete this.pC4G;
    delete this.bbj7c;
  };
  b9i.cCW7P = function(bo9f) {
    var bz0x = {
      r: /\<|\>/g,
      '<': '&lt;',
      '>': '&gt;',
    };
    if (!this.pC4G.noescape) {
      return k9b.Ch8Z(bz0x, bo9f);
    } else {
      return bo9f;
    }
  };
  b9i.vC6w = function(d9g) {
    var ev0x = d9g.status;
    if (ev0x == -1) {
      this.z9q('onerror', {
        code: ek0x.bBW3x,
        message: '请求[' + this.pC4G.url + ']超时！',
      });
      return;
    }
    if (('' + ev0x).indexOf('2') != 0) {
      this.z9q('onerror', {
        data: ev0x,
        code: ek0x.biF8x,
        message: '服务器返回异常状态[' + ev0x + ']!',
        extData: d9g.result,
      });
      return;
    }
    this.z9q('onload', a8i.cot3x(this.cCW7P(d9g.result), this.pC4G.type));
  };
  b9i.cp0x = br9i;
  b9i.bpG0x = function(j9a) {
    var Y9P = this.pC4G.url;
    if (!Y9P) {
      this.z9q('onerror', {
        code: ek0x.bwO2x,
        message: '没有输入请求地址！',
      });
      return this;
    }
    try {
      this.pC4G.data = j9a == null ? null : j9a;
      var d9g = {
        request: this.pC4G,
        headers: this.bbj7c,
      };
      try {
        this.z9q('onbeforerequest', d9g);
      } catch (ex) {
        console.error(ex.message);
        console.error(ex.stack);
      }
      this.cp0x(d9g);
    } catch (e) {
      this.z9q('onerror', {
        code: ek0x.biF8x,
        message: '请求[' + Y9P + ']失败:' + e.message + '！',
      });
    }
    return this;
  };
  b9i.ku3x = br9i;
})();
(function() {
  var c9h = NEJ.P,
    br9i = NEJ.F,
    be9V = c9h('nej.h'),
    ek0x = c9h('nej.g'),
    k9b = c9h('nej.u'),
    O9F = c9h('nej.ut.j'),
    R9I = {},
    Nw2x;
  if (!!O9F.bbf7Y) return;
  O9F.bbf7Y = NEJ.C();
  Nw2x = O9F.bbf7Y.N9E(O9F.JN0x);
  Nw2x.bD0x = function() {
    this.bG0x();
    window.clearTimeout(this.ef0x);
    delete this.ef0x;
    try {
      this.rr5w.onreadystatechange = br9i;
      this.rr5w.abort();
    } catch (e) {}
    delete this.rr5w;
  };
  Nw2x.cp0x = (function() {
    var cCV7O = function(D9u, J9A) {
      this.rr5w.setRequestHeader(J9A, D9u);
    };
    return function(e9f) {
      var ge1x = e9f.request,
        oS4W = e9f.headers;
      this.rr5w = be9V.bqZ0x();
      if (oS4W[ek0x.Ak7d] === ek0x.HF0x) {
        delete oS4W[ek0x.Ak7d];
        this.rr5w.upload.onprogress = this.gp1x.g9d(this, 1);
        if (ge1x.data.tagName === 'FORM') ge1x.data = new FormData(ge1x.data);
      }
      this.rr5w.onreadystatechange = this.gp1x.g9d(this, 2);
      if (ge1x.timeout != 0) {
        this.ef0x = window.setTimeout(this.gp1x.g9d(this, 3), ge1x.timeout);
      }
      this.rr5w.open(ge1x.method, ge1x.url, !ge1x.sync);
      k9b.eD0x(oS4W, cCV7O, this);
      if (!!this.pC4G.cookie && 'withCredentials' in this.rr5w)
        this.rr5w.withCredentials = !0;
      this.rr5w.send(ge1x.data);
    };
  })();
  Nw2x.gp1x = function(u9l) {
    switch (u9l) {
      case 1:
        this.z9q('onuploading', arguments[1]);
        break;
      case 2:
        if (this.rr5w.readyState == 4)
          this.vC6w({
            status: this.rr5w.status,
            result: this.rr5w.responseText || '',
          });
        break;
      case 3:
        this.vC6w({
          status: -1,
        });
        break;
    }
  };
  Nw2x.ku3x = function() {
    this.vC6w({
      status: 0,
    });
    return this;
  };
})();
(function() {
  if (typeof TrimPath === 'undefined') {
    TrimPath = {};
    if (typeof exports !== 'undefined') TrimPath = exports;
  }
  var Nx2x = {},
    bbd6X = [],
    bUV8N = /\s+/g,
    gG2x = +new Date(),
    JP0x,
    bP0x,
    hJ2x;
  var Gb9S = (function() {
    var gH2x = /^\s*[\[\{'"].*?[\]\}'"]\s*$/,
      kx3x = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/,
      EV9M = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i,
      bsH1x = /^new\s+/,
      cCR6L = /['"]/;
    var cCN6H = function(D9u) {
      if (gH2x.test(D9u)) return;
      D9u = D9u.split('.')[0].trim();
      if (!D9u || cCR6L.test(D9u)) return;
      D9u = D9u.replace(bsH1x, '');
      try {
        if (EV9M.test(D9u)) return;
        hJ2x[D9u] = 1;
      } catch (e) {}
    };
    return function(bo9f) {
      bo9f = bo9f || '';
      if (!bo9f || gH2x.test(bo9f)) return;
      var bs9j = bo9f.split(kx3x);
      for (var i = 0, l = bs9j.length; i < l; i++) cCN6H(bs9j[i]);
    };
  })();
  var cCM6G = function(dK0x) {
    if (dK0x[2] != 'in') throw 'bad for loop statement: ' + dK0x.join(' ');
    bbd6X.push(dK0x[1]);
    Gb9S(dK0x[3]);
    return (
      'var __HASH__' +
      dK0x[1] +
      ' = ' +
      dK0x[3] +
      ',' +
      dK0x[1] +
      ',' +
      dK0x[1] +
      '_count=0;' +
      'if (!!__HASH__' +
      dK0x[1] +
      ')' +
      'for(var ' +
      dK0x[1] +
      '_key in __HASH__' +
      dK0x[1] +
      '){' +
      dK0x[1] +
      ' = __HASH__' +
      dK0x[1] +
      '[' +
      dK0x[1] +
      '_key];' +
      'if (typeof(' +
      dK0x[1] +
      ')=="function") continue;' +
      dK0x[1] +
      '_count++;'
    );
  };
  var cCG6A = function() {
    var dK0x = bbd6X[bbd6X.length - 1];
    return '}; if(!__HASH__' + dK0x + '||!' + dK0x + '_count){';
  };
  var cCD6x = function() {
    bbd6X.pop();
    return '};';
  };
  var cCC6w = function(dK0x) {
    if (dK0x[2] != 'as') throw 'bad for list loop statement: ' + dK0x.join(' ');
    var NH2x = dK0x[1].split('..');
    if (NH2x.length > 1) {
      Gb9S(NH2x[0]);
      Gb9S(NH2x[1]);
      return (
        'for(var ' +
        dK0x[3] +
        ',' +
        dK0x[3] +
        '_index=0,' +
        dK0x[3] +
        '_beg=' +
        NH2x[0] +
        ',' +
        dK0x[3] +
        '_end=' +
        NH2x[1] +
        ',' +
        dK0x[3] +
        '_length=parseInt(' +
        dK0x[3] +
        '_end-' +
        dK0x[3] +
        '_beg+1);' +
        dK0x[3] +
        '_index<' +
        dK0x[3] +
        '_length;' +
        dK0x[3] +
        '_index++){' +
        dK0x[3] +
        ' = ' +
        dK0x[3] +
        '_beg+' +
        dK0x[3] +
        '_index;'
      );
    } else {
      Gb9S(dK0x[1]);
      return (
        'for(var __LIST__' +
        dK0x[3] +
        ' = ' +
        dK0x[1] +
        ',' +
        dK0x[3] +
        ',' +
        dK0x[3] +
        '_index=0,' +
        dK0x[3] +
        '_length=__LIST__' +
        dK0x[3] +
        '.length;' +
        dK0x[3] +
        '_index<' +
        dK0x[3] +
        '_length;' +
        dK0x[3] +
        '_index++){' +
        dK0x[3] +
        ' = __LIST__' +
        dK0x[3] +
        '[' +
        dK0x[3] +
        '_index];'
      );
    }
  };
  var cCz6t = function(dK0x) {
    if (!dK0x || !dK0x.length) return;
    dK0x.shift();
    var V9M = dK0x[0].split('(')[0];
    return (
      'var ' + V9M + ' = function' + dK0x.join('').replace(V9M, '') + '{var __OUT=[];'
    );
  };
  var cCw6q = function(dK0x) {
    if (!dK0x[1]) throw 'bad include statement: ' + dK0x.join(' ');
    return 'if (typeof inline == "function"){__OUT.push(inline(';
  };
  var buK1x = function(kg3x, dK0x) {
    Gb9S(dK0x.slice(1).join(' '));
    return kg3x;
  };
  var cCv6p = function(dK0x) {
    return buK1x('if(', dK0x);
  };
  var cCq6k = function(dK0x) {
    return buK1x('}else if(', dK0x);
  };
  var cCp6j = function(dK0x) {
    return buK1x('var ', dK0x);
  };
  bP0x = {
    blk: /^\{(cdata|minify|eval)/i,
    tag: 'forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include',
    def: {
      if: {
        pfix: cCv6p,
        sfix: '){',
        pmin: 1,
      },
      else: {
        pfix: '}else{',
      },
      elseif: {
        pfix: cCq6k,
        sfix: '){',
        pdft: 'true',
      },
      '/if': {
        pfix: '}',
      },
      for: {
        pfix: cCM6G,
        pmin: 3,
      },
      forelse: {
        pfix: cCG6A,
      },
      '/for': {
        pfix: cCD6x,
      },
      list: {
        pfix: cCC6w,
        pmin: 3,
      },
      '/list': {
        pfix: '};',
      },
      break: {
        pfix: 'break;',
      },
      var: {
        pfix: cCp6j,
        sfix: ';',
      },
      macro: {
        pfix: cCz6t,
      },
      '/macro': {
        pfix: 'return __OUT.join("");};',
      },
      trim: {
        pfix: function() {
          JP0x = !0;
        },
      },
      '/trim': {
        pfix: function() {
          JP0x = null;
        },
      },
      inline: {
        pfix: cCw6q,
        pmin: 1,
        sfix: '));}',
      },
    },
    ext: {
      seed: function(kg3x) {
        return (kg3x || '') + '' + gG2x;
      },
      default: function(D9u, ke3x) {
        return D9u || ke3x;
      },
    },
  };
  var cCm6g = (function() {
    var cCl6f = /\\([\{\}])/g;
    return function(bo9f, jM2x) {
      bo9f = bo9f.replace(cCl6f, '$1');
      var dK0x = bo9f.slice(1, -1).split(bUV8N),
        bg9X = bP0x.def[dK0x[0]];
      if (!bg9X) {
        baS6M(bo9f, jM2x);
        return;
      }
      if (!!bg9X.pmin && bg9X.pmin >= dK0x.length)
        throw 'Statement needs more parameters:' + bo9f;
      jM2x.push(
        !!bg9X.pfix && typeof bg9X.pfix != 'string' ? bg9X.pfix(dK0x) : bg9X.pfix || ''
      );
      if (!!bg9X.sfix) {
        if (dK0x.length <= 1) {
          if (!!bg9X.pdft) jM2x.push(bg9X.pdft);
        } else {
          for (var i = 1, l = dK0x.length; i < l; i++) {
            if (i > 1) jM2x.push(' ');
            jM2x.push(dK0x[i]);
          }
        }
        jM2x.push(bg9X.sfix);
      }
    };
  })();
  var bUM8E = function(JS0x, jM2x) {
    if (!JS0x || !JS0x.length) return;
    if (JS0x.length == 1) {
      var beY7R = JS0x.pop();
      Gb9S(beY7R);
      jM2x.push(beY7R == '' ? '""' : beY7R);
      return;
    }
    var bfa7T = JS0x.pop().split(':');
    jM2x.push("__MDF['" + bfa7T.shift() + "'](");
    bUM8E(JS0x, jM2x);
    if (bfa7T.length > 0) {
      var bf9W = bfa7T.join(':');
      Gb9S(bf9W);
      jM2x.push(',' + bf9W);
    }
    jM2x.push(')');
  };
  var baS6M = function(bo9f, jM2x) {
    if (!bo9f) return;
    var wx6r = bo9f.split('\n');
    if (!wx6r || !wx6r.length) return;
    for (var i = 0, l = wx6r.length, hz2x; i < l; i++) {
      hz2x = wx6r[i];
      if (!!JP0x) {
        hz2x = hz2x.trim();
        if (!hz2x) continue;
      }
      cCd6X(hz2x, jM2x);
      if (!!JP0x && i < l - 1) jM2x.push("__OUT.push('\\n');");
    }
  };
  var cCd6X = (function() {
    var cBZ6T = /\|\|/g,
      cBQ6K = /#@@#/g;
    return function(bo9f, jM2x) {
      var Oa2x = '}',
        Ob2x = -1,
        bp9g = bo9f.length,
        wt6n,
        fT1x,
        Kb0x,
        baw6q,
        Oo2x;
      while (Ob2x + Oa2x.length < bp9g) {
        wt6n = '${';
        fT1x = '}';
        Kb0x = bo9f.indexOf(wt6n, Ob2x + Oa2x.length);
        if (Kb0x < 0) break;
        if (bo9f.charAt(Kb0x + 2) == '%') {
          wt6n = '${%';
          fT1x = '%}';
        }
        baw6q = bo9f.indexOf(fT1x, Kb0x + wt6n.length);
        if (baw6q < 0) break;
        bao6i(bo9f.substring(Ob2x + Oa2x.length, Kb0x), jM2x);
        Oo2x = bo9f
          .substring(Kb0x + wt6n.length, baw6q)
          .replace(cBZ6T, '#@@#')
          .split('|');
        for (
          var i = 0, l = Oo2x.length;
          i < l;
          Oo2x[i] = Oo2x[i].replace(cBQ6K, '||'), i++
        );
        jM2x.push('__OUT.push(');
        bUM8E(Oo2x, jM2x);
        jM2x.push(');');
        Oa2x = fT1x;
        Ob2x = baw6q;
      }
      bao6i(bo9f.substring(Ob2x + Oa2x.length), jM2x);
    };
  })();
  var bao6i = (function() {
    var bz0x = {
      r: /\n|\\|\'/g,
      '\n': '\\n',
      '\\': '\\\\',
      "'": "\\'",
    };
    var cBO6I = function(bo9f) {
      return (bo9f || '').replace(bz0x.r, function($1) {
        return bz0x[$1] || $1;
      });
    };
    return function(bo9f, jM2x) {
      if (!bo9f) return;
      jM2x.push("__OUT.push('" + cBO6I(bo9f) + "');");
    };
  })();
  var cBN6H = (function() {
    var cBM6G = /\t/g,
      cBL6F = /\n/g,
      cBH6B = /\r\n?/g;
    var bUC8u = function(bo9f, wt6n) {
      var r9i = bo9f.indexOf('}', wt6n + 1);
      while (bo9f.charAt(r9i - 1) == '\\') {
        r9i = bo9f.indexOf('}', r9i + 1);
      }
      return r9i;
    };
    var cBC6w = function() {
      var bs9j = [],
        Fe9V = arguments[0];
      for (var x in Fe9V) {
        x = (x || '').trim();
        if (!x) continue;
        bs9j.push(x + "=$v('" + x + "')");
      }
      return bs9j.length > 0 ? 'var ' + bs9j.join(',') + ';' : '';
    };
    return function(bo9f) {
      hJ2x = {};
      bo9f = bo9f.replace(cBH6B, '\n').replace(cBM6G, '    ');
      var rU5Z = ["if(!__CTX) return '';", ''];
      rU5Z.push(
        'function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};'
      );
      rU5Z.push('var defined=function(__NAME){return __CTX[__NAME]!=null;},');
      rU5Z.push('__OUT=[];');
      var Fk9b = -1,
        bp9g = bo9f.length;
      var nG4K, Kh0x, Oy2x, Oz2x, Bq8i, OG2x, bis8k, OJ2x;
      while (Fk9b + 1 < bp9g) {
        nG4K = Fk9b;
        nG4K = bo9f.indexOf('{', nG4K + 1);
        while (nG4K >= 0) {
          Kh0x = bUC8u(bo9f, nG4K);
          Oy2x = bo9f.substring(nG4K, Kh0x);
          Oz2x = Oy2x.match(bP0x.blk);
          if (!!Oz2x) {
            Bq8i = Oz2x[1].length + 1;
            OG2x = bo9f.indexOf('}', nG4K + Bq8i);
            if (OG2x >= 0) {
              bis8k =
                OG2x - nG4K - Bq8i <= 0 ? '{/' + Oz2x[1] + '}' : Oy2x.substr(Bq8i + 1);
              Bq8i = bo9f.indexOf(bis8k, OG2x + 1);
              if (Bq8i >= 0) {
                baS6M(bo9f.substring(Fk9b + 1, nG4K), rU5Z);
                OJ2x = bo9f.substring(OG2x + 1, Bq8i);
                switch (Oz2x[1]) {
                  case 'cdata':
                    bao6i(OJ2x, rU5Z);
                    break;
                  case 'minify':
                    bao6i(OJ2x.replace(cBL6F, ' ').replace(bUV8N, ' '), rU5Z);
                    break;
                  case 'eval':
                    if (!!OJ2x) rU5Z.push('__OUT.push((function(){' + OJ2x + '})());');
                    break;
                }
                nG4K = Fk9b = Bq8i + bis8k.length - 1;
              }
            }
          } else if (
            bo9f.charAt(nG4K - 1) != '$' &&
            bo9f.charAt(nG4K - 1) != '\\' &&
            Oy2x.substr(Oy2x.charAt(1) == '/' ? 2 : 1).search(bP0x.tag) == 0
          ) {
            break;
          }
          nG4K = bo9f.indexOf('{', nG4K + 1);
        }
        if (nG4K < 0) break;
        Kh0x = bUC8u(bo9f, nG4K);
        if (Kh0x < 0) break;
        baS6M(bo9f.substring(Fk9b + 1, nG4K), rU5Z);
        cCm6g(bo9f.substring(nG4K, Kh0x + 1), rU5Z);
        Fk9b = Kh0x;
      }
      baS6M(bo9f.substring(Fk9b + 1), rU5Z);
      rU5Z.push(';return __OUT.join("");');
      rU5Z[1] = cBC6w(hJ2x);
      hJ2x = null;
      return new Function('__CTX', '__MDF', rU5Z.join(''));
    };
  })();
  TrimPath.seed = function() {
    return gG2x;
  };
  TrimPath.merge = (function() {
    var OK2x = {};
    TrimPath.dump = function() {
      return {
        func: OK2x,
        text: Nx2x,
      };
    };
    return function(fe1x, j9a, jX2x) {
      try {
        j9a = j9a || {};
        if (!OK2x[fe1x] && !Nx2x[fe1x]) return '';
        if (!OK2x[fe1x]) {
          OK2x[fe1x] = cBN6H(Nx2x[fe1x]);
          delete Nx2x[fe1x];
        }
        if (!!jX2x) {
          for (var x in bP0x.ext) if (!jX2x[x]) jX2x[x] = bP0x.ext[x];
        }
        return OK2x[fe1x](j9a, jX2x || bP0x.ext);
      } catch (ex) {
        return ex.message || '';
      }
    };
  })();
  TrimPath.parse = (function() {
    var cBB6v = +new Date();
    return function(bo9f, fe1x) {
      if (!bo9f) return '';
      fe1x = fe1x || 'ck_' + cBB6v++;
      Nx2x[fe1x] = bo9f;
      return fe1x;
    };
  })();
})();
(function() {
  var c9h = NEJ.P,
    a8i = c9h('nej.e'),
    k9b = c9h('nej.u'),
    ey0x = {},
    bUB8t = {};
  a8i.Ko0x = TrimPath.seed;
  a8i.bZ0x = (function() {
    var bUA8s = function(C9t) {
      return !a8i.iH2x ? '' : a8i.iH2x(C9t);
    };
    return function(fe1x, j9a, jX2x) {
      j9a = NEJ.X(NEJ.X({}, bUB8t), j9a);
      j9a.inline = bUA8s;
      jX2x = NEJ.X(NEJ.X({}, ey0x), jX2x);
      jX2x.rand = k9b.oj4n;
      jX2x.format = k9b.id2x;
      jX2x.escape = k9b.dH0x;
      jX2x.inline = bUA8s;
      return TrimPath.merge(fe1x, j9a, jX2x);
    };
  })();
  a8i.ex0x = function(bo9f, cBy6s) {
    if (!bo9f) return '';
    var fe1x,
      F9w = a8i.B9s(bo9f);
    if (!!F9w) {
      fe1x = F9w.id;
      bo9f = F9w.value || F9w.innerText;
      if (!cBy6s) a8i.cJ0x(F9w);
    }
    return TrimPath.parse(bo9f, fe1x);
  };
  a8i.dz0x = function(bI0x, fe1x, j9a, jX2x) {
    bI0x = a8i.B9s(bI0x);
    if (!!bI0x) bI0x.innerHTML = a8i.bZ0x(fe1x, j9a, jX2x);
    return this;
  };
  a8i.cDT7M = function(bz0x) {
    NEJ.X(ey0x, bz0x);
  };
  a8i.cBt6n = function(bz0x) {
    NEJ.X(bUB8t, bz0x);
  };
  c9h('dbg').dumpJST = function() {
    return TrimPath.dump();
  };
})();
(function() {
  var dw0x = NEJ.P('nej.p'),
    O9F = window,
    le3x = dw0x.Ig0x,
    bUv8n = le3x.ipad || le3x.iphone;
  if (!bUv8n && !!O9F.requestAnimationFrame && !!O9F.cancelRequestAnimationFrame) return;
  var kg3x = dw0x.ds0x.prefix.pro;
  if (
    !bUv8n &&
    !!O9F[kg3x + 'RequestAnimationFrame'] &&
    !!O9F[kg3x + 'CancelRequestAnimationFrame']
  ) {
    O9F.requestAnimationFrame = O9F[kg3x + 'RequestAnimationFrame'];
    O9F.cancelRequestAnimationFrame = O9F[kg3x + 'CancelRequestAnimationFrame'];
    return;
  }
  var ZT6N = le3x.desktop ? 80 : le3x.ios ? 50 : 30;
  O9F.requestAnimationFrame = function(cN0x) {
    return window.setTimeout(function() {
      try {
        cN0x(+new Date());
      } catch (ex) {}
    }, 1000 / ZT6N);
  };
  O9F.cancelRequestAnimationFrame = function(C9t) {
    window.clearTimeout(C9t);
    return this;
  };
})();
(function() {
  var c9h = NEJ.P,
    br9i = NEJ.F,
    k9b = c9h('nej.u'),
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    be9V = c9h('nej.h'),
    cY0x = c9h('nej.x'),
    ZS6M = c9h('nej.ut.j.cb'),
    gh1x;
  if (!!a8i.sz5E) return;
  a8i.sz5E = cY0x.sz5E = (function() {
    var R9I = {},
      gH2x = /^(?:mouse.*|(?:dbl)?click)$/i;
    window.onflashevent = function(d9g) {
      var C9t = decodeURIComponent(d9g.target),
        u9l = d9g.type.toLowerCase();
      var dx0x = R9I[C9t + '-on' + u9l];
      if (!!dx0x) {
        try {
          dx0x(d9g);
        } catch (e) {}
        return;
      }
      var cP0x = R9I[C9t + '-tgt'];
      if (!!cP0x && gH2x.test(u9l)) {
        bUr8j(cP0x, d9g);
      }
    };
    var bkc9T = function(e9f) {
      var bI0x = a8i.B9s(e9f.parent) || document.body,
        dQ0x = a8i.bZ0x(gh1x, e9f);
      bI0x.insertAdjacentHTML(!e9f.hidden ? 'beforeEnd' : 'afterBegin', dQ0x);
    };
    var bUr8j = function(C9t, d9g) {
      var u9l = d9g.type.toLowerCase();
      requestAnimationFrame(function() {
        h9c.z9q(C9t, u9l);
      });
    };
    var cBl6f = function(hT2x) {
      return !!hT2x && !!hT2x.inited && !!hT2x.inited();
    };
    var Pl2x = function(C9t) {
      var bs9j = [document.embeds[C9t], a8i.B9s(C9t), document[C9t], window[C9t]],
        r9i = k9b.eD0x(bs9j, cBl6f),
        hT2x = bs9j[r9i],
        bkt9k = C9t + '-count';
      R9I[bkt9k]++;
      if (!!hT2x || R9I[bkt9k] > 100) {
        R9I[C9t](hT2x);
        delete R9I[C9t];
        delete R9I[bkt9k];
        return;
      }
      window.setTimeout(Pl2x.g9d(null, C9t), 300);
    };
    var cBk6e = function(e9f) {
      var C9t = e9f.id,
        cm0x = e9f.params;
      if (!cm0x) {
        cm0x = {};
        e9f.params = cm0x;
      }
      var hJ2x = cm0x.flashvars || '';
      hJ2x += (!hJ2x ? '' : '&') + ('id=' + C9t);
      if (!e9f.hidden && (!!e9f.target || be9V.bdU7N(cm0x.wmode))) {
        var hU2x = a8i.lw3x(e9f.target) || a8i.lw3x(e9f.parent),
          ZL6F = k9b.bby7r();
        ZS6M['cb' + ZL6F] = bUr8j.g9d(null, hU2x);
        hJ2x += '&onevent=nej.ut.j.cb.cb' + ZL6F;
        R9I[C9t + '-tgt'] = hU2x;
      }
      cm0x.flashvars = hJ2x;
      k9b.eD0x(e9f, function(D9u, J9A) {
        if (k9b.gJ2x(D9u) && J9A != 'onready') {
          R9I[C9t + '-' + J9A] = D9u;
        }
      });
    };
    return function(e9f) {
      e9f = NEJ.X({}, e9f);
      if (!e9f.src) return;
      var C9t = 'flash_' + k9b.bby7r();
      e9f.id = C9t;
      cBk6e(e9f);
      bkc9T(e9f);
      if (!e9f.onready) return;
      R9I[C9t] = e9f.onready;
      R9I[C9t + '-count'] = 0;
      Pl2x(C9t);
    };
  })();
  gh1x = a8i.ex0x(
    '{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}'
  );
  cY0x.isChange = !0;
})();
(function() {
  var c9h = NEJ.P,
    iv2x = c9h('nej.c'),
    a8i = c9h('nej.e'),
    k9b = c9h('nej.u'),
    O9F = c9h('nej.ut.j'),
    ZS6M = c9h('nej.ut.j.cb'),
    R9I = {},
    gG2x = +new Date(),
    bln9e;
  if (!!O9F.blq9h) return;
  ZS6M['ld' + gG2x] = function(J9A, cH0x) {
    var jY2x = R9I[J9A];
    if (!jY2x) return;
    delete R9I[J9A];
    jY2x.vC6w({
      status: 200,
      result: cH0x,
    });
  };
  ZS6M['er' + gG2x] = function(J9A, ev0x) {
    var jY2x = R9I[J9A];
    if (!jY2x) return;
    delete R9I[J9A];
    jY2x.vC6w({
      status: ev0x || 0,
    });
  };
  O9F.blq9h = NEJ.C();
  bln9e = O9F.blq9h.N9E(O9F.JN0x);
  bln9e.cp0x = function(e9f) {
    var hT2x = R9I.flash;
    if (k9b.eI0x(hT2x)) {
      hT2x.push(this.cp0x.g9d(this, e9f));
      return;
    }
    if (!hT2x) {
      R9I.flash = [this.cp0x.g9d(this, e9f)];
      a8i.sz5E({
        hidden: !0,
        src: iv2x.B9s('ajax.swf'),
        onready: function(hT2x) {
          if (!hT2x) return;
          var i9b = R9I.flash;
          R9I.flash = hT2x;
          k9b.nH4L(i9b, function(dx0x) {
            try {
              dx0x();
            } catch (e) {}
          });
        },
      });
      return;
    }
    this.BK8C = 'swf-' + k9b.oj4n();
    R9I[this.BK8C] = this;
    var j9a = NEJ.EX(
      {
        url: '',
        data: null,
        method: 'GET',
      },
      e9f.request
    );
    j9a.key = this.BK8C;
    j9a.headers = e9f.headers;
    j9a.onerror = 'nej.ut.j.cb.er' + gG2x;
    j9a.onloaded = 'nej.ut.j.cb.ld' + gG2x;
    var bUq8i = iv2x.csn4r(j9a.url);
    if (!!bUq8i) j9a.policyURL = bUq8i;
    hT2x.request(j9a);
  };
  bln9e.ku3x = function() {
    delete R9I[this.BK8C];
    this.vC6w({
      status: 0,
    });
    return this;
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    be9V = c9h('nej.h');
  be9V.bUn8f = (function() {
    var df0x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
    return function(kH3x) {
      kH3x = kH3x || '';
      if (df0x.test(kH3x)) return RegExp.$1;
      return '*';
    };
  })();
  be9V.blR9I = function(j9a) {
    return j9a;
  };
  be9V.blS9J = function(ZJ6D, e9f) {
    if (!ZJ6D.postMessage) return;
    e9f = e9f || bb9S;
    ZJ6D.postMessage(be9V.blR9I(e9f.data), be9V.bUn8f(e9f.origin));
  };
})();
(function() {
  var c9h = NEJ.P,
    br9i = NEJ.F,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    O9F = c9h('nej.ut'),
    b9i;
  if (!!O9F.fL1x) return;
  O9F.fL1x = NEJ.C();
  b9i = O9F.fL1x.N9E(O9F.cI0x);
  b9i.cy0x = function() {
    this.S9J = {};
    this.cG0x();
  };
  b9i.bk9b = function(e9f) {
    this.bm9d(e9f);
    this.Pr2x = a8i.B9s(e9f.element) || window;
    this.bUm8e(e9f.event);
    this.cBc6W();
    this.z9q('oninit');
  };
  b9i.bD0x = (function() {
    var Fr9i = function(D9u, J9A, bz0x) {
      if (!k9b.eI0x(D9u)) {
        k9b.bbE7x(this.Pr2x, J9A);
      }
      delete bz0x[J9A];
    };
    return function() {
      this.bG0x();
      k9b.eD0x(this.S9J, Fr9i, this);
      delete this.Pr2x;
    };
  })();
  b9i.ZG6A = function(F9w, u9l) {
    F9w = a8i.B9s(F9w);
    return F9w == this.Pr2x && (!u9l || !!this.S9J['on' + u9l]);
  };
  b9i.bUm8e = function(d9g) {
    if (k9b.fH1x(d9g)) {
      var V9M = 'on' + d9g;
      if (!this.S9J[V9M]) {
        this.S9J[V9M] = this.cAY6S.g9d(this, d9g);
      }
      this.bUk8c(d9g);
      return;
    }
    if (k9b.eI0x(d9g)) {
      k9b.bd9U(d9g, this.bUm8e, this);
    }
  };
  b9i.bUk8c = function(u9l) {
    var d9g = 'on' + u9l,
      dx0x = this.Pr2x[d9g],
      bUj8b = this.S9J[d9g];
    if (dx0x != bUj8b) {
      this.ZB6v(u9l);
      if (!!dx0x && dx0x != br9i) this.bUh8Z(u9l, dx0x);
      this.Pr2x[d9g] = bUj8b;
    }
  };
  b9i.bUh8Z = function(u9l, dx0x, cAK6E) {
    var i9b = this.S9J[u9l];
    if (!i9b) {
      i9b = [];
      this.S9J[u9l] = i9b;
    }
    if (k9b.gJ2x(dx0x)) {
      !cAK6E ? i9b.push(dx0x) : i9b.unshift(dx0x);
    }
  };
  b9i.ZB6v = function(u9l, dx0x) {
    var i9b = this.S9J[u9l];
    if (!i9b || !i9b.length) return;
    if (!dx0x) {
      delete this.S9J[u9l];
      return;
    }
    k9b.nH4L(i9b, function(D9u, r9i, KB0x) {
      if (dx0x === D9u) {
        KB0x.splice(r9i, 1);
        return !0;
      }
    });
  };
  b9i.cAY6S = function(u9l, d9g) {
    d9g = d9g || {
      noargs: !0,
    };
    d9g.type = u9l;
    this.z9q('ondispatch', d9g);
    if (!!d9g.stopped) return;
    k9b.bd9U(this.S9J[u9l], function(dx0x) {
      try {
        dx0x(d9g);
      } catch (ex) {
        console.error(ex.message);
        console.error(ex.stack);
      }
    });
  };
  b9i.cBc6W = (function() {
    var bpl0x = function(d9g) {
      var bf9W = d9g.args,
        u9l = bf9W[1].toLowerCase();
      if (this.ZG6A(bf9W[0], u9l)) {
        d9g.stopped = !0;
        this.bUk8c(u9l);
        this.bUh8Z(u9l, bf9W[2], bf9W[3]);
        this.z9q('oneventadd', {
          type: u9l,
          listener: bf9W[2],
        });
      }
    };
    var cAJ6D = function(d9g) {
      var bf9W = d9g.args,
        u9l = bf9W[1].toLowerCase();
      if (this.ZG6A(bf9W[0], u9l)) {
        d9g.stopped = !0;
        this.ZB6v(u9l, bf9W[2]);
      }
    };
    var bkp9g = function(d9g) {
      var bf9W = d9g.args,
        u9l = (bf9W[1] || '').toLowerCase();
      if (this.ZG6A(bf9W[0])) {
        if (!!u9l) {
          this.ZB6v(u9l);
          return;
        }
        k9b.eD0x(
          this.S9J,
          function(D9u, J9A) {
            if (k9b.eI0x(D9u)) {
              this.ZB6v(J9A);
            }
          },
          this
        );
      }
    };
    var cAG6A = function(d9g) {
      var bf9W = d9g.args,
        u9l = bf9W[1].toLowerCase();
      if (this.ZG6A(bf9W[0], u9l)) {
        d9g.stopped = !0;
        bf9W[0]['on' + u9l].apply(bf9W[0], bf9W.slice(2));
      }
    };
    return function() {
      if (!!this.cAE6y) return;
      this.cAE6y = true;
      h9c.s9j = h9c.s9j.eF0x(bpl0x.g9d(this));
      h9c.mv3x = h9c.mv3x.eF0x(cAJ6D.g9d(this));
      h9c.he2x = h9c.he2x.eF0x(bkp9g.g9d(this));
      h9c.z9q = h9c.z9q.eF0x(cAG6A.g9d(this));
    };
  })();
})();
(function() {
  var c9h = NEJ.P,
    O9F = c9h('nej.p'),
    be9V = c9h('nej.h'),
    k9b = c9h('nej.u'),
    h9c = c9h('nej.v'),
    I9z = c9h('nej.ut');
  if (O9F.nq3x.trident) return;
  if (!!window.postMessage) {
    be9V.blR9I = be9V.blR9I.eF0x(function(d9g) {
      d9g.stopped = !0;
      d9g.value = JSON.stringify(d9g.args[0]);
    });
    return;
  }
  var J9A = 'MSG|',
    kz3x = [];
  var cAD6x = function() {
    var V9M = unescape(window.name || '').trim();
    if (!V9M || V9M.indexOf(J9A) != 0) return;
    window.name = '';
    var o9f = k9b.Vv4z(V9M.replace(J9A, ''), '|'),
      kH3x = (o9f.origin || '').toLowerCase();
    if (!!kH3x && kH3x != '*' && location.href.toLowerCase().indexOf(kH3x) != 0) return;
    h9c.z9q(window, 'message', {
      data: JSON.parse(o9f.data || 'null'),
      source: window.frames[o9f.self] || o9f.self,
      origin: be9V.bUn8f(o9f.ref || document.referrer),
    });
  };
  var cAx6r = (function() {
    var Zs6m;
    var cAw6q = function(bz0x, r9i, i9b) {
      if (k9b.di0x(Zs6m, bz0x.w) < 0) {
        Zs6m.push(bz0x.w);
        i9b.splice(r9i, 1);
        bz0x.w.name = bz0x.d;
      }
    };
    return function() {
      Zs6m = [];
      k9b.nH4L(kz3x, cAw6q);
      Zs6m = null;
    };
  })();
  be9V.blS9J = (function() {
    var cAv6p = function(j9a) {
      var o9f = {};
      j9a = j9a || bb9S;
      o9f.origin = j9a.origin || '';
      o9f.ref = location.href;
      o9f.self = j9a.source;
      o9f.data = JSON.stringify(j9a.data);
      return J9A + k9b.uu6o(o9f, '|', !0);
    };
    return be9V.blS9J.eF0x(function(d9g) {
      d9g.stopped = !0;
      var bf9W = d9g.args;
      kz3x.unshift({
        w: bf9W[0],
        d: escape(cAv6p(bf9W[1])),
      });
    });
  })();
  I9z.fL1x.A9r({
    element: window,
    event: 'message',
  });
  window.setInterval(cAx6r, 100);
  window.setInterval(cAD6x, 20);
})();
(function() {
  var c9h = NEJ.P,
    be9V = c9h('nej.h'),
    a8i = c9h('nej.e'),
    v9m = c9h('nej.j');
  v9m.cAp6j = (function() {
    var gR2x = window.name || '_parent',
      cAo6i = {
        gz1x: window.top,
        gR2x: window,
        bI0x: window.parent,
      };
    return function(cP0x, e9f) {
      if (typeof cP0x == 'string') {
        cP0x = cAo6i[cP0x] || window.frames[cP0x];
        if (!cP0x) return this;
      }
      var j9a = NEJ.X(
        {
          origin: '*',
          source: gR2x,
        },
        e9f
      );
      be9V.blS9J(cP0x, j9a);
      return this;
    };
  })();
})();
(function() {
  var c9h = NEJ.P,
    iv2x = c9h('nej.c'),
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    v9m = c9h('nej.j'),
    O9F = c9h('nej.ut.j'),
    R9I = {},
    Zp6j;
  if (!!O9F.bqL0x) return;
  O9F.bqL0x = NEJ.C();
  Zp6j = O9F.bqL0x.N9E(O9F.JN0x);
  Zp6j.cy0x = (function() {
    var fc1x = 'NEJ-AJAX-DATA:',
      Dz8r = !1;
    var bqQ0x = function(d9g) {
      var j9a = d9g.data;
      if (j9a.indexOf(fc1x) != 0) return;
      j9a = JSON.parse(j9a.replace(fc1x, ''));
      var jY2x = R9I[j9a.key];
      if (!jY2x) return;
      delete R9I[j9a.key];
      j9a.result = decodeURIComponent(j9a.result || '');
      jY2x.vC6w(j9a);
    };
    var bqU0x = function() {
      if (!Dz8r) {
        Dz8r = !0;
        h9c.s9j(window, 'message', bqQ0x);
      }
    };
    return function() {
      this.cG0x();
      bqU0x();
    };
  })();
  Zp6j.cp0x = function(e9f) {
    var ge1x = e9f.request,
      jY2x = iv2x.ciN2x(ge1x.url),
      ej0x = R9I[jY2x];
    if (k9b.eI0x(ej0x)) {
      ej0x.push(this.cp0x.g9d(this, e9f));
      return;
    }
    if (!ej0x) {
      R9I[jY2x] = [this.cp0x.g9d(this, e9f)];
      a8i.bdx7q({
        src: jY2x,
        visible: !1,
        onload: function(d9g) {
          var i9b = R9I[jY2x];
          R9I[jY2x] = h9c.W9N(d9g).contentWindow;
          k9b.nH4L(i9b, function(dx0x) {
            try {
              dx0x();
            } catch (e) {}
          });
        },
      });
      return;
    }
    this.BK8C = 'frm-' + k9b.oj4n();
    R9I[this.BK8C] = this;
    var j9a = NEJ.EX(
      {
        url: '',
        data: null,
        timeout: 0,
        method: 'GET',
      },
      ge1x
    );
    j9a.key = this.BK8C;
    j9a.headers = e9f.headers;
    v9m.cAp6j(R9I[jY2x], {
      data: j9a,
    });
  };
  Zp6j.ku3x = function() {
    delete R9I[this.BK8C];
    this.vC6w({
      status: 0,
    });
    return this;
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    ek0x = c9h('nej.g'),
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    v9m = c9h('nej.j'),
    O9F = c9h('nej.ut.j'),
    R9I = {},
    KK1x;
  if (!!O9F.brk0x) return;
  O9F.brk0x = NEJ.C();
  KK1x = O9F.brk0x.N9E(O9F.JN0x);
  KK1x.cy0x = (function() {
    var fc1x = 'NEJ-UPLOAD-RESULT:',
      Dz8r = !1;
    var bqQ0x = function(d9g) {
      var j9a = d9g.data;
      if (j9a.indexOf(fc1x) != 0) return;
      j9a = JSON.parse(j9a.replace(fc1x, ''));
      var jY2x = R9I[j9a.key];
      if (!jY2x) return;
      delete R9I[j9a.key];
      jY2x.vC6w(decodeURIComponent(j9a.result));
    };
    var bqU0x = function() {
      if (!Dz8r) {
        Dz8r = !0;
        h9c.s9j(window, 'message', bqQ0x);
      }
    };
    return function() {
      this.cG0x();
      bqU0x();
    };
  })();
  KK1x.bD0x = function() {
    this.bG0x();
    a8i.cJ0x(this.brB0x);
    delete this.brB0x;
    window.clearTimeout(this.ef0x);
    delete this.ef0x;
  };
  KK1x.vC6w = function(cH0x) {
    var Q9H;
    try {
      Q9H = JSON.parse(cH0x);
      this.z9q('onload', Q9H);
    } catch (e) {
      this.z9q('onerror', {
        code: ek0x.caF0x,
        message: cH0x,
      });
    }
  };
  KK1x.cp0x = (function() {
    var cAd6X = function() {
      var mL3x, cH0x;
      try {
        var mL3x = this.brB0x.contentWindow.document.body,
          cH0x = mL3x.innerText || mL3x.textContent;
      } catch (e) {
        return;
      }
      this.vC6w(cH0x);
    };
    var bso1x = function(Y9P, fj1x, rw5B) {
      v9m.bn9e(Y9P, {
        type: 'json',
        method: 'POST',
        cookie: rw5B,
        mode: parseInt(fj1x) || 0,
        onload: function(j9a) {
          if (!this.ef0x) return;
          this.z9q('onuploading', j9a);
          this.ef0x = window.setTimeout(bso1x.g9d(this, Y9P, fj1x, rw5B), 1000);
        }.g9d(this),
        onerror: function(cb0x) {
          if (!this.ef0x) return;
          this.ef0x = window.setTimeout(bso1x.g9d(this, Y9P, fj1x, rw5B), 1000);
        }.g9d(this),
      });
    };
    return function(e9f) {
      var ge1x = e9f.request,
        oS4W = e9f.headers,
        fk1x = ge1x.data,
        V9M = 'fom-' + k9b.oj4n();
      R9I[V9M] = this;
      fk1x.target = V9M;
      fk1x.method = 'POST';
      fk1x.enctype = ek0x.HF0x;
      fk1x.encoding = ek0x.HF0x;
      var Y9P = fk1x.action || '',
        lF3x = Y9P.indexOf('?') <= 0 ? '?' : '&';
      fk1x.action = Y9P + lF3x + '_proxy_=form';
      this.brB0x = a8i.bdx7q({
        name: V9M,
        onload: function(d9g) {
          var ej0x = h9c.W9N(d9g);
          h9c.s9j(ej0x, 'load', cAd6X.g9d(this));
          fk1x.submit();
          var bUc8U = (fk1x.nej_query || bb9S).value;
          if (!bUc8U) return;
          var fj1x = (fk1x.nej_mode || bb9S).value,
            rw5B = (fk1x.nej_cookie || bb9S).value == 'true';
          this.ef0x = window.setTimeout(bso1x.g9d(this, bUc8U, fj1x, rw5B), 100);
        }.g9d(this),
      });
    };
  })();
  KK1x.ku3x = function() {
    this.z9q('onerror', {
      code: ek0x.cfk1x,
      message: '客户端终止文件上传',
    });
    return this;
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    be9V = c9h('nej.h'),
    O9F = c9h('nej.ut.j');
  be9V.bqZ0x = function() {
    return new XMLHttpRequest();
  };
  be9V.bsJ1x = function(fj1x, Zk6e, e9f) {
    var bz0x = !!Zk6e
      ? {
          2: O9F.brk0x,
        }
      : {
          2: O9F.bqL0x,
          3: O9F.blq9h,
        };
    return (bz0x[fj1x] || O9F.bbf7Y).A9r(e9f);
  };
})();
(function() {
  var c9h = NEJ.P,
    O9F = c9h('nej.p'),
    be9V = c9h('nej.h');
  if (O9F.nq3x.trident) return;
  be9V.bqZ0x = (function() {
    var Vm4q = [
      'Msxml2.XMLHTTP.6.0',
      'Msxml2.XMLHTTP.3.0',
      'Msxml2.XMLHTTP.4.0',
      'Msxml2.XMLHTTP.5.0',
      'MSXML2.XMLHTTP',
      'Microsoft.XMLHTTP',
    ];
    var czX6R = function() {
      for (var i = 0, l = Vm4q.length; i < l; i++) {
        try {
          return new ActiveXObject(Vm4q[i]);
        } catch (e) {}
      }
      return null;
    };
    return be9V.bqZ0x.eF0x(function(d9g) {
      if (!!window.XMLHttpRequest) return;
      d9g.stopped = !0;
      d9g.value = czX6R();
    });
  })();
  be9V.bsJ1x = (function() {
    var HB0x = {
      0: 2,
      1: 3,
    };
    return be9V.bsJ1x.eF0x(function(d9g) {
      var bf9W = d9g.args,
        fj1x = bf9W[0] || 0;
      bf9W[0] = !!bf9W[1] ? 2 : HB0x[fj1x] || fj1x;
    });
  })();
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    br9i = NEJ.F,
    be9V = c9h('nej.h'),
    ek0x = c9h('nej.g'),
    k9b = c9h('nej.u'),
    v9m = c9h('nej.j'),
    O9F = c9h('nej.ut.j'),
    ot4x = {},
    IH0x = br9i;
  v9m.ku3x = function(fe1x) {
    var R9I = ot4x[fe1x];
    if (!R9I) return this;
    R9I.req.ku3x();
    return this;
  };
  v9m.Zh6b = function(dW0x) {
    IH0x = dW0x || br9i;
    return this;
  };
  v9m.bn9e = (function() {
    var jx2x = (location.protocol + '//' + location.host).toLowerCase();
    var czT6N = function(Y9P) {
      var kH3x = k9b.cDd7W(Y9P);
      return !!kH3x && kH3x != jx2x;
    };
    var czO6I = function(oS4W) {
      return (oS4W || bb9S)[ek0x.Ak7d] == ek0x.HF0x;
    };
    var czN6H = function(e9f) {
      var Zk6e = czO6I(e9f.headers);
      if (!czT6N(e9f.url) && !Zk6e) return O9F.bbf7Y.A9r(e9f);
      return be9V.bsJ1x(e9f.mode, Zk6e, e9f);
    };
    var Fr9i = function(fe1x) {
      var R9I = ot4x[fe1x];
      if (!R9I) return;
      if (!!R9I.req) R9I.req.T9K();
      delete ot4x[fe1x];
    };
    var bUb8T = function(fe1x, u9l) {
      var R9I = ot4x[fe1x];
      if (!R9I) return;
      Fr9i(fe1x);
      try {
        var d9g = {
          type: u9l,
          result: arguments[2],
        };
        IH0x(d9g);
        if (!d9g.stopped) (R9I[u9l] || br9i)(d9g.result);
      } catch (ex) {
        console.error(ex.message);
        console.error(ex);
      }
    };
    var yO7H = function(fe1x, j9a) {
      bUb8T(fe1x, 'onload', j9a);
    };
    var AR8J = function(fe1x, cb0x) {
      bUb8T(fe1x, 'onerror', cb0x);
    };
    return function(Y9P, e9f) {
      e9f = e9f || {};
      var fe1x = k9b.oj4n(),
        R9I = {
          onload: e9f.onload || br9i,
          onerror: e9f.onerror || br9i,
        };
      ot4x[fe1x] = R9I;
      e9f.onload = yO7H.g9d(null, fe1x);
      e9f.onerror = AR8J.g9d(null, fe1x);
      if (!!e9f.query) {
        var lF3x = Y9P.indexOf('?') < 0 ? '?' : '&',
          bv9m = e9f.query;
        if (k9b.lO3x(bv9m)) bv9m = k9b.cF0x(bv9m);
        if (!!bv9m) Y9P += lF3x + bv9m;
      }
      e9f.url = Y9P;
      R9I.req = czN6H(e9f);
      R9I.req.bpG0x(e9f.data);
      return fe1x;
    };
  })();
  v9m.ha2x = function(fk1x, e9f) {
    var dL0x = {
      mode: 0,
      type: 'json',
      query: null,
      cookie: !1,
      headers: {},
      onload: null,
      onerror: null,
      onuploading: null,
      onbeforerequest: null,
    };
    NEJ.EX(dL0x, e9f);
    dL0x.data = fk1x;
    dL0x.method = 'POST';
    dL0x.timeout = 0;
    dL0x.headers[ek0x.Ak7d] = ek0x.HF0x;
    return v9m.bn9e(fk1x.action, dL0x);
  };
})();
(function() {
  var c9h = NEJ.P,
    br9i = NEJ.F,
    ek0x = c9h('nej.g'),
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    I9z = c9h('nej.ut'),
    O9F = c9h('nej.ut.j'),
    mE3x,
    gQ2x = 60000;
  if (!!O9F.Qc3x) return;
  O9F.Qc3x = NEJ.C();
  mE3x = O9F.Qc3x.N9E(I9z.cI0x);
  mE3x.cy0x = function() {
    this.cG0x();
    this.Qd3x = {
      onerror: this.czH6B.g9d(this),
      onloaded: this.czG6A.g9d(this),
    };
    if (!this.constructor.S9J)
      this.constructor.S9J = {
        loaded: {},
      };
  };
  mE3x.bk9b = function(e9f) {
    this.bm9d(e9f);
    this.KP1x = e9f.version;
    this.bwo2x = e9f.timeout;
    this.Qd3x.version = this.KP1x;
    this.Qd3x.timeout = this.bwo2x;
  };
  mE3x.bTZ8R = function(J9A) {
    delete this.constructor.S9J[J9A];
  };
  mE3x.AL8D = function(J9A) {
    return this.constructor.S9J[J9A];
  };
  mE3x.bTY8Q = function(J9A, j9a) {
    this.constructor.S9J[J9A] = j9a;
  };
  mE3x.YV6P = br9i;
  mE3x.bTW8O = function(ge1x) {
    h9c.he2x(ge1x);
  };
  mE3x.bfm8e = function(ge1x) {
    ge1x.src = this.kZ3x;
    document.head.appendChild(ge1x);
  };
  mE3x.AI8A = function() {
    var R9I = this.AL8D(this.kZ3x);
    if (!R9I) return;
    window.clearTimeout(R9I.timer);
    this.bTW8O(R9I.request);
    delete R9I.bind;
    delete R9I.timer;
    delete R9I.request;
    this.bTZ8R(this.kZ3x);
    this.AL8D('loaded')[this.kZ3x] = !0;
  };
  mE3x.YU6O = function(V9M) {
    var R9I = this.AL8D(this.kZ3x);
    if (!R9I) return;
    var i9b = R9I.bind;
    this.AI8A();
    if (!!i9b && i9b.length > 0) {
      var cA0x;
      while (i9b.length) {
        cA0x = i9b.shift();
        try {
          cA0x.z9q(V9M, arguments[1]);
        } catch (ex) {
          console.error(ex.message);
          console.error(ex.stack);
        }
        cA0x.T9K();
      }
    }
  };
  mE3x.eJ0x = function(cb0x) {
    this.YU6O('onerror', cb0x);
  };
  mE3x.bTT8L = function() {
    this.YU6O('onloaded');
  };
  mE3x.czk6e = function(Y9P) {
    this.constructor.A9r(this.Qd3x).KR1x(Y9P);
  };
  mE3x.bTP8H = function(cb0x) {
    var R9I = this.AL8D(this.wR6L);
    if (!R9I) return;
    if (!!cb0x) R9I.error++;
    R9I.loaded++;
    if (R9I.loaded < R9I.total) return;
    this.bTZ8R(this.wR6L);
    this.z9q(R9I.error > 0 ? 'onerror' : 'onloaded');
  };
  mE3x.czH6B = function(cb0x) {
    this.bTP8H(!0);
  };
  mE3x.czG6A = function() {
    this.bTP8H();
  };
  mE3x.KR1x = function(Y9P) {
    Y9P = k9b.bsN1x(Y9P);
    if (!Y9P) {
      this.z9q('onerror', {
        code: ek0x.bwO2x,
        message: '请指定要载入的资源地址！',
      });
      return this;
    }
    this.kZ3x = Y9P;
    if (!!this.KP1x) this.kZ3x += (this.kZ3x.indexOf('?') < 0 ? '?' : '&') + this.KP1x;
    if (this.AL8D('loaded')[this.kZ3x]) {
      try {
        this.z9q('onloaded');
      } catch (ex) {
        console.error(ex.message);
        console.error(ex.stack);
      }
      this.T9K();
      return this;
    }
    var R9I = this.AL8D(this.kZ3x),
      ge1x;
    if (!!R9I) {
      R9I.bind.unshift(this);
      R9I.timer = window.clearTimeout(R9I.timer);
    } else {
      ge1x = this.YV6P();
      R9I = {
        request: ge1x,
        bind: [this],
      };
      this.bTY8Q(this.kZ3x, R9I);
      h9c.s9j(ge1x, 'load', this.bTT8L.g9d(this));
      h9c.s9j(
        ge1x,
        'error',
        this.eJ0x.g9d(this, {
          code: ek0x.biF8x,
          message: '无法加载指定资源文件[' + this.kZ3x + ']！',
        })
      );
    }
    if (this.bwo2x != 0)
      R9I.timer = window.setTimeout(
        this.eJ0x.g9d(this, {
          code: ek0x.bBW3x,
          message: '指定资源文件[' + this.kZ3x + ']载入超时！',
        }),
        this.bwo2x || gQ2x
      );
    if (!!ge1x) this.bfm8e(ge1x);
    this.z9q('onloading');
    return this;
  };
  mE3x.bTO8G = function(i9b) {
    if (!i9b || !i9b.length) {
      this.z9q('onerror', {
        code: ek0x.bwO2x,
        message: '请指定要载入的资源队列！',
      });
      return this;
    }
    this.wR6L = k9b.oj4n();
    var R9I = {
      error: 0,
      loaded: 0,
      total: i9b.length,
    };
    this.bTY8Q(this.wR6L, R9I);
    for (var i = 0, l = i9b.length; i < l; i++) {
      if (!i9b[i]) {
        R9I.total--;
        continue;
      }
      this.czk6e(i9b[i]);
    }
    this.z9q('onloading');
    return this;
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    a8i = c9h('nej.e'),
    be9V = c9h('nej.h'),
    O9F = c9h('nej.ut.j'),
    QC3x;
  if (!!O9F.bga8S) return;
  O9F.bga8S = NEJ.C();
  QC3x = O9F.bga8S.N9E(O9F.Qc3x);
  QC3x.YV6P = function() {
    var eL0x = a8i.dh0x('iframe');
    eL0x.width = 0;
    eL0x.height = 0;
    eL0x.style.display = 'none';
    return eL0x;
  };
  QC3x.bfm8e = function(ge1x) {
    ge1x.src = this.kZ3x;
    document.body.appendChild(ge1x);
  };
  QC3x.eJ0x = function(cb0x) {
    var eL0x = (this.AL8D(this.kZ3x) || bb9S).request;
    this.YU6O('onerror', cb0x);
    be9V.bdR7K(eL0x);
  };
  QC3x.bTT8L = function() {
    var mL3x = null,
      eL0x = (this.AL8D(this.kZ3x) || bb9S).request;
    try {
      mL3x = eL0x.contentWindow.document.body;
    } catch (ex) {}
    this.YU6O('onloaded', mL3x);
    be9V.bdR7K(eL0x);
  };
})();
(function() {
  var c9h = NEJ.P,
    a8i = c9h('nej.e'),
    O9F = c9h('nej.ut.j'),
    bgc8U;
  if (!!O9F.YK5P) return;
  O9F.YK5P = NEJ.C();
  bgc8U = O9F.YK5P.N9E(O9F.Qc3x);
  bgc8U.YV6P = function() {
    return a8i.dh0x('link');
  };
  bgc8U.bfm8e = function(ge1x) {
    ge1x.href = this.kZ3x;
    document.head.appendChild(ge1x);
  };
})();
(function() {
  var c9h = NEJ.P,
    a8i = c9h('nej.e'),
    O9F = c9h('nej.ut.j'),
    YH5M;
  if (!!O9F.YF5K) return;
  O9F.YF5K = NEJ.C();
  YH5M = O9F.YF5K.N9E(O9F.Qc3x);
  YH5M.bk9b = function(e9f) {
    this.bm9d(e9f);
    this.bTM8E = e9f.async;
    this.bgB8t = e9f.charset;
    this.Qd3x.async = !1;
    this.Qd3x.charset = this.bgB8t;
  };
  YH5M.YV6P = function() {
    var ge1x = a8i.dh0x('script');
    if (this.bTM8E != null) ge1x.async = !!this.bTM8E;
    if (this.bgB8t != null) ge1x.charset = this.bgB8t;
    return ge1x;
  };
  YH5M.bTW8O = function(ge1x) {
    a8i.cJ0x(ge1x);
  };
})();
(function() {
  var c9h = NEJ.P,
    v9m = c9h('nej.j'),
    O9F = c9h('nej.ut.j');
  v9m.cyX6R = function(Y9P, e9f) {
    O9F.YF5K.A9r(e9f).KR1x(Y9P);
    return this;
  };
  v9m.cyW6Q = function(i9b, e9f) {
    O9F.YF5K.A9r(e9f).bTO8G(i9b);
    return this;
  };
  v9m.cDZ7S = function(Y9P, e9f) {
    O9F.YK5P.A9r(e9f).KR1x(Y9P);
    return this;
  };
  v9m.cyT6N = function(i9b, e9f) {
    O9F.YK5P.A9r(e9f).bTO8G(i9b);
    return this;
  };
  v9m.bTK8C = function(Y9P, e9f) {
    O9F.bga8S.A9r(e9f).KR1x(Y9P);
    return this;
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    v9m = c9h('nej.j'),
    I9z = c9h('nej.ut'),
    R9I = {},
    tE5J = +new Date() + '-';
  a8i.cX0x = (function() {
    var cx0x = 0;
    var QQ3x = function() {
      if (cx0x > 0) return;
      cx0x = 0;
      h9c.z9q(document, 'templateready');
      h9c.he2x(document, 'templateready');
    };
    var YB5G = function(gj1x, e9f) {
      var cS0x = a8i.t9k(gj1x, 'src');
      if (!cS0x) return;
      e9f = e9f || bb9S;
      var ga1x = e9f.root;
      if (!ga1x) {
        ga1x = gj1x.ownerDocument.location.href;
      } else {
        ga1x = k9b.bsN1x(ga1x);
      }
      cS0x = cS0x.split(',');
      k9b.bd9U(cS0x, function(D9u, r9i, i9b) {
        i9b[r9i] = k9b.bsN1x(D9u, ga1x);
      });
      return cS0x;
    };
    var cyR6L = function(gj1x, e9f) {
      if (!gj1x) return;
      var cS0x = YB5G(gj1x, e9f);
      if (!!cS0x)
        v9m.cyT6N(cS0x, {
          version: a8i.t9k(gj1x, 'version'),
        });
      a8i.bPF6z(gj1x.value);
    };
    var cyL6F = function(D9u) {
      cx0x--;
      a8i.bPH6B(D9u);
      QQ3x();
    };
    var cyK6E = function(gj1x, e9f) {
      if (!gj1x) return;
      var cS0x = YB5G(gj1x, e9f),
        eS1x = gj1x.value;
      if (!!cS0x) {
        cx0x++;
        var e9f = {
          version: a8i.t9k(gj1x, 'version'),
          onloaded: cyL6F.g9d(null, eS1x),
        };
        window.setTimeout(v9m.cyW6Q.g9d(v9m, cS0x, e9f), 0);
        return;
      }
      a8i.bPH6B(eS1x);
    };
    var cyJ6D = function(mL3x) {
      cx0x--;
      a8i.cX0x(mL3x);
      QQ3x();
    };
    var cyI6C = function(gj1x, e9f) {
      if (!gj1x) return;
      var cS0x = YB5G(gj1x, e9f)[0];
      if (!!cS0x) {
        cx0x++;
        var e9f = {
          version: a8i.t9k(gj1x, 'version'),
          onloaded: cyJ6D,
        };
        window.setTimeout(v9m.bTK8C.g9d(v9m, cS0x, e9f), 0);
      }
    };
    var cyH6B = function(C9t, cH0x) {
      cx0x--;
      a8i.Lc1x(C9t, cH0x || '');
      QQ3x();
    };
    var cyE6y = function(gj1x, e9f) {
      if (!gj1x || !gj1x.id) return;
      var C9t = gj1x.id,
        cS0x = YB5G(gj1x, e9f)[0];
      if (!!cS0x) {
        cx0x++;
        var Y9P =
            cS0x + (cS0x.indexOf('?') < 0 ? '?' : '&') + (a8i.t9k(gj1x, 'version') || ''),
          e9f = {
            type: 'text',
            method: 'GET',
            onload: cyH6B.g9d(null, C9t),
          };
        window.setTimeout(v9m.bn9e.g9d(v9m, Y9P, e9f), 0);
      }
    };
    var cyD6x = function(f9e, e9f) {
      var u9l = f9e.name.toLowerCase();
      switch (u9l) {
        case 'jst':
          a8i.ex0x(f9e, !0);
          return;
        case 'txt':
          a8i.Lc1x(f9e.id, f9e.value || '');
          return;
        case 'ntp':
          a8i.iB2x(f9e.value || '', f9e.id);
          return;
        case 'js':
          cyK6E(f9e, e9f);
          return;
        case 'css':
          cyR6L(f9e, e9f);
          return;
        case 'html':
          cyI6C(f9e, e9f);
          return;
        case 'res':
          cyE6y(f9e, e9f);
          return;
      }
    };
    I9z.fL1x.A9r({
      element: document,
      event: 'templateready',
      oneventadd: QQ3x,
    });
    return function(F9w, e9f) {
      F9w = a8i.B9s(F9w);
      if (!!F9w) {
        var i9b =
          F9w.tagName == 'TEXTAREA' ? [F9w] : F9w.getElementsByTagName('textarea');
        k9b.bd9U(i9b, function(f9e) {
          cyD6x(f9e, e9f);
        });
        a8i.cJ0x(F9w, !0);
      }
      QQ3x();
      return this;
    };
  })();
  a8i.Lc1x = function(J9A, D9u) {
    R9I[J9A] = D9u || '';
    return this;
  };
  a8i.iH2x = function(J9A) {
    return R9I[J9A] || '';
  };
  a8i.iB2x = function(F9w, J9A) {
    J9A = J9A || k9b.oj4n();
    F9w = a8i.B9s(F9w) || F9w;
    a8i.Lc1x(tE5J + J9A, F9w);
    a8i.mu3x(F9w);
    return J9A;
  };
  a8i.dy0x = function(J9A) {
    if (!J9A) return null;
    J9A = tE5J + J9A;
    var D9u = a8i.iH2x(J9A);
    if (!D9u) return null;
    if (k9b.fH1x(D9u)) {
      D9u = a8i.nI4M(D9u);
      a8i.Lc1x(J9A, D9u);
    }
    return D9u.cloneNode(!0);
  };
  a8i.Ax8p = (function() {
    var IH0x = function(D9u, J9A) {
      return J9A == 'offset' || J9A == 'limit';
    };
    return function(i9b, p9g, e9f) {
      var bs9j = [];
      if (!i9b || !i9b.length || !p9g) return bs9j;
      e9f = e9f || bb9S;
      var dr0x = i9b.length,
        jP2x = parseInt(e9f.offset) || 0,
        fT1x = Math.min(dr0x, jP2x + (parseInt(e9f.limit) || dr0x)),
        cq0x = {
          total: i9b.length,
          range: [jP2x, fT1x],
        };
      NEJ.X(cq0x, e9f, IH0x);
      for (var i = jP2x, cA0x; i < fT1x; i++) {
        cq0x.index = i;
        cq0x.data = i9b[i];
        cA0x = p9g.A9r(cq0x);
        var C9t = cA0x.EF9w();
        R9I[C9t] = cA0x;
        cA0x.T9K = cA0x.T9K.eF0x(
          function(C9t, cA0x) {
            delete R9I[C9t];
            delete cA0x.T9K;
          }.g9d(null, C9t, cA0x)
        );
        bs9j.push(cA0x);
      }
      return bs9j;
    };
  })();
  a8i.bTB8t = function(C9t) {
    return R9I[C9t];
  };
  a8i.cEa7T = function(dZ0x, e9f) {
    e9f = e9f || bb9S;
    a8i.cX0x(e9f.tid || 'template-box');
    h9c.s9j(document, 'templateready', function() {
      dZ0x.A9r().z9q('onshow', e9f);
    });
  };
  c9h('dbg').dumpTC = function() {
    return R9I;
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    br9i = NEJ.F,
    a8i = c9h('nej.e'),
    k9b = c9h('nej.u'),
    I9z = c9h('nej.ut'),
    O9F = c9h('nej.ui'),
    b9i;
  if (!!O9F.eg0x) return;
  O9F.eg0x = NEJ.C();
  b9i = O9F.eg0x.N9E(I9z.cI0x);
  b9i.cy0x = function() {
    this.cG0x();
    a8i.bPn6h();
    this.cf0x();
    this.bW0x();
  };
  b9i.bk9b = function(e9f) {
    this.bm9d(e9f);
    this.cyq5v(e9f.clazz);
    this.bTz8r(e9f.parent);
  };
  b9i.bD0x = function() {
    this.bG0x();
    this.bTx8p();
    delete this.gi1x;
    a8i.mu3x(this.n9e);
    a8i.x9o(this.n9e, this.bjN9E);
    delete this.bjN9E;
  };
  b9i.cf0x = br9i;
  b9i.bW0x = function() {
    if (!this.ce0x) this.Lh1x();
    this.n9e = a8i.dy0x(this.ce0x);
    if (!this.n9e) this.n9e = a8i.dh0x('div', this.ma3x);
    a8i.y9p(this.n9e, this.ma3x);
  };
  b9i.Lh1x = br9i;
  b9i.cyq5v = function(ec0x) {
    this.bjN9E = ec0x || '';
    a8i.y9p(this.n9e, this.bjN9E);
  };
  b9i.cyl5q = function() {
    if (!this.ma3x) return;
    a8i.y9p(this.gi1x, this.ma3x + '-parent');
  };
  b9i.bTx8p = function() {
    if (!this.ma3x) return;
    a8i.x9o(this.gi1x, this.ma3x + '-parent');
  };
  b9i.lK3x = function() {
    return this.n9e;
  };
  b9i.bTz8r = function(bI0x) {
    if (!this.n9e) return this;
    this.bTx8p();
    if (k9b.gJ2x(bI0x)) {
      this.gi1x = bI0x(this.n9e);
    } else {
      this.gi1x = a8i.B9s(bI0x);
      if (!!this.gi1x) this.gi1x.appendChild(this.n9e);
    }
    this.cyl5q();
    return this;
  };
  b9i.L9C = function() {
    if (!this.gi1x || !this.n9e || this.n9e.parentNode == this.gi1x) return this;
    this.gi1x.appendChild(this.n9e);
    return this;
  };
  b9i.bt9k = function() {
    a8i.mu3x(this.n9e);
    return this;
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    br9i = NEJ.F,
    a8i = c9h('nej.e'),
    k9b = c9h('nej.u'),
    be9V = c9h('nej.h'),
    O9F = c9h('nej.ui'),
    wU6O,
    bTu8m;
  if (!!O9F.Rm3x) return;
  O9F.Rm3x = NEJ.C();
  wU6O = O9F.Rm3x.N9E(O9F.eg0x);
  bTu8m = O9F.Rm3x.ct0x;
  wU6O.bk9b = function(e9f) {
    this.bm9d(e9f);
    this.wv6p('oncontentready', e9f.oncontentready || this.cyc5h.g9d(this));
    this.cyb5g = !!e9f.nohack;
    this.cxY5d = !!e9f.destroyable;
    this.Lk1x(e9f.content);
  };
  wU6O.bD0x = function() {
    this.z9q('onbeforerecycle');
    this.bG0x();
    this.Yd5i();
    this.Lk1x('');
    a8i.eY1x(this.n9e, {
      top: '',
      left: '',
    });
  };
  wU6O.cyc5h = br9i;
  wU6O.Lt1x = br9i;
  wU6O.Yd5i = function() {
    a8i.mu3x(this.n9e);
    if (!!this.nQ4U) {
      this.nQ4U = be9V.bhL8D(this.n9e);
      delete this.nQ4U;
    }
  };
  wU6O.Lk1x = function(bo9f) {
    if (!this.n9e || !this.Ao7h || bo9f == null) return this;
    bo9f = bo9f || '';
    k9b.fH1x(bo9f) ? (this.Ao7h.innerHTML = bo9f) : this.Ao7h.appendChild(bo9f);
    this.z9q('oncontentready', this.Ao7h);
    return this;
  };
  wU6O.gI2x = function(bi9Z) {
    var D9u = bi9Z.top;
    if (D9u != null) {
      D9u += 'px';
      a8i.ba9R(this.n9e, 'top', D9u);
      a8i.ba9R(this.nQ4U, 'top', D9u);
    }
    var D9u = bi9Z.left;
    if (D9u != null) {
      D9u += 'px';
      a8i.ba9R(this.n9e, 'left', D9u);
      a8i.ba9R(this.nQ4U, 'left', D9u);
    }
    return this;
  };
  wU6O.L9C = function() {
    a8i.ba9R(this.n9e, 'visibility', 'hidden');
    bTu8m.L9C.apply(this, arguments);
    this.Lt1x();
    a8i.ba9R(this.n9e, 'visibility', '');
    if (!this.cyb5g) {
      this.nQ4U = be9V.nQ4U(this.n9e);
    }
    return this;
  };
  wU6O.bt9k = function() {
    this.cxY5d ? this.T9K() : this.Yd5i();
    return this;
  };
})();
(function() {
  var c9h = NEJ.P,
    br9i = NEJ.F,
    k9b = c9h('nej.u'),
    a8i = c9h('nej.e'),
    O9F = c9h('nej.ui'),
    Dp8h;
  if (!!O9F.XZ5e) return;
  O9F.XZ5e = NEJ.C();
  Dp8h = O9F.XZ5e.N9E(O9F.eg0x);
  Dp8h.bk9b = function(e9f) {
    this.RG3x();
    this.bm9d(this.cxX5c(e9f));
    this.cd0x.onbeforerecycle = this.T9K.g9d(this);
    this.pl4p = this.blE9v();
  };
  Dp8h.bD0x = function() {
    this.z9q('onbeforerecycle');
    this.bG0x();
    delete this.cd0x;
    a8i.mu3x(this.n9e);
    var Do8g = this.pl4p;
    if (!!Do8g) {
      delete this.pl4p;
      Do8g.T9K();
    }
  };
  Dp8h.blE9v = br9i;
  Dp8h.cxX5c = function(e9f) {
    var o9f = {};
    k9b.eD0x(
      e9f,
      function(p9g, J9A) {
        this.cd0x.hasOwnProperty(J9A) ? (this.cd0x[J9A] = p9g) : (o9f[J9A] = p9g);
      },
      this
    );
    return o9f;
  };
  Dp8h.RG3x = function() {
    this.cd0x = {
      clazz: '',
      parent: null,
      content: this.n9e,
      destroyable: !1,
      oncontentready: null,
      nohack: !1,
    };
  };
  Dp8h.L9C = function() {
    if (!!this.pl4p) this.pl4p.L9C();
    this.z9q('onaftershow');
    return this;
  };
  Dp8h.bt9k = function() {
    if (!!this.pl4p) this.pl4p.bt9k();
    return this;
  };
})();
(function() {
  var c9h = NEJ.P,
    ek0x = c9h('nej.g'),
    be9V = c9h('nej.h'),
    a8i = c9h('nej.e'),
    k9b = c9h('nej.u'),
    h9c = c9h('nej.v'),
    O9F = c9h('nej.ui'),
    RR3x,
    bTt8l;
  if (!!O9F.LA1x) return;
  var iW2x = a8i.sK5P(
    '.#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(' +
      ek0x.blV9M +
      ');}'
  );
  O9F.LA1x = NEJ.C();
  RR3x = O9F.LA1x.N9E(O9F.eg0x);
  bTt8l = O9F.LA1x.ct0x;
  RR3x.bk9b = function(e9f) {
    this.bm9d(e9f);
    var bo9f = e9f.content || '&nbsp;';
    k9b.fH1x(bo9f) ? (this.n9e.innerHTML = bo9f) : this.n9e.appendChild(bo9f);
  };
  RR3x.bD0x = function() {
    this.bG0x();
    this.n9e.innerHTML = '&nbsp;';
  };
  RR3x.cf0x = function() {
    this.ma3x = iW2x;
  };
  RR3x.L9C = function() {
    be9V.bgS8K(this.n9e);
    bTt8l.L9C.apply(this, arguments);
    return this;
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    O9F = c9h('nej.ut'),
    xa6U;
  if (!!O9F.uV6P) return;
  O9F.uV6P = NEJ.C();
  xa6U = O9F.uV6P.N9E(O9F.cI0x);
  xa6U.bk9b = function(e9f) {
    this.bm9d(e9f);
    this.cxV5a = !!e9f.overflow;
    this.n9e = a8i.B9s(e9f.body);
    this.CZ8R = a8i.B9s(e9f.view) || a8i.bLt5y(this.n9e);
    this.bTs8k = a8i.B9s(e9f.mbar) || this.n9e;
    this.XQ5V = parseInt(e9f.direction) || 0;
    if (!!e9f.isRelative) {
      this.n9e.style.position = 'relative';
      this.bmY9P = true;
      this.bmZ9Q();
    }
    this.bX0x([
      [document, 'mouseup', this.bnw9n.g9d(this)],
      [document, 'mousemove', this.bnP0x.g9d(this)],
      [this.bTs8k, 'mousedown', this.VH4L.g9d(this)],
    ]);
  };
  xa6U.bmZ9Q = function() {
    if (!!this.bmY9P) {
      this.LG1x = a8i.hQ2x(this.n9e, this.CZ8R);
      this.LG1x.x -= parseInt(a8i.de0x(this.n9e, 'left')) || 0;
      this.LG1x.y -= parseInt(a8i.de0x(this.n9e, 'top')) || 0;
    }
  };
  xa6U.bD0x = function() {
    this.bG0x();
    delete this.n9e;
    delete this.bTs8k;
    delete this.CZ8R;
  };
  xa6U.bnX0x = function() {
    return {
      x: Math.max(this.CZ8R.clientWidth, this.CZ8R.scrollWidth) - this.n9e.offsetWidth,
      y: Math.max(this.CZ8R.clientHeight, this.CZ8R.scrollHeight) - this.n9e.offsetHeight,
    };
  };
  xa6U.VH4L = function(d9g) {
    h9c.bh9Y(d9g);
    if (!!this.hN2x) return;
    this.hN2x = {
      x: h9c.jB2x(d9g),
      y: h9c.mg3x(d9g),
    };
    this.bTr8j = this.bnX0x();
    this.z9q('ondragstart', d9g);
  };
  xa6U.bnP0x = function(d9g) {
    if (!this.hN2x) return;
    var bi9Z = {
      x: h9c.jB2x(d9g),
      y: h9c.mg3x(d9g),
    };
    var pP4T = bi9Z.x - this.hN2x.x,
      pO4S = bi9Z.y - this.hN2x.y,
      D9u = {
        top: (parseInt(a8i.de0x(this.n9e, 'top')) || 0) + pO4S,
        left: (parseInt(a8i.de0x(this.n9e, 'left')) || 0) + pP4T,
      };
    if (this.bmY9P) {
      this.bmZ9Q();
      D9u.top = D9u.top + this.LG1x.y;
      D9u.left = D9u.left + this.LG1x.x;
    }
    this.hN2x = bi9Z;
    this.gI2x(D9u);
  };
  xa6U.bnw9n = function(d9g) {
    if (!this.hN2x) return;
    delete this.bTr8j;
    delete this.hN2x;
    this.z9q('ondragend', this.boy0x());
  };
  xa6U.gI2x = function(d9g) {
    if (!this.cxV5a) {
      var bTq8i = this.bTr8j || this.bnX0x();
      d9g.top = Math.min(bTq8i.y, Math.max(0, d9g.top));
      d9g.left = Math.min(bTq8i.x, Math.max(0, d9g.left));
    }
    var ci0x = this.n9e.style;
    if (this.bmY9P) {
      this.bmZ9Q();
      d9g.top = d9g.top - this.LG1x.y;
      d9g.left = d9g.left - this.LG1x.x;
    }
    if (this.XQ5V == 0 || this.XQ5V == 2) ci0x.top = d9g.top + 'px';
    if (this.XQ5V == 0 || this.XQ5V == 1) ci0x.left = d9g.left + 'px';
    this.z9q('onchange', d9g);
    return this;
  };
  xa6U.boy0x = function() {
    return {
      left: parseInt(a8i.de0x(this.n9e, 'left')) || 0,
      top: parseInt(a8i.de0x(this.n9e, 'top')) || 0,
    };
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    a8i = NEJ.P('nej.e'),
    h9c = NEJ.P('nej.v'),
    k9b = NEJ.P('nej.u'),
    I9z = NEJ.P('nej.ut'),
    O9F = NEJ.P('nej.ui'),
    iW2x,
    gh1x,
    b9i,
    K9B;
  if (!!O9F.XH5M) return;
  O9F.XH5M = NEJ.C();
  b9i = O9F.XH5M.N9E(O9F.Rm3x);
  K9B = O9F.XH5M.ct0x;
  b9i.cy0x = function() {
    this.sj5o = {};
    this.ld3x = {
      onchange: this.bnP0x.g9d(this),
    };
    this.cG0x();
  };
  b9i.bk9b = function(e9f) {
    this.bm9d(e9f);
    this.cxN5S(e9f.mask);
    this.cxJ5O(e9f.align);
    this.CT8L(e9f.title);
    if (!e9f.draggable) return;
    this.iP2x = I9z.uV6P.A9r(this.ld3x);
  };
  b9i.bD0x = function() {
    this.bG0x();
    delete this.rj5o;
    delete this.Sj4n;
    if (!!this.CR8J) {
      this.CR8J.T9K();
      delete this.CR8J;
    }
    if (!!this.iP2x) {
      this.iP2x.T9K();
      delete this.iP2x;
    }
  };
  b9i.cf0x = function() {
    this.ma3x = iW2x;
    this.ce0x = gh1x;
  };
  b9i.bW0x = function() {
    this.ch0x();
    var i9b = a8i.dj0x(this.n9e);
    this.Ao7h = i9b[1];
    this.ld3x.mbar = i9b[0];
    this.ld3x.body = this.n9e;
    h9c.s9j(i9b[2], 'mousedown', this.cxI5N.g9d(this));
    h9c.s9j(this.ld3x.mbar, 'mousedown', this.VH4L.g9d(this));
    this.bTo8g = a8i.dj0x(this.ld3x.mbar)[0];
  };
  b9i.cxI5N = function(d9g) {
    h9c.bh9Y(d9g);
    this.z9q('onclose', d9g);
    if (!d9g.stopped) {
      this.bt9k();
    }
  };
  b9i.VH4L = function(d9g) {
    h9c.z9q(document, 'click');
  };
  b9i.bnP0x = function(d9g) {
    if (!this.nQ4U) return;
    a8i.eY1x(this.nQ4U, {
      top: d9g.top + 'px',
      left: d9g.left + 'px',
    });
  };
  b9i.Lt1x = (function() {
    var ew0x = [
        function() {
          return 0;
        },
        function(ol4p, mB3x, bi9Z, J9A) {
          if (J9A == 'top' && window.top != window.self) {
            var XF5K = 0,
              Fp9g = 0;
            if (top.g_topBarHeight) XF5K = top.g_topBarHeight;
            if (top.g_bottomBarShow && top.g_bottomBarHeight)
              Fp9g = top.g_bottomBarHeight;
            if (ol4p.top <= XF5K) {
              var brb0x = Math.max(
                0,
                (mB3x.height - (XF5K - ol4p.top) - Fp9g - bi9Z.height) / 2
              );
              return brb0x + XF5K;
            } else {
              var brb0x = Math.max(0, (mB3x.height - Fp9g - bi9Z.height) / 2);
              return brb0x + ol4p.top;
            }
          }
          return Math.max(0, ol4p[J9A] + (mB3x[iz2x[J9A]] - bi9Z[iz2x[J9A]]) / 2);
        },
        function(ol4p, mB3x, bi9Z, J9A) {
          return ol4p[J9A] + (mB3x[iz2x[J9A]] - bi9Z[iz2x[J9A]]);
        },
      ],
      cxw5B = ['left', 'top'],
      iz2x = {
        left: 'width',
        top: 'height',
      };
    return function() {
      var D9u = {},
        ci0x = this.n9e.style,
        jL2x = a8i.oE4I(),
        ol4p = {
          left: jL2x.scrollLeft,
          top: jL2x.scrollTop,
        },
        mB3x = {
          width: jL2x.clientWidth,
          height: jL2x.clientHeight,
        },
        bi9Z = {
          width: this.n9e.offsetWidth,
          height: this.n9e.offsetHeight,
        },
        dp0x = {
          left: jL2x.clientWidth - this.n9e.offsetWidth,
          top: jL2x.clientHeight - this.n9e.offsetHeight,
        };
      k9b.bd9U(
        cxw5B,
        function(J9A, r9i) {
          var dx0x = ew0x[this.rj5o[r9i]];
          if (!dx0x) return;
          D9u[J9A] = dx0x(ol4p, mB3x, bi9Z, J9A);
        },
        this
      );
      this.gI2x(D9u);
    };
  })();
  b9i.cxv5A = function() {
    if (!this.CR8J) {
      if (!this.Sj4n) return;
      this.sj5o.parent = this.gi1x;
      this.CR8J = this.Sj4n.A9r(this.sj5o);
    }
    this.CR8J.L9C();
  };
  b9i.Yd5i = function() {
    if (!!this.CR8J) this.CR8J.bt9k();
    K9B.Yd5i.apply(this, arguments);
  };
  b9i.cxN5S = function(lm3x) {
    if (!!lm3x) {
      if (lm3x instanceof O9F.LA1x) {
        this.CR8J = lm3x;
        return;
      }
      if (k9b.gJ2x(lm3x)) {
        this.Sj4n = lm3x;
        return;
      }
      this.Sj4n = O9F.LA1x;
      if (k9b.fH1x(lm3x)) this.sj5o.clazz = lm3x;
      return;
    }
    this.Sj4n = null;
  };
  b9i.CT8L = function(eo0x, dQ0x) {
    if (!!this.bTo8g) {
      var beM7F = !dQ0x ? 'innerText' : 'innerHTML';
      this.bTo8g[beM7F] = eo0x || '标题';
    }
    return this;
  };
  b9i.cxJ5O = (function() {
    var df0x = /\s+/,
      cxt5y = {
        left: 0,
        center: 1,
        right: 2,
        auto: 3,
      },
      cxs5x = {
        top: 0,
        middle: 1,
        bottom: 2,
        auto: 3,
      };
    return function(ob4f) {
      this.rj5o = (ob4f || '').split(df0x);
      var cl0x = cxt5y[this.rj5o[0]];
      if (cl0x == null) cl0x = 1;
      this.rj5o[0] = cl0x;
      var cl0x = cxs5x[this.rj5o[1]];
      if (cl0x == null) cl0x = 1;
      this.rj5o[1] = cl0x;
      return this;
    };
  })();
  b9i.L9C = function() {
    K9B.L9C.apply(this, arguments);
    this.cxv5A();
    return this;
  };
  iW2x = a8i.sK5P(
    '.#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}'
  );
  gh1x = a8i.iB2x(
    '<div class="' +
      iW2x +
      '"><div class="zbar"><div class="zttl f-thide">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>'
  );
})();
(function() {
  var c9h = NEJ.P,
    k9b = c9h('nej.u'),
    O9F = c9h('nej.ui'),
    bsd1x;
  if (!!O9F.XE5J) return;
  O9F.XE5J = NEJ.C();
  bsd1x = O9F.XE5J.N9E(O9F.XZ5e);
  bsd1x.blE9v = function() {
    return O9F.XH5M.A9r(this.cd0x);
  };
  bsd1x.RG3x = function() {
    O9F.XE5J.ct0x.RG3x.apply(this, arguments);
    this.cd0x.mask = null;
    this.cd0x.title = '标题';
    this.cd0x.align = '';
    this.cd0x.draggable = !1;
    this.cd0x.onclose = null;
  };
})();
(function() {
  var c9h = NEJ.P,
    a8i = c9h('nej.e'),
    bc9T = c9h('nej.ui'),
    m9d = c9h('nm.l'),
    b9i,
    K9B;
  m9d.el0x = NEJ.C();
  b9i = m9d.el0x.N9E(bc9T.XE5J);
  b9i.bk9b = function(e9f) {
    e9f.clazz = 'm-layer z-show ' + (e9f.clazz || '');
    e9f.nohack = true;
    e9f.draggable = true;
    this.bm9d(e9f);
  };
  b9i.dX0x = function(f9e, bH0x) {
    if (!f9e) return;
    a8i.ba9R(f9e, 'display', !bH0x ? 'none' : '');
    f9e.lastChild.innerText = bH0x || '';
  };
  b9i.dY0x = function(gC1x, cW0x, Sn4r, Sz4D) {
    var dZ0x = 'js-lock';
    if (cW0x === undefined) return a8i.bE0x(gC1x, dZ0x);
    !cW0x ? a8i.x9o(gC1x, dZ0x) : a8i.y9p(gC1x, dZ0x);
    gC1x.firstChild.innerText = !cW0x ? Sn4r : Sz4D;
  };
  m9d.el0x.L9C = function(e9f) {
    e9f = e9f || {};
    if (e9f.mask === undefined) e9f.mask = 'm-mask';
    if (e9f.parent === undefined) e9f.parent = document.body;
    if (e9f.draggable === undefined) e9f.draggable = true;
    !!this.ff1x && this.ff1x.T9K();
    this.ff1x = this.A9r(e9f);
    this.ff1x.L9C(e9f);
    return this.ff1x;
  };
  m9d.el0x.bt9k = function() {
    !!this.ff1x && this.ff1x.T9K();
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    q9h = c9h('nm.d'),
    l9c = c9h('nm.x'),
    m9d = c9h('nm.l'),
    b9i,
    K9B;
  m9d.btJ1x = NEJ.C();
  b9i = m9d.btJ1x.N9E(m9d.el0x);
  K9B = m9d.btJ1x.ct0x;
  b9i.bk9b = function(e9f) {
    this.bm9d(e9f);
    if (e9f.bubble === undefined) e9f.bubble = true;
    this.SA4E = e9f.bubble;
    this.ro5t = e9f.message || '';
  };
  b9i.cf0x = function() {
    this.ce0x = a8i.iB2x('<div class="lyct f-cb f-tc"></div>');
  };
  b9i.bW0x = function() {
    this.ch0x();
    h9c.s9j(this.n9e, 'click', this.cK0x.g9d(this));
  };
  b9i.cK0x = function(d9g) {
    var f9e = h9c.W9N(d9g, 'd:action');
    if (!f9e) return;
    if (f9e.href) h9c.cr0x(d9g);
    if (a8i.t9k(f9e, 'action') == 'close') this.bt9k();
    if (this.SA4E === !1) h9c.te5j(d9g);
    this.z9q('onaction', a8i.t9k(f9e, 'action'));
  };
  b9i.L9C = function() {
    K9B.L9C.call(this);
    this.n9e.innerHTML = this.ro5t;
  };
  var gG2x = a8i.ex0x(
    '<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="javascript:;" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>'
  );
  l9c.mW3x = (function() {
    var ei0x;
    var cA0x;
    var buD1x = function(eP1x, U9L) {
      if (k9b.gJ2x(eP1x, 'function') && eP1x(U9L) != -1) cA0x.T9K();
    };
    var CN8F = function() {
      !!cA0x && cA0x.bt9k();
    };
    return function(e9f) {
      clearTimeout(ei0x);
      e9f = e9f || {};
      e9f.title = e9f.title || '提示';
      e9f.clazz = e9f.clazz || '';
      e9f.parent = e9f.parent || document.body;
      e9f.buttons = e9f.buttons || [];
      e9f.message = a8i.bZ0x(gG2x, e9f);
      e9f.onaction = buD1x.g9d(null, e9f.action);
      if (e9f.mask === undefined) e9f.mask = true;
      if (e9f.draggable === undefined) e9f.draggable = true;
      !!cA0x && cA0x.T9K();
      cA0x = m9d.btJ1x.A9r(e9f);
      cA0x.L9C();
      if (e9f.autoclose) ei0x = setTimeout(CN8F.g9d(null), 2000);
      return cA0x;
    };
  })();
  l9c.fs1x = function(e9f) {
    e9f = e9f || {};
    e9f.clazz = e9f.clazz || 'm-layer-w1';
    e9f.buttons = [
      {
        klass: 'u-btn2-2',
        action: 'close',
        text: e9f.btntxt || '确定',
      },
    ];
    var cA0x = l9c.mW3x(e9f);
    return cA0x;
  };
  l9c.hr2x = function(e9f) {
    e9f = e9f || {};
    e9f.clazz = e9f.clazz || 'm-layer-w2';
    e9f.buttons = [
      {
        klass: 'u-btn2-2',
        action: 'ok',
        text: e9f.btnok || '确定',
        style: e9f.okstyle || '',
      },
      {
        klass: 'u-btn2-1',
        action: 'close',
        text: e9f.btncc || '取消',
        style: e9f.ccstyle || '',
      },
    ];
    var cA0x = l9c.mW3x(e9f);
    return cA0x;
  };
})();
(function() {
  var c9h = NEJ.P,
    br9i = NEJ.F,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u');
  a8i.cxr5w = (function() {
    var gH2x = /[\r\n]/gi,
      R9I = {};
    var cxq5v = function(cL0x) {
      return (cL0x || '').replace(gH2x, 'aa').length;
    };
    var bTk8c = function(C9t) {
      var bg9X = R9I[C9t],
        bTj8b = a8i.B9s(C9t),
        rk5p = a8i.B9s(C9t + '-counter');
      if (!bTj8b || !bg9X) return;
      var d9g = {
        input: bTj8b.value,
      };
      d9g.length = bg9X.onlength(d9g.input);
      d9g.delta = bg9X.max - d9g.length;
      bg9X.onchange(d9g);
      rk5p.innerHTML = d9g.value || '剩余' + d9g.delta + '个字';
    };
    return function(F9w, e9f) {
      var C9t = a8i.lw3x(F9w);
      if (!C9t || !!R9I[C9t]) return;
      var bg9X = NEJ.X({}, e9f);
      bg9X.onchange = bg9X.onchange || br9i;
      bg9X.onlength = cxq5v;
      if (!bg9X.max) {
        var bTi8a = parseInt(a8i.gy1x(C9t, 'maxlength')),
          bTh8Z = parseInt(a8i.t9k(C9t, 'maxLength'));
        bg9X.max = bTi8a || bTh8Z || 100;
        if (!bTi8a && !!bTh8Z) bg9X.onlength = k9b.fy1x;
      }
      R9I[C9t] = bg9X;
      h9c.s9j(C9t, 'input', bTk8c.g9d(null, C9t));
      var f9e = a8i.Ja0x(C9t, {
        nid: bg9X.nid || 'js-counter',
        clazz: bg9X.clazz,
      });
      bg9X.xid = C9t + '-counter';
      f9e.id = bg9X.xid;
      bTk8c(C9t);
    };
  })();
})();
(function() {
  var c9h = NEJ.P,
    a8i = c9h('nej.e'),
    be9V = c9h('nej.h');
  be9V.bww2x = function(F9w, ec0x) {};
})();
(function() {
  var c9h = NEJ.P,
    br9i = NEJ.F,
    O9F = c9h('nej.p'),
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    be9V = c9h('nej.h');
  if (O9F.nq3x.trident) return;
  be9V.bww2x = (function() {
    var R9I = {};
    var Iv0x = function(d9g) {
      var dm0x = h9c.W9N(d9g);
      if (!!dm0x.value) return;
      a8i.ba9R(a8i.Ja0x(dm0x), 'display', 'none');
    };
    var En9e = function(d9g) {
      var dm0x = h9c.W9N(d9g);
      if (!!dm0x.value) return;
      a8i.ba9R(a8i.Ja0x(dm0x), 'display', '');
    };
    var cxl5q = function(dm0x, ec0x) {
      var C9t = a8i.lw3x(dm0x),
        jc2x = a8i.Ja0x(dm0x, {
          tag: 'label',
          clazz: ec0x,
        });
      jc2x.htmlFor = C9t;
      var cH0x = a8i.gy1x(dm0x, 'placeholder') || '';
      jc2x.innerText = cH0x == 'null' ? '' : cH0x;
      var cc0x = dm0x.offsetHeight + 'px';
      a8i.eY1x(jc2x, {
        left: 0,
        display: !dm0x.value ? '' : 'none',
      });
    };
    return be9V.bww2x.eF0x(function(d9g) {
      d9g.stopped = !0;
      var bf9W = d9g.args,
        dm0x = a8i.B9s(bf9W[0]);
      if (!!R9I[dm0x.id]) return;
      cxl5q(dm0x, bf9W[1]);
      R9I[dm0x.id] = !0;
      h9c.s9j(dm0x, 'blur', En9e.g9d(null));
      h9c.s9j(dm0x, 'focus', Iv0x.g9d(null));
    });
  })();
})();
(function() {
  var c9h = NEJ.P,
    be9V = c9h('nej.h'),
    a8i = c9h('nej.e'),
    cY0x = c9h('nej.x');
  a8i.gu1x = cY0x.gu1x = function(F9w, ec0x) {
    be9V.bww2x(F9w, a8i.t9k(F9w, 'holder') || ec0x || 'js-placeholder');
    return this;
  };
  cY0x.isChange = !0;
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    br9i = NEJ.F,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    O9F = c9h('nej.ut'),
    hS2x;
  if (!!O9F.SB4F) return;
  O9F.SB4F = NEJ.C();
  hS2x = O9F.SB4F.N9E(O9F.cI0x);
  hS2x.cy0x = function() {
    this.cG0x();
    this.DW9N = {
      tp: {
        nid: 'js-nej-tp',
      },
      ok: {
        nid: 'js-nej-ok',
      },
      er: {
        nid: 'js-nej-er',
      },
    };
  };
  hS2x.bk9b = function(e9f) {
    this.bm9d(e9f);
    this.gs1x = document.forms[e9f.form] || a8i.B9s(e9f.form);
    this.bX0x([[this.gs1x, 'keypress', this.cxh5m.g9d(this)]]);
    this.ro5t = e9f.message || {};
    this.ro5t.pass = this.ro5t.pass || '&nbsp;';
    var fj1x = this.qh4l(this.gs1x, 'focusMode', 1);
    if (!isNaN(fj1x)) {
      this.bTf8X = {
        mode: fj1x,
        clazz: e9f.focus,
      };
    }
    this.CJ8B = e9f.holder;
    this.DW9N.tp.clazz = 'js-mhd ' + (e9f.tip || 'js-tip');
    this.DW9N.ok.clazz = 'js-mhd ' + (e9f.pass || 'js-pass');
    this.DW9N.er.clazz = 'js-mhd ' + (e9f.error || 'js-error');
    this.bTc8U = e9f.invalid || 'js-invalid';
    this.cxc5h(e9f);
    this.gD2x();
    if (!!this.CH8z) this.CH8z.focus();
  };
  hS2x.bD0x = function() {
    this.bG0x();
    delete this.ro5t;
    delete this.CH8z;
    delete this.Ey9p;
    delete this.gs1x;
    delete this.bTa8S;
    delete this.SD4H;
  };
  hS2x.qh4l = function(f9e, xh7a, u9l) {
    var D9u = a8i.t9k(f9e, xh7a);
    switch (u9l) {
      case 1:
        return parseInt(D9u);
      case 2:
        return (D9u || '').toLowerCase() == 'true';
      case 3:
        return this.bgh8Z(D9u);
    }
    return D9u;
  };
  hS2x.CD8v = function(D9u, u9l) {
    if (u9l == 'date') return this.bgh8Z(D9u);
    return parseInt(D9u);
  };
  hS2x.Xt5y = (function() {
    var kx3x = /^button|submit|reset|image|hidden|file$/i;
    return function(f9e) {
      f9e = this.B9s(f9e) || f9e;
      var u9l = f9e.type;
      return !!f9e.name && !kx3x.test(f9e.type || '');
    };
  })();
  hS2x.cwY5d = (function() {
    var kx3x = /^hidden$/i;
    return function(f9e) {
      if (this.Xt5y(f9e)) return !0;
      f9e = this.B9s(f9e) || f9e;
      var u9l = f9e.type || '';
      return kx3x.test(u9l);
    };
  })();
  hS2x.bgh8Z = (function() {
    var df0x = /[-\/]/;
    var cwX5c = function(D9u) {
      if (!D9u) return '';
      D9u = D9u.split(df0x);
      D9u.push(D9u.shift());
      return D9u.join('/');
    };
    return function(D9u) {
      if ((D9u || '').toLowerCase() == 'now') return +new Date();
      return Date.parse(cwX5c(D9u));
    };
  })();
  hS2x.cxh5m = function(d9g) {
    if (d9g.keyCode != 13) return;
    this.z9q('onenter', d9g);
  };
  hS2x.cwW5b = function(C9t, V9M) {
    var rY5d = this.SD4H[V9M],
      D9u = this.qh4l(C9t, V9M);
    if (!D9u || !rY5d) return;
    this.Xs5x(C9t, rY5d);
    this.bgD8v(C9t, V9M, D9u);
  };
  hS2x.cwP5U = function(C9t, V9M) {
    try {
      var bSW8O = this.qh4l(C9t, V9M);
      if (!bSW8O) return;
      var D9u = new RegExp(bSW8O);
      this.bgD8v(C9t, V9M, D9u);
      this.Xs5x(C9t, this.SD4H[V9M]);
    } catch (e) {}
  };
  hS2x.cwM5R = function(C9t, V9M) {
    var rY5d = this.SD4H[V9M];
    if (!!rY5d && this.qh4l(C9t, V9M, 2)) this.Xs5x(C9t, rY5d);
  };
  hS2x.bgY8Q = function(C9t, V9M, D9u) {
    D9u = parseInt(D9u);
    if (isNaN(D9u)) return;
    this.bgD8v(C9t, V9M, D9u);
    this.Xs5x(C9t, this.SD4H[V9M]);
  };
  hS2x.bSU8M = function(C9t, V9M) {
    this.bgY8Q(C9t, V9M, this.qh4l(C9t, V9M));
  };
  hS2x.bSS8K = function(C9t, V9M) {
    this.bgY8Q(C9t, V9M, a8i.gy1x(C9t, V9M));
  };
  hS2x.bSR8J = function(C9t, V9M, u9l) {
    var D9u = this.CD8v(this.qh4l(C9t, V9M), this.qh4l(C9t, 'type'));
    this.bgY8Q(C9t, V9M, D9u);
  };
  hS2x.cwH5M = (function() {
    var gH2x = /^input|textarea$/i;
    var Iv0x = function(d9g) {
      this.qa4e(h9c.W9N(d9g));
    };
    var En9e = function(d9g) {
      var f9e = h9c.W9N(d9g);
      if (!this.qh4l(f9e, 'ignore', 2)) {
        this.bSQ8I(f9e);
      }
    };
    return function(f9e) {
      if (this.qh4l(f9e, 'autoFocus', 2)) this.CH8z = f9e;
      var rq5v = a8i.gy1x(f9e, 'placeholder');
      if (!!rq5v && rq5v != 'null') a8i.gu1x(f9e, this.CJ8B);
      if (!!this.bTf8X && gH2x.test(f9e.tagName)) a8i.ms3x(f9e, this.bTf8X);
      var C9t = a8i.lw3x(f9e);
      this.cwM5R(C9t, 'required');
      this.cwW5b(C9t, 'type');
      this.cwP5U(C9t, 'pattern');
      this.bSS8K(C9t, 'maxlength');
      this.bSS8K(C9t, 'minlength');
      this.bSU8M(C9t, 'maxLength');
      this.bSU8M(C9t, 'minLength');
      this.bSR8J(C9t, 'min');
      this.bSR8J(C9t, 'max');
      var V9M = f9e.name;
      this.ro5t[V9M + '-tip'] = this.qh4l(f9e, 'tip');
      this.ro5t[V9M + '-error'] = this.qh4l(f9e, 'message');
      this.qa4e(f9e);
      var by0x = this.Ey9p[C9t],
        j9a = (by0x || bb9S).data || bb9S,
        SL4P = this.qh4l(f9e, 'counter', 2);
      if (SL4P && (j9a.maxlength || j9a.maxLength)) {
        a8i.cxr5w(C9t, {
          nid: this.DW9N.tp.nid,
          clazz: 'js-counter',
        });
      }
      if (!!by0x && gH2x.test(f9e.tagName)) {
        this.bX0x([[f9e, 'focus', Iv0x.g9d(this)], [f9e, 'blur', En9e.g9d(this)]]);
      } else if (this.qh4l(f9e, 'focus', 2)) {
        this.bX0x([[f9e, 'focus', Iv0x.g9d(this)]]);
      }
    };
  })();
  hS2x.cxc5h = (function() {
    var Fw9n = {
      number: /^[\d]+$/i,
      url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
      email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
      date: function(v) {
        return !v || !isNaN(this.bgh8Z(v));
      },
    };
    var cwC5H = {
      required: function(f9e) {
        var u9l = f9e.type,
          cwB5G = !f9e.value,
          cwA5F = (u9l == 'checkbox' || u9l == 'radio') && !f9e.checked;
        if (cwA5F || cwB5G) return -1;
      },
      type: function(f9e, e9f) {
        var df0x = this.bTa8S[e9f.type],
          eS1x = f9e.value.trim(),
          cwu5z = !!df0x.test && !df0x.test(eS1x),
          cwq5v = k9b.gJ2x(df0x) && !df0x.call(this, eS1x);
        if (cwu5z || cwq5v) return -2;
      },
      pattern: function(f9e, e9f) {
        if (!e9f.pattern.test(f9e.value)) return -3;
      },
      maxlength: function(f9e, e9f) {
        if (f9e.value.length > e9f.maxlength) return -4;
      },
      minlength: function(f9e, e9f) {
        if (f9e.value.length < e9f.minlength) return -5;
      },
      maxLength: function(f9e, e9f) {
        if (k9b.fy1x(f9e.value) > e9f.maxLength) return -4;
      },
      minLength: function(f9e, e9f) {
        if (k9b.fy1x(f9e.value) < e9f.minLength) return -5;
      },
      min: function(f9e, e9f) {
        var gS2x = this.CD8v(f9e.value, e9f.type);
        if (isNaN(gS2x) || gS2x < e9f.min) return -6;
      },
      max: function(f9e, e9f) {
        var gS2x = this.CD8v(f9e.value, e9f.type);
        if (isNaN(gS2x) || gS2x > e9f.max) return -7;
      },
    };
    return function(e9f) {
      this.bTa8S = NEJ.X(NEJ.X({}, Fw9n), e9f.type);
      this.SD4H = NEJ.X(NEJ.X({}, cwC5H), e9f.attr);
    };
  })();
  hS2x.Xs5x = function(C9t, ye7X) {
    if (!k9b.gJ2x(ye7X)) return;
    var by0x = this.Ey9p[C9t];
    if (!by0x || !by0x.func) {
      by0x = by0x || {};
      by0x.func = [];
      this.Ey9p[C9t] = by0x;
    }
    by0x.func.push(ye7X);
  };
  hS2x.bgD8v = function(C9t, V9M, D9u) {
    if (!V9M) return;
    var by0x = this.Ey9p[C9t];
    if (!by0x || !by0x.data) {
      by0x = by0x || {};
      by0x.data = {};
      this.Ey9p[C9t] = by0x;
    }
    by0x.data[V9M] = D9u;
  };
  hS2x.bSQ8I = function(f9e) {
    f9e = this.B9s(f9e) || f9e;
    var by0x = this.Ey9p[a8i.lw3x(f9e)];
    if (!f9e || !by0x || !this.Xt5y(f9e)) return !0;
    var o9f;
    k9b.eD0x(
      by0x.func,
      function(ew0x) {
        o9f = ew0x.call(this, f9e, by0x.data);
        return o9f != null;
      },
      this
    );
    if (o9f == null) {
      var d9g = {
        target: f9e,
        form: this.gs1x,
      };
      this.z9q('oncheck', d9g);
      o9f = d9g.value;
    }
    var d9g = {
      target: f9e,
      form: this.gs1x,
    };
    if (o9f != null) {
      d9g.code = o9f;
      this.z9q('oninvalid', d9g);
      if (!d9g.stopped) {
        this.cwo5t(f9e, d9g.value || this.ro5t[f9e.name + o9f]);
      }
    } else {
      this.z9q('onvalid', d9g);
      if (!d9g.stopped) this.cwn5s(f9e, d9g.value);
    }
    return o9f == null;
  };
  hS2x.yc7V = (function() {
    var cwm5r = function(bec7V, beb7U) {
      return bec7V == beb7U ? 'block' : 'none';
    };
    var cwj5o = function(f9e, u9l, bH0x) {
      var rq5v = bSI8A.call(this, f9e, u9l);
      if (!rq5v && !!bH0x) rq5v = a8i.Ja0x(f9e, this.DW9N[u9l]);
      return rq5v;
    };
    var bSI8A = function(f9e, u9l) {
      var rq5v;
      if (u9l == 'tp') rq5v = a8i.B9s(f9e.name + '-tip');
      if (!rq5v) rq5v = a8i.H9y(f9e.parentNode, this.DW9N[u9l].nid)[0];
      return rq5v;
    };
    return function(f9e, bH0x, u9l) {
      f9e = this.B9s(f9e) || f9e;
      if (!f9e) return;
      u9l == 'er' ? a8i.y9p(f9e, this.bTc8U) : a8i.x9o(f9e, this.bTc8U);
      var rq5v = cwj5o.call(this, f9e, u9l, bH0x);
      if (!!rq5v && !!bH0x) rq5v.innerHTML = bH0x;
      k9b.eD0x(
        this.DW9N,
        function(D9u, J9A) {
          a8i.ba9R(bSI8A.call(this, f9e, J9A), 'display', cwm5r(u9l, J9A));
        },
        this
      );
    };
  })();
  hS2x.qa4e = function(f9e, bH0x) {
    this.yc7V(f9e, bH0x || this.ro5t[f9e.name + '-tip'], 'tp');
    return this;
  };
  hS2x.cwn5s = function(f9e, bH0x) {
    this.yc7V(f9e, bH0x || this.ro5t[f9e.name + '-pass'] || this.ro5t.pass, 'ok');
    return this;
  };
  hS2x.cwo5t = function(f9e, bH0x) {
    this.yc7V(f9e, bH0x || this.ro5t[f9e.name + '-error'], 'er');
    return this;
  };
  hS2x.iT2x = (function() {
    var gH2x = /^(?:radio|checkbox)$/i;
    var cwg5l = function(D9u) {
      return D9u == null ? '' : D9u;
    };
    var bSG8y = function(D9u, f9e) {
      if (gH2x.test(f9e.type || '')) {
        f9e.checked = D9u == f9e.value;
      } else {
        f9e.value = cwg5l(D9u);
      }
    };
    return function(V9M, D9u) {
      var f9e = this.B9s(V9M);
      if (!f9e) return this;
      if (f9e.tagName == 'SELECT' || !f9e.length) {
        bSG8y(D9u, f9e);
      } else {
        k9b.bd9U(f9e, bSG8y.g9d(null, D9u));
      }
      return this;
    };
  })();
  hS2x.B9s = function(V9M) {
    return this.gs1x.elements[V9M];
  };
  hS2x.cEd7W = function() {
    return this.gs1x;
  };
  hS2x.Xg5l = (function() {
    var gH2x = /^radio|checkbox$/i,
      kx3x = /^number|date$/;
    var cwc5h = function(bz0x, f9e) {
      var V9M = f9e.name,
        D9u = f9e.value,
        by0x = bz0x[V9M],
        u9l = this.qh4l(f9e, 'type');
      if (kx3x.test(u9l)) D9u = this.CD8v(D9u, u9l);
      if (gH2x.test(f9e.type) && !f9e.checked) {
        D9u = this.qh4l(f9e, 'value');
        if (!D9u) return;
      }
      if (!!by0x) {
        if (!k9b.eI0x(by0x)) {
          by0x = [by0x];
          bz0x[V9M] = by0x;
        }
        by0x.push(D9u);
      } else {
        bz0x[V9M] = D9u;
      }
    };
    return function() {
      var o9f = {};
      k9b.bd9U(
        this.gs1x.elements,
        function(f9e) {
          if (this.cwY5d(f9e)) cwc5h.call(this, o9f, f9e);
        },
        this
      );
      return o9f;
    };
  })();
  hS2x.SZ4d = (function() {
    var cvZ5e = function(f9e) {
      if (this.Xt5y(f9e)) this.qa4e(f9e);
    };
    return function() {
      this.gs1x.reset();
      k9b.bd9U(this.gs1x.elements, cvZ5e, this);
      return this;
    };
  })();
  hS2x.cEf7Y = function() {
    this.gs1x.submit();
    return this;
  };
  hS2x.gD2x = (function() {
    var cvX5c = function(f9e) {
      if (this.Xt5y(f9e)) this.cwH5M(f9e);
    };
    return function() {
      this.Ey9p = {};
      k9b.bd9U(this.gs1x.elements, cvX5c, this);
      return this;
    };
  })();
  hS2x.cvW5b = function(f9e) {
    f9e = this.B9s(f9e) || f9e;
    if (!!f9e) return this.bSQ8I(f9e);
    var o9f = !0;
    k9b.bd9U(
      this.gs1x.elements,
      function(f9e) {
        var js2x = this.cvW5b(f9e);
        o9f = o9f && js2x;
      },
      this
    );
    return o9f;
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    I9z = c9h('nej.ut'),
    k9b = c9h('nej.u'),
    l9c = c9h('nm.x'),
    m9d = c9h('nm.l'),
    b9i,
    K9B;
  m9d.Xc5h = NEJ.C();
  b9i = m9d.Xc5h.N9E(m9d.el0x);
  K9B = m9d.Xc5h.ct0x;
  b9i.bW0x = function() {
    this.ch0x();
    h9c.s9j(this.n9e, 'click', this.cK0x.g9d(this));
    h9c.s9j(document, 'mousewheel', this.BW8O.g9d(this));
    if (!!document.body.addEventListener)
      document.body.addEventListener('DOMMouseScroll', this.BW8O.g9d(this));
  };
  b9i.bk9b = function(e9f) {
    this.bm9d(e9f);
    if (e9f.jst) {
      this.n9e.innerHTML = a8i.bZ0x(e9f.jst, e9f.data);
    } else if (e9f.ntp) {
      this.n9e.appendChild(a8i.dy0x(e9f.ntp));
    } else if (e9f.txt) {
      this.n9e.innerHTML = a8i.iH2x(e9f.txt);
    } else if (e9f.html) {
      this.n9e.innerHTML = e9f.html;
    }
    var Tl4p = this.n9e.getElementsByTagName('form');
    if (Tl4p.length) {
      this.gs1x = I9z.SB4F.A9r({
        form: Tl4p[0],
      });
    }
    this.Hn0x = a8i.dj0x(this.n9e)[0];
  };
  b9i.bD0x = function() {
    this.z9q('ondestroy');
    this.bG0x();
    this.n9e.innerHTML = '';
    delete this.Hn0x;
  };
  b9i.cK0x = function(d9g) {
    var f9e = h9c.W9N(d9g, 'd:action'),
      j9a = this.gs1x ? this.gs1x.Xg5l() : null,
      d9g = {
        action: a8i.t9k(f9e, 'action'),
      };
    if (j9a) d9g.data = j9a;
    if (d9g.action) {
      this.z9q('onaction', d9g);
      if (d9g.stopped) return;
      this.bt9k();
    }
  };
  b9i.BW8O = function(d9g) {
    if (!this.Hn0x) return;
    h9c.bh9Y(d9g);
    var dp0x = d9g.wheelDelta || -d9g.detail;
    this.Hn0x.scrollTop -= dp0x;
  };
  l9c.kB3x = function(e9f) {
    e9f.destroyable = e9f.destroyable || true;
    e9f.title = e9f.title || '提示';
    e9f.draggable = true;
    e9f.parent = e9f.parent || document.body;
    e9f.mask = e9f.mask || true;
    var Do8g = m9d.Xc5h.A9r(e9f);
    Do8g.L9C();
    return Do8g;
  };
})();
(function() {
  var p = NEJ.P('nej.u');
  var bSB8t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
    Tq4u = {},
    Hv0x = {};
  for (var i = 0, l = bSB8t.length, c; i < l; i++) {
    c = bSB8t.charAt(i);
    Tq4u[i] = c;
    Hv0x[c] = i;
  }
  var cvU5Z = function(iu2x) {
    var r9i = 0,
      c,
      o9f = [];
    while (r9i < iu2x.length) {
      c = iu2x[r9i];
      if (c < 128) {
        o9f.push(String.fromCharCode(c));
        r9i++;
      } else if (c > 191 && c < 224) {
        o9f.push(String.fromCharCode(((c & 31) << 6) | (iu2x[r9i + 1] & 63)));
        r9i += 2;
      } else {
        o9f.push(
          String.fromCharCode(
            ((c & 15) << 12) | ((iu2x[r9i + 1] & 63) << 6) | (iu2x[r9i + 2] & 63)
          )
        );
        r9i += 3;
      }
    }
    return o9f.join('');
  };
  var cvT5Y = (function() {
    var hz2x = /\r\n/g;
    return function(j9a) {
      j9a = j9a.replace(hz2x, '\n');
      var o9f = [],
        mC3x = String.fromCharCode(237);
      if (mC3x.charCodeAt(0) < 0)
        for (var i = 0, l = j9a.length, c; i < l; i++) {
          c = j9a.charCodeAt(i);
          c > 0 ? o9f.push(c) : o9f.push(((256 + c) >> 6) | 192, ((256 + c) & 63) | 128);
        }
      else
        for (var i = 0, l = j9a.length, c; i < l; i++) {
          c = j9a.charCodeAt(i);
          if (c < 128) o9f.push(c);
          else if (c > 127 && c < 2048) o9f.push((c >> 6) | 192, (c & 63) | 128);
          else o9f.push((c >> 12) | 224, ((c >> 6) & 63) | 128, (c & 63) | 128);
        }
      return o9f;
    };
  })();
  var Md1x = function(iu2x) {
    var r9i = 0,
      o9f = [],
      fj1x = iu2x.length % 3;
    if (fj1x == 1) iu2x.push(0, 0);
    if (fj1x == 2) iu2x.push(0);
    while (r9i < iu2x.length) {
      o9f.push(
        Tq4u[iu2x[r9i] >> 2],
        Tq4u[((iu2x[r9i] & 3) << 4) | (iu2x[r9i + 1] >> 4)],
        Tq4u[((iu2x[r9i + 1] & 15) << 2) | (iu2x[r9i + 2] >> 6)],
        Tq4u[iu2x[r9i + 2] & 63]
      );
      r9i += 3;
    }
    if (fj1x == 1) o9f[o9f.length - 1] = o9f[o9f.length - 2] = '=';
    if (fj1x == 2) o9f[o9f.length - 1] = '=';
    return o9f.join('');
  };
  var bSz8r = (function() {
    var rD5I = /\n|\r|=/g;
    return function(j9a) {
      var r9i = 0,
        o9f = [];
      j9a = j9a.replace(rD5I, '');
      for (var i = 0, l = j9a.length; i < l; i += 4)
        o9f.push(
          (Hv0x[j9a.charAt(i)] << 2) | (Hv0x[j9a.charAt(i + 1)] >> 4),
          ((Hv0x[j9a.charAt(i + 1)] & 15) << 4) | (Hv0x[j9a.charAt(i + 2)] >> 2),
          ((Hv0x[j9a.charAt(i + 2)] & 3) << 6) | Hv0x[j9a.charAt(i + 3)]
        );
      var bp9g = o9f.length,
        fj1x = j9a.length % 4;
      if (fj1x == 2) o9f = o9f.slice(0, bp9g - 2);
      if (fj1x == 3) o9f = o9f.slice(0, bp9g - 1);
      return o9f;
    };
  })();
  p.cEg7Z = function(j9a) {
    return cvU5Z(bSz8r(j9a));
  };
  p.cvP5U = function(j9a) {
    var iu2x = bSz8r(j9a),
      dr0x = iu2x.length,
      iv2x;
    var r9i = 0;
    while ((iv2x = iu2x[r9i])) {
      if (iv2x > 128) {
        iu2x[r9i] = iv2x - 256;
      }
      r9i++;
    }
    return iu2x;
  };
  p.cvN5S = function(j9a) {
    try {
      return window.btoa(j9a);
    } catch (ex) {
      return Md1x(cvT5Y(j9a));
    }
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    h9c = c9h('nej.v'),
    a8i = c9h('nej.e'),
    v9m = c9h('nej.j'),
    O9F = c9h('nej.p'),
    k9b = c9h('nej.u'),
    m9d = c9h('nm.l'),
    w9n = c9h('nm.w'),
    bC0x = c9h('nej.ui'),
    q9h = c9h('nm.d'),
    l9c = c9h('nm.x'),
    b9i,
    K9B;
  var TYPE_MAP = {
    13: 'playlist',
    17: 'program',
    18: 'song',
    19: 'album',
  };
  m9d.bSw8o = NEJ.C();
  b9i = m9d.bSw8o.N9E(m9d.el0x);
  b9i.cf0x = function() {
    this.ce0x = 'm-download-layer';
  };
  b9i.bW0x = function() {
    this.ch0x();
    var i9b = a8i.H9y(this.n9e, 'j-flag');
    this.bkL9C = i9b[0];
    this.bkO9F = i9b[1];
    this.bSv8n = i9b[2];
    v9m.bn9e('/client/version/get', {
      type: 'json',
      onload: this.cvJ5O.g9d(this),
    });
    if (O9F.Ig0x.mac) {
      a8i.x9o(this.bkL9C.parentNode, 'f-hide');
      a8i.y9p(this.bkO9F.parentNode, 'f-hide');
      a8i.y9p(this.bSv8n, 'f-hide');
    } else {
      a8i.y9p(this.bkL9C.parentNode, 'f-hide');
      a8i.x9o(this.bkO9F.parentNode, 'f-hide');
      a8i.x9o(this.bSv8n, 'f-hide');
    }
  };
  b9i.bk9b = function(e9f) {
    e9f.clazz = ' m-layer-down';
    e9f.parent = e9f.parent || document.body;
    e9f.title = '下载';
    e9f.draggable = !0;
    e9f.destroyalbe = !0;
    e9f.mask = true;
    this.bm9d(e9f);
    this.bX0x([[this.n9e, 'click', this.bT0x.g9d(this)]]);
    this.eu0x = TYPE_MAP[e9f.type];
    this.gT2x = e9f.id;
  };
  b9i.bD0x = function() {
    this.bG0x();
  };
  b9i.BM8E = function() {
    this.bt9k();
  };
  b9i.Ec9T = function(d9g) {
    this.z9q('onok', D9u);
    this.bt9k();
  };
  b9i.bT0x = function(d9g) {
    var f9e = h9c.W9N(d9g, 'd:action');
    switch (a8i.t9k(f9e, 'action')) {
      case 'download':
        this.bt9k();
        window.open(a8i.t9k(f9e, 'src'));
        break;
      case 'orpheus':
        this.bt9k();
        location.href =
          'orpheus://' +
          k9b.cvN5S(
            JSON.stringify({
              type: this.eu0x,
              id: this.gT2x,
              cmd: 'download',
            })
          );
        break;
    }
  };
  b9i.cvJ5O = function(d9g) {
    if ((d9g || bb9S).code == 200) {
      this.KP1x = d9g.data;
      this.bkL9C.innerText = 'V' + this.KP1x.mac;
      this.bkO9F.innerText = 'V' + this.KP1x.pc;
    }
  };
  l9c.Mh1x = function(e9f) {
    m9d.bSw8o.A9r(e9f).L9C();
  };
})();
(function() {
  var c9h = NEJ.P,
    l9c = c9h('nm.x');
  var FullscreenApi = {};
  var apiMap = [
    [
      'requestFullscreen',
      'exitFullscreen',
      'fullscreenElement',
      'fullscreenEnabled',
      'fullscreenchange',
      'fullscreenerror',
    ],
    [
      'webkitRequestFullscreen',
      'webkitExitFullscreen',
      'webkitFullscreenElement',
      'webkitFullscreenEnabled',
      'webkitfullscreenchange',
      'webkitfullscreenerror',
    ],
    [
      'webkitRequestFullScreen',
      'webkitCancelFullScreen',
      'webkitCurrentFullScreenElement',
      'webkitCancelFullScreen',
      'webkitfullscreenchange',
      'webkitfullscreenerror',
    ],
    [
      'mozRequestFullScreen',
      'mozCancelFullScreen',
      'mozFullScreenElement',
      'mozFullScreenEnabled',
      'mozfullscreenchange',
      'mozfullscreenerror',
    ],
    [
      'msRequestFullscreen',
      'msExitFullscreen',
      'msFullscreenElement',
      'msFullscreenEnabled',
      'MSFullscreenChange',
      'MSFullscreenError',
    ],
  ];
  var specApi = apiMap[0];
  var browserApi;
  for (var i = 0; i < apiMap.length; i++) {
    if (apiMap[i][1] in document) {
      browserApi = apiMap[i];
      break;
    }
  }
  if (browserApi) {
    for (var i = 0; i < browserApi.length; i++) {
      FullscreenApi[specApi[i]] = browserApi[i];
    }
  }
  l9c.Ee9V = FullscreenApi;
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    k9b = c9h('nej.u'),
    q9h = c9h('nm.d'),
    bP0x = {};
  q9h.B9s = function(J9A) {
    return bP0x[J9A];
  };
  q9h.nl3x = function(J9A, bg9X) {
    bP0x[J9A] = bg9X;
  };
  q9h.fl1x = function(j9a) {
    k9b.eD0x(j9a, function(p9g, J9A) {
      var bg9X = bP0x[J9A] || {};
      NEJ.X(bg9X, p9g);
      bP0x[J9A] = bg9X;
    });
  };
})();
(function() {
  var c9h = NEJ.P,
    br9i = NEJ.F,
    be9V = c9h('nej.h');
  be9V.WL5Q = function(J9A) {
    return localStorage.getItem(J9A);
  };
  be9V.WK5P = function(J9A, D9u) {
    localStorage.setItem(J9A, D9u);
  };
  be9V.blY9P = function(J9A) {
    localStorage.removeItem(J9A);
  };
  be9V.bmf9W = function() {
    localStorage.clear();
  };
  be9V.cvI5N = function() {
    var o9f = [];
    for (var i = 0, l = localStorage.length; i < l; i++) o9f.push(localStorage.key(i));
    return o9f;
  };
  be9V.bmj9a = function() {
    (document.onstorageready || br9i)();
  };
  be9V.bmm9d = function() {
    return !0;
  };
})();
(function() {
  var c9h = NEJ.P,
    O9F = c9h('nej.p'),
    iv2x = c9h('nej.c'),
    be9V = c9h('nej.h'),
    sO5T;
  if (O9F.nq3x.trident || !!window.localStorage) return;
  var cvH5M = (function() {
    var sx5C, ei0x;
    var bkc9T = function() {
      sx5C = document.createElement('div');
      NEJ.X(sx5C.style, {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '1px',
        height: '1px',
        zIndex: 10000,
        overflow: 'hidden',
      });
      document.body.insertAdjacentElement('afterBegin', sx5C);
      sx5C.innerHTML =
        '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' +
        +new Date() +
        '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' +
        iv2x.B9s('storage.swf') +
        '"/><param name="AllowScriptAccess" value="sameDomain"/></object>';
    };
    var Pl2x = function() {
      ei0x = window.clearTimeout(ei0x);
      var hT2x = sx5C.getElementsByTagName('object')[0];
      if (!!hT2x.initStorage) {
        delete sx5C;
        sO5T = hT2x;
        sO5T.initStorage('nej-storage');
        (document.onstorageready || br9i)();
        return;
      }
      ei0x = window.setTimeout(Pl2x, 500);
    };
    return function() {
      if (!!sO5T) return;
      bkc9T();
      Pl2x();
    };
  })();
  be9V.WL5Q = be9V.WL5Q.eF0x(function(d9g) {
    d9g.stopped = !0;
    if (!sO5T) return;
    d9g.value = sO5T.getItem(d9g.args[0]);
  });
  be9V.WK5P = be9V.WK5P.eF0x(function(d9g) {
    d9g.stopped = !0;
    if (!sO5T) return;
    var bf9W = d9g.args;
    sO5T.setItem(bf9W[0], bf9W[1]);
  });
  be9V.blY9P = be9V.blY9P.eF0x(function(d9g) {
    d9g.stopped = !0;
    if (!sO5T) return;
    sO5T.removeItem(d9g.args[0]);
  });
  be9V.bmf9W = be9V.bmf9W.eF0x(function(d9g) {
    d9g.stopped = !0;
    if (!!sO5T) sO5T.clear();
  });
  be9V.bmj9a = be9V.bmj9a.eF0x(function(d9g) {
    d9g.stopped = !0;
    cvH5M();
  });
  be9V.bmm9d = be9V.bmm9d.eF0x(function(d9g) {
    d9g.stopped = !0;
    d9g.value = !!sO5T;
  });
})();
(function() {
  var c9h = NEJ.P,
    k9b = c9h('nej.u'),
    h9c = c9h('nej.v'),
    be9V = c9h('nej.h'),
    v9m = c9h('nej.j'),
    I9z = c9h('nej.ut'),
    R9I = {};
  v9m.vS6M = function(J9A, D9u) {
    var bSu8m = JSON.stringify(D9u);
    try {
      be9V.WK5P(J9A, bSu8m);
    } catch (ex) {
      console.error(ex.message);
      console.error(ex);
    }
    if (bSu8m != be9V.WL5Q(J9A)) R9I[J9A] = D9u;
    return this;
  };
  v9m.sW5b = function(J9A) {
    var j9a = JSON.parse(be9V.WL5Q(J9A) || 'null');
    return j9a == null ? R9I[J9A] : j9a;
  };
  v9m.bSt8l = function(J9A, D9u) {
    var j9a = v9m.sW5b(J9A);
    if (j9a == null) {
      j9a = D9u;
      v9m.vS6M(J9A, j9a);
    }
    return j9a;
  };
  v9m.Mj1x = function(J9A) {
    delete R9I[J9A];
    be9V.blY9P(J9A);
    return this;
  };
  v9m.cEh7a = (function() {
    var bnl9c = function(p9g, J9A, bz0x) {
      delete bz0x[J9A];
    };
    return function() {
      k9b.eD0x(R9I, bnl9c);
      be9V.bmf9W();
      return this;
    };
  })();
  v9m.cEj7c = function(o9f) {
    o9f = o9f || {};
    k9b.bd9U(be9V.cvI5N(), function(J9A) {
      o9f[J9A] = v9m.sW5b(J9A);
    });
    return o9f;
  };
  I9z.fL1x.A9r({
    element: document,
    event: 'storageready',
    oneventadd: function() {
      if (be9V.bmm9d()) {
        document.onstorageready();
      }
    },
  });
  var cvz5E = (function() {
    var cvv5A = function(D9u, J9A, bz0x) {
      be9V.WK5P(J9A, JSON.stringify(D9u));
      delete bz0x[J9A];
    };
    return function() {
      k9b.eD0x(R9I, cvv5A);
    };
  })();
  h9c.s9j(document, 'storageready', cvz5E);
  be9V.bmj9a();
})();
(function() {
  var c9h = NEJ.P,
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    O9F = c9h('nej.ut'),
    Mk1x;
  if (!!O9F.bnO0x) return;
  O9F.bnO0x = NEJ.C();
  Mk1x = O9F.bnO0x.N9E(O9F.cI0x);
  Mk1x.cy0x = (function() {
    var gG2x = +new Date(),
      nv3x = 'dat-' + gG2x;
    return function() {
      this.cG0x();
      var R9I = this.constructor[nv3x];
      if (!R9I) {
        R9I = {};
        this.constructor[nv3x] = R9I;
      }
      this.S9J = R9I;
    };
  })();
  Mk1x.B9s = function(J9A) {
    return this.S9J[J9A];
  };
  Mk1x.nl3x = function(J9A, D9u) {
    var nw3x = this.S9J[J9A];
    this.S9J[J9A] = D9u;
    h9c.z9q(localCache, 'cachechange', {
      key: J9A,
      type: 'set',
      oldValue: nw3x,
      newValue: D9u,
    });
    return this;
  };
  Mk1x.cJ0x = function(J9A) {
    var nw3x = this.S9J[J9A];
    k9b.bbE7x(this.S9J, J9A);
    h9c.z9q(localCache, 'cachechange', {
      key: J9A,
      type: 'delete',
      oldValue: nw3x,
      newValue: undefined,
    });
    return nw3x;
  };
  Mk1x.WF5K = function(DQ9H) {
    return NEJ.Q(this.S9J, DQ9H);
  };
  window.localCache = O9F.bnO0x.A9r();
  O9F.fL1x.A9r({
    element: localCache,
    event: 'cachechange',
  });
})();
(function() {
  var c9h = NEJ.P,
    fz1x = NEJ.R,
    br9i = NEJ.F,
    k9b = c9h('nej.u'),
    v9m = c9h('nej.j'),
    O9F = c9h('nej.ut'),
    nv3x = 'dat-' + +new Date(),
    nz3x;
  if (!!O9F.bnY0x) return;
  O9F.bnY0x = NEJ.C();
  nz3x = O9F.bnY0x.N9E(O9F.cI0x);
  nz3x.cy0x = function() {
    this.cG0x();
    this.S9J = this.constructor[nv3x];
    if (!this.S9J) {
      this.S9J = {};
      this.S9J[nv3x + '-l'] = {};
      this.constructor[nv3x] = this.S9J;
    }
  };
  nz3x.sl5q = function(J9A) {
    return this.S9J[J9A];
  };
  nz3x.pZ4d = function(J9A, D9u) {
    this.S9J[J9A] = D9u;
  };
  nz3x.lR3x = function(J9A, ke3x) {
    var j9a = this.sl5q(J9A);
    if (j9a == null) {
      j9a = ke3x;
      this.pZ4d(J9A, j9a);
    }
    return j9a;
  };
  nz3x.cvt5y = function(J9A) {
    if (J9A != null) {
      delete this.S9J[J9A];
      return;
    }
    k9b.eD0x(
      this.S9J,
      function(p9g, J9A) {
        if (J9A == nv3x + '-l') return;
        this.cvt5y(J9A);
      },
      this
    );
  };
  nz3x.cEl7e = function(J9A) {
    if (!!v9m.Mj1x) return v9m.Mj1x(J9A);
  };
  nz3x.cvp5u = function(J9A) {
    if (!!v9m.sW5b) return v9m.sW5b(J9A);
  };
  nz3x.cvo5t = function(J9A, D9u) {
    if (!!v9m.vS6M) v9m.vS6M(J9A, D9u);
  };
  nz3x.Fi9Z = function(J9A, ke3x) {
    var j9a = this.TX4b(J9A);
    if (j9a == null) {
      j9a = ke3x;
      this.xv7o(J9A, j9a);
    }
    return j9a;
  };
  nz3x.TX4b = function(J9A) {
    var j9a = this.sl5q(J9A);
    if (j9a != null) return j9a;
    j9a = this.cvp5u(J9A);
    if (j9a != null) this.pZ4d(J9A, j9a);
    return j9a;
  };
  nz3x.xv7o = function(J9A, D9u) {
    this.cvo5t(J9A, D9u);
    this.pZ4d(J9A, D9u);
  };
  nz3x.bSl8d = function(J9A) {
    if (J9A != null) {
      delete this.S9J[J9A];
      if (!!v9m.Mj1x) v9m.Mj1x(J9A);
      return;
    }
    k9b.eD0x(
      this.S9J,
      function(p9g, J9A) {
        if (J9A == nv3x + '-l') return;
        this.bSl8d(J9A);
      },
      this
    );
  };
  nz3x.cEm7f = function() {
    this.bSl8d();
    return this;
  };
  nz3x.cEn7g = function(J9A) {
    var j9a = this.S9J[nv3x + '-l'];
    delete j9a[J9A];
  };
  nz3x.bpw0x = function(J9A) {
    var j9a = this.S9J[nv3x + '-l'],
      bf9W = fz1x.slice.call(arguments, 1);
    k9b.bd9U(j9a[J9A], function(cN0x) {
      try {
        cN0x.apply(null, bf9W);
      } catch (ex) {
        console.error(ex.message);
        console.error(ex.stack);
      }
    });
    delete j9a[J9A];
  };
  nz3x.bpy0x = function(J9A, cN0x) {
    cN0x = cN0x || br9i;
    var i9b = this.S9J[nv3x + '-l'][J9A];
    if (!i9b) {
      i9b = [cN0x];
      this.S9J[nv3x + '-l'][J9A] = i9b;
      return !1;
    }
    i9b.push(cN0x);
    return !0;
  };
  nz3x.cvi5n = function(i9b, bi9Z, fY1x) {
    if (!i9b) return !1;
    bi9Z = parseInt(bi9Z) || 0;
    fY1x = parseInt(fY1x) || 0;
    if (!fY1x) {
      if (!i9b.loaded) return !1;
      fY1x = i9b.length;
    }
    if (!!i9b.loaded) fY1x = Math.min(fY1x, i9b.length - bi9Z);
    for (var i = 0; i < fY1x; i++) if (!i9b[bi9Z + i]) return !1;
    return !0;
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    br9i = NEJ.F,
    k9b = c9h('nej.u'),
    O9F = c9h('nej.ut'),
    b9i,
    K9B;
  if (!!O9F.Uh4l) return;
  O9F.Uh4l = NEJ.C();
  b9i = O9F.Uh4l.N9E(O9F.bnY0x);
  K9B = O9F.Uh4l.ct0x;
  b9i.bk9b = function(e9f) {
    this.bm9d(e9f);
    this.wR6L = e9f.key || 'id';
    this.bl9c = e9f.data || bb9S;
    this.cvg5l = !!e9f.autogc;
    this.cve5j(e9f.id);
  };
  b9i.bD0x = function() {
    this.bG0x();
    if (!!this.ef0x) {
      this.bSi8a();
    }
  };
  b9i.cve5j = function(C9t) {
    var R9I;
    if (!!C9t) {
      R9I = this.S9J[C9t];
      if (!R9I) {
        R9I = {};
        this.S9J[C9t] = R9I;
      }
    }
    R9I = R9I || this.S9J;
    R9I.hash = R9I.hash || {};
    this.UH4L = R9I;
  };
  b9i.bSi8a = function() {
    this.ef0x = window.clearTimeout(this.ef0x);
    var bz0x = {};
    k9b.eD0x(
      this.UH4L,
      function(i9b, J9A) {
        if (J9A == 'hash') return;
        if (!k9b.eI0x(i9b)) return;
        k9b.bd9U(
          i9b,
          function(p9g) {
            if (!p9g) return;
            bz0x[p9g[this.wR6L]] = !0;
          },
          this
        );
      },
      this
    );
    k9b.eD0x(this.Wp5u(), function(p9g, C9t, dP0x) {
      if (!bz0x[C9t]) {
        delete dP0x[C9t];
      }
    });
  };
  b9i.cvc5h = function() {
    if (!!this.ef0x) {
      this.ef0x = window.clearTimeout(this.ef0x);
    }
    this.ef0x = window.setTimeout(this.bSi8a.g9d(this), 150);
  };
  b9i.Bu8m = function(p9g, Wl5q) {
    p9g = this.bSh8Z(p9g, Wl5q) || p9g;
    if (!p9g) return null;
    var J9A = p9g[this.wR6L];
    if (J9A != null) {
      var hZ2x = this.Wp5u()[J9A];
      if (!!hZ2x) p9g = NEJ.X(hZ2x, p9g);
      this.Wp5u()[J9A] = p9g;
    }
    delete p9g.bSf8X;
    return p9g;
  };
  b9i.bSh8Z = br9i;
  b9i.bqT0x = function(J9A, p9g) {
    if (!p9g) return;
    if (!k9b.eI0x(p9g)) {
      var i9b = this.hF2x(J9A),
        p9g = this.Bu8m(p9g, J9A);
      if (!!p9g) i9b.unshift(p9g);
      return;
    }
    k9b.nH4L(p9g, this.bqT0x.g9d(this, J9A));
  };
  b9i.UM4Q = function(J9A, cz0x) {
    var i9b = this.hF2x(J9A);
    i9b.length = Math.max(i9b.length, cz0x);
    this.brc0x(J9A);
    return this;
  };
  b9i.kn3x = function(J9A) {
    return this.hF2x(J9A).length;
  };
  b9i.brc0x = function(J9A, ox4B) {
    this.hF2x(J9A).loaded = ox4B != !1;
    return this;
  };
  b9i.Wi5n = function(J9A) {
    return !!this.hF2x(J9A).loaded;
  };
  b9i.vd6X = function(J9A, i9b) {
    this.ve6Y(J9A);
    this.brV1x(
      {
        key: J9A,
        offset: 0,
        limit: i9b.length + 1,
      },
      {
        list: i9b,
        total: i9b.length,
      }
    );
  };
  b9i.hF2x = (function() {
    var GH9y = function(J9A) {
      return (J9A || '') + (!J9A ? '' : '-') + 'list';
    };
    return function(J9A) {
      var J9A = GH9y(J9A),
        i9b = this.UH4L[J9A];
      if (!i9b) {
        i9b = [];
        this.UH4L[J9A] = i9b;
      }
      return i9b;
    };
  })();
  b9i.Wp5u = function() {
    var dP0x = this.UH4L.hash;
    if (!dP0x) {
      dP0x = {};
      this.UH4L.hash = dP0x;
    }
    return dP0x;
  };
  b9i.bsf1x = (function() {
    var GH9y = function(e9f) {
      return 'r-' + e9f.key;
    };
    return function(e9f) {
      var iO2x = NEJ.X({}, e9f),
        nV4Z = GH9y(iO2x);
      if (!this.bpy0x(nV4Z, this.z9q.g9d(this))) {
        iO2x.rkey = nV4Z;
        iO2x.onload = this.cuV5a.g9d(this, iO2x);
        this.z9q('dopullrefresh', iO2x);
      }
      return this;
    };
  })();
  b9i.cuV5a = function(e9f, i9b) {
    this.bqT0x(e9f.key, i9b);
    this.bpw0x(e9f.rkey, 'onpullrefresh', e9f);
  };
  b9i.lJ3x = (function() {
    var GH9y = function(e9f) {
      return 'r-' + e9f.key + '-' + e9f.offset + '-' + e9f.limit;
    };
    return function(e9f) {
      e9f = e9f || bb9S;
      var iO2x = {
          key: '' + e9f.key || '',
          ext: e9f.ext || null,
          data: e9f.data || null,
          offset: parseInt(e9f.offset) || 0,
          limit: parseInt(e9f.limit) || 0,
        },
        i9b = this.hF2x(iO2x.key);
      if (this.cvi5n(i9b, iO2x.offset, iO2x.limit)) {
        this.z9q('onlistload', iO2x);
        return this;
      }
      var nV4Z = GH9y(iO2x);
      if (!this.bpy0x(nV4Z, this.z9q.g9d(this))) {
        iO2x.rkey = nV4Z;
        iO2x.onload = this.brV1x.g9d(this, iO2x);
        this.z9q('doloadlist', iO2x);
      }
      return this;
    };
  })();
  b9i.brV1x = (function() {
    var Fr9i = function(p9g, r9i, i9b) {
      if (!!p9g) {
        return !0;
      }
      i9b.splice(r9i, 1);
    };
    return function(e9f, o9f) {
      e9f = e9f || bb9S;
      var J9A = e9f.key,
        bi9Z = e9f.offset,
        bSe8W = this.hF2x(J9A);
      var i9b = o9f || [];
      if (!k9b.eI0x(i9b)) {
        i9b = o9f.result || o9f.list || [];
        var cz0x = parseInt(o9f.total);
        if (!isNaN(cz0x) || cz0x > i9b.length) {
          this.UM4Q(J9A, cz0x);
        }
      }
      k9b.bd9U(
        i9b,
        function(p9g, r9i) {
          bSe8W[bi9Z + r9i] = this.Bu8m(p9g, J9A);
        },
        this
      );
      if (i9b.length < e9f.limit) {
        this.brc0x(J9A);
        k9b.nH4L(bSe8W, Fr9i);
      }
      this.bpw0x(e9f.rkey, 'onlistload', e9f);
    };
  })();
  b9i.ve6Y = (function() {
    var Fr9i = function(p9g, r9i, i9b) {
      i9b.splice(r9i, 1);
    };
    return function(J9A) {
      var i9b = this.hF2x(J9A);
      k9b.nH4L(i9b, Fr9i);
      this.brc0x(J9A, !1);
      if (this.cvg5l) {
        this.cvc5h();
      }
      return this;
    };
  })();
  b9i.bSd8V = function(p9g, Wl5q) {
    return !p9g.bSf8X;
  };
  b9i.eH0x = function(C9t) {
    return this.Wp5u()[C9t];
  };
  b9i.cEu7n = function(C9t) {
    var p9g = this.eH0x(C9t);
    if (!!p9g) p9g.bSf8X = !0;
  };
  b9i.Wg5l = (function() {
    var GH9y = function(e9f) {
      return 'r-' + e9f.key + '-' + e9f.id;
    };
    return function(e9f) {
      e9f = e9f || bb9S;
      var C9t = e9f[this.wR6L],
        iO2x = {
          id: C9t,
          ext: e9f.ext,
          data: e9f.data || {},
          key: '' + e9f.key || '',
        };
      p9g = this.eH0x(C9t);
      iO2x.data[this.wR6L] = C9t;
      if (!!p9g && this.bSd8V(p9g, iO2x.key)) {
        this.z9q('onitemload', iO2x);
        return this;
      }
      var nV4Z = GH9y(iO2x);
      if (!this.bpy0x(nV4Z, this.z9q.g9d(this))) {
        iO2x.rkey = nV4Z;
        iO2x.onload = this.cuP5U.g9d(this, iO2x);
        this.z9q('doloaditem', iO2x);
      }
      return this;
    };
  })();
  b9i.cuP5U = function(e9f, p9g) {
    e9f = e9f || bb9S;
    this.Bu8m(p9g, e9f.key);
    this.bpw0x(e9f.rkey, 'onitemload', e9f);
  };
  b9i.jD2x = function(e9f) {
    e9f = NEJ.X({}, e9f);
    e9f.onload = this.xO7H.g9d(this, e9f);
    this.z9q('doadditem', e9f);
  };
  b9i.xO7H = function(e9f, p9g) {
    var J9A = e9f.key;
    p9g = this.Bu8m(p9g, J9A);
    if (!!p9g) {
      var fc1x = 0,
        i9b = this.hF2x(J9A);
      if (!e9f.push) {
        fc1x = -1;
        var bi9Z = e9f.offset || 0;
        i9b.splice(bi9Z, 0, p9g);
      } else if (i9b.loaded) {
        fc1x = 1;
        i9b.push(p9g);
      } else {
        i9b.length++;
      }
    }
    var d9g = {
      key: J9A,
      flag: fc1x,
      data: p9g,
      action: 'add',
      ext: e9f.ext,
    };
    this.z9q('onitemadd', d9g);
    return d9g;
  };
  b9i.My1x = function(e9f) {
    e9f = NEJ.X({}, e9f);
    e9f.onload = this.btI1x.g9d(this, e9f);
    this.z9q('dodeleteitem', e9f);
  };
  b9i.btI1x = function(e9f, bSb8T) {
    var p9g,
      J9A = e9f.key;
    if (!!bSb8T) {
      p9g = this.eH0x(e9f.id) || null;
      var C9t = e9f.id,
        cuN5S = this.wR6L,
        i9b = this.hF2x(J9A),
        r9i = k9b.di0x(i9b, function(hZ2x) {
          return !!hZ2x && hZ2x[cuN5S] == C9t;
        });
      if (r9i >= 0) i9b.splice(r9i, 1);
    }
    var d9g = {
      key: J9A,
      data: p9g,
      action: 'delete',
      ext: e9f.ext,
    };
    this.z9q('onitemdelete', d9g);
    return d9g;
  };
  b9i.Wd5i = function(e9f) {
    e9f = NEJ.X({}, e9f);
    e9f.onload = this.cuM5R.g9d(this, e9f);
    this.z9q('doupdateitem', e9f);
  };
  b9i.cuM5R = function(e9f, p9g) {
    var J9A = e9f.key;
    if (!!p9g) p9g = this.Bu8m(p9g, J9A);
    var d9g = {
      key: J9A,
      data: p9g,
      action: 'update',
      ext: e9f.ext,
    };
    this.z9q('onitemupdate', d9g);
    return d9g;
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    br9i = NEJ.F,
    k9b = c9h('nej.u'),
    O9F = c9h('nej.ut'),
    b9i;
  if (!!O9F.bur1x) return;
  O9F.bur1x = NEJ.C();
  b9i = O9F.bur1x.N9E(O9F.Uh4l);
  b9i.bk9b = function(e9f) {
    this.bm9d(e9f);
    this.bjM9D({
      doloadlist: this.Wc5h.g9d(this),
      doloaditem: this.buA1x.g9d(this),
      doadditem: this.bSa8S.g9d(this),
      dodeleteitem: this.Wb5g.g9d(this),
      doupdateitem: this.Wa5f.g9d(this),
      dopullrefresh: this.bRZ8R.g9d(this),
    });
  };
  b9i.Wc5h = br9i;
  b9i.bRZ8R = br9i;
  b9i.buA1x = br9i;
  b9i.bSa8S = br9i;
  b9i.Wb5g = br9i;
  b9i.Wa5f = br9i;
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    br9i = NEJ.F,
    k9b = c9h('nej.u'),
    h9c = c9h('nej.v'),
    v9m = c9h('nej.j'),
    I9z = c9h('nej.ut'),
    l9c = c9h('nm.x'),
    q9h = c9h('nm.d'),
    b9i,
    K9B;
  q9h.hL2x = NEJ.C();
  b9i = q9h.hL2x.N9E(I9z.bur1x);
  b9i.cp0x = (function() {
    var AV8N = location.protocol + '//' + location.host;
    var cuI5N = function(bs9j, j9a) {
      var bz0x = {
        conf: {},
        data: {},
        urls: [],
      };
      k9b.bd9U(bs9j, function(J9A, r9i, i9b) {
        var bg9X = q9h.B9s(J9A);
        if (!bg9X) return;
        var bvf1x = bRY8Q(bg9X.url, j9a[J9A]);
        bz0x.urls.push(bvf1x);
        bz0x.conf[bvf1x] = bg9X;
        bz0x.data[bvf1x] = JSON.stringify(j9a[J9A] == null ? '' : j9a[J9A]);
      });
      return bz0x;
    };
    var bRY8Q = function(Y9P, j9a) {
      return Y9P.replace(/\{(.*?)\}/gi, function($1, $2) {
        return j9a[$2] || $1;
      });
    };
    var bRX8P = function(bg9X, e9f, d9g) {
      h9c.z9q(window, 'requesterror', d9g);
      if (!!d9g.stopped) return;
      var AU8M = bg9X.onerror || e9f.onerror;
      if (k9b.fH1x(AU8M)) {
        this.z9q(AU8M, d9g, e9f);
      } else {
        (AU8M || br9i).call(this, d9g, e9f);
      }
      var d9g = {
        result: d9g,
        option: e9f,
      };
      this.z9q('onerror', d9g);
      if (!d9g.stopped) (bg9X.onmessage || br9i).call(this, d9g.result.code, d9g.result);
    };
    var bRW8O = function(Q9H, bg9X, e9f) {
      var o9f = Q9H;
      if (k9b.gJ2x(bg9X.format)) {
        o9f = bg9X.format.call(this, Q9H, e9f);
      }
      return o9f;
    };
    var yO7H = function(Q9H, bg9X, e9f, vT6N) {
      if (k9b.gJ2x(bg9X.beforeload)) {
        bg9X.beforeload.call(this, Q9H, e9f, bg9X);
      }
      if (Q9H && Q9H.code != null && Q9H.code != 200) {
        bRX8P.call(this, bg9X, e9f, {
          key: e9f.key,
          code: Q9H.code,
          message: Q9H.message || '',
          captchaId: Q9H.captchaId,
          ext: Q9H,
        });
        return;
      }
      var o9f = Q9H;
      if (!vT6N) {
        o9f = bRW8O.call(this, Q9H, bg9X, e9f);
      } else if (k9b.gJ2x(bg9X.format)) {
        var bvE1x = [];
        k9b.bd9U(
          vT6N.urls,
          function(Y9P) {
            bvE1x.push(bRW8O.call(this, Q9H[Y9P], vT6N.conf[Y9P], e9f));
          },
          this
        );
        bvE1x.push(e9f);
        o9f = bg9X.format.apply(this, bvE1x);
      }
      var rN5S = bg9X.onload || e9f.onload,
        bRU8M = bg9X.finaly || e9f.finaly || br9i;
      if (k9b.fH1x(rN5S)) {
        bRU8M.call(this, this.z9q(rN5S, o9f), e9f);
      } else {
        bRU8M.call(this, (rN5S || br9i).call(this, o9f), e9f);
      }
    };
    var AR8J = function(bg9X, e9f, cb0x) {
      bRX8P.call(this, bg9X, e9f, {
        key: e9f.key,
        code: cb0x.code || -1,
        message: cb0x.message || '',
      });
    };
    return function(bg9X, e9f) {
      if (k9b.fH1x(bg9X)) {
        bg9X = q9h.B9s(bg9X);
      }
      delete e9f.value;
      (bg9X.filter || br9i).call(this, e9f, bg9X);
      var Q9H = e9f.value;
      if (!!Q9H) {
        yO7H.call(this, Q9H, bg9X, e9f);
        return;
      }
      var Y9P,
        j9a = e9f.data || bb9S,
        xF7y = {
          cookie: !0,
          type: bg9X.rtype || 'json',
          method: bg9X.type || 'POST',
          onerror: AR8J.g9d(this, bg9X, e9f),
          noescape: bg9X.noescape,
        };
      if (k9b.eI0x(bg9X.url)) {
        var vT6N = cuI5N(bg9X.url, j9a);
        Y9P = AV8N + '/api/batch';
        xF7y.data = k9b.cF0x(vT6N.data);
        xF7y.onload = yO7H.et0x(this, bg9X, e9f, vT6N);
        xF7y.headers = {
          'batch-method': 'POST',
        };
        delete vT6N.data;
      } else {
        var kg3x = bg9X.url.indexOf(':') < 0 ? AV8N : '';
        Y9P = bRY8Q(kg3x + bg9X.url, j9a);
        xF7y.data = k9b.cF0x(e9f.data);
        xF7y.onload = yO7H.et0x(this, bg9X, e9f);
      }
      if (xF7y.method == 'GET') xF7y.query = xF7y.data;
      return v9m.bn9e(Y9P, xF7y);
    };
  })();
  b9i.DN9E = (function() {
    var gH2x = /^get|list|pull$/i;
    return function(bRT8L, e9f) {
      var J9A = e9f.key,
        bg9X = q9h.B9s(J9A.split('-')[0] + '-' + bRT8L);
      if (gH2x.test(bRT8L) && J9A.indexOf('post-') < 0) bg9X.type = 'GET';
      this.cp0x(bg9X, e9f);
    };
  })();
  b9i.cEv7o = function(J9A, i9b) {
    var cz0x = i9b.length;
    this.brV1x(
      {
        key: J9A,
        offset: 0,
        limit: cz0x + 1,
      },
      {
        list: i9b,
        total: cz0x,
      }
    );
  };
  b9i.Wc5h = function(e9f) {
    this.DN9E('list', e9f);
  };
  b9i.buA1x = function(e9f) {
    this.DN9E('get', e9f);
  };
  b9i.bRZ8R = function(e9f) {
    this.DN9E('pull', e9f);
  };
  b9i.bSa8S = function(e9f) {
    this.DN9E('add', e9f);
  };
  b9i.Wb5g = function(e9f) {
    this.DN9E('del', e9f);
  };
  b9i.Wa5f = function(e9f) {
    this.DN9E('update', e9f);
  };
  b9i.cut5y = function(p9g) {
    this.Bu8m(p9g);
  };
  I9z.fL1x.A9r({
    element: window,
    event: 'requesterror',
  });
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    br9i = NEJ.F,
    h9c = c9h('nej.v'),
    I9z = c9h('nej.ut'),
    q9h = c9h('nm.d'),
    bwv2x = {},
    b9i,
    K9B;
  var vY6S = function(o9f, e9f) {
    o9f.conf = e9f.conf;
    return o9f;
  };
  q9h.fl1x({
    'res-mv-get': {
      type: 'GET',
      url: '/api/v1/mv/detail',
      format: function(Q9H, e9f) {
        return vY6S(
          {
            mv: Q9H,
          },
          e9f
        );
      },
    },
    'res-song-get': {
      type: 'GET',
      url: '/api/song/detail',
      format: function(o9f, e9f) {
        if (!!o9f.songs && o9f.songs.length > 0) o9f.song = o9f.songs[0];
        else o9f.song = bwv2x;
        delete o9f.songs;
        return vY6S(o9f, e9f);
      },
      filter: function(e9f) {
        e9f.data.ids = '[' + e9f.data.id + ']';
      },
    },
    'res-program-get': {
      type: 'GET',
      url: '/api/dj/program/detail',
      format: vY6S,
    },
    'res-album-get': {
      type: 'GET',
      url: '/api/album/{id}',
      format: vY6S,
    },
    'res-playlist-get': {
      type: 'GET',
      url: '/api/playlist/detail',
      format: function(o9f, e9f) {
        o9f.playlist = o9f.result;
        delete o9f.result;
        return vY6S(o9f, e9f);
      },
    },
    'res-mv-play': {
      type: 'GET',
      url: '/api/song/mv/play',
      format: vY6S,
    },
    'res-playlist-play': {
      type: 'GET',
      url: '/api/playlist/update/playcount',
      format: vY6S,
    },
    'res-program-play': {
      type: 'GET',
      url: '/api/dj/program/listen',
      format: vY6S,
    },
    'res-djradio-get': {
      type: 'GET',
      url: '/api/dj/program/byradio',
      filter: function(e9f) {
        var i9b = e9f.data.id.split('-');
        e9f.data.radioId = i9b[0];
        e9f.data.asc = i9b[1] == 2;
        e9f.data.limit = 1000;
        delete e9f.data.id;
      },
      format: function(Q9H, e9f) {
        var cus5x = {
          id: e9f.data.radioId,
          programs: Q9H.programs,
        };
        return vY6S(
          {
            djradio: cus5x,
          },
          e9f
        );
      },
    },
    'res-hotSongs-get': {
      type: 'GET',
      url: '/api/artist/{id}',
      format: vY6S,
    },
    'res-lyric-get': {
      type: 'GET',
      url: '/api/song/lyric',
      filter: function(e9f) {
        e9f.data.lv = 0;
        e9f.data.tv = 0;
      },
      format: function(o9f, e9f) {
        var xD7w = {
          lyric: '',
          nolyric: true,
        };
        if (o9f.code == 200 && o9f.lrc && o9f.lrc.lyric) {
          xD7w.lyric = o9f.lrc.lyric;
          xD7w.nolyric = false;
        } else {
          xD7w.nolyric = true;
        }
        return vY6S(
          {
            lyric: xD7w,
          },
          e9f
        );
      },
    },
  });
  q9h.xC7v = NEJ.C();
  b9i = q9h.xC7v.N9E(q9h.hL2x);
  b9i.cur5w = function(u9l, cR0x) {
    return this.sl5q(this.VV5a(u9l, cR0x));
  };
  b9i.UW4a = function(u9l, cR0x, e9f) {
    e9f = e9f || {};
    var j9a = this.sl5q(this.VV5a(u9l, cR0x));
    if (j9a && ((u9l != 13 && u9l != 19) || (e9f.conf && e9f.conf.useCache))) {
      this.z9q('onresourceload', u9l, cR0x, j9a, e9f.conf);
      return;
    }
    e9f.data = {
      id: cR0x,
    };
    e9f.onload = this.cuq5v.g9d(this, u9l, cR0x);
    e9f.onerror = this.cup5u.g9d(this, u9l, cR0x);
    this.cp0x('res-' + this.AH8z(u9l) + '-get', e9f);
  };
  b9i.cuq5v = function(u9l, cR0x, o9f) {
    var j9a = o9f[this.AH8z(u9l)];
    this.pZ4d(this.VV5a(u9l, cR0x), j9a);
    this.z9q('onresourceload', u9l, cR0x, j9a, o9f.conf);
  };
  b9i.cup5u = function(u9l, cR0x, o9f, e9f) {
    if (o9f.code != 404) {
      this.z9q('onresourceerror', u9l, cR0x, o9f.code);
      return;
    }
    this.pZ4d(this.VV5a(u9l, cR0x), bwv2x);
    this.z9q('onresourceload', u9l, cR0x, bwv2x, e9f.conf);
  };
  b9i.cEx7q = function(u9l, e9f) {
    this.cp0x('res-' + this.AH8z(u9l) + '-play', e9f);
  };
  b9i.VV5a = function(u9l, cR0x) {
    return 'res-' + this.AH8z(u9l) + '-' + cR0x;
  };
  b9i.AH8z = function(u9l) {
    var bz0x = {
      2: 'hotSongs',
      13: 'playlist',
      17: 'program',
      18: 'song',
      19: 'album',
      21: 'mv',
      41: 'lyric',
      70: 'djradio',
    };
    return bz0x[u9l];
  };
  q9h.xC7v.MD1x = function(u9l, cR0x) {
    if (!this.ff1x) this.ff1x = q9h.xC7v.A9r({});
    return this.ff1x.cur5w(u9l, cR0x);
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    br9i = NEJ.F,
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    I9z = c9h('nej.ut'),
    q9h = c9h('nm.d'),
    l9c = c9h('nm.x'),
    bfJ8B = /^[1-9][0-9]*$/,
    b9i,
    K9B;
  var LOCAL_LOG_KEY = 'local-log';
  q9h.fl1x({
    'bi-log': {
      url: '/api/feedback/weblog',
    },
    'bi-batch-log': {
      url: '/api/feedback/weblog',
    },
    'plus-mv-count': {
      url: '/api/song/mv/play',
    },
    'plus-song-count': {
      url: '/api/song/play',
    },
    'plus-dj-count': {
      type: 'GET',
      url: '/api/dj/program/listen',
    },
    'plus-playlist-count': {
      type: 'GET',
      url: '/api/playlist/update/playcount',
    },
  });
  q9h.hP2x = NEJ.C();
  b9i = q9h.hP2x.N9E(q9h.hL2x);
  b9i.eU1x = function(U9L, bg9X) {
    if (!U9L || !bg9X) return;
    if (k9b.fH1x(bg9X)) {
      try {
        bg9X = JSON.parse(bg9X);
      } catch (_e) {
        if (console && console.warn) {
          console.warn('bilog error: ', a8i);
        }
      }
    }
    if (!k9b.lO3x(bg9X)) return;
    this.cp0x('bi-log', {
      data: {
        logs: JSON.stringify([
          {
            action: U9L,
            json: bg9X,
          },
        ]),
      },
    });
    if (typeof GEnvType == 'string' && GEnvType == 'local') {
      console.log('[BI LOG] action=' + U9L + ', json=' + JSON.stringify(bg9X));
    }
  };
  b9i.VQ5V = function(nN4R) {
    if (!k9b.eI0x(nN4R)) return;
    this.cp0x('bi-batch-log', {
      data: {
        logs: JSON.stringify(nN4R),
      },
    });
  };
  b9i.bRL8D = function(bg9X) {
    if (!bg9X || !bg9X.type || !bg9X.rid) return;
    var nM4Q = bg9X.type;
    if (bfJ8B.test(nM4Q)) {
      nM4Q = this.AH8z(nM4Q);
    }
    if (!nM4Q) return;
    if (nM4Q == 'playlist') nM4Q = 'list';
    this.eU1x('search', {
      type: nM4Q,
      id: bg9X.rid || null,
      keyword: bg9X.keyword || null,
    });
  };
  b9i.Vg4k = (function() {
    var cuc4g = /^\/m\/(song|album|playlist)\?id=(\d+)/;
    return function(bg9X) {
      if (!bg9X || !bg9X.type || !bg9X.rid) return;
      if (bg9X.play === undefined) bg9X.play = true;
      var nM4Q = bg9X.type;
      if (bfJ8B.test(nM4Q)) {
        nM4Q = this.AH8z(nM4Q);
      }
      if (!nM4Q) return;
      if (nM4Q == 'playlist') nM4Q = 'list';
      var Q9H = {
        id: bg9X.rid,
        type: nM4Q,
      };
      if (nM4Q == 'song' && bg9X.source) {
        Q9H.source = this.bRJ8B(bg9X.source);
        if (!!bg9X.sourceid) Q9H.sourceid = bg9X.sourceid;
      }
      this.eU1x(!bg9X.play ? 'addto' : 'play', Q9H);
      if (nM4Q == 'song' && bg9X.hash && bg9X.hash.match(cuc4g)) {
        this.eU1x(!bg9X.play ? 'addto' : 'play', {
          type: RegExp.$1,
          id: RegExp.$2,
        });
      }
    };
  })();
  b9i.bgg8Y = function(C9t, bA0x, eb0x, EI9z) {
    var Q9H = {
      type: 'song',
      wifi: 0,
      download: 0,
    };
    var ctV4Z = {
      1: 'ui',
      2: 'playend',
      3: 'interrupt',
      4: 'exception',
    };
    Q9H.id = C9t;
    Q9H.time = Math.round(bA0x);
    Q9H.end = k9b.fH1x(EI9z) ? EI9z : ctV4Z[EI9z] || '';
    if (eb0x && eb0x.fid) {
      Q9H.source = this.bRJ8B(eb0x.fid);
      Q9H.sourceId = eb0x.fdata;
    }
    this.eU1x('play', Q9H);
  };
  b9i.bRH8z = function(u9l, cR0x) {
    if (!u9l || !cR0x) return;
    if (bfJ8B.test(u9l)) u9l = this.AH8z(u9l);
    if (u9l != 'playlist' && u9l != 'dj') return;
    var bg9X = q9h.B9s('plus-' + u9l + '-count');
    if (!bg9X) return !1;
    this.cp0x(bg9X, {
      data: {
        id: cR0x,
      },
    });
    var R9I = this.lR3x('play-hist-' + u9l, []);
    if (k9b.di0x(R9I, cR0x) < 0) {
      R9I.push(cR0x);
      return !0;
    }
    return !1;
  };
  b9i.AH8z = function(u9l) {
    var bz0x = {
      1: 'user',
      2: 'artist',
      13: 'playlist',
      17: 'dj',
      18: 'song',
      19: 'album',
      21: 'mv',
      31: 'toplist',
    };
    return bz0x[u9l];
  };
  b9i.bRJ8B = function(ML1x) {
    var bz0x = {
      1: 'user',
      2: 'artist',
      13: 'list',
      17: 'dj',
      18: 'song',
      19: 'album',
      21: 'mv',
      31: 'toplist',
      32: 'search',
      33: 'search',
      34: 'event',
      35: 'msg',
    };
    return bz0x[ML1x];
  };
  b9i.bRF8x = function(hj2x) {
    var nN4R = this.Fi9Z(LOCAL_LOG_KEY, []);
    nN4R.unshift(hj2x);
    if (nN4R.length > 200) {
      nN4R.length = 200;
    }
    this.xv7o(LOCAL_LOG_KEY, nN4R);
  };
  b9i.ctO4S = function() {
    return this.TX4b(LOCAL_LOG_KEY);
  };
  b9i.en0x = function(Q9H) {
    this.eU1x('play', Q9H);
  };
  var bRD8v = q9h.hP2x.gt1x();
  l9c.rs5x = function() {
    bRD8v.eU1x.apply(bRD8v, arguments);
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    br9i = NEJ.F,
    h9c = c9h('nej.v'),
    v9m = c9h('nej.j'),
    I9z = c9h('nej.ut'),
    a8i = c9h('nej.e'),
    k9b = c9h('nej.u'),
    m9d = c9h('nm.l'),
    l9c = c9h('nm.x'),
    q9h = c9h('nm.d');
  var FullscreenApi = l9c.Ee9V || {};
  if (!q9h.xC7v) return;
  var R9I = q9h.xC7v.A9r({
    onresourceload: ctK4O,
  });
  var uK6E = q9h.hP2x.gt1x();
  function ctK4O(u9l, cR0x, j9a, bg9X) {
    var i9b = [];
    switch (parseInt(u9l)) {
      case 2:
        i9b = j9a;
        break;
      case 13:
        i9b = j9a.tracks;
        break;
      case 18:
        i9b.push(j9a);
        break;
      case 19:
        i9b = j9a.songs;
        break;
      case 21:
        if (j9a.mp && j9a.mp.fee && j9a.mp.pl <= 0) {
          l9c.VA4E(j9a.data.id, j9a.mp.fee);
          return;
        }
        break;
    }
    if (
      l9c.Ia0x(
        i9b,
        true,
        null,
        u9l == 19
          ? {
              source: 'album',
              sourceid: cR0x,
            }
          : null
      ) == 0
    ) {
      return;
    }
    l9c.fs1x({
      clazz: 'm-layer-w2',
      bubble: !1,
      message: bg9X.message,
    });
  }
  function ctJ4N(d9g, or4v, xH7A, ey0x) {
    ey0x = ey0x || {};
    if (d9g.action == 'ok') {
      if (xH7A) {
        location.dispatch2('/payfee?songId=' + xH7A);
      } else {
        location.dispatch2('/payfee?fee=' + or4v || 1);
      }
      uK6E.eU1x('click', {
        type: 'tobuyvip',
        name: 'box',
        source: ey0x.source || 'song',
        sourceid: ey0x.sourceid || xH7A || 0,
      });
    } else if (d9g.action == 'song') {
      location.dispatch2('/payfee?singleSong=true&songId=' + xH7A);
      uK6E.eU1x('click', {
        type: 'tobuyone',
        name: 'box',
        source: ey0x.source || 'song',
        sourceid: ey0x.sourceid || xH7A || 0,
      });
    }
  }
  function VE4I(bH0x) {
    l9c.fs1x({
      clazz: 'm-layer-w2',
      bubble: !1,
      message: bH0x,
      btntxt: '知道了',
    });
  }
  function VD4H(bH0x, Q9H) {
    VE4I((Q9H || bb9S).toast || bH0x);
  }
  l9c.iy2x = function(bH0x, C9t, u9l, ctI4M, bj9a) {
    bH0x = bH0x || '由于版权保护，您所在的地区暂时无法使用。';
    if (ctI4M && bj9a && bj9a.privilege && bj9a.privilege.toast) {
      v9m.bn9e('/api/song/toast', {
        query: {
          id: bj9a.id,
        },
        type: 'json',
        onload: VD4H.g9d(this, bH0x),
        onerror: VD4H.g9d(this, bH0x),
      });
    } else if (C9t && u9l) {
      R9I.UW4a(u9l, C9t, {
        conf: {
          message: bH0x,
          useCache: u9l != 18,
        },
      });
    } else {
      VE4I(bH0x);
    }
  };
  l9c.vb6V = function(or4v, xH7A, u9l, ey0x, nF4J) {
    var bP0x,
      pe4i = 'm-popup-info',
      bhD8v = '单首购买',
      bhI8A = '马上去开通',
      cV0x = '唱片公司要求，当前歌曲须付费使用。',
      bRC8u = true;
    try {
      bP0x = top.api.feeMessage || {};
    } catch (e) {
      bP0x = {};
    }
    if (or4v == 1 || or4v == 8 || or4v == 16) {
      if (u9l == 'song') {
        pe4i = 'm-popup-song-buy';
        cV0x = bP0x['vip2'] || cV0x;
        bhI8A = bP0x['vip2button'] || '包月购买';
        bhD8v = bP0x['vip2link'] || bhD8v;
        if (nF4J && nF4J.flag !== undefined) {
          var bs9j = nF4J.flag.toString(2).split('');
          if (parseInt(bs9j.pop(), 10) == 1) {
            bRC8u = false;
          }
        }
      } else {
        cV0x = bP0x['vip'] || cV0x;
      }
    } else if (or4v == 4) {
      cV0x = bP0x['album'] || cV0x;
      bhI8A = '立即订购';
    } else {
      cV0x = bP0x['unknow'] || cV0x;
    }
    l9c.kB3x({
      clazz: 'm-layer-w5',
      html: a8i.bZ0x(pe4i, {
        songTxt: bhD8v,
        tip: cV0x,
        oktext: bhI8A,
        cctext: '以后再说',
        showSongText: bRC8u,
      }),
      onaction: ctJ4N.et0x(null, or4v, xH7A, ey0x),
    });
  };
  l9c.bRB8t = function(hA2x, gg1x) {
    l9c.hr2x({
      title: '提示',
      message: '唱片公司要求，该歌曲须下载后播放',
      btnok: '下载',
      btncc: '取消',
      okstyle: 'u-btn2-w1',
      ccstyle: 'u-btn2-w1',
      action: function(u9l) {
        if (u9l == 'ok') {
          l9c.Mh1x({
            id: hA2x,
            type: gg1x,
          });
        }
      },
    });
  };
  l9c.VA4E = function(ky3x, or4v) {
    var bP0x,
      cV0x = '唱片公司要求，当前歌曲须付费使用。';
    try {
      bP0x = top.api.feeMessage || {};
    } catch (e) {
      bP0x = {};
    }
    if (or4v == 1 || or4v == 8) {
      cV0x = bP0x['vip'] || cV0x;
    } else if (or4v == 4) {
      cV0x = bP0x['album'] || cV0x;
    } else {
      cV0x = bP0x['unknow'] || cV0x;
    }
    return l9c.kB3x({
      parent: document[FullscreenApi.fullscreenElement] || document.body,
      clazz: 'm-layer-w5',
      html: a8i.bZ0x('m-popup-info', {
        tip: cV0x,
        oktext: '马上去开通',
        cctext: '以后再说',
      }),
      onaction: function(d9g) {
        if (d9g.action == 'ok') {
          location.dispatch2('/payfee?mvId=' + ky3x);
          uK6E.eU1x('click', {
            type: 'tobuyone',
            name: 'box',
            source: 'mv',
            sourceid: ky3x || 0,
          });
        }
      },
    });
  };
  l9c.Ia0x = (function() {
    function compareFee(ctD4H, ctC4G) {
      var bz0x = {
        1: 99,
        8: 99,
        4: 88,
        16: 99,
      };
      return (bz0x[ctD4H] || 0) - (bz0x[ctC4G] || 0);
    }
    return function(i9b, cV0x, rv5A, ey0x) {
      rv5A = rv5A || {};
      var ye7X = [],
        MN1x = {},
        bRA8s = 0,
        bRz8r = 0,
        MK1x = null;
      if (!i9b || !i9b.length) return ye7X;
      k9b.bd9U(i9b, function(bj9a) {
        var fB1x = l9c.pK4O(bj9a);
        if (fB1x == 0) {
          ye7X.push(bj9a);
        } else if (fB1x == 10) {
          if (bj9a.privilege) {
            bj9a.fee = bj9a.privilege.fee;
          }
          if (compareFee(bj9a.fee, MN1x.fee) > 0) {
            MN1x = bj9a;
          }
        } else if (fB1x == 11) {
          ++bRA8s;
          if (!rv5A.play) ye7X.push(bj9a);
        } else if (fB1x == 1000) {
          ++bRz8r;
          if (!rv5A.download) ye7X.push(bj9a);
        } else if (fB1x == 100) {
          MK1x = bj9a;
        }
      });
      if (ye7X.length == 0 && cV0x) {
        if (bRA8s == i9b.length) {
          var tU5Z = i9b[0].privilege || {};
          if (tU5Z.payed) {
            l9c.iy2x('唱片公司要求，该歌曲须下载后播放');
          } else {
            l9c.vb6V(tU5Z.fee, null, null, ey0x);
          }
        } else if (bRz8r == i9b.length) {
          l9c.iy2x('因版权方要求，该歌曲不支持下载');
        } else if (MN1x.id) {
          l9c.vb6V(MN1x.fee, MN1x.id, null, ey0x, MN1x.privilege);
        } else {
          if (
            MK1x &&
            i9b.length == 1 &&
            MK1x.privilege &&
            MK1x.privilege.st < 0 &&
            MK1x.privilege.toast
          ) {
            l9c.iy2x(null, null, null, true, MK1x);
          } else {
            l9c.iy2x();
          }
        }
      }
      return ye7X;
    };
  })();
  l9c.pK4O = function(bj9a) {
    if (!bj9a) return 0;
    var fB1x = bj9a.privilege;
    if (bj9a.program) return 0;
    if (window.GAbroad) return 100;
    if (fB1x) {
      if (fB1x.st != null && fB1x.st < 0) {
        return 100;
      }
      if (fB1x.fee > 0 && fB1x.fee != 8 && fB1x.payed == 0 && fB1x.pl <= 0) return 10;
      if (fB1x.fee == 16) return 11;
      if ((fB1x.fee == 0 || fB1x.payed) && fB1x.pl > 0 && fB1x.dl == 0) return 1000;
      if (fB1x.pl == 0 && fB1x.dl == 0) return 100;
      return 0;
    } else {
      var ev0x = bj9a.status != null ? bj9a.status : bj9a.st != null ? bj9a.st : 0;
      if (bj9a.status >= 0) return 0;
      if (bj9a.fee > 0) return 10;
      return 100;
    }
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    br9i = NEJ.F,
    fz1x = NEJ.R,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    I9z = c9h('nej.ut'),
    w9n = c9h('nm.w'),
    b9i;
  if (!!w9n.bRy8q) return;
  var cl0x = ~[];
  cl0x = {
    bRw8o: ++cl0x,
    ctv4z: (![] + '')[cl0x],
    ko3x: ++cl0x,
    ME1x: (![] + '')[cl0x],
    VL5Q: (cl0x[cl0x] + '')[cl0x],
    bRs7l: ++cl0x,
    cEy7r: ({} + '')[cl0x],
    csO4S: (cl0x[cl0x] + '')[cl0x],
    csN4R: (![] + '')[cl0x],
    Vf4j: ++cl0x,
    VR5W: (!'' + '')[cl0x],
    cEB7u: ++cl0x,
    Au8m: ++cl0x,
    bRi7b: ({} + '')[cl0x],
    xw7p: ++cl0x,
    csu4y: ++cl0x,
    cEC7v: ++cl0x,
    cED7w: ++cl0x,
  };
  cl0x.MC1x =
    (cl0x.MC1x = cl0x + '')[cl0x.Au8m] +
    (cl0x.MB1x = cl0x.MC1x[cl0x.ko3x]) +
    (cl0x.VT5Y = (cl0x.Hq0x + '')[cl0x.ko3x]) +
    (!cl0x + '')[cl0x.Vf4j] +
    (cl0x.Hr0x = cl0x.MC1x[cl0x.xw7p]) +
    (cl0x.Hq0x = (!'' + '')[cl0x.ko3x]) +
    (csm4q = (!'' + '')[cl0x.bRs7l]) +
    cl0x.MC1x[cl0x.Au8m] +
    cl0x.Hr0x +
    cl0x.MB1x +
    cl0x.Hq0x;
  cl0x.VT5Y =
    cl0x.Hq0x + (!'' + '')[cl0x.Vf4j] + cl0x.Hr0x + csm4q + cl0x.Hq0x + cl0x.VT5Y;
  cl0x.Hq0x = cl0x.bRw8o[cl0x.MC1x][cl0x.MC1x];
  w9n.bRy8q = cl0x;
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    h9c = c9h('nej.v'),
    a8i = c9h('nej.e'),
    O9F = c9h('nej.ui'),
    b9i;
  if (!!O9F.VU5Z) return;
  var iW2x = a8i.sK5P('.#<uispace>{position:absolute;background:#fff;}');
  O9F.VU5Z = NEJ.C();
  b9i = O9F.VU5Z.N9E(O9F.Rm3x);
  b9i.bk9b = function(e9f) {
    this.bm9d(e9f);
    this.bX0x([[document, 'click', this.tu5z.g9d(this)]]);
    this.csl4p = !!e9f.nostop;
    this.bQY7R = {
      top: e9f.top,
      left: e9f.left,
    };
  };
  b9i.bD0x = function() {
    delete this.yf7Y;
    delete this.bkk9b;
    delete this.rj5o;
    delete this.bQW7P;
    delete this.We5j;
    delete this.bQY7R;
    this.bG0x();
  };
  b9i.cf0x = function() {
    this.ma3x = iW2x;
  };
  b9i.bW0x = function() {
    this.ch0x();
    this.Ao7h = this.n9e;
    h9c.s9j(this.n9e, 'click', this.csd4h.g9d(this));
  };
  b9i.tu5z = function(d9g) {
    if (d9g.button != 2) this.bt9k();
  };
  b9i.csd4h = function(d9g) {
    if (this.csl4p) return;
    h9c.te5j(d9g);
    var F9w = h9c.W9N(d9g);
    if (F9w.tagName == 'A') h9c.cr0x(d9g);
  };
  b9i.csa4e = (function() {
    var df0x = /\s+/i;
    return function(ob4f) {
      ob4f = (ob4f || '')
        .trim()
        .toLowerCase()
        .split(df0x);
      ob4f[0] = ob4f[0] || 'bottom';
      ob4f[1] = ob4f[1] || 'left';
      this.rj5o = ob4f;
    };
  })();
  b9i.crZ4d = function(ob4f) {
    var o9f = {},
      np3x = this.bkk9b,
      cEF7y = a8i.oE4I(),
      cB0x = this.n9e.offsetWidth,
      cc0x = this.n9e.offsetHeight;
    switch (ob4f[0]) {
      case 'top':
        o9f.top = np3x.top - cc0x;
        o9f.left = ob4f[1] == 'right' ? np3x.left + np3x.width - cB0x : np3x.left;
        break;
      case 'left':
        o9f.left = np3x.left - cB0x;
        o9f.top = ob4f[1] == 'bottom' ? np3x.top + np3x.height - cc0x : np3x.top;
        break;
      case 'right':
        o9f.left = np3x.left + np3x.width;
        o9f.top = ob4f[1] == 'bottom' ? np3x.top + np3x.height - cc0x : np3x.top;
        break;
      default:
        o9f.top = np3x.top + np3x.height;
        o9f.left = ob4f[1] == 'right' ? np3x.left + np3x.width - cB0x : np3x.left;
        break;
    }
    return o9f;
  };
  b9i.Lt1x = function() {
    if (!this.bQW7P) {
      this.gI2x(this.bQY7R);
      return;
    }
    if (!!this.We5j) {
      this.gI2x(this.yf7Y);
      return;
    }
    if (!!this.bkk9b) this.gI2x(this.crZ4d(this.rj5o));
  };
  b9i.crF4J = function(F9w, dp0x, d9g) {
    dp0x = dp0x || bb9S;
    var bQP7I = a8i.oE4I(),
      cY0x = h9c.jB2x(d9g) + (dp0x.left || 0),
      hu2x = h9c.mg3x(d9g) + (dp0x.top || 0),
      cB0x = F9w.offsetWidth + (dp0x.right || 0),
      cc0x = F9w.offsetHeight + (dp0x.bottom || 0),
      Mx1x = bQP7I.scrollWidth,
      bkV9M = bQP7I.scrollHeight,
      bkW9N = cY0x + cB0x,
      bkZ9Q = hu2x + cc0x;
    switch (this.rj5o[0]) {
      case 'top':
        hu2x = bkZ9Q > bkV9M ? hu2x - cc0x : hu2x;
        if (this.rj5o[1] == 'right') {
          cY0x = cY0x - cB0x < 0 ? 0 : cY0x - cB0x;
        } else {
          cY0x = bkW9N > Mx1x ? Mx1x - cB0x : cY0x;
        }
        break;
      case 'left':
        cY0x = bkW9N > Mx1x ? Mx1x - cB0x : cY0x;
        if (this.rj5o[1] == 'top') {
          hu2x = bkZ9Q > bkV9M ? hu2x - cc0x : hu2x;
        } else {
          hu2x = hu2x - cc0x < 0 ? hu2x : hu2x - cc0x;
        }
        break;
      case 'right':
        cY0x = cY0x - cB0x < 0 ? 0 : cY0x - cB0x;
        if (this.rj5o[1] == 'top') {
          hu2x = bkZ9Q > bkV9M ? hu2x - cc0x : hu2x;
        } else {
          hu2x = hu2x - cc0x < 0 ? hu2x : hu2x - cc0x;
        }
        break;
      default:
        hu2x = hu2x - cc0x < 0 ? hu2x : hu2x - cc0x;
        if (this.rj5o[1] == 'left') {
          cY0x = bkW9N > Mx1x ? Mx1x - cB0x : cY0x;
        } else {
          cY0x = cY0x - cB0x < 0 ? 0 : cY0x - cB0x;
        }
        break;
    }
    return {
      top: hu2x,
      left: cY0x,
    };
  };
  b9i.ble9V = (function() {
    var crC4G = function(F9w, dp0x) {
      F9w = a8i.B9s(F9w);
      if (!F9w) return;
      dp0x = dp0x || bb9S;
      var bi9Z = a8i.hQ2x(F9w);
      return {
        top: bi9Z.y - (dp0x.top || 0),
        left: bi9Z.x - (dp0x.left || 0),
        width: F9w.offsetWidth + (dp0x.right || 0),
        height: F9w.offsetHeight + (dp0x.bottom || 0),
      };
    };
    return function(e9f) {
      e9f = e9f || bb9S;
      this.We5j = e9f.event;
      this.csa4e(e9f.align);
      if (!!this.We5j) this.yf7Y = this.crF4J(e9f.target, e9f.delta, this.We5j);
      this.bkk9b = crC4G(e9f.target, e9f.delta);
      this.bQW7P = !!e9f.fitable;
      this.L9C();
      return this;
    };
  })();
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    O9F = c9h('nej.ui'),
    b9i,
    K9B;
  if (!!O9F.CP8H) return;
  O9F.CP8H = NEJ.C();
  b9i = O9F.CP8H.N9E(O9F.XZ5e);
  K9B = O9F.CP8H.ct0x;
  O9F.CP8H.cEG7z = (function() {
    var crv4z = function(d9g, C9t, fJ1x, kt3x, UJ4N) {
      var cA0x,
        J9A = C9t + '-i',
        R9I = fJ1x.yg7Z,
        bQM7F = !!kt3x.noclear,
        bQK7D = !!kt3x.toggled;
      if (k9b.gJ2x(kt3x.onbeforeclick)) {
        var Wm5r = kt3x.noclear,
          crp4t = kt3x.toggled;
        try {
          kt3x.onbeforeclick(kt3x);
        } catch (e) {}
        bQM7F = !!kt3x.noclear;
        bQK7D = !!kt3x.toggled;
        kt3x.toggled = crp4t;
        kt3x.noclear = Wm5r;
      }
      var FC9t = R9I[J9A];
      if (bQK7D && !!FC9t) {
        FC9t.bt9k();
        return;
      }
      h9c.bh9Y(d9g);
      if (!bQM7F) {
        h9c.z9q(document, 'click');
        cA0x = fJ1x.A9r(kt3x);
      } else {
        cA0x = fJ1x.bVe8W(kt3x, !0);
      }
      R9I[J9A] = cA0x;
      cA0x.wv6p('onbeforerecycle', function() {
        delete R9I[J9A];
      });
      cA0x.ble9V(UJ4N);
    };
    return function(f9e, e9f) {
      f9e = a8i.B9s(f9e);
      if (!f9e) return this;
      if (!this.yg7Z) this.yg7Z = {};
      var C9t = a8i.lw3x(f9e);
      if (!!this.yg7Z[C9t]) return this;
      e9f = NEJ.X({}, e9f);
      var UJ4N = NEJ.EX(
        {
          align: '',
          delta: null,
          fitable: !1,
        },
        e9f
      );
      UJ4N.target = C9t;
      e9f.destroyable = !0;
      if (!e9f.fixed) {
        UJ4N.fitable = !0;
        e9f.parent = document.body;
      }
      this.yg7Z[C9t] = [
        C9t,
        e9f.event || 'click',
        crv4z.et0x(null, C9t, this, e9f, UJ4N),
      ];
      h9c.s9j.apply(h9c, this.yg7Z[C9t]);
      return this;
    };
  })();
  O9F.CP8H.cEJ7C = function(f9e) {
    if (!this.yg7Z) return this;
    var C9t = a8i.lw3x(f9e),
      d9g = this.yg7Z[C9t];
    if (!d9g) return this;
    delete this.yg7Z[C9t];
    h9c.mv3x.apply(h9c, d9g);
    var cA0x = this.yg7Z[C9t + '-i'];
    if (!!cA0x) cA0x.bt9k();
    return this;
  };
  b9i.blE9v = function() {
    return O9F.VU5Z.A9r(this.cd0x);
  };
  b9i.RG3x = function() {
    K9B.RG3x.apply(this, arguments);
    this.cd0x.top = null;
    this.cd0x.left = null;
    this.cd0x.nostop = !1;
  };
  b9i.ble9V = function(e9f) {
    if (!!this.pl4p) this.pl4p.ble9V(e9f);
    return this;
  };
})();
(function() {
  var c9h = NEJ.P,
    bc9T = c9h('nej.ui'),
    m9d = c9h('nm.l'),
    b9i,
    K9B;
  m9d.blM9D = NEJ.C();
  b9i = m9d.blM9D.N9E(bc9T.CP8H);
  b9i.bk9b = function(e9f) {
    e9f.nohack = true;
    this.bm9d(e9f);
  };
})();
(function() {
  var c9h = NEJ.P,
    a8i = c9h('nej.e'),
    m9d = c9h('nm.l'),
    l9c = c9h('nm.x'),
    b9i,
    K9B;
  var FullscreenApi = l9c.Ee9V || {};
  m9d.Z9Q = NEJ.C();
  b9i = m9d.Z9Q.N9E(m9d.blM9D);
  K9B = m9d.Z9Q.ct0x;
  b9i.bk9b = function(e9f) {
    this.bm9d(e9f);
    this.eu0x = e9f.type || 1;
  };
  b9i.bW0x = function() {
    this.ch0x();
    this.n9e = a8i.nI4M(this.crk4o());
    var i9b = a8i.dj0x(this.n9e);
    this.qJ4N = i9b[0];
    this.cv0x = i9b[1];
  };
  b9i.crk4o = function() {
    return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>';
  };
  b9i.Lt1x = function() {
    var D9u = {},
      ci0x = this.n9e.style,
      jL2x = a8i.oE4I(),
      ol4p = {
        left: jL2x.scrollLeft,
        top: jL2x.scrollTop,
      },
      dp0x = {
        left: jL2x.clientWidth - this.n9e.offsetWidth,
        top: jL2x.clientHeight - this.n9e.offsetHeight,
      };
    D9u.top = Math.max(0, ol4p.top + dp0x.top / 2);
    D9u.left = Math.max(0, ol4p.left + dp0x.left / 2);
    this.pl4p.gI2x(D9u);
  };
  b9i.L9C = function(e9f) {
    K9B.L9C.call(this);
    this.Lt1x();
    this.eu0x == 1
      ? a8i.fi1x(this.qJ4N, 'u-icn-32', 'u-icn-31')
      : a8i.fi1x(this.qJ4N, 'u-icn-31', 'u-icn-32');
    this.cv0x.innerHTML = e9f.tip || '';
  };
  window.g_showTipCard = m9d.Z9Q.L9C = (function() {
    var ei0x;
    return function(e9f) {
      clearTimeout(ei0x);
      if (e9f.parent === undefined)
        e9f.parent = document[FullscreenApi.fullscreenElement] || document.body;
      if (e9f.autoclose === undefined) e9f.autoclose = true;
      e9f.clazz = 'm-sysmsg';
      !!this.ff1x && this.ff1x.T9K();
      this.ff1x = this.A9r(e9f);
      this.ff1x.L9C(e9f);
      if (e9f.autoclose) ei0x = setTimeout(this.bt9k.g9d(this), 2000);
    }.g9d(m9d.Z9Q);
  })();
  m9d.Z9Q.bt9k = function() {
    !!this.ff1x && this.ff1x.bt9k();
  };
})();
(function() {
  var c9h = NEJ.P,
    v9m = c9h('nej.j'),
    k9b = c9h('nej.u');
  if (window['GRef'] && window['GRef'] == 'mail') {
    v9m.bn9e = v9m.bn9e.eF0x(function(d9g) {
      e9f = d9g.args[1];
      e9f.query = e9f.query || {};
      if (k9b.fH1x(e9f.query)) e9f.query = k9b.hy2x(e9f.query);
      e9f.query.ref = 'mail';
    });
  }
})();
(function() {
  var c9h = NEJ.P,
    br9i = NEJ.F,
    fz1x = NEJ.R,
    I9z = c9h('nej.ut'),
    k9b = c9h('nej.u'),
    h9c = c9h('nej.v'),
    v9m = c9h('nej.j'),
    q9h = c9h('nm.d'),
    m9d = c9h('nm.l'),
    J9A = 'playlist-tracks_',
    b9i;
  q9h.fl1x({
    'playlist_my-list': {
      url: '/api/user/playlist',
      type: 'GET',
      format: function(Q9H, e9f) {
        this.crj4n(Q9H.playlist);
        return {
          total: 0,
          list: fz1x,
        };
      },
      onerror: function() {
        this.z9q('onlisterror');
      },
    },
    'playlist_new-add': {
      url: '/api/playlist/create',
      format: function(Q9H, e9f) {
        var mU3x = Q9H.playlist;
        mU3x.creator = GUser;
        mU3x.isHost = !0;
        mU3x.typeFlag = 'playlist';
        return mU3x;
      },
      finaly: function(d9g, e9f) {
        h9c.z9q(q9h.ig2x, 'listchange', d9g);
      },
      onmessage: (function() {
        var mK3x = {
          507: '歌单数量超过上限！',
          405: '你操作太快了，请休息一会再试！',
          406: '你操作太快了，请休息一会再试！',
        };
        return function(cj0x) {
          m9d.Z9Q.L9C({
            tip: mK3x[cj0x] || '创建失败',
            type: 2,
          });
        };
      })(),
    },
    'playlist_new-del': {
      url: '/api/playlist/delete',
      type: 'GET',
      filter: function(e9f) {
        e9f.id = e9f.data.pid;
      },
      finaly: function(d9g, e9f) {
        h9c.z9q(q9h.ig2x, 'listchange', d9g);
      },
      onmessage: (function() {
        var mK3x = {
          404: '歌单不存在！',
          405: '你操作太快了，请休息一会再试！',
          406: '你操作太快了，请休息一会再试！',
        };
        return function(cj0x) {
          m9d.Z9Q.L9C({
            tip: mK3x[cj0x] || '删除失败',
            type: 2,
          });
        };
      })(),
    },
    'playlist_fav-add': {
      type: 'GET',
      url: '/api/playlist/subscribe',
      filter: function(e9f) {
        var ey0x = e9f.ext || {};
        e9f.ext = NEJ.X(ey0x, e9f.data);
        e9f.data = {
          id: e9f.ext.id,
        };
      },
      format: function(Q9H, e9f) {
        m9d.Z9Q.L9C({
          tip:
            '收藏成功' +
            (Q9H.point > 0 ? ' 获得<em class="s-fc6">' + Q9H.point + '积分</em>' : ''),
        });
        var p9g = e9f.ext;
        p9g.subscribedCount++;
        return p9g;
      },
      finaly: function(d9g, e9f) {
        h9c.z9q(q9h.cri4m, 'listchange', d9g);
        h9c.z9q(q9h.cri4m, 'itemchange', {
          attr: 'subscribedCount',
          data: d9g.data,
        });
      },
      onmessage: (function() {
        var mK3x = {
          404: '歌单不存在！',
          501: '歌单已经收藏！',
          506: '歌单收藏数量超过上限！',
        };
        return function(cj0x) {
          m9d.Z9Q.L9C({
            type: 2,
            tip: mK3x[cj0x] || '收藏失败，请稍后再试！',
          });
        };
      })(),
    },
    'playlist_fav-del': {
      url: '/api/playlist/unsubscribe',
      type: 'GET',
      filter: function(e9f) {
        e9f.id = e9f.data.id = e9f.data.pid;
      },
      finaly: function(d9g, e9f) {
        h9c.z9q(q9h.ig2x, 'listchange', d9g);
      },
      onmessage: (function() {
        var mK3x = {
          404: '歌单不存在！',
          405: '你操作太快了，请休息一会再试！',
          406: '你操作太快了，请休息一会再试！',
        };
        return function(cj0x) {
          m9d.Z9Q.L9C({
            tip: mK3x[cj0x],
            type: 2,
          });
        };
      })(),
    },
    'playlist_new-update': {
      url: ['playlist-update-name', 'playlist-update-tag', 'playlist-update-desc'],
      filter: function(e9f) {
        var j9a = e9f.data,
          Wr5w = {};
        Wr5w['playlist-update-name'] = {
          id: j9a.id,
          name: j9a.name,
        };
        Wr5w['playlist-update-tag'] = {
          id: j9a.id,
          tags: j9a.tags.join(';'),
        };
        Wr5w['playlist-update-desc'] = {
          id: j9a.id,
          desc: j9a.description,
        };
        e9f.data = Wr5w;
        e9f.ext = j9a;
      },
      format: function(V9M, qL4P, UA4E, e9f) {
        if (V9M.code == 200 && qL4P.code == 200 && UA4E.code == 200) {
          e9f.ext.allSuccess = true;
          m9d.Z9Q.L9C({
            tip: '保存成功',
          });
        } else if (V9M.code == 407 || qL4P.code == 407 || UA4E.code == 407) {
          e9f.ext.allSuccess = false;
          m9d.Z9Q.L9C({
            type: 2,
            tip: '输入内容包含关键字',
          });
        } else {
          e9f.ext.allSuccess = false;
          m9d.Z9Q.L9C({
            type: 2,
            tip: '保存失败',
          });
        }
        return this.eH0x(e9f.ext.id);
      },
      finaly: function(d9g, e9f) {
        h9c.z9q(q9h.ig2x, 'listchange', d9g);
      },
      onmessage: function(cj0x) {
        m9d.Z9Q.L9C({
          type: 2,
          tip: '保存失败',
        });
      },
    },
    'playlist-update-name': {
      url: '/api/playlist/update/name',
      format: function(Q9H, e9f) {
        var p9g = this.eH0x(e9f.ext.id);
        if (Q9H.code == 200) p9g.name = e9f.ext.name;
        return Q9H;
      },
    },
    'playlist-update-tag': {
      url: '/api/playlist/tags/update',
      format: function(Q9H, e9f) {
        var p9g = this.eH0x(e9f.ext.id);
        if (Q9H.code == 200) p9g.tags = e9f.ext.tags;
        return Q9H;
      },
    },
    'playlist-update-desc': {
      url: '/api/playlist/desc/update',
      format: function(Q9H, e9f) {
        var p9g = this.eH0x(e9f.ext.id);
        if (Q9H.code == 200) p9g.description = e9f.ext.description;
        return Q9H;
      },
    },
    'playlist-update-cover': {
      url: '/api/playlist/cover/update',
      filter: function(e9f) {
        e9f.url = e9f.data.url;
        delete e9f.data.url;
      },
      format: function(Q9H, e9f) {
        m9d.Z9Q.L9C({
          tip: '保存成功',
        });
        var p9g = this.eH0x(e9f.data.id);
        p9g.coverImgUrl = e9f.url;
        e9f.ext = p9g;
        return p9g;
      },
      onmessage: function(cj0x) {
        m9d.Z9Q.L9C({
          type: 2,
          tip: '保存失败',
        });
      },
      finaly: function(d9g, e9f) {
        h9c.z9q(q9h.ig2x, 'itemchange', {
          attr: 'coverImgUrl',
          data: e9f.ext,
        });
      },
    },
    'playlist-upcount': {
      url: '/api/playlist/update/playcount',
      type: 'GET',
      format: function(Q9H, e9f) {
        var mU3x = this.eH0x(e9f.data.id);
        if (!mU3x) return;
        mU3x.playCount++;
        h9c.z9q(q9h.ig2x, 'itemchange', {
          attr: 'playcount',
          data: mU3x,
        });
      },
    },
  });
  q9h.ig2x = NEJ.C();
  b9i = q9h.ig2x.N9E(q9h.hL2x);
  b9i.cy0x = function() {
    this.cG0x();
  };
  b9i.bQH7A = function() {
    var dn0x = GUser.userId;
    this.lJ3x({
      limit: 1001,
      key: 'playlist_my-' + dn0x,
      data: {
        offset: 0,
        limit: 1001,
        uid: dn0x,
      },
    });
  };
  b9i.crj4n = function(i9b) {
    var dn0x = GUser.userId,
      jb2x = [],
      bQG7z = [];
    k9b.bd9U(i9b, function(p9g) {
      p9g.typeFlag = 'playlist';
      if (p9g.creator && p9g.creator.userId == dn0x) {
        if (p9g.specialType == 5) p9g.name = '我喜欢的音乐';
        p9g.isHost = !0;
        jb2x.push(p9g);
      } else {
        bQG7z.push(p9g);
      }
    });
    this.vd6X('playlist_new-' + dn0x, jb2x);
    this.vd6X('playlist_fav-' + dn0x, bQG7z);
  };
  b9i.cqY4c = function(j9a) {
    this.cp0x('playlist-update-cover', {
      data: j9a,
    });
  };
  b9i.cEK7D = function() {
    var Ux4B = this.cqW4a.B9s('host-plist');
    if (Ux4B.length == 0) {
      return;
    }
    if (Ux4B.length == 1 && Ux4B[0].trackCount <= 0) {
      return;
    }
    for (var i = 0, len = Ux4B.length; i < len; i++) {
      var p9g = Ux4B[i];
      if (p9g.trackCount > 0) return p9g.id;
    }
    return this.cqW4a.B9s('host-plist')[0].id;
  };
  b9i.cqV4Z = function(C9t) {
    if (GUser && GUser.userId > 0) {
      this.cp0x('playlist-upcount', {
        data: {
          id: C9t,
        },
      });
    }
  };
  b9i.Eo9f = function() {
    if (GUser && GUser.userId > 0) {
      return !0;
    } else {
      top.login();
      return !1;
    }
  };
  b9i.cEL7E = function() {
    return GUser.userId;
  };
  b9i.Ex9o = function(p9g) {
    if (p9g.userId == GUser.userId && p9g.specialType == 5) p9g.name = '我喜欢的音乐';
    h9c.z9q(this.constructor, 'itemchange', {
      data: this.Bu8m(p9g),
    });
    return p9g;
  };
  I9z.fL1x.A9r({
    element: q9h.ig2x,
    event: ['listchange', 'playcountchange', 'itemchange'],
  });
})();
(function() {
  var c9h = NEJ.P,
    fz1x = NEJ.R,
    br9i = NEJ.F,
    bb9S = NEJ.O,
    I9z = c9h('nej.ut'),
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    l9c = c9h('nm.x'),
    q9h = c9h('nm.d'),
    m9d = c9h('nm.l'),
    b9i,
    K9B;
  q9h.fl1x({
    'program-get': {
      url: '/api/dj/program/detail',
      format: function(Q9H) {
        return Q9H.program;
      },
    },
    'program_djradio-list': {
      type: 'GET',
      url: '/api/dj/program/byradio',
      filter: function(e9f) {
        e9f.data.limit = 1000;
        delete e9f.data.id;
      },
      format: function(Q9H, e9f) {
        var bQD7w = [],
          pB4F = Q9H.programs;
        if (pB4F) {
          for (var i = 0, l = pB4F.length; i < l; i++) {
            if (pB4F[i].programFeeType < 10 || pB4F[i].buyed) {
              bQD7w.push(pB4F[i]);
            }
          }
        }
        return bQD7w;
      },
    },
    'program_fav-list': {
      url: '/api/djprogram/subscribed/paged',
      format: function(Q9H, e9f) {
        return Q9H.programs;
      },
      onerror: 'onlisterror',
    },
    'program_fav-add': {
      url: '/api/djprogram/subscribe',
      filter: function(e9f) {
        e9f.ext = e9f.data;
        e9f.data = {
          id: e9f.ext.id,
        };
        e9f.id = e9f.data.id;
      },
      format: function(Q9H, e9f) {
        m9d.Z9Q.L9C({
          tip: '收藏成功',
        });
        var p9g = e9f.ext;
        p9g.subscribedCount++;
        p9g.subscribed = !0;
        return p9g;
      },
      finaly: function(d9g, e9f) {
        h9c.z9q(q9h.qY5d, 'listchange', d9g);
      },
      onmessage: (function() {
        var mK3x = {
          404: '节目不存在！',
          501: '节目已收藏！',
        };
        return function(cj0x) {
          m9d.Z9Q.L9C({
            type: 2,
            tip: mK3x[cj0x] || '收藏失败！',
          });
        };
      })(),
    },
    'program_fav-del': {
      url: '/api/djprogram/unsubscribe',
      finaly: function(d9g, e9f) {
        h9c.z9q(q9h.qY5d, 'listchange', d9g);
      },
      onmessage: (function() {
        var mK3x = {
          404: '节目不存在！',
          502: '没有收藏此节目！',
        };
        return function(cj0x) {
          l9c.bnB0x({
            txt: mK3x[cj0x] || '取消收藏失败！',
          });
        };
      })(),
    },
    'program-update-count': {
      type: 'GET',
      url: '/api/dj/program/listen',
      filter: function(e9f) {
        var p9g = this.eH0x(e9f.data.id) || bb9S;
        e9f.ext = (p9g.listenerCount || 0) + 1;
      },
      format: function(Q9H, e9f) {
        var p9g = this.eH0x(e9f.data.id);
        if (!!p9g) {
          p9g.listenerCount = Math.max(e9f.ext, p9g.listenerCount || 0);
        }
      },
      finaly: function(d9g, e9f) {
        h9c.z9q(q9h.qY5d, 'itemchange', {
          attr: 'playCount',
          data: this.eH0x(e9f.data.id),
        });
      },
    },
    'program-like': {
      url: '/api/resource/like',
      filter: function(e9f) {
        e9f.data = {
          threadId: 'A_DJ_1_' + e9f.id,
        };
      },
      format: function(Q9H, e9f) {
        var p9g = e9f.ext.data || this.eH0x(e9f.id);
        p9g.liked = true;
        p9g.likedCount++;
        e9f.ext.data = p9g;
        try {
          top.player.setLike(p9g);
        } catch (e) {}
        return p9g;
      },
      finaly: function(d9g, e9f) {
        h9c.z9q(q9h.qY5d, 'itemchange', {
          attr: 'likedCount',
          data: e9f.ext.data,
        });
      },
    },
    'program-unlike': {
      url: '/api/resource/unlike',
      filter: function(e9f) {
        e9f.data = {
          threadId: 'A_DJ_1_' + e9f.id,
        };
      },
      format: function(Q9H, e9f) {
        var p9g = e9f.ext.data || this.eH0x(e9f.id);
        p9g.liked = false;
        p9g.likedCount--;
        e9f.ext.data = p9g;
        try {
          top.player.setLike(p9g);
        } catch (e) {}
        return p9g;
      },
      finaly: function(d9g, e9f) {
        h9c.z9q(q9h.qY5d, 'itemchange', {
          attr: 'likedCount',
          data: e9f.ext.data,
        });
      },
    },
  });
  q9h.qY5d = NEJ.C();
  b9i = q9h.qY5d.N9E(q9h.hL2x);
  b9i.cEM7F = function() {
    var dn0x = GUser.userId;
    this.lJ3x({
      limit: 1001,
      key: 'program_fav-' + dn0x,
      data: {
        offset: 0,
        limit: 1000,
        uid: dn0x,
      },
    });
  };
  b9i.cEN7G = function(db0x) {
    var pG4K = db0x[this.wR6L];
    l9c.cqO4S(4, function(R9I) {
      R9I.vd6X('track_program-' + pG4K, db0x.songs);
    });
    delete db0x.songs;
    var bN0x = db0x.mainSong;
    l9c.cqO4S(4, function(R9I) {
      R9I.vd6X('track_program_main-' + pG4K, !bN0x ? [] : [bN0x]);
    });
    db0x.mainSong = (bN0x || bb9S).id;
  };
  b9i.cEO7H = function(C9t) {
    var db0x = this.eH0x(C9t),
      dn0x = localCache.WF5K('host.profile.userId');
    return !!db0x && db0x.dj.userId == dn0x;
  };
  b9i.cEP7I = function(C9t) {
    return !1;
  };
  b9i.Ex9o = function(p9g) {
    h9c.z9q(this.constructor, 'itemchange', {
      attr: 'detail',
      data: this.Bu8m(p9g),
    });
    return p9g;
  };
  b9i.cqV4Z = function(C9t) {
    this.cp0x('program-update-count', {
      data: {
        id: C9t,
      },
    });
  };
  l9c.bQx6r = function(e9f) {
    var R9I = q9h.qY5d.A9r({
      onitemadd: function() {
        (e9f.onsuccess || br9i)();
      },
      onerror: function() {
        (e9f.onerror || br9i)();
      },
    });
    if (e9f.data.liked) {
      R9I.vm6g(e9f.data);
    } else {
      R9I.oy4C(e9f.data);
    }
  };
  b9i.oy4C = function(db0x) {
    if (!l9c.gM2x()) return;
    var cq0x = {
      ext: {},
    };
    if (k9b.lO3x(db0x)) {
      cq0x.id = db0x.id;
      cq0x.ext.data = db0x;
    } else {
      cq0x.id = db0x;
    }
    this.cp0x('program-like', cq0x);
  };
  b9i.vm6g = function(db0x) {
    if (!l9c.gM2x()) return;
    var cq0x = {
      ext: {},
    };
    if (k9b.lO3x(db0x)) {
      cq0x.id = db0x.id;
      cq0x.ext.data = db0x;
    } else {
      cq0x.id = db0x;
    }
    this.cp0x('program-unlike', cq0x);
  };
  I9z.fL1x.A9r({
    element: q9h.qY5d,
    event: ['listchange', 'itemchange'],
  });
})();
(function() {
  var c9h = NEJ.P,
    br9i = NEJ.F,
    fz1x = NEJ.R,
    I9z = c9h('nej.ut'),
    k9b = c9h('nej.u'),
    h9c = c9h('nej.v'),
    v9m = c9h('nej.j'),
    q9h = c9h('nm.d'),
    m9d = c9h('nm.l'),
    l9c = c9h('nm.x'),
    J9A = 'playlist-tracks_',
    l9c = c9h('nm.x'),
    b9i;
  q9h.fl1x({
    'track-get': {
      url: '/api/v3/song/detail',
      filter: function(e9f) {
        e9f.data.c = JSON.stringify([
          {
            id: e9f.data.id,
          },
        ]);
      },
      format: function(Q9H, e9f) {
        var bj9a = l9c.EQ9H(Q9H.songs[0]);
        bj9a.privilege = Q9H.privileges[0];
        return bj9a;
      },
    },
    'track_playlist-list': {
      url: '/api/v3/playlist/detail',
      filter: function(e9f) {
        e9f.data.n = 1000;
      },
      format: function(Q9H, e9f) {
        var hD2x = [];
        this.sX5c.Ex9o(Q9H.playlist);
        k9b.bd9U(
          Q9H.playlist.tracks,
          function(bN0x, r9i) {
            var bQw6q = l9c.EQ9H(bN0x);
            bQw6q.privilege = Q9H.privileges[r9i];
            hD2x.push(bQw6q);
          },
          this
        );
        return hD2x;
      },
    },
    'track_album-list': {
      url: '/api/v1/album/{id}',
      format: function(Q9H, e9f) {
        var hD2x = [];
        k9b.bd9U(Q9H.songs, function(bj9a) {
          hD2x.push(l9c.EQ9H(bj9a));
        });
        return hD2x;
      },
    },
    'track_playlist-add': {
      url: '/api/playlist/manipulate/tracks',
      filter: function(e9f) {
        var bz0x = {},
          j9a = e9f.data,
          cqH4L = this.hF2x(e9f.key) || [];
        EZ9Q = [];
        k9b.bd9U(cqH4L, function(bN0x) {
          var C9t = k9b.lO3x(bN0x) ? bN0x.id : bN0x;
          bz0x[C9t] = true;
        });
        e9f.ext = [];
        k9b.bd9U(j9a.tracks, function(bN0x) {
          var C9t = k9b.lO3x(bN0x) ? bN0x.id : bN0x;
          if (!bz0x[C9t]) {
            EZ9Q.push(C9t);
            bz0x[C9t] = true;
            e9f.ext.push(bN0x);
          }
        });
        j9a.trackIds = JSON.stringify(EZ9Q);
        j9a.op = 'add';
        if (!EZ9Q.length) {
          e9f.value = {
            code: 502,
          };
        }
      },
      format: function(Q9H, e9f) {
        m9d.Z9Q.L9C({
          tip: '已添加至歌单',
        });
        var mU3x = this.sX5c.eH0x(e9f.data.pid);
        if (!!Q9H.coverImgUrl) mU3x.coverImgUrl = Q9H.coverImgUrl;
        k9b.nH4L(
          e9f.ext,
          function(bN0x) {
            this.xO7H(e9f, k9b.lO3x(bN0x) ? bN0x : null);
            if (!!mU3x) mU3x.trackCount++;
          },
          this
        );
        h9c.z9q(q9h.ig2x, 'itemchange', {
          data: mU3x || {},
          cmd: 'add',
        });
        this.z9q('onaddsuccess');
        return null;
      },
      finaly: function(d9g, e9f) {
        h9c.z9q(q9h.xm7f, 'listchange', {
          key: e9f.key,
          action: 'refresh',
        });
        var pG4K = e9f.data.pid,
          cz0x = this.kn3x(e9f.key);
      },
      onmessage: (function() {
        var mK3x = {
          502: '歌曲已存在！',
          505: '歌单已满！',
        };
        return function(cj0x) {
          setTimeout(function() {
            m9d.Z9Q.L9C({
              tip: mK3x[cj0x] || '添加失败，请稍后再试！',
              type: 2,
            });
          }, 0);
        };
      })(),
    },
    'track_playlist-del': {
      url: '/api/playlist/manipulate/tracks',
      filter: function(e9f) {
        var j9a = e9f.data;
        e9f.ext = j9a.trackIds;
        j9a.trackIds = JSON.stringify(j9a.trackIds);
        j9a.op = 'del';
      },
      format: function(Q9H, e9f) {
        var mU3x = this.sX5c.eH0x(e9f.data.pid);
        k9b.bd9U(
          e9f.ext,
          function(C9t) {
            this.btI1x(
              {
                id: C9t,
                key: 'track_playlist-' + e9f.data.pid,
              },
              !0
            );
            if (!!mU3x) mU3x.trackCount = Math.max(0, mU3x.trackCount - 1);
          },
          this
        );
        h9c.z9q(q9h.ig2x, 'itemchange', {
          data: mU3x || {},
          cmd: 'del',
        });
        return null;
      },
      finaly: function(d9g, e9f) {
        h9c.z9q(q9h.xm7f, 'listchange', {
          key: e9f.key,
          action: 'refresh',
        });
      },
      onmessage: function(cj0x) {
        l9c.bnB0x({
          text: '歌曲删除失败！',
        });
      },
    },
    'track_program-list': {
      url: '/api/dj/program/detail',
      format: function(Q9H, e9f) {
        return this.bQv6p.Ex9o(Q9H.program).songs;
      },
      onerror: 'onlisterror',
    },
    'track_listen_record-list': {
      url: '/api/v1/play/record',
      format: function(Q9H, e9f) {
        var i9b = [];
        if (e9f.data.type == -1) {
          if (Q9H.weekData && Q9H.weekData.length) {
            e9f.data.type = 1;
          } else {
            e9f.data.type = 0;
          }
        }
        if (e9f.data.type == 1) {
          i9b = this.bQu6o(Q9H.weekData);
        } else {
          i9b = this.bQu6o(Q9H.allData);
        }
        return i9b;
      },
      onerror: 'onlisterror',
    },
    'track_day-list': {
      url: '/api/v2/discovery/recommend/songs',
      format: function(Q9H, e9f) {
        var nN4R = [],
          i9b = Q9H.recommend || [];
        k9b.bd9U(i9b, function(bj9a, r9i) {
          nN4R.push({
            action: 'recommendimpress',
            json: {
              alg: bj9a.alg,
              scene: 'user-song',
              position: r9i,
              id: bj9a.id,
            },
          });
        });
        this.kD3x.VQ5V(nN4R);
        e9f.limit = i9b.length;
        return i9b;
      },
      onerror: 'onlisterror',
    },
    'track_lyric-get': {
      type: 'GET',
      url: '/api/song/lyric',
      filter: function(e9f) {
        e9f.data.lv = 0;
        e9f.data.tv = 0;
      },
      format: function(o9f, e9f) {
        return o9f;
      },
      onload: 'onlyricload',
      onerror: 'onlyricerror',
    },
  });
  q9h.xm7f = NEJ.C();
  b9i = q9h.xm7f.N9E(q9h.hL2x);
  b9i.cy0x = function() {
    this.cG0x();
    this.sX5c = q9h.ig2x.A9r();
    this.bQv6p = q9h.qY5d.A9r();
    this.kD3x = q9h.hP2x.A9r();
  };
  b9i.bQu6o = function(i9b) {
    var o9f = [],
      fo1x = 0;
    k9b.bd9U(i9b, function(p9g, r9i) {
      var bj9a = l9c.EQ9H(p9g.song);
      if (r9i == 0) {
        fo1x = p9g.score;
      }
      bj9a.max = fo1x;
      bj9a.playCount = p9g.playCount;
      bj9a.score = p9g.score;
      o9f.push(bj9a);
    });
    return o9f;
  };
  I9z.fL1x.A9r({
    element: q9h.xm7f,
    event: ['listchange'],
  });
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    cC0x = c9h('nm.pc');
  var bpt0x = {
    playlist: 'A_PL_0_',
    dj: 'A_DJ_1_',
    program: 'A_DJ_1_',
    album: 'R_AL_3_',
    song: 'R_SO_4_',
  };
  var rd5i = function(bP0x) {
    var AV8N = 'orpheus://orpheus';
    window.top.postMessage(JSON.stringify(bP0x), AV8N);
  };
  var cqD4H = function(lZ3x) {
    var kH3x = 'http://' + location.host + '/',
      Up4t = /(igame|music)\.163\.com\/(song|album|playlist|dj|event|artist|mv|djradio|topic|video|program|user\/home|activity)\?id=(\w+)(&uid=(\d+))?/,
      dO0x = Up4t.exec(lZ3x);
    if (!dO0x) return cqC4G(lZ3x);
    var gg1x = dO0x[2],
      hA2x = dO0x[3],
      dn0x = dO0x[4] || '',
      jk2x = '';
    switch (gg1x) {
      case 'album':
        jk2x = '#/m/album/comment/?rid=' + bpt0x[gg1x] + hA2x + '&id=' + hA2x;
        break;
      case 'playlist':
        jk2x = '#/m/playlist/comment/?rid=' + bpt0x[gg1x] + hA2x + '&id=' + hA2x;
        break;
      case 'song':
      case 'dj':
      case 'program':
        jk2x = '#/m/song?rid=' + bpt0x[gg1x] + hA2x;
        break;
      case 'event':
        jk2x = '#/m/friend/event/?id=' + hA2x + '&uid=' + dn0x;
        break;
      case 'user/home':
        jk2x = '#/m/personal/?uid=' + hA2x;
        break;
      case 'mv':
        jk2x = '#/m2/mv/?id=' + hA2x;
        break;
      case 'activity':
        jk2x = '#/m/friend/activity?id=' + hA2x;
        break;
      case 'video':
        jk2x = '#/m2/mv/?id=' + hA2x + '&type=1';
        break;
      default:
        jk2x = '#/m/' + gg1x + '/?id=' + hA2x;
    }
    return kH3x + jk2x;
  };
  var cqC4G = function(lZ3x) {
    var cqB4F = /http:\/\/player\.youku\.com\/embed\/(.+)/;
    var dO0x = cqB4F.exec(lZ3x);
    if (dO0x) return 'http://v.youku.com/v_show/id_' + dO0x[1];
    return lZ3x;
  };
  cC0x.en0x = function(gg1x, hA2x) {
    rd5i({
      name: 'play',
      args: {
        type: gg1x,
        id: hA2x,
      },
    });
  };
  cC0x.fG1x = function() {
    rd5i({
      name: 'pause',
    });
  };
  cC0x.Cq8i = function(lZ3x) {
    rd5i({
      name: 'open',
      args: {
        link: cqD4H(lZ3x),
      },
    });
  };
  cC0x.kG3x = function(gg1x, hA2x, cH0x) {
    rd5i({
      name: 'share',
      args: {
        type: gg1x,
        id: hA2x,
        shareContent: cH0x,
      },
    });
  };
  cC0x.bQs6m = function(gg1x, hA2x) {
    rd5i({
      name: 'comment',
      args: {
        type: gg1x,
        id: hA2x,
      },
    });
  };
  cC0x.cqx4B = function() {
    rd5i({
      name: 'init',
    });
  };
  cC0x.Cm8e = function(cc0x) {
    rd5i({
      name: 'setHeight',
      args: {
        height: cc0x,
      },
    });
  };
  cC0x.im2x = function(bH0x, X9O) {
    rd5i({
      name: 'toast',
      args: {
        message: bH0x || '',
        state: X9O,
      },
    });
  };
  cC0x.Ue4i = function(lZ3x) {
    rd5i({
      name: 'login',
      args: {
        link: lZ3x,
      },
    });
  };
  cC0x.bQr6l = function(Ck8c) {
    rd5i({
      name: 'topbar',
      args: {
        show: !!Ck8c,
      },
    });
  };
  cC0x.cqv4z = function(by0x) {
    rd5i({
      name: 'refreshtopbar',
      args: {
        info: by0x,
      },
    });
  };
  cC0x.cqu4y = function(bs9j, r9i) {
    rd5i({
      name: 'big',
      args: {
        arr: bs9j,
        index: r9i,
      },
    });
  };
  cC0x.Mh1x = function(cw0x) {
    rd5i({
      name: 'download',
      args: {
        img: cw0x,
      },
    });
  };
  cC0x.bQq6k = function(cqp4t) {
    rd5i({
      name: 'scrollable',
      args: {
        scrollable: cqp4t,
      },
    });
  };
})();
(function() {
  function J() {
    var d = '6skV4PUYecGhx07l'.split('');
    this.d = function(f) {
      if (null == f || void 0 == f) return f;
      if (0 != f.length % 2) throw Error('1100');
      for (var b = [], c = 0; c < f.length; c++) {
        0 == c % 2 && b.push('%');
        for (var g = d, a = 0; a < g.length; a++)
          if (f.charAt(c) == g[a]) {
            b.push(a.toString(16));
            break;
          }
      }
      return decodeURIComponent(b.join(''));
    };
  }
  var k = new J().d,
    d = new J().d,
    e = new J().d,
    f = new J().d,
    g = new J().d;
  (function() {
    var B = [
        e('44UsY4UP'),
        e('40UcU7UcUkUsYkP6UxYPUYUcU7'),
        d('U4UPUVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4'),
        f('47P6P6UxUsYcUPYkPVUeUPUxUx'),
        f('40PVk6PkUPUUUPYkUPU7UVUPk6PVUsU7YVk6PVUPYkUcUU'),
        e('4eUcYkUsUYUcU7Ulk6PVUsU7YVk64Y4k'),
        d('YVUPYkUcUU'),
        g('UYUPY44VUlU7Y4UPYeY4'),
      ],
      J = [g('YPU7UcUUUlYkU0VkUU')],
      b = [
        d(''),
        g('4YYkUsYcP4UPYeY4'),
        k('Y6UsYkUPU7Y4'),
        e('7Phchx7PcxeU'),
        k('Y6UxYPUYUcU7YV'),
        d('4sU4UlUkUP4PYe40UsU744UPY4UPUVY4'),
        e('V6V6VsV6'),
        d('4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYUcU7'),
        k('PUUPUPY4UxUPk6P4PUk64VUlYkUP'),
        f('V6V6V6VY'),
        f('V6V6V6V4'),
        d('V6V6V6Vk'),
        d('V6V6V6VV'),
        g('V6V6V6V6'),
        e('V6V6V6Vs'),
        g('PPU7UcY4Yck6P6UxUsYcUPYk'),
        d('PVUhYcY6UPk6PYUPUkk6P6UxYPUYUcU7'),
        d('PYUPUk4hUcY4k0UcU7Y4UPUYYkUcUPYkY4UPk6P6444U'),
        e('4kUPUxUxk640P4'),
        e('V6V6V6Ve'),
        g('UYUPY4PVYPY6Y6UlYkY4UPU44PYeY4UPU7YVUcUlU7YV'),
        d('YVUPY4P4UcU0UP'),
        e('V6V6V6Vc'),
        g('PVUsUUUPPVUPUsYkUVUe'),
        d('kk'),
        f('k4'),
        f('PPU7UcYUUPYkYV'),
        e('kP'),
        e('kU'),
        f('kY'),
        f('VsVsVsV6'),
        d('UYUPY4k6Y6UxYPUYUcU7k6YVY4YkUcU7UYk6UPYeUVUPY6Y4UcUlU7'),
        e('P4UeYkUPUP44PVUeUsU4UlYY'),
        g('kh'),
        f('kx'),
        d('k0'),
        f('4sYkUsUk'),
        g('7eehhc7Uc7cx74heh07YhheU7PG7eh'),
        d('k7'),
        g('4UPPPG4PPVUeUsYkUP'),
        g('kl'),
        d('V6'),
        k('Vs'),
        f('Vk'),
        e('VV'),
        e('V4'),
        e('74hhhl7PG7ehPl4Y4kVkVVVsVk'),
        g('VP'),
        f('VU'),
        e('4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7P4UPYeY4'),
        f('VY'),
        d('PY4P4kPG4P47k64kYkUlYYYVUPYkk64PYeY4UPU7YVUcUlU7'),
        f('Ve'),
        e('Vc'),
        g('VG'),
        g('44UcYUPek64kYkUlYYYVUPYkk6P6UxYPUYk04cU7'),
        k('Vh'),
        g('V0'),
        d('PPY6UxUsYck6P64V'),
        e('UVUsU7YUUsYVk6UPYeUVUPY6Y4UcUlU7'),
        f('4s'),
        k('4k'),
        g('4V'),
        g('44'),
        g('4P'),
        f('7Ph7G77eh0Gl7ccheP7chhcs'),
        e('4U'),
        k('4eUsYkYkUcU7UYY4UlU7'),
        f('4Y'),
        f('4e'),
        f('4c'),
        k('4G'),
        e('4YU7UlU0UPk6PVUeUPUxUxk64cU7Y4UPUYYkUsY4UcUlU7'),
        f('4h'),
        f('4x'),
        f('40'),
        e('47'),
        f('4l'),
        k('P6'),
        d('Ps'),
        k('Pk'),
        d('PV'),
        g('47UcUsUYUsYkUsk6PVUlUxUcU4'),
        g('P4'),
        e('PVUPUU4VUxUcUPU7Y4k6P6UxYPUYUcU7'),
        d('PP'),
        e('PU'),
        d('VsVsVsVs'),
        e('PY'),
        d('Pe'),
        g('Pc'),
        k('PG'),
        e('4YUlYPU4Yck64lUxU4k6PVY4YcUxUP'),
        k('Px'),
        g('PkUlUkUxUlYek64xUsYPU7UVUeUPYkk6P6UxYPUYUcU7'),
        d('40UcUVYkUlYVUlUUY4k64lUUUUUcUVUPk6VkV6VsVV'),
        f('PsPs40YPYVUcUV'),
        k('Us'),
        e('4PYPYkUlYVY4UcUxUP'),
        e('Uk'),
        k('YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUxk7Vs'),
        k('UV'),
        d('PVUVYkUcY6Y4UcU7UYk744UcUVY4UcUlU7UsYkYc'),
        f('U4'),
        f('74hhhl7PG7eh'),
        f('UP'),
        k('UU'),
        k('UY'),
        e('Ue'),
        d('40Usk04VUlU7UUUcUYk7UVUlU0k6Y6UxYPUYUcU7'),
        d('Uc'),
        g('VsV6VsV6'),
        d('4VUsYVYPUsUx'),
        d('UG'),
        e('Uh'),
        e('Ux'),
        d('U0'),
        g('U7'),
        e('Ul'),
        d('Y6'),
        k('VsV6V6Ve'),
        f('UVY4'),
        d('U4Ul47UlY4P4YkUsUVUh'),
        g('Ys'),
        d('YVUPY4P4UcU0UPUlYPY4'),
        f('74heh07PG7ehk6P6YkUl'),
        e('Yk'),
        k('4YUcYVUeUs'),
        k('UYUPY4P4UcU0UPYGUlU7UP4lUUUUYVUPY4'),
        g('YV'),
        d('VsV6V6VP'),
        g('VsV6V6V4'),
        k('Y4'),
        k('YP'),
        g('VsV6V6VV'),
        f('YU'),
        f('VsV6V6Vs'),
        d('YY'),
        e('Ye'),
        e('U4YkUsYY4sYkYkUsYcYV'),
        g('Yc'),
        e('YG'),
        f('Yh'),
        g('Y0'),
        k('Y7'),
        d('UUUlU7Y4'),
        g('VsV6V6Vc'),
        k('V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6UPYeY6UcYkUPYVV0'),
        f('PVUeUPUxUxk7PP4c4eUPUxY6UPYk'),
        f('Y4Ul44UsY4UsPPPk4x'),
        f('PYUcU7U4UlYYP4UPYeY4'),
        e('UxUsU7UYYPUsUYUP'),
        g('U4Ul'),
        f('74heh07chhcsk6P6YkUl'),
        e('4eUcUYUeUxUcUYUeY4P4UPYeY4'),
        k('U4UcYU'),
        g('40UPU7YPP4UPYeY4'),
        e('4s4l4xk640UPU4UcUsk6P6UxUsYcUkUsUVUhk6P6UxYPUYUcU7'),
        f('4VUcY4YkUcYek6UlU7UxUcU7UPk6Y6UxYPUYk0UcU7'),
        f('UPUV'),
        f('44UPYVU4UPU0UlU7Us'),
        k('4cU7UsUVY4UcYUUP4kUlYkU4UPYk'),
        f('PkUPUsUxP6UxUsYcUPYk'),
        d('4e4P4x4x4l'),
        f('kxk6kYUVUlU4UPkYVG'),
        k('UPU0'),
        f('U7Y6P4UlU7UYUkYP4sU4U4UcU7'),
        e('UVYkUPUsY4UP4PUxUPU0UPU7Y4'),
        g('Y6UeUsU7Y4UlU0'),
        k('40PVk6P640UcU7UVUeUl'),
        d('7UGPhY74h0cV'),
        d('UPYUUsUx'),
        f('UPYe'),
        k('44UcYUPek6PU4l44k64eUPUxY6UPYkk6P6UxYPUYk0UcU7'),
        f('7UcUh67YhheU7Ucee774h0cV'),
        d('PsYPUcUVUhP4UcU0UP4VUeUPUVUh4lUkUGUPUVY4k7PsYPUcUVUhP4UcU0UP4VUeUPUVUhk7Vs'),
        k('4UUxYc4lYk44UcUPk64YUsU0UPYVk6P6UxYPUYUcU7'),
        e('UsY4Y4UsUVUePVUeUsU4UPYk'),
        e('P6UxUsYc4lU7k6P6UxYPUYk0UcU7'),
        f('UYUPY4P4UcU0UP'),
        e('Vsk7V6Vs'),
        e('4kYkUlUsU4YYUsYc'),
        k('UUY6'),
        e('4sUxUsYYUsYkk647P64sP64ck6YPY4UcUxYV'),
        d('4UUlYkY4UP'),
        g('UeUsYVUe4VUlU4UP'),
        e('7UcUhc7UG0GV7PGYcG74h0cV'),
        e('4PPV47k6PVUlU7UsYkk64sP64c'),
        k('4eP644UPY4UPUVY4'),
        e('4kUcY4U4UPUUUPU7U4UPYkk6PsYPUcUVUhPVUVUsU7'),
        k('4c4Pk6P4UsUkk6Y6UxYPUYUcU7'),
        g('kYkx'),
        k('4kYPY4Y4UlU74UUsUVUP'),
        e('UVY6YP4VUxUsYVYV'),
        g('4VUPU7Y4YPYkYck64YUlY4UeUcUV'),
        f('4lU7UxUcU7UPk6PVY4UlYkUsUYUPk6Y6UxYPUYk0UcU7'),
        k('PVUsUUUPYkk6PPY6U4UsY4UP'),
        d('40YVYeU0UxVkk7444l4044UlUVYPU0UPU7Y4'),
        d('4PU7UYYkUsYUUPYkYVk640P4'),
        d('PVUcUxYUUPYkUxUcUYUeY4k6P6UxYPUYk04cU7'),
        g('4YUlUlUYUxUPk64YUPUsYkYVk6V6k7VPk7VVVVk7V6'),
        g('4VUcY4YkUcYek64c4V4sk64VUxUcUPU7Y4'),
        d('UsUxY6UeUsUkUPY4UcUV'),
        k('PU44UlYYU7UxUlUsU4UPYk'),
        e('7Pe0e77UcUeY7UGPhY74h0cV'),
        f('UsY4Y4YkPUUPYkY4UPYe'),
        g('7PG7eh74h0cV'),
        f('UVUlUlUhUcUP'),
        g('kPVkVk'),
        k('kPVkVU'),
        g('4VUPU7Y4UsYPYk'),
        g('V4UYUsU0UP'),
        e('PkUlUVUhYYUPUxUx'),
        e('4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVUVs'),
        g('4lUVY4UlYVUeUsY6UPk6PVY4YkUPUsU0UcU7UYk6PVUPYkYUUcUVUPYV'),
        e('Y4Ul4Y40P4PVY4YkUcU7UY'),
        d('Y4UeV0kl'),
        d('PVYPU0UsY4YkUsP6444Uk64kYkUlYYYVUPYkk6P6UxYPUYUcU7'),
        k('P6444Uk7P6U4UU4VY4YkUx'),
        g('UUUcUxUxPVY4YcUxUP'),
        d('UGUP'),
        f('4sU4UlUkUPk640UcU7UYk6PVY4U4'),
        g('P4UlYkUVUe4eUPUxY6UPYk'),
        e('4UYkUsU7UhUxUcU7k64YUlY4UeUcUVk64eUPUsYUYc'),
        f('7Pe0e77UcUeY74hhhl7PG7eh'),
        g('4eUsYkU0UlU7Yck6P6UxYPUYk04cU7'),
        d('4YUcUYUc'),
        f('YUVsk7Vs'),
        g('4hUcU7Ulk640P4'),
        f('PVUcU04eUPUc'),
        k('4sUxUcPVPV4l4xUlUYUcU7k6Y6UxYPUYUcU7'),
        k(
          'PkUPUsUxP6UxUsYcUPYkk7PkUPUsUxP6UxUsYcUPYkkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc'
        ),
        d('PcUsU7U4UPYek6P6444Uk6PUUcUPYYUPYk'),
        g('4VUcY4YkUcYek6PkUPUVUPUcYUUPYkk6P6UxYPUYk0UcU7'),
        g('U0UsUc'),
        g('Y4UlY6'),
        d('4sUVYkUlP6444Uk7P6444U'),
        g('UVUsU7YUUsYVk6UsY6Uck6UPYeUVUPY6Y4UcUlU7'),
        d('4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7'),
        g('40UPU7YP'),
        d(
          'Y6YkUPUVUcYVUcUlU7k6U0UPU4UcYPU0Y6k6UUUxUlUsY4Vhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6UYUxPl4UYkUsUY4VUlUxUlYkk6V0k6YUUPUVV4keYUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPkxk6V6kxk6VskcVhk6Y0'
        ),
        g('PsPsVkV6VsVVk64UUcYkUPUUUlYek6P6UxYPUYUcU7'),
        f('4YUlUlUYUxUPk6PPY6U4UsY4UP'),
        k('7Pe0e77UcUeY7Ph0Gc74hGcs'),
        k('UP40YPYVUcUVP6UxYPUYUcU7k6444x40VU'),
        f('PYUPUkk64VUlU0Y6UlU7UPU7Y4YV'),
        e('4kUsUkYcUxUlU7k6P4UlUlUx4kUsYk'),
        g('4VUlUlYYUlU7k6PPY6U4UsY4UP'),
        k('4cU7UUUlP4UPYeY4'),
        f('YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUx'),
        d('Uc40UPYVUek6Y6UxYPUYUcU7'),
        e('PkUPUsUx44UlYYU7UxUlUsU4UPYkk6P6UxYPUYUcU7'),
        e('PVYcU0UsU7Y4UPUVk6P64h4ck64VUxUcUPU7Y4'),
        g('PlY6UeUsU7Y4UlU0'),
        g('4Y444xk64lUkUGUPUVY4k6PYUPUkk6P6UxYPUYk0UcU7k6VsVUk7V6V6'),
        d('YYUPUkUYUx'),
        k('7Pe0e77UcUeY7PG7eh74h0cV'),
        g('YVUVYkUPUPU7'),
        k('UkUlU4Yc'),
        f('P4Pk4c4s474Y4x4PPlPVP4Pk4cP6'),
        k('U7V0'),
        d('P4UxYYUY40UlU7Ul'),
        f('kYVGkY'),
        k('4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVVVP'),
        d('UUYPU7UVY4UcUlU7'),
        e('UVUlU7Y4UPYeY4k7UeUsYVUe4VUlU4UP'),
        k('4sYkUVUeUc4V4s44'),
        g('PU4PPkP44PPePlPV4e4s444PPk'),
        k('PPUkYPU7Y4YP'),
        d('4UUsUVUPUkUlUlUhk6P6UxYPUYUcU7'),
        e('4sUVY4UcYUUP4VUsY6Y4UcUlU7'),
        g('7YhheU7Ucee774h0cV'),
        k('40UsUxUYYPU7k64YUlY4UeUcUV'),
        e('47UPYYYVk64YUlY4UeUcUVk640P4'),
        e('4VUsY6Y4UcUlU7P4UPYeY4'),
        k(
          'UsPGUkPcV6UVPeU4PYVsUPPUUUVkPPUYVVP4UeV4PVUcPkVPUGPsUhVUP6Ux4lVYU047U7Ve40Ul4xVcY64hYs4GYk4cYV4eY44YYP4UYU4PYY44Ye4VYc4kYG4s'
        ),
        e('44UPUGUsPUYPk64x4Y4Vk6PVUsU7YVk640UlU7Ul'),
        k('4VUlY6Y6UPYkY6UxUsY4UPk64YUlY4UeUcUVk64xUcUYUeY4'),
        e('PVUPUYUlUPk6P6YkUcU7Y4'),
        g('PVUsYYUsYVU4UPUP'),
        d('4kUsYPUeUsYPYVk6VcVV'),
        f('4VUeUsUxUhU4YPYVY4UPYk'),
        g('4sUkUsU4Uck640P4k64VUlU7U4UPU7YVUPU4k64xUcUYUeY4'),
        f('4xYPUVUcU4Usk64kYkUcUYUeY4'),
        g('PYUcU4UPk64xUsY4UcU7'),
        g('UUUlU7Y4k6U4UPY4UPUVY4k6UPYkYkUlYk'),
        f('4hUlYGYPUhUsk64YUlY4UeUcUVk6P6YkVU47'),
        d('4eY4U0UxVPk6UxUlUVUsY4UcUlU7k6Y6YkUlYUUcU4UPYk'),
        f('44UcYUPek6P6UxYPYVk6PYUPUkk6P6UxUsYcUPYk'),
        f('PUUxUsU4UcU0UcYkk6PVUVYkUcY6Y4'),
        d('4UUcUxUPk644UlYYU7UxUlUsU4UPYkk6P6UxYPUYk0UcU7'),
        f('UlUk'),
        d('4sU4UlU4Ukk7PVY4YkUPUsU0'),
        d('40UPU7UxUl'),
        e('UVUsUxUxP6UeUsU7Y4UlU0'),
        k('PYUlUxUUYkUsU0k640UsY4UeUPU0UsY4UcUVUs'),
        e('4VUsY4UsUxUcU7Us4YYkUlYPY6k6PPY6U4UsY4UP'),
        k('4PYkUsYVk64kUlUxU4k64cP44V'),
        e('44UPYUUsUxPUPkPe4VY4YkUxk744UPYUUsUxPUPkPe4VY4YkUxk7Vs'),
        k('4GPV4PPVPV4c4l474c44k0PYPcPcPc'),
        g('7Pe0e77UcUeY7YhheU7chhcs'),
        k('UsU4U44kUPUeUsYUUcUlYk'),
        k('Y6Us'),
        k('4kUcY4YVY4YkUPUsU0k6PUUPYkUsk6PVUPYkUcUU'),
        d('keUUYPU7UVY4UcUlU7kekcYhYkUPY4YPYkU7k6VsVkVVVhY0kckekcVh'),
        d('Y6Uc'),
        d('P4UPU7UVUPU7Y4k64UP447k6Y6UxYPUYk0UcU7'),
        k('YkUPU0UlYUUP4VUeUcUxU4'),
        f('4UUlUxYek6VVk64kYkUlYYYVUPYkk6P6UxYPUYUcU7'),
        k('YPYVUPP6YkUlUYYkUsU0'),
        f('UeUlYVY4U7UsU0UP'),
        f('Y6UeUsU7Y4UlU0k7UcU7UGUPUVY44GYV'),
        f('PVUeUlUVUhYYUsYUUP4UUxUsYVUek7PVUeUlUVUhYYUsYUUP4UUxUsYVUe'),
        d('YkUYUkUskeVsV6Vkkxk6VkV6V4kxk6V6kxk6V6k7VYkc'),
        e('4sU4UkUxUlUVUhP6UxYPUYUcU7'),
        e('4kUsUVUhUYYkUlYPU7U4'),
        g('4sUY4VUlU7Y4YkUlUxk74sUY4VUlU7Y4YkUlUx'),
        e('P6UeUlY4Ul4VUPU7Y4UPYkP6UxYPUYUcU7Vsk7Vsk7Vkk7Vk'),
        g('4YYPU7UYPVUPUl'),
        e('YVV0'),
        d('U4UPUVUlU4UPPPPk4c'),
        g('7UcUhc7UG0GV7eeeck74h0cV'),
        d('7Pe0e77UcUeY7UcUh67cG0el'),
        d('VsVkVV'),
        g('YYUPUkUYUxk6UPYeUVUPY6Y4UcUlU7'),
        f('YkUP'),
        k('PY40P6UxUsYcUPYkk74l4VPe'),
        e('VYVkY6Ye'),
        f('4sY6Y6PYUlYkUhYVY6UsUVUP'),
        d('4eUcUYUeUxUcUYUeY4'),
        e('U4UlUVYPU0UPU7Y4'),
        d('PcUsU7U4UPYek640UPU4UcUsk6P6UxYPUYUcU7'),
        e('4PPV47k64xUsYPU7UVUek640UlYGUcUxUxUsk6P6UxYPUYUcU7'),
        d('VYV6Y6Yek6kY4sYkUcUsUxkY'),
        k('UcU7UGUPUVY44GYV'),
        g('4xUlU0Us'),
        d('4kUcY44VUlU0UPY44sUYUPU7Y4'),
        f('4VUsUxUcUkYkUc'),
        f('4kUlUlUhU0UsU7k64lUxU4k6PVY4YcUxUP'),
        d('YVUPYVYVUcUlU7PVY4UlYkUsUYUP'),
        f('PPY4UlY6UcUs'),
        k('UVUlU0Y6UcUxUPPVUeUsU4UPYk'),
        e('UPYVUVUsY6UP'),
        d('PVUVYkUlUxUxUkUsYk'),
        g('PYUcU7U4UlYY'),
        d(
          'VsV4VYV4V4U4VcVPVVVeVVUVU4VVV6VYVP444sV4Vk4VVcVVUV44Us4sUPVYV4VUVP4V4U4sVPUU4VV64kVcVV4kVs'
        ),
        d('7ccGhU74hcGU'),
        d('4hUsYVY6UPYkYVUhYck6P6UsYVYVYYUlYkU4k640UsU7UsUYUPYk'),
        e('40UcU7UY4xUcPPk04PYeY44k'),
        d('UYUPY4k6YVYcYVY4UPU0k6UVUlUxUlYkYVk6UPYeUVUPY6Y4UcUlU7'),
        d('PVUhYcY6UPk744UPY4UPUVY4UcUlU7'),
        k('4UUcUxUP4xUsUkk6Y6UxYPUYUcU7'),
        e('U7Y64sP64ck6P6UxYPUYUcU7'),
        g('U7UlY4PlUPYeUcYVY4PlUeUlYVY4'),
        e('VkU4'),
        d('4sUVY4UcYUUPPe4lUkUGUPUVY4'),
        k('44UlY4YPU0'),
        d('P6444Uk0Pe4VUeUsU7UYUPk6PUUcUPYYUPYk'),
        d('P640UcU7UY4xUcPP'),
        k('UVUlUxUlYk44UPY6Y4Ue'),
      ],
      c = [
        f('47UlUhUcUsk6PVYPUcY4UPk64PU7UsUkUxUPYkk6P6UxYPUYUcU7'),
        k(
          'PkUPUsUxPUUcU4UPUlk7PkUPUsUxPUUcU4UPUlkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc'
        ),
        k('40UsUYU7UPY4Ul'),
        e('4sU4UlUkUP4PYe40UsU74V4V44UPY4UPUVY4'),
        f('4YUsUkYkUcUlUxUs'),
        k('P6UxUsYcUkUcUxUx'),
        e('U7UsYUUcUYUsY4UlYk'),
        g('PkUsUVUeUsU7Us'),
        e('P4YYk64VUPU7k640P4k64VUlU7U4UPU7YVUPU4k64PYeY4YkUsk64kUlUxU4'),
        e('PsPs40UcU7Uc444xk6P6UxYPUYUcU7'),
        f('kVUUVUV6'),
        f('UUUcUxUxPkUPUVY4'),
        e('V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6U4UlU0UsUcU7V0'),
        d('44UPUUUsYPUxY4k64kYkUlYYYVUPYkk64eUPUxY6UPYk'),
        d('4UYkUPU7UVUek6PVUVYkUcY6Y4k640P4'),
        g('7UG6eY7UGPhY74h0cV'),
        g('UPU7UVUlU4UPPPPk4c'),
        e('PPU0Y6YPYVUe'),
        k('UcUVY6'),
        f('7Pe0e77UcUeY7Yc6GP7Yele6'),
        k('UVYkUPUsY4UPP6YkUlUYYkUsU0'),
        g('U0UlU7UlYVY6UsUVUP'),
        k('4kYPY4Y4UlU7PVUeUsU4UlYY'),
        k('4kUlU4UlU7Uck640P4'),
        g('PVP44sP44c4VPl44Pk4sPY'),
        e('7chhcs74h0cV'),
        k('U4UlYYU7UxUlUsU4PPY6U4UsY4UPYk'),
        k('4sUxUcUPU4UcY4k6P6UxYPUYk04cU7'),
        d('P6444Uk6UcU7Y4UPUYYkUsU4Ulk6U4Ulk6PYUPUk4hUcY4'),
        k('YPU7UcUUUlYkU04lUUUUYVUPY4'),
        k('UPU7UVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4'),
        f('P6UcUVUsYVUs'),
        f('4sU4UlUkUPk64UUsU7UYYVUlU7UYk6PVY4U4'),
        k('UkUcU7U44kYPUUUUUPYk'),
        g('4sPU4Yk6PVUcY4UPPVUsUUUPY4Yck6Y6UxYPUYUcU7'),
        f('4lYkUkUcY4k644UlYYU7UxUlUsU4UPYk'),
        d('UVUlUxUlYk'),
        f('UeUcU4U4UPU7'),
        f('UxUlUVUsUxPVY4UlYkUsUYUP'),
        e('4YUlUlUYUxUPk6P4UsUxUhk64PUUUUUPUVY4YVk6P6UxYPUYUcU7'),
        d('UcU7U4UPYeUPU4444k'),
        g('4xYPUVUcU4Usk64UUsYe'),
        g('4sU0UsYGUlU740P6VV44UlYYU7UxUlUsU4UPYkP6UxYPUYUcU7'),
        k('UVYkUPUsY4UP4kYPUUUUUPYk'),
        f('4VUsYVY4UPUxUxUsYk'),
        k('UxUcU7UhP6YkUlUYYkUsU0'),
        f('4VUsUxUcUUUlYkU7UcUsU7k64U4k'),
        f('P4UeYkUPUP444eUcUYUeUxUcUYUeY4'),
        g('UVYkUPUsY4UPPVUeUsU4UPYk'),
        f('4YYPUxUcU0'),
        f('47YcYe4xUsYPU7UVUeUPYk'),
        d('PcUlYPP4YPUkUPk6P6UxYPUYk0UcU7'),
        e('7UGPhY74h0cVPl4Y4kVkVVVsVk'),
        g('PVPY4VY4Uxk7PVPY4VY4Ux'),
        f('4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYk0UcU7'),
        k('PsPs44UlYYU7UxUlUsU4k6P6UxYPUYUcU7'),
        k(
          'k7U0YPYVUcUVk7VsVUVVk7UVUlU0Vhk7UcUYUsU0UPk7VsVUVVk7UVUlU0Vhk7U0YPYVUcUVk7UeYGk7U7UPY4UPUsYVUPk7UVUlU0'
        ),
        k('47UlYkY4UlU7k64cU4UPU7Y4UcY4Yck6PVUsUUUP'),
        d('Y6UsYkYVUP4cU7Y4'),
        f('PVUcU0Y6UxUPk6P6UsYVYV'),
        d('4VUlUxUlU7U7Usk640P4'),
        k('YGUsUhUl'),
        k('UYUPY4PPU7UcUUUlYkU04xUlUVUsY4UcUlU7'),
        e('YVUeUsU4UPYkPVUlYPYkUVUP'),
        d('44UlYYU7UxUlUsU4UPYkYVk6Y6UxYPUYUcU7'),
        f('UxUlUVUsY4UcUlU7'),
        f('4eUPYkUlUPYVk6kUk64YUPU7UPYkUsUxYVk6UxUcYUUP'),
        g('YYUcU7U4UlYY'),
        g('PVUeUlYYUVUsYkU4k64YUlY4UeUcUV'),
        d('7Ph7G77eh0Gl7UG0GV7chhcs74h0cV'),
        e('7Pe0e77UcUeY7eGsex7UGPhY'),
        d('4YUcU7UYUPYk'),
        g('PkUlUVUh40UPUxY4k6PPY6U4UsY4UP'),
        f('PYUcU7U4UlYY4UYkUsU0UP'),
        g('UPU7UsUkUxUPPUUPYkY4UPYe4sY4Y4YkUcUk4sYkYkUsYc'),
        k('4hUsUVYVY44lU7UP'),
        d(
          'UsY4Y4YkUcUkYPY4UPk6YUUPUVVkk6UsY4Y4YkPUUPYkY4UPYeVhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YPU7UcUUUlYkU0k6YUUPUVVkk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPk6V0k6UsY4Y4YkPUUPYkY4UPYek6khk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6k6k6UYUxPlP6UlYVUcY4UcUlU7k6V0k6YUUPUVV4keUsY4Y4YkPUUPYkY4UPYekxk6V6kxk6VskcVhk6Y0'
        ),
        f('P6UPYkY6UPY4YPUs'),
        k('UlY6UPU744UsY4UsUkUsYVUP'),
        f('UVUsU7YUUsYV'),
        d('Uc4YUPY4Y4UPYkPVUVYkUcY6Y4UsUkUxUPP6UxYPUYUcU7'),
        d('4cU7UUUlYkU0UsUxk6PkUlU0UsU7'),
        k('47UcY4YkUlk6P6444Uk6P6UxYPUYk04cU7'),
        g('40YVYeU0UxVkk7Pe404x4eP4P4P6'),
        e('7Pe0e77UcUeY7chhcs74h0cV'),
        f('47P64xUsYVY4P6UsYVYV'),
        d('P4UeYkUPUP444UUsUVUP'),
        f('4xUsYVY4P6UsYVYV'),
        f('VGVG'),
        k('Y6UsYkYVUP4UUxUlUsY4'),
        k('7Pe0e77UcUeY7ccGhU74hcGU'),
        d('Vhk6'),
        g('UYUPY44sY4Y4YkUcUk4xUlUVUsY4UcUlU7'),
        f('YhkYU7UsU0UPkYVG'),
        e('47YcUsUxUs'),
        f('U7UlY4PlUPYeUcYVY4PlUeUlYVY4U7UsU0UP'),
        f('PxkY'),
        g('4Y4U4s4V4Pk6P6UxYPUYUcU7'),
        k('YPU7U4UPUUUcU7UPU4'),
        d('7UcUh67PG7eh74h0cV'),
        g('PlUcYPYsYeUxU4U0YGYkPl'),
        e('Pxk7'),
        f('40UsY4YPYkUsk640P4k6PVUVYkUcY6Y4k64VUsY6UcY4UsUxYV'),
        e('4sYkUcUsUxk64kUxUsUVUh'),
        e('4UUsU7UYPVUlU7UY'),
        d(
          'U0YY4Vk6U7UhUkUsUUUGUlYkU4k6Y6UeYVUYUxYck6UPYeYUY4k6YGYsUcYPkxk67sh0G6k6Y4Y6UeYVY4klVGklYPUeUkUYY4UcUVk7U0UlklUxUPYUYUUs'
        ),
        d('4kYkUsUYUYUsU4UlUVUcUl'),
        f('4eUsYkU0UlU7Yck64UUcYkUPUUUlYek6P6UxYPUYUcU7'),
        f('P6UsUxUsUVUPk6PVUVYkUcY6Y4k640P4'),
        g('47UsY4UcYUUPk64VUxUcUPU7Y4'),
        e('YPYVUPYk4sUYUPU7Y4'),
        g('PsYPUcUVUhP4UcU0UPk7PsYPUcUVUhP4UcU0UP'),
        k('UPYeY6UPYkUcU0UPU7Y4UsUxk0YYUPUkUYUx'),
        f('4sPkPk4sPcPl4kPP4U4U4PPk'),
        f('7eehhc7Uc7cx74heh074heG07chhcs'),
        d('4sUxUcY6UsYck6PVUPUVYPYkUcY4Yck64VUlU7Y4YkUlUxk6VV'),
        d('PVUVYkUcY6Y4k640P4k64kUlUxU4'),
        e('kxk6kYUkYkUlYYYVUPYkP6YkUlY6kYVG'),
        g('P4444V4VY4Uxk7P4444V4VY4Ux'),
        k('YVUPUxUU'),
        f('4cU7UUUl4kUsUVUhUYYkUlYPU7U4'),
        g('P6UsU7U4Ulk6PYUPUkk6P6UxYPUYUcU7'),
        e('4eUsUPY4Y4UPU7YVUVUeYYUPUcUxUPYk'),
        d('YVY6UsU7'),
        g('4sUVY4UcYUUP4kUlYkU4UPYk'),
        k('P4UeYkUPUP444xUcUYUeY4PVUeUsU4UlYY'),
        g('V6VkV6Vk'),
        f('V6VkV6VV'),
        e('V6VkV6V6'),
        d('V6VkV6Vs'),
        d('PYP64ck644UPY4UPUVY4UlYkk6Vsk7V4'),
        g('Vhk6UPYeY6UcYkUPYVV0'),
        d('P4UeYkUPUP4444UsYkUhPVUeUsU4UlYY'),
        g('4PYeUcUUk64PYUUPYkYcYYUeUPYkUP'),
        d('4kUsY4Y4UxUPUxUlUYk64YUsU0UPk64xUsYPU7UVUeUPYk'),
        g('4cU0Y6UsUVY4'),
        k('PU4x4Vk640YPUxY4UcU0UPU4UcUsk6P6UxYPUYUcU7'),
        d('4sU4UlUkUPk64eUPUkYkUPYY'),
        e('4kUxYPUPPVY4UsUVUhYVk64cU7YVY4UsUxUxk644UPY4UPUVY4UlYk'),
        d('YYYYYYU0U0U0U0U0U0U0U0U0U0UxUxUc'),
        d('UeUcYVY4UlYkYc'),
        g('YVUsU7YVk0YVUPYkUcUU'),
        g('P6UsY6YcYkYPYV'),
        d('4kYPY4Y4UlU7P4UPYeY4'),
        k('V6VkVsVs'),
        f('4sY6Y6PPY6'),
        g('P6UsYkUlU0k7P4PUk6Y6UxUsYcUPYkk6Y6UxYPUYUcU7'),
        k('44UPUsUxP6UxYc4xUcYUUPk6PPY6U4UsY4UP'),
        f('4xUlUeUcY4k64YYPUGUsYkUsY4Uc'),
        d('4UPk4s4Y404P47P4PlPV4e4s444PPk'),
        d('4sUYUPU7UVYck64U4k'),
        e(
          '40UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYkk740UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYk'
        ),
        d('kVkVkV'),
        f('PYUlYkU44VUsY6Y4YPYkUPPe'),
        k('UYUPY44VUlU0Y6YPY4UPU4PVY4YcUxUP'),
        e('Y6UxUsY4UUUlYkU0'),
        e('V6VsV6VP'),
        g('4sYkUsUkUcUVk6P4YcY6UPYVUPY4Y4UcU7UY'),
        e('V6VsV6VU'),
        e('V6VsV6VV'),
        d('7Pe0e77UcUeY74heG07PG7eh'),
        g('V6VsV6V4'),
        f('V6VsV6Vs'),
        g('V6VsV6Vk'),
        f('V6VsV6V6'),
        k('V6VsV6VY'),
        k('4kYPY4Y4UlU74eUcUYUeUxUcUYUeY4'),
        k('YUUPYkY4UPYe4sY4Y4YkUcUkP6UlUcU7Y4UPYk'),
        e('V6VsV6Ve'),
        k('Y4UPYeY44kUsYVUPUxUcU7UP'),
        e('kVV6VUVc'),
        f('U4UlYPUkUxUPP4YYUcYVY4k6PYUPUkk6P6UxYPUYUcU7'),
        g('YPU7UPYVUVUsY6UP'),
        g('P4UeYPU7U4UPYkk644UsY64VY4YkUxk647P64sP64ck6P6UxYPUYUcU7'),
        d('4kUsY4UsU7UY'),
        d('444U4hUsUck0PV4k'),
        g('PVU7UsY6k64cP44V'),
      ],
      Ja = [e('40UlUlUx4kUlYkUsU7')];
    (function() {
      var a = [
        82,
        73,
        50,
        30,
        45,
        29,
        28,
        16,
        82,
        41,
        77,
        5,
        27,
        92,
        27,
        0,
        2,
        1423857449,
        -2,
        3,
        -3,
        3432918353,
        1555261956,
        4,
        2847714899,
        -4,
        5,
        -5,
        2714866558,
        1281953886,
        6,
        -6,
        198958881,
        1141124467,
        2970347812,
        -7,
        7,
        3110523913,
        8,
        -8,
        2428444049,
        -9,
        9,
        10,
        -10,
        11,
        -11,
        2563907772,
        12,
        -12,
        13,
        2282248934,
        -13,
        2154129355,
        -14,
        14,
        15,
        -15,
        16,
        -16,
        17,
        -17,
        18,
        -18,
        19,
        -19,
        20,
        -20,
        21,
        -21,
        -22,
        22,
        23,
        -23,
        24,
        -24,
        -25,
        25,
        -26,
        26,
        27,
        -27,
        28,
        -28,
        29,
        -29,
        -30,
        30,
        31,
        -31,
        -32,
        32,
        -33,
        33,
        -34,
        34,
        -35,
        35,
        -37,
        -36,
        36,
        37,
        -38,
        39,
        -39,
        38,
        -41,
        41,
        40,
        -40,
        42,
        -43,
        43,
        -42,
        -45,
        45,
        -44,
        44,
        -46,
        47,
        46,
        -47,
        48,
        -48,
        49,
        -49,
        50,
        -51,
        51,
        -50,
        570562233,
        53,
        -52,
        -53,
        52,
        55,
        54,
        -54,
        -55,
        503444072,
        -57,
        -56,
        57,
        56,
        58,
        -59,
        -58,
        59,
        60,
        61,
        -61,
        -60,
        62,
        63,
        -63,
        -62,
        -66,
        711928724,
        64,
        -67,
        66,
        65,
        -64,
        -65,
        67,
        -69,
        68,
        69,
        70,
        -70,
        -68,
        -71,
        71,
        -72,
        3686517206,
        -75,
        -74,
        75,
        73,
        72,
        74,
        -73,
        79,
        76,
        -76,
        77,
        -79,
        -78,
        78,
        -77,
        3554079995,
        82,
        -80,
        80,
        -83,
        -82,
        81,
        -81,
        83,
        -85,
        -84,
        -86,
        86,
        84,
        85,
        87,
        -87,
        -91,
        90,
        88,
        89,
        -88,
        -90,
        91,
        -89,
        95,
        94,
        -92,
        -95,
        93,
        -94,
        -93,
        92,
        -99,
        99,
        -96,
        98,
        -97,
        -98,
        96,
        97,
        -101,
        3272380065,
        100,
        -103,
        101,
        102,
        -102,
        -100,
        103,
        107,
        -105,
        104,
        106,
        105,
        -106,
        -104,
        -107,
        111,
        108,
        110,
        109,
        -108,
        -110,
        -109,
        -111,
        251722036,
        -114,
        115,
        113,
        112,
        114,
        -115,
        -112,
        -113,
        -118,
        118,
        -116,
        -119,
        116,
        117,
        -117,
        119,
        123,
        120,
        122,
        121,
        -120,
        -122,
        -121,
        -123,
        125,
        127,
        3412177804,
        126,
        124,
        -125,
        -126,
        -124,
        -127,
        -128,
        128,
        -129,
        1843258603,
        3803740692,
        984961486,
        3939845945,
        4195302755,
        4066508878,
        255,
        1706088902,
        256,
        1969922972,
        365,
        2097651377,
        376229701,
        853044451,
        752459403,
        1000,
        426522225,
        3772115230,
        615818150,
        3904427059,
        4167216745,
        4027552580,
        3654703836,
        1886057615,
        879679996,
        3518719985,
        3244367275,
        2013776290,
        3373015174,
        1759359992,
        285281116,
        1622183637,
        1006888145,
        10000,
        1231636301,
        83908371,
        1090812512,
        2463272603,
        1373503546,
        2596254646,
        2321926636,
        1504918807,
        2181625025,
        2882616665,
        2747007092,
        3009837614,
        3138078467,
        397917763,
        81470997,
        829329135,
        2657392035,
        956543938,
        2517215374,
        2262029012,
        40735498,
        2394877945,
        3266489909,
        702138776,
        2808555105,
        2936675148,
        1258607687,
        1131014506,
        3218104598,
        3082640443,
        1404277552,
        565507253,
        534414190,
        1541320221,
        1913087877,
        2053790376,
        1789927666,
        3965973030,
        3826175755,
        4107580753,
        4240017532,
        1658658271,
        3579855332,
        3708648649,
        3453421203,
        3317316542,
        1873836001,
        1742555852,
        461845907,
        3608007406,
        1996959894,
        3747672003,
        3485111705,
        2137656763,
        3352799412,
        213261112,
        3993919788,
        1.01,
        3865271297,
        4139329115,
        4275313526,
        282753626,
        1068828381,
        2768942443,
        2909243462,
        936918000,
        3183342108,
        27492,
        141376813,
        1740000,
        3050360625,
        654459306,
        2617837225,
        1454621731,
        2489596804,
        2227061214,
        1591671054,
        2362670323,
        4294967295,
        1308918612,
        2246822507,
        795835527,
        1181335161,
        414664567,
        4279200368,
        1661365465,
        1037604311,
        4150417245,
        3887607047,
        1802195444,
        4023717930,
        2075208622,
        1943803523,
        901097722,
        628085408,
        755167117,
        3322730930,
        3462522015,
        3736837829,
        3604390888,
        2366115317,
        0.4,
        2238001368,
        2512341634,
        2647816111,
        -0.2,
        314042704,
        1510334235,
        58964,
        1382605366,
        31158534,
        450548861,
        3020668471,
        1119000684,
        3160834842,
        2898065728,
        1256170817,
        1800000,
        2765210733,
        3060149565,
        3188396048,
        2932959818,
        124634137,
        2797360999,
        366619977,
        62317068,
        -0.26,
        1202900863,
        498536548,
        1340076626,
        2405801727,
        2265490386,
        1594198024,
        1466479909,
        2547177864,
        249268274,
        2680153253,
        2125561021,
        3294710456,
        855842277,
        3423369109,
        0.732134444,
        3705015759,
        3569037538,
        1994146192,
        1711684554,
        1852507879,
        997073096,
        733239954,
        4251122042,
        601450431,
        4111451223,
        167816743,
        3855990285,
        3988292384,
        3369554304,
        3233442989,
        3495958263,
        3624741850,
        65535,
        453092731,
        -0.9,
        2094854071,
        1957810842,
        325883990,
        4057260610,
        1684777152,
        4189708143,
        3915621685,
        162941995,
        1812370925,
        3775830040,
        783551873,
        3134207493,
        1172266101,
        2998733608,
        2724688242,
        1303535960,
        2852801631,
        112637215,
        1567103746,
        651767980,
        1426400815,
        906185462,
        2211677639,
        1047427035,
        2344532202,
        2607071920,
        2466906013,
        225274430,
        544179635,
        2176718541,
        2312317920,
        1483230225,
        1342533948,
        2567524794,
        2439277719,
        1088359270,
        671266974,
        1219638859,
        953729732,
        3099436303,
        2966460450,
        817233897,
        2685067896,
        2825379669,
        4089016648,
        4224994405,
        3943577151,
        3814918930,
        476864866,
        1634467795,
        335633487,
        1762050814,
        1,
        2044508324,
        -1,
        3401237130,
        3268935591,
        3524101629,
        3663771856,
        1907459465,
      ];
      (function() {
        function d(b, c) {
          if (null == b) return null;
          for (var l = x(c), f = [], g = b.length, e = a[15]; e < g; e++)
            f.push(Y(b[e], l++));
          return f;
        }
        function f(b) {
          if (null == b) return null;
          for (var c = [], l = a[15], d = b.length; l < d; l++) {
            var g = b[l];
            c[l] = Ka[((g >>> a[23]) & a[56]) * a[58] + (g & a[56])];
          }
          return c;
        }
        function g(h) {
          var c = [];
          if (null == h || void 0 == h || h.length == a[15]) return za(L);
          if (h.length >= L) {
            var c = a[15],
              l = [];
            if (null != h && h.length != a[15]) {
              if (h.length < L) throw Error(b[134]);
              for (var d = a[15]; d < L; d++) l[d] = h[c + d];
            }
            return l;
          }
          for (l = a[15]; l < L; l++) c[l] = h[l % h.length];
          return c;
        }
        function e(h) {
          var c = a[405];
          if (null != h)
            for (var l = a[15]; l < h.length; l++)
              c = (c >>> a[38]) ^ La[(c ^ h[l]) & a[299]];
          h = Aa(c ^ a[405]);
          c = h.length;
          if (null == h || c < a[15]) h = new String(b[0]);
          else {
            for (var l = [], d = a[15]; d < c; d++) l.push(Ma(h[d]));
            h = l.join(b[0]);
          }
          return h;
        }
        function k(h, c, l) {
          var d,
            f = [
              b[70],
              b[85],
              b[118],
              b[73],
              b[77],
              b[106],
              b[80],
              b[116],
              b[44],
              b[42],
              b[62],
              b[114],
              b[93],
              b[105],
              b[40],
              b[64],
              b[103],
              b[86],
              b[99],
              b[141],
              b[48],
              b[89],
              b[76],
              b[69],
              b[132],
              b[47],
              b[88],
              b[33],
              b[43],
              b[45],
              b[78],
              b[53],
              b[110],
              b[50],
              b[68],
              b[101],
              b[52],
              b[41],
              b[138],
              b[133],
              b[66],
              b[129],
              b[108],
              b[81],
              b[140],
              b[90],
              b[117],
              b[63],
              b[107],
              b[91],
              b[135],
              b[115],
              b[113],
              b[97],
              b[60],
              b[61],
              b[137],
              b[126],
              b[83],
              b[79],
              b[119],
              b[71],
              b[123],
              b[75],
            ],
            g = b[74],
            e = [];
          if (l == a[541])
            (l = h[c]),
              (d = a[15]),
              e.push(f[(l >>> a[16]) & a[153]]),
              e.push(f[((l << a[23]) & a[122]) + ((d >>> a[23]) & a[56])]),
              e.push(g),
              e.push(g);
          else if (l == a[16])
            (l = h[c]),
              (d = h[c + a[541]]),
              (h = a[15]),
              e.push(f[(l >>> a[16]) & a[153]]),
              e.push(f[((l << a[23]) & a[122]) + ((d >>> a[23]) & a[56])]),
              e.push(f[((d << a[16]) & a[148]) + ((h >>> a[30]) & a[19])]),
              e.push(g);
          else if (l == a[19])
            (l = h[c]),
              (d = h[c + a[541]]),
              (h = h[c + a[16]]),
              e.push(f[(l >>> a[16]) & a[153]]),
              e.push(f[((l << a[23]) & a[122]) + ((d >>> a[23]) & a[56])]),
              e.push(f[((d << a[16]) & a[148]) + ((h >>> a[30]) & a[19])]),
              e.push(f[h & a[153]]);
          else throw Error(b[111]);
          return e.join(b[0]);
        }
        function za(b) {
          for (var c = [], l = a[15]; l < b; l++) c[l] = a[15];
          return c;
        }
        function Z(h, c, l, d, f) {
          if (null != h && h.length != a[15]) {
            if (null == l) throw Error(b[131]);
            if (h.length < f) throw Error(b[134]);
            for (var e = a[15]; e < f; e++) l[d + e] = h[c + e];
          }
        }
        function Aa(b) {
          var c = [];
          c[0] = (b >>> a[74]) & a[299];
          c[1] = (b >>> a[58]) & a[299];
          c[2] = (b >>> a[38]) & a[299];
          c[3] = b & a[299];
          return c;
        }
        function ma(h) {
          if (null == h || void 0 == h) return h;
          h = encodeURIComponent(h);
          for (var c = [], l = h.length, d = a[15]; d < l; d++)
            if (h.charAt(d) == b[27])
              if (d + a[16] < l) c.push(Na(h.charAt(++d) + b[0] + h.charAt(++d))[0]);
              else throw Error(b[146]);
            else c.push(h.charCodeAt(d));
          return c;
        }
        function Na(b) {
          if (null == b || b.length == a[15]) return [];
          b = new String(b);
          for (var c = [], l = b.length / a[16], d = a[15], f = a[15]; f < l; f++) {
            var e = parseInt(b.charAt(d++), a[58]) << a[23],
              g = parseInt(b.charAt(d++), a[58]);
            c[f] = x(e + g);
          }
          return c;
        }
        function Ma(c) {
          var d = [];
          d.push(aa[(c >>> a[23]) & a[56]]);
          d.push(aa[c & a[56]]);
          return d.join(b[0]);
        }
        function na(b, c) {
          if (null == b || null == c || b.length != c.length) return b;
          for (var d = [], f = a[15], e = b.length; f < e; f++) d[f] = Y(b[f], c[f]);
          return d;
        }
        function Y(a, b) {
          a = x(a);
          b = x(b);
          return x(a ^ b);
        }
        function Oa(a, b) {
          return x(a + b);
        }
        function x(c) {
          if (c < a[290]) return x(a[291] - (a[290] - c));
          if (c >= a[290] && c <= a[282]) return c;
          if (c > a[282]) return x(a[292] + c - a[282]);
          throw Error(b[136]);
        }
        function Pa(h) {
          function d() {
            for (
              var h = [
                  b[282],
                  c[32],
                  c[137],
                  b[221],
                  c[150],
                  b[36],
                  c[157],
                  c[103],
                  c[174],
                  b[280],
                  b[18],
                  b[303],
                  c[23],
                  b[338],
                  c[106],
                  b[181],
                  b[337],
                  c[46],
                  c[44],
                  b[112],
                  b[210],
                  b[194],
                  b[281],
                  c[60],
                  b[277],
                  b[276],
                  b[160],
                  c[175],
                  b[356],
                  b[198],
                  b[297],
                  b[98],
                  c[104],
                  b[184],
                  b[223],
                  c[14],
                  c[4],
                  b[226],
                  b[127],
                  b[92],
                  c[49],
                  b[318],
                  c[122],
                  b[67],
                  B[5],
                  c[135],
                  c[81],
                  c[75],
                  b[228],
                  b[286],
                  c[148],
                  b[335],
                  b[283],
                  c[41],
                  c[2],
                  b[272],
                  c[102],
                  b[293],
                  b[348],
                  Ja[0],
                  b[169],
                  B[4],
                  b[273],
                  b[82],
                  c[94],
                  c[108],
                  c[142],
                  c[77],
                  c[5],
                  b[358],
                  c[7],
                  b[212],
                  b[279],
                  c[116],
                  b[278],
                  c[68],
                  b[229],
                  c[176],
                  b[261],
                  c[8],
                  b[268],
                  c[17],
                  b[26],
                  b[340],
                  b[289],
                  b[284],
                  b[104],
                  c[160],
                  b[224],
                  b[256],
                  b[243],
                  b[322],
                  b[204],
                  c[19],
                  b[300],
                  c[70],
                  c[90],
                  b[206],
                  b[3],
                  b[65],
                  c[99],
                  b[186],
                  b[321],
                  b[170],
                  b[346],
                  c[25],
                  b[174],
                  b[271],
                  c[15],
                  b[46],
                  c[52],
                  c[69],
                  c[84],
                  b[153],
                  b[125],
                  c[114],
                  b[37],
                ],
                f = [],
                e = a[15];
              e < h.length;
              e++
            )
              try {
                var g = h[e];
                l()(g) && f.push(g);
              } catch (k) {}
            return f.join(b[56]);
          }
          function l() {
            function h(a) {
              var c = {};
              return (
                (k.style.fontFamily = a),
                g.appendChild(k),
                (c.height = k.offsetHeight),
                (c.width = k.offsetWidth),
                g[b[307]](k),
                c
              );
            }
            var d = [c[21], c[141], B[6]],
              l = [],
              f = c[139],
              e = b[327],
              g = C[b[258]],
              k = C[b[167]](c[123]);
            k.style.fontSize = e;
            k.style.visibility = c[37];
            k.innerHTML = f;
            for (f = a[15]; f < d.length; f++) l[f] = h(d[f]);
            return function(c) {
              for (var f = a[15]; f < l.length; f++) {
                var e = h(c + b[34] + d[f]),
                  g = l[f];
                if (e.height !== g.height || e.width !== g.width) return !0;
              }
              return !1;
            };
          }
          function f() {
            var a = null,
              h = null,
              d = [];
            try {
              (h = C[b[167]](c[79])), (a = h[B[7]](b[255]) || h[B[7]](c[112]));
            } catch (l) {}
            if (!a) return d;
            try {
              d.push(a[b[20]]());
            } catch (g) {}
            try {
              d.push(e(a, h));
            } catch (k) {}
            return d.join(b[56]);
          }
          function e(h, d) {
            try {
              var f = c[76],
                l = b[240],
                g = h[c[43]]();
              h[c[33]](h[c[113]], g);
              var k = new Float32Array([
                a[432],
                a[488],
                a[15],
                a[428],
                a[453],
                a[15],
                a[15],
                a[468],
                a[15],
              ]);
              h.bufferData(h[c[113]], k, h[c[24]]);
              g.k = a[19];
              g.l = a[19];
              var t = h[c[20]](),
                X = h[c[48]](h[b[267]]);
              h[c[63]](X, f);
              h[b[341]](X);
              var la = h[c[48]](h[c[149]]);
              return (
                h[c[63]](la, l),
                h[b[341]](la),
                h[b[177]](t, X),
                h[b[177]](t, la),
                h[c[45]](t),
                h[b[309]](t),
                (t.n = h[c[92]](t, b[205])),
                (t.m = h[c[62]](t, c[29])),
                h[c[74]](t.o),
                h[c[167]](t.n, g.k, h.FLOAT, !a[541], a[15], a[15]),
                h[J[0]](t.m, a[541], a[541]),
                h[b[139]](h[b[259]], a[15], g.l),
                M(d[b[149]]())
              );
            } catch ($a) {
              return b[324];
            }
          }
          function g() {
            var h = C[b[167]](b[155]),
              d = [],
              f = [
                c[124],
                b[270],
                b[328],
                b[315],
                b[192],
                c[166],
                c[22],
                c[143],
                b[274],
                b[1],
                b[329],
                b[154],
                b[161],
                b[238],
                b[49],
                c[120],
                b[248],
                b[239],
                b[156],
                b[343],
                c[132],
                c[86],
                c[47],
                c[125],
                b[32],
                b[344],
                c[73],
                b[150],
              ];
            if (!window[c[154]]) return d.join(b[0]);
            for (var l = a[15]; l < f.length; l++)
              try {
                C[b[258]].appendChild(h),
                  (h.style.color = f[l]),
                  d.push(f[l]),
                  d.push(window[c[154]](h).getPropertyValue(c[36])),
                  C[b[258]][b[307]](h);
              } catch (e) {
                d.push(b[349]);
              }
            return d.join(b[54]);
          }
          function k() {
            try {
              var h = C[b[167]](c[79]),
                d = h[B[7]](b[354]),
                f = c[105];
              d[c[169]] = b[235];
              d[b[145]] = b[333];
              d[c[169]] = b[202];
              d[b[219]] = c[10];
              d[c[11]](a[281], a[541], a[152], a[66]);
              d[b[219]] = c[170];
              d.fillText(f, a[16], a[56]);
              d[b[219]] = b[313];
              d.fillText(f, a[23], a[60]);
              return h[b[149]]();
            } catch (l) {
              return b[237];
            }
          }
          function m() {
            try {
              return window[b[355]] && n.h ? q() : r();
            } catch (a) {
              return b[31];
            }
          }
          function r() {
            if (!y[b[4]]) return b[0];
            var h = [
                b[211],
                b[314],
                c[3],
                b[5],
                b[183],
                c[27],
                c[115],
                b[230],
                c[42],
                b[157],
                c[145],
                b[266],
                c[34],
                b[246],
                c[134],
                b[336],
                b[189],
                c[138],
                b[296],
                b[201],
                b[158],
                b[233],
                b[247],
                c[147],
                c[13],
                b[55],
                b[288],
                b[173],
                c[171],
                c[64],
                c[26],
                b[244],
                b[332],
                b[187],
                c[133],
                b[269],
                b[290],
                b[351],
                b[176],
                b[308],
                b[39],
                b[254],
                c[97],
                c[71],
                b[72],
                b[7],
                c[54],
                b[200],
                c[39],
                b[242],
                c[107],
                b[225],
                c[66],
                b[188],
                b[287],
                b[190],
                c[80],
                b[250],
                b[347],
                c[87],
                b[263],
                b[213],
                b[109],
                b[95],
                B[1],
                c[109],
                c[82],
                c[0],
                c[57],
                b[352],
                c[85],
                B[3],
                b[166],
                c[50],
                b[214],
                b[195],
                c[35],
                c[121],
                c[146],
                c[28],
                b[357],
                b[317],
                c[31],
                b[178],
                b[241],
                c[55],
                c[9],
                b[96],
                b[251],
                b[94],
                c[72],
                b[196],
                b[23],
                b[102],
                b[84],
                b[148],
                b[199],
                c[59],
                b[16],
                b[217],
                b[252],
                b[306],
                c[173],
                b[222],
                b[15],
                b[58],
                b[203],
                b[8],
                c[136],
                b[245],
                b[17],
                b[51],
                b[295],
                c[153],
                c[130],
                b[331],
                b[232],
                c[51],
                c[61],
              ],
              d = [],
              f = {};
            d.push(
              p(
                y[b[4]],
                function(h) {
                  f[h.name] = a[541];
                  var d = p(h, function(a) {
                    return [a.type, a.suffixes].join(b[144]);
                  }).join(b[34]);
                  return [h.name, h.description, d].join(c[88]);
                },
                this
              ).join(b[25])
            );
            d.push(
              p(
                h,
                function(a) {
                  if (f[a]) return b[0];
                  a = y[b[4]][a];
                  if (!a) return b[0];
                  var h = p(a, function(a) {
                    return [a.type, a.suffixes].join(b[144]);
                  }).join(b[34]);
                  return [a.name, a.description, h].join(c[88]);
                },
                this
              ).join(b[56])
            );
            return d.join(b[56]);
          }
          function q() {
            return window[b[355]]
              ? p(
                  [
                    b[236],
                    b[292],
                    b[316],
                    b[298],
                    c[151],
                    b[197],
                    c[83],
                    b[218],
                    c[111],
                    b[175],
                    b[249],
                    b[100],
                    b[162],
                    b[231],
                    c[1],
                    b[249],
                    b[102],
                    b[148],
                    b[312],
                    c[53],
                    b[350],
                    c[118],
                    b[326],
                  ],
                  function(a) {
                    try {
                      return new window[b[355]](a), a;
                    } catch (h) {
                      return null;
                    }
                  }
                ).join(b[56])
              : b[0];
          }
          function p(a, b, h) {
            var c = [];
            if (null == a) return c;
            if (I && a.map === I) return a.map(b, h);
            E(a, function(a, d, f) {
              c[c.length] = b.call(h, a, d, f);
            });
            return c;
          }
          function E(b, h) {
            if (null !== b)
              if (z && b.forEach === z) b.forEach(h, void 0);
              else if (b.length === +b.length)
                for (
                  var c = a[15], d = b.length;
                  c < d && h.call(void 0, b[c], c, b) !== {};
                  c++
                );
              else
                for (c in b)
                  if (b.hasOwnProperty(c) && h.call(void 0, b[c], c, b) === {}) break;
          }
          var z = Array.prototype.forEach,
            I = Array.prototype.map,
            n = {
              e: M,
              j: !0,
              i: !0,
              h: !0,
              b: !0,
              a: !0,
            };
          typeof h == b[264]
            ? (n.e = h)
            : (null != h.b && void 0 != h.b && (n.b = h.b),
              null != h.a && void 0 != h.a && (n.a = h.a));
          this.get = function() {
            var h = [],
              l = [];
            if (Qa) {
              var e;
              try {
                e = !!window[b[339]];
              } catch (X) {
                e = !0;
              }
              h.push(e);
              var p;
              try {
                p = !!window[c[38]];
              } catch (z) {
                p = !0;
              }
              h.push(p);
              h.push(!!window[c[40]]);
              C[b[258]] ? h.push(typeof C[b[258]][b[301]]) : h.push('undefined');
              h.push(typeof window[c[78]]);
              h.push(y[b[193]]);
              h.push(y[c[155]]);
              if ((e = n.i))
                try {
                  var u = C[b[167]](c[79]);
                  e = !(!u[B[7]] || !u[B[7]](b[354]));
                } catch (r) {
                  e = !1;
                }
              if (e)
                try {
                  h.push(k()), n.b && h.push(f());
                } catch (E) {
                  h.push(b[59]);
                }
              h.push(g());
              n.a && l.push(d());
              l.push(y[c[110]]);
              l.push(y[b[151]]);
              l.push(window[b[257]][b[359]]);
              n.j &&
                ((u = window[b[257]]
                  ? [window[b[257]].height, window[b[257]].width]
                  : [a[15], a[15]]),
                typeof u !== c[98] && l.push(u.join(b[138])));
              l.push(new Date()[b[128]]());
              l.push(y[b[122]]);
              l.push(m());
            }
            u = [];
            n.e
              ? (u.push(n.e(h.join(c[152]))), u.push(n.e(l.join(c[152]))))
              : (u.push(M(h.join(c[152]))), u.push(M(l.join(c[152]))));
            return u;
          };
        }
        function M(h) {
          var c = a[88],
            d,
            f,
            e,
            g,
            k,
            m;
          d = h.length & a[19];
          f = h.length - d;
          e = c;
          c = a[21];
          g = a[375];
          for (m = a[15]; m < f; )
            (k =
              (h.charCodeAt(m) & a[299]) |
              ((h.charCodeAt(++m) & a[299]) << a[38]) |
              ((h.charCodeAt(++m) & a[299]) << a[58]) |
              ((h.charCodeAt(++m) & a[299]) << a[74])),
              ++m,
              (k =
                ((k & a[486]) * c + ((((k >>> a[58]) * c) & a[486]) << a[58])) & a[405]),
              (k = (k << a[56]) | (k >>> a[60])),
              (k =
                ((k & a[486]) * g + ((((k >>> a[58]) * g) & a[486]) << a[58])) & a[405]),
              (e ^= k),
              (e = (e << a[50]) | (e >>> a[64])),
              (e =
                ((e & a[486]) * a[26] + ((((e >>> a[58]) * a[26]) & a[486]) << a[58])) &
                a[405]),
              (e =
                (e & a[486]) + a[394] + ((((e >>> a[58]) + a[435]) & a[486]) << a[58]));
          k = a[15];
          switch (d) {
            case a[19]:
              k ^= (h.charCodeAt(m + a[16]) & a[299]) << a[58];
            case a[16]:
              k ^= (h.charCodeAt(m + a[541]) & a[299]) << a[38];
            case a[541]:
              (k ^= h.charCodeAt(m) & a[299]),
                (k =
                  ((k & a[486]) * c + ((((k >>> a[58]) * c) & a[486]) << a[58])) &
                  a[405]),
                (k = (k << a[56]) | (k >>> a[60])),
                (k =
                  ((k & a[486]) * g + ((((k >>> a[58]) * g) & a[486]) << a[58])) &
                  a[405]),
                (e ^= k);
          }
          e ^= h.length;
          e ^= e >>> a[58];
          e =
            ((e & a[486]) * a[407] + ((((e >>> a[58]) * a[407]) & a[486]) << a[58])) &
            a[405];
          e ^= e >>> a[50];
          e =
            ((e & a[486]) * a[349] + ((((e >>> a[58]) * a[349]) & a[486]) << a[58])) &
            a[405];
          e ^= e >>> a[58];
          h = e >>> a[15];
          d = [];
          d.push(h);
          try {
            for (var r, B = h + b[0], p = a[15], E = a[15], z = a[15]; z < B.length; z++)
              try {
                var q = parseInt(B.charAt(z) + b[0]),
                  p = q || q === a[15] ? p + q : p + a[541];
                E++;
              } catch (n) {
                (p += a[541]), E++;
              }
            E = E == a[15] ? a[541] : E;
            r = ba(p * a[541] / E, N);
            for (
              var x,
                C = Math.floor(r / Math.pow(a[43], N - a[541])),
                G = h + b[0],
                w = a[15],
                D = a[15],
                H = a[15],
                u = a[15],
                F = a[15];
              F < G.length;
              F++
            )
              try {
                var v = parseInt(G.charAt(F) + b[0]);
                v || v === a[15]
                  ? v < C ? (D++, (w += v)) : (u++, (H += v))
                  : (u++, (H += C));
              } catch (A) {
                u++, (H += C);
              }
            u = u == a[15] ? a[541] : u;
            D = D == a[15] ? a[541] : D;
            x = ba(H * a[541] / u - w * a[541] / D, T);
            d.push(ca(r, N, b[41]));
            d.push(ca(x, T, b[41]));
          } catch (y) {
            (d = []),
              d.push(h),
              d.push(U(N, b[35]).join(b[0])),
              d.push(U(T, b[35]).join(b[0]));
          }
          return d.join(b[0]);
        }
        function ba(h, c) {
          if (h < a[15] || h >= a[43]) throw Error(b[30]);
          for (
            var d = U(c, b[41]), e = b[0] + h, f = a[15], g = a[15];
            f < d.length && g < e.length;
            g++
          )
            e.charAt(g) != b[38] && (d[f++] = e.charAt(g));
          return parseInt(d.join(b[0]));
        }
        function ca(a, c, d) {
          a = b[0] + a;
          if (a.length > c) throw Error(b[87]);
          if (a.length == c) return a;
          for (var e = [], f = a.length; f < c; f++) e.push(d);
          e.push(a);
          return e.join(b[0]);
        }
        function U(b, c) {
          if (b <= a[15]) return [a[15]];
          for (var d = [], e = a[15]; e < b; e++) d.push(c);
          return d;
        }
        function r(a) {
          return null == a || void 0 == a;
        }
        function m(a, b, c) {
          this.f = a;
          this.c = b;
          this.g = r(c) ? !0 : c;
        }
        function Ra(a) {
          if (r(a) || r(a.f) || r(a.c)) return !1;
          try {
            if (r(window[a.f])) return !1;
          } catch (b) {
            return !1;
          }
          return !0;
        }
        function v(c, d) {
          if (r(c)) return b[0];
          for (var e = a[15]; e < c.length; e++) {
            var f = c[e];
            if (!r(f) && f.f == d) return f;
          }
        }
        function da() {
          var h;
          a: {
            if (!r(q))
              for (h = a[15]; h < q.length; h++) {
                var d = q[h];
                if (d.g && !Ra(d)) {
                  h = d;
                  break a;
                }
              }
            h = null;
          }
          var e;
          if (r(h)) {
            try {
              e =
                window.parseFloat(b[180]) === a[384] &&
                window.isNaN(window.parseFloat(b[163]));
            } catch (f) {
              e = !1;
            }
            if (e) {
              var g;
              try {
                g =
                  window.parseInt(b[323]) === a[273] &&
                  window.isNaN(window.parseInt(b[163]));
              } catch (k) {
                g = !1;
              }
              if (g) {
                var m;
                try {
                  m = window.decodeURI(b[208]) === b[24];
                } catch (C) {
                  m = !1;
                }
                if (m) {
                  var x;
                  try {
                    x = window.decodeURIComponent(b[209]) === b[28];
                  } catch (F) {
                    x = !1;
                  }
                  if (x) {
                    var p;
                    try {
                      p = window.encodeURI(b[24]) === b[208];
                    } catch (E) {
                      p = !1;
                    }
                    if (p) {
                      var z;
                      try {
                        z = window.encodeURIComponent(b[28]) === b[209];
                      } catch (I) {
                        z = !1;
                      }
                      if (z) {
                        var n;
                        try {
                          n = window.escape(b[28]) === b[209];
                        } catch (A) {
                          n = !1;
                        }
                        if (n) {
                          var y;
                          try {
                            y = window.unescape(b[209]) === b[28];
                          } catch (G) {
                            y = !1;
                          }
                          if (y) {
                            var w;
                            try {
                              w = window.eval(b[304]) === a[273];
                            } catch (D) {
                              w = !1;
                            }
                            e = w ? null : v(q, b[171]);
                          } else e = v(q, c[172]);
                        } else e = v(q, b[342]);
                      } else e = v(q, c[30]);
                    } else e = v(q, c[16]);
                  } else e = v(q, B[2]);
                } else e = v(q, b[320]);
              } else e = v(q, c[58]);
            } else e = v(q, c[89]);
          } else e = h;
          return e;
        }
        function Sa() {
          var a = da();
          if (!r(a)) return a.c;
          try {
            a = r(window[b[168]]) || r(window[b[168]][b[334]]) ? null : v(q, b[311]);
          } catch (c) {
            a = null;
          }
          if (!r(a)) return a.c;
          try {
            a = r(context) || r(context[b[185]]) ? null : v(q, b[265]);
          } catch (d) {
            a = null;
          }
          return r(a) ? null : a.c;
        }
        function Ba(c) {
          for (var d = [], e = a[15]; e < c; e++) {
            var f = Math.random() * Ta,
              f = Math.floor(f);
            d.push(ea.charAt(f));
          }
          return d.join(b[0]);
        }
        function P(h) {
          for (var d = (C[b[207]] || b[0]).split(c[91]), e = a[15]; e < d.length; e++) {
            var f = d[e].indexOf(b[57]);
            if (f >= a[15]) {
              var g = d[e].substring(f + a[541], d[e].length);
              if (d[e].substring(a[15], f) == h) return window.decodeURIComponent(g);
            }
          }
          return null;
        }
        function Ca(h) {
          var d = [b[135], b[182], b[133], b[108], b[159], b[165], c[18]],
            e = b[0];
          if (null == h || void 0 == h) return h;
          if (typeof h == [b[291], b[220], b[121]].join(b[0])) {
            for (var e = e + b[142], f = a[15]; f < d.length; f++)
              if (h.hasOwnProperty(d[f])) {
                var g = b[29] + d[f] + b[262],
                  k;
                k = b[0] + h[d[f]];
                k =
                  null == k || void 0 == k
                    ? k
                    : k.replace(/'/g, c[96]).replace(/"/g, b[24]);
                e += g + k + b[191];
              }
            e.charAt(e.length - a[541]) == b[34] &&
              (e = e.substring(a[15], e.length - a[541]));
            return (e += b[143]);
          }
          return null;
        }
        function oa(a, d, e, f) {
          var g = [];
          g.push(a + b[57] + encodeURIComponent(d));
          e &&
            ((a = new Date()),
            (a = new Date(f)),
            (f = a[b[215]]()),
            g.push(c[91]),
            g.push(b[172]),
            g.push(b[305]),
            g.push(b[325]),
            g.push(b[319]),
            g.push(f));
          g.push(c[91]);
          g.push(b[302]);
          g.push(b[216]);
          null != A &&
            void 0 != A &&
            A != b[0] &&
            (g.push(c[91]), g.push(b[152]), g.push(b[234]), g.push(b[260]), g.push(A));
          C[b[207]] = g.join(b[0]);
        }
        function Da(a) {
          window[pa] = a;
        }
        function Ea(a) {
          window[qa] = a;
        }
        function Fa(c, d) {
          for (var e = [], f = a[15]; f < d; f++) e.push(c);
          return e.join(b[0]);
        }
        function Ga(a, c) {
          var d = P(a);
          (null !== d && void 0 !== d && d !== b[0]) || oa(a, c, !1);
        }
        function ra() {
          var a = P(V);
          if (null == a || void 0 == a || a == b[0]) a = window[qa];
          return a;
        }
        function Ua() {
          var a = ra();
          if (null == a || void 0 == a || a == b[0]) return !1;
          try {
            return (a = parseInt(a)) && a >= fa ? !0 : !1;
          } catch (c) {
            return !1;
          }
        }
        function ga(c) {
          if (null == c || void 0 == c || c == b[0]) return null;
          c = c.split(b[54]);
          return c.length < a[16] || !/[0-9]+/gi.test(c[1]) ? null : parseInt(c[1]);
        }
        function Q() {
          var a = P(S);
          if (null == a || void 0 == a || a == b[0]) a = window[pa];
          return a;
        }
        function Va() {
          var c = Q();
          if (null == c || void 0 == c || c == b[0]) return a[15];
          c = ga(c);
          return null == c ? a[15] : c - (sa - ta) - new window[B[0]]()[b[179]]();
        }
        function Ha(d, e) {
          var f = new window[B[0]]();
          f[b[21]](f[b[179]]() - a[326]);
          window[b[330]][b[207]] =
            null == e || void 0 == e || e == b[0]
              ? d + b[147] + f[b[215]]()
              : d + c[12] + e + c[131] + f[b[215]]();
        }
        function Ia() {
          if (!(null == K || void 0 == K || K.length <= a[15]))
            for (var c = a[15]; c < K.length; c++) {
              var d = K[c];
              ((null != A && void 0 != A && A != b[0]) ||
                (null != d && void 0 != d && d != b[0])) &&
                A != d &&
                (Ha(S, d), Ha(V, d));
            }
        }
        function ua() {
          Ia();
          window[qa] = null;
          window[pa] = null;
          var h = !0,
            t = {
              v: b[227],
            },
            l = Sa();
          l && (t[c[18]] = l);
          l = null;
          t[b[108]] = Wa;
          var m = new window[B[0]]()[b[179]]() + sa,
            r = m + a[308] * a[148] * a[148] * a[74] * a[303] * a[26];
          t[b[133]] = Ba(a[19]) + m + Ba(a[19]);
          try {
            var q = new Pa({
              b: Xa,
              a: Ya,
            }).get();
            null != q && void 0 != q && q.length > a[15]
              ? (t[b[182]] = q.join(b[34]))
              : ((t[b[182]] = Fa(b[41], a[43])), (t[b[159]] = b[42]), (h = !1));
          } catch (C) {
            (t[b[182]] = Fa(b[41], a[43])), (t[b[159]] = b[42]), (h = !1);
          }
          try {
            var v = (l = Ca(t)),
              t = Za;
            if (null == t || void 0 == t) throw Error(b[120]);
            if (null == v || void 0 == v) v = b[0];
            var q = v,
              y;
            y = null == v ? e([]) : e(ma(v));
            var A = ma(q + y),
              p = ma(t);
            null == A && (A = []);
            y = [];
            for (var E = a[15]; E < va; E++) {
              var z = Math.random() * a[301],
                z = Math.floor(z);
              y[E] = x(z);
            }
            var p = g(p),
              p = na(p, g(y)),
              E = (p = g(p)),
              I;
            if (null == A || void 0 == A || A.length == a[15]) I = za(F);
            else {
              var n = A.length,
                J = a[15],
                J = n % F <= F - ha ? F - n % F - ha : F * a[16] - n % F - ha,
                z = [];
              Z(A, a[15], z, a[15], n);
              for (var K = a[15]; K < J; K++) z[n + K] = a[15];
              Z(Aa(n), a[15], z, n + J, ha);
              I = z;
            }
            n = I;
            if (null == n || n.length % F != a[15]) throw Error(b[130]);
            I = [];
            for (var G = a[15], w = n.length / F, D = a[15]; D < w; D++) {
              I[D] = [];
              for (var H = a[15]; H < F; H++) I[D][H] = n[G++];
            }
            G = [];
            Z(y, a[15], G, a[15], va);
            for (var u = I.length, L = a[15]; L < u; L++) {
              var O, M;
              var N = I[L];
              if (null == N) M = null;
              else {
                for (var T = x(a[104]), w = [], U = N.length, P = a[15]; P < U; P++)
                  w.push(Oa(N[P], T++));
                M = w;
              }
              var Q;
              w = M;
              if (null == w) Q = null;
              else {
                for (var aa = x(a[143]), D = [], ba = w.length, wa = a[15]; wa < ba; wa++)
                  D.push(Y(w[wa], aa--));
                Q = D;
              }
              var ca = d(Q, a[127]);
              O = d(ca, a[36]);
              var xa = na(O, p),
                ia;
              w = xa;
              D = E;
              if (null == w) ia = null;
              else if (null == D) ia = w;
              else {
                for (var H = [], da = D.length, W = a[15], ea = w.length; W < ea; W++)
                  H[W] = x(w[W] + D[W % da]);
                ia = H;
              }
              var xa = na(ia, E),
                ja = f(xa),
                ja = f(ja);
              Z(ja, a[15], G, L * F + va, F);
              E = ja;
            }
            var ka;
            if (null == G || void 0 == G) ka = null;
            else if (G.length == a[15]) ka = b[0];
            else {
              var ya = a[19];
              try {
                for (var u = [], R = a[15]; R < G.length; )
                  if (R + ya <= G.length) u.push(k(G, R, ya)), (R += ya);
                  else {
                    u.push(k(G, R, G.length - R));
                    break;
                  }
                ka = u.join(b[0]);
              } catch (ra) {
                throw Error(b[111]);
              }
            }
            l = ka;
          } catch (ga) {
            (l = Ca({
              ec: b[43],
              em: ga.message,
            })),
              (h = !1);
          }
          l = l + b[54] + m;
          oa(S, l, h, r);
          Ga(S, l);
          Da(l);
          oa(V, fa, h, r);
          Ga(V, fa);
          Ea(fa);
          window[b[124]] && window[b[124]](ua, ta);
        }
        m.prototype = {
          toString: function() {
            return c[93] + this.f + b[164] + this.c + c[117] + this.g + b[143];
          },
        };
        var q = [
            new m(c[67], b[13]),
            new m(b[330], b[14]),
            new m(c[6], b[11]),
            new m(c[65], b[12]),
            new m(c[140], b[10]),
            new m(b[257], b[9]),
            new m(b[2], b[19]),
            new m(b[235], b[22]),
            new m(c[119], b[6]),
            new m(c[89], c[164]),
            new m(c[58], c[162]),
            new m(b[320], c[163]),
            new m(B[2], c[159]),
            new m(c[16], c[161]),
            new m(c[30], c[156]),
            new m(b[342], c[158]),
            new m(c[172], c[165]),
            new m(b[171], c[168]),
            new m(b[253], c[128], !1),
            new m(b[294], c[129], !1),
            new m(b[168], c[126], !1),
            new m(b[311], c[127], !1),
            new m(b[265], c[144], !1),
          ],
          Qa = da() ? !1 : !0,
          Wa = (window && window[c[65]] && window[c[65]].host) || b[353],
          C = window[b[330]],
          y = window[c[6]],
          N = a[16],
          T = a[16],
          aa = [
            b[41],
            b[42],
            b[43],
            b[44],
            b[45],
            b[47],
            b[48],
            b[50],
            b[52],
            b[53],
            b[97],
            b[99],
            b[101],
            b[103],
            b[105],
            b[106],
          ],
          La = [
            a[15],
            a[377],
            a[383],
            a[522],
            a[449],
            a[316],
            a[495],
            a[343],
            a[462],
            a[542],
            a[310],
            a[461],
            a[496],
            a[464],
            a[415],
            a[40],
            a[455],
            a[363],
            a[533],
            a[402],
            a[438],
            a[293],
            a[366],
            a[511],
            a[491],
            a[493],
            a[476],
            a[333],
            a[539],
            a[412],
            a[297],
            a[427],
            a[474],
            a[29],
            a[369],
            a[503],
            a[325],
            a[353],
            a[546],
            a[390],
            a[420],
            a[440],
            a[174],
            a[442],
            a[306],
            a[501],
            a[469],
            a[336],
            a[508],
            a[331],
            a[482],
            a[355],
            a[358],
            a[400],
            a[379],
            a[528],
            a[525],
            a[459],
            a[423],
            a[34],
            a[408],
            a[520],
            a[319],
            a[446],
            a[471],
            a[437],
            a[47],
            a[417],
            a[548],
            a[506],
            a[463],
            a[312],
            a[320],
            a[256],
            a[345],
            a[498],
            a[380],
            a[395],
            a[523],
            a[385],
            a[416],
            a[537],
            a[429],
            a[298],
            a[497],
            a[487],
            a[335],
            a[478],
            a[300],
            a[433],
            a[513],
            a[367],
            a[368],
            a[451],
            a[404],
            a[534],
            a[504],
            a[295],
            a[337],
            a[470],
            a[443],
            a[413],
            a[445],
            a[190],
            a[354],
            a[317],
            a[391],
            a[547],
            a[33],
            a[466],
            a[505],
            a[370],
            a[521],
            a[398],
            a[447],
            a[321],
            a[460],
            a[517],
            a[37],
            a[424],
            a[403],
            a[350],
            a[529],
            a[381],
            a[334],
            a[499],
            a[356],
            a[483],
            a[481],
            a[332],
            a[452],
            a[490],
            a[296],
            a[431],
            a[341],
            a[419],
            a[536],
            a[401],
            a[516],
            a[362],
            a[365],
            a[515],
            a[479],
            a[304],
            a[314],
            a[458],
            a[139],
            a[540],
            a[414],
            a[53],
            a[309],
            a[473],
            a[387],
            a[519],
            a[388],
            a[374],
            a[494],
            a[348],
            a[340],
            a[324],
            a[426],
            a[28],
            a[527],
            a[456],
            a[318],
            a[450],
            a[389],
            a[526],
            a[485],
            a[352],
            a[510],
            a[329],
            a[378],
            a[532],
            a[342],
            a[409],
            a[283],
            a[441],
            a[421],
            a[436],
            a[467],
            a[339],
            a[130],
            a[509],
            a[372],
            a[502],
            a[475],
            a[22],
            a[545],
            a[397],
            a[307],
            a[360],
            a[514],
            a[364],
            a[302],
            a[347],
            a[399],
            a[535],
            a[361],
            a[328],
            a[430],
            a[294],
            a[418],
            a[382],
            a[330],
            a[480],
            a[489],
            a[32],
            a[346],
            a[492],
            a[322],
            a[359],
            a[518],
            a[386],
            a[373],
            a[410],
            a[51],
            a[411],
            a[472],
            a[323],
            a[457],
            a[313],
            a[538],
            a[305],
            a[531],
            a[376],
            a[406],
            a[344],
            a[351],
            a[484],
            a[327],
            a[512],
            a[448],
            a[315],
            a[524],
            a[392],
            a[24],
            a[425],
            a[454],
            a[530],
            a[393],
            a[544],
            a[357],
            a[311],
            a[500],
            a[371],
            a[17],
            a[477],
            a[338],
            a[465],
            a[507],
            a[157],
            a[439],
            a[232],
            a[434],
            a[422],
          ],
          Ka = [
            a[76],
            a[182],
            a[199],
            a[231],
            a[165],
            a[156],
            a[75],
            a[207],
            a[166],
            a[19],
            a[158],
            a[223],
            a[191],
            a[102],
            a[35],
            a[94],
            a[126],
            a[127],
            a[248],
            a[192],
            a[56],
            a[66],
            a[284],
            a[274],
            a[82],
            a[110],
            a[257],
            a[258],
            a[175],
            a[275],
            a[86],
            a[215],
            a[224],
            a[95],
            a[167],
            a[168],
            a[193],
            a[233],
            a[64],
            a[285],
            a[159],
            a[70],
            a[153],
            a[240],
            a[208],
            a[45],
            a[173],
            a[241],
            a[140],
            a[83],
            a[65],
            a[103],
            a[152],
            a[135],
            a[194],
            a[209],
            a[144],
            a[38],
            a[276],
            a[46],
            a[114],
            a[265],
            a[68],
            a[131],
            a[106],
            a[242],
            a[243],
            a[225],
            a[136],
            a[71],
            a[132],
            a[145],
            a[128],
            a[183],
            a[60],
            a[44],
            a[286],
            a[118],
            a[266],
            a[72],
            a[90],
            a[18],
            a[267],
            a[200],
            a[73],
            a[123],
            a[169],
            a[111],
            a[137],
            a[115],
            a[244],
            a[277],
            a[98],
            a[216],
            a[74],
            a[26],
            a[124],
            a[282],
            a[27],
            a[133],
            a[259],
            a[281],
            a[31],
            a[217],
            a[249],
            a[41],
            a[96],
            a[78],
            a[23],
            a[160],
            a[176],
            a[184],
            a[250],
            a[201],
            a[119],
            a[226],
            a[62],
            a[16],
            a[251],
            a[59],
            a[48],
            a[227],
            a[148],
            a[129],
            a[116],
            a[290],
            a[170],
            a[107],
            a[99],
            a[234],
            a[87],
            a[134],
            a[245],
            a[210],
            a[84],
            a[235],
            a[195],
            a[260],
            a[91],
            a[261],
            a[92],
            a[211],
            a[100],
            a[80],
            a[262],
            a[268],
            a[112],
            a[185],
            a[218],
            a[79],
            a[122],
            a[269],
            a[104],
            a[120],
            a[177],
            a[20],
            a[263],
            a[149],
            a[61],
            a[77],
            a[154],
            a[36],
            a[150],
            a[125],
            a[89],
            a[219],
            a[101],
            a[252],
            a[113],
            a[141],
            a[121],
            a[220],
            a[273],
            a[186],
            a[253],
            a[178],
            a[202],
            a[246],
            a[108],
            a[187],
            a[81],
            a[117],
            a[49],
            a[203],
            a[30],
            a[264],
            a[270],
            a[142],
            a[271],
            a[212],
            a[138],
            a[52],
            a[221],
            a[88],
            a[109],
            a[222],
            a[143],
            a[236],
            a[54],
            a[97],
            a[272],
            a[287],
            a[541],
            a[228],
            a[247],
            a[146],
            a[63],
            a[278],
            a[67],
            a[254],
            a[161],
            a[15],
            a[543],
            a[213],
            a[204],
            a[214],
            a[188],
            a[179],
            a[196],
            a[58],
            a[229],
            a[288],
            a[237],
            a[55],
            a[279],
            a[162],
            a[50],
            a[155],
            a[289],
            a[69],
            a[197],
            a[180],
            a[280],
            a[151],
            a[93],
            a[230],
            a[181],
            a[39],
            a[85],
            a[238],
            a[105],
            a[25],
            a[255],
            a[171],
            a[189],
            a[42],
            a[198],
            a[57],
            a[163],
            a[164],
            a[205],
            a[239],
            a[172],
            a[206],
            a[147],
            a[43],
          ],
          F = a[158],
          L = a[158],
          ha = a[23],
          va = a[23],
          d = function(b, c) {
            if (null == b) return null;
            for (var d = x(c), e = [], f = b.length, g = a[15]; g < f; g++)
              e.push(Y(b[g], d++));
            return e;
          },
          Za = b[345],
          S = b[299],
          V = c[100],
          fa = a[91],
          ea = b[275],
          Ta = ea.length,
          sa = a[444],
          ta = a[396],
          Ya = !1,
          Xa = !1,
          O = (window && window[c[65]] && window[c[65]][b[310]]) || c[95],
          A = c[56],
          A = (function(d, e) {
            if (
              null == d ||
              void 0 == d ||
              d == b[0] ||
              null == e ||
              void 0 == e ||
              e.length <= a[15]
            )
              return null;
            e = e.split(b[56]);
            for (var f = a[15]; f < e.length; f++) {
              var g = new RegExp(e[f].replace(/\./g, c[101]) + b[25]);
              if (null != d.match(g) || null != (b[38] + d).match(g)) return e[f];
            }
            return null;
          })(O, A),
          pa = S.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
          qa = V.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
          K = (function(c) {
            var d = [];
            if (!c) return d;
            c = c.split(b[38]);
            for (var e = b[0], f = a[15]; f < c.length; f++)
              f < c.length - a[541] &&
                ((e = b[38] + c[c.length - a[541] - f] + e), d.push(e));
            return d;
          })(O);
        K.push(null);
        K.push(b[38] + O);
        (function(d) {
          for (
            var e = a[15], f = (C[b[207]] || b[0]).split(c[91]), g = a[15];
            g < f.length;
            g++
          ) {
            var k = f[g].indexOf(b[57]);
            k >= a[15] && f[g].substring(a[15], k) == d && (e += a[541]);
          }
          return e;
        })(S) > a[541] && Ia();
        (function() {
          var a = Q();
          if (null == a || void 0 == a || a == b[0]) a = !1;
          else {
            var c;
            if ((c = Ua()))
              (a = ga(a)),
                (c = !(null == a || a - new window[B[0]]()[b[179]]() <= sa - ta));
            a = c;
          }
          return a;
        })()
          ? (Da(Q()), Ea(ra()), (O = Va()), window[b[124]] && window[b[124]](ua, O))
          : ua();
      })();
    })();
  })();
})();
(function() {})();
(function() {
  var bQo6i;
  var ua5f = 'VISITOR_CLIENT_NO_COOKIE_SUPPORT';
  var cqn4r = 0;
  var bQn6h = 0;
  var bQk6e = 1;
  var bQj6d = 0;
  var brP1x = '';
  var bQi6c = '';
  var bQh6b = '';
  var Wz5E = '';
  var WC5H = '';
  var bsj1x = '';
  var bQg6a = 0;
  var bQf6Z = '';
  var Mm1x = '';
  var Gs9j = 0;
  var bsB1x = ntes_get_domain();
  var bsC1x = null;
  var cER7K = '//analytics.163.com';
  var cpZ3x = function() {};
  function is_spider() {
    return /baiduspider/gi.test(window.navigator.userAgent);
  }
  function ntes_get_domain() {
    var f = document.domain;
    var d = f.split('.');
    var c = d.length;
    var e = /^\d+$/g;
    if (e.test(d[c - 1])) {
      return f;
    }
    if (d.length < 3) {
      return '.' + f;
    }
    var g = ['com', 'net', 'org', 'gov', 'co'];
    var b,
      a = false;
    for (b = 0; b < g.length; b++) {
      if (d[c - 2] == g[b]) {
        a = true;
      }
    }
    if (!a) {
      return '.' + d[c - 2] + '.' + d[c - 1];
    } else {
      return '.' + d[c - 3] + '.' + d[c - 2] + '.' + d[c - 1];
    }
  }
  function ntes_set_cookie_long(a, c) {
    var b = new Date();
    b.setTime(b.getTime() + 1000 * 60 * 60 * 24 * 365 * 100);
    document.cookie =
      a + '=' + c + '; expires=' + b.toGMTString() + '; path=/; domain=' + bsB1x;
  }
  function ntes_set_cookie(a, c) {
    var b = new Date();
    b.setTime(b.getTime() + 0);
    document.cookie = a + '=' + c + '; path=/; domain=' + bsB1x;
  }
  function ntes_set_cookie_new(b, d, a) {
    if (!a || a == '') {
      a = 1000 * 60 * 60 * 24 * 365 * 1;
    }
    var c = new Date();
    c.setTime(c.getTime() + a);
    document.cookie =
      b + '=' + d + '; expires=' + c.toGMTString() + '; path=/; domain=' + bsB1x;
  }
  function ntes_get_cookie(c) {
    var a = document.cookie;
    var d = c + '=';
    var g = a.length;
    var b = 0;
    while (b < g) {
      var e = b + d.length;
      if (a.substring(b, e) == d) {
        var f = a.indexOf(';', e);
        if (f == -1) {
          f = g;
        }
        return unescape(a.substring(e, f));
      }
      b = a.indexOf(' ', b) + 1;
      if (b == 0) {
        break;
      }
    }
    return -1;
  }
  function ntes_get_flashver() {
    var f = '',
      n = navigator;
    if (n.plugins && n.plugins.length) {
      for (var ii = 0; ii < n.plugins.length; ii++) {
        if (n.plugins[ii].name.indexOf('Shockwave Flash') != -1) {
          f = n.plugins[ii].description.split('Shockwave Flash')[1];
          break;
        }
      }
    } else {
      if (window.ActiveXObject) {
        for (var ii = 10; ii >= 2; ii--) {
          try {
            var fl = eval(
              "new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');"
            );
            if (fl) {
              f = ii + '.0';
              break;
            }
          } catch (e) {}
        }
      }
    }
    return f;
  }
  var cpY3x = 0;
  var TR4V = 8;
  function ntes_hex_md5(a) {
    return binl2hex(ntes_core_md5(str2binl(a), a.length * TR4V));
  }
  function ntes_core_md5(p, k) {
    p[k >> 5] |= 128 << (k % 32);
    p[(((k + 64) >>> 9) << 4) + 14] = k;
    var o = 1732584193;
    var n = -271733879;
    var m = -1732584194;
    var l = 271733878;
    for (var g = 0; g < p.length; g += 16) {
      var j = o;
      var h = n;
      var f = m;
      var e = l;
      o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936);
      l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
      m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
      n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
      o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
      l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
      m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
      n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
      o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
      l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
      m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);
      n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
      o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
      l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
      m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
      n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
      o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
      l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
      m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
      n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);
      o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
      l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
      m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
      n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
      o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
      l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
      m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
      n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
      o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
      l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
      m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
      n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);
      o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);
      l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
      m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
      n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
      o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
      l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
      m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
      n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
      o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
      l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);
      m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979);
      n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
      o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
      l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
      m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
      n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
      o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);
      l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
      m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
      n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
      o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
      l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);
      m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
      n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
      o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
      l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
      m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
      n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
      o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
      l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
      m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
      n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
      o = safe_add(o, j);
      n = safe_add(n, h);
      m = safe_add(m, f);
      l = safe_add(l, e);
    }
    return Array(o, n, m, l);
  }
  function md5_cmn(h, e, d, c, g, f) {
    return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d);
  }
  function md5_ff(g, f, k, j, e, i, h) {
    return md5_cmn((f & k) | (~f & j), g, f, e, i, h);
  }
  function md5_gg(g, f, k, j, e, i, h) {
    return md5_cmn((f & j) | (k & ~j), g, f, e, i, h);
  }
  function md5_hh(g, f, k, j, e, i, h) {
    return md5_cmn(f ^ k ^ j, g, f, e, i, h);
  }
  function md5_ii(g, f, k, j, e, i, h) {
    return md5_cmn(k ^ (f | ~j), g, f, e, i, h);
  }
  function safe_add(a, d) {
    var c = (a & 65535) + (d & 65535);
    var b = (a >> 16) + (d >> 16) + (c >> 16);
    return (b << 16) | (c & 65535);
  }
  function bit_rol(a, b) {
    return (a << b) | (a >>> (32 - b));
  }
  function str2binl(d) {
    var c = new Array();
    var a = (1 << TR4V) - 1;
    for (var b = 0; b < d.length * TR4V; b += TR4V) {
      c[b >> 5] |= (d.charCodeAt(b / TR4V) & a) << (b % 32);
    }
    return c;
  }
  function binl2hex(c) {
    var b = cpY3x ? '0123456789ABCDEF' : '0123456789abcdef';
    var d = '';
    for (var a = 0; a < c.length * 4; a++) {
      d +=
        b.charAt((c[a >> 2] >> ((a % 4) * 8 + 4)) & 15) +
        b.charAt((c[a >> 2] >> ((a % 4) * 8)) & 15);
    }
    return d;
  }
  function str_to_ent(e) {
    var a = '';
    var d;
    for (d = 0; d < e.length; d++) {
      var f = e.charCodeAt(d);
      var b = '';
      if (f > 255) {
        while (f >= 1) {
          b = '0123456789'.charAt(f % 10) + b;
          f = f / 10;
        }
        if (b == '') {
          b = '0';
        }
        b = '#' + b;
        b = '&' + b;
        b = b + ';';
        a += b;
      } else {
        a += e.charAt(d);
      }
    }
    return a;
  }
  function ntes_get_navigation_info() {
    Wz5E = '-';
    bsj1x = '-';
    WC5H = '-';
    var c = window.self,
      b = window.screen,
      a = window.navigator;
    if (c.screen) {
      Wz5E = b.width + 'x' + b.height;
      bsj1x = b.colorDepth + '-bit';
    } else {
      if (c.java) {
        var e = java.awt.Toolkit.getDefaultToolkit();
        var f = e.getScreenSize();
        Wz5E = f.width + 'x' + f.height;
      }
    }
    if (a.language) {
      WC5H = a.language.toLowerCase();
    } else {
      if (a.browserLanguage) {
        WC5H = a.browserLanguage.toLowerCase();
      }
    }
    var g = new Date(document.lastModified);
    bQg6a = g.getTime() / 1000;
  }
  function fetch_visitor_hash() {
    var c = new Date();
    var b = document.body.clientWidth + ':' + document.body.clientHeight;
    var a = str_to_ent(
      c.getTime() +
        Math.random() +
        document.location +
        document.referrer +
        screen.width +
        screen.height +
        navigator.userAgent +
        document.cookie +
        b
    );
    return ntes_hex_md5(a);
  }
  function cEU7N(c, b, f) {
    var e = c + '_' + +new Date() + parseInt(Math.random() * 100),
      a,
      d = f || cpZ3x;
    a = window[e] = new Image();
    a.onload = function() {
      window[e] = null;
      d();
    };
    a.onerror = function() {
      window[e] = null;
      d();
    };
    a.src = b;
    a = null;
  }
  function neteaseTracker(l, a, m, k) {
    if (is_spider()) {
      return;
    }
    var e = k || bQo6i;
    brP1x = escape(a || document.location);
    bQi6c = escape(m || document.title);
    bQh6b = l === true ? '' : escape(l || document.referrer);
    bQf6Z = ntes_get_flashver();
    var b = new Date().getTime();
    if (bsC1x == null) {
      document.cookie = '__ntes__test__cookies=' + b;
      bsC1x = ntes_get_cookie('__ntes__test__cookies') == b ? true : false;
      document.cookie =
        '__ntes__test__cookies=' +
        b +
        '; expires=' +
        new Date('1970/01/01').toUTCString();
    }
    if (e == 'undefined' || !e) {
      return;
    }
    if (brP1x.indexOf('http') != 0) {
      return;
    }
    var h = ntes_get_cookie('_ntes_nnid');
    if (h == -1) {
      if (bsC1x) {
        ua5f = fetch_visitor_hash();
        bQn6h = 1;
        ntes_set_cookie_long('_ntes_nnid', ua5f + ',' + new Date().getTime());
        ntes_set_cookie_long('_ntes_nuid', ua5f);
      }
    } else {
      var o = h.indexOf(',');
      var p = h.indexOf('|');
      var f = false;
      if (p == -1) {
        p = h.length;
      }
      ua5f = h.substr(0, o);
      Gs9j = h.substr(o + 1, p - o - 1);
      if (Gs9j == 0) {
        Gs9j = new Date().getTime();
        f = true;
      }
      if (!ua5f) {
        ua5f = fetch_visitor_hash();
        f = true;
      }
      if (f) {
        ntes_set_cookie_long('_ntes_nnid', ua5f + ',' + Gs9j);
        ntes_set_cookie_long('_ntes_nuid', ua5f);
      }
      if (Gs9j != 0 && b - Gs9j > 365 * 86400 * 1000) {
        Gs9j = 0;
        ntes_set_cookie_long('_ntes_nnid', ua5f + ',' + new Date().getTime());
        ntes_set_cookie_long('_ntes_nuid', ua5f);
      }
    }
    function c(q, i) {
      var s = ntes_get_cookie(q),
        r = ntes_get_cookie(i);
      return s == -1 ? (r == -1 ? '' : r) : s;
    }
    Mm1x = c('P_INFO', 'P_OINFO');
    Mm1x = Mm1x ? Mm1x.substr(0, Mm1x.indexOf('|')) : '';
    bQj6d = c('S_INFO', 'S_OINFO') ? 1 : 0;
    ntes_get_navigation_info();
    var n = [
      '_nacc=',
      e,
      '&_nvid=',
      ua5f,
      '&_nvtm=',
      cqn4r,
      '&_nvsf=',
      bQk6e,
      '&_nvfi=',
      bQn6h,
      '&_nlag=',
      WC5H,
      '&_nlmf=',
      bQg6a,
      '&_nres=',
      Wz5E,
      '&_nscd=',
      bsj1x,
      '&_nstm=',
      bQj6d,
      '&_nurl=',
      brP1x,
      '&_ntit=',
      bQi6c,
      '&_nref=',
      bQh6b,
      '&_nfla=',
      bQf6Z,
      '&_nssn=',
      Mm1x,
      '&_nxkey=',
      (b + '' + Math.random()).substring(6, 20),
      '&_end1',
    ].join('');
    bQk6e = 0;
    neteaseTracker.callback = null;
  }
  bQo6i = 'iad';
  neteaseTracker();
})();
(function() {})();
var CryptoJS =
  CryptoJS ||
  (function(u, p) {
    var d = {},
      l = (d.lib = {}),
      s = function() {},
      t = (l.Base = {
        extend: function(a) {
          s.prototype = this;
          var c = new s();
          a && c.mixIn(a);
          c.hasOwnProperty('init') ||
            (c.init = function() {
              c.$super.init.apply(this, arguments);
            });
          c.init.prototype = c;
          c.$super = this;
          return c;
        },
        create: function() {
          var a = this.extend();
          a.init.apply(a, arguments);
          return a;
        },
        init: function() {},
        mixIn: function(a) {
          for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
          a.hasOwnProperty('toString') && (this.toString = a.toString);
        },
        clone: function() {
          return this.init.prototype.extend(this);
        },
      }),
      r = (l.WordArray = t.extend({
        init: function(a, c) {
          a = this.words = a || [];
          this.sigBytes = c != p ? c : 4 * a.length;
        },
        toString: function(a) {
          return (a || v).stringify(this);
        },
        concat: function(a) {
          var c = this.words,
            e = a.words,
            j = this.sigBytes;
          a = a.sigBytes;
          this.clamp();
          if (j % 4)
            for (var k = 0; k < a; k++)
              c[(j + k) >>> 2] |=
                ((e[k >>> 2] >>> (24 - 8 * (k % 4))) & 255) << (24 - 8 * ((j + k) % 4));
          else if (65535 < e.length)
            for (k = 0; k < a; k += 4) c[(j + k) >>> 2] = e[k >>> 2];
          else c.push.apply(c, e);
          this.sigBytes += a;
          return this;
        },
        clamp: function() {
          var a = this.words,
            c = this.sigBytes;
          a[c >>> 2] &= 4294967295 << (32 - 8 * (c % 4));
          a.length = u.ceil(c / 4);
        },
        clone: function() {
          var a = t.clone.call(this);
          a.words = this.words.slice(0);
          return a;
        },
        random: function(a) {
          for (var c = [], e = 0; e < a; e += 4) c.push((4294967296 * u.random()) | 0);
          return new r.init(c, a);
        },
      })),
      w = (d.enc = {}),
      v = (w.Hex = {
        stringify: function(a) {
          var c = a.words;
          a = a.sigBytes;
          for (var e = [], j = 0; j < a; j++) {
            var k = (c[j >>> 2] >>> (24 - 8 * (j % 4))) & 255;
            e.push((k >>> 4).toString(16));
            e.push((k & 15).toString(16));
          }
          return e.join('');
        },
        parse: function(a) {
          for (var c = a.length, e = [], j = 0; j < c; j += 2)
            e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << (24 - 4 * (j % 8));
          return new r.init(e, c / 2);
        },
      }),
      b = (w.Latin1 = {
        stringify: function(a) {
          var c = a.words;
          a = a.sigBytes;
          for (var e = [], j = 0; j < a; j++)
            e.push(String.fromCharCode((c[j >>> 2] >>> (24 - 8 * (j % 4))) & 255));
          return e.join('');
        },
        parse: function(a) {
          for (var c = a.length, e = [], j = 0; j < c; j++)
            e[j >>> 2] |= (a.charCodeAt(j) & 255) << (24 - 8 * (j % 4));
          return new r.init(e, c);
        },
      }),
      x = (w.Utf8 = {
        stringify: function(a) {
          try {
            return decodeURIComponent(escape(b.stringify(a)));
          } catch (c) {
            throw Error('Malformed UTF-8 data');
          }
        },
        parse: function(a) {
          return b.parse(unescape(encodeURIComponent(a)));
        },
      }),
      q = (l.BufferedBlockAlgorithm = t.extend({
        reset: function() {
          this.j9a = new r.init();
          this.bQc6W = 0;
        },
        WE5J: function(a) {
          'string' == typeof a && (a = x.parse(a));
          this.j9a.concat(a);
          this.bQc6W += a.sigBytes;
        },
        BN8F: function(a) {
          var c = this.j9a,
            e = c.words,
            j = c.sigBytes,
            k = this.blockSize,
            b = j / (4 * k),
            b = a ? u.ceil(b) : u.max((b | 0) - this.bQd6X, 0);
          a = b * k;
          j = u.min(4 * a, j);
          if (a) {
            for (var q = 0; q < a; q += k) this.bQb6V(e, q);
            q = e.splice(0, a);
            c.sigBytes -= j;
          }
          return new r.init(q, j);
        },
        clone: function() {
          var a = t.clone.call(this);
          a.j9a = this.j9a.clone();
          return a;
        },
        bQd6X: 0,
      }));
    l.Hasher = q.extend({
      cfg: t.extend(),
      init: function(a) {
        this.cfg = this.cfg.extend(a);
        this.reset();
      },
      reset: function() {
        q.reset.call(this);
        this.bth1x();
      },
      update: function(a) {
        this.WE5J(a);
        this.BN8F();
        return this;
      },
      finalize: function(a) {
        a && this.WE5J(a);
        return this.WG5L();
      },
      blockSize: 16,
      btd1x: function(a) {
        return function(b, e) {
          return new a.init(e).finalize(b);
        };
      },
      cpS3x: function(a) {
        return function(b, e) {
          return new n.HMAC.init(a, e).finalize(b);
        };
      },
    });
    var n = (d.algo = {});
    return d;
  })(Math);
(function() {
  var u = CryptoJS,
    p = u.lib.WordArray;
  u.enc.Base64 = {
    stringify: function(d) {
      var l = d.words,
        p = d.sigBytes,
        t = this.bz0x;
      d.clamp();
      d = [];
      for (var r = 0; r < p; r += 3)
        for (
          var w =
              (((l[r >>> 2] >>> (24 - 8 * (r % 4))) & 255) << 16) |
              (((l[(r + 1) >>> 2] >>> (24 - 8 * ((r + 1) % 4))) & 255) << 8) |
              ((l[(r + 2) >>> 2] >>> (24 - 8 * ((r + 2) % 4))) & 255),
            v = 0;
          4 > v && r + 0.75 * v < p;
          v++
        )
          d.push(t.charAt((w >>> (6 * (3 - v))) & 63));
      if ((l = t.charAt(64))) for (; d.length % 4; ) d.push(l);
      return d.join('');
    },
    parse: function(d) {
      var l = d.length,
        s = this.bz0x,
        t = s.charAt(64);
      t && ((t = d.indexOf(t)), -1 != t && (l = t));
      for (var t = [], r = 0, w = 0; w < l; w++)
        if (w % 4) {
          var v = s.indexOf(d.charAt(w - 1)) << (2 * (w % 4)),
            b = s.indexOf(d.charAt(w)) >>> (6 - 2 * (w % 4));
          t[r >>> 2] |= (v | b) << (24 - 8 * (r % 4));
          r++;
        }
      return p.create(t, r);
    },
    bz0x: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
  };
})();
(function(u) {
  function p(b, n, a, c, e, j, k) {
    b = b + ((n & a) | (~n & c)) + e + k;
    return ((b << j) | (b >>> (32 - j))) + n;
  }
  function d(b, n, a, c, e, j, k) {
    b = b + ((n & c) | (a & ~c)) + e + k;
    return ((b << j) | (b >>> (32 - j))) + n;
  }
  function l(b, n, a, c, e, j, k) {
    b = b + (n ^ a ^ c) + e + k;
    return ((b << j) | (b >>> (32 - j))) + n;
  }
  function s(b, n, a, c, e, j, k) {
    b = b + (a ^ (n | ~c)) + e + k;
    return ((b << j) | (b >>> (32 - j))) + n;
  }
  for (
    var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0;
    64 > x;
    x++
  )
    b[x] = (4294967296 * u.abs(u.sin(x + 1))) | 0;
  r = r.MD5 = v.extend({
    bth1x: function() {
      this.dP0x = new w.init([1732584193, 4023233417, 2562383102, 271733878]);
    },
    bQb6V: function(q, n) {
      for (var a = 0; 16 > a; a++) {
        var c = n + a,
          e = q[c];
        q[c] =
          (((e << 8) | (e >>> 24)) & 16711935) | (((e << 24) | (e >>> 8)) & 4278255360);
      }
      var a = this.dP0x.words,
        c = q[n + 0],
        e = q[n + 1],
        j = q[n + 2],
        k = q[n + 3],
        z = q[n + 4],
        r = q[n + 5],
        t = q[n + 6],
        w = q[n + 7],
        v = q[n + 8],
        A = q[n + 9],
        B = q[n + 10],
        C = q[n + 11],
        u = q[n + 12],
        D = q[n + 13],
        E = q[n + 14],
        x = q[n + 15],
        f = a[0],
        m = a[1],
        g = a[2],
        h = a[3],
        f = p(f, m, g, h, c, 7, b[0]),
        h = p(h, f, m, g, e, 12, b[1]),
        g = p(g, h, f, m, j, 17, b[2]),
        m = p(m, g, h, f, k, 22, b[3]),
        f = p(f, m, g, h, z, 7, b[4]),
        h = p(h, f, m, g, r, 12, b[5]),
        g = p(g, h, f, m, t, 17, b[6]),
        m = p(m, g, h, f, w, 22, b[7]),
        f = p(f, m, g, h, v, 7, b[8]),
        h = p(h, f, m, g, A, 12, b[9]),
        g = p(g, h, f, m, B, 17, b[10]),
        m = p(m, g, h, f, C, 22, b[11]),
        f = p(f, m, g, h, u, 7, b[12]),
        h = p(h, f, m, g, D, 12, b[13]),
        g = p(g, h, f, m, E, 17, b[14]),
        m = p(m, g, h, f, x, 22, b[15]),
        f = d(f, m, g, h, e, 5, b[16]),
        h = d(h, f, m, g, t, 9, b[17]),
        g = d(g, h, f, m, C, 14, b[18]),
        m = d(m, g, h, f, c, 20, b[19]),
        f = d(f, m, g, h, r, 5, b[20]),
        h = d(h, f, m, g, B, 9, b[21]),
        g = d(g, h, f, m, x, 14, b[22]),
        m = d(m, g, h, f, z, 20, b[23]),
        f = d(f, m, g, h, A, 5, b[24]),
        h = d(h, f, m, g, E, 9, b[25]),
        g = d(g, h, f, m, k, 14, b[26]),
        m = d(m, g, h, f, v, 20, b[27]),
        f = d(f, m, g, h, D, 5, b[28]),
        h = d(h, f, m, g, j, 9, b[29]),
        g = d(g, h, f, m, w, 14, b[30]),
        m = d(m, g, h, f, u, 20, b[31]),
        f = l(f, m, g, h, r, 4, b[32]),
        h = l(h, f, m, g, v, 11, b[33]),
        g = l(g, h, f, m, C, 16, b[34]),
        m = l(m, g, h, f, E, 23, b[35]),
        f = l(f, m, g, h, e, 4, b[36]),
        h = l(h, f, m, g, z, 11, b[37]),
        g = l(g, h, f, m, w, 16, b[38]),
        m = l(m, g, h, f, B, 23, b[39]),
        f = l(f, m, g, h, D, 4, b[40]),
        h = l(h, f, m, g, c, 11, b[41]),
        g = l(g, h, f, m, k, 16, b[42]),
        m = l(m, g, h, f, t, 23, b[43]),
        f = l(f, m, g, h, A, 4, b[44]),
        h = l(h, f, m, g, u, 11, b[45]),
        g = l(g, h, f, m, x, 16, b[46]),
        m = l(m, g, h, f, j, 23, b[47]),
        f = s(f, m, g, h, c, 6, b[48]),
        h = s(h, f, m, g, w, 10, b[49]),
        g = s(g, h, f, m, E, 15, b[50]),
        m = s(m, g, h, f, r, 21, b[51]),
        f = s(f, m, g, h, u, 6, b[52]),
        h = s(h, f, m, g, k, 10, b[53]),
        g = s(g, h, f, m, B, 15, b[54]),
        m = s(m, g, h, f, e, 21, b[55]),
        f = s(f, m, g, h, v, 6, b[56]),
        h = s(h, f, m, g, x, 10, b[57]),
        g = s(g, h, f, m, t, 15, b[58]),
        m = s(m, g, h, f, D, 21, b[59]),
        f = s(f, m, g, h, z, 6, b[60]),
        h = s(h, f, m, g, C, 10, b[61]),
        g = s(g, h, f, m, j, 15, b[62]),
        m = s(m, g, h, f, A, 21, b[63]);
      a[0] = (a[0] + f) | 0;
      a[1] = (a[1] + m) | 0;
      a[2] = (a[2] + g) | 0;
      a[3] = (a[3] + h) | 0;
    },
    WG5L: function() {
      var b = this.j9a,
        n = b.words,
        a = 8 * this.bQc6W,
        c = 8 * b.sigBytes;
      n[c >>> 5] |= 128 << (24 - c % 32);
      var e = u.floor(a / 4294967296);
      n[(((c + 64) >>> 9) << 4) + 15] =
        (((e << 8) | (e >>> 24)) & 16711935) | (((e << 24) | (e >>> 8)) & 4278255360);
      n[(((c + 64) >>> 9) << 4) + 14] =
        (((a << 8) | (a >>> 24)) & 16711935) | (((a << 24) | (a >>> 8)) & 4278255360);
      b.sigBytes = 4 * (n.length + 1);
      this.BN8F();
      b = this.dP0x;
      n = b.words;
      for (a = 0; 4 > a; a++)
        (c = n[a]),
          (n[a] =
            (((c << 8) | (c >>> 24)) & 16711935) |
            (((c << 24) | (c >>> 8)) & 4278255360));
      return b;
    },
    clone: function() {
      var b = v.clone.call(this);
      b.dP0x = this.dP0x.clone();
      return b;
    },
  });
  t.MD5 = v.btd1x(r);
  t.HmacMD5 = v.cpS3x(r);
})(Math);
(function() {
  var u = CryptoJS,
    p = u.lib,
    d = p.Base,
    l = p.WordArray,
    p = u.algo,
    s = (p.EvpKDF = d.extend({
      cfg: d.extend({
        keySize: 4,
        hasher: p.MD5,
        iterations: 1,
      }),
      init: function(d) {
        this.cfg = this.cfg.extend(d);
      },
      compute: function(d, r) {
        for (
          var p = this.cfg,
            s = p.hasher.create(),
            b = l.create(),
            u = b.words,
            q = p.keySize,
            p = p.iterations;
          u.length < q;

        ) {
          n && s.update(n);
          var n = s.update(d).finalize(r);
          s.reset();
          for (var a = 1; a < p; a++) (n = s.finalize(n)), s.reset();
          b.concat(n);
        }
        b.sigBytes = 4 * q;
        return b;
      },
    }));
  u.EvpKDF = function(d, l, p) {
    return s.create(p).compute(d, l);
  };
})();
CryptoJS.lib.Cipher ||
  (function(u) {
    var p = CryptoJS,
      d = p.lib,
      l = d.Base,
      s = d.WordArray,
      t = d.BufferedBlockAlgorithm,
      r = p.enc.Base64,
      w = p.algo.EvpKDF,
      v = (d.Cipher = t.extend({
        cfg: l.extend(),
        createEncryptor: function(e, a) {
          return this.create(this.btr1x, e, a);
        },
        createDecryptor: function(e, a) {
          return this.create(this.cpR3x, e, a);
        },
        init: function(e, a, b) {
          this.cfg = this.cfg.extend(b);
          this.bQa6U = e;
          this.J9A = a;
          this.reset();
        },
        reset: function() {
          t.reset.call(this);
          this.bth1x();
        },
        process: function(e) {
          this.WE5J(e);
          return this.BN8F();
        },
        finalize: function(e) {
          e && this.WE5J(e);
          return this.WG5L();
        },
        keySize: 4,
        ivSize: 4,
        btr1x: 1,
        cpR3x: 2,
        btd1x: function(e) {
          return {
            encrypt: function(b, k, d) {
              return ('string' == typeof k ? c : a).encrypt(e, b, k, d);
            },
            decrypt: function(b, k, d) {
              return ('string' == typeof k ? c : a).decrypt(e, b, k, d);
            },
          };
        },
      }));
    d.StreamCipher = v.extend({
      WG5L: function() {
        return this.BN8F(!0);
      },
      blockSize: 1,
    });
    var b = (p.mode = {}),
      x = function(e, a, b) {
        var c = this.bPZ6T;
        c ? (this.bPZ6T = u) : (c = this.bPY6S);
        for (var d = 0; d < b; d++) e[a + d] ^= c[d];
      },
      q = (d.BlockCipherMode = l.extend({
        createEncryptor: function(e, a) {
          return this.Encryptor.create(e, a);
        },
        createDecryptor: function(e, a) {
          return this.Decryptor.create(e, a);
        },
        init: function(e, a) {
          this.bPX6R = e;
          this.bPZ6T = a;
        },
      })).extend();
    q.Encryptor = q.extend({
      processBlock: function(e, a) {
        var b = this.bPX6R,
          c = b.blockSize;
        x.call(this, e, a, c);
        b.encryptBlock(e, a);
        this.bPY6S = e.slice(a, a + c);
      },
    });
    q.Decryptor = q.extend({
      processBlock: function(e, a) {
        var b = this.bPX6R,
          c = b.blockSize,
          d = e.slice(a, a + c);
        b.decryptBlock(e, a);
        x.call(this, e, a, c);
        this.bPY6S = d;
      },
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
      pad: function(a, b) {
        for (
          var c = 4 * b,
            c = c - a.sigBytes % c,
            d = (c << 24) | (c << 16) | (c << 8) | c,
            l = [],
            n = 0;
          n < c;
          n += 4
        )
          l.push(d);
        c = s.create(l, c);
        a.concat(c);
      },
      unpad: function(a) {
        a.sigBytes -= a.words[(a.sigBytes - 1) >>> 2] & 255;
      },
    };
    d.BlockCipher = v.extend({
      cfg: v.cfg.extend({
        mode: b,
        padding: q,
      }),
      reset: function() {
        v.reset.call(this);
        var a = this.cfg,
          b = a.iv,
          a = a.mode;
        if (this.bQa6U == this.btr1x) var c = a.createEncryptor;
        else (c = a.createDecryptor), (this.bQd6X = 1);
        this.fj1x = c.call(a, this, b && b.words);
      },
      bQb6V: function(a, b) {
        this.fj1x.processBlock(a, b);
      },
      WG5L: function() {
        var a = this.cfg.padding;
        if (this.bQa6U == this.btr1x) {
          a.pad(this.j9a, this.blockSize);
          var b = this.BN8F(!0);
        } else (b = this.BN8F(!0)), a.unpad(b);
        return b;
      },
      blockSize: 4,
    });
    var n = (d.CipherParams = l.extend({
        init: function(a) {
          this.mixIn(a);
        },
        toString: function(a) {
          return (a || this.formatter).stringify(this);
        },
      })),
      b = ((p.format = {}).OpenSSL = {
        stringify: function(a) {
          var b = a.ciphertext;
          a = a.salt;
          return (a
            ? s
                .create([1398893684, 1701076831])
                .concat(a)
                .concat(b)
            : b
          ).toString(r);
        },
        parse: function(a) {
          a = r.parse(a);
          var b = a.words;
          if (1398893684 == b[0] && 1701076831 == b[1]) {
            var c = s.create(b.slice(2, 4));
            b.splice(0, 4);
            a.sigBytes -= 16;
          }
          return n.create({
            ciphertext: a,
            salt: c,
          });
        },
      }),
      a = (d.SerializableCipher = l.extend({
        cfg: l.extend({
          format: b,
        }),
        encrypt: function(a, b, c, d) {
          d = this.cfg.extend(d);
          var l = a.createEncryptor(c, d);
          b = l.finalize(b);
          l = l.cfg;
          return n.create({
            ciphertext: b,
            key: c,
            iv: l.iv,
            algorithm: a,
            mode: l.mode,
            padding: l.padding,
            blockSize: a.blockSize,
            formatter: d.format,
          });
        },
        decrypt: function(a, b, c, d) {
          d = this.cfg.extend(d);
          b = this.bdZ7S(b, d.format);
          return a.createDecryptor(c, d).finalize(b.ciphertext);
        },
        bdZ7S: function(a, b) {
          return 'string' == typeof a ? b.parse(a, this) : a;
        },
      })),
      p = ((p.kdf = {}).OpenSSL = {
        execute: function(a, b, c, d) {
          d || (d = s.random(8));
          a = w
            .create({
              keySize: b + c,
            })
            .compute(a, d);
          c = s.create(a.words.slice(b), 4 * c);
          a.sigBytes = 4 * b;
          return n.create({
            key: a,
            iv: c,
            salt: d,
          });
        },
      }),
      c = (d.PasswordBasedCipher = a.extend({
        cfg: a.cfg.extend({
          kdf: p,
        }),
        encrypt: function(b, c, d, l) {
          l = this.cfg.extend(l);
          d = l.kdf.execute(d, b.keySize, b.ivSize);
          l.iv = d.iv;
          b = a.encrypt.call(this, b, c, d.key, l);
          b.mixIn(d);
          return b;
        },
        decrypt: function(b, c, d, l) {
          l = this.cfg.extend(l);
          c = this.bdZ7S(c, l.format);
          d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
          l.iv = d.iv;
          return a.decrypt.call(this, b, c, d.key, l);
        },
      }));
  })();
(function() {
  for (
    var u = CryptoJS,
      p = u.lib.BlockCipher,
      d = u.algo,
      l = [],
      s = [],
      t = [],
      r = [],
      w = [],
      v = [],
      b = [],
      x = [],
      q = [],
      n = [],
      a = [],
      c = 0;
    256 > c;
    c++
  )
    a[c] = 128 > c ? c << 1 : (c << 1) ^ 283;
  for (var e = 0, j = 0, c = 0; 256 > c; c++) {
    var k = j ^ (j << 1) ^ (j << 2) ^ (j << 3) ^ (j << 4),
      k = (k >>> 8) ^ (k & 255) ^ 99;
    l[e] = k;
    s[k] = e;
    var z = a[e],
      F = a[z],
      G = a[F],
      y = (257 * a[k]) ^ (16843008 * k);
    t[e] = (y << 24) | (y >>> 8);
    r[e] = (y << 16) | (y >>> 16);
    w[e] = (y << 8) | (y >>> 24);
    v[e] = y;
    y = (16843009 * G) ^ (65537 * F) ^ (257 * z) ^ (16843008 * e);
    b[k] = (y << 24) | (y >>> 8);
    x[k] = (y << 16) | (y >>> 16);
    q[k] = (y << 8) | (y >>> 24);
    n[k] = y;
    e ? ((e = z ^ a[a[a[G ^ z]]]), (j ^= a[a[j]])) : (e = j = 1);
  }
  var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
    d = (d.AES = p.extend({
      bth1x: function() {
        for (
          var a = this.J9A,
            c = a.words,
            d = a.sigBytes / 4,
            a = 4 * ((this.cpG3x = d + 6) + 1),
            e = (this.cpF3x = []),
            j = 0;
          j < a;
          j++
        )
          if (j < d) e[j] = c[j];
          else {
            var k = e[j - 1];
            j % d
              ? 6 < d &&
                4 == j % d &&
                (k =
                  (l[k >>> 24] << 24) |
                  (l[(k >>> 16) & 255] << 16) |
                  (l[(k >>> 8) & 255] << 8) |
                  l[k & 255])
              : ((k = (k << 8) | (k >>> 24)),
                (k =
                  (l[k >>> 24] << 24) |
                  (l[(k >>> 16) & 255] << 16) |
                  (l[(k >>> 8) & 255] << 8) |
                  l[k & 255]),
                (k ^= H[(j / d) | 0] << 24));
            e[j] = e[j - d] ^ k;
          }
        c = this.cpC3x = [];
        for (d = 0; d < a; d++)
          (j = a - d),
            (k = d % 4 ? e[j] : e[j - 4]),
            (c[d] =
              4 > d || 4 >= j
                ? k
                : b[l[k >>> 24]] ^
                  x[l[(k >>> 16) & 255]] ^
                  q[l[(k >>> 8) & 255]] ^
                  n[l[k & 255]]);
      },
      encryptBlock: function(a, b) {
        this.bPT6N(a, b, this.cpF3x, t, r, w, v, l);
      },
      decryptBlock: function(a, c) {
        var d = a[c + 1];
        a[c + 1] = a[c + 3];
        a[c + 3] = d;
        this.bPT6N(a, c, this.cpC3x, b, x, q, n, s);
        d = a[c + 1];
        a[c + 1] = a[c + 3];
        a[c + 3] = d;
      },
      bPT6N: function(a, b, c, d, e, j, l, f) {
        for (
          var m = this.cpG3x,
            g = a[b] ^ c[0],
            h = a[b + 1] ^ c[1],
            k = a[b + 2] ^ c[2],
            n = a[b + 3] ^ c[3],
            p = 4,
            r = 1;
          r < m;
          r++
        )
          var q =
              d[g >>> 24] ^
              e[(h >>> 16) & 255] ^
              j[(k >>> 8) & 255] ^
              l[n & 255] ^
              c[p++],
            s =
              d[h >>> 24] ^
              e[(k >>> 16) & 255] ^
              j[(n >>> 8) & 255] ^
              l[g & 255] ^
              c[p++],
            t =
              d[k >>> 24] ^
              e[(n >>> 16) & 255] ^
              j[(g >>> 8) & 255] ^
              l[h & 255] ^
              c[p++],
            n =
              d[n >>> 24] ^
              e[(g >>> 16) & 255] ^
              j[(h >>> 8) & 255] ^
              l[k & 255] ^
              c[p++],
            g = q,
            h = s,
            k = t;
        q =
          ((f[g >>> 24] << 24) |
            (f[(h >>> 16) & 255] << 16) |
            (f[(k >>> 8) & 255] << 8) |
            f[n & 255]) ^
          c[p++];
        s =
          ((f[h >>> 24] << 24) |
            (f[(k >>> 16) & 255] << 16) |
            (f[(n >>> 8) & 255] << 8) |
            f[g & 255]) ^
          c[p++];
        t =
          ((f[k >>> 24] << 24) |
            (f[(n >>> 16) & 255] << 16) |
            (f[(g >>> 8) & 255] << 8) |
            f[h & 255]) ^
          c[p++];
        n =
          ((f[n >>> 24] << 24) |
            (f[(g >>> 16) & 255] << 16) |
            (f[(h >>> 8) & 255] << 8) |
            f[k & 255]) ^
          c[p++];
        a[b] = q;
        a[b + 1] = s;
        a[b + 2] = t;
        a[b + 3] = n;
      },
      keySize: 8,
    }));
  u.AES = p.btd1x(d);
})();
function RSAKeyPair(a, b, c) {
  (this.e = biFromHex(a)),
    (this.d = biFromHex(b)),
    (this.m = biFromHex(c)),
    (this.chunkSize = 2 * biHighIndex(this.m)),
    (this.radix = 16),
    (this.barrett = new BarrettMu(this.m));
}
function twoDigit(a) {
  return (10 > a ? '0' : '') + String(a);
}
function encryptedString(a, b) {
  for (var f, g, h, i, j, k, l, c = new Array(), d = b.length, e = 0; d > e; )
    (c[e] = b.charCodeAt(e)), e++;
  for (; 0 != c.length % a.chunkSize; ) c[e++] = 0;
  for (f = c.length, g = '', e = 0; f > e; e += a.chunkSize) {
    for (j = new BigInt(), h = 0, i = e; i < e + a.chunkSize; ++h)
      (j.digits[h] = c[i++]), (j.digits[h] += c[i++] << 8);
    (k = a.barrett.powMod(j, a.e)),
      (l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix)),
      (g += l + ' ');
  }
  return g.substring(0, g.length - 1);
}
function decryptedString(a, b) {
  var e,
    f,
    g,
    h,
    c = b.split(' '),
    d = '';
  for (e = 0; e < c.length; ++e)
    for (
      h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix),
        g = a.barrett.powMod(h, a.d),
        f = 0;
      f <= biHighIndex(g);
      ++f
    )
      d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
  return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)), d;
}
function setMaxDigits(a) {
  (maxDigits = a), (ZERO_ARRAY = new Array(maxDigits));
  for (var b = 0; b < ZERO_ARRAY.length; b++) ZERO_ARRAY[b] = 0;
  (bigZero = new BigInt()), (bigOne = new BigInt()), (bigOne.digits[0] = 1);
}
function BigInt(a) {
  (this.digits = 'boolean' == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0)),
    (this.isNeg = !1);
}
function biFromDecimal(a) {
  for (
    var d, e, f, b = '-' == a.charAt(0), c = b ? 1 : 0;
    c < a.length && '0' == a.charAt(c);

  )
    ++c;
  if (c == a.length) d = new BigInt();
  else {
    for (
      e = a.length - c,
        f = e % dpl10,
        0 == f && (f = dpl10),
        d = biFromNumber(Number(a.substr(c, f))),
        c += f;
      c < a.length;

    )
      (d = biAdd(biMultiply(d, lr10), biFromNumber(Number(a.substr(c, dpl10))))),
        (c += dpl10);
    d.isNeg = b;
  }
  return d;
}
function biCopy(a) {
  var b = new BigInt(!0);
  return (b.digits = a.digits.slice(0)), (b.isNeg = a.isNeg), b;
}
function biFromNumber(a) {
  var c,
    b = new BigInt();
  for (b.isNeg = 0 > a, a = Math.abs(a), c = 0; a > 0; )
    (b.digits[c++] = a & maxDigitVal), (a >>= biRadixBits);
  return b;
}
function reverseStr(a) {
  var c,
    b = '';
  for (c = a.length - 1; c > -1; --c) b += a.charAt(c);
  return b;
}
function biToString(a, b) {
  var d,
    e,
    c = new BigInt();
  for (
    c.digits[0] = b, d = biDivideModulo(a, c), e = hexatrigesimalToChar[d[1].digits[0]];
    1 == biCompare(d[0], bigZero);

  )
    (d = biDivideModulo(d[0], c)),
      (digit = d[1].digits[0]),
      (e += hexatrigesimalToChar[d[1].digits[0]]);
  return (a.isNeg ? '-' : '') + reverseStr(e);
}
function biToDecimal(a) {
  var c,
    d,
    b = new BigInt();
  for (
    b.digits[0] = 10, c = biDivideModulo(a, b), d = String(c[1].digits[0]);
    1 == biCompare(c[0], bigZero);

  )
    (c = biDivideModulo(c[0], b)), (d += String(c[1].digits[0]));
  return (a.isNeg ? '-' : '') + reverseStr(d);
}
function digitToHex(a) {
  var b = 15,
    c = '';
  for (i = 0; 4 > i; ++i) (c += hexToChar[a & b]), (a >>>= 4);
  return reverseStr(c);
}
function biToHex(a) {
  var d,
    b = '';
  for (biHighIndex(a), d = biHighIndex(a); d > -1; --d) b += digitToHex(a.digits[d]);
  return b;
}
function charToHex(a) {
  var h,
    b = 48,
    c = b + 9,
    d = 97,
    e = d + 25,
    f = 65,
    g = 90;
  return (h =
    a >= b && c >= a
      ? a - b
      : a >= f && g >= a ? 10 + a - f : a >= d && e >= a ? 10 + a - d : 0);
}
function hexToDigit(a) {
  var d,
    b = 0,
    c = Math.min(a.length, 4);
  for (d = 0; c > d; ++d) (b <<= 4), (b |= charToHex(a.charCodeAt(d)));
  return b;
}
function biFromHex(a) {
  var d,
    e,
    b = new BigInt(),
    c = a.length;
  for (d = c, e = 0; d > 0; d -= 4, ++e)
    b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
  return b;
}
function biFromString(a, b) {
  var g,
    h,
    i,
    j,
    c = '-' == a.charAt(0),
    d = c ? 1 : 0,
    e = new BigInt(),
    f = new BigInt();
  for (f.digits[0] = 1, g = a.length - 1; g >= d; g--)
    (h = a.charCodeAt(g)),
      (i = charToHex(h)),
      (j = biMultiplyDigit(f, i)),
      (e = biAdd(e, j)),
      (f = biMultiplyDigit(f, b));
  return (e.isNeg = c), e;
}
function biDump(a) {
  return (a.isNeg ? '-' : '') + a.digits.join(' ');
}
function biAdd(a, b) {
  var c, d, e, f;
  if (a.isNeg != b.isNeg)
    (b.isNeg = !b.isNeg), (c = biSubtract(a, b)), (b.isNeg = !b.isNeg);
  else {
    for (c = new BigInt(), d = 0, f = 0; f < a.digits.length; ++f)
      (e = a.digits[f] + b.digits[f] + d),
        (c.digits[f] = 65535 & e),
        (d = Number(e >= biRadix));
    c.isNeg = a.isNeg;
  }
  return c;
}
function biSubtract(a, b) {
  var c, d, e, f;
  if (a.isNeg != b.isNeg) (b.isNeg = !b.isNeg), (c = biAdd(a, b)), (b.isNeg = !b.isNeg);
  else {
    for (c = new BigInt(), e = 0, f = 0; f < a.digits.length; ++f)
      (d = a.digits[f] - b.digits[f] + e),
        (c.digits[f] = 65535 & d),
        c.digits[f] < 0 && (c.digits[f] += biRadix),
        (e = 0 - Number(0 > d));
    if (-1 == e) {
      for (e = 0, f = 0; f < a.digits.length; ++f)
        (d = 0 - c.digits[f] + e),
          (c.digits[f] = 65535 & d),
          c.digits[f] < 0 && (c.digits[f] += biRadix),
          (e = 0 - Number(0 > d));
      c.isNeg = !a.isNeg;
    } else c.isNeg = a.isNeg;
  }
  return c;
}
function biHighIndex(a) {
  for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b]; ) --b;
  return b;
}
function biNumBits(a) {
  var e,
    b = biHighIndex(a),
    c = a.digits[b],
    d = (b + 1) * bitsPerDigit;
  for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e) c <<= 1;
  return e;
}
function biMultiply(a, b) {
  var d,
    h,
    i,
    k,
    c = new BigInt(),
    e = biHighIndex(a),
    f = biHighIndex(b);
  for (k = 0; f >= k; ++k) {
    for (d = 0, i = k, j = 0; e >= j; ++j, ++i)
      (h = c.digits[i] + a.digits[j] * b.digits[k] + d),
        (c.digits[i] = h & maxDigitVal),
        (d = h >>> biRadixBits);
    c.digits[k + e + 1] = d;
  }
  return (c.isNeg = a.isNeg != b.isNeg), c;
}
function biMultiplyDigit(a, b) {
  var c, d, e, f;
  for (result = new BigInt(), c = biHighIndex(a), d = 0, f = 0; c >= f; ++f)
    (e = result.digits[f] + a.digits[f] * b + d),
      (result.digits[f] = e & maxDigitVal),
      (d = e >>> biRadixBits);
  return (result.digits[1 + c] = d), result;
}
function arrayCopy(a, b, c, d, e) {
  var g,
    h,
    f = Math.min(b + e, a.length);
  for (g = b, h = d; f > g; ++g, ++h) c[h] = a[g];
}
function biShiftLeft(a, b) {
  var e,
    f,
    g,
    h,
    c = Math.floor(b / bitsPerDigit),
    d = new BigInt();
  for (
    arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c),
      e = b % bitsPerDigit,
      f = bitsPerDigit - e,
      g = d.digits.length - 1,
      h = g - 1;
    g > 0;
    --g, --h
  )
    d.digits[g] =
      ((d.digits[g] << e) & maxDigitVal) | ((d.digits[h] & highBitMasks[e]) >>> f);
  return (d.digits[0] = (d.digits[g] << e) & maxDigitVal), (d.isNeg = a.isNeg), d;
}
function biShiftRight(a, b) {
  var e,
    f,
    g,
    h,
    c = Math.floor(b / bitsPerDigit),
    d = new BigInt();
  for (
    arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c),
      e = b % bitsPerDigit,
      f = bitsPerDigit - e,
      g = 0,
      h = g + 1;
    g < d.digits.length - 1;
    ++g, ++h
  )
    d.digits[g] = (d.digits[g] >>> e) | ((d.digits[h] & lowBitMasks[e]) << f);
  return (d.digits[d.digits.length - 1] >>>= e), (d.isNeg = a.isNeg), d;
}
function biMultiplyByRadixPower(a, b) {
  var c = new BigInt();
  return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b), c;
}
function biDivideByRadixPower(a, b) {
  var c = new BigInt();
  return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b), c;
}
function biModuloByRadixPower(a, b) {
  var c = new BigInt();
  return arrayCopy(a.digits, 0, c.digits, 0, b), c;
}
function biCompare(a, b) {
  if (a.isNeg != b.isNeg) return 1 - 2 * Number(a.isNeg);
  for (var c = a.digits.length - 1; c >= 0; --c)
    if (a.digits[c] != b.digits[c])
      return a.isNeg
        ? 1 - 2 * Number(a.digits[c] > b.digits[c])
        : 1 - 2 * Number(a.digits[c] < b.digits[c]);
  return 0;
}
function biDivideModulo(a, b) {
  var f,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q,
    r,
    s,
    c = biNumBits(a),
    d = biNumBits(b),
    e = b.isNeg;
  if (d > c)
    return (
      a.isNeg
        ? ((f = biCopy(bigOne)),
          (f.isNeg = !b.isNeg),
          (a.isNeg = !1),
          (b.isNeg = !1),
          (g = biSubtract(b, a)),
          (a.isNeg = !0),
          (b.isNeg = e))
        : ((f = new BigInt()), (g = biCopy(a))),
      new Array(f, g)
    );
  for (
    f = new BigInt(), g = a, h = Math.ceil(d / bitsPerDigit) - 1, i = 0;
    b.digits[h] < biHalfRadix;

  )
    (b = biShiftLeft(b, 1)), ++i, ++d, (h = Math.ceil(d / bitsPerDigit) - 1);
  for (
    g = biShiftLeft(g, i),
      c += i,
      j = Math.ceil(c / bitsPerDigit) - 1,
      k = biMultiplyByRadixPower(b, j - h);
    -1 != biCompare(g, k);

  )
    ++f.digits[j - h], (g = biSubtract(g, k));
  for (l = j; l > h; --l) {
    for (
      m = l >= g.digits.length ? 0 : g.digits[l],
        n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1],
        o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2],
        p = h >= b.digits.length ? 0 : b.digits[h],
        q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1],
        f.digits[l - h - 1] = m == p ? maxDigitVal : Math.floor((m * biRadix + n) / p),
        r = f.digits[l - h - 1] * (p * biRadix + q),
        s = m * biRadixSquared + (n * biRadix + o);
      r > s;

    )
      --f.digits[l - h - 1],
        (r = f.digits[l - h - 1] * ((p * biRadix) | q)),
        (s = m * biRadix * biRadix + (n * biRadix + o));
    (k = biMultiplyByRadixPower(b, l - h - 1)),
      (g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1]))),
      g.isNeg && ((g = biAdd(g, k)), --f.digits[l - h - 1]);
  }
  return (
    (g = biShiftRight(g, i)),
    (f.isNeg = a.isNeg != e),
    a.isNeg &&
      ((f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne)),
      (b = biShiftRight(b, i)),
      (g = biSubtract(b, g))),
    0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1),
    new Array(f, g)
  );
}
function biDivide(a, b) {
  return biDivideModulo(a, b)[0];
}
function biModulo(a, b) {
  return biDivideModulo(a, b)[1];
}
function biMultiplyMod(a, b, c) {
  return biModulo(biMultiply(a, b), c);
}
function biPow(a, b) {
  for (var c = bigOne, d = a; ; ) {
    if ((0 != (1 & b) && (c = biMultiply(c, d)), (b >>= 1), 0 == b)) break;
    d = biMultiply(d, d);
  }
  return c;
}
function biPowMod(a, b, c) {
  for (var d = bigOne, e = a, f = b; ; ) {
    if (
      (0 != (1 & f.digits[0]) && (d = biMultiplyMod(d, e, c)),
      (f = biShiftRight(f, 1)),
      0 == f.digits[0] && 0 == biHighIndex(f))
    )
      break;
    e = biMultiplyMod(e, e, c);
  }
  return d;
}
function BarrettMu(a) {
  (this.modulus = biCopy(a)), (this.k = biHighIndex(this.modulus) + 1);
  var b = new BigInt();
  (b.digits[2 * this.k] = 1),
    (this.mu = biDivide(b, this.modulus)),
    (this.bkplus1 = new BigInt()),
    (this.bkplus1.digits[this.k + 1] = 1),
    (this.modulo = BarrettMu_modulo),
    (this.multiplyMod = BarrettMu_multiplyMod),
    (this.powMod = BarrettMu_powMod);
}
function BarrettMu_modulo(a) {
  var i,
    b = biDivideByRadixPower(a, this.k - 1),
    c = biMultiply(b, this.mu),
    d = biDivideByRadixPower(c, this.k + 1),
    e = biModuloByRadixPower(a, this.k + 1),
    f = biMultiply(d, this.modulus),
    g = biModuloByRadixPower(f, this.k + 1),
    h = biSubtract(e, g);
  for (h.isNeg && (h = biAdd(h, this.bkplus1)), i = biCompare(h, this.modulus) >= 0; i; )
    (h = biSubtract(h, this.modulus)), (i = biCompare(h, this.modulus) >= 0);
  return h;
}
function BarrettMu_multiplyMod(a, b) {
  var c = biMultiply(a, b);
  return this.modulo(c);
}
function BarrettMu_powMod(a, b) {
  var d,
    e,
    c = new BigInt();
  for (c.digits[0] = 1, d = a, e = b; ; ) {
    if (
      (0 != (1 & e.digits[0]) && (c = this.multiplyMod(c, d)),
      (e = biShiftRight(e, 1)),
      0 == e.digits[0] && 0 == biHighIndex(e))
    )
      break;
    d = this.multiplyMod(d, d);
  }
  return c;
}
var maxDigits,
  ZERO_ARRAY,
  bigZero,
  bigOne,
  dpl10,
  lr10,
  hexatrigesimalToChar,
  hexToChar,
  highBitMasks,
  lowBitMasks,
  biRadixBase = 2,
  biRadixBits = 16,
  bitsPerDigit = biRadixBits,
  biRadix = 65536,
  biHalfRadix = biRadix >>> 1,
  biRadixSquared = biRadix * biRadix,
  maxDigitVal = biRadix - 1,
  maxInteger = 9999999999999998;
setMaxDigits(20),
  (dpl10 = 15),
  (lr10 = biFromNumber(1000000000000000)),
  (hexatrigesimalToChar = new Array(
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  )),
  (hexToChar = new Array(
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
  )),
  (highBitMasks = new Array(
    0,
    32768,
    49152,
    57344,
    61440,
    63488,
    64512,
    65024,
    65280,
    65408,
    65472,
    65504,
    65520,
    65528,
    65532,
    65534,
    65535
  )),
  (lowBitMasks = new Array(
    0,
    1,
    3,
    7,
    15,
    31,
    63,
    127,
    255,
    511,
    1023,
    2047,
    4095,
    8191,
    16383,
    32767,
    65535
  ));
!(function() {
  function a(a) {
    var d,
      e,
      b = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
      c = '';
    for (d = 0; a > d; d += 1)
      (e = Math.random() * b.length), (e = Math.floor(e)), (c += b.charAt(e));
    return c;
  }
  function b(a, b) {
    var c = CryptoJS.enc.Utf8.parse(b),
      d = CryptoJS.enc.Utf8.parse('0102030405060708'),
      e = CryptoJS.enc.Utf8.parse(a),
      f = CryptoJS.AES.encrypt(e, c, {
        iv: d,
        mode: CryptoJS.mode.CBC,
      });
    return f.toString();
  }
  function c(a, b, c) {
    var d, e;
    return setMaxDigits(131), (d = new RSAKeyPair(b, '', c)), (e = encryptedString(d, a));
  }
  function d(d, e, f, g) {
    var h = {},
      // i = a(16);
      i = 'CLdj6QVhWOf3xWZc';
    return (
      (h.encText = b(d, g)), (h.encText = b(h.encText, i)), (h.encSecKey = c(i, e, f)), h
    );
  }
  function e(a, b, d, e) {
    var f = {};
    return (f.encText = c(a + e, b, d)), f;
  }
  (window.asrsea = d), (window.ecnonasr = e);
})();
(function() {
  var c9h = NEJ.P,
    ek0x = c9h('nej.g'),
    v9m = c9h('nej.j'),
    k9b = c9h('nej.u'),
    TM4Q = c9h('nm.x.ek');
  TM4Q.emj = {
    色: '00e0b',
    流感: '509f6',
    这边: '259df',
    弱: '8642d',
    嘴唇: 'bc356',
    亲: '62901',
    开心: '477df',
    呲牙: '22677',
    憨笑: 'ec152',
    猫: 'b5ff6',
    皱眉: '8ace6',
    幽灵: '15bb7',
    蛋糕: 'b7251',
    发怒: '52b3a',
    大哭: 'b17a8',
    兔子: '76aea',
    星星: '8a5aa',
    钟情: '76d2e',
    牵手: '41762',
    公鸡: '9ec4e',
    爱意: 'e341f',
    禁止: '56135',
    狗: 'fccf6',
    亲亲: '95280',
    叉: '104e0',
    礼物: '312ec',
    晕: 'bda92',
    呆: '557c9',
    生病: '38701',
    钻石: '14af6',
    拜: 'c9d05',
    怒: 'c4f7f',
    示爱: '0c368',
    汗: '5b7a4',
    小鸡: '6bee2',
    痛苦: '55932',
    撇嘴: '575cc',
    惶恐: 'e10b4',
    口罩: '24d81',
    吐舌: '3cfe4',
    心碎: '875d3',
    生气: 'e8204',
    可爱: '7b97d',
    鬼脸: 'def52',
    跳舞: '741d5',
    男孩: '46b8e',
    奸笑: '289dc',
    猪: '6935b',
    圈: '3ece0',
    便便: '462db',
    外星: '0a22b',
    圣诞: '8e7',
    流泪: '01000',
    强: '1',
    爱心: '0CoJU',
    女孩: 'm6Qyw',
    惊恐: '8W8ju',
    大笑: 'd',
  };
  TM4Q.md = [
    '色',
    '流感',
    '这边',
    '弱',
    '嘴唇',
    '亲',
    '开心',
    '呲牙',
    '憨笑',
    '猫',
    '皱眉',
    '幽灵',
    '蛋糕',
    '发怒',
    '大哭',
    '兔子',
    '星星',
    '钟情',
    '牵手',
    '公鸡',
    '爱意',
    '禁止',
    '狗',
    '亲亲',
    '叉',
    '礼物',
    '晕',
    '呆',
    '生病',
    '钻石',
    '拜',
    '怒',
    '示爱',
    '汗',
    '小鸡',
    '痛苦',
    '撇嘴',
    '惶恐',
    '口罩',
    '吐舌',
    '心碎',
    '生气',
    '可爱',
    '鬼脸',
    '跳舞',
    '男孩',
    '奸笑',
    '猪',
    '圈',
    '便便',
    '外星',
    '圣诞',
  ];
})();
(function() {
  var c9h = NEJ.P,
    ek0x = c9h('nej.g'),
    v9m = c9h('nej.j'),
    k9b = c9h('nej.u'),
    TM4Q = c9h('nm.x.ek'),
    l9c = c9h('nm.x');
  if (v9m.bn9e.redefine) return;
  window.GEnc = true;
  var buk1x = function(cpA3x) {
    var o9f = [];
    k9b.bd9U(cpA3x, function(cpy3x) {
      o9f.push(TM4Q.emj[cpy3x]);
    });
    return o9f.join('');
  };
  var cpw3x = v9m.bn9e;
  v9m.bn9e = function(Y9P, e9f) {
    var j9a = {},
      e9f = NEJ.X({}, e9f),
      lF3x = Y9P.indexOf('?');
    if (
      window.GEnc &&
      /(^|\.com)\/api/.test(Y9P) &&
      !(e9f.headers && e9f.headers[ek0x.Ak7d] == ek0x.HF0x) &&
      !e9f.noEnc
    ) {
      if (lF3x != -1) {
        j9a = k9b.hy2x(Y9P.substring(lF3x + 1));
        Y9P = Y9P.substring(0, lF3x);
      }
      if (e9f.query) {
        j9a = NEJ.X(j9a, k9b.fH1x(e9f.query) ? k9b.hy2x(e9f.query) : e9f.query);
      }
      if (e9f.data) {
        j9a = NEJ.X(j9a, k9b.fH1x(e9f.data) ? k9b.hy2x(e9f.data) : e9f.data);
      }
      j9a['csrf_token'] = v9m.gB1x('__csrf');
      Y9P = Y9P.replace('api', 'weapi');
      e9f.method = 'post';
      delete e9f.query;
      var bPP6J = window.asrsea(
        JSON.stringify(j9a),
        buk1x(['流泪', '强']),
        buk1x(TM4Q.md),
        buk1x(['爱心', '女孩', '惊恐', '大笑'])
      );
      e9f.data = k9b.cF0x({
        params: bPP6J.encText,
        encSecKey: bPP6J.encSecKey,
      });
    }
    cpw3x(Y9P, e9f);
  };
  v9m.bn9e.redefine = true;
})();
(function() {
  window.setTimeout(function() {
    if (!location.href.match(/^https?:\/\/([a-zA-Z0-9\-]+?\.)*?music\.163\.com($|\/)/gi))
      return;
    var getNode = function(tagName, attrName, attrValue) {
      if (!tagName || !attrName || !attrValue) return null;
      var nodes = document.getElementsByTagName(tagName);
      if (nodes && nodes.length) {
        for (var i = 0, ii = nodes.length; i < ii; i++) {
          if ((nodes[i][attrName] || '').toLowerCase() == attrValue.toLowerCase()) {
            return nodes[i];
          }
        }
      }
      return null;
    };
    var meta = getNode('meta', 'name', 'robots');
    if (meta && (meta.content || '').toLowerCase() == 'nofollow') return;
    var canonicalURL, curProtocol;
    var link = getNode('link', 'rel', 'canonical');
    if (link && link.href) canonicalURL = link.href;
    if (!canonicalURL) {
      curProtocol = location.protocol.split(':')[0];
    } else {
      curProtocol = canonicalURL.split(':')[0];
    }
    if (!canonicalURL) canonicalURL = location.href;
    var pushHref =
      String(curProtocol).toLowerCase() === 'https'
        ? 'https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif'
        : '//api.share.baidu.com/s.gif';
    var params = [];
    if (document.referrer) {
      params.push('r=' + encodeURIComponent(document.referrer));
    }
    params.push('l=' + encodeURIComponent(canonicalURL));
    new Image().src = pushHref + '?' + params.join('&');
  }, 3000);
})();
(function() {})();
(function() {})();
(function() {
  var c9h = NEJ.P,
    a8i = c9h('nej.e'),
    dw0x = c9h('nej.p'),
    k9b = c9h('nej.u'),
    h9c = c9h('nej.v'),
    v9m = c9h('nej.j'),
    dD0x = c9h('nm.u'),
    l9c = c9h('nm.x'),
    q9h = c9h('nm.d'),
    m9d = c9h('nm.l'),
    cC0x = c9h('nm.pc'),
    buJ1x = 'http://s1.music.126.net/style/web2/emt/emoji_{ID}.png',
    j9a = {
      大笑: '86',
      可爱: '85',
      憨笑: '359',
      色: '95',
      亲亲: '363',
      惊恐: '96',
      流泪: '356',
      亲: '362',
      呆: '352',
      哀伤: '342',
      呲牙: '343',
      吐舌: '348',
      撇嘴: '353',
      怒: '361',
      奸笑: '341',
      汗: '97',
      痛苦: '346',
      惶恐: '354',
      生病: '350',
      口罩: '351',
      大哭: '357',
      晕: '355',
      发怒: '115',
      开心: '360',
      鬼脸: '94',
      皱眉: '87',
      流感: '358',
      爱心: '33',
      心碎: '34',
      钟情: '303',
      星星: '309',
      生气: '314',
      便便: '89',
      强: '13',
      弱: '372',
      拜: '14',
      牵手: '379',
      跳舞: '380',
      禁止: '374',
      这边: '262',
      爱意: '106',
      示爱: '376',
      嘴唇: '367',
      狗: '81',
      猫: '78',
      猪: '100',
      兔子: '459',
      小鸡: '450',
      公鸡: '461',
      幽灵: '116',
      圣诞: '411',
      外星: '101',
      钻石: '52',
      礼物: '107',
      男孩: '0',
      女孩: '1',
      蛋糕: '337',
      18: '186',
      圈: '312',
      叉: '313',
    },
    cpi3x = function() {
      if (h9c && h9c.z9q) {
        h9c.dispatchEventalias = h9c.z9q;
      }
    };
  cpi3x();
  l9c.buL1x = function(bN0x) {
    if (!bN0x || bN0x.copyrightId === undefined || !!bN0x.program) return false;
    if (window.GAbroad) {
      bN0x.fee = 0;
      return true;
    }
    if (bN0x.status < 0) return true;
    var TE4I;
    if (typeof GCopyrights !== 'undefined') TE4I = GCopyrights;
    try {
      if (!TE4I && !!top.GCopyrights) TE4I = top.GCopyrights;
    } catch (e) {}
    if (TE4I) {
      var r9i = k9b.di0x(TE4I, bN0x.copyrightId);
      if (r9i >= 0) return true;
    }
    return false;
  };
  l9c.buQ1x = (function() {
    var BD8v = /^\/m\/(song|album|artist|playlist|dj|search)\?/,
      wd6X = {
        2: 'artist',
        13: 'playlist',
        17: 'dj',
        19: 'album',
        18: 'song',
        31: 'toplist',
        32: 'searchsong',
        33: 'searchlyric',
        34: 'event',
        70: 'djradio',
        24: 'day',
        50: 'record',
      },
      cpa3x = {
        song: '单曲',
        album: '专辑',
        artist: '歌手',
        playlist: '歌单',
        dj: '电台节目',
        searchsong: '单曲搜索',
        searchlyric: '歌词搜索',
        toplist: '榜单',
        event: '动态',
        djradio: '电台',
        day: '每日歌曲推荐',
        record: '听歌排行榜',
      };
    var coY3x = function(J9A, j9a, Tx4B) {
      switch (J9A) {
        case 'event':
          j9a = j9a.split('|');
          return '/event?id=' + j9a[0] + '&uid=' + j9a[1];
        case 'searchsong':
        case 'searchlyric':
          var u9l = J9A == 'searchsong' ? 1 : 1006;
          return '/search/m/?s=' + encodeURIComponent(j9a) + '&type=' + u9l;
        case 'toplist':
          return '/discover/toplist?id=' + j9a + '&_hash=songlist-' + Tx4B;
        case 'day':
          return '/discover/recommend/taste' + '?_hash=songlist-' + Tx4B;
        case 'record':
          j9a = j9a.split('|');
          return '/user/songs/rank?id=' + j9a[0] + '&cat=' + j9a[1];
          break;
        default:
          return '/' + J9A + '?id=' + j9a + '&_hash=songlist-' + Tx4B;
      }
    };
    return function(eb0x, Tx4B) {
      if (!eb0x) return null;
      var ML1x = eb0x.fid || (eb0x.type != 18 ? eb0x.type : null),
        bvk1x = eb0x.fdata || eb0x.rid,
        bPD6x = eb0x.page || eb0x.fhref;
      var J9A = wd6X[ML1x];
      if (!J9A) {
        var yz7s = (bPD6x || '').match(BD8v);
        if (yz7s) J9A = yz7s[1];
      }
      if (!J9A) return null;
      return {
        title: cpa3x[J9A],
        link: !wd6X[ML1x] ? bPD6x : coY3x(J9A, bvk1x, Tx4B),
        fid: ML1x,
        fdata: bvk1x,
      };
    };
  })();
  l9c.WV5a = function(ke3x) {
    var do0x = ke3x;
    if (typeof GUser !== 'undefined' && GUser.userId > 0) do0x = GUser;
    return do0x;
  };
  l9c.gM2x = function() {
    if (typeof GUser !== 'undefined' && GUser.userId > 0) {
      return true;
    } else {
      top.login();
      return false;
    }
  };
  l9c.Me1x = (function() {
    var BD8v = /#(.*?)$/;
    return function(gz1x) {
      var jx2x = gz1x === false ? location : top.location;
      return BD8v.test(jx2x.href) ? RegExp.$1 : '';
    };
  })();
  l9c.Bj8b = function() {
    var Bc8U = a8i.dh0x('audio'),
      coI3x = Bc8U.canPlayType && Bc8U.canPlayType('audio/mpeg');
    if (coI3x) return 2;
    var coF3x = l9c.bvV2x().supported;
    if (coF3x) return 1;
    return 0;
  };
  l9c.bvV2x = function() {
    var gm1x,
      bwb2x = !1,
      bwd2x = '';
    if (dw0x.ds0x.browser == 'ie') {
      try {
        gm1x = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
      } catch (e) {
        gm1x = null;
      }
      if (gm1x) {
        bwb2x = !0;
        bwd2x = gm1x.GetVariable('$version');
      }
    } else {
      if (navigator.plugins && navigator.plugins.length > 0) {
        gm1x = navigator.plugins['Shockwave Flash'];
        if (gm1x) {
          bwb2x = !0;
          bwd2x = gm1x.description;
        }
      }
    }
    return {
      supported: bwb2x,
      version: bwd2x,
    };
  };
  l9c.sd5i = function() {
    return '网易云音乐';
  };
  l9c.coA3x = function() {
    return j9a;
  };
  l9c.bPy6s = function(cH0x) {
    var C9t = j9a[cH0x];
    return C9t == null ? '' : buJ1x.replace('{ID}', C9t);
  };
  l9c.wY6S = function(bo9f, dZ0x, AY8Q) {
    if (!bo9f) return '';
    if (!!AY8Q) {
      bo9f = l9c.cow3x(bo9f);
    }
    return l9c.WZ5e(l9c.com3x(bo9f, dZ0x));
  };
  l9c.Xa5f = (function() {
    var Up4t = {
        AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))/g,
        LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g,
        ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g,
        ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g,
        LING: /\n/g,
        BLANK: /\s/g,
        MLINE: /([ \f\r\t\v]*\n){2,}/g,
      },
      bwH2x = {
        LINK: '<a href="${url}" class="${klass}">${value}</a>',
        AT: '<a href="${url}" class="${klass}">@${value}</a>',
        ACT:
          '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>',
      },
      col3x = {
        r: /\<|\>|\&lt;|\&gt;|\&|\'|\"/g,
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        ' ': '&nbsp;',
        '"': '&quot;',
        "'": '&#39;',
        '&lt;': '&lt;',
        '&gt;': '&gt;',
      },
      coi3x = ['AT', 'LINK', 'ACT_NOLINK', 'ACT'];
    var cnU3x = function(dI0x, bxo2x) {
      dI0x = LY1x(dI0x);
      if (!!bxo2x) {
        dI0x = dI0x.replace(Up4t.MLINE, '\n\n').replace(Up4t.LING, '</br>');
      }
      dI0x = l9c.WZ5e(dI0x);
      return dI0x;
    };
    var LY1x = function(bo9f) {
      return k9b.Ch8Z(col3x, bo9f);
    };
    return function(dI0x, e9f, dC0x) {
      e9f = e9f || {};
      dC0x = dC0x || {};
      dC0x.actHash = {};
      var cnO3x = !!e9f.parseLink,
        cnN3x = !!e9f.parseAct,
        cnL3x = e9f.linkTpl || bwH2x.LINK,
        cnJ3x = e9f.atTpl || bwH2x.AT,
        cnI3x = e9f.atUrl || '/user/home?nickname=',
        cnH3x = e9f.actTpl || bwH2x.ACT,
        bxo2x = !!e9f.keepSpace,
        bfu8m = e9f.linkKlass || 's-fc7';
      cFw7p = e9f.actBiJson || '';
      if (!dI0x) return '';
      dI0x = dI0x
        .trim()
        .replace(/&amp;/g, '&')
        .replace(/&nbsp;/g, ' ');
      var lM3x = coi3x[cnO3x + 2 * cnN3x],
        df0x = Up4t[lM3x],
        bs9j = null,
        jS2x = null,
        gq1x = 0,
        cFx7q = '',
        cFz7s = '';
      var ql4p = [];
      df0x.lastIndex = 0;
      while ((bs9j = df0x.exec(dI0x))) {
        var dO0x = {
          html: '',
          before: bs9j.index - 1,
          after: bs9j.index + bs9j[0].length,
        };
        if (bs9j[1]) {
          var jS2x = bs9j[2].replace(/[^\x00-\xff]/g, '**');
          if (jS2x.length < 4 || jS2x.length > 32) {
          } else {
            var DZ9Q = a8i.ex0x(cnJ3x);
            dO0x.html = a8i.bZ0x(DZ9Q, {
              value: LY1x(bs9j[2]),
              url: encodeURI(cnI3x + bs9j[2]),
              klass: bfu8m,
            });
            ql4p.push(dO0x);
          }
        } else if (bs9j.length > 8 && bs9j[4]) {
          var DZ9Q = a8i.ex0x(cnL3x);
          dO0x.html = a8i.bZ0x(DZ9Q, {
            value: LY1x(bs9j[4]),
            url: bs9j[4],
            klass: bfu8m,
          });
          ql4p.push(dO0x);
        } else {
          var bPe6Y = lM3x == 'ACT_NOLINK' ? 4 : 9;
          var DZ9Q = a8i.ex0x(cnH3x);
          dO0x.html = a8i.bZ0x(DZ9Q, {
            value: LY1x(bs9j[bPe6Y]),
            klass: bfu8m,
          });
          ql4p.push(dO0x);
          dC0x.actHash[bs9j[bPe6Y].slice(1, -1)] = true;
        }
      }
      var bfV8N = ql4p.length,
        ke3x = {
          before: dI0x.length - 1,
          after: 0,
        },
        bfW8O = '';
      for (var i = 0; i <= bfV8N; i++) {
        var hC2x, fT1x;
        hC2x = (ql4p[i - 1] || ke3x).after;
        fT1x = (ql4p[i] || ke3x).before;
        if (fT1x >= hC2x && hC2x >= 0 && fT1x <= dI0x.length - 1) {
          bfW8O += cnU3x(dI0x.substring(hC2x, fT1x + 1), bxo2x);
        }
        if (ql4p[i]) {
          bfW8O += ql4p[i].html;
        }
      }
      return bfW8O;
    };
  })();
  l9c.cow3x = (function() {
    var df0x = new RegExp(
      '(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?',
      'g'
    );
    return function(bo9f) {
      return (bo9f || '')
        .replace(/&amp;/g, '&')
        .replace(/&nbsp;/g, ' ')
        .replace(df0x, function($0, $1) {
          return (
            '<a href=' +
            $0 +
            ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>'
          );
        });
    };
  })();
  l9c.com3x = (function() {
    var df0x = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
    var ew0x = function(jS2x, dZ0x) {
      return (
        '<a href="/user/home?nickname=' +
        encodeURIComponent(jS2x) +
        '" class="' +
        (dZ0x || '') +
        '">@' +
        jS2x +
        '</a>'
      );
    };
    return function(bo9f, dZ0x) {
      return (bo9f || '').replace(df0x, function($0, $1) {
        return ew0x($1, dZ0x);
      });
    };
  })();
  l9c.WZ5e = (function() {
    var df0x = /\[(.*?)\]/g;
    return function(bo9f) {
      return (bo9f || '').replace(df0x, function($1, $2) {
        var Y9P = l9c.bPy6s($2);
        return !Y9P ? $1 : '<img src="' + Y9P + '"/>';
      });
    };
  })();
  l9c.Cy8q = function(F9w, dZ0x) {
    a8i.bE0x(F9w, dZ0x) ? a8i.x9o(F9w, dZ0x) : a8i.y9p(F9w, dZ0x);
  };
  l9c.LT1x = function(cP0x, kH3x) {
    cP0x = a8i.B9s(cP0x);
    kH3x = a8i.B9s(kH3x);
    if (!cP0x || !kH3x) return !1;
    for (kH3x = kH3x.parentNode; !!kH3x && kH3x != cP0x; kH3x = kH3x.parentNode);
    return kH3x == cP0x;
  };
  l9c.lt3x = (function() {
    var bPd6X = function(gS2x) {
      return (gS2x < 10 ? '0' : '') + gS2x;
    };
    return function(kV3x) {
      kV3x = parseInt(kV3x) || 0;
      if (!kV3x) return '00:00';
      var yJ7C = Math.floor(kV3x % 60),
        cns3x = Math.floor(kV3x / 60);
      return bPd6X(cns3x) + ':' + bPd6X(yJ7C);
    };
  })();
  l9c.yK7D = function(fS1x, wL6F) {
    if (!fS1x || fS1x.length == 0) return '';
    wL6F = wL6F || '/';
    var bs9j = [];
    for (var i = fS1x.length - 1; i >= 0; i--) {
      bs9j.unshift(fS1x[i].name);
    }
    return bs9j.join(wL6F);
  };
  l9c.rM5R = (function() {
    var SS4W = function(if2x, dZ0x, cP0x, Xk5p) {
      var ew0x = Xk5p ? l9c.bgs8k : k9b.dH0x;
      if (!if2x || !if2x.name) return '';
      if (!if2x.id) return '<span class="' + dZ0x + '">' + ew0x(if2x.name) + '</span>';
      return (
        '<a' +
        (cP0x ? ' target="_blank"' : '') +
        ' class="' +
        dZ0x +
        '" href="/artist?id=' +
        if2x.id +
        '" hidefocus="true">' +
        ew0x(if2x.name) +
        '</a>'
      );
    };
    return function(fS1x, V9M, wL6F, cP0x, bPc6W, Xk5p) {
      if (!fS1x || !fS1x.length) return '';
      wL6F = wL6F || '/';
      V9M = V9M || '';
      LR1x = '';
      var eo0x = [];
      for (var i = 0, i9b = [], ti5n = [], fI1x; i < fS1x.length; ++i) {
        eo0x.push(fS1x[i].name);
        if (!fS1x[i] || fS1x[i].id <= 0) {
          ti5n.push(fS1x[i]);
          continue;
        }
        if (k9b.gJ2x(V9M)) {
          fI1x = V9M(fS1x[i]);
        } else {
          fI1x = SS4W(fS1x[i], V9M, cP0x, Xk5p);
        }
        if (fI1x && bPc6W && fS1x[i].tns && fS1x[i].tns.length > 0) {
          LR1x = k9b.dH0x(fS1x[i].tns[0]);
          fI1x += '<span class="s-fc8" title="' + LR1x + '"> - (' + LR1x + ')</span>';
        }
        !!fI1x && i9b.push(fI1x);
      }
      for (var i = 0, fI1x; i < ti5n.length; ++i) {
        if (k9b.gJ2x(V9M)) {
          fI1x = V9M(ti5n[i]);
        } else {
          fI1x = SS4W(ti5n[i], V9M, cP0x, Xk5p);
        }
        if (fI1x && bPc6W && ti5n[i].tns && ti5n[i].tns.length > 0) {
          LR1x = k9b.dH0x(ti5n[i].tns[0]);
          fI1x += '<span class="s-fc8" title="' + LR1x + '"> - (' + LR1x + ')</span>';
        }
        !!fI1x && i9b.push(fI1x);
      }
      return '<span title="' + eo0x.join(wL6F) + '">' + i9b.join(wL6F) + '</span>';
    };
  })();
  l9c.yP7I = function(fx1x, qc4g) {
    qc4g = qc4g || '86';
    return !!fx1x && (qc4g == '86' ? /^\d{11}$/ : /^\d+$/).test(fx1x);
  };
  l9c.cFA7t = function(fx1x) {
    if (!l9c.yP7I(fx1x)) return fx1x;
    return fx1x.substring(0, 3) + '****' + fx1x.substr(7);
  };
  l9c.jT2x = (function() {
    var df0x = /^\s+$/g;
    return function(ih2x) {
      return !ih2x || df0x.test(ih2x);
    };
  })();
  l9c.SM4Q = (function() {
    var bgU8M = /[^\x00-\xfff]/g;
    return function(ih2x) {
      var cnf3x = ih2x.match(bgU8M) || [],
        dr0x = cnf3x.length;
      return ih2x.length + dr0x;
    };
  })();
  l9c.Co8g = (function() {
    var bgU8M = /[^\x00-\xfff]/;
    return function(ih2x, eG0x) {
      for (var i = 0, len = ih2x.length; i < len && eG0x > 0; i++) {
        if (bgU8M.test(ih2x.charAt(i))) {
          eG0x -= 2;
          if (eG0x < 0) {
            break;
          }
        } else {
          eG0x -= 1;
        }
      }
      return ih2x.substring(0, i);
    };
  })();
  l9c.Cj8b = function(ih2x, eG0x, SL4P) {
    eG0x = eG0x || 10;
    SL4P = SL4P || (nej.p.ds0x.engine == 'trident' && parseInt(nej.p.ds0x.release) < 5);
    if (SL4P && l9c.SM4Q(ih2x) > eG0x) {
      return l9c.Co8g(ih2x, eG0x) + '...';
    } else {
      return ih2x;
    }
  };
  l9c.bOZ6T = function(f9e) {
    return (
      f9e === document.activeElement &&
      (!document.hasFocus || document.hasFocus()) &&
      !!(f9e.type || f9e.href || ~f9e.tabIndex)
    );
  };
  l9c.cmS3x = function(d9g, cP0x) {
    if (!d9g || !cP0x) return !0;
    var f9e,
      u9l = d9g.type.toLowerCase();
    if (u9l == 'mouseout') {
      f9e = d9g.relatedTarget || d9g.toElement;
    } else if (u9l == 'mouseover') {
      f9e = d9g.relatedTarget || d9g.fromElement;
    }
    return !f9e || (f9e !== cP0x && !l9c.LT1x(cP0x, f9e));
  };
  l9c.tp5u = (function() {
    R9I = {};
    return function(f9e, ec0x) {
      var C9t = a8i.lw3x(f9e),
        J9A = 'hover-' + C9t;
      if (!ec0x || !C9t || !!R9I[J9A]) return;
      R9I[J9A] = !0;
      h9c.s9j(C9t, 'mouseover', function() {
        var bho8g = a8i.H9y(f9e, 'hshow') || [];
        var bhp8h = a8i.H9y(f9e, 'icn-dislike') || [];
        a8i.y9p(C9t, 'z-hover');
        a8i.ba9R(bho8g[0], 'display', 'block');
        a8i.ba9R(bhp8h[0], 'display', 'block');
      });
      h9c.s9j(C9t, 'mouseout', function() {
        var bho8g = a8i.H9y(f9e, 'hshow') || [];
        var bhp8h = a8i.H9y(f9e, 'icn-dislike') || [];
        a8i.x9o(C9t, 'z-hover');
        a8i.ba9R(bho8g[0], 'display', 'none');
        a8i.ba9R(bhp8h[0], 'display', 'none');
      });
    };
  })();
  l9c.bOV6P = (function() {
    var bz0x = {
      r: /\(|\)|\[|\]|\{|\}|\*|\+|\^|\$|\?|\!|\\|\||\./gi,
      '(': '\\(',
      ')': '\\)',
      '[': '\\[',
      ']': '\\]',
      '{': '\\{',
      '}': '\\}',
      '*': '\\*',
      '+': '\\+',
      '^': '\\^',
      $: '\\$',
      '?': '\\?',
      '!': '\\!',
      '\\': '\\\\',
      '|': '\\|',
      '.': '\\.',
    };
    return function(ih2x) {
      return k9b.Ch8Z(bz0x, ih2x);
    };
  })();
  l9c.yR7K = function(bA0x) {
    if (k9b.Ew9n(bA0x)) bA0x = bA0x.getTime();
    var eV1x = new Date(),
      ks3x = eV1x.getTime() - bA0x;
    if (ks3x <= 60000) return '刚刚';
    var na3x =
      eV1x.getHours() * 3600000 + eV1x.getMinutes() * 60000 + eV1x.getSeconds() * 1000;
    if (ks3x <= na3x) {
      if (ks3x < 3600000) {
        var EW9N = Math.floor(ks3x / 60000);
        return EW9N + '分钟前';
      }
      return k9b.id2x(bA0x, 'HH:mm');
    } else {
      if (ks3x < na3x + 86400000) {
        return '昨天' + k9b.id2x(bA0x, 'HH:mm');
      } else {
        var gL2x = eV1x.getFullYear(),
          SF4J = new Date(gL2x, 0, 1);
        var na3x = eV1x.getTime() - SF4J.getTime();
        if (ks3x < na3x) {
          return k9b.id2x(bA0x, 'M月d日 HH:mm');
        }
        return k9b.id2x(bA0x, 'yyyy年M月d日');
      }
    }
  };
  l9c.cmM3x = function(bA0x) {
    if (k9b.Ew9n(bA0x)) bA0x = bA0x.getTime();
    var eV1x = new Date(),
      ks3x = eV1x.getTime() - bA0x;
    var na3x =
      eV1x.getHours() * 3600000 + eV1x.getMinutes() * 60000 + eV1x.getSeconds() * 1000;
    if (ks3x <= na3x) {
      return '今天' + k9b.id2x(bA0x, 'HH:mm');
    } else {
      if (ks3x < na3x + 86400000) {
        return '昨天' + k9b.id2x(bA0x, 'HH:mm');
      } else {
        return k9b.id2x(bA0x, 'yy-MM-dd HH:mm');
      }
    }
  };
  l9c.cmL3x = function(bA0x) {
    if (k9b.Ew9n(bA0x)) bA0x = bA0x.getTime();
    var eV1x = new Date(),
      ks3x = eV1x.getTime() - bA0x;
    if (ks3x <= 60000) return '刚刚';
    var na3x =
      eV1x.getHours() * 3600000 + eV1x.getMinutes() * 60000 + eV1x.getSeconds() * 1000;
    if (ks3x <= na3x) {
      if (ks3x < 3600000) {
        var EW9N = Math.floor(ks3x / 60000);
        return EW9N + '分钟前';
      }
      return k9b.id2x(bA0x, 'HH:mm');
    } else {
      if (ks3x < na3x + 86400000) {
        return '昨天' + k9b.id2x(bA0x, 'HH:mm');
      } else if (ks3x < na3x + 86400000 * 6) {
        var gL2x = eV1x.getFullYear(),
          SF4J = new Date(gL2x, 0, 1);
        var na3x = eV1x.getTime() - SF4J.getTime();
        if (ks3x < na3x) {
          return k9b.id2x(bA0x, 'M月d日 HH:mm');
        }
        return k9b.id2x(bA0x, 'yyyy年M月d日');
      } else {
        return '最近';
      }
    }
  };
  l9c.XB5G = (function() {
    var df0x = /\{(.*?)\}/gi;
    return function(pe4i, j9a) {
      return (pe4i || '').replace(df0x, function($1, $2) {
        var D9u = j9a[$2];
        return D9u == null ? $1 : D9u;
      });
    };
  })();
  l9c.fl1x = function() {
    var bf9W = Array.prototype.slice.call(arguments, 0),
      pe4i = bf9W.shift();
    if (pe4i) {
      return pe4i.replace(/{(\d+)}/g, function($1, $2) {
        return $2 < bf9W.length ? bf9W[$2] : $1;
      });
    }
    return '';
  };
  l9c.LK1x = function(i9b, dZ0x, kg3x) {
    return '';
    kg3x = kg3x || ' - ';
    if (i9b && i9b.length) {
      return (
        kg3x + (!!dZ0x ? '<span class="' + dZ0x + '">' + i9b[0] + '</span>' : i9b[0])
      );
    }
    return '';
  };
  l9c.bOT6N = function() {
    if (window.getSelection) {
      var sA5F = window.getSelection();
      if (sA5F && sA5F.focusNode && sA5F.focusNode.tagName) {
        var BG8y = a8i.dj0x(sA5F.focusNode);
        for (var i = 0, yX7Q; i < BG8y.length; ++i) {
          yX7Q = BG8y[i].tagName;
          if (!yX7Q) continue;
          yX7Q = yX7Q.toLowerCase();
          if (yX7Q == 'textarea' || yX7Q == 'input') return !0;
        }
      }
    } else if (document.selection) {
      var dc0x = document.selection.createRange();
      if (dc0x) {
        var f9e = dc0x.parentElement();
        if (f9e && f9e.tagName) {
          var yX7Q = f9e.tagName.toLowerCase();
          if (yX7Q == 'textarea' || yX7Q == 'input') return !0;
        }
      }
    }
    return !1;
  };
  l9c.Bn8f = function(fE1x) {
    if (/^[A-Z]\:\\/i.test(fE1x)) {
      fE1x = fE1x.split('\\');
    } else {
      fE1x = fE1x.split('/');
    }
    fE1x = fE1x[fE1x.length - 1];
    return fE1x;
  };
  l9c.cmH3x = (function() {
    var Fw9n = [13, 17, 34, 19, 18, 21];
    return function(C9t) {
      var bs9j = (C9t || '').split('_');
      return {
        type: Fw9n[bs9j[2]] || -1,
        id: bs9j[3] || '',
      };
    };
  })();
  l9c.bOO6I = function(gm1x) {
    if (!gm1x) {
      return true;
    }
    for (var k in gm1x) {
      return false;
    }
    return true;
  };
  l9c.bie8W = function(do0x) {
    if (!do0x) {
      return '';
    }
    if (4 == do0x.userType) {
      return '<sup class="icn u-icn2 u-icn2-music2"></sup>';
    } else if (do0x.authStatus == 1) {
      return '<sup class="u-icn u-icn-1"></sup>';
    } else if ((do0x.expertTags && do0x.expertTags.length) || !l9c.bOO6I(do0x.experts)) {
      return '<sup class="u-icn u-icn-84"></sup>';
    }
  };
  l9c.Sr4v = function(hK2x) {
    if (!hK2x) return '';
    var dr0x = hK2x.length,
      il2x = [];
    il2x[0] = (dr0x / 3) | 0;
    il2x[1] = il2x[0] + (((dr0x - il2x[0]) / 2) | 0);
    return (
      hK2x.substring(0, il2x[0]) +
      hK2x.substring(il2x[0], il2x[1]).replace(/\d/g, '*') +
      hK2x.substring(il2x[1], dr0x)
    );
  };
  l9c.cFB7u = function(r9i, cz0x) {
    return (r9i % cz0x + cz0x) % cz0x;
  };
  l9c.bit8l = (function() {
    var Fw9n = {
      0: 'playlist',
      1: 'program',
      2: 'event',
      3: 'album',
      4: 'song',
      5: 'mv',
      6: 'topic',
      62: 'video',
    };
    return function(C9t) {
      var bs9j = (C9t || '').split('_'),
        o9f = {
          type: Fw9n[bs9j[2]] || -1,
          id: bs9j[3] || '',
        };
      if (o9f.type == 'event') {
        o9f.uid = bs9j[4] || '';
        return '/' + o9f.type + '?id=' + o9f.id + '&uid=' + o9f.uid;
      }
      return '/' + o9f.type + '?id=' + o9f.id;
    };
  })();
  l9c.bnQ0x = (function() {
    var Fw9n = {
      0: '歌单',
      1: '电台节目',
      2: '动态',
      3: '专辑',
      4: '单曲',
      5: 'MV',
      6: '专栏文章',
      62: '视频',
    };
    return function(C9t) {
      var bs9j = (C9t || '').split('_');
      return Fw9n[bs9j[2]] || '资源';
    };
  })();
  l9c.cmr3x = function(bv9m) {
    var qs = bv9m.length > 0 ? bv9m.substring(1) : '',
      args = {},
      items = qs.length ? qs.split('&') : [],
      item = null,
      name = null,
      value = null,
      i = 0,
      len = items.length;
    for (i = 0; i < len; i++) {
      item = items[i].split('=');
      name = decodeURIComponent(item[0]);
      value = decodeURIComponent(item[1]);
      if (name.length) {
        args[name] = value;
      }
    }
    return args;
  };
  l9c.biB8t = function(oo4s, Sp4t) {
    var XD5I = 0,
      ev0x = new Array();
    k9b.bd9U(oo4s, function(Y9P, r9i) {
      var cw0x = a8i.dh0x('img');
      cw0x.src = Y9P;
      h9c.s9j(
        cw0x,
        'load',
        function(r9i, d9g) {
          ev0x[r9i] = 1;
          XD5I++;
          if (XD5I == oo4s.length) Sp4t(oo4s, ev0x);
        }.g9d(this, r9i)
      );
      h9c.s9j(
        cw0x,
        'error',
        function(d9g, r9i) {
          ev0x[r9i] = 0;
          XD5I++;
          if (XD5I == oo4s.length) Sp4t(oo4s, ev0x);
        }.g9d(this, r9i)
      );
    });
  };
  l9c.LJ1x = function(i9b, dW0x) {
    var o9f = [];
    k9b.bd9U(i9b, function(p9g, r9i, P9G) {
      o9f.push(dW0x(p9g, r9i, P9G));
    });
    return o9f;
  };
  l9c.Zh6b = function(i9b, dW0x, P9G) {
    var o9f = [];
    k9b.bd9U(i9b, function(p9g, r9i) {
      if (dW0x.call(P9G, p9g, r9i, i9b)) {
        o9f.push(p9g);
      }
    });
    return o9f;
  };
  l9c.bOA6u = function(bo9f) {
    return k9b.dH0x((bo9f || '').replace(/\s{2,}/g, ' ').trim());
  };
  var cmk3x = {
    r: /\<|\>/g,
    '<': '&lt;',
    '>': '&gt;',
  };
  l9c.cmj3x = function(bo9f) {
    return k9b.Ch8Z(cmk3x, bo9f);
  };
  l9c.biS8K = function(bj9a) {
    if (bj9a.transNames && bj9a.transNames.length) {
      return bj9a.transNames[0];
    } else if (bj9a.alias && bj9a.alias.length) {
      return bj9a.alias[0];
    }
  };
  l9c.biT8L = function(UA4E) {
    if (UA4E) {
      return UA4E.replace(/\n{2,}/g, '<br/><br/>')
        .replace(/\n/g, '<br/>')
        .replace(/(<br\/?>){2,}/g, '<br/><br/>');
    }
  };
  l9c.biV8N = function(f9e) {
    var f9e = a8i.B9s(f9e),
      cH0x = f9e && f9e.getElementsByTagName('textarea')[0],
      J9A = a8i.t9k(f9e, 'key'),
      biX8P = a8i.t9k(f9e, 'simple') == '1',
      cmi3x = a8i.t9k(f9e, 'pvnamed') == '1',
      cme3x = q9h.xm7f.gt1x();
    if (!(f9e && cH0x && J9A)) return;
    var XI5N, bjg8Y, XJ5O;
    XI5N = a8i.H9y(a8i.B9s('m-playlist'), 'j-img');
    k9b.bd9U(XI5N, function(iX2x) {
      if (!XJ5O && a8i.t9k(iX2x, 'key')) {
        XJ5O = a8i.t9k(iX2x, 'key');
        iX2x.removeAttribute('data-key');
      }
    });
    XI5N = a8i.H9y(a8i.B9s('m-playlist'), 'm-info');
    k9b.bd9U(XI5N, function(iX2x) {
      if (!bjg8Y && iX2x.id && iX2x.id.indexOf('auto-id-') == 0) {
        bjg8Y = iX2x.id.slice(8, 12);
      }
    });
    var D9u = cH0x.value || cH0x.defaultValue;
    if (XJ5O) {
      D9u = decodeURIComponent(k9b.cmd3x(D9u, 'param=' + bjg8Y + XJ5O));
    }
    D9u = JSON.parse(D9u);
    if (cmi3x) {
      l9c.cmc3x(D9u);
    }
    if (biX8P) {
      D9u = l9c.EQ9H(D9u);
    }
    cme3x.vd6X(J9A, D9u);
    f9e.innerHTML = '';
    return J9A;
  };
  l9c.cmb3x = function(pA4E) {
    if (!pA4E.onbeforelistload) {
      pA4E.onbeforelistload = function(d9g) {
        d9g.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>';
      };
    }
    if (!pA4E.onemptylist) {
      pA4E.onemptylist = function(d9g) {
        d9g.value =
          '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' +
          (pA4E.emptyMsg || '暂时还没有数据') +
          '</h3></div>';
      };
    }
    return pA4E;
  };
  l9c.cmc3x = function(hD2x) {
    k9b.bd9U(hD2x, function(bN0x) {
      bN0x.privilege = bN0x.pv;
      delete bN0x.pv;
    });
  };
  l9c.EQ9H = function(io2x) {
    if (k9b.eI0x(io2x)) {
      var dC0x = [];
      k9b.bd9U(io2x, function(biX8P) {
        dC0x.push(bOx6r(biX8P));
      });
      return dC0x;
    } else {
      return bOx6r(io2x);
    }
    function bOx6r(io2x) {
      if (!io2x) return null;
      var dC0x = {
        album: io2x.al,
        alias: io2x.alia || io2x.ala || [],
        artists: io2x.ar || [],
        commentThreadId: 'R_SO_4_' + io2x.id,
        copyrightId: io2x.cp || 0,
        duration: io2x.dt || 0,
        id: io2x.id,
        mvid: io2x.mv || 0,
        name: io2x.name || '',
        cd: io2x.cd,
        position: io2x.no || 0,
        ringtone: io2x.rt,
        rtUrl: io2x.rtUrl,
        status: io2x.st || 0,
        pstatus: io2x.pst || 0,
        fee: io2x.fee || 0,
        version: io2x.v || 0,
        eq: io2x.eq,
        songType: io2x.t || 0,
        mst: io2x.mst,
        score: io2x.pop || 0,
        ftype: io2x.ftype,
        rtUrls: io2x.rtUrls,
        transNames: io2x.tns,
        privilege: io2x.privilege,
        lyrics: io2x.lyrics,
      };
      return dC0x;
    }
  };
  l9c.cFC7v = function() {
    var f9e = a8i.nI4M(
      '<div class="u-mask u-mask-light"></div>' +
        '<div class="m-opentip">' +
        '<div class="lay">' +
        '<div class="note">' +
        '<h3>分享打不开？</h3>' +
        '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' +
        '</div></div></div>'
    );
    document.body.appendChild(f9e);
    h9c.s9j(f9e, 'click', function(d9g) {
      h9c.bh9Y(d9g);
      a8i.cJ0x(f9e);
    });
  };
  l9c.iI2x = function(cx0x) {
    if (cx0x < 100000) {
      return cx0x;
    } else if (cx0x < 100000000) {
      return Math.floor(cx0x / 1000) / 10 + '万';
    } else {
      return Math.floor(cx0x / 10000000) / 10 + '亿';
    }
  };
  l9c.uP6J = function(cx0x, cH0x) {
    return '<i>' + (cx0x ? '(' + cx0x + ')' : cH0x) + '</i>';
  };
  l9c.bOv6p = function(u9l, hX2x) {
    var e9f = {};
    if (!k9b.lO3x(hX2x)) {
      return e9f;
    }
    switch (parseInt(u9l)) {
      case 17:
        e9f.title = hX2x.name;
        e9f.author = (hX2x.radio || []).name;
        e9f.picUrl = hX2x.coverUrl;
        e9f.category = hX2x.radio.category;
        break;
      case 19:
        e9f.title = hX2x.name;
        e9f.author = l9c.yK7D(hX2x.artists);
        e9f.authors = l9c.yK7D(hX2x.artists, ' / ');
        e9f.picUrl = hX2x.picUrl;
        break;
      case 13:
        e9f.title = hX2x.name;
        e9f.author = (hX2x.creator || []).nickname;
        e9f.picUrl = hX2x.coverImgUrl;
        break;
      case 18:
        e9f.title = hX2x.name;
        e9f.author = l9c.yK7D(hX2x.artists);
        e9f.picUrl = (hX2x.album || []).picUrl;
        break;
      case 20:
        e9f.title = hX2x.name;
        e9f.author = '';
        e9f.picUrl = hX2x.img1v1Url;
        break;
      case 21:
        e9f.title = hX2x.name;
        e9f.author = hX2x.artistName;
        e9f.authors = l9c.yK7D(hX2x.artists, ' / ');
        e9f.picUrl = hX2x.newCover || hX2x.cover;
        break;
      case 70:
        e9f.title = hX2x.name;
        e9f.author = (hX2x.dj || []).nickname;
        e9f.picUrl = hX2x.picUrl;
        e9f.category = hX2x.category;
        break;
      default:
        break;
    }
    return e9f;
  };
  l9c.bOu6o = function() {
    return location.hostname.indexOf('igame.163.com') >= 0;
  };
  l9c.RS3x = function(ew0x, ok4o, e9f) {
    var bJ0x, bf9W, o9f;
    var gQ2x = null;
    var uT6N = 0;
    if (!e9f) e9f = {};
    var zh7a = function() {
      uT6N = e9f.leading === false ? 0 : +new Date();
      gQ2x = null;
      o9f = ew0x.apply(bJ0x, bf9W);
      if (!gQ2x) bJ0x = bf9W = null;
    };
    return function() {
      var eV1x = +new Date();
      if (!uT6N && e9f.leading === false) uT6N = eV1x;
      var Gr9i = ok4o - (eV1x - uT6N);
      bJ0x = this;
      bf9W = arguments;
      if (Gr9i <= 0 || Gr9i > ok4o) {
        if (gQ2x) {
          clearTimeout(gQ2x);
          gQ2x = null;
        }
        uT6N = eV1x;
        o9f = ew0x.apply(bJ0x, bf9W);
        if (!gQ2x) bJ0x = bf9W = null;
      } else if (!gQ2x && e9f.trailing !== false) {
        gQ2x = setTimeout(zh7a, Gr9i);
      }
      return o9f;
    };
  };
  l9c.Lz1x = function(ew0x, ok4o, oL4P) {
    var gQ2x, bf9W, bJ0x, AQ8I, o9f;
    var zh7a = function() {
      var gq1x = new Date() - AQ8I;
      if (gq1x < ok4o && gq1x >= 0) {
        gQ2x = setTimeout(zh7a, ok4o - gq1x);
      } else {
        gQ2x = null;
        if (!oL4P) {
          o9f = ew0x.apply(bJ0x, bf9W);
          if (!gQ2x) bJ0x = bf9W = null;
        }
      }
    };
    return function() {
      bJ0x = this;
      bf9W = arguments;
      AQ8I = new Date();
      var RO3x = oL4P && !gQ2x;
      if (!gQ2x) gQ2x = setTimeout(zh7a, ok4o);
      if (RO3x) {
        o9f = ew0x.apply(bJ0x, bf9W);
        bJ0x = bf9W = null;
      }
      return o9f;
    };
  };
  l9c.RN3x = function(f9e, hp2x) {
    if (f9e) {
      var f9e = f9e.firstElementChild;
      if (f9e) {
        f9e.firstElementChild && (f9e = f9e.firstElementChild);
        f9e.setAttribute('xlink:href', '/style/pc/svg/' + hp2x);
      }
    }
  };
  l9c.bOt6n = function(eo0x) {
    if (!eo0x || !eo0x.length) {
      return;
    }
    eo0x = /^#(.+?)#$/.exec(eo0x)[1];
    eo0x = eo0x.replace(/\s/g, ' ');
    v9m.bn9e('/api/act/detail', {
      type: 'json',
      method: 'post',
      data: k9b.cF0x({
        actname: eo0x,
      }),
      onload: function(Q9H) {
        if (!Q9H || Q9H.code != 200 || !Q9H.act) {
          m9d.Z9Q.L9C({
            type: 2,
            tip: '该话题暂未创建',
          });
        } else {
          location.dispatch2('/activity?id=' + Q9H.act.actId);
        }
      },
      onerror: function(cb0x) {
        m9d.Z9Q.L9C({
          type: 2,
          tip: '操作失败，请稍后再试',
        });
      },
    });
  };
  l9c.clR2x = function(eo0x) {
    if (!eo0x || !eo0x.length) {
      return;
    }
    var RM3x = location.host;
    eo0x = /^#(.+?)#$/.exec(eo0x)[1];
    eo0x = eo0x.replace(/\s/g, ' ');
    v9m.bn9e('/api/act/detail', {
      type: 'json',
      method: 'post',
      data: k9b.cF0x({
        actname: eo0x,
      }),
      onload: function(Q9H) {
        if (!Q9H || Q9H.code != 200 || !Q9H.act) {
          cC0x.im2x('该话题暂未创建');
        } else {
          cC0x.Cq8i(RM3x + '/activity?id=' + Q9H.act.actId);
        }
      },
      onerror: function(cb0x) {
        cC0x.im2x('操作失败，请稍后再试');
      },
    });
  };
  l9c.bkq9h = function(zi7b, rI5N) {
    if (!zi7b || !rI5N) return false;
    if (zi7b == rI5N) return true;
    return l9c.bkq9h(zi7b, rI5N.parentNode);
  };
  a8i.cE0x = function(bI0x, iZ2x) {
    if (!bI0x) return null;
    if (!iZ2x) return bI0x.firstChild;
    return a8i.H9y(bI0x, iZ2x)[0];
  };
  l9c.bOr6l = function(ih2x) {
    return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(
      ih2x
    );
  };
  l9c.bOq6k = function(ih2x, RK3x) {
    RK3x = RK3x || '86';
    if (RK3x == '86') return /^\d{11}$/.test(ih2x);
    return /^\d+$/.test(ih2x);
  };
  l9c.cFD7w = function(vi6c) {
    if (!vi6c) {
      return '0b';
    }
    var clI2x = ['Bytes', 'KB', 'MB', 'GB'];
    var bc9T = Math.floor(Math.log(vi6c) / Math.log(1024));
    return (
      (vi6c / Math.pow(1024, Math.floor(bc9T))).toFixed(bc9T == 1 ? 0 : 1) + clI2x[bc9T]
    );
  };
  l9c.bOk6e = function(dI0x, fo1x, clw2x) {
    if (!dI0x) return dI0x;
    var dr0x = k9b.fy1x(dI0x);
    if (dr0x <= fo1x) return dI0x;
    var bkQ9H = dr0x - dI0x.length,
      bkR9I = dI0x.length - bkQ9H;
    var fF1x = Math.ceil(fo1x / 2),
      clr2x = fo1x,
      bOi6c = 0;
    if (bkQ9H < fF1x) fF1x = fo1x - bkQ9H;
    if (bkR9I < fo1x) fo1x = bkR9I + Math.ceil((fo1x - bkR9I) / 2);
    while (fF1x <= fo1x) {
      bOi6c = k9b.fy1x(dI0x.substr(0, fF1x));
      var bkX9O = clr2x - bOi6c;
      if (bkX9O == 0) break;
      if (bkX9O == 1) {
        var cln2x = k9b.fy1x(dI0x.charAt(fF1x));
        if (cln2x == 1) {
          fF1x++;
          break;
        } else {
          break;
        }
      }
      fF1x += Math.floor(bkX9O / 2);
    }
    return dI0x.substr(0, fF1x) + (!!clw2x ? '' : '...');
  };
  l9c.clm2x = function(bp9g) {
    bp9g = bp9g || 10;
    var cL0x = '';
    for (var i = 0; i < bp9g; i++) {
      cL0x += String.fromCharCode(Math.round(Math.random() * 20901) + 19968);
    }
    return cL0x;
  };
  var clk2x = /([A-Za-z0-9 \.\-\(\)\!\?])/,
    cli2x = /([\u4e00-\u9fa5\uac00-\ud7af\u3040-\u30ff\u31f0-\u31ff])/,
    cle2x = [
      '的',
      '一',
      '是',
      '在',
      '不',
      '了',
      '有',
      '和',
      '人',
      '这',
      '中',
      '大',
      '为',
      '上',
      '个',
      '国',
      '我',
      '以',
      '要',
      '他',
      '时',
      '来',
      '用',
      '们',
      '生',
      '到',
      '作',
      '地',
      '于',
      '出',
      '就',
      '分',
      '对',
      '成',
      '会',
      '可',
      '主',
      '发',
      '年',
      '动',
      '同',
      '工',
      '也',
      '能',
      '下',
      '过',
      '子',
      '说',
      '产',
      '种',
      '面',
      '而',
      '方',
      '后',
      '多',
      '定',
      '行',
      '学',
      '法',
      '所',
      '民',
      '得',
      '经',
      '十',
      '三',
      '之',
      '进',
      '着',
      '等',
      '部',
      '度',
      '家',
      '电',
      '力',
      '里',
      '如',
      '水',
      '化',
      '高',
      '自',
      '二',
      '理',
      '起',
      '小',
      '物',
      '现',
      '实',
      '加',
      '量',
      '都',
      '两',
      '体',
      '制',
      '机',
      '当',
      '使',
      '点',
      '从',
      '业',
      '本',
      '去',
      '把',
      '性',
      '好',
      '应',
      '开',
      '它',
      '合',
      '还',
      '因',
      '由',
      '其',
      '些',
      '然',
      '前',
      '外',
      '天',
      '政',
      '四',
      '日',
      '那',
      '社',
      '义',
      '事',
      '平',
      '形',
      '相',
      '全',
      '表',
      '间',
      '样',
      '与',
      '关',
      '各',
      '重',
      '新',
      '线',
      '内',
      '数',
      '正',
      '心',
      '反',
      '你',
      '明',
      '看',
      '原',
      '又',
      '么',
      '利',
      '比',
      '或',
      '但',
      '质',
      '气',
      '第',
      '向',
      '道',
      '命',
      '此',
      '变',
      '条',
      '只',
      '没',
      '结',
      '解',
      '问',
      '意',
      '建',
      '月',
      '公',
      '无',
      '系',
      '军',
      '很',
      '情',
      '者',
      '最',
      '立',
      '代',
      '想',
      '已',
      '通',
      '并',
      '提',
      '直',
      '题',
      '党',
      '程',
      '展',
      '五',
      '果',
      '料',
      '象',
      '员',
      '革',
      '位',
      '入',
      '常',
      '文',
      '总',
      '次',
      '品',
      '式',
      '活',
      '设',
      '及',
      '管',
      '特',
      '件',
      '长',
      '求',
      '老',
      '头',
      '基',
      '资',
      '边',
      '流',
      '路',
      '级',
      '少',
      '图',
      '山',
      '统',
      '接',
      '知',
      '较',
      '将',
      '组',
      '见',
      '计',
      '别',
      '她',
      '手',
      '角',
      '期',
      '根',
      '论',
      '运',
      '农',
      '指',
      '几',
      '九',
      '区',
      '强',
      '放',
      '决',
      '西',
      '被',
      '干',
      '做',
      '必',
      '战',
      '先',
      '回',
      '则',
      '任',
      '取',
      '据',
      '处',
      '队',
      '南',
      '给',
      '色',
      '光',
      '门',
      '即',
      '保',
      '治',
      '北',
      '造',
      '百',
      '规',
      '热',
      '领',
      '七',
      '海',
      '口',
      '东',
      '导',
      '器',
      '压',
      '志',
      '世',
      '金',
      '增',
      '争',
      '济',
      '阶',
      '油',
      '思',
      '术',
      '极',
      '交',
      '受',
      '联',
      '什',
      '认',
      '六',
      '共',
      '权',
      '收',
      '证',
      '改',
      '清',
      '己',
      '美',
      '再',
      '采',
      '转',
      '更',
      '单',
      '风',
      '切',
      '打',
      '白',
      '教',
      '速',
      '花',
      '带',
      '安',
      '场',
      '身',
      '车',
      '例',
      '真',
      '务',
      '具',
      '万',
      '每',
      '目',
      '至',
      '达',
      '走',
      '积',
      '示',
      '议',
      '声',
      '报',
      '斗',
      '完',
      '类',
      '八',
      '离',
      '华',
      '名',
      '确',
      '才',
      '科',
      '张',
      '信',
      '马',
      '节',
      '话',
      '米',
      '整',
      '空',
      '元',
      '况',
      '今',
      '集',
      '温',
      '传',
      '土',
      '许',
      '步',
      '群',
      '广',
      '石',
      '记',
      '需',
      '段',
      '研',
      '界',
      '拉',
      '林',
      '律',
      '叫',
      '且',
      '究',
      '观',
      '越',
      '织',
      '装',
      '影',
      '算',
      '低',
      '持',
      '音',
      '众',
      '书',
      '布',
      '复',
      '容',
      '儿',
      '须',
      '际',
      '商',
      '非',
      '验',
      '连',
      '断',
      '深',
      '难',
      '近',
      '矿',
      '千',
      '周',
      '委',
      '素',
      '技',
      '备',
      '半',
      '办',
      '青',
      '省',
      '列',
      '习',
      '响',
      '约',
      '支',
      '般',
      '史',
      '感',
      '劳',
      '便',
      '团',
      '往',
      '酸',
      '历',
      '市',
      '克',
      '何',
      '除',
      '消',
      '构',
      '府',
      '称',
      '太',
      '准',
      '精',
      '值',
      '号',
      '率',
      '族',
      '维',
      '划',
      '选',
      '标',
      '写',
      '存',
      '候',
      '毛',
      '亲',
      '快',
      '效',
      '斯',
      '院',
      '查',
      '江',
      '型',
      '眼',
      '王',
      '按',
      '格',
      '养',
      '易',
      '置',
      '派',
      '层',
      '片',
      '始',
      '却',
      '专',
      '状',
      '育',
      '厂',
      '京',
      '识',
      '适',
      '属',
      '圆',
      '包',
      '火',
      '住',
      '调',
      '满',
      '县',
      '局',
      '照',
      '参',
      '红',
      '细',
      '引',
      '听',
      '该',
      '铁',
      '价',
      '严',
      '龙',
      '飞',
    ];
  var bOc6W = function(cla2x) {
    var bp9g = k9b.BS8K(1, 5),
      ckW2x = Math.random() < 0.5,
      jb2x = '';
    if (cla2x) {
      if (ckW2x) {
        while (bp9g >= 0) {
          jb2x += cle2x[k9b.BS8K(0, 500)];
          bp9g--;
        }
      } else {
        jb2x = l9c.clm2x(bp9g);
      }
    } else {
      jb2x = k9b.Pn2x(bp9g);
    }
    return '<div class="soil">' + jb2x + '</div>';
  };
  l9c.bgs8k = function(eq0x) {
    eq0x = k9b.Ce8W(eq0x);
    try {
      var bp9g = eq0x.length,
        r9i = k9b.BS8K(1, bp9g - 1);
      while (r9i < bp9g) {
        if (cli2x.test(eq0x.charAt(r9i))) {
          return k9b.dH0x(eq0x.slice(0, r9i)) + bOc6W(true) + k9b.dH0x(eq0x.slice(r9i));
        } else if (clk2x.test(eq0x.charAt(r9i))) {
          return k9b.dH0x(eq0x.slice(0, r9i)) + bOc6W() + k9b.dH0x(eq0x.slice(r9i));
        } else {
          r9i++;
        }
      }
      return k9b.dH0x(eq0x);
    } catch (e) {
      return k9b.dH0x(eq0x);
    }
  };
  l9c.Yj5o = function(lp3x, mT3x) {
    return '//nos.netease.com/' + lp3x + '/' + mT3x;
  };
  l9c.ckL2x = function(fE1x) {
    var dO0x = /(.+)(\.[^\.]+$)/.exec(fE1x);
    return dO0x
      ? {
          filename: dO0x[1],
          suffix: dO0x[2],
        }
      : {
          filename: fE1x || '',
          suffix: '',
        };
  };
  l9c.bNX6R = function(bs9j, ckJ2x) {
    var dC0x = [];
    k9b.bd9U(bs9j, function(hZ2x) {
      dC0x.push(ckJ2x(hZ2x));
    });
    return dC0x;
  };
  var ckI2x = {
    title: 'name',
    durationms: 'duration',
    coverUrl: 'cover',
    playTime: 'playCount',
    vid: 'id',
    subscribed: 'subed',
  };
  l9c.bNT6N = function(zy7r) {
    var j9a = NEJ.X({}, zy7r);
    k9b.eD0x(zy7r, function(p9g, J9A) {
      var bNS6M = ckI2x[J9A];
      if (bNS6M) {
        j9a[bNS6M] = p9g;
      }
    });
    var Rn3x = zy7r.creator || [];
    if (!k9b.eI0x(Rn3x)) {
      Rn3x = [Rn3x];
    }
    if (Rn3x) {
      j9a.artists = [];
      k9b.bd9U(Rn3x, function(p9g) {
        j9a.artists.push({
          name: p9g.nickname || p9g.userName,
          id: p9g.userId,
        });
      });
    }
    if (!!zy7r.aliaName) {
      j9a.alias = [zy7r.aliaName];
    }
    if (!!zy7r.transName) {
      j9a.transNames = [zy7r.transName];
    }
    return j9a;
  };
  l9c.ckt2x = function(Y9P) {
    return (Y9P || '').replace(/^https?:/, '');
  };
  l9c.Ex9o = function(cL0x) {
    if (!k9b.fH1x(cL0x)) return cL0x;
    var dC0x = null;
    try {
      dC0x = JSON.parse(cL0x);
    } catch (_e) {}
    return dC0x;
  };
  var ckr2x = '<span class="s-fc7 f-tdn">${value}</span>';
  l9c.cko2x = function(cH0x, td5i, e9f) {
    e9f = e9f || {};
    if (!td5i) {
      return k9b.dH0x(cH0x);
    }
    cH0x = k9b.Ce8W(cH0x);
    var ql4p = [],
      bs9j = null,
      UF4J = new RegExp(l9c.bOV6P(td5i), 'gi'),
      pe4i = e9f.tpl || ckr2x;
    while ((bs9j = UF4J.exec(cH0x))) {
      var dO0x = {
        html: '',
        before: bs9j.index - 1,
        after: bs9j.index + bs9j[0].length,
      };
      var DZ9Q = a8i.ex0x(pe4i);
      dO0x.html = a8i.bZ0x(DZ9Q, {
        value: k9b.dH0x(bs9j[0]),
      });
      ql4p.push(dO0x);
    }
    var bfV8N = ql4p.length,
      ke3x = {
        before: cH0x.length - 1,
        after: 0,
      },
      dC0x = '';
    for (var i = 0; i <= bfV8N; i++) {
      var hC2x, fT1x;
      hC2x = (ql4p[i - 1] || ke3x).after;
      fT1x = (ql4p[i] || ke3x).before;
      if (fT1x >= hC2x && hC2x >= 0 && fT1x <= cH0x.length - 1) {
        dC0x += k9b.dH0x(cH0x.substring(hC2x, fT1x + 1));
      }
      if (ql4p[i]) {
        dC0x += ql4p[i].html;
      }
    }
    return dC0x;
  };
})();
(function() {
  var k9b = NEJ.P('nej.u');
  function ckk2x() {
    var Dk8c = function(ib2x) {
      if (ib2x < -128) {
        return Dk8c(128 - (-128 - ib2x));
      } else if (ib2x >= -128 && ib2x <= 127) {
        return ib2x;
      } else if (ib2x > 127) {
        return Dk8c(-129 + ib2x - 127);
      } else {
        throw new Error('1001');
      }
    };
    var cki2x = function(ib2x, bi9Z) {
      return Dk8c(ib2x + bi9Z);
    };
    var ckf2x = function(Yq5v, blZ9Q) {
      if (Yq5v == null) {
        return null;
      }
      if (blZ9Q == null) {
        return Yq5v;
      }
      var rb5g = [];
      var cke2x = blZ9Q.length;
      for (var i = 0, bp9g = Yq5v.length; i < bp9g; i++) {
        rb5g[i] = cki2x(Yq5v[i], blZ9Q[i % cke2x]);
      }
      return rb5g;
    };
    var ckd2x = function(Ys5x) {
      if (Ys5x == null) {
        return Ys5x;
      }
      var rb5g = [];
      var ckc2x = Ys5x.length;
      for (var i = 0, bp9g = ckc2x; i < bp9g; i++) {
        rb5g[i] = Dk8c(0 - Ys5x[i]);
      }
      return rb5g;
    };
    var cka2x = function(bmt9k, Rh3x) {
      bmt9k = Dk8c(bmt9k);
      Rh3x = Dk8c(Rh3x);
      return Dk8c(bmt9k ^ Rh3x);
    };
    var bNN6H = function(Rf3x, bmH9y) {
      if (Rf3x == null || bmH9y == null || Rf3x.length != bmH9y.length) {
        return Rf3x;
      }
      var rb5g = [];
      var cjS2x = Rf3x.length;
      for (var i = 0, bp9g = cjS2x; i < bp9g; i++) {
        rb5g[i] = cka2x(Rf3x[i], bmH9y[i]);
      }
      return rb5g;
    };
    var bNK6E = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
    ];
    var cjK2x = function(dw0x) {
      var Lf1x = [];
      Lf1x.push(bNK6E[(dw0x >>> 4) & 15]);
      Lf1x.push(bNK6E[dw0x & 15]);
      return Lf1x.join('');
    };
    var bNJ6D = function(vi6c) {
      var bp9g = vi6c.length;
      if (vi6c == null || bp9g < 0) {
        return new String('');
      }
      var Lf1x = [];
      for (var i = 0; i < bp9g; i++) {
        Lf1x.push(cjK2x(vi6c[i]));
      }
      return Lf1x.join('');
    };
    var bNI6C = function(Yx5C) {
      if (Yx5C == null || Yx5C.length == 0) {
        return Yx5C;
      }
      var bnj9a = new String(Yx5C);
      var rb5g = [];
      var bp9g = bnj9a.length / 2;
      var bi9Z = 0;
      for (var i = 0; i < bp9g; i++) {
        var oD4H = parseInt(bnj9a.charAt(bi9Z++), 16) << 4;
        var oC4G = parseInt(bnj9a.charAt(bi9Z++), 16);
        rb5g[i] = Dk8c(oD4H + oC4G);
      }
      return rb5g;
    };
    var bNF6z = function(cL0x) {
      if (cL0x == null || cL0x == undefined) {
        return cL0x;
      }
      var QY3x = encodeURIComponent(cL0x);
      var vi6c = [];
      var bNE6y = QY3x.length;
      for (var i = 0; i < bNE6y; i++) {
        if (QY3x.charAt(i) == '%') {
          if (i + 2 < bNE6y) {
            vi6c.push(bNI6C(QY3x.charAt(++i) + '' + QY3x.charAt(++i))[0]);
          } else {
            throw new Error('1009');
          }
        } else {
          vi6c.push(QY3x.charCodeAt(i));
        }
      }
      return vi6c;
    };
    var cjD2x = function(wr6l) {
      var bc9T = 0;
      bc9T += (wr6l[0] & 255) << 24;
      bc9T += (wr6l[1] & 255) << 16;
      bc9T += (wr6l[2] & 255) << 8;
      bc9T += wr6l[3] & 255;
      return bc9T;
    };
    var cFI7B = function(bc9T) {
      var wr6l = [];
      wr6l[0] = (bc9T >>> 24) & 255;
      wr6l[1] = (bc9T >>> 16) & 255;
      wr6l[2] = (bc9T >>> 8) & 255;
      wr6l[3] = bc9T & 255;
      return wr6l;
    };
    var cjx2x = function(cS0x, bnt9k, bp9g) {
      var dC0x = [];
      if (cS0x == null || cS0x.length == 0) {
        return dC0x;
      }
      if (cS0x.length < bp9g) {
        throw new Error('1003');
      }
      for (var i = 0; i < bp9g; i++) {
        dC0x[i] = cS0x[bnt9k + i];
      }
      return dC0x;
    };
    var bnu9l = function(cS0x, bnt9k, sv5A, cjw2x, bp9g) {
      if (cS0x == null || cS0x.length == 0) {
        return sv5A;
      }
      if (sv5A == null) {
        throw new Error('1004');
      }
      if (cS0x.length < bp9g) {
        throw new Error('1003');
      }
      for (var i = 0; i < bp9g; i++) {
        sv5A[cjw2x + i] = cS0x[bnt9k + i];
      }
      return sv5A;
    };
    var cjv2x = function(bp9g) {
      var bs9j = [];
      for (var i = 0; i < bp9g; i++) {
        bs9j[i] = 0;
      }
      return bs9j;
    };
    var cjt2x = [
      82,
      9,
      106,
      -43,
      48,
      54,
      -91,
      56,
      -65,
      64,
      -93,
      -98,
      -127,
      -13,
      -41,
      -5,
      124,
      -29,
      57,
      -126,
      -101,
      47,
      -1,
      -121,
      52,
      -114,
      67,
      68,
      -60,
      -34,
      -23,
      -53,
      84,
      123,
      -108,
      50,
      -90,
      -62,
      35,
      61,
      -18,
      76,
      -107,
      11,
      66,
      -6,
      -61,
      78,
      8,
      46,
      -95,
      102,
      40,
      -39,
      36,
      -78,
      118,
      91,
      -94,
      73,
      109,
      -117,
      -47,
      37,
      114,
      -8,
      -10,
      100,
      -122,
      104,
      -104,
      22,
      -44,
      -92,
      92,
      -52,
      93,
      101,
      -74,
      -110,
      108,
      112,
      72,
      80,
      -3,
      -19,
      -71,
      -38,
      94,
      21,
      70,
      87,
      -89,
      -115,
      -99,
      -124,
      -112,
      -40,
      -85,
      0,
      -116,
      -68,
      -45,
      10,
      -9,
      -28,
      88,
      5,
      -72,
      -77,
      69,
      6,
      -48,
      44,
      30,
      -113,
      -54,
      63,
      15,
      2,
      -63,
      -81,
      -67,
      3,
      1,
      19,
      -118,
      107,
      58,
      -111,
      17,
      65,
      79,
      103,
      -36,
      -22,
      -105,
      -14,
      -49,
      -50,
      -16,
      -76,
      -26,
      115,
      -106,
      -84,
      116,
      34,
      -25,
      -83,
      53,
      -123,
      -30,
      -7,
      55,
      -24,
      28,
      117,
      -33,
      110,
      71,
      -15,
      26,
      113,
      29,
      41,
      -59,
      -119,
      111,
      -73,
      98,
      14,
      -86,
      24,
      -66,
      27,
      -4,
      86,
      62,
      75,
      -58,
      -46,
      121,
      32,
      -102,
      -37,
      -64,
      -2,
      120,
      -51,
      90,
      -12,
      31,
      -35,
      -88,
      51,
      -120,
      7,
      -57,
      49,
      -79,
      18,
      16,
      89,
      39,
      -128,
      -20,
      95,
      96,
      81,
      127,
      -87,
      25,
      -75,
      74,
      13,
      45,
      -27,
      122,
      -97,
      -109,
      -55,
      -100,
      -17,
      -96,
      -32,
      59,
      77,
      -82,
      42,
      -11,
      -80,
      -56,
      -21,
      -69,
      60,
      -125,
      83,
      -103,
      97,
      23,
      43,
      4,
      126,
      -70,
      119,
      -42,
      38,
      -31,
      105,
      20,
      99,
      85,
      33,
      12,
      125,
    ];
    var KY1x = 64;
    var YC5H = 64;
    var bNB6v = 4;
    var cjp2x = function(qX5c) {
      var bNA6u = [];
      if (qX5c == null || qX5c == undefined || qX5c.length == 0) {
        return cjv2x(YC5H);
      }
      if (qX5c.length >= YC5H) {
        return cjx2x(qX5c, 0, YC5H);
      } else {
        for (var i = 0; i < YC5H; i++) {
          bNA6u[i] = qX5c[i % qX5c.length];
        }
      }
      return bNA6u;
    };
    var cjn2x = function(YG5L) {
      if (YG5L == null || YG5L.length % KY1x != 0) {
        throw new Error('1005');
      }
      var bnZ0x = [];
      var bi9Z = 0;
      var cjm2x = YG5L.length / KY1x;
      for (var i = 0; i < cjm2x; i++) {
        bnZ0x[i] = [];
        for (var j = 0; j < KY1x; j++) {
          bnZ0x[i][j] = YG5L[bi9Z++];
        }
      }
      return bnZ0x;
    };
    var cjl2x = function(bNz6t) {
      var oD4H = (bNz6t >>> 4) & 15;
      var oC4G = bNz6t & 15;
      var bi9Z = oD4H * 16 + oC4G;
      return cjt2x[bi9Z];
    };
    var bNv6p = function(bog0x) {
      if (bog0x == null) {
        return null;
      }
      var bNu6o = [];
      for (var i = 0, bp9g = bog0x.length; i < bp9g; i++) {
        bNu6o[i] = cjl2x(bog0x[i]);
      }
      return bNu6o;
    };
    var bNs6m = function(KT1x, qX5c) {
      if (KT1x == null) {
        return null;
      }
      if (KT1x.length == 0) {
        return [];
      }
      if (KT1x.length % KY1x != 0) {
        throw new Error('1005');
      }
      qX5c = cjp2x(qX5c);
      var boo0x = qX5c;
      var bos0x = cjn2x(KT1x);
      var Qz3x = [];
      var ciW2x = bos0x.length;
      for (var i = 0; i < ciW2x; i++) {
        var boG0x = bNv6p(bos0x[i]);
        boG0x = bNv6p(boG0x);
        var boJ0x = bNN6H(boG0x, boo0x);
        var ciV2x = ckf2x(boJ0x, ckd2x(boo0x));
        boJ0x = bNN6H(ciV2x, qX5c);
        bnu9l(boJ0x, 0, Qz3x, i * KY1x, KY1x);
        boo0x = bos0x[i];
      }
      var bNr6l = [];
      bnu9l(Qz3x, Qz3x.length - bNB6v, bNr6l, 0, bNB6v);
      var bp9g = cjD2x(bNr6l);
      if (bp9g > Qz3x.length) {
        throw new Error('1006');
      }
      var rb5g = [];
      bnu9l(Qz3x, 0, rb5g, 0, bp9g);
      return rb5g;
    };
    var ciT2x = function(YQ6K, J9A) {
      if (YQ6K == null) {
        return null;
      }
      var bNq6k = new String(YQ6K);
      if (bNq6k.length == 0) {
        return [];
      }
      var KT1x = bNI6C(bNq6k);
      if (J9A == null || J9A == undefined) {
        throw new Error('1007');
      }
      var qX5c = bNF6z(J9A);
      return bNs6m(KT1x, qX5c);
    };
    this.ciQ2x = function(YQ6K, J9A) {
      var bpb0x = ciT2x(YQ6K, J9A);
      var Et9k = new String(bNJ6D(bpb0x));
      var zG7z = [];
      var bpg0x = Et9k.length / 2;
      var bi9Z = 0;
      for (var i = 0; i < bpg0x; i++) {
        zG7z.push('%');
        zG7z.push(Et9k.charAt(bi9Z++));
        zG7z.push(Et9k.charAt(bi9Z++));
      }
      return zG7z.join('');
    };
    k9b.cmd3x = function(bpk0x, J9A) {
      return k9b.ciP2x(k9b.cvP5U(bpk0x), J9A);
    };
    k9b.ciP2x = function(bpk0x, J9A) {
      var bpb0x = bNs6m(bpk0x, bNF6z(J9A));
      var Et9k = new String(bNJ6D(bpb0x));
      var zG7z = [];
      var bpg0x = Et9k.length / 2;
      var bi9Z = 0;
      for (var i = 0; i < bpg0x; i++) {
        zG7z.push('%');
        zG7z.push(Et9k.charAt(bi9Z++));
        zG7z.push(Et9k.charAt(bi9Z++));
      }
      return zG7z.join('');
    };
  }
  window.settmusic = new ckk2x().ciQ2x;
})();
(function() {
  var c9h = NEJ.P,
    br9i = NEJ.F,
    I9z = c9h('nej.ut'),
    k9b = c9h('nej.u'),
    h9c = c9h('nej.v'),
    v9m = c9h('nej.j'),
    q9h = c9h('nm.d'),
    l9c = c9h('nm.x'),
    J9A = 'Search-tracks_',
    b9i;
  q9h.fl1x({
    'search-suggest': {
      url: '/api/search/suggest/web',
      type: 'POST',
      format: function(Q9H) {
        return Q9H;
      },
      onerror: function(Q9H, e9f) {
        if (Q9H.code == 407) {
          e9f.onForbidden();
        }
      },
    },
    'search-multimatch': {
      url: '/api/search/suggest/multimatch',
      type: 'GET',
    },
    'search-list': {
      url: '/api/cloudsearch/get/web',
      type: 'post',
      noescape: true,
      filter: function(e9f, bg9X) {
        window.log &&
          window.log('searchkeywordclient', {
            type: this.ciO2x(parseInt(e9f.data.type)) || 'suggest',
            keyword: e9f.data.s,
            offset: e9f.offset,
          });
      },
      format: function(Q9H, e9f) {
        if (Q9H.abroad) {
          try {
            Q9H.result = JSON.parse(decodeURIComponent(settmusic(Q9H.result, q9h.sk)));
          } catch (e) {}
        }
        Q9H.result = Q9H.result || {};
        var i9b,
          cz0x,
          hO2x = [],
          qn4r = e9f.data.s || '',
          fY1x = e9f.data.limit,
          u9l = parseInt(e9f.data.type) || 1,
          o9f = Q9H.result;
        switch (u9l) {
          case 1:
            i9b = this.bNn6h(o9f.songs, e9f.data.hlpretag, e9f.data.hlposttag);
            cz0x = o9f.songCount;
            break;
          case 10:
            i9b = o9f.albums;
            cz0x = o9f.albumCount;
            break;
          case 100:
            i9b = o9f.artists;
            cz0x = o9f.artistCount;
            break;
          case 1000:
            i9b = o9f.playlists;
            cz0x = o9f.playlistCount;
            break;
          case 1002:
            i9b = o9f.userprofiles;
            cz0x = o9f.userprofileCount;
            break;
          case 1004:
            i9b = o9f.mvs;
            cz0x = o9f.mvCount;
            break;
          case 1014:
            i9b = l9c.bNX6R(o9f.videos, l9c.bNT6N);
            cz0x = o9f.videoCount;
            break;
          case 1006:
            i9b = this.bNn6h(o9f.songs, e9f.data.hlpretag, e9f.data.hlposttag);
            cz0x = o9f.songCount;
            break;
          case 1009:
            var qM4Q = o9f.djRadios;
            if (!!qM4Q) {
              k9b.bd9U(qM4Q, function(D9u, r9i, ciB2x) {
                D9u.xid = D9u.id;
                D9u.id = D9u.id + '_rad';
              });
              if (qM4Q.length) {
                this.vd6X('radio_search-' + e9f.data.s, qM4Q);
              }
            }
            cz0x = Math.min(o9f.djprogramCount, 500);
            i9b = o9f.djprograms || [];
            if (e9f.data.isPub) {
              k9b.nH4L(qM4Q, function(D9u, r9i, ciB2x) {
                D9u.stype = 1;
                i9b.unshift(D9u);
              });
              cz0x = Math.min(i9b.length, 500);
            }
            break;
        }
        this.z9q('onsearchload', Q9H);
        if (i9b && i9b.length) {
          for (var i = 0; i < fY1x; i++) {
            if (i < i9b.length) {
              hO2x.push(i9b[i]);
            } else {
              hO2x.push(null);
            }
          }
        }
        return {
          more: !0,
          total: Math.min(cz0x || 0, qn4r.length < 3 ? 500 : 5000),
          list: hO2x,
        };
      },
      onerror: function(Q9H, e9f) {
        e9f.onload(e9f, []);
        if (k9b.gJ2x(e9f.onerror)) {
          e9f.onerror(Q9H);
        }
      },
    },
  });
  q9h.EG9x = NEJ.C();
  b9i = q9h.EG9x.N9E(q9h.hL2x);
  b9i.cy0x = function() {
    this.cG0x();
  };
  b9i.ciA2x = function(J9A, e9f) {
    if (!J9A) return;
    if (!!this.bNk6e) v9m.ku3x(this.bNk6e);
    this.bNk6e = this.cp0x(
      'search-suggest',
      NEJ.X(
        {
          data: {
            s: J9A,
            limit: 8,
          },
        },
        e9f
      )
    );
  };
  b9i.ciy2x = function(J9A, e9f) {
    if (!J9A) return;
    this.cp0x(
      'search-multimatch',
      NEJ.X(
        {
          data: {
            s: J9A,
          },
        },
        e9f
      )
    );
  };
  b9i.bNn6h = (function() {
    var cix2x = function(hz2x, bNj6d, bNi6c) {
      var cis2x = hz2x.match(new RegExp(bNj6d + '(.+?)' + bNi6c, 'gi')),
        cx0x = 0;
      k9b.bd9U(cis2x, function(p9g) {
        cx0x += p9g
          .replace(new RegExp(bNj6d, 'g'), '')
          .replace(new RegExp(bNi6c, 'g'), '').length;
      });
      return cx0x;
    };
    return function(jq2x, cir2x, ciq2x) {
      var bNf6Z = [];
      k9b.bd9U(jq2x, function(bj9a, bc9T) {
        bj9a = l9c.EQ9H(bj9a);
        var Zd6X = bj9a.lyrics || [],
          dr0x = Zd6X.length,
          jP2x = 0,
          cz0x = 4,
          Ze6Y = {
            l: 0,
            v: 0,
          },
          bqy0x;
        if (dr0x > 4) {
          k9b.bd9U(Zd6X, function(hz2x, r9i) {
            var bNd6X = cix2x(hz2x, cir2x, ciq2x);
            if (bNd6X > Ze6Y.v) {
              Ze6Y.v = bNd6X;
              Ze6Y.l = r9i;
            }
          });
          jP2x = Ze6Y.l;
          jP2x = Math.max(jP2x, 0);
          bqy0x = dr0x - jP2x - 4;
          if (bqy0x < 0) jP2x += bqy0x;
          bj9a.lrcAbstractEnd = jP2x + cz0x - 1;
        } else {
          bj9a.lrcAbstractEnd = dr0x - 1;
        }
        bj9a.lrcAbstractStart = jP2x;
        bj9a.indexId = (Zd6X && Zd6X.length ? 'L' : 'NL') + bj9a.id;
        bNf6Z.push(bj9a);
      });
      return bNf6Z;
    };
  })();
  b9i.ciO2x = function(u9l) {
    switch (u9l) {
      case 1:
        return 'song';
        break;
      case 100:
        return 'artist';
        break;
      case 10:
        return 'album';
        break;
      case 1004:
        return 'mv';
        break;
      case 1014:
        return 'video';
        break;
      case 1006:
        return 'lyric';
        break;
      case 1000:
        return 'list';
        break;
      case 1009:
        return 'djradio';
        break;
      case 1002:
        return 'user';
        break;
      default:
        return 'suggest';
        break;
    }
  };
})();
(function() {
  var c9h = NEJ.P,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    I9z = c9h('nej.ut'),
    v9m = c9h('nej.j'),
    q9h = c9h('nm.d'),
    l9c = c9h('nm.x'),
    E9v = c9h('nm.m'),
    m9d = c9h('nm.l'),
    dv0x = c9h('nm.i'),
    M9D = c9h('nm.m.sch'),
    b9i,
    K9B;
  var Zf6Z = {
    songs: 1,
    artists: 100,
    albums: 10,
    playlists: 1000,
    mvs: 1004,
  };
  M9D.PZ3x = NEJ.C();
  b9i = M9D.PZ3x.N9E(I9z.cI0x);
  b9i.cy0x = function(f9e) {
    this.cG0x();
    this.bW0x(f9e);
    this.S9J = q9h.EG9x.gt1x();
  };
  b9i.bW0x = function(f9e) {
    this.n9e = f9e;
    var i9b = a8i.H9y(f9e, 'j-flag');
    this.eW1x = i9b[0];
    this.bqW0x = i9b[1];
    this.cs0x = i9b[2];
    this.nE4I = i9b[3];
    h9c.s9j(this.eW1x, 'input', this.gk1x.g9d(this));
    h9c.s9j(this.eW1x, 'keyup', this.gk1x.g9d(this));
    h9c.s9j(this.eW1x, 'focus', this.gO2x.g9d(this));
    h9c.s9j(this.bqW0x, 'click', this.gO2x.g9d(this));
    h9c.s9j(this.eW1x, 'blur', this.brw0x.g9d(this));
    h9c.s9j(this.cs0x, 'click', this.Zn6h.g9d(this));
    h9c.s9j(this.n9e, 'keydown', this.brF0x.g9d(this));
    h9c.s9j(this.n9e, 'keypress', this.Zo6i.g9d(this));
    h9c.s9j(this.nE4I, 'mouseover', this.PU3x.g9d(this));
    h9c.s9j(this.nE4I, 'mouseout', this.PU3x.g9d(this));
    if (this.eW1x.value) {
      this.eW1x.value = '';
    }
    if (this.eW1x.style.opacity != null) {
      this.eW1x.style.opacity = 1;
    }
  };
  b9i.gk1x = function(d9g) {
    if ((d9g.type == 'keyup' && d9g.keyCode == 8) || d9g.keyCode == 46) {
      this.Fo9f();
    } else if (d9g.type == 'input' || d9g.type == 'propertychange') {
      setTimeout(this.Fo9f.g9d(this), 0);
    }
  };
  b9i.gO2x = function() {
    this.zO7H(this.bqW0x, !1);
    a8i.y9p(this.n9e, 'm-srch-fcs');
    this.eW1x.focus();
    this.Fo9f();
    a8i.y9p((a8i.H9y('g-topbar', 'j-showoff') || [])[0], 'f-hide');
  };
  b9i.brw0x = function() {
    if (!this.eW1x.value) {
      this.zO7H(this.bqW0x, !0);
    }
    var Fq9h = a8i.H9y(this.nE4I, 'slt');
    if (this.Zq6k(this.nE4I) && Fq9h.length > 0 && a8i.t9k(Fq9h[0], 'type')) {
      var hp2x = Fq9h[0].href;
      if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(hp2x)) {
        window.log('search', {
          rid: RegExp.$2,
          type: RegExp.$1,
          keyword: this.eW1x.value,
        });
      }
      this.brT1x(Fq9h[0].href);
    }
    this.zO7H(this.nE4I, !1);
    a8i.x9o(this.n9e, 'm-srch-fcs');
  };
  b9i.zO7H = function(f9e, lV3x) {
    a8i.ba9R(f9e, 'display', !lV3x ? 'none' : '');
  };
  b9i.Zq6k = function(f9e) {
    return a8i.de0x(f9e, 'display') != 'none';
  };
  b9i.Fo9f = (function() {
    var cim2x = function(ih2x) {
      ih2x = k9b.Ce8W(ih2x);
      var eG0x = this.n9e.clientWidth > 250 ? 41 : 17;
      if (l9c.SM4Q(ih2x) > eG0x) {
        ih2x = l9c.Co8g(ih2x, eG0x) + '...';
      }
      return k9b.dH0x(ih2x);
    };
    var Zu6o = function(o9f) {
      return (
        (o9f.songs && o9f.songs.length) ||
        (o9f.albums && o9f.albums.length) ||
        (o9f.artists && o9f.artists.length) ||
        (o9f.playlists && o9f.playlists.length)
      );
    };
    var rN5S = function(td5i, d9g) {
      if (!l9c.bOZ6T(this.eW1x) || l9c.jT2x(this.eW1x.value)) {
        this.zO7H(this.nE4I, !1);
        return;
      }
      d9g.keyword = k9b.dH0x(td5i);
      var dQ0x = a8i.bZ0x('m-search-suggest', d9g, {
          mark: l9c.cko2x.et0x(this, td5i),
          cutStr: cim2x.g9d(this),
        }),
        to5t = d9g.result.order;
      this.nE4I.innerHTML = dQ0x;
      this.zO7H(this.nE4I, Zu6o(d9g.result) ? !0 : !1);
      if (!!to5t && !!to5t.length && Zf6Z[to5t[0]]) {
        this.bsi1x = {
          keyword: td5i,
          type: Zf6Z[to5t[0]],
        };
      }
    };
    var cil2x = function() {
      this.zO7H(this.nE4I, !1);
      return;
    };
    return function() {
      var D9u = this.eW1x.value;
      if (l9c.jT2x(D9u)) {
        this.zO7H(this.nE4I, !1);
        return;
      }
      this.S9J.ciA2x(D9u, {
        onload: rN5S.g9d(this, D9u),
        onForbidden: cil2x.g9d(this),
      });
    };
  })();
  b9i.Zo6i = function(d9g) {
    if (d9g.keyCode != 13) return;
    var Fq9h = a8i.H9y(this.nE4I, 'slt');
    if (this.Zq6k(this.nE4I) && Fq9h.length > 0) {
      this.brT1x(Fq9h[0].href);
      this.zO7H(this.nE4I, !1);
      return;
    }
    this.Zn6h();
    this.zO7H(this.nE4I, !1);
  };
  b9i.brF0x = function(d9g) {
    if (!this.Zq6k(this.nE4I)) return;
    var i9b = a8i.H9y(this.nE4I, 'xtag'),
      dr0x = i9b.length,
      r9i = k9b.di0x(i9b, function(p9g) {
        return a8i.bE0x(p9g, 'slt');
      });
    switch (d9g.keyCode) {
      case 38:
        if (r9i >= 0) a8i.x9o(i9b[r9i], 'slt');
        a8i.y9p(i9b[r9i <= 0 ? dr0x - 1 : r9i - 1], 'slt');
        break;
      case 40:
        if (r9i >= 0) a8i.x9o(i9b[r9i], 'slt');
        a8i.y9p(i9b[(r9i + 1) % dr0x], 'slt');
        break;
    }
  };
  b9i.PU3x = function(d9g) {
    if (!this.Zq6k(this.nE4I)) return;
    var PQ3x,
      F9w = h9c.W9N(d9g),
      i9b = a8i.H9y(this.nE4I, 'xtag');
    if (F9w.tagName.toLowerCase() == 'a') PQ3x = F9w;
    else if (F9w.parentNode.tagName.toLowerCase() == 'a') PQ3x = F9w.parentNode;
    if (!PQ3x) return;
    k9b.bd9U(i9b, function(p9g) {
      a8i.x9o(p9g, 'slt');
      a8i.t9k(p9g, 'type', '');
    });
    if (d9g.type == 'mouseout') return;
    a8i.y9p(PQ3x, 'slt');
    a8i.t9k(PQ3x, 'type', 'mouse');
  };
  b9i.Zn6h = function() {
    var dP0x = location.hash,
      r9i = dP0x.indexOf('?'),
      bv9m = k9b.hy2x(dP0x.substring(r9i + 1));
    bv9m.s = this.eW1x.value;
    if (l9c.jT2x(bv9m.s)) return;
    if (!bv9m.type && this.bsi1x && this.bsi1x.keyword == bv9m.s) {
      bv9m.type = this.bsi1x.type;
    }
    this.brT1x('/search/#/?' + k9b.cF0x(bv9m));
    this.eW1x.blur();
  };
  b9i.brT1x = function(Y9P) {
    if (location.dispatch2) {
      location.dispatch2(Y9P);
    } else {
      location.href = Y9P;
    }
  };
  M9D.PZ3x.cik2x = function() {
    var i9b = a8i.H9y(document.body, 'j-suggest');
    k9b.bd9U(i9b, function(p9g) {
      new M9D.PZ3x(p9g);
    });
  };
  M9D.PZ3x.cik2x();
})();
(function() {
  var c9h = NEJ.P,
    br9i = NEJ.F,
    I9z = c9h('nej.ut'),
    k9b = c9h('nej.u'),
    h9c = c9h('nej.v'),
    v9m = c9h('nej.j'),
    q9h = c9h('nm.d'),
    b9i;
  q9h.fl1x({
    'mv_artist-list': {
      url: '/api/artist/mvs',
      type: 'get',
      format: function(Q9H) {
        return {
          total: Q9H.size || 0,
          list: Q9H.mvs || [],
        };
      },
    },
    'album_artist-list': {
      url: '/api/artist/albums/{id}',
      type: 'get',
      format: function(Q9H) {
        return {
          total: Q9H.size || 0,
          list: Q9H.hotAlbums || [],
        };
      },
    },
    'ydcailing_post-list': {
      url: '/api/cailing/all',
      type: 'POST',
      format: function(Q9H) {
        return Q9H.result.songs;
      },
    },
    'wo-list': {
      url: '/api/unicom/wo/content',
      format: function(Q9H, e9f) {
        if (e9f.offset == 0) {
          var pT4X = Q9H.data[0];
          this.z9q('onfirstload', pT4X);
          Q9H.data.splice(0, 1);
          return Q9H.data;
        } else {
          return Q9H.data;
        }
      },
    },
  });
  q9h.Fz9q = NEJ.C();
  b9i = q9h.Fz9q.N9E(q9h.hL2x);
  b9i.cy0x = function() {
    this.cG0x();
  };
  b9i.bsw1x = (function() {
    var tE5J = 'LOCAL_FLAG';
    return function(u9l, cij2x) {
      var j9a = this.Fi9Z(tE5J, {});
      if (j9a[u9l]) {
        return true;
      } else {
        if (!cij2x) {
          j9a[u9l] = true;
          this.xv7o(tE5J, j9a);
        }
        return false;
      }
    };
  })();
})();
(function() {
  var c9h = NEJ.P,
    a8i = c9h('nej.e'),
    k9b = c9h('nej.u'),
    O9F = c9h('nej.ut'),
    bsA1x;
  if (!!O9F.nU4Y) return;
  O9F.nU4Y = NEJ.C();
  bsA1x = O9F.nU4Y.N9E(O9F.cI0x);
  bsA1x.bk9b = (function() {
    var cii2x = function(d9g) {
      d9g.matched = d9g.source == d9g.target;
    };
    return function(e9f) {
      e9f.oncheck = e9f.oncheck || cii2x;
      this.bm9d(e9f);
      this.bU0x = e9f.list;
      this.jn2x = e9f.dataset || 'id';
      this.kM3x = e9f.selected || 'js-selected';
    };
  })();
  bsA1x.nS4W = function(D9u) {
    var F9w,
      d9g = {
        target: D9u,
      };
    k9b.bd9U(
      this.bU0x,
      function(f9e) {
        delete d9g.matched;
        d9g.source = a8i.t9k(f9e, this.jn2x);
        this.z9q('oncheck', d9g);
        if (!d9g.matched) {
          a8i.x9o(f9e, this.kM3x);
        } else {
          F9w = f9e;
          a8i.y9p(f9e, this.kM3x);
        }
      },
      this
    );
    return F9w;
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    br9i = NEJ.F,
    a8i = c9h('nej.e'),
    O9F = c9h('nej.ut'),
    pH4L;
  if (!!O9F.dg0x) return;
  O9F.dg0x = NEJ.C();
  pH4L = O9F.dg0x.N9E(O9F.cI0x);
  pH4L.cy0x = function() {
    this.iY2x = {};
    this.cG0x();
    this.bL0x();
  };
  pH4L.bk9b = function(e9f) {
    this.bm9d(e9f);
    this.bsP1x = e9f.umi || '';
    this.AA8s = e9f.dispatcher;
    this.KF0x = e9f.composite || bb9S;
    this.bjM9D({
      onshow: this.fb1x.g9d(this),
      onhide: this.kq3x.g9d(this),
      onrefresh: this.eE0x.g9d(this),
      onmessage: this.qE4I.g9d(this),
      onbeforehide: this.cih2x.g9d(this),
    });
  };
  pH4L.bD0x = function() {
    delete this.bsP1x;
    this.iY2x = {};
    this.bG0x();
  };
  pH4L.vu6o = function(d9g) {
    if (!!d9g) d9g.stopped = !0;
  };
  pH4L.bL0x = br9i;
  pH4L.fb1x = br9i;
  pH4L.kq3x = br9i;
  pH4L.eE0x = br9i;
  pH4L.qE4I = br9i;
  pH4L.cih2x = br9i;
  pH4L.nB3x = function(nt3x, bH0x, fj1x) {
    this.AA8s.btl1x({
      to: nt3x,
      mode: fj1x || 0,
      data: bH0x,
      from: this.bsP1x,
    });
  };
  pH4L.cFM7F = function(u9l, j9a) {
    this.AA8s.Dl8d(u9l, {
      from: this.bsP1x,
      data: j9a,
    });
  };
  pH4L.cFO7H = function() {
    this.AA8s.mr3x.apply(this.AA8s, arguments);
  };
  pH4L.cie2x = function() {
    return this.iY2x;
  };
  a8i.Zw6q = function() {
    if (!!window.dispatcher) {
      dispatcher.bNc6W.apply(dispatcher, arguments);
    }
  };
})();
(function() {
  var c9h = NEJ.P,
    br9i = NEJ.F,
    bb9S = NEJ.O,
    a8i = c9h('nej.e'),
    k9b = c9h('nej.u'),
    O9F = c9h('nej.ut'),
    zP7I;
  if (!!O9F.du0x) return;
  O9F.du0x = NEJ.C();
  zP7I = O9F.du0x.N9E(O9F.dg0x);
  zP7I.cic2x = function(e9f) {
    var bI0x;
    if (!bI0x) {
      var j9a = e9f.input || bb9S;
      bI0x = a8i.B9s(j9a.parent);
    }
    if (!bI0x) {
      var j9a = e9f.data || bb9S;
      bI0x = a8i.B9s(j9a.parent);
    }
    if (!bI0x) {
      bI0x = a8i.B9s(e9f.parent);
    }
    return bI0x;
  };
  zP7I.fb1x = function(e9f) {
    var bI0x = this.cic2x(e9f);
    if (!!bI0x && !!this.n9e) bI0x.appendChild(this.n9e);
    this.gK2x(e9f);
    this.bNb6V('onshow', e9f);
    this.eE0x(e9f);
  };
  zP7I.eE0x = function(e9f) {
    this.gl1x(e9f);
    this.bNb6V('onrefresh', e9f);
  };
  zP7I.kq3x = function() {
    this.lh3x();
    this.chY2x();
    a8i.mu3x(this.n9e);
  };
  zP7I.bMZ6T = (function() {
    var gH2x = /^onshow|onrefresh|delay$/;
    return function(ck0x) {
      return gH2x.test(ck0x);
    };
  })();
  zP7I.bMY6S = br9i;
  zP7I.bNb6V = (function() {
    var bMW5b = function(bv9m, e9f, ck0x, pG4K) {
      if (this.bMZ6T(pG4K)) return;
      if (!!bv9m) ck0x += (ck0x.indexOf('?') > 1 ? '&' : '?') + bv9m;
      var dm0x = this.bMY6S(pG4K, e9f) || {};
      dm0x.location = e9f;
      dm0x.parent = this.iY2x[pG4K];
      this.AA8s.ix2x(ck0x, {
        input: dm0x,
      });
    };
    return function(u9l, e9f) {
      if (!e9f.nodelay) {
        if (!!this.KF0x.delay) return;
        var bMU5Z = this.KF0x[u9l] || bb9S;
        if (bMU5Z.delay) return;
      }
      var bv9m = k9b.cF0x(e9f.param) || '';
      if (u9l == 'onrefresh') {
        k9b.eD0x(this.KF0x, bMW5b.g9d(this, bv9m, e9f));
      }
      k9b.eD0x(bMU5Z, bMW5b.g9d(this, bv9m, e9f));
    };
  })();
  zP7I.chY2x = (function() {
    var CN8F = function(ck0x, pG4K) {
      if (!this.bMZ6T(pG4K)) this.AA8s.bt9k(ck0x);
    };
    return function() {
      k9b.eD0x(this.KF0x, CN8F, this);
      k9b.eD0x(this.KF0x.onshow, CN8F, this);
      k9b.eD0x(this.KF0x.onrefresh, CN8F, this);
    };
  })();
})();
(function() {
  var c9h = NEJ.P,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    I9z = c9h('nej.ut'),
    v9m = c9h('nej.j'),
    k9b = c9h('nej.u'),
    E9v = c9h('nm.m'),
    l9c = c9h('nm.x'),
    q9h = c9h('nm.d'),
    b9i,
    K9B;
  E9v.PD3x = NEJ.C();
  b9i = E9v.PD3x.N9E(I9z.cI0x);
  b9i.cy0x = function() {
    this.cG0x();
    this.n9e = a8i.B9s('g-topbar');
    var i9b = a8i.H9y(this.n9e, 'j-tflag');
    this.bup1x = i9b[0];
    this.Gv9m = i9b[1];
    this.bMT5Y = i9b[2];
    this.buw1x = i9b[3];
    this.chP2x = I9z.nU4Y.A9r({
      list: this.bup1x.getElementsByTagName('a'),
      selected: 'z-slt',
      dataset: 'module',
    });
    this.buC1x = I9z.nU4Y.A9r({
      list: this.buw1x.getElementsByTagName('a'),
      selected: 'z-slt',
      dataset: 'module',
    });
    this.bX0x([
      [this.n9e, 'click', this.PB3x.g9d(this)],
      [this.Gv9m, 'click', this.cK0x.g9d(this)],
      [this.Gv9m, 'mouseout', this.bMS5X.g9d(this, 0)],
      [this.Gv9m, 'mouseover', this.bMS5X.g9d(this, 1)],
    ]);
    window.scrollTopbar = this.chN2x.g9d(this);
    window.matchNav = this.bMR5W.g9d(this);
    window.polling = this.vO6I.g9d(this);
    this.buM1x = q9h.Fz9q.A9r();
    this.chL2x();
    this.KA0x();
    var bv9m = k9b.hy2x(location.href.split('?')[1]) || {};
    if (bv9m.market) {
      a8i.B9s('topbar-download-link').href = '/download?market=' + bv9m.market;
    }
    var buW1x = a8i.H9y(this.n9e, 'j-showoff');
    if (buW1x && !this.buM1x.bsw1x('newMvSearch')) {
      a8i.x9o(buW1x[0], 'f-hide');
      window.setTimeout(function() {
        a8i.y9p(buW1x[0], 'f-hide');
      }, 5000);
    }
  };
  b9i.vO6I = function(d9g) {
    var dP0x = l9c.Me1x();
    if (!/^\/msg/.test(dP0x)) {
      var xk7d = 0;
      xk7d += d9g.comment;
      xk7d += d9g.forward;
      xk7d += d9g.msg;
      xk7d += d9g.notice;
      if (xk7d > 0) {
        xk7d = xk7d > 99 ? '99+' : xk7d;
        this.Pv2x.innerText = xk7d;
        this.Kz0x.innerText = xk7d;
        a8i.x9o(this.Pv2x, 'f-hide');
        a8i.x9o(this.Kz0x, 'f-hide');
        this.ZH6B = true;
      } else {
        a8i.y9p(this.Pv2x, 'f-hide');
        a8i.y9p(this.Kz0x, 'f-hide');
        this.ZH6B = false;
      }
      var eT1x = '/at';
      if (d9g.notice) eT1x = '/notify';
      if (d9g.comment) eT1x = '/comment';
      if (d9g.msg > 0) eT1x = '/private';
      if (d9g.forward > 0) eT1x = '/at';
      this.Kz0x.parentNode.href = '/msg/#' + eT1x;
    } else {
      this.Kz0x.parentNode.href = 'javascript:;';
      a8i.y9p(this.Pv2x, 'f-hide');
      a8i.y9p(this.Kz0x, 'f-hide');
      this.ZH6B = false;
    }
    var i9b = a8i.H9y(this.bup1x, 'j-t');
    if (!/^\/friend/.test(dP0x)) {
      if (i9b && i9b.length) {
        a8i.ba9R(i9b[0], 'display', d9g.event > 0 ? '' : 'none');
      }
    } else {
      a8i.ba9R(i9b[0], 'display', 'none');
    }
  };
  b9i.cK0x = function(d9g) {
    var f9e = h9c.W9N(d9g, 'd:action');
    if (f9e) {
      switch (a8i.t9k(f9e, 'action')) {
        case 'login':
          h9c.cr0x(d9g);
          var u9l = a8i.t9k(f9e, 'type');
          if (u9l) {
            if (u9l == 'sina' || u9l == 'tencent') top.open(f9e.href);
            else top.login(u9l == 'mobile' ? 0 : 3);
          } else {
            top.login();
          }
          break;
        case 'logout':
          h9c.cr0x(d9g);
          top.logout();
          break;
        case 'viewStore':
          if (!this.buM1x.bsw1x('storeNew')) {
            a8i.y9p(this.cFQ7J, 'f-vhide');
          }
          break;
        case 'viewLevel':
          if (!this.buM1x.bsw1x('levelNew')) {
            a8i.y9p(this.cFS7L, 'f-vhide');
          }
          break;
      }
    }
  };
  b9i.PB3x = function(d9g) {
    var f9e = h9c.W9N(d9g, 'd:action');
    if (!f9e) return;
    var U9L = a8i.t9k(f9e, 'action');
    switch (U9L) {
      case 'bilog':
        var bvv1x = a8i.t9k(f9e, 'logAction'),
          bvx1x = a8i.t9k(f9e, 'logJson');
        window.log(bvv1x, bvx1x);
        break;
    }
  };
  b9i.bMS5X = function(Kw0x, d9g) {
    if (this.bvz1x) {
      this.bvz1x.style.display = !Kw0x ? 'none' : '';
      (Kw0x || !this.ZH6B ? a8i.y9p : a8i.x9o).call(window, this.Pv2x, 'f-hide');
    }
  };
  b9i.chN2x = function(fZ1x) {
    a8i.ba9R(this.n9e, 'top', -fZ1x + 'px');
  };
  b9i.bMR5W = function(eT1x, chF1x) {
    this.chP2x.nS4W(eT1x);
    if (eT1x == 'discover') {
      a8i.y9p(this.bMT5Y, 'f-hide');
      a8i.x9o(this.buw1x, 'f-hide');
      window.g_topBarHeight = 105;
      this.buC1x.nS4W(chF1x);
    } else {
      a8i.x9o(this.bMT5Y, 'f-hide');
      a8i.y9p(this.buw1x, 'f-hide');
      window.g_topBarHeight = 75;
    }
  };
  b9i.chL2x = function() {
    var ej0x = a8i.B9s('g_iframe');
    if (!ej0x) return;
    var gz1x = ej0x.contentWindow.document.getElementById('g_top');
    this.bMR5W(a8i.t9k(gz1x, 'module'), a8i.t9k(gz1x, 'sub'));
  };
  var ZQ6K = {},
    bMN5S = /\/\/\w+/,
    chC1x = {
      avatarUrl: function(a, b) {
        a = a || '';
        b = b || '';
        return a.replace(bMN5S, '') !== b.replace(bMN5S, '');
      },
      userId: true,
      nickname: true,
      reward: true,
      topic: true,
      djStatus: true,
    };
  b9i.chB1x = function(ZR6L) {
    var of4j = k9b.di0x(chC1x, function(D9u, J9A) {
      if (k9b.gJ2x(D9u)) {
        return D9u(ZR6L[J9A], ZQ6K[J9A]);
      } else {
        return ZR6L[J9A] !== ZQ6K[J9A];
      }
    });
    ZQ6K = ZR6L;
    return ZR6L[of4j];
  };
  b9i.KA0x = function() {
    var do0x = GUser || {},
      chy1x = GUserAcc || {};
    if (do0x && do0x.userId) {
      var bMM5R = NEJ.X(do0x, chy1x);
      if (this.chB1x(bMM5R)) {
        a8i.dz0x(this.Gv9m, 'm-topbar-user-login', bMM5R);
      }
    } else {
      ZQ6K = {};
      this.Gv9m.innerHTML = a8i.iH2x('m-topbar-user-unlogin');
      var i9b = a8i.H9y(this.bup1x, 'j-t');
      a8i.ba9R(i9b[0], 'display', 'none');
    }
    a8i.x9o(this.Gv9m, 'f-hide');
    this.ZH6B = false;
    var i9b = a8i.H9y(this.Gv9m, 'j-uflag');
    if (do0x && do0x.userId) {
      this.Pv2x = i9b.shift();
      this.bvz1x = i9b.shift();
      this.Kz0x = i9b.shift();
    } else {
      this.bvz1x = i9b.shift();
    }
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    br9i = NEJ.F,
    h9c = c9h('nej.v'),
    I9z = c9h('nej.ut'),
    q9h = c9h('nm.d'),
    b9i,
    K9B;
  q9h.fl1x({
    'polling-get': {
      type: 'GET',
      url: '/api/pl/count',
      format: function(Q9H) {
        h9c.z9q(q9h.tP5U, 'message', Q9H);
      },
    },
  });
  q9h.tP5U = NEJ.C();
  b9i = q9h.tP5U.N9E(q9h.hL2x);
  b9i.ZU6O = function() {
    this.cp0x('polling-get', {});
  };
  b9i.vI6C = (function() {
    var ei0x;
    return function() {
      if (!!ei0x) return;
      ei0x = window.setInterval(this.ZU6O.g9d(this), 100000);
      this.ZU6O();
    };
  })();
  I9z.fL1x.A9r({
    event: 'message',
    element: q9h.tP5U,
  });
})();
var io = 'undefined' === typeof module ? {} : module.exports;
(function() {
  (function(exports, global) {
    var io = exports;
    io.version = '0.9.16';
    io.protocol = 1;
    io.transports = [];
    io.j = [];
    io.sockets = {};
    io.connect = function(host, details) {
      var uri = io.util.parseUri(host),
        uuri,
        socket;
      if (global && global.location) {
        uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
        uri.host =
          uri.host ||
          (global.document ? global.document.domain : global.location.hostname);
        uri.port = uri.port || global.location.port;
      }
      uuri = io.util.uniqueUri(uri);
      var options = {
        host: uri.host,
        secure: 'https' == uri.protocol,
        port: uri.port || ('https' == uri.protocol ? 443 : 80),
        query: uri.query || '',
      };
      io.util.merge(options, details);
      if (options['force new connection'] || !io.sockets[uuri]) {
        socket = new io.Socket(options);
      }
      if (!options['force new connection'] && socket) {
        io.sockets[uuri] = socket;
      }
      socket = socket || io.sockets[uuri];
      return socket.of(uri.path.length > 1 ? uri.path : '');
    };
  })('object' === typeof module ? module.exports : (this.io = {}), this);
  (function(exports, global) {
    var util = (exports.util = {});
    var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
    var parts = [
      'source',
      'protocol',
      'authority',
      'userInfo',
      'user',
      'password',
      'host',
      'port',
      'relative',
      'path',
      'directory',
      'file',
      'query',
      'anchor',
    ];
    util.parseUri = function(str) {
      var m = re.exec(str || ''),
        uri = {},
        i = 14;
      while (i--) {
        uri[parts[i]] = m[i] || '';
      }
      return uri;
    };
    util.uniqueUri = function(uri) {
      var protocol = uri.protocol,
        host = uri.host,
        port = uri.port;
      if ('document' in global) {
        host = host || document.domain;
        port =
          port ||
          (protocol == 'https' && document.location.protocol !== 'https:'
            ? 443
            : document.location.port);
      } else {
        host = host || 'localhost';
        if (!port && protocol == 'https') {
          port = 443;
        }
      }
      return (protocol || 'http') + '://' + host + ':' + (port || 80);
    };
    util.query = function(base, addition) {
      var query = util.chunkQuery(base || ''),
        components = [];
      util.merge(query, util.chunkQuery(addition || ''));
      for (var part in query) {
        if (query.hasOwnProperty(part)) {
          components.push(part + '=' + query[part]);
        }
      }
      return components.length ? '?' + components.join('&') : '';
    };
    util.chunkQuery = function(qs) {
      var query = {},
        params = qs.split('&'),
        i = 0,
        l = params.length,
        kv;
      for (; i < l; ++i) {
        kv = params[i].split('=');
        if (kv[0]) {
          query[kv[0]] = kv[1];
        }
      }
      return query;
    };
    var pageLoaded = false;
    util.load = function(fn) {
      if (('document' in global && document.readyState === 'complete') || pageLoaded) {
        return fn();
      }
      util.on(global, 'load', fn, false);
    };
    util.on = function(element, event, fn, capture) {
      if (element.attachEvent) {
        element.attachEvent('on' + event, fn);
      } else if (element.addEventListener) {
        element.addEventListener(event, fn, capture);
      }
    };
    util.request = function(xdomain) {
      if (xdomain && 'undefined' != typeof XDomainRequest && !util.ua.hasCORS) {
        return new XDomainRequest();
      }
      if ('undefined' != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
        return new XMLHttpRequest();
      }
      if (!xdomain) {
        try {
          return new window[(['Active'].concat('Object').join('X'))]('Microsoft.XMLHTTP');
        } catch (e) {}
      }
      return null;
    };
    if ('undefined' != typeof window) {
      util.load(function() {
        pageLoaded = true;
      });
    }
    util.defer = function(fn) {
      if (!util.ua.webkit || 'undefined' != typeof importScripts) {
        return fn();
      }
      util.load(function() {
        setTimeout(fn, 100);
      });
    };
    util.merge = function merge(target, additional, deep, lastseen) {
      var seen = lastseen || [],
        depth = typeof deep == 'undefined' ? 2 : deep,
        prop;
      for (prop in additional) {
        if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) {
          if (typeof target[prop] !== 'object' || !depth) {
            target[prop] = additional[prop];
            seen.push(additional[prop]);
          } else {
            util.merge(target[prop], additional[prop], depth - 1, seen);
          }
        }
      }
      return target;
    };
    util.mixin = function(ctor, ctor2) {
      util.merge(ctor.prototype, ctor2.prototype);
    };
    util.inherit = function(ctor, ctor2) {
      function f() {}
      f.prototype = ctor2.prototype;
      ctor.prototype = new f();
    };
    util.isArray =
      Array.isArray ||
      function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
      };
    util.intersect = function(arr, arr2) {
      var ret = [],
        longest = arr.length > arr2.length ? arr : arr2,
        shortest = arr.length > arr2.length ? arr2 : arr;
      for (var i = 0, l = shortest.length; i < l; i++) {
        if (~util.indexOf(longest, shortest[i])) ret.push(shortest[i]);
      }
      return ret;
    };
    util.indexOf = function(arr, o, i) {
      for (
        var j = arr.length, i = i < 0 ? (i + j < 0 ? 0 : i + j) : i || 0;
        i < j && arr[i] !== o;
        i++
      ) {}
      return j <= i ? -1 : i;
    };
    util.toArray = function(enu) {
      var arr = [];
      for (var i = 0, l = enu.length; i < l; i++) arr.push(enu[i]);
      return arr;
    };
    util.ua = {};
    util.ua.hasCORS =
      'undefined' != typeof XMLHttpRequest &&
      (function() {
        try {
          var a = new XMLHttpRequest();
        } catch (e) {
          return false;
        }
        return a.withCredentials != undefined;
      })();
    util.ua.webkit =
      'undefined' != typeof navigator && /webkit/i.test(navigator.userAgent);
    util.ua.iDevice =
      'undefined' != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent);
  })('undefined' != typeof io ? io : module.exports, this);
  (function(exports, io) {
    exports.EventEmitter = EventEmitter;
    function EventEmitter() {}
    EventEmitter.prototype.on = function(name, fn) {
      if (!this.$events) {
        this.$events = {};
      }
      if (!this.$events[name]) {
        this.$events[name] = fn;
      } else if (io.util.isArray(this.$events[name])) {
        this.$events[name].push(fn);
      } else {
        this.$events[name] = [this.$events[name], fn];
      }
      return this;
    };
    EventEmitter.prototype.addListener = EventEmitter.prototype.on;
    EventEmitter.prototype.once = function(name, fn) {
      var self = this;
      function on() {
        self.removeListener(name, on);
        fn.apply(this, arguments);
      }
      on.listener = fn;
      this.on(name, on);
      return this;
    };
    EventEmitter.prototype.removeListener = function(name, fn) {
      if (this.$events && this.$events[name]) {
        var list = this.$events[name];
        if (io.util.isArray(list)) {
          var pos = -1;
          for (var i = 0, l = list.length; i < l; i++) {
            if (list[i] === fn || (list[i].listener && list[i].listener === fn)) {
              pos = i;
              break;
            }
          }
          if (pos < 0) {
            return this;
          }
          list.splice(pos, 1);
          if (!list.length) {
            delete this.$events[name];
          }
        } else if (list === fn || (list.listener && list.listener === fn)) {
          delete this.$events[name];
        }
      }
      return this;
    };
    EventEmitter.prototype.removeAllListeners = function(name) {
      if (name === undefined) {
        this.$events = {};
        return this;
      }
      if (this.$events && this.$events[name]) {
        this.$events[name] = null;
      }
      return this;
    };
    EventEmitter.prototype.listeners = function(name) {
      if (!this.$events) {
        this.$events = {};
      }
      if (!this.$events[name]) {
        this.$events[name] = [];
      }
      if (!io.util.isArray(this.$events[name])) {
        this.$events[name] = [this.$events[name]];
      }
      return this.$events[name];
    };
    EventEmitter.prototype.emit = function(name) {
      if (!this.$events) {
        return false;
      }
      var handler = this.$events[name];
      if (!handler) {
        return false;
      }
      var args = Array.prototype.slice.call(arguments, 1);
      if ('function' == typeof handler) {
        handler.apply(this, args);
      } else if (io.util.isArray(handler)) {
        var listeners = handler.slice();
        for (var i = 0, l = listeners.length; i < l; i++) {
          listeners[i].apply(this, args);
        }
      } else {
        return false;
      }
      return true;
    };
  })(
    'undefined' != typeof io ? io : module.exports,
    'undefined' != typeof io ? io : module.parent.exports
  );
  (function(exports, nativeJSON) {
    'use strict';
    if (nativeJSON && nativeJSON.parse) {
      return (exports.JSON = {
        parse: nativeJSON.parse,
        stringify: nativeJSON.stringify,
      });
    }
    var JSON = (exports.JSON = {});
    function f(n) {
      return n < 10 ? '0' + n : n;
    }
    function date(d, key) {
      return isFinite(d.valueOf())
        ? d.getUTCFullYear() +
            '-' +
            f(d.getUTCMonth() + 1) +
            '-' +
            f(d.getUTCDate()) +
            'T' +
            f(d.getUTCHours()) +
            ':' +
            f(d.getUTCMinutes()) +
            ':' +
            f(d.getUTCSeconds()) +
            'Z'
        : null;
    }
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      gap,
      indent,
      meta = {
        '': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"': '\\"',
        '\\': '\\\\',
      },
      rep;
    function quote(string) {
      escapable.lastIndex = 0;
      return escapable.test(string)
        ? '"' +
            string.replace(escapable, function(a) {
              var c = meta[a];
              return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) +
            '"'
        : '"' + string + '"';
    }
    function str(key, holder) {
      var i,
        k,
        v,
        length,
        mind = gap,
        partial,
        value = holder[key];
      if (value instanceof Date) {
        value = date(key);
      }
      if (typeof rep === 'function') {
        value = rep.call(holder, key, value);
      }
      switch (typeof value) {
        case 'string':
          return quote(value);
        case 'number':
          return isFinite(value) ? String(value) : 'null';
        case 'boolean':
        case 'null':
          return String(value);
        case 'object':
          if (!value) {
            return 'null';
          }
          gap += indent;
          partial = [];
          if (Object.prototype.toString.apply(value) === '[object Array]') {
            length = value.length;
            for (i = 0; i < length; i += 1) {
              partial[i] = str(i, value) || 'null';
            }
            v =
              partial.length === 0
                ? '[]'
                : gap
                  ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                  : '[' + partial.join(',') + ']';
            gap = mind;
            return v;
          }
          if (rep && typeof rep === 'object') {
            length = rep.length;
            for (i = 0; i < length; i += 1) {
              if (typeof rep[i] === 'string') {
                k = rep[i];
                v = str(k, value);
                if (v) {
                  partial.push(quote(k) + (gap ? ': ' : ':') + v);
                }
              }
            }
          } else {
            for (k in value) {
              if (Object.prototype.hasOwnProperty.call(value, k)) {
                v = str(k, value);
                if (v) {
                  partial.push(quote(k) + (gap ? ': ' : ':') + v);
                }
              }
            }
          }
          v =
            partial.length === 0
              ? '{}'
              : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
          gap = mind;
          return v;
      }
    }
    JSON.stringify = function(value, replacer, space) {
      var i;
      gap = '';
      indent = '';
      if (typeof space === 'number') {
        for (i = 0; i < space; i += 1) {
          indent += ' ';
        }
      } else if (typeof space === 'string') {
        indent = space;
      }
      rep = replacer;
      if (
        replacer &&
        typeof replacer !== 'function' &&
        (typeof replacer !== 'object' || typeof replacer.length !== 'number')
      ) {
        throw new Error('JSON.stringify');
      }
      return str('', {
        '': value,
      });
    };
    JSON.parse = function(text, reviver) {
      var j;
      function walk(holder, key) {
        var k,
          v,
          value = holder[key];
        if (value && typeof value === 'object') {
          for (k in value) {
            if (Object.prototype.hasOwnProperty.call(value, k)) {
              v = walk(value, k);
              if (v !== undefined) {
                value[k] = v;
              } else {
                delete value[k];
              }
            }
          }
        }
        return reviver.call(holder, key, value);
      }
      text = String(text);
      cx.lastIndex = 0;
      if (cx.test(text)) {
        text = text.replace(cx, function(a) {
          return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        });
      }
      if (
        /^[\],:{}\s]*$/.test(
          text
            .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
            .replace(
              /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
              ']'
            )
            .replace(/(?:^|:|,)(?:\s*\[)+/g, '')
        )
      ) {
        j = eval('(' + text + ')');
        return typeof reviver === 'function'
          ? walk(
              {
                '': j,
              },
              ''
            )
          : j;
      }
      throw new SyntaxError('JSON.parse');
    };
  })(
    'undefined' != typeof io ? io : module.exports,
    typeof JSON !== 'undefined' ? JSON : undefined
  );
  (function(exports, io) {
    var parser = (exports.parser = {});
    var packets = (parser.packets = [
      'disconnect',
      'connect',
      'heartbeat',
      'message',
      'json',
      'event',
      'ack',
      'error',
      'noop',
    ]);
    var reasons = (parser.reasons = [
      'transport not supported',
      'client not handshaken',
      'unauthorized',
    ]);
    var advice = (parser.advice = ['reconnect']);
    var JSON = io.JSON,
      indexOf = io.util.indexOf;
    parser.encodePacket = function(packet) {
      var type = indexOf(packets, packet.type),
        id = packet.id || '',
        endpoint = packet.endpoint || '',
        ack = packet.ack,
        data = null;
      switch (packet.type) {
        case 'error':
          var reason = packet.reason ? indexOf(reasons, packet.reason) : '',
            adv = packet.advice ? indexOf(advice, packet.advice) : '';
          if (reason !== '' || adv !== '') data = reason + (adv !== '' ? '+' + adv : '');
          break;
        case 'message':
          if (packet.data !== '') data = packet.data;
          break;
        case 'event':
          var ev = {
            name: packet.name,
          };
          if (packet.args && packet.args.length) {
            ev.args = packet.args;
          }
          data = JSON.stringify(ev);
          break;
        case 'json':
          data = JSON.stringify(packet.data);
          break;
        case 'connect':
          if (packet.qs) data = packet.qs;
          break;
        case 'ack':
          data =
            packet.ackId +
            (packet.args && packet.args.length ? '+' + JSON.stringify(packet.args) : '');
          break;
      }
      var encoded = [type, id + (ack == 'data' ? '+' : ''), endpoint];
      if (data !== null && data !== undefined) encoded.push(data);
      return encoded.join(':');
    };
    parser.encodePayload = function(packets) {
      var decoded = '';
      if (packets.length == 1) return packets[0];
      for (var i = 0, l = packets.length; i < l; i++) {
        var packet = packets[i];
        decoded += '�' + packet.length + '�' + packets[i];
      }
      return decoded;
    };
    var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
    parser.decodePacket = function(data) {
      var pieces = data.match(regexp);
      if (!pieces) return {};
      var id = pieces[2] || '',
        data = pieces[5] || '',
        packet = {
          type: packets[pieces[1]],
          endpoint: pieces[4] || '',
        };
      if (id) {
        packet.id = id;
        if (pieces[3]) packet.ack = 'data';
        else packet.ack = true;
      }
      switch (packet.type) {
        case 'error':
          var pieces = data.split('+');
          packet.reason = reasons[pieces[0]] || '';
          packet.advice = advice[pieces[1]] || '';
          break;
        case 'message':
          packet.data = data || '';
          break;
        case 'event':
          try {
            var opts = JSON.parse(data);
            packet.name = opts.name;
            packet.args = opts.args;
          } catch (e) {}
          packet.args = packet.args || [];
          break;
        case 'json':
          try {
            packet.data = JSON.parse(data);
          } catch (e) {}
          break;
        case 'connect':
          packet.qs = data || '';
          break;
        case 'ack':
          var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
          if (pieces) {
            packet.ackId = pieces[1];
            packet.args = [];
            if (pieces[3]) {
              try {
                packet.args = pieces[3] ? JSON.parse(pieces[3]) : [];
              } catch (e) {}
            }
          }
          break;
        case 'disconnect':
        case 'heartbeat':
          break;
      }
      return packet;
    };
    parser.decodePayload = function(data) {
      if (data.charAt(0) == '�') {
        var ret = [];
        for (var i = 1, length = ''; i < data.length; i++) {
          if (data.charAt(i) == '�') {
            ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
            i += Number(length) + 1;
            length = '';
          } else {
            length += data.charAt(i);
          }
        }
        return ret;
      } else {
        return [parser.decodePacket(data)];
      }
    };
  })(
    'undefined' != typeof io ? io : module.exports,
    'undefined' != typeof io ? io : module.parent.exports
  );
  (function(exports, io) {
    exports.Transport = Transport;
    function Transport(socket, sessid) {
      this.socket = socket;
      this.sessid = sessid;
    }
    io.util.mixin(Transport, io.EventEmitter);
    Transport.prototype.heartbeats = function() {
      return true;
    };
    Transport.prototype.onData = function(data) {
      this.clearCloseTimeout();
      if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) {
        this.setCloseTimeout();
      }
      if (data !== '') {
        var msgs = io.parser.decodePayload(data);
        if (msgs && msgs.length) {
          for (var i = 0, l = msgs.length; i < l; i++) {
            this.onPacket(msgs[i]);
          }
        }
      }
      return this;
    };
    Transport.prototype.onPacket = function(packet) {
      this.socket.setHeartbeatTimeout();
      if (packet.type == 'heartbeat') {
        return this.onHeartbeat();
      }
      if (packet.type == 'connect' && packet.endpoint == '') {
        this.onConnect();
      }
      if (packet.type == 'error' && packet.advice == 'reconnect') {
        this.isOpen = false;
      }
      this.socket.onPacket(packet);
      return this;
    };
    Transport.prototype.setCloseTimeout = function() {
      if (!this.closeTimeout) {
        var self = this;
        this.closeTimeout = setTimeout(function() {
          self.onDisconnect();
        }, this.socket.closeTimeout);
      }
    };
    Transport.prototype.onDisconnect = function() {
      if (this.isOpen) this.close();
      this.clearTimeouts();
      this.socket.onDisconnect();
      return this;
    };
    Transport.prototype.onConnect = function() {
      this.socket.onConnect();
      return this;
    };
    Transport.prototype.clearCloseTimeout = function() {
      if (this.closeTimeout) {
        clearTimeout(this.closeTimeout);
        this.closeTimeout = null;
      }
    };
    Transport.prototype.clearTimeouts = function() {
      this.clearCloseTimeout();
      if (this.reopenTimeout) {
        clearTimeout(this.reopenTimeout);
      }
    };
    Transport.prototype.packet = function(packet) {
      this.send(io.parser.encodePacket(packet));
    };
    Transport.prototype.onHeartbeat = function(heartbeat) {
      this.packet({
        type: 'heartbeat',
      });
    };
    Transport.prototype.onOpen = function() {
      this.isOpen = true;
      this.clearCloseTimeout();
      this.socket.onOpen();
    };
    Transport.prototype.onClose = function() {
      var self = this;
      this.isOpen = false;
      this.socket.onClose();
      this.onDisconnect();
    };
    Transport.prototype.prepareUrl = function() {
      var options = this.socket.options;
      return (
        this.scheme() +
        '://' +
        options.host +
        ':' +
        options.port +
        '/' +
        options.resource +
        '/' +
        io.protocol +
        '/' +
        this.name +
        '/' +
        this.sessid
      );
    };
    Transport.prototype.ready = function(socket, fn) {
      fn.call(this);
    };
  })(
    'undefined' != typeof io ? io : module.exports,
    'undefined' != typeof io ? io : module.parent.exports
  );
  (function(exports, io, global) {
    exports.Socket = Socket;
    function Socket(options) {
      this.options = {
        port: 80,
        secure: false,
        document: 'document' in global ? document : false,
        resource: 'socket.io',
        transports: io.transports,
        'connect timeout': 10000,
        'try multiple transports': true,
        reconnect: true,
        'reconnection delay': 500,
        'reconnection limit': Infinity,
        'reopen delay': 3000,
        'max reconnection attempts': 10,
        'sync disconnect on unload': false,
        'auto connect': true,
        'flash policy port': 10843,
        manualFlush: false,
      };
      io.util.merge(this.options, options);
      this.connected = false;
      this.open = false;
      this.connecting = false;
      this.reconnecting = false;
      this.namespaces = {};
      this.buffer = [];
      this.doBuffer = false;
      if (
        this.options['sync disconnect on unload'] &&
        (!this.isXDomain() || io.util.ua.hasCORS)
      ) {
        var self = this;
        io.util.on(
          global,
          'beforeunload',
          function() {
            self.disconnectSync();
          },
          false
        );
      }
      if (this.options['auto connect']) {
        this.connect();
      }
    }
    io.util.mixin(Socket, io.EventEmitter);
    Socket.prototype.of = function(name) {
      if (!this.namespaces[name]) {
        this.namespaces[name] = new io.SocketNamespace(this, name);
        if (name !== '') {
          this.namespaces[name].packet({
            type: 'connect',
          });
        }
      }
      return this.namespaces[name];
    };
    Socket.prototype.publish = function() {
      this.emit.apply(this, arguments);
      var nsp;
      for (var i in this.namespaces) {
        if (this.namespaces.hasOwnProperty(i)) {
          nsp = this.of(i);
          nsp.$emit.apply(nsp, arguments);
        }
      }
    };
    function empty() {}
    Socket.prototype.handshake = function(fn) {
      var self = this,
        options = this.options;
      function complete(data) {
        if (data instanceof Error) {
          self.connecting = false;
          self.onError(data.message);
        } else {
          fn.apply(null, data.split(':'));
        }
      }
      var url = [
        'http' + (options.secure ? 's' : '') + ':/',
        options.host + ':' + options.port,
        options.resource,
        io.protocol,
        io.util.query(this.options.query, 't=' + +new Date()),
      ].join('/');
      if (this.isXDomain() && !io.util.ua.hasCORS) {
        var insertAt = document.getElementsByTagName('script')[0],
          script = document.createElement('script');
        script.src = url + '&jsonp=' + io.j.length;
        insertAt.parentNode.insertBefore(script, insertAt);
        io.j.push(function(data) {
          complete(data);
          script.parentNode.removeChild(script);
        });
      } else {
        var xhr = io.util.request();
        xhr.open('GET', url, true);
        if (this.isXDomain()) {
          xhr.withCredentials = true;
        }
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4) {
            xhr.onreadystatechange = empty;
            if (xhr.status == 200) {
              complete(xhr.responseText);
            } else if (xhr.status == 403) {
              self.onError(xhr.responseText);
            } else {
              self.connecting = false;
              !self.reconnecting && self.onError(xhr.responseText);
            }
          }
        };
        xhr.send(null);
      }
    };
    Socket.prototype.getTransport = function(override) {
      var transports = override || this.transports,
        match;
      for (var i = 0, transport; (transport = transports[i]); i++) {
        if (
          io.Transport[transport] &&
          io.Transport[transport].check(this) &&
          (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))
        ) {
          return new io.Transport[transport](this, this.sessionid);
        }
      }
      return null;
    };
    Socket.prototype.connect = function(fn) {
      if (this.connecting && this.transports != 'jsonp-polling') {
        return this;
      }
      var self = this;
      self.connecting = true;
      this.handshake(function(sid, heartbeat, close, transports) {
        self.sessionid = sid;
        self.closeTimeout = close * 1000;
        self.heartbeatTimeout = heartbeat * 1000;
        var check = function() {
          return (
            ('WebSocket' in global && !('__addTask' in WebSocket)) ||
            'MozWebSocket' in global
          );
        };
        if (!check()) {
          transports = 'jsonp-polling';
        }
        if (!self.transports)
          self.transports = self.origTransports = transports
            ? io.util.intersect(transports.split(','), self.options.transports)
            : self.options.transports;
        self.setHeartbeatTimeout();
        function connect(transports) {
          if (self.transport) self.transport.clearTimeouts();
          self.transport = self.getTransport(transports);
          if (!self.transport) return self.publish('connect_failed');
          self.transport.ready(self, function() {
            self.connecting = true;
            self.publish('connecting', self.transport.name);
            self.transport.open();
            if (self.options['connect timeout']) {
              self.connectTimeoutTimer = setTimeout(function() {
                if (!self.connected) {
                  self.connecting = false;
                  if (self.options['try multiple transports']) {
                    var remaining = self.transports;
                    while (
                      remaining.length > 0 &&
                      remaining.splice(0, 1)[0] != self.transport.name
                    ) {}
                    if (remaining.length) {
                      connect(remaining);
                    } else {
                      self.publish('connect_failed');
                    }
                  }
                }
              }, self.options['connect timeout']);
            }
          });
        }
        connect(self.transports);
        self.once('connect', function() {
          clearTimeout(self.connectTimeoutTimer);
          fn && typeof fn == 'function' && fn();
        });
      });
      return this;
    };
    Socket.prototype.setHeartbeatTimeout = function() {
      clearTimeout(this.heartbeatTimeoutTimer);
      if (this.transport && !this.transport.heartbeats()) return;
      var self = this;
      this.heartbeatTimeoutTimer = setTimeout(function() {
        self.transport.onClose();
      }, this.heartbeatTimeout);
    };
    Socket.prototype.packet = function(data) {
      if (this.connected && !this.doBuffer) {
        this.transport.packet(data);
      } else {
        this.buffer.push(data);
      }
      return this;
    };
    Socket.prototype.setBuffer = function(v) {
      this.doBuffer = v;
      if (!v && this.connected && this.buffer.length) {
        if (!this.options['manualFlush']) {
          this.flushBuffer();
        }
      }
    };
    Socket.prototype.flushBuffer = function() {
      this.transport.payload(this.buffer);
      this.buffer = [];
    };
    Socket.prototype.disconnect = function() {
      if (this.connected || this.connecting) {
        if (this.open) {
          this.of('').packet({
            type: 'disconnect',
          });
        }
        this.onDisconnect('booted');
      }
      return this;
    };
    Socket.prototype.disconnectSync = function() {
      var xhr = io.util.request();
      var uri =
        [
          'http' + (this.options.secure ? 's' : '') + ':/',
          this.options.host + ':' + this.options.port,
          this.options.resource,
          io.protocol,
          '',
          this.sessionid,
        ].join('/') + '/?disconnect=1';
      xhr.open('GET', uri, false);
      xhr.send(null);
      this.onDisconnect('booted');
    };
    Socket.prototype.isXDomain = function() {
      var port =
        global.location.port || ('https:' == global.location.protocol ? 443 : 80);
      return this.options.host !== global.location.hostname || this.options.port != port;
    };
    Socket.prototype.onConnect = function() {
      if (!this.connected) {
        this.connected = true;
        this.connecting = false;
        if (!this.doBuffer) {
          this.setBuffer(false);
        }
        this.emit('connect');
      }
    };
    Socket.prototype.onOpen = function() {
      this.open = true;
    };
    Socket.prototype.onClose = function() {
      this.open = false;
      clearTimeout(this.heartbeatTimeoutTimer);
    };
    Socket.prototype.onPacket = function(packet) {
      this.of(packet.endpoint).onPacket(packet);
    };
    Socket.prototype.onError = function(err) {
      if (err && err.advice) {
        if (err.advice === 'reconnect' && (this.connected || this.connecting)) {
          this.disconnect();
          if (this.options.reconnect) {
            this.reconnect();
          }
        }
      }
      this.publish('error', err && err.reason ? err.reason : err);
    };
    Socket.prototype.onDisconnect = function(reason) {
      var wasConnected = this.connected,
        wasConnecting = this.connecting;
      this.connected = false;
      this.connecting = false;
      this.open = false;
      if (wasConnected || wasConnecting) {
        this.transport.close();
        this.transport.clearTimeouts();
        if (wasConnected) {
          this.publish('disconnect', reason);
          if ('booted' != reason && this.options.reconnect && !this.reconnecting) {
            this.reconnect();
          }
        }
      }
    };
    Socket.prototype.reconnect = function() {
      this.reconnecting = true;
      this.reconnectionAttempts = 0;
      this.reconnectionDelay = this.options['reconnection delay'];
      var self = this,
        maxAttempts = this.options['max reconnection attempts'],
        tryMultiple = this.options['try multiple transports'],
        limit = this.options['reconnection limit'];
      function reset() {
        if (self.connected) {
          for (var i in self.namespaces) {
            if (self.namespaces.hasOwnProperty(i) && '' !== i) {
              self.namespaces[i].packet({
                type: 'connect',
              });
            }
          }
          self.publish('reconnect', self.transport.name, self.reconnectionAttempts);
        }
        clearTimeout(self.reconnectionTimer);
        self.removeListener('connect_failed', maybeReconnect);
        self.removeListener('connect', maybeReconnect);
        self.reconnecting = false;
        delete self.reconnectionAttempts;
        delete self.reconnectionDelay;
        delete self.reconnectionTimer;
        delete self.redoTransports;
        self.options['try multiple transports'] = tryMultiple;
      }
      function maybeReconnect() {
        if (!self.reconnecting) {
          return;
        }
        if (self.connected) {
          return reset();
        }
        if (self.connecting && self.reconnecting && self.transports != 'jsonp-polling') {
          return (self.reconnectionTimer = setTimeout(maybeReconnect, 1000));
        }
        if (self.reconnectionAttempts++ >= maxAttempts) {
          if (!self.redoTransports) {
            self.on('connect_failed', maybeReconnect);
            self.options['try multiple transports'] = true;
            self.transports = self.origTransports;
            self.transport = self.getTransport();
            self.redoTransports = true;
            self.connect();
          } else {
            self.publish('reconnect_failed');
            reset();
          }
        } else {
          if (self.reconnectionDelay < limit) {
            self.reconnectionDelay *= 2;
          }
          self.connect();
          self.publish('reconnecting', self.reconnectionDelay, self.reconnectionAttempts);
          self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay);
        }
      }
      this.options['try multiple transports'] = false;
      this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);
      this.on('connect', maybeReconnect);
    };
  })(
    'undefined' != typeof io ? io : module.exports,
    'undefined' != typeof io ? io : module.parent.exports,
    this
  );
  (function(exports, io) {
    exports.SocketNamespace = SocketNamespace;
    function SocketNamespace(socket, name) {
      this.socket = socket;
      this.name = name || '';
      this.flags = {};
      this.json = new Flag(this, 'json');
      this.ackPackets = 0;
      this.acks = {};
    }
    io.util.mixin(SocketNamespace, io.EventEmitter);
    SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;
    SocketNamespace.prototype.of = function() {
      return this.socket.of.apply(this.socket, arguments);
    };
    SocketNamespace.prototype.packet = function(packet) {
      packet.endpoint = this.name;
      this.socket.packet(packet);
      this.flags = {};
      return this;
    };
    SocketNamespace.prototype.send = function(data, fn) {
      var packet = {
        type: this.flags.json ? 'json' : 'message',
        data: data,
      };
      if ('function' == typeof fn) {
        packet.id = ++this.ackPackets;
        packet.ack = true;
        this.acks[packet.id] = fn;
      }
      return this.packet(packet);
    };
    SocketNamespace.prototype.emit = function(name) {
      var args = Array.prototype.slice.call(arguments, 1),
        lastArg = args[args.length - 1],
        packet = {
          type: 'event',
          name: name,
        };
      if ('function' == typeof lastArg) {
        packet.id = ++this.ackPackets;
        packet.ack = 'data';
        this.acks[packet.id] = lastArg;
        args = args.slice(0, args.length - 1);
      }
      packet.args = args;
      return this.packet(packet);
    };
    SocketNamespace.prototype.disconnect = function() {
      if (this.name === '') {
        this.socket.disconnect();
      } else {
        this.packet({
          type: 'disconnect',
        });
        this.$emit('disconnect');
      }
      return this;
    };
    SocketNamespace.prototype.onPacket = function(packet) {
      var self = this;
      function ack() {
        self.packet({
          type: 'ack',
          args: io.util.toArray(arguments),
          ackId: packet.id,
        });
      }
      switch (packet.type) {
        case 'connect':
          this.$emit('connect');
          break;
        case 'disconnect':
          if (this.name === '') {
            this.socket.onDisconnect(packet.reason || 'booted');
          } else {
            this.$emit('disconnect', packet.reason);
          }
          break;
        case 'message':
        case 'json':
          var params = ['message', packet.data];
          if (packet.ack == 'data') {
            params.push(ack);
          } else if (packet.ack) {
            this.packet({
              type: 'ack',
              ackId: packet.id,
            });
          }
          this.$emit.apply(this, params);
          break;
        case 'event':
          var params = [packet.name].concat(packet.args);
          if (packet.ack == 'data') params.push(ack);
          this.$emit.apply(this, params);
          break;
        case 'ack':
          if (this.acks[packet.ackId]) {
            this.acks[packet.ackId].apply(this, packet.args);
            delete this.acks[packet.ackId];
          }
          break;
        case 'error':
          if (packet.advice) {
            this.socket.onError(packet);
          } else {
            if (packet.reason == 'unauthorized') {
              this.$emit('connect_failed', packet.reason);
            } else {
              this.$emit('error', packet.reason);
            }
          }
          break;
      }
    };
    function Flag(nsp, name) {
      this.namespace = nsp;
      this.name = name;
    }
    Flag.prototype.send = function() {
      this.namespace.flags[this.name] = true;
      this.namespace.send.apply(this.namespace, arguments);
    };
    Flag.prototype.emit = function() {
      this.namespace.flags[this.name] = true;
      this.namespace.emit.apply(this.namespace, arguments);
    };
  })(
    'undefined' != typeof io ? io : module.exports,
    'undefined' != typeof io ? io : module.parent.exports
  );
  (function(exports, io, global) {
    exports.websocket = WS;
    function WS(socket) {
      io.Transport.apply(this, arguments);
    }
    io.util.inherit(WS, io.Transport);
    WS.prototype.name = 'websocket';
    WS.prototype.open = function() {
      var query = io.util.query(this.socket.options.query),
        self = this,
        Socket;
      if (!Socket) {
        Socket = global.MozWebSocket || global.WebSocket;
      }
      this.websocket = new Socket(this.prepareUrl() + query);
      this.websocket.onopen = function() {
        self.onOpen();
        self.socket.setBuffer(false);
      };
      this.websocket.onmessage = function(ev) {
        self.onData(ev.data);
      };
      this.websocket.onclose = function() {
        self.onClose();
        self.socket.setBuffer(true);
      };
      this.websocket.onerror = function(e) {
        self.onError(e);
      };
      return this;
    };
    if (io.util.ua.iDevice) {
      WS.prototype.send = function(data) {
        var self = this;
        setTimeout(function() {
          self.websocket.send(data);
        }, 0);
        return this;
      };
    } else {
      WS.prototype.send = function(data) {
        this.websocket.send(data);
        return this;
      };
    }
    WS.prototype.payload = function(arr) {
      for (var i = 0, l = arr.length; i < l; i++) {
        this.packet(arr[i]);
      }
      return this;
    };
    WS.prototype.close = function() {
      this.websocket.close();
      return this;
    };
    WS.prototype.onError = function(e) {
      this.socket.onError(e);
    };
    WS.prototype.scheme = function() {
      return this.socket.options.secure ? 'wss' : 'ws';
    };
    WS.check = function() {
      return (
        ('WebSocket' in global && !('__addTask' in WebSocket)) || 'MozWebSocket' in global
      );
    };
    WS.xdomainCheck = function() {
      return true;
    };
    io.transports.push('websocket');
  })(
    'undefined' != typeof io ? io.Transport : module.exports,
    'undefined' != typeof io ? io : module.parent.exports,
    this
  );
  (function(exports, io) {
    exports.flashsocket = Flashsocket;
    function Flashsocket() {
      io.Transport.websocket.apply(this, arguments);
    }
    io.util.inherit(Flashsocket, io.Transport.websocket);
    Flashsocket.prototype.name = 'flashsocket';
    Flashsocket.prototype.open = function() {
      var self = this,
        args = arguments;
      WebSocket.ZW6Q(function() {
        io.Transport.websocket.prototype.open.apply(self, args);
      });
      return this;
    };
    Flashsocket.prototype.send = function() {
      var self = this,
        args = arguments;
      WebSocket.ZW6Q(function() {
        io.Transport.websocket.prototype.send.apply(self, args);
      });
      return this;
    };
    Flashsocket.prototype.close = function() {
      WebSocket.Pa2x.length = 0;
      io.Transport.websocket.prototype.close.call(this);
      return this;
    };
    Flashsocket.prototype.ready = function(socket, fn) {
      function init() {
        var options = socket.options,
          port = options['flash policy port'],
          path = [
            'http' + (options.secure ? 's' : '') + ':/',
            options.host + ':' + options.port,
            options.resource,
            'static/flashsocket',
            'WebSocketMain' + (socket.isXDomain() ? 'Insecure' : '') + '.swf',
          ];
        if (!Flashsocket.loaded) {
          if (typeof WEB_SOCKET_SWF_LOCATION === 'undefined') {
            WEB_SOCKET_SWF_LOCATION = path.join('/');
          }
          if (port !== 843) {
            WebSocket.loadFlashPolicyFile('xmlsocket://' + options.host + ':' + port);
          }
          WebSocket.bwq2x();
          Flashsocket.loaded = true;
        }
        fn.call(self);
      }
      var self = this;
      if (document.body) return init();
      io.util.load(init);
    };
    Flashsocket.check = function() {
      if (typeof WebSocket == 'undefined' || !('__initialize' in WebSocket) || !swfobject)
        return false;
      return swfobject.getFlashPlayerVersion().major >= 10;
    };
    Flashsocket.xdomainCheck = function() {
      return true;
    };
    if (typeof window != 'undefined') {
      WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true;
    }
    io.transports.push('flashsocket');
  })(
    'undefined' != typeof io ? io.Transport : module.exports,
    'undefined' != typeof io ? io : module.parent.exports
  );
  if ('undefined' != typeof window) {
    var swfobject = (function() {
      var D = 'undefined',
        r = 'object',
        S = 'Shockwave Flash',
        W = 'ShockwaveFlash.ShockwaveFlash',
        q = 'application/x-shockwave-flash',
        R = 'SWFObjectExprInst',
        x = 'onreadystatechange',
        O = window,
        j = document,
        t = navigator,
        T = false,
        U = [h],
        o = [],
        N = [],
        I = [],
        l,
        Q,
        E,
        B,
        J = false,
        a = false,
        n,
        G,
        m = true,
        M = (function() {
          var aa =
              typeof j.getElementById != D &&
              typeof j.getElementsByTagName != D &&
              typeof j.createElement != D,
            ah = t.userAgent.toLowerCase(),
            Y = t.platform.toLowerCase(),
            ae = Y ? /win/.test(Y) : /win/.test(ah),
            ac = Y ? /mac/.test(Y) : /mac/.test(ah),
            af = /webkit/.test(ah)
              ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, '$1'))
              : false,
            X = !+'\v1',
            ag = [0, 0, 0],
            ab = null;
          if (typeof t.plugins != D && typeof t.plugins[S] == r) {
            ab = t.plugins[S].description;
            if (
              ab &&
              !(
                typeof t.mimeTypes != D &&
                t.mimeTypes[q] &&
                !t.mimeTypes[q].enabledPlugin
              )
            ) {
              T = true;
              X = false;
              ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, '$1');
              ag[0] = parseInt(ab.replace(/^(.*)\..*$/, '$1'), 10);
              ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, '$1'), 10);
              ag[2] = /[a-zA-Z]/.test(ab)
                ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, '$1'), 10)
                : 0;
            }
          } else {
            if (typeof O[['Active'].concat('Object').join('X')] != D) {
              try {
                var ad = new window[(['Active'].concat('Object').join('X'))](W);
                if (ad) {
                  ab = ad.GetVariable('$version');
                  if (ab) {
                    X = true;
                    ab = ab.split(' ')[1].split(',');
                    ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)];
                  }
                }
              } catch (Z) {}
            }
          }
          return {
            w3: aa,
            pv: ag,
            wk: af,
            ie: X,
            win: ae,
            mac: ac,
          };
        })(),
        k = (function() {
          if (!M.w3) {
            return;
          }
          if (
            (typeof j.readyState != D && j.readyState == 'complete') ||
            (typeof j.readyState == D && (j.getElementsByTagName('body')[0] || j.body))
          ) {
            f();
          }
          if (!J) {
            if (typeof j.addEventListener != D) {
              j.addEventListener('DOMContentLoaded', f, false);
            }
            if (M.ie && M.win) {
              j.attachEvent(x, function() {
                if (j.readyState == 'complete') {
                  j.detachEvent(x, arguments.callee);
                  f();
                }
              });
              if (O == top) {
                (function() {
                  if (J) {
                    return;
                  }
                  try {
                    j.documentElement.doScroll('left');
                  } catch (X) {
                    setTimeout(arguments.callee, 0);
                    return;
                  }
                  f();
                })();
              }
            }
            if (M.wk) {
              (function() {
                if (J) {
                  return;
                }
                if (!/loaded|complete/.test(j.readyState)) {
                  setTimeout(arguments.callee, 0);
                  return;
                }
                f();
              })();
            }
            s(f);
          }
        })();
      function f() {
        if (J) {
          return;
        }
        try {
          var Z = j.getElementsByTagName('body')[0].appendChild(C('span'));
          Z.parentNode.removeChild(Z);
        } catch (aa) {
          return;
        }
        J = true;
        var X = U.length;
        for (var Y = 0; Y < X; Y++) {
          U[Y]();
        }
      }
      function K(X) {
        if (J) {
          X();
        } else {
          U[U.length] = X;
        }
      }
      function s(Y) {
        if (typeof O.addEventListener != D) {
          O.addEventListener('load', Y, false);
        } else {
          if (typeof j.addEventListener != D) {
            j.addEventListener('load', Y, false);
          } else {
            if (typeof O.attachEvent != D) {
              i(O, 'onload', Y);
            } else {
              if (typeof O.onload == 'function') {
                var X = O.onload;
                O.onload = function() {
                  X();
                  Y();
                };
              } else {
                O.onload = Y;
              }
            }
          }
        }
      }
      function h() {
        if (T) {
          V();
        } else {
          H();
        }
      }
      function V() {
        var X = j.getElementsByTagName('body')[0];
        var aa = C(r);
        aa.setAttribute('type', q);
        aa.style.visibility = 'hidden';
        var Z = X.appendChild(aa);
        if (Z) {
          var Y = 0;
          (function() {
            if (typeof Z.GetVariable != D) {
              var ab = Z.GetVariable('$version');
              if (ab) {
                ab = ab.split(' ')[1].split(',');
                M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)];
              }
            } else {
              if (Y < 10) {
                Y++;
                setTimeout(arguments.callee, 10);
                return;
              }
            }
            X.removeChild(aa);
            Z = null;
            H();
          })();
        } else {
          H();
        }
      }
      function H() {
        var ag = o.length;
        if (ag > 0) {
          for (var af = 0; af < ag; af++) {
            var Y = o[af].id;
            var ab = o[af].callbackFn;
            var aa = {
              success: false,
              id: Y,
            };
            if (M.pv[0] > 0) {
              var ae = c(Y);
              if (ae) {
                if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                  w(Y, true);
                  if (ab) {
                    aa.success = true;
                    aa.ref = z(Y);
                    ab(aa);
                  }
                } else {
                  if (o[af].expressInstall && A()) {
                    var ai = {};
                    ai.data = o[af].expressInstall;
                    ai.width = ae.getAttribute('width') || '0';
                    ai.height = ae.getAttribute('height') || '0';
                    if (ae.getAttribute('class')) {
                      ai.styleclass = ae.getAttribute('class');
                    }
                    if (ae.getAttribute('align')) {
                      ai.align = ae.getAttribute('align');
                    }
                    var ah = {};
                    var X = ae.getElementsByTagName('param');
                    var ac = X.length;
                    for (var ad = 0; ad < ac; ad++) {
                      if (X[ad].getAttribute('name').toLowerCase() != 'movie') {
                        ah[X[ad].getAttribute('name')] = X[ad].getAttribute('value');
                      }
                    }
                    P(ai, ah, Y, ab);
                  } else {
                    p(ae);
                    if (ab) {
                      ab(aa);
                    }
                  }
                }
              }
            } else {
              w(Y, true);
              if (ab) {
                var Z = z(Y);
                if (Z && typeof Z.SetVariable != D) {
                  aa.success = true;
                  aa.ref = Z;
                }
                ab(aa);
              }
            }
          }
        }
      }
      function z(aa) {
        var X = null;
        var Y = c(aa);
        if (Y && Y.nodeName == 'OBJECT') {
          if (typeof Y.SetVariable != D) {
            X = Y;
          } else {
            var Z = Y.getElementsByTagName(r)[0];
            if (Z) {
              X = Z;
            }
          }
        }
        return X;
      }
      function A() {
        return !a && F('6.0.65') && (M.win || M.mac) && !(M.wk && M.wk < 312);
      }
      function P(aa, ab, X, Z) {
        a = true;
        E = Z || null;
        B = {
          success: false,
          id: X,
        };
        var ae = c(X);
        if (ae) {
          if (ae.nodeName == 'OBJECT') {
            l = g(ae);
            Q = null;
          } else {
            l = ae;
            Q = X;
          }
          aa.id = R;
          if (
            typeof aa.width == D ||
            (!/%$/.test(aa.width) && parseInt(aa.width, 10) < 310)
          ) {
            aa.width = '310';
          }
          if (
            typeof aa.height == D ||
            (!/%$/.test(aa.height) && parseInt(aa.height, 10) < 137)
          ) {
            aa.height = '137';
          }
          j.title = j.title.slice(0, 47) + ' - Flash Player Installation';
          var ad = M.ie && M.win ? ['Active'].concat('').join('X') : 'PlugIn',
            ac =
              'MMredirectURL=' +
              O.location.toString().replace(/&/g, '%26') +
              '&MMplayerType=' +
              ad +
              '&MMdoctitle=' +
              j.title;
          if (typeof ab.flashvars != D) {
            ab.flashvars += '&' + ac;
          } else {
            ab.flashvars = ac;
          }
          if (M.ie && M.win && ae.readyState != 4) {
            var Y = C('div');
            X += 'SWFObjectNew';
            Y.setAttribute('id', X);
            ae.parentNode.insertBefore(Y, ae);
            ae.style.display = 'none';
            (function() {
              if (ae.readyState == 4) {
                ae.parentNode.removeChild(ae);
              } else {
                setTimeout(arguments.callee, 10);
              }
            })();
          }
          u(aa, ab, X);
        }
      }
      function p(Y) {
        if (M.ie && M.win && Y.readyState != 4) {
          var X = C('div');
          Y.parentNode.insertBefore(X, Y);
          X.parentNode.replaceChild(g(Y), X);
          Y.style.display = 'none';
          (function() {
            if (Y.readyState == 4) {
              Y.parentNode.removeChild(Y);
            } else {
              setTimeout(arguments.callee, 10);
            }
          })();
        } else {
          Y.parentNode.replaceChild(g(Y), Y);
        }
      }
      function g(ab) {
        var aa = C('div');
        if (M.win && M.ie) {
          aa.innerHTML = ab.innerHTML;
        } else {
          var Y = ab.getElementsByTagName(r)[0];
          if (Y) {
            var ad = Y.childNodes;
            if (ad) {
              var X = ad.length;
              for (var Z = 0; Z < X; Z++) {
                if (
                  !(ad[Z].nodeType == 1 && ad[Z].nodeName == 'PARAM') &&
                  !(ad[Z].nodeType == 8)
                ) {
                  aa.appendChild(ad[Z].cloneNode(true));
                }
              }
            }
          }
        }
        return aa;
      }
      function u(ai, ag, Y) {
        var X,
          aa = c(Y);
        if (M.wk && M.wk < 312) {
          return X;
        }
        if (aa) {
          if (typeof ai.id == D) {
            ai.id = Y;
          }
          if (M.ie && M.win) {
            var ah = '';
            for (var ae in ai) {
              if (ai[ae] != Object.prototype[ae]) {
                if (ae.toLowerCase() == 'data') {
                  ag.movie = ai[ae];
                } else {
                  if (ae.toLowerCase() == 'styleclass') {
                    ah += ' class="' + ai[ae] + '"';
                  } else {
                    if (ae.toLowerCase() != 'classid') {
                      ah += ' ' + ae + '="' + ai[ae] + '"';
                    }
                  }
                }
              }
            }
            var af = '';
            for (var ad in ag) {
              if (ag[ad] != Object.prototype[ad]) {
                af += '<param name="' + ad + '" value="' + ag[ad] + '" />';
              }
            }
            aa.outerHTML =
              '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' +
              ah +
              '>' +
              af +
              '</object>';
            N[N.length] = ai.id;
            X = c(ai.id);
          } else {
            var Z = C(r);
            Z.setAttribute('type', q);
            for (var ac in ai) {
              if (ai[ac] != Object.prototype[ac]) {
                if (ac.toLowerCase() == 'styleclass') {
                  Z.setAttribute('class', ai[ac]);
                } else {
                  if (ac.toLowerCase() != 'classid') {
                    Z.setAttribute(ac, ai[ac]);
                  }
                }
              }
            }
            for (var ab in ag) {
              if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != 'movie') {
                e(Z, ab, ag[ab]);
              }
            }
            aa.parentNode.replaceChild(Z, aa);
            X = Z;
          }
        }
        return X;
      }
      function e(Z, X, Y) {
        var aa = C('param');
        aa.setAttribute('name', X);
        aa.setAttribute('value', Y);
        Z.appendChild(aa);
      }
      function y(Y) {
        var X = c(Y);
        if (X && X.nodeName == 'OBJECT') {
          if (M.ie && M.win) {
            X.style.display = 'none';
            (function() {
              if (X.readyState == 4) {
                b(Y);
              } else {
                setTimeout(arguments.callee, 10);
              }
            })();
          } else {
            X.parentNode.removeChild(X);
          }
        }
      }
      function b(Z) {
        var Y = c(Z);
        if (Y) {
          for (var X in Y) {
            if (typeof Y[X] == 'function') {
              Y[X] = null;
            }
          }
          Y.parentNode.removeChild(Y);
        }
      }
      function c(Z) {
        var X = null;
        try {
          X = j.getElementById(Z);
        } catch (Y) {}
        return X;
      }
      function C(X) {
        return j.createElement(X);
      }
      function i(Z, X, Y) {
        Z.attachEvent(X, Y);
        I[I.length] = [Z, X, Y];
      }
      function F(Z) {
        var Y = M.pv,
          X = Z.split('.');
        X[0] = parseInt(X[0], 10);
        X[1] = parseInt(X[1], 10) || 0;
        X[2] = parseInt(X[2], 10) || 0;
        return Y[0] > X[0] ||
          (Y[0] == X[0] && Y[1] > X[1]) ||
          (Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2])
          ? true
          : false;
      }
      function v(ac, Y, ad, ab) {
        if (M.ie && M.mac) {
          return;
        }
        var aa = j.getElementsByTagName('head')[0];
        if (!aa) {
          return;
        }
        var X = ad && typeof ad == 'string' ? ad : 'screen';
        if (ab) {
          n = null;
          G = null;
        }
        if (!n || G != X) {
          var Z = C('style');
          Z.setAttribute('type', 'text/css');
          Z.setAttribute('media', X);
          n = aa.appendChild(Z);
          if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
            n = j.styleSheets[j.styleSheets.length - 1];
          }
          G = X;
        }
        if (M.ie && M.win) {
          if (n && typeof n.addRule == r) {
            n.addRule(ac, Y);
          }
        } else {
          if (n && typeof j.createTextNode != D) {
            n.appendChild(j.createTextNode(ac + ' {' + Y + '}'));
          }
        }
      }
      function w(Z, X) {
        if (!m) {
          return;
        }
        var Y = X ? 'visible' : 'hidden';
        if (J && c(Z)) {
          c(Z).style.visibility = Y;
        } else {
          v('#' + Z, 'visibility:' + Y);
        }
      }
      function L(Y) {
        var Z = /[\\\"<>\.;]/;
        var X = Z.exec(Y) != null;
        return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y;
      }
      var d = (function() {
        if (M.ie && M.win) {
          window.attachEvent('onunload', function() {
            var ac = I.length;
            for (var ab = 0; ab < ac; ab++) {
              I[ab][0].detachEvent(I[ab][1], I[ab][2]);
            }
            var Z = N.length;
            for (var aa = 0; aa < Z; aa++) {
              y(N[aa]);
            }
            for (var Y in M) {
              M[Y] = null;
            }
            M = null;
            for (var X in swfobject) {
              swfobject[X] = null;
            }
            swfobject = null;
          });
        }
      })();
      return {
        registerObject: function(ab, X, aa, Z) {
          if (M.w3 && ab && X) {
            var Y = {};
            Y.id = ab;
            Y.swfVersion = X;
            Y.expressInstall = aa;
            Y.callbackFn = Z;
            o[o.length] = Y;
            w(ab, false);
          } else {
            if (Z) {
              Z({
                success: false,
                id: ab,
              });
            }
          }
        },
        getObjectById: function(X) {
          if (M.w3) {
            return z(X);
          }
        },
        embedSWF: function(ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
          var X = {
            success: false,
            id: ah,
          };
          if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
            w(ah, false);
            K(function() {
              ae += '';
              ag += '';
              var aj = {};
              if (af && typeof af === r) {
                for (var al in af) {
                  aj[al] = af[al];
                }
              }
              aj.data = ab;
              aj.width = ae;
              aj.height = ag;
              var am = {};
              if (ad && typeof ad === r) {
                for (var ak in ad) {
                  am[ak] = ad[ak];
                }
              }
              if (Z && typeof Z === r) {
                for (var ai in Z) {
                  if (typeof am.flashvars != D) {
                    am.flashvars += '&' + ai + '=' + Z[ai];
                  } else {
                    am.flashvars = ai + '=' + Z[ai];
                  }
                }
              }
              if (F(Y)) {
                var an = u(aj, am, ah);
                if (aj.id == ah) {
                  w(ah, true);
                }
                X.success = true;
                X.ref = an;
              } else {
                if (aa && A()) {
                  aj.data = aa;
                  P(aj, am, ah, ac);
                  return;
                } else {
                  w(ah, true);
                }
              }
              if (ac) {
                ac(X);
              }
            });
          } else {
            if (ac) {
              ac(X);
            }
          }
        },
        switchOffAutoHideShow: function() {
          m = false;
        },
        ua: M,
        getFlashPlayerVersion: function() {
          return {
            major: M.pv[0],
            minor: M.pv[1],
            release: M.pv[2],
          };
        },
        hasFlashPlayerVersion: F,
        createSWF: function(Z, Y, X) {
          if (M.w3) {
            return u(Z, Y, X);
          } else {
            return undefined;
          }
        },
        showExpressInstall: function(Z, aa, X, Y) {
          if (M.w3 && A()) {
            P(Z, aa, X, Y);
          }
        },
        removeSWF: function(X) {
          if (M.w3) {
            y(X);
          }
        },
        createCSS: function(aa, Z, Y, X) {
          if (M.w3) {
            v(aa, Z, Y, X);
          }
        },
        addDomLoadEvent: K,
        addLoadEvent: s,
        getQueryParamValue: function(aa) {
          var Z = j.location.search || j.location.hash;
          if (Z) {
            if (/\?/.test(Z)) {
              Z = Z.split('?')[1];
            }
            if (aa == null) {
              return L(Z);
            }
            var Y = Z.split('&');
            for (var X = 0; X < Y.length; X++) {
              if (Y[X].substring(0, Y[X].indexOf('=')) == aa) {
                return L(Y[X].substring(Y[X].indexOf('=') + 1));
              }
            }
          }
          return '';
        },
        expressInstallCallback: function() {
          if (a) {
            var X = c(R);
            if (X && l) {
              X.parentNode.replaceChild(l, X);
              if (Q) {
                w(Q, true);
                if (M.ie && M.win) {
                  l.style.display = 'block';
                }
              }
              if (E) {
                E(B);
              }
            }
            a = false;
          }
        },
      };
    })();
  }
  (function() {
    if ('undefined' == typeof window || window.WebSocket) return;
    var console = window.console;
    if (!console || !console.log || !console.error) {
      console = {
        log: function() {},
        error: function() {},
      };
    }
    if (!swfobject.hasFlashPlayerVersion('10.0.0')) {
      console.error('Flash Player >= 10.0.0 is required.');
      return;
    }
    if (location.protocol == 'file:') {
      console.error(
        "WARNING: web-socket-js doesn't work in file:///... URL " +
          'unless you set Flash Security Settings properly. ' +
          'Open the page via Web server i.e. http://...'
      );
    }
    WebSocket = function(url, protocols, proxyHost, proxyPort, headers) {
      var self = this;
      self.gT2x = WebSocket.chw1x++;
      WebSocket.bMH5M[self.gT2x] = self;
      self.readyState = WebSocket.CONNECTING;
      self.bufferedAmount = 0;
      self.mb3x = {};
      if (!protocols) {
        protocols = [];
      } else if (typeof protocols == 'string') {
        protocols = [protocols];
      }
      setTimeout(function() {
        WebSocket.ZW6Q(function() {
          WebSocket.pS4W.create(
            self.gT2x,
            url,
            protocols,
            proxyHost || null,
            proxyPort || 0,
            headers || null
          );
        });
      }, 0);
    };
    WebSocket.prototype.send = function(data) {
      if (this.readyState == WebSocket.CONNECTING) {
        throw 'INVALID_STATE_ERR: Web Socket connection has not been established';
      }
      var result = WebSocket.pS4W.send(this.gT2x, encodeURIComponent(data));
      if (result < 0) {
        return true;
      } else {
        this.bufferedAmount += result;
        return false;
      }
    };
    WebSocket.prototype.close = function() {
      if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
        return;
      }
      this.readyState = WebSocket.CLOSING;
      WebSocket.pS4W.close(this.gT2x);
    };
    WebSocket.prototype.addEventListener = function(type, listener, useCapture) {
      if (!(type in this.mb3x)) {
        this.mb3x[type] = [];
      }
      this.mb3x[type].push(listener);
    };
    WebSocket.prototype.removeEventListener = function(type, listener, useCapture) {
      if (!(type in this.mb3x)) return;
      var events = this.mb3x[type];
      for (var i = events.length - 1; i >= 0; --i) {
        if (events[i] === listener) {
          events.splice(i, 1);
          break;
        }
      }
    };
    WebSocket.prototype.dispatchEvent = function(event) {
      var events = this.mb3x[event.type] || [];
      for (var i = 0; i < events.length; ++i) {
        events[i](event);
      }
      var handler = this['on' + event.type];
      if (handler) handler(event);
    };
    WebSocket.prototype.chq1x = function(flashEvent) {
      if ('readyState' in flashEvent) {
        this.readyState = flashEvent.readyState;
      }
      if ('protocol' in flashEvent) {
        this.protocol = flashEvent.protocol;
      }
      var jsEvent;
      if (flashEvent.type == 'open' || flashEvent.type == 'error') {
        jsEvent = this.bME5J(flashEvent.type);
      } else if (flashEvent.type == 'close') {
        jsEvent = this.bME5J('close');
      } else if (flashEvent.type == 'message') {
        var data = decodeURIComponent(flashEvent.message);
        jsEvent = this.chm1x('message', data);
      } else {
        throw 'unknown event type: ' + flashEvent.type;
      }
      this.dispatchEvent(jsEvent);
    };
    WebSocket.prototype.bME5J = function(type) {
      if (document.createEvent && window.Event) {
        var event = document.createEvent('Event');
        event.initEvent(type, false, false);
        return event;
      } else {
        return {
          type: type,
          bubbles: false,
          cancelable: false,
        };
      }
    };
    WebSocket.prototype.chm1x = function(type, data) {
      if (document.createEvent && window.MessageEvent && !window.opera) {
        var event = document.createEvent('MessageEvent');
        event.initMessageEvent('message', false, false, data, null, null, window, null);
        return event;
      } else {
        return {
          type: type,
          data: data,
          bubbles: false,
          cancelable: false,
        };
      }
    };
    WebSocket.CONNECTING = 0;
    WebSocket.OPEN = 1;
    WebSocket.CLOSING = 2;
    WebSocket.CLOSED = 3;
    WebSocket.pS4W = null;
    WebSocket.bMH5M = {};
    WebSocket.Pa2x = [];
    WebSocket.chw1x = 0;
    WebSocket.loadFlashPolicyFile = function(url) {
      WebSocket.ZW6Q(function() {
        WebSocket.pS4W.loadManualPolicyFile(url);
      });
    };
    WebSocket.bwq2x = function() {
      if (WebSocket.pS4W) return;
      if (WebSocket.chk1x) {
        window.WEB_SOCKET_SWF_LOCATION = WebSocket.chk1x;
      }
      if (!window.WEB_SOCKET_SWF_LOCATION) {
        console.error(
          '[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf'
        );
        return;
      }
      var container = document.createElement('div');
      container.id = 'webSocketContainer';
      container.style.position = 'absolute';
      if (WebSocket.chj1x()) {
        container.style.left = '0px';
        container.style.top = '0px';
      } else {
        container.style.left = '-100px';
        container.style.top = '-100px';
      }
      var holder = document.createElement('div');
      holder.id = 'webSocketFlash';
      container.appendChild(holder);
      document.body.appendChild(container);
      swfobject.embedSWF(
        WEB_SOCKET_SWF_LOCATION,
        'webSocketFlash',
        '1',
        '1',
        '10.0.0',
        null,
        null,
        {
          hasPriority: true,
          swliveconnect: true,
          allowScriptAccess: 'always',
        },
        null,
        function(e) {
          if (!e.success) {
            console.error('[WebSocket] swfobject.embedSWF failed');
          }
        }
      );
    };
    WebSocket.cFU7N = function() {
      setTimeout(function() {
        WebSocket.pS4W = document.getElementById('webSocketFlash');
        WebSocket.pS4W.setCallerUrl(location.href);
        WebSocket.pS4W.setDebug(!!window.WEB_SOCKET_DEBUG);
        for (var i = 0; i < WebSocket.Pa2x.length; ++i) {
          WebSocket.Pa2x[i]();
        }
        WebSocket.Pa2x = [];
      }, 0);
    };
    WebSocket.cFW7P = function() {
      setTimeout(function() {
        try {
          var events = WebSocket.pS4W.receiveEvents();
          for (var i = 0; i < events.length; ++i) {
            WebSocket.bMH5M[events[i].webSocketId].chq1x(events[i]);
          }
        } catch (e) {
          console.error(e);
        }
      }, 0);
      return true;
    };
    WebSocket.cFY7R = function(message) {
      console.log(decodeURIComponent(message));
    };
    WebSocket.dX0x = function(message) {
      console.error(decodeURIComponent(message));
    };
    WebSocket.ZW6Q = function(task) {
      if (WebSocket.pS4W) {
        task();
      } else {
        WebSocket.Pa2x.push(task);
      }
    };
    WebSocket.chj1x = function() {
      if (!window.navigator || !window.navigator.mimeTypes) {
        return false;
      }
      var mimeType = window.navigator.mimeTypes['application/x-shockwave-flash'];
      if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
        return false;
      }
      return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false;
    };
    if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
      if (window.addEventListener) {
        window.addEventListener(
          'load',
          function() {
            WebSocket.bwq2x();
          },
          false
        );
      } else {
        window.attachEvent('onload', function() {
          WebSocket.bwq2x();
        });
      }
    }
  })();
  (function(exports, io, global) {
    exports.XHR = XHR;
    function XHR(socket) {
      if (!socket) return;
      io.Transport.apply(this, arguments);
      this.sendBuffer = [];
    }
    io.util.inherit(XHR, io.Transport);
    XHR.prototype.open = function() {
      this.socket.setBuffer(false);
      this.onOpen();
      this.get();
      this.setCloseTimeout();
      return this;
    };
    XHR.prototype.payload = function(payload) {
      var msgs = [];
      for (var i = 0, l = payload.length; i < l; i++) {
        msgs.push(io.parser.encodePacket(payload[i]));
      }
      this.send(io.parser.encodePayload(msgs));
    };
    XHR.prototype.send = function(data) {
      this.post(data);
      return this;
    };
    function empty() {}
    XHR.prototype.post = function(data) {
      var self = this;
      this.socket.setBuffer(true);
      function stateChange() {
        if (this.readyState == 4) {
          this.onreadystatechange = empty;
          self.posting = false;
          if (this.status == 200) {
            self.socket.setBuffer(false);
          } else {
            self.onClose();
          }
        }
      }
      function onload() {
        this.onload = empty;
        self.socket.setBuffer(false);
      }
      this.sendXHR = this.request('POST');
      if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) {
        this.sendXHR.onload = this.sendXHR.onerror = onload;
      } else {
        this.sendXHR.onreadystatechange = stateChange;
      }
      this.sendXHR.send(data);
    };
    XHR.prototype.close = function() {
      this.onClose();
      return this;
    };
    XHR.prototype.request = function(method) {
      var req = io.util.request(this.socket.isXDomain()),
        query = io.util.query(this.socket.options.query, 't=' + +new Date());
      req.open(method || 'GET', this.prepareUrl() + query, true);
      if (method == 'POST') {
        try {
          if (req.setRequestHeader) {
            req.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
          } else {
            req.contentType = 'text/plain';
          }
        } catch (e) {}
      }
      return req;
    };
    XHR.prototype.scheme = function() {
      return this.socket.options.secure ? 'https' : 'http';
    };
    XHR.check = function(socket, xdomain) {
      try {
        var request = io.util.request(xdomain),
          usesXDomReq = global.XDomainRequest && request instanceof XDomainRequest,
          socketProtocol =
            socket && socket.options && socket.options.secure ? 'https:' : 'http:',
          isXProtocol = global.location && socketProtocol != global.location.protocol;
        if (request && !(usesXDomReq && isXProtocol)) {
          return true;
        }
      } catch (e) {}
      return false;
    };
    XHR.xdomainCheck = function(socket) {
      return XHR.check(socket, true);
    };
  })(
    'undefined' != typeof io ? io.Transport : module.exports,
    'undefined' != typeof io ? io : module.parent.exports,
    this
  );
  (function(exports, io) {
    exports.htmlfile = HTMLFile;
    function HTMLFile(socket) {
      io.Transport.XHR.apply(this, arguments);
    }
    io.util.inherit(HTMLFile, io.Transport.XHR);
    HTMLFile.prototype.name = 'htmlfile';
    HTMLFile.prototype.get = function() {
      this.doc = new window[(['Active'].concat('Object').join('X'))]('htmlfile');
      this.doc.open();
      this.doc.write('<html></html>');
      this.doc.close();
      this.doc.parentWindow.s = this;
      var iframeC = this.doc.createElement('div');
      iframeC.className = 'socketio';
      this.doc.body.appendChild(iframeC);
      this.iframe = this.doc.createElement('iframe');
      iframeC.appendChild(this.iframe);
      var self = this,
        query = io.util.query(this.socket.options.query, 't=' + +new Date());
      this.iframe.src = this.prepareUrl() + query;
      io.util.on(window, 'unload', function() {
        self.destroy();
      });
    };
    HTMLFile.prototype.c9h = function(data, doc) {
      data = data.replace(/\\\//g, '/');
      this.onData(data);
      try {
        var script = doc.getElementsByTagName('script')[0];
        script.parentNode.removeChild(script);
      } catch (e) {}
    };
    HTMLFile.prototype.destroy = function() {
      if (this.iframe) {
        try {
          this.iframe.src = 'about:blank';
        } catch (e) {}
        this.doc = null;
        this.iframe.parentNode.removeChild(this.iframe);
        this.iframe = null;
        CollectGarbage();
      }
    };
    HTMLFile.prototype.close = function() {
      this.destroy();
      return io.Transport.XHR.prototype.close.call(this);
    };
    HTMLFile.check = function(socket) {
      if (
        typeof window != 'undefined' &&
        ['Active'].concat('Object').join('X') in window
      ) {
        try {
          var a = new window[(['Active'].concat('Object').join('X'))]('htmlfile');
          return a && io.Transport.XHR.check(socket);
        } catch (e) {}
      }
      return false;
    };
    HTMLFile.xdomainCheck = function() {
      return false;
    };
    io.transports.push('htmlfile');
  })(
    'undefined' != typeof io ? io.Transport : module.exports,
    'undefined' != typeof io ? io : module.parent.exports
  );
  (function(exports, io, global) {
    exports['xhr-polling'] = XHRPolling;
    function XHRPolling() {
      io.Transport.XHR.apply(this, arguments);
    }
    io.util.inherit(XHRPolling, io.Transport.XHR);
    io.util.merge(XHRPolling, io.Transport.XHR);
    XHRPolling.prototype.name = 'xhr-polling';
    XHRPolling.prototype.heartbeats = function() {
      return false;
    };
    XHRPolling.prototype.open = function() {
      var self = this;
      io.Transport.XHR.prototype.open.call(self);
      return false;
    };
    function empty() {}
    XHRPolling.prototype.get = function() {
      if (!this.isOpen) return;
      var self = this;
      function stateChange() {
        if (this.readyState == 4) {
          this.onreadystatechange = empty;
          if (this.status == 200) {
            self.onData(this.responseText);
            self.get();
          } else {
            self.onClose();
          }
        }
      }
      function onload() {
        this.onload = empty;
        this.onerror = empty;
        self.retryCounter = 1;
        self.onData(this.responseText);
        self.get();
      }
      function onerror() {
        self.retryCounter++;
        if (!self.retryCounter || self.retryCounter > 3) {
          self.onClose();
        } else {
          self.get();
        }
      }
      this.xhr = this.request();
      if (global.XDomainRequest && this.xhr instanceof XDomainRequest) {
        this.xhr.onload = onload;
        this.xhr.onerror = onerror;
      } else {
        this.xhr.onreadystatechange = stateChange;
      }
      this.xhr.send(null);
    };
    XHRPolling.prototype.onClose = function() {
      io.Transport.XHR.prototype.onClose.call(this);
      if (this.xhr) {
        this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
        try {
          this.xhr.abort();
        } catch (e) {}
        this.xhr = null;
      }
    };
    XHRPolling.prototype.ready = function(socket, fn) {
      var self = this;
      io.util.defer(function() {
        fn.call(self);
      });
    };
    io.transports.push('xhr-polling');
  })(
    'undefined' != typeof io ? io.Transport : module.exports,
    'undefined' != typeof io ? io : module.parent.exports,
    this
  );
  (function(exports, io, global) {
    var indicator =
      global.document && 'MozAppearance' in global.document.documentElement.style;
    exports['jsonp-polling'] = JSONPPolling;
    function JSONPPolling(socket) {
      io.Transport['xhr-polling'].apply(this, arguments);
      this.index = io.j.length;
      var self = this;
      io.j.push(function(msg) {
        self.c9h(msg);
      });
    }
    io.util.inherit(JSONPPolling, io.Transport['xhr-polling']);
    JSONPPolling.prototype.name = 'jsonp-polling';
    JSONPPolling.prototype.post = function(data) {
      var self = this,
        query = io.util.query(
          this.socket.options.query,
          't=' + +new Date() + '&i=' + this.index
        );
      if (!this.form) {
        var form = document.createElement('form'),
          area = document.createElement('textarea'),
          id = (this.iframeId = 'socketio_iframe_' + this.index),
          iframe;
        form.className = 'socketio';
        form.style.position = 'absolute';
        form.style.top = '0px';
        form.style.left = '0px';
        form.style.display = 'none';
        form.target = id;
        form.method = 'POST';
        form.setAttribute('accept-charset', 'utf-8');
        area.name = 'd';
        form.appendChild(area);
        document.body.appendChild(form);
        this.form = form;
        this.area = area;
      }
      this.form.action = this.prepareUrl() + query;
      function complete() {
        initIframe();
        self.socket.setBuffer(false);
      }
      function initIframe() {
        if (self.iframe) {
          self.form.removeChild(self.iframe);
        }
        try {
          iframe = document.createElement('<iframe name="' + self.iframeId + '">');
        } catch (e) {
          iframe = document.createElement('iframe');
          iframe.name = self.iframeId;
        }
        iframe.id = self.iframeId;
        self.form.appendChild(iframe);
        self.iframe = iframe;
      }
      initIframe();
      this.area.value = io.JSON.stringify(data);
      try {
        this.form.submit();
      } catch (e) {}
      if (this.iframe.attachEvent) {
        iframe.onreadystatechange = function() {
          if (self.iframe.readyState == 'complete') {
            complete();
          }
        };
      } else {
        this.iframe.onload = complete;
      }
      this.socket.setBuffer(true);
    };
    JSONPPolling.prototype.get = function() {
      var self = this,
        script = document.createElement('script'),
        query = io.util.query(
          this.socket.options.query,
          't=' + +new Date() + '&i=' + this.index
        );
      if (this.script) {
        this.script.parentNode.removeChild(this.script);
        this.script = null;
      }
      script.async = true;
      script.src = this.prepareUrl() + query;
      script.onerror = function() {
        self.onClose();
      };
      var insertAt = document.getElementsByTagName('script')[0];
      insertAt.parentNode.insertBefore(script, insertAt);
      this.script = script;
      if (indicator) {
        setTimeout(function() {
          var iframe = document.createElement('iframe');
          document.body.appendChild(iframe);
          document.body.removeChild(iframe);
        }, 100);
      }
    };
    JSONPPolling.prototype.c9h = function(msg) {
      this.onData(msg);
      if (this.isOpen) {
        this.get();
      }
      return this;
    };
    JSONPPolling.prototype.ready = function(socket, fn) {
      var self = this;
      if (!indicator) return fn.call(this);
      io.util.load(function() {
        fn.call(self);
      });
    };
    JSONPPolling.check = function() {
      return 'document' in global;
    };
    JSONPPolling.xdomainCheck = function() {
      return true;
    };
    io.transports.push('jsonp-polling');
  })(
    'undefined' != typeof io ? io.Transport : module.exports,
    'undefined' != typeof io ? io : module.parent.exports,
    this
  );
  if (typeof define === 'function' && define.amd) {
    define([], function() {
      return io;
    });
  }
})();
(function() {
  var isArray = Array.isArray;
  if (isArray === undefined) {
    isArray = function(arr) {
      return Object.prototype.toString.call(arr) === '[object Array]';
    };
  }
  var root = this;
  function EventEmitter() {}
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.EventEmitter = EventEmitter;
  } else {
    root = window;
    root.EventEmitter = EventEmitter;
  }
  var defaultMaxListeners = 10;
  EventEmitter.prototype.setMaxListeners = function(n) {
    if (!this.ed0x) this.ed0x = {};
    this.bMD5I = n;
  };
  EventEmitter.prototype.emit = function() {
    var type = arguments[0];
    if (type === 'error') {
      if (
        !this.ed0x ||
        !this.ed0x.error ||
        (isArray(this.ed0x.error) && !this.ed0x.error.length)
      ) {
        if (this.domain) {
          var er = arguments[1];
          er.domain_emitter = this;
          er.domain = this.domain;
          er.domain_thrown = false;
          this.domain.emit('error', er);
          return false;
        }
        if (arguments[1] instanceof Error) {
          throw arguments[1];
        } else {
          throw new Error("Uncaught, unspecified 'error' event.");
        }
        return false;
      }
    }
    if (!this.ed0x) return false;
    var handler = this.ed0x[type];
    if (!handler) return false;
    if (typeof handler == 'function') {
      if (this.domain) {
        this.domain.enter();
      }
      switch (arguments.length) {
        case 1:
          handler.call(this);
          break;
        case 2:
          handler.call(this, arguments[1]);
          break;
        case 3:
          handler.call(this, arguments[1], arguments[2]);
          break;
        default:
          var l = arguments.length;
          var args = new Array(l - 1);
          for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
          handler.apply(this, args);
      }
      if (this.domain) {
        this.domain.exit();
      }
      return true;
    } else if (isArray(handler)) {
      if (this.domain) {
        this.domain.enter();
      }
      var l = arguments.length;
      var args = new Array(l - 1);
      for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
      var listeners = handler.slice();
      for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i].apply(this, args);
      }
      if (this.domain) {
        this.domain.exit();
      }
      return true;
    } else {
      return false;
    }
  };
  EventEmitter.prototype.addListener = function(type, listener) {
    if ('function' !== typeof listener) {
      throw new Error('addListener only takes instances of Function');
    }
    if (!this.ed0x) this.ed0x = {};
    this.emit(
      'newListener',
      type,
      typeof listener.listener === 'function' ? listener.listener : listener
    );
    if (!this.ed0x[type]) {
      this.ed0x[type] = listener;
    } else if (isArray(this.ed0x[type])) {
      this.ed0x[type].push(listener);
    } else {
      this.ed0x[type] = [this.ed0x[type], listener];
    }
    if (isArray(this.ed0x[type]) && !this.ed0x[type].warned) {
      var m;
      if (this.bMD5I !== undefined) {
        m = this.bMD5I;
      } else {
        m = defaultMaxListeners;
      }
      if (m && m > 0 && this.ed0x[type].length > m) {
        this.ed0x[type].warned = true;
        console.error(
          '(node) warning: possible EventEmitter memory ' +
            'leak detected. %d listeners added. ' +
            'Use emitter.setMaxListeners() to increase limit.',
          this.ed0x[type].length
        );
        console.trace();
      }
    }
    return this;
  };
  EventEmitter.prototype.on = EventEmitter.prototype.addListener;
  EventEmitter.prototype.once = function(type, listener) {
    if ('function' !== typeof listener) {
      throw new Error('.once only takes instances of Function');
    }
    var self = this;
    function g() {
      self.removeListener(type, g);
      listener.apply(this, arguments);
    }
    g.listener = listener;
    self.on(type, g);
    return this;
  };
  EventEmitter.prototype.removeListener = function(type, listener) {
    if ('function' !== typeof listener) {
      throw new Error('removeListener only takes instances of Function');
    }
    if (!this.ed0x || !this.ed0x[type]) return this;
    var list = this.ed0x[type];
    if (isArray(list)) {
      var position = -1;
      for (var i = 0, length = list.length; i < length; i++) {
        if (list[i] === listener || (list[i].listener && list[i].listener === listener)) {
          position = i;
          break;
        }
      }
      if (position < 0) return this;
      list.splice(position, 1);
    } else if (list === listener || (list.listener && list.listener === listener)) {
      delete this.ed0x[type];
    }
    return this;
  };
  EventEmitter.prototype.removeAllListeners = function(type) {
    if (arguments.length === 0) {
      this.ed0x = {};
      return this;
    }
    var events = this.ed0x && this.ed0x[type];
    if (!events) return this;
    if (isArray(events)) {
      events.splice(0);
    } else {
      this.ed0x[type] = null;
    }
    return this;
  };
  EventEmitter.prototype.listeners = function(type) {
    if (!this.ed0x) this.ed0x = {};
    if (!this.ed0x[type]) this.ed0x[type] = [];
    if (!isArray(this.ed0x[type])) {
      this.ed0x[type] = [this.ed0x[type]];
    }
    return this.ed0x[type];
  };
})();
(function() {
  if (typeof Object.create !== 'function') {
    Object.create = function(o) {
      function F() {}
      F.prototype = o;
      return new F();
    };
  }
  var root = window;
  var pomelo = Object.create(EventEmitter.prototype);
  root.pomelo = pomelo;
  var socket = null;
  var id = 1;
  var callbacks = {};
  var route = 'web-connector.messageHandler.';
  var isRegister = false;
  var success = 200;
  var register_ack = 'register';
  var bind_ack = 'bind';
  var regBind_ack = 'registerAndBind';
  var cancelBind_ack = 'cancelBind';
  var message_store = {};
  var heartbeat_interval = 1000 * 60;
  var heartbeat_timer;
  var current_user;
  var current_domain;
  var cacheMessageIds = [];
  var cacheSize = 100;
  pomelo.init = function(host, port, reconnect, cb) {
    var url = 'ws://' + host;
    if (port) {
      url += ':' + port;
    }
    var params;
    if (reconnect) {
      params = {
        'force new connection': true,
        reconnect: true,
        'max reconnection attempts': 50,
      };
    } else {
      params = {
        'force new connection': true,
        reconnect: false,
      };
    }
    socket = io.connect(url, params);
    socket.on('connect', function() {
      console.log('[pomeloclient.init] websocket connected!');
      cb();
    });
    socket.on('reconnect', function() {
      pomelo.emit('reconnect');
    });
    socket.on('message', function(data) {
      message_store = {};
      if (typeof data === 'string') {
        data = JSON.parse(data);
      }
      if (data instanceof Array) {
        processMessageBatch(data);
      } else {
        processMessage(data);
        emitMessage();
      }
    });
    socket.on('error', function(err) {
      cb(err);
    });
    socket.on('disconnect', function(reason) {
      isRegister = false;
      pomelo.emit('disconnect', reason);
    });
  };
  var request = function(method, opts, cb) {
    if (!method) {
      console.error('request message error with no method.');
      return;
    }
    id++;
    callbacks[id] = cb;
    sendMsg(method, id, opts);
  };
  var notify = function(method, msg) {
    if (!method) {
      console.error('notify message error with no method.');
      return;
    }
    sendMsg(method, 0, msg);
  };
  var sendMsg = function(method, msgId, msg) {
    var path = route + method;
    var rs = {
      id: msgId,
      route: path,
      msg: msg,
    };
    var sg = JSON.stringify(rs);
    socket.send(sg);
  };
  var processMessageBatch = function(msgs) {
    for (var i = 0, l = msgs.length; i < l; i++) {
      processMessage(msgs[i]);
    }
    emitMessage();
  };
  var emitMessage = function() {
    for (var key in message_store) {
      pomelo.emit(key, message_store[key]);
    }
  };
  var processMessage = function(msg) {
    if (msg.id) {
      var cb = callbacks[msg.id];
      delete callbacks[msg.id];
      if (typeof cb !== 'function') {
        console.log(
          '[pomeloclient.processMessage] cb is not a function for request ' + msg.id
        );
        return;
      }
      cb(msg.body);
      if (msg.body.type === register_ack && msg.body.code == success) {
        isRegister = true;
      }
      if (
        (msg.body.type === bind_ack || msg.body.type === regBind_ack) &&
        msg.body.code == success
      ) {
        heartbeat_timer = setInterval(function() {
          notify('heartbeat', {
            flag: 'online',
            domain: current_domain,
            user: current_user,
          });
        }, heartbeat_interval);
      }
      if (msg.body.type === cancelBind_ack && msg.body.code == success) {
        clearInterval(heartbeat_timer);
      }
      return;
    } else {
      if (!filterMessage(msg)) {
        return;
      }
      if (!message_store[msg.route]) {
        if (msg.body instanceof Array) {
          message_store[msg.route] = msg.body;
        } else {
          message_store[msg.route] = [msg.body];
        }
      } else {
        var arr = message_store[msg.route];
        if (msg.body instanceof Array) {
          var messages = msg.body;
          for (var i = 0; i < messages.length; i++) {
            arr.push(messages[i]);
          }
        } else {
          arr.push(msg.body);
        }
        message_store[msg.route] = arr;
      }
    }
  };
  var filterMessage = function(message) {
    var msgs = message.body;
    var ids = [];
    var results = {};
    if (msgs instanceof Array) {
      for (var i = 0; i < msgs.length; i++) {
        var id = msgs[i].msgId;
        ids.push(id);
      }
      var duplicatedIds = checkMessage(ids);
      if (duplicatedIds.length !== 0) {
        return false;
      } else {
        cacheMessageIds = cacheMessageIds.concat(ids);
        if (cacheMessageIds.length > cacheSize) {
          var length = cacheMessageIds - cacheSize;
          for (var i = 0; i < length; i++) {
            cacheMessageIds.shift();
          }
        }
      }
    }
    return true;
  };
  var checkMessage = function(ids) {
    var array = [];
    for (var i = 0; i < cacheMessageIds.length; i++) {
      var id = cacheMessageIds[i];
      for (var j = 0; j < ids.length; j++) {
        if (ids[j] === id) {
          array.push(id);
        }
      }
    }
    return array;
  };
  pomelo.register = function(opts, cb) {
    request('register', opts, cb);
  };
  pomelo.bind = function(opts, cb) {
    if (isRegister) {
      current_domain = opts.domain;
      current_user = opts.user;
      request('bind', opts, cb);
    } else {
      console.log('cannot bind without registration.');
    }
  };
  pomelo.registerAndBind = function(opts, cb) {
    current_domain = opts.domain;
    current_user = opts.user;
    request('registerAndBind', opts, cb);
  };
  pomelo.cancelBind = function(opts, cb) {
    current_domain = null;
    current_user = null;
    request('cancelBind', opts, cb);
  };
  pomelo.getOnlineUser = function(opts, cb) {
    request('getOnlineUser', opts, cb);
  };
  pomelo.disconnect = function() {
    if (socket) {
      socket.disconnect();
      socket = null;
    }
  };
  pomelo.ackMessage = function(domain, msgs) {
    var msgIds = '';
    var types = '';
    var message = {};
    var user;
    for (var i = 0; i < msgs.length; i++) {
      var data = msgs[i];
      if (!user) {
        user = data.user;
      }
      msgIds += data.msgId;
      types += data.type;
      if (i !== msgs.length - 1) {
        msgIds += ';';
        types += ';';
      }
    }
    var message = {
      user: user,
      msgIds: msgIds,
      types: types,
      domain: domain,
    };
    notify('ack', message);
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    br9i = NEJ.F,
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    I9z = c9h('nej.ut'),
    l9c = c9h('nm.x'),
    dD0x = c9h('nm.u'),
    q9h = c9h('nm.d'),
    OT2x = c9h('pomelo'),
    X9O = 0,
    b9i,
    K9B;
  q9h.fl1x({
    'polling-init': {
      url: '/api/push/init',
      format: function(Q9H) {
        X9O = 2;
        var tk5p = {
            domain: 'music.163.com',
            host: MUSIC_CONFIG.pushHost,
            port: MUSIC_CONFIG.pushPort,
            key: MUSIC_CONFIG.pushKey,
            secret: 'bec0b878892740c498505a85eb3dcec9',
          },
          j9a = Q9H.account || bb9S,
          dn0x = GUser.userId;
        OT2x.init(
          tk5p.host,
          tk5p.port,
          true,
          this.cha1x.g9d(this, {
            user: dn0x,
            nonce: j9a.nonce,
            domain: tk5p.domain,
            productKey: tk5p.key,
            signature: j9a.signature,
            expire_time: j9a.expireTime,
          })
        );
      },
      onerror: function() {
        return this.bxg2x();
      },
    },
  });
  q9h.Bx8p = NEJ.C();
  b9i = q9h.Bx8p.N9E(q9h.hL2x);
  b9i.cy0x = (function() {
    var qK4O = !1;
    return function(e9f) {
      if (!qK4O) {
        qK4O = !0;
      }
      this.cG0x(e9f);
      OT2x.on('specify', this.qE4I.g9d(this));
      OT2x.on('broadcast', this.qE4I.g9d(this));
    };
  })();
  b9i.qE4I = function(d9g) {
    k9b.bd9U(
      d9g,
      function(bH0x) {
        h9c.z9q(q9h.Bx8p, 'message', bH0x);
      },
      this
    );
  };
  b9i.bxg2x = (function() {
    var bA0x = 500;
    return function() {
      X9O = 0;
      OT2x.disconnect();
      if (bA0x > 60000) bA0x = 500;
      bA0x *= 2;
    };
  })();
  b9i.cha1x = function(e9f, cb0x) {
    if (!!cb0x) {
      return this.bxg2x();
    }
    X9O = 3;
    OT2x.registerAndBind(
      e9f,
      function(o9f) {
        if (o9f.code != 200) {
          return this.bxg2x();
        }
        X9O = 4;
      }.g9d(this)
    );
  };
  b9i.cGa7T = function() {
    dD0x.cgW1x.gt1x().cGc7V();
  };
  b9i.cGd7W = function() {
    dD0x.cgW1x.gt1x().cGe7X();
  };
  b9i.bfd7W = (function() {
    var qK4O = !1;
    return function() {
      if (qK4O) return;
      qK4O = !0;
      this.cp0x('polling-init', {});
    };
  })();
  I9z.fL1x.A9r({
    event: 'message',
    element: q9h.Bx8p,
  });
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    v9m = c9h('nej.j'),
    dw0x = c9h('nej.p'),
    k9b = c9h('nej.u'),
    m9d = c9h('nm.l'),
    q9h = c9h('nm.d'),
    l9c = c9h('nm.x'),
    cC0x = c9h('api'),
    b9i,
    K9B;
  var gh1x = a8i.iB2x(
    '<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>'
  );
  m9d.bff8X = NEJ.C();
  b9i = m9d.bff8X.N9E(m9d.el0x);
  K9B = m9d.bff8X.ct0x;
  b9i.bk9b = function(e9f) {
    e9f.title = '意见反馈';
    this.bm9d(e9f);
  };
  b9i.cf0x = function() {
    this.ce0x = gh1x;
  };
  b9i.bW0x = function() {
    this.ch0x();
    this.hx2x = {};
    var Km0x = a8i.H9y;
    var HP0x = h9c.s9j;
    this.hx2x.submit_btn = Km0x(this.n9e, 'u-btn2')[0];
    this.hx2x.cancle_btn = Km0x(this.n9e, 'u-btn2')[1];
    this.hx2x.prompt_msg = Km0x(this.n9e, 'u-err')[0];
    this.hx2x.zs = Km0x(this.n9e, 'zs')[0];
    a8i.ba9R(this.hx2x.zs, 'display', 'none');
    this.hx2x.fb_txt = Km0x(this.n9e, 'u-txt')[0];
    this.hx2x.contact = Km0x(this.n9e, 'u-txt')[1];
    a8i.gu1x(this.hx2x.fb_txt, 'holder');
    a8i.gu1x(this.hx2x.contact, 'holder');
    if (a8i.bE0x(this.hx2x.fb_txt.parentNode, 'holder-parent')) {
      a8i.ba9R(this.hx2x.fb_txt.parentNode, 'display', 'block');
    }
    if (a8i.bE0x(this.hx2x.contact.parentNode, 'holder-parent')) {
      a8i.ba9R(this.hx2x.contact.parentNode, 'display', 'block');
    }
    HP0x(this.hx2x.submit_btn, 'click', this.cgN1x.g9d(this));
    HP0x(this.hx2x.cancle_btn, 'click', this.cgI1x.g9d(this));
    HP0x(this.hx2x.prompt_msg, 'msgShow', this.cgH1x.g9d(this));
    HP0x(this.hx2x.fb_txt, 'keyup', this.uM6G.g9d(this));
    HP0x(this.hx2x.fb_txt, 'input', this.fN1x.g9d(this));
    HP0x(this.hx2x.contact, 'keyup', this.cgz1x.g9d(this));
    HP0x(this.hx2x.contact, 'input', this.bMu5z.g9d(this));
    this.kD3x = q9h.hP2x.A9r();
  };
  b9i.cgN1x = function(d9g) {
    h9c.bh9Y(d9g);
    if (this.cO0x()) return;
    var bo9f = this.hx2x.fb_txt.value.trim();
    var bp9g = bo9f.length;
    var e9f = {
      type: 'json',
      method: 'post',
      noEnc: true,
    };
    var bMt5y = this.hx2x.contact.value.trim();
    var bad6X = {
      ua: navigator.userAgent,
      hash: top.location.hash,
      href: location.href,
      flash: l9c.bvV2x(),
      contact: bMt5y,
    };
    var j9a = {
        content: bo9f,
        client: 'web',
        xInfo: JSON.stringify(bad6X),
      },
      nN4R = this.kD3x.ctO4S();
    if (nN4R && nN4R.length) {
      j9a.log = nN4R.join('\n');
    }
    if (bp9g == 0) {
      this.hx2x.prompt_msg.innerHTML = '反馈内容不能为空';
      a8i.ba9R(this.hx2x.prompt_msg, 'display', 'block');
      return;
    }
    if (bMt5y.length > 100) {
      this.hx2x.prompt_msg.innerHTML = '联系方式最多只能输入100个字符';
      a8i.ba9R(this.hx2x.prompt_msg, 'display', 'block');
      return;
    }
    this.cO0x(true);
    e9f.data = k9b.cF0x(j9a);
    e9f.onload = this.cgw1x.g9d(this);
    e9f.onerror = this.ja2x.g9d(this);
    v9m.bn9e('/api/feedback/web', e9f);
  };
  b9i.fN1x = function(d9g) {
    var bp9g = this.hx2x.fb_txt.value.trim().length;
    if (bp9g > 0) a8i.ba9R(this.hx2x.prompt_msg, 'display', 'none');
    dw0x.ds0x.browser == 'ie' && dw0x.ds0x.version < '7.0'
      ? setTimeout(this.gk1x.g9d(this), 0)
      : this.gk1x();
  };
  b9i.uM6G = function(d9g) {
    if (d9g.keyCode === 8) this.gk1x();
  };
  b9i.gk1x = function() {
    var bp9g = this.hx2x.fb_txt.value.trim().length;
    this.hx2x.zs.innerHTML = !bp9g ? '0/140' : bp9g + '/140';
  };
  b9i.bMu5z = function(d9g) {
    var bp9g = this.hx2x.contact.value.trim().length;
    if (bp9g > 0) a8i.ba9R(this.hx2x.prompt_msg, 'display', 'none');
  };
  b9i.cgz1x = function(d9g) {
    if (d9g.keyCode === 8) this.bMu5z();
  };
  b9i.cgI1x = function(d9g) {
    h9c.cr0x(d9g);
    this.bt9k();
  };
  b9i.cgH1x = function(d9g) {
    var f9e = h9c.W9N(d9g);
    f9e.innerHTML = '请输入反馈内容';
  };
  b9i.cGf7Y = function(cGg7Z) {
    var f9e = h9c.W9N(d9g);
    f9e.innerHTML = '';
  };
  b9i.cgw1x = function(o9f) {
    this.cO0x(false);
    this.bt9k();
    m9d.Z9Q.L9C({
      tip: '意见发送成功',
      autoclose: true,
    });
  };
  b9i.ja2x = function(o9f) {
    this.cO0x(false);
    m9d.Z9Q.L9C({
      tip: '意见发送失败',
      autoclose: true,
    });
  };
  b9i.cO0x = function(cW0x) {
    return this.dY0x(this.hx2x.submit_btn, cW0x, '发送意见', '发送中...');
  };
  b9i.L9C = function() {
    K9B.L9C.call(this);
    this.cO0x(false);
    this.hx2x.fb_txt.value = '';
    this.hx2x.contact.value = '';
    a8i.ba9R(this.hx2x.prompt_msg, 'display', 'none');
    this.gk1x();
  };
  l9c.cgq1x = function(e9f) {
    e9f = e9f || {};
    if (e9f.title === undefined) e9f.title = '意见反馈';
    m9d.bff8X.L9C(e9f);
  };
  cC0x.feedback = l9c.feedback = l9c.cgq1x;
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    br9i = NEJ.F,
    O9F = c9h('nej.ui'),
    b9i;
  if (!!O9F.zE7x) return;
  O9F.zE7x = NEJ.C();
  b9i = O9F.zE7x.N9E(O9F.eg0x);
  b9i.cy0x = function() {
    this.gT2x = this.bMo5t();
    this.cG0x();
  };
  b9i.bk9b = function(e9f) {
    this.bm9d(e9f);
    this.co0x = e9f.index;
    this.gA1x = e9f.total;
    this.hv2x = e9f.range;
    this.gD2x(e9f.data);
  };
  b9i.bD0x = function() {
    this.bG0x();
    delete this.bl9c;
    delete this.co0x;
    delete this.gA1x;
    delete this.hv2x;
  };
  b9i.is2x = br9i;
  b9i.bMo5t = (function() {
    var gG2x = +new Date();
    return function() {
      return 'itm-' + ++gG2x;
    };
  })();
  b9i.EF9w = function() {
    return this.gT2x;
  };
  b9i.hY2x = function() {
    return this.bl9c;
  };
  b9i.gD2x = function(j9a) {
    this.bl9c = j9a || {};
    this.is2x(this.bl9c);
  };
})();
(function() {
  var c9h = NEJ.P,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    O9F = c9h('nej.ui'),
    b9i,
    K9B;
  if (!!O9F.ub5g) return;
  O9F.ub5g = NEJ.C();
  b9i = O9F.ub5g.N9E(O9F.zE7x);
  K9B = O9F.ub5g.ct0x;
  b9i.bk9b = function(e9f) {
    this.cgo1x = e9f.pkey || 'id';
    this.bm9d(e9f);
  };
  b9i.DH8z = function(j9a) {
    this.z9q('ondelete', {
      ext: j9a,
      id: this.EF9w(),
      data: this.hY2x(),
      body: this.lK3x(),
    });
  };
  b9i.sQ5V = function(j9a) {
    this.z9q('onupdate', {
      ext: j9a,
      id: this.EF9w(),
      data: this.hY2x(),
      body: this.lK3x(),
    });
  };
  b9i.gD2x = function(j9a) {
    K9B.gD2x.apply(this, arguments);
    this.gT2x = this.bl9c[this.cgo1x] || this.bMo5t();
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    fz1x = NEJ.R,
    a8i = c9h('nej.e'),
    k9b = c9h('nej.u'),
    O9F = c9h('nej.ui'),
    b9i,
    iW2x,
    bgd8V;
  if (!!O9F.bgf8X) return;
  O9F.bgf8X = NEJ.C();
  b9i = O9F.bgf8X.N9E(O9F.eg0x);
  b9i.bk9b = function(e9f) {
    this.bag6a = NEJ.X({}, e9f);
    this.fQ1x = NEJ.X({}, e9f);
    delete this.bag6a.onchange;
    this.fQ1x.onchange = this.fU1x.g9d(this);
    this.bm9d(e9f);
    this.cgg1x({
      number: e9f.number,
      label: e9f.label || bb9S,
    });
  };
  b9i.bD0x = function() {
    this.bG0x();
    if (!!this.lv3x) {
      this.lv3x.T9K();
      delete this.lv3x;
    }
    delete this.bag6a;
    delete this.fQ1x;
    this.cgf1x();
    this.n9e.innerHTML = '&nbsp;';
  };
  b9i.cf0x = function() {
    this.ma3x = iW2x;
  };
  b9i.cgg1x = function(j9a) {
    a8i.dz0x(this.n9e, bgd8V, j9a);
    var gG2x = a8i.Ko0x();
    this.fQ1x.list = a8i.H9y(this.n9e, 'js-i-' + gG2x);
    this.fQ1x.pbtn = (a8i.H9y(this.n9e, 'js-p-' + gG2x) || fz1x)[0];
    this.fQ1x.nbtn = (a8i.H9y(this.n9e, 'js-n-' + gG2x) || fz1x)[0];
  };
  b9i.bW0x = function() {
    this.ch0x();
  };
  b9i.cGh7a = function(j9a) {
    return a8i.bZ0x(bgd8V, j9a);
  };
  b9i.fU1x = function(d9g) {
    if (this.OC2x) return;
    var r9i = d9g.index,
      cz0x = d9g.total;
    this.OC2x = !0;
    this.OA2x(r9i, cz0x);
    k9b.bd9U(this.baj6d, function(tH5M) {
      tH5M.OA2x(r9i, cz0x);
    });
    this.OC2x = !1;
    this.z9q('onchange', d9g);
  };
  b9i.g9d = function(bI0x) {
    bI0x = a8i.B9s(bI0x);
    if (!bI0x) return this;
    var cq0x = NEJ.X({}, this.bag6a);
    cq0x.parent = bI0x;
    cq0x.index = this.tI5N();
    cq0x.total = this.kn3x();
    var tH5M = this.constructor.A9r(cq0x);
    tH5M.wv6p('onchange', this.fQ1x.onchange);
    if (!this.baj6d) this.baj6d = [];
    this.baj6d.push(tH5M);
    return this;
  };
  b9i.cgf1x = (function() {
    var bnl9c = function(tH5M, r9i, i9b) {
      tH5M.T9K();
      i9b.splice(r9i, 1);
    };
    return function() {
      k9b.nH4L(this.baj6d, bnl9c);
    };
  })();
  b9i.kT3x = function(r9i) {
    if (!this.lv3x) return;
    this.lv3x.kT3x(r9i);
  };
  b9i.tI5N = function() {
    if (!this.lv3x) return 1;
    return this.lv3x.tI5N();
  };
  b9i.kn3x = function() {
    if (!this.lv3x) return 1;
    return this.lv3x.kn3x();
  };
  b9i.OA2x = function(r9i, cz0x) {
    if (!this.lv3x) return;
    this.lv3x.OA2x(r9i, cz0x);
  };
  b9i.bgA8s = function(cz0x) {
    if (!this.lv3x) return;
    this.lv3x.bgA8s(cz0x);
  };
  iW2x = a8i.sK5P(
    '.#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}'
  );
  bgd8V = a8i.ex0x(
    '{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}'
  );
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    br9i = NEJ.F,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    O9F = c9h('nej.ut'),
    b9i;
  if (!!O9F.ban6h) return;
  O9F.ban6h = NEJ.C();
  b9i = O9F.ban6h.N9E(O9F.cI0x);
  b9i.bk9b = function(e9f) {
    this.bm9d(e9f);
    this.bat6n = e9f.pbtn;
    this.cs0x = e9f.nbtn;
    this.bav6p = e9f.sbtn;
    this.bay6s = e9f.ebtn;
    this.jn2x = e9f.event || 'click';
    this.kM3x = e9f.selected || 'js-selected';
    this.op4t = e9f.disabled || 'js-disabled';
    this.cgb1x(e9f.list);
    this.OA2x(e9f.index || 1, e9f.total || 1);
  };
  b9i.bD0x = function() {
    this.bG0x();
    delete this.bU0x;
    delete this.jn2x;
    delete this.bat6n;
    delete this.cs0x;
    delete this.bav6p;
    delete this.bay6s;
    delete this.bMj5o;
    delete this.gA1x;
    delete this.co0x;
    delete this.kM3x;
    delete this.op4t;
  };
  b9i.cgb1x = (function() {
    var bgT8L = function(f9e) {
      this.bU0x.push(f9e);
      this.bX0x([[f9e, this.jn2x, this.cu0x.et0x(this, 0)]]);
    };
    return function(i9b) {
      this.bU0x = [];
      this.bX0x([
        [this.bat6n, 'click', this.cu0x.et0x(this, -1)],
        [this.cs0x, 'click', this.cu0x.et0x(this, 1)],
        [this.bav6p, 'click', this.cu0x.et0x(this, -2)],
        [this.bay6s, 'click', this.cu0x.et0x(this, 2)],
      ]);
      k9b.bd9U(i9b, bgT8L, this);
    };
  })();
  b9i.Eg9X = function(f9e, r9i) {
    if (r9i == null) {
      f9e.innerText = '';
      a8i.ba9R(f9e, 'display', 'none');
      a8i.x9o(f9e, this.kM3x);
    } else {
      f9e.innerText = r9i;
      a8i.ba9R(f9e, 'display', '');
      r9i == this.co0x ? a8i.y9p(f9e, this.kM3x) : a8i.x9o(f9e, this.kM3x);
    }
  };
  b9i.bgX8P = function() {
    if (this.co0x <= 1) {
      a8i.y9p(this.bat6n, this.op4t);
      a8i.y9p(this.bav6p, this.op4t);
    } else {
      a8i.x9o(this.bat6n, this.op4t);
      a8i.x9o(this.bav6p, this.op4t);
    }
    if (this.co0x >= this.gA1x) {
      a8i.y9p(this.cs0x, this.op4t);
      a8i.y9p(this.bay6s, this.op4t);
    } else {
      a8i.x9o(this.cs0x, this.op4t);
      a8i.x9o(this.bay6s, this.op4t);
    }
  };
  b9i.baB6v = br9i;
  b9i.bgZ8R = function() {
    this.baB6v();
    this.bgX8P();
    this.z9q('onchange', {
      last: this.bMj5o,
      total: this.gA1x,
      index: this.co0x,
      ext: this.bha8S,
    });
  };
  b9i.bMi5n = function(r9i) {
    r9i = parseInt(r9i);
    if (isNaN(r9i) || this.gA1x == null) return !1;
    r9i = Math.max(1, Math.min(r9i, this.gA1x));
    this.bMj5o = this.co0x;
    this.co0x = r9i;
    return !0;
  };
  b9i.bhe8W = function(cz0x) {
    cz0x = parseInt(cz0x);
    if (isNaN(cz0x) || cz0x < 1) return !1;
    this.gA1x = cz0x;
    return !0;
  };
  b9i.cu0x = function(d9g, fc1x) {
    h9c.cr0x(d9g);
    var F9w = h9c.W9N(d9g);
    if (!F9w || a8i.bE0x(F9w, this.kM3x) || a8i.bE0x(F9w, this.op4t)) return;
    var r9i = F9w.innerText;
    switch (fc1x) {
      case 1:
      case -1:
        r9i = this.co0x + fc1x;
        break;
      case 2:
        r9i = this.gA1x;
        break;
      case -2:
        r9i = 1;
        break;
    }
    this.kT3x(r9i);
  };
  b9i.tI5N = function() {
    return this.co0x;
  };
  b9i.kT3x = function(r9i) {
    var cfT1x = this.co0x;
    this.bMi5n(r9i);
    if (cfT1x != this.co0x) this.bgZ8R();
    return this;
  };
  b9i.kn3x = function() {
    return this.gA1x;
  };
  b9i.UM4Q = function(cz0x) {
    if (this.bhe8W(cz0x) && this.co0x != null) {
      this.co0x = 1;
      this.bgZ8R();
    }
    return this;
  };
  b9i.bgA8s = function(cz0x) {
    if (this.bhe8W(cz0x)) {
      this.baB6v();
      this.bgX8P();
    }
    return this;
  };
  b9i.OA2x = function(r9i, cz0x) {
    if (!this.bhe8W(cz0x) || !this.bMi5n(r9i)) return this;
    this.bgZ8R();
    return this;
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    a8i = c9h('nej.e'),
    k9b = c9h('nej.u'),
    cY0x = c9h('nej.x'),
    O9F = c9h('nej.ut'),
    b9i;
  if (!!O9F.NU2x) return;
  O9F.NU2x = NEJ.C();
  b9i = O9F.NU2x.N9E(O9F.ban6h);
  b9i.cy0x = function() {
    this.cG0x();
    var f9e = a8i.dh0x('span', 'zdot');
    f9e.innerText = '...';
    this.baG6A = [f9e.cloneNode(true), f9e];
  };
  b9i.bD0x = function() {
    this.bG0x();
    this.bMg5l();
  };
  b9i.bMg5l = function() {
    a8i.mu3x(this.baG6A[0]);
    a8i.mu3x(this.baG6A[1]);
  };
  b9i.baB6v = function() {
    this.bha8S = {
      last: !1,
      first: !1,
      list: this.bU0x,
    };
    this.bMg5l();
    this.Eg9X(this.bU0x[0], 1);
    var bM0x = 1,
      bp9g = this.bU0x.length;
    if (this.gA1x < bp9g) {
      for (var qN4R; bM0x < bp9g; bM0x++) {
        qN4R = bM0x + 1;
        this.Eg9X(this.bU0x[bM0x], qN4R > this.gA1x ? null : qN4R);
      }
      return;
    }
    if (this.co0x > 1) {
      var cx0x = Math.floor((bp9g - 2) / 2),
        cfP1x = this.gA1x - bp9g + 2,
        hC2x = Math.max(2, this.co0x - cx0x);
      if (this.gA1x >= bp9g) {
        hC2x = Math.min(hC2x, cfP1x);
      }
      if (hC2x > 2) {
        this.bU0x[0].insertAdjacentElement('afterEnd', this.baG6A[0]);
        this.bha8S.first = !0;
      }
      for (var r9i; ; bM0x++) {
        r9i = hC2x + bM0x - 1;
        if (r9i > this.co0x) break;
        this.Eg9X(this.bU0x[bM0x], r9i);
      }
    }
    if (this.co0x < this.gA1x) {
      var r9i,
        hC2x = this.co0x + 1;
      for (var i = 0, l = bp9g - 2; ; i++, bM0x++) {
        r9i = hC2x + i;
        if (bM0x > l || r9i > this.gA1x) break;
        this.Eg9X(this.bU0x[bM0x], r9i);
      }
      if (r9i < this.gA1x) {
        this.bU0x[bM0x].insertAdjacentElement('beforeBegin', this.baG6A[1]);
        this.bha8S.last = !0;
      }
      if (r9i <= this.gA1x) {
        this.Eg9X(this.bU0x[bM0x++], this.gA1x);
      }
    }
    for (; bM0x < bp9g; bM0x++) {
      this.Eg9X(this.bU0x[bM0x]);
    }
  };
  a8i.cfN1x = cY0x.cfN1x = function(bI0x, e9f) {
    var C9t = a8i.lw3x(bI0x);
    if (!C9t) return null;
    if (!O9F.bbr7k(C9t, O9F.NU2x)) {
      e9f = e9f || {};
      var i9b = !e9f.clazz ? a8i.dj0x(C9t) : a8i.H9y(C9t, e9f.clazz);
      e9f.pbtn = i9b.shift();
      e9f.nbtn = i9b.pop();
      e9f.list = i9b;
      delete e9f.clazz;
    }
    return O9F.bbr7k(C9t, O9F.NU2x, e9f || bb9S);
  };
  cY0x.isChange = !0;
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    fz1x = NEJ.R,
    a8i = c9h('nej.e'),
    k9b = c9h('nej.u'),
    I9z = c9h('nej.ut'),
    O9F = c9h('nej.ui'),
    b9i,
    K9B,
    gh1x;
  if (!!O9F.NS2x) return;
  O9F.NS2x = NEJ.C();
  b9i = O9F.NS2x.N9E(O9F.bgf8X);
  K9B = O9F.NS2x.ct0x;
  b9i.bk9b = function(e9f) {
    e9f.number = parseInt(e9f.number) || 9;
    this.bm9d(e9f);
    this.lv3x = I9z.NU2x.A9r(this.fQ1x);
  };
  b9i.fU1x = function(d9g) {
    if (!!this.bag6a.noend) {
      var bMe5j = d9g.ext || bb9S,
        i9b = bMe5j.list || fz1x;
      if (bMe5j.last) {
        a8i.ba9R(i9b[i9b.length - 1], 'display', 'none');
      }
    }
    K9B.fU1x.apply(this, arguments);
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    br9i = NEJ.F,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    bc9T = c9h('nej.ui'),
    O9F = c9h('nej.ut'),
    b9i;
  if (!!O9F.baH6B) return;
  O9F.baH6B = NEJ.C();
  b9i = O9F.baH6B.N9E(O9F.cI0x);
  b9i.bk9b = function(e9f) {
    this.jw2x = {};
    this.bm9d(e9f);
    this.in2x = a8i.B9s(e9f.parent);
    this.fg1x = {
      parent: this.in2x,
    };
    this.pn4r = parseInt(e9f.limit) || 10;
    this.yL7E = parseInt(e9f.first) || this.pn4r;
    this.cfL1x(e9f.item);
    this.cfE1x(e9f.cache || bb9S);
    this.cfA1x(e9f.pager || bb9S);
    this.gD2x();
  };
  b9i.bD0x = function() {
    this.z9q('onbeforerecycle');
    this.NP2x();
    this.bG0x();
    if (this.jw2x.clear) {
      this.S9J.ve6Y(this.jw2x.key);
    }
    this.S9J.T9K();
    if (!!this.jr2x) {
      this.jr2x.T9K();
      delete this.jr2x;
    }
    delete this.bMa5f;
    delete this.fQ1x;
    delete this.baJ6D;
    delete this.S9J;
    delete this.in2x;
    delete this.NM2x;
    delete this.fg1x;
    delete this.jw2x;
  };
  b9i.bLY5d = (function() {
    var df0x = /\{(.*?)\}/gi,
      cft1x = function(pe4i, j9a) {
        return (pe4i || '{id}{seed}').replace(df0x, function($1, $2) {
          var D9u = j9a[$2];
          return D9u == null ? $1 : D9u;
        });
      };
    return function(C9t) {
      var J9A = cft1x(this.fg1x.jstIdTempalte, {
        id: C9t,
        seed: a8i.Ko0x(),
      });
      if (!this.fg1x.jstIdType) {
        return a8i.B9s(J9A);
      } else if (this.fg1x.jstIdType == 1) {
        return (a8i.H9y(this.in2x, J9A) || [])[0];
      }
    };
  })();
  b9i.AF8x = function(bM0x, bi9Z, fY1x, bp9g) {
    var o9f = {
      index: 1,
      total: 1,
    };
    if (bi9Z >= bM0x) {
      o9f.index = Math.floor((bi9Z - bM0x) / fY1x) + 2;
    }
    if (bp9g > bM0x) {
      o9f.total = Math.ceil((bp9g - bM0x) / fY1x) + 1;
    }
    return o9f;
  };
  b9i.bLX5c = function(J9A) {
    delete this.NM2x;
    this.JR0x = J9A;
    this.bX0x([[this.in2x, 'click', this.cfr1x.g9d(this)]]);
  };
  b9i.cfL1x = function(p9g) {
    if (k9b.fH1x(p9g)) {
      this.bLX5c(p9g);
      return;
    }
    NEJ.X(this.fg1x, p9g);
    var dZ0x = this.fg1x.klass;
    delete this.fg1x.klass;
    if (k9b.fH1x(dZ0x)) {
      this.bLX5c(dZ0x);
      return;
    }
    delete this.JR0x;
    this.NM2x = dZ0x;
    this.fg1x.ondelete = this.z9q.g9d(this, 'ondelete');
    this.fg1x.onupdate = this.z9q.g9d(this, 'onupdate');
  };
  b9i.cfE1x = function(R9I) {
    var dZ0x = R9I.klass,
      kt3x = NEJ.X({}, R9I);
    this.jw2x.key = kt3x.lkey;
    this.jw2x.data = kt3x.data || {};
    this.jw2x.clear = !!kt3x.clear;
    this.fg1x.pkey = kt3x.key || 'id';
    kt3x.onlistload = this.bim8e.g9d(this);
    kt3x.onpullrefresh = this.cfp1x.g9d(this);
    if (!!dZ0x && 'onlistchange' in dZ0x) {
      this.bX0x([[dZ0x, 'listchange', this.bio8g.g9d(this)]]);
    } else {
      kt3x.onitemadd = this.baU6O.g9d(this);
      kt3x.onitemdelete = this.baY6S.g9d(this);
      kt3x.onitemupdate = this.bLV5a.g9d(this);
    }
    this.S9J = (dZ0x || O9F.Uh4l).A9r(kt3x);
    if (R9I.total != null) {
      this.S9J.UM4Q(this.jw2x.key, R9I.total);
    }
    if (!!R9I.list) {
      this.S9J.vd6X(this.jw2x.key, R9I.list);
    }
  };
  b9i.cfA1x = function(tH5M) {
    this.bMa5f = tH5M.klass || bc9T.NS2x;
    this.fQ1x = NEJ.X({}, tH5M);
    if (k9b.eI0x(tH5M.parent)) {
      this.fQ1x.parent = tH5M.parent[0];
      this.NF2x = tH5M.parent.slice(1);
      if (!this.NF2x || !this.NF2x.length) {
        delete this.NF2x;
      }
    }
    delete this.fQ1x.klass;
  };
  b9i.NP2x = (function() {
    var gH2x = /^(?:table|tr|tbody|ul|ol|select)$/i;
    return function() {
      this.z9q('onbeforelistclear', {
        parent: this.in2x,
      });
      if (!!this.fK1x && this.fK1x.length > 0) {
        this.fK1x = this.NM2x.T9K(this.fK1x);
        delete this.fK1x;
      }
      if (gH2x.test(this.in2x.tagName)) {
        a8i.bPh6b(this.in2x);
      } else {
        this.in2x.innerHTML = '';
      }
    };
  })();
  b9i.biu8m = function(bba6U) {
    if (!!this.fQ1x.fixed) return;
    a8i.ba9R(this.fQ1x.parent, 'display', bba6U);
    k9b.bd9U(
      this.NF2x,
      function(bI0x) {
        a8i.ba9R(bI0x, 'display', bba6U);
      },
      this
    );
  };
  b9i.biy8q = function() {
    var r9i = this.fQ1x.index || 1;
    delete this.fQ1x.index;
    if (!!this.jr2x) {
      r9i = this.jr2x.tI5N();
    }
    this.AZ8R({
      last: r9i,
      index: r9i,
    });
  };
  b9i.AZ8R = function(d9g) {
    this.z9q('onpagechange', d9g);
  };
  b9i.bLU5Z = function(bi9Z) {
    this.jw2x.offset = bi9Z;
    this.Wc5h();
  };
  b9i.bLS5X = function(e9f) {
    return e9f;
  };
  b9i.Wc5h = function() {
    this.NB2x();
    var j9a = this.jw2x.data;
    j9a.offset = this.jw2x.offset;
    var pT4X = j9a.offset == 0;
    j9a.total = pT4X;
    this.jw2x.limit = pT4X ? this.yL7E : this.pn4r;
    j9a.limit = this.jw2x.limit;
    this.S9J.lJ3x(this.bLS5X(NEJ.X({}, this.jw2x)));
  };
  b9i.bim8e = function(e9f) {
    if (e9f.key != this.jw2x.key || e9f.offset != this.jw2x.offset) return;
    this.bbc6W();
    var i9b = this.S9J.hF2x(e9f.key);
    if (!i9b || !i9b.length) {
      this.biG8y();
      return;
    }
    var fY1x = e9f.limit,
      bi9Z = e9f.offset;
    if (this.biJ8B(i9b, bi9Z, fY1x)) return;
    this.z9q('onbeforelistrender', {
      list: i9b,
      offset: bi9Z,
      parent: this.in2x,
    });
    if (!!this.JR0x) {
      this.fg1x.xlist = i9b;
      this.fg1x.beg = bi9Z;
      this.fg1x.end = Math.min(i9b.length, bi9Z + fY1x) - 1;
      this.fg1x.act = 'list';
      var dQ0x = a8i.bZ0x(this.JR0x, this.fg1x);
      this.Nz2x(dQ0x);
    } else {
      this.fg1x.limit = fY1x;
      this.fg1x.offset = bi9Z;
      var hn2x = a8i.Ax8p(i9b, this.NM2x, this.fg1x);
      this.Ny2x(hn2x);
    }
    this.z9q('onafterlistrender', {
      list: i9b,
      offset: bi9Z,
      parent: this.in2x,
    });
  };
  b9i.cfp1x = function(e9f) {
    if (!this.baJ6D) return;
    delete this.baJ6D;
    this.bbc6W('onafterpullrefresh');
    this.gD2x();
  };
  b9i.bLR5W = function(r9i, cz0x) {
    if (!!this.jr2x) {
      var ww6q = this.jr2x.tI5N(),
        cfg1x = this.jr2x.kn3x();
      if (ww6q > cz0x || cz0x != cfg1x) {
        this.jr2x.T9K();
        delete this.jr2x;
        this.AZ8R({
          last: ww6q,
          index: Math.min(r9i, cz0x),
        });
        return !0;
      }
    } else {
      this.fQ1x.index = r9i;
      this.fQ1x.total = cz0x;
      this.jr2x = this.bMa5f.A9r(this.fQ1x);
      this.jr2x.wv6p('onchange', this.AZ8R.g9d(this));
      k9b.bd9U(
        this.NF2x,
        function(bI0x) {
          this.jr2x.g9d(bI0x);
        },
        this
      );
    }
  };
  b9i.bbe6Y = (function() {
    var gG2x = +new Date();
    return function(j9a) {
      var C9t = j9a[this.fg1x.pkey];
      if (!C9t) {
        j9a['dirty-data'] = !0;
        j9a[this.fg1x.pkey] = 'dirty-' + gG2x++;
      }
      return j9a;
    };
  })();
  b9i.bbl7e = function(j9a) {
    var C9t = j9a[this.fg1x.pkey];
    if (!!j9a['dirty-data']) {
      delete j9a['dirty-data'];
      delete j9a[this.fg1x.pkey];
    }
    return C9t;
  };
  b9i.bbm7f = (function() {
    var cff1x = function(kP3x, mL3x) {
      this.in2x.insertAdjacentElement(kP3x, mL3x);
    };
    return function(kP3x, j9a) {
      var KB0x = [j9a];
      if (!!this.JR0x) {
        this.fg1x.xlist = KB0x;
        this.fg1x.beg = 0;
        this.fg1x.end = 0;
        this.fg1x.act = 'add';
        this.Nz2x(a8i.bZ0x(this.JR0x, this.fg1x), kP3x);
      } else {
        this.fg1x.limit = 1;
        this.fg1x.offset = 0;
        this.fg1x.parent = cff1x.g9d(this, kP3x);
        var hn2x = a8i.Ax8p(KB0x, this.NM2x, this.fg1x);
        this.fg1x.parent = this.in2x;
        this.Ny2x(hn2x);
      }
    };
  })();
  b9i.NB2x = br9i;
  b9i.bbc6W = function(V9M) {
    var d9g = {
      parent: this.in2x,
    };
    this.z9q(V9M || 'onafterlistload', d9g);
    if (!d9g.stopped) {
      a8i.mu3x(this.cv0x);
    }
  };
  b9i.biJ8B = br9i;
  b9i.bbp7i = function(bH0x, kP3x) {
    if (k9b.fH1x(bH0x)) {
      if (!this.cv0x) this.cv0x = a8i.dh0x('div');
      this.cv0x.innerHTML = bH0x;
    } else {
      this.cv0x = bH0x;
    }
    this.in2x.insertAdjacentElement(kP3x || 'beforeEnd', this.cv0x);
  };
  b9i.yc7V = function(V9M, ke3x, kP3x) {
    var d9g = {
      parent: this.in2x,
    };
    this.z9q(V9M, d9g);
    if (!d9g.stopped) {
      this.bbp7i(d9g.value || ke3x, kP3x);
    }
  };
  b9i.biG8y = br9i;
  b9i.Nz2x = br9i;
  b9i.Ny2x = br9i;
  b9i.cfr1x = (function() {
    var gH2x = /^(?:delete|update)$/;
    return function(d9g) {
      var f9e = h9c.W9N(d9g, 'd:action');
      if (!f9e) return;
      var U9L = a8i.t9k(f9e, 'action');
      if (!gH2x.test(U9L)) return;
      var C9t = a8i.t9k(f9e, 'id');
      if (!C9t) return;
      var p9g = this.S9J.eH0x(C9t);
      if (!p9g) return;
      h9c.bh9Y(d9g);
      this.z9q('on' + U9L, {
        data: p9g,
        id: p9g[this.fg1x.pkey],
        body: a8i.B9s(this.bLY5d(C9t)),
      });
    };
  })();
  b9i.baU6O = br9i;
  b9i.Wb5g = function(d9g) {
    var j9a = d9g.data || {},
      e9f = {
        data: j9a,
        key: this.jw2x.key,
        id: j9a[this.fg1x.pkey],
      };
    this.z9q('onbeforedelete', e9f);
    this.S9J.My1x(e9f);
  };
  b9i.baY6S = br9i;
  b9i.Wa5f = function(d9g) {
    var j9a = d9g.data || {},
      e9f = {
        data: j9a,
        key: this.jw2x.key,
      };
    this.z9q('onbeforeupdate', e9f);
    this.S9J.Wd5i(e9f);
  };
  b9i.bLV5a = function(d9g) {
    this.Nk1x(d9g, 'onafterupdate');
    if (d9g.stopped) return;
    var C9t = d9g.data[this.fg1x.pkey];
    if (!!this.fK1x) {
      var p9g = a8i.bTB8t(C9t);
      if (!!p9g) p9g.gD2x(d9g.data);
    } else {
      var f9e = a8i.B9s(C9t + '' + a8i.Ko0x());
      if (!f9e) return;
      var i9b = this.S9J.hF2x(d9g.key),
        r9i = k9b.di0x(i9b, d9g.data);
      if (r9i < 0) return;
      this.fg1x.list = i9b;
      this.fg1x.beg = r9i;
      this.fg1x.end = r9i;
      this.fg1x.act = 'update';
      var dQ0x = a8i.bZ0x(this.JR0x, this.fg1x);
      f9e.insertAdjacentHTML('afterEnd', dQ0x);
      a8i.cJ0x(f9e);
    }
  };
  b9i.Nk1x = function(d9g, V9M) {
    var p9g = d9g.data;
    if (!p9g || p9g[this.fg1x.pkey] == null) {
      this.z9q('onerror', d9g);
      d9g.stopped = !0;
    }
    if (!d9g.stopped) {
      this.z9q(V9M, d9g);
    }
  };
  b9i.bjc8U = br9i;
  b9i.bjd8V = br9i;
  b9i.bio8g = function(d9g) {
    if (d9g.key != this.jw2x.key) return;
    switch (d9g.action) {
      case 'add':
        this.baU6O(d9g);
        break;
      case 'delete':
        this.baY6S(d9g);
        break;
      case 'update':
        this.bLV5a(d9g);
        break;
      case 'refresh':
        this.gD2x();
        break;
      case 'unshift':
        this.bjd8V(d9g.offset, d9g.limit);
        break;
      case 'append':
        this.bjc8U(d9g.offset, d9g.limit);
        break;
    }
  };
  b9i.qp4t = function(p9g) {
    this.Wa5f({
      data: p9g,
    });
  };
  b9i.mN3x = function(p9g) {
    this.Wb5g({
      data: p9g,
    });
  };
  b9i.tg5l = function(p9g) {
    this.S9J.jD2x({
      data: p9g,
      key: this.jw2x.key,
    });
  };
  b9i.ts5x = function() {
    return this.S9J;
  };
  b9i.bjj8b = function(j9a) {
    this.bbm7f('afterBegin', this.bbe6Y(j9a));
    return this.bbl7e(j9a);
  };
  b9i.bLQ5V = function(j9a) {
    this.bbm7f('beforeEnd', this.bbe6Y(j9a));
    return this.bbl7e(j9a);
  };
  b9i.gD2x = function() {
    this.NP2x();
    this.biy8q();
  };
  b9i.cGk7d = function() {
    this.S9J.ve6Y(this.jw2x.key);
    this.gD2x();
  };
  b9i.bsf1x = function() {
    if (!!this.baJ6D) return;
    this.baJ6D = !0;
    this.yc7V('onbeforepullrefresh', '列表刷新中...', 'afterBegin');
    this.S9J.bsf1x({
      key: this.jw2x.key,
      data: this.jw2x.data,
    });
  };
  b9i.kn3x = function() {
    return this.S9J.kn3x(this.jw2x.key);
  };
  b9i.bLP5U = function() {
    return this.jr2x;
  };
  b9i.Wi5n = function() {
    return this.S9J.Wi5n(this.jw2x.key);
  };
  b9i.ceX1x = function() {
    return this.fK1x;
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    fz1x = NEJ.R,
    k9b = c9h('nej.u'),
    a8i = c9h('nej.e'),
    O9F = c9h('nej.ut'),
    b9i,
    K9B;
  if (!!O9F.kw3x) return;
  O9F.kw3x = NEJ.C();
  b9i = O9F.kw3x.N9E(O9F.baH6B);
  K9B = O9F.kw3x.ct0x;
  b9i.AF8x = function(bi9Z, bp9g) {
    return K9B.AF8x.call(this, this.yL7E, bi9Z, this.pn4r, bp9g);
  };
  b9i.bju9l = function(r9i) {
    var bi9Z = 0;
    if (r9i > 1) bi9Z = this.yL7E + (r9i - 2) * this.pn4r;
    return bi9Z;
  };
  b9i.AZ8R = function(d9g) {
    K9B.AZ8R.apply(this, arguments);
    if (!d9g.stopped) {
      this.bLU5Z(this.bju9l(d9g.index));
    }
  };
  b9i.NB2x = function() {
    this.NP2x();
    this.yc7V('onbeforelistload', '列表加载中...');
  };
  b9i.bbc6W = function() {
    K9B.bbc6W.apply(this, arguments);
    this.NP2x();
  };
  b9i.biJ8B = function(i9b, bi9Z, fY1x) {
    var by0x = this.AF8x(bi9Z, i9b.length);
    if (this.bLR5W(by0x.index, by0x.total)) return !0;
    this.biu8m(by0x.total > 1 ? '' : 'none');
  };
  b9i.biG8y = function() {
    this.yc7V('onemptylist', '没有列表数据！');
  };
  b9i.bbp7i = function(bH0x, kP3x) {
    if (!kP3x && k9b.fH1x(bH0x)) {
      this.in2x.innerHTML = bH0x;
      return;
    }
    K9B.bbp7i.apply(this, arguments);
  };
  b9i.Nz2x = function(dQ0x) {
    this.in2x.innerHTML = dQ0x;
  };
  b9i.Ny2x = function(hn2x) {
    this.fK1x = hn2x;
  };
  b9i.baU6O = function(d9g) {
    this.Nk1x(d9g, 'onafteradd');
    if (!d9g.stopped) this.gD2x();
  };
  b9i.baY6S = function(d9g) {
    this.Nk1x(d9g, 'onafterdelete');
    if (!d9g.stopped) this.gD2x();
  };
  b9i.bjc8U = function(bi9Z, fY1x) {
    var r9i = 1;
    if (!!this.jr2x) {
      r9i = this.jr2x.tI5N();
    }
    var jP2x = this.bju9l(r9i),
      fT1x = jP2x + (r9i > 1 ? this.pn4r : this.yL7E);
    if (bi9Z >= fT1x && !!this.jr2x) {
      var by0x = this.AF8x(0, this.kn3x());
      this.jr2x.bgA8s(by0x.total);
      this.biu8m(by0x.total > 1 ? '' : 'none');
    } else {
      this.gD2x();
    }
  };
  b9i.bjd8V = function(bi9Z, fY1x) {
    var r9i = 1;
    if (!!this.jr2x) {
      r9i = this.jr2x.tI5N();
    }
    var jP2x = this.bju9l(r9i),
      by0x = this.AF8x(jP2x, this.kn3x());
    this.AZ8R({
      last: r9i,
      index: by0x.index,
    });
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    br9i = NEJ.F,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    I9z = c9h('nej.ut'),
    k9b = c9h('nej.u'),
    l9c = c9h('nm.x'),
    q9h = c9h('nm.d'),
    w9n = c9h('nm.w'),
    fo1x = 40,
    b9i,
    K9B;
  w9n.bbv7o = NEJ.C();
  b9i = w9n.bbv7o.N9E(I9z.cI0x);
  K9B = w9n.bbv7o.ct0x;
  b9i.cy0x = function() {
    this.cG0x();
  };
  b9i.bk9b = function(e9f) {
    this.bm9d(e9f);
    this.Nh1x = e9f.inputer;
    this.bjx9o = e9f.tipper;
    this.bX0x([[this.Nh1x, 'input', this.fN1x.g9d(this)]]);
  };
  b9i.bD0x = function() {
    this.bG0x();
    this.JL0x(null, null);
  };
  b9i.fN1x = function(d9g) {
    if (d9g && d9g.type == 'keyup' && (d9g.keyCode != 8 || d9g.keyCode != 68)) return;
    var V9M = this.Nh1x.value,
      cGl7e;
    if (l9c.SM4Q(V9M) > fo1x) {
      this.Nh1x.value = l9c.Co8g(V9M, fo1x);
      this.JL0x('歌单名不能超过20个汉字或40个英文字符！', arguments.callee.g9d(this));
    } else if (V9M.indexOf('#') >= 0 || V9M.indexOf('@') >= 0) {
      this.JL0x('歌单名不能包含字符“@”和“#”！');
    } else {
      this.JL0x(null, null);
      this.z9q('onchange', {
        value: V9M,
      });
    }
  };
  b9i.ceV1x = function() {
    this.fN1x();
  };
  b9i.JL0x = (function() {
    var C9t = 0;
    return function(dI0x, bLN5S) {
      if (!!C9t) window.clearTimeout(C9t);
      if (!dI0x) {
        a8i.y9p(this.bjx9o, 'f-vhide');
        this.bLM5R = !1;
        return;
      }
      this.bjx9o.innerHTML = '<i class="u-icn u-icn-25"></i>' + dI0x;
      a8i.x9o(this.bjx9o, 'f-vhide');
      this.bLM5R = !0;
      if (k9b.gJ2x(bLN5S))
        C9t = window.setTimeout(
          function() {
            this.JL0x(null, null);
            bLN5S();
          }.g9d(this),
          1000
        );
    };
  })();
  b9i.bLL5Q = function() {
    if (this.bLM5R) return !1;
    if (l9c.jT2x(this.Nh1x.value)) {
      this.JL0x('歌单名不能为空');
      return !1;
    }
    return !0;
  };
  b9i.fX1x = function() {
    return this.Nh1x.value;
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    h9c = c9h('nej.v'),
    a8i = c9h('nej.e'),
    v9m = c9h('nej.j'),
    m9d = c9h('nm.l'),
    w9n = c9h('nm.w'),
    bC0x = c9h('nej.ui'),
    q9h = c9h('nm.d'),
    l9c = c9h('nm.x'),
    b9i,
    K9B;
  m9d.bbx7q = NEJ.C();
  b9i = m9d.bbx7q.N9E(m9d.el0x);
  K9B = m9d.bbx7q.ct0x;
  b9i.cy0x = function() {
    this.cG0x();
  };
  b9i.bW0x = function() {
    this.ch0x();
    var i9b = a8i.H9y(this.n9e, 'j-flag');
    this.bbz7s = {
      inputer: i9b[0],
      tipper: i9b[1],
    };
    this.iD2x = {
      onerror: this.bLK5P.g9d(this),
      onitemadd: this.bLK5P.g9d(this),
    };
    this.lD3x = i9b[2];
    h9c.s9j(i9b[2], 'click', this.FQ9H.g9d(this));
    h9c.s9j(i9b[3], 'click', this.BM8E.g9d(this));
    h9c.s9j(this.n9e, 'keypress', this.bLJ5O.g9d(this));
  };
  b9i.cf0x = function() {
    this.ce0x = 'm-wgt-create';
  };
  b9i.bk9b = function(e9f) {
    e9f.clazz = ' m-layer-w2';
    e9f.parent = e9f.parent || document.body;
    e9f.title = '新建歌单';
    e9f.draggable = !0;
    e9f.destroyalbe = !0;
    e9f.mask = true;
    this.bm9d(e9f);
    this.bbz7s.inputer.value = e9f.name || '';
    this.vg6a = w9n.bbv7o.A9r(this.bbz7s);
    this.vg6a.ceV1x();
    this.S9J = q9h.ig2x.A9r(this.iD2x);
    setTimeout(
      function() {
        this.bbz7s.inputer.focus();
      }.g9d(this),
      0
    );
  };
  b9i.bD0x = function() {
    this.bG0x();
    if (this.vg6a) {
      this.vg6a.T9K();
      delete this.vg6a;
    }
    this.sN5S(!1);
    this.bbz7s.inputer.value = '';
  };
  b9i.sN5S = function(MX1x) {
    this.oN4R = MX1x;
    if (MX1x) {
      this.lD3x.innerHTML = '<i>新建中...</i>';
      a8i.y9p(this.lD3x, 'u-btn2-dis');
    } else {
      this.lD3x.innerHTML = '<i>新 建</i>';
      a8i.x9o(this.lD3x, 'u-btn2-dis');
    }
  };
  b9i.FQ9H = function() {
    if (this.oN4R || !this.vg6a.bLL5Q()) return;
    var cq0x = {
      key: 'playlist_new-' + GUser.userId,
      data: {
        name: this.vg6a.fX1x(),
      },
      offset: 1,
    };
    this.S9J.jD2x(cq0x);
    this.sN5S(!0);
  };
  b9i.bLK5P = function(d9g) {
    var cj0x = (d9g.result || bb9S).code;
    if (!cj0x) {
      this.z9q('onsuccess', d9g.data);
    } else {
      this.z9q('onerror', d9g);
    }
    this.bt9k();
  };
  b9i.BM8E = function() {
    this.bt9k();
  };
  b9i.bLJ5O = function(d9g) {
    if (d9g.keyCode == 13) this.FQ9H();
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    br9i = NEJ.F,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    I9z = c9h('nej.ut'),
    v9m = c9h('nej.j'),
    l9c = c9h('nm.x'),
    q9h = c9h('nm.d'),
    m9d = c9h('nm.l'),
    b9i,
    K9B;
  m9d.bkh9Y = NEJ.C();
  b9i = m9d.bkh9Y.N9E(m9d.el0x);
  K9B = m9d.bkh9Y.ct0x;
  b9i.cy0x = function() {
    this.cG0x();
  };
  b9i.bW0x = function() {
    this.ch0x();
    var i9b = a8i.H9y(this.n9e, 'j-flag');
    this.iG2x = {
      limit: 301,
      parent: i9b[1],
      cache: {
        klass: q9h.ig2x,
        lkey: 'playlist_new-' + GUser.userId,
        onlisterror: this.bkm9d.g9d(this),
      },
      item: {
        klass: 'm-wgt-subscribe-item',
        cutStr: l9c.Cj8b,
        escape: k9b.dH0x,
      },
    };
    this.iD2x = {
      onsuccess: this.bbB7u.g9d(this),
      onerror: this.eJ0x.g9d(this),
    };
    h9c.s9j(i9b[0], 'click', this.FQ9H.g9d(this));
    h9c.s9j(i9b[1], 'click', this.kQ3x.g9d(this));
  };
  b9i.cf0x = function() {
    this.ce0x = 'm-wgt-subscribe';
  };
  b9i.bk9b = function(e9f) {
    e9f.parent = e9f.parent || document.body;
    e9f.clazz = ' m-layer-w2';
    e9f.title = '添加到歌单';
    e9f.draggable = !0;
    e9f.mask = !0;
    this.bm9d(e9f);
    this.bbC7v = (e9f.tracks || []).reverse();
    this.iG2x.item.size = this.bbC7v.length;
    this.iD2x.name = e9f.name || '';
    this.bLI5N = q9h.xm7f.A9r({
      onaddsuccess: this.CW8O.g9d(this),
    });
    this.sX5c = q9h.ig2x.A9r({
      onlistload: this.ceN1x.g9d(this),
    });
    this.sX5c.bQH7A();
    k9b.bd9U(
      this.bbC7v,
      function(p9g, r9i, i9b) {
        if (!k9b.lO3x(p9g)) {
          i9b[r9i] = this.bLI5N.eH0x(p9g) || p9g;
        }
      },
      this
    );
  };
  b9i.ceN1x = function() {
    if (this.dJ0x) this.dJ0x.T9K();
    this.dJ0x = I9z.kw3x.A9r(this.iG2x);
  };
  b9i.FQ9H = function() {
    this.bt9k();
    if (this.Gg9X) this.Gg9X.T9K();
    this.Gg9X = m9d.bbx7q.A9r(this.iD2x);
    this.Gg9X.L9C();
  };
  b9i.kQ3x = (function() {
    var ceM1x = function(f9e) {
      while (f9e && f9e != document) {
        if (f9e.tagName.toLowerCase() == 'li') {
          return f9e;
        }
        f9e = f9e.parentNode;
      }
    };
    return function(d9g) {
      h9c.cr0x(d9g);
      var F9w = h9c.W9N(d9g),
        yd7W = ceM1x(F9w);
      if (!!yd7W && !a8i.bE0x(yd7W, 'dis')) {
        this.bbB7u({
          id: a8i.t9k(yd7W, 'id'),
        });
      }
    };
  })();
  b9i.bbB7u = function(d9g) {
    var C9t = d9g.id;
    if (!C9t || !this.bbC7v.length) return;
    this.bLI5N.jD2x({
      key: 'track_playlist-' + C9t,
      data: {
        tracks: this.bbC7v,
        pid: C9t,
      },
    });
    this.bt9k();
  };
  b9i.CW8O = function() {
    this.z9q('onsuccess');
    m9d.Z9Q.L9C({
      tip: '收藏成功',
    });
  };
  b9i.eJ0x = function(d9g) {
    this.bt9k();
    this.z9q('onerror', d9g);
    var cV0x = '收藏失败';
    switch (d9g.code) {
      case 405:
        cV0x = '操作过于频繁，先休息一下再试吧';
        break;
      case 507:
        cV0x = '歌单数量超过限制';
        break;
      case 502:
        cV0x = '歌曲已经存在';
    }
    m9d.Z9Q.L9C({
      tip: cV0x,
      type: 2,
    });
  };
  b9i.bkm9d = function() {
    this.bt9k();
    m9d.Z9Q.L9C({
      tip: '列表下载失败，请稍后再试',
      type: 2,
    });
  };
  l9c.mr3x = function(e9f) {
    if (!GUser || !GUser.userId || GUser.userId <= 0) {
      top.login();
      return;
    }
    m9d.bkh9Y.L9C(e9f);
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    br9i = NEJ.F,
    dw0x = c9h('nej.p'),
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    v9m = c9h('nej.j'),
    k9b = c9h('nej.u'),
    l9c = c9h('nm.x');
  var bkz9q,
    ox4B,
    Y9P = decodeURIComponent(location.href),
    jY2x = /.+(https?:\/\/.+\/proxy.html)/.test(Y9P) ? RegExp.$1 : '';
  if (!!jY2x) {
    v9m.vS6M('mail_proxy_url', jY2x);
  } else {
    jY2x = v9m.sW5b('mail_proxy_url') || 'about:blank';
  }
  bkz9q = a8i.bdx7q({
    src: jY2x,
    onload: function() {
      ox4B = true;
    },
  });
  var bLH5M = function() {
    v9m.gB1x('USER_TRIGGER', {
      value: true,
      expire: 1 / (24 * 60),
      path: '/',
    });
  };
  var ceK1x = function() {
    if (dw0x.ds0x.browser == 'ie' && parseInt(dw0x.ds0x.version) < 9) {
      l9c.fs1x({
        clazz: 'm-layer-w2',
        message: '当前浏览器版本过低，暂时无法使用，请升级后再试。',
      });
      return false;
    }
    return true;
  };
  l9c.JI0x = function(u9l, C9t, U9L) {
    if (!ceK1x()) return;
    bLH5M();
    if (U9L == 'stop') {
      if (!ox4B) throw 'proxy not loaded';
      bLH5M();
      bkz9q.contentWindow.location.replace(
        jY2x +
          '#' +
          k9b.cF0x({
            to: 'ifrmMusic',
            message: JSON.stringify({
              s: +new Date(),
              action: 'stop',
            }),
          })
      );
    } else {
      bkz9q.contentWindow.location.replace(
        jY2x +
          '#' +
          k9b.cF0x({
            to: 'ifrmMusic',
            message: JSON.stringify({
              type: u9l,
              id: C9t,
              s: +new Date(),
              action: U9L,
            }),
          })
      );
    }
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    br9i = NEJ.F,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    v9m = c9h('nej.j'),
    k9b = c9h('nej.u'),
    l9c = c9h('nm.x'),
    m9d = c9h('nm.l'),
    q9h = c9h('nm.d');
  var kD3x = q9h.hP2x.A9r();
  var pp4t = q9h.xm7f.A9r({
    onlistload: ceJ1x,
    onitemload: ceI1x,
    onerror: eJ0x,
  });
  var Gq9h = q9h.qY5d.A9r({
    onlistload: ceH1x,
    onitemload: ceG1x,
    onerror: eJ0x,
  });
  var bLG5L = {};
  function xy7r(d9g) {
    var f9e = h9c.W9N(d9g, 'd:resAction'),
      U9L = a8i.t9k(f9e, 'resAction');
    if (f9e && (U9L == 'play' || U9L == 'addto')) {
      var u9l = parseInt(a8i.t9k(f9e, 'resType'));
      bLF5K({
        action: U9L,
        type: u9l,
        id: a8i.t9k(f9e, 'resId'),
        from: a8i.t9k(f9e, 'resFrom'),
        data: a8i.t9k(f9e, 'resData'),
        order: a8i.t9k(f9e, 'resOrder'),
        node: f9e,
      });
      if (u9l != 13) bLC5H(f9e);
    }
  }
  function bLF5K(bP0x) {
    var U9L = bP0x.action,
      u9l = bP0x.type,
      C9t = bP0x.id,
      eb0x = bP0x.from,
      j9a = bP0x.data,
      to5t = bP0x.order,
      e9f = {
        limit: 1000,
        offset: 0,
        data: {
          id: C9t,
        },
        ext: {
          id: C9t,
          action: U9L,
          type: u9l,
          from: eb0x,
          data: j9a,
          node: bP0x.node,
        },
      };
    if ((U9L != 'play' && U9L != 'addto') || !u9l) return;
    if (window.GRef && GRef == 'mail') {
      l9c.JI0x(u9l, C9t, U9L);
      return;
    }
    switch (u9l) {
      case 13:
        e9f.key = 'track_playlist-' + C9t;
        pp4t.lJ3x(e9f);
        break;
      case 17:
        e9f.key = 'program';
        e9f.id = C9t;
        Gq9h.Wg5l(e9f);
        if (U9L == 'play') {
          v9m.bn9e('/api/dj/program/listen', {
            query: {
              id: C9t,
            },
          });
        }
        break;
      case 18:
        e9f.key = 'track';
        e9f.id = C9t;
        pp4t.Wg5l(e9f);
        break;
      case 19:
        e9f.key = 'track_album-' + C9t;
        pp4t.lJ3x(e9f);
        break;
      case 24:
        e9f.key = 'track_day';
        pp4t.lJ3x(e9f);
        break;
      case 2:
        e9f.key = 'track_artist_top-' + C9t;
        pp4t.lJ3x(e9f);
        break;
      case 70:
        e9f.key = 'program_djradio-' + C9t + '-' + to5t;
        e9f.data.radioId = C9t;
        e9f.data.asc = to5t == 2;
        Gq9h.lJ3x(e9f);
        break;
    }
  }
  function bLB5G(i9b) {
    var o9f = [];
    k9b.bd9U(i9b, function(p9g) {
      if (p9g.mainSong) {
        p9g.mainSong.program = p9g;
        o9f.push(p9g.mainSong);
        p9g.localupdatetime = +new Date();
        pp4t.cut5y(p9g.mainSong);
        p9g.mainTrackId = p9g.mainSong.id;
        delete p9g.mainSong;
      } else {
        var bLA5F = pp4t.eH0x(p9g.mainTrackId);
        bLA5F && o9f.push(bLA5F);
      }
    });
    return o9f;
  }
  function bbO7H(i9b, e9f) {
    var rD5I = e9f.action == 'play' && e9f.type != 17 && e9f.type != 18,
      fV1x = e9f.action == 'play';
    if (!i9b.length) return;
    if (e9f.type == 19) {
      i9b = l9c.Ia0x(
        i9b,
        true,
        {
          play: true,
        },
        {
          source: 'album',
          sourceid: e9f.id,
        }
      );
    } else {
      i9b = l9c.Ia0x(i9b, true, {
        play: true,
      });
    }
    k9b.bd9U(i9b, function(p9g) {
      p9g.source = l9c.buQ1x(
        {
          fid: e9f.from,
          fdata: e9f.data,
          type: e9f.type,
          rid: e9f.id,
        },
        p9g.id
      );
    });
    top.player.addTo(i9b, rD5I, fV1x);
    kD3x.Vg4k({
      rid: e9f.id,
      type: e9f.type,
      hash: l9c.Me1x(),
      play: fV1x,
      source: e9f.from,
      sourceid: e9f.data,
    });
  }
  function ceJ1x(d9g) {
    var ey0x = d9g.ext || {};
    i9b = pp4t.hF2x(d9g.key);
    bbO7H(i9b, ey0x);
    if (ey0x.type == 13 && ey0x.action == 'play' && i9b && i9b.length > 0) {
      bLC5H(ey0x.node);
      v9m.bn9e('/api/playlist/update/playcount', {
        query: {
          id: ey0x.id,
        },
      });
    }
  }
  function ceI1x(d9g) {
    var i9b = [pp4t.eH0x(d9g.id)],
      bj9a = i9b[0],
      qx4B = l9c.pK4O(bj9a),
      tU5Z = bj9a.privilege || {};
    if (qx4B == 10) {
      l9c.vb6V(tU5Z.fee || bj9a.fee, bj9a.id, 'song', null, tU5Z);
    } else if (qx4B == 100) {
      l9c.iy2x(null, null, null, true, bj9a);
    } else if (qx4B == 11) {
      l9c.bRB8t(bj9a.id, 18);
    } else {
      bbO7H(i9b, d9g.ext);
    }
  }
  function ceH1x(d9g) {
    var i9b = bLB5G(Gq9h.hF2x(d9g.key));
    bbO7H(i9b, d9g.ext);
  }
  function ceG1x(d9g) {
    var i9b = bLB5G([Gq9h.eH0x(d9g.id)]);
    bbO7H(i9b, d9g.ext);
  }
  function eJ0x() {
    top.player.tipPlay('无法播放，音乐已下线');
  }
  function bLC5H(f9e) {
    var u9l = a8i.t9k(f9e, 'resType'),
      C9t = a8i.t9k(f9e, 'resId'),
      J9A = u9l + '-' + C9t;
    if (bLG5L[J9A]) return;
    var bLz5E = a8i.B9s('play-count'),
      bld9U = a8i.H9y(f9e.parentNode, 'nb'),
      Vr4v = null;
    if (bLz5E) {
      Vr4v = bLz5E;
    } else {
      Vr4v = !!bld9U && !!bld9U[0] ? bld9U[0] : null;
    }
    if (Vr4v) {
      var cx0x = Vr4v.innerHTML;
      if (/^\d+$/.test(cx0x)) {
        Vr4v.innerText = +cx0x + 1;
      }
      bLG5L[J9A] = true;
    }
  }
  l9c.cex1x = function(f9e) {
    h9c.s9j(f9e || document.body, 'click', xy7r.g9d(this));
  };
  l9c.cew1x = function(U9L, u9l, C9t) {
    bLF5K({
      action: U9L,
      type: u9l,
      id: C9t,
    });
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    br9i = NEJ.F,
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    v9m = c9h('nej.j'),
    I9z = c9h('nej.ut'),
    q9h = c9h('nm.d'),
    l9c = c9h('nm.x'),
    b9i,
    K9B;
  q9h.fl1x({
    'share-all': {
      url: '/api/share/friends/resource',
      format: function(o9f, e9f) {
        this.cev1x(o9f, e9f);
      },
      onerror: 'onshareerror',
    },
    'share-sns': {
      url: '/api/share/resource/sns',
      format: function(o9f, e9f) {
        this.z9q('onshareall', e9f.result);
      },
      onerror: function(o9f, e9f) {
        this.z9q('onshareall', e9f.result);
      },
    },
    'share-private': {
      url: '/api/msg/private/send',
      onload: 'onshareprivate',
      onerror: 'onshareerror',
    },
    share_img_compound: {
      url: '/upload/event/img/compound',
      type: 'POST',
      format: function(o9f, e9f) {
        e9f.options.picUrl = o9f.picUrl;
        this.bLy5D(e9f.options, e9f.result);
      },
      onerror: function(o9f, e9f) {
        this.z9q('onshareall', e9f.result);
      },
    },
    'vid-get': {
      url: '/api/video/coversvid/get',
      format: function(Q9H, e9f) {
        this.pZ4d('vid_info-' + e9f.data.nosKey, Q9H);
        return Q9H;
      },
    },
    'video-submit': {
      url: '/api/cloudvideo/video/event/submit',
      filter: function(e9f) {},
      format: function(o9f, e9f) {
        e9f.data = e9f.data2;
        this.cp0x('share-all', e9f);
      },
      onerror: 'onshareerror',
    },
  });
  q9h.blj9a = NEJ.C();
  b9i = q9h.blj9a.N9E(q9h.hL2x);
  b9i.cet1x = (function() {
    var vX6R = function(Q9H, e9f) {
      e9f.times++;
      if (e9f.times > 10) {
        this.z9q('onvinfoerror', e9f.key, Q9H);
      } else {
        setTimeout(ew0x.g9d(this, e9f), e9f.times * 1000);
      }
    };
    var yW7P = function(Q9H, e9f) {
      this.z9q('onvinfo', e9f.key, Q9H);
    };
    var ew0x = function(e9f) {
      var Y9P = e9f.url;
      v9m.bn9e(Y9P + '?vinfo', {
        method: 'GET',
        type: 'json',
        mode: 1,
        onload: yW7P.et0x(this, e9f),
        onerror: vX6R.et0x(this, e9f),
      });
    };
    return function(e9f) {
      e9f.times = 0;
      ew0x.call(this, e9f);
    };
  })();
  b9i.cGm7f = (function() {
    var GJ9A;
    var vX6R = function(Q9H, e9f) {
      if (Q9H.code > 0) {
        clearInterval(this.GK9B);
        this.z9q('onviderror', e9f.data.nosKey);
      }
    };
    var yW7P = function(J9A, Q9H) {
      if (Q9H.vid && Q9H.covers) {
        clearInterval(this.GK9B);
        this.z9q('onvid', J9A, Q9H);
      }
    };
    var ew0x = function(e9f) {
      if (+new Date() - GJ9A > 60 * 60 * 1000) {
        clearInterval(this.GK9B);
        this.z9q('onviderror', e9f.data.nosKey);
        return;
      }
      e9f.onload = yW7P.g9d(this, e9f.data.nosKey);
      e9f.onerror = vX6R.g9d(this);
      this.cp0x('vid-get', e9f);
    };
    return function(e9f) {
      if (!e9f || !e9f.data) return;
      GJ9A = +new Date();
      this.GK9B = clearInterval(this.GK9B);
      this.GK9B = setInterval(ew0x.g9d(this, e9f), 10000);
      ew0x.apply(this, arguments);
    };
  })();
  b9i.cer1x = function() {
    this.GK9B = clearInterval(this.GK9B);
  };
  b9i.cev1x = function(o9f, nR4V) {
    if (o9f.event && nR4V.snsTypes) {
      if (nR4V.pics) {
        var bLx5C = [];
        for (var i = 0, len = nR4V.pics.length; i < len; i++) {
          bLx5C[i] = nR4V.pics[i].originId;
        }
        this.cp0x('share_img_compound', {
          data: {
            picIds: bLx5C.join(','),
          },
          options: nR4V,
          result: o9f,
        });
      } else {
        nR4V.picUrl = nR4V.picUrl;
        this.bLy5D(nR4V, o9f);
      }
    } else {
      this.z9q('onshareall', o9f);
    }
    var uK6E = q9h.hP2x.A9r();
    uK6E.eU1x(nR4V.isPub ? 'pubevent' : 'shareevent', {
      id: o9f.id,
    });
  };
  b9i.bLy5D = function(nR4V, o9f) {
    var cq0x = {},
      d9g = o9f.event || {};
    cq0x.eventid = d9g.id;
    cq0x.eventtype = d9g.type;
    nR4V.picUrl && (cq0x.picUrl = nR4V.picUrl);
    cq0x.snsTypes = nR4V.snsTypes;
    cq0x.msg = nR4V.data.msg || '';
    cq0x.type = nR4V.data.type;
    nR4V.data.id && (cq0x.id = nR4V.data.id);
    if (cq0x.eventtype == 41) {
      var Q9H = l9c.Ex9o(d9g.json);
      cq0x.eventtype = 39;
      if (cq0x.msg) {
        cq0x.msg += '  ';
      }
      cq0x.msg +=
        '分享' + Q9H.video.creator.nickname + '的视频《' + Q9H.video.title + '》';
      delete cq0x.id;
    }
    this.cp0x('share-sns', {
      data: cq0x,
      result: o9f,
    });
  };
  b9i.cep1x = function(e9f) {
    var j9a = {
      type: '',
      id: 0,
      threadId: '',
      msg: '',
      actId: 0,
      pics: '',
      uuid: 'publish-' + +new Date() + k9b.oj4n(5),
    };
    j9a = NEJ.EX(j9a, e9f);
    if (j9a.id < 0) {
      delete j9a.id;
      j9a.type = 'noresource';
    }
    if (!j9a.threadId) {
      delete j9a.threadId;
    }
    if (!j9a.actId) {
      delete j9a.actId;
    }
    if (!j9a.pics) {
      delete j9a.pics;
    } else {
      j9a.pics = JSON.stringify(j9a.pics);
    }
    this.cp0x('share-all', {
      data: j9a,
      snsTypes: e9f.snsTypes,
      picUrl: e9f.picUrl,
      pics: e9f.pics,
      isPub: e9f.isPub,
    });
  };
  b9i.ceo1x = function(e9f) {
    this.cp0x('share-private', e9f);
  };
  b9i.cen1x = function(e9f) {
    this.cp0x('video-submit', e9f);
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    br9i = NEJ.F,
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    I9z = c9h('nej.ut'),
    q9h = c9h('nm.d'),
    l9c = c9h('nm.x'),
    b9i,
    K9B;
  var cem1x = {
    40: !0,
  };
  q9h.fl1x({
    'event-list': {
      url: '/api/v1/event/get',
      filter: function(e9f) {
        e9f.data.getcounts = true;
        e9f.data.pagesize = e9f.data.limit;
        if (e9f.data.offset == 0) {
          e9f.data.lasttime = -1;
        }
        delete e9f.data.offset;
      },
      format: function(Q9H, e9f) {
        Q9H.event = l9c.Zh6b(Q9H.event, function(p9g, r9i) {
          return !cem1x[p9g.type];
        });
        this.cel1x(Q9H.event);
        e9f.data.lasttime = Q9H.lasttime;
        if (Q9H.event.length) {
          Q9H.event.length = e9f.limit;
        }
        return {
          list: Q9H.event,
          total: Q9H.size,
        };
      },
    },
    'event_latest-list': {
      url: '/api/act/event/getnews',
      format: function(Q9H, e9f) {
        return {
          list: Q9H.events,
          total: Q9H.count,
        };
      },
    },
    'event-pull': {
      url: '/api/event/getnews',
      filter: function(e9f) {
        e9f.data.pagesize = 20;
      },
      format: function(Q9H, e9f) {
        return Q9H.event;
      },
    },
    'ievent-get': {
      type: 'GET',
      url: '/api/event/get',
      onload: 'oneventload',
      onerror: 'oneventloaderror',
    },
    'ievent-new-get': {
      type: 'GET',
      url: '/api/event/getnews',
      onload: 'oneventnewload',
    },
    'ievent_user-list': {
      type: 'GET',
      url: '/api/event/get/{userId}',
      filter: function(e9f) {
        if (e9f.data.offset == 0) {
          e9f.data.time = -1;
        }
        delete e9f.data.offset;
        e9f.data.getcounts = true;
      },
      format: function(Q9H, e9f) {
        e9f.data.time = Q9H.lasttime;
        var i9b = Q9H.events;
        if (Q9H.more && i9b.length < e9f.data.limit) {
          i9b = this.JB0x(i9b, e9f.data.limit);
        }
        return {
          list: i9b,
          total: Q9H.size,
        };
      },
    },
    'ievent-res-get': {
      url: '/api/res/status',
      format: function(o9f, e9f) {
        o9f.conf = e9f.conf;
        return o9f;
      },
    },
    'ievent-like': {
      url: '/api/resource/like',
      onload: 'oneventlike',
      filter: function(e9f, bg9X) {
        if (e9f.like) {
          if (e9f.comment) {
            bg9X.url = '/api/v1/comment/like';
          } else {
            bg9X.url = '/api/resource/like';
          }
          bg9X.onload = 'oneventlike';
          bg9X.onerror = 'oneventlikeerr';
        } else {
          if (e9f.comment) {
            bg9X.url = '/api/v1/comment/unlike';
          } else {
            bg9X.url = '/api/resource/unlike';
          }
          bg9X.onload = 'oneventunlike';
          bg9X.onerror = 'oneventunlikeerr';
        }
      },
      format: function(o9f, e9f) {
        o9f.eid = e9f.eid;
        o9f.origin = e9f.origin;
        o9f.ext = e9f.ext;
        return o9f;
      },
    },
    'ievent_user-del': {
      url: '/api/event/delete',
      format: function(o9f, e9f) {
        o9f.id = e9f.data.id;
        return o9f;
      },
    },
    'event-del': {
      url: '/api/event/delete',
      filter: function(e9f, bg9X) {
        if (e9f.data.type == 'nointer') {
          bg9X.url = '/api/event/rcmd/reject';
        } else if (e9f.data.transcoding) {
          bg9X.url = '/api/event/video/transcoding/delete';
        } else {
          bg9X.url = '/api/event/delete';
        }
      },
      format: function(o9f, e9f) {
        o9f.id = e9f.data.id;
        return o9f;
      },
    },
    'event_activity-del': {
      url: '/api/event/delete',
      format: function(o9f, e9f) {
        o9f.id = e9f.data.id;
        return o9f;
      },
    },
    'event_activity-list': {
      url: '/api/act/event',
      filter: function(e9f) {
        e9f.data.lasttime = e9f.data.lasttime || -1;
        e9f.data.pagesize = e9f.data.limit;
        e9f.data.getcounts = true;
        delete e9f.data.offset;
      },
      format: function(Q9H, e9f) {
        e9f.data.lasttime = Q9H.lasttime;
        var i9b = Q9H.events;
        if (Q9H.more) i9b = this.JB0x(i9b, e9f.data.pagesize);
        return {
          list: i9b,
          total: Q9H.size,
        };
      },
      onerror: 'onlisterror',
    },
  });
  q9h.xJ7C = NEJ.C();
  b9i = q9h.xJ7C.N9E(q9h.hL2x);
  b9i.cy0x = function() {
    this.cG0x();
  };
  b9i.blF9w = function(u9l, cR0x) {
    return u9l + '-' + cR0x;
  };
  b9i.cGn7g = function(e9f) {
    this.cp0x('ievent-get', e9f);
  };
  b9i.cGo7h = function(e9f) {
    this.cp0x('ievent-new-get', e9f);
  };
  b9i.cGq7j = function(e9f) {
    this.cp0x('ievent-user-get', e9f);
  };
  b9i.cGs7l = function(u9l, cR0x) {
    return this.sl5q(this.blF9w(u9l, cR0x));
  };
  b9i.cJd8V = function(JA0x, e9f) {
    if (!JA0x || !JA0x.length) return;
    e9f = e9f || {};
    var bz0x = {
      song: 2,
      album: 4,
      playlist: 1,
      mv: 3,
      program: 5,
    };
    for (var i = 0, EZ9Q = [], bLs5x = [], j9a; i < JA0x.length; ++i) {
      j9a = JA0x[i];
      j9a = this.sl5q(this.blF9w(j9a.type, j9a.id));
      if (!j9a) {
        EZ9Q.push(JA0x[i].id);
        bLs5x.push(bz0x[JA0x[i].type] || 0);
      }
    }
    if (!EZ9Q.length) {
      this.z9q('oneventresload', e9f.conf);
      return;
    }
    e9f.data = {
      ids: JSON.stringify(EZ9Q),
      types: JSON.stringify(bLs5x),
    };
    e9f.onload = this.ceb0x.g9d(this);
    this.cp0x('ievent-res-get', e9f);
  };
  b9i.ceb0x = function(o9f) {
    if (o9f.code != 200) {
      this.z9q('oneventreserror', o9f.code);
      return;
    }
    var bz0x = {
      1: 'playlist',
      2: 'song',
      3: 'mv',
      4: 'album',
      5: 'program',
    };
    for (var i = 0, i9b = o9f.results; i < i9b.length; ++i) {
      this.pZ4d(this.blF9w(bz0x[i9b[i].type], i9b[i].id), i9b[i]);
    }
    this.z9q('oneventresload', o9f.conf);
  };
  b9i.bLq5v = function(j9a) {
    var J9A = 'event-list';
    this.bqT0x(J9A, j9a);
    this.z9q('onitemadd', {
      key: J9A,
      action: 'add',
      data: j9a,
      flag: -1,
    });
  };
  b9i.oy4C = function(e9f) {
    this.cp0x('ievent-like', e9f);
  };
  b9i.mN3x = function(e9f) {
    this.cp0x('ievent-delete', e9f);
  };
  b9i.JB0x = function(i9b, fY1x) {
    for (var i = i9b.length; i < fY1x; i++) i9b.push(null);
    return i9b;
  };
  b9i.cel1x = function(i9b) {
    var o9f = [];
    if (!i9b || !i9b.length) return;
    k9b.bd9U(
      i9b,
      function(d9g) {
        d9g.biData = this.bLo5t(d9g);
      },
      this
    );
  };
  b9i.bLo5t = (function() {
    var Zf6Z = {
        32: 'comment',
        33: 'activity',
        34: 'recomment_artist',
      },
      cdV0x = [13, 17, 18, 19, 20, 21, 22, 28, 31];
    return function(d9g) {
      var Q9H = {
        id: d9g.id,
        sourceid: d9g.user.userId,
        alg: d9g.rcmdInfo ? d9g.rcmdInfo.alg : null,
        contentType:
          Zf6Z[d9g.type] || (k9b.di0x(cdV0x, d9g.type) != -1 ? 'user_event' : 'other'),
      };
      return Q9H;
    };
  })();
  b9i.GY9P = function(cdU0x, d9g) {
    var Q9H = this.bLo5t(d9g);
    Q9H.actionType = cdU0x;
    if (window.log) log('eventclick', Q9H);
  };
  b9i.cGx7q = function(e9f) {
    this.cp0x('event_latest-list', e9f);
  };
})();
(function(factory) {
  window.SparkMD5 = factory();
})(function(undefined) {
  'use strict';
  var add32 = function(a, b) {
      return (a + b) & 4294967295;
    },
    hex_chr = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
    ];
  function cmn(q, a, b, x, s, t) {
    a = add32(add32(a, q), add32(x, t));
    return add32((a << s) | (a >>> (32 - s)), b);
  }
  function md5cycle(x, k) {
    var a = x[0],
      b = x[1],
      c = x[2],
      d = x[3];
    a += (((b & c) | (~b & d)) + k[0] - 680876936) | 0;
    a = (((a << 7) | (a >>> 25)) + b) | 0;
    d += (((a & b) | (~a & c)) + k[1] - 389564586) | 0;
    d = (((d << 12) | (d >>> 20)) + a) | 0;
    c += (((d & a) | (~d & b)) + k[2] + 606105819) | 0;
    c = (((c << 17) | (c >>> 15)) + d) | 0;
    b += (((c & d) | (~c & a)) + k[3] - 1044525330) | 0;
    b = (((b << 22) | (b >>> 10)) + c) | 0;
    a += (((b & c) | (~b & d)) + k[4] - 176418897) | 0;
    a = (((a << 7) | (a >>> 25)) + b) | 0;
    d += (((a & b) | (~a & c)) + k[5] + 1200080426) | 0;
    d = (((d << 12) | (d >>> 20)) + a) | 0;
    c += (((d & a) | (~d & b)) + k[6] - 1473231341) | 0;
    c = (((c << 17) | (c >>> 15)) + d) | 0;
    b += (((c & d) | (~c & a)) + k[7] - 45705983) | 0;
    b = (((b << 22) | (b >>> 10)) + c) | 0;
    a += (((b & c) | (~b & d)) + k[8] + 1770035416) | 0;
    a = (((a << 7) | (a >>> 25)) + b) | 0;
    d += (((a & b) | (~a & c)) + k[9] - 1958414417) | 0;
    d = (((d << 12) | (d >>> 20)) + a) | 0;
    c += (((d & a) | (~d & b)) + k[10] - 42063) | 0;
    c = (((c << 17) | (c >>> 15)) + d) | 0;
    b += (((c & d) | (~c & a)) + k[11] - 1990404162) | 0;
    b = (((b << 22) | (b >>> 10)) + c) | 0;
    a += (((b & c) | (~b & d)) + k[12] + 1804603682) | 0;
    a = (((a << 7) | (a >>> 25)) + b) | 0;
    d += (((a & b) | (~a & c)) + k[13] - 40341101) | 0;
    d = (((d << 12) | (d >>> 20)) + a) | 0;
    c += (((d & a) | (~d & b)) + k[14] - 1502002290) | 0;
    c = (((c << 17) | (c >>> 15)) + d) | 0;
    b += (((c & d) | (~c & a)) + k[15] + 1236535329) | 0;
    b = (((b << 22) | (b >>> 10)) + c) | 0;
    a += (((b & d) | (c & ~d)) + k[1] - 165796510) | 0;
    a = (((a << 5) | (a >>> 27)) + b) | 0;
    d += (((a & c) | (b & ~c)) + k[6] - 1069501632) | 0;
    d = (((d << 9) | (d >>> 23)) + a) | 0;
    c += (((d & b) | (a & ~b)) + k[11] + 643717713) | 0;
    c = (((c << 14) | (c >>> 18)) + d) | 0;
    b += (((c & a) | (d & ~a)) + k[0] - 373897302) | 0;
    b = (((b << 20) | (b >>> 12)) + c) | 0;
    a += (((b & d) | (c & ~d)) + k[5] - 701558691) | 0;
    a = (((a << 5) | (a >>> 27)) + b) | 0;
    d += (((a & c) | (b & ~c)) + k[10] + 38016083) | 0;
    d = (((d << 9) | (d >>> 23)) + a) | 0;
    c += (((d & b) | (a & ~b)) + k[15] - 660478335) | 0;
    c = (((c << 14) | (c >>> 18)) + d) | 0;
    b += (((c & a) | (d & ~a)) + k[4] - 405537848) | 0;
    b = (((b << 20) | (b >>> 12)) + c) | 0;
    a += (((b & d) | (c & ~d)) + k[9] + 568446438) | 0;
    a = (((a << 5) | (a >>> 27)) + b) | 0;
    d += (((a & c) | (b & ~c)) + k[14] - 1019803690) | 0;
    d = (((d << 9) | (d >>> 23)) + a) | 0;
    c += (((d & b) | (a & ~b)) + k[3] - 187363961) | 0;
    c = (((c << 14) | (c >>> 18)) + d) | 0;
    b += (((c & a) | (d & ~a)) + k[8] + 1163531501) | 0;
    b = (((b << 20) | (b >>> 12)) + c) | 0;
    a += (((b & d) | (c & ~d)) + k[13] - 1444681467) | 0;
    a = (((a << 5) | (a >>> 27)) + b) | 0;
    d += (((a & c) | (b & ~c)) + k[2] - 51403784) | 0;
    d = (((d << 9) | (d >>> 23)) + a) | 0;
    c += (((d & b) | (a & ~b)) + k[7] + 1735328473) | 0;
    c = (((c << 14) | (c >>> 18)) + d) | 0;
    b += (((c & a) | (d & ~a)) + k[12] - 1926607734) | 0;
    b = (((b << 20) | (b >>> 12)) + c) | 0;
    a += ((b ^ c ^ d) + k[5] - 378558) | 0;
    a = (((a << 4) | (a >>> 28)) + b) | 0;
    d += ((a ^ b ^ c) + k[8] - 2022574463) | 0;
    d = (((d << 11) | (d >>> 21)) + a) | 0;
    c += ((d ^ a ^ b) + k[11] + 1839030562) | 0;
    c = (((c << 16) | (c >>> 16)) + d) | 0;
    b += ((c ^ d ^ a) + k[14] - 35309556) | 0;
    b = (((b << 23) | (b >>> 9)) + c) | 0;
    a += ((b ^ c ^ d) + k[1] - 1530992060) | 0;
    a = (((a << 4) | (a >>> 28)) + b) | 0;
    d += ((a ^ b ^ c) + k[4] + 1272893353) | 0;
    d = (((d << 11) | (d >>> 21)) + a) | 0;
    c += ((d ^ a ^ b) + k[7] - 155497632) | 0;
    c = (((c << 16) | (c >>> 16)) + d) | 0;
    b += ((c ^ d ^ a) + k[10] - 1094730640) | 0;
    b = (((b << 23) | (b >>> 9)) + c) | 0;
    a += ((b ^ c ^ d) + k[13] + 681279174) | 0;
    a = (((a << 4) | (a >>> 28)) + b) | 0;
    d += ((a ^ b ^ c) + k[0] - 358537222) | 0;
    d = (((d << 11) | (d >>> 21)) + a) | 0;
    c += ((d ^ a ^ b) + k[3] - 722521979) | 0;
    c = (((c << 16) | (c >>> 16)) + d) | 0;
    b += ((c ^ d ^ a) + k[6] + 76029189) | 0;
    b = (((b << 23) | (b >>> 9)) + c) | 0;
    a += ((b ^ c ^ d) + k[9] - 640364487) | 0;
    a = (((a << 4) | (a >>> 28)) + b) | 0;
    d += ((a ^ b ^ c) + k[12] - 421815835) | 0;
    d = (((d << 11) | (d >>> 21)) + a) | 0;
    c += ((d ^ a ^ b) + k[15] + 530742520) | 0;
    c = (((c << 16) | (c >>> 16)) + d) | 0;
    b += ((c ^ d ^ a) + k[2] - 995338651) | 0;
    b = (((b << 23) | (b >>> 9)) + c) | 0;
    a += ((c ^ (b | ~d)) + k[0] - 198630844) | 0;
    a = (((a << 6) | (a >>> 26)) + b) | 0;
    d += ((b ^ (a | ~c)) + k[7] + 1126891415) | 0;
    d = (((d << 10) | (d >>> 22)) + a) | 0;
    c += ((a ^ (d | ~b)) + k[14] - 1416354905) | 0;
    c = (((c << 15) | (c >>> 17)) + d) | 0;
    b += ((d ^ (c | ~a)) + k[5] - 57434055) | 0;
    b = (((b << 21) | (b >>> 11)) + c) | 0;
    a += ((c ^ (b | ~d)) + k[12] + 1700485571) | 0;
    a = (((a << 6) | (a >>> 26)) + b) | 0;
    d += ((b ^ (a | ~c)) + k[3] - 1894986606) | 0;
    d = (((d << 10) | (d >>> 22)) + a) | 0;
    c += ((a ^ (d | ~b)) + k[10] - 1051523) | 0;
    c = (((c << 15) | (c >>> 17)) + d) | 0;
    b += ((d ^ (c | ~a)) + k[1] - 2054922799) | 0;
    b = (((b << 21) | (b >>> 11)) + c) | 0;
    a += ((c ^ (b | ~d)) + k[8] + 1873313359) | 0;
    a = (((a << 6) | (a >>> 26)) + b) | 0;
    d += ((b ^ (a | ~c)) + k[15] - 30611744) | 0;
    d = (((d << 10) | (d >>> 22)) + a) | 0;
    c += ((a ^ (d | ~b)) + k[6] - 1560198380) | 0;
    c = (((c << 15) | (c >>> 17)) + d) | 0;
    b += ((d ^ (c | ~a)) + k[13] + 1309151649) | 0;
    b = (((b << 21) | (b >>> 11)) + c) | 0;
    a += ((c ^ (b | ~d)) + k[4] - 145523070) | 0;
    a = (((a << 6) | (a >>> 26)) + b) | 0;
    d += ((b ^ (a | ~c)) + k[11] - 1120210379) | 0;
    d = (((d << 10) | (d >>> 22)) + a) | 0;
    c += ((a ^ (d | ~b)) + k[2] + 718787259) | 0;
    c = (((c << 15) | (c >>> 17)) + d) | 0;
    b += ((d ^ (c | ~a)) + k[9] - 343485551) | 0;
    b = (((b << 21) | (b >>> 11)) + c) | 0;
    x[0] = (a + x[0]) | 0;
    x[1] = (b + x[1]) | 0;
    x[2] = (c + x[2]) | 0;
    x[3] = (d + x[3]) | 0;
  }
  function md5blk(s) {
    var md5blks = [],
      i;
    for (i = 0; i < 64; i += 4) {
      md5blks[i >> 2] =
        s.charCodeAt(i) +
        (s.charCodeAt(i + 1) << 8) +
        (s.charCodeAt(i + 2) << 16) +
        (s.charCodeAt(i + 3) << 24);
    }
    return md5blks;
  }
  function md5blk_array(a) {
    var md5blks = [],
      i;
    for (i = 0; i < 64; i += 4) {
      md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
    }
    return md5blks;
  }
  function md51(s) {
    var n = s.length,
      state = [1732584193, -271733879, -1732584194, 271733878],
      i,
      length,
      tail,
      tmp,
      lo,
      hi;
    for (i = 64; i <= n; i += 64) {
      md5cycle(state, md5blk(s.substring(i - 64, i)));
    }
    s = s.substring(i - 64);
    length = s.length;
    tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < length; i += 1) {
      tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
    }
    tail[i >> 2] |= 128 << ((i % 4) << 3);
    if (i > 55) {
      md5cycle(state, tail);
      for (i = 0; i < 16; i += 1) {
        tail[i] = 0;
      }
    }
    tmp = n * 8;
    tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
    lo = parseInt(tmp[2], 16);
    hi = parseInt(tmp[1], 16) || 0;
    tail[14] = lo;
    tail[15] = hi;
    md5cycle(state, tail);
    return state;
  }
  function md51_array(a) {
    var n = a.length,
      state = [1732584193, -271733879, -1732584194, 271733878],
      i,
      length,
      tail,
      tmp,
      lo,
      hi;
    for (i = 64; i <= n; i += 64) {
      md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
    }
    a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
    length = a.length;
    tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < length; i += 1) {
      tail[i >> 2] |= a[i] << ((i % 4) << 3);
    }
    tail[i >> 2] |= 128 << ((i % 4) << 3);
    if (i > 55) {
      md5cycle(state, tail);
      for (i = 0; i < 16; i += 1) {
        tail[i] = 0;
      }
    }
    tmp = n * 8;
    tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
    lo = parseInt(tmp[2], 16);
    hi = parseInt(tmp[1], 16) || 0;
    tail[14] = lo;
    tail[15] = hi;
    md5cycle(state, tail);
    return state;
  }
  function rhex(n) {
    var s = '',
      j;
    for (j = 0; j < 4; j += 1) {
      s += hex_chr[(n >> (j * 8 + 4)) & 15] + hex_chr[(n >> (j * 8)) & 15];
    }
    return s;
  }
  function hex(x) {
    var i;
    for (i = 0; i < x.length; i += 1) {
      x[i] = rhex(x[i]);
    }
    return x.join('');
  }
  if (hex(md51('hello')) !== '5d41402abc4b2a76b9719d911017c592') {
    add32 = function(x, y) {
      var lsw = (x & 65535) + (y & 65535),
        msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return (msw << 16) | (lsw & 65535);
    };
  }
  if (typeof ArrayBuffer !== 'undefined' && !ArrayBuffer.prototype.slice) {
    (function() {
      function clamp(val, length) {
        val = val | 0 || 0;
        if (val < 0) {
          return Math.max(val + length, 0);
        }
        return Math.min(val, length);
      }
      ArrayBuffer.prototype.slice = function(from, to) {
        var length = this.byteLength,
          begin = clamp(from, length),
          end = length,
          num,
          target,
          targetArray,
          sourceArray;
        if (to !== undefined) {
          end = clamp(to, length);
        }
        if (begin > end) {
          return new ArrayBuffer(0);
        }
        num = end - begin;
        target = new ArrayBuffer(num);
        targetArray = new Uint8Array(target);
        sourceArray = new Uint8Array(this, begin, num);
        targetArray.set(sourceArray);
        return target;
      };
    })();
  }
  function toUtf8(str) {
    if (/[\u0080-\uFFFF]/.test(str)) {
      str = unescape(encodeURIComponent(str));
    }
    return str;
  }
  function utf8Str2ArrayBuffer(str, returnUInt8Array) {
    var length = str.length,
      buff = new ArrayBuffer(length),
      arr = new Uint8Array(buff),
      i;
    for (i = 0; i < length; i += 1) {
      arr[i] = str.charCodeAt(i);
    }
    return returnUInt8Array ? arr : buff;
  }
  function arrayBuffer2Utf8Str(buff) {
    return String.fromCharCode.apply(null, new Uint8Array(buff));
  }
  function concatenateArrayBuffers(first, second, returnUInt8Array) {
    var result = new Uint8Array(first.byteLength + second.byteLength);
    result.set(new Uint8Array(first));
    result.set(new Uint8Array(second), first.byteLength);
    return returnUInt8Array ? result : result.buffer;
  }
  function hexToBinaryString(hex) {
    var bytes = [],
      length = hex.length,
      x;
    for (x = 0; x < length - 1; x += 2) {
      bytes.push(parseInt(hex.substr(x, 2), 16));
    }
    return String.fromCharCode.apply(String, bytes);
  }
  function SparkMD5() {
    this.reset();
  }
  SparkMD5.prototype.append = function(str) {
    this.appendBinary(toUtf8(str));
    return this;
  };
  SparkMD5.prototype.appendBinary = function(contents) {
    this.rT5Y += contents;
    this.bp9g += contents.length;
    var length = this.rT5Y.length,
      i;
    for (i = 64; i <= length; i += 64) {
      md5cycle(this.dP0x, md5blk(this.rT5Y.substring(i - 64, i)));
    }
    this.rT5Y = this.rT5Y.substring(i - 64);
    return this;
  };
  SparkMD5.prototype.end = function(raw) {
    var buff = this.rT5Y,
      length = buff.length,
      i,
      tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ret;
    for (i = 0; i < length; i += 1) {
      tail[i >> 2] |= buff.charCodeAt(i) << ((i % 4) << 3);
    }
    this.oH4L(tail, length);
    ret = hex(this.dP0x);
    if (raw) {
      ret = hexToBinaryString(ret);
    }
    this.reset();
    return ret;
  };
  SparkMD5.prototype.reset = function() {
    this.rT5Y = '';
    this.bp9g = 0;
    this.dP0x = [1732584193, -271733879, -1732584194, 271733878];
    return this;
  };
  SparkMD5.prototype.getState = function() {
    return {
      buff: this.rT5Y,
      length: this.bp9g,
      hash: this.dP0x,
    };
  };
  SparkMD5.prototype.setState = function(state) {
    this.rT5Y = state.buff;
    this.bp9g = state.length;
    this.dP0x = state.hash;
    return this;
  };
  SparkMD5.prototype.destroy = function() {
    delete this.dP0x;
    delete this.rT5Y;
    delete this.bp9g;
  };
  SparkMD5.prototype.oH4L = function(tail, length) {
    var i = length,
      tmp,
      lo,
      hi;
    tail[i >> 2] |= 128 << ((i % 4) << 3);
    if (i > 55) {
      md5cycle(this.dP0x, tail);
      for (i = 0; i < 16; i += 1) {
        tail[i] = 0;
      }
    }
    tmp = this.bp9g * 8;
    tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
    lo = parseInt(tmp[2], 16);
    hi = parseInt(tmp[1], 16) || 0;
    tail[14] = lo;
    tail[15] = hi;
    md5cycle(this.dP0x, tail);
  };
  SparkMD5.hash = function(str, raw) {
    return SparkMD5.hashBinary(toUtf8(str), raw);
  };
  SparkMD5.hashBinary = function(content, raw) {
    var hash = md51(content),
      ret = hex(hash);
    return raw ? hexToBinaryString(ret) : ret;
  };
  SparkMD5.ArrayBuffer = function() {
    this.reset();
  };
  SparkMD5.ArrayBuffer.prototype.append = function(arr) {
    var buff = concatenateArrayBuffers(this.rT5Y.buffer, arr, true),
      length = buff.length,
      i;
    this.bp9g += arr.byteLength;
    for (i = 64; i <= length; i += 64) {
      md5cycle(this.dP0x, md5blk_array(buff.subarray(i - 64, i)));
    }
    this.rT5Y =
      i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
    return this;
  };
  SparkMD5.ArrayBuffer.prototype.end = function(raw) {
    var buff = this.rT5Y,
      length = buff.length,
      tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      i,
      ret;
    for (i = 0; i < length; i += 1) {
      tail[i >> 2] |= buff[i] << ((i % 4) << 3);
    }
    this.oH4L(tail, length);
    ret = hex(this.dP0x);
    if (raw) {
      ret = hexToBinaryString(ret);
    }
    this.reset();
    return ret;
  };
  SparkMD5.ArrayBuffer.prototype.reset = function() {
    this.rT5Y = new Uint8Array(0);
    this.bp9g = 0;
    this.dP0x = [1732584193, -271733879, -1732584194, 271733878];
    return this;
  };
  SparkMD5.ArrayBuffer.prototype.getState = function() {
    var state = SparkMD5.prototype.getState.call(this);
    state.buff = arrayBuffer2Utf8Str(state.buff);
    return state;
  };
  SparkMD5.ArrayBuffer.prototype.setState = function(state) {
    state.buff = utf8Str2ArrayBuffer(state.buff, true);
    return SparkMD5.prototype.setState.call(this, state);
  };
  SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
  SparkMD5.ArrayBuffer.prototype.oH4L = SparkMD5.prototype.oH4L;
  SparkMD5.ArrayBuffer.hash = function(arr, raw) {
    var hash = md51_array(new Uint8Array(arr)),
      ret = hex(hash);
    return raw ? hexToBinaryString(ret) : ret;
  };
  return SparkMD5;
});
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    br9i = NEJ.F,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    v9m = c9h('nej.j'),
    ek0x = c9h('nej.g'),
    k9b = c9h('nej.u'),
    fI1x = c9h('nej.n'),
    I9z = c9h('nej.ut'),
    l9c = c9h('nm.x'),
    q9h = c9h('nm.d'),
    jA2x = c9h('nm.x.nos'),
    w9n = c9h('nm.w');
  var cdS0x = 1024 * 256,
    cdR0x = 1024 * 1024 * 2,
    qG4K = {
      TOKEN_ERROR: -100,
      DNS_ERROR: -101,
    },
    bLn5s =
      typeof File !== 'undefined'
        ? File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice
        : br9i,
    qI4M = {
      MD5_DONE: 0.2,
      TOKEN_GET: 0.22,
      DNS_GET: 0.24,
      UPLOADED: 1,
    },
    jE2x = {
      AUDIO: 'audio',
      IMAGE: 'image',
      TXT: 'txt',
      RAR: 'rar',
      OTHER: 'other',
      VIDEO: 'video',
    };
  var ot4x = {};
  var uK6E = q9h.hP2x.A9r();
  jA2x.cGz7s = function() {
    return jE2x;
  };
  var cdJ0x = function() {
    return k9b.oj4n(6) + +new Date();
  };
  var Js0x = function(iL2x, e9f) {
    if (!ot4x[e9f.taskId]) {
      return;
    }
    (e9f.onuploading || br9i).call(this, iL2x);
  };
  var bmw9n = function(R9I) {
    var cdI0x = R9I.md5,
      cU0x = R9I.file,
      cdG0x = cdI0x + cU0x.size;
    return 'nos_file_hash_' + cdG0x;
  };
  var cdC0x = function(R9I) {
    var J9A = bmw9n(R9I),
      j9a = v9m.bSt8l(J9A, '{}');
    try {
      j9a = JSON.parse(j9a);
    } catch (e) {
      j9a = {};
    }
    return j9a;
  };
  var cdA0x = function(R9I, e9f) {
    if (!R9I.md5) {
      return;
    }
    var J9A = bmw9n(R9I),
      j9a = v9m.bSt8l(J9A, '{}');
    try {
      j9a = JSON.parse(j9a);
    } catch (e) {
      j9a = {};
    }
    NEJ.X(j9a, e9f);
    v9m.vS6M(J9A, JSON.stringify(j9a));
  };
  var cdw0x = function(R9I) {
    var J9A = bmw9n(R9I);
    v9m.Mj1x(J9A);
  };
  var cds0x = function(R9I, eP1x) {
    var Y9P = R9I.urls[Math.min(R9I.urlIndex, R9I.urls.length - 1)],
      cU0x = R9I.file,
      lp3x = R9I.bucket,
      mT3x = R9I.objectKey,
      eM0x = R9I.token,
      bJ0x = R9I.context,
      oS4W = {},
      TJ4N = bLn5s.call(cU0x, R9I.beg, R9I.end),
      bv9m = {
        offset: R9I.beg,
        complete: R9I.lastChunk || false,
        version: '1.0',
      };
    if (bJ0x) {
      bv9m.context = bJ0x;
    }
    oS4W['x-nos-token'] = eM0x;
    oS4W[ek0x.Ak7d] = cU0x.type;
    R9I.reqId = v9m.bn9e(Y9P + '/' + lp3x + '/' + mT3x, {
      type: 'json',
      method: 'POST',
      headers: oS4W,
      query: bv9m,
      data: TJ4N,
      onload: eP1x.onload,
      onerror: eP1x.onerror,
    });
  };
  var cdr0x = function(o9f, R9I, e9f) {
    o9f = {
      code: 200,
      fileName: e9f.file.name,
      size: e9f.file.size,
      type: e9f.file.type,
      bucket: R9I.bucket,
      docId: R9I.docId,
      objectKey: R9I.objectKey,
      url: '//nos.netease.com/' + R9I.bucket + '/' + R9I.objectKey,
    };
    cdw0x(R9I);
    if (!ot4x[e9f.taskId]) {
      return;
    }
    delete ot4x[e9f.taskId];
    uK6E.eU1x('sysaction', {
      type: 'nosuploadsuccess',
      location: location.href,
      result: JSON.stringify(o9f),
    });
    (e9f.onsuccess || br9i).call(this, o9f);
  };
  var cdq0x = function(o9f, e9f) {
    (e9f.onerror || br9i).call(this, o9f);
  };
  var cdp0x = function(o9f, R9I, e9f) {
    R9I.context = o9f.context;
    R9I.beg = o9f.offset;
    var iL2x = R9I.beg / R9I.file.size;
    cdA0x(R9I, {
      bucket: R9I.bucket,
      objectKey: R9I.objectKey,
      token: R9I.token,
      context: R9I.context,
      beg: R9I.beg,
      updateTime: +new Date(),
    });
    iL2x = qI4M.DNS_GET + (qI4M.UPLOADED - qI4M.DNS_GET) * iL2x;
    Js0x(iL2x, e9f);
    if (R9I.lastChunk) {
      cdr0x(o9f, R9I, e9f);
    } else {
      bcc7V(R9I, e9f);
    }
  };
  var cdm0x = function(o9f, R9I, e9f) {
    uK6E.eU1x('sysaction', {
      type: 'noschunkuploaderror',
      location: location.href,
      code: o9f.data,
      body: o9f.extData,
      ext: JSON.stringify(R9I),
      timging: +new Date() - R9I.chuckUploadStartTime,
    });
    if (R9I.urlIndex < Math.max(R9I.urls.length - 1, 5)) {
      R9I.urlIndex++;
      bcc7V(R9I, e9f);
    } else {
      cdq0x(o9f, e9f);
    }
  };
  var bcc7V = function(R9I, e9f) {
    if (!R9I || R9I.step == -1) {
      return;
    }
    R9I.end = R9I.beg + cdS0x;
    if (R9I.end >= R9I.file.size) {
      R9I.end = R9I.file.size;
      R9I.lastChunk = true;
    }
    R9I.chuckUploadStartTime = +new Date();
    cds0x(R9I, {
      onload: cdp0x.et0x(this, R9I, e9f),
      onerror: cdm0x.et0x(this, R9I, e9f),
    });
  };
  var cdk0x = function(o9f, R9I, e9f) {
    R9I.beg = o9f.offset;
    var iL2x = R9I.beg / R9I.file.size;
    iL2x = qI4M.DNS_GET + (qI4M.UPLOADED - qI4M.DNS_GET) * iL2x;
    Js0x(iL2x, e9f);
    bcc7V(R9I, e9f);
  };
  var cdj0x = function(o9f, R9I, e9f) {
    R9I.beg = 0;
    delete R9I.context;
    bnn9e(R9I, e9f);
  };
  var bLe5j = function(Tv4z, R9I, e9f) {
    R9I.lastChunk = false;
    R9I.urls = Tv4z;
    R9I.urlIndex = 0;
    Js0x(qI4M.DNS_GET, e9f);
    if (R9I.fromExist) {
      delete R9I.fromExist;
      var Y9P = R9I.urls[Math.min(R9I.urlIndex, R9I.urls.length - 1)],
        lp3x = R9I.bucket,
        mT3x = R9I.objectKey,
        eM0x = R9I.token,
        bJ0x = R9I.context,
        oS4W = {},
        bv9m = {
          context: bJ0x,
          version: '1.0',
        };
      oS4W['x-nos-token'] = eM0x;
      R9I.reqId = v9m.bn9e(Y9P + '/' + lp3x + '/' + mT3x + '?uploadContext', {
        type: 'json',
        method: 'GET',
        headers: oS4W,
        query: bv9m,
        onload: cdk0x.et0x(this, R9I, e9f),
        onerror: cdj0x.et0x(this, R9I, e9f),
      });
    } else {
      R9I.beg = 0;
      bcc7V(R9I, e9f);
    }
  };
  var cdf0x = function(o9f, R9I, e9f) {
    o9f.code = qG4K.DNS_ERROR;
    (e9f.onerror || br9i).call(this, o9f);
  };
  var bLc5h = function(j9a, e9f) {
    var o9f = j9a.result || {},
      lp3x = o9f.bucket,
      mT3x = o9f.objectKey,
      eM0x = o9f.token,
      R9I = ot4x[e9f.taskId];
    if (!lp3x || !mT3x || !eM0x || !R9I) {
      o9f.code = qG4K.TOKEN_ERROR;
      (e9f.onerror || br9i).call(this, o9f);
      return;
    }
    R9I.bucket = lp3x;
    R9I.objectKey = mT3x;
    R9I.docId = o9f.docId;
    R9I.token = eM0x;
    Js0x(qI4M.TOKEN_GET, e9f);
    if (location.protocol == 'https:') {
      bLe5j(['//nosup-hz1.127.net'], R9I, e9f);
    } else {
      R9I.reqId = jA2x.ccY0x({
        bucket: lp3x,
        onload: bLe5j.et0x(this, R9I, e9f),
        onerror: cdf0x.et0x(this, R9I, e9f),
      });
    }
    R9I.step = 1;
  };
  var ccX0x = function(o9f, e9f) {
    o9f.code = qG4K.TOKEN_ERROR;
    (e9f.onerror || br9i).call(this, o9f);
  };
  var bnn9e = function(R9I, e9f) {
    var cU0x = e9f.file,
      fu1x = cU0x.name || '',
      ey0x = fu1x.split('.').pop();
    jA2x.bch7a(
      NEJ.X(
        {
          filename: fu1x,
          ext: ey0x,
          onload: bLc5h.et0x(this, e9f),
          onerror: ccX0x.et0x(this, e9f),
        },
        e9f,
        function(p9g) {
          return k9b.gJ2x(p9g) || k9b.lO3x(p9g);
        }
      )
    );
  };
  var ccW0x = function(R9I, e9f) {
    if (!R9I || R9I.step == -1) {
      return;
    }
    R9I.md5 = R9I.spark.end();
    var Jn0x = cdC0x(R9I) || {},
      lp3x = Jn0x.bucket,
      mT3x = Jn0x.objectKey,
      eM0x = Jn0x.token;
    if (!lp3x || !mT3x || !eM0x) {
      bnn9e(R9I, e9f);
    } else {
      R9I.context = Jn0x.context;
      R9I.beg = Jn0x.beg;
      R9I.fromExist = true;
      bLc5h(
        {
          result: Jn0x,
        },
        e9f
      );
    }
  };
  var ccV0x = function(Dt8l, R9I, e9f) {
    if (!R9I || R9I.step == -1) {
      return;
    }
    R9I.beg = R9I.end;
    var iL2x = R9I.beg / R9I.file.size;
    iL2x = 0 + qI4M.MD5_DONE * iL2x;
    Js0x(iL2x, e9f);
    R9I.spark.append(Dt8l.result);
    if (R9I.lastChunk) {
      ccW0x(R9I, e9f);
    } else {
      bKX5c(R9I, e9f);
    }
  };
  var ccQ0x = function(o9f, R9I, e9f) {
    R9I.md5 = '';
    bnn9e(R9I, e9f);
  };
  var bKX5c = function(R9I, e9f) {
    if (!R9I || R9I.step == -1) {
      return;
    }
    R9I.end = R9I.beg + cdR0x;
    if (R9I.end >= R9I.file.size) {
      R9I.end = R9I.file.size;
      R9I.lastChunk = true;
    }
    var Dt8l = new FileReader();
    Dt8l.onload = ccV0x.g9d(this, Dt8l, R9I, e9f);
    Dt8l.onerror = ccQ0x.g9d(this, Dt8l, R9I, e9f);
    Dt8l.readAsArrayBuffer(bLn5s.call(R9I.file, R9I.beg, R9I.end));
  };
  jA2x.ha2x = function(e9f) {
    var cU0x = e9f.file,
      fu1x = cU0x.name || '',
      ey0x = fu1x.split('.').pop(),
      Du8m = cdJ0x();
    e9f.taskId = Du8m;
    ot4x[Du8m] = {
      step: 0,
    };
    Js0x(0, e9f);
    var R9I = ot4x[Du8m];
    R9I.id = Du8m;
    R9I.file = cU0x;
    R9I.beg = 0;
    R9I.lastChunk = false;
    R9I.spark = new SparkMD5.ArrayBuffer();
    var ccP0x = e9f.onerror || br9i;
    e9f.onerror = function() {
      if (!ot4x[Du8m]) {
        return;
      }
      delete ot4x[Du8m];
      ccP0x.apply(this, arguments);
    };
    uK6E.eU1x('sysaction', {
      type: 'nosuploadstart',
      location: location.href,
    });
    bKX5c(R9I, e9f);
    return Du8m;
  };
  jA2x.ku3x = function(C9t) {
    var R9I = ot4x[C9t];
    if (R9I) {
      if (R9I.step == 0) {
        delete ot4x[C9t];
      } else {
        R9I.step = -1;
        if (R9I.reqId) {
          v9m.ku3x(R9I.reqId);
        }
        delete ot4x[C9t];
      }
    }
  };
  jA2x.bch7a = (function() {
    var yO7H = function(o9f, e9f) {
      (e9f.onload || br9i).call(this, o9f);
    };
    var AR8J = function(o9f, e9f) {
      (e9f.onerror || br9i).call(this, o9f);
    };
    var bKW5b = JSON.stringify({
      code: 200,
      size: '$(ObjectSize)',
    });
    return function(e9f) {
      var bcj7c = e9f.returnBody || bKW5b;
      if (k9b.lO3x(bcj7c)) {
        try {
          JSON.stringify(bcj7c);
        } catch (e) {
          bcj7c = bKW5b;
        }
      }
      return v9m.bn9e('/api/nos/token/alloc', {
        method: 'POST',
        type: 'json',
        query: {
          filename: e9f.filename || '',
          ext: e9f.ext || '',
          type: e9f.type || jE2x.OTHER,
          bucket: e9f.bucket || '',
          local: e9f.local || false,
          nos_product: e9f.nosProduct || 0,
          return_body: bcj7c,
        },
        onload: yO7H.et0x(this, e9f),
        onerror: AR8J.et0x(this, e9f),
      });
    };
  })();
  jA2x.ccY0x = (function() {
    var ccM0x = '//wanproxy.127.net/lbs';
    var yO7H = function(o9f, e9f) {
      if (o9f.lbs) {
      }
      var Tv4z = o9f.upload;
      if (!Tv4z || !Tv4z.length) {
        AR8J(o9f, e9f);
      }
      (e9f.onload || br9i).call(this, Tv4z);
    };
    var AR8J = function(o9f, e9f) {
      (e9f.onerror || br9i).call(this, o9f);
    };
    return function(e9f) {
      var lp3x = e9f.bucket;
      return v9m.bn9e(ccM0x, {
        method: 'GET',
        type: 'json',
        query: {
          version: '1.0',
          bucketname: lp3x,
        },
        onload: yO7H.et0x(this, e9f),
        onerror: AR8J.et0x(this, e9f),
      });
    };
  })();
  jA2x.bck7d = function() {
    return (
      typeof File !== 'undefined' &&
      typeof Blob !== 'undefined' &&
      typeof FileList !== 'undefined' &&
      (!!Blob.prototype.webkitSlice ||
        !!Blob.prototype.mozSlice ||
        !!Blob.prototype.slice ||
        false)
    );
  };
})();
(function() {
  var c9h = NEJ.P,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    v9m = c9h('nej.j'),
    ca0x = c9h('nej.ut'),
    bC0x = c9h('nej.ui'),
    q9h = c9h('nm.d'),
    l9c = c9h('nm.x'),
    jA2x = c9h('nm.x.nos'),
    E9v = c9h('nm.m'),
    m9d = c9h('nm.l'),
    w9n = c9h('nm.w'),
    b9i,
    K9B;
  var gh1x = a8i.iB2x(
    '<form action="" method="post" enctype="multipart/form-data"><input name="Object" type="hidden" value=""><input name="x-nos-token" type="hidden" value=""><input name="x-nos-entity-type" type="hidden" value="json" /><input name="Content-Type" type="hidden" value="" /><input class="j-file" type="file" name="file" /></form>'
  );
  w9n.bKU5Z = NEJ.C();
  b9i = w9n.bKU5Z.N9E(bC0x.eg0x);
  b9i.cf0x = function() {
    this.ce0x = gh1x;
  };
  b9i.bW0x = function() {
    this.ch0x();
    this.bF0x = this.n9e;
    this.hE2x = a8i.H9y(this.n9e, 'j-file')[0];
    h9c.s9j(this.hE2x, 'change', this.rJ5O.g9d(this));
  };
  b9i.bk9b = function(e9f) {
    e9f = e9f || {};
    this.bm9d(e9f);
    this.hE2x.accept = e9f.accept || '*';
    this.xf7Y = e9f;
  };
  b9i.bcn7g = function() {
    return a8i.lw3x(this.hE2x);
  };
  b9i.rJ5O = function(d9g) {
    if (this.hE2x.value == '') return;
    var kK3x = this.hE2x.value.split('\\'),
      fu1x = kK3x.length > 0 ? kK3x[kK3x.length - 1] : kK3x[0],
      oQ4U = (this.hE2x.files || [{}])[0];
    var cm0x = {
      files: this.hE2x.files,
      filename: fu1x,
      size: oQ4U.size,
      cancelUpload: false,
    };
    this.z9q('onchange', cm0x);
    if (cm0x.cancelUpload) {
      this.hE2x.value = '';
      return;
    }
    if (cm0x.stopped) {
      return;
    }
    this.SN4R();
  };
  b9i.SN4R = function() {
    if (this.hE2x.value == '') return;
    var kK3x = this.hE2x.value.split('\\'),
      fu1x = kK3x.length > 0 ? kK3x[kK3x.length - 1] : kK3x[0],
      ey0x = (fu1x.split('.') || []).pop(),
      oQ4U = (this.hE2x.files || [{}])[0],
      DK8C = (oQ4U.type || '').split('/').shift();
    if (oQ4U.size > 100 * 1024 * 1024) {
      return this.mY3x('onerror', {
        code: -200,
      });
    }
    this.z9q('onuploading', 0);
    this.bKT5Y = jA2x.bch7a(
      NEJ.X(
        {
          onload: this.Sx4B.et0x(this, fu1x),
          onerror: this.mY3x.g9d(this),
        },
        this.xf7Y,
        function(p9g) {
          return k9b.gJ2x(p9g) || k9b.lO3x(p9g);
        }
      )
    );
  };
  b9i.Sx4B = function(bR0x, fu1x) {
    var o9f = bR0x.result || {},
      lp3x = o9f.bucket,
      mT3x = o9f.objectKey,
      eM0x = o9f.token;
    if (!lp3x || !mT3x || !eM0x) {
      bR0x.code = -100;
      this.mY3x.call(this, bR0x);
      return;
    }
    var oQ4U = (this.hE2x.files || [{}])[0];
    var hO2x = a8i.dj0x(this.bF0x);
    hO2x[0].value = mT3x;
    hO2x[1].value = eM0x;
    if (oQ4U.type && oQ4U.type.indexOf('audio') == 0) {
      hO2x[3].value = 'audio/mpeg';
    } else {
      hO2x[3].value = oQ4U.type || '';
    }
    this.bF0x.action = '//nos.netease.com/' + lp3x;
    this.DO9F = o9f;
    this.ri5n = fu1x;
    this.z9q('onuploading', 0.2);
    this.ha2x();
  };
  b9i.ha2x = function() {
    this.bKT5Y = v9m.ha2x(this.bF0x, {
      type: 'json',
      onload: this.vv6p.g9d(this),
      onerror: this.mY3x.g9d(this),
      onuploading: this.bcq7j.g9d(this),
    });
  };
  b9i.ku3x = function() {
    v9m.ku3x(this.bKT5Y);
    this.bF0x.reset();
  };
  b9i.vv6p = function(bR0x) {
    var eM0x = this.DO9F,
      fu1x = this.ri5n,
      oQ4U = (this.hE2x.files || [{}])[0],
      ke3x = {
        code: 200,
        fileName: fu1x,
        size: oQ4U.size,
        bucket: eM0x.bucket,
        docId: eM0x.docId,
        objectKey: eM0x.objectKey,
        url: '//nos.netease.com/' + eM0x.bucket + '/' + eM0x.objectKey,
      };
    if (!bR0x) {
      bR0x = ke3x;
    }
    if (!bR0x.code || bR0x.code == 200) {
      this.z9q('onsuccess', NEJ.X(ke3x, bR0x));
    } else {
      this.z9q('onerror', bR0x);
    }
    this.bF0x.reset();
  };
  b9i.mY3x = function(bR0x) {
    this.z9q('onerror', bR0x);
    this.bF0x.reset();
  };
  b9i.bcq7j = function(iL2x) {
    this.z9q('onuploading', 0.2 + iL2x.loaded / iL2x.total * 0.8);
  };
})();
(function() {
  var c9h = NEJ.P,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    v9m = c9h('nej.j'),
    ca0x = c9h('nej.ut'),
    bC0x = c9h('nej.ui'),
    q9h = c9h('nm.d'),
    l9c = c9h('nm.x'),
    jA2x = c9h('nm.x.nos'),
    E9v = c9h('nm.m'),
    m9d = c9h('nm.l'),
    w9n = c9h('nm.w'),
    b9i,
    K9B;
  w9n.Sv4z = NEJ.C();
  b9i = w9n.Sv4z.N9E(ca0x.cI0x);
  b9i.bk9b = function(e9f) {
    e9f = e9f || {};
    this.bm9d(e9f);
    this.bcv7o = w9n.bKU5Z.A9r(
      NEJ.X(
        {
          parent: e9f.parent,
          onchange: this.rJ5O.g9d(this),
          onuploading: this.z9q.g9d(this, 'onuploading'),
          onsuccess: this.z9q.g9d(this, 'onsuccess'),
          onerror: this.z9q.g9d(this, 'onerror'),
        },
        e9f,
        function(p9g) {
          return k9b.gJ2x(p9g) || k9b.lO3x(p9g);
        }
      )
    );
    if (e9f.multiple && jA2x.bck7d()) {
      a8i.gy1x(this.bcv7o.bcn7g(), 'multiple', true);
    }
    this.xf7Y = e9f;
  };
  b9i.rJ5O = function(e9f) {
    var fu1x = e9f.filename,
      ey0x = (fu1x.split('.') || []).pop();
    this.bKS5X = (e9f.files || [{}])[0];
    this.z9q('onchange', e9f);
    if (jA2x.bck7d() && !e9f.stopped && !e9f.cancelUpload) {
      this.SN4R(true);
      e9f.stopped = true;
    }
  };
  b9i.bcn7g = function() {
    return this.bcv7o.bcn7g();
  };
  b9i.ccI0x = function() {
    return this.bKS5X;
  };
  b9i.SN4R = function(fc1x, cU0x) {
    cU0x = cU0x || this.bKS5X;
    if (jA2x.bck7d()) {
      this.bKR5W = jA2x.ha2x(
        NEJ.X(
          {
            file: cU0x,
            local: this.xf7Y.bucket && this.xf7Y.bucket.length,
            onuploading: this.z9q.g9d(this, 'onuploading'),
            onsuccess: this.z9q.g9d(this, 'onsuccess'),
            onerror: this.z9q.g9d(this, 'onerror'),
          },
          this.xf7Y,
          function(p9g) {
            return k9b.gJ2x(p9g) || k9b.lO3x(p9g);
          }
        )
      );
      return this.bKR5W;
    } else if (!fc1x) {
      this.bcv7o.SN4R();
    }
  };
  b9i.ku3x = function(C9t) {
    C9t = C9t || this.bKR5W;
    if (C9t) {
      jA2x.ku3x(C9t);
    }
    this.bcv7o.ku3x();
  };
})();
(function() {
  var c9h = NEJ.P,
    a8i = c9h('nej.e'),
    ek0x = c9h('nej.g'),
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    v9m = c9h('nej.j'),
    fI1x = c9h('nej.n'),
    I9z = c9h('nej.ut'),
    bc9T = c9h('nej.ui'),
    w9n = c9h('nm.w'),
    m9d = c9h('nm.l'),
    q9h = c9h('nm.d'),
    l9c = c9h('nm.x'),
    M9D = c9h('nm.x.f'),
    jA2x = c9h('nm.x.nos'),
    b9i,
    K9B,
    boZ0x = {
      0: '',
      '-1': '不能添加重复图片',
      '-10': '最多只能添加9张',
      '-3': '请选择不超过5M的图片',
    },
    bpa0x = 5 * 1024 * 1024,
    cGA7t = 80,
    bKP5U = /\.(bmp|jpg|jpeg|png|gif)$/i;
  w9n.bKO5T = NEJ.C();
  b9i = w9n.bKO5T.N9E(I9z.uV6P);
  b9i.bnX0x = function() {
    return {
      x: this.CZ8R.clientWidth - this.n9e.offsetWidth,
      y: this.CZ8R.clientHeight - this.n9e.offsetHeight,
    };
  };
  w9n.bpe0x = NEJ.C();
  b9i = w9n.bpe0x.N9E(bc9T.eg0x);
  b9i.cf0x = function() {
    this.ce0x = 'm-xwgt-share-upload';
  };
  b9i.bW0x = function() {
    this.ch0x();
    var i9b = a8i.H9y(this.n9e, 'j-flag');
    this.bcF7y = i9b.shift();
    this.Jf0x = i9b.shift();
    this.RD3x = i9b.shift();
    this.bKL5Q = {
      onchange: this.bKK5P.et0x(this, 0),
      onerror: this.eJ0x.g9d(this),
      onsuccess: this.uE6y.g9d(this),
      multiple: true,
      parent: this.Jf0x,
      accept: 'image/bmp,image/jpg,image/jpeg,image/png,image/gif',
    };
    this.bps0x = {
      onchange: this.bKK5P.et0x(this, 1),
      onerror: this.eJ0x.g9d(this),
      onsuccess: this.uE6y.g9d(this),
      multiple: true,
      accept: 'image/bmp,image/jpg,image/jpeg,image/png,image/gif',
    };
    this.ccv0x = w9n.Sv4z.A9r(this.bKL5Q);
  };
  b9i.bk9b = function(e9f) {
    this.bm9d(e9f);
    this.bps0x.parent = e9f.button;
    this.Jb0x && this.Jb0x.T9K();
    this.Jb0x = w9n.Sv4z.A9r(this.bps0x);
    this.n9e.style.display = 'none';
    if (!!this.fa1x) {
      for (var i = this.fa1x.length - 1; i >= 0; i--) {
        a8i.cJ0x(this.fa1x[i].element, false);
        if (this.fa1x[i].dragger) this.fa1x[i].dragger.T9K();
      }
    }
    this.fa1x = [];
    if (this.Ar8j) {
      clearTimeout(this.Ar8j);
    }
    this.bcG7z(0);
    this.Rr3x = 0;
    this.bX0x([
      [this.bKL5Q.parent, 'click', this.bKJ5O.g9d(this)],
      [this.bps0x.parent, 'click', this.bKJ5O.g9d(this)],
    ]);
  };
  b9i.bD0x = function() {
    h9c.he2x(this.tW5b, 'click');
    if (!!this.fa1x) {
      for (var i = this.fa1x.length - 1; i >= 0; i--) {
        a8i.cJ0x(this.fa1x[i].element, false);
        if (this.fa1x[i].dragger) this.fa1x[i].dragger.T9K();
      }
    }
    this.fa1x = [];
    if (this.Ar8j) {
      clearTimeout(this.Ar8j);
    }
    this.Ar8j = 0;
    this.Jb0x && this.Jb0x.T9K();
    delete this.Jb0x;
    this.bG0x();
  };
  b9i.bKJ5O = function(d9g) {
    if (!jA2x.bck7d() && this.fa1x.doing) {
      h9c.bh9Y(d9g);
    }
  };
  b9i.bKK5P = function(e9f, r9i) {
    var nc3x = e9f.files,
      iE2x;
    e9f.stopped = true;
    if (!nc3x) {
      if (e9f.filename) {
        nc3x = [
          {
            name: e9f.filename,
            isIE: true,
          },
        ];
      }
    }
    for (var i = 0, len = nc3x.length; i < len; i++) {
      if (!bKP5U.test(nc3x[i].name)) {
        this.bpK0x({
          path: nc3x[i].name,
          index: r9i,
          status: -4,
          fail: '这不是<br>图片',
        });
      } else if (nc3x[i].size > bpa0x) {
        this.bpL0x(-3);
        this.bpK0x({
          path: nc3x[i].name,
          index: r9i,
          status: -3,
          fail: '上传<br>失败',
        });
      } else {
        this.bpK0x({
          path: nc3x[i].name,
          file: nc3x[i],
          index: r9i,
          status: 0,
        });
      }
    }
  };
  b9i.bpK0x = function(tT5Y) {
    if (this.fa1x.length >= 9) {
      this.bpL0x(-10, 3000, this.bKI5N.g9d(this));
      return;
    }
    this.ccr0x(tT5Y);
    this.fa1x.push(tT5Y);
    if (!!this.fa1x.length) {
      this.n9e.style.display = '';
    }
    if (this.fa1x.length >= 9) {
      this.Jf0x.style.display = 'none';
    } else {
      this.Jf0x.style.display = '';
    }
    this.IW0x();
  };
  b9i.IW0x = function() {
    var bpS0x = -1,
      bKH5M = 0;
    for (var i = 0, l = this.fa1x.length; i < l; i++) {
      if (this.fa1x[i].status == 1) {
        return;
      }
      if (this.fa1x[i].status == 0 && bpS0x < 0) {
        bpS0x = i;
      }
      if (this.fa1x[i].status == 2 || this.fa1x[i].status < 0) {
        bKH5M++;
      }
    }
    var p9g = this.fa1x[bpS0x];
    if (p9g) {
      (p9g.index == 0 ? this.ccv0x : this.Jb0x).SN4R(false, p9g.file);
      p9g.status = 1;
      this.fa1x.doing = p9g;
      this.z9q('onstartupload', {});
    } else if (bKH5M == this.fa1x.length) {
      this.z9q('onfinishupload', {});
    }
  };
  b9i.bpX0x = function() {
    return this.fa1x.doing || {};
  };
  b9i.eJ0x = function(d9g) {
    var tT5Y = this.bpX0x();
    tT5Y.status = -4;
    tT5Y.fail = '上传<br>失败';
    this.bKG5L(tT5Y);
    this.fa1x.doing = null;
    this.IW0x();
  };
  b9i.uE6y = function(d9g) {
    var tT5Y = this.bpX0x(),
      dO0x = d9g.fileName.match(bKP5U);
    tT5Y.picUrl = d9g.url;
    v9m.bn9e('/upload/event/img/v1', {
      query: {
        imgid: d9g.docId,
        format: dO0x[1],
      },
      type: 'json',
      onload: this.bKF5K.g9d(this),
      onerror: this.bKF5K.g9d(this),
    });
  };
  b9i.bKF5K = function(d9g) {
    if (d9g && d9g.code == 200 && d9g.picInfo) {
      var tT5Y = this.bpX0x();
      tT5Y.status = 2;
      var by0x = NEJ.X({}, d9g.picInfo);
      by0x.originId = by0x.originIdStr;
      by0x.squareId = by0x.squareIdStr;
      by0x.rectangleId = by0x.rectangleIdStr;
      by0x.pcSquareId = by0x.pcSquareIdStr;
      by0x.pcRectangleId = by0x.pcRectangleIdStr;
      by0x.originJpgId = by0x.originJpgIdStr || by0x.originJpgId;
      tT5Y.picInfo = by0x;
      this.bKG5L(tT5Y);
      this.fa1x.doing = null;
      this.IW0x();
    } else {
      this.eJ0x(d9g);
    }
  };
  b9i.bpL0x = function(r9i, kV3x, eP1x) {
    if (this.Rr3x < r9i) {
      return;
    }
    if (this.Ar8j) {
      clearTimeout(this.Ar8j);
      this.Ar8j = 0;
    }
    if (kV3x) {
      this.RD3x.innerText = boZ0x[r9i * 1];
      this.Rr3x = r9i;
      this.Ar8j = setTimeout(this.bcG7z.g9d(this, r9i, eP1x), kV3x);
    } else {
      this.RD3x.innerText = boZ0x[r9i];
      this.Rr3x = r9i;
    }
    this.RD3x.style.display = '';
  };
  b9i.bcG7z = function(r9i, eP1x) {
    if (r9i && this.Rr3x !== r9i) {
      return;
    }
    this.Rr3x = 0;
    this.RD3x.innerText = boZ0x[0];
    this.RD3x.style.display = 'none';
    eP1x && eP1x();
  };
  b9i.ccr0x = function(cU0x) {
    var j9a = {};
    if (cU0x.fail) {
      j9a.fail = cU0x.fail;
    }
    var dQ0x = a8i.bZ0x('m-xwgt-share-upload-preview', j9a);
    cU0x.element = a8i.nI4M(dQ0x);
    h9c.s9j(
      a8i.H9y(cU0x.element, 'del')[0],
      'mousedown',
      this.ccn0x.g9d(this, cU0x),
      false
    );
    this.bcF7y.insertBefore(cU0x.element, this.bcF7y.lastElementChild);
    cU0x.dragger = w9n.bKO5T.A9r({
      view: this.bcF7y.parentNode,
      body: cU0x.element,
      overflow: false,
      direction: 0,
      isRelative: 1,
      ondragstart: this.VH4L.g9d(this, cU0x),
      onchange: this.ccm0x.g9d(this, cU0x),
      ondragend: this.bnw9n.g9d(this, cU0x),
    });
  };
  b9i.bKG5L = function(cU0x) {
    if (!cU0x || !cU0x.element) {
      return false;
    }
    var j9a = {};
    if (cU0x.fail) {
      j9a.fail = cU0x.fail;
    } else {
      j9a.url = cU0x.picUrl;
    }
    a8i.y9p(cU0x.element, 'z-fail');
    cU0x.element.firstChild.outerHTML = a8i.bZ0x('m-xwgt-share-upload-preview-img', j9a);
  };
  b9i.VH4L = function(p9g, kP3x) {
    a8i.y9p(p9g.element, 'z-sel');
  };
  b9i.ccm0x = function(p9g, kP3x) {
    var cGD7w,
      gq1x = this.fa1x.length - 1,
      of4j;
    for (var i = gq1x; i >= 0; i--) {
      a8i.x9o(this.fa1x[i].element, 'z-jump');
      if (this.fa1x[i] == p9g) {
        of4j = i;
      } else {
        a8i.eY1x(this.fa1x[i].element, {
          left: '',
          top: '',
        });
      }
    }
    var Rc3x = {
      x: 46 + 92 * (of4j % 5) + kP3x.left,
      y: 46 + 92 * ((of4j / 5) >> 0) + kP3x.top,
    };
    var bqg0x = (Rc3x.x / 92) >> 0,
      bqn0x = (Rc3x.y / 92) >> 0,
      yF7y = Math.max(0, Math.min(gq1x, bqn0x * 5 + bqg0x));
    if (yF7y == of4j) {
      return;
    }
    var cbY0x = yF7y < of4j;
    for (var i = Math.min(yF7y, of4j); i <= Math.max(yF7y, of4j); i++) {
      if (i !== of4j) {
        var bKC5H = i % 5;
        if (cbY0x) {
          if (bKC5H == 4) {
            a8i.eY1x(this.fa1x[i].element, {
              left: '-368px',
              top: '92px',
            });
          } else {
            a8i.eY1x(this.fa1x[i].element, {
              left: '92px',
              top: '',
            });
          }
        } else {
          if (bKC5H == 0) {
            a8i.eY1x(this.fa1x[i].element, {
              left: '368px',
              top: '-92px',
            });
          } else {
            a8i.eY1x(this.fa1x[i].element, {
              left: '-92px',
              top: '',
            });
          }
        }
      }
    }
  };
  b9i.bnw9n = function(p9g, kP3x) {
    var cGE7x,
      gq1x = this.fa1x.length - 1,
      of4j;
    for (var i = gq1x; i >= 0; i--) {
      a8i.eY1x(this.fa1x[i].element, {
        left: '',
        top: '',
      });
      if (this.fa1x[i] == p9g) {
        of4j = i;
      }
    }
    a8i.x9o(p9g.element, 'z-sel');
    var Rc3x = {
      x: 46 + 92 * (of4j % 5) + kP3x.left,
      y: 46 + 92 * ((of4j / 5) >> 0) + kP3x.top,
    };
    var bqg0x = (Rc3x.x / 92) >> 0,
      bqn0x = (Rc3x.y / 92) >> 0,
      yF7y = Math.max(0, Math.min(gq1x, bqn0x * 5 + bqg0x));
    if (yF7y == of4j) {
      return;
    }
    this.bcF7y.insertBefore(
      p9g.element,
      (this.fa1x[yF7y + (yF7y > of4j ? 1 : 0)] || {}).element || this.Jf0x
    );
    this.fa1x.splice(of4j, 1);
    this.fa1x.splice(yF7y, 0, p9g);
  };
  b9i.ccn0x = function(p9g, d9g) {
    a8i.cJ0x(p9g.element, false);
    if (p9g.dragger) p9g.dragger.T9K();
    delete p9g.dragger;
    var r9i = -1;
    for (var i = this.fa1x.length - 1; i >= 0; i--) {
      if (this.fa1x[i] == p9g) {
        r9i = i;
        break;
      }
    }
    this.fa1x.splice(r9i, r9i >= 0 ? 1 : 0);
    delete p9g;
    if (this.fa1x.length >= 9) {
      this.Jf0x.style.display = 'none';
    } else {
      this.Jf0x.style.display = '';
    }
    if (!this.fa1x.length) {
      this.n9e.style.display = 'none';
      this.bcG7z(0);
    } else {
      this.bKI5N();
    }
    if (this.fa1x.doing == p9g) {
      this.fa1x.doing = null;
    }
    this.IW0x();
  };
  b9i.bKI5N = function() {
    var bKB5G = false;
    for (var i = 0, len = this.fa1x.length; i < len; i++) {
      if (this.fa1x[i].status == -3) {
        bKB5G = true;
      }
    }
    if (bKB5G) {
      this.bpL0x(-3);
    } else {
      this.bcG7z(-3);
    }
  };
  b9i.QZ3x = function() {
    var dC0x = [];
    for (var i = this.fa1x.length - 1; i >= 0; i--) {
      if (this.fa1x[i].status == 2) {
        dC0x.unshift(this.fa1x[i].picInfo);
      }
    }
    return dC0x;
  };
  I9z.fL1x.A9r({
    element: w9n.bpe0x,
    event: ['onstartupload', 'onfinishupload'],
  });
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    fz1x = NEJ.R,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    bc9T = c9h('nej.ui'),
    O9F = c9h('nej.ut'),
    b9i,
    K9B;
  if (!!O9F.ni3x) return;
  O9F.ni3x = NEJ.C();
  b9i = O9F.ni3x.N9E(O9F.baH6B);
  K9B = O9F.ni3x.ct0x;
  b9i.bk9b = function(e9f) {
    this.cbU0x(e9f.more);
    this.EA9r = a8i.B9s(e9f.sbody);
    this.cbR0x = e9f.fixScrollPosition;
    this.bX0x([[this.EA9r, 'scroll', this.cbQ0x.g9d(this)]]);
    var dp0x = e9f.delta;
    if (dp0x == null) dp0x = 30;
    this.QR3x = Math.max(0, dp0x);
    var cx0x = parseInt(e9f.count) || 0;
    this.jJ2x = Math.max(0, cx0x);
    var gS2x = parseInt(e9f.number) || 0;
    if (gS2x > 1 && gS2x <= cx0x) {
      this.CD8v = gS2x;
    }
    this.bm9d(e9f);
  };
  b9i.bD0x = function() {
    this.bG0x();
    delete this.AJ8B;
    delete this.EA9r;
    delete this.tB5G;
    delete this.bcR7K;
  };
  b9i.AF8x = function(bi9Z, bp9g) {
    var bM0x = this.yL7E + (this.jJ2x - 1) * this.pn4r,
      fY1x = this.jJ2x * this.pn4r;
    return K9B.AF8x.call(this, bM0x, bi9Z, fY1x, bp9g);
  };
  b9i.cbU0x = function(bcS7L) {
    this.AJ8B = a8i.B9s(bcS7L);
    this.bX0x([[this.AJ8B, 'click', this.pj4n.g9d(this)]]);
  };
  b9i.brm0x = function(F9w) {
    F9w = F9w || {};
    if (this.tB5G || !F9w) return;
    if (!F9w.scrollHeight) F9w = a8i.oE4I();
    var bi9Z = a8i.hQ2x(this.in2x, this.cbR0x ? F9w : null),
      dp0x = bi9Z.y + this.in2x.offsetHeight - F9w.scrollTop - F9w.clientHeight,
      brn0x = F9w.scrollHeight <= F9w.clientHeight;
    if (dp0x <= this.QR3x || (brn0x && !this.tB5G)) {
      this.pj4n();
    }
  };
  b9i.cbQ0x = function(d9g) {
    if (this.tB5G) return;
    this.brm0x(h9c.W9N(d9g));
  };
  b9i.AZ8R = function(d9g) {
    K9B.AZ8R.apply(this, arguments);
    if (!d9g.stopped) {
      this.NP2x();
      var bi9Z = 0;
      if (d9g.index > 1) {
        bi9Z = this.yL7E + ((d9g.index - 1) * this.jJ2x - 1) * this.pn4r;
      }
      this.hN2x = bi9Z;
      this.pj4n();
    }
  };
  b9i.bLS5X = function(e9f) {
    if (!!this.CD8v) {
      var dp0x = e9f.offset > 0 ? this.pn4r : this.yL7E,
        fY1x = dp0x + this.pn4r * (this.CD8v - 1);
      this.hN2x = e9f.offset + fY1x;
      e9f.data.limit = fY1x;
      e9f.limit = fY1x;
      delete this.CD8v;
    }
    return e9f;
  };
  b9i.bim8e = function(e9f) {
    delete this.bcR7K;
    K9B.bim8e.apply(this, arguments);
    this.bKx5C();
  };
  b9i.bio8g = function(d9g) {
    if (d9g.key != this.jw2x.key) return;
    switch (d9g.action) {
      case 'refresh':
      case 'append':
        delete this.bcR7K;
        break;
    }
    K9B.bio8g.apply(this, arguments);
  };
  b9i.NB2x = function() {
    this.yc7V('onbeforelistload', '列表加载中...');
    a8i.ba9R(this.AJ8B, 'display', 'none');
  };
  b9i.biJ8B = function(i9b, bi9Z, fY1x) {
    var bp9g = i9b.length,
      brr0x = i9b.loaded ? bi9Z + fY1x >= bp9g : bi9Z + fY1x > bp9g;
    this.hN2x = Math.min(this.hN2x, bp9g);
    a8i.ba9R(this.AJ8B, 'display', brr0x ? 'none' : '');
    if (brr0x) this.tB5G = !0;
    if (this.jJ2x > 0) {
      var by0x = this.AF8x(bi9Z, i9b.length);
      if (this.bLR5W(by0x.index, by0x.total)) return !0;
      var dp0x = this.yL7E - this.pn4r,
        gS2x = this.jJ2x * this.pn4r;
      this.tB5G = (bi9Z + fY1x - dp0x) % gS2x == 0 || brr0x;
      a8i.ba9R(this.AJ8B, 'display', this.tB5G ? 'none' : '');
      this.biu8m(this.tB5G && by0x.total > 1 ? '' : 'none');
    }
  };
  b9i.biG8y = function() {
    this.hN2x = 0;
    this.tB5G = !0;
    this.yc7V('onemptylist', '没有列表数据！');
  };
  b9i.Nz2x = function(dQ0x, kP3x) {
    this.in2x.insertAdjacentHTML(kP3x || 'beforeEnd', dQ0x);
  };
  b9i.Ny2x = function(hn2x) {
    this.fK1x = this.fK1x || [];
    if (k9b.eI0x(hn2x)) {
      fz1x.push.apply(this.fK1x, hn2x);
    } else {
      this.fK1x.push(hn2x);
    }
  };
  b9i.baU6O = function(d9g) {
    a8i.mu3x(this.cv0x);
    this.Nk1x(d9g, 'onafteradd');
    var fc1x = d9g.flag;
    if (d9g.stopped || !fc1x) return;
    if (this.jJ2x > 0) {
      this.biy8q();
      return;
    }
    this.hN2x += 1;
    fc1x == -1 ? this.bjj8b(d9g.data) : this.bLQ5V(d9g.data);
  };
  b9i.baY6S = function(d9g) {
    this.Nk1x(d9g, 'onafterdelete');
    if (d9g.stopped) return;
    if (this.jJ2x > 0) {
      this.biy8q();
      return;
    }
    var C9t = d9g.data[this.fg1x.pkey];
    if (!!this.fK1x) {
      var p9g = a8i.bTB8t(C9t),
        r9i = k9b.di0x(this.fK1x, p9g);
      if (r9i >= 0) {
        this.fK1x.splice(r9i, 1);
        this.hN2x -= 1;
      }
      if (!!p9g) p9g.T9K();
    } else {
      var f9e = a8i.B9s(this.bLY5d(C9t));
      if (!!f9e) this.hN2x -= 1;
      a8i.cJ0x(f9e);
    }
    if (this.hN2x <= 0) this.pj4n();
  };
  b9i.bjc8U = function(bi9Z, fY1x) {
    if (bi9Z != this.hN2x) return;
    if (this.Wi5n()) {
      this.tB5G = !1;
      this.bKx5C();
    }
  };
  b9i.bjd8V = function(bi9Z, fY1x) {
    if (bi9Z != 0) return;
    var KB0x = this.S9J.hF2x(this.jw2x.key);
    for (var i = fY1x - 1; i >= 0; i--) {
      this.bjj8b(KB0x[i]);
    }
  };
  b9i.bKx5C = function() {
    var F9w = this.EA9r;
    if (!F9w || this.tB5G) return;
    this.brm0x(this.EA9r);
  };
  b9i.gD2x = function() {
    delete this.tB5G;
    K9B.gD2x.apply(this, arguments);
  };
  b9i.pj4n = function() {
    if (!!this.bcR7K) return;
    this.bcR7K = !0;
    var bi9Z = this.hN2x;
    this.hN2x += bi9Z == 0 ? this.yL7E : this.pn4r;
    this.bLU5Z(bi9Z);
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    a8i = c9h('nej.e'),
    k9b = c9h('nej.u'),
    h9c = c9h('nej.v'),
    cY0x = c9h('nej.x'),
    O9F = c9h('nej.ut'),
    b9i;
  if (!!O9F.EK9B) return;
  O9F.EK9B = NEJ.C();
  b9i = O9F.EK9B.N9E(O9F.cI0x);
  b9i.bk9b = function(e9f) {
    this.bm9d(e9f);
    this.jn2x = e9f.event || 'click';
    this.kM3x = e9f.selected || 'js-selected';
    this.op4t = e9f.disabled || 'js-disabled';
    this.bKw5B = !!e9f.inverse;
    this.cbL0x(e9f.list);
    this.QJ3x(e9f.index || 0);
  };
  b9i.bD0x = (function() {
    var cbK0x = function(f9e) {
      this.brI0x(f9e, !1);
    };
    return function() {
      this.bG0x();
      k9b.bd9U(this.bU0x, cbK0x, this);
      delete this.bU0x;
      delete this.jn2x;
      delete this.co0x;
      delete this.op4t;
      delete this.kM3x;
      delete this.bKw5B;
    };
  })();
  b9i.cbL0x = (function() {
    var bgT8L = function(p9g) {
      if (!p9g) return;
      this.bU0x.push(p9g);
      var r9i = this.bU0x.length - 1,
        dx0x = this.brJ0x[r9i];
      if (!dx0x) {
        dx0x = this.QJ3x.g9d(this, r9i);
        this.brJ0x[r9i] = dx0x;
      }
      this.bX0x([[p9g, this.jn2x, dx0x]]);
    };
    return function(i9b) {
      this.bU0x = [];
      if (!this.brJ0x) this.brJ0x = [];
      k9b.bd9U(i9b, bgT8L, this);
    };
  })();
  b9i.brI0x = function(F9w, cbJ0x) {
    !!cbJ0x && !this.bKw5B ? a8i.y9p(F9w, this.kM3x) : a8i.x9o(F9w, this.kM3x);
  };
  b9i.QJ3x = function(r9i, QA3x, j9a) {
    var F9w = this.bU0x[r9i];
    if (QA3x != !0 && (r9i == this.co0x || !F9w || a8i.bE0x(F9w, this.op4t))) {
      h9c.cr0x(arguments[1]);
      return this;
    }
    var d9g = {
      index: r9i,
      last: this.co0x,
      list: this.lJ3x(),
      data: j9a || a8i.t9k(F9w, 'value'),
    };
    this.co0x = r9i;
    F9w = this.bU0x[d9g.last];
    if (!!F9w) this.brI0x(F9w, !1);
    F9w = this.bU0x[this.co0x];
    this.brI0x(F9w, !0);
    this.z9q('onchange', d9g);
    if (!d9g.nostop) h9c.cr0x(arguments[1]);
    return this;
  };
  b9i.tI5N = function() {
    return this.co0x;
  };
  b9i.lJ3x = function() {
    return this.bU0x;
  };
  a8i.cbI0x = cY0x.cbI0x = function(bI0x, e9f) {
    var C9t = a8i.lw3x(bI0x);
    if (!C9t) return null;
    if (!O9F.bbr7k(C9t, O9F.EK9B)) {
      e9f = e9f || {};
      e9f.list = !e9f.clazz ? a8i.dj0x(C9t) : a8i.H9y(C9t, e9f.clazz);
      delete e9f.clazz;
    }
    return O9F.bbr7k(C9t, O9F.EK9B, e9f || bb9S);
  };
  cY0x.isChange = !0;
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    k9b = c9h('nej.u'),
    v9m = c9h('nej.j'),
    l9c = c9h('nm.x');
  var SETTING_KEY = 'player-setting';
  var nm3x = {
    mode: 4,
    volume: 0.8,
    autoPlay: false,
    index: 0,
    lock: false,
  };
  nm3x = v9m.sW5b(SETTING_KEY) || nm3x;
  l9c.brO1x = function() {
    return nm3x;
  };
  l9c.ER9I = function(ES9J) {
    if (ES9J) {
      nm3x = ES9J;
      v9m.vS6M(SETTING_KEY, ES9J);
    }
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    I9z = c9h('nej.ut'),
    l9c = c9h('nm.x'),
    q9h = c9h('nm.d'),
    hj2x = c9h('nm.w.player.log');
  var kD3x = q9h.hP2x.A9r();
  var LogLevel = {
    ERROR: 10,
    INFO: 6,
    DEBUG: 2,
  };
  var hk2x = function(u9l, bH0x, qx4B) {
    var cH0x = l9c.fl1x(
      '{0} {1} {2}',
      k9b.id2x(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      u9l,
      bH0x
    );
    if (qx4B == LogLevel.ERROR) {
      kD3x.eU1x('playerror', {
        message: bH0x,
      });
    }
    if (qx4B >= LogLevel.INFO) {
      kD3x.bRF8x(cH0x);
    }
    if (location.hostname.indexOf('igame.163.com') != -1) {
      console.log(cH0x);
    }
  };
  hj2x.cg0x = function() {
    hk2x('PLAY_ERROR', l9c.fl1x.apply(null, arguments), LogLevel.ERROR);
  };
  hj2x.pX4b = function() {
    hk2x('PLAY_INFO', l9c.fl1x.apply(null, arguments), LogLevel.INFO);
  };
  hj2x.cGF7y = function() {
    hk2x('PLAY_DEBUG', l9c.fl1x.apply(null, arguments), LogLevel.DEBUG);
  };
})();
(function() {
  var c9h = NEJ.P,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    I9z = c9h('nej.ut'),
    k9b = c9h('nej.u'),
    w9n = c9h('nm.w'),
    eP1x = c9h('flash.cb');
  var ed0x = [
    'loadedmetadata',
    'play',
    'pause',
    'ended',
    'waiting',
    'playing',
    'timeupdate',
    'progress',
    'stalled',
    'error',
  ];
  var EX9O, bcU7N, uB6v;
  w9n.cby0x = function(u9l, cN0x) {
    if (u9l != 'flash') {
      if (!EX9O) {
        EX9O = a8i.dh0x('audio');
        k9b.bd9U(ed0x, function(u9l) {
          h9c.s9j(EX9O, u9l, onMediaCallBack);
        });
      }
      if (EX9O && EX9O.canPlayType && EX9O.canPlayType('audio/mpeg')) {
        cN0x(new MediaWrap('audio'));
        return;
      }
    }
    if (!bcU7N) {
      a8i.sz5E({
        src: '/style/swf/music/music.swf?v=20151204',
        hidden: true,
        params: {
          allowscriptaccess: 'always',
        },
        onready: function(hT2x) {
          bcU7N = hT2x;
          k9b.bd9U(ed0x, function(u9l) {
            eP1x[u9l] = onMediaCallBack;
            bcU7N.addCallback(u9l, 'flash.cb.' + u9l);
          });
          cN0x(new MediaWrap('flash'));
        }.g9d(this),
      });
    } else {
      cN0x(new MediaWrap('flash'));
    }
  };
  function MediaWrap(Fb9S) {
    var gN2x;
    I9z.fL1x.A9r({
      element: this,
      event: ed0x.concat(['interrupt', 'recover']),
    });
    gN2x = Fb9S == 'audio' ? EX9O : bcU7N;
    this.type = Fb9S;
    this.destroy = function() {};
    this.setSrc = function(Y9P) {
      if (uB6v != this) {
        var gq1x = uB6v;
        if (gq1x) {
          gq1x.interrupt();
        }
        uB6v = this;
      }
      if (Fb9S == 'flash') {
        gN2x.setSrc(Y9P);
      } else {
        gN2x.src = Y9P;
      }
    };
    this.play = function() {
      if (uB6v != this) {
        var gq1x = uB6v;
        if (gq1x) {
          gq1x.interrupt();
          uB6v = this;
          this.recover();
        } else {
          uB6v = this;
        }
      }
      if (Fb9S == 'flash') {
        gN2x.as_play();
      } else {
        gN2x.play();
      }
    };
    this.pause = function() {
      if (uB6v != this) return;
      if (Fb9S == 'flash') {
        gN2x.as_pause();
      } else {
        gN2x.pause();
      }
    };
    this.load = function() {
      if (uB6v != this) return;
      if (Fb9S == 'flash') {
        gN2x.as_load();
      } else {
        gN2x.load();
      }
    };
    this.interrupt = function() {
      onMediaCallBack({
        type: 'interrupt',
      });
    };
    this.recover = function() {
      onMediaCallBack({
        type: 'recover',
      });
    };
    this.getMedia = function() {
      return gN2x;
    };
    var pa4e = [
      'Src',
      'Duration',
      'CurrentTime',
      'Paused',
      'Ended',
      'ReadyState',
      'Volume',
      'Error',
      'Buffered',
      'NetworkState',
    ];
    k9b.bd9U(
      pa4e,
      function(V9M) {
        var Qe3x = 'get' + V9M,
          Qa3x = 'set' + V9M;
        if (Fb9S == 'flash') {
          if (!this[Qe3x]) {
            this[Qe3x] = function() {
              return gN2x[Qe3x]();
            };
          }
          if (!this[Qa3x]) {
            this[Qa3x] = function(value) {
              gN2x[Qa3x](value);
            };
          }
        } else {
          var bKp5u = V9M.slice(0, 1).toLowerCase() + V9M.slice(1);
          if (!this[Qe3x]) {
            this[Qe3x] = function() {
              return gN2x[bKp5u];
            };
          }
          if (!this[Qa3x]) {
            this[Qa3x] = function(value) {
              gN2x[bKp5u] = value;
            };
          }
        }
      },
      this
    );
  }
  function onMediaCallBack(d9g) {
    if (uB6v) {
      h9c.z9q(uB6v, d9g.type, d9g);
    }
  }
})();
(function() {
  var c9h = NEJ.P,
    h9c = c9h('nej.v'),
    v9m = c9h('nej.j'),
    I9z = c9h('nej.ut'),
    dw0x = c9h('nej.p'),
    w9n = c9h('nm.w'),
    l9c = c9h('nm.x'),
    hj2x = c9h('nm.w.player.log'),
    b9i;
  var DEFAULT_BR = 128000;
  var CDN_HOST_REG = /(m\d+\.music\.126\.net)/;
  var MAX_STALLED_RETRY = 2;
  var MediaError = {
    MEDIA_ERR_ABORTED: 1,
    MEDIA_ERR_NETWORK: 2,
    MEDIA_ERR_DECODE: 3,
    MEDIA_ERR_SRC_NOT_SUPPORTED: 4,
  };
  var ErrorType = {
    INFO_GET_ERR: 1,
    NET_ERR: 2,
    UNKNOWN_ERR: 10,
  };
  var LoadState = {
    LOAD_START: 1,
    LOADED_META: 2,
    IN_RELOAD: 3,
    IN_RE_GET_URL: 4,
    IN_SWITCH_CDN: 5,
    IN_SWITCH_MEDIA: 6,
  };
  var RetryLevel = {
    NONE: 0,
    GET_URL: 1,
    RELOAD: 2,
    SWITCH_CDN: 3,
  };
  var bKn5s = false;
  w9n.fO1x = NEJ.C();
  b9i = w9n.fO1x.N9E(I9z.cI0x);
  b9i.bk9b = function(e9f) {
    this.bm9d(e9f);
    this.cM0x = {};
    this.bdd7W(e9f.media);
    v9m.bn9e('/api/cdns', {
      type: 'json',
      onload: function(d9g) {
        if (d9g.code) {
          this.qW5b = d9g.data;
        }
      }.g9d(this),
    });
  };
  b9i.bD0x = function() {
    this.bG0x();
    delete this.cM0x;
  };
  b9i.bdg7Z = function(bj9a) {
    if (!bj9a) return;
    var wE6y = this.cM0x.volume;
    if (this.dR0x) {
      this.dR0x.pause();
    }
    this.cM0x = {
      time: 0,
      id: bj9a.id,
      duration: bj9a.duration / 1000,
      play: this.cM0x.play,
      stalledRetryCount: 0,
    };
    if (wE6y != null) {
      this.cM0x.volume = wE6y;
    }
    this.cM0x.loadState = LoadState.LOAD_START;
    this.bKj5o(bj9a.id);
    hj2x.pX4b('play song id: {0}', bj9a.id);
  };
  b9i.en0x = function() {
    if (this.cM0x.error) {
      this.cM0x.error = null;
      if (this.cM0x.error == ErrorType.INFO_GET_ERR || this.bKd5i()) {
        this.bKc5h();
      } else {
        this.Pu2x();
      }
    } else {
      if (this.dR0x) {
        this.dR0x.play();
      }
    }
    this.cM0x.play = true;
    this.pL4P('play');
  };
  b9i.fG1x = function() {
    if (this.dR0x) {
      this.dR0x.pause();
    }
    this.cM0x.play = false;
    this.pL4P('pause');
  };
  b9i.oX4b = function(bA0x) {
    if (this.dR0x) {
      this.dR0x.setCurrentTime(bA0x);
    }
    this.cM0x.time = bA0x;
    hj2x.pX4b('seek to: {0}', bA0x);
  };
  b9i.btb1x = function() {
    return this.cM0x.duration || 0;
  };
  b9i.uh5m = function() {
    return !!this.cM0x.play;
  };
  b9i.mG3x = function(Ps2x) {
    this.cM0x.volume = Ps2x;
    if (this.dR0x) {
      this.dR0x.setVolume(Ps2x);
    }
  };
  b9i.bdi7b = function() {
    return this.cM0x.time;
  };
  b9i.bdd7W = function(u9l) {
    w9n.cby0x(
      u9l,
      function(gN2x) {
        this.dR0x = gN2x;
        hj2x.pX4b('media loaded: {0}', gN2x.type);
        this.bX0x([
          [this.dR0x, 'loadedmetadata', this.cbg0x.g9d(this)],
          [this.dR0x, 'ended', this.cbf0x.g9d(this)],
          [this.dR0x, 'waiting', this.zg7Z.g9d(this)],
          [this.dR0x, 'play', this.vB6v.g9d(this)],
          [this.dR0x, 'pause', this.btv1x.g9d(this)],
          [this.dR0x, 'playing', this.Pg2x.g9d(this)],
          [this.dR0x, 'timeupdate', this.cbe0x.g9d(this)],
          [this.dR0x, 'progress', this.tA5F.g9d(this)],
          [this.dR0x, 'stalled', this.btB1x.g9d(this)],
          [this.dR0x, 'interrupt', this.fG1x.g9d(this)],
          [this.dR0x, 'recover', this.cbd0x.g9d(this)],
          [this.dR0x, 'error', this.eJ0x.g9d(this)],
        ]);
        if (this.cM0x) {
          if (
            this.cM0x.loadState == LoadState.LOAD_START ||
            this.cM0x.loadState == LoadState.IN_SWITCH_MEDIA
          ) {
            this.btF1x();
            if (this.cM0x.volume != null) {
              this.dR0x.setVolume(this.cM0x.volume);
            }
          }
        }
      }.g9d(this)
    );
  };
  b9i.cbc0x = function(u9l) {
    this.JM0x();
    this.dR0x.destroy();
    this.cM0x.loadState = LoadState.IN_SWITCH_MEDIA;
    this.zg7Z();
    this.bdd7W(u9l);
    hj2x.pX4b('switch media');
  };
  b9i.cGG7z = function() {
    return this.dR0x;
  };
  b9i.bKj5o = function() {
    this.zg7Z();
    v9m.bn9e('/api/song/enhance/player/url', {
      type: 'json',
      query: {
        ids: JSON.stringify([this.cM0x.id]),
        br: DEFAULT_BR,
      },
      onload: this.bJY5d.g9d(this),
      onerror: this.bJY5d.g9d(this),
    });
  };
  b9i.bJY5d = function(d9g) {
    if (d9g.code == 200 && d9g.data && d9g.data.length) {
      var by0x = d9g.data[0];
      if (!by0x.url) {
        this.cM0x.error = ErrorType.INFO_GET_ERR;
        this.pL4P('error', {
          code: this.cM0x.error,
        });
        return;
      }
      this.cM0x.playUrl = by0x.url;
      this.cM0x.expireTime = new Date().getTime() + by0x.expi * 1000;
      this.btF1x();
    } else {
      this.cM0x.error = ErrorType.INFO_GET_ERR;
      this.pL4P('error', {
        code: this.cM0x.error,
      });
      hj2x.cg0x('info load error');
    }
  };
  b9i.btF1x = function() {
    if (this.dR0x) {
      var Y9P = this.cM0x.playUrl;
      if (
        this.cM0x.time > 0 &&
        (this.cM0x.loadState == LoadState.IN_RE_GET_URL ||
          this.cM0x.loadState == LoadState.IN_RE_GET_URL)
      ) {
        Y9P += '#t=' + this.cM0x.time;
      }
      this.dR0x.setSrc(Y9P);
      hj2x.pX4b('load mp3: {0},loadState: {1}.', Y9P, this.cM0x.loadState);
    }
  };
  b9i.bJV5a = function() {
    if (/#t=(\d+)$/.test(this.dR0x.getSrc())) {
      return parseInt(RegExp.$1) || 0;
    } else {
      return 0;
    }
  };
  b9i.Pu2x = function() {
    var bA0x = parseInt(this.cM0x.time) || 0,
      caR0x = this.bJV5a();
    if (bA0x === caR0x) {
      this.dR0x.load();
    } else {
      this.dR0x.setSrc(this.cM0x.playUrl + '#t=' + bA0x);
    }
    this.cM0x.loadState = LoadState.IN_RELOAD;
    this.zg7Z();
    hj2x.pX4b('reload from: {0}', bA0x);
  };
  b9i.bKc5h = function() {
    this.cM0x.loadState = LoadState.IN_RE_GET_URL;
    this.bKj5o();
  };
  b9i.bJU5Z = function() {
    var tN5S = getHost(this.cM0x.playUrl);
    if (tN5S) {
      for (var i = 0; i < this.qW5b.length; i++) {
        var il2x = this.qW5b[i] || [],
          r9i = il2x.indexOf(tN5S);
        if (r9i >= 0 && il2x.length > 1) {
          return il2x[(r9i + 1) % il2x.length];
        }
      }
    }
    function getHost(Y9P) {
      if (CDN_HOST_REG.test(Y9P)) return RegExp.$1;
    }
  };
  b9i.caM0x = function() {
    this.cM0x.playUrl = this.cM0x.playUrl.replace(CDN_HOST_REG, this.bJU5Z());
    this.cM0x.loadState = LoadState.IN_SWITCH_CDN;
    this.btF1x();
    this.zg7Z();
  };
  b9i.cbg0x = function() {
    if (this.cM0x.loadState == LoadState.LOAD_START) {
      this.cM0x.loadState = LoadState.LOADED_META;
      if (this.dR0x.type == 'audio') {
        this.cM0x.duration = this.dR0x.getDuration();
      }
      this.pL4P('loadedmeta', {
        duration: this.cM0x.duration,
      });
    } else {
      this.cM0x.loadState = LoadState.LOADED_META;
    }
    if (this.cM0x.play) {
      this.dR0x.play();
    } else {
      this.dR0x.pause();
    }
    if (this.cM0x.time && parseInt(this.cM0x.time) != this.bJV5a()) {
      this.dR0x.setCurrentTime(this.cM0x.time);
    }
    this.IJ0x();
    this.Pg2x();
    bKn5s = true;
    hj2x.pX4b('loaded meta');
  };
  b9i.cbf0x = function() {
    this.cM0x.ended = true;
    this.pL4P('ended');
  };
  b9i.zg7Z = function() {
    if (!this.cM0x.waiting) {
      this.cM0x.waiting = true;
      this.cM0x.waitTimestamp = +new Date();
      this.pL4P('waiting');
    }
  };
  b9i.Pg2x = function() {
    this.cM0x.waiting = false;
    this.cM0x.waitTimestamp = 0;
    this.pL4P('playing');
  };
  b9i.vB6v = function() {
    this.pL4P('play');
  };
  b9i.btv1x = function() {
    this.pL4P('pause');
  };
  b9i.cbe0x = function() {
    if (this.cM0x.loadState != LoadState.LOADED_META) return;
    var bA0x = this.dR0x.getCurrentTime();
    if (this.cM0x.waiting && bA0x > this.cM0x.time) {
      this.Pg2x();
    }
    this.cM0x.time = bA0x;
    this.pL4P('timeupdate', {
      time: this.cM0x.time,
      duration: this.cM0x.duration,
    });
  };
  b9i.tA5F = function(d9g) {
    if (this.cM0x.loadState != LoadState.LOADED_META) return;
    var o9f = {};
    if (d9g.data) {
      o9f.total = d9g.data.total;
      o9f.loaded = d9g.data.loaded;
    } else {
      var zl7e = this.dR0x.getBuffered(),
        bA0x = this.dR0x.getCurrentTime(),
        ox4B = 0;
      for (var i = 0; i < zl7e.length; i++) {
        if (bA0x > zl7e.start(i) && bA0x < zl7e.end(i)) {
          ox4B = zl7e.end(i);
          break;
        }
      }
      o9f.total = this.cM0x.duration;
      o9f.loaded = Math.min(ox4B, o9f.total);
    }
    this.pL4P('progress', o9f);
  };
  b9i.IJ0x = function() {
    if (this.cM0x.retry) {
      clearTimeout(this.cM0x.retry.tid);
      this.cM0x.retry = null;
    }
  };
  b9i.eJ0x = function() {
    var cb0x = this.dR0x.getError();
    hj2x.cg0x(
      'media error code: {0}, netState: {1}',
      cb0x.code,
      this.dR0x.getNetworkState()
    );
    if (
      cb0x.code == MediaError.MEDIA_ERR_NETWORK ||
      cb0x.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED
    ) {
      var ES9J = l9c.brO1x();
      if (!this.cM0x.retry) {
        this.cM0x.retry = {
          level: RetryLevel.NONE,
        };
      } else {
        window.clearTimeout(this.cM0x.retry.tid);
      }
      if (this.cM0x.retry.level == RetryLevel.NONE) {
        if (this.bKd5i()) {
          this.cM0x.retry.level = RetryLevel.GET_URL;
          this.bKc5h();
          hj2x.pX4b('Url expired, get url.');
        } else {
          this.cM0x.retry.level = RetryLevel.RELOAD;
          this.cM0x.retry.tid = setTimeout(this.Pu2x.g9d(this), 3000);
          hj2x.pX4b('Reload mp3 3s later.');
        }
      } else if (this.cM0x.retry.level == RetryLevel.GET_URL) {
        this.cM0x.retry.level = RetryLevel.RELOAD;
        this.cM0x.retry.tid = setTimeout(this.Pu2x.g9d(this), 3000);
        hj2x.pX4b('Reload mp3 3s later.');
      } else if (this.cM0x.retry.level == RetryLevel.RELOAD) {
        this.cM0x.retry.level = RetryLevel.SWITCH_CDN;
        if (this.bJU5Z()) {
          this.cM0x.retry.tid = setTimeout(this.caM0x.g9d(this), 5000);
          hj2x.pX4b('Switch CDN 5s later.');
        } else {
          this.cM0x.retry.tid = setTimeout(this.Pu2x.g9d(this), 5000);
          hj2x.pX4b('Reload mp3 5s later.');
        }
      } else if (
        !bKn5s &&
        this.dR0x.type == 'audio' &&
        !ES9J.useFlash &&
        !dw0x.Ig0x.mac &&
        l9c.bvV2x().supported
      ) {
        ES9J.useFlash = true;
        l9c.ER9I(ES9J);
        this.cbc0x('flash');
      } else {
        this.IJ0x();
        this.fG1x();
        this.cM0x.error = ErrorType.NET_ERR;
        this.pL4P('error', {
          code: this.cM0x.error,
        });
        hj2x.cg0x('error can not retry.');
      }
    } else {
      this.IJ0x();
      this.fG1x();
      this.cM0x.error = ErrorType.UNKNOWN_ERR;
      this.pL4P('error', {
        code: this.cM0x.error,
      });
      hj2x.cg0x('error can not retry.');
    }
  };
  b9i.btB1x = (function() {
    var hU2x = 0,
      bJS5X = 5000;
    return function() {
      this.zg7Z();
      clearTimeout(hU2x);
      setTimeout(
        function() {
          var eV1x = +new Date();
          if (
            this.cM0x.waiting &&
            eV1x - this.cM0x.waitTimestamp >= bJS5X &&
            this.cM0x.stalledRetryCount < MAX_STALLED_RETRY
          ) {
            hj2x.pX4b('stalled too long retry.');
            this.cM0x.stalledRetryCount++;
            this.Pu2x();
          }
        }.g9d(this),
        bJS5X
      );
      hj2x.pX4b('stalled');
    };
  })();
  b9i.bKd5i = function() {
    var eV1x = +new Date();
    return eV1x > this.cM0x.expireTime;
  };
  b9i.cbd0x = function() {
    var bA0x = parseInt(this.cM0x.time) || 0;
    this.dR0x.setSrc(this.cM0x.playUrl + '#t=' + bA0x);
    this.cM0x.loadState = LoadState.IN_RELOAD;
    this.zg7Z();
    hj2x.pX4b('recover from: {0}', bA0x);
  };
  b9i.pL4P = function(U9L, j9a) {
    h9c.z9q(w9n.fO1x, 'playaction', {
      action: U9L,
      data: j9a || {},
    });
  };
  I9z.fL1x.A9r({
    element: w9n.fO1x,
    event: ['playaction'],
  });
})();
(function() {
  if (!(window == top)) {
    return;
  }
  var c9h = NEJ.P,
    h9c = c9h('nej.v'),
    I9z = c9h('nej.ut'),
    w9n = c9h('nm.w'),
    b9i;
  w9n.FN9E = NEJ.C();
  b9i = w9n.FN9E.N9E(w9n.fO1x);
  K9B = w9n.FN9E.ct0x;
  b9i.cy0x = function() {
    this.cG0x();
  };
  b9i.caJ0x = function(bN0x) {
    this.bdg7Z(bN0x);
    this.en0x();
  };
  b9i.buh1x = function() {
    this.fG1x();
  };
  b9i.xy7r = function(d9g) {
    if (d9g.action == 'play') {
      this.fG1x();
    }
  };
  b9i.pL4P = function(U9L, j9a) {
    h9c.z9q(w9n.FN9E, 'tmpplayaction', {
      action: U9L,
      data: j9a || {},
      tmp: true,
    });
  };
  b9i.tJ5O = function() {
    return this.cM0x;
  };
  I9z.fL1x.A9r({
    element: w9n.FN9E,
    event: ['tmpplayaction'],
  });
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    fI1x = c9h('nej.n'),
    v9m = c9h('nej.j'),
    I9z = c9h('nej.ut'),
    bc9T = c9h('nej.ui'),
    w9n = c9h('nm.w'),
    m9d = c9h('nm.l'),
    kX3x = c9h('nm.c'),
    q9h = c9h('nm.d'),
    l9c = c9h('nm.x'),
    b9i,
    K9B,
    bdk7d = [
      {
        item: 'm-publish-search-single',
        type: 1,
      },
      {
        item: 'm-publish-search-artist',
        type: 100,
      },
      {
        item: 'm-publish-search-album',
        type: 10,
      },
      {
        item: 'm-publish-search-mv',
        type: 1004,
      },
      {
        item: 'm-publish-search-playlist',
        type: 1000,
      },
      {
        item: 'm-publish-search-djRadio',
        type: 1009,
      },
    ];
  var bul1x = {
    song: 0,
    artist: 1,
    album: 2,
    mv: 3,
    playlist: 4,
    djradio: 5,
  };
  w9n.bum1x = NEJ.C();
  b9i = w9n.bum1x.N9E(bc9T.eg0x);
  b9i.cy0x = function(e9f) {
    this.cG0x(e9f);
    var i9b = a8i.H9y(this.n9e, 'j-flag');
    this.cGK7D = i9b.shift();
    this.caH0x = i9b.shift();
    this.IG0x = i9b.shift();
    this.buu1x = i9b.shift();
    this.buv1x = [
      i9b.shift(),
      i9b.shift(),
      i9b.shift(),
      i9b.shift(),
      i9b.shift(),
      i9b.shift(),
    ];
    this.bdo7h = i9b.shift();
    this.bJR5W = i9b.shift();
    this.ru5z = {
      list: this.buv1x,
      selected: 'z-curr',
      onchange: this.bJQ5V.g9d(this),
    };
    h9c.s9j(this.IG0x, 'input', this.bdt7m.g9d(this));
    h9c.s9j(this.IG0x, 'propertychange', this.bdt7m.g9d(this));
    h9c.s9j(this.IG0x, 'keyup', this.bdt7m.g9d(this));
    h9c.s9j(this.caH0x, 'click', this.bdt7m.g9d(this));
    h9c.s9j(this.bdo7h, 'click', this.cK0x.g9d(this));
    h9c.s9j(
      this.bJR5W,
      'click',
      function() {
        this.z9q('oncancel', {});
      }.g9d(this)
    );
    this.S9J = q9h.EG9x.gt1x();
    this.NT2x = top.nm.w.FN9E.gt1x();
    I9z.fL1x.A9r({
      element: top.nm.w.FN9E,
      event: ['tmpplayaction'],
    });
    this.sj5o = {
      limit: 100,
      offset: 0,
      parent: this.bdo7h,
      onbeforelistload: this.rm5r.g9d(this),
    };
    q9h.sk = 'fuck' + a8i.t9k(this.buu1x, 'xname') + '458';
    h9c.s9j(top.nm.w.FN9E, 'tmpplayaction', this.xy7r.g9d(this));
  };
  b9i.cf0x = function() {
    this.ce0x = 'm-xwgt-publish-search';
  };
  b9i.bk9b = function(e9f) {
    this.bm9d(e9f);
    if (!!this.BR8J) {
      this.BR8J.T9K();
      delete this.BR8J;
    }
    this.ru5z.index = bul1x[e9f.type || 'song'];
    this.BR8J = I9z.EK9B.A9r(this.ru5z);
    this.IG0x.value = '';
    this.IG0x.focus();
    this.vj6d = '';
    this.cGL7E = 0;
    if (e9f.showMV == true) {
      this.buv1x[bul1x['mv']].parentNode.style.display = '';
      a8i.y9p(this.buu1x, 'srchtab-1');
    } else {
      this.buv1x[bul1x['mv']].parentNode.style.display = 'none';
      a8i.x9o(this.buu1x, 'srchtab-1');
    }
    if (!!this.dJ0x) {
      this.dJ0x = this.dJ0x.T9K();
    }
    if (e9f.hideBack) {
      a8i.y9p(this.bJR5W.parentNode, 'f-hide');
    }
  };
  b9i.bD0x = function() {
    this.NT2x.buh1x();
    this.bG0x();
  };
  b9i.bdt7m = function() {
    var value = this.IG0x.value.trim();
    if (value && value.length) {
      if (value != this.vj6d) {
        this.vj6d = value;
        this.bJQ5V({
          index: this.BR8J.tI5N(),
        });
      }
    } else {
      if (this.dJ0x) {
        this.dJ0x = this.dJ0x.T9K();
      }
    }
    this.vj6d = value;
  };
  b9i.cK0x = (function() {
    var caz0x = function(F9w) {
        return a8i.bE0x(F9w, 'sitm') || a8i.bE0x(F9w, 'itm') || a8i.bE0x(F9w, 'mv-item');
      },
      cau0x = function(F9w) {
        return a8i.bE0x(F9w, 'ply');
      },
      bJL5Q = function() {
        m9d.Z9Q.L9C({
          type: 2,
          tip: '因合作方要求，该资源需付费使用',
        });
      },
      car0x = function() {
        m9d.Z9Q.L9C({
          type: 2,
          tip: '因合作方要求，该资源需下载后播放',
        });
      },
      buU1x = function(bj9a) {
        if (bj9a && bj9a.privilege && bj9a.privilege.toast) {
          v9m.bn9e('/api/song/toast', {
            query: {
              id: bj9a.id,
            },
            type: 'json',
            onload: VD4H.g9d(this),
            onerror: VD4H.g9d(this),
          });
        } else {
          VE4I();
        }
      },
      VD4H = function(Q9H) {
        VE4I((Q9H || bb9S).toast);
      },
      VE4I = function(bH0x) {
        m9d.Z9Q.L9C({
          type: 2,
          tip: bH0x || '因合作方要求，该资源暂时下架>_<',
        });
      };
    return function(d9g) {
      var Gf9W = h9c.W9N(d9g, cau0x),
        i9b = h9c.W9N(d9g, caz0x),
        ev0x = this.NT2x.tJ5O();
      if (!!i9b) {
        h9c.bh9Y(d9g);
        this.NE2x = a8i.t9k(i9b, 'id');
        this.Np1x = a8i.t9k(i9b, 'type');
        if (this.Np1x == 18) {
          var bN0x = this.S9J.eH0x(this.NE2x),
            qx4B = l9c.pK4O(bN0x);
          if (!Gf9W) {
            if (qx4B == 10) {
              bJL5Q();
              return;
            } else if (qx4B == 100) {
              buU1x(bN0x);
              return;
            }
          } else {
            if (qx4B == 10) {
              bJL5Q();
              return;
            } else if (qx4B == 100) {
              buU1x(bN0x);
              return;
            } else if (qx4B == 11) {
              car0x();
              return;
            } else {
              a8i.x9o(this.BX8P, 'z-pause z-loading');
              if (Gf9W == this.BX8P && ev0x.play && !ev0x.ended) {
                this.NT2x.buh1x();
              } else {
                this.BX8P = Gf9W;
                this.NT2x.caJ0x(bN0x);
              }
              return;
            }
          }
        } else if (this.Np1x == 70) {
          if (a8i.bE0x(i9b, 'z-noprogram')) {
            m9d.Z9Q.L9C({
              type: 2,
              tip: '不能分享没有节目的电台',
            });
            return;
          }
        }
        this.caq0x();
      }
    };
  })();
  b9i.caq0x = function() {
    var hX2x = this.S9J.eH0x(this.NE2x),
      tF5K = l9c.bOv6p(this.Np1x, hX2x);
    tF5K.title = tF5K.title || '';
    tF5K.author = tF5K.author || '';
    tF5K.picUrl = tF5K.picUrl || '';
    tF5K.authors = tF5K.authors || '';
    if (this.Np1x == 70) {
      this.NE2x = this.NE2x.slice(0, -4);
    }
    this.z9q('onfinish', {
      id: this.NE2x,
      type: this.Np1x,
      data: tF5K,
    });
  };
  b9i.xy7r = function(d9g) {
    var j9a = d9g.data;
    if (!this.BX8P) {
      return;
    }
    switch (d9g.action) {
      case 'play':
        a8i.fi1x(this.BX8P, 'z-pause z-play', 'z-loading');
        break;
      case 'pause':
      case 'ended':
        a8i.x9o(this.BX8P, 'z-pause z-loading');
        break;
      case 'error':
        m9d.Z9Q.L9C({
          type: 2,
          tip: '试听遇到问题，播放失败',
        });
        a8i.x9o(this.BX8P, 'z-pause z-loading');
        break;
      case 'playing':
        a8i.fi1x(this.BX8P, 'z-loading', 'z-pause');
        break;
      case 'waiting':
        a8i.fi1x(this.BX8P, 'z-pause', 'z-loading');
        break;
    }
  };
  b9i.cap0x = function(d9g) {
    if (d9g.result.code == 407) {
      this.bdo7h.innerHTML =
        '<div class="n-norlt s-fc1">根据相关法律法规和政策，搜索结果未予显示</div>';
      return;
    }
    this.bdo7h.innerHTML = '<div class="n-norlt s-fc1">页面出错，请稍后再试！</div>';
  };
  b9i.bJQ5V = function(d9g) {
    if (!this.vj6d || d9g.index < 0 || d9g.index > 5) {
      return;
    }
    this.NT2x.buh1x();
    var bg9X = bdk7d[d9g.index],
      e9f = NEJ.X({}, this.sj5o);
    e9f.cache = {
      klass: q9h.EG9x,
      clear: true,
      onerror: this.cap0x.g9d(this),
    };
    e9f.cache.lkey = 'search-publish-' + bg9X.type + '-' + this.vj6d;
    e9f.item = {
      klass: bg9X.item,
      getRestrictLevel: l9c.pK4O,
      dur2time: l9c.lt3x,
    };
    if (!e9f.cache.data) {
      e9f.cache.data = {};
    }
    e9f.cache.data.s = this.vj6d;
    e9f.cache.data.type = bg9X.type;
    e9f.cache.data.isPub = true;
    if (bg9X.type == 1) {
      e9f.cache.data.hlpretag = '<span class="s-fc7">';
      e9f.cache.data.hlposttag = '</span>';
    }
    e9f.onemptylist = this.cam0x.g9d(this, this.vj6d);
    if (!!this.Gm9d) this.S9J.ve6Y(this.Gm9d);
    if (!!this.dJ0x) {
      this.dJ0x = this.dJ0x.T9K();
    }
    this.dJ0x = I9z.ni3x.A9r(e9f);
    this.Gm9d = e9f.cache.lkey;
  };
  b9i.rm5r = function(d9g) {
    d9g.value = a8i.iH2x('m-publish-search-loading');
  };
  b9i.cam0x = function(J9A, d9g) {
    a8i.dz0x(d9g.parent, 'm-publish-emtpy-message', {
      key: J9A,
    });
    d9g.stopped = true;
  };
})();
(function() {
  var c9h = NEJ.P,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    dw0x = c9h('nej.p'),
    v9m = c9h('nej.j'),
    ca0x = c9h('nej.ut'),
    bC0x = c9h('nej.ui'),
    w9n = c9h('nm.w'),
    b9i,
    K9B;
  var cak0x = '.j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}';
  w9n.Gn9e = NEJ.C();
  b9i = w9n.Gn9e.N9E(bC0x.eg0x);
  var gh1x = a8i.ex0x('m-wgt-receiverInput');
  var cah0x = a8i.ex0x('m-wgt-receiverList');
  var iW2x = a8i.sK5P(cak0x);
  var cae0x = a8i.ex0x(
    '<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">&times;</a></div>'
  );
  b9i.cy0x = function(e9f) {
    this.bl9c = [];
    this.wu6o = e9f.receiver || null;
    this.cad0x = e9f.unique || false;
    this.nx3x = e9f.err;
    this.bJG5L(this.bJF5K, e9f.uid);
    this.cG0x(e9f);
  };
  b9i.bk9b = function(e9f) {
    this.bm9d(e9f);
    this.Vj4n();
    this.Vd4h();
    this.bdP7I();
    if (e9f.receiver) this.bvR1x(e9f.receiver.nickname, e9f.receiver.userId);
    a8i.ba9R(this.CJ8B, 'display', 'block');
    a8i.ba9R(this.bvU1x, 'cursor', 'text');
    a8i.ba9R(this.CJ8B, 'cursor', 'text');
  };
  b9i.cf0x = function() {
    var j9a = this.bJE5J();
    this.ce0x = a8i.iB2x(
      a8i.bZ0x(gh1x, {
        receiver: this.wu6o,
        users: j9a,
      })
    );
    this.ma3x = iW2x;
  };
  b9i.bW0x = function() {
    this.ch0x();
    var bS0x = a8i.H9y(this.n9e, 'j-flag');
    var hn2x = a8i.H9y(this.n9e, 'j-item');
    this.bvU1x = bS0x[0];
    this.bJB5G = bS0x[1];
    this.ee0x = bS0x[2];
    this.CJ8B = bS0x[3];
    this.bdY7R = bS0x[4];
    this.bwg2x = bS0x[5];
    this.fK1x = hn2x;
    a8i.y9p(this.fK1x[0], 'j-selected');
    h9c.s9j(this.ee0x, 'keyup', this.bwh2x.g9d(this));
    h9c.s9j(this.ee0x, 'keydown', this.TU4Y.g9d(this));
    h9c.s9j(this.ee0x, 'focus', this.lf3x.g9d(this));
    h9c.s9j(this.bdY7R, 'click', this.bZT0x.g9d(this));
    h9c.s9j(this.bvU1x, 'click', this.bZP0x.g9d(this));
    h9c.s9j(document.body, 'click', this.oz4D.g9d(this));
    h9c.s9j(this.ee0x, 'input', this.fN1x.g9d(this));
    h9c.s9j(this.ee0x, 'blur', this.oe4i.g9d(this));
  };
  b9i.bD0x = function(e9f) {
    h9c.mv3x(document.body, 'click', this.oz4D.g9d(this));
    this.bG0x();
    this.bdP7I();
    this.bZO9F();
    this.oz4D();
  };
  b9i.bwh2x = function(d9g) {
    h9c.bh9Y(d9g);
    var kc3x = d9g.keyCode || d9g.which;
    var bo9f = this.ee0x.value;
    var bp9g = this.fK1x.length;
    var sD5I = a8i.H9y(this.n9e, 'j-selected')[0];
    switch (kc3x) {
      case 13:
        var lr3x = a8i.gy1x(sD5I, 'data-username');
        var ij2x = a8i.gy1x(sD5I, 'data-userId');
        this.bvR1x(lr3x, ij2x);
        this.oz4D();
        this.ee0x.value = '';
        break;
      case 38:
        var r9i =
          a8i.gy1x(sD5I, 'data-index') - 1 < 0
            ? bp9g - 1
            : a8i.gy1x(sD5I, 'data-index') - 1;
        a8i.x9o(sD5I, 'j-selected');
        a8i.y9p(this.fK1x[r9i], 'j-selected');
        break;
      case 40:
        var r9i =
          parseInt(a8i.gy1x(sD5I, 'data-index')) + 1 >= bp9g
            ? 0
            : parseInt(a8i.gy1x(sD5I, 'data-index')) + 1;
        a8i.x9o(sD5I, 'j-selected');
        a8i.y9p(this.fK1x[r9i], 'j-selected');
        break;
      default:
        this.wk6e();
    }
  };
  b9i.TU4Y = function(d9g) {
    var kc3x = d9g.keyCode || d9g.which;
    var bo9f = this.ee0x.value;
    var r9i = a8i.H9y(this.n9e, 'j-receiver').length - 1;
    if (kc3x === 8 && bo9f === '') this.bZM9D(r9i);
  };
  b9i.fN1x = function(d9g) {
    var bo9f = this.ee0x.value;
    if (bo9f.length > 10) {
      this.ee0x.value = bo9f.substring(0, 10);
      return;
    }
    dw0x.ds0x.browser == 'ie' && dw0x.ds0x.version < '7.0'
      ? setTimeout(this.bwG2x.g9d(this), 0)
      : this.bwG2x();
    this.Vd4h();
  };
  b9i.lf3x = function() {
    if (this.bl9c[0]) this.wk6e();
    else this.bJG5L(this.bZL9C);
    a8i.ba9R(this.CJ8B, 'display', 'none');
  };
  b9i.oe4i = function() {
    var bp9g = a8i.H9y(this.n9e, 'j-receiver').length;
    if (this.ee0x.value.trim() == '' && bp9g <= 0)
      a8i.ba9R(this.CJ8B, 'display', 'block');
  };
  b9i.bvR1x = function(lr3x, ij2x) {
    var Iw0x = this.Sw4A();
    if (Iw0x.length >= 10) {
      this.dX0x();
      return;
    }
    var bc9T;
    for (bc9T = 0; bc9T < Iw0x.length; bc9T++) {
      if (Iw0x[bc9T] == ij2x) {
        this.oz4D();
        return;
      }
    }
    if (!lr3x || !ij2x) return;
    var f9e = a8i.dy0x(
      a8i.iB2x(
        a8i.bZ0x(cae0x, {
          username: lr3x,
          userId: ij2x,
        })
      )
    );
    var bI0x = this.bJB5G.parentNode;
    if (this.cad0x) {
      this.bdP7I();
    }
    bI0x.insertBefore(f9e, this.bJB5G);
    this.ee0x.value = '';
    var bp9g = a8i.H9y(this.n9e, 'j-receiver').length;
    if (bp9g > 1) a8i.ba9R(this.CJ8B, 'display', 'none');
    this.bwG2x();
    this.Vd4h();
  };
  b9i.bdP7I = function() {
    var Sd4h = a8i.H9y(this.n9e, 'j-receiver');
    var bc9T;
    if (Sd4h.length > 0) {
      for (bc9T = 0; bc9T < Sd4h.length; bc9T++) {
        a8i.cJ0x(Sd4h[bc9T], false);
      }
    }
  };
  b9i.bZO9F = function() {
    this.ee0x.value = '';
  };
  b9i.bZM9D = function(r9i) {
    this.dX0x(!0);
    var Sd4h = a8i.H9y(this.n9e, 'j-receiver');
    a8i.cJ0x(Sd4h[r9i], false);
    this.Vd4h();
  };
  b9i.wk6e = function() {
    var bo9f = this.ee0x.value;
    var bv9m = bo9f.trim().toLowerCase();
    var j9a;
    bv9m = bv9m.replace(/\[/g, '\\[');
    bv9m = bv9m.replace(/\]/g, '\\]');
    j9a = this.bJE5J(bv9m);
    this.bZI9z(j9a);
  };
  b9i.oz4D = function(d9g) {
    a8i.ba9R(this.bdY7R, 'display', 'none');
  };
  b9i.dX0x = function(dL0x) {
    if (dL0x && this.nx3x) {
      a8i.ba9R(this.nx3x, 'display', 'none');
      return;
    }
    if (this.nx3x) a8i.ba9R(this.nx3x, 'display', 'block');
  };
  b9i.bZT0x = function(d9g) {
    h9c.cr0x(d9g);
    var bO0x = d9g.target || d9g.srcElement;
    if (a8i.bE0x(bO0x, 'j-flag')) return;
    var bI0x =
      bO0x.nodeName.toLowerCase() == 'a' ? bO0x.parentNode : bO0x.parentNode.parentNode;
    var lr3x = a8i.gy1x(bI0x, 'data-username');
    var ij2x = a8i.gy1x(bI0x, 'data-userId');
    this.bvR1x(lr3x, ij2x);
    this.oz4D();
    a8i.ba9R(this.CJ8B, 'display', 'none');
  };
  b9i.bZP0x = function(d9g) {
    h9c.bh9Y(d9g);
    var bO0x = d9g.target || d9g.srcElement;
    if (a8i.bE0x(bO0x.parentNode, 'j-receiver')) {
      a8i.cJ0x(bO0x.parentNode, false);
      this.dX0x(!0);
      this.Vd4h();
    } else this.ee0x.focus();
  };
  b9i.bwG2x = function() {
    this.bwg2x.innerHTML = this.ee0x.value;
    var cB0x = this.bwg2x.offsetWidth + 2;
    a8i.ba9R(this.ee0x, 'width', cB0x + 'px');
  };
  b9i.Vd4h = function() {
    var beh7a = a8i.hQ2x(this.ee0x, this.n9e).y;
    var bJy5D = Math.floor((beh7a - 8) / 27);
    if (bJy5D < 0) return;
    a8i.ba9R(this.bvU1x, 'height', 19 + bJy5D * 29 + 'px');
  };
  b9i.Vj4n = function() {
    var px4B = [
      'height',
      'paddingLeft',
      'paddingTop',
      'paddingRight',
      'paddingBottom',
      'fontSize',
      'fontFamily',
      'lineHeight',
    ];
    for (var i = 0; i < px4B.length; i++) {
      a8i.ba9R(this.bwg2x, px4B[i], a8i.de0x(this.ee0x, px4B[i]));
    }
  };
  b9i.bJG5L = function(cN0x, C9t) {
    var dn0x = C9t ? C9t : window.GUser.userId;
    var Y9P = '/api/user/getfollows/' + dn0x;
    var ge1x = v9m.bn9e(Y9P, {
      sync: false,
      method: 'get',
      query: 'offset = 0&limit=1000&order=true',
      onload: cN0x.g9d(this),
      onerror: function(j9a) {
        this.bl9c = [];
      },
      onbeforerequest: function(j9a) {},
    });
  };
  b9i.bJF5K = function(j9a) {
    this.bl9c = JSON.parse(j9a).follow || [];
    var C9t = GUser.userId;
    for (var i = 0; i < this.bl9c.length; i++) {
      if (this.bl9c[i].userId == C9t) {
        this.bl9c.splice(i, 1);
        continue;
      }
      this.bl9c[i].avatarUrl = this.bl9c[i].avatarUrl + '?param=30y30';
    }
  };
  b9i.bZL9C = function(j9a) {
    if (this.bl9c[0]) return;
    this.bJF5K(j9a);
    this.wk6e();
  };
  b9i.bJE5J = function(bv9m) {
    var bv9m = bv9m ? bv9m : '';
    this.bl9c = this.bl9c[0] ? this.bl9c : [];
    var bp9g = this.bl9c.length;
    var RY3x = this.Sw4A();
    var sR5W = [];
    var RQ3x, RH3x, bxq2x;
    if (!this.bl9c[0]) return sR5W;
    for (var bc9T = 0; bc9T < bp9g; bc9T++) {
      bxq2x = false;
      for (var v9m = 0; v9m < RY3x.length; v9m++) {
        if (this.bl9c[bc9T].userId == RY3x[v9m]) {
          bxq2x = true;
          break;
        }
      }
      if (bxq2x) continue;
      RQ3x = this.bl9c[bc9T].nickname.toLowerCase().search(bv9m);
      RH3x = this.bl9c[bc9T].py ? this.bl9c[bc9T].py.toLowerCase().search(bv9m) : -1;
      if (RQ3x !== -1 || RH3x != -1) sR5W.push(this.bl9c[bc9T]);
    }
    return sR5W;
  };
  b9i.bZI9z = function(j9a) {
    a8i.dz0x(this.bdY7R, cah0x, {
      users: j9a,
    });
    a8i.y9p(a8i.H9y(this.n9e, 'j-item')[0], 'j-selected');
    this.fK1x = a8i.H9y(this.n9e, 'j-item');
    a8i.ba9R(this.bdY7R, 'display', 'block');
  };
  b9i.Sw4A = function() {
    var sR5W = a8i.H9y(this.n9e, 'j-receiver') || [];
    var ij2x = [];
    for (var i = 0; i < sR5W.length; i++) {
      ij2x.push(a8i.gy1x(sR5W[i], 'data-id'));
    }
    return ij2x;
  };
  b9i.cGP7I = function() {
    var ij2x = this.Sw4A();
    var sR5W = [];
    for (var i = 0; i < ij2x.length; i++) {
      for (var j = 0; j < this.bl9c.length; j++) {
        if (ij2x[i] == this.bl9c[j].userId) sR5W.push(this.bl9c[j]);
      }
    }
    return sR5W;
  };
  b9i.bZE9v = function() {
    this.bdP7I();
  };
  w9n.Gn9e.L9C = function(e9f) {
    if (!GUser || !GUser.userId || GUser.userId <= 0) {
      m9d.oZ4d.L9C({
        title: '登录',
      });
      return;
    }
    e9f = e9f || {};
    if (e9f.parent === undefined) e9f.parent = document.body;
    !!this.ff1x && this.ff1x.T9K();
    this.ff1x = this.A9r(e9f);
  };
  w9n.Gn9e.bt9k = function() {
    !!this.ff1x && this.ff1x.T9K();
  };
  w9n.Gn9e.Hb9S = function() {
    return this.oz4D();
  };
  w9n.Gn9e.cGQ7J = function() {
    return this.wk6e();
  };
})();
(function() {
  var c9h = NEJ.P,
    a8i = c9h('nej.e'),
    k9b = c9h('nej.u'),
    h9c = c9h('nej.v'),
    l9c = c9h('nm.x'),
    m9d = c9h('nm.l'),
    b9i,
    K9B;
  m9d.Is0x = NEJ.C();
  b9i = m9d.Is0x.N9E(m9d.blM9D);
  K9B = m9d.Is0x.ct0x;
  b9i.bk9b = (function() {
    var Hd0x;
    var bZu9l = function(D9u, J9A) {
      Hd0x = Hd0x || [];
      if (J9A != '18')
        Hd0x.push({
          key: J9A,
          value: D9u,
        });
    };
    return function(e9f) {
      this.bm9d(e9f);
      if (e9f.upwards) {
        a8i.y9p(this.n9e, 'm-emts-up');
      } else {
        a8i.x9o(this.n9e, 'm-emts-up');
      }
      if (e9f.rightwards) {
        a8i.y9p(this.n9e, 'm-emts-right');
      } else {
        a8i.x9o(this.n9e, 'm-emts-right');
      }
      if (!Hd0x) {
        var bz0x = l9c.coA3x();
        k9b.eD0x(bz0x, bZu9l);
      }
      var bp9g = Hd0x.length;
      Hd0x.splice(bp9g - 2, 0, {
        key: '18',
        value: '186',
      });
      this.bej7c = Hd0x;
      this.bZs9j = !!e9f.autoHide;
    };
  })();
  b9i.cf0x = function() {
    this.ce0x = 'ntp-portrait';
  };
  b9i.bW0x = function() {
    this.ch0x();
    var i9b = a8i.H9y(this.n9e, 'j-flag');
    this.bK0x = i9b[0];
    this.bZk9b = i9b[1];
    this.bZh9Y = i9b[2];
    this.bZc9T = i9b[3];
    h9c.s9j(this.bK0x, 'click', this.zU7N.g9d(this));
    h9c.s9j(this.bZk9b, 'click', this.Hl0x.g9d(this, 1));
    h9c.s9j(this.bZc9T, 'click', this.Hl0x.g9d(this, 2));
  };
  b9i.bfr8j = function(r9i) {
    this.bem7f = r9i;
    var bi9Z = (r9i - 1) * 50;
    var i9b = this.bej7c.slice(bi9Z, Math.min(bi9Z + 50, this.bej7c.length));
    this.bK0x.innerHTML = a8i.bZ0x(
      'jst-portrait',
      {
        plist: i9b,
      },
      {
        purl: l9c.bPy6s,
      }
    );
    this.bZh9Y.innerText = r9i + '/' + Math.ceil(this.bej7c.length / 50);
  };
  b9i.Hl0x = function(r9i) {
    var bYZ9Q = Math.ceil(this.bej7c.length / 50);
    if ((r9i == 1 && this.bem7f == 1) || (r9i == 2 && this.bem7f == bYZ9Q)) return;
    r9i == 1 ? this.bfr8j(this.bem7f - 1) : this.bfr8j(this.bem7f + 1);
  };
  b9i.zU7N = function(d9g) {
    var F9w = h9c.W9N(d9g, 'd:text');
    if (!F9w) return;
    var d9g = {
      url: a8i.t9k(F9w, 'url'),
      text: a8i.t9k(F9w, 'text'),
    };
    this.z9q('onselect', d9g);
    if (this.bZs9j && !d9g.stopped) {
      this.bt9k();
    }
  };
  b9i.L9C = function() {
    K9B.L9C.call(this);
    this.bfr8j(1);
  };
})();
(function() {
  var c9h = NEJ.P,
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    dw0x = c9h('nej.p'),
    be9V = c9h('nej.h'),
    I9z = c9h('nej.ut'),
    kx3x = /^[#?]+/,
    EV9M = /#(.*?)$/,
    zW7P = window,
    bfx8p = !history.pushState || dw0x.Ig0x.android || !history.auto;
  var beo7h = function(Y9P, bfA8s) {
    zW7P.history[!bfA8s ? 'pushState' : 'replaceState'](null, document.title, Y9P);
  };
  var bep7i = function() {
    return location.parse(zW7P.location.href);
  };
  beo7h = beo7h.eF0x(function(d9g) {
    if (!bfx8p) return;
    var bf9W = d9g.args;
    d9g.stopped = !0;
    Y9P = bf9W[0].replace(kx3x, '');
    !bf9W[1] ? (zW7P.location.hash = Y9P) : zW7P.location.replace('#' + Y9P);
  });
  bep7i = bep7i.eF0x(function(d9g) {
    if (!bfx8p) return;
    d9g.stopped = !0;
    var dP0x = EV9M.test(zW7P.location.href) ? RegExp.$1 : '';
    d9g.value = location.parse(dP0x.replace(kx3x, ''));
  });
  location.redirect = function(Y9P, bfA8s) {
    beo7h(Y9P, bfA8s);
    return this;
  };
  location.active = (function() {
    var ei0x, Y9P, jx2x, cW0x, Sp4t;
    var bfD8v = function(hp2x) {
      if (!!cW0x) {
        cW0x = !1;
        return;
      }
      var d9g = {
        oldValue: jx2x,
        newValue: bep7i(),
      };
      if (!!location.ignored) {
        location.ignored = !1;
      } else {
        h9c.z9q(location, 'beforeurlchange', d9g);
        if (d9g.stopped) {
          if (!!jx2x) {
            cW0x = !0;
            beo7h(jx2x.href, !0);
          }
          return;
        }
      }
      Y9P = zW7P.location.href;
      jx2x = d9g.newValue;
      h9c.z9q(location, 'urlchange', jx2x);
      be9V.bhR8J(jx2x.href);
    };
    var bJe5j = function() {
      if (Y9P != zW7P.location.href) bfD8v();
      ei0x = requestAnimationFrame(bJe5j);
    };
    return function(bJ0x) {
      if (!!Sp4t) return this;
      Sp4t = !0;
      zW7P = bJ0x || window;
      if (bfx8p && 'onhashchange' in window && dw0x.nq3x.trident2) {
        h9c.s9j(zW7P, 'hashchange', bfD8v);
        bfD8v();
      } else if (!ei0x) {
        ei0x = requestAnimationFrame(bJe5j);
      }
      return this;
    };
  })();
  location.parse = (function() {
    var gH2x = /^https?:\/\/.*?\//i,
      kx3x = /[?#]/;
    return function(Y9P) {
      var o9f = {
        href: Y9P,
      };
      Y9P = (Y9P || '').replace(gH2x, '/').split(kx3x);
      var cx0x = 1;
      if (Y9P[0] == '/' && (Y9P[1] || '').indexOf('/') == 0) cx0x = 2;
      o9f.path = Y9P.splice(0, cx0x).join('?');
      o9f.query = k9b.hy2x(Y9P.join('&'));
      return o9f;
    };
  })();
  location.same = function(Y9P) {
    return bep7i().href == Y9P;
  };
  I9z.fL1x.A9r({
    element: location,
    event: ['beforeurlchange', 'urlchange'],
  });
})();
(function() {
  var c9h = NEJ.P,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    gv1x = c9h('nm.ut');
  gv1x.uo5t = function(eq0x) {
    var hh2x = {
      text: '',
      start: 0,
      end: 0,
    };
    if (eq0x.setSelectionRange) {
      hh2x.start = eq0x.selectionStart;
      hh2x.end = eq0x.selectionEnd;
      hh2x.text =
        hh2x.start != hh2x.end ? eq0x.value.substring(hh2x.start, hh2x.end) : '';
    } else if (document.selection) {
      var i,
        bev7o = document.selection.createRange(),
        Ac7V = document.body.createTextRange();
      Ac7V.moveToElementText(eq0x);
      hh2x.text = bev7o.text;
      hh2x.bookmark = bev7o.getBookmark();
      for (
        i = 0;
        Ac7V.compareEndPoints('StartToStart', bev7o) < 0 &&
        bev7o.moveStart('character', -1) !== 0;
        i++
      ) {
        if (eq0x.value.charAt(i) == '\n') {
          i++;
        }
      }
      hh2x.start = i;
      hh2x.end = hh2x.text.length + hh2x.start;
    }
    return hh2x;
  };
  gv1x.bey7r = function(eq0x, hh2x) {
    var Ac7V;
    if (!hh2x) {
      hh2x = {
        text: '',
        start: 0,
        end: 0,
      };
    }
    eq0x.focus();
    if (eq0x.setSelectionRange) {
      eq0x.setSelectionRange(hh2x.start, hh2x.end);
    } else if (eq0x.createTextRange) {
      Ac7V = eq0x.createTextRange();
      if (eq0x.value.length === hh2x.start) {
        Ac7V.collapse(false);
        Ac7V.select();
      } else {
        Ac7V.moveToBookmark(hh2x.bookmark);
        Ac7V.select();
      }
    }
  };
  gv1x.Im0x = function(eq0x, hh2x, cH0x) {
    var hh2x = hh2x || {
      text: '',
      start: 0,
      end: 0,
    };
    var bfP8H, bJb5g, Ac7V, Ov2x, bJa5f, bIZ5e, HA0x;
    this.bey7r(eq0x, hh2x);
    if (eq0x.setSelectionRange) {
      bfP8H = eq0x.value;
      bJb5g = bfP8H.substring(0, hh2x.start) + cH0x + bfP8H.substring(hh2x.end);
      bJa5f = bIZ5e = hh2x.start + cH0x.length;
      HA0x = eq0x.scrollTop;
      eq0x.value = bJb5g;
      if (eq0x.scrollTop != HA0x) {
        eq0x.scrollTop = HA0x;
      }
      eq0x.setSelectionRange(bJa5f, bIZ5e);
    } else if (eq0x.createTextRange) {
      Ov2x = document.selection.createRange();
      Ov2x.text = cH0x;
      Ov2x.setEndPoint('StartToEnd', Ov2x);
      Ov2x.select();
    }
    h9c.z9q(eq0x, 'keyup');
  };
})();
(function() {
  var c9h = NEJ.P,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    dw0x = c9h('nej.p'),
    k9b = c9h('nej.u'),
    ca0x = c9h('nej.ut'),
    w9n = c9h('nm.w'),
    gv1x = c9h('nm.ut'),
    b9i;
  w9n.bIY5d = NEJ.C();
  b9i = w9n.bIY5d.N9E(ca0x.cI0x);
  b9i.cy0x = function(e9f) {
    this.cG0x(e9f);
  };
  b9i.bk9b = function(e9f) {
    this.bm9d(e9f);
    this.go1x = e9f.txt;
    this.HD0x = e9f.sgtsContainer;
    this.bIW5b = e9f.sgtsList[0];
    this.beE7x = e9f.sgtsItem;
    this.ph4l = e9f.rangeData;
    this.Ih0x = e9f.atIndex;
    a8i.y9p(this.beE7x[0], 'selected-item');
    this.Rz3x();
  };
  b9i.bD0x = function() {
    this.bG0x();
    h9c.mv3x(document.body, 'keyup', this.bIV5a.g9d(this));
    h9c.mv3x(document.body, 'click', this.bIU5Z.g9d(this));
  };
  b9i.Rz3x = function() {
    this.bX0x([
      [document.body, 'keyup', this.bIV5a.g9d(this)],
      [document.body, 'click', this.bIU5Z.g9d(this)],
      [this.go1x, 'keydown', this.bIT5Y.g9d(this)],
      [this.go1x, 'keypress', this.bIT5Y.g9d(this)],
      [this.bIW5b, 'click', this.bIS5X.g9d(this)],
      [this.bIW5b, 'mouseover', this.HM0x.g9d(this)],
    ]);
  };
  b9i.HM0x = function(d9g) {
    var bO0x = h9c.W9N(d9g);
    var p9g = a8i.H9y(this.HD0x, 'selected-item');
    if (a8i.bE0x(bO0x, 'j-sgt')) {
      a8i.x9o(p9g[0], 'selected-item');
      a8i.y9p(bO0x, 'selected-item');
    }
  };
  b9i.bIV5a = function(d9g) {
    var p9g = a8i.H9y(this.HD0x, 'selected-item');
    var bp9g = this.beE7x.length;
    var kc3x = d9g.keyCode || d9g.which;
    var r9i, j9a;
    switch (kc3x) {
      case 38:
        r9i =
          a8i.gy1x(p9g[0], 'data-index') - 1 < 0
            ? bp9g - 1
            : a8i.gy1x(p9g[0], 'data-index') - 1;
        a8i.x9o(p9g[0], 'selected-item');
        a8i.y9p(this.beE7x[r9i], 'selected-item');
        break;
      case 40:
        r9i =
          parseInt(a8i.gy1x(p9g[0], 'data-index')) + 1 >= bp9g
            ? 0
            : parseInt(a8i.gy1x(p9g[0], 'data-index')) + 1;
        a8i.x9o(p9g[0], 'selected-item');
        a8i.y9p(this.beE7x[r9i], 'selected-item');
        break;
      case 13:
        this.bIS5X(d9g);
        break;
      case 27:
        this.oz4D();
        break;
      case 32:
        var bo9f = this.go1x.value;
        var r9i = gv1x.uo5t(this.go1x);
        if (bo9f.charAt(r9i.start - 1) !== ' ') return;
        this.oz4D();
        break;
    }
  };
  b9i.bIT5Y = function(d9g) {
    var kc3x = d9g.keyCode || d9g.which;
    if (kc3x === 13 || kc3x === 38 || kc3x === 40) {
      h9c.cr0x(d9g);
      d9g.keyCode = 0;
      d9g.which = 0;
      d9g.returnvalue = false;
    }
  };
  b9i.bIU5Z = function(d9g) {
    var bO0x = d9g.target || d9g.srcElement;
    if (bO0x === this.go1x) return;
    this.oz4D();
  };
  b9i.bIS5X = function(d9g) {
    h9c.bh9Y(d9g);
    var p9g = a8i.H9y(this.HD0x, 'selected-item')[0];
    var sD5I = d9g.target || d9g.srcElement;
    var u9l = d9g.type;
    if (a8i.bE0x(sD5I, 'lst')) return;
    if (u9l == 'click') {
      a8i.x9o(p9g, 'selected-item');
      a8i.y9p(sD5I, 'selected-item');
    } else sD5I = p9g;
    var j9a = sD5I.innerHTML + ' ';
    this.oz4D();
    var hh2x = this.ph4l;
    hh2x.start = this.Ih0x + 1;
    if (dw0x.ds0x.browser == 'ie' && dw0x.ds0x.version < '9.0') {
      this.go1x.value =
        this.go1x.value.substring(0, hh2x.start) +
        this.go1x.value.substring(hh2x.end, this.go1x.value.length);
      hh2x.end = hh2x.start;
    }
    gv1x.Im0x(this.go1x, hh2x, j9a);
    h9c.z9q(this.go1x, 'keyup');
  };
  b9i.oz4D = function(d9g) {
    if (!!this.HD0x) a8i.ba9R(this.HD0x, 'display', 'none');
    this.T9K();
  };
  b9i.wk6e = function(d9g) {
    if (!!this.HD0x) a8i.ba9R(this.HD0x, 'display', 'block');
  };
})();
(function() {
  var c9h = NEJ.P,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    v9m = c9h('nej.j'),
    w9n = c9h('nm.w'),
    ca0x = c9h('nej.ut'),
    bC0x = c9h('nej.ui'),
    b9i;
  var bYw9n =
    '.u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}';
  var bYv9m = a8i.ex0x('m-wgt-atlist');
  var iW2x = a8i.sK5P(bYw9n);
  w9n.bIP5U = NEJ.C();
  b9i = w9n.bIP5U.N9E(bC0x.eg0x);
  b9i.cy0x = function(e9f) {
    this.fQ1x = {};
    this.cG0x();
  };
  b9i.bk9b = function(e9f) {
    this.fQ1x.txt = a8i.B9s(e9f.target);
    this.fQ1x.data = e9f.data;
    this.fQ1x.offset = e9f.offset;
    this.fQ1x.rangeData = e9f.rangeData;
    this.fQ1x.atIndex = e9f.atIndex;
    this.bYq9h(e9f);
    this.bm9d(e9f);
    this.fQ1x.sgtsContainer = this.n9e;
    this.fQ1x.sgtsList = a8i.H9y(this.n9e, 'lst');
    this.fQ1x.sgtsItem = a8i.H9y(this.n9e, 'f-thide');
    this.SZ4d(e9f);
    this.bYp9g = w9n.bIY5d.A9r(this.fQ1x);
  };
  b9i.bD0x = function(e9f) {
    this.bG0x();
    this.bYp9g.T9K();
  };
  b9i.cf0x = function() {
    this.ma3x = iW2x;
  };
  b9i.bW0x = function() {
    this.ch0x();
  };
  b9i.bYq9h = function(e9f) {
    this.n9e = a8i.dy0x(a8i.iB2x(a8i.bZ0x(bYv9m, e9f.data)));
  };
  b9i.SZ4d = function(e9f) {
    var bIL5Q = a8i.H9y(this.n9e, 'selected-item')[0];
    if (bIL5Q) a8i.x9o(bIL5Q, 'selected-item');
    var cY0x = e9f.offset.x + 'px';
    var hu2x = e9f.offset.y + 'px';
    a8i.ba9R(this.n9e, 'left', cY0x);
    a8i.ba9R(this.n9e, 'top', hu2x);
  };
})();
(function() {
  var c9h = NEJ.P,
    v9m = c9h('nej.j'),
    gv1x = c9h('nm.ut');
  gv1x.bIK4O = function(bo9f) {
    if (!GUser || !GUser.userId || GUser.userId <= 0) return;
    var df0x = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
    var LD1x = bo9f.match(df0x) || [];
    for (var bc9T = 0; bc9T < LD1x.length; bc9T++) {
      LD1x[bc9T] = LD1x[bc9T].split('@')[1];
    }
    LD1x = LD1x.reverse();
    var ij2x = GUser.userId;
    var bYg9X = v9m.sW5b('mentioners' + ij2x) || [];
    var jW2x = LD1x.concat(bYg9X);
    if (jW2x.length > 10) jW2x = jW2x.slice(0, 10);
    v9m.vS6M('mentioners' + ij2x, jW2x);
  };
  gv1x.bYd9U = function() {
    if (!GUser || !GUser.userId || GUser.userId <= 0) return;
    var ij2x = GUser.userId;
    return v9m.sW5b('mentioners' + ij2x) || [];
  };
})();
(function() {
  var c9h = NEJ.P,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    dw0x = c9h('nej.p'),
    v9m = c9h('nej.j'),
    k9b = c9h('nej.u'),
    ca0x = c9h('nej.ut'),
    w9n = c9h('nm.w'),
    gv1x = c9h('nm.ut'),
    l9c = c9h('nm.x'),
    b9i;
  var FullscreenApi = l9c.Ee9V || {};
  w9n.bIF4J = NEJ.C();
  b9i = w9n.bIF4J.N9E(ca0x.cI0x);
  b9i.cy0x = function(e9f) {
    this.cG0x(e9f);
    this.bIB4F();
  };
  b9i.bk9b = function(e9f) {
    this.bm9d(e9f);
    this.go1x = e9f.txt;
    this.n9e = e9f.body;
    this.bIA4E = e9f.before;
    this.OC2x = e9f.flag;
    this.bXN9E = e9f.after;
    this.qt4x = [];
    if (dw0x.ds0x.browser != 'ie') {
      setTimeout(
        function() {
          this.mk3x();
        }.g9d(this),
        0
      );
    }
    this.Rz3x();
  };
  b9i.bD0x = function() {
    this.bG0x();
    if (this.ul5q) this.ul5q.T9K();
    delete this.ul5q;
  };
  b9i.Rz3x = function() {
    this.bX0x([
      [this.go1x, 'keyup', this.bIz4D.g9d(this, this.go1x)],
      [this.go1x, 'click', this.bIz4D.g9d(this, this.go1x)],
      [this.go1x, 'focus', this.mk3x.g9d(this)],
    ]);
  };
  b9i.mk3x = function(d9g) {
    this.ph4l = gv1x.uo5t(this.go1x);
  };
  b9i.bIB4F = function() {
    if (!GUser || !GUser.userId || GUser.userId <= 0) {
      window.GFollowers = [];
      return;
    }
    var dn0x = window.GUser.userId;
    var Y9P = '/api/user/getfollows/' + dn0x;
    var ge1x = v9m.bn9e(Y9P, {
      sync: false,
      method: 'get',
      query: 'offset = 0&limit=1000&order=true',
      onload: function(j9a) {
        window.GFollowers = JSON.parse(j9a).follow;
      }.g9d(this),
      onerror: function(j9a) {},
      onbeforerequest: function(j9a) {},
    });
  };
  b9i.bIy4C = function(index) {
    var D9u = this.go1x.value,
      bi9Z,
      bgE8w,
      bgF8x,
      OF2x;
    this.bIA4E.innerHTML = k9b
      .dH0x(D9u.substr(0, index))
      .replace(/\n/g, '<br/>')
      .replace(
        /\s/g,
        '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>'
      );
    var mC3x = a8i.H9y(this.bIA4E, 'j-test');
    for (var bc9T = 0; bc9T < mC3x.length; bc9T++) {
      mC3x[bc9T].innerText = ' ';
    }
    this.OC2x.innerHTML = D9u.charAt(index);
    this.bXN9E.innerHTML = k9b.dH0x(D9u.substr(index + 1, D9u.length));
    OF2x = parseInt(a8i.de0x(this.go1x, 'lineHeight'));
    a8i.ba9R(this.n9e, 'display', 'block');
    bgE8w = a8i.hQ2x(this.OC2x, this.n9e);
    bgF8x = a8i.hQ2x(this.go1x);
    a8i.ba9R(this.n9e, 'display', 'none');
    var cY0x = bgE8w.x + bgF8x.x;
    var hu2x = bgE8w.y + bgF8x.y + OF2x;
    bi9Z = {
      x: cY0x,
      y: hu2x,
    };
    this.bXI9z(bi9Z);
  };
  b9i.bIz4D = function(eq0x, d9g) {
    h9c.cr0x(d9g);
    var eq0x = eq0x;
    var D9u = eq0x.value;
    var bp9g = D9u.length;
    var r9i = gv1x.uo5t(eq0x).start;
    var bIw4A = 0;
    var kc3x = d9g.keyCode || d9g.which;
    var jW2x;
    this.ph4l = gv1x.uo5t(eq0x);
    var bIv4z = false;
    for (var i = 1; i < 20; i++) {
      jW2x = r9i - i;
      if (D9u.charAt(jW2x) === ' ') break;
      if (D9u.charAt(jW2x) === '@') {
        bIv4z = true;
        this.Ih0x = bIw4A = jW2x;
        break;
      }
    }
    if (bIv4z && d9g.shiftKey === false && kc3x !== 38 && kc3x !== 40) {
      if (kc3x !== 27 && kc3x !== 13) {
        this.ul5q ? this.ul5q.T9K() : null;
        this.bIy4C(bIw4A);
      }
    } else if (kc3x !== 38 && kc3x !== 40 && d9g.keyCode !== 32) {
      this.ul5q ? this.ul5q.T9K() : null;
    }
  };
  b9i.bXI9z = function(bi9Z) {
    var bi9Z = bi9Z;
    var j9a = this.vQ6K();
    var e9f = {
      parent: document[FullscreenApi.fullscreenElement] || document.body,
      offset: bi9Z,
      data: j9a,
      target: this.go1x,
      rangeData: this.ph4l,
      atIndex: this.Ih0x,
    };
    this.ul5q ? this.ul5q.T9K() : null;
    this.ul5q = w9n.bIP5U.A9r(e9f);
  };
  b9i.vQ6K = function() {
    var bXC9t = gv1x.uo5t(this.go1x).start;
    var bXw9n = this.Ih0x + 1;
    var bIm4q = gv1x.bYd9U() || [];
    var bIl4p = [];
    var bv9m = this.go1x.value.substring(bXw9n, bXC9t).toLowerCase();
    bv9m = bv9m.replace(/\[/g, '\\[');
    bv9m = bv9m.replace(/\]/g, '\\]');
    if (window.GFollowers) {
      this.qt4x = window.GFollowers[0] ? window.GFollowers : [];
    } else this.qt4x = [];
    if (!this.qt4x[0]) this.bIB4F();
    for (var bc9T = 0; bc9T < bIm4q.length; bc9T++) {
      for (var v9m = 0; v9m < this.qt4x.length; v9m++) {
        if (this.qt4x[v9m].nickname == bIm4q[bc9T]) bIl4p.push(this.qt4x[v9m]);
      }
    }
    this.qt4x = k9b.cqL4P(this.qt4x, bIl4p, {
      union: true,
      begin: true,
    });
    var bXq9h = this.qt4x.length;
    var beN7G = [];
    var RQ3x, RH3x;
    if (!this.qt4x[0])
      return {
        suggests: beN7G,
      };
    for (var i = 0; i < bXq9h; i++) {
      RQ3x = this.qt4x[i].nickname.toLowerCase().search(bv9m);
      RH3x = this.qt4x[i].py ? this.qt4x[i].py.toLowerCase().search(bv9m) : -1;
      if (RQ3x !== -1 || RH3x != -1) beN7G.push(this.qt4x[i]);
      if (beN7G.length === 10) break;
    }
    return {
      suggests: beN7G,
    };
  };
  b9i.Oj2x = function() {
    var hh2x = this.ph4l || {
      text: '',
      start: 0,
      end: 0,
    };
    h9c.z9q(this.go1x, 'focus');
    gv1x.Im0x(this.go1x, hh2x, '@');
    this.ph4l = gv1x.uo5t(this.go1x);
    this.Ih0x = hh2x.start;
    this.bIy4C(this.Ih0x);
  };
  b9i.Hb9S = function() {
    if (this.ul5q) this.ul5q.T9K();
  };
})();
(function() {
  var c9h = NEJ.P,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    v9m = c9h('nej.j'),
    w9n = c9h('nm.w'),
    ca0x = c9h('nej.ut'),
    bC0x = c9h('nej.ui'),
    b9i;
  var bXo9f =
    '#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}';
  var bXm9d =
    '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
  var gh1x = a8i.iB2x(bXm9d);
  var iW2x = a8i.sK5P(bXo9f);
  w9n.PM3x = NEJ.C();
  b9i = w9n.PM3x.N9E(bC0x.eg0x);
  b9i.cy0x = function(e9f) {
    this.fQ1x = {};
    this.cG0x();
  };
  b9i.bk9b = function(e9f) {
    this.bm9d(e9f);
    this.fQ1x.txt = a8i.B9s(e9f.target);
    this.Vj4n();
    this.Rt3x = w9n.bIF4J.A9r(this.fQ1x);
  };
  b9i.bD0x = function(e9f) {
    this.bG0x();
    this.Rt3x.T9K();
  };
  b9i.cf0x = function() {
    this.ce0x = gh1x;
    this.ma3x = iW2x;
  };
  b9i.bW0x = function() {
    this.ch0x();
    var i9b = a8i.dj0x(a8i.B9s(this.n9e));
    this.fQ1x.body = this.n9e;
    this.fQ1x.before = i9b[0];
    this.fQ1x.flag = i9b[1];
    this.fQ1x.after = i9b[2];
  };
  b9i.Vj4n = function() {
    var px4B = [
      'width',
      'borderWidth',
      'border-style',
      'outline',
      'marginLeft',
      'marginTop',
      'marginRight',
      'marginBottom',
      'height',
      'paddingLeft',
      'paddingTop',
      'fontSize',
      'wordWrap',
      'fontFamily',
      'lineHeight',
      'overflowX',
      'overflowY',
    ];
    for (var i = 0; i < px4B.length; i++) {
      if (px4B[i] === 'width' && a8i.de0x(this.fQ1x.txt, px4B[i]) == '100%') {
        var bXl9c = this.fQ1x.txt.offsetWidth;
        if (!bXl9c) {
          setTimeout(
            function() {
              a8i.ba9R(this.n9e, px4B[i], this.fQ1x.txt.offsetWidth + 'px');
            }.g9d(this),
            300
          );
        } else {
          a8i.ba9R(this.n9e, px4B[i], this.fQ1x.txt.offsetWidth + 'px');
        }
        continue;
      }
      a8i.ba9R(this.n9e, px4B[i], a8i.de0x(this.fQ1x.txt, px4B[i]));
    }
  };
  b9i.Oj2x = function() {
    this.Rt3x.Oj2x();
  };
  b9i.Hb9S = function() {
    this.Rt3x.Hb9S();
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    br9i = NEJ.F,
    fz1x = NEJ.R,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    I9z = c9h('nej.ut'),
    kX3x = c9h('nm.c'),
    R9I = {},
    b9i;
  if (!!kX3x.bhm8e) return;
  kX3x.bhm8e = NEJ.C();
  b9i = kX3x.bhm8e.N9E(I9z.cI0x);
  b9i.cy0x = function() {
    this.cG0x();
  };
  b9i.bk9b = function(e9f) {
    this.bm9d(e9f);
  };
  b9i.bD0x = function() {
    this.bG0x();
  };
  b9i.HJ0x = function(fe1x, cN0x, beK7D) {
    if (R9I[fe1x]) {
      this.gw1x('register commonJST[' + fe1x + '] duplicate');
      return;
    }
    if (!k9b.gJ2x(cN0x)) {
      cN0x = ctl.comJST.bXk9b(fe1x, cN0x, beK7D);
    }
    R9I[fe1x] = cN0x;
  };
  b9i.bXj9a = function(beH7A) {
    if (k9b.eI0x(beH7A)) {
      k9b.bd9U(
        beH7A,
        function(p9g) {
          ctl.comJST.HJ0x.apply(this, p9g);
        },
        this
      );
    } else if (k9b.lO3x(beH7A)) {
      k9b.eD0x(beH7A, function(eS1x, J9A) {
        ctl.comJST.HJ0x(J9A, eS1x);
      });
    }
  };
  b9i.bXk9b = function(fe1x, vA6u, beK7D) {
    vA6u = vA6u || {};
    NEJ.X(vA6u, {
      comJST: this.nu3x,
    });
    if (vA6u.resetDataName && !k9b.eI0x(vA6u.resetDataName)) {
      vA6u.resetDataName = [vA6u.resetDataName];
    }
    return function() {
      var j9a = arguments[0],
        jX2x = arguments[1];
      if (vA6u.resetDataName) {
        var jW2x = {};
        for (var i = 0, ii = vA6u.resetDataName.length; i < ii; i++) {
          jW2x[vA6u.resetDataName[i]] = arguments[i];
        }
        j9a = jW2x;
        jX2x = arguments[ii];
      }
      NEJ.X(j9a, vA6u, dW0x);
      if (beK7D) {
        jX2x = jX2x || {};
        NEJ.X(jX2x, beK7D);
      }
      return a8i.bZ0x(fe1x, j9a, jX2x);
    };
  };
  b9i.nu3x = function(fe1x) {
    if (!R9I[fe1x]) {
      this.gw1x('commonJST[' + fe1x + '] is unregister');
      return '';
    } else {
      return R9I[fe1x].apply(null, fz1x.slice.call(arguments, 1));
    }
  };
  b9i.dump = function() {
    return R9I;
  };
  b9i.gw1x = function(bXi9Z) {
    if (console && console.log) {
      console.log(bXi9Z);
    }
  };
  var dW0x = function(eS1x, J9A) {
    return J9A == 'resetDataName';
  };
  c9h('ctl').comJST = kX3x.bhm8e.gt1x();
  a8i.cBt6n({
    comJST: c9h('ctl').comJST.nu3x,
  });
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    br9i = NEJ.F,
    fz1x = NEJ.R,
    a8i = c9h('nej.e'),
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    I9z = c9h('nej.ut'),
    kX3x = c9h('nm.c'),
    l9c = c9h('nm.x'),
    R9I = {},
    b9i;
  if (!!kX3x.bhA8s) return;
  kX3x.bhA8s = NEJ.C();
  b9i = kX3x.bhA8s.N9E(I9z.cI0x);
  b9i.cy0x = function() {
    this.cG0x();
    var e9f = {
      'com-mv-artists': function(fS1x, ec0x, Vz4D, bhC8u) {
        return a8i.bZ0x('com-mv-artists', {
          artists: fS1x,
          clazz: ec0x,
          boxClazz: bhC8u,
          mark:
            Vz4D ||
            function(cL0x) {
              return cL0x;
            },
          escape: k9b.dH0x,
          comJST: ctl.comJST.nu3x,
        });
      },
      'com-album-artists': function(fS1x, ec0x, Vz4D, bhC8u) {
        return a8i.bZ0x('com-album-artists', {
          artists: fS1x,
          clazz: ec0x,
          boxClazz: bhC8u,
          mark:
            Vz4D ||
            function(cL0x) {
              return cL0x;
            },
          escape: k9b.dH0x,
          comJST: ctl.comJST.nu3x,
        });
      },
      'com-artists-title': {
        resetDataName: ['artists'],
        escape: k9b.dH0x,
      },
      'com-user-type': function(do0x, ec0x, lB3x, wb6V, bIj4n) {
        return a8i.bZ0x('com-user-type', {
          x: do0x,
          clazz: ec0x || '',
          clazz2: typeof bIj4n == 'undefined' ? 'icn' : bIj4n,
          before: lB3x || '',
          after: wb6V || '',
          isEmptyObject: l9c.bOO6I,
        });
      },
    };
    for (var C9t in e9f) {
      ctl.comJST.HJ0x(C9t, e9f[C9t]);
    }
  };
  b9i.bk9b = function(e9f) {
    this.bm9d(e9f);
  };
  b9i.bD0x = function() {
    this.bG0x();
  };
  c9h('ctl').comJSTUtil = kX3x.bhA8s.gt1x();
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    a8i = c9h('nej.e'),
    dw0x = c9h('nej.p'),
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    I9z = c9h('nej.ut'),
    v9m = c9h('nej.j'),
    w9n = c9h('nm.w'),
    gv1x = c9h('nm.ut'),
    q9h = c9h('nm.d'),
    l9c = c9h('nm.x'),
    m9d = c9h('nm.l'),
    bhE8w = [2, 3],
    dZ0x = ['sn', 'db'],
    b9i,
    K9B,
    bXf9W = {
      13: 'playlist',
      17: 'djprogram',
      18: 'song',
      19: 'album',
      20: 'artist',
      21: 'mv',
      24: 'topic',
      25: 'activity',
      70: 'djradio',
      38: 'concert',
      39: 'video',
      41: 'cloudvideo',
    },
    beD7w = {
      djprogram: '节目',
      album: '专辑',
      playlist: '歌单',
      song: '单曲',
      yunsong: '单曲',
      artist: '歌手',
      mv: 'MV',
      topic: '音乐专栏',
      djradio: '电台',
      concert: '演出',
      video: '视频',
      cloudvideo: '视频',
    },
    bIg4k = {
      djprogram: ' - ',
      album: ' - ',
      playlist: ' by ',
      song: ' - ',
      yunsong: ' - ',
      artist: '',
      mv: ' - ',
      djradio: ' by ',
      cloudvideo: ' by ',
    },
    bXb9S = {
      0: 13,
      1: 17,
      3: 19,
      4: 18,
      5: 21,
      6: 24,
      14: 70,
      17: 20,
    },
    HE0x = {
      pubEventWithPics: false,
      pubEventWithoutResource: false,
      pubEventWithPictureForbiddenNotice: '等级达到Lv.4，即可添加图片',
    },
    FullscreenApi = l9c.Ee9V || {};
  m9d.oJ4N = NEJ.C();
  b9i = m9d.oJ4N.N9E(m9d.el0x);
  K9B = m9d.oJ4N.ct0x;
  b9i.bk9b = function(e9f) {
    if (e9f.onclose === undefined) {
      e9f.onclose = this.bId4h.g9d(this);
    }
    this.bm9d(e9f);
    this.Da8S = e9f.isPub;
    this.jK2x = e9f.rid || -1;
    this.eu0x = e9f.type || -1;
    this.bhU8M = e9f.purl;
    this.OO2x = e9f.name || '';
    this.Pj2x = e9f.author || '';
    this.bhY8Q = e9f.authors || '';
    this.beB7u = e9f.actId;
    this.beA7t = e9f.actName;
    this.bIc4g = e9f.title;
    this.bew7p = {};
    this.bWU9L = e9f.mesg || '';
    this.bWT9K = e9f.placeholder || '说点什么吧';
    this.bik8c = e9f.hideTip;
    this.bWQ9H = e9f.videoJumpUrl;
    var i9b,
      eV1x = +new Date();
    try {
      i9b = top.localCache.B9s('user') || {};
    } catch (e) {
      i9b = {};
    }
    for (var i = 0, i9b = i9b.bindings || [], eM0x; i < i9b.length; ++i) {
      eM0x = !i9b[i].tokenJsonStr ? null : JSON.parse(i9b[i].tokenJsonStr);
      if (!eM0x || eM0x.expires_in === undefined) continue;
      var bet7m = parseInt(eM0x.expires_in),
        bes7l = parseInt(i9b[i].refreshTime),
        bWP9G = (bet7m + bes7l) * 1000 - 5 * 60 * 1000;
      if (bWP9G > eV1x) this.bew7p[i9b[i].type] = !0;
    }
    this.wu6o = w9n.Gn9e.A9r({
      parent: this.ber7k,
      err: this.bHU4Y,
    });
    if (this.hw2x) {
      this.hw2x.T9K();
    }
    this.hw2x = w9n.PM3x.A9r({
      parent: document.body,
      target: this.ez0x,
    });
    if (this.eu0x == 24 || this.eu0x == 21 || this.eu0x == 41 || this.Hh0x()) {
      this.zR7K.style.display = 'none';
    } else {
      this.zR7K.style.display = '';
      this.oW4a = w9n.bpe0x.A9r({
        parent: this.biz8r,
        button: this.zR7K,
        onstartupload: this.bHT4X.g9d(this, true),
        onfinishupload: this.bHT4X.g9d(this, false),
      });
    }
    if (this.Hh0x()) {
      this.qf4j.innerText = '';
      a8i.y9p(this.qf4j, 'info-video');
      a8i.y9p(this.biC8u, 'f-hide');
    } else {
      a8i.x9o(this.biC8u, 'f-hide');
    }
  };
  b9i.bD0x = function() {
    this.bG0x();
    if (this.wu6o) {
      this.wu6o.T9K();
      delete this.wu6o;
    }
    if (this.hw2x) {
      this.hw2x.T9K();
      delete this.hw2x;
    }
    if (this.oW4a) {
      this.oW4a.T9K();
      delete this.oW4a;
    }
    if (this.mA3x) {
      this.mA3x.T9K();
      delete this.mA3x;
    }
  };
  b9i.cf0x = function() {
    this.ce0x = 'm-wgt-sharewin';
  };
  b9i.bW0x = function() {
    this.ch0x();
    this.bHS4W = a8i.dj0x(this.n9e)[0];
    var bu9l = a8i.H9y(this.n9e, 'j-flag');
    this.qU4Y = bu9l.shift();
    this.bHU4Y = bu9l.shift();
    this.ber7k = bu9l.shift();
    this.ez0x = bu9l.shift();
    this.qf4j = bu9l.shift();
    this.biH8z = bu9l.shift();
    this.bWG9x = bu9l.shift();
    this.zR7K = bu9l.shift();
    this.cv0x = bu9l.shift();
    this.biz8r = bu9l.shift();
    this.Cz8r = bu9l.shift();
    this.cGV7O = bu9l.shift();
    this.biC8u = bu9l.shift();
    this.em0x = bu9l.shift();
    this.bef7Y = a8i.H9y(this.biC8u, 'j-t');
    this.BR8J = I9z.EK9B.A9r({
      list: a8i.dj0x(this.qU4Y),
      selected: 'z-slt',
      onchange: this.biO8G.g9d(this),
    });
    if (dw0x.ds0x.browser == 'ie' && dw0x.ds0x.version < '8.0') {
      a8i.ba9R(this.ber7k, 'position', 'relative');
      a8i.ba9R(this.ber7k, 'zIndex', '10');
    }
    h9c.s9j(window, 'snsbind', this.Tj4n.g9d(this));
    h9c.s9j(this.ez0x, 'input', this.fN1x.g9d(this));
    h9c.s9j(this.ez0x, 'keyup', this.uM6G.g9d(this));
    h9c.s9j(this.n9e, 'click', this.cK0x.g9d(this));
    this.S9J = q9h.blj9a.A9r();
    this.S9J.s9j('onshareall', this.bee7X.g9d(this, 0));
    this.S9J.s9j('onshareerror', this.ja2x.g9d(this));
    this.S9J.s9j('onshareprivate', this.bee7X.g9d(this, 1));
    this.bed7W = q9h.xJ7C.A9r();
    this.gw1x = q9h.hP2x.A9r();
    try {
      this.TA4E = top.api.sharePermission;
    } catch (e) {}
    if (!this.TA4E) {
      this.TA4E = HE0x;
      v9m.bn9e('/api/event/user/permission', {
        type: 'json',
        onload: function(d9g) {
          if (d9g.code == 200) {
            this.TA4E = NEJ.EX(HE0x, d9g);
          }
        }.g9d(this),
      });
    }
  };
  b9i.biO8G = function(d9g) {
    d9g.index == 0 ? a8i.x9o(this.bHS4W, 'm-plshare') : a8i.y9p(this.bHS4W, 'm-plshare');
    this.ber7k.style.display = d9g.index == 0 ? 'none' : '';
    this.bWG9x.style.display = d9g.index == 0 ? '' : 'none';
    this.zR7K.style.display = d9g.index == 0 ? '' : 'none';
    if (this.eu0x == 24 || this.eu0x == 21) {
      this.zR7K.style.display = 'none';
    }
    this.bHU4Y.style.display = 'none';
    this.ez0x.value = '';
    this.cg0x();
    this.GO9F();
    if (d9g.index == 0) {
      var cB0x = a8i.de0x(this.ez0x, 'width');
      if (cB0x == 'auto' || !cB0x) {
        return;
      } else {
        if (this.hw2x) {
          this.hw2x.T9K();
        }
        this.hw2x = w9n.PM3x.A9r({
          parent: document.body,
          target: this.ez0x,
        });
      }
      this.biz8r.style.display = '';
    } else {
      if (this.hw2x) {
        this.hw2x.T9K();
        delete this.hw2x;
      }
      this.biz8r.style.display = 'none';
    }
  };
  b9i.cK0x = function(d9g) {
    var f9e = h9c.W9N(d9g, 'd:action');
    if (!f9e) return;
    if (a8i.t9k(f9e, 'action') == 'search') {
      h9c.cr0x(d9g);
    } else if (a8i.t9k(f9e, 'default') === undefined) {
      h9c.cr0x(d9g);
    }
    switch (a8i.t9k(f9e, 'action')) {
      case 'txt':
        this.mk3x();
        break;
      case 'search':
        if (this.Hh0x()) {
          top.location.href = this.bWQ9H;
        } else if (this.Da8S && this.eu0x != 24) {
          if (this.mA3x) {
            this.mA3x.T9K();
          }
          this.mA3x = w9n.bum1x.A9r({
            parent: this.n9e.parentNode,
            onfinish: this.biU8M.g9d(this),
            oncancel: this.bWC9t.g9d(this),
          });
          this.biW8O = true;
          this.n9e.style.display = 'none';
          this.GC9t(this.jK2x < 0 ? '添加音乐' : '更换音乐');
        }
        break;
      case 'at':
        h9c.te5j(d9g);
        !!this.hq2x && this.hq2x.bt9k();
        this.hw2x.Oj2x();
        this.gk1x();
        break;
      case 'emot':
        h9c.te5j(d9g);
        !!this.hw2x && this.hw2x.Hb9S();
        if (!this.hq2x) {
          this.hq2x = m9d.Is0x.A9r({
            parent: this.biH8z,
          });
          this.hq2x.s9j('onselect', this.zU7N.g9d(this));
        }
        this.hq2x.L9C();
        break;
      case 'upload':
        break;
      case 'sns':
        h9c.bh9Y(d9g);
        var biZ8R,
          bv9m,
          u9l = a8i.t9k(f9e, 'type');
        if (!this.bew7p[u9l]) {
          biZ8R = f9e.href.split('?');
          bv9m = k9b.hy2x(biZ8R[1]);
          bv9m['csrf_token'] = v9m.gB1x('__csrf');
          top.open(biZ8R[0] + '?' + k9b.cF0x(bv9m));
          return;
        }
        var bz0x = {
          2: 'sn',
          3: 'db',
          4: 'rr',
        };
        l9c.Cy8q(f9e, 'u-slg-' + bz0x[u9l] + '-gray');
        break;
      case 'close':
        !!this.hq2x && this.hq2x.bt9k();
        this.bId4h();
        break;
      case 'share':
        h9c.bh9Y(d9g);
        if (this.Hh0x()) {
          if (!a8i.bE0x(f9e, 'u-btn2-2-dis')) {
            this.bWA9r();
          }
        } else if (a8i.bE0x(f9e, 'u-btn2-2-dis')) {
          if (!this.TA4E.pubEventWithoutResource && this.jK2x < 0) {
            this.bWw9n();
          } else {
          }
        } else if (
          this.jK2x < 0 &&
          !this.ez0x.value &&
          this.oW4a &&
          this.oW4a.QZ3x().length == 0
        ) {
          m9d.Z9Q.L9C({
            type: 2,
            tip: '请输入内容',
          });
        } else {
          this.bWv9m();
        }
        break;
    }
  };
  b9i.bWw9n = (function() {
    var tb5g = 0,
      bjf8X = function() {
        if (tb5g % 2) {
          a8i.x9o(this.qf4j, 'z-show');
        } else {
          a8i.y9p(this.qf4j, 'z-show');
        }
        tb5g++;
        if (tb5g > 5) {
          clearInterval(ei0x);
        }
      },
      ei0x;
    return function() {
      tb5g = 0;
      clearInterval(ei0x);
      ei0x = setInterval(bjf8X.g9d(this), 200);
    };
  })();
  b9i.Tj4n = function(o9f) {
    o9f = o9f.result;
    this.bew7p[o9f.type] = !0;
    var r9i = k9b.di0x(bhE8w, o9f.type),
      ci0x = 'u-slg-' + dZ0x[r9i] + '-gray';
    a8i.x9o(this.bef7Y[r9i], ci0x);
  };
  b9i.biU8M = function(by0x) {
    var j9a = by0x.data;
    this.jK2x = by0x.id;
    this.eu0x = by0x.type;
    this.n9e.style.display = '';
    this.GC9t(this.bIc4g);
    this.mA3x && this.mA3x.T9K();
    this.biW8O = false;
    this.bhU8M = j9a.picUrl;
    this.OO2x = j9a.title || '';
    this.Pj2x = j9a.author || '';
    this.bhY8Q = j9a.authors || '';
    this.bWs9j();
    this.bdL7E();
  };
  b9i.bWC9t = function() {
    this.mA3x && this.mA3x.T9K();
    this.n9e.style.display = '';
    this.GC9t(this.bIc4g);
    this.biW8O = false;
    this.bdL7E();
  };
  b9i.zU7N = function(d9g) {
    var bo9f = '[' + d9g.text + ']';
    gv1x.Im0x(this.ez0x, this.ph4l, bo9f);
    this.gk1x();
  };
  b9i.fN1x = function(d9g) {
    dw0x.ds0x.browser == 'ie' && dw0x.ds0x.version < '7.0'
      ? setTimeout(this.gk1x.g9d(this), 0)
      : this.gk1x();
  };
  b9i.uM6G = function(d9g) {
    this.mk3x();
    if (d9g.keyCode == 8) this.gk1x();
  };
  b9i.gk1x = function() {
    this.mk3x();
    this.GO9F();
  };
  b9i.GO9F = function() {
    var bp9g = Math.ceil(k9b.fy1x(this.ez0x.value.trim()) / 2);
    this.cv0x.innerText = 140 - bp9g;
    bp9g > 140
      ? a8i.fi1x(this.cv0x, 's-fc4', 's-fc6')
      : a8i.fi1x(this.cv0x, 's-fc6', 's-fc4');
  };
  b9i.bWv9m = function() {
    if (this.cO0x()) return;
    if (k9b.fy1x(this.ez0x.value.trim()) > 280) {
      this.cg0x('字数超过140个字符');
      return;
    }
    var u9l = this.BR8J.tI5N(),
      j9a;
    if (u9l == 0) {
      for (var i = 0, Ix0x = []; i < this.bef7Y.length; ++i) {
        if (!a8i.bE0x(this.bef7Y[i], 'u-slg-' + dZ0x[i] + '-gray')) Ix0x.push(bhE8w[i]);
      }
      this.cO0x(!0);
      j9a = {
        id: this.jK2x,
        msg: this.ez0x.value.trim(),
        type: this.bdK7D(this.eu0x),
        picUrl: this.bhU8M,
        snsTypes: Ix0x.join(','),
        isPub: this.Da8S,
      };
      if (this.beB7u > 0) {
        j9a.actId = this.beB7u;
        if (this.beA7t) {
          j9a.msg = '#' + this.beA7t + '#' + j9a.msg;
        }
      }
      var oh4l = this.oW4a && this.oW4a.QZ3x();
      if (oh4l && oh4l.length) {
        j9a.pics = oh4l;
      }
      this.S9J.cep1x(j9a);
    } else {
      var sR5W = this.wu6o.Sw4A();
      if (sR5W.length <= 0) {
        this.cg0x('请至少选择一位好友');
        return;
      }
      this.S9J.ceo1x({
        data: {
          id: this.jK2x,
          msg: this.ez0x.value.trim(),
          type: this.bdK7D(this.eu0x == 41 ? 39 : this.eu0x),
          userIds: '[' + sR5W.join(',') + ']',
        },
      });
    }
  };
  b9i.bWA9r = function() {
    if (this.cO0x()) {
      return;
    }
    this.gw1x.eU1x('click', {
      target: 'share',
      targetid: 'button',
      page: 'sharevideo',
    });
    if (k9b.fy1x(this.ez0x.value.trim()) > 280) {
      this.cg0x('字数超过140个字符');
      return;
    }
    this.cO0x(!0);
    var j9a = {
        msg: this.ez0x.value.trim() || '',
        type: 'video',
      },
      bWr9i = {
        videoId: this.jK2x,
      };
    if (this.beB7u > 0) {
      j9a.actId = this.beB7u;
      if (this.beA7t) {
        j9a.msg = '#' + this.beA7t + '#' + j9a.msg;
      }
    }
    j9a.videoinfo = JSON.stringify(bWr9i);
    this.S9J.cen1x({
      data: {
        videoId: this.jK2x,
        commit: true,
      },
      data2: j9a,
      snsTypes: '',
    });
  };
  b9i.bee7X = function(u9l, o9f) {
    this.cO0x(!1);
    this.bt9k();
    if (!this.bik8c) {
      if (this.Hh0x()) {
        m9d.Z9Q.L9C({
          tip: '视频将在转码完成后自动发出',
          autoclose: true,
        });
      } else {
        m9d.Z9Q.L9C({
          tip:
            '分享成功' +
            (o9f.point > 0 ? ' 获得<em class="s-fc6">' + o9f.point + '积分</em>' : ''),
          autoclose: true,
        });
      }
    }
    h9c.z9q(m9d.oJ4N, 'sharesuccess', {
      isPrivate: u9l,
      rid: this.jK2x,
      rtype: this.eu0x,
      data: o9f.event,
    });
    this.z9q('onshare');
  };
  b9i.ja2x = function(o9f) {
    this.cO0x(!1);
    var bH0x = '分享失败';
    if (o9f.code) {
      switch (o9f.code) {
        case 404:
          bH0x = '分享的资源不存在';
          break;
        case 407:
          bH0x = '输入内容包含有关键字';
          break;
        case 408:
          bH0x = '分享太快了，过会再分享吧';
          break;
        case 315:
          bH0x = o9f.message || '根据对方设置，你没有该操作权限';
          break;
        case 329:
          return l9c.fs1x({
            clazz: 'm-layer-w2',
            btntxt: '知道了',
            message: '当前账号存在较多未完成发布的视频<br>请稍后再试',
          });
      }
    }
    this.cg0x(bH0x);
  };
  b9i.mk3x = function() {
    this.ph4l = gv1x.uo5t(this.ez0x);
  };
  b9i.cg0x = function(bH0x) {
    this.dX0x(this.em0x, bH0x);
  };
  b9i.cO0x = function(cW0x) {
    return this.dY0x(this.Cz8r, cW0x, '分享', '分享中...');
  };
  b9i.bdK7D = function(ib2x) {
    return bXf9W[ib2x] || '';
  };
  b9i.bWq9h = function() {
    var eq0x,
      uC6w = this.bdK7D(this.eu0x);
    this.qf4j.style.display = '';
    if (this.jK2x < 0) {
      this.qf4j.innerHTML =
        '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">给动态配上音乐</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>';
    } else {
      if (!this.OO2x) {
        this.qf4j.style.display = 'none';
        return;
      }
      var bdJ7C = this.Da8S && this.eu0x != 24;
      eq0x =
        (beD7w[uC6w] ? beD7w[uC6w] + '：' : '') +
        this.OO2x +
        (bIg4k[uC6w] || ' ') +
        (uC6w == 'mv' || uC6w == 'album' ? this.bhY8Q || this.Pj2x : this.Pj2x);
      a8i.dz0x(this.qf4j, 'm-xwgt-share-infobar', {
        canChange: bdJ7C,
        info: eq0x,
      });
      if (bdJ7C) {
        a8i.x9o(this.qf4j, 'z-dis');
      } else {
        a8i.y9p(this.qf4j, 'z-dis');
      }
    }
    a8i.x9o(this.qf4j, 'info-video');
  };
  b9i.bWs9j = function() {
    var uC6w = this.bdK7D(this.eu0x),
      eq0x =
        (beD7w[uC6w] ? beD7w[uC6w] + '：' : '') +
        this.OO2x +
        (bIg4k[uC6w] || ' ') +
        (uC6w == 'mv' || uC6w == 'album' ? this.bhY8Q || this.Pj2x : this.Pj2x);
    bdJ7C = this.Da8S && this.eu0x != 24;
    if (this.Hh0x()) {
    } else {
      a8i.x9o(this.qf4j, 'info-video');
      a8i.dz0x(this.qf4j, 'm-xwgt-share-infobar', {
        canChange: bdJ7C,
        isPub: this.Da8S,
        info: eq0x,
      });
    }
  };
  b9i.bWo9f = function() {
    var Iy0x = this.ez0x.value;
    if (this.Da8S) {
      if (!!this.biW8O) {
        return (!!Iy0x && !!Iy0x.length) || (!!this.oW4a && this.oW4a.QZ3x().length > 0);
      } else {
        return (
          !(this.jK2x < 0) ||
          (!!Iy0x && !!Iy0x.length) ||
          (!!this.oW4a && this.oW4a.QZ3x().length > 0)
        );
      }
    } else {
      return (!!Iy0x && !!Iy0x.length) || (!!this.oW4a && this.oW4a.QZ3x().length > 0);
    }
  };
  b9i.bdL7E = function() {
    var bHI4M = false;
    if (!this.Da8S || this.TA4E.pubEventWithoutResource || !(this.jK2x < 0)) {
      bHI4M = true;
    }
    if (bHI4M) {
      a8i.x9o(this.Cz8r, 'u-btn2-2-dis');
    } else {
      a8i.y9p(this.Cz8r, 'u-btn2-2-dis');
    }
  };
  b9i.bHT4X = function(bjt9k) {
    if (bjt9k) {
      a8i.y9p(this.Cz8r, 'u-btn2-2-dis');
    } else {
      this.bdL7E();
    }
  };
  b9i.bId4h = function(d9g) {
    if (d9g) {
      d9g.stopped = true;
    }
    if (this.bWo9f()) {
      l9c.hr2x({
        parent: document[FullscreenApi.fullscreenElement] || document.body,
        title: '提示',
        message: '是否退出本次编辑？',
        btnok: '退出',
        action: function(U9L) {
          if (U9L == 'ok') {
            this.z9q('forceclose', {});
            this.bt9k();
            h9c.z9q(m9d.oJ4N, 'shareclose', {});
          }
        }.g9d(this),
      });
    } else {
      this.z9q('forceclose', {});
      this.bt9k();
      h9c.z9q(m9d.oJ4N, 'shareclose', {});
    }
  };
  b9i.GC9t = function(eo0x, dQ0x) {
    this.pl4p.CT8L(eo0x, dQ0x);
  };
  b9i.bdG7z = function(u9l) {
    this.gw1x.eU1x('page', {
      type: u9l,
    });
  };
  b9i.Hh0x = function() {
    return this.eu0x == 39;
  };
  b9i.L9C = (function() {
    var bWl9c = function(p9g, r9i) {
      var ci0x = 'u-slg-' + dZ0x[r9i] + '-gray';
      !this.bew7p[bhE8w[r9i]] ? a8i.y9p(p9g, ci0x) : a8i.x9o(p9g, ci0x);
    };
    return function() {
      K9B.L9C.call(this);
      this.n9e.style.display = '';
      this.cg0x();
      this.cO0x(!1);
      this.BR8J.QJ3x(0);
      this.ez0x.focus();
      this.ez0x.value = this.bWU9L || '';
      this.ez0x.placeholder = this.bWT9K || '';
      if (!this.Hh0x()) {
        this.bWq9h();
      } else {
        a8i.y9p(this.qf4j, 'info-video');
        a8i.dz0x(this.qf4j, 'm-xwgt-share-videobar', {
          title: this.OO2x,
          picUrl: this.bhU8M,
        });
      }
      this.gk1x();
      this.wu6o.bZE9v();
      k9b.bd9U(this.bef7Y, bWl9c, this);
      this.mk3x();
      if (this.Da8S) {
        this.qU4Y.style.display = 'none';
      } else {
        this.qU4Y.style.display = '';
      }
      this.bdL7E();
    };
  })();
  b9i.bt9k = function(d9g) {
    K9B.bt9k.call(this);
    !!this.hq2x && this.hq2x.bt9k();
    if (this.wu6o) {
      this.wu6o.T9K();
      delete this.wu6o;
    }
    if (this.hw2x) {
      this.hw2x.T9K();
      delete this.hw2x;
    }
    if (this.oW4a) {
      this.oW4a.T9K();
      delete this.oW4a;
    }
    if (this.bHH4L) {
      this.bHH4L = this.bHH4L.T9K();
    }
    if (this.mA3x) {
      this.mA3x.T9K();
      delete this.mA3x;
    }
  };
  l9c.kG3x = function(e9f) {
    if (!GUser || !GUser.userId || GUser.userId <= 0) {
      top.login();
      return;
    }
    if (e9f.title === undefined) {
      e9f.title = '分享';
    }
    if (e9f.actId && e9f.type != 39) {
      var u9l = bXb9S[e9f.resourceType],
        bV0x = e9f.resourceJson,
        hX2x;
      if (k9b.fH1x(bV0x)) {
        try {
          bV0x = JSON.parse(bV0x);
        } catch (e) {}
      }
      if (u9l) {
        hX2x = l9c.bOv6p(u9l, bV0x);
        e9f.name = hX2x.title;
        e9f.author = hX2x.author;
        e9f.picUrl = hX2x.picUrl;
        e9f.type = u9l;
        e9f.rid = (bV0x || []).id;
      }
    }
    m9d.oJ4N.L9C(e9f);
  };
  I9z.fL1x.A9r({
    element: m9d.oJ4N,
    event: ['sharesuccess', 'shareclose'],
  });
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    h9c = c9h('nej.v'),
    a8i = c9h('nej.e'),
    v9m = c9h('nej.j'),
    m9d = c9h('nm.l'),
    w9n = c9h('nm.w'),
    bC0x = c9h('nej.ui'),
    q9h = c9h('nm.d'),
    l9c = c9h('nm.x'),
    b9i,
    K9B;
  m9d.bdC7v = NEJ.C();
  b9i = m9d.bdC7v.N9E(m9d.el0x);
  K9B = m9d.bdC7v.ct0x;
  b9i.cy0x = function() {
    this.cG0x();
  };
  b9i.bW0x = function() {
    this.ch0x();
    var i9b = a8i.H9y(this.n9e, 'j-flag');
    h9c.s9j(i9b[0], 'click', this.Ec9T.g9d(this));
  };
  b9i.cf0x = function() {
    this.ce0x = 'm-import-ok';
  };
  b9i.bk9b = function(e9f) {
    e9f.parent = e9f.parent || document.body;
    e9f.title = '歌曲同步完成';
    this.bm9d(e9f);
  };
  b9i.bD0x = function() {
    this.bG0x();
  };
  b9i.Ec9T = function(d9g) {
    this.bt9k();
    if (location.pathname.indexOf('my') >= 0) {
      location.reload();
    } else {
      location.dispatch2('/my/');
    }
  };
  b9i.BM8E = function() {
    this.bt9k();
  };
  b9i.bLJ5O = function(d9g) {
    if (d9g.keyCode == 13) this.FQ9H();
  };
})();
(function() {
  var c9h = NEJ.P,
    bb9S = NEJ.O,
    h9c = c9h('nej.v'),
    a8i = c9h('nej.e'),
    v9m = c9h('nej.j'),
    O9F = c9h('nej.p'),
    k9b = c9h('nej.u'),
    m9d = c9h('nm.l'),
    w9n = c9h('nm.w'),
    bC0x = c9h('nej.ui'),
    q9h = c9h('nm.d'),
    l9c = c9h('nm.x'),
    b9i,
    K9B;
  m9d.bHF4J = NEJ.C();
  b9i = m9d.bHF4J.N9E(m9d.el0x);
  b9i.cf0x = function() {
    this.ce0x = 'm-programtips-layer';
  };
  b9i.bW0x = function() {
    this.ch0x();
    this.bU0x = a8i.H9y(this.n9e, 'j-flag');
  };
  b9i.bk9b = function(e9f) {
    if (e9f.inner) {
      var innerNode = a8i.H9y(this.n9e, 'wrap-p')[0];
      if (innerNode) {
        innerNode.innerHTML = e9f.inner;
      }
    }
    e9f.clazz = ' m-layer-programtips ' + (e9f.clazz || '');
    e9f.parent = e9f.parent || document.body;
    e9f.title = e9f.title || '付费内容提示';
    e9f.draggable = !0;
    e9f.destroyalbe = !0;
    e9f.mask = true;
    this.bm9d(e9f);
    this.gT2x = e9f.id;
    this.bWh9Y = e9f.radiotype;
    this.kZ3x =
      location.protocol +
      '//' +
      (this.bjD9u() || 'music.163.com') +
      '/m/' +
      this.bWh9Y +
      '?id=' +
      this.gT2x;
    this.kZ3x = e9f.url || this.kZ3x;
    this.bWg9X();
  };
  b9i.bD0x = function() {
    this.bG0x();
  };
  b9i.BM8E = function() {
    this.bt9k();
  };
  b9i.Ec9T = function(d9g) {
    this.z9q('onok', D9u);
    this.bt9k();
  };
  l9c.bjF9w = function(e9f) {
    m9d.bHF4J.A9r(e9f).L9C();
  };
  b9i.bWg9X = function() {
    v9m.bn9e('/api/web/qrcode/get', {
      method: 'POST',
      type: 'json',
      data: k9b.cF0x({
        url: this.kZ3x,
        size: 180,
      }),
      onload: function(j9a) {
        if (j9a.code == 200) {
          this.bWf9W(j9a.qrcodeImageUrl);
        } else {
          alert('二维码获取失败');
        }
      }.g9d(this),
    });
  };
  b9i.bjD9u = function() {
    var RM3x = location.host;
    if (RM3x.indexOf('music') >= 0) {
      return 'music.163.com';
    } else {
      return 'igame.163.com';
    }
  };
  b9i.bWf9W = function(jN2x) {
    this.bU0x[0].style.backgroundImage = 'url(' + jN2x + ')';
  };
})();
(function() {
  var c9h = NEJ.P,
    a8i = c9h('nej.e'),
    dw0x = c9h('nej.p'),
    h9c = c9h('nej.v'),
    k9b = c9h('nej.u'),
    I9z = c9h('nej.ut'),
    v9m = c9h('nej.j'),
    q9h = c9h('nm.d'),
    l9c = c9h('nm.x'),
    E9v = c9h('nm.m'),
    m9d = c9h('nm.l'),
    M9D = c9h('nm.m.f'),
    b9i,
    K9B;
  E9v.dg0x = NEJ.C();
  b9i = E9v.dg0x.N9E(I9z.du0x);
  b9i.bL0x = (function() {
    var qK4O = !1;
    return function() {
      if (qK4O) return;
      qK4O = !0;
      this.bQ0x();
      if (top == self) {
        return;
      }
      this.tG5L = a8i.B9s('g_backtop');
      if (window.GRef != 'mail') {
      } else {
        this.bHE4I();
      }
      I9z.fL1x.A9r({
        element: window,
        event: ['share', 'playchange', 'snsbind', 'playstatechange'],
      });
      this.bX0x([
        [window, 'scroll', this.BV8N.g9d(this)],
        [document, 'keyup', this.bWd9U.g9d(this)],
        [document.body, 'click', this.tu5z.g9d(this)],
        [document, 'mouseup', this.bWc9T.g9d(this)],
        [this.tG5L, 'click', this.NL2x.g9d(this)],
        [q9h.tP5U, 'message', this.vO6I.g9d(this)],
      ]);
      l9c.cex1x(document.body);
      this.BV8N();
      if (this.BU8M !== false && typeof GUser !== 'undefined' && GUser.userId > 0)
        q9h.tP5U.gt1x().vI6C();
      try {
        top.GUser = NEJ.X(top.GUser, GUser);
        top.api.refreshUserInfo();
        if (
          dw0x.ds0x.browser == 'ie' &&
          parseInt(dw0x.ds0x.version) < 9 &&
          /#(.*?)$/.test(top.document.title)
        ) {
          top.document.title = '网易云音乐';
        } else {
          var hc2x = top.player.getPlaying();
          if (hc2x && hc2x.track && hc2x.playing) {
            top.document.title = decodeURIComponent('%E2%96%B6%20') + hc2x.track.name;
          } else {
            top.document.title = document.title;
          }
        }
      } catch (e) {}
      window.share = this.zs7l.g9d(this);
      this.kp3x = q9h.hP2x.A9r();
      window.log = this.hk2x.g9d(this);
      var tV5a = location.search;
      if (tV5a) {
        var bv9m = tV5a.substr(tV5a.indexOf('?') + 1),
          gm1x = k9b.hy2x(bv9m);
        if (gm1x && gm1x['_hash']) location.hash = gm1x['_hash'];
      }
    };
  })();
  b9i.bWd9U = function(d9g) {
    var f9e = h9c.W9N(d9g);
    try {
      if (
        (d9g.keyCode == 80 && l9c.bOT6N()) ||
        ['textarea', 'input'].indexOf(f9e.tagName.toLowerCase()) >= 0
      )
        return;
      h9c.z9q(top.document, 'keyup', {
        ctrlKey: d9g.ctrlKey,
        keyCode: d9g.keyCode,
      });
    } catch (e) {}
  };
  b9i.tu5z = function(d9g) {
    var f9e = h9c.W9N(d9g);
    if (f9e && f9e.tagName == 'INPUT') return;
    var f9e = h9c.W9N(d9g, 'd:pid');
    if (f9e) {
      h9c.cr0x(d9g);
      var pG4K = a8i.t9k(f9e, 'pid'),
        BO8G = a8i.t9k(f9e, 'ptype'),
        U9L = a8i.t9k(f9e, 'action') || 'play';
      switch (U9L) {
        case 'subscribe':
          l9c.mr3x({
            tracks: [pG4K],
          });
          break;
      }
    }
    f9e = h9c.W9N(d9g, 'd:resAction');
    if (f9e && f9e.className.indexOf('-dis') == -1) {
      var cR0x = a8i.t9k(f9e, 'resId'),
        u9l = a8i.t9k(f9e, 'resType'),
        bjX9O = a8i.t9k(f9e, 'resRadiotype'),
        bjY9P = a8i.t9k(f9e, 'resRadioid'),
        eb0x = a8i.t9k(f9e, 'resFrom'),
        j9a = a8i.t9k(f9e, 'resData'),
        U9L = a8i.t9k(f9e, 'resAction'),
        buU1x = a8i.t9k(f9e, 'resCopyright'),
        bdr7k = a8i.t9k(f9e, 'resAuditstatus');
      if (U9L != 'log' && U9L != 'bilog') h9c.cr0x(d9g);
      switch (U9L) {
        case 'log':
          j9a = (j9a || '').split('|');
          if (!!j9a[0]) {
            var bg9X = {
              id: cR0x,
              alg: j9a[2] || 'itembased',
              scene: j9a[3],
              position: j9a[1] || 0,
            };
            if (!!j9a[4]) bg9X.srcid = j9a[4];
            window.log(j9a[0], bg9X);
          }
          break;
        case 'bilog':
          var bvv1x = a8i.t9k(f9e, 'logAction'),
            bvx1x = a8i.t9k(f9e, 'logJson');
          window.log(bvv1x, bvx1x);
          break;
        case 'share':
          if (bdr7k && bdr7k == 1) {
            l9c.iy2x('由于版权问题，该节目暂时无法分享。');
          } else {
            share(
              cR0x,
              u9l,
              a8i.t9k(f9e, 'resPic'),
              a8i.t9k(f9e, 'resName'),
              a8i.t9k(f9e, 'resAuthor'),
              a8i.t9k(f9e, 'resAuthors')
            );
          }
          break;
        case 'fav':
        case 'subscribe':
          if (u9l == 18) {
            var qx4B = a8i.t9k(f9e, 'resLevel'),
              or4v = a8i.t9k(f9e, 'resFee');
            if (qx4B == 10) {
              l9c.vb6V(or4v, cR0x, 'song');
              break;
            }
            l9c.mr3x({
              tracks: [cR0x],
            });
          }
          break;
        case 'download':
          l9c.Mh1x({
            id: cR0x,
            type: u9l,
          });
          break;
        case 'programtips':
          if (bdr7k && bdr7k == 1) {
            l9c.iy2x('由于版权问题，该节目暂时无法分享。');
          } else {
            l9c.bjF9w({
              id: bjY9P,
              radiotype: bjX9O,
            });
          }
          break;
      }
    }
    if (top == self) return;
    try {
      top.onIframeClick(d9g);
    } catch (e) {}
  };
  b9i.bWc9T = function(d9g) {
    try {
      h9c.z9q(top.document, 'mouseup');
    } catch (e) {}
  };
  b9i.BV8N = (function() {
    var bWb9S = function() {
      var cc0x = window.innerHeight;
      if (!k9b.sV5a(cc0x))
        cc0x = (document.documentElement || document.body).clientHeight;
      return cc0x;
    };
    return function(d9g) {
      if (!this.tG5L) return;
      var bdp7i = bWb9S(),
        fZ1x = document.documentElement.scrollTop || document.body.scrollTop;
      a8i.ba9R(this.tG5L, 'display', fZ1x > 0 ? '' : 'none');
      if (dw0x.ds0x.browser == 'ie' && dw0x.ds0x.version < '7.0') {
        var gz1x = Math.min(document.body.clientHeight, bdp7i + fZ1x) - 204;
        a8i.ba9R(this.tG5L, 'top', gz1x + 'px');
      }
    };
  })();
  b9i.NL2x = function(d9g) {
    h9c.cr0x(d9g);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  b9i.zs7l = (function() {
    var bkd9U = function(d9g) {
      h9c.z9q(window, 'share', d9g);
    };
    return function(cR0x, u9l, zp7i, V9M, FU9L, FT9K) {
      l9c.kG3x({
        rid: cR0x,
        type: u9l,
        purl: zp7i,
        name: V9M,
        author: FU9L,
        authors: FT9K,
        onshare: bkd9U.g9d(this),
      });
    };
  })();
  b9i.hk2x = function(U9L, bg9X) {
    try {
      top.log(U9L, bg9X);
    } catch (e) {
      if (U9L.indexOf('new|') == 0) {
        return this.kp3x.eU1x(U9L.slice(4), bg9X);
      }
      switch (U9L) {
        case 'play':
          this.kp3x.en0x(bg9X);
          break;
        case 'search':
          this.kp3x.bRL8D(bg9X);
          break;
        default:
          this.kp3x.eU1x(U9L, bg9X);
      }
    }
  };
  b9i.bHE4I = (function() {
    var bdm7f,
      bkj9a = false,
      bs9j = [45, 60];
    var bVY9P = function(bH0x) {
      if (bH0x.title != 'MailBoxImport') return;
      var Q9H = JSON.parse(bH0x.content || 'null') || bb9S;
      if (Q9H.status == 10) {
        m9d.bdC7v.A9r().L9C();
        window.clearTimeout(bdm7f);
      }
    };
    var rN5S = function(d9g) {
      if (d9g.code == 200) {
        if (d9g.status == 1) {
          h9c.s9j(q9h.Bx8p, 'message', bVY9P.g9d(this));
          q9h.Bx8p.A9r().bfd7W();
          bkj9a = true;
        } else {
          if (bkj9a) {
            if (d9g.status == 10) {
              m9d.bdC7v.A9r().L9C();
              h9c.he2x(q9h.Bx8p, 'message');
              window.clearTimeout(bdm7f);
              bkj9a = false;
            }
          } else {
            window.clearTimeout(bdm7f);
          }
        }
      }
    };
    return function() {
      var sI5N = bs9j.shift() * 1000;
      v9m.bn9e('/api/musicbox/mail/status', {
        type: 'json',
        method: 'get',
        onload: rN5S.g9d(this),
      });
      if (sI5N) {
        bdm7f = window.setTimeout(arguments.callee, sI5N);
      }
    };
  })();
  b9i.vO6I = function(d9g) {
    try {
      top.polling(d9g);
    } catch (e) {}
  };
})();
