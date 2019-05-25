const express = require('express')
const app = express()

app.use('*', (req, res, next) => {
    res.send('<h1>Hola stedin v1.2, from express app powered by docker and kubernetes for Stedin-net datalake DLKP</h1>')
})

app.listen(4000, () => {
    console.log('Express app listening on port 4000')
})
