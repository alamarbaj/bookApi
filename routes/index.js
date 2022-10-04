const express = require('express');
const router = express.Router();
const {book,bookAdd,getbookId,bookUpdate,bookDelete} = require('../controller/bookController')
router.get('/',book)
router.post('/bookAdd',bookAdd)
router.get('/getbookId/:_id',getbookId)
router.post('/bookUpdate',bookUpdate)
router.get('/bookDelete/:_id',bookDelete)


module.exports = router;