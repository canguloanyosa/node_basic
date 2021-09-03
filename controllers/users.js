const {response} = require('express');


const usersGet = (req, res = response) => {
    res.json({
        msg: 'get API - Controller'
    });
}

const userPost = (req, res = response) => {

    const { name, age } = req.body;

    res.json({
        msg: 'post API - Controller',
        name,
        age
    });
}

const userDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - Controller'
    });
}

const userPut = (req, res = response) => {
    res.json({
        msg: 'put API - Controller'
    });
}

module.exports = {
    usersGet,
    userPost,
    userDelete,
    userPut
}