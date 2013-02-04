define(['backbone', 'views/shared/index', 'views/pages/about'], 
  function(Backbone, IndexView, AboutView) {
    var App = Backbone.Router.extend({
      routes: {
        '': 'index',
        'about': 'about'
      },
      index: function() {
        view = new IndexView;
        $("#content").html(view.render().el);
      },
      about: function(a) {
        view = new AboutView;
        $("#content").html(view.render().el);
      }
    });

    return App;
  }
);
    
