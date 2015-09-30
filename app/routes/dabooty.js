import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('bootcamp', params.bootcamp_id)
  },

  actions: {
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var bootcamp = params.bootcamp;
      bootcamp.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return bootcamp.save();
      });
      this.transitionTo('bootcamps', params.bootcamp);
    },
  }
});
