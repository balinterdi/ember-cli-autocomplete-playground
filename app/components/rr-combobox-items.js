import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  attributeBindings: 'style'.w(),

  style: Ember.computed('isVisible', function() {
    return this.get('isVisible') ? "display:block" : "display:none"
  })
});
