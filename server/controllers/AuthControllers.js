const {users} = require('../models')

module.exports  = {
     login(req, res) {
       try {
        const user =  users.create(req.body)
        res.send(user.toJSON())
       } catch(err)
       {
           res.status(400).send({
               error:err
           })

       }
    }

}