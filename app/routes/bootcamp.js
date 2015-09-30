import Ember from 'ember';

var bootcamps = [{
  name: "Code Fellows",
  location: "Seattle, WA",
  description: "Description"
}, {
  name: "Epicodus",
  location: "Portland, OR",
  description: "Description"
}, {
  name: "Codeup",
  location: "San Antonio, TX",
  description: "Description"
}];

export default Ember.Route.extend({
  model() {
    return bootcamps;
  },
});
