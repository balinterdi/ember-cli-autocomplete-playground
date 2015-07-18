import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'input',
  attributeBindings: 'value type placeholder'.w(),


  filterItems: Ember.on('input', function() {
    const value = this.$().val();
    this.get('on-change')(value);
  })
});
