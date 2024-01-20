const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtKey = process.env.JWT_KEY;

function checkAuth(req, res, next){
    try{
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, jwtKey);
        req.userData = decodedToken;

        next();
    } catch(e) {
        return res.status(401).json({
            "message": "Invalid or Expired token",
            "error": e
        });
    }
}

module.exports = {
    checkAuth: checkAuth
}