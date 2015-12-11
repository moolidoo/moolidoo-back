Meteor.methods({
    addTips: function (targetUserId) {
        const numTips = 1;
        const userId = Meteor.userId();
        if (userId == targetUserId) {
            throw new Meteor.Error("Cannot add tips to yourself");
        }
        Meteor.users.update({_id: targetUserId}, {
            $inc: {
                tips: numTips
            }
        })
    }
})
