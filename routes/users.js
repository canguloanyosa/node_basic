const { Router } = require('express');
const { usersGet, userPost, userPut, userDelete } = require('../controllers/users');

const router = Router();

router.get('/', usersGet);

router.put('/:id', userPut);

router.post('/', userPost);

router.delete('/:id', userDelete);

module.exports = router;