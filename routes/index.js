const router = require('express').Router()
const peopleRoute = require('./peopleRoutes') //import the people routing js page


router.use('/people', peopleRoute) //any url beginning in /people will be directed to ./peopleRoutes and then use the request's HTTP method sent





module.exports = router;