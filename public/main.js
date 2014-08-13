(function() {
  var GroceryItem = Backbone.Model.extend({
    defaults: {
      Name: '',
      Price: 0  
    },
    initialize: function() {
      console.log('creating item');
    }

    
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
      var template = Handlebars.compile( $("#grocery_item_template").html());
      var html = template(this.model.toJSON());
      // Load the compiled HTML into the Backbone "el"
      this.$el.html( html );
    }
  })

  var milk = new GroceryItem({Name:'Milk'});
  var cheese = new GroceryItem({Name:'Cheese', Price:1.2})

  // create grocery list
  var groceryList = new GroceryList;

  var groceryItemView = new GroceryItemView({model: cheese, el:$('#main-container')});

})();