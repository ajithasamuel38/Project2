const fs = require('fs');

const path = require('path');

 const productsFilePath = path.join(__dirname, '..', 'data', 'products.json');

 const getnameofuser = (cb)=>{
     
    fs.readFile(productsFilePath, (err, fileContent)=>{
           
        if(err){
          return cb([]);
        }
        else{
           return cb(JSON.parse(fileContent));
        }
        
    })
 
 }

module.exports = class Product {
     constructor(name){
        this.name = name;
        console.log(name);
     }

     save(){
       
        getnameofuser(products=>{
            products.push(this);

            fs.writeFile(productsFilePath, JSON.stringify(products), (err) =>{
                console.log("Success");
              })
        });
        
 }

static fetchAll(cb){

    getnameofuser(cb);
        
    };
}