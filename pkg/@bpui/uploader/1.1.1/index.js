/*!
 * bpui uploader v1.1.1
 * Copyright (c) 2021 Copyright bpoint.lee@live.com All Rights Reserved.
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bpui/dialog'), require('febs-browser'), require('vue'), require('@bpui/libs')) :
  typeof define === 'function' && define.amd ? define(['@bpui/dialog', 'febs-browser', 'vue', '@bpui/libs'], factory) :
  (global = global || self, global.bpUploader = factory(global.bpDialog, global.febs, global.Vue, global.bpLibs));
}(this, (function (bpDialog, febs$1, Vue, bpLibs$1) { 'use strict';

  bpDialog = bpDialog && Object.prototype.hasOwnProperty.call(bpDialog, 'default') ? bpDialog['default'] : bpDialog;
  Vue = Vue && Object.prototype.hasOwnProperty.call(Vue, 'default') ? Vue['default'] : Vue;
  bpLibs$1 = bpLibs$1 && Object.prototype.hasOwnProperty.call(bpLibs$1, 'default') ? bpLibs$1['default'] : bpLibs$1;

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) {
      throw new TypeError("Cannot instantiate an arrow function");
    }
  }

  var fails = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
  });

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var check = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global_1 =
    // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func -- fallback
    (function () { return this; })() || Function('return this')();

  var replacement = /#|\.prototype\./;

  var isForced = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true
      : value == NATIVE ? false
      : typeof detection == 'function' ? fails(detection)
      : !!detection;
  };

  var normalize = isForced.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced.data = {};
  var NATIVE = isForced.NATIVE = 'N';
  var POLYFILL = isForced.POLYFILL = 'P';

  var isForced_1 = isForced;

  var isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var document$1 = global_1.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS = isObject(document$1) && isObject(document$1.createElement);

  var documentCreateElement = function (it) {
    return EXISTS ? document$1.createElement(it) : {};
  };

  // Thank's IE8 for his funny defineProperty
  var ie8DomDefine = !descriptors && !fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
    return Object.defineProperty(documentCreateElement('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  var anObject = function (it) {
    if (!isObject(it)) {
      throw TypeError(String(it) + ' is not an object');
    } return it;
  };

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var toPrimitive = function (input, PREFERRED_STRING) {
    if (!isObject(input)) return input;
    var fn, val;
    if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
    if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
    if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty = Object.defineProperty;

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  var f = descriptors ? $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (ie8DomDefine) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var objectDefineProperty = {
  	f: f
  };

  var createPropertyDescriptor = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var createNonEnumerableProperty = descriptors ? function (object, key, value) {
    return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible = function (it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
  };

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject = function (argument) {
    return Object(requireObjectCoercible(argument));
  };

  var hasOwnProperty = {}.hasOwnProperty;

  var has = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty.call(toObject(it), key);
  };

  var setGlobal = function (key, value) {
    try {
      createNonEnumerableProperty(global_1, key, value);
    } catch (error) {
      global_1[key] = value;
    } return value;
  };

  var SHARED = '__core-js_shared__';
  var store = global_1[SHARED] || setGlobal(SHARED, {});

  var sharedStore = store;

  var functionToString = Function.toString;

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (typeof sharedStore.inspectSource != 'function') {
    sharedStore.inspectSource = function (it) {
      return functionToString.call(it);
    };
  }

  var inspectSource = sharedStore.inspectSource;

  var WeakMap = global_1.WeakMap;

  var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

  var isPure = false;

  var shared = createCommonjsModule(function (module) {
  (module.exports = function (key, value) {
    return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.15.2',
    mode:  'global',
    copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
  });
  });

  var id = 0;
  var postfix = Math.random();

  var uid = function (key) {
    return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
  };

  var keys = shared('keys');

  var sharedKey = function (key) {
    return keys[key] || (keys[key] = uid(key));
  };

  var hiddenKeys = {};

  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var WeakMap$1 = global_1.WeakMap;
  var set, get, has$1;

  var enforce = function (it) {
    return has$1(it) ? get(it) : set(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject(it) || (state = get(it)).type !== TYPE) {
        throw TypeError('Incompatible receiver, ' + TYPE + ' required');
      } return state;
    };
  };

  if (nativeWeakMap || sharedStore.state) {
    var store$1 = sharedStore.state || (sharedStore.state = new WeakMap$1());
    var wmget = store$1.get;
    var wmhas = store$1.has;
    var wmset = store$1.set;
    set = function (it, metadata) {
      if (wmhas.call(store$1, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      wmset.call(store$1, it, metadata);
      return metadata;
    };
    get = function (it) {
      return wmget.call(store$1, it) || {};
    };
    has$1 = function (it) {
      return wmhas.call(store$1, it);
    };
  } else {
    var STATE = sharedKey('state');
    hiddenKeys[STATE] = true;
    set = function (it, metadata) {
      if (has(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return has(it, STATE) ? it[STATE] : {};
    };
    has$1 = function (it) {
      return has(it, STATE);
    };
  }

  var internalState = {
    set: set,
    get: get,
    has: has$1,
    enforce: enforce,
    getterFor: getterFor
  };

  var redefine = createCommonjsModule(function (module) {
  var getInternalState = internalState.get;
  var enforceInternalState = internalState.enforce;
  var TEMPLATE = String(String).split('String');

  (module.exports = function (O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;
    var state;
    if (typeof value == 'function') {
      if (typeof key == 'string' && !has(value, 'name')) {
        createNonEnumerableProperty(value, 'name', key);
      }
      state = enforceInternalState(value);
      if (!state.source) {
        state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
      }
    }
    if (O === global_1) {
      if (simple) O[key] = value;
      else setGlobal(key, value);
      return;
    } else if (!unsafe) {
      delete O[key];
    } else if (!noTargetGet && O[key]) {
      simple = true;
    }
    if (simple) O[key] = value;
    else createNonEnumerableProperty(O, key, value);
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, 'toString', function toString() {
    return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
  });
  });

  var toString = {}.toString;

  var classofRaw = function (it) {
    return toString.call(it).slice(8, -1);
  };

  var aPossiblePrototype = function (it) {
    if (!isObject(it) && it !== null) {
      throw TypeError("Can't set " + String(it) + ' as a prototype');
    } return it;
  };

  /* eslint-disable no-proto -- safe */



  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es/no-object-setprototypeof -- safe
  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
      setter.call(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) { /* empty */ }
    return function setPrototypeOf(O, proto) {
      anObject(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter.call(O, proto);
      else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  // makes subclassing work correct for wrapped built-ins
  var inheritIfRequired = function ($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (
      // it can work only with native `setPrototypeOf`
      objectSetPrototypeOf &&
      // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
      typeof (NewTarget = dummy.constructor) == 'function' &&
      NewTarget !== Wrapper &&
      isObject(NewTargetPrototype = NewTarget.prototype) &&
      NewTargetPrototype !== Wrapper.prototype
    ) objectSetPrototypeOf($this, NewTargetPrototype);
    return $this;
  };

  var split = ''.split;

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
  } : Object;

  // toObject with fallback for non-array-like ES3 strings



  var toIndexedObject = function (it) {
    return indexedObject(requireObjectCoercible(it));
  };

  var ceil = Math.ceil;
  var floor = Math.floor;

  // `ToInteger` abstract operation
  // https://tc39.es/ecma262/#sec-tointeger
  var toInteger = function (argument) {
    return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
  };

  var min = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength = function (argument) {
    return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var max = Math.max;
  var min$1 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex = function (index, length) {
    var integer = toInteger(index);
    return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
  };

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject($this);
      var length = toLength(O.length);
      var index = toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare -- NaN check
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
  };

  var indexOf = arrayIncludes.indexOf;


  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (has(O, key = names[i++])) {
      ~indexOf(result, key) || result.push(key);
    }
    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
  ];

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe
  var objectKeys = Object.keys || function keys(O) {
    return objectKeysInternal(O, enumBugKeys);
  };

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
    return O;
  };

  var path = global_1;

  var aFunction = function (variable) {
    return typeof variable == 'function' ? variable : undefined;
  };

  var getBuiltIn = function (namespace, method) {
    return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace])
      : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
  };

  var html = getBuiltIn('document', 'documentElement');

  var GT = '>';
  var LT = '<';
  var PROTOTYPE = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO = sharedKey('IE_PROTO');

  var EmptyConstructor = function () { /* empty */ };

  var scriptTag = function (content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  };

  // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
  var NullProtoObjectViaActiveX = function (activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
  };

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var NullProtoObjectViaIFrame = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  };

  // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug
  var activeXDocument;
  var NullProtoObject = function () {
    try {
      /* global ActiveXObject -- old IE */
      activeXDocument = document.domain && new ActiveXObject('htmlfile');
    } catch (error) { /* ignore */ }
    NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
    var length = enumBugKeys.length;
    while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
    return NullProtoObject();
  };

  hiddenKeys[IE_PROTO] = true;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE] = anObject(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : objectDefineProperties(result, Properties);
  };

  var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe
  var f$1 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return objectKeysInternal(O, hiddenKeys$1);
  };

  var objectGetOwnPropertyNames = {
  	f: f$1
  };

  var $propertyIsEnumerable = {}.propertyIsEnumerable;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  var f$2 = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable;

  var objectPropertyIsEnumerable = {
  	f: f$2
  };

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  var f$3 = descriptors ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPrimitive(P, true);
    if (ie8DomDefine) try {
      return $getOwnPropertyDescriptor(O, P);
    } catch (error) { /* empty */ }
    if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
  };

  var objectGetOwnPropertyDescriptor = {
  	f: f$3
  };

  // a string of all valid unicode whitespaces
  var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
    '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var whitespace = '[' + whitespaces + ']';
  var ltrim = RegExp('^' + whitespace + whitespace + '*');
  var rtrim = RegExp(whitespace + whitespace + '*$');

  // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
  var createMethod$1 = function (TYPE) {
    return function ($this) {
      var string = String(requireObjectCoercible($this));
      if (TYPE & 1) string = string.replace(ltrim, '');
      if (TYPE & 2) string = string.replace(rtrim, '');
      return string;
    };
  };

  var stringTrim = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: createMethod$1(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: createMethod$1(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: createMethod$1(3)
  };

  var getOwnPropertyNames = objectGetOwnPropertyNames.f;
  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
  var defineProperty = objectDefineProperty.f;
  var trim = stringTrim.trim;

  var NUMBER = 'Number';
  var NativeNumber = global_1[NUMBER];
  var NumberPrototype = NativeNumber.prototype;

  // Opera ~12 has broken Object#toString
  var BROKEN_CLASSOF = classofRaw(objectCreate(NumberPrototype)) == NUMBER;

  // `ToNumber` abstract operation
  // https://tc39.es/ecma262/#sec-tonumber
  var toNumber = function (argument) {
    var it = toPrimitive(argument, false);
    var first, third, radix, maxCode, digits, length, index, code;
    if (typeof it == 'string' && it.length > 2) {
      it = trim(it);
      first = it.charCodeAt(0);
      if (first === 43 || first === 45) {
        third = it.charCodeAt(2);
        if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
      } else if (first === 48) {
        switch (it.charCodeAt(1)) {
          case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
          case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
          default: return +it;
        }
        digits = it.slice(2);
        length = digits.length;
        for (index = 0; index < length; index++) {
          code = digits.charCodeAt(index);
          // parseInt parses a string to a first unavailable symbol
          // but ToNumber should return NaN if a string contains unavailable symbols
          if (code < 48 || code > maxCode) return NaN;
        } return parseInt(digits, radix);
      }
    } return +it;
  };

  // `Number` constructor
  // https://tc39.es/ecma262/#sec-number-constructor
  if (isForced_1(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
    var NumberWrapper = function Number(value) {
      var it = arguments.length < 1 ? 0 : value;
      var dummy = this;
      return dummy instanceof NumberWrapper
        // check on 1..constructor(foo) case
        && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classofRaw(dummy) != NUMBER)
          ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
    };
    for (var keys$1 = descriptors ? getOwnPropertyNames(NativeNumber) : (
      // ES3:
      'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
      // ES2015 (in case, if modules with ES2015 Number statics required before):
      'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
      'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,' +
      // ESNext
      'fromString,range'
    ).split(','), j = 0, key; keys$1.length > j; j++) {
      if (has(NativeNumber, key = keys$1[j]) && !has(NumberWrapper, key)) {
        defineProperty(NumberWrapper, key, getOwnPropertyDescriptor$1(NativeNumber, key));
      }
    }
    NumberWrapper.prototype = NumberPrototype;
    NumberPrototype.constructor = NumberWrapper;
    redefine(global_1, NUMBER, NumberWrapper);
  }

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  var f$4 = Object.getOwnPropertySymbols;

  var objectGetOwnPropertySymbols = {
  	f: f$4
  };

  // all object keys, includes non-enumerable and symbols
  var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = objectGetOwnPropertyNames.f(anObject(it));
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
  };

  var copyConstructorProperties = function (target, source) {
    var keys = ownKeys(source);
    var defineProperty = objectDefineProperty.f;
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  };

  var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;






  /*
    options.target      - name of the target object
    options.global      - target is the global object
    options.stat        - export as static methods of target
    options.proto       - export as prototype methods of target
    options.real        - real prototype method for the `pure` version
    options.forced      - export even if the native feature is available
    options.bind        - bind methods to the target, required for the `pure` version
    options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe      - use the simple assignment of property instead of delete + defineProperty
    options.sham        - add a flag to not completely full polyfills
    options.enumerable  - export as enumerable property
    options.noTargetGet - prevent calling a getter on target
  */
  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = global_1;
    } else if (STATIC) {
      target = global_1[TARGET] || setGlobal(TARGET, {});
    } else {
      target = (global_1[TARGET] || {}).prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor$2(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty === typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty(sourceProperty, 'sham', true);
      }
      // extend global
      redefine(target, key, sourceProperty, options);
    }
  };

  var arrayMethodIsStrict = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails(function () {
      // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
      method.call(null, argument || function () { throw 1; }, 1);
    });
  };

  /* eslint-disable es/no-array-prototype-indexof -- required for testing */

  var $indexOf = arrayIncludes.indexOf;


  var nativeIndexOf = [].indexOf;

  var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
  var STRICT_METHOD = arrayMethodIsStrict('indexOf');

  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  _export({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
    indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
      return NEGATIVE_ZERO
        // convert -0 to +0
        ? nativeIndexOf.apply(this, arguments) || 0
        : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  /* eslint-disable es/no-array-prototype-lastindexof -- safe */





  var min$2 = Math.min;
  var $lastIndexOf = [].lastIndexOf;
  var NEGATIVE_ZERO$1 = !!$lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
  var STRICT_METHOD$1 = arrayMethodIsStrict('lastIndexOf');
  var FORCED = NEGATIVE_ZERO$1 || !STRICT_METHOD$1;

  // `Array.prototype.lastIndexOf` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.lastindexof
  var arrayLastIndexOf = FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO$1) return $lastIndexOf.apply(this, arguments) || 0;
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = min$2(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
    return -1;
  } : $lastIndexOf;

  // `Array.prototype.lastIndexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.lastindexof
  // eslint-disable-next-line es/no-array-prototype-lastindexof -- required for testing
  _export({ target: 'Array', proto: true, forced: arrayLastIndexOf !== [].lastIndexOf }, {
    lastIndexOf: arrayLastIndexOf
  });

  var defineProperty$1 = objectDefineProperty.f;

  var FunctionPrototype = Function.prototype;
  var FunctionPrototypeToString = FunctionPrototype.toString;
  var nameRE = /^\s*function ([^ (]*)/;
  var NAME = 'name';

  // Function instances `.name` property
  // https://tc39.es/ecma262/#sec-function-instances-name
  if (descriptors && !(NAME in FunctionPrototype)) {
    defineProperty$1(FunctionPrototype, NAME, {
      configurable: true,
      get: function () {
        try {
          return FunctionPrototypeToString.call(this).match(nameRE)[1];
        } catch (error) {
          return '';
        }
      }
    });
  }

  var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

  var process = global_1.process;
  var versions = process && process.versions;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.');
    version = match[0] < 4 ? 1 : match[0] + match[1];
  } else if (engineUserAgent) {
    match = engineUserAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = engineUserAgent.match(/Chrome\/(\d+)/);
      if (match) version = match[1];
    }
  }

  var engineV8Version = version && +version;

  /* eslint-disable es/no-symbol -- required for testing */



  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && engineV8Version && engineV8Version < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */


  var useSymbolAsUid = nativeSymbol
    && !Symbol.sham
    && typeof Symbol.iterator == 'symbol';

  var WellKnownSymbolsStore = shared('wks');
  var Symbol$1 = global_1.Symbol;
  var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

  var wellKnownSymbol = function (name) {
    if (!has(WellKnownSymbolsStore, name) || !(nativeSymbol || typeof WellKnownSymbolsStore[name] == 'string')) {
      if (nativeSymbol && has(Symbol$1, name)) {
        WellKnownSymbolsStore[name] = Symbol$1[name];
      } else {
        WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
      }
    } return WellKnownSymbolsStore[name];
  };

  var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  var test = {};

  test[TO_STRING_TAG] = 'z';

  var toStringTagSupport = String(test) === '[object z]';

  var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
  // ES3 wrong here
  var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (error) { /* empty */ }
  };

  // getting tag from ES6+ `Object.prototype.toString`
  var classof = toStringTagSupport ? classofRaw : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$1)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw(O)
      // ES3 arguments fallback
      : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
  };

  // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  var objectToString = toStringTagSupport ? {}.toString : function toString() {
    return '[object ' + classof(this) + ']';
  };

  // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  if (!toStringTagSupport) {
    redefine(Object.prototype, 'toString', objectToString, { unsafe: true });
  }

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags = function () {
    var that = anObject(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  var TO_STRING = 'toString';
  var RegExpPrototype = RegExp.prototype;
  var nativeToString = RegExpPrototype[TO_STRING];

  var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
  // FF44- RegExp#toString has a wrong name
  var INCORRECT_NAME = nativeToString.name != TO_STRING;

  // `RegExp.prototype.toString` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
  if (NOT_GENERIC || INCORRECT_NAME) {
    redefine(RegExp.prototype, TO_STRING, function toString() {
      var R = anObject(this);
      var p = String(R.source);
      var rf = R.flags;
      var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? regexpFlags.call(R) : rf);
      return '/' + p + '/' + f;
    }, { unsafe: true });
  }

  // `Number.isNaN` method
  // https://tc39.es/ecma262/#sec-number.isnan
  _export({ target: 'Number', stat: true }, {
    isNaN: function isNaN(number) {
      // eslint-disable-next-line no-self-compare -- NaN check
      return number != number;
    }
  });

  var trim$1 = stringTrim.trim;


  var $parseInt = global_1.parseInt;
  var hex = /^[+-]?0[Xx]/;
  var FORCED$1 = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;

  // `parseInt` method
  // https://tc39.es/ecma262/#sec-parseint-string-radix
  var numberParseInt = FORCED$1 ? function parseInt(string, radix) {
    var S = trim$1(String(string));
    return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
  } : $parseInt;

  // `Number.parseInt` method
  // https://tc39.es/ecma262/#sec-number.parseint
  // eslint-disable-next-line es/no-number-parseint -- required for testing
  _export({ target: 'Number', stat: true, forced: Number.parseInt != numberParseInt }, {
    parseInt: numberParseInt
  });

  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
  var RE = function (s, f) {
    return RegExp(s, f);
  };

  var UNSUPPORTED_Y = fails(function () {
    var re = RE('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') != null;
  });

  var BROKEN_CARET = fails(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = RE('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') != null;
  });

  var regexpStickyHelpers = {
  	UNSUPPORTED_Y: UNSUPPORTED_Y,
  	BROKEN_CARET: BROKEN_CARET
  };

  var regexpUnsupportedDotAll = fails(function () {
    // babel-minify transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
    var re = RegExp('.', (typeof '').charAt(0));
    return !(re.dotAll && re.exec('\n') && re.flags === 's');
  });

  var regexpUnsupportedNcg = fails(function () {
    // babel-minify transpiles RegExp('.', 'g') -> /./g and it causes SyntaxError
    var re = RegExp('(?<a>b)', (typeof '').charAt(5));
    return re.exec('b').groups.a !== 'b' ||
      'b'.replace(re, '$<a>c') !== 'bc';
  });

  /* eslint-disable regexp/no-assertion-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
  /* eslint-disable regexp/no-useless-quantifier -- testing */




  var getInternalState = internalState.get;



  var nativeExec = RegExp.prototype.exec;
  var nativeReplace = shared('native-string-replace', String.prototype.replace);

  var patchedExec = nativeExec;

  var UPDATES_LAST_INDEX_WRONG = (function () {
    var re1 = /a/;
    var re2 = /b*/g;
    nativeExec.call(re1, 'a');
    nativeExec.call(re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  })();

  var UNSUPPORTED_Y$1 = regexpStickyHelpers.UNSUPPORTED_Y || regexpStickyHelpers.BROKEN_CARET;

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || regexpUnsupportedDotAll || regexpUnsupportedNcg;

  if (PATCH) {
    // eslint-disable-next-line max-statements -- TODO
    patchedExec = function exec(str) {
      var re = this;
      var state = getInternalState(re);
      var raw = state.raw;
      var result, reCopy, lastIndex, match, i, object, group;

      if (raw) {
        raw.lastIndex = re.lastIndex;
        result = patchedExec.call(raw, str);
        re.lastIndex = raw.lastIndex;
        return result;
      }

      var groups = state.groups;
      var sticky = UNSUPPORTED_Y$1 && re.sticky;
      var flags = regexpFlags.call(re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;

      if (sticky) {
        flags = flags.replace('y', '');
        if (flags.indexOf('g') === -1) {
          flags += 'g';
        }

        strCopy = String(str).slice(re.lastIndex);
        // Support anchored sticky behavior.
        if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
          source = '(?: ' + source + ')';
          strCopy = ' ' + strCopy;
          charsAdded++;
        }
        // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.
        reCopy = new RegExp('^(?:' + source + ')', flags);
      }

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
      }
      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

      match = nativeExec.call(sticky ? reCopy : re, strCopy);

      if (sticky) {
        if (match) {
          match.input = match.input.slice(charsAdded);
          match[0] = match[0].slice(charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        nativeReplace.call(match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      if (match && groups) {
        match.groups = object = objectCreate(null);
        for (i = 0; i < groups.length; i++) {
          group = groups[i];
          object[group[0]] = match[group[1]];
        }
      }

      return match;
    };
  }

  var regexpExec = patchedExec;

  // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec
  _export({ target: 'RegExp', proto: true, forced: /./.exec !== regexpExec }, {
    exec: regexpExec
  });

  // TODO: Remove from `core-js@4` since it's moved to entry points







  var SPECIES = wellKnownSymbol('species');
  var RegExpPrototype$1 = RegExp.prototype;

  var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
    var SYMBOL = wellKnownSymbol(KEY);

    var DELEGATES_TO_SYMBOL = !fails(function () {
      // String methods call symbol-named RegEp methods
      var O = {};
      O[SYMBOL] = function () { return 7; };
      return ''[KEY](O) != 7;
    });

    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;

      if (KEY === 'split') {
        // We can't use real regex here since it causes deoptimization
        // and serious performance degradation in V8
        // https://github.com/zloirock/core-js/issues/306
        re = {};
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};
        re.constructor[SPECIES] = function () { return re; };
        re.flags = '';
        re[SYMBOL] = /./[SYMBOL];
      }

      re.exec = function () { execCalled = true; return null; };

      re[SYMBOL]('');
      return !execCalled;
    });

    if (
      !DELEGATES_TO_SYMBOL ||
      !DELEGATES_TO_EXEC ||
      FORCED
    ) {
      var nativeRegExpMethod = /./[SYMBOL];
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        var $exec = regexp.exec;
        if ($exec === regexpExec || $exec === RegExpPrototype$1.exec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      });

      redefine(String.prototype, KEY, methods[0]);
      redefine(RegExpPrototype$1, SYMBOL, methods[1]);
    }

    if (SHAM) createNonEnumerableProperty(RegExpPrototype$1[SYMBOL], 'sham', true);
  };

  // `String.prototype.{ codePointAt, at }` methods implementation
  var createMethod$2 = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = String(requireObjectCoercible($this));
      var position = toInteger(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = S.charCodeAt(position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size
        || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
          ? CONVERT_TO_STRING ? S.charAt(position) : first
          : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod$2(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod$2(true)
  };

  var charAt = stringMultibyte.charAt;

  // `AdvanceStringIndex` abstract operation
  // https://tc39.es/ecma262/#sec-advancestringindex
  var advanceStringIndex = function (S, index, unicode) {
    return index + (unicode ? charAt(S, index).length : 1);
  };

  var floor$1 = Math.floor;
  var replace = ''.replace;
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

  // `GetSubstitution` abstract operation
  // https://tc39.es/ecma262/#sec-getsubstitution
  var getSubstitution = function (matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor$1(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  };

  // `RegExpExec` abstract operation
  // https://tc39.es/ecma262/#sec-regexpexec
  var regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (typeof exec === 'function') {
      var result = exec.call(R, S);
      if (typeof result !== 'object') {
        throw TypeError('RegExp exec method returned something other than an Object or null');
      }
      return result;
    }

    if (classofRaw(R) !== 'RegExp') {
      throw TypeError('RegExp#exec called on incompatible receiver');
    }

    return regexpExec.call(R, S);
  };

  var REPLACE = wellKnownSymbol('replace');
  var max$1 = Math.max;
  var min$3 = Math.min;

  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  };

  // IE <= 11 replaces $0 with the whole match, as if it was $&
  // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
  var REPLACE_KEEPS_$0 = (function () {
    // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
    return 'a'.replace(/./, '$0') === '$0';
  })();

  // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
    if (/./[REPLACE]) {
      return /./[REPLACE]('a', '$0') === '';
    }
    return false;
  })();

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = { a: '7' };
      return result;
    };
    return ''.replace(re, '$<a>') !== '7';
  });

  // @@replace logic
  fixRegexpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

    return [
      // `String.prototype.replace` method
      // https://tc39.es/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = requireObjectCoercible(this);
        var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
        return replacer !== undefined
          ? replacer.call(searchValue, O, replaceValue)
          : nativeReplace.call(String(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function (string, replaceValue) {
        if (
          typeof replaceValue === 'string' &&
          replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1 &&
          replaceValue.indexOf('$<') === -1
        ) {
          var res = maybeCallNative(nativeReplace, this, string, replaceValue);
          if (res.done) return res.value;
        }

        var rx = anObject(this);
        var S = String(string);

        var functionalReplace = typeof replaceValue === 'function';
        if (!functionalReplace) replaceValue = String(replaceValue);

        var global = rx.global;
        if (global) {
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }
        var results = [];
        while (true) {
          var result = regexpExecAbstract(rx, S);
          if (result === null) break;

          results.push(result);
          if (!global) break;

          var matchStr = String(result[0]);
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        }

        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];

          var matched = String(result[0]);
          var position = max$1(min$3(toInteger(result.index), S.length), 0);
          var captures = [];
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = [matched].concat(captures, position, S);
            if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
            var replacement = String(replaceValue.apply(undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }
        return accumulatedResult + S.slice(nextSourcePosition);
      }
    ];
  }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

  var MATCH = wellKnownSymbol('match');

  // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp
  var isRegexp = function (it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
  };

  var aFunction$1 = function (it) {
    if (typeof it != 'function') {
      throw TypeError(String(it) + ' is not a function');
    } return it;
  };

  var SPECIES$1 = wellKnownSymbol('species');

  // `SpeciesConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-speciesconstructor
  var speciesConstructor = function (O, defaultConstructor) {
    var C = anObject(O).constructor;
    var S;
    return C === undefined || (S = anObject(C)[SPECIES$1]) == undefined ? defaultConstructor : aFunction$1(S);
  };

  var UNSUPPORTED_Y$2 = regexpStickyHelpers.UNSUPPORTED_Y;
  var arrayPush = [].push;
  var min$4 = Math.min;
  var MAX_UINT32 = 0xFFFFFFFF;

  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  // Weex JS has frozen built-in prototypes, so use try / catch wrapper
  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function () { return originalExec.apply(this, arguments); };
    var result = 'ab'.split(re);
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
  });

  // @@split logic
  fixRegexpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit;
    if (
      'abbc'.split(/(b)*/)[1] == 'c' ||
      // eslint-disable-next-line regexp/no-empty-group -- required for testing
      'test'.split(/(?:)/, -1).length != 4 ||
      'ab'.split(/(?:ab)*/).length != 2 ||
      '.'.split(/(.?)(.?)/).length != 4 ||
      // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
      '.'.split(/()()/).length > 1 ||
      ''.split(/.?/).length
    ) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function (separator, limit) {
        var string = String(requireObjectCoercible(this));
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (separator === undefined) return [string];
        // If `separator` is not a regex, use native split
        if (!isRegexp(separator)) {
          return nativeSplit.call(string, separator, lim);
        }
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') +
                    (separator.multiline ? 'm' : '') +
                    (separator.unicode ? 'u' : '') +
                    (separator.sticky ? 'y' : '');
        var lastLastIndex = 0;
        // Make `global` and avoid `lastIndex` issues by working with a copy
        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;
        while (match = regexpExec.call(separatorCopy, string)) {
          lastIndex = separatorCopy.lastIndex;
          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
            lastLength = match[0].length;
            lastLastIndex = lastIndex;
            if (output.length >= lim) break;
          }
          if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
        }
        if (lastLastIndex === string.length) {
          if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));
        return output.length > lim ? output.slice(0, lim) : output;
      };
    // Chakra, V8
    } else if ('0'.split(undefined, 0).length) {
      internalSplit = function (separator, limit) {
        return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
      };
    } else internalSplit = nativeSplit;

    return [
      // `String.prototype.split` method
      // https://tc39.es/ecma262/#sec-string.prototype.split
      function split(separator, limit) {
        var O = requireObjectCoercible(this);
        var splitter = separator == undefined ? undefined : separator[SPLIT];
        return splitter !== undefined
          ? splitter.call(separator, O, limit)
          : internalSplit.call(String(O), separator, limit);
      },
      // `RegExp.prototype[@@split]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
      //
      // NOTE: This cannot be properly polyfilled in engines that don't support
      // the 'y' flag.
      function (string, limit) {
        var res = maybeCallNative(internalSplit, this, string, limit, internalSplit !== nativeSplit);
        if (res.done) return res.value;

        var rx = anObject(this);
        var S = String(string);
        var C = speciesConstructor(rx, RegExp);

        var unicodeMatching = rx.unicode;
        var flags = (rx.ignoreCase ? 'i' : '') +
                    (rx.multiline ? 'm' : '') +
                    (rx.unicode ? 'u' : '') +
                    (UNSUPPORTED_Y$2 ? 'g' : 'y');

        // ^(? + rx + ) is needed, in combination with some S slicing, to
        // simulate the 'y' flag.
        var splitter = new C(UNSUPPORTED_Y$2 ? '^(?:' + rx.source + ')' : rx, flags);
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (S.length === 0) return regexpExecAbstract(splitter, S) === null ? [S] : [];
        var p = 0;
        var q = 0;
        var A = [];
        while (q < S.length) {
          splitter.lastIndex = UNSUPPORTED_Y$2 ? 0 : q;
          var z = regexpExecAbstract(splitter, UNSUPPORTED_Y$2 ? S.slice(q) : S);
          var e;
          if (
            z === null ||
            (e = min$4(toLength(splitter.lastIndex + (UNSUPPORTED_Y$2 ? q : 0)), S.length)) === p
          ) {
            q = advanceStringIndex(S, q, unicodeMatching);
          } else {
            A.push(S.slice(p, q));
            if (A.length === lim) return A;
            for (var i = 1; i <= z.length - 1; i++) {
              A.push(z[i]);
              if (A.length === lim) return A;
            }
            q = p = e;
          }
        }
        A.push(S.slice(p));
        return A;
      }
    ];
  }, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y$2);

  // `Number.MAX_SAFE_INTEGER` constant
  // https://tc39.es/ecma262/#sec-number.max_safe_integer
  _export({ target: 'Number', stat: true }, {
    MAX_SAFE_INTEGER: 0x1FFFFFFFFFFFFF
  });

  // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe
  var isArray = Array.isArray || function isArray(arg) {
    return classofRaw(arg) == 'Array';
  };

  var createProperty = function (object, key, value) {
    var propertyKey = toPrimitive(key);
    if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
    else object[propertyKey] = value;
  };

  var SPECIES$2 = wellKnownSymbol('species');

  // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesCreate = function (originalArray, length) {
    var C;
    if (isArray(originalArray)) {
      C = originalArray.constructor;
      // cross-realm fallback
      if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
      else if (isObject(C)) {
        C = C[SPECIES$2];
        if (C === null) C = undefined;
      }
    } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
  };

  var SPECIES$3 = wellKnownSymbol('species');

  var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return engineV8Version >= 51 || !fails(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES$3] = function () {
        return { foo: 1 };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });

  var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

  var isConcatSpreadable = function (O) {
    if (!isObject(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray(O);
  };

  var FORCED$2 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

  // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  _export({ target: 'Array', proto: true, forced: FORCED$2 }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject(this);
      var A = arraySpeciesCreate(O, 0);
      var n = 0;
      var i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if (isConcatSpreadable(E)) {
          len = toLength(E.length);
          if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
        } else {
          if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          createProperty(A, n++, E);
        }
      }
      A.length = n;
      return A;
    }
  });

  // `thisNumberValue` abstract operation
  // https://tc39.es/ecma262/#sec-thisnumbervalue
  var thisNumberValue = function (value) {
    if (typeof value != 'number' && classofRaw(value) != 'Number') {
      throw TypeError('Incorrect invocation');
    }
    return +value;
  };

  // `String.prototype.repeat` method implementation
  // https://tc39.es/ecma262/#sec-string.prototype.repeat
  var stringRepeat = function repeat(count) {
    var str = String(requireObjectCoercible(this));
    var result = '';
    var n = toInteger(count);
    if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
    for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
    return result;
  };

  var nativeToFixed = 1.0.toFixed;
  var floor$2 = Math.floor;

  var pow = function (x, n, acc) {
    return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
  };

  var log = function (x) {
    var n = 0;
    var x2 = x;
    while (x2 >= 4096) {
      n += 12;
      x2 /= 4096;
    }
    while (x2 >= 2) {
      n += 1;
      x2 /= 2;
    } return n;
  };

  var multiply = function (data, n, c) {
    var index = -1;
    var c2 = c;
    while (++index < 6) {
      c2 += n * data[index];
      data[index] = c2 % 1e7;
      c2 = floor$2(c2 / 1e7);
    }
  };

  var divide = function (data, n) {
    var index = 6;
    var c = 0;
    while (--index >= 0) {
      c += data[index];
      data[index] = floor$2(c / n);
      c = (c % n) * 1e7;
    }
  };

  var dataToString = function (data) {
    var index = 6;
    var s = '';
    while (--index >= 0) {
      if (s !== '' || index === 0 || data[index] !== 0) {
        var t = String(data[index]);
        s = s === '' ? t : s + stringRepeat.call('0', 7 - t.length) + t;
      }
    } return s;
  };

  var FORCED$3 = nativeToFixed && (
    0.00008.toFixed(3) !== '0.000' ||
    0.9.toFixed(0) !== '1' ||
    1.255.toFixed(2) !== '1.25' ||
    1000000000000000128.0.toFixed(0) !== '1000000000000000128'
  ) || !fails(function () {
    // V8 ~ Android 4.3-
    nativeToFixed.call({});
  });

  // `Number.prototype.toFixed` method
  // https://tc39.es/ecma262/#sec-number.prototype.tofixed
  _export({ target: 'Number', proto: true, forced: FORCED$3 }, {
    toFixed: function toFixed(fractionDigits) {
      var number = thisNumberValue(this);
      var fractDigits = toInteger(fractionDigits);
      var data = [0, 0, 0, 0, 0, 0];
      var sign = '';
      var result = '0';
      var e, z, j, k;

      if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
      // eslint-disable-next-line no-self-compare -- NaN check
      if (number != number) return 'NaN';
      if (number <= -1e21 || number >= 1e21) return String(number);
      if (number < 0) {
        sign = '-';
        number = -number;
      }
      if (number > 1e-21) {
        e = log(number * pow(2, 69, 1)) - 69;
        z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
        z *= 0x10000000000000;
        e = 52 - e;
        if (e > 0) {
          multiply(data, 0, z);
          j = fractDigits;
          while (j >= 7) {
            multiply(data, 1e7, 0);
            j -= 7;
          }
          multiply(data, pow(10, j, 1), 0);
          j = e - 1;
          while (j >= 23) {
            divide(data, 1 << 23);
            j -= 23;
          }
          divide(data, 1 << j);
          multiply(data, 1, 1);
          divide(data, 2);
          result = dataToString(data);
        } else {
          multiply(data, 0, z);
          multiply(data, 1 << -e, 0);
          result = dataToString(data) + stringRepeat.call('0', fractDigits);
        }
      }
      if (fractDigits > 0) {
        k = result.length;
        result = sign + (k <= fractDigits
          ? '0.' + stringRepeat.call('0', fractDigits - k) + result
          : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
      } else {
        result = sign + result;
      } return result;
    }
  });

  /**
   * Copyright (c) 2017 Copyright brainpoint All Rights Reserved.
   * Author: lipengxiang
   * Desc:
   */

  var Err = {
    FILE_NOT_FOUND: 'FILE_NOT_FOUND',
    FILE_SIZE_EXCEED: 'FILE_SIZE_EXCEED',
    FILE_HASH_ERROR: 'FILE_HASH_ERROR',
    NET_ERROR: 'NET_ERROR'
  };

  /**
   * @param options: {
   *                   url: url,
   *                   success: function() {},
   *                   error: function(err) {},
   *                   progress: function(percent) {},
   *                   method: 'post',
   *                   headers: {},
   *                   timeout: 5000,
   *                   fileIndex: 0,
   *                   withCredentials: true,
   *                   crossDomain: true,
   *                   sliceOffset:  this.sliceOffset,
   *                   sliceLength:  this.sliceLength,
   *                 }
   */

  function submitForm(formObj, fileObj, options) {
    var default_options = {
      success: options.success,
      method: options.method || 'POST',
      url: options.url,
      mode: options.crossDomain === false ? 'same-origin' : 'cors',
      timeout: options.timeout || 5000
    };
    options = $.extend(default_options, options || {});

    if (!!formObj.attr('enctype') && formObj.attr('enctype').toLowerCase() === 'multipart/form-data') {
      var formData = new FormData();

      if ('files' in fileObj[0] && fileObj[0].files.length > 0) {
        var blobSlice = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice; // ToDo: Support Multiple on any input? 
        // Just need a loop here..

        var filename = fileObj[0].value;
        var i_filename = filename.lastIndexOf('/');

        if (i_filename >= 0) {
          filename = filename.substr(i_filename + 1);
        }

        i_filename = filename.lastIndexOf('\\');

        if (i_filename >= 0) {
          filename = filename.substr(i_filename + 1);
        }

        var blob = blobSlice.call(fileObj[0].files[options.fileIndex], options.sliceOffset, options.sliceOffset + options.sliceLength);
        formData.append('file', blob, filename);
      }

      options.data = formData;
    } else {
      throw new Error('only support multipart/form-data');
    }

    var headers;

    if (options.headers) {
      // delete options.headers['Content-Type'];
      headers = options.headers;
    } else {
      headers = {};
    }

    headers['Content-Type'] = false;
    return febs$1.net.ajax({
      url: options.url,
      type: options.method,
      headers: headers,
      processData: false,
      data: options.data,
      timeout: options.timeout,
      withCredentials: options.withCredentials,
      success: function success(data) {
        if (options.success) {
          options.success(data);
        }
      },
      error: function error(xhr, statusText, err) {
        if (options.error) {
          options.error(err);
        }
      },
      complete: options.complete,
      progress: options.progress
    });
  }

  /**
   * @param options: {
   *                   url: url,
   *                   success: function() {},
   *                   error: function(err) {},
   *                   progress: function(percent) {},
   *                   method: 'post',
   *                   headers: {},
   *                   timeout: 5000,
   *                   withCredentials: true,
   *                   crossDomain: true,
   *                   sliceOffset:  this.sliceOffset,
   *                   sliceLength:  this.sliceLength,
   *                 }
   */

  function submitFile(fileObj, options) {
    var default_options = {
      success: options.success,
      method: options.method || 'POST',
      url: options.url,
      mode: options.crossDomain === false ? 'same-origin' : 'cors',
      timeout: options.timeout || 5000
    };
    options = $.extend(default_options, options || {});
    {
      var formData = new FormData();
      {
        var blobSlice = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice; // ToDo: Support Multiple on any input? 
        // Just need a loop here..

        var filename = fileObj[0].name;
        var i_filename = filename.lastIndexOf('/');

        if (i_filename >= 0) {
          filename = filename.substr(i_filename + 1);
        }

        i_filename = filename.lastIndexOf('\\');

        if (i_filename >= 0) {
          filename = filename.substr(i_filename + 1);
        }

        var blob = blobSlice.call(fileObj[0], options.sliceOffset, options.sliceOffset + options.sliceLength);
        formData.append('file', blob, filename);
      }
      options.data = formData;
    }
    var headers;

    if (options.headers) {
      // delete options.headers['Content-Type'];
      headers = options.headers;
    } else {
      headers = {};
    }

    headers['Content-Type'] = false;
    return febs$1.net.ajax({
      url: options.url,
      type: options.method,
      headers: headers,
      processData: false,
      data: options.data,
      timeout: options.timeout,
      withCredentials: options.withCredentials,
      success: function success(data) {
        if (options.success) {
          options.success(data);
        }
      },
      error: function error(xhr, statusText, err) {
        if (options.error) {
          options.error(err);
        }
      },
      complete: options.complete,
      progress: options.progress
    });
  }

  /**
   * Copyright (c) 2017 Copyright brainpoint All Rights Reserved.
   * Author: lipengxiang
   * Desc:
   */
  /**
   * post方式上传文件
   * 使用 multipart/form-data 方式.
   * @param cfg:  object, 其中
   *              {
   *                data:       , // 上传到服务器的任意字符串数据.
   *                fileInfo:   , // 文件信息; 以下两种
   *                 1. formObj:    , // 含有enctype="multipart/form-data"的form
   *                    fileObj:    , // form中的file对象
   *                    fileIndex:  , // 选中的file文件的索引; 默认为0;
   *                 2. fileObj:    , // File 对象.
   *                uploadUrl:  , // 上传文件内容的url. 系统将自动使用 uploadUrl?crc32=&size=的方式来上传.
   *                maxFileSize:    , // 允许上传的最大文件.0表示无限制.默认为0
   *                beginCB:     , // 上传开始的回调. function(fieObj, uploader); 调用uploader.abort() 可以停止上传.
   *                finishCB:    , // 上传完成后的回调. function(err, fileObj, serverData, xhr=null)
   *                               //                   err:  - uploadErr.FILE_NOT_FOUND    未选择文件.
   *                               //                         - uploadErr.FILE_SIZE_EXCEED  文件大小超出允许的最大值.
   *                               //                         - uploadErr.FILE_HASH_ERROR   计算本地文件hash值时错误.
   *                               //                         - uploadErr.NET_ERROR         ajax上传时出错.
   *                               //                         - 其他异常对象
   *                               //                   serverData: 服务器返回的数据.
   *                progressCB:  , // 上传进度的回调. function(fileObj, percent),
   *                headers: {     // 设置request headers
   *                  'customHeader': 'value'
   *                },
   *                crossDomain: true,     // 跨域, 默认为true
   *                withCredentials: true, // 是否附带cookie, 默认为true,
   *                checkoutCrc32: true,   // 是否上传 crc32,size,ajaxmark(防止chrome优化) 三个参数.
   *                timeout: 5000,        // 默认为 5000
   *                breakpointResume:     // (file, crc32,  (sliceOffset)=>void)=>void; 上传文件前进行确认从哪个偏移地址开始上传
   *                sliceOffset: 0,       // 上传数据起始偏移地址.
   *                sliceLength: -1,      // 上传数据段长度 (-1表示到结尾).
   *              }
   */

  function upload(cfg) {
    var _this = this;

    var control_upload_cb = cfg.finishCB;
    var control_upload_progress_cb = cfg.progressCB;
    var control_upload_begin_cb = cfg.beginCB;
    var control_upload_url = cfg.uploadUrl;
    var control_upload_maxFileSize = !cfg.maxFileSize ? Number.MAX_SAFE_INTEGER : cfg.maxFileSize;
    var control_sliceOffset = cfg.sliceOffset || 0;
    var control_sliceLength = cfg.sliceLength || -1;
    var control_fileIndex = cfg.fileInfo.fileIndex || 0;
    cfg.fileObj = $(cfg.fileInfo.fileObj);
    var file; // Form.

    if (cfg.fileInfo.formObj) {
      cfg.formObj = $(cfg.fileInfo.formObj); // if (cfg.fileType) {
      //   cfg.fileObj.attr("accept", cfg.fileType);
      // }

      file = cfg.fileObj[0].files[control_fileIndex];
    } else {
      file = cfg.fileObj;
    }

    var breakpointResumeFoo = cfg.breakpointResume;

    if (!breakpointResumeFoo) {
      breakpointResumeFoo = function breakpointResumeFoo(file, crc32, sliceOffsetCb) {
        _newArrowCheck(this, _this);

        sliceOffsetCb(0);
      }.bind(this);
    } // if.
    // ie9.


    var uid = "febsuifile" + febs$1.crypt.uuid();
    uid = febs$1.string.replace(uid, "-", "");
    var is_IE9 = febs$1.utils.browserIEVer() <= 9;

    if (is_IE9 && cfg.formObj) {
      cfg.formObj.attr("target", uid);
      cfg.formObj.attr("action", control_upload_url);
      cfg.formObj.attr("method", "post");
      var iframeDom = "<iframe id=\"".concat(uid, "\" name=\"").concat(uid, "\" style=\"display:none;\"></iframe>");
      $("body").prepend(iframeDom);
      $("#" + uid).on("load", function () {
        var responseText = $("#" + uid)[0].contentDocument.body.textContent;
        var r;

        try {
          r = JSON.parse(responseText);
        } catch (e) {
          r = {};
        }

        if (r.isSuccess == true || r.code == 200) {
          //success
          if (control_upload_cb) control_upload_cb(null, cfg.fileObj, r);
        } else {
          //error
          if (control_upload_cb) control_upload_cb(Err.NET_ERROR, cfg.fileObj, null);
        }

        cfg.formObj.removeAttr("target");
        cfg.fileObj[0].value = "";
        $("#" + uid).remove();
      });
      if (control_upload_begin_cb) control_upload_begin_cb(cfg.fileObj, {
        abort: function abort() {
          $("#" + uid).remove();
          cfg.fileObj[0].value = "";
        }
      });
      var inputs = cfg.formObj.children("input");
      $(inputs[inputs.length - 1]).click();
    } else {
      var uploadFile = function uploadFile() {
        var _this2 = this;

        try {
          breakpointResumeFoo(this.file, this.crc, function (offset) {
            _newArrowCheck(this, _this2);

            this.sliceOffset = offset;
            var filesize = this.file.size;

            if (this.sliceLength == -1) {
              this.sliceLength = filesize - this.sliceOffset;
            } // filesize = filesize - this.sliceOffset;
            // if (this.sliceLength > filesize) {
            //   this.sliceLength = filesize;
            // } else {
            //   filesize = this.sliceLength;
            // }


            var urlpath;

            if (this.checkoutCrc32) {
              urlpath = this.control_upload_url + "crc32=" + this.crc + "&offset=" + this.sliceOffset + "&size=" + filesize + (this.data ? "&data=" + this.data : "");
            } else {
              urlpath = this.control_upload_url + "size=" + filesize + "&offset=" + this.sliceOffset;
            }

            var per = this.sliceOffset / this.file.size;
            var per2 = this.sliceLength / this.file.size;

            try {
              var ctx = this;

              if (this.formObj) {
                var con = submitForm(this.formObj, this.fileObj, {
                  sliceOffset: this.sliceOffset,
                  sliceLength: this.sliceLength,
                  fileIndex: this.control_fileIndex,
                  timeout: this.timeout,
                  method: "POST",
                  url: urlpath,
                  progress: function progress(percentComplete) {
                    percentComplete = percentComplete ? parseFloat(percentComplete.toFixed(2)) : 0;
                    percentComplete = per + per2 * percentComplete;
                    percentComplete = parseFloat(percentComplete.toFixed(2));
                    if (ctx.control_upload_progress_cb) ctx.control_upload_progress_cb(ctx.fileObj, percentComplete);
                  },
                  error: function error() {
                    if (ctx.control_upload_cb) ctx.control_upload_cb(Err.NET_ERROR, ctx.fileObj, null);
                    ctx.fileObj[0].value = "";
                  },
                  success: function success(r) {
                    try {
                      r = JSON.parse(r);
                    } catch (e) {
                      r = {};
                    }

                    if (ctx.control_upload_cb) ctx.control_upload_cb(null, ctx.fileObj, r);
                    ctx.fileObj[0].value = "";
                  },
                  complete: function complete(xhr, responseText) {
                    if (xhr.status != 200) {
                      try {
                        if (ctx.control_upload_cb) ctx.control_upload_cb(Err.NET_ERROR, ctx.fileObj, responseText, xhr);
                      } catch (e) {}
                    } else {
                      ctx.fileObj[0].value = "";
                    }
                  },
                  crossDomain: this.crossDomain,
                  headers: this.headers,
                  withCredentials: this.withCredentials
                });
                if (this.control_upload_begin_cb) this.control_upload_begin_cb(this.fileObj, con);
              } else {
                var con = submitFile(this.fileObj, {
                  sliceOffset: this.sliceOffset,
                  sliceLength: this.sliceLength,
                  fileIndex: this.control_fileIndex,
                  timeout: this.timeout,
                  method: "POST",
                  url: urlpath,
                  progress: function progress(percentComplete) {
                    percentComplete = percentComplete ? parseFloat(percentComplete.toFixed(2)) : 0;
                    percentComplete = per + per2 * percentComplete;
                    percentComplete = parseFloat(percentComplete.toFixed(2));
                    if (ctx.control_upload_progress_cb) ctx.control_upload_progress_cb(ctx.fileObj, percentComplete);
                  },
                  error: function error() {
                    if (ctx.control_upload_cb) ctx.control_upload_cb(Err.NET_ERROR, ctx.fileObj, null);
                    ctx.fileObj[0].value = "";
                  },
                  success: function success(r) {
                    try {
                      r = JSON.parse(r);
                    } catch (e) {
                      r = {};
                    }

                    if (ctx.control_upload_cb) ctx.control_upload_cb(null, ctx.fileObj, r);
                    ctx.fileObj[0].value = "";
                  },
                  complete: function complete(xhr, responseText) {
                    if (xhr.status != 200) {
                      try {
                        if (ctx.control_upload_cb) ctx.control_upload_cb(Err.NET_ERROR, ctx.fileObj, responseText, xhr);
                      } catch (e) {}
                    } else {
                      ctx.fileObj[0].value = "";
                    }
                  },
                  crossDomain: this.crossDomain,
                  headers: this.headers,
                  withCredentials: this.withCredentials
                });
                if (this.control_upload_begin_cb) this.control_upload_begin_cb(this.fileObj, con);
              } // if..else.

            } catch (e) {
              if (this.control_upload_cb) this.control_upload_cb(e, this.fileObj, null);
              this.fileObj[0].value = "";
            }
          }.bind(this));
        } catch (e) {
          if (this.control_upload_cb) this.control_upload_cb(e, this.fileObj, null);
          console.error(e);
        }
      }; // function.


      if (!file) {
        if (control_upload_cb) control_upload_cb(Err.FILE_NOT_FOUND, cfg.fileObj, null);
        return;
      }

      if (file.size > control_upload_maxFileSize) {
        if (control_upload_cb) control_upload_cb(Err.FILE_SIZE_EXCEED, cfg.fileObj, null);
        return;
      }

      var urlQueryIndex = control_upload_url.indexOf("?");

      if (urlQueryIndex < 0) {
        control_upload_url += "?";
      } else if (urlQueryIndex < control_upload_url.length - 1) {
        control_upload_url += "&";
      }

      var formObj = cfg.formObj;
      var fileObj = cfg.fileObj;
      var timeout = cfg.timeout;

      if (cfg.checkoutCrc32) {
        crypt.crc32_fileSegment(file, 0, -1, function (crc) {
          if (crc) {
            uploadFile.bind(febs$1.utils.mergeMap(this, {
              crc: crc
            }))();
          } else {
            if (this.control_upload_cb) this.control_upload_cb(Err.FILE_HASH_ERROR, this.fileObj, null);
            this.fileObj[0].value = "";
          }
        }.bind({
          timeout: timeout,
          checkoutCrc32: cfg.checkoutCrc32,
          control_upload_url: control_upload_url,
          fileObj: cfg.fileObj,
          file: file,
          data: cfg.data,
          formObj: cfg.formObj,
          control_upload_progress_cb: control_upload_progress_cb,
          control_upload_cb: control_upload_cb,
          control_fileIndex: control_fileIndex,
          crossDomain: cfg.crossDomain,
          headers: cfg.headers,
          withCredentials: cfg.withCredentials,
          control_upload_begin_cb: control_upload_begin_cb,
          sliceOffset: control_sliceOffset,
          sliceLength: control_sliceLength
        }));
      } else {
        uploadFile.bind({
          timeout: timeout,
          checkoutCrc32: cfg.checkoutCrc32,
          control_upload_url: control_upload_url,
          fileObj: cfg.fileObj,
          file: file,
          data: cfg.data,
          formObj: cfg.formObj,
          control_upload_progress_cb: control_upload_progress_cb,
          control_upload_cb: control_upload_cb,
          control_fileIndex: control_fileIndex,
          crossDomain: cfg.crossDomain,
          headers: cfg.headers,
          withCredentials: cfg.withCredentials,
          control_upload_begin_cb: control_upload_begin_cb,
          sliceOffset: control_sliceOffset,
          sliceLength: control_sliceLength
        })();
      }
    } // if..else.

  }

  // @@match logic
  fixRegexpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
    return [
      // `String.prototype.match` method
      // https://tc39.es/ecma262/#sec-string.prototype.match
      function match(regexp) {
        var O = requireObjectCoercible(this);
        var matcher = regexp == undefined ? undefined : regexp[MATCH];
        return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
      },
      // `RegExp.prototype[@@match]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
      function (string) {
        var res = maybeCallNative(nativeMatch, this, string);
        if (res.done) return res.value;

        var rx = anObject(this);
        var S = String(string);

        if (!rx.global) return regexpExecAbstract(rx, S);

        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
        var A = [];
        var n = 0;
        var result;
        while ((result = regexpExecAbstract(rx, S)) !== null) {
          var matchStr = String(result[0]);
          A[n] = matchStr;
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
          n++;
        }
        return n === 0 ? null : A;
      }
    ];
  });

  var UNSCOPABLES = wellKnownSymbol('unscopables');
  var ArrayPrototype = Array.prototype;

  // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  if (ArrayPrototype[UNSCOPABLES] == undefined) {
    objectDefineProperty.f(ArrayPrototype, UNSCOPABLES, {
      configurable: true,
      value: objectCreate(null)
    });
  }

  // add a key to Array.prototype[@@unscopables]
  var addToUnscopables = function (key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
  };

  var iterators = {};

  var correctPrototypeGetter = !fails(function () {
    function F() { /* empty */ }
    F.prototype.constructor = null;
    // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var IE_PROTO$1 = sharedKey('IE_PROTO');
  var ObjectPrototype = Object.prototype;

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  // eslint-disable-next-line es/no-object-getprototypeof -- safe
  var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
    O = toObject(O);
    if (has(O, IE_PROTO$1)) return O[IE_PROTO$1];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectPrototype : null;
  };

  var ITERATOR = wellKnownSymbol('iterator');
  var BUGGY_SAFARI_ITERATORS = false;

  var returnThis = function () { return this; };

  // `%IteratorPrototype%` object
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-object
  var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

  /* eslint-disable es/no-array-prototype-keys -- safe */
  if ([].keys) {
    arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
    else {
      PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
    }
  }

  var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
    var test = {};
    // FF44- legacy iterators case
    return IteratorPrototype[ITERATOR].call(test) !== test;
  });

  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

  // `%IteratorPrototype%[@@iterator]()` method
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
  if ( !has(IteratorPrototype, ITERATOR)) {
    createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
  }

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
  };

  var defineProperty$2 = objectDefineProperty.f;



  var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');

  var setToStringTag = function (it, TAG, STATIC) {
    if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG$2)) {
      defineProperty$2(it, TO_STRING_TAG$2, { configurable: true, value: TAG });
    }
  };

  var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;





  var returnThis$1 = function () { return this; };

  var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, { next: createPropertyDescriptor(1, next) });
    setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
    iterators[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };

  var IteratorPrototype$2 = iteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS$1 = iteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$1 = wellKnownSymbol('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';

  var returnThis$2 = function () { return this; };

  var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);

    var getIterationMethod = function (KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS$1 && KIND in IterablePrototype) return IterablePrototype[KIND];
      switch (KIND) {
        case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
        case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
        case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
      } return function () { return new IteratorConstructor(this); };
    };

    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR$1]
      || IterablePrototype['@@iterator']
      || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS$1 && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;

    // fix native
    if (anyNativeIterator) {
      CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));
      if (IteratorPrototype$2 !== Object.prototype && CurrentIteratorPrototype.next) {
        if ( objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype$2) {
          if (objectSetPrototypeOf) {
            objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype$2);
          } else if (typeof CurrentIteratorPrototype[ITERATOR$1] != 'function') {
            createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR$1, returnThis$2);
          }
        }
        // Set @@toStringTag to native iterators
        setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    }

    // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
    if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return nativeIterator.call(this); };
    }

    // define iterator
    if ( IterablePrototype[ITERATOR$1] !== defaultIterator) {
      createNonEnumerableProperty(IterablePrototype, ITERATOR$1, defaultIterator);
    }
    iterators[NAME] = defaultIterator;

    // export additional methods
    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          redefine(IterablePrototype, KEY, methods[KEY]);
        }
      } else _export({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME }, methods);
    }

    return methods;
  };

  var ARRAY_ITERATOR = 'Array Iterator';
  var setInternalState = internalState.set;
  var getInternalState$1 = internalState.getterFor(ARRAY_ITERATOR);

  // `Array.prototype.entries` method
  // https://tc39.es/ecma262/#sec-array.prototype.entries
  // `Array.prototype.keys` method
  // https://tc39.es/ecma262/#sec-array.prototype.keys
  // `Array.prototype.values` method
  // https://tc39.es/ecma262/#sec-array.prototype.values
  // `Array.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
  // `CreateArrayIterator` internal method
  // https://tc39.es/ecma262/#sec-createarrayiterator
  var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
    setInternalState(this, {
      type: ARRAY_ITERATOR,
      target: toIndexedObject(iterated), // target
      index: 0,                          // next index
      kind: kind                         // kind
    });
  // `%ArrayIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
  }, function () {
    var state = getInternalState$1(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;
    if (!target || index >= target.length) {
      state.target = undefined;
      return { value: undefined, done: true };
    }
    if (kind == 'keys') return { value: index, done: false };
    if (kind == 'values') return { value: target[index], done: false };
    return { value: [index, target[index]], done: false };
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values%
  // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
  // https://tc39.es/ecma262/#sec-createmappedargumentsobject
  iterators.Arguments = iterators.Array;

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');

  // eslint-disable-next-line es/no-typed-arrays -- safe
  var arrayBufferNative = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined';

  var redefineAll = function (target, src, options) {
    for (var key in src) redefine(target, key, src[key], options);
    return target;
  };

  var anInstance = function (it, Constructor, name) {
    if (!(it instanceof Constructor)) {
      throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
    } return it;
  };

  // `ToIndex` abstract operation
  // https://tc39.es/ecma262/#sec-toindex
  var toIndex = function (it) {
    if (it === undefined) return 0;
    var number = toInteger(it);
    var length = toLength(number);
    if (number !== length) throw RangeError('Wrong length or index');
    return length;
  };

  // IEEE754 conversions based on https://github.com/feross/ieee754
  var abs = Math.abs;
  var pow$1 = Math.pow;
  var floor$3 = Math.floor;
  var log$1 = Math.log;
  var LN2 = Math.LN2;

  var pack = function (number, mantissaLength, bytes) {
    var buffer = new Array(bytes);
    var exponentLength = bytes * 8 - mantissaLength - 1;
    var eMax = (1 << exponentLength) - 1;
    var eBias = eMax >> 1;
    var rt = mantissaLength === 23 ? pow$1(2, -24) - pow$1(2, -77) : 0;
    var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
    var index = 0;
    var exponent, mantissa, c;
    number = abs(number);
    // eslint-disable-next-line no-self-compare -- NaN check
    if (number != number || number === Infinity) {
      // eslint-disable-next-line no-self-compare -- NaN check
      mantissa = number != number ? 1 : 0;
      exponent = eMax;
    } else {
      exponent = floor$3(log$1(number) / LN2);
      if (number * (c = pow$1(2, -exponent)) < 1) {
        exponent--;
        c *= 2;
      }
      if (exponent + eBias >= 1) {
        number += rt / c;
      } else {
        number += rt * pow$1(2, 1 - eBias);
      }
      if (number * c >= 2) {
        exponent++;
        c /= 2;
      }
      if (exponent + eBias >= eMax) {
        mantissa = 0;
        exponent = eMax;
      } else if (exponent + eBias >= 1) {
        mantissa = (number * c - 1) * pow$1(2, mantissaLength);
        exponent = exponent + eBias;
      } else {
        mantissa = number * pow$1(2, eBias - 1) * pow$1(2, mantissaLength);
        exponent = 0;
      }
    }
    for (; mantissaLength >= 8; buffer[index++] = mantissa & 255, mantissa /= 256, mantissaLength -= 8);
    exponent = exponent << mantissaLength | mantissa;
    exponentLength += mantissaLength;
    for (; exponentLength > 0; buffer[index++] = exponent & 255, exponent /= 256, exponentLength -= 8);
    buffer[--index] |= sign * 128;
    return buffer;
  };

  var unpack = function (buffer, mantissaLength) {
    var bytes = buffer.length;
    var exponentLength = bytes * 8 - mantissaLength - 1;
    var eMax = (1 << exponentLength) - 1;
    var eBias = eMax >> 1;
    var nBits = exponentLength - 7;
    var index = bytes - 1;
    var sign = buffer[index--];
    var exponent = sign & 127;
    var mantissa;
    sign >>= 7;
    for (; nBits > 0; exponent = exponent * 256 + buffer[index], index--, nBits -= 8);
    mantissa = exponent & (1 << -nBits) - 1;
    exponent >>= -nBits;
    nBits += mantissaLength;
    for (; nBits > 0; mantissa = mantissa * 256 + buffer[index], index--, nBits -= 8);
    if (exponent === 0) {
      exponent = 1 - eBias;
    } else if (exponent === eMax) {
      return mantissa ? NaN : sign ? -Infinity : Infinity;
    } else {
      mantissa = mantissa + pow$1(2, mantissaLength);
      exponent = exponent - eBias;
    } return (sign ? -1 : 1) * mantissa * pow$1(2, exponent - mantissaLength);
  };

  var ieee754 = {
    pack: pack,
    unpack: unpack
  };

  // `Array.prototype.fill` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.fill
  var arrayFill = function fill(value /* , start = 0, end = @length */) {
    var O = toObject(this);
    var length = toLength(O.length);
    var argumentsLength = arguments.length;
    var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
    var end = argumentsLength > 2 ? arguments[2] : undefined;
    var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
    while (endPos > index) O[index++] = value;
    return O;
  };

  var getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
  var defineProperty$3 = objectDefineProperty.f;




  var getInternalState$2 = internalState.get;
  var setInternalState$1 = internalState.set;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var DATA_VIEW = 'DataView';
  var PROTOTYPE$1 = 'prototype';
  var WRONG_LENGTH = 'Wrong length';
  var WRONG_INDEX = 'Wrong index';
  var NativeArrayBuffer = global_1[ARRAY_BUFFER];
  var $ArrayBuffer = NativeArrayBuffer;
  var $DataView = global_1[DATA_VIEW];
  var $DataViewPrototype = $DataView && $DataView[PROTOTYPE$1];
  var ObjectPrototype$1 = Object.prototype;
  var RangeError$1 = global_1.RangeError;

  var packIEEE754 = ieee754.pack;
  var unpackIEEE754 = ieee754.unpack;

  var packInt8 = function (number) {
    return [number & 0xFF];
  };

  var packInt16 = function (number) {
    return [number & 0xFF, number >> 8 & 0xFF];
  };

  var packInt32 = function (number) {
    return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
  };

  var unpackInt32 = function (buffer) {
    return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
  };

  var packFloat32 = function (number) {
    return packIEEE754(number, 23, 4);
  };

  var packFloat64 = function (number) {
    return packIEEE754(number, 52, 8);
  };

  var addGetter = function (Constructor, key) {
    defineProperty$3(Constructor[PROTOTYPE$1], key, { get: function () { return getInternalState$2(this)[key]; } });
  };

  var get$1 = function (view, count, index, isLittleEndian) {
    var intIndex = toIndex(index);
    var store = getInternalState$2(view);
    if (intIndex + count > store.byteLength) throw RangeError$1(WRONG_INDEX);
    var bytes = getInternalState$2(store.buffer).bytes;
    var start = intIndex + store.byteOffset;
    var pack = bytes.slice(start, start + count);
    return isLittleEndian ? pack : pack.reverse();
  };

  var set$1 = function (view, count, index, conversion, value, isLittleEndian) {
    var intIndex = toIndex(index);
    var store = getInternalState$2(view);
    if (intIndex + count > store.byteLength) throw RangeError$1(WRONG_INDEX);
    var bytes = getInternalState$2(store.buffer).bytes;
    var start = intIndex + store.byteOffset;
    var pack = conversion(+value);
    for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
  };

  if (!arrayBufferNative) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
      var byteLength = toIndex(length);
      setInternalState$1(this, {
        bytes: arrayFill.call(new Array(byteLength), 0),
        byteLength: byteLength
      });
      if (!descriptors) this.byteLength = byteLength;
    };

    $DataView = function DataView(buffer, byteOffset, byteLength) {
      anInstance(this, $DataView, DATA_VIEW);
      anInstance(buffer, $ArrayBuffer, DATA_VIEW);
      var bufferLength = getInternalState$2(buffer).byteLength;
      var offset = toInteger(byteOffset);
      if (offset < 0 || offset > bufferLength) throw RangeError$1('Wrong offset');
      byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
      if (offset + byteLength > bufferLength) throw RangeError$1(WRONG_LENGTH);
      setInternalState$1(this, {
        buffer: buffer,
        byteLength: byteLength,
        byteOffset: offset
      });
      if (!descriptors) {
        this.buffer = buffer;
        this.byteLength = byteLength;
        this.byteOffset = offset;
      }
    };

    if (descriptors) {
      addGetter($ArrayBuffer, 'byteLength');
      addGetter($DataView, 'buffer');
      addGetter($DataView, 'byteLength');
      addGetter($DataView, 'byteOffset');
    }

    redefineAll($DataView[PROTOTYPE$1], {
      getInt8: function getInt8(byteOffset) {
        return get$1(this, 1, byteOffset)[0] << 24 >> 24;
      },
      getUint8: function getUint8(byteOffset) {
        return get$1(this, 1, byteOffset)[0];
      },
      getInt16: function getInt16(byteOffset /* , littleEndian */) {
        var bytes = get$1(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
        return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
      },
      getUint16: function getUint16(byteOffset /* , littleEndian */) {
        var bytes = get$1(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
        return bytes[1] << 8 | bytes[0];
      },
      getInt32: function getInt32(byteOffset /* , littleEndian */) {
        return unpackInt32(get$1(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
      },
      getUint32: function getUint32(byteOffset /* , littleEndian */) {
        return unpackInt32(get$1(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
      },
      getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
        return unpackIEEE754(get$1(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
      },
      getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
        return unpackIEEE754(get$1(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
      },
      setInt8: function setInt8(byteOffset, value) {
        set$1(this, 1, byteOffset, packInt8, value);
      },
      setUint8: function setUint8(byteOffset, value) {
        set$1(this, 1, byteOffset, packInt8, value);
      },
      setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
        set$1(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
        set$1(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
        set$1(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
        set$1(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
        set$1(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
        set$1(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
      }
    });
  } else {
    /* eslint-disable no-new -- required for testing */
    if (!fails(function () {
      NativeArrayBuffer(1);
    }) || !fails(function () {
      new NativeArrayBuffer(-1);
    }) || fails(function () {
      new NativeArrayBuffer();
      new NativeArrayBuffer(1.5);
      new NativeArrayBuffer(NaN);
      return NativeArrayBuffer.name != ARRAY_BUFFER;
    })) {
    /* eslint-enable no-new -- required for testing */
      $ArrayBuffer = function ArrayBuffer(length) {
        anInstance(this, $ArrayBuffer);
        return new NativeArrayBuffer(toIndex(length));
      };
      var ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE$1] = NativeArrayBuffer[PROTOTYPE$1];
      for (var keys$2 = getOwnPropertyNames$1(NativeArrayBuffer), j$1 = 0, key$1; keys$2.length > j$1;) {
        if (!((key$1 = keys$2[j$1++]) in $ArrayBuffer)) {
          createNonEnumerableProperty($ArrayBuffer, key$1, NativeArrayBuffer[key$1]);
        }
      }
      ArrayBufferPrototype.constructor = $ArrayBuffer;
    }

    // WebKit bug - the same parent prototype for typed arrays and data view
    if (objectSetPrototypeOf && objectGetPrototypeOf($DataViewPrototype) !== ObjectPrototype$1) {
      objectSetPrototypeOf($DataViewPrototype, ObjectPrototype$1);
    }

    // iOS Safari 7.x bug
    var testView = new $DataView(new $ArrayBuffer(2));
    var $setInt8 = $DataViewPrototype.setInt8;
    testView.setInt8(0, 2147483648);
    testView.setInt8(1, 2147483649);
    if (testView.getInt8(0) || !testView.getInt8(1)) redefineAll($DataViewPrototype, {
      setInt8: function setInt8(byteOffset, value) {
        $setInt8.call(this, byteOffset, value << 24 >> 24);
      },
      setUint8: function setUint8(byteOffset, value) {
        $setInt8.call(this, byteOffset, value << 24 >> 24);
      }
    }, { unsafe: true });
  }

  setToStringTag($ArrayBuffer, ARRAY_BUFFER);
  setToStringTag($DataView, DATA_VIEW);

  var arrayBuffer = {
    ArrayBuffer: $ArrayBuffer,
    DataView: $DataView
  };

  var ArrayBuffer$1 = arrayBuffer.ArrayBuffer;
  var DataView$1 = arrayBuffer.DataView;
  var nativeArrayBufferSlice = ArrayBuffer$1.prototype.slice;

  var INCORRECT_SLICE = fails(function () {
    return !new ArrayBuffer$1(2).slice(1, undefined).byteLength;
  });

  // `ArrayBuffer.prototype.slice` method
  // https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice
  _export({ target: 'ArrayBuffer', proto: true, unsafe: true, forced: INCORRECT_SLICE }, {
    slice: function slice(start, end) {
      if (nativeArrayBufferSlice !== undefined && end === undefined) {
        return nativeArrayBufferSlice.call(anObject(this), start); // FF fix
      }
      var length = anObject(this).byteLength;
      var first = toAbsoluteIndex(start, length);
      var fin = toAbsoluteIndex(end === undefined ? length : end, length);
      var result = new (speciesConstructor(this, ArrayBuffer$1))(toLength(fin - first));
      var viewSource = new DataView$1(this);
      var viewTarget = new DataView$1(result);
      var index = 0;
      while (first < fin) {
        viewTarget.setUint8(index++, viewSource.getUint8(first++));
      } return result;
    }
  });

  var ITERATOR$2 = wellKnownSymbol('iterator');
  var SAFE_CLOSING = false;

  try {
    var called = 0;
    var iteratorWithReturn = {
      next: function () {
        return { done: !!called++ };
      },
      'return': function () {
        SAFE_CLOSING = true;
      }
    };
    iteratorWithReturn[ITERATOR$2] = function () {
      return this;
    };
    // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
    Array.from(iteratorWithReturn, function () { throw 2; });
  } catch (error) { /* empty */ }

  var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;
    try {
      var object = {};
      object[ITERATOR$2] = function () {
        return {
          next: function () {
            return { done: ITERATION_SUPPORT = true };
          }
        };
      };
      exec(object);
    } catch (error) { /* empty */ }
    return ITERATION_SUPPORT;
  };

  var defineProperty$4 = objectDefineProperty.f;





  var Int8Array$1 = global_1.Int8Array;
  var Int8ArrayPrototype = Int8Array$1 && Int8Array$1.prototype;
  var Uint8ClampedArray = global_1.Uint8ClampedArray;
  var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
  var TypedArray = Int8Array$1 && objectGetPrototypeOf(Int8Array$1);
  var TypedArrayPrototype = Int8ArrayPrototype && objectGetPrototypeOf(Int8ArrayPrototype);
  var ObjectPrototype$2 = Object.prototype;
  var isPrototypeOf = ObjectPrototype$2.isPrototypeOf;

  var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');
  var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
  // Fixing native typed arrays in Opera Presto crashes the browser, see #595
  var NATIVE_ARRAY_BUFFER_VIEWS = arrayBufferNative && !!objectSetPrototypeOf && classof(global_1.opera) !== 'Opera';
  var TYPED_ARRAY_TAG_REQIRED = false;
  var NAME$1;

  var TypedArrayConstructorsList = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8
  };

  var BigIntArrayConstructorsList = {
    BigInt64Array: 8,
    BigUint64Array: 8
  };

  var isView = function isView(it) {
    if (!isObject(it)) return false;
    var klass = classof(it);
    return klass === 'DataView'
      || has(TypedArrayConstructorsList, klass)
      || has(BigIntArrayConstructorsList, klass);
  };

  var isTypedArray = function (it) {
    if (!isObject(it)) return false;
    var klass = classof(it);
    return has(TypedArrayConstructorsList, klass)
      || has(BigIntArrayConstructorsList, klass);
  };

  var aTypedArray = function (it) {
    if (isTypedArray(it)) return it;
    throw TypeError('Target is not a typed array');
  };

  var aTypedArrayConstructor = function (C) {
    if (objectSetPrototypeOf) {
      if (isPrototypeOf.call(TypedArray, C)) return C;
    } else for (var ARRAY in TypedArrayConstructorsList) if (has(TypedArrayConstructorsList, NAME$1)) {
      var TypedArrayConstructor = global_1[ARRAY];
      if (TypedArrayConstructor && (C === TypedArrayConstructor || isPrototypeOf.call(TypedArrayConstructor, C))) {
        return C;
      }
    } throw TypeError('Target is not a typed array constructor');
  };

  var exportTypedArrayMethod = function (KEY, property, forced) {
    if (!descriptors) return;
    if (forced) for (var ARRAY in TypedArrayConstructorsList) {
      var TypedArrayConstructor = global_1[ARRAY];
      if (TypedArrayConstructor && has(TypedArrayConstructor.prototype, KEY)) try {
        delete TypedArrayConstructor.prototype[KEY];
      } catch (error) { /* empty */ }
    }
    if (!TypedArrayPrototype[KEY] || forced) {
      redefine(TypedArrayPrototype, KEY, forced ? property
        : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property);
    }
  };

  var exportTypedArrayStaticMethod = function (KEY, property, forced) {
    var ARRAY, TypedArrayConstructor;
    if (!descriptors) return;
    if (objectSetPrototypeOf) {
      if (forced) for (ARRAY in TypedArrayConstructorsList) {
        TypedArrayConstructor = global_1[ARRAY];
        if (TypedArrayConstructor && has(TypedArrayConstructor, KEY)) try {
          delete TypedArrayConstructor[KEY];
        } catch (error) { /* empty */ }
      }
      if (!TypedArray[KEY] || forced) {
        // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
        try {
          return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);
        } catch (error) { /* empty */ }
      } else return;
    }
    for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global_1[ARRAY];
      if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
        redefine(TypedArrayConstructor, KEY, property);
      }
    }
  };

  for (NAME$1 in TypedArrayConstructorsList) {
    if (!global_1[NAME$1]) NATIVE_ARRAY_BUFFER_VIEWS = false;
  }

  // WebKit bug - typed arrays constructors prototype is Object.prototype
  if (!NATIVE_ARRAY_BUFFER_VIEWS || typeof TypedArray != 'function' || TypedArray === Function.prototype) {
    // eslint-disable-next-line no-shadow -- safe
    TypedArray = function TypedArray() {
      throw TypeError('Incorrect invocation');
    };
    if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME$1 in TypedArrayConstructorsList) {
      if (global_1[NAME$1]) objectSetPrototypeOf(global_1[NAME$1], TypedArray);
    }
  }

  if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype$2) {
    TypedArrayPrototype = TypedArray.prototype;
    if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME$1 in TypedArrayConstructorsList) {
      if (global_1[NAME$1]) objectSetPrototypeOf(global_1[NAME$1].prototype, TypedArrayPrototype);
    }
  }

  // WebKit bug - one more object in Uint8ClampedArray prototype chain
  if (NATIVE_ARRAY_BUFFER_VIEWS && objectGetPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
    objectSetPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
  }

  if (descriptors && !has(TypedArrayPrototype, TO_STRING_TAG$3)) {
    TYPED_ARRAY_TAG_REQIRED = true;
    defineProperty$4(TypedArrayPrototype, TO_STRING_TAG$3, { get: function () {
      return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
    } });
    for (NAME$1 in TypedArrayConstructorsList) if (global_1[NAME$1]) {
      createNonEnumerableProperty(global_1[NAME$1], TYPED_ARRAY_TAG, NAME$1);
    }
  }

  var arrayBufferViewCore = {
    NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
    TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG,
    aTypedArray: aTypedArray,
    aTypedArrayConstructor: aTypedArrayConstructor,
    exportTypedArrayMethod: exportTypedArrayMethod,
    exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
    isView: isView,
    isTypedArray: isTypedArray,
    TypedArray: TypedArray,
    TypedArrayPrototype: TypedArrayPrototype
  };

  /* eslint-disable no-new -- required for testing */



  var NATIVE_ARRAY_BUFFER_VIEWS$1 = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;

  var ArrayBuffer$2 = global_1.ArrayBuffer;
  var Int8Array$2 = global_1.Int8Array;

  var typedArrayConstructorsRequireWrappers = !NATIVE_ARRAY_BUFFER_VIEWS$1 || !fails(function () {
    Int8Array$2(1);
  }) || !fails(function () {
    new Int8Array$2(-1);
  }) || !checkCorrectnessOfIteration(function (iterable) {
    new Int8Array$2();
    new Int8Array$2(null);
    new Int8Array$2(1.5);
    new Int8Array$2(iterable);
  }, true) || fails(function () {
    // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
    return new Int8Array$2(new ArrayBuffer$2(2), 1, undefined).length !== 1;
  });

  var toPositiveInteger = function (it) {
    var result = toInteger(it);
    if (result < 0) throw RangeError("The argument can't be less than 0");
    return result;
  };

  var toOffset = function (it, BYTES) {
    var offset = toPositiveInteger(it);
    if (offset % BYTES) throw RangeError('Wrong offset');
    return offset;
  };

  var ITERATOR$3 = wellKnownSymbol('iterator');

  var getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR$3]
      || it['@@iterator']
      || iterators[classof(it)];
  };

  var ITERATOR$4 = wellKnownSymbol('iterator');
  var ArrayPrototype$1 = Array.prototype;

  // check on default Array iterator
  var isArrayIteratorMethod = function (it) {
    return it !== undefined && (iterators.Array === it || ArrayPrototype$1[ITERATOR$4] === it);
  };

  // optional / simple context binding
  var functionBindContext = function (fn, that, length) {
    aFunction$1(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 0: return function () {
        return fn.call(that);
      };
      case 1: return function (a) {
        return fn.call(that, a);
      };
      case 2: return function (a, b) {
        return fn.call(that, a, b);
      };
      case 3: return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var aTypedArrayConstructor$1 = arrayBufferViewCore.aTypedArrayConstructor;

  var typedArrayFrom = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iteratorMethod = getIteratorMethod(O);
    var i, length, result, step, iterator, next;
    if (iteratorMethod != undefined && !isArrayIteratorMethod(iteratorMethod)) {
      iterator = iteratorMethod.call(O);
      next = iterator.next;
      O = [];
      while (!(step = next.call(iterator)).done) {
        O.push(step.value);
      }
    }
    if (mapping && argumentsLength > 2) {
      mapfn = functionBindContext(mapfn, arguments[2], 2);
    }
    length = toLength(O.length);
    result = new (aTypedArrayConstructor$1(this))(length);
    for (i = 0; length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var push = [].push;

  // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
  var createMethod$3 = function (TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_OUT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject($this);
      var self = indexedObject(O);
      var boundFunction = functionBindContext(callbackfn, that, 3);
      var length = toLength(self.length);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate;
      var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
      var value, result;
      for (;length > index; index++) if (NO_HOLES || index in self) {
        value = self[index];
        result = boundFunction(value, index, O);
        if (TYPE) {
          if (IS_MAP) target[index] = result; // map
          else if (result) switch (TYPE) {
            case 3: return true;              // some
            case 5: return value;             // find
            case 6: return index;             // findIndex
            case 2: push.call(target, value); // filter
          } else switch (TYPE) {
            case 4: return false;             // every
            case 7: push.call(target, value); // filterOut
          }
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };

  var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$3(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod$3(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod$3(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod$3(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod$3(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod$3(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$3(6),
    // `Array.prototype.filterOut` method
    // https://github.com/tc39/proposal-array-filtering
    filterOut: createMethod$3(7)
  };

  var SPECIES$4 = wellKnownSymbol('species');

  var setSpecies = function (CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
    var defineProperty = objectDefineProperty.f;

    if (descriptors && Constructor && !Constructor[SPECIES$4]) {
      defineProperty(Constructor, SPECIES$4, {
        configurable: true,
        get: function () { return this; }
      });
    }
  };

  var typedArrayConstructor = createCommonjsModule(function (module) {


















  var getOwnPropertyNames = objectGetOwnPropertyNames.f;

  var forEach = arrayIteration.forEach;






  var getInternalState = internalState.get;
  var setInternalState = internalState.set;
  var nativeDefineProperty = objectDefineProperty.f;
  var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var round = Math.round;
  var RangeError = global_1.RangeError;
  var ArrayBuffer = arrayBuffer.ArrayBuffer;
  var DataView = arrayBuffer.DataView;
  var NATIVE_ARRAY_BUFFER_VIEWS = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
  var TYPED_ARRAY_TAG = arrayBufferViewCore.TYPED_ARRAY_TAG;
  var TypedArray = arrayBufferViewCore.TypedArray;
  var TypedArrayPrototype = arrayBufferViewCore.TypedArrayPrototype;
  var aTypedArrayConstructor = arrayBufferViewCore.aTypedArrayConstructor;
  var isTypedArray = arrayBufferViewCore.isTypedArray;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var WRONG_LENGTH = 'Wrong length';

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = new (aTypedArrayConstructor(C))(length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key) {
    nativeDefineProperty(it, key, { get: function () {
      return getInternalState(this)[key];
    } });
  };

  var isArrayBuffer = function (it) {
    var klass;
    return it instanceof ArrayBuffer || (klass = classof(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
  };

  var isTypedArrayIndex = function (target, key) {
    return isTypedArray(target)
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };

  var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
    return isTypedArrayIndex(target, key = toPrimitive(key, true))
      ? createPropertyDescriptor(2, target[key])
      : nativeGetOwnPropertyDescriptor(target, key);
  };

  var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
    if (isTypedArrayIndex(target, key = toPrimitive(key, true))
      && isObject(descriptor)
      && has(descriptor, 'value')
      && !has(descriptor, 'get')
      && !has(descriptor, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !descriptor.configurable
      && (!has(descriptor, 'writable') || descriptor.writable)
      && (!has(descriptor, 'enumerable') || descriptor.enumerable)
    ) {
      target[key] = descriptor.value;
      return target;
    } return nativeDefineProperty(target, key, descriptor);
  };

  if (descriptors) {
    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
      objectGetOwnPropertyDescriptor.f = wrappedGetOwnPropertyDescriptor;
      objectDefineProperty.f = wrappedDefineProperty;
      addGetter(TypedArrayPrototype, 'buffer');
      addGetter(TypedArrayPrototype, 'byteOffset');
      addGetter(TypedArrayPrototype, 'byteLength');
      addGetter(TypedArrayPrototype, 'length');
    }

    _export({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
      getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
      defineProperty: wrappedDefineProperty
    });

    module.exports = function (TYPE, wrapper, CLAMPED) {
      var BYTES = TYPE.match(/\d+$/)[0] / 8;
      var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
      var GETTER = 'get' + TYPE;
      var SETTER = 'set' + TYPE;
      var NativeTypedArrayConstructor = global_1[CONSTRUCTOR_NAME];
      var TypedArrayConstructor = NativeTypedArrayConstructor;
      var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
      var exported = {};

      var getter = function (that, index) {
        var data = getInternalState(that);
        return data.view[GETTER](index * BYTES + data.byteOffset, true);
      };

      var setter = function (that, index, value) {
        var data = getInternalState(that);
        if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
        data.view[SETTER](index * BYTES + data.byteOffset, value, true);
      };

      var addElement = function (that, index) {
        nativeDefineProperty(that, index, {
          get: function () {
            return getter(this, index);
          },
          set: function (value) {
            return setter(this, index, value);
          },
          enumerable: true
        });
      };

      if (!NATIVE_ARRAY_BUFFER_VIEWS) {
        TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
          anInstance(that, TypedArrayConstructor, CONSTRUCTOR_NAME);
          var index = 0;
          var byteOffset = 0;
          var buffer, byteLength, length;
          if (!isObject(data)) {
            length = toIndex(data);
            byteLength = length * BYTES;
            buffer = new ArrayBuffer(byteLength);
          } else if (isArrayBuffer(data)) {
            buffer = data;
            byteOffset = toOffset(offset, BYTES);
            var $len = data.byteLength;
            if ($length === undefined) {
              if ($len % BYTES) throw RangeError(WRONG_LENGTH);
              byteLength = $len - byteOffset;
              if (byteLength < 0) throw RangeError(WRONG_LENGTH);
            } else {
              byteLength = toLength($length) * BYTES;
              if (byteLength + byteOffset > $len) throw RangeError(WRONG_LENGTH);
            }
            length = byteLength / BYTES;
          } else if (isTypedArray(data)) {
            return fromList(TypedArrayConstructor, data);
          } else {
            return typedArrayFrom.call(TypedArrayConstructor, data);
          }
          setInternalState(that, {
            buffer: buffer,
            byteOffset: byteOffset,
            byteLength: byteLength,
            length: length,
            view: new DataView(buffer)
          });
          while (index < length) addElement(that, index++);
        });

        if (objectSetPrototypeOf) objectSetPrototypeOf(TypedArrayConstructor, TypedArray);
        TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = objectCreate(TypedArrayPrototype);
      } else if (typedArrayConstructorsRequireWrappers) {
        TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
          anInstance(dummy, TypedArrayConstructor, CONSTRUCTOR_NAME);
          return inheritIfRequired(function () {
            if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
            if (isArrayBuffer(data)) return $length !== undefined
              ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length)
              : typedArrayOffset !== undefined
                ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES))
                : new NativeTypedArrayConstructor(data);
            if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
            return typedArrayFrom.call(TypedArrayConstructor, data);
          }(), dummy, TypedArrayConstructor);
        });

        if (objectSetPrototypeOf) objectSetPrototypeOf(TypedArrayConstructor, TypedArray);
        forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
          if (!(key in TypedArrayConstructor)) {
            createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
          }
        });
        TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
      }

      if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
        createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
      }

      if (TYPED_ARRAY_TAG) {
        createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
      }

      exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;

      _export({
        global: true, forced: TypedArrayConstructor != NativeTypedArrayConstructor, sham: !NATIVE_ARRAY_BUFFER_VIEWS
      }, exported);

      if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
        createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
      }

      if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
        createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
      }

      setSpecies(CONSTRUCTOR_NAME);
    };
  } else module.exports = function () { /* empty */ };
  });

  // `Uint8Array` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects
  typedArrayConstructor('Uint8', function (init) {
    return function Uint8Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  var min$5 = Math.min;

  // `Array.prototype.copyWithin` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.copywithin
  // eslint-disable-next-line es/no-array-prototype-copywithin -- safe
  var arrayCopyWithin = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var to = toAbsoluteIndex(target, len);
    var from = toAbsoluteIndex(start, len);
    var end = arguments.length > 2 ? arguments[2] : undefined;
    var count = min$5((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
    var inc = 1;
    if (from < to && to < from + count) {
      inc = -1;
      from += count - 1;
      to += count - 1;
    }
    while (count-- > 0) {
      if (from in O) O[to] = O[from];
      else delete O[to];
      to += inc;
      from += inc;
    } return O;
  };

  var aTypedArray$1 = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$1 = arrayBufferViewCore.exportTypedArrayMethod;

  // `%TypedArray%.prototype.copyWithin` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin
  exportTypedArrayMethod$1('copyWithin', function copyWithin(target, start /* , end */) {
    return arrayCopyWithin.call(aTypedArray$1(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
  });

  var $every = arrayIteration.every;

  var aTypedArray$2 = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$2 = arrayBufferViewCore.exportTypedArrayMethod;

  // `%TypedArray%.prototype.every` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.every
  exportTypedArrayMethod$2('every', function every(callbackfn /* , thisArg */) {
    return $every(aTypedArray$2(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  });

  var aTypedArray$3 = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$3 = arrayBufferViewCore.exportTypedArrayMethod;

  // `%TypedArray%.prototype.fill` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  exportTypedArrayMethod$3('fill', function fill(value /* , start, end */) {
    return arrayFill.apply(aTypedArray$3(this), arguments);
  });

  var aTypedArrayConstructor$2 = arrayBufferViewCore.aTypedArrayConstructor;


  var typedArrayFromSpeciesAndList = function (instance, list) {
    var C = speciesConstructor(instance, instance.constructor);
    var index = 0;
    var length = list.length;
    var result = new (aTypedArrayConstructor$2(C))(length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var $filter = arrayIteration.filter;


  var aTypedArray$4 = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$4 = arrayBufferViewCore.exportTypedArrayMethod;

  // `%TypedArray%.prototype.filter` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter
  exportTypedArrayMethod$4('filter', function filter(callbackfn /* , thisArg */) {
    var list = $filter(aTypedArray$4(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return typedArrayFromSpeciesAndList(this, list);
  });

  var $find = arrayIteration.find;

  var aTypedArray$5 = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$5 = arrayBufferViewCore.exportTypedArrayMethod;

  // `%TypedArray%.prototype.find` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.find
  exportTypedArrayMethod$5('find', function find(predicate /* , thisArg */) {
    return $find(aTypedArray$5(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
  });

  var $findIndex = arrayIteration.findIndex;

  var aTypedArray$6 = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$6 = arrayBufferViewCore.exportTypedArrayMethod;

  // `%TypedArray%.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex
  exportTypedArrayMethod$6('findIndex', function findIndex(predicate /* , thisArg */) {
    return $findIndex(aTypedArray$6(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
  });

  var $forEach = arrayIteration.forEach;

  var aTypedArray$7 = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$7 = arrayBufferViewCore.exportTypedArrayMethod;

  // `%TypedArray%.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach
  exportTypedArrayMethod$7('forEach', function forEach(callbackfn /* , thisArg */) {
    $forEach(aTypedArray$7(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  });

  var $includes = arrayIncludes.includes;

  var aTypedArray$8 = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$8 = arrayBufferViewCore.exportTypedArrayMethod;

  // `%TypedArray%.prototype.includes` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes
  exportTypedArrayMethod$8('includes', function includes(searchElement /* , fromIndex */) {
    return $includes(aTypedArray$8(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
  });

  var $indexOf$1 = arrayIncludes.indexOf;

  var aTypedArray$9 = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$9 = arrayBufferViewCore.exportTypedArrayMethod;

  // `%TypedArray%.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof
  exportTypedArrayMethod$9('indexOf', function indexOf(searchElement /* , fromIndex */) {
    return $indexOf$1(aTypedArray$9(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
  });

  var ITERATOR$5 = wellKnownSymbol('iterator');
  var Uint8Array$1 = global_1.Uint8Array;
  var arrayValues = es_array_iterator.values;
  var arrayKeys = es_array_iterator.keys;
  var arrayEntries = es_array_iterator.entries;
  var aTypedArray$a = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$a = arrayBufferViewCore.exportTypedArrayMethod;
  var nativeTypedArrayIterator = Uint8Array$1 && Uint8Array$1.prototype[ITERATOR$5];

  var CORRECT_ITER_NAME = !!nativeTypedArrayIterator
    && (nativeTypedArrayIterator.name == 'values' || nativeTypedArrayIterator.name == undefined);

  var typedArrayValues = function values() {
    return arrayValues.call(aTypedArray$a(this));
  };

  // `%TypedArray%.prototype.entries` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries
  exportTypedArrayMethod$a('entries', function entries() {
    return arrayEntries.call(aTypedArray$a(this));
  });
  // `%TypedArray%.prototype.keys` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys
  exportTypedArrayMethod$a('keys', function keys() {
    return arrayKeys.call(aTypedArray$a(this));
  });
  // `%TypedArray%.prototype.values` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.values
  exportTypedArrayMethod$a('values', typedArrayValues, !CORRECT_ITER_NAME);
  // `%TypedArray%.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator
  exportTypedArrayMethod$a(ITERATOR$5, typedArrayValues, !CORRECT_ITER_NAME);

  var aTypedArray$b = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$b = arrayBufferViewCore.exportTypedArrayMethod;
  var $join = [].join;

  // `%TypedArray%.prototype.join` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.join
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  exportTypedArrayMethod$b('join', function join(separator) {
    return $join.apply(aTypedArray$b(this), arguments);
  });

  var aTypedArray$c = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$c = arrayBufferViewCore.exportTypedArrayMethod;

  // `%TypedArray%.prototype.lastIndexOf` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  exportTypedArrayMethod$c('lastIndexOf', function lastIndexOf(searchElement /* , fromIndex */) {
    return arrayLastIndexOf.apply(aTypedArray$c(this), arguments);
  });

  var $map = arrayIteration.map;


  var aTypedArray$d = arrayBufferViewCore.aTypedArray;
  var aTypedArrayConstructor$3 = arrayBufferViewCore.aTypedArrayConstructor;
  var exportTypedArrayMethod$d = arrayBufferViewCore.exportTypedArrayMethod;

  // `%TypedArray%.prototype.map` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.map
  exportTypedArrayMethod$d('map', function map(mapfn /* , thisArg */) {
    return $map(aTypedArray$d(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
      return new (aTypedArrayConstructor$3(speciesConstructor(O, O.constructor)))(length);
    });
  });

  // `Array.prototype.{ reduce, reduceRight }` methods implementation
  var createMethod$4 = function (IS_RIGHT) {
    return function (that, callbackfn, argumentsLength, memo) {
      aFunction$1(callbackfn);
      var O = toObject(that);
      var self = indexedObject(O);
      var length = toLength(O.length);
      var index = IS_RIGHT ? length - 1 : 0;
      var i = IS_RIGHT ? -1 : 1;
      if (argumentsLength < 2) while (true) {
        if (index in self) {
          memo = self[index];
          index += i;
          break;
        }
        index += i;
        if (IS_RIGHT ? index < 0 : length <= index) {
          throw TypeError('Reduce of empty array with no initial value');
        }
      }
      for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
        memo = callbackfn(memo, self[index], index, O);
      }
      return memo;
    };
  };

  var arrayReduce = {
    // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce
    left: createMethod$4(false),
    // `Array.prototype.reduceRight` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
    right: createMethod$4(true)
  };

  var $reduce = arrayReduce.left;

  var aTypedArray$e = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$e = arrayBufferViewCore.exportTypedArrayMethod;

  // `%TypedArray%.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce
  exportTypedArrayMethod$e('reduce', function reduce(callbackfn /* , initialValue */) {
    return $reduce(aTypedArray$e(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  });

  var $reduceRight = arrayReduce.right;

  var aTypedArray$f = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$f = arrayBufferViewCore.exportTypedArrayMethod;

  // `%TypedArray%.prototype.reduceRicht` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright
  exportTypedArrayMethod$f('reduceRight', function reduceRight(callbackfn /* , initialValue */) {
    return $reduceRight(aTypedArray$f(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  });

  var aTypedArray$g = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$g = arrayBufferViewCore.exportTypedArrayMethod;
  var floor$4 = Math.floor;

  // `%TypedArray%.prototype.reverse` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse
  exportTypedArrayMethod$g('reverse', function reverse() {
    var that = this;
    var length = aTypedArray$g(that).length;
    var middle = floor$4(length / 2);
    var index = 0;
    var value;
    while (index < middle) {
      value = that[index];
      that[index++] = that[--length];
      that[length] = value;
    } return that;
  });

  var aTypedArray$h = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$h = arrayBufferViewCore.exportTypedArrayMethod;

  var FORCED$4 = fails(function () {
    // eslint-disable-next-line es/no-typed-arrays -- required for testing
    new Int8Array(1).set({});
  });

  // `%TypedArray%.prototype.set` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
  exportTypedArrayMethod$h('set', function set(arrayLike /* , offset */) {
    aTypedArray$h(this);
    var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError('Wrong length');
    while (index < len) this[offset + index] = src[index++];
  }, FORCED$4);

  var aTypedArray$i = arrayBufferViewCore.aTypedArray;
  var aTypedArrayConstructor$4 = arrayBufferViewCore.aTypedArrayConstructor;
  var exportTypedArrayMethod$i = arrayBufferViewCore.exportTypedArrayMethod;
  var $slice = [].slice;

  var FORCED$5 = fails(function () {
    // eslint-disable-next-line es/no-typed-arrays -- required for testing
    new Int8Array(1).slice();
  });

  // `%TypedArray%.prototype.slice` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice
  exportTypedArrayMethod$i('slice', function slice(start, end) {
    var list = $slice.call(aTypedArray$i(this), start, end);
    var C = speciesConstructor(this, this.constructor);
    var index = 0;
    var length = list.length;
    var result = new (aTypedArrayConstructor$4(C))(length);
    while (length > index) result[index] = list[index++];
    return result;
  }, FORCED$5);

  var $some = arrayIteration.some;

  var aTypedArray$j = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$j = arrayBufferViewCore.exportTypedArrayMethod;

  // `%TypedArray%.prototype.some` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.some
  exportTypedArrayMethod$j('some', function some(callbackfn /* , thisArg */) {
    return $some(aTypedArray$j(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  });

  // TODO: use something more complex like timsort?
  var floor$5 = Math.floor;

  var mergeSort = function (array, comparefn) {
    var length = array.length;
    var middle = floor$5(length / 2);
    return length < 8 ? insertionSort(array, comparefn) : merge(
      mergeSort(array.slice(0, middle), comparefn),
      mergeSort(array.slice(middle), comparefn),
      comparefn
    );
  };

  var insertionSort = function (array, comparefn) {
    var length = array.length;
    var i = 1;
    var element, j;

    while (i < length) {
      j = i;
      element = array[i];
      while (j && comparefn(array[j - 1], element) > 0) {
        array[j] = array[--j];
      }
      if (j !== i++) array[j] = element;
    } return array;
  };

  var merge = function (left, right, comparefn) {
    var llength = left.length;
    var rlength = right.length;
    var lindex = 0;
    var rindex = 0;
    var result = [];

    while (lindex < llength || rindex < rlength) {
      if (lindex < llength && rindex < rlength) {
        result.push(comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]);
      } else {
        result.push(lindex < llength ? left[lindex++] : right[rindex++]);
      }
    } return result;
  };

  var arraySort = mergeSort;

  var firefox = engineUserAgent.match(/firefox\/(\d+)/i);

  var engineFfVersion = !!firefox && +firefox[1];

  var engineIsIeOrEdge = /MSIE|Trident/.test(engineUserAgent);

  var webkit = engineUserAgent.match(/AppleWebKit\/(\d+)\./);

  var engineWebkitVersion = !!webkit && +webkit[1];

  var aTypedArray$k = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$k = arrayBufferViewCore.exportTypedArrayMethod;
  var Uint16Array = global_1.Uint16Array;
  var nativeSort = Uint16Array && Uint16Array.prototype.sort;

  // WebKit
  var ACCEPT_INCORRECT_ARGUMENTS = !!nativeSort && !fails(function () {
    var array = new Uint16Array(2);
    array.sort(null);
    array.sort({});
  });

  var STABLE_SORT = !!nativeSort && !fails(function () {
    // feature detection can be too slow, so check engines versions
    if (engineV8Version) return engineV8Version < 74;
    if (engineFfVersion) return engineFfVersion < 67;
    if (engineIsIeOrEdge) return true;
    if (engineWebkitVersion) return engineWebkitVersion < 602;

    var array = new Uint16Array(516);
    var expected = Array(516);
    var index, mod;

    for (index = 0; index < 516; index++) {
      mod = index % 4;
      array[index] = 515 - index;
      expected[index] = index - 2 * mod + 3;
    }

    array.sort(function (a, b) {
      return (a / 4 | 0) - (b / 4 | 0);
    });

    for (index = 0; index < 516; index++) {
      if (array[index] !== expected[index]) return true;
    }
  });

  var getSortCompare = function (comparefn) {
    return function (x, y) {
      if (comparefn !== undefined) return +comparefn(x, y) || 0;
      // eslint-disable-next-line no-self-compare -- NaN check
      if (y !== y) return -1;
      // eslint-disable-next-line no-self-compare -- NaN check
      if (x !== x) return 1;
      if (x === 0 && y === 0) return 1 / x > 0 && 1 / y < 0 ? 1 : -1;
      return x > y;
    };
  };

  // `%TypedArray%.prototype.sort` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
  exportTypedArrayMethod$k('sort', function sort(comparefn) {
    var array = this;
    if (comparefn !== undefined) aFunction$1(comparefn);
    if (STABLE_SORT) return nativeSort.call(array, comparefn);

    aTypedArray$k(array);
    var arrayLength = toLength(array.length);
    var items = Array(arrayLength);
    var index;

    for (index = 0; index < arrayLength; index++) {
      items[index] = array[index];
    }

    items = arraySort(array, getSortCompare(comparefn));

    for (index = 0; index < arrayLength; index++) {
      array[index] = items[index];
    }

    return array;
  }, !STABLE_SORT || ACCEPT_INCORRECT_ARGUMENTS);

  var aTypedArray$l = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$l = arrayBufferViewCore.exportTypedArrayMethod;

  // `%TypedArray%.prototype.subarray` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.subarray
  exportTypedArrayMethod$l('subarray', function subarray(begin, end) {
    var O = aTypedArray$l(this);
    var length = O.length;
    var beginIndex = toAbsoluteIndex(begin, length);
    return new (speciesConstructor(O, O.constructor))(
      O.buffer,
      O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT,
      toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex)
    );
  });

  var Int8Array$3 = global_1.Int8Array;
  var aTypedArray$m = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$m = arrayBufferViewCore.exportTypedArrayMethod;
  var $toLocaleString = [].toLocaleString;
  var $slice$1 = [].slice;

  // iOS Safari 6.x fails here
  var TO_LOCALE_STRING_BUG = !!Int8Array$3 && fails(function () {
    $toLocaleString.call(new Int8Array$3(1));
  });

  var FORCED$6 = fails(function () {
    return [1, 2].toLocaleString() != new Int8Array$3([1, 2]).toLocaleString();
  }) || !fails(function () {
    Int8Array$3.prototype.toLocaleString.call([1, 2]);
  });

  // `%TypedArray%.prototype.toLocaleString` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
  exportTypedArrayMethod$m('toLocaleString', function toLocaleString() {
    return $toLocaleString.apply(TO_LOCALE_STRING_BUG ? $slice$1.call(aTypedArray$m(this)) : aTypedArray$m(this), arguments);
  }, FORCED$6);

  var exportTypedArrayMethod$n = arrayBufferViewCore.exportTypedArrayMethod;



  var Uint8Array$2 = global_1.Uint8Array;
  var Uint8ArrayPrototype = Uint8Array$2 && Uint8Array$2.prototype || {};
  var arrayToString = [].toString;
  var arrayJoin = [].join;

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString;

  // `%TypedArray%.prototype.toString` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring
  exportTypedArrayMethod$n('toString', arrayToString, IS_NOT_ARRAY_METHOD);

  var charAt$1 = stringMultibyte.charAt;



  var STRING_ITERATOR = 'String Iterator';
  var setInternalState$2 = internalState.set;
  var getInternalState$3 = internalState.getterFor(STRING_ITERATOR);

  // `String.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-string.prototype-@@iterator
  defineIterator(String, 'String', function (iterated) {
    setInternalState$2(this, {
      type: STRING_ITERATOR,
      string: String(iterated),
      index: 0
    });
  // `%StringIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
  }, function next() {
    var state = getInternalState$3(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return { value: undefined, done: true };
    point = charAt$1(string, index);
    state.index += point.length;
    return { value: point, done: false };
  });

  // iterable DOM collections
  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };

  var ITERATOR$6 = wellKnownSymbol('iterator');
  var TO_STRING_TAG$4 = wellKnownSymbol('toStringTag');
  var ArrayValues = es_array_iterator.values;

  for (var COLLECTION_NAME in domIterables) {
    var Collection = global_1[COLLECTION_NAME];
    var CollectionPrototype = Collection && Collection.prototype;
    if (CollectionPrototype) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[ITERATOR$6] !== ArrayValues) try {
        createNonEnumerableProperty(CollectionPrototype, ITERATOR$6, ArrayValues);
      } catch (error) {
        CollectionPrototype[ITERATOR$6] = ArrayValues;
      }
      if (!CollectionPrototype[TO_STRING_TAG$4]) {
        createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG$4, COLLECTION_NAME);
      }
      if (domIterables[COLLECTION_NAME]) for (var METHOD_NAME in es_array_iterator) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) try {
          createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, es_array_iterator[METHOD_NAME]);
        } catch (error) {
          CollectionPrototype[METHOD_NAME] = es_array_iterator[METHOD_NAME];
        }
      }
    }
  }

  var ITERATOR$7 = wellKnownSymbol('iterator');

  var nativeUrl = !fails(function () {
    var url = new URL('b?a=1&b=2&c=3', 'http://a');
    var searchParams = url.searchParams;
    var result = '';
    url.pathname = 'c%20d';
    searchParams.forEach(function (value, key) {
      searchParams['delete']('b');
      result += key + value;
    });
    return (isPure && !url.toJSON)
      || !searchParams.sort
      || url.href !== 'http://a/c%20d?a=1&c=3'
      || searchParams.get('c') !== '3'
      || String(new URLSearchParams('?a=1')) !== 'a=1'
      || !searchParams[ITERATOR$7]
      // throws in Edge
      || new URL('https://a@b').username !== 'a'
      || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
      // not punycoded in Edge
      || new URL('http://тест').host !== 'xn--e1aybc'
      // not escaped in Chrome 62-
      || new URL('http://a#б').hash !== '#%D0%B1'
      // fails in Chrome 66-
      || result !== 'a1c3'
      // throws in Safari
      || new URL('http://x', undefined).host !== 'x';
  });

  // eslint-disable-next-line es/no-object-assign -- safe
  var $assign = Object.assign;
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  var defineProperty$5 = Object.defineProperty;

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  var objectAssign = !$assign || fails(function () {
    // should have correct order of operations (Edge bug)
    if (descriptors && $assign({ b: 1 }, $assign(defineProperty$5({}, 'a', {
      enumerable: true,
      get: function () {
        defineProperty$5(this, 'b', {
          value: 3,
          enumerable: false
        });
      }
    }), { b: 2 })).b !== 1) return true;
    // should work with symbols and should have deterministic property order (V8 bug)
    var A = {};
    var B = {};
    // eslint-disable-next-line es/no-symbol -- safe
    var symbol = Symbol();
    var alphabet = 'abcdefghijklmnopqrst';
    A[symbol] = 7;
    alphabet.split('').forEach(function (chr) { B[chr] = chr; });
    return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
  }) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
    var T = toObject(target);
    var argumentsLength = arguments.length;
    var index = 1;
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    var propertyIsEnumerable = objectPropertyIsEnumerable.f;
    while (argumentsLength > index) {
      var S = indexedObject(arguments[index++]);
      var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) {
        key = keys[j++];
        if (!descriptors || propertyIsEnumerable.call(S, key)) T[key] = S[key];
      }
    } return T;
  } : $assign;

  var iteratorClose = function (iterator) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) {
      return anObject(returnMethod.call(iterator)).value;
    }
  };

  // call something on iterator step with safe closing on error
  var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
  };

  // `Array.from` method implementation
  // https://tc39.es/ecma262/#sec-array.from
  var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iteratorMethod = getIteratorMethod(O);
    var index = 0;
    var length, result, step, iterator, next, value;
    if (mapping) mapfn = functionBindContext(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
    // if the target is not iterable or it's an array with the default iterator - use a simple case
    if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
      iterator = iteratorMethod.call(O);
      next = iterator.next;
      result = new C();
      for (;!(step = next.call(iterator)).done; index++) {
        value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
        createProperty(result, index, value);
      }
    } else {
      length = toLength(O.length);
      result = new C(length);
      for (;length > index; index++) {
        value = mapping ? mapfn(O[index], index) : O[index];
        createProperty(result, index, value);
      }
    }
    result.length = index;
    return result;
  };

  // based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
  var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
  var base = 36;
  var tMin = 1;
  var tMax = 26;
  var skew = 38;
  var damp = 700;
  var initialBias = 72;
  var initialN = 128; // 0x80
  var delimiter = '-'; // '\x2D'
  var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
  var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
  var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
  var baseMinusTMin = base - tMin;
  var floor$6 = Math.floor;
  var stringFromCharCode = String.fromCharCode;

  /**
   * Creates an array containing the numeric code points of each Unicode
   * character in the string. While JavaScript uses UCS-2 internally,
   * this function will convert a pair of surrogate halves (each of which
   * UCS-2 exposes as separate characters) into a single code point,
   * matching UTF-16.
   */
  var ucs2decode = function (string) {
    var output = [];
    var counter = 0;
    var length = string.length;
    while (counter < length) {
      var value = string.charCodeAt(counter++);
      if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
        // It's a high surrogate, and there is a next character.
        var extra = string.charCodeAt(counter++);
        if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.
          output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
        } else {
          // It's an unmatched surrogate; only append this code unit, in case the
          // next code unit is the high surrogate of a surrogate pair.
          output.push(value);
          counter--;
        }
      } else {
        output.push(value);
      }
    }
    return output;
  };

  /**
   * Converts a digit/integer into a basic code point.
   */
  var digitToBasic = function (digit) {
    //  0..25 map to ASCII a..z or A..Z
    // 26..35 map to ASCII 0..9
    return digit + 22 + 75 * (digit < 26);
  };

  /**
   * Bias adaptation function as per section 3.4 of RFC 3492.
   * https://tools.ietf.org/html/rfc3492#section-3.4
   */
  var adapt = function (delta, numPoints, firstTime) {
    var k = 0;
    delta = firstTime ? floor$6(delta / damp) : delta >> 1;
    delta += floor$6(delta / numPoints);
    for (; delta > baseMinusTMin * tMax >> 1; k += base) {
      delta = floor$6(delta / baseMinusTMin);
    }
    return floor$6(k + (baseMinusTMin + 1) * delta / (delta + skew));
  };

  /**
   * Converts a string of Unicode symbols (e.g. a domain name label) to a
   * Punycode string of ASCII-only symbols.
   */
  // eslint-disable-next-line max-statements -- TODO
  var encode = function (input) {
    var output = [];

    // Convert the input in UCS-2 to an array of Unicode code points.
    input = ucs2decode(input);

    // Cache the length.
    var inputLength = input.length;

    // Initialize the state.
    var n = initialN;
    var delta = 0;
    var bias = initialBias;
    var i, currentValue;

    // Handle the basic code points.
    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue < 0x80) {
        output.push(stringFromCharCode(currentValue));
      }
    }

    var basicLength = output.length; // number of basic code points.
    var handledCPCount = basicLength; // number of code points that have been handled;

    // Finish the basic string with a delimiter unless it's empty.
    if (basicLength) {
      output.push(delimiter);
    }

    // Main encoding loop:
    while (handledCPCount < inputLength) {
      // All non-basic code points < n have been handled already. Find the next larger one:
      var m = maxInt;
      for (i = 0; i < input.length; i++) {
        currentValue = input[i];
        if (currentValue >= n && currentValue < m) {
          m = currentValue;
        }
      }

      // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
      var handledCPCountPlusOne = handledCPCount + 1;
      if (m - n > floor$6((maxInt - delta) / handledCPCountPlusOne)) {
        throw RangeError(OVERFLOW_ERROR);
      }

      delta += (m - n) * handledCPCountPlusOne;
      n = m;

      for (i = 0; i < input.length; i++) {
        currentValue = input[i];
        if (currentValue < n && ++delta > maxInt) {
          throw RangeError(OVERFLOW_ERROR);
        }
        if (currentValue == n) {
          // Represent delta as a generalized variable-length integer.
          var q = delta;
          for (var k = base; /* no condition */; k += base) {
            var t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
            if (q < t) break;
            var qMinusT = q - t;
            var baseMinusT = base - t;
            output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
            q = floor$6(qMinusT / baseMinusT);
          }

          output.push(stringFromCharCode(digitToBasic(q)));
          bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
          delta = 0;
          ++handledCPCount;
        }
      }

      ++delta;
      ++n;
    }
    return output.join('');
  };

  var stringPunycodeToAscii = function (input) {
    var encoded = [];
    var labels = input.toLowerCase().replace(regexSeparators, '\u002E').split('.');
    var i, label;
    for (i = 0; i < labels.length; i++) {
      label = labels[i];
      encoded.push(regexNonASCII.test(label) ? 'xn--' + encode(label) : label);
    }
    return encoded.join('.');
  };

  var getIterator = function (it) {
    var iteratorMethod = getIteratorMethod(it);
    if (typeof iteratorMethod != 'function') {
      throw TypeError(String(it) + ' is not iterable');
    } return anObject(iteratorMethod.call(it));
  };

  // TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`





















  var $fetch = getBuiltIn('fetch');
  var Headers = getBuiltIn('Headers');
  var ITERATOR$8 = wellKnownSymbol('iterator');
  var URL_SEARCH_PARAMS = 'URLSearchParams';
  var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
  var setInternalState$3 = internalState.set;
  var getInternalParamsState = internalState.getterFor(URL_SEARCH_PARAMS);
  var getInternalIteratorState = internalState.getterFor(URL_SEARCH_PARAMS_ITERATOR);

  var plus = /\+/g;
  var sequences = Array(4);

  var percentSequence = function (bytes) {
    return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
  };

  var percentDecode = function (sequence) {
    try {
      return decodeURIComponent(sequence);
    } catch (error) {
      return sequence;
    }
  };

  var deserialize = function (it) {
    var result = it.replace(plus, ' ');
    var bytes = 4;
    try {
      return decodeURIComponent(result);
    } catch (error) {
      while (bytes) {
        result = result.replace(percentSequence(bytes--), percentDecode);
      }
      return result;
    }
  };

  var find = /[!'()~]|%20/g;

  var replace$1 = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+'
  };

  var replacer = function (match) {
    return replace$1[match];
  };

  var serialize = function (it) {
    return encodeURIComponent(it).replace(find, replacer);
  };

  var parseSearchParams = function (result, query) {
    if (query) {
      var attributes = query.split('&');
      var index = 0;
      var attribute, entry;
      while (index < attributes.length) {
        attribute = attributes[index++];
        if (attribute.length) {
          entry = attribute.split('=');
          result.push({
            key: deserialize(entry.shift()),
            value: deserialize(entry.join('='))
          });
        }
      }
    }
  };

  var updateSearchParams = function (query) {
    this.entries.length = 0;
    parseSearchParams(this.entries, query);
  };

  var validateArgumentsLength = function (passed, required) {
    if (passed < required) throw TypeError('Not enough arguments');
  };

  var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
    setInternalState$3(this, {
      type: URL_SEARCH_PARAMS_ITERATOR,
      iterator: getIterator(getInternalParamsState(params).entries),
      kind: kind
    });
  }, 'Iterator', function next() {
    var state = getInternalIteratorState(this);
    var kind = state.kind;
    var step = state.iterator.next();
    var entry = step.value;
    if (!step.done) {
      step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
    } return step;
  });

  // `URLSearchParams` constructor
  // https://url.spec.whatwg.org/#interface-urlsearchparams
  var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
    anInstance(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS);
    var init = arguments.length > 0 ? arguments[0] : undefined;
    var that = this;
    var entries = [];
    var iteratorMethod, iterator, next, step, entryIterator, entryNext, first, second, key;

    setInternalState$3(that, {
      type: URL_SEARCH_PARAMS,
      entries: entries,
      updateURL: function () { /* empty */ },
      updateSearchParams: updateSearchParams
    });

    if (init !== undefined) {
      if (isObject(init)) {
        iteratorMethod = getIteratorMethod(init);
        if (typeof iteratorMethod === 'function') {
          iterator = iteratorMethod.call(init);
          next = iterator.next;
          while (!(step = next.call(iterator)).done) {
            entryIterator = getIterator(anObject(step.value));
            entryNext = entryIterator.next;
            if (
              (first = entryNext.call(entryIterator)).done ||
              (second = entryNext.call(entryIterator)).done ||
              !entryNext.call(entryIterator).done
            ) throw TypeError('Expected sequence with length 2');
            entries.push({ key: first.value + '', value: second.value + '' });
          }
        } else for (key in init) if (has(init, key)) entries.push({ key: key, value: init[key] + '' });
      } else {
        parseSearchParams(entries, typeof init === 'string' ? init.charAt(0) === '?' ? init.slice(1) : init : init + '');
      }
    }
  };

  var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

  redefineAll(URLSearchParamsPrototype, {
    // `URLSearchParams.prototype.append` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-append
    append: function append(name, value) {
      validateArgumentsLength(arguments.length, 2);
      var state = getInternalParamsState(this);
      state.entries.push({ key: name + '', value: value + '' });
      state.updateURL();
    },
    // `URLSearchParams.prototype.delete` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
    'delete': function (name) {
      validateArgumentsLength(arguments.length, 1);
      var state = getInternalParamsState(this);
      var entries = state.entries;
      var key = name + '';
      var index = 0;
      while (index < entries.length) {
        if (entries[index].key === key) entries.splice(index, 1);
        else index++;
      }
      state.updateURL();
    },
    // `URLSearchParams.prototype.get` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-get
    get: function get(name) {
      validateArgumentsLength(arguments.length, 1);
      var entries = getInternalParamsState(this).entries;
      var key = name + '';
      var index = 0;
      for (; index < entries.length; index++) {
        if (entries[index].key === key) return entries[index].value;
      }
      return null;
    },
    // `URLSearchParams.prototype.getAll` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
    getAll: function getAll(name) {
      validateArgumentsLength(arguments.length, 1);
      var entries = getInternalParamsState(this).entries;
      var key = name + '';
      var result = [];
      var index = 0;
      for (; index < entries.length; index++) {
        if (entries[index].key === key) result.push(entries[index].value);
      }
      return result;
    },
    // `URLSearchParams.prototype.has` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-has
    has: function has(name) {
      validateArgumentsLength(arguments.length, 1);
      var entries = getInternalParamsState(this).entries;
      var key = name + '';
      var index = 0;
      while (index < entries.length) {
        if (entries[index++].key === key) return true;
      }
      return false;
    },
    // `URLSearchParams.prototype.set` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-set
    set: function set(name, value) {
      validateArgumentsLength(arguments.length, 1);
      var state = getInternalParamsState(this);
      var entries = state.entries;
      var found = false;
      var key = name + '';
      var val = value + '';
      var index = 0;
      var entry;
      for (; index < entries.length; index++) {
        entry = entries[index];
        if (entry.key === key) {
          if (found) entries.splice(index--, 1);
          else {
            found = true;
            entry.value = val;
          }
        }
      }
      if (!found) entries.push({ key: key, value: val });
      state.updateURL();
    },
    // `URLSearchParams.prototype.sort` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
    sort: function sort() {
      var state = getInternalParamsState(this);
      var entries = state.entries;
      // Array#sort is not stable in some engines
      var slice = entries.slice();
      var entry, entriesIndex, sliceIndex;
      entries.length = 0;
      for (sliceIndex = 0; sliceIndex < slice.length; sliceIndex++) {
        entry = slice[sliceIndex];
        for (entriesIndex = 0; entriesIndex < sliceIndex; entriesIndex++) {
          if (entries[entriesIndex].key > entry.key) {
            entries.splice(entriesIndex, 0, entry);
            break;
          }
        }
        if (entriesIndex === sliceIndex) entries.push(entry);
      }
      state.updateURL();
    },
    // `URLSearchParams.prototype.forEach` method
    forEach: function forEach(callback /* , thisArg */) {
      var entries = getInternalParamsState(this).entries;
      var boundFunction = functionBindContext(callback, arguments.length > 1 ? arguments[1] : undefined, 3);
      var index = 0;
      var entry;
      while (index < entries.length) {
        entry = entries[index++];
        boundFunction(entry.value, entry.key, this);
      }
    },
    // `URLSearchParams.prototype.keys` method
    keys: function keys() {
      return new URLSearchParamsIterator(this, 'keys');
    },
    // `URLSearchParams.prototype.values` method
    values: function values() {
      return new URLSearchParamsIterator(this, 'values');
    },
    // `URLSearchParams.prototype.entries` method
    entries: function entries() {
      return new URLSearchParamsIterator(this, 'entries');
    }
  }, { enumerable: true });

  // `URLSearchParams.prototype[@@iterator]` method
  redefine(URLSearchParamsPrototype, ITERATOR$8, URLSearchParamsPrototype.entries);

  // `URLSearchParams.prototype.toString` method
  // https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
  redefine(URLSearchParamsPrototype, 'toString', function toString() {
    var entries = getInternalParamsState(this).entries;
    var result = [];
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      result.push(serialize(entry.key) + '=' + serialize(entry.value));
    } return result.join('&');
  }, { enumerable: true });

  setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

  _export({ global: true, forced: !nativeUrl }, {
    URLSearchParams: URLSearchParamsConstructor
  });

  // Wrap `fetch` for correct work with polyfilled `URLSearchParams`
  // https://github.com/zloirock/core-js/issues/674
  if (!nativeUrl && typeof $fetch == 'function' && typeof Headers == 'function') {
    _export({ global: true, enumerable: true, forced: true }, {
      fetch: function fetch(input /* , init */) {
        var args = [input];
        var init, body, headers;
        if (arguments.length > 1) {
          init = arguments[1];
          if (isObject(init)) {
            body = init.body;
            if (classof(body) === URL_SEARCH_PARAMS) {
              headers = init.headers ? new Headers(init.headers) : new Headers();
              if (!headers.has('content-type')) {
                headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
              }
              init = objectCreate(init, {
                body: createPropertyDescriptor(0, String(body)),
                headers: createPropertyDescriptor(0, headers)
              });
            }
          }
          args.push(init);
        } return $fetch.apply(this, args);
      }
    });
  }

  var web_urlSearchParams = {
    URLSearchParams: URLSearchParamsConstructor,
    getState: getInternalParamsState
  };

  // TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`











  var codeAt = stringMultibyte.codeAt;





  var NativeURL = global_1.URL;
  var URLSearchParams$1 = web_urlSearchParams.URLSearchParams;
  var getInternalSearchParamsState = web_urlSearchParams.getState;
  var setInternalState$4 = internalState.set;
  var getInternalURLState = internalState.getterFor('URL');
  var floor$7 = Math.floor;
  var pow$2 = Math.pow;

  var INVALID_AUTHORITY = 'Invalid authority';
  var INVALID_SCHEME = 'Invalid scheme';
  var INVALID_HOST = 'Invalid host';
  var INVALID_PORT = 'Invalid port';

  var ALPHA = /[A-Za-z]/;
  // eslint-disable-next-line regexp/no-obscure-range -- safe
  var ALPHANUMERIC = /[\d+-.A-Za-z]/;
  var DIGIT = /\d/;
  var HEX_START = /^0x/i;
  var OCT = /^[0-7]+$/;
  var DEC = /^\d+$/;
  var HEX = /^[\dA-Fa-f]+$/;
  /* eslint-disable no-control-regex -- safe */
  var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
  var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
  var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g;
  var TAB_AND_NEW_LINE = /[\t\n\r]/g;
  /* eslint-enable no-control-regex -- safe */
  var EOF;

  var parseHost = function (url, input) {
    var result, codePoints, index;
    if (input.charAt(0) == '[') {
      if (input.charAt(input.length - 1) != ']') return INVALID_HOST;
      result = parseIPv6(input.slice(1, -1));
      if (!result) return INVALID_HOST;
      url.host = result;
    // opaque host
    } else if (!isSpecial(url)) {
      if (FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT.test(input)) return INVALID_HOST;
      result = '';
      codePoints = arrayFrom(input);
      for (index = 0; index < codePoints.length; index++) {
        result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
      }
      url.host = result;
    } else {
      input = stringPunycodeToAscii(input);
      if (FORBIDDEN_HOST_CODE_POINT.test(input)) return INVALID_HOST;
      result = parseIPv4(input);
      if (result === null) return INVALID_HOST;
      url.host = result;
    }
  };

  var parseIPv4 = function (input) {
    var parts = input.split('.');
    var partsLength, numbers, index, part, radix, number, ipv4;
    if (parts.length && parts[parts.length - 1] == '') {
      parts.pop();
    }
    partsLength = parts.length;
    if (partsLength > 4) return input;
    numbers = [];
    for (index = 0; index < partsLength; index++) {
      part = parts[index];
      if (part == '') return input;
      radix = 10;
      if (part.length > 1 && part.charAt(0) == '0') {
        radix = HEX_START.test(part) ? 16 : 8;
        part = part.slice(radix == 8 ? 1 : 2);
      }
      if (part === '') {
        number = 0;
      } else {
        if (!(radix == 10 ? DEC : radix == 8 ? OCT : HEX).test(part)) return input;
        number = parseInt(part, radix);
      }
      numbers.push(number);
    }
    for (index = 0; index < partsLength; index++) {
      number = numbers[index];
      if (index == partsLength - 1) {
        if (number >= pow$2(256, 5 - partsLength)) return null;
      } else if (number > 255) return null;
    }
    ipv4 = numbers.pop();
    for (index = 0; index < numbers.length; index++) {
      ipv4 += numbers[index] * pow$2(256, 3 - index);
    }
    return ipv4;
  };

  // eslint-disable-next-line max-statements -- TODO
  var parseIPv6 = function (input) {
    var address = [0, 0, 0, 0, 0, 0, 0, 0];
    var pieceIndex = 0;
    var compress = null;
    var pointer = 0;
    var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

    var char = function () {
      return input.charAt(pointer);
    };

    if (char() == ':') {
      if (input.charAt(1) != ':') return;
      pointer += 2;
      pieceIndex++;
      compress = pieceIndex;
    }
    while (char()) {
      if (pieceIndex == 8) return;
      if (char() == ':') {
        if (compress !== null) return;
        pointer++;
        pieceIndex++;
        compress = pieceIndex;
        continue;
      }
      value = length = 0;
      while (length < 4 && HEX.test(char())) {
        value = value * 16 + parseInt(char(), 16);
        pointer++;
        length++;
      }
      if (char() == '.') {
        if (length == 0) return;
        pointer -= length;
        if (pieceIndex > 6) return;
        numbersSeen = 0;
        while (char()) {
          ipv4Piece = null;
          if (numbersSeen > 0) {
            if (char() == '.' && numbersSeen < 4) pointer++;
            else return;
          }
          if (!DIGIT.test(char())) return;
          while (DIGIT.test(char())) {
            number = parseInt(char(), 10);
            if (ipv4Piece === null) ipv4Piece = number;
            else if (ipv4Piece == 0) return;
            else ipv4Piece = ipv4Piece * 10 + number;
            if (ipv4Piece > 255) return;
            pointer++;
          }
          address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
          numbersSeen++;
          if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
        }
        if (numbersSeen != 4) return;
        break;
      } else if (char() == ':') {
        pointer++;
        if (!char()) return;
      } else if (char()) return;
      address[pieceIndex++] = value;
    }
    if (compress !== null) {
      swaps = pieceIndex - compress;
      pieceIndex = 7;
      while (pieceIndex != 0 && swaps > 0) {
        swap = address[pieceIndex];
        address[pieceIndex--] = address[compress + swaps - 1];
        address[compress + --swaps] = swap;
      }
    } else if (pieceIndex != 8) return;
    return address;
  };

  var findLongestZeroSequence = function (ipv6) {
    var maxIndex = null;
    var maxLength = 1;
    var currStart = null;
    var currLength = 0;
    var index = 0;
    for (; index < 8; index++) {
      if (ipv6[index] !== 0) {
        if (currLength > maxLength) {
          maxIndex = currStart;
          maxLength = currLength;
        }
        currStart = null;
        currLength = 0;
      } else {
        if (currStart === null) currStart = index;
        ++currLength;
      }
    }
    if (currLength > maxLength) {
      maxIndex = currStart;
      maxLength = currLength;
    }
    return maxIndex;
  };

  var serializeHost = function (host) {
    var result, index, compress, ignore0;
    // ipv4
    if (typeof host == 'number') {
      result = [];
      for (index = 0; index < 4; index++) {
        result.unshift(host % 256);
        host = floor$7(host / 256);
      } return result.join('.');
    // ipv6
    } else if (typeof host == 'object') {
      result = '';
      compress = findLongestZeroSequence(host);
      for (index = 0; index < 8; index++) {
        if (ignore0 && host[index] === 0) continue;
        if (ignore0) ignore0 = false;
        if (compress === index) {
          result += index ? ':' : '::';
          ignore0 = true;
        } else {
          result += host[index].toString(16);
          if (index < 7) result += ':';
        }
      }
      return '[' + result + ']';
    } return host;
  };

  var C0ControlPercentEncodeSet = {};
  var fragmentPercentEncodeSet = objectAssign({}, C0ControlPercentEncodeSet, {
    ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1
  });
  var pathPercentEncodeSet = objectAssign({}, fragmentPercentEncodeSet, {
    '#': 1, '?': 1, '{': 1, '}': 1
  });
  var userinfoPercentEncodeSet = objectAssign({}, pathPercentEncodeSet, {
    '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1
  });

  var percentEncode = function (char, set) {
    var code = codeAt(char, 0);
    return code > 0x20 && code < 0x7F && !has(set, char) ? char : encodeURIComponent(char);
  };

  var specialSchemes = {
    ftp: 21,
    file: null,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
  };

  var isSpecial = function (url) {
    return has(specialSchemes, url.scheme);
  };

  var includesCredentials = function (url) {
    return url.username != '' || url.password != '';
  };

  var cannotHaveUsernamePasswordPort = function (url) {
    return !url.host || url.cannotBeABaseURL || url.scheme == 'file';
  };

  var isWindowsDriveLetter = function (string, normalized) {
    var second;
    return string.length == 2 && ALPHA.test(string.charAt(0))
      && ((second = string.charAt(1)) == ':' || (!normalized && second == '|'));
  };

  var startsWithWindowsDriveLetter = function (string) {
    var third;
    return string.length > 1 && isWindowsDriveLetter(string.slice(0, 2)) && (
      string.length == 2 ||
      ((third = string.charAt(2)) === '/' || third === '\\' || third === '?' || third === '#')
    );
  };

  var shortenURLsPath = function (url) {
    var path = url.path;
    var pathSize = path.length;
    if (pathSize && (url.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
      path.pop();
    }
  };

  var isSingleDot = function (segment) {
    return segment === '.' || segment.toLowerCase() === '%2e';
  };

  var isDoubleDot = function (segment) {
    segment = segment.toLowerCase();
    return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
  };

  // States:
  var SCHEME_START = {};
  var SCHEME = {};
  var NO_SCHEME = {};
  var SPECIAL_RELATIVE_OR_AUTHORITY = {};
  var PATH_OR_AUTHORITY = {};
  var RELATIVE = {};
  var RELATIVE_SLASH = {};
  var SPECIAL_AUTHORITY_SLASHES = {};
  var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
  var AUTHORITY = {};
  var HOST = {};
  var HOSTNAME = {};
  var PORT = {};
  var FILE = {};
  var FILE_SLASH = {};
  var FILE_HOST = {};
  var PATH_START = {};
  var PATH = {};
  var CANNOT_BE_A_BASE_URL_PATH = {};
  var QUERY = {};
  var FRAGMENT = {};

  // eslint-disable-next-line max-statements -- TODO
  var parseURL = function (url, input, stateOverride, base) {
    var state = stateOverride || SCHEME_START;
    var pointer = 0;
    var buffer = '';
    var seenAt = false;
    var seenBracket = false;
    var seenPasswordToken = false;
    var codePoints, char, bufferCodePoints, failure;

    if (!stateOverride) {
      url.scheme = '';
      url.username = '';
      url.password = '';
      url.host = null;
      url.port = null;
      url.path = [];
      url.query = null;
      url.fragment = null;
      url.cannotBeABaseURL = false;
      input = input.replace(LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
    }

    input = input.replace(TAB_AND_NEW_LINE, '');

    codePoints = arrayFrom(input);

    while (pointer <= codePoints.length) {
      char = codePoints[pointer];
      switch (state) {
        case SCHEME_START:
          if (char && ALPHA.test(char)) {
            buffer += char.toLowerCase();
            state = SCHEME;
          } else if (!stateOverride) {
            state = NO_SCHEME;
            continue;
          } else return INVALID_SCHEME;
          break;

        case SCHEME:
          if (char && (ALPHANUMERIC.test(char) || char == '+' || char == '-' || char == '.')) {
            buffer += char.toLowerCase();
          } else if (char == ':') {
            if (stateOverride && (
              (isSpecial(url) != has(specialSchemes, buffer)) ||
              (buffer == 'file' && (includesCredentials(url) || url.port !== null)) ||
              (url.scheme == 'file' && !url.host)
            )) return;
            url.scheme = buffer;
            if (stateOverride) {
              if (isSpecial(url) && specialSchemes[url.scheme] == url.port) url.port = null;
              return;
            }
            buffer = '';
            if (url.scheme == 'file') {
              state = FILE;
            } else if (isSpecial(url) && base && base.scheme == url.scheme) {
              state = SPECIAL_RELATIVE_OR_AUTHORITY;
            } else if (isSpecial(url)) {
              state = SPECIAL_AUTHORITY_SLASHES;
            } else if (codePoints[pointer + 1] == '/') {
              state = PATH_OR_AUTHORITY;
              pointer++;
            } else {
              url.cannotBeABaseURL = true;
              url.path.push('');
              state = CANNOT_BE_A_BASE_URL_PATH;
            }
          } else if (!stateOverride) {
            buffer = '';
            state = NO_SCHEME;
            pointer = 0;
            continue;
          } else return INVALID_SCHEME;
          break;

        case NO_SCHEME:
          if (!base || (base.cannotBeABaseURL && char != '#')) return INVALID_SCHEME;
          if (base.cannotBeABaseURL && char == '#') {
            url.scheme = base.scheme;
            url.path = base.path.slice();
            url.query = base.query;
            url.fragment = '';
            url.cannotBeABaseURL = true;
            state = FRAGMENT;
            break;
          }
          state = base.scheme == 'file' ? FILE : RELATIVE;
          continue;

        case SPECIAL_RELATIVE_OR_AUTHORITY:
          if (char == '/' && codePoints[pointer + 1] == '/') {
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
            pointer++;
          } else {
            state = RELATIVE;
            continue;
          } break;

        case PATH_OR_AUTHORITY:
          if (char == '/') {
            state = AUTHORITY;
            break;
          } else {
            state = PATH;
            continue;
          }

        case RELATIVE:
          url.scheme = base.scheme;
          if (char == EOF) {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = base.path.slice();
            url.query = base.query;
          } else if (char == '/' || (char == '\\' && isSpecial(url))) {
            state = RELATIVE_SLASH;
          } else if (char == '?') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = base.path.slice();
            url.query = '';
            state = QUERY;
          } else if (char == '#') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = base.path.slice();
            url.query = base.query;
            url.fragment = '';
            state = FRAGMENT;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = base.path.slice();
            url.path.pop();
            state = PATH;
            continue;
          } break;

        case RELATIVE_SLASH:
          if (isSpecial(url) && (char == '/' || char == '\\')) {
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          } else if (char == '/') {
            state = AUTHORITY;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            state = PATH;
            continue;
          } break;

        case SPECIAL_AUTHORITY_SLASHES:
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          if (char != '/' || buffer.charAt(pointer + 1) != '/') continue;
          pointer++;
          break;

        case SPECIAL_AUTHORITY_IGNORE_SLASHES:
          if (char != '/' && char != '\\') {
            state = AUTHORITY;
            continue;
          } break;

        case AUTHORITY:
          if (char == '@') {
            if (seenAt) buffer = '%40' + buffer;
            seenAt = true;
            bufferCodePoints = arrayFrom(buffer);
            for (var i = 0; i < bufferCodePoints.length; i++) {
              var codePoint = bufferCodePoints[i];
              if (codePoint == ':' && !seenPasswordToken) {
                seenPasswordToken = true;
                continue;
              }
              var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
              if (seenPasswordToken) url.password += encodedCodePoints;
              else url.username += encodedCodePoints;
            }
            buffer = '';
          } else if (
            char == EOF || char == '/' || char == '?' || char == '#' ||
            (char == '\\' && isSpecial(url))
          ) {
            if (seenAt && buffer == '') return INVALID_AUTHORITY;
            pointer -= arrayFrom(buffer).length + 1;
            buffer = '';
            state = HOST;
          } else buffer += char;
          break;

        case HOST:
        case HOSTNAME:
          if (stateOverride && url.scheme == 'file') {
            state = FILE_HOST;
            continue;
          } else if (char == ':' && !seenBracket) {
            if (buffer == '') return INVALID_HOST;
            failure = parseHost(url, buffer);
            if (failure) return failure;
            buffer = '';
            state = PORT;
            if (stateOverride == HOSTNAME) return;
          } else if (
            char == EOF || char == '/' || char == '?' || char == '#' ||
            (char == '\\' && isSpecial(url))
          ) {
            if (isSpecial(url) && buffer == '') return INVALID_HOST;
            if (stateOverride && buffer == '' && (includesCredentials(url) || url.port !== null)) return;
            failure = parseHost(url, buffer);
            if (failure) return failure;
            buffer = '';
            state = PATH_START;
            if (stateOverride) return;
            continue;
          } else {
            if (char == '[') seenBracket = true;
            else if (char == ']') seenBracket = false;
            buffer += char;
          } break;

        case PORT:
          if (DIGIT.test(char)) {
            buffer += char;
          } else if (
            char == EOF || char == '/' || char == '?' || char == '#' ||
            (char == '\\' && isSpecial(url)) ||
            stateOverride
          ) {
            if (buffer != '') {
              var port = parseInt(buffer, 10);
              if (port > 0xFFFF) return INVALID_PORT;
              url.port = (isSpecial(url) && port === specialSchemes[url.scheme]) ? null : port;
              buffer = '';
            }
            if (stateOverride) return;
            state = PATH_START;
            continue;
          } else return INVALID_PORT;
          break;

        case FILE:
          url.scheme = 'file';
          if (char == '/' || char == '\\') state = FILE_SLASH;
          else if (base && base.scheme == 'file') {
            if (char == EOF) {
              url.host = base.host;
              url.path = base.path.slice();
              url.query = base.query;
            } else if (char == '?') {
              url.host = base.host;
              url.path = base.path.slice();
              url.query = '';
              state = QUERY;
            } else if (char == '#') {
              url.host = base.host;
              url.path = base.path.slice();
              url.query = base.query;
              url.fragment = '';
              state = FRAGMENT;
            } else {
              if (!startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
                url.host = base.host;
                url.path = base.path.slice();
                shortenURLsPath(url);
              }
              state = PATH;
              continue;
            }
          } else {
            state = PATH;
            continue;
          } break;

        case FILE_SLASH:
          if (char == '/' || char == '\\') {
            state = FILE_HOST;
            break;
          }
          if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
            if (isWindowsDriveLetter(base.path[0], true)) url.path.push(base.path[0]);
            else url.host = base.host;
          }
          state = PATH;
          continue;

        case FILE_HOST:
          if (char == EOF || char == '/' || char == '\\' || char == '?' || char == '#') {
            if (!stateOverride && isWindowsDriveLetter(buffer)) {
              state = PATH;
            } else if (buffer == '') {
              url.host = '';
              if (stateOverride) return;
              state = PATH_START;
            } else {
              failure = parseHost(url, buffer);
              if (failure) return failure;
              if (url.host == 'localhost') url.host = '';
              if (stateOverride) return;
              buffer = '';
              state = PATH_START;
            } continue;
          } else buffer += char;
          break;

        case PATH_START:
          if (isSpecial(url)) {
            state = PATH;
            if (char != '/' && char != '\\') continue;
          } else if (!stateOverride && char == '?') {
            url.query = '';
            state = QUERY;
          } else if (!stateOverride && char == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (char != EOF) {
            state = PATH;
            if (char != '/') continue;
          } break;

        case PATH:
          if (
            char == EOF || char == '/' ||
            (char == '\\' && isSpecial(url)) ||
            (!stateOverride && (char == '?' || char == '#'))
          ) {
            if (isDoubleDot(buffer)) {
              shortenURLsPath(url);
              if (char != '/' && !(char == '\\' && isSpecial(url))) {
                url.path.push('');
              }
            } else if (isSingleDot(buffer)) {
              if (char != '/' && !(char == '\\' && isSpecial(url))) {
                url.path.push('');
              }
            } else {
              if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
                if (url.host) url.host = '';
                buffer = buffer.charAt(0) + ':'; // normalize windows drive letter
              }
              url.path.push(buffer);
            }
            buffer = '';
            if (url.scheme == 'file' && (char == EOF || char == '?' || char == '#')) {
              while (url.path.length > 1 && url.path[0] === '') {
                url.path.shift();
              }
            }
            if (char == '?') {
              url.query = '';
              state = QUERY;
            } else if (char == '#') {
              url.fragment = '';
              state = FRAGMENT;
            }
          } else {
            buffer += percentEncode(char, pathPercentEncodeSet);
          } break;

        case CANNOT_BE_A_BASE_URL_PATH:
          if (char == '?') {
            url.query = '';
            state = QUERY;
          } else if (char == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (char != EOF) {
            url.path[0] += percentEncode(char, C0ControlPercentEncodeSet);
          } break;

        case QUERY:
          if (!stateOverride && char == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (char != EOF) {
            if (char == "'" && isSpecial(url)) url.query += '%27';
            else if (char == '#') url.query += '%23';
            else url.query += percentEncode(char, C0ControlPercentEncodeSet);
          } break;

        case FRAGMENT:
          if (char != EOF) url.fragment += percentEncode(char, fragmentPercentEncodeSet);
          break;
      }

      pointer++;
    }
  };

  // `URL` constructor
  // https://url.spec.whatwg.org/#url-class
  var URLConstructor = function URL(url /* , base */) {
    var that = anInstance(this, URLConstructor, 'URL');
    var base = arguments.length > 1 ? arguments[1] : undefined;
    var urlString = String(url);
    var state = setInternalState$4(that, { type: 'URL' });
    var baseState, failure;
    if (base !== undefined) {
      if (base instanceof URLConstructor) baseState = getInternalURLState(base);
      else {
        failure = parseURL(baseState = {}, String(base));
        if (failure) throw TypeError(failure);
      }
    }
    failure = parseURL(state, urlString, null, baseState);
    if (failure) throw TypeError(failure);
    var searchParams = state.searchParams = new URLSearchParams$1();
    var searchParamsState = getInternalSearchParamsState(searchParams);
    searchParamsState.updateSearchParams(state.query);
    searchParamsState.updateURL = function () {
      state.query = String(searchParams) || null;
    };
    if (!descriptors) {
      that.href = serializeURL.call(that);
      that.origin = getOrigin.call(that);
      that.protocol = getProtocol.call(that);
      that.username = getUsername.call(that);
      that.password = getPassword.call(that);
      that.host = getHost.call(that);
      that.hostname = getHostname.call(that);
      that.port = getPort.call(that);
      that.pathname = getPathname.call(that);
      that.search = getSearch.call(that);
      that.searchParams = getSearchParams.call(that);
      that.hash = getHash.call(that);
    }
  };

  var URLPrototype = URLConstructor.prototype;

  var serializeURL = function () {
    var url = getInternalURLState(this);
    var scheme = url.scheme;
    var username = url.username;
    var password = url.password;
    var host = url.host;
    var port = url.port;
    var path = url.path;
    var query = url.query;
    var fragment = url.fragment;
    var output = scheme + ':';
    if (host !== null) {
      output += '//';
      if (includesCredentials(url)) {
        output += username + (password ? ':' + password : '') + '@';
      }
      output += serializeHost(host);
      if (port !== null) output += ':' + port;
    } else if (scheme == 'file') output += '//';
    output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
    if (query !== null) output += '?' + query;
    if (fragment !== null) output += '#' + fragment;
    return output;
  };

  var getOrigin = function () {
    var url = getInternalURLState(this);
    var scheme = url.scheme;
    var port = url.port;
    if (scheme == 'blob') try {
      return new URLConstructor(scheme.path[0]).origin;
    } catch (error) {
      return 'null';
    }
    if (scheme == 'file' || !isSpecial(url)) return 'null';
    return scheme + '://' + serializeHost(url.host) + (port !== null ? ':' + port : '');
  };

  var getProtocol = function () {
    return getInternalURLState(this).scheme + ':';
  };

  var getUsername = function () {
    return getInternalURLState(this).username;
  };

  var getPassword = function () {
    return getInternalURLState(this).password;
  };

  var getHost = function () {
    var url = getInternalURLState(this);
    var host = url.host;
    var port = url.port;
    return host === null ? ''
      : port === null ? serializeHost(host)
      : serializeHost(host) + ':' + port;
  };

  var getHostname = function () {
    var host = getInternalURLState(this).host;
    return host === null ? '' : serializeHost(host);
  };

  var getPort = function () {
    var port = getInternalURLState(this).port;
    return port === null ? '' : String(port);
  };

  var getPathname = function () {
    var url = getInternalURLState(this);
    var path = url.path;
    return url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
  };

  var getSearch = function () {
    var query = getInternalURLState(this).query;
    return query ? '?' + query : '';
  };

  var getSearchParams = function () {
    return getInternalURLState(this).searchParams;
  };

  var getHash = function () {
    var fragment = getInternalURLState(this).fragment;
    return fragment ? '#' + fragment : '';
  };

  var accessorDescriptor = function (getter, setter) {
    return { get: getter, set: setter, configurable: true, enumerable: true };
  };

  if (descriptors) {
    objectDefineProperties(URLPrototype, {
      // `URL.prototype.href` accessors pair
      // https://url.spec.whatwg.org/#dom-url-href
      href: accessorDescriptor(serializeURL, function (href) {
        var url = getInternalURLState(this);
        var urlString = String(href);
        var failure = parseURL(url, urlString);
        if (failure) throw TypeError(failure);
        getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
      }),
      // `URL.prototype.origin` getter
      // https://url.spec.whatwg.org/#dom-url-origin
      origin: accessorDescriptor(getOrigin),
      // `URL.prototype.protocol` accessors pair
      // https://url.spec.whatwg.org/#dom-url-protocol
      protocol: accessorDescriptor(getProtocol, function (protocol) {
        var url = getInternalURLState(this);
        parseURL(url, String(protocol) + ':', SCHEME_START);
      }),
      // `URL.prototype.username` accessors pair
      // https://url.spec.whatwg.org/#dom-url-username
      username: accessorDescriptor(getUsername, function (username) {
        var url = getInternalURLState(this);
        var codePoints = arrayFrom(String(username));
        if (cannotHaveUsernamePasswordPort(url)) return;
        url.username = '';
        for (var i = 0; i < codePoints.length; i++) {
          url.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
        }
      }),
      // `URL.prototype.password` accessors pair
      // https://url.spec.whatwg.org/#dom-url-password
      password: accessorDescriptor(getPassword, function (password) {
        var url = getInternalURLState(this);
        var codePoints = arrayFrom(String(password));
        if (cannotHaveUsernamePasswordPort(url)) return;
        url.password = '';
        for (var i = 0; i < codePoints.length; i++) {
          url.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
        }
      }),
      // `URL.prototype.host` accessors pair
      // https://url.spec.whatwg.org/#dom-url-host
      host: accessorDescriptor(getHost, function (host) {
        var url = getInternalURLState(this);
        if (url.cannotBeABaseURL) return;
        parseURL(url, String(host), HOST);
      }),
      // `URL.prototype.hostname` accessors pair
      // https://url.spec.whatwg.org/#dom-url-hostname
      hostname: accessorDescriptor(getHostname, function (hostname) {
        var url = getInternalURLState(this);
        if (url.cannotBeABaseURL) return;
        parseURL(url, String(hostname), HOSTNAME);
      }),
      // `URL.prototype.port` accessors pair
      // https://url.spec.whatwg.org/#dom-url-port
      port: accessorDescriptor(getPort, function (port) {
        var url = getInternalURLState(this);
        if (cannotHaveUsernamePasswordPort(url)) return;
        port = String(port);
        if (port == '') url.port = null;
        else parseURL(url, port, PORT);
      }),
      // `URL.prototype.pathname` accessors pair
      // https://url.spec.whatwg.org/#dom-url-pathname
      pathname: accessorDescriptor(getPathname, function (pathname) {
        var url = getInternalURLState(this);
        if (url.cannotBeABaseURL) return;
        url.path = [];
        parseURL(url, pathname + '', PATH_START);
      }),
      // `URL.prototype.search` accessors pair
      // https://url.spec.whatwg.org/#dom-url-search
      search: accessorDescriptor(getSearch, function (search) {
        var url = getInternalURLState(this);
        search = String(search);
        if (search == '') {
          url.query = null;
        } else {
          if ('?' == search.charAt(0)) search = search.slice(1);
          url.query = '';
          parseURL(url, search, QUERY);
        }
        getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
      }),
      // `URL.prototype.searchParams` getter
      // https://url.spec.whatwg.org/#dom-url-searchparams
      searchParams: accessorDescriptor(getSearchParams),
      // `URL.prototype.hash` accessors pair
      // https://url.spec.whatwg.org/#dom-url-hash
      hash: accessorDescriptor(getHash, function (hash) {
        var url = getInternalURLState(this);
        hash = String(hash);
        if (hash == '') {
          url.fragment = null;
          return;
        }
        if ('#' == hash.charAt(0)) hash = hash.slice(1);
        url.fragment = '';
        parseURL(url, hash, FRAGMENT);
      })
    });
  }

  // `URL.prototype.toJSON` method
  // https://url.spec.whatwg.org/#dom-url-tojson
  redefine(URLPrototype, 'toJSON', function toJSON() {
    return serializeURL.call(this);
  }, { enumerable: true });

  // `URL.prototype.toString` method
  // https://url.spec.whatwg.org/#URL-stringification-behavior
  redefine(URLPrototype, 'toString', function toString() {
    return serializeURL.call(this);
  }, { enumerable: true });

  if (NativeURL) {
    var nativeCreateObjectURL = NativeURL.createObjectURL;
    var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
    // `URL.createObjectURL` method
    // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    if (nativeCreateObjectURL) redefine(URLConstructor, 'createObjectURL', function createObjectURL(blob) {
      return nativeCreateObjectURL.apply(NativeURL, arguments);
    });
    // `URL.revokeObjectURL` method
    // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    if (nativeRevokeObjectURL) redefine(URLConstructor, 'revokeObjectURL', function revokeObjectURL(url) {
      return nativeRevokeObjectURL.apply(NativeURL, arguments);
    });
  }

  setToStringTag(URLConstructor, 'URL');

  _export({ global: true, forced: !nativeUrl, sham: !descriptors }, {
    URL: URLConstructor
  });

  /**
   * Copyright (c) 2017 Copyright brainpoint All Rights Reserved.
   * Author: lipengxiang
   * Desc:
   */
  function getFileByBase64(base64Data, fileName) {
    //将base64转换为blob
    var arr = base64Data.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    var blob = new Blob([u8arr], {
      type: mime
    }); //将blob转换为file

    blob.lastModifiedDate = new Date();
    blob.name = fileName || 'image';
    return blob;
  }
  /**
   * @param file File对象.
   * @param callback (base64Data)=>void
   */

  function getImageBase64ByFile(file, callback) {
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      callback(reader.result);
    };
  }
  /**
   * @param fileInput 文件的input.
   * @param callback (base64Data, width, height)=>void
   * @param outputFormat ? 图片格式
   */

  function getImageBase64(fileInput, callback, outputFormat) {
    var url;

    if (navigator.userAgent.indexOf("MSIE") >= 1) {
      // IE
      url = fileInput.value;
    } else if (navigator.userAgent.indexOf("Firefox") > 0) {
      // Firefox
      url = window.URL.createObjectURL(fileInput.files.item(0));
    } else if (navigator.userAgent.indexOf("Chrome") > 0) {
      // Chrome
      url = window.URL.createObjectURL(fileInput.files.item(0));
    } else {
      url = window.URL.createObjectURL(fileInput.files.item(0));
    }

    if (!url) {
      callback.call(this, null);
      return;
    }

    var canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d"),
        img = new Image();
    img.crossOrigin = "Anonymous";

    img.onload = function () {
      canvas.height = img.height;
      canvas.width = img.width;
      ctx.drawImage(img, 0, 0);
      var dataURL = canvas.toDataURL(outputFormat || "image/png");
      callback.call(this, dataURL, img.width, img.height);
      canvas = null;
    };

    img.src = url;
  }
  /**
   * 图片压缩
   * @param {*} base64Data 
   * @param {*} maxSize 最大的宽或高的尺寸, 0则为1024;
   * @param {*} callback (base64Data, width, height)=>void
   */

  function compressImage(base64Data, maxSize, outputFormat, callback) {
    maxSize = maxSize > 0 ? maxSize : 1024;
    var maxW = maxSize;
    var maxH = maxSize;
    var image = new Image();
    image.addEventListener("load", function (e) {
      var ratio; //图片的压缩比

      var needCompress = false; // 是否需要压缩

      if (maxW < image.naturalWidth) {
        needCompress = true;
        ratio = image.naturalWidth / maxW;
        maxH = image.naturalHeight / ratio;
      } //经过处理后，实际图片的尺寸为1024 * 640;


      if (maxH < image.naturalHeight) {
        needCompress = true;
        ratio = image.naturalHeight / maxH;
        maxW = image.naturalWidth / ratio;
      }

      if (!needCompress) {
        maxW = image.naturalWidth;
        maxH = image.naturalHeight;
        callback && callback(base64Data, maxW, maxH);
        return;
      } //如果不需要压缩，需要获取图片的实际尺寸


      var canvas = document.createElement("canvas");
      canvas.width = maxW;
      canvas.height = maxH;
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, maxW, maxH);
      ctx.drawImage(image, 0, 0, maxW, maxH); // toDataURL的第二个参数表示图片质量，取值为0-1 1为原图

      var compressImage = canvas.toDataURL(outputFormat || "image/png");
      canvas = null;
      callback && callback(compressImage, maxW, maxH);
    });
    image.src = base64Data;
  }

  var script = {
    name: "",
    components: {},
    props: {
      timeout: {
        "default": 10000,
        type: Number
      },
      disabled: {
        "default": false,
        type: Boolean
      },
      tip: {
        "default": '点击上传',
        type: String
      },
      data: {
        type: String
      },
      serverUrl: {
        type: String
      },
      accept: {
        type: String
      },
      httpHeaders: {
        validator: function validator(value) {
          return !value || _typeof(value) === 'object';
        }
      },
      breakpointResume: {
        validator: function validator(value) {
          return !value || typeof value === 'function';
        }
      },
      crossDomain: {
        "default": true,
        type: Boolean
      },
      withCredentials: {
        "default": true,
        type: Boolean
      },
      maxFileSize: {
        "default": 0,
        type: Number
      },
      coverUrl: {
        "default": "",
        type: String
      },
      enableDragFile: {
        "default": true,
        type: Boolean
      },
      textErrFileNotFound: {
        "default": "未选择文件!",
        type: String
      },
      textErrFileSizeExceed: {
        "default": "选择的文件大小超出最大值!",
        type: String
      },
      textErrFileHashError: {
        "default": "计算文件哈希值时发生错误,请重新选择文件!",
        type: String
      },
      textErrNetError: {
        "default": "网络错误,请稍后重试!",
        type: String
      }
    },
    data: function data() {
      return {
        classDrapEnter: false,
        coverRealUrl: "",
        percentage: "0%",
        uploader: null,
        isUploading: false,
        fileIsImage: true,
        filename: null,
        fileType: null
      };
    },
    watch: {
      coverUrl: function coverUrl(val, oldVal) {
        this.coverRealUrl = val;
      },
      enableDragFile: function enableDragFile(val, oldVal) {
        this.enableDragFile(val);
      }
    },
    mounted: function mounted() {
      this.coverRealUrl = this.coverUrl;

      if (this.enableDragFile) {
        this.enableFiledrag(this.enableDragFile);
      }
    },
    methods: {
      reset: function reset() {
        if (this.uploader) {
          this.uploader.abort();
          this.uploader = null;
        }

        var fileInput = this.$refs.fileInput;
        this.percentage = "0%";
        fileInput.value = '';
        this.coverRealUrl = null;
        this.fileType = null;
        this.filename = null;
        this.isUploading = false;
      },
      upload: function upload$1(e, file) {
        var _this = this;

        if (this.uploader) {
          this.uploader.abort();
          this.uploader = null;
          this.isUploading = false;
        }

        this.percentage = "0%";
        this.coverRealUrl = null;
        this.fileType = null;
        this.filename = null;
        this.isUploading = false;
        var localImage;

        if (file) {
          if (file.type.indexOf('image/') == 0) {
            getImageBase64ByFile(file, function (base64Data) {
              _newArrowCheck(this, _this);

              localImage = base64Data; //this.coverRealUrl = localImage;
            }.bind(this));
            this.fileIsImage = true;
            this.filename = null;
          } else {
            var ii = file.name.lastIndexOf('.');
            ii = file.name.substr(ii + 1);
            this.fileType = this.getSupportFileTypeIcon(ii);
            this.fileIsImage = false;
            this.filename = file.name;
          }
        } else {
          var fileInput = this.$refs.fileInput;

          if (fileInput.files[0].type.indexOf('image/') == 0) {
            getImageBase64(fileInput, function (base64Data, width, height) {
              _newArrowCheck(this, _this);

              localImage = base64Data;
            }.bind(this));
            this.fileIsImage = true;
            this.filename = null;
          } else {
            var _ii = fileInput.files[0].name.lastIndexOf('.');

            _ii = fileInput.files[0].name.substr(_ii + 1);
            this.fileType = this.getSupportFileTypeIcon(_ii);
            this.fileIsImage = false;
            this.filename = fileInput.files[0].name;
          }
        }

        var options = {
          timeout: this.timeout,
          data: this.data,
          crossDomain: this.crossDomain,
          withCredentials: this.withCredentials,
          headers: this.httpHeaders,
          breakpointResume: this.breakpointResume,
          fileInfo: file ? {
            fileObj: file
          } : {
            formObj: $(this.$refs.form),
            fileObj: $(this.$refs.fileInput)
          },
          uploadUrl: this.serverUrl,
          maxFileSize: this.maxFileSize,
          beginCB: function beginCB(fieObj, uploader) {
            _newArrowCheck(this, _this);

            this.uploader = uploader;
            this.isUploading = true;
          }.bind(this),
          finishCB: function finishCB(err, fileObj, serverData) {
            _newArrowCheck(this, _this);

            this.percentage = "0%";
            this.isUploading = false;

            if (err) {
              if (err == Err.FILE_NOT_FOUND) {
                bpDialog.apiWidget.showAlert(this.textErrFileNotFound);
              } else if (err == Err.FILE_SIZE_EXCEED) {
                bpDialog.apiWidget.showAlert(this.textErrFileSizeExceed);
              } else if (err == Err.FILE_HASH_ERROR) {
                bpDialog.apiWidget.showAlert(this.textErrFileHashError);
              } else if (err == Err.NET_ERROR) {
                bpDialog.apiWidget.showAlert(this.textErrNetError);
              } else {
                bpDialog.apiWidget.showAlert(err.toString());
              }

              this.coverRealUrl = null;
              this.fileType = null;
              this.filename = null;
              this.$emit('uploadError', err);
            } else {
              this.coverRealUrl = localImage;
              this.$emit('uploadSuccess', serverData);
            }
          }.bind(this),
          progressCB: function progressCB(fileObj, percent) {
            _newArrowCheck(this, _this);

            percent = percent == 0 ? 0.01 : percent;
            this.percentage = percent * 100 + "%";
            this.$emit('uploadProgress', percent);
          }.bind(this)
        };

        if (options.uploadUrl) {
          upload(options);
        } else {
          this.reset();
          bpDialog.apiWidget.showAlert('props `serverUrl` is null');
        }
      },
      getSupportFileTypeIcon: function getSupportFileTypeIcon(type) {
        type = type.toLowerCase();

        if (!Number.isNaN(Number.parseInt(type[0]))) {
          return '_' + type;
        }

        switch (type) {
          case 'doc':
          case 'docx':
            return 'doc';

          case 'ppt':
          case 'pptx':
            return 'ppt';

          case 'xls':
          case 'xlsx':
            return 'xls';

          default:
            return type;
        }
      },
      browseFile: function browseFile() {
        if (this.percentage != '0%') return false;
        var fileInput = this.$refs.fileInput;
        fileInput.click();
        return false;
      },
      enableFiledrag: function enableFiledrag(isEnable) {
        this.$refs.main.ondragover = null;
        this.$refs.main.ondrop = null;
        this.$refs.main.ondragenter = null;
        this.$refs.main.ondragleave = null;

        if (isEnable) {
          document.ondragover = function (e) {
            e.preventDefault();
          };

          document.ondrop = function (e) {
            e.preventDefault();
          };

          this.$refs.main.ondragover = function (e) {
            e.preventDefault();
          };

          this.$refs.main.ondrop = this._dropHandle;
          this.$refs.main.ondragenter = this._dragEnter;
          this.$refs.main.ondragleave = this._dragLeave;
        }
      },
      _dragEnter: function _dragEnter() {
        this.classDrapEnter = true;
      },
      _dragLeave: function _dragLeave() {
        this.classDrapEnter = false;
      },
      _dropHandle: function _dropHandle(e) {
        this.reset();
        var list = e.dataTransfer.files;

        if (list.length > 0) {
          var file = list[0];
          var accept = this.accept;

          if (accept) {
            accept = febs.String.replace(accept, ' ', '');
            accept = accept.split(',');
            var fc = file.type.split('/');

            for (var i = 0; i < accept.length; i++) {
              var ac = accept[i].split('/');

              if ((fc[0] == ac[0] || ac[0] == '*') && (ac[1] == '*' || fc[1] == ac[1])) {
                this.upload(null, file);
              }
            }

            return;
          }

          this.upload(null, file);
        }
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function (context) {
        style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  /* script */
  var __vue_script__ = script;
  /* template */

  var __vue_render__ = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("div", {
      staticClass: "bp-uploader",
      "class": {
        "bp-uploader__disabled": _vm.disabled,
        "bp-uploader__drag": _vm.classDrapEnter
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.browseFile.apply(null, arguments);
        }
      }
    }, [_c("div", {
      staticClass: "bp-uploader__progress",
      style: {
        width: _vm.percentage
      }
    }), _vm._v(" "), _c("div", {
      ref: "main",
      staticClass: "bp-uploader__file-content-main",
      staticStyle: {
        width: "100%",
        height: "100%"
      }
    }, [_vm.fileIsImage && _vm.isUploading ? _c("div", {
      staticClass: "bp-uploader__add-icon",
      attrs: {
        "data-action": "uploading"
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.reset();
        }
      }
    }, [_c("bp-icon", {
      attrs: {
        name: "bp-uploader_cancel",
        width: "22px",
        height: "22px"
      }
    })], 1) : _vm.fileIsImage && _vm.coverRealUrl && _vm.coverRealUrl.length > 0 ? _c("div", {
      staticStyle: {
        flex: "1"
      }
    }, [_c("img", {
      staticClass: "bp-uploader__cover",
      attrs: {
        src: _vm.coverRealUrl,
        alt: "",
        title: _vm.tip
      }
    })]) : _vm.fileIsImage ? _c("div", {
      staticClass: "bp-uploader__add-icon",
      attrs: {
        title: _vm.tip
      }
    }, [_c("bp-icon", {
      attrs: {
        name: "bp-uploader_add",
        width: "22px",
        height: "22px"
      }
    })], 1) : _vm._e(), _vm._v(" "), !_vm.fileIsImage && _vm.isUploading ? _c("div", {
      staticClass: "bp-uploader__add-icon bp-uploader__uploading-icon-file",
      attrs: {
        "data-action": "uploading"
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.reset();
        }
      }
    }, [_c("bp-icon", {
      attrs: {
        name: "bp-uploader_cancel",
        width: "22px",
        height: "22px"
      }
    })], 1) : _vm._e(), _vm._v(" "), !_vm.fileIsImage && _vm.fileType ? _c("div", {
      "class": _vm.isUploading ? "bp-uploader__uploading-icon-filetype" : "",
      staticStyle: {
        flex: "1"
      }
    }, [_c("div", {
      staticClass: "bp-uploader__cover bp-uploader__cover__file",
      attrs: {
        title: _vm.tip,
        "data-type": _vm.fileType
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "bp-uploader__cover__file__name"
    }, [_vm._v(_vm._s(_vm.filename))])]) : !_vm.fileIsImage && !_vm.isUploading ? _c("div", {
      staticClass: "bp-uploader__add-icon",
      attrs: {
        title: _vm.tip
      }
    }, [_c("bp-icon", {
      attrs: {
        name: "bp-uploader_add",
        width: "22px",
        height: "22px"
      }
    })], 1) : _vm._e(), _vm._v(" "), _c("form", {
      ref: "form",
      staticClass: "bp-uploader__fileform",
      style: {
        visibility: "hidden",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        opacity: 0
      },
      attrs: {
        method: "post",
        role: "form",
        enctype: "multipart/form-data"
      }
    }, [_c("input", {
      ref: "fileInput",
      staticClass: "bp-uploader__img_input",
      attrs: {
        type: "file",
        name: "file",
        accept: _vm.accept
      },
      on: {
        change: _vm.upload
      }
    })])]), _vm._v(" "), _vm._t("default")], 2);
  };

  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;
  /* style */

  var __vue_inject_styles__ = undefined;
  /* scoped */

  var __vue_scope_id__ = undefined;
  /* module identifier */

  var __vue_module_identifier__ = undefined;
  /* functional template */

  var __vue_is_functional_template__ = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__ = /*#__PURE__*/normalizeComponent({
    render: __vue_render__,
    staticRenderFns: __vue_staticRenderFns__
  }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

  /**
   * Copyright (c) 2017 Copyright brainpoint All Rights Reserved.
   * Author: lipengxiang
   * Desc:
   */
  /**
   * post方式上传文件
   * 使用 multipart/form-data 方式.
   * @param cfg:  object, 其中
   *              {
   *                data:       , // 上传到服务器的任意字符串数据.
   *                fileInfo:   , // 文件信息
   *                  imageBase64:   , // 图片的base64数据
   *                  filename:       , // 图片文件名.
   *                  fileObj:        , // input 文件对象.
   *                uploadUrl:  , // 上传文件内容的url. 系统将自动使用 uploadUrl?crc32=&size=的方式来上传.
   *                maxFileSize:    , // 允许上传的最大文件.0表示无限制.默认为0
   *                beginCB:     , // 上传开始的回调. function(fieObj, uploader); 调用uploader.abort() 可以停止上传.
   *                finishCB:    , // 上传完成后的回调. function(err, fileObj, serverData, xhr=null)
   *                               //                   err:  - uploadErr.FILE_NOT_FOUND    未选择文件.
   *                               //                         - uploadErr.FILE_SIZE_EXCEED  文件大小超出允许的最大值.
   *                               //                         - uploadErr.FILE_HASH_ERROR   计算本地文件hash值时错误.
   *                               //                         - uploadErr.NET_ERROR         ajax上传时出错.
   *                               //                         - 其他异常对象
   *                               //                   serverData: 服务器返回的数据.
   *                progressCB:  , // 上传进度的回调. function(fileObj, percent),
   *                headers: {     // 设置request headers
   *                  'customHeader': 'value'
   *                },
   *                crossDomain: true,     // 跨域, 默认为true
   *                withCredentials: true, // 是否附带cookie, 默认为true,
   *                checkoutCrc32: true,   // 是否上传 crc32,size,ajaxmark(防止chrome优化) 三个参数.
   *                timeout: 5000,        // 默认为 5000
   *                sliceOffset: 0,       // 上传数据起始偏移地址.
   *                sliceLength: -1,      // 上传数据段长度 (-1表示到结尾).
   *              }
   */

  function upload$1(cfg) {
    var control_upload_cb = cfg.finishCB;
    var control_upload_progress_cb = cfg.progressCB;
    var control_upload_begin_cb = cfg.beginCB;
    var control_upload_url = cfg.uploadUrl;
    var control_upload_maxFileSize = !cfg.maxFileSize ? Number.MAX_SAFE_INTEGER : cfg.maxFileSize;
    var control_sliceOffset = cfg.sliceOffset || 0;
    var control_sliceLength = cfg.sliceLength || -1;
    var file = getFileByBase64(cfg.fileInfo.imageBase64, cfg.fileInfo.filename);
    cfg.fileObj = cfg.fileInfo.fileObj;

    if (!file) {
      if (control_upload_cb) control_upload_cb(Err.FILE_NOT_FOUND, cfg.fileObj, null);
      return;
    }

    if (file.size > control_upload_maxFileSize) {
      if (control_upload_cb) control_upload_cb(Err.FILE_SIZE_EXCEED, cfg.fileObj, null);
      return;
    }

    var urlQueryIndex = control_upload_url.indexOf("?");

    if (urlQueryIndex < 0) {
      control_upload_url += "?";
    } else if (urlQueryIndex < control_upload_url.length - 1) {
      control_upload_url += "&";
    }

    var timeout = cfg.timeout;

    function uploadFile() {
      var filesize = this.file.size;

      if (this.sliceLength == -1) {
        this.sliceLength = filesize - this.sliceOffset;
      }

      filesize = filesize - this.sliceOffset;

      if (this.sliceLength > filesize) {
        this.sliceLength = filesize;
      } else {
        filesize = this.sliceLength;
      }

      var urlpath;

      if (this.checkoutCrc32) {
        urlpath = this.control_upload_url + "crc32=" + this.crc + "&size=" + filesize + (this.data ? "&data=" + this.data : "");
      } else {
        urlpath = this.control_upload_url + "size=" + filesize;
      }

      var per = this.sliceOffset / this.file.size;
      var per2 = this.sliceLength / this.file.size;

      try {
        var ctx = this;
        var con = submitFile([this.file], {
          sliceOffset: this.sliceOffset,
          sliceLength: this.sliceLength,
          fileIndex: 0,
          timeout: this.timeout,
          method: "POST",
          url: urlpath,
          progress: function progress(percentComplete) {
            percentComplete = percentComplete ? parseFloat(percentComplete.toFixed(2)) : 0;
            percentComplete = per + per2 * percentComplete;
            percentComplete = parseFloat(percentComplete.toFixed(2));
            if (ctx.control_upload_progress_cb) ctx.control_upload_progress_cb(ctx.fileObj, percentComplete);
          },
          error: function error() {
            if (ctx.control_upload_cb) ctx.control_upload_cb(Err.NET_ERROR, ctx.fileObj, null); // ctx.fileObj[0].value="";
          },
          success: function success(r) {
            try {
              r = JSON.parse(r);
            } catch (e) {
              r = {};
            }

            if (ctx.control_upload_cb) ctx.control_upload_cb(null, ctx.fileObj, r);
            ctx.fileObj[0].value = "";
          },
          complete: function complete(xhr, responseText) {
            if (xhr.status != 200) {
              try {
                if (ctx.control_upload_cb) ctx.control_upload_cb(Err.NET_ERROR, ctx.fileObj, responseText, xhr);
              } catch (e) {}
            } else {
              ctx.fileObj[0].value = "";
            }
          },
          crossDomain: this.crossDomain,
          headers: this.headers,
          withCredentials: this.withCredentials
        });
        if (this.control_upload_begin_cb) this.control_upload_begin_cb(this.fileObj, con);
      } catch (e) {
        if (this.control_upload_cb) this.control_upload_cb(e, this.fileObj, null); // this.fileObj[0].value="";
      }
    } // function.


    if (cfg.checkoutCrc32) {
      crypt.crc32_fileSegment(file, control_sliceOffset, control_sliceLength, function (crc) {
        if (crc) {
          uploadFile.bind(febs$1.utils.mergeMap(this, {
            crc: crc
          }))();
        } else {
          if (this.control_upload_cb) this.control_upload_cb(Err.FILE_HASH_ERROR, this.fileObj, null); // this.fileObj[0].value="";
        }
      }.bind({
        timeout: timeout,
        checkoutCrc32: cfg.checkoutCrc32,
        control_upload_url: control_upload_url,
        fileObj: cfg.fileObj,
        file: file,
        data: cfg.data,
        control_upload_progress_cb: control_upload_progress_cb,
        control_upload_cb: control_upload_cb,
        crossDomain: cfg.crossDomain,
        headers: cfg.headers,
        withCredentials: cfg.withCredentials,
        control_upload_begin_cb: control_upload_begin_cb,
        sliceOffset: control_sliceOffset,
        sliceLength: control_sliceLength
      }));
    } else {
      uploadFile.bind({
        timeout: timeout,
        checkoutCrc32: cfg.checkoutCrc32,
        control_upload_url: control_upload_url,
        fileObj: cfg.fileObj,
        file: file,
        data: cfg.data,
        control_upload_progress_cb: control_upload_progress_cb,
        control_upload_cb: control_upload_cb,
        crossDomain: cfg.crossDomain,
        headers: cfg.headers,
        withCredentials: cfg.withCredentials,
        control_upload_begin_cb: control_upload_begin_cb,
        sliceOffset: control_sliceOffset,
        sliceLength: control_sliceLength
      })();
    }
  }

  // `Array.prototype.fill` method
  // https://tc39.es/ecma262/#sec-array.prototype.fill
  _export({ target: 'Array', proto: true }, {
    fill: arrayFill
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('fill');

  var script$1 = {
    name: "vue-bp-uploader-image-crop-preview",
    components: {
      bpIcon: bpLibs.VueObject.bpIcon
    },
    props: {
      visible: {
        "default": false,
        type: Boolean
      },
      clipSharp: {
        validator: function validator(value) {
          return !value || value === 'square' || value === 'circle';
        }
      },
      outputFormat: {
        "default": 'image/png',
        type: String
      }
    },
    data: function data() {
      return {
        visibleReal: false,
        clipPos: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        },
        clipSharpReal: null,
        outputFormatReal: null
      };
    },
    watch: {
      visible: function visible(v) {
        this.visibleReal = v;
      },
      visibleReal: function visibleReal(v) {
        if (this.visible != v) {
          this.$emit('update:visible', v);
        }

        if (!v) {
          this.$timer.clearAllInterval();
        }
      }
    },
    mounted: function mounted() {
      this.clipSharpReal = this.clipSharp;
      this.outputFormatReal = this.outputFormat;
      this.visibleReal = this.visible;
      this.canvasSize = febs$1.dom.getViewPort();
      this.canvasSize.width *= 0.9;
      this.canvasSize.width = Math.floor(this.canvasSize.width);
      this.canvasSize.height *= 0.9;
      this.canvasSize.height = Math.floor(this.canvasSize.height);
      $(this.$refs.canvas).attr('width', this.canvasSize.width);
      $(this.$refs.canvas).attr('height', this.canvasSize.height);
      febs$1.dom.addEventListener(window, "orientationchange", this.onresize, false);

      if (!febs$1.utils.browserIsMobile()) {
        febs$1.dom.addEventListener(window, "resize", this.onresize);
      }
    },
    beforeDestroy: function beforeDestroy() {
      febs$1.dom.removeEventListener(window, "orientationchange", this.onresize, false);

      if (!febs$1.utils.browserIsMobile()) {
        febs$1.dom.removeEventListener(window, "resize", this.onresize);
      }
    },
    methods: {
      getImageBase64: function getImageBase64(outputFormatReal) {
        var cw = Math.floor(this.canvas.canvas.width);
        var ch = Math.floor(this.canvas.canvas.height);
        var ccw = Math.floor(Number(cw - this.clipPos.left - this.clipPos.right));
        var cch = Math.floor(Number(ch - this.clipPos.top - this.clipPos.bottom));
        var canvas = document.createElement("canvas"),
            ctx = canvas.getContext("2d");
        canvas.width = Math.floor(ccw / cw * this.image.width);

        if (this.clipSharpReal) {
          canvas.height = canvas.width;
        } else {
          canvas.height = Math.floor(cch / ch * this.image.height);
        }

        ctx.drawImage(this.image, this.clipPos.left / cw * this.image.width, this.clipPos.top / ch * this.image.height, ccw / cw * this.image.width, cch / ch * this.image.height, 0, 0, canvas.width, canvas.height);
        var dataURL = canvas.toDataURL(outputFormatReal || "image/png");
        canvas = null;
        return dataURL;
      },
      onok: function onok() {
        var url = this.getImageBase64(this.outputFormatReal);
        this.visibleReal = false;
        this.$emit('clipFinish', url);

        if (this._clipFinishListener) {
          this._clipFinishListener(url);
        }
      },
      _addClipFinishListener: function _addClipFinishListener(func) {
        this._clipFinishListener = func;
      },
      onresize: function onresize() {
        if (this.visibleReal) {
          this.drawImage(this.imageBase64);
        }
      },
      drawImage: function drawImage(imageBase64) {
        this.canvasSize = febs$1.dom.getViewPort();
        this.canvasSize.width *= 0.9;
        this.canvasSize.width = Math.floor(this.canvasSize.width);
        this.canvasSize.height *= 0.9;
        this.canvasSize.height = Math.floor(this.canvasSize.height);
        this.imageBase64 = imageBase64;
        var img = new Image();
        var appCtx = this;

        img.onload = function () {
          var _this = this;

          var imw = img.width;
          var imh = img.height;
          var cw = appCtx.canvasSize.width;
          var ch = appCtx.canvasSize.height;
          var sw = 1.0,
              sh = 1.0;

          if (imw > cw) {
            sw = cw / imw;
          }

          if (imh > ch) {
            sh = ch / imh;
          }

          sw = Math.min(sw, sh);
          var imrw = sw * imw;
          var imrh = sw * imh;
          imrw = Math.floor(imrw);
          imrh = Math.floor(imrh);
          appCtx.canvasSize.width = imrw;
          appCtx.canvasSize.height = imrh;

          if (appCtx.clipSharpReal) {
            appCtx.clipPos = {
              top: imrw < imrh ? (imrh - imrw) / 2 : 0,
              bottom: imrw > imrh ? 0 : imrh - imrw - (imrh - imrw) / 2,
              left: imrw > imrh ? (imrw - imrh) / 2 : 0,
              right: imrw > imrh ? imrw - imrh - (imrw - imrh) / 2 : 0
            };
          } else {
            appCtx.clipPos = {
              top: 0,
              bottom: 0,
              left: 0,
              right: 0
            };
          }

          $(appCtx.$refs.canvas).attr('width', imrw);
          $(appCtx.$refs.canvas).attr('height', imrh);
          $(appCtx.$refs.canvasWrap).css('width', imrw + 'px');
          $(appCtx.$refs.canvasWrap).css('height', imrh + 'px');
          appCtx.canvas = appCtx.$refs.canvas.getContext('2d');
          appCtx.$timer.setTimeout(function () {
            _newArrowCheck(this, _this);

            appCtx.onDrawImage();
          }.bind(this), 10);
        };

        img.src = imageBase64;
        this.visibleReal = true;
        this.image = img;
      },
      onDrawImage: function onDrawImage() {
        var ctx = this.canvas;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.save();
        ctx.globalAlpha = 1;
        ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height, 0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.beginPath();

        if (this.clipSharpReal === 'circle') {
          var r = Number(ctx.canvas.width - this.clipPos.left - this.clipPos.right) / 2;
          ctx.arc(Math.floor(this.clipPos.left + r), Math.floor(this.clipPos.top + r), r, 0, Math.PI * 2, true);
        } else {
          ctx.rect(Math.floor(Number(this.clipPos.left)), Math.floor(Number(this.clipPos.top)), Math.floor(Number(ctx.canvas.width - this.clipPos.left - this.clipPos.right)), Math.floor(Number(ctx.canvas.height - this.clipPos.top - this.clipPos.bottom)));
        } //ctx.fillStyle="#FFF";


        ctx.fill();
        ctx.clip();
        ctx.globalAlpha = 1;
        ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height, 0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.restore();
      },
      onClipMouseDown: function onClipMouseDown(e) {
        var currentTarget = e.currentTarget;

        if (!$(currentTarget).hasClass('bp-uploader-image-crop-preview__cliprect')) {
          return;
        }

        this.mouseDown = true;
        this.mousePos = {
          x: e.clientX,
          y: e.clientY
        };
        this.mouseClipPos = febs$1.utils.mergeMap(this.clipPos); // let css = window.getComputedStyle(currentTarget);

        this.$timer.setInterval(this.onDrawImage, 30);
      },
      onClipMouseUp: function onClipMouseUp(e) {
        // clip.
        if (this.mouseDown) {
          var currentTarget = e.currentTarget;
          currentTarget = $(currentTarget);

          this._moveClip(currentTarget, e.clientX, e.clientY);
        }

        this.mouseDown = false; // horn.

        if (this.mouseHornDown) {
          this._moveHornClip(e.clientX, e.clientY);
        }

        this.mouseHornDown = null;
        this.$timer.clearAllInterval();
      },
      onClipMouseMove: function onClipMouseMove(e) {
        if (this.mouseHornDown) {
          this._moveHornClip(e.clientX, e.clientY);
        } else if (this.mouseDown) {
          var currentTarget = e.currentTarget;
          currentTarget = $(currentTarget);

          this._moveClip(currentTarget, e.clientX, e.clientY);
        }
      },
      onClipHornMouseDown: function onClipHornMouseDown(e) {
        var currentTarget = e.currentTarget;

        if (!$(currentTarget).hasClass('bp-uploader-image-crop-preview__cliprect__horn')) {
          return;
        }

        this.mouseHornDown = $(currentTarget);
        this.mouseHornPos = {
          x: e.clientX,
          y: e.clientY
        };
        this.mouseHornClipPos = febs$1.utils.mergeMap(this.clipPos);
        this.$timer.setInterval(this.onDrawImage, 30);
      },
      _moveClip: function _moveClip(currentTarget, x, y) {
        var mousePos = {
          x: x - this.mousePos.x,
          y: y - this.mousePos.y
        };

        if (mousePos.y < 0) {
          if (this.mouseClipPos.top + mousePos.y < 0) {
            mousePos.y = -this.mouseClipPos.top;
          }
        } else if (mousePos.y > 0) {
          if (this.mouseClipPos.bottom - mousePos.y < 0) {
            mousePos.y = this.mouseClipPos.bottom;
          }
        }

        if (mousePos.x < 0) {
          if (this.mouseClipPos.left + mousePos.x < 0) {
            mousePos.x = -this.mouseClipPos.left;
          }
        } else if (mousePos.x > 0) {
          if (this.mouseClipPos.right - mousePos.x < 0) {
            mousePos.x = this.mouseClipPos.right;
          }
        }

        this.$set(this.clipPos, 'top', this.mouseClipPos.top + mousePos.y);
        this.$set(this.clipPos, 'left', this.mouseClipPos.left + mousePos.x);
        this.$set(this.clipPos, 'bottom', this.mouseClipPos.bottom - mousePos.y);
        this.$set(this.clipPos, 'right', this.mouseClipPos.right - mousePos.x);
      },
      _moveHornClip: function _moveHornClip(x, y) {
        var _this2 = this;

        var mousePos = {
          x: x - this.mouseHornPos.x,
          y: y - this.mouseHornPos.y
        };
        var direction = this.mouseHornDown.attr('data-direction');

        if (direction == 'n' || direction == 'ne' || direction == 'nw') {
          if (this.mouseHornClipPos.top + mousePos.y + this.clipPos.bottom > this.canvasSize.height) {
            mousePos.y = this.canvasSize.height - this.clipPos.bottom - this.mouseHornClipPos.top - min_size;
          } else if (this.mouseHornClipPos.top + mousePos.y < 0) {
            mousePos.y = -this.mouseHornClipPos.top;
          }
        }

        if (direction == 's' || direction == 'se' || direction == 'sw') {
          if (this.clipPos.top + this.mouseHornClipPos.bottom - mousePos.y > this.canvasSize.height) {
            mousePos.y = -(this.canvasSize.height - this.clipPos.top - this.mouseHornClipPos.bottom - min_size);
          } else if (this.mouseHornClipPos.bottom - mousePos.y < 0) {
            mousePos.y = this.mouseHornClipPos.bottom;
          }
        }

        if (direction == 'w' || direction == 'nw' || direction == 'sw') {
          if (this.mouseHornClipPos.left + mousePos.x + this.clipPos.right > this.canvasSize.width) {
            mousePos.x = this.canvasSize.width - this.clipPos.right - this.mouseHornClipPos.left - min_size;
          } else if (this.mouseHornClipPos.left + mousePos.x < 0) {
            mousePos.x = -this.mouseHornClipPos.left;
          }
        }

        if (direction == 'e' || direction == 'ne' || direction == 'se') {
          if (this.clipPos.left + this.mouseHornClipPos.right - mousePos.x > this.canvasSize.width) {
            mousePos.x = -(this.canvasSize.width - this.clipPos.left - this.mouseHornClipPos.right - min_size);
          } else if (this.mouseHornClipPos.right - mousePos.x < 0) {
            mousePos.x = this.mouseHornClipPos.right;
          }
        }

        var moveX = 0;

        if (this.clipSharpReal) {
          var _x = Math.abs(mousePos.x);

          var _y = Math.abs(mousePos.y);

          moveX = Math.min(_x, _y);
        }

        var min_size = 10;

        var mn = function mn() {
          _newArrowCheck(this, _this2);

          this.$set(this.clipPos, 'top', this.mouseHornClipPos.top + mousePos.y);
        }.bind(this);

        var ms = function ms() {
          _newArrowCheck(this, _this2);

          this.$set(this.clipPos, 'bottom', this.mouseHornClipPos.bottom - mousePos.y);
        }.bind(this);

        var mw = function mw() {
          _newArrowCheck(this, _this2);

          this.$set(this.clipPos, 'left', this.mouseHornClipPos.left + mousePos.x);
        }.bind(this);

        var me = function me() {
          _newArrowCheck(this, _this2);

          this.$set(this.clipPos, 'right', this.mouseHornClipPos.right - mousePos.x);
        }.bind(this);

        switch (direction) {
          case 'n':
            mn();
            break;

          case 'ne':
            if (this.clipSharpReal) {
              if (mousePos.x > 0) {
                mousePos.x = moveX;
                mousePos.y = -moveX;
              } else {
                mousePos.x = -moveX;
                mousePos.y = moveX;
              }
            }

            mn();
            me();
            break;

          case 's':
            ms();
            break;

          case 'sw':
            if (this.clipSharpReal) {
              if (mousePos.x > 0) {
                mousePos.x = moveX;
                mousePos.y = -moveX;
              } else {
                mousePos.x = -moveX;
                mousePos.y = moveX;
              }
            }

            mw();
            ms();
            break;

          case 'se':
            if (this.clipSharpReal) {
              if (mousePos.x > 0) {
                mousePos.x = moveX;
                mousePos.y = moveX;
              } else {
                mousePos.x = -moveX;
                mousePos.y = -moveX;
              }
            }

            ms();
            me();
            break;

          case 'w':
            mw();
            break;

          case 'nw':
            if (this.clipSharpReal) {
              if (mousePos.x > 0) {
                mousePos.x = moveX;
                mousePos.y = moveX;
              } else {
                mousePos.x = -moveX;
                mousePos.y = -moveX;
              }
            }

            mw();
            mn();
            break;

          case 'e':
            me();
            break;
        }
      }
    }
  };

  /* script */
  var __vue_script__$1 = script$1;
  /* template */

  var __vue_render__$1 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("div", {
      staticClass: "bp-uploader-image-crop-preview",
      style: {
        display: _vm.visibleReal ? null : "none"
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
        },
        mousemove: function mousemove($event) {
          $event.stopPropagation();
          return _vm.onClipMouseMove.apply(null, arguments);
        },
        mouseup: function mouseup($event) {
          $event.stopPropagation();
          return _vm.onClipMouseUp.apply(null, arguments);
        },
        mouseleave: _vm.onClipMouseUp
      }
    }, [_c("bp-icon", {
      staticClass: "bp-uploader-image-crop-preview__cancel",
      attrs: {
        name: "bp-uploader_cancel",
        width: "22px",
        height: "22px"
      },
      on: {
        click: function click($event) {
          _vm.visibleReal = false;
        }
      }
    }), _vm._v(" "), _c("bp-icon", {
      staticClass: "bp-uploader-image-crop-preview__ok",
      attrs: {
        name: "bp-uploader_ok",
        width: "22px",
        height: "22px"
      },
      on: {
        click: _vm.onok
      }
    }), _vm._v(" "), _c("div", {
      ref: "canvasWrap",
      staticStyle: {
        position: "relative"
      }
    }, [_c("canvas", {
      ref: "canvas"
    }), _vm._v(" "), _c("div", {
      ref: "canvasClip",
      staticClass: "bp-uploader-image-crop-preview__cliprect",
      style: {
        left: _vm.clipPos.left + "px",
        right: _vm.clipPos.right + "px",
        top: _vm.clipPos.top + "px",
        bottom: _vm.clipPos.bottom + "px"
      },
      on: {
        mousedown: function mousedown($event) {
          $event.stopPropagation();
          return _vm.onClipMouseDown.apply(null, arguments);
        }
      }
    }, [_c("span", {
      staticClass: "bp-uploader-image-crop-preview__cliprect__horn",
      attrs: {
        "data-direction": "nw"
      },
      on: {
        mousedown: function mousedown($event) {
          $event.stopPropagation();
          return _vm.onClipHornMouseDown.apply(null, arguments);
        }
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "bp-uploader-image-crop-preview__cliprect__horn",
      attrs: {
        "data-direction": "ne"
      },
      on: {
        mousedown: function mousedown($event) {
          $event.stopPropagation();
          return _vm.onClipHornMouseDown.apply(null, arguments);
        }
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "bp-uploader-image-crop-preview__cliprect__horn",
      attrs: {
        "data-direction": "sw"
      },
      on: {
        mousedown: function mousedown($event) {
          $event.stopPropagation();
          return _vm.onClipHornMouseDown.apply(null, arguments);
        }
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "bp-uploader-image-crop-preview__cliprect__horn",
      attrs: {
        "data-direction": "se"
      },
      on: {
        mousedown: function mousedown($event) {
          $event.stopPropagation();
          return _vm.onClipHornMouseDown.apply(null, arguments);
        }
      }
    }), _vm._v(" "), !_vm.clipSharpReal ? _c("span", {
      staticClass: "bp-uploader-image-crop-preview__cliprect__horn",
      attrs: {
        "data-direction": "n"
      },
      on: {
        mousedown: function mousedown($event) {
          $event.stopPropagation();
          return _vm.onClipHornMouseDown.apply(null, arguments);
        }
      }
    }) : _vm._e(), _vm._v(" "), !_vm.clipSharpReal ? _c("span", {
      staticClass: "bp-uploader-image-crop-preview__cliprect__horn",
      attrs: {
        "data-direction": "s"
      },
      on: {
        mousedown: function mousedown($event) {
          $event.stopPropagation();
          return _vm.onClipHornMouseDown.apply(null, arguments);
        }
      }
    }) : _vm._e(), _vm._v(" "), !_vm.clipSharpReal ? _c("span", {
      staticClass: "bp-uploader-image-crop-preview__cliprect__horn",
      attrs: {
        "data-direction": "w"
      },
      on: {
        mousedown: function mousedown($event) {
          $event.stopPropagation();
          return _vm.onClipHornMouseDown.apply(null, arguments);
        }
      }
    }) : _vm._e(), _vm._v(" "), !_vm.clipSharpReal ? _c("span", {
      staticClass: "bp-uploader-image-crop-preview__cliprect__horn",
      attrs: {
        "data-direction": "e"
      },
      on: {
        mousedown: function mousedown($event) {
          $event.stopPropagation();
          return _vm.onClipHornMouseDown.apply(null, arguments);
        }
      }
    }) : _vm._e()])])], 1);
  };

  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;
  /* style */

  var __vue_inject_styles__$1 = undefined;
  /* scoped */

  var __vue_scope_id__$1 = undefined;
  /* module identifier */

  var __vue_module_identifier__$1 = undefined;
  /* functional template */

  var __vue_is_functional_template__$1 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$1,
    staticRenderFns: __vue_staticRenderFns__$1
  }, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

  var script$2 = {
    name: "vue-bp-uploader-image-crop-preview",
    components: {
      bpIcon: bpLibs$1.VueObject.bpIcon
    },
    props: {
      visible: {
        "default": false,
        type: Boolean
      },
      clipSharp: {
        validator: function validator(value) {
          return !value || value === 'square' || value === 'circle';
        }
      },
      outputFormat: {
        "default": 'image/png',
        type: String
      }
    },
    data: function data() {
      return {
        visibleReal: false,
        clipPos: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        },
        canvasMarginHeight: 60,
        clipPadding: 30,
        clipSharpReal: null,
        outputFormatReal: null,
        imageBase64: null,
        imgScale: 1
      };
    },
    watch: {
      visible: function visible(v) {
        this.visibleReal = v;
      },
      visibleReal: function visibleReal(v) {
        if (this.visible != v) {
          this.$emit('update:visible', v);
        }
      }
    },
    mounted: function mounted() {
      this.clipSharpReal = this.clipSharp;
      this.outputFormatReal = this.outputFormat;
      this.visibleReal = this.visible;
      febs$1.dom.addEventListener(window, "orientationchange", this.onresize, false);
      this.imgScale = 1;
      this.imgOffset = {
        x: 0,
        y: 0
      }; // gesture.

      this.gesture = new bpLibs$1.Gesture(this.$refs.canvasWrap);
      var pinchRecognizer = this.gesture.enablePinchRecognizer();
      var panRecognizer = this.gesture.enablePanRecognizer({
        pointers: 1
      });
      panRecognizer.requireFailure(pinchRecognizer);
      this.gesture.on('pan', this.onClipMouseMove).on('pinch', this.onClipMouseMove);
    },
    beforeDestroy: function beforeDestroy() {
      febs$1.dom.removeEventListener(window, "orientationchange", this.onresize, false);
      this.gesture.dispose();
    },
    methods: {
      getImageBase64: function getImageBase64(outputFormatReal) {
        var img = this.image;
        var mws = img.width;
        var mhs = img.height;
        var mox = this.imgOffset.x;
        var moy = this.imgOffset.y;
        var cw = this.canvas.canvas.width;
        var ch = this.canvas.canvas.height;
        var canvas = document.createElement("canvas"),
            ctx = canvas.getContext("2d");
        canvas.width = (cw - (this.clipPos.left + this.clipPos.right + this.clipPadding * 2) * 2) / 2;
        canvas.height = (ch - (this.clipPos.top + this.clipPos.bottom + this.clipPadding * 2) * 2) / 2;
        var offx = mox + (this.clipPos.left + this.clipPadding) * 2 / this.imgScale;
        var offy = moy + (this.clipPos.top + this.clipPadding) * 2 / this.imgScale;
        ctx.drawImage(img, offx, offy, canvas.width * 2 / this.imgScale, canvas.height * 2 / this.imgScale, 0, 0, canvas.width, canvas.height);
        var dataURL = canvas.toDataURL(outputFormatReal || "image/png");
        canvas = null;
        return dataURL;
      },
      oncancel: function oncancel() {
        this.visibleReal = false;
        this.$emit('cancel');
        if (this._cancelListener) this._cancelListener();
      },
      onok: function onok() {
        var url = this.getImageBase64(this.outputFormatReal);
        this.visibleReal = false;
        this.$emit('clipFinish', url);

        if (this._clipFinishListener) {
          this._clipFinishListener(url);
        }
      },
      _addClipFinishListener: function _addClipFinishListener(func) {
        this._clipFinishListener = func;
      },
      _addCancelListener: function _addCancelListener(func) {
        this._cancelListener = func;
      },
      onresize: function onresize() {
        var _this = this;

        if (this.visibleReal) {
          this.$timer.setTimeout(function () {
            _newArrowCheck(this, _this);

            this.drawImage(this.imageBase64);
          }.bind(this), 30);
        }
      },
      drawImage: function drawImage(imageBase64) {
        this.$timer.clearAllAnimationFrame();
        this.canvasSize = febs$1.dom.getViewPort(); // this.canvasSize.width *= 1;

        this.canvasSize.width = Math.floor(this.canvasSize.width); // this.canvasSize.height *= 1;

        this.canvasSize.height = Math.floor(this.canvasSize.height);
        this.imageBase64 = imageBase64;
        var img = new Image();
        this.imgScale = 1;
        this.imgOffset = {
          x: 0,
          y: 0
        };
        var appCtx = this;

        img.onload = function () {
          var _this2 = this;

          var cw = appCtx.canvasSize.width;
          var ch = appCtx.canvasSize.height - appCtx.canvasMarginHeight;
          cw *= 2;
          ch *= 2;
          appCtx.canvasSize.width = cw;
          appCtx.canvasSize.height = ch;
          appCtx.imgScale = Math.max(cw / img.width, ch / img.height);
          var fixWidth = cw / img.width > ch / img.height;
          cw /= 2;
          ch /= 2;
          appCtx.clipPos = {
            top: cw < ch ? (ch - cw) / 2 : 0,
            bottom: cw > ch ? 0 : ch - cw - (ch - cw) / 2,
            left: cw > ch ? (cw - ch) / 2 : 0,
            right: cw > ch ? cw - ch - (cw - ch) / 2 : 0
          };
          var ccw = cw - appCtx.clipPos.left - appCtx.clipPos.right - appCtx.clipPadding * 2;
          var cch = ch - appCtx.clipPos.top - appCtx.clipPos.bottom - appCtx.clipPadding * 2;
          appCtx.imgScaleMin = fixWidth ? ccw / cw * appCtx.imgScale : cch / ch * appCtx.imgScale; // appCtx.imgScale0 = ()=>appCtx.canvasSize.width / 500.0 / (0.05 * img.width);

          appCtx.imgScale0 = function (v) {
            _newArrowCheck(this, _this2);

            var imgSWidth = appCtx.imgScale * appCtx.image.width;
            v = (v / 0.05 * 2.0 + imgSWidth) / imgSWidth;
            var imgScale = appCtx.imgScale * v;
            imgScale = Math.min(imgScale, 4);
            imgScale = Math.max(imgScale, appCtx.imgScaleMin); // bpDialog.apiWidget.showToast(imgScale);

            return imgScale;
          }.bind(this);

          appCtx.imgOffset.x = (img.width - appCtx.canvasSize.width / appCtx.imgScale) / 2;
          appCtx.imgOffset.y = (img.height - appCtx.canvasSize.height / appCtx.imgScale) / 2;

          if (appCtx.imgOffset.x < 0) {
            appCtx.imgOffset.x = appCtx.imgOffset.x * appCtx.imgScale;
          }

          if (appCtx.imgOffset.y < 0) {
            appCtx.imgOffset.y = appCtx.imgOffset.y * appCtx.imgScale;
          }

          appCtx.$refs.canvas.width = appCtx.canvasSize.width;
          appCtx.$refs.canvas.height = appCtx.canvasSize.height;
          $(appCtx.$refs.canvas).css('width', appCtx.canvasSize.width / 2 + 'px');
          $(appCtx.$refs.canvas).css('height', appCtx.canvasSize.height / 2 + 'px');
          $(appCtx.$refs.canvasWrap).css('width', appCtx.canvasSize.width / 2 + 'px');
          $(appCtx.$refs.canvasWrap).css('height', appCtx.canvasSize.height / 2 + 'px');
          appCtx.canvas = appCtx.$refs.canvas.getContext('2d');

          var fooNo = function fooNo() {
            var _this3 = this;

            _newArrowCheck(this, _this2);

            appCtx.$timer.requestAnimationFrame(function () {
              _newArrowCheck(this, _this3);

              foo();
            }.bind(this));
          }.bind(this);

          var foo = function foo() {
            var _this4 = this;

            _newArrowCheck(this, _this2);

            appCtx.$timer.requestAnimationFrame(function () {
              _newArrowCheck(this, _this4);

              appCtx.onDrawImage();
              fooNo();
            }.bind(this));
          }.bind(this);

          foo();
        };

        img.src = imageBase64;
        this.visibleReal = true;
        this.image = img;
      },
      onDrawImage: function onDrawImage() {
        var img = this.image;
        var mws = img.width;
        var mhs = img.height;
        var mox = this.imgOffset.x;
        var moy = this.imgOffset.y;
        var cmw = (mws - mox) * this.imgScale;
        var cmh = (mhs - moy) * this.imgScale;
        var ctx = this.canvas;
        var cw = ctx.canvas.width;
        var ch = ctx.canvas.height;
        ctx.clearRect(0, 0, cw, ch);
        ctx.save();
        ctx.globalAlpha = 1;
        ctx.drawImage(img, mox, moy, mws - mox, mhs - moy, 0, 0, cmw, cmh);
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, cw, ch);
        ctx.beginPath();

        if (this.clipSharpReal === 'circle') {
          var r = Number(cw / 2 - this.clipPos.left - this.clipPos.right) - this.clipPadding * 2;
          ctx.arc(Math.floor((this.clipPos.left + this.clipPadding) * 2 + r), Math.floor((this.clipPos.top + this.clipPadding) * 2 + r), r, 0, Math.PI * 2, true);
        } else {
          ctx.rect(Math.floor((this.clipPos.left + this.clipPadding) * 2), Math.floor((this.clipPos.top + this.clipPadding) * 2), Math.floor(Number(cw - (this.clipPos.left + this.clipPos.right + this.clipPadding * 2) * 2)), Math.floor(Number(ch - (this.clipPos.top + this.clipPos.bottom + this.clipPadding * 2) * 2)));
        } //ctx.fillStyle="#FFF";


        ctx.fill();
        ctx.clip();
        ctx.globalAlpha = 1;
        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, mox, moy, mws - mox, mhs - moy, 0, 0, cmw, cmh);
        ctx.restore();
      },
      onClipMouseDown: function onClipMouseDown(e) {
        var touch;

        if (e.changedTouches) {
          touch = e.changedTouches[0];
        } else {
          touch = {
            clientX: e.clientX,
            clientY: e.clientY
          };
        }

        this.mousePos = {
          x: touch.clientX,
          y: touch.clientY
        };
        this.mouseClipPos = febs$1.utils.mergeMap(this.clipPos);
        this.mouseImgOffset = febs$1.utils.mergeMap(this.imgOffset); // let css = window.getComputedStyle(currentTarget);

        e.preventDefault();
      },
      onClipMouseUp: function onClipMouseUp(e) {
        // clip.
        this._rightImgScale();

        this._rightImgOffset(); // horn.


        if (this.mouseHornDown) {
          this._moveHornClip(e);
        }

        this.mouseHornDown = null;
        e.preventDefault(); // bpDialog.apiWidget.showToast('up');
      },
      onMainMouseMove: function onMainMouseMove(e) {
        this._moveHornClip(e);

        e.preventDefault();
      },
      onClipMouseMove: function onClipMouseMove(e) {
        if (e.type == 'pan') {
          this._moveClip(e.center.x, e.center.y);
        } else if (e.type == 'pinch') {
          this._moveScaleClip(e.center, e.scale);
        }

        e.preventDefault();
      },
      onClipHornMouseDown: function onClipHornMouseDown(e) {
        var touch;

        if (e.changedTouches) {
          touch = e.changedTouches[0];
        } else {
          touch = {
            clientX: e.clientX,
            clientY: e.clientY
          };
        }

        var currentTarget = e.currentTarget;

        if (!$(currentTarget).hasClass('bp-uploader-image-crop-preview__cliprect__horn')) {
          return;
        }

        this.mouseHornDown = $(currentTarget);
        this.mouseHornPos = {
          x: touch.clientX,
          y: touch.clientY
        };
        this.mouseHornClipPos = febs$1.utils.mergeMap(this.clipPos);
      },
      _moveClip: function _moveClip(x, y) {
        if (this.mouseHornDown) {
          return;
        }

        if (Number.isNaN(x) || Number.isNaN(y) || !this.mousePos) {
          return;
        }

        var mousePos = {
          x: x - this.mousePos.x,
          y: y - this.mousePos.y
        };
        this.imgOffset.x = this.mouseImgOffset.x - mousePos.x * 2;
        this.imgOffset.y = this.mouseImgOffset.y - mousePos.y * 2; // bpDialog.apiWidget.showToast('move');
      },
      _moveScaleClip: function _moveScaleClip(center, scale) {
        if (scale > 1) {
          scale = this.imgScale0(scale - 1);
        } else {
          scale = this.imgScale0(-(1 - scale));
        }

        var imgScaleTmp = scale / this.imgScale;
        this.imgScale = scale;
        this.imgOffset.x *= imgScaleTmp;
        this.imgOffset.y *= imgScaleTmp;

        this._rightImgScale();

        this._rightImgOffset(); // bpDialog.apiWidget.showToast('scale');

      },
      _moveHornClip: function _moveHornClip(e) {
        var _this5 = this;

        if (!this.mouseHornDown) {
          return;
        }

        var touch;

        if (e.changedTouches) {
          touch = e.changedTouches[0];
        } else {
          touch = {
            clientX: e.clientX,
            clientY: e.clientY
          };
        }

        var mousePos = {
          x: touch.clientX - this.mouseHornPos.x,
          y: touch.clientY - this.mouseHornPos.y
        };
        var min_size = 60;
        var direction = this.mouseHornDown.attr('data-direction');

        if (direction == 'n' || direction == 'ne' || direction == 'nw') {
          if (this.mouseHornClipPos.top + mousePos.y + this.clipPos.bottom + this.clipPadding * 2 > this.canvasSize.height / 2 - min_size) {
            mousePos.y = this.canvasSize.height / 2 - this.clipPos.bottom - this.mouseHornClipPos.top - min_size - this.clipPadding * 2;
          } else if (this.mouseHornClipPos.top + mousePos.y < 0) {
            mousePos.y = -this.mouseHornClipPos.top;
          }
        }

        if (direction == 's' || direction == 'se' || direction == 'sw') {
          if (this.clipPos.top + this.mouseHornClipPos.bottom - mousePos.y + this.clipPadding * 2 > this.canvasSize.height / 2 - min_size) {
            mousePos.y = -(this.canvasSize.height / 2 - this.clipPos.top - this.mouseHornClipPos.bottom - min_size - this.clipPadding * 2);
          } else if (this.mouseHornClipPos.bottom - mousePos.y < 0) {
            mousePos.y = this.mouseHornClipPos.bottom;
          }
        }

        if (direction == 'w' || direction == 'nw' || direction == 'sw') {
          if (this.mouseHornClipPos.left + mousePos.x + this.clipPos.right + this.clipPadding * 2 > this.canvasSize.width / 2 - min_size) {
            mousePos.x = this.canvasSize.width / 2 - this.clipPos.right - this.mouseHornClipPos.left - min_size - this.clipPadding * 2;
          } else if (this.mouseHornClipPos.left + mousePos.x < 0) {
            mousePos.x = -this.mouseHornClipPos.left;
          }
        }

        if (direction == 'e' || direction == 'ne' || direction == 'se') {
          if (this.clipPos.left + this.mouseHornClipPos.right - mousePos.x + this.clipPadding * 2 > this.canvasSize.width / 2 - min_size) {
            mousePos.x = -(this.canvasSize.width / 2 - this.clipPos.left - this.mouseHornClipPos.right - min_size - this.clipPadding * 2);
          } else if (this.mouseHornClipPos.right - mousePos.x < 0) {
            mousePos.x = this.mouseHornClipPos.right;
          }
        }

        var mn = function mn() {
          _newArrowCheck(this, _this5);

          this.$set(this.clipPos, 'top', this.mouseHornClipPos.top + mousePos.y);
        }.bind(this);

        var ms = function ms() {
          _newArrowCheck(this, _this5);

          this.$set(this.clipPos, 'bottom', this.mouseHornClipPos.bottom - mousePos.y);
        }.bind(this);

        var mw = function mw() {
          _newArrowCheck(this, _this5);

          this.$set(this.clipPos, 'left', this.mouseHornClipPos.left + mousePos.x);
        }.bind(this);

        var me = function me() {
          _newArrowCheck(this, _this5);

          this.$set(this.clipPos, 'right', this.mouseHornClipPos.right - mousePos.x);
        }.bind(this);

        switch (direction) {
          case 'n':
            mn();
            break;

          case 'ne':
            mn();
            me();
            break;

          case 's':
            ms();
            break;

          case 'sw':
            mw();
            ms();
            break;

          case 'se':
            ms();
            me();
            break;

          case 'w':
            mw();
            break;

          case 'nw':
            mw();
            mn();
            break;

          case 'e':
            me();
            break;
        }
      },
      _rightImgOffset: function _rightImgOffset() {
        var cp = this.clipPadding;
        var c = this.clipPos;

        if (-this.imgOffset.x * this.imgScale > (cp + c.left) * 2) {
          this.imgOffset.x = -(cp + c.left) * 2 / this.imgScale;
        } else if ((this.image.width - this.imgOffset.x) * this.imgScale < this.canvasSize.width - (cp + c.right) * 2) {
          this.imgOffset.x = this.image.width - (this.canvasSize.width - (cp + c.right) * 2) / this.imgScale;
        }

        if (-this.imgOffset.y * this.imgScale > (cp + c.top) * 2) {
          this.imgOffset.y = -(cp + c.top) * 2 / this.imgScale;
        } else if ((this.image.height - this.imgOffset.y) * this.imgScale < this.canvasSize.height - (cp + c.bottom) * 2) {
          this.imgOffset.y = this.image.height - (this.canvasSize.height - (cp + c.bottom) * 2) / this.imgScale;
        }
      },
      _rightImgScale: function _rightImgScale() {
        this.imgScale = Math.max(this.imgScale, this.imgScaleMin);
      }
    }
  };

  /* script */
  var __vue_script__$2 = script$2;
  /* template */

  var __vue_render__$2 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("div", {
      ref: "main",
      staticClass: "bp-uploader-image-crop-preview__mobile",
      style: {
        display: _vm.visibleReal ? null : "none"
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
        }
      }
    }, [_c("button", {
      staticClass: "bp-uploader-image-crop-preview__cancel",
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.oncancel.apply(null, arguments);
        }
      }
    }), _vm._v(" "), _c("button", {
      staticClass: "bp-uploader-image-crop-preview__ok",
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.onok.apply(null, arguments);
        }
      }
    }), _vm._v(" "), _c("div", {
      ref: "canvasWrap",
      staticStyle: {
        position: "relative"
      },
      style: {
        "margin-top": _vm.canvasMarginHeight + "px"
      },
      on: {
        touchmove: function touchmove($event) {
          $event.stopPropagation();
          return _vm.onMainMouseMove.apply(null, arguments);
        },
        touchend: function touchend($event) {
          $event.stopPropagation();
          return _vm.onClipMouseUp.apply(null, arguments);
        },
        touchstart: function touchstart($event) {
          $event.stopPropagation();
          return _vm.onClipMouseDown.apply(null, arguments);
        }
      }
    }, [_c("canvas", {
      ref: "canvas"
    }), _vm._v(" "), _c("div", {
      style: {
        top: _vm.clipPadding + "px",
        left: _vm.clipPadding + "px",
        bottom: _vm.clipPadding + "px",
        right: _vm.clipPadding + "px",
        position: "absolute"
      }
    }, [_c("div", {
      ref: "canvasClip",
      staticClass: "bp-uploader-image-crop-preview__cliprect",
      style: {
        left: _vm.clipPos.left + "px",
        right: _vm.clipPos.right + "px",
        top: _vm.clipPos.top + "px",
        bottom: _vm.clipPos.bottom + "px"
      }
    }, [!_vm.clipSharpReal ? _c("span", {
      staticClass: "bp-uploader-image-crop-preview__cliprect__horn",
      attrs: {
        "data-direction": "n"
      },
      on: {
        touchstart: function touchstart($event) {
          $event.stopPropagation();
          return _vm.onClipHornMouseDown.apply(null, arguments);
        }
      }
    }) : _vm._e(), _vm._v(" "), !_vm.clipSharpReal ? _c("span", {
      staticClass: "bp-uploader-image-crop-preview__cliprect__horn",
      attrs: {
        "data-direction": "e"
      },
      on: {
        touchstart: function touchstart($event) {
          $event.stopPropagation();
          return _vm.onClipHornMouseDown.apply(null, arguments);
        }
      }
    }) : _vm._e(), _vm._v(" "), !_vm.clipSharpReal ? _c("span", {
      staticClass: "bp-uploader-image-crop-preview__cliprect__horn",
      attrs: {
        "data-direction": "s"
      },
      on: {
        touchstart: function touchstart($event) {
          $event.stopPropagation();
          return _vm.onClipHornMouseDown.apply(null, arguments);
        }
      }
    }) : _vm._e(), _vm._v(" "), !_vm.clipSharpReal ? _c("span", {
      staticClass: "bp-uploader-image-crop-preview__cliprect__horn",
      attrs: {
        "data-direction": "w"
      },
      on: {
        touchstart: function touchstart($event) {
          $event.stopPropagation();
          return _vm.onClipHornMouseDown.apply(null, arguments);
        }
      }
    }) : _vm._e()])])])]);
  };

  var __vue_staticRenderFns__$2 = [];
  __vue_render__$2._withStripped = true;
  /* style */

  var __vue_inject_styles__$2 = undefined;
  /* scoped */

  var __vue_scope_id__$2 = undefined;
  /* module identifier */

  var __vue_module_identifier__$2 = undefined;
  /* functional template */

  var __vue_is_functional_template__$2 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$2 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$2,
    staticRenderFns: __vue_staticRenderFns__$2
  }, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

  var imageCropPreview = bpLibs$1.device.browserIsMobile() ? __vue_component__$2 : __vue_component__$1;
  var script$3 = {
    name: "",
    components: {
      bpIcon: bpLibs$1.VueObject.bpIcon
    },
    props: {
      previewRef: {
        validator: function validator(value) {
          return !value || typeof value === 'function';
        }
      },
      timeout: {
        "default": 10000,
        type: Number
      },
      disabled: {
        "default": false,
        type: Boolean
      },
      tip: {
        "default": '点击上传',
        type: String
      },
      data: {
        type: String
      },
      serverUrl: {
        type: String
      },
      httpHeaders: {
        validator: function validator(value) {
          return !value || _typeof(value) === 'object';
        }
      },
      crossDomain: {
        "default": true,
        type: Boolean
      },
      withCredentials: {
        "default": true,
        type: Boolean
      },
      maxFileSize: {
        "default": 0,
        type: Number
      },
      maxImageSize: {
        validator: function validator(value) {
          return !value || value > 0;
        },
        "default": 1024,
        type: Number
      },
      coverUrl: {
        "default": "",
        type: String
      },
      outputFormat: {
        "default": 'image/png',
        type: String
      },
      clipSharp: {
        validator: function validator(value) {
          return !value || value === 'square' || value === 'circle';
        }
      },
      enableDragFile: {
        "default": true,
        type: Boolean
      },
      textErrFileNotFound: {
        "default": "未选择文件!",
        type: String
      },
      textErrFileSizeExceed: {
        "default": "选择的文件大小超出最大值!",
        type: String
      },
      textErrFileHashError: {
        "default": "计算文件哈希值时发生错误,请重新选择文件!",
        type: String
      },
      textErrNetError: {
        "default": "网络错误,请稍后重试!",
        type: String
      }
    },
    data: function data() {
      return {
        classDrapEnter: false,
        coverRealUrl: "",
        percentage: "0%",
        uploader: null,
        isUploading: false
      };
    },
    watch: {
      coverUrl: function coverUrl(val, oldVal) {
        this.coverRealUrl = val;
      },
      enableDragFile: function enableDragFile(val, oldVal) {
        this.enableDragFile(val);
      }
    },
    mounted: function mounted() {
      var _this = this;

      this.coverRealUrl = this.coverUrl;

      if (this.enableDragFile) {
        this.enableFiledrag(this.enableDragFile);
      }

      this.previewId = null;
      this.previewRefReal = this.previewRef;

      if (!this.previewRefReal) {
        this.previewId = 'c' + febs.crypt.uuid();
        $("<div id=\"".concat(this.previewId, "\"></div>")).appendTo($('body')); // 创建实例.

        this.previewRefReal = new Vue({
          render: function render(h) {
            var _this2 = this;

            _newArrowCheck(this, _this);

            return h(imageCropPreview, {
              attrs: {
                id: this.previewId
              },
              props: {
                clipSharp: this.clipSharp,
                outputFormat: this.outputFormat
              },
              on: {
                clipFinish: function clipFinish(imageData) {
                  _newArrowCheck(this, _this2);

                  this.coverRealUrl = imageData;
                  this.$refs.fileInput.value = '';
                  this.onUpload(this.coverRealUrl);
                }.bind(this),
                cancel: function cancel() {
                  _newArrowCheck(this, _this2);

                  this.$refs.fileInput.value = '';
                }.bind(this)
              }
            });
          }.bind(this)
        }).$mount("#".concat(this.previewId)).$children[0];
      } else {
        this.previewRefReal = this.previewRefReal();

        if (!(bpLibs$1.dom.isVueObject(this.previewRefReal) && this.previewRefReal.$vnode.tag.indexOf('bp-uploader-image-crop-preview') >= 0)) {
          throw new Error('previewRef is not component of `bpUploaderImagePreview`');
        }

        this.previewRefReal.$data.clipSharpReal = this.clipSharp;
        this.previewRefReal.$data.outputFormatReal = this.outputFormat;

        this.previewRefReal._addClipFinishListener(function (imageData) {
          _newArrowCheck(this, _this);

          this.coverRealUrl = imageData;
          this.$refs.fileInput.value = '';
          this.onUpload(this.coverRealUrl);
        }.bind(this));

        this.previewRefReal._addCancelListener(function () {
          _newArrowCheck(this, _this);

          this.$refs.fileInput.value = '';
        }.bind(this));
      }
    },
    beforeDestroy: function beforeDestroy() {
      if (this.previewId) {
        $('#' + this.previewId).remove();
      }
    },
    methods: {
      reset: function reset() {
        if (this.uploader) {
          this.uploader.abort();
          this.uploader = null;
        }

        this.$refs.fileInput.value = '';
        this.percentage = "0%";
        this.coverRealUrl = null;
        this.isUploading = false;
      },
      onUpload: function onUpload(imageData) {
        var _this3 = this;

        compressImage(imageData, this.maxImageSize, null, function (base64Data, width, height) {
          var _this4 = this;

          _newArrowCheck(this, _this3);

          this.coverRealUrl = base64Data;
          var options = {
            timeout: this.timeout,
            data: this.data,
            crossDomain: this.crossDomain,
            withCredentials: this.withCredentials,
            headers: this.httpHeaders,
            fileInfo: {
              imageBase64: base64Data,
              filename: this.filename,
              fileObj: $(this.$refs.fileInput)
            },
            uploadUrl: this.serverUrl,
            maxFileSize: this.maxFileSize,
            beginCB: function beginCB(fieObj, uploader) {
              _newArrowCheck(this, _this4);

              this.uploader = uploader;
              this.isUploading = true;
            }.bind(this),
            finishCB: function finishCB(err, fileObj, serverData) {
              _newArrowCheck(this, _this4);

              this.percentage = "0%";
              this.isUploading = false;

              if (err) {
                if (err == Err.FILE_NOT_FOUND) {
                  bpDialog.apiWidget.showAlert(this.textErrFileNotFound);
                } else if (err == Err.FILE_SIZE_EXCEED) {
                  bpDialog.apiWidget.showAlert(this.textErrFileSizeExceed);
                } else if (err == Err.FILE_HASH_ERROR) {
                  bpDialog.apiWidget.showAlert(this.textErrFileHashError);
                } else if (err == Err.NET_ERROR) {
                  bpDialog.apiWidget.showAlert(this.textErrNetError);
                } else {
                  bpDialog.apiWidget.showAlert(err.toString());
                }

                this.reset();
                this.$emit('uploadError', err);
              } else {
                this.coverRealUrl = localImage;
                this.$emit('uploadSuccess', serverData);
              }
            }.bind(this),
            progressCB: function progressCB(fileObj, percent) {
              _newArrowCheck(this, _this4);

              percent = percent == 0 ? 0.01 : percent;
              this.percentage = percent * 100 + "%";
              this.$emit('uploadProgress', percent);
            }.bind(this)
          };

          if (options.uploadUrl) {
            upload$1(options);
          } else {
            this.reset();
            bpDialog.apiWidget.showAlert('props `serverUrl` is null');
          }
        }.bind(this));
      },
      upload: function upload(e, file) {
        var _this5 = this;

        if (this.uploader) {
          this.uploader.abort();
          this.uploader = null;
          this.isUploading = false;
        }

        if (file) {
          getImageBase64ByFile(file, function (base64Data) {
            _newArrowCheck(this, _this5);

            //this.coverRealUrl = localImage;
            if (!base64Data) {
              bpDialog.apiWidget.showAlert(this.textErrFileNotFound);
              return;
            }

            this.filename = file.name;
            this.previewRefReal.drawImage(base64Data);
          }.bind(this));
        } else {
          var fileInput = this.$refs.fileInput;
          getImageBase64(fileInput, function (base64Data, width, height) {
            _newArrowCheck(this, _this5);

            if (!base64Data) {
              bpDialog.apiWidget.showAlert(this.textErrFileNotFound);
              return;
            }

            this.filename = fileInput.value;
            this.previewRefReal.drawImage(base64Data);
          }.bind(this));
        }
      },
      browseFile: function browseFile() {
        if (this.percentage != '0%') return false;
        var fileInput = this.$refs.fileInput;
        fileInput.click();
        return false;
      },
      enableFiledrag: function enableFiledrag(isEnable) {
        this.$refs.main.ondragover = null;
        this.$refs.main.ondrop = null;
        this.$refs.main.ondragenter = null;
        this.$refs.main.ondragleave = null;

        if (isEnable) {
          document.ondragover = function (e) {
            e.preventDefault();
          };

          document.ondrop = function (e) {
            e.preventDefault();
          };

          this.$refs.main.ondragover = function (e) {
            e.preventDefault();
          };

          this.$refs.main.ondrop = this._dropHandle;
          this.$refs.main.ondragenter = this._dragEnter;
          this.$refs.main.ondragleave = this._dragLeave;
        }
      },
      _dragEnter: function _dragEnter() {
        this.classDrapEnter = true;
      },
      _dragLeave: function _dragLeave() {
        this.classDrapEnter = false;
      },
      _dropHandle: function _dropHandle(e) {
        this.reset();
        var list = e.dataTransfer.files;

        if (list.length > 0) {
          var file = list[0];

          if (file.type.indexOf('image/') == 0) {
            this.upload(null, file);
          }
        }
      }
    }
  };

  /* script */
  var __vue_script__$3 = script$3;
  /* template */

  var __vue_render__$3 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("div", {
      staticClass: "bp-uploader-image-crop",
      "class": {
        "bp-uploader-image__disabled": _vm.disabled,
        "bp-uploader-image__drag": _vm.classDrapEnter
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.browseFile.apply(null, arguments);
        }
      }
    }, [_c("div", {
      staticClass: "bp-uploader-image__progress",
      style: {
        width: _vm.percentage
      }
    }), _vm._v(" "), _c("div", {
      ref: "main",
      staticClass: "bp-uploader-image__file-content-main",
      staticStyle: {
        width: "100%",
        height: "100%"
      }
    }, [_vm.isUploading ? _c("div", {
      staticClass: "bp-uploader-image__add-icon",
      attrs: {
        "data-action": "uploading"
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.reset();
        }
      }
    }, [_c("bp-icon", {
      attrs: {
        name: "bp-uploader_cancel",
        width: "22px",
        height: "22px"
      }
    })], 1) : _vm.coverRealUrl && _vm.coverRealUrl.length > 0 ? _c("img", {
      staticClass: "bp-uploader-image__cover",
      attrs: {
        src: _vm.coverRealUrl,
        alt: "",
        title: _vm.tip
      }
    }) : _c("div", {
      staticClass: "bp-uploader-image__add-icon",
      attrs: {
        title: _vm.tip
      }
    }, [_c("bp-icon", {
      attrs: {
        name: "bp-uploader_add",
        width: "22px",
        height: "22px"
      }
    })], 1), _vm._v(" "), _c("form", {
      ref: "form",
      staticClass: "bp-uploader-image__fileform",
      style: {
        visibility: "hidden",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        opacity: 0
      },
      attrs: {
        method: "post",
        role: "form",
        enctype: "multipart/form-data"
      }
    }, [_c("input", {
      ref: "fileInput",
      staticClass: "bp-uploader-image__img_input",
      attrs: {
        type: "file",
        name: "file",
        accept: "image/*"
      },
      on: {
        change: _vm.upload
      }
    })])]), _vm._v(" "), _vm._t("default")], 2);
  };

  var __vue_staticRenderFns__$3 = [];
  __vue_render__$3._withStripped = true;
  /* style */

  var __vue_inject_styles__$3 = undefined;
  /* scoped */

  var __vue_scope_id__$3 = undefined;
  /* module identifier */

  var __vue_module_identifier__$3 = undefined;
  /* functional template */

  var __vue_is_functional_template__$3 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$3 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$3,
    staticRenderFns: __vue_staticRenderFns__$3
  }, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

  function init() {
    bpLibs.icons.registerAliasIcon('bp-uploader_add', 'plus');
    bpLibs.icons.registerAliasIcon('bp-uploader_cancel', 'cancel');
    bpLibs.icons.registerAliasIcon('bp-uploader_ok', 'ok');
  }

  init();
  var bpImageCropPreview = febs.utils.browserIsMobile() ? __vue_component__$2 : __vue_component__$1; // const bpImageCropPreview = bpImageCropPreviewMobile;

  var index = {
    init: init,
    bpFileUploader: __vue_component__,
    bpImageCropUploader: __vue_component__$3,
    bpImageCropPreview: bpImageCropPreview,
    bpImageCropPreviewTablet: __vue_component__$1,
    bpImageCropPreviewMobile: __vue_component__$2
  };

  return index;

})));
//# sourceMappingURL=index.js.map
