define(['jquery', 'underscore', 'backbone', 'jade!templates/pages/about'], 
  function($, _, Backbone, Template) {
    var View = Backbone.View.extend({
      render: function() {
        var data = {};
        $(this.el).html(Template(data));
        return this;
      }
    });

    return View;
  }
);
    
