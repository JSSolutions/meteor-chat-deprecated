Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  waitOn: function () {
    return Meteor.subscribe('messages');
  },
  data: function () {
    return {
      messages: Messages.find()
    };
  }
});

Router.onBeforeAction(function() {
  if (! Meteor.userId()) {
    this.render('Login');
  } else {
    this.next();
  }
});
