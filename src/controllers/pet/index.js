const pet_model = require('../../models/pet')

module.exports = {
    async getPetByName(request, reply) {

        const { name } = request.query 
        
        const all_pets = await pet_model.getAllPets()

        const filtred_pet = all_pets.filter(p => p.name === name)

        const pet = filtred_pet.pop()

        reply.type('application/json').code(200).send(pet)
    }
}