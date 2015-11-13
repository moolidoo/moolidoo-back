Meteor.methods({
    addTips: function (numTips, targetUserId) {
        Meteor.users.update({_id: targetUserId}, {
            $inc: {
                tips: numTips
            }
        })
    }
})
