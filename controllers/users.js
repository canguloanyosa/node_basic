const { request, response } = require('express');


const usersGet = (req = request, res = response) => {

    const { q, name = 'No name', apikey, limit = '10', page = '1'  } = req.query;

    res.json({
        msg: 'get API - Controller',
        q,
        name,
        apikey,
        limit,
        page
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

    const { id } = req.params;

    res.json({
        msg: 'delete API - Controller',
        id
    });
}

const userPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - Controller',
        id
    });
}

module.exports = {
    usersGet,
    userPost,
    userDelete,
    userPut
}