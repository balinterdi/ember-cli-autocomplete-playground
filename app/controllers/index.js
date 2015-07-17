import Ember from 'ember';

const artists = [
  { id: 1, name: 'Mike McCready', band: 'Pearl Jam' },
  { id: 2, name: 'Dave Grohl', band: 'Foo Fighters' },
  { id: 3, name: 'Josh Homme', band: 'Them Crooked Vultures' },
  { id: 4, name: 'Jimmy Page', band: 'Led Zeppelin' },
  { id: 5, name: 'Eddie Vedder', band: 'Pearl Jam' }
];

export default Ember.Controller.extend({
  selectedArtist: null,

  init() {
    this._super(...arguments);
    this.set('artists', artists);
  },

  actions: {
    selectArtist(artist) {
      this.set('selectedArtist', artist);
    }
  }
});
