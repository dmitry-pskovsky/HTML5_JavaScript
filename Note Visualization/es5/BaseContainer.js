'use strict';

System.register(['graphic/elements/BackgroundGrid.js', 'Configs.js', 'graphic/elements/Hexagon.js', 'graphic/elements/Square.js'], function (_export, _context) {
    "use strict";

    var BackgroundGrid, Configs, Hexagon, Square, _createClass, BaseContainer;

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
        setters: [function (_graphicElementsBackgroundGridJs) {
            BackgroundGrid = _graphicElementsBackgroundGridJs.default;
        }, function (_ConfigsJs) {
            Configs = _ConfigsJs.default;
        }, function (_graphicElementsHexagonJs) {
            Hexagon = _graphicElementsHexagonJs.default;
        }, function (_graphicElementsSquareJs) {
            Square = _graphicElementsSquareJs.default;
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

            BaseContainer = function (_PIXI$Sprite) {
                _inherits(BaseContainer, _PIXI$Sprite);

                function BaseContainer() {
                    var _ref;

                    _classCallCheck(this, BaseContainer);

                    for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
                        arg[_key] = arguments[_key];
                    }

                    var _this = _possibleConstructorReturn(this, (_ref = BaseContainer.__proto__ || Object.getPrototypeOf(BaseContainer)).call.apply(_ref, [this].concat(arg)));

                    _this.addChild(new BackgroundGrid());
                    //let square1 = new Square(100);
                    //this.addChild(square1);

                    _this.fillHexagons();

                    return _this;
                }

                _createClass(BaseContainer, [{
                    key: 'fillHexagons',
                    value: function fillHexagons() {
                        var xPos = Math.sqrt(3) * Configs.HEX_RADIUS / 2;
                        var yPos = Configs.HEX_RADIUS;
                        var h = Configs.HEX_RADIUS * Math.cos(Math.radians(60));

                        var hexagon = void 0;
                        //(Configs.HEX_RADIUS * 4)
                        for (yPos; yPos <= 500; yPos += Configs.HEX_RADIUS * 4 - 2 * h) {
                            console.log(yPos);
                            for (xPos; xPos < 500; xPos += Configs.HEX_WIDTH) {
                                hexagon = new Hexagon(Configs.HEX_RADIUS);
                                hexagon.x = xPos;
                                hexagon.y = yPos;
                                this.addChild(hexagon);
                            }
                            xPos = Math.sqrt(3) * Configs.HEX_RADIUS / 2;
                        }

                        yPos = Configs.HEX_RADIUS * 3 - h;
                        for (yPos; yPos <= 500; yPos += Configs.HEX_RADIUS * 4 - 2 * h) {
                            xPos = Math.sqrt(3) * Configs.HEX_RADIUS;
                            for (xPos; xPos < 500; xPos += Configs.HEX_WIDTH) {
                                hexagon = new Hexagon(Configs.HEX_RADIUS);
                                hexagon.x = xPos;
                                hexagon.y = yPos;
                                this.addChild(hexagon);
                            }
                        }
                    }
                }, {
                    key: 'render',
                    value: function render() {}
                }, {
                    key: 'update',
                    value: function update() {}
                }]);

                return BaseContainer;
            }(PIXI.Sprite);

            _export('default', BaseContainer);
        }
    };
});