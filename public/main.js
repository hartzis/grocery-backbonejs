(function() {
  var GroceryItem = Backbone.Model.extend({
    Name: '',
    Price: 0
  })

  var GroceryList = Backbone.Collection.extend({
    model: GroceryItem
  })

  var GroceryItemView = Backbone.View.extend({
    initialize: function() {
      this.render();
    },
    render: function() {
      // compile template using handlebars
      var template = Handlebars.compile( $("#grocery_item_template").html() );

      // Load the compiled HTML into the Backbone "el"
      this.$el.html( template );
    }

  })

})();