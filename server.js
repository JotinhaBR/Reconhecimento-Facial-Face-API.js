const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const viewsDir = path.join(__dirname, 'views')
app.use(express.static(viewsDir))
app.use(express.static(path.join(__dirname, './public')))
app.use(express.static(path.join(__dirname, './public/fonts')))
app.use(express.static(path.join(__dirname, './node_modules/face-api.js')))
app.use(express.static(path.join(__dirname, './node_modules/axios/dist')))

app.get('/', (req, res) => res.redirect('/home'))
app.get('/home', (req, res) => res.sendFile(path.join(viewsDir, 'index.html')))


app.listen(3000, () => console.log('Listening on port 3000!'))
