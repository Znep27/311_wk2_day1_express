
const express = require('express')
const bodyparser = require(`body-parser`)
const app = express()
const port = process.env.PORT || 4000

const { users } = require('./state')

app.use(bodyparser.json())

/* BEGIN - create routes here */

app.get('/users', (req, res) => {
  res.json(users)
})

// app.get('/users/1', (req, res) => {
//   res.json(users[0])
// })

app.get('/users/:userId', (req, res) => {
  let id = req.params.userId - 1
  res.json(users[id])
})

app.post('/users', (req, res) => {
  users.push({
    ...req.body,
    "_id": users.length + 1,
    "name": "Ash Williams",
    "occupation": "Stock boy",
    "avatar": "https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Ashley_James_Williams.jpg/220px-Ashley_James_Williams.jpg"
  })
  res.json(users)
})

// app.put('/users/1', (req, res) => {
//   res.json(users[0].occupation = "Food Reviewer")
// })

app.put('/users/:userId', (req, res) => {
  let id = req.params.userId - 1
  res.json(users[id].occupation = "Food Reviewer")
})

// app.delete('/users/1', (req, res) => {
//   users.splice(0, 1)
//   res.send('deleted')
// })

app.delete('/users/:userId', (req, res) => {
  let id = req.params.userId - 1;
  users[id].isActive = false
  res.send('deleted')
})

app.post('/users/:userId', (req, res) => {
  
  let newUser = {
    ...req.body,
    "_id": users.length + 1,
    "name": req.body.name,
    "occupation": req.body.occupation,
    "avatar": req.body.avatar
  }

  users.push(newUser)
  res.json(users)
})

  /* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))
  //console.log(users)
  console.log(users)