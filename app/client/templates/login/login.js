/*****************************************************************************/
/* Login: Event Handlers */
/*****************************************************************************/
Template.Login.events({
  'submit form': function (e, tmpl) {
    e.preventDefault();
    var username = tmpl.find('#username').value;
    Accounts.createUser({
      username: username,
      password: username
    });
  }
});

/*****************************************************************************/
/* Login: Helpers */
/*****************************************************************************/
Template.Login.helpers({
});

/*****************************************************************************/
/* Login: Lifecycle Hooks */
/*****************************************************************************/
Template.Login.created = function () {
};

Template.Login.rendered = function () {
};

Template.Login.destroyed = function () {
};
