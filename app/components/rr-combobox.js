import Ember from 'ember';

export default Ember.Component.extend({
  "on-select": null,
  "on-input": null,

  isDropdownVisible: false,
  input: null,
  inputValue: '',
  list: null,

  isBackspacing: false,
  options: Ember.computed.reads('list.options'),

  registerInput(input) {
    this.set('input', input);
  },

  registerList(list) {
    this.set('list', list);
  },

  toggleDropdown() {
    this.toggleProperty('isDropdownVisible');
  },

  openDropdown() {
    this.set('isDropdownVisible', true);
  },

  keydownMap: {
    8:  'startBackspacing', // backspace
    13: 'selectOption',  // return
    38: 'focusPrevious', // up key
    40: 'focusNext', // down key
  },

  startBackspacing: function() {
    this.set('isBackspacing', true);
  },

  selectOption: function() {
    this.set('isDropdownVisible', false);
  },

  focusPrevious: function(event) {
    event.preventDefault();
    const focused = this.get('focusedOption');
    if (!focused) {
      return;
    }

    let index = this.get('options').indexOf(focused);
    if (this.get('isDropdownVisible')) {
      index = index - 1;
    }
    this.focusOptionAtIndex(index);
  },

  focusNext: function(event) {
    //TODO: Refactor with focusPrevious
    event.preventDefault();
    let index = 0;
    const focused = this.get('focusedOption');
    if (!focused) {
      return;
    }

    index = this.get('options').indexOf(focused);
    if (this.get('isDropdownVisible')) {
      index = index + 1;
    }
    this.focusOptionAtIndex(index);
  },

  focusOptionAtIndex: function(index) {
    const options = this.get('options');
    if (index === -1) {
      index = options.get('length') - 1;
    } else if (index === options.get('length')) {
      index = 0;
    }
    const option = this.get('options').objectAt(index);
    if (!option) {
      return;
    }
    this.focusOption(option);
  },

  focusOption: function(option) {
    const focused = this.get('focusedOption');
    if (focused) {
      focused.blur();
    }
    this.set('focusedOption', option);
    option.focus();
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
          const autocompletedLabel = firstOption.get('label');
          this.set('focusedOption', firstOption);
          this.get('on-select')(firstOption.get('item'));
          this.set('inputValue', autocompletedLabel);
          Ember.run.next(this, () => {
            this.get('input.element').setSelectionRange(value.length, autocompletedLabel.length);
          });
        }
      });
    }
  }
});
