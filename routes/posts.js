var express = require('express');
var router = express.Router();
const pgp = require('pg-promise')();
const connection = {
    host: 'localhost',
    port: 5432,
    database: 'facebook_db',
}
const db = pgp(connection);

router.get('/all', async (req, res) => {
  try{
    let allPosts = await db.any("SELECT * FROM posts")
    res.status(200).json(
      {allPosts,
      status: "sucess",
      message:"all posts"
    })
  } catch(err){
    res.send('An error occurred: ' + error)
  }

});

router.get('/:user_id', async (req, res) => {
  
  try{
    userID = req.params.user_id
    let allUserPosts = await db.any("SELECT * FROM posts WHERE poster_id = $1",[userID])
    res.status(200).json(
      {allUserPosts,
      status: "sucess",
      message:"Sending all post from this user!"
    })
  } catch(err){
    res.send('An error occurred: ' + error)
  }
});

router.post('/register', async (req, res) => {
  try{
    let allUserPosts = await db.one("INSERT INTO posts (poster_id, body) VALUES(${poster_id}, ${body}) RETURNING *", req.body)
    res.status(200).json(
      {allUserPosts,
      status: "sucess",
      message:"Creating new post!"
    })
  } catch(err){
    res.send('An error occurred: ' + error)
  }
});

module.exports = router;
