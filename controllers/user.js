const { default: axios } = require('axios');
const { response } = require('express'); 

const getUsers = async(req, res = response) => {
    const {limit,offset,token} = req.query;
    const resp = await axios.get(`https://comicvine.gamespot.com/api/issues/?api_key=${token}&format=json&limit=${limit}&offset=${offset}`)
    res.json(resp.data);
}


//http://localhost:4000/api/comic/detail?cod=4000-8
const getComic = async(req, res = response) => {
    const {cod,token} = req.query;
    const resp = await axios.get(`https://comicvine.gamespot.com/api/issue/${cod}/?api_key=${token}&format=json`)
    res.json(resp.data);
}

const getThumb = async(req, res = response) => {
    const {cod,category,token} = req.query;
    const resp = await axios.get(`https://comicvine.gamespot.com/api/${category}/${cod}/?api_key=${token}&format=json`)
    res.json(resp.data);
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
    deleteUsers,
    getComic,
    getThumb
}