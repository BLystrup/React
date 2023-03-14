const Joke = require("../models/jokes.model");

// Function to get all jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {res.json({jokes: allJokes})})
        .catch((err) => {res.json({message: "Something went wrong.", error: err})});
}

// Function to find one joke
module.exports.findOneJoke = (req, res) => {
    Joke.findById({_id: req.params.id})
        .then(oneJoke => {res.json({joke: oneJoke})})
        .catch((err) => {res.json({message: "Something went wrong.", error: err})});
}

// Function create one joke
module.exports.createOneJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => {res.json({joke: newJoke})})
        .catch((err) => {res.json({message: "Something went wrong.", error: err})});
}

// Function to update a joke
module.exports.updateOneJoke = (req, res) => {
    Joke.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedJoke => {res.json({joke: updatedJoke})})
        .catch((err) => {res.json({message: "Something went wrong.", error: err})});
}

// Function to delete one joke
module.exports.deleteOneJoke = (req, res) => {
    Joke.findByIdAndDelete({_id: req.params.id})
        .then(result => {res.json({result: result})})
        .catch((err) => {res.json({message: "Something went wrong.", error: err})});
}

