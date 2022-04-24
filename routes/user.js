const {Router} = require('express');
const { getUsers,postUsers,putUsers,patchUsers,deleteUsers, getComic, getThumb } = require('../controllers/user');

const router = Router();

router.get('/', getUsers);

router.get('/detail', getComic);

router.get('/thumb', getThumb)

router.post('/', postUsers);

router.put('/', putUsers);

router.patch('/', patchUsers);

router.delete('/', deleteUsers);

module.exports = router;

