module.exports=(sequelize,DataTypes)=>
sequelize.define('users',{
    email:{
        type:DataTypes.STRING,
        unique:true
    },
    password:DataTypes.STRING

})