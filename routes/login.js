const express = require("express");
const router = express.Router();
const userDb = require("../data/helpers/userDb.js");
const bcrypt = require("bcryptjs");
const db = require("../data/dbConfig.js");

function checkIfUserNameExists(req, res, next) {
  console.log(req.body.username);
  userDb.getAllUsers()
    .then(users => {
      users.forEach(user => {
        if(user.username === req.body.username) {
          res.status(404).json({message: "User already exist."});
        }
      });
    });
  next();
}

router.get("/users", (req, res) => {
  userDb
    .getAllUsers()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});


router.get('/users/:id', (req, res) => {
  db.raw(`SELECT DISTINCT category.img, category.name, category.description FROM users INNER JOIN category ON users.id = ${req.params.id} WHERE users.rank1 = category.id`).then(rank1 => {
    db.raw(`SELECT DISTINCT category.img, category.name, category.description FROM users INNER JOIN category ON users.id = ${req.params.id} WHERE users.rank2 = category.id`).then(rank2 => {
      db.raw(`SELECT DISTINCT category.img, category.name, category.description FROM users INNER JOIN category ON users.id = ${req.params.id} WHERE users.rank3 = category.id`).then(rank3 => {
        db.raw(`SELECT DISTINCT category.img, category.name, category.description FROM users INNER JOIN category ON users.id = ${req.params.id} WHERE users.rank4 = category.id`).then(rank4 => {
          db.raw(`SELECT DISTINCT category.img, category.name, category.description FROM users INNER JOIN category ON users.id = ${req.params.id} WHERE users.rank5 = category.id`).then(rank5 => {
            db.raw(`SELECT DISTINCT category.img, category.name, category.description FROM users INNER JOIN category ON users.id = ${req.params.id} WHERE users.rank6 = category.id`).then(rank6 => {
              db.raw(`SELECT DISTINCT category.img, category.name, category.description FROM users INNER JOIN category ON users.id = ${req.params.id} WHERE users.rank7 = category.id`).then(rank7 => {
                db.raw(`SELECT DISTINCT category.img, category.name, category.description FROM users INNER JOIN category ON users.id = ${req.params.id} WHERE users.rank8 = category.id`).then(rank8 => {
                  db.raw(`SELECT DISTINCT category.img, category.name, category.description FROM users INNER JOIN category ON users.id = ${req.params.id} WHERE users.rank9 = category.id`).then(rank9 => {
                    res.status(200).json({rank1: rank1[0], rank2: rank2[0], rank3: rank3[0], rank4: rank4[0], rank5: rank5[0], rank6: rank6[0], rank7: rank7[0], rank8: rank8[0], rank9: rank9[0]})
                  }).catch(err => res.status(500).json(err))
                }).catch(err => res.status(500).json(err))
              }).catch(err => res.status(500).json(err))
            }).catch(err => res.status(500).json(err))
          }).catch(err => res.status(500).json(err))
        }).catch(err => res.status(500).json(err))
      }).catch(err => res.status(500).json(err))
    }).catch(err => res.status(500).json(err))
  }).catch(err => res.status(500).json(err));
});

router.post("/register", checkIfUserNameExists, (req, res) => {
  //Grab the username and password from the body
  const creds = req.body;
  // generate the hash from the users password
  const hash = bcrypt.hashSync(creds.password, 15);
  // override the user password with the hash
  creds.password = hash;
  // save the user to the userDb
  
  userDb
    .registerUser(creds)
    .then(ids => {
      const id = ids[0];
      req.session.username = creds.username;
      res.status(201).json({ newUserId: id });
    })
    .catch(err => res.json(err));
});

router.post("/login", (req, res) => {
  // Grab the username and password from body
  const creds = req.body;
  console.log(creds);
  userDb
    .loginUser(creds)
    .then(user => {
      if (user && bcrypt.compareSync(creds.password, user.password)) {
        req.session.username = user.username;
        // passwords match and the user exists by the username
        res.status(200).json({ message: "Thank you for signing in!", user: user });
      } else {
        // either username or password is invalid
        res.status(401).json({ message: "Please enter valid information!" });
      }
    })
    .catch(err => res.json(err));
});

router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.send("Unable to logout, try again");
      } else {
        res.send("You are logged out");
      }
    });
  }
});

router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  let { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 14);
  password = hashedPassword;
  const user = { username, password };
  userDb
    .updateUser(id, user)
    .then(ids => {
      console.log(ids);
      res.status(200).json(ids);
    })
    .catch(err => {
      res.status(500).json({ err, error: "Failed to update user" });
    });
});

router.delete("/delete/:id", (req, res) => {
  const userId = req.params.id;
  console.log(userId);
  userDb
    .deleteUser(userId)
    .then(count => {
      if (count === 1) {
        console.log(res);
        res.status(200).json(count);
      } else {
        res.status(404).json({ message: "User could not be found" });
      }
    })
    .catch(err => {
      res.status(500).json({ err, error: "Failed to delete user" });
    });
});

module.exports = router;

// Protected MWare
function protected(req, res, next) {
  if (req.session && req.session.username) {
    console.log("SESSION", req.session);
    next();
  } else {
    res.status(401).json("Unauthorized user");
  }
}