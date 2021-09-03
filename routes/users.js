const { Router } = require('express');
const { usersGet, userPost, userPut, userDelete } = require('../controllers/users');

const router = Router();

router.get('/', usersGet);

router.put('/', userPut);

router.post('/', userPost);

router.delete('/', userDelete);

module.exports = router;