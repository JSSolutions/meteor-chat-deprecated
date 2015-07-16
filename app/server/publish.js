Meteor.publish('messages', function () {
  return Messages.find();
});

Meteor.publish(null, function () {
  return Meteor.users.find({}, {
    fields: {
      username: 1,
      profile: 1
    }
  });
});
