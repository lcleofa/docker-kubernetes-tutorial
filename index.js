const express = require('express')
const app = express()

app.use('*', (req, res, next) => {
    res.send('<h1>Hi cdo Afrah and Diederik, from express app powered by docker and kubernetes for Stedin-net datalake DLKP</h1>')
})

app.listen(4000, () => {
    console.log('Express app listening on port 4000')
})
