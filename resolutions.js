Resolutions = new Mongo.Collection('resolutions');

if (Meteor.isClient) {
    Template.body.helpers({
        resolutions: function() {
            return Resolutions.find();
        }
    });

    Template.body.events({
        'submit .new-resolution': function(event) {
            var title = event.target.title.value;

            Resolutions.insert({
                title: title,
                createdAt: new Date()
            });

            event.target.title.value = "";

            return false;
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function() {
        // code to run on server at startup
    });
}
