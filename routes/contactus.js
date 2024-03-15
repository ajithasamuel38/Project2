const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../helper/path');

router.get('/contactus', (req, res, next)=>{

    
    
   res.sendFile(path.join(__dirname, '../', 'views', 'contactus.html'));

})
router.post('/success', (req, res, next)=>{

   res.send('<h1>Form Successfully Send</h1>');
     
})

module.exports = router;