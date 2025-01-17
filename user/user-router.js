const router = require('express').Router()

const User = require('./user-model')
const restricted = require('../auth/restricted')
const checkRole = require('../auth/checkRole')

router.get('/', restricted, (req, res) => {
    User.GetAllUsers()
    .then(users => {
        res.json(users)
    })
    .catch(err => res.send(err))
})

module.exports = router; 