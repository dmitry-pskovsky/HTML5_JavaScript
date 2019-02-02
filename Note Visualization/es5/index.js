'use strict';

System.register(['BaseContainer.js'], function (_export, _context) {
    "use strict";

    var BaseContainer, _createClass, Index, main;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_BaseContainerJs) {
            BaseContainer = _BaseContainerJs.default;
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

            Index = function () {
                function Index() {
                    _classCallCheck(this, Index);

                    this.renderer = PIXI.autoDetectRenderer(this.w, this.h, { backgroundColor: 0xffffff });
                    document.body.appendChild(this.renderer.view);

                    this.container = new BaseContainer();
                    this.container.stage = new Object();
                    this.container.stage.x = this.w;
                    this.container.stage.y = this.h;

                    this.stage = new PIXI.Container();
                    this.stage.addChild(this.container);
                }

                _createClass(Index, [{
                    key: 'render',
                    value: function render() {
                        this.container.render();
                        this.renderer.render(this.stage);
                        this.animate();
                    }
                }, {
                    key: 'animate',
                    value: function animate() {
                        this.container.update();
                        this.renderer.render(this.stage);
                        window.requestAnimationFrame(this.animate.bind(this));
                    }
                }]);

                return Index;
            }();

            Index.prototype.w = 501;
            Index.prototype.h = 501;

            main = new Index();

            main.render();
        }
    };
});