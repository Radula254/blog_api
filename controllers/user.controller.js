const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtKey = process.env.JWT_KEY;

//signup
function signUp(req, res){

    models.User.findOne({ where: { email: req.body.email }}).then(result => {
        if(result){
            res.status(409).json({
                message: "Email already registered"
            });
        } else {
            bcryptjs.genSalt(10, function(err, salt){
                bcryptjs.hash(req.body.password, salt, function(err, hash){
                    const user = {
                        name: req.body.name,
                        email: req.body.email,
                        password: hash
                    }
                
                    models.User.create(user).then(result => {
                        res.status(200).json({
                            message: "User created successfully"
                        })
                    }).catch(error => {
                        res.status(500).json({
                            message: "Something went wrong",
                            error: error
                        })
                    });
                })
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        })
    });
}

//login
function login(req, res){
    models.User.findOne({ where: {email: req.body.email}}).then(user => {
        if(user === null){
            res.status(401).json({
                message: "Invalid Credentials!"
            });
        } else {
            bcryptjs.compare(req.body.password, user.password, function(err, result){
                if(result){
                    const token = jwt.sign({
                        email: user.email,
                        userId: user.id
                    }, jwtKey, function(err, token){
                        res.status(200).json({
                            message: "Authentication successful!",
                            token: token
                        });
                        
                    });
                } else {
                    res.status(401).json({
                        message: "Invalid credentials"
                    })
                }
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
        })
    });
}

module.exports = {
    signUp: signUp,
    login: login
}