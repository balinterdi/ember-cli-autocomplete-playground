import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'input',
  attributeBindings: 'value type placeholder'.w(),

  registerWithCombobox: Ember.on('didInsertElement', function() {
    this.get('parentView').registerInput(this);
  }),

  filterItems: Ember.on('input', function() {
    const value = this.$().val();
    this.get('on-change')(value);
  }),

  updateValue() {
    const value = this.get('value');
    this.$().val(value);
  },
});
