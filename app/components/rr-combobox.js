import Ember from 'ember';

export default Ember.Component.extend({
  "on-select": null,
  "on-input": null,

  isDropdownVisible: false,
  input: null,
  inputValue: '',
  list: null,

  registerInput(input) {
    this.set('input', input);
  },

  registerList(list) {
    this.set('list', list);
  },

  toggleDropdown() {
    this.toggleProperty('isDropdownVisible');
  },

  actions: {
    selectItem(item, value) {
      this.get('on-select')(item);
      this.set('isDropdownVisible', false);
      this.set('inputValue', value);
    },

    inputDidChange(value) {
      this.get('on-input')(value);
      this.set('isDropdownVisible', true);
      Ember.run.scheduleOnce('afterRender', this, function() {
        const firstOption = this.get('list.firstOption');
        if (firstOption) {
          this.get('on-select')(firstOption.get('item'));
          this.set('inputValue', firstOption.get('label'));
          // this.get('input.element').setSelectionRange(value.length, firstOption.get('label').length);
        }
      });
    }
  }
});
