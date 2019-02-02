'use strict';

System.register(['common/Point.js'], function (_export, _context) {
    "use strict";

    var Point, _createClass, BackgroundGrid;

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

            BackgroundGrid = function (_PIXI$Sprite) {
                _inherits(BackgroundGrid, _PIXI$Sprite);

                function BackgroundGrid(width, height) {
                    _classCallCheck(this, BackgroundGrid);

                    var _this = _possibleConstructorReturn(this, (BackgroundGrid.__proto__ || Object.getPrototypeOf(BackgroundGrid)).call(this));

                    _this.graphics = new PIXI.Graphics();
                    _this.drawGrid();
                    _this.addChild(_this.graphics);
                    return _this;
                }

                _createClass(BackgroundGrid, [{
                    key: 'drawGrid',
                    value: function drawGrid() {

                        this.drawLine(new Point(0, 0), new Point(500, 0));
                        this.drawLine(new Point(0, 500), new Point(500, 500));

                        this.drawLine(new Point(0, 0), new Point(0, 500));
                        this.drawLine(new Point(500, 0), new Point(500, 500));
                        /*
                                for (var i = 0; i <= 500; i += Config.HEX_RADIUS) {
                                    this.drawLine(new Point(0, i), new Point(500, i));
                                }
                        
                                for (i = 0; i <= 500; i += 10) {
                                    this.drawLine(new Point(i, 0), new Point(i, 500));
                                }
                        */
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

                return BackgroundGrid;
            }(PIXI.Sprite);

            _export('default', BackgroundGrid);
        }
    };
});