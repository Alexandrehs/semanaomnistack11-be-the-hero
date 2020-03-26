const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const id_ongs = request.headers.authorization;
        const incidents = await connection('incidents')
            .where('id_ongs', id_ongs)
            .select('*');

        return response.json(incidents);
    }
}