module.exports={
    port: process.env.port || 8081,
    db: {
        database:process.env.DB_NAME || 'jdvue',
        user:process.env.DB_USER || 'root',
        password:process.env.DB_PASS  || 'root',
        options: {
                dialect: process.env.DIALECT || 'mysql',
                host: process.env.HOST || 'localhost',
                storage: './jdvue.mysql'     
        }
    }
    
}