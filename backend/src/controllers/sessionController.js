const connection = require('../database/connection')

module.exports = {
    async login(request, response) {
        const {id} = request.body

        const ong = await connection('ong')
        .where('id', id)
        .select('name')
        .first()

        if(!ong) {
            return response.status(400).json({error: "id de ONG não encontrado no sistema"})
        }

        return response.json(ong)
    },
}