const db = require('../database/dbConfig')

module.exports = {
    add,
    GetAllUsers,
    findBy,
    findById,
}

function getAllUsers() {
    return db ('user')
    .select('id', 'username', 'password')
}

function findBy(filter) {
    return db ('user')
    .where(filter)
}

async function add(user) {
    const [id] = await db('user')
    .insert(user)

    return findById(id)
}

function findById(id) {
    return db('user')
    .where({ id })
    .first()
} 