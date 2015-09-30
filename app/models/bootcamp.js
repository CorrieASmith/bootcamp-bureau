import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  location: DS.attr(),
  description: DS.attr(),
  comments: DS.hasMany('comment', {async: true}),
  latitude: DS.attr('number'),
  longitude: DS.attr('number')
});
