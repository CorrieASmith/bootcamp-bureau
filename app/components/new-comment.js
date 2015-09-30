import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  addComment: false,
  actions: {
    commentFormShow() {
      this.set('addComment', true);
    },
    saveComment(bootcamp) {
        var params = {
        name: this.get('name'),
        comment: this.get('comment'),
        bootcamp: bootcamp
      };
      this.set('addComment', false);
      this.sendAction('saveComment', params);
    }
  }
});
