import express from 'express'
import initRoutes from './src/routes/routes.js'

const app = express(); //criar o servidor

// app.use(express.json()) // requisições trabalham com json

initRoutes(app)

app.listen(8080, () => {
    console.log("Aplicação rodando em http://localhost:8080")
})
                                                         