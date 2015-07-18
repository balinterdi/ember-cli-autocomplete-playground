import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',

  item: null,

  toggleDropdown: Ember.on('click', function() {
    const item = this.get('item');
    this.get('on-click')(item);
  })
});
