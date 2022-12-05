const {app} = require("../config/express_config")

// criando a nossa rotas home ou início
    app.get("/",(req, res)=>{
        res.render("home")
    })

module.exports = app