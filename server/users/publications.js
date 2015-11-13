Meteor.publish("users", function () {
    var currentUser = Meteor.users.findOne({_id: this.userId});
    if (!currentUser) {
        return null;
    }
    var domain = currentUser.services.google.email
        // Get the @domain part of the email address, i.e. everything that
        // follows the @ character (we assume the email address to be
        // well-formed, since it's provided by google)
        .match(/@.+$/)[0]
        // Remove the @ character
        .slice(1);
    // We want an exact match for the dot in the domain, hence we replace the
    // dot character with backslash-dot
    var domainRegexp = new RegExp(domain.replace(/\./g, "\\.") + "$", "i");
    return Meteor.users.find({
        "services.google.email": {
            $regex: domainRegexp
        }
    });
});
