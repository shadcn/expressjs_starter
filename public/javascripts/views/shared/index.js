define(['jquery', 'underscore', 'backbone', 'jade!templates/shared/index'], 
  function($, _, Backbone, Template) {
    var IndexView = Backbone.View.extend({
      render: function() {
        var data = {
          name: "Arshad"
        };
        $(this.el).html(Template(data));
        return this;
      }
    });

    return IndexView;
  }
);
    
