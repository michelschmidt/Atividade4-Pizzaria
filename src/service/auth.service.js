// Importações
const Usuario = require("../model/Usuario");
const jwt = require("jsonwebtoken");

const segredo = "66a6aa84229ab51dccfb0501";

const loginService = (email) => Usuario.findOne({ email: email}).select("senha");

const generateToken = (userId) => jwt.sign({id: userId}, segredo, { expiresIn: 86400});

module.exports = {
    loginService,
    generateToken
}