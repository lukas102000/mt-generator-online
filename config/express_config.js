const Express = require("express")
const expressHandlebars = require("express-handlebars")
const Handlebars = require("handlebars")
const app = Express()

// configurando o express handlebars
    app.engine('handlebars', expressHandlebars.engine());
    app.set('view engine', 'handlebars');
    app.set('views', './views');

// criando o nosso servidor local
    PORT = 5500
    const https_server = app.listen(PORT,()=>{
        console.log("the server is running...")
    })
// exportando as configurações
    module.exports = {
        app: app,
        https_server: https_server
    }
