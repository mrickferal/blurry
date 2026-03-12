const app = {
  init: function () {
    console.log("Hello world, I'm app.js 👑");

    // load the modules used in the app
    tools.init();
    blurry.init();
  },
};

document.addEventListener("DOMContentLoaded", app.init);
