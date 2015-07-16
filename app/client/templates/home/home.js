/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
  'submit form': function (e, tmpl) {
    e.preventDefault();
    var message = tmpl.find('#chat-new-msg').value;
    Messages.insert({
      author: Meteor.user().username,
      date: new Date(),
      content: message
    });
    e.target.reset();
  }
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.created = function () {
};

Template.Home.rendered = function () {
};

Template.Home.destroyed = function () {
};
