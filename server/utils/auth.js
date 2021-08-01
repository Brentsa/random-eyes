//import JSON web token library
const jwt = require('jsonwebtoken');
require( 'dotenv' ).config();

//define the secret and expiration of the JWT
const secret = process.env.JWTSECRET;;
const expiration = "1h"

function authMiddleware({req}){
    //can include the token as a part of the request body, query string ie. ?token=abc, or as an HTTP header
    let token = req.body.token || req.query.token || req.headers.authorization;

    //if the token comes from the authorization header, we need to parse it
    if(req.headers.authorization) token = token.split(' ').pop().trim();
        
    //if there is no token, then return the request as normal
    if(!token) return req;

    try{
        //try to verify the token given and take the data if successful
        const {data} = jwt.verify(token, secret, {maxAge: expiration});

        //add the data to the req via user property
        req.user = data;
    }
    catch{
        //Write an error message if verification fails
        console.log('Invalid Token!');
    }

    return req;
}

//generate a jwt token with user data
function signToken({username, email, _id}){
    //create a payload object with the data we want the JWT to hold
    const payload = {username, email, _id};

    //return the JWT with the data to be encoded, the secret, and expiration timer
    return jwt.sign({data: payload}, secret, {expiresIn: expiration});
}

module.exports = {authMiddleware, signToken};
