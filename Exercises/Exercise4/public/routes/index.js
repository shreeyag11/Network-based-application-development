var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
    res.send('Welcome to the course app!')
})

module.exports = router;