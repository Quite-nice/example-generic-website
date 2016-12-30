var Express = require('express')
var generateWebsite = require('generic-website')

var app = new Express()

app.use((req, res) => {
  res.send(generateWebsite())
})

app.listen(3000, () => {
  console.log('website now runs on port 3000')
})
