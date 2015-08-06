import Ember from 'ember';

export default Ember.Component.extend({
  "on-select": null,
  "on-input": null,

  isDropdownVisible: false,
  input: null,
  inputValue: '',
  list: null,

  isBackspacing: false,

  registerInput(input) {
    this.set('input', input);
  },

  registerList(list) {
    this.set('list', list);
  },

  toggleDropdown() {
    this.toggleProperty('isDropdownVisible');
  },

  keydownMap: {
    8: 'startBackspacing' // backspace
  },

  startBackspacing: function() {
    this.set('isBackspacing', true);
  },

  handleKeydown: Ember.on('keyDown', function(event) {
    const map = this.get('keydownMap');
    const code = event.keyCode;
    const method = map[code];
    if (method) {
      return this[method](event);
    }
  }),

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
        if (this.get('isBackspacing')) {
          this.set('isBackspacing', false);
          return;
        }
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
