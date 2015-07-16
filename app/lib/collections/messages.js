Messages = new Meteor.Collection('messages');

Messages.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return false;
  },
  remove: function () {
    return false;
  }
});