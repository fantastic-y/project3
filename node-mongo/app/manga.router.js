module.exports = function(app) {

    var mangas = require('../app/manga.controller.js');

    app.post('/api/manga', mangas.createManga);
    app.get('/api/manga/:id', mangas.getManga);
    app.get('/api/mangas',mangas.mangas);
    app.put('/api/manga', mangas.updateManga);
    app.delete('/api/manga/:id', mangas.deleteManga);
    
}