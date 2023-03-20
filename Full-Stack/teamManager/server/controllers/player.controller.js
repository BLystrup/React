const Player = require('../models/player.model');

// Find all players
module.exports.findAllPlayers = (req, res) => {
    Player.find()
        .then(allPlayers => res.json({ players: allPlayers }))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}

// Create one player
module.exports.createOnePlayer = (req, res) => {
    Player.create(req.body)
        .then(newPlayer => res.json({ player: newPlayer }))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}

// Find one player
module.exports.findOnePlayer = (req, res) => {
    Player.findById(req.params.id)
        .then(onePlayer => res.json({ player: onePlayer }))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}

// Edit one player
module.exports.editOnePlayer = (req, res) => {
    Player.findByIdAndUpdate( req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedPlayer => res.json({ player: updatedPlayer }))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}

// Delete one player
module.exports.deleteOnePlayer = (req, res) => {
    Player.findByIdAndDelete( req.params.id )
        .then(deletedPlayer => res.json({ player: deletedPlayer }))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}
