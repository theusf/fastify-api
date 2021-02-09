const pet_routes = require('../routes/pet')

module.exports = async (fastify) => {

    pet_routes(fastify)

}
