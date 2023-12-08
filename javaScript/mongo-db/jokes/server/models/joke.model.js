const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String
    },
    punchline: {
        type: String,
        required: [true, "Need to include a punchline"]
    }
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;