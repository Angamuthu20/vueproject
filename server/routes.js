const AuthController = require('./controllers/AuthControllers')
module.exports = (app) =>{
    app.post('/login',AuthController.login)
}