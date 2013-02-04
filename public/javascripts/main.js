require.config({
  paths: {
    'jquery': '/libs/jquery/jquery',
    'underscore': '/libs/underscore-amd/underscore',
    'backbone': '/libs/backbone-amd/backbone',
    'jade': '/libs/require-jade/jade',
    'templates': '../templates'
  }
});

require(['jquery', 'routers/app'], function($, AppRouter) {
  window.App = {
    init: function() {
      new AppRouter;
      Backbone.history.start();
    }
  }

  App.init();  
});