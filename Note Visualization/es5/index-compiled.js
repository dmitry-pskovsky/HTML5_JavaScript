'use strict';

System.register([], function (_export2, _context2) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      System.register(['library.js'], function (_export, _context) {
        "use strict";

        var calcCircumference;
        return {
          setters: [function (_libraryJs) {
            calcCircumference = _libraryJs.calcCircumference;
          }],
          execute: function execute() {
            alert(calcCircumference(200));
          }
        };
      });
    }
  };
});

//# sourceMappingURL=index-compiled.js.map