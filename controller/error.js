const path = require('path');

exports.get404PageFile = (req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, '../', 'views', '404.html'));
};

