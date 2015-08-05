import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',

  list: null,
  id: null,
  label: null,
  item: null,

  registerWithList: Ember.on('didInsertElement', function() {
    this.get('list').registerOption(this);
  }),

  unregisterWithList: Ember.on('willDestroyElement', function() {
    this.get('list').unregisterOption(this);
  }),

  toggleDropdown: Ember.on('click', function() {
    const item = this.get('item');
    this.get('on-click')(item, this.get('label'));
  })
});
