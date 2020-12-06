const express = require('express')

const router = express.Router();

router.use('/add', (req ,res, next)=>{
    console.log('In add Middleware');
    res.send('This is /add');
})


module.exports = router;