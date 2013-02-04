require.config({
  paths: {
    'jquery': '/libs/jquery/jquery',
    'underscore': '/libs/underscore-amd/underscore',
    'backbone': '/libs/backbone-amd/backbone',
    'jade': '/libs/require-jade/jade',
    'bootstrap' : '/libs/bootstrap/docs/assets/js/bootstrap',
    'templates': '../templates'
  },
  shim: {
      "bootstrap": {
        deps: ["jquery"]
      }
  }
});

require(['jquery', 'bootstrap', 'routers/app'], function($, bootstrap, AppRouter) {
  window.App = {
    init: function() {
      new AppRouter;
      Backbone.history.start();
    }
  }

  App.init();  
});