"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, Point;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            Point = function () {
                function Point(x, y) {
                    _classCallCheck(this, Point);

                    this._x = x;
                    this._y = y;
                }

                _createClass(Point, [{
                    key: "x",
                    set: function set(value) {
                        this._x = value;
                    },
                    get: function get() {
                        return this._x;
                    }
                }, {
                    key: "y",
                    set: function set(value) {
                        this._y = value;
                    },
                    get: function get() {
                        return this._y;
                    }
                }]);

                return Point;
            }();

            _export("default", Point);
        }
    };
});