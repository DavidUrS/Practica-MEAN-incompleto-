const express = require('express');
const router = express.Router();
const usersModel = require('../models/usersModel');

/* GET users listing. */
router.get('/', function(req, res) {
  usersModel.find({},(err,users)=>{
    if (err) {
      console.log(err)
      res.send(err)
    }else if (users) {
      console.log(users);
      res.send(users);
    }
  })
});


router.post('/',function(req,res){
  if (req.body) {
    var user = new usersModel({
      name : req.body.name,
      lastName : req.body.lastName,
      age : req.body.age,
      weight : req.body.weight
    });
    user.save(function(err, doc){
      if (err) {
        console.log('Hubo un error');
        res.send('Hubo un error')
      }else if (doc) {
        console.log('Insertado correctamente');
        res.send('Insertado correctamente')
      }
    })
  }
  else if (!req.body) {
    console.log('No data');
  }

});

router.delete('/:id',function(req,res){
  var id = req.params.id;
  usersModel.remove({_id : id},function(err,numAfects){
    if (err) {
      console.log('No se encontraron registros con el id',id);
    }
    else{
      console.log('Usuario eliminado');
    }
  })
  res.send('proceso terminado');
});



module.exports = router;
