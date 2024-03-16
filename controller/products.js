const rootDir = require('../helper/path');

const path = require('path');
 
const Product = require('../models/product');

exports.getproduct= (req, res, next)=>{

    

    console.log("Im here");
    
   res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
};

exports.addproduct =  (req, res, next)=>{
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
   
    console.log(req.body.name);

    const product = new Product(req.body.name);

    product.save();

    Product.fetchAll((products)=>{
       

        res.send(`<h1>Form Successfully Sent for ${req.body.name}</h1>`);
        
    });

    
      
        
};