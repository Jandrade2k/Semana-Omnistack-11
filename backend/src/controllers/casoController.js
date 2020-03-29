const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query

        const [count] = await connection('casos').count();

        const casos = await connection('casos')
            .join('ong', 'ong_id', '=', 'casos.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select('casos.*', 'ong.name', 'ong.email', 'ong.whatsapp', 'ong.city', 'ong.uf')

        response.header('X-Total-Count', count['count(*)'])

        return response.json(casos)
    },

    async create(request, response) {
        const { titulo, description, value } = request.body
        const ong_id = request.headers.authorization

        const [id] = await connection('casos').insert({
            titulo,
            description,
            value,
            ong_id
        })
        return response.json({
            id,
            status: 200
        })
    },

    async delete(request, response) {
        const { id } = request.params
        const ong_id = request.headers.authorization

        const caso = await connection('casos')
            .where('id', id)
            .select('ong_id')
            .first()

        if (caso.ong_id !== ong_id) {
            return response.status(401).json({ eror: "Sem permissão" })
        }

        await connection('casos').where('id', id).delete()

        return response.status(204).send()
    }
}