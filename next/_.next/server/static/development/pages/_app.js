module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "../node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!************************************************************!*\
  !*** ../node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../node_modules/next/app.js":
/*!***********************************!*\
  !*** ../node_modules/next/app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "../node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "../node_modules/next/dist/client/link.js":
/*!************************************************!*\
  !*** ../node_modules/next/dist/client/link.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "../node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "../node_modules/next/dist/client/router.js":
/*!**************************************************!*\
  !*** ../node_modules/next/dist/client/router.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "../node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "../node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "../node_modules/next/dist/client/with-router.js":
/*!*******************************************************!*\
  !*** ../node_modules/next/dist/client/with-router.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "../node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/mitt.js":
/*!*********************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/mitt.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router-context.js":
/*!*******************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router-context.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/router.js":
/*!******************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/router.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "../node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "../node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "../node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "../node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!****************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/utils.js":
/*!**********************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/utils.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "../node_modules/next/dist/pages/_app.js":
/*!***********************************************!*\
  !*** ../node_modules/next/dist/pages/_app.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, Object.assign({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "../node_modules/next/link.js":
/*!************************************!*\
  !*** ../node_modules/next/link.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "../node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!******************************************************************************!*\
  !*** ../node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "../node_modules/next/node_modules/react-is/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/next/node_modules/react-is/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "../node_modules/react-toastify/dist/ReactToastify.css":
/*!*************************************************************!*\
  !*** ../node_modules/react-toastify/dist/ReactToastify.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../node_modules/slick-carousel/slick/slick-theme.css":
/*!************************************************************!*\
  !*** ../node_modules/slick-carousel/slick/slick-theme.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../node_modules/slick-carousel/slick/slick.css":
/*!******************************************************!*\
  !*** ../node_modules/slick-carousel/slick/slick.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Cart/Checkout/index.js":
/*!*******************************************!*\
  !*** ./components/Cart/Checkout/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Spinner */ "./components/Spinner/index.js");
/* harmony import */ var _components_Details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Details */ "./components/Cart/components/Details/index.js");
/* harmony import */ var _Voucher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Voucher */ "./components/Cart/Voucher/index.js");
/* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/http */ "./services/http.js");
/* harmony import */ var _utils_currency__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/currency */ "./utils/currency.js");
var _jsxFileName = "/Users/webthomaz/Desktop/Desenvolvimento/m/monka/monka-api/next/components/Cart/Checkout/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function CheckoutComponent(props) {
  const {
    onHide,
    show,
    addresses,
    addressSelected,
    cart,
    cartLoading
  } = props;
  const {
    0: paymentMethods,
    1: setPaymentMethods
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: credits,
    1: setCredits
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (addressSelected) {
      data.user_address_id = addressSelected.id;
      setData(() => _objectSpread({}, data, {}, data));
    }
  }, [addressSelected]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function getPaymentMethods() {
      const result = await Object(_services_http__WEBPACK_IMPORTED_MODULE_7__["get"])('/paymentMethod');
      setPaymentMethods(result);

      if (!data.payment_method_id) {
        data.payment_method_id = result[0].id;
        setData(() => _objectSpread({}, data, {}, data));
      }

      setLoading(false);
    }

    async function getCredits() {
      const result = await Object(_services_http__WEBPACK_IMPORTED_MODULE_7__["get"])('/credit');
      setCredits(result);
    }

    getCredits();
    getPaymentMethods();
  }, []);

  async function processCheckout() {
    setError({});

    if (data.payment_method_id === 4 && credits.total_value < cart.total_price) {
      return setError({
        credit: 'Você não tem créditos suficientes para realizar esse pedido. Escolha outra forma de pagamento.'
      });
    }

    if (!data.user_address_id) {
      return setError({
        user_address_id: 'Selecione um endereço para entrega.'
      });
    }

    if (!data.payment_method_id) {
      return setError({
        payment_method_id: 'Selecione a forma de pagamento.'
      });
    } // setLoading(true);


    const result = await Object(_services_http__WEBPACK_IMPORTED_MODULE_7__["post"])('/checkout', data);
    react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].success('Seu pedido fopi enviado com sucesso!', {
      position: react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].POSITION.BOTTOM_CENTER
    });
    router.push(`/order/${result.id}?credit=${result.credit ? result.credit.id : false}`);
  }

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    size: "lg",
    show: show,
    onHide: onHide,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Header, {
    closeButton: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Title, {
    id: "contained-modal-title-vcenter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Finalizar Pedido")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("div", {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("h6", {
    className: "text-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Selecione o endere\xE7o de entrega"), error.user_address_id && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    variant: "danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, error.user_address_id), addresses.map(address => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    key: address.id,
    controlId: `address-${address.id}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Check, {
    type: "radio",
    value: address.id,
    checked: data.user_address_id === address.id,
    label: `
                                ${address.street}, ${address.number} - 
                                ${address.neighborhood.name} 
                            `,
    onChange: e => {
      data.user_address_id = parseInt(e.target.value);
      setError(_objectSpread({}, error, {
        user_address_id: null
      }));
      setData(() => _objectSpread({}, data, {}, data));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  })))), paymentMethods && __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("h6", {
    className: "text-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "Selecione o m\xE9todo de Pagamento"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"], {
    className: "options mt-3",
    horizontal: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, paymentMethods.map(paymentMethod => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"].Item, {
    key: paymentMethod.id,
    active: data.payment_method_id === paymentMethod.id,
    onClick: () => {
      data.payment_method_id = paymentMethod.id;
      setData(() => _objectSpread({}, data, {}, data));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, paymentMethod.name)))), credits.total_value > 0 && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    variant: "success",
    className: "mt-3 shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "Voc\xEA tem ", Object(_utils_currency__WEBPACK_IMPORTED_MODULE_8__["default"])(credits.total_value), " dispon\xEDvel"), error.credit && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    variant: "danger",
    className: "mt-3 shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "Voc\xEA n\xE3o tem cr\xE9ditos suficientes para realizar esse pedido. Escolha outra forma de pagamento."), data.payment_method_id === 4 && credits.total_value < cart.total_price && !error.credit && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    variant: "danger",
    className: "mt-3 shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "Voc\xEA n\xE3o tem cr\xE9ditos suficientes para realizar esse pedido. Escolha outra forma de pagamento."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    controlId: "observation",
    className: "mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "Observa\xE7\xE3o"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    as: "textarea",
    rows: "3",
    placeholder: "Ex: (Troco Para R$ 50,00)",
    onChange: e => {
      data.observation = e.target.value;
      setData(() => _objectSpread({}, data, {}, data));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  })), __jsx(_Voucher__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_5__["default"], {
    cart: cart,
    loading: loading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }), __jsx("div", {
    className: "btn btn-light btn-lg rounded-0 btn-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, cartLoading ? __jsx(_components_Spinner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    animation: "border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }) : 'Total a Pagar: ' + Object(_utils_currency__WEBPACK_IMPORTED_MODULE_8__["default"])(cart.total_price))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Footer, {
    className: "d-flex justify-content-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "secondary",
    onClick: onHide,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "Cancelar"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    onClick: processCheckout,
    disabled: loading || cartLoading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, "Confirmar Pedido", loading && __jsx(_components_Spinner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (CheckoutComponent);

/***/ }),

/***/ "./components/Cart/Quantity/index.js":
/*!*******************************************!*\
  !*** ./components/Cart/Quantity/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_currency__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/currency */ "./utils/currency.js");
/* harmony import */ var _store_actions_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/actions/cart */ "./store/actions/cart.js");
/* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/http */ "./services/http.js");
var _jsxFileName = "/Users/webthomaz/Desktop/Desenvolvimento/m/monka/monka-api/next/components/Cart/Quantity/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






/* harmony default export */ __webpack_exports__["default"] = (function ({
  cartProduct
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    show,
    cart,
    loading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.cart);

  async function incrementQuantity(cartProduct) {
    cartProduct.quantity += 1;
    await Object(_services_http__WEBPACK_IMPORTED_MODULE_5__["patch"])(`/cart/${cart.id}/product/${cartProduct.id}`, {
      quantity: cartProduct.quantity
    });
    dispatch(Object(_store_actions_cart__WEBPACK_IMPORTED_MODULE_4__["loadCart"])());
  }

  async function decrementQuantity(cartProduct) {
    cartProduct.quantity -= 1;

    if (cartProduct.quantity <= 0) {
      cartProduct.quantity = 1;
    }

    await Object(_services_http__WEBPACK_IMPORTED_MODULE_5__["patch"])(`/cart/${cart.id}/product/${cartProduct.id}`, {
      quantity: cartProduct.quantity
    });
    dispatch(Object(_store_actions_cart__WEBPACK_IMPORTED_MODULE_4__["loadCart"])());
  }

  if (!cartProduct) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  });
  return __jsx("div", {
    className: "p-2 bg-light d-flex flex-column text-center block-quantity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "btn-quantity border-0 left btn-sm rounded-circle",
    onClick: () => {
      decrementQuantity(cartProduct);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-minus-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), __jsx("div", {
    className: "quantity btn btn-sm border-sm pl-3 pr-3 rounded-0 text-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, cartProduct.quantity || 1), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "btn-quantity border-0 right btn-sm rounded-circle",
    onClick: () => {
      incrementQuantity(cartProduct);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-plus-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }))), __jsx("div", {
    className: "total_price text-success mt-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, Object(_utils_currency__WEBPACK_IMPORTED_MODULE_3__["default"])(cartProduct.total_price))));
});

/***/ }),

/***/ "./components/Cart/Voucher/index.js":
/*!******************************************!*\
  !*** ./components/Cart/Voucher/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/http */ "./services/http.js");
/* harmony import */ var _store_actions_cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/actions/cart */ "./store/actions/cart.js");
var _jsxFileName = "/Users/webthomaz/Desktop/Desenvolvimento/m/monka/monka-api/next/components/Cart/Voucher/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function VoucherForm(props) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (props.status && props.status.success) {
      dispatch(Object(_store_actions_cart__WEBPACK_IMPORTED_MODULE_7__["loadCart"])());
      react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].success('Cupom aplicado com sucesso', {
        position: react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].POSITION.BOTTOM_CENTER
      });
    }
  }, [props.status]);
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    className: "pl-3 pr-3",
    onSubmit: props.handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    className: "mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    value: props.values.code,
    onChange: e => props.setFieldValue('code', e.target.value),
    placeholder: "Cupom",
    className: "border-0 shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "primary",
    type: "submit",
    disabled: props.isSubmitting,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "OK", props.isSubmitting && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Spinner"], {
    animation: "border",
    role: "status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })))), props.touched.code && props.errors.code && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control.Feedback, {
    type: "invalid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, props.errors.code)));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(formik__WEBPACK_IMPORTED_MODULE_1__["withFormik"])({
  mapPropsToValues: props => ({
    code: ''
  }),
  validationSchema: yup__WEBPACK_IMPORTED_MODULE_2__["object"]().shape({
    code: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required('Informe o código do cupom')
  }),
  handleSubmit: async (values, {
    setSubmitting,
    setErrors,
    setStatus
  }) => {
    try {
      setSubmitting(true);
      const result = await Object(_services_http__WEBPACK_IMPORTED_MODULE_6__["post"])(`/cart/add-voucher`, values);

      if (result.success) {
        setStatus({
          success: true,
          data: result
        });
      } else {
        setErrors({
          code: result.error
        });
      }
    } catch (error) {
      setErrors({
        error: 'N!ao foi possível válidar o cupom'
      });
    }
  }
})(VoucherForm));

/***/ }),

/***/ "./components/Cart/components/Details/index.js":
/*!*****************************************************!*\
  !*** ./components/Cart/components/Details/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_currency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/currency */ "./utils/currency.js");
var _jsxFileName = "/Users/webthomaz/Desktop/Desenvolvimento/m/monka/monka-api/next/components/Cart/components/Details/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (props => {
  const {
    loading,
    cart
  } = props;
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroup"], {
    className: "shadow ml-3 mr-3 mb-4 border-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroup"].Item, {
    className: "d-flex justify-content-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Total de Items"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, loading ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
    animation: "border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }) : Object(_utils_currency__WEBPACK_IMPORTED_MODULE_2__["default"])(cart.total_products))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroup"].Item, {
    className: "d-flex justify-content-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "Desconto"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, loading && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
    animation: "border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), __jsx("span", {
    className: "text-throughs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, " - ", !loading && Object(_utils_currency__WEBPACK_IMPORTED_MODULE_2__["default"])(cart.discount), " "))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroup"].Item, {
    className: "d-flex justify-content-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Taxa de Entrega"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, loading ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
    animation: "border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }) : cart.shipping ? Object(_utils_currency__WEBPACK_IMPORTED_MODULE_2__["default"])(cart.shipping) : 'Grátis')));
});

/***/ }),

/***/ "./components/Cart/index.js":
/*!**********************************!*\
  !*** ./components/Cart/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Checkout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Checkout */ "./components/Cart/Checkout/index.js");
/* harmony import */ var _Quantity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Quantity */ "./components/Cart/Quantity/index.js");
/* harmony import */ var _Voucher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Voucher */ "./components/Cart/Voucher/index.js");
/* harmony import */ var _components_Details__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Details */ "./components/Cart/components/Details/index.js");
/* harmony import */ var _utils_currency__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/currency */ "./utils/currency.js");
/* harmony import */ var _store_actions_cart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/actions/cart */ "./store/actions/cart.js");
/* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/http */ "./services/http.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles.scss */ "./components/Cart/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/webthomaz/Desktop/Desenvolvimento/m/monka/monka-api/next/components/Cart/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














function CartComponent() {
  const {
    0: addresses,
    1: setAddresses
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: addressSelected,
    1: setAddressSelected
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const route = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    isLogged
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.auth);
  const {
    show,
    cart,
    loading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.cart);
  const {
    0: openCheckout,
    1: setOpenCheckout
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function getAddresses() {
      const result = await Object(_services_http__WEBPACK_IMPORTED_MODULE_11__["get"])('/myAddress');

      if (result.length <= 0) {
        react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].warning('Adicione um endereço para continuar', {
          position: react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].POSITION.BOTTOM_CENTER
        });
        dispatch(Object(_store_actions_cart__WEBPACK_IMPORTED_MODULE_10__["showCart"])(false));
        return route.push('/auth/access/register-address');
      }

      if (!addressSelected || !addressSelected.id) {
        const addressDefault = result.find(item => item.is_default);
        setAddressSelected(addressDefault);
      }

      setAddresses(result);
    }

    if (isLogged && show) getAddresses();
  }, [isLogged, show]);

  async function deleteItem(cartProduct) {
    await Object(_services_http__WEBPACK_IMPORTED_MODULE_11__["httpDelete"])(`/cart/${cartProduct.cart_id}/product/${cartProduct.id}`);
    dispatch(Object(_store_actions_cart__WEBPACK_IMPORTED_MODULE_10__["loadCart"])());
  }

  async function setAddress(address) {
    setAddressSelected(address);
    await Object(_services_http__WEBPACK_IMPORTED_MODULE_11__["patch"])(`/myAddress/set-default/${address.id}`, address);
    dispatch(Object(_store_actions_cart__WEBPACK_IMPORTED_MODULE_10__["loadCart"])());
  }

  async function deleteItem(cartProduct) {
    await Object(_services_http__WEBPACK_IMPORTED_MODULE_11__["httpDelete"])(`/cart/${cart.id}/product/${cartProduct.id}`);
    dispatch(Object(_store_actions_cart__WEBPACK_IMPORTED_MODULE_10__["loadCart"])());
  }

  if (!show) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    onClick: () => dispatch(Object(_store_actions_cart__WEBPACK_IMPORTED_MODULE_10__["showCart"])(false)),
    className: "cart-mask",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx(_Checkout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    show: openCheckout && cart.products.length > 0,
    onHide: () => setOpenCheckout(),
    addressSelected: addressSelected,
    addresses: addresses,
    cart: cart,
    cartLoading: loading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx("div", {
    id: "block-cart",
    className: "shadow animated fadeInRight faster",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("div", {
    className: "cart-header p-2 d-flex align-items-center border-bottom shadow justify-content-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("div", {
    className: "d-flex align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("h4", {
    className: "m-0 mr-1 text-light text-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Minha sacola"), "(", cart.products.length, ") produto", cart.products <= 1 ? '' : 's'), __jsx("button", {
    className: "btn btn-light rounded-circle",
    onClick: () => dispatch(Object(_store_actions_cart__WEBPACK_IMPORTED_MODULE_10__["showCart"])(false)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-times",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }))), __jsx("div", {
    className: "body p-4 border-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, cart.products.length <= 0 && __jsx("div", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Sua sacola est\xE1 vazia"), __jsx("div", {
    className: "mt-5 empty-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("i", {
    className: "far fa-frown-open",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }))), cart.products.map(cartProduct => __jsx("div", {
    key: cartProduct.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "rounded position-relative mb-4 pt-1 pb-2 item border-0",
    key: cartProduct.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    key: cartProduct.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: cartProduct.product.image_url,
    className: "img-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), __jsx("div", {
    className: "d-block d-sm-none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx(_Quantity__WEBPACK_IMPORTED_MODULE_6__["default"], {
    cartProduct: cartProduct,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("h6", {
    className: "text-primary mb-0 mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, cartProduct.product.name), __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, cartProduct.observation), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("b", {
    className: "group-name text-secondary mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Tamanho")), cartProduct.option && __jsx("div", {
    className: "group-value",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, cartProduct.option.name)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 6,
    className: "pr-5 mt-4 mt-sm-0 d-none d-sm-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx(_Quantity__WEBPACK_IMPORTED_MODULE_6__["default"], {
    cartProduct: cartProduct,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "p-0 groups",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, cartProduct.groups.map(group => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 6,
    key: group.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroup"], {
    className: "mb-2 list-groups",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroup"].Item, {
    className: "p-0 m-0 border-0 group-option",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, group.name), group.options.map(groupOption => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroup"].Item, {
    className: "p-0 m-0 border-0 group-option-name",
    key: groupOption.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "- ", groupOption.option.name, " +", __jsx("span", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, Object(_utils_currency__WEBPACK_IMPORTED_MODULE_9__["default"])(groupOption.option.price))))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "danger",
    size: "sm",
    className: "rounded-circle btn-trash",
    onClick: () => {
      deleteItem(cartProduct);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-trash",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  })))))), cart.products.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "addresses ml-3 mr-3 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, addresses.map(address => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    key: address.id,
    controlId: `address-${address.id}`,
    className: "mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    value: address.id,
    checked: addressSelected && addressSelected.id === address.id,
    label: `
                                    ${address.street}, ${address.number} - 
                                    ${address.neighborhood.name} 
                                `,
    onChange: () => setAddress(address),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  })))), __jsx(_Voucher__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_8__["default"], {
    cart: cart,
    loading: loading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }))), __jsx("div", {
    className: "footer w-100 mt-3 d-flex flex-column border-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, __jsx("div", {
    className: "btn btn-light btn-lg rounded-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, "Total: ", Object(_utils_currency__WEBPACK_IMPORTED_MODULE_9__["default"])(cart.total_price)), __jsx("button", {
    className: "btn btn-success btn-lg rounded-0",
    onClick: () => setOpenCheckout(true),
    disabled: cart.products.length <= 0 || loading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, "Finalizar Pedido", __jsx("i", {
    className: "fas fa-chevron-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (CartComponent);

/***/ }),

/***/ "./components/Cart/styles.scss":
/*!*************************************!*\
  !*** ./components/Cart/styles.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Footer/index.js":
/*!************************************!*\
  !*** ./components/Footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.scss */ "./components/Footer/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/webthomaz/Desktop/Desenvolvimento/m/monka/monka-api/next/components/Footer/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  let {
    0: setting,
    1: seSetting
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.setting);
  const settings = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.setting);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (settings.loaded) {
      seSetting(settings.setting);
    }
  }, [settings]);
  return __jsx("footer", {
    className: "bg-light pt-5 pb-5",
    id: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("h6", {
    className: "text-primary text-uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Contatos"), setting.company_mobile_phone.value, " ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), setting.company_phone.value, " ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), setting.company_email.value), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("h6", {
    className: "text-primary text-uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, setting.company_address.name), setting.company_address.value), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("h6", {
    className: "text-primary text-uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, setting.office_hours.name), setting.office_hours.value), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    className: "item social",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("h6", {
    className: "text-primary text-uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "NAS REDES"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: setting.link_whatsapp.value,
    prefetch: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("a", {
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("i", {
    className: "fab fa-whatsapp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: setting.facebook.value,
    prefetch: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("a", {
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("i", {
    className: "fab fa-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: setting.instagram.value,
    prefetch: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("a", {
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("i", {
    className: "fab fa-instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "mt-1 mt-sm-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/page/politica-de-privacidade",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Pol\xEDtica de privacidade"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/page/termos-e-condicoes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Termos e condi\xE7\xF5es"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "\xA9 Copyright 2019 - Monka Alimenta\xE7\xE3o Saud\xE1vel"))));
});

/***/ }),

/***/ "./components/Footer/styles.scss":
/*!***************************************!*\
  !*** ./components/Footer/styles.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Header/components/Cart/index.js":
/*!****************************************************!*\
  !*** ./components/Header/components/Cart/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_actions_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store/actions/cart */ "./store/actions/cart.js");
/* harmony import */ var _utils_currency__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/currency */ "./utils/currency.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.scss */ "./components/Header/components/Cart/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/webthomaz/Desktop/Desenvolvimento/m/monka/monka-api/next/components/Header/components/Cart/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Cart() {
  const {
    cart
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.cart);
  const {
    isLogged
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.auth);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isLogged) {
      dispatch(Object(_store_actions_cart__WEBPACK_IMPORTED_MODULE_2__["loadCart"])());
    }
  }, [isLogged]);
  return __jsx("div", {
    className: "cart pl-3 pr-3 pt-1 pb-1 cursor-pointer",
    onClick: () => {
      dispatch(Object(_store_actions_cart__WEBPACK_IMPORTED_MODULE_2__["showCart"])(true));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "prices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-shopping-cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, " ", Object(_utils_currency__WEBPACK_IMPORTED_MODULE_3__["default"])(cart.total_price) || 0, " ")), __jsx("div", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "SACOLA"));
}

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ }),

/***/ "./components/Header/components/Cart/styles.scss":
/*!*******************************************************!*\
  !*** ./components/Header/components/Cart/styles.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Header/components/Menu/index.js":
/*!****************************************************!*\
  !*** ./components/Header/components/Menu/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Cart */ "./components/Header/components/Cart/index.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.scss */ "./components/Header/components/Menu/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/webthomaz/Desktop/Desenvolvimento/m/monka/monka-api/next/components/Header/components/Menu/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function () {
  const {
    user,
    isLogged
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.auth);
  return __jsx("div", {
    id: "headerMenu",
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/account",
    prefetch: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "item pt-1 pb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-user-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), !isLogged && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Minha Conta"), isLogged && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, user.name)))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    prefetch: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "item pt-1 pb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Card\xE1pio")))), __jsx(_Cart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }));
});

/***/ }),

/***/ "./components/Header/components/Menu/styles.scss":
/*!*******************************************************!*\
  !*** ./components/Header/components/Menu/styles.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Header/components/StoreStatus/index.js":
/*!***********************************************************!*\
  !*** ./components/Header/components/StoreStatus/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./components/Header/components/StoreStatus/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/webthomaz/Desktop/Desenvolvimento/m/monka/monka-api/next/components/Header/components/StoreStatus/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function StoreStatus(props) {
  let {
    0: setting,
    1: seSetting
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.setting);
  const settings = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.setting);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (settings.loaded) {
      seSetting(settings.setting);
    }
  }, [settings]);
  const status = setting.store_status.value === '1';
  return __jsx("div", {
    className: "storeStatus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("i", {
    className: `far fa-circle ${status ? 'text-success ' : 'text-danger'}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), status ? ' Aberto ' : ' Fechado '));
}

/* harmony default export */ __webpack_exports__["default"] = (StoreStatus);

/***/ }),

/***/ "./components/Header/components/StoreStatus/styles.scss":
/*!**************************************************************!*\
  !*** ./components/Header/components/StoreStatus/styles.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo.png */ "./components/Header/logo.png");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.scss */ "./components/Header/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Menu */ "./components/Header/components/Menu/index.js");
/* harmony import */ var _components_StoreStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/StoreStatus */ "./components/Header/components/StoreStatus/index.js");
var _jsxFileName = "/Users/webthomaz/Desktop/Desenvolvimento/m/monka/monka-api/next/components/Header/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return __jsx("header", {
    id: "header",
    className: "pt-2 pb-sm-2 position-fixed w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("a", {
    className: "text-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: _logo_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    className: "img-fluid logo",
    alt: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "storeStatus",
    xs: 6,
    sm: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_components_StoreStatus__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    sm: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })))));
});

/***/ }),

/***/ "./components/Header/logo.png":
/*!************************************!*\
  !*** ./components/Header/logo.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAsCAYAAAD8WEF4AAAABHNCSVQICAgIfAhkiAAAFBxJREFUWEelmQd0HNW5x/9TdmZ7V1vtqnfJslwky022JXdjSoghFFMSwCGY+sLLO4+E5L3Uk0ASCI/yIJQQY0IxmGIbW2BLLkK2bFm21bWStkgraVer1Wr77sy8MyvsOMY4kHd1tGfPzsy9v/vd7/vu/7tD4P/XiNzcjCyOIwoZWloho2SlFE/lgYCKEBDgCH4ozEV7I4icIThiwG63DwPg/9UhiX/1wezsjPkCST+XRqdWF0mKCANhAA0aAoR/6JIDB68whb54nzCRGDsj8OQPbDbbsX9l3G8KS+TkmNepad2vSiTFc/SEnvYKXjgTTgSZEHg5D54VIJACSPEvRoIMEZCFpcikMmEkjfDx01xvorvLG/f+1GZzvg9cMrsrzOJrw6anp6doZcrHc5n8+8yUhRjlR2Fn7IipE5BoGUhkFEgJAYomQdIESJIAxN4FgIvxiHpjgJuAyZ+BTCITLs4lDMWtL/vjoccdDsfo17H014IVQY0K/d5qtnqBuMytwnEIJhKMSgJaSoGiCdAUCUoQIDKSMgoEQyZhCRIgKfFHAnxCQNQXx/SpAKpi88CCxfHYiW5/fKzBZvO4/hnwP4U1mA2ZWVLz0VpmUVYfN0A4DaOgDRIwMho0SyFuDyE/EkEmwyMhEAgkCPCESClATgrJaHJzJMZSVTBUqZI8XFxAwBEFc0KBErJYaI1+Pj4RHV3udLoHrgR8RViLxWgysBkHFjG1pT1CD+EyToDVs5BIKZARHlnuAHIpDjQ5O4QYWrMd/v3b+cFjHOAiaXgKtJDlySHwAoKuKPhjDErjZWiLtVknYiNr7fbxwa8CvhIsXZ5f+ucl7JLbrNwgnKmjs6AyGiQnIN8xjRz2m2ehsTiBiToTGDUNQRAQcscQ3y9BMYrREm1576y18zsAYpcD/krYrKzMrfNk819lSIbs0J4DYxSDiE4GUrp1GqVk/LwZ/5mrfXF9Nql1+ghYaQkyanRQW6TJ30KuGFSNaaAEij8eaXvYPmx/+pvAsksKa0+X0CUlR+hjoC0sGDmVhOVDHBaNTcHHKGHK0MHh8iEYjIJLcADPQUHy0DIk9Ozf5zIdA/pDJBYtyMHC0jQoZRL0O6exOzwOWTqbtPD40WmUDFZimBse7g9Yy0dHR0OXAl/WspY8y8N17LInXBgjRzMnwChnLSr6KjcQQDUXhqmqGA0LzaDEKOcFcLyAeIKHxx+FYyKAPpsX0yMT4DgepkILrlmeA1ZCJccXB/WH4nhy/xmwOhphDQXWwCD8PonMiEVoijT90jbkePzSHPwl2JSUFGWaOmVgEVuTdpg9BtrEgvkClGZIsGe8MELAnVuXQK9ik8soWkbsiBCzwEXN5Q1j1BPEgiJjclxeAEbcQbx+YBB99kncVmeATkFhYiaBo3IawfEoirsqcTJ2MuKN+DKdTqf34v6+BJuZk1m1WLboRICfoQcznJCwFBg/j0X5KcmB0/0eBOLAxmtqoFFI8N7REWiMFgSmnFhdlYqsNOWF/r1JKwdRVaDHoGsGu1snsGbTFhSVVOC+e++BnOEhzm99lQanJ2IIVygR380ijUhFS7h11fDw8KErwpbkFv3nKvmqXxxHGxExhHBNcSaWlqej+cQwfINOaBkkLdQXYyGkFOCvO3ZCpVIhGAzi4MGD6GlrhBD1QaCk2PnBISyflwddihl5c5bihhtugEwmS65EY2Mj/u2h7VhUIIc3kIBGSWJ8ngb+pijmu2vQGGl8osva8+iVYMmK/PKmOnb5soNsExYX6LG5Jgt/fLsDdDyKcIzHcuOsUGn3S/DEq+9gTmXlZbMBz/O4995tuObqa8GyLOwOG1Y3rIHZYrngLmsaVmJNYRhuP4dhXxzRxRr4eyMob1+AY7GW9tMDHTUAEucH+Ac3yMrS6FIled3lbEXaEaoFP/7WXOxqHgCXiCNVTSM8PoMcxazv9SsK8O5Hn4AkSbjdbkgkEmi12n8A7+w8h1tuvhkzgRnI5XLcfNMt2HTVJlRWzk3ed+ONN6BcMQSDksbusShk81SYcUaQfjAXQ4kh75DfVjo+Pj5xWdj0nPScfCa3N41IY85Iz+G/tszHjv1dqMySwjESgCoagScKWOSA21yDPz37Am6/bSvOnD2DzMxMLF9Wh0cffRR6gyHZ/9TUFFaurEMgEIBOp8Pbb7+LN97Ygcce+3Hy+reuuxbzDaNw+uJwFCpAKykEPTHI9hgQFAKcNdpbabePdX2FZbPKctnsTgnBYEhjx/YVJRh2+ZGpDKPTGoDTn4DZKIVm2o/xtLlYt+lq/PwX/530we3b78cdd9yJ559/Hg31q5IaOxSO4oEH7kcwNJsy1XIpyisq8JOf/hwmkwlr19aj0MTDZWKhzBTzLRDyxBD/kAZDMuiO9y4eGR75/IqwpEDCmTmOcqUKD24ux9NvtyNLT6J7NAJDLIJsuYBTcR0yCuag+XBT0gfFwCnMVOPGlTnITleAJkmcGZzCgTYnctJVqMw3IDtNAQlNoNc2jec+6kNYxSF7jTEZsWIk8JyA4EQc/D4RlkVftGeJzTbScllYi8WSnyPL6jYQRklXai8kDIVNWemoLUvFq3u70WXzQc8ARhZQUEBfQg2/fxplOXp8d2MxMg2KC0pa3Cgc7hCaO1zITlOCogiUZ+ugUTLJdCVeP9w1jsa4B/K0WatyCQH+kSjUzXpEhSjfG+6vcjqdZy8LazKZjCZFRk8xXWQ4rjsFRs+AjAmo1etQV56ODusk9rXakc0mUKQCjrgBrVGDH900FwqZ5LJZIRCOQymj4ZgIw5wiu2TjEPDMkT5M55EQOAGJqADfYAi57QWw8w6/I9Jf6nB4LgjzSzcFSUVe+fFl0qVVh+TNIFPEbZYGLSURdoSRSUuxZWkODh3shFJIIKRPwdZ1RVDKJSAv2b0uJXdNhqBRMJBL6YsuCXjjuA1DmbGkxo0FeUx1B1E9XIMT0RO9p6ynqwBELmtZ8cfS3OLf1svqf3iUbCEi5jgkLA2JlEwKbbFUCbRNYU6GCqkpKmypL8DeVifqKtOhVlzesucHEjWC6BYGNYu2Pg+sI9NwT0Vg0Mtgz0yAklGI+DnMtEVQF1wubgovdVq7777iDpZrsdQtVi77bIx3UU7TOCQKCSQyEjRDQdQGoZ4A/rC1Bq09btSWpuDwmfHkdpqik30hvL/sDbwgoLXLjXNDXpTn6GAyyqFTsVDJJAiE4vjZ4XOQmaUITMTAnpQin8zH4VDzddbhYbGgvNC+pA2ysrJ06UyKtURSqmuRt4JOna0MaFYEpiFEOWi8onIScFdDMbJSFfioxY55BYYkxMViRlRiY94QWrvdSchii+ZLM5kJxfGTfWcgyWTh6wugcmwOBhPWmCs2lHNpXXZZiZida3lmpXTlff3EACZN06BF1cVSoL6wrlgAUhIS5AyHxxaXQCGV4OCpUXzYYsO8AiP0agbjvig6B724sSEfNSUpSSkpNvHTOxMFRZFQyyUYnwrhF0e6ATkJqoNGBVcufBpu3Dk87Lj1chKRLMzP/tnSEtUtjsl4u3Usems8HlcUKPI7NNBmdim6IEljkz4r/lMMCVost8WyOwH8+9xCGNXSJEgszmN8KoxILA4pI0kG0+GzY6gpTklaXUxPL37Uhd5hNyQ0ibuvnosu1zQO+CcxMxTE/MkqjPFjwozUGS3KYKKnBsO/7O4f+t2FANPpdJo5eUbb3Q1aTe9onHul2btuxG7/tH5R0acb5ynqPzwZxChDgNZIZv1WQiarBdG6rFKCR+cXIkMvv2C1IdcMtEom6ZM7GvvhcbsRTlC47/r5SXG+q/E05mbLYPPEMJVQ4kwkgAjPQzuoRhZpEU7Gjzse2qjPUstI7D8XHHjt484yAPHkqohiu8ii69/WoEkfn+bwp32eH9nt9t9t3VhmXT9HmXtqMIED7TFEzRxIlgJvCwMcn6wMxHbL2iKsrzYnrbaj0QrbyDgCUQI/ua0ax3snsbu5F1fNV6N3ksV1y3LxWcs5LC6Uos8Vx1vWCGi9BBgMIk1DY2wq1kuTxN5HNhoeEt3mnCMa3HFkrPJ8xZuELbZordsatKmBqIDf75ncEU8Efnj9ooye+TlSzdA4D9uJuWjnTiMjI4TaPAX84QR6RqNYXiTHxAxQVZGXVF8vf3Aat9ep4fJxONQv4HsbS7Bz3xmsnSPHW60B3HNtFZpau1BbwCZh3xwIgw4kcM8yDQxKCu8eD3Q7vLHOhzfovy0aYmI6Ifxx7+R2m8327HnLpteWGO03LlZJEpyAp/ZPNbn98XceWm94KkNLk45JjvukWRFT6yKyby0Xay3grVY/+l1RrKlUYUmhFF1jQEhQoGtgFHfUiRFP4N0TAXz36nl4cXcHttTIcbg3DILVg05MJZ/pH4tjxzEfNs5VoSZfCnHsd1pnXvUGE3nb1+rrxIWLJgQ8tW9yV0fn4BZROhBms3nOdbX6M7X5s2Xxa03TDn+E536wWptDUwTcfn7mmQOen26p0TxZbmaInceC6B4JixVVMsIf2mCATELiuY4QSE8YD6w3JNPXiDcBZ0iNAcckblokRY+LwxtHJ9FQocKqMjl8odmSRiMjRdUmfNgenDrcF1xdnsG+eccKbZHoVuL1t1tnTr9/qLsWQJTIy8veeO9q48cmHZVMK3vOBHmLXkJUmJlkrvGFuOBTez277l9n3MpKCLy9VwsTlYFTsVOY4QJYVqzExrkKvNsZxthoBPeu1iZhYwkBT+6ZBM8Dj2w0YNTH47XmSawqUyZhLzQBaOoJT37W5V8TCsUdNUXq7i2L1EbRsmK2OzkcGd/V6i8ZHh72EXPL8u95YL3uBalk9gxocCIOi55OTkukDUS58HMHpjof3GBYGIrxiSc/dj+bJbF8J5vOSo0IEXiUXbi7XoMjAxH0j8ZwZ50aY9M8MrQkPj0XwqHuAB4UrQ0C730mR5rZh80LZlNdNC7glC0Rf7/V/R2n07krMzOzqL5Sc3Z9pZIJxwTIGAIuXyL88qee6q4BeyexuCr/t9vXGS4UZqL5xXbOGUNBmgShGBd98TPfwEMbDOWBEBf51R5POZVI+Bkp/WMDpd+sM8Zyb1+uJJrOJjAZDWJLtQaNXWEsKZgFeuJjD+5coYOSIYWXDkTGcs1Ivb5aLh44zkpFAfj4dNDe0huo5Xm+8OqF2qYlRTKcGIxiYS6DUEzgn2v03t1+bvBlYkV14e5t9bqrRR+SMgRYetairzb7cW21GtE4F37x4NSJh9cb6sJxPvHrXe5al8t+UgTR6/XmZXPS+m6sVcn2dIQ5KQ1qdYUMb7b4kZcmw8JcCf5yeBrrKpWQ0iT39H7396pyFE9vnqdQ2yc50JQAk5YGxwl4pdn3uXUs+vzW5bpXy8wsXmmeDlxfrZIqWIJ+pXl6z8HWvk3EusVFHbfVaSvbhyNQsCSKMhiMTXN4/bAv8f3VBjoS54JP7/O+sH2t7hGNjBR+/aH72YEB23YRNsdsXnl1raGxJo+l3moNnLIY6PnLiqR4s2W6ezoM8/dWqFVnnTHkGmlMBgTu1cOem6vz1S9umitXd49G+N1tgZM31Gqq89IkmAnzePaAt29lmaKotkCGjzvC4fnZDJOhpajmnpDnb03OQmLT8hLHTYvV5k87Q3GXLx6/eYla/voRf8zjT/R/f7WhPBzjAs/u99x2bbXmzcosKbO3I+A/2uud6/NFfOkpurce3KBfQxCE8Mz+qT+vrlDeVZPHYmeL/0PreDT6wDrD9TKGJMRAaRkIJz5s8317ZYX2jbVzZPIT1kj0b8enFuYbpS/fXa+tFu/5oD0YGvfFuW31WlXy5PyL5vZzwv82eRYQV9WVuBrKFelH+4ITbdbQeytK1duO9M20pGkY6Z0rdPPcM9z0a4cnyrIN8t23LlUvFNPVS02+mYmphLBhnko9L5vF5/1R1zvHJ+/bvEC3a0WJDK8f8e/qcoX+UF+qO7S6nBXPvfFOWyB6yhq8fnWlald9mZw52B3yvHRsLM/EMLoFhepjSwvlppcOeXdDgO6+NcYVciliYz5OyE+lWTG7vN7s30ZsWFrcU52vKD5rD023WYNraJr6RBC4xywG2SN3rNAWDIzHJ187OF7CMMyy2iLlO5vnyamEeBDHAWIqG3JzeL9t+uHxqeipJcXKpqXFcjSeC+5r6Zrcotcqex9cbzSppMD/NPpCI57Id29cot9Zlc0Su04EBnYd7JojVgLZ2dkZaXpqpcsTn2yo1OzJ1Eup3Scm18V4QX9vg2FnqpoSU+rfiJU1Re+XmtjNh3uCXe6pYAPDMLUcx7XnpCtbb1mqztjTEXK2dk2UeTyeQEFB1q1F6Yon89IYI0WC8MxwU6eHwr/p7LU+ZbFYKs1G6fGafBl6XJHGT472rcnOzb5vRan6qbpiKfXkHu/oTDj+m7tW6Z/OTZXghUbfiWPt/YvFU/vzy23Ozt7w7RrNntaBSHBkMmKxh8Px26tTT5aZpUUOT8xBlBRm36xRMI9anVN1Ho9n5osHmVU1RY4lRbLUN476jgwN2erPKx8AdE6OpQEQiFjM2Tw6iuShgMViMdE01VWYwch7R8L/YbM5fg+AzM/P+fyq+drqD9qmPuV5tN/VYPhhhoYSntnvffF0p3XbxWrckmNZl65hPnZPc08ODw//SLy2prboLrmU+o1RRcWSJ5UiwEUw4j30msVFNglFZnSPhO4YGrL/5eJOv+q7KDflcrlqZGRErEiTZ/hZWWl5Elp2iOO5+wmCuOWaBZotI1N8+PM+f43D4Th3cV/iWyGZTHL70FByouffAZAmk0lKkqTwlcf0ubk5HwBCbGjIdvNXnfF/nQmI95hMJvno6GgkL89UT1PM4xyPv1qtwy9901ej/wfWGuv7kyz5ZQAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./components/Header/styles.scss":
/*!***************************************!*\
  !*** ./components/Header/styles.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Spinner/index.js":
/*!*************************************!*\
  !*** ./components/Spinner/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/webthomaz/Desktop/Desenvolvimento/m/monka/monka-api/next/components/Spinner/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
  animation: "border",
  role: "status",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("span", {
  className: "sr-only",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, "Loading...")));

/***/ }),

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: url, oneSignal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oneSignal", function() { return oneSignal; });
const production = true;
const url = production ? 'https://monka.net.br/api/v1' : 'http://10.0.1.60:3001/api/v1';
const oneSignal = {
  appId: '9850ca27-e6c2-4260-b539-808ace52be3c',
  appKey: ''
};

/***/ }),

/***/ "./config/pusher.js":
/*!**************************!*\
  !*** ./config/pusher.js ***!
  \**************************/
/*! exports provided: PUSHER_ID, PUSHER_LOG, PUSHER_FORCE_TSL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUSHER_ID", function() { return PUSHER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUSHER_LOG", function() { return PUSHER_LOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUSHER_FORCE_TSL", function() { return PUSHER_FORCE_TSL; });
const PUSHER_ID = 'fb5de6a6f7b0911af408';
const PUSHER_LOG = false;
const PUSHER_FORCE_TSL = true;

/***/ }),

/***/ "./pages/App.js":
/*!**********************!*\
  !*** ./pages/App.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/auth */ "./store/actions/auth.js");
/* harmony import */ var _store_actions_setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/setting */ "./store/actions/setting.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Cart */ "./components/Cart/index.js");
/* harmony import */ var _services_pusher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/pusher */ "./services/pusher.js");
var _jsxFileName = "/Users/webthomaz/Desktop/Desenvolvimento/m/monka/monka-api/next/pages/App.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function App(props) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _services_pusher__WEBPACK_IMPORTED_MODULE_6__["default"].bind('updatedSettings', () => {
      dispatch(Object(_store_actions_setting__WEBPACK_IMPORTED_MODULE_3__["loadSettings"])());
    });
    dispatch(Object(_store_actions_setting__WEBPACK_IMPORTED_MODULE_3__["setSettings"])(props.setting));
    dispatch(Object(_store_actions_auth__WEBPACK_IMPORTED_MODULE_2__["loginStorage"])());
  }, []);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(_components_Cart__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_4__["ToastContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), props.children);
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "../node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "../node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "../node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "../node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "../node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Header */ "./components/Header/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./App */ "./pages/App.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/http */ "./services/http.js");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/global.scss */ "./styles/global.scss");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/webthomaz/Desktop/Desenvolvimento/m/monka/monka-api/next/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {
  static async getInitialProps({
    Component,
    router,
    ctx
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const setting = await Object(_services_http__WEBPACK_IMPORTED_MODULE_11__["get"])('/setting');
    pageProps.setting = setting;
    return {
      pageProps
    };
  }

  componentWillMount() {}

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
      store: _store__WEBPACK_IMPORTED_MODULE_10__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx(_App__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    })), __jsx("div", {
      id: "wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx(Component, _extends({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }))));
  }

}

/***/ }),

/***/ "./services/http.js":
/*!**************************!*\
  !*** ./services/http.js ***!
  \**************************/
/*! exports provided: get, post, patch, httpDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patch", function() { return patch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpDelete", function() { return httpDelete; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config/index.js");



function get(url, params = {}) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(_config__WEBPACK_IMPORTED_MODULE_2__["url"] + url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('token')}`
        }
      });
      const data = await res.json();
      resolve(data);
    } catch (error) {
      reject(error.message);
      console.log(error);
    }
  });
}
function post(url, values) {
  return new Promise(async resolve => {
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('token');
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(_config__WEBPACK_IMPORTED_MODULE_2__["url"] + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token || ''}`
      },
      body: JSON.stringify(values)
    });
    const data = await res.json();
    resolve(data);
  });
}
function patch(url, values) {
  return new Promise(async resolve => {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(_config__WEBPACK_IMPORTED_MODULE_2__["url"] + url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('token')}`
      },
      body: JSON.stringify(values)
    });
    const data = await res.json();
    resolve(data);
  });
}
function httpDelete(url) {
  return new Promise(async resolve => {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(_config__WEBPACK_IMPORTED_MODULE_2__["url"] + url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('token')}`
      }
    });
    const data = await res.json();
    resolve(data);
  });
}

/***/ }),

/***/ "./services/pusher.js":
/*!****************************!*\
  !*** ./services/pusher.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pusher-js */ "pusher-js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_pusher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/pusher */ "./config/pusher.js");

 // // Enable pusher logging - don't include this in production

pusher_js__WEBPACK_IMPORTED_MODULE_0___default.a.logToConsole = _config_pusher__WEBPACK_IMPORTED_MODULE_1__["PUSHER_LOG"];
var pusher = new pusher_js__WEBPACK_IMPORTED_MODULE_0___default.a(_config_pusher__WEBPACK_IMPORTED_MODULE_1__["PUSHER_ID"], {
  cluster: 'us2',
  forceTLS: _config_pusher__WEBPACK_IMPORTED_MODULE_1__["PUSHER_FORCE_TSL"]
});
var channel = pusher.subscribe('monka');
/* harmony default export */ __webpack_exports__["default"] = (channel);

/***/ }),

/***/ "./store/actions/auth.js":
/*!*******************************!*\
  !*** ./store/actions/auth.js ***!
  \*******************************/
/*! exports provided: authLogout, loginStorage, setUser, setUserData, setToken, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authLogout", function() { return authLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginStorage", function() { return loginStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserData", function() { return setUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToken", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/cart */ "./store/types/cart.js");
/* harmony import */ var _types_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/auth */ "./store/types/auth.js");




const authLogout = function () {
  return async dispatch => {
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('token');
    const user = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('user');
    dispatch({
      type: _types_auth__WEBPACK_IMPORTED_MODULE_3__["LOGOUT"]
    });
    dispatch({
      type: _types_cart__WEBPACK_IMPORTED_MODULE_2__["RESET_CART"]
    });
  };
};
const loginStorage = function () {
  return async dispatch => {
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('token');
    const user = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('user');

    if (user && token) {
      dispatch({
        type: _types_auth__WEBPACK_IMPORTED_MODULE_3__["SET_USER"],
        payload: JSON.parse(user)
      });
      dispatch({
        type: _types_auth__WEBPACK_IMPORTED_MODULE_3__["SET_TOKEN"],
        payload: token
      });
    }

    dispatch({
      type: _types_auth__WEBPACK_IMPORTED_MODULE_3__["SET_LOADED"],
      payload: true
    });
  };
};
const setUser = function (data) {
  return async dispatch => {
    if (data.token) {
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('token', data.token);
    }

    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('user', JSON.stringify(data.user));
    dispatch({
      type: _types_auth__WEBPACK_IMPORTED_MODULE_3__["SET_USER"],
      payload: data.user
    });
    dispatch({
      type: _types_auth__WEBPACK_IMPORTED_MODULE_3__["SET_LOADED"],
      payload: true
    });
  };
};
const setUserData = function (data) {
  return async dispatch => {
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('user', JSON.stringify(data));
    dispatch({
      type: _types_auth__WEBPACK_IMPORTED_MODULE_3__["SET_USER"],
      payload: data
    });
  };
};
const setToken = function (token) {
  return async dispatch => {
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('token', token);
    dispatch({
      type: _types_auth__WEBPACK_IMPORTED_MODULE_3__["SET_TOKEN"],
      payload: token
    });
  };
};
const logout = () => {
  return async dispatch => {
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('token');
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('user');
    dispatch({
      type: _types_auth__WEBPACK_IMPORTED_MODULE_3__["LOGOUT"]
    });
  };
};

/***/ }),

/***/ "./store/actions/cart.js":
/*!*******************************!*\
  !*** ./store/actions/cart.js ***!
  \*******************************/
/*! exports provided: loadCart, setCart, setLoading, resetCart, showCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCart", function() { return loadCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCart", function() { return setCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoading", function() { return setLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCart", function() { return resetCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showCart", function() { return showCart; });
/* harmony import */ var _types_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/cart */ "./store/types/cart.js");
/* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http */ "./services/http.js");


const loadCart = function () {
  return async dispatch => {
    dispatch({
      type: _types_cart__WEBPACK_IMPORTED_MODULE_0__["SET_LOADING"],
      payload: true
    });
    const data = await Object(_services_http__WEBPACK_IMPORTED_MODULE_1__["get"])('/cart');
    dispatch({
      type: _types_cart__WEBPACK_IMPORTED_MODULE_0__["SET_CART"],
      payload: data
    });
    dispatch({
      type: _types_cart__WEBPACK_IMPORTED_MODULE_0__["SET_LOADING"],
      payload: false
    });
  };
};
const setCart = function (cart) {
  return {
    type: _types_cart__WEBPACK_IMPORTED_MODULE_0__["SET_CART"],
    payload: cart
  };
};
const setLoading = function (loading = true) {
  return {
    type: _types_cart__WEBPACK_IMPORTED_MODULE_0__["SET_LOADING"],
    payload: loading
  };
};
const resetCart = function () {
  return {
    type: _types_cart__WEBPACK_IMPORTED_MODULE_0__["RESET_CART"]
  };
};
const showCart = function (show = true) {
  return {
    type: _types_cart__WEBPACK_IMPORTED_MODULE_0__["SET_SHOW_CART"],
    payload: show
  };
};

/***/ }),

/***/ "./store/actions/setting.js":
/*!**********************************!*\
  !*** ./store/actions/setting.js ***!
  \**********************************/
/*! exports provided: loadSettings, setSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSettings", function() { return loadSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSettings", function() { return setSettings; });
/* harmony import */ var _types_setting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/setting */ "./store/types/setting.js");
/* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http */ "./services/http.js");


const loadSettings = function () {
  return async dispatch => {
    const data = await Object(_services_http__WEBPACK_IMPORTED_MODULE_1__["get"])('/setting');
    dispatch({
      type: _types_setting__WEBPACK_IMPORTED_MODULE_0__["SET_SETTING"],
      payload: data
    });
  };
};
const setSettings = function (data) {
  return {
    type: _types_setting__WEBPACK_IMPORTED_MODULE_0__["SET_SETTING"],
    payload: data
  };
};

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./store/reducers/index.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a)));

/***/ }),

/***/ "./store/reducers/auth/index.js":
/*!**************************************!*\
  !*** ./store/reducers/auth/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/auth */ "./store/types/auth.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const INITIAL_STATE = {
  user: {},
  isLogged: false,
  token: null,
  loaded: false
};
/* harmony default export */ __webpack_exports__["default"] = ((state = INITIAL_STATE, action) => {
  switch (action.type) {
    case _types_auth__WEBPACK_IMPORTED_MODULE_0__["SET_USER"]:
      return _objectSpread({}, state, {
        user: action.payload,
        isLogged: true,
        loaded: true
      });

    case _types_auth__WEBPACK_IMPORTED_MODULE_0__["SET_LOADED"]:
      return _objectSpread({}, state, {
        loaded: action.payload
      });

    case _types_auth__WEBPACK_IMPORTED_MODULE_0__["SET_TOKEN"]:
      return _objectSpread({}, state, {
        token: action.payload
      });

    case _types_auth__WEBPACK_IMPORTED_MODULE_0__["LOGOUT"]:
      return INITIAL_STATE;

    default:
      return state;
  }
});

/***/ }),

/***/ "./store/reducers/breadcrumb/index.js":
/*!********************************************!*\
  !*** ./store/reducers/breadcrumb/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_breadcrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/breadcrumb */ "./store/types/breadcrumb.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const INITIAL_STATE = {
  crumbs: []
};
/* harmony default export */ __webpack_exports__["default"] = ((state = INITIAL_STATE, action) => {
  switch (action.type) {
    case _types_breadcrumb__WEBPACK_IMPORTED_MODULE_0__["ADD_CRUMB"]:
      return _objectSpread({}, state, {
        crumbs: [...state.crumbs, action.payload]
      });
      break;

    case _types_breadcrumb__WEBPACK_IMPORTED_MODULE_0__["CRUMB_CLEAR"]:
      return _objectSpread({}, state, {
        crumbs: []
      });
      break;

    default:
      return state;
  }
});

/***/ }),

/***/ "./store/reducers/cart/index.js":
/*!**************************************!*\
  !*** ./store/reducers/cart/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/cart */ "./store/types/cart.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const INITIAL_STATE = {
  loading: true,
  show: false,
  cart: {
    total_price: 0,
    products: [],
    address_shipping: {},
    shipping: 0,
    total_products: 0,
    __meta__: {
      products_count: 0
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ((state = INITIAL_STATE, action) => {
  switch (action.type) {
    case _types_cart__WEBPACK_IMPORTED_MODULE_0__["SET_CART"]:
      return _objectSpread({}, state, {
        cart: action.payload,
        loading: false
      });

    case _types_cart__WEBPACK_IMPORTED_MODULE_0__["SET_LOADING"]:
      return _objectSpread({}, state, {
        loading: action.payload
      });

    case _types_cart__WEBPACK_IMPORTED_MODULE_0__["SET_SHOW_CART"]:
      return _objectSpread({}, state, {
        show: action.payload
      });

    case _types_cart__WEBPACK_IMPORTED_MODULE_0__["RESET_CART"]:
      return {
        cart: {
          total_price: 0,
          products: [],
          address_shipping: {},
          shipping: 0,
          total_products: 0,
          __meta__: {
            products_count: 0
          }
        }
      };

    default:
      return state;
  }
});

/***/ }),

/***/ "./store/reducers/index.js":
/*!*********************************!*\
  !*** ./store/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./store/reducers/auth/index.js");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart */ "./store/reducers/cart/index.js");
/* harmony import */ var _setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting */ "./store/reducers/setting/index.js");
/* harmony import */ var _breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breadcrumb */ "./store/reducers/breadcrumb/index.js");





/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _auth__WEBPACK_IMPORTED_MODULE_1__["default"],
  cart: _cart__WEBPACK_IMPORTED_MODULE_2__["default"],
  setting: _setting__WEBPACK_IMPORTED_MODULE_3__["default"],
  breadcrumb: _breadcrumb__WEBPACK_IMPORTED_MODULE_4__["default"]
}));

/***/ }),

/***/ "./store/reducers/setting/index.js":
/*!*****************************************!*\
  !*** ./store/reducers/setting/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_setting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/setting */ "./store/types/setting.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const INITIAL_STATE = {
  setting: {},
  loaded: false
};
/* harmony default export */ __webpack_exports__["default"] = ((state = INITIAL_STATE, action) => {
  switch (action.type) {
    case _types_setting__WEBPACK_IMPORTED_MODULE_0__["SET_SETTING"]:
      return _objectSpread({}, state, {
        setting: action.payload,
        loaded: true
      });
      break;

    default:
      return state;
  }
});

/***/ }),

/***/ "./store/types/auth.js":
/*!*****************************!*\
  !*** ./store/types/auth.js ***!
  \*****************************/
/*! exports provided: SET_USER, SET_TOKEN, LOGOUT, SET_LOADED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER", function() { return SET_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TOKEN", function() { return SET_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOADED", function() { return SET_LOADED; });
const SET_USER = '[Auth] SET_USER';
const SET_TOKEN = '[Auth] SET_TOKEN';
const LOGOUT = '[Auth] LOGOUT';
const SET_LOADED = '[Auth] SET_LOADED';

/***/ }),

/***/ "./store/types/breadcrumb.js":
/*!***********************************!*\
  !*** ./store/types/breadcrumb.js ***!
  \***********************************/
/*! exports provided: ADD_CRUMB, CRUMB_CLEAR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CRUMB", function() { return ADD_CRUMB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRUMB_CLEAR", function() { return CRUMB_CLEAR; });
const ADD_CRUMB = '[Breadcrumb] ADD_CRUMB';
const CRUMB_CLEAR = '[Breadcrumb] CRUMB_CLEAR';

/***/ }),

/***/ "./store/types/cart.js":
/*!*****************************!*\
  !*** ./store/types/cart.js ***!
  \*****************************/
/*! exports provided: SET_CART, RESET_CART, SET_SHOW_CART, SET_LOADING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CART", function() { return SET_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_CART", function() { return RESET_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SHOW_CART", function() { return SET_SHOW_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOADING", function() { return SET_LOADING; });
const SET_CART = '[Cart] SET_CART';
const RESET_CART = '[Cart] RESET_CART';
const SET_SHOW_CART = '[Cart] SET_SHOW_CART';
const SET_LOADING = '[Cart] SET_LOADING';

/***/ }),

/***/ "./store/types/setting.js":
/*!********************************!*\
  !*** ./store/types/setting.js ***!
  \********************************/
/*! exports provided: SET_SETTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SETTING", function() { return SET_SETTING; });
const SET_SETTING = '[Setting] SET_SETTING';

/***/ }),

/***/ "./styles/global.scss":
/*!****************************!*\
  !*** ./styles/global.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./utils/currency.js":
/*!***************************!*\
  !*** ./utils/currency.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function currency(number) {
  var number = number.toFixed(2).split('.');
  number[0] = "R$ " + number[0].split(/(?=(?:...)*$)/).join('.');
  return number.join(',');
}

/* harmony default export */ __webpack_exports__["default"] = (currency);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "pusher-js":
/*!****************************!*\
  !*** external "pusher-js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pusher-js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map