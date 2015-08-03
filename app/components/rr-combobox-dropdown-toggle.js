import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  'data-dropdown': 'dropdown',

  combobox: null,

  toggleDropdown: Ember.on('click', function() {
    this.get('combobox').toggleDropdown();
  })

});
