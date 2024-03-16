const rootDir = require('../helper/path');

const path = require('path');

exports.getproduct= (req, res, next)=>{

    console.log("Im here");
    
   res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
};

exports.addproduct = (req, res, next)=>{
    // console.log(req.body);
     res.redirect('/');
};


exports.shopproducts = (req, res, next)=>{

    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
};


exports.contactus = (req, res, next)=>{

    res.sendFile(path.join(__dirname, '../', 'views', 'contactus.html'));
 
 };

 exports.success = (req, res, next)=>{

    res.send('<h1>Form Successfully Send</h1>');
      
 };