import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  'data-dropdown': 'dropdown',

  toggleDropdown: Ember.on('click', function() {
    this.parentView.toggleDropdown();
  })

});
