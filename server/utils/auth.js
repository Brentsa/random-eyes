const jwt = require('jsonwebtoken');

const secret = "This is a big big secret" //TODO: move this to a .env file
const expiration = "1h"

function authMiddleware({req}){

}

function signToken({username, email, _id}){

}

module.exports = {authMiddleware, signToken};