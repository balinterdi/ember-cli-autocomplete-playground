import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'input',
  attributeBindings: 'value type placeholder'.w(),

  registerWithCombobox: Ember.on('didInsertElement', function() {
    this.get('parentView').registerInput(this);
  }),

  valueDidChange: Ember.on('input', function() {
    const value = this.$().val();
    this.get('on-change')(value);
    // TODO: If there is a selected item, use input.setSelectedRange to select
    // the "inferred" text so that the component does not get in the way of
    // typing. See ic-autocomplete/autocomplete.js/autocompleteText on how to do that.
  }),

  updateValue() {
    const value = this.get('value');
    this.$().val(value);
  },
});
