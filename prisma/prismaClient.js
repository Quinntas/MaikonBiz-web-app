const { PrismaClient } = require("@prisma/client");

var prismaClient = (function () {
  var instance;

  function createInstance() {
    var object = new PrismaClient();
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

export { prismaClient };
