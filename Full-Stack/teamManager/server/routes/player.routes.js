const PlayerController = require('../controllers/player.controller');

module.exports = app => {
    app.get('/api/players', PlayerController.findAllPlayers);
    app.get('/api/players/:id', PlayerController.findOnePlayer);
    app.post('/api/players', PlayerController.createOnePlayer);
    app.put('/api/players/:id', PlayerController.editOnePlayer);
    // app.patch('/api/players/:id', PlayerController.editOnePlayer);
    app.delete('/api/players/:id', PlayerController.deleteOnePlayer);
}