// Generated by Haxe 3.4.0
(function ($hx_exports) { "use strict";
var sticazzi = $hx_exports["sticazzi"] = function() { };
sticazzi.__name__ = true;
sticazzi.funfola = function() {
	return "sticazzi";
};
var stocazzo = $hx_exports["stocazzo"] = function() { };
stocazzo.__name__ = true;
stocazzo.succhiatore = function() {
	console.log("succhiatore");
};
stocazzo.caiazzo = $hx_exports["caiazzo"] = function() {
	System.import("!haxe-loader?null/Test!").then(function(exports) {
		Test = $s.Test;
		return exports;
	}).then(function(_) {
		Test.m();
	});
};
stocazzo.main = function() {
	console.log("ciaone nana dddd  wwww");
};
Math.__name__ = true;
var Test = function() { };
Test.__name__ = true;
Test.m = function() {
	js_Browser.alert(thx_Uuid.create() + "2222");
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) {
					return o[0];
				}
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) {
						str += "," + js_Boot.__string_rec(o[i],s);
					} else {
						str += js_Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g11 = 0;
			var _g2 = l;
			while(_g11 < _g2) {
				var i2 = _g11++;
				str1 += (i2 > 0 ? "," : "") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) {
			str2 += ", \n";
		}
		str2 += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "string":
		return o;
	default:
		return String(o);
	}
};
var js_Browser = function() { };
js_Browser.__name__ = true;
js_Browser.alert = function(v) {
	window.alert(js_Boot.__string_rec(v,""));
};
var thx_Uuid = function() { };
thx_Uuid.__name__ = true;
thx_Uuid.create = function() {
	var s = [];
	var _g = 0;
	while(_g < 8) s[_g++] = "0123456789abcdef".charAt(Math.floor(Math.random() * 16));
	s[8] = "-";
	var _g1 = 9;
	while(_g1 < 13) s[_g1++] = "0123456789abcdef".charAt(Math.floor(Math.random() * 16));
	s[13] = "-";
	s[14] = "4";
	var _g2 = 15;
	while(_g2 < 18) s[_g2++] = "0123456789abcdef".charAt(Math.floor(Math.random() * 16));
	s[18] = "-";
	s[19] = "89AB".charAt(Math.floor(Math.random() * 3));
	var _g3 = 20;
	while(_g3 < 23) s[_g3++] = "0123456789abcdef".charAt(Math.floor(Math.random() * 16));
	s[23] = "-";
	var _g4 = 24;
	while(_g4 < 36) s[_g4++] = "0123456789abcdef".charAt(Math.floor(Math.random() * 16));
	return s.join("");
};
String.__name__ = true;
Array.__name__ = true;
stocazzo.main();
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this);
