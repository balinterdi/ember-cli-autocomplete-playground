import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  attributeBindings: 'style'.w(),

  combobox: null,
  options: Ember.A(),

  firstOption: Ember.computed.reads('options.firstObject'),

  registerOption(option) {
    this.get('options').pushObject(option);
  },

  unregisterOption(option) {
    this.get('options').removeObject(option);
  },

  registerWithAutocomplete: Ember.on('didInsertElement', function() {
    this.get('combobox').registerList(this);
  }),

  style: Ember.computed('isVisible', function() {
    return this.get('isVisible') ? "display:block" : "display:none";
  })
});
