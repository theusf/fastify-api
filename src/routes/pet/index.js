const pet_controller = require('../../controllers/pet')

module.exports = (fastify) => {

    fastify.route({
        method: 'GET',
        url: '/pet',
        schema: {
            // request needs to have a querystring with a `name` parameter
            querystring: {
                type: "object",
                required: ["name"],
                properties: {
                    name: { "type": "string" }
                },
                additionalProperties: false
            },
            // the response needs to be an object with an `hello` property of type 'string'
            response: {
                200: {
                    type: 'object',
                    properties: {
                        name: { type: 'string' },
                        age: { type: 'string' },
                        gender: { type: 'string' },
                        breed: { type: 'string' }
                    }
                }
            }
        },
        // this function is executed for every request before the handler is executed
        preHandler: async (request, reply) => {
            // E.g. check authentication
        },
        handler: pet_controller.getPetByName
    })
}
