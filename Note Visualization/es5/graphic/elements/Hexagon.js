'use strict';

System.register(['common/Point.js'], function (_export, _context) {
    "use strict";

    var Point, _createClass, Hexagon;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    return {
        setters: [function (_commonPointJs) {
            Point = _commonPointJs.default;
        }],
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

            Hexagon = function (_PIXI$Sprite) {
                _inherits(Hexagon, _PIXI$Sprite);

                function Hexagon(radius) {
                    _classCallCheck(this, Hexagon);

                    var _this = _possibleConstructorReturn(this, (Hexagon.__proto__ || Object.getPrototypeOf(Hexagon)).call(this));

                    _this.graphics = new PIXI.Graphics();

                    _this.drawCircle(radius);
                    //this.drawBody(radius);
                    return _this;
                }

                _createClass(Hexagon, [{
                    key: 'drawCircle',
                    value: function drawCircle(radius) {
                        var cradius = radius * Math.sqrt(3) / 2;
                        this.graphics.lineStyle(1, 0xff0000);

                        cradius = Math.random() * cradius;

                        this.graphics.drawCircle(0, 0, cradius);

                        this.addChild(this.graphics);
                    }
                }, {
                    key: 'drawBody',
                    value: function drawBody(radius) {
                        this.graphics.lineStyle(1, 0x00);

                        var degrees = 0;
                        var x = 0;
                        var y = 0;
                        var lastX = 0;
                        var lastY = 0;
                        var i = 0;

                        while (i <= 6) {
                            i++;
                            degrees += 60;
                            var _x = radius * Math.sin(Math.radians(degrees));
                            var _y = radius * Math.cos(Math.radians(degrees));

                            if (i > 1) this.drawLine(new Point(lastX, lastY), new Point(_x, _y), 0x00);

                            lastX = _x;
                            lastY = _y;
                        }

                        this.addChild(this.graphics);
                    }
                }, {
                    key: 'drawLine',
                    value: function drawLine(startPoint, endPoint) {
                        var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0xdadada;

                        console.log(color, startPoint);
                        this.graphics.lineStyle(1, color);
                        this.graphics.moveTo(startPoint.x, startPoint.y);
                        this.graphics.lineTo(endPoint.x, endPoint.y);
                    }
                }]);

                return Hexagon;
            }(PIXI.Sprite);

            _export('default', Hexagon);

            Math.radians = function (degrees) {
                return degrees * Math.PI / 180;
            };
        }
    };
});