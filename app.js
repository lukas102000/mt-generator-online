// importando a configuração completa do express
    const {app} = require("./config/express_config")

// importando as routas criadas
    const routers = require("./routers/routers")

// usando o nosso servidor no app
    const {https_server} = require("./config/express_config")