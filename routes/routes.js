let express = require('express')
let router = express.Router()

router.get('/', function(req, res, next) {  // route handler returns json message
    res.json({ 'message': 'Hello!'})
})

module.exports = router