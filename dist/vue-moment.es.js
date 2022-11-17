var p = (o, i) => () => (i || o((i = { exports: {} }).exports, i), i.exports);
var b = p((m, h) => {
  const a = (o, i) => {
    o = Array.prototype.slice.call(o);
    const n = o.shift();
    let e;
    if (Array.isArray(n) && typeof n[0] == "string" ? e = i(n[0], n[1], !0) : typeof n == "number" && n.toString().length < 12 ? e = i.unix(n) : e = i(n), !n || !e.isValid())
      return console.warn("Could not build a valid `moment` object from input."), n;
    function s(...t) {
      t = Array.prototype.slice.call(t);
      const c = t.shift();
      switch (c) {
        case "add": {
          const l = t.shift().split(",").map(Function.prototype.call, String.prototype.trim), f = {};
          for (let r = 0; r < l.length; r++) {
            const u = l[r].split(" ");
            f[u[1]] = u[0];
          }
          e.add(f);
          break;
        }
        case "subtract": {
          const l = t.shift().split(",").map(Function.prototype.call, String.prototype.trim), f = {};
          for (let r = 0; r < l.length; r++) {
            const u = l[r].split(" ");
            f[u[1]] = u[0];
          }
          e.subtract(f);
          break;
        }
        case "from": {
          let l = "now", f = !1;
          t[0] === "now" && t.shift(), i(t[0]).isValid() && (l = i(t.shift())), t[0] === !0 && (t.shift(), f = !0), l !== "now" ? e = e.from(l, f) : e = e.fromNow(f);
          break;
        }
        case "diff": {
          let l = i(), f = "", r = !1;
          i(t[0]).isValid() ? l = i(t.shift()) : (t[0] === null || t[0] === "now") && t.shift(), t[0] && (f = t.shift()), t[0] === !0 && (r = t.shift()), e = e.diff(l, f, r);
          break;
        }
        case "calendar": {
          let l = i(), f = {};
          i(t[0]).isValid() ? l = i(t.shift()) : (t[0] === null || t[0] === "now") && t.shift(), typeof t[0] == "object" && (f = t.shift()), e = e.calendar(l, f);
          break;
        }
        case "utc": {
          e.utc();
          break;
        }
        case "timezone": {
          e.tz(t.shift());
          break;
        }
        default: {
          const l = c;
          e = e.format(l);
        }
      }
      t.length && s.apply(s, t);
    }
    return s.apply(s, o), e;
  }, d = (o, i) => {
    o = Array.prototype.slice.call(o);
    const n = o.shift(), e = o.shift();
    function s(c) {
      Array.isArray(c) || (c = [c]);
      const l = i.duration(...c);
      return l.isValid() || console.warn("Could not build a valid `duration` object from input."), l;
    }
    let t = s(n);
    if (e === "add" || e === "subtract") {
      const c = s(o);
      t[e](c);
    } else
      t && t[e] && (t = t[e](...o));
    return t;
  };
  h.exports = {
    install(o, i) {
      const n = i && i.moment ? i.moment : require("moment");
      parseInt(o.version, 4) >= 3 ? (o.config.globalProperties.moment = n, o.config.globalProperties.$moment = (...e) => a(e, n), o.config.globalProperties.$duration = (...e) => d(e, n)) : (o.prototype.moment = n, o.prototype.$moment = (...e) => a(e, n), o.prototype.$duration = (...e) => d(e, n)), o.moment = n;
    }
  };
});
export default b();
