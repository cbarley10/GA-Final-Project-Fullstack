// env config
require("dotenv").config();
// require packages
const _ = require("lodash");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");

// require files
const { mongoose } = require("./db/mongoose");
const { Favorite } = require("./models/favorite");
const { User } = require("./models/user");
const { authenticate } = require("./middleware/authenticate");

// static variables
const app = express();
const PORT = process.env.PORT;

var corsOptions = {
  exposedHeaders: "x-auth"
};

// middleware
app.use(bodyParser.json());
app.use(cors(corsOptions));

// POST /favorites
app.post("/favorites", authenticate, (req, res) => {
  let favorite = new Favorite({
    species: req.body.species,
    status: req.body.status,
    name: req.body.name,
    image: req.body.image,
    starred: true,
    _creator: req.user._id
  });

  favorite.save().then(
    doc => {
      res.send(doc);
    },
    error => {
      res.status(400).send(error);
    }
  );
});

// GET /favorites
app.get("/favorites", authenticate, (req, res) => {
  Favorite.find({
    _creator: req.user._id
  }).then(
    favorite => {
      res.send({ favorite });
    },
    error => {
      res.status(400).send(error);
    }
  );
});

// DELETE /favorite/ID
app.delete("/favorite/:id", authenticate, (req, res) => {
  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Favorite.findOneAndDelete({
    _id: id,
    _creator: req.user._id
  })
    .then(favorite => {
      if (!favorite) {
        return res.status(404).send({});
      }
      res.send({ favorite });
    })
    .catch(err => {
      res.status(400).send({});
    });
});

// POST /user
app.post("/user", (req, res) => {
  let body = _.pick(req.body, ["email", "password", "firstname", "lastname"]);
  let user = new User(body);
  user
    .save()
    .then(() => {
      return user.generateAuthToken();
    })
    .then(token => {
      res.header("x-auth", token).send(user);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

// POST /user/login
app.post("/user/login", (req, res) => {
  let body = _.pick(req.body, ["email", "password"]);

  User.findByCredentials(body.email, body.password)
    .then(user => {
      return user.generateAuthToken().then(token => {
        res.header("x-auth", token).send(user);
      });
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

// private route
app.get("/user/me", authenticate, (req, res) => {
  res.send(req.user);
});

// DELETE token
app.delete("/users/me/token", authenticate, (req, res) => {
  req.user.removeToken(req.token).then(
    () => {
      res.status(200).send();
    },
    () => {
      res.status(400).send();
    }
  );
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

module.exports = { app };
