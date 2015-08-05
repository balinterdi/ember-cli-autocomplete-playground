import Ember from 'ember';

export default Ember.TextField.extend({

  registerWithCombobox: Ember.on('didInsertElement', function() {
    this.get('parentView').registerInput(this);
  }),

  valueDidChange: Ember.on('input', function() {
    const value = this.$().val();
    this.get('on-change')(value);
  }),

  updateValue() {
    const value = this.get('value');
    this.$().val(value);
  },
});
