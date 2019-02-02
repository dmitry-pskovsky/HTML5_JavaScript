"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var Configs;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      Configs = function Configs() {
        _classCallCheck(this, Configs);
      };

      _export("default", Configs);

      Configs.HEX_RADIUS = 25;
      Configs.HEX_WIDTH = Math.sqrt(3) * Configs.HEX_RADIUS;
      Configs.HEX_HEIGHT = Configs.HEX_RADIUS * 2;
    }
  };
});