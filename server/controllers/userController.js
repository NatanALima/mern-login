const userModel = require('../models/user.model');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find({});
        users.length > 0 ? res.status(200).json(users) : res.status(200).send('Coleção Vazia!');

    } catch(err) {
        res.status(500).send(err.message);
    }
}

exports.getOneUser = async (req, res) => {
    try {
        const user = await userModel.find({email: req.params.email, password: req.params.senha});
        res.status(200).json(user);

    } catch(err) {
        res.status(500).send(err.message);
    }
}