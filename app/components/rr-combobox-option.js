import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: 'combobox-option',
  classNameBindings: 'isActive:active isFocused:focused'.w(),

  list: null,
  id: null,
  label: null,
  item: null,
  activeId: null,

  isFocused: false,

  isActive: Ember.computed('id', 'activeId', function() {
    return this.get('id') === this.get('activeId');
  }),

  combobox: Ember.computed.reads('list.combobox'),

  registerWithList: Ember.on('didInsertElement', function() {
    this.get('list').registerOption(this);
  }),

  unregisterWithList: Ember.on('willDestroyElement', function() {
    this.get('list').unregisterOption(this);
  }),

  toggleDropdown: Ember.on('click', function() {
    const item = this.get('item');
    this.get('on-click')(item, this.get('label'));
  }),

  focus: function() {
    this.set('isFocused', true);
  },

  blur: function() {
    this.set('isFocused', false);
  },
});
