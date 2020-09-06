
const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: String,
    favorite: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Webinar"
    }],
    registered: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Webinar"
    }],
    completedVideo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Webinar"
    }],
    passedQuiz: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Webinar"
    }]
});

const WebinarSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String.maxlength = 500,
    date: Date,
    hosts: String,
    duration: String,
    mainTopic: String,
    skillLevel: String,
    quiz: {
        directions: String,
            questions: [{
                question: {
                    body: String,
                    choices: [{
                        choice: String
                    }],
                    answer: String,
                }
            }],
        },
    tags: {
        educational: Boolean,
        networking: Boolean,
        finance: Boolean,
        marketing: Boolean,
        engineering: Boolean
    },
    creator: {
        type: Schema.Type.ObjectId,
        ref: "User"
    }
});
