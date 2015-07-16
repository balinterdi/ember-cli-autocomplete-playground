import Ember from 'ember';

const artists = [
  { id: 1, name: 'Mike McCready', band: 'Pearl Jam' },
  { id: 2, name: 'Dave Grohl', band: 'Foo Fighters' },
  { id: 3, name: 'Josh Homme', band: 'Them Crooked Vultures' },
  { id: 4, name: 'Jimmy Page', band: 'Led Zeppelin' },
  { id: 5, name: 'Eddie Vedder', band: 'Pearl Jam' }
];

export default Ember.Controller.extend({
  currentArtist: 1,

  init() {
    this._super(...arguments);
    this.set('artists', artists);
  },

  actions: {
    artistChanged(inputValue, selectedArtist) {
      // const matchingArtists = artists.filter(function(artist) {
      //   return artist.name.toLowerCase().indexOf(inputValue) !== -1;
      // });
      // this.set('artists', matchingArtists);
      console.log('artistChanged', inputValue);
    },

    selectArtist(selectedId, selectedOption) {
      // const selectedArtist = artists.find(function(artist) {
      //   return artist.id === selectedId;
      // });
      // this.set('currentArtist', selectedArtist);
      console.log('selectArtist', selectedId);
    }
  }
});
