import Ember from 'ember';

export default Ember.Component.extend({
  isDropdownVisible: false,

  toggleDropdown() {
    this.toggleProperty('isDropdownVisible');
  },

  actions: {
    selectItem(item) {
      this.get('on-select')(item);
      this.set('isDropdownVisible', false);
    },

    inputDidChange(value) {
      this.get('on-input')(value);
      this.set('isDropdownVisible', true);
    }
  }
});
