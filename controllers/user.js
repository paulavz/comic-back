const { response } = require('express'); 

const getUsers = (req, res = response) => {
    res.json({
        msg:'get API- controlador'
    });
}

const postUsers = (req, res = response) => {
    const {nombre,edad} = req.body;

    res.json({
        msg:'post API- controlador',
        nombre,
        edad
    });
}

const putUsers = (req, res = response) => {
    res.json({
        msg:'put API- controlador'
    });
}

const patchUsers = (req, res = response) => {
    res.json({
        msg:'patch  API- controlador'
    });
}

const deleteUsers = (req, res = response) => {
    res.json({
        msg:'delete API- controlador'
    });
}

module.exports = {
    getUsers,
    postUsers,
    putUsers,
    patchUsers,
    deleteUsers
}