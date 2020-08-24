

const UserSchema = new Schema({
    userId: Number,
    username: String,
    password: String,
    role: String,
    userWebinars: [{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Webinar"
        }]


});

const WebinarSchema = new Schema({
    WebinarId: Number,
    title: String,
    date: Date,
    hosts: String,
    duration: String,
    topics: {
        educational: Boolean,
        beginner: Boolean,
        networking: Boolean
    },
    creator: {
        type: Schema.Type.ObjectId,
        ref: "User"
    }

})
