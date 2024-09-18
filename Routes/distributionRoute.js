const express = require('express');
const { connectUser, setTopAstrologer, createUser, createAstrologer } = require('../Controllers/distributionController');

const router = express.Router();

router.post('/createUser', createUser);
router.post('/connect', connectUser);
router.post('/setTopAstrologer', setTopAstrologer);
router.post('/createAstrologer', createAstrologer);

module.exports = router;